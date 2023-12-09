window.BENCHMARK_DATA = {
  "lastUpdate": 1702084964877,
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
      }
    ]
  }
}