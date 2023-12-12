window.BENCHMARK_DATA = {
  "lastUpdate": 1702347581591,
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
        "date": 1702310479204,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17339.40392986523,
            "unit": "ns/iter",
            "extra": "iterations: 41121\ncpu: 17338.593419420737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 160296.3458689471,
            "unit": "ns/iter",
            "extra": "iterations: 5265\ncpu: 160295.1566951567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 303295.1035689278,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 303296.95591322606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 444317.9784394269,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 444317.1971252568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 594979.257759781,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 594969.7031039136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 611955.9040000127,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611953.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 709406.3564280398,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 709395.8429561197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 827985.4862466762,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 827971.1623779953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 937625.0628166192,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 937617.8318135752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13537.584083996539,
            "unit": "ns/iter",
            "extra": "iterations: 51621\ncpu: 13537.180604792644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11280.838536201312,
            "unit": "ns/iter",
            "extra": "iterations: 60992\ncpu: 11280.92044858343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11212.278846153431,
            "unit": "ns/iter",
            "extra": "iterations: 59904\ncpu: 11212.221220619664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11260.298058719834,
            "unit": "ns/iter",
            "extra": "iterations: 62330\ncpu: 11260.154018931491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19375.322707400093,
            "unit": "ns/iter",
            "extra": "iterations: 36138\ncpu: 19375.258730422276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68982.11803199326,
            "unit": "ns/iter",
            "extra": "iterations: 12378\ncpu: 68981.91953465836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 365994.09635973733,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 365993.5760171313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 293232.00067384844,
            "unit": "ns/iter",
            "extra": "iterations: 2968\ncpu: 293224.2587601077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 287787.35793730663,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 287786.82170542725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284128.5660126347,
            "unit": "ns/iter",
            "extra": "iterations: 3007\ncpu: 284130.5287662114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 599230.385999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599228.5000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4967671.080213917,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4967634.224598934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4083357.7248908686,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4083312.227074234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4059776.462882042,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4059758.51528384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4037293.6320345793,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4037208.2251082268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2322834.3239074997,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2322830.8483290523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8947.711197876928,
            "unit": "ns/iter",
            "extra": "iterations: 78372\ncpu: 8947.676466084808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 103090.37380038314,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 103087.50000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 199041.66363842727,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 199036.47513059244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 293937.5509996614,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 293934.733988478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 388580.71447721316,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 388582.9758713148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 482681.4641068317,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 482676.8503060643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 574513.5930079126,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 574511.6754617416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 537336.4090000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537331.2999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 613706.9389999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613710.6999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6814.762863622237,
            "unit": "ns/iter",
            "extra": "iterations: 102304\ncpu: 6814.730606818885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5651.611798379626,
            "unit": "ns/iter",
            "extra": "iterations: 123678\ncpu: 5651.545141415631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5650.831578182966,
            "unit": "ns/iter",
            "extra": "iterations: 123921\ncpu: 5650.867891640641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5683.304864139051,
            "unit": "ns/iter",
            "extra": "iterations: 123619\ncpu: 5683.341557527539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9940.80889616385,
            "unit": "ns/iter",
            "extra": "iterations: 70255\ncpu: 9940.86968899011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51186.02958506543,
            "unit": "ns/iter",
            "extra": "iterations: 16123\ncpu: 51185.61682069067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 223564.2419901036,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 223560.64079187214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 177189.38771274043,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 177187.67123287727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 176831.17088344911,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 176831.21111571975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179379.48215035273,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 179379.18941621153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 423169.7060827245,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 423168.17518248246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3114383.5652174284,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3114341.4715719065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2597085.29247915,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2597062.1169916475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2580436.812849188,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2580415.6424580924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2562898.2396694254,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2562879.3388429717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1518730.5620915147,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1518741.0130718893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2510969.140540492,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2510947.0270270114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7708.24887022463,
            "unit": "ns/iter",
            "extra": "iterations: 90726\ncpu: 7708.2468090734965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55781.9601999995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55781.669999999656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103133.51445017231,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 103133.32533876988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149652.95702105534,
            "unit": "ns/iter",
            "extra": "iterations: 5747\ncpu: 149652.70575952658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198018.26996804526,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 198016.9100867192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 244893.0070641461,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 244888.81039841744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290979.0154310523,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 290978.83260650904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 338009.39837082627,
            "unit": "ns/iter",
            "extra": "iterations: 2578\ncpu: 337995.7331264543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 385442.38036266685,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 385440.99955771846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6596.753981282587,
            "unit": "ns/iter",
            "extra": "iterations: 105996\ncpu: 6596.7310087173255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5358.415716368671,
            "unit": "ns/iter",
            "extra": "iterations: 130310\ncpu: 5358.4007367047525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5361.661168105836,
            "unit": "ns/iter",
            "extra": "iterations: 130519\ncpu: 5361.640833901572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5362.716154334246,
            "unit": "ns/iter",
            "extra": "iterations: 130807\ncpu: 5362.652610334319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9188.967209674114,
            "unit": "ns/iter",
            "extra": "iterations: 76242\ncpu: 9189.028357073492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29338.54085728627,
            "unit": "ns/iter",
            "extra": "iterations: 27902\ncpu: 29338.47752849261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139641.53828608146,
            "unit": "ns/iter",
            "extra": "iterations: 6138\ncpu: 139642.61974584532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110378.19709996461,
            "unit": "ns/iter",
            "extra": "iterations: 7793\ncpu: 110377.86475041727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109682.08244646559,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 109681.99769201153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105814.02380657058,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 105812.69683818902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 335983.896250464,
            "unit": "ns/iter",
            "extra": "iterations: 2747\ncpu: 335986.3487440855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1836253.800788914,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1836210.059171603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1474894.982539711,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1474859.0476190634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1467405.5450236385,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1467346.1295418625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1455507.9294670583,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1455464.4200627059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792372.6966292358,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 792337.597234237 ns\nthreads: 1"
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
        "date": 1702310721124,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17063.473792093842,
            "unit": "ns/iter",
            "extra": "iterations: 40980\ncpu: 17062.713518789653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 160916.4515024736,
            "unit": "ns/iter",
            "extra": "iterations: 5258\ncpu: 160910.72651198175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 304818.5599297051,
            "unit": "ns/iter",
            "extra": "iterations: 2845\ncpu: 304809.06854130054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 449380.90641157504,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 449362.92657704244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 598222.8314993049,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 598173.86519945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 598104.4530000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598073.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 711457.9498069489,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 711404.7104247104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 828496.259856618,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 828437.0967741929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 943769.4250764567,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 943693.2721712531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13568.154595264723,
            "unit": "ns/iter",
            "extra": "iterations: 51651\ncpu: 13567.31912257266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11284.60375379281,
            "unit": "ns/iter",
            "extra": "iterations: 61964\ncpu: 11283.658253179265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11279.599731526561,
            "unit": "ns/iter",
            "extra": "iterations: 61831\ncpu: 11278.514014005912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11277.298551566968,
            "unit": "ns/iter",
            "extra": "iterations: 61929\ncpu: 11276.269599056975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19237.249945306845,
            "unit": "ns/iter",
            "extra": "iterations: 36568\ncpu: 19236.050645373023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70814.47299339907,
            "unit": "ns/iter",
            "extra": "iterations: 12571\ncpu: 70805.82292578158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 355438.70450751623,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 355426.54424040054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 282149.3429137752,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 282146.44862900535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 282571.23480663303,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 282562.22375690594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 281551.6136959349,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 281543.9711664481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 604145.7049999792,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604135.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4965718.302702579,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 4965493.513513514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4065009.622807063,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4064890.3508771863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4052997.178260892,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4052904.34782609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4033257.3290043273,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4033064.069264057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2334089.146095707,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2333972.2921914393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8877.627639716398,
            "unit": "ns/iter",
            "extra": "iterations: 78749\ncpu: 8877.000342861498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102878.31040691411,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 102873.18449165761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197611.19053013163,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 197601.495242411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 290983.2108980833,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 290975.2102253622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 384462.27389380935,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 384443.6283185828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 478003.4116675764,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 477979.6917996706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 571869.9888304882,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 571852.9566360055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 534279.2079999867,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534250.3999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 609106.3800000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609061.7000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6843.526449225983,
            "unit": "ns/iter",
            "extra": "iterations: 102158\ncpu: 6843.31036237987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5692.678718747859,
            "unit": "ns/iter",
            "extra": "iterations: 122911\ncpu: 5692.4441262377295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5669.26266219334,
            "unit": "ns/iter",
            "extra": "iterations: 123695\ncpu: 5668.991470956766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5756.0181730168215,
            "unit": "ns/iter",
            "extra": "iterations: 121884\ncpu: 5755.677529454208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9912.661484708957,
            "unit": "ns/iter",
            "extra": "iterations: 70694\ncpu: 9911.920389283445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50011.30129948721,
            "unit": "ns/iter",
            "extra": "iterations: 16545\ncpu: 50008.09307948026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 213640.71125000805,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 213632.22500000134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 170983.24890043534,
            "unit": "ns/iter",
            "extra": "iterations: 5002\ncpu: 170976.24950020085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172159.50716737277,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 172152.15021199247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 171699.13755019451,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 171689.57831325408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 411865.2911332382,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 411843.05357989325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3125956.470394592,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3125679.2763157897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2576493.657458511,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2576362.983425424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2581953.0526315537,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581817.174515226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2540946.9918256598,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2540779.0190735804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1509987.9902439215,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509919.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2541710.9358288185,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2541541.1764705805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7903.822005599074,
            "unit": "ns/iter",
            "extra": "iterations: 88941\ncpu: 7903.466342856528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57820.05730000037,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57817.14999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107178.71325540933,
            "unit": "ns/iter",
            "extra": "iterations: 8042\ncpu: 107172.14623227989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 155517.76187904607,
            "unit": "ns/iter",
            "extra": "iterations: 5556\ncpu: 155513.31893448555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 204802.19260655326,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 204788.88627266372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 254218.18762766157,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 254207.49927049986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 302881.00280112296,
            "unit": "ns/iter",
            "extra": "iterations: 2856\ncpu: 302859.4187675075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 350980.10832659475,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 350954.76960387855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 399805.02669121954,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 399787.89691670786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6406.700097959348,
            "unit": "ns/iter",
            "extra": "iterations: 109229\ncpu: 6406.31883474174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5302.3998268753085,
            "unit": "ns/iter",
            "extra": "iterations: 131697\ncpu: 5302.132926338454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5292.382953952979,
            "unit": "ns/iter",
            "extra": "iterations: 132277\ncpu: 5292.211797969452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5313.924709839674,
            "unit": "ns/iter",
            "extra": "iterations: 131996\ncpu: 5313.742840692147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8998.719766707696,
            "unit": "ns/iter",
            "extra": "iterations: 77671\ncpu: 8998.193663014521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29137.26449833536,
            "unit": "ns/iter",
            "extra": "iterations: 27917\ncpu: 29135.064655943985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140934.9003125581,
            "unit": "ns/iter",
            "extra": "iterations: 6079\ncpu: 140927.98157591763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110050.85242967347,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 110042.85166240316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109453.80565506467,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 109448.70777891457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106238.90244821028,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 106231.58819836775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 324912.06802959944,
            "unit": "ns/iter",
            "extra": "iterations: 2837\ncpu: 324897.0391258404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1858080.5791583622,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1858025.2505009908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1493508.4186794704,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1493466.6666666805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1483309.0286623908,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1483277.7070063618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1482188.3519108228,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1482151.5923566904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 812583.5531167431,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 812553.4679543417 ns\nthreads: 1"
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
        "date": 1702335659280,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16644.417324530124,
            "unit": "ns/iter",
            "extra": "iterations: 41802\ncpu: 16643.50509544998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153418.16289592584,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 153414.64253393668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289754.9832831872,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 289748.6459378135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 424603.00343136356,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 424585.83333333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 568696.3341968997,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 568666.3212435233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 569535.0259999827,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569522.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 676825.5257731983,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 676809.2047128123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 786331.6893616819,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 786307.0638297871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 894033.3294797853,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 894006.9364161843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13109.72401674914,
            "unit": "ns/iter",
            "extra": "iterations: 53496\ncpu: 13109.346493195757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10913.848172009433,
            "unit": "ns/iter",
            "extra": "iterations: 64415\ncpu: 10913.3555848793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10966.802007085327,
            "unit": "ns/iter",
            "extra": "iterations: 64073\ncpu: 10966.60371763457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10900.366404730692,
            "unit": "ns/iter",
            "extra": "iterations: 64265\ncpu: 10899.981327316591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18318.313478798238,
            "unit": "ns/iter",
            "extra": "iterations: 37993\ncpu: 18317.782223041107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70220.08145280741,
            "unit": "ns/iter",
            "extra": "iterations: 12142\ncpu: 70218.61307857018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 364511.3852389087,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 364506.14334470977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 292773.30044536287,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 292768.7221651247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290109.42326057336,
            "unit": "ns/iter",
            "extra": "iterations: 2932\ncpu: 290108.73124147346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 288582.2269191688,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 288577.10517416213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 577384.0349999944,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577383.4000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4692907.848484733,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4692776.262626259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3813458.861224476,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3813264.489795918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3832611.91358025,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3832432.5102880644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3825622.7613169076,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3825304.9382716017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2224842.725961633,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2224758.8942307686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8290.281857503016,
            "unit": "ns/iter",
            "extra": "iterations: 84156\ncpu: 8290.120728171489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95937.43599507258,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 95937.31660880278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185315.86827616245,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 185312.85472257488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 273183.55593965255,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 273179.13262099307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 360226.3802992433,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 360203.9484621783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 448365.498455213,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 448326.7250257467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 534418.6570374747,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 534392.9317762757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 501288.07599998027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501259.9000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 569431.5370000141,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569413.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6465.987157013027,
            "unit": "ns/iter",
            "extra": "iterations: 108386\ncpu: 6465.984536748266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5321.042858333651,
            "unit": "ns/iter",
            "extra": "iterations: 131993\ncpu: 5320.667762684395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5353.456887615143,
            "unit": "ns/iter",
            "extra": "iterations: 131192\ncpu: 5353.218946277176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5309.361740528322,
            "unit": "ns/iter",
            "extra": "iterations: 131868\ncpu: 5309.189492522823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9147.160049530794,
            "unit": "ns/iter",
            "extra": "iterations: 76720\ncpu: 9147.009906152216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51761.51773093986,
            "unit": "ns/iter",
            "extra": "iterations: 15989\ncpu: 51760.09756707769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 219113.1193953307,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 219099.53881629673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 175621.29641025118,
            "unit": "ns/iter",
            "extra": "iterations: 4875\ncpu: 175616.49230769186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174425.35032627132,
            "unit": "ns/iter",
            "extra": "iterations: 4904\ncpu: 174417.25122349156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174011.80044889374,
            "unit": "ns/iter",
            "extra": "iterations: 4901\ncpu: 174005.1622117937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 404068.14821678493,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 404051.8758684587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2934760.188087819,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2934539.8119122344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2405061.5269922945,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2404956.041131097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2414116.2609819234,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2413997.4160206635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2430230.626631879,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2430137.8590078442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1423628.1435113985,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1423529.0076335887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2336338.3762626722,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2336276.0101010185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7679.094827018727,
            "unit": "ns/iter",
            "extra": "iterations: 91166\ncpu: 7678.773885001009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56083.06069999571,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56083.04999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103025.25206859109,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 103019.91845545023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149745.60232396962,
            "unit": "ns/iter",
            "extra": "iterations: 5766\ncpu: 149738.10267082925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197051.18321995644,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 197040.29478458042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 244364.79198419626,
            "unit": "ns/iter",
            "extra": "iterations: 3543\ncpu: 244354.8687552934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 290605.530926111,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 290594.04881310434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 335371.6590291273,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 335370.99029126304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 381109.0661410488,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 381087.42882172833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6366.404541570331,
            "unit": "ns/iter",
            "extra": "iterations: 110006\ncpu: 6366.393651255389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5268.385802515757,
            "unit": "ns/iter",
            "extra": "iterations: 132770\ncpu: 5268.117044513087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5331.236567658875,
            "unit": "ns/iter",
            "extra": "iterations: 131269\ncpu: 5331.012653406366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5323.31466379534,
            "unit": "ns/iter",
            "extra": "iterations: 130962\ncpu: 5323.0784502374945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8943.932878270927,
            "unit": "ns/iter",
            "extra": "iterations: 78231\ncpu: 8943.393283992256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30456.542648100276,
            "unit": "ns/iter",
            "extra": "iterations: 26789\ncpu: 30455.72436447805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145085.60493410152,
            "unit": "ns/iter",
            "extra": "iterations: 5918\ncpu: 145077.8303480894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113638.88799999889,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 113634.60000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116051.66954527012,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 116044.00215895326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112519.89688947561,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 112519.64262078045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 330527.6838524894,
            "unit": "ns/iter",
            "extra": "iterations: 2793\ncpu: 330511.9942713969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1768669.9291188132,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1768581.0344827457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1425512.6149068067,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1425410.714285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1412404.135464234,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1412347.945205478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1406506.8252279193,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1406427.20364742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 810588.5305409939,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 810547.2949389104 ns\nthreads: 1"
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
        "date": 1702347580264,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16583.81511940141,
            "unit": "ns/iter",
            "extra": "iterations: 41708\ncpu: 16581.56948307279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 155920.8018399241,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 155906.07175712977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 294646.8144365056,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 294614.2662580865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 431395.3155533334,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 431360.0697906279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 575240.5922521352,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 575193.5653315823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579567.8620000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579542.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 690123.6912751523,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 690044.0715883669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 795793.8213977694,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 795732.7006039685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 913859.2276741882,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 913748.5770363099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13122.899849821599,
            "unit": "ns/iter",
            "extra": "iterations: 53270\ncpu: 13122.26769288532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10905.116136062823,
            "unit": "ns/iter",
            "extra": "iterations: 64235\ncpu: 10904.531797306769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10942.836941559382,
            "unit": "ns/iter",
            "extra": "iterations: 63928\ncpu: 10942.102052308857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11080.601673997635,
            "unit": "ns/iter",
            "extra": "iterations: 63202\ncpu: 11079.997468434556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18597.3652012223,
            "unit": "ns/iter",
            "extra": "iterations: 37645\ncpu: 18596.905299508577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68851.54902592149,
            "unit": "ns/iter",
            "extra": "iterations: 12422\ncpu: 68848.14844630501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 360053.1501261567,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 360024.8948696381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 289599.0861601115,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 289584.4979647217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288998.66407832125,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288956.75219446357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 286613.48171754344,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 286607.648440121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 598764.6990000145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598753.4000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4724607.904040309,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4724507.070707066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3851781.5330578745,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3851730.578512388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3868231.2272727625,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3867998.7603305816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3886528.5966386693,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3886365.966386562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2275679.8312958693,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2275610.7579462104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3770583.784552774,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3770404.065040656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8431.561886429265,
            "unit": "ns/iter",
            "extra": "iterations: 83120\ncpu: 8431.245187680464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98650.93128976217,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 98648.22440717189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 190375.04647122638,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 190372.16069489747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 280110.0103192502,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 280104.32118671364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 370058.72754362854,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 370042.1030225641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 459357.04168864555,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 459327.96833773126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 548666.244794957,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 548629.2744479523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 512800.5829999722,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512771.80000000296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 585917.5600000129,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585862.5000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6497.0247186418555,
            "unit": "ns/iter",
            "extra": "iterations: 107692\ncpu: 6496.619061768767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5417.03695150096,
            "unit": "ns/iter",
            "extra": "iterations: 130333\ncpu: 5416.671142381424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5331.256366491448,
            "unit": "ns/iter",
            "extra": "iterations: 131823\ncpu: 5331.118241884967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5401.266737014004,
            "unit": "ns/iter",
            "extra": "iterations: 129832\ncpu: 5401.033643477693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9486.173441483796,
            "unit": "ns/iter",
            "extra": "iterations: 75697\ncpu: 9485.25040622479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50822.92435017262,
            "unit": "ns/iter",
            "extra": "iterations: 16312\ncpu: 50820.641245708925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 215950.8150753735,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 215937.81407035099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 174122.68349277767,
            "unit": "ns/iter",
            "extra": "iterations: 4913\ncpu: 174110.84876857357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 176555.0293166203,
            "unit": "ns/iter",
            "extra": "iterations: 4946\ncpu: 176546.15851192904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 173353.89001417655,
            "unit": "ns/iter",
            "extra": "iterations: 4937\ncpu: 173344.6627506591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 411100.6181474514,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 411082.7977315687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2962795.8444444225,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2962596.825396837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2460776.0973683856,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2460570.2631578906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2453997.0318302186,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2453828.1167108733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2482362.190348487,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2482124.6648793523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1465076.9099526207,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1464985.7819905276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2398137.1829897203,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2398011.340206177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7724.124455328815,
            "unit": "ns/iter",
            "extra": "iterations: 90651\ncpu: 7723.624670439391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56264.346700001515,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56259.800000000134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103364.05132828346,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 103354.51376367368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 150364.6154786887,
            "unit": "ns/iter",
            "extra": "iterations: 5724\ncpu: 150355.87002096506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198877.1592778773,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 198862.75137111527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 246100.41628831057,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 246077.0998864918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 294334.4260074559,
            "unit": "ns/iter",
            "extra": "iterations: 2953\ncpu: 294319.67490687483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 341477.18791683496,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 341450.17653981945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 387554.46270656533,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 387533.4524341229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6404.263763292387,
            "unit": "ns/iter",
            "extra": "iterations: 109367\ncpu: 6403.858567940986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5270.017984349311,
            "unit": "ns/iter",
            "extra": "iterations: 131114\ncpu: 5269.691261039996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5314.353317028413,
            "unit": "ns/iter",
            "extra": "iterations: 130840\ncpu: 5314.059920513584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5281.494294412722,
            "unit": "ns/iter",
            "extra": "iterations: 131713\ncpu: 5281.207625671016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8923.07389878934,
            "unit": "ns/iter",
            "extra": "iterations: 78391\ncpu: 8922.520442397643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29631.229404492486,
            "unit": "ns/iter",
            "extra": "iterations: 27506\ncpu: 29629.45175598063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144469.1056883252,
            "unit": "ns/iter",
            "extra": "iterations: 5942\ncpu: 144458.4315045444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121585.94084582137,
            "unit": "ns/iter",
            "extra": "iterations: 7472\ncpu: 121577.58297644407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115225.31659792371,
            "unit": "ns/iter",
            "extra": "iterations: 7031\ncpu: 115216.99615986395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111987.287218639,
            "unit": "ns/iter",
            "extra": "iterations: 7597\ncpu: 111976.74081874479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 347184.7956948706,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 347165.14350453427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1784526.4463601264,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1784392.1455938858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1413689.9606656241,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1413582.9046898726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1414898.5045871772,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1414796.941896019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1403310.3614458155,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1403212.198795181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 799849.2517241462,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 799792.1551724143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1366390.9485294025,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1366254.2647058854 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}