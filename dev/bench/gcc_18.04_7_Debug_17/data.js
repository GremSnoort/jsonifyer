window.BENCHMARK_DATA = {
  "lastUpdate": 1702084739290,
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
      }
    ]
  }
}