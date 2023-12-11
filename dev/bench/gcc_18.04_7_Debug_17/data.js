window.BENCHMARK_DATA = {
  "lastUpdate": 1702309473706,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 18.04 Debug c++-17": [
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
        "date": 1702084738029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15527.996016377483,
            "unit": "ns/iter",
            "extra": "iterations: 45185\ncpu: 15527.09306185681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130961.31317661551,
            "unit": "ns/iter",
            "extra": "iterations: 6466\ncpu: 130956.75842870396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 246659.631863438,
            "unit": "ns/iter",
            "extra": "iterations: 3515\ncpu: 246646.85633001418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 360522.56096546055,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 360506.9496462753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476155.54704595264,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 476135.94091903715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 587313.7254237247,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 587290.644067797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 565421.2719999804,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565404.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 655921.2136690646,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 655904.8920863305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 746304.1020242978,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 746281.700404858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12020.582800027838,
            "unit": "ns/iter",
            "extra": "iterations: 58128\ncpu: 12020.176162950736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9913.212826052899,
            "unit": "ns/iter",
            "extra": "iterations: 70809\ncpu: 9912.828877685022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9885.8600270698,
            "unit": "ns/iter",
            "extra": "iterations: 70928\ncpu: 9885.520527859242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9918.641073172172,
            "unit": "ns/iter",
            "extra": "iterations: 70669\ncpu: 9918.398449107806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16708.9856782008,
            "unit": "ns/iter",
            "extra": "iterations: 41964\ncpu: 16708.671718615944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50073.67079999767,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50071.74000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 270352.72571971035,
            "unit": "ns/iter",
            "extra": "iterations: 3161\ncpu: 270344.35305283125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 215019.0522331563,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 215008.85692657038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 214656.63643254625,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 214650.050530571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 210515.7160524354,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 210508.03858520903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 623228.984605084,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 623175.7697456497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3926281.434599141,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3926086.075949378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3209014.375862051,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3208909.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3251626.888111932,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3251490.559440553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3269884.989547035,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3269711.498257841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1844055.2644135274,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1843939.363817094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3126843.4410773856,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3126665.993265993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7588.510954193514,
            "unit": "ns/iter",
            "extra": "iterations: 92476\ncpu: 7588.1190795449575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73012.62312633861,
            "unit": "ns/iter",
            "extra": "iterations: 11675\ncpu: 73011.51177730184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140069.85512593953,
            "unit": "ns/iter",
            "extra": "iterations: 6233\ncpu: 140065.77891865876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206497.48374851196,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 206489.4661921706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270711.4348366885,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 270698.35147744865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 336452.2155572626,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 336437.2678018576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 401980.9102267399,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 401967.51503933134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469219.0827957039,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 469204.46236559004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 531710.7213717164,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 531689.2222902633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5466.884802448342,
            "unit": "ns/iter",
            "extra": "iterations: 128093\ncpu: 5466.789754319122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4491.951338857472,
            "unit": "ns/iter",
            "extra": "iterations: 155319\ncpu: 4491.828430520423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4512.46509258121,
            "unit": "ns/iter",
            "extra": "iterations: 155053\ncpu: 4512.255164363161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4619.266406390361,
            "unit": "ns/iter",
            "extra": "iterations: 155732\ncpu: 4618.9434412965875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7690.364892927217,
            "unit": "ns/iter",
            "extra": "iterations: 91013\ncpu: 7690.181622405639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31657.730251519468,
            "unit": "ns/iter",
            "extra": "iterations: 26002\ncpu: 31656.911006845698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133102.424441318,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 133098.34349117056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106651.82892924112,
            "unit": "ns/iter",
            "extra": "iterations: 7985\ncpu: 106649.88102692594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106399.53576349544,
            "unit": "ns/iter",
            "extra": "iterations: 7983\ncpu: 106397.49467618603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108252.51809064683,
            "unit": "ns/iter",
            "extra": "iterations: 7877\ncpu: 108249.71435825809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 286587.4058687912,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 286579.36036927137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2139490.402745998,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2139441.8764301934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1772381.5485713938,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1772296.76190477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1794148.7427466628,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1794106.7698259293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1792121.9691120016,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1792037.2586872503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1059995.3086560518,
            "unit": "ns/iter",
            "extra": "iterations: 878\ncpu: 1059969.8177676518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1723620.773234217,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1723548.6988847544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7637.176662058032,
            "unit": "ns/iter",
            "extra": "iterations: 91859\ncpu: 7634.297129296046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57272.1448999971,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57269.07999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105747.4573395584,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 105742.38996803587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 153411.91562611508,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 153405.79735997177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201862.92803911667,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 201857.07964601676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 249616.25590777074,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 249607.46397694474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 297814.1180698146,
            "unit": "ns/iter",
            "extra": "iterations: 2922\ncpu: 297806.0232717312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346943.6748709766,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 346931.83803096437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 393769.5477159637,
            "unit": "ns/iter",
            "extra": "iterations: 2211\ncpu: 393758.43509723875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6338.134155939231,
            "unit": "ns/iter",
            "extra": "iterations: 110543\ncpu: 6337.774440715353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5226.323927039996,
            "unit": "ns/iter",
            "extra": "iterations: 133882\ncpu: 5226.26641370759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5173.378712485537,
            "unit": "ns/iter",
            "extra": "iterations: 134849\ncpu: 5173.101024108428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5244.300619919815,
            "unit": "ns/iter",
            "extra": "iterations: 133727\ncpu: 5244.25583464821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8740.263115838878,
            "unit": "ns/iter",
            "extra": "iterations: 80094\ncpu: 8739.938072764475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26244.10450549096,
            "unit": "ns/iter",
            "extra": "iterations: 31051\ncpu: 26243.025989501486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135406.60079239472,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 135402.86846275727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106541.66260415422,
            "unit": "ns/iter",
            "extra": "iterations: 8041\ncpu: 106535.48066160857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105900.39310516133,
            "unit": "ns/iter",
            "extra": "iterations: 8064\ncpu: 105895.52331349265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101759.58106818744,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 101757.24845016775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 312481.58116773417,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 312472.7978400268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1795786.8249027121,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1795700.1945525105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1438403.0712074179,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1438377.2445820495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1447514.428348919,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1447446.4174454706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1436104.3446677327,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1436083.9258114363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793451.1620718362,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 793432.7485380066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1394477.846268735,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1394440.4477611845 ns\nthreads: 1"
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
        "date": 1702084738029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15527.996016377483,
            "unit": "ns/iter",
            "extra": "iterations: 45185\ncpu: 15527.09306185681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130961.31317661551,
            "unit": "ns/iter",
            "extra": "iterations: 6466\ncpu: 130956.75842870396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 246659.631863438,
            "unit": "ns/iter",
            "extra": "iterations: 3515\ncpu: 246646.85633001418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 360522.56096546055,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 360506.9496462753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476155.54704595264,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 476135.94091903715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 587313.7254237247,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 587290.644067797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 565421.2719999804,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565404.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 655921.2136690646,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 655904.8920863305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 746304.1020242978,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 746281.700404858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12020.582800027838,
            "unit": "ns/iter",
            "extra": "iterations: 58128\ncpu: 12020.176162950736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9913.212826052899,
            "unit": "ns/iter",
            "extra": "iterations: 70809\ncpu: 9912.828877685022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9885.8600270698,
            "unit": "ns/iter",
            "extra": "iterations: 70928\ncpu: 9885.520527859242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9918.641073172172,
            "unit": "ns/iter",
            "extra": "iterations: 70669\ncpu: 9918.398449107806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16708.9856782008,
            "unit": "ns/iter",
            "extra": "iterations: 41964\ncpu: 16708.671718615944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50073.67079999767,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50071.74000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 270352.72571971035,
            "unit": "ns/iter",
            "extra": "iterations: 3161\ncpu: 270344.35305283125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 215019.0522331563,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 215008.85692657038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 214656.63643254625,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 214650.050530571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 210515.7160524354,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 210508.03858520903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 623228.984605084,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 623175.7697456497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3926281.434599141,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3926086.075949378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3209014.375862051,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3208909.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3251626.888111932,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3251490.559440553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3269884.989547035,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3269711.498257841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1844055.2644135274,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1843939.363817094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3126843.4410773856,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3126665.993265993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7588.510954193514,
            "unit": "ns/iter",
            "extra": "iterations: 92476\ncpu: 7588.1190795449575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73012.62312633861,
            "unit": "ns/iter",
            "extra": "iterations: 11675\ncpu: 73011.51177730184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140069.85512593953,
            "unit": "ns/iter",
            "extra": "iterations: 6233\ncpu: 140065.77891865876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206497.48374851196,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 206489.4661921706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270711.4348366885,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 270698.35147744865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 336452.2155572626,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 336437.2678018576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 401980.9102267399,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 401967.51503933134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469219.0827957039,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 469204.46236559004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 531710.7213717164,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 531689.2222902633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5466.884802448342,
            "unit": "ns/iter",
            "extra": "iterations: 128093\ncpu: 5466.789754319122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4491.951338857472,
            "unit": "ns/iter",
            "extra": "iterations: 155319\ncpu: 4491.828430520423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4512.46509258121,
            "unit": "ns/iter",
            "extra": "iterations: 155053\ncpu: 4512.255164363161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4619.266406390361,
            "unit": "ns/iter",
            "extra": "iterations: 155732\ncpu: 4618.9434412965875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7690.364892927217,
            "unit": "ns/iter",
            "extra": "iterations: 91013\ncpu: 7690.181622405639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31657.730251519468,
            "unit": "ns/iter",
            "extra": "iterations: 26002\ncpu: 31656.911006845698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133102.424441318,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 133098.34349117056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106651.82892924112,
            "unit": "ns/iter",
            "extra": "iterations: 7985\ncpu: 106649.88102692594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106399.53576349544,
            "unit": "ns/iter",
            "extra": "iterations: 7983\ncpu: 106397.49467618603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108252.51809064683,
            "unit": "ns/iter",
            "extra": "iterations: 7877\ncpu: 108249.71435825809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 286587.4058687912,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 286579.36036927137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2139490.402745998,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2139441.8764301934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1772381.5485713938,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1772296.76190477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1794148.7427466628,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1794106.7698259293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1792121.9691120016,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1792037.2586872503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1059995.3086560518,
            "unit": "ns/iter",
            "extra": "iterations: 878\ncpu: 1059969.8177676518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1723620.773234217,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1723548.6988847544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7637.176662058032,
            "unit": "ns/iter",
            "extra": "iterations: 91859\ncpu: 7634.297129296046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57272.1448999971,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57269.07999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105747.4573395584,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 105742.38996803587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 153411.91562611508,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 153405.79735997177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201862.92803911667,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 201857.07964601676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 249616.25590777074,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 249607.46397694474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 297814.1180698146,
            "unit": "ns/iter",
            "extra": "iterations: 2922\ncpu: 297806.0232717312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346943.6748709766,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 346931.83803096437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 393769.5477159637,
            "unit": "ns/iter",
            "extra": "iterations: 2211\ncpu: 393758.43509723875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6338.134155939231,
            "unit": "ns/iter",
            "extra": "iterations: 110543\ncpu: 6337.774440715353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5226.323927039996,
            "unit": "ns/iter",
            "extra": "iterations: 133882\ncpu: 5226.26641370759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5173.378712485537,
            "unit": "ns/iter",
            "extra": "iterations: 134849\ncpu: 5173.101024108428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5244.300619919815,
            "unit": "ns/iter",
            "extra": "iterations: 133727\ncpu: 5244.25583464821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8740.263115838878,
            "unit": "ns/iter",
            "extra": "iterations: 80094\ncpu: 8739.938072764475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26244.10450549096,
            "unit": "ns/iter",
            "extra": "iterations: 31051\ncpu: 26243.025989501486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135406.60079239472,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 135402.86846275727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106541.66260415422,
            "unit": "ns/iter",
            "extra": "iterations: 8041\ncpu: 106535.48066160857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105900.39310516133,
            "unit": "ns/iter",
            "extra": "iterations: 8064\ncpu: 105895.52331349265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101759.58106818744,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 101757.24845016775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 312481.58116773417,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 312472.7978400268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1795786.8249027121,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1795700.1945525105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1438403.0712074179,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1438377.2445820495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1447514.428348919,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1447446.4174454706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1436104.3446677327,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1436083.9258114363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793451.1620718362,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 793432.7485380066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1394477.846268735,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1394440.4477611845 ns\nthreads: 1"
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
        "date": 1702084964457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15577.466525642865,
            "unit": "ns/iter",
            "extra": "iterations: 44437\ncpu: 15576.328284987738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130977.25327982666,
            "unit": "ns/iter",
            "extra": "iterations: 6479\ncpu: 130970.7207902454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 248023.68475157238,
            "unit": "ns/iter",
            "extra": "iterations: 3502\ncpu: 248009.48029697323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 363321.8005865125,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 363304.8596564726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 478070.2908191356,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 478053.2160527764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 593092.1679180884,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 593058.9078498294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 570813.5110000115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570786.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 659134.6146059345,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 659105.2060737524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 760983.8329258473,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 760942.3797881012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12014.49040748635,
            "unit": "ns/iter",
            "extra": "iterations: 57597\ncpu: 12014.50422765075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9940.7422142622,
            "unit": "ns/iter",
            "extra": "iterations: 70353\ncpu: 9940.063678876522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9917.575845999216,
            "unit": "ns/iter",
            "extra": "iterations: 70597\ncpu: 9916.956811195922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10093.372819338128,
            "unit": "ns/iter",
            "extra": "iterations: 69417\ncpu: 10092.814440266784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16772.506276251406,
            "unit": "ns/iter",
            "extra": "iterations: 41665\ncpu: 16771.57566302653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50705.32819999869,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50705.48000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 271899.3770122313,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 271879.3947198974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 214923.83248731162,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 214913.73096446725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 214475.1775207488,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 214459.8189590148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 216069.2858590939,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 216055.82868727823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 612062.0319076562,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 612026.0013577748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4136554.3589743464,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4135964.102564109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3285896.8776223836,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3285874.125874125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3253450.16083921,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3253298.251748253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3262554.23928572,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3261909.6428571427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1868148.7947685765,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1868065.3923541228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3152004.71864402,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3151775.5932203494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7412.396575335368,
            "unit": "ns/iter",
            "extra": "iterations: 94199\ncpu: 7412.262338241387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73002.6741841786,
            "unit": "ns/iter",
            "extra": "iterations: 11706\ncpu: 72997.88142832731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140934.86146700734,
            "unit": "ns/iter",
            "extra": "iterations: 6244\ncpu: 140926.00896860982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 207460.39013881842,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 207444.13595021516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 276000.8530059816,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 275989.0462700654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340257.15559031063,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 340229.94526974065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 406453.49765698786,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 406432.0993439548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 470949.14718615235,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 470943.2900432912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 536535.4085027773,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 536493.407270488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5531.077864091622,
            "unit": "ns/iter",
            "extra": "iterations: 126541\ncpu: 5530.949652681774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4517.127125485157,
            "unit": "ns/iter",
            "extra": "iterations: 154847\ncpu: 4516.809495824924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4515.053135456,
            "unit": "ns/iter",
            "extra": "iterations: 155113\ncpu: 4514.746668557764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4489.458008219428,
            "unit": "ns/iter",
            "extra": "iterations: 155971\ncpu: 4489.126824858464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7726.472055172303,
            "unit": "ns/iter",
            "extra": "iterations: 90625\ncpu: 7726.000551724139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31765.283803061157,
            "unit": "ns/iter",
            "extra": "iterations: 25937\ncpu: 31763.09904769242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133568.35013345498,
            "unit": "ns/iter",
            "extra": "iterations: 6369\ncpu: 133561.18699952922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107648.30846212254,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 107640.37243476088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107490.13462023677,
            "unit": "ns/iter",
            "extra": "iterations: 7926\ncpu: 107484.58238708013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110450.9052563238,
            "unit": "ns/iter",
            "extra": "iterations: 7705\ncpu: 110442.85528877325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 288286.5094464702,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 288275.7043420616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2165036.7893518913,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2164843.287037045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1807898.7887596614,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1807793.7984496064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1788454.9710424815,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1788337.0656370663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1793773.9288461567,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1793632.8846153799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1052420.0747451906,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 1052376.5571913929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1734317.7439252308,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1734266.5420560788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7785.226287066242,
            "unit": "ns/iter",
            "extra": "iterations: 89603\ncpu: 7784.742698347109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57571.9700999997,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57568.080000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105676.21544715631,
            "unit": "ns/iter",
            "extra": "iterations: 8118\ncpu: 105665.42251786093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154352.50572655752,
            "unit": "ns/iter",
            "extra": "iterations: 5588\ncpu: 154344.91768074536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 202052.96105410182,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 202044.05317164195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 250442.88121387226,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 250431.15606936582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 298023.46737637644,
            "unit": "ns/iter",
            "extra": "iterations: 2912\ncpu: 298011.0233516476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 347416.95378485986,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 347402.1115537847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 395021.12771739566,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 395022.0561594178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6282.188096177324,
            "unit": "ns/iter",
            "extra": "iterations: 111544\ncpu: 6281.8546941118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5233.182348236185,
            "unit": "ns/iter",
            "extra": "iterations: 133777\ncpu: 5232.870373831045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5273.551142840148,
            "unit": "ns/iter",
            "extra": "iterations: 133352\ncpu: 5273.34048233256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5289.209688922667,
            "unit": "ns/iter",
            "extra": "iterations: 131800\ncpu: 5289.220789074441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8902.667785277708,
            "unit": "ns/iter",
            "extra": "iterations: 78967\ncpu: 8902.680866691151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26631.323803019055,
            "unit": "ns/iter",
            "extra": "iterations: 30744\ncpu: 26631.079234972553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138427.09610139506,
            "unit": "ns/iter",
            "extra": "iterations: 6233\ncpu: 138420.6481630038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108025.33036544854,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 108025.5681063117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108097.35404825142,
            "unit": "ns/iter",
            "extra": "iterations: 7917\ncpu: 108093.01503094687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 103634.90971039308,
            "unit": "ns/iter",
            "extra": "iterations: 8218\ncpu: 103635.1058651742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 320773.9134948054,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 320759.7577854693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1819686.15625,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1819666.0156249988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1457488.5438871498,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1457426.4890282096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1453194.040624961,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1453147.9687500014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1463152.937106933,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463102.5157232692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 798144.6968131114,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 798131.9552110273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1400027.0166163011,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1399979.154078564 ns\nthreads: 1"
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
        "date": 1702085574559,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15796.89942684341,
            "unit": "ns/iter",
            "extra": "iterations: 44316\ncpu: 15795.708096398595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 138869.81916437802,
            "unit": "ns/iter",
            "extra": "iterations: 6199\ncpu: 138860.28391676076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 258328.8069601449,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 258316.68649613325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 379313.97031457885,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 378464.687638458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 510004.97823597543,
            "unit": "ns/iter",
            "extra": "iterations: 1746\ncpu: 509988.02978235966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 626643.5596590741,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 626606.5340909091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 595205.290999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595196.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 688922.5210843673,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 688898.7951807232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 785972.7585324318,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 785940.273037543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12219.477989728744,
            "unit": "ns/iter",
            "extra": "iterations: 57246\ncpu: 12218.727946057354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10603.344375352208,
            "unit": "ns/iter",
            "extra": "iterations: 69311\ncpu: 10602.55514997619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10025.218525045282,
            "unit": "ns/iter",
            "extra": "iterations: 66958\ncpu: 10024.739388870623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10071.039656435114,
            "unit": "ns/iter",
            "extra": "iterations: 69623\ncpu: 10070.537035175154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16993.663094717547,
            "unit": "ns/iter",
            "extra": "iterations: 41154\ncpu: 16993.164698449724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50024.309299999455,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50022.01000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 272742.1467478228,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 272731.5603973084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 217391.21536492024,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 217380.99871958996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 216439.2124235513,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 216430.3186353385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 215414.80793691557,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 215410.9386924447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 604079.9966397557,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 604068.0107526891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4045223.5521738464,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4045002.1739130407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3380504.784452323,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3380481.978798596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3298064.180851125,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3297850.7092198567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3301092.4999999953,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3300943.6170212743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1881507.8316429227,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1881438.5395537554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3185852.116838489,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3185615.8075601324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7456.57840630676,
            "unit": "ns/iter",
            "extra": "iterations: 93870\ncpu: 7456.424842867783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76613.79436898715,
            "unit": "ns/iter",
            "extra": "iterations: 11117\ncpu: 76612.6562921651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 147360.6234071057,
            "unit": "ns/iter",
            "extra": "iterations: 5964\ncpu: 147353.72233400427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 216736.16479401334,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 216725.14357053736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 286286.6412364316,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 286259.61854653066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 355630.4184221269,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 355607.10450227157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 426870.5857002944,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 426847.45347698376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 494190.9449176873,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 494168.4838160139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 562921.9740932848,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 562914.1839378211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5444.583411714265,
            "unit": "ns/iter",
            "extra": "iterations: 128645\ncpu: 5444.430020599276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4484.205948059859,
            "unit": "ns/iter",
            "extra": "iterations: 156219\ncpu: 4483.949455571972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4484.013490908963,
            "unit": "ns/iter",
            "extra": "iterations: 156031\ncpu: 4484.008306041721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4470.784748837484,
            "unit": "ns/iter",
            "extra": "iterations: 156552\ncpu: 4470.482651131896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7726.997496596276,
            "unit": "ns/iter",
            "extra": "iterations: 91076\ncpu: 7726.562431375987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31507.49371153532,
            "unit": "ns/iter",
            "extra": "iterations: 26159\ncpu: 31505.409228181623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133427.3069760133,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 133420.5492424251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107428.88933804918,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 107422.35977766613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105873.95842668717,
            "unit": "ns/iter",
            "extra": "iterations: 8034\ncpu: 105870.63729151104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108418.25289845723,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 108413.44120270136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281184.38110643334,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 281173.8595923632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2172247.4139535334,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2172104.8837209307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1805736.2959381107,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1805687.2340425476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1806532.1121856319,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1806441.1992263151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1796252.351351373,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1796171.8146718116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1070119.805970195,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1070067.2789896699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1732412.2355140075,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1732317.7570093533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7907.9195251405135,
            "unit": "ns/iter",
            "extra": "iterations: 88363\ncpu: 7907.525774362581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59032.15879999947,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59029.61999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108544.4488248665,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 108538.4887541065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 157831.4361273707,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 157824.92679355756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 206641.4656160535,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 206629.72779369642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 256755.60106699434,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 256748.48844101964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 306779.27815036126,
            "unit": "ns/iter",
            "extra": "iterations: 2833\ncpu: 306744.3699258715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 358011.24734260165,
            "unit": "ns/iter",
            "extra": "iterations: 2446\ncpu: 357989.7792313997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406397.47547874035,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 406371.4619336744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6383.03954961381,
            "unit": "ns/iter",
            "extra": "iterations: 110039\ncpu: 6379.813520660875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5277.87607252902,
            "unit": "ns/iter",
            "extra": "iterations: 132747\ncpu: 5277.682358169969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5235.868875983651,
            "unit": "ns/iter",
            "extra": "iterations: 133797\ncpu: 5235.705583832193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5255.928305603191,
            "unit": "ns/iter",
            "extra": "iterations: 133009\ncpu: 5255.69698291094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8956.87775694307,
            "unit": "ns/iter",
            "extra": "iterations: 78393\ncpu: 8956.469327618674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26331.530787343523,
            "unit": "ns/iter",
            "extra": "iterations: 31003\ncpu: 26330.77444118312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136529.5496730996,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 136512.3425291017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107853.1078518138,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 107850.56265014534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108175.7510473486,
            "unit": "ns/iter",
            "extra": "iterations: 7877\ncpu: 108173.30201853401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105711.89943027151,
            "unit": "ns/iter",
            "extra": "iterations: 8074\ncpu: 105709.33861778455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 317637.1555097949,
            "unit": "ns/iter",
            "extra": "iterations: 2913\ncpu: 317630.03776175797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1833135.3806706246,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1833044.1814595594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1451903.198437421,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1451837.9687500137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1453007.827586264,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1452957.2100313487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1456509.9122257072,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1456457.680250785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 796076.931955239,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 796044.961240306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1402892.1984961762,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1402820.7518797067 ns\nthreads: 1"
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
        "date": 1702244218966,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17392.65098302784,
            "unit": "ns/iter",
            "extra": "iterations: 41657\ncpu: 17391.862112009985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157186.73502046624,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 157182.91775213997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 295558.3697705811,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 295549.1228070175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 435284.31539611315,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 435266.3178873943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 585914.019230786,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 585877.0557029177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 581803.8660000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581800.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 685729.9453471133,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 685684.1211225999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 803567.8510998414,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 803513.3671742807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 905266.9778633299,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 905245.9095283932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12951.027623385162,
            "unit": "ns/iter",
            "extra": "iterations: 53795\ncpu: 12950.83557951484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10855.032214479665,
            "unit": "ns/iter",
            "extra": "iterations: 65871\ncpu: 10854.834449150629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10610.622987865077,
            "unit": "ns/iter",
            "extra": "iterations: 64608\ncpu: 10610.543585933621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10833.964108987484,
            "unit": "ns/iter",
            "extra": "iterations: 64668\ncpu: 10833.77095317624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17968.851239245367,
            "unit": "ns/iter",
            "extra": "iterations: 38935\ncpu: 17968.170026968022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68312.68212545197,
            "unit": "ns/iter",
            "extra": "iterations: 12722\ncpu: 68309.2123879893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 362072.1161808166,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 362066.2441909588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 297209.73017988075,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 297193.83744170604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 277110.1753118838,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 277095.1411687458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 275914.20129449805,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 275898.57605178026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 576738.0119999928,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576727.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4766443.9381443,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4766146.907216501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4095380.806722604,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 4095122.689075624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3789518.9918033136,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3789322.9508196777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3843150.4874999686,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3842954.5833333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2232643.111904798,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2232489.04761905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8435.15019073555,
            "unit": "ns/iter",
            "extra": "iterations: 82575\ncpu: 8434.795034816862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99795.63863183981,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 99793.030338526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 191705.94157999769,
            "unit": "ns/iter",
            "extra": "iterations: 4519\ncpu: 191700.77450763434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283573.64988482627,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 283554.32708127645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375903.99326316064,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 375880.1684210527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469160.3775510156,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 469140.9774436113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 552604.6277139132,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 552577.2030651328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 519426.3159999935,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519382.7000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 592955.9619999907,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592902.0000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6494.771772110251,
            "unit": "ns/iter",
            "extra": "iterations: 106455\ncpu: 6494.648443004096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5476.295843841373,
            "unit": "ns/iter",
            "extra": "iterations: 129663\ncpu: 5476.005491157858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5374.667436168697,
            "unit": "ns/iter",
            "extra": "iterations: 129521\ncpu: 5374.454335590363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5372.961894468644,
            "unit": "ns/iter",
            "extra": "iterations: 129535\ncpu: 5372.889952522451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9271.801249154614,
            "unit": "ns/iter",
            "extra": "iterations: 75411\ncpu: 9271.626155335432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50378.427815294366,
            "unit": "ns/iter",
            "extra": "iterations: 16437\ncpu: 50377.343797529786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 219210.18037335915,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 219203.7083753787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 177260.69801571016,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 177256.24224886362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 171163.97885196554,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 171158.8318227596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174306.93652053538,
            "unit": "ns/iter",
            "extra": "iterations: 5041\ncpu: 174302.69787740434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 403142.2544378686,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 403124.03277196165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3059408.6201298456,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3059353.571428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2509581.2872628937,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2509507.8590785926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2461562.506596313,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2461407.3878627922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2484945.6203208533,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2484786.898395715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1461473.9533762156,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1461378.4565916362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2429110.5050504557,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2429003.030303042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7658.966168353914,
            "unit": "ns/iter",
            "extra": "iterations: 89502\ncpu: 7658.284731067422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55872.77070000028,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55870.85000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104224.85626059666,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 104217.0259142654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149248.14385718867,
            "unit": "ns/iter",
            "extra": "iterations: 5714\ncpu: 149238.99194959708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197221.62860386097,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 197205.7888762763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 244627.90896200176,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 244611.4010209855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290105.7237998688,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 290100.67613252276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 339321.2922957761,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 339310.80139372824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 384256.00398758246,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 384244.0850686769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6053.341812250664,
            "unit": "ns/iter",
            "extra": "iterations: 116485\ncpu: 6052.98107052409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4989.799438129368,
            "unit": "ns/iter",
            "extra": "iterations: 138466\ncpu: 4989.629223058369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4960.688625266621,
            "unit": "ns/iter",
            "extra": "iterations: 138245\ncpu: 4960.2958515678665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4994.147518096367,
            "unit": "ns/iter",
            "extra": "iterations: 139671\ncpu: 4993.866300090924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8553.483484991297,
            "unit": "ns/iter",
            "extra": "iterations: 81653\ncpu: 8552.631256659226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28511.039957977275,
            "unit": "ns/iter",
            "extra": "iterations: 28555\ncpu: 28509.725091928252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136438.05913725196,
            "unit": "ns/iter",
            "extra": "iterations: 6375\ncpu: 136429.14509803936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105863.0364745435,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 105856.42972737379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108012.1143613711,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 108003.42958012794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102382.36310891053,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 102375.05137193363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326666.2433769051,
            "unit": "ns/iter",
            "extra": "iterations: 2831\ncpu: 326644.43659484334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1743733.5149253174,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1743658.5820895536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1386835.1669150623,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1386718.4798807614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1380386.3774145264,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1380335.0668647904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1347027.3731563068,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1346879.0560471993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 752214.9876339714,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 752174.2786479803 ns\nthreads: 1"
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
        "date": 1702285094110,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16454.758464514263,
            "unit": "ns/iter",
            "extra": "iterations: 40847\ncpu: 16454.58173182853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157130.91998518258,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 157119.9481385442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 301489.3213429183,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 301469.4415895855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 433301.27040561516,
            "unit": "ns/iter",
            "extra": "iterations: 1997\ncpu: 433284.576865298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 577432.1152073967,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 577404.8057932855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 578532.733999964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578520.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 690070.6923652946,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 690069.0868263472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 803608.8634782631,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 803604.2608695644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 910710.2350049035,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 910708.6529006878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13322.70529368272,
            "unit": "ns/iter",
            "extra": "iterations: 52761\ncpu: 13321.885483595835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10934.634732033013,
            "unit": "ns/iter",
            "extra": "iterations: 64131\ncpu: 10934.530882100698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10829.992464634286,
            "unit": "ns/iter",
            "extra": "iterations: 64894\ncpu: 10829.842512404872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10850.884472885979,
            "unit": "ns/iter",
            "extra": "iterations: 65318\ncpu: 10850.111760923488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18226.99929619669,
            "unit": "ns/iter",
            "extra": "iterations: 38363\ncpu: 18225.503740583375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68360.48546184688,
            "unit": "ns/iter",
            "extra": "iterations: 12450\ncpu: 68356.52208835342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 352576.8970345746,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 352552.924217463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 282987.8488564897,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 282971.9920450781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 291623.0433070938,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 291607.3818897643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 279916.76252865617,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 279912.2502456607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 568054.1129999597,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568061.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4797430.891752771,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4797303.608247431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3910825.4453781075,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3910847.0588235273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3905422.3568464234,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3905386.721991711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3867075.327800875,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3866992.116182573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2264836.553658464,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2264716.585365854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8438.616286123413,
            "unit": "ns/iter",
            "extra": "iterations: 82426\ncpu: 8437.852134035398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99311.43658507973,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 99306.0311511886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193498.4296703338,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 193486.4615384616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283441.5686274587,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 283425.06535947777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373996.6082073435,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 373978.0993520521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465476.1195069536,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 465442.1757770612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 557919.2773162945,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 557889.073482429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520536.4489999624,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520493.99999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 592736.9700000327,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592719.7999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6628.7260041005875,
            "unit": "ns/iter",
            "extra": "iterations: 105841\ncpu: 6628.230080970495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5591.648178019573,
            "unit": "ns/iter",
            "extra": "iterations: 127087\ncpu: 5591.243793621738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5370.937752447623,
            "unit": "ns/iter",
            "extra": "iterations: 130720\ncpu: 5358.191554467551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5452.723320127097,
            "unit": "ns/iter",
            "extra": "iterations: 128224\ncpu: 5452.607156226593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9219.165443558459,
            "unit": "ns/iter",
            "extra": "iterations: 75627\ncpu: 9218.263318656074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51048.91021289455,
            "unit": "ns/iter",
            "extra": "iterations: 16205\ncpu: 51047.880283863225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 219033.04561581387,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 219029.6249366448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 176138.7380854639,
            "unit": "ns/iter",
            "extra": "iterations: 4868\ncpu: 176137.92111750145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 173414.1842158704,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 173411.6656522621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174648.29857142284,
            "unit": "ns/iter",
            "extra": "iterations: 4900\ncpu: 174645.99999999913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 394731.5386012699,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 394709.9000908254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3027780.464285592,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3027582.467532469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2524305.5606469195,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2524137.4663072643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2450670.7742782817,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2450547.7690288774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2514467.471999978,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2514310.1333333487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1502250.7038835573,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1502199.8381877008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2421806.992167004,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2421743.603133159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7822.545541254389,
            "unit": "ns/iter",
            "extra": "iterations: 91214\ncpu: 7822.3496393097785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55753.12810000241,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55749.95000000059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101837.8430163666,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 101831.61014939524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146976.47677595896,
            "unit": "ns/iter",
            "extra": "iterations: 5856\ncpu: 146968.1864754109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194285.5078264792,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 194276.0957066197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241884.38048916962,
            "unit": "ns/iter",
            "extra": "iterations: 3598\ncpu: 241869.70539188478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287221.2162251585,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 287183.245033113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 333076.11382735067,
            "unit": "ns/iter",
            "extra": "iterations: 2618\ncpu: 333067.4942704349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380412.39458752377,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 380389.8734177233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6282.836425698051,
            "unit": "ns/iter",
            "extra": "iterations: 111619\ncpu: 6282.555837267818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5094.8166909208785,
            "unit": "ns/iter",
            "extra": "iterations: 132623\ncpu: 5094.458728878105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5095.106833207728,
            "unit": "ns/iter",
            "extra": "iterations: 137944\ncpu: 5094.838485182416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5085.540265566986,
            "unit": "ns/iter",
            "extra": "iterations: 138195\ncpu: 5085.437968088573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8537.316890663102,
            "unit": "ns/iter",
            "extra": "iterations: 81921\ncpu: 8537.213901197489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28834.75468297179,
            "unit": "ns/iter",
            "extra": "iterations: 28294\ncpu: 28835.155863434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135871.48595146707,
            "unit": "ns/iter",
            "extra": "iterations: 6264\ncpu: 135870.76947637324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106129.07801418126,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 106128.80428020479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105840.34067986479,
            "unit": "ns/iter",
            "extra": "iterations: 8031\ncpu: 105840.84173826248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100973.40149537766,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 100974.7567054354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326837.40063649276,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 326836.13861386175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1781694.3390805006,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1781574.5210727993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1423924.6109422045,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1423917.3252279533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1403608.7560606003,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1403536.6666666658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1388870.8358209312,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1388789.2537313313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 764841.8358085413,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 764788.7788778875 ns\nthreads: 1"
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
        "date": 1702309473261,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16859.736589464184,
            "unit": "ns/iter",
            "extra": "iterations: 41665\ncpu: 16858.816752670107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 160812.70804555173,
            "unit": "ns/iter",
            "extra": "iterations: 5357\ncpu: 160802.53873436624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 304188.9941115387,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 304168.9989608591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 442179.3452320338,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 442146.1499235084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 591795.2134228051,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 591754.0268456376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 592092.330000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592089.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 706145.6088617195,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 706109.7784568375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 821654.9533039602,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 821594.3612334805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 968693.7279116663,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 968645.1807228912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13383.67977700291,
            "unit": "ns/iter",
            "extra": "iterations: 52198\ncpu: 13383.259895015133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11120.714930831635,
            "unit": "ns/iter",
            "extra": "iterations: 62890\ncpu: 11120.052472571166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11161.963122780715,
            "unit": "ns/iter",
            "extra": "iterations: 62803\ncpu: 11161.162683311304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11120.004162546571,
            "unit": "ns/iter",
            "extra": "iterations: 62702\ncpu: 11119.23543108673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19256.08844554367,
            "unit": "ns/iter",
            "extra": "iterations: 36791\ncpu: 19254.959093256508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69005.24150730274,
            "unit": "ns/iter",
            "extra": "iterations: 12393\ncpu: 69001.3394658275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 355323.7877397883,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 355298.74895746476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 282807.4524514617,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 282792.79368213256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 280220.2673007576,
            "unit": "ns/iter",
            "extra": "iterations: 3049\ncpu: 280204.16530009767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 291872.40194804926,
            "unit": "ns/iter",
            "extra": "iterations: 3080\ncpu: 291773.05194805213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 608279.0480000142,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608255.500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4939019.513227459,
            "unit": "ns/iter",
            "extra": "iterations: 189\ncpu: 4938839.682539674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4019488.482758651,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4019198.2758620684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4038899.7826086194,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4038810.434782601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4030353.4415584947,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4030251.515151517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2302599.866336654,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2302454.950495057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8877.448576401597,
            "unit": "ns/iter",
            "extra": "iterations: 78709\ncpu: 8877.282140543015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 101182.38264883298,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 101179.44135400614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 195582.51432378337,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 195576.5933821897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 288899.3853302393,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 288887.35479588556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 382626.1956809192,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382619.1714411626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 475237.5152838292,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 475210.9716157214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 568272.1542483686,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 568257.9084967355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 532096.5460000195,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532082.7999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 607636.8800000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607612.5999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6769.717803396643,
            "unit": "ns/iter",
            "extra": "iterations: 103396\ncpu: 6769.324732097928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5689.439465887548,
            "unit": "ns/iter",
            "extra": "iterations: 123195\ncpu: 5689.148098542951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5609.586644565198,
            "unit": "ns/iter",
            "extra": "iterations: 124878\ncpu: 5609.548519354883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5627.037251761713,
            "unit": "ns/iter",
            "extra": "iterations: 124880\ncpu: 5626.715246636779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9848.86704795171,
            "unit": "ns/iter",
            "extra": "iterations: 70988\ncpu: 9848.56172874289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51377.72175368919,
            "unit": "ns/iter",
            "extra": "iterations: 16126\ncpu: 51373.620240605305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216063.46649937614,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 216057.39021329986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172134.21148825105,
            "unit": "ns/iter",
            "extra": "iterations: 4979\ncpu: 172123.779875477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 171503.43422631145,
            "unit": "ns/iter",
            "extra": "iterations: 5002\ncpu: 171498.7005197916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 171452.19931891395,
            "unit": "ns/iter",
            "extra": "iterations: 4992\ncpu: 171442.04727564094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 429930.1581809245,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 429905.7834898674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3096201.478114429,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3095920.5387205346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2551465.0247933357,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2551297.2451790655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2560048.5879120897,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2559921.703296709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2553602.812154714,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2553427.3480663034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1507890.5355987048,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1507810.679611648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2470087.776595709,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2469912.4999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7685.616271670328,
            "unit": "ns/iter",
            "extra": "iterations: 91140\ncpu: 7685.032916392373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56067.73630000248,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56065.86999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103645.30612245073,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 103640.7317956768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 150231.8203874993,
            "unit": "ns/iter",
            "extra": "iterations: 5729\ncpu: 150225.27491708787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 199491.78411968306,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 199482.8078250864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 246886.9411596575,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 246879.09168808907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 295107.25482887425,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 295100.06777363527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 342325.59370077593,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 342305.787401575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 390439.74027716817,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 390425.5252570399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6380.289470095655,
            "unit": "ns/iter",
            "extra": "iterations: 110001\ncpu: 6379.8610921719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5274.711151819364,
            "unit": "ns/iter",
            "extra": "iterations: 133198\ncpu: 5274.564933407421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5324.618556779281,
            "unit": "ns/iter",
            "extra": "iterations: 131650\ncpu: 5324.482339536683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5308.626160708997,
            "unit": "ns/iter",
            "extra": "iterations: 131816\ncpu: 5308.396552770581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9047.534402129117,
            "unit": "ns/iter",
            "extra": "iterations: 77408\ncpu: 9047.199255890855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29049.82286265991,
            "unit": "ns/iter",
            "extra": "iterations: 27967\ncpu: 29048.349840883806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139033.50658002193,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 139029.43948009625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107050.3510398384,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 107044.48759709402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106526.54305127022,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 106481.65534280446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102182.42493702479,
            "unit": "ns/iter",
            "extra": "iterations: 7940\ncpu: 102174.88664987474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 333163.48458469915,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 333150.4171200559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1846547.8862276042,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1846430.1397205554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1473435.7480190857,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1473394.294770217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1473994.7902208238,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1473954.4164037828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1465861.4811321406,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1465838.6792452824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 787523.0161427561,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 787476.720475785 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}