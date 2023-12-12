window.BENCHMARK_DATA = {
  "lastUpdate": 1702388113079,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-9 20.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381139702,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7665.085862624013,
            "unit": "ns/iter",
            "extra": "iterations: 91297\ncpu: 7664.689967906941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95118.17590334798,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 95114.36488583463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 183428.97322175687,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 183419.26778242682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 274319.81812421407,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 274308.11153358687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 357287.8797524421,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 357275.19893899205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 443449.917940861,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 443404.63812436315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 531933.0439024076,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 531902.682926829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 620638.5378626875,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 620589.9504600134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 577499.1110000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577460.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5661.080112045153,
            "unit": "ns/iter",
            "extra": "iterations: 123165\ncpu: 5660.720984045794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4718.051355350737,
            "unit": "ns/iter",
            "extra": "iterations: 148670\ncpu: 4717.834801910272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4764.6561316602465,
            "unit": "ns/iter",
            "extra": "iterations: 146559\ncpu: 4764.374074604769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4681.623866201966,
            "unit": "ns/iter",
            "extra": "iterations: 149718\ncpu: 4681.473837481135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8412.817791462423,
            "unit": "ns/iter",
            "extra": "iterations: 83141\ncpu: 8412.211784799325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47129.50430714947,
            "unit": "ns/iter",
            "extra": "iterations: 17529\ncpu: 47127.06942780535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201230.54560453244,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 201225.90148479835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 160411.2087561113,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 160407.2529124393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156807.42213265024,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 156802.72993770608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 158482.15037732435,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 158477.5078225661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 356820.3901234365,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 356794.6502057605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2900256.1907693166,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2899968.615384606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2363067.8860759484,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2363012.4050632953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2354278.593434363,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2354163.888888892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2356246.581863958,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2356084.130982364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1409400.434650443,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1409315.0455927055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2285839.237036967,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2285676.049382723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9912775.25233663,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9912127.10280375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5678874.727272793,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5678541.818181813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11789716.361111542,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 11789215.277777754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46833.47839909414,
            "unit": "ns/iter",
            "extra": "iterations: 17615\ncpu: 46831.030371842164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 205498.27246585445,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 205492.83489096534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163274.71537145955,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 163270.77712331363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161968.07594700035,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 161962.5489830193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164305.3148112708,
            "unit": "ns/iter",
            "extra": "iterations: 5219\ncpu: 164300.53650124648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 363980.42092051683,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 363974.1841004195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2883227.736842137,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2883135.913312706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2382621.1785713765,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2382580.6122448966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2364808.205583835,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2364751.2690355266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2365223.175126854,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2365159.137055836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1406109.865558881,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1406088.5196374625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2307970.901234585,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2307936.296296301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10050010.620370625,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10049672.222222207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5689118.351514908,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5688892.121212107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45857.6373430084,
            "unit": "ns/iter",
            "extra": "iterations: 17915\ncpu: 45856.67317890065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 203323.535511372,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 203320.38352272712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161499.4436686141,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 161494.84808454357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 158478.728164318,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 158476.22131754275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159745.7589753091,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 159742.8758414352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 349023.63665592927,
            "unit": "ns/iter",
            "extra": "iterations: 2488\ncpu: 349018.2877813484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2876772.0615384793,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2876697.8461538446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2373000.531806651,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2372942.239185745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2354285.8131312034,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2354231.8181818165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2367091.962025393,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2367048.3544303826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1411504.3863636276,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1411460.6060606085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2299905.253071173,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2299862.6535626627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2606.904621776686,
            "unit": "ns/iter",
            "extra": "iterations: 268122\ncpu: 2606.861801717129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20048.593069393908,
            "unit": "ns/iter",
            "extra": "iterations: 34023\ncpu: 20048.152720218673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14998.560069421706,
            "unit": "ns/iter",
            "extra": "iterations: 46671\ncpu: 14997.955904094528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13739.671767840884,
            "unit": "ns/iter",
            "extra": "iterations: 51034\ncpu: 13739.37179135479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11601.197481292638,
            "unit": "ns/iter",
            "extra": "iterations: 60269\ncpu: 11601.005492043934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81361.00104553618,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 81358.81737918146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 183559.52087160954,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 183554.4499868733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45353.20081780909,
            "unit": "ns/iter",
            "extra": "iterations: 15407\ncpu: 45351.178035957884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 44892.585547905706,
            "unit": "ns/iter",
            "extra": "iterations: 15541\ncpu: 44891.60929155124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45215.99424953499,
            "unit": "ns/iter",
            "extra": "iterations: 15477\ncpu: 45214.61523551049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96097.56846587065,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 96094.46504600965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 85668.60181550516,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85664.03336604606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23554.446708357107,
            "unit": "ns/iter",
            "extra": "iterations: 29742\ncpu: 23553.335350682548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 114335.67041748294,
            "unit": "ns/iter",
            "extra": "iterations: 6132\ncpu: 114331.53946510144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 92582.89457671971,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 92578.39947090033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 91477.09352895056,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 91470.80167670935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 97301.25765645818,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 97298.30892143786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 172075.6216548016,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 172070.21851215183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 775262.0849889779,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 775228.8079470228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 659790.2122641613,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 659770.0943396274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 658227.3091603561,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 658200.8587786172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 661643.8459357168,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661628.6389414022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 422571.9669867973,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 422564.5858343291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 644279.7002801619,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 644266.8534080285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23966.983171920765,
            "unit": "ns/iter",
            "extra": "iterations: 29118\ncpu: 23965.77031389547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115405.6781761125,
            "unit": "ns/iter",
            "extra": "iterations: 6053\ncpu: 115401.00776474601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 93200.71540296316,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 93197.37539766668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92701.80910173224,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 92697.42029368902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 94012.37297442109,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 94009.56207312118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 173323.5656590692,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 173320.04459861154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 773333.3664459031,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 773286.8653421693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 658738.7408105102,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 658713.5721017921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 655138.7964352637,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 655113.9774859297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 659258.5868544385,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 659244.131455399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421914.3291139093,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 421898.6136226597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 647371.6158088691,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 647352.2977941126 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381139702,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7665.085862624013,
            "unit": "ns/iter",
            "extra": "iterations: 91297\ncpu: 7664.689967906941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95118.17590334798,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 95114.36488583463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 183428.97322175687,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 183419.26778242682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 274319.81812421407,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 274308.11153358687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 357287.8797524421,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 357275.19893899205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 443449.917940861,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 443404.63812436315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 531933.0439024076,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 531902.682926829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 620638.5378626875,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 620589.9504600134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 577499.1110000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577460.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5661.080112045153,
            "unit": "ns/iter",
            "extra": "iterations: 123165\ncpu: 5660.720984045794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4718.051355350737,
            "unit": "ns/iter",
            "extra": "iterations: 148670\ncpu: 4717.834801910272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4764.6561316602465,
            "unit": "ns/iter",
            "extra": "iterations: 146559\ncpu: 4764.374074604769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4681.623866201966,
            "unit": "ns/iter",
            "extra": "iterations: 149718\ncpu: 4681.473837481135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8412.817791462423,
            "unit": "ns/iter",
            "extra": "iterations: 83141\ncpu: 8412.211784799325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47129.50430714947,
            "unit": "ns/iter",
            "extra": "iterations: 17529\ncpu: 47127.06942780535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201230.54560453244,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 201225.90148479835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 160411.2087561113,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 160407.2529124393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156807.42213265024,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 156802.72993770608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 158482.15037732435,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 158477.5078225661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 356820.3901234365,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 356794.6502057605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2900256.1907693166,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2899968.615384606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2363067.8860759484,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2363012.4050632953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2354278.593434363,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2354163.888888892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2356246.581863958,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2356084.130982364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1409400.434650443,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1409315.0455927055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2285839.237036967,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2285676.049382723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9912775.25233663,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9912127.10280375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5678874.727272793,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5678541.818181813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11789716.361111542,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 11789215.277777754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46833.47839909414,
            "unit": "ns/iter",
            "extra": "iterations: 17615\ncpu: 46831.030371842164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 205498.27246585445,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 205492.83489096534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163274.71537145955,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 163270.77712331363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161968.07594700035,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 161962.5489830193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164305.3148112708,
            "unit": "ns/iter",
            "extra": "iterations: 5219\ncpu: 164300.53650124648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 363980.42092051683,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 363974.1841004195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2883227.736842137,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2883135.913312706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2382621.1785713765,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2382580.6122448966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2364808.205583835,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2364751.2690355266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2365223.175126854,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2365159.137055836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1406109.865558881,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1406088.5196374625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2307970.901234585,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2307936.296296301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10050010.620370625,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10049672.222222207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5689118.351514908,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5688892.121212107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45857.6373430084,
            "unit": "ns/iter",
            "extra": "iterations: 17915\ncpu: 45856.67317890065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 203323.535511372,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 203320.38352272712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161499.4436686141,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 161494.84808454357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 158478.728164318,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 158476.22131754275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159745.7589753091,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 159742.8758414352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 349023.63665592927,
            "unit": "ns/iter",
            "extra": "iterations: 2488\ncpu: 349018.2877813484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2876772.0615384793,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2876697.8461538446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2373000.531806651,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2372942.239185745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2354285.8131312034,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2354231.8181818165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2367091.962025393,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2367048.3544303826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1411504.3863636276,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1411460.6060606085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2299905.253071173,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2299862.6535626627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2606.904621776686,
            "unit": "ns/iter",
            "extra": "iterations: 268122\ncpu: 2606.861801717129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20048.593069393908,
            "unit": "ns/iter",
            "extra": "iterations: 34023\ncpu: 20048.152720218673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14998.560069421706,
            "unit": "ns/iter",
            "extra": "iterations: 46671\ncpu: 14997.955904094528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13739.671767840884,
            "unit": "ns/iter",
            "extra": "iterations: 51034\ncpu: 13739.37179135479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11601.197481292638,
            "unit": "ns/iter",
            "extra": "iterations: 60269\ncpu: 11601.005492043934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81361.00104553618,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 81358.81737918146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 183559.52087160954,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 183554.4499868733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45353.20081780909,
            "unit": "ns/iter",
            "extra": "iterations: 15407\ncpu: 45351.178035957884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 44892.585547905706,
            "unit": "ns/iter",
            "extra": "iterations: 15541\ncpu: 44891.60929155124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45215.99424953499,
            "unit": "ns/iter",
            "extra": "iterations: 15477\ncpu: 45214.61523551049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96097.56846587065,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 96094.46504600965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 85668.60181550516,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85664.03336604606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23554.446708357107,
            "unit": "ns/iter",
            "extra": "iterations: 29742\ncpu: 23553.335350682548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 114335.67041748294,
            "unit": "ns/iter",
            "extra": "iterations: 6132\ncpu: 114331.53946510144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 92582.89457671971,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 92578.39947090033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 91477.09352895056,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 91470.80167670935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 97301.25765645818,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 97298.30892143786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 172075.6216548016,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 172070.21851215183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 775262.0849889779,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 775228.8079470228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 659790.2122641613,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 659770.0943396274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 658227.3091603561,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 658200.8587786172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 661643.8459357168,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661628.6389414022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 422571.9669867973,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 422564.5858343291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 644279.7002801619,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 644266.8534080285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23966.983171920765,
            "unit": "ns/iter",
            "extra": "iterations: 29118\ncpu: 23965.77031389547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115405.6781761125,
            "unit": "ns/iter",
            "extra": "iterations: 6053\ncpu: 115401.00776474601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 93200.71540296316,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 93197.37539766668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92701.80910173224,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 92697.42029368902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 94012.37297442109,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 94009.56207312118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 173323.5656590692,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 173320.04459861154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 773333.3664459031,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 773286.8653421693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 658738.7408105102,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 658713.5721017921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 655138.7964352637,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 655113.9774859297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 659258.5868544385,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 659244.131455399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421914.3291139093,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 421898.6136226597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 647371.6158088691,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 647352.2977941126 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382286905,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7669.796843076111,
            "unit": "ns/iter",
            "extra": "iterations: 91038\ncpu: 7669.519321601969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93869.04202325843,
            "unit": "ns/iter",
            "extra": "iterations: 9114\ncpu: 93866.16194865042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181317.56983240604,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 181307.11773225735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 269947.9331667627,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 269941.72392254847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 352789.5934925797,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 352780.43657331105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 438357.96275790664,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 438319.3759436336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 523088.01860744884,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 523063.1452581031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 608390.8441649466,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 608353.3193570937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 557425.5129999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557384.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5732.958732449529,
            "unit": "ns/iter",
            "extra": "iterations: 121936\ncpu: 5732.736845558319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4751.961072190208,
            "unit": "ns/iter",
            "extra": "iterations: 147735\ncpu: 4751.705418485805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4765.567710984166,
            "unit": "ns/iter",
            "extra": "iterations: 147369\ncpu: 4754.342500797315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5096.208031464795,
            "unit": "ns/iter",
            "extra": "iterations: 146449\ncpu: 5095.726157228796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8439.781008544698,
            "unit": "ns/iter",
            "extra": "iterations: 83090\ncpu: 8439.3501022987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45959.58072569918,
            "unit": "ns/iter",
            "extra": "iterations: 18024\ncpu: 45954.31646693304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193919.47294859868,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 193907.88999098272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 156578.4533162777,
            "unit": "ns/iter",
            "extra": "iterations: 5473\ncpu: 156562.41549424472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 153108.7327370259,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 153099.15921287984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 155709.00289487818,
            "unit": "ns/iter",
            "extra": "iterations: 5527\ncpu: 155695.29582051764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 351703.53802589176,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 351677.50809061585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2836737.6486485926,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2836483.4834834794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2327019.086633744,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2326826.2376237684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2314019.8362282845,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2313866.5012406902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2310767.2797029675,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2310551.237623762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1387295.505952444,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1387178.273809525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2252265.509708789,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2252171.116504856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9726469.752293607,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 9726142.201834876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5513390.274853791,
            "unit": "ns/iter",
            "extra": "iterations: 171\ncpu: 5513065.497076025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11636874.087912474,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11636404.395604374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 45812.6243261102,
            "unit": "ns/iter",
            "extra": "iterations: 18178\ncpu: 45810.84827813839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198953.17049408518,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 198946.76409185733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 160243.46367040527,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 160238.3707865172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 155712.78854223635,
            "unit": "ns/iter",
            "extra": "iterations: 5481\ncpu: 155709.4873198334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 158341.9687384389,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 158333.3148353679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 352213.3161526151,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 352199.0259740249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2823803.156626567,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2823760.2409638534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2333967.7002518703,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2333873.299748112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2323606.813895739,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2323584.3672456443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2319567.9278606223,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2319441.542288551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1394172.7189835587,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1394124.5142002997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2265662.03640771,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2265558.0097087403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9894464.18348605,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 9894044.95412844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5502740.644970522,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 5502303.550295854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46560.480360158224,
            "unit": "ns/iter",
            "extra": "iterations: 17770\ncpu: 46559.54980303886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 197962.59435708137,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 197956.0592044399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 156550.5283330238,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 156545.64459930235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 155054.8072878879,
            "unit": "ns/iter",
            "extra": "iterations: 5516\ncpu: 155049.27483683918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 154998.7165454509,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 154994.6909090907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 344119.4972200287,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 344093.4868943603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2802511.3982037287,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2802358.083832327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2333468.09273187,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2333258.897243104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2319582.347394498,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2319472.2084367196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2323223.5074627157,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2323086.069651746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1394430.4707646412,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1394403.148425787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2260597.1694914806,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2260476.513317185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2645.7947268446474,
            "unit": "ns/iter",
            "extra": "iterations: 264282\ncpu: 2645.7692918927423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19750.845807603837,
            "unit": "ns/iter",
            "extra": "iterations: 36435\ncpu: 19749.96020310145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14190.435987770079,
            "unit": "ns/iter",
            "extra": "iterations: 49389\ncpu: 14190.352102694922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15155.964291141285,
            "unit": "ns/iter",
            "extra": "iterations: 46067\ncpu: 15155.668917012308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11610.263309905069,
            "unit": "ns/iter",
            "extra": "iterations: 59899\ncpu: 11609.816524482865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 79944.29402984746,
            "unit": "ns/iter",
            "extra": "iterations: 8710\ncpu: 79942.6291618834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 179398.5401179193,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 179389.1309920543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 44476.80405233616,
            "unit": "ns/iter",
            "extra": "iterations: 15744\ncpu: 44475.91463414666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 44490.0386154349,
            "unit": "ns/iter",
            "extra": "iterations: 15745\ncpu: 44487.22769133095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 44677.554925088385,
            "unit": "ns/iter",
            "extra": "iterations: 15685\ncpu: 44672.821166720016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 95697.84239278694,
            "unit": "ns/iter",
            "extra": "iterations: 7322\ncpu: 95692.0923245003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84990.48466108936,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 84982.18746210766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23859.365487637293,
            "unit": "ns/iter",
            "extra": "iterations: 29120\ncpu: 23858.231456043875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 114878.22642751237,
            "unit": "ns/iter",
            "extra": "iterations: 6077\ncpu: 114877.12687181194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 93536.7519369486,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 93532.7811915585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 92983.56284879276,
            "unit": "ns/iter",
            "extra": "iterations: 7526\ncpu: 92982.67339888489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 93994.52968097849,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 93990.83322116053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 174004.5837272998,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 173998.9549639215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 761653.1710239523,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 761625.3812636149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 650040.2769517076,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 650020.7249070584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 653074.8574091136,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 653034.762348549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 652652.4617537304,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 652592.537313435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 420344.71601209044,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 420316.73716011934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 637871.0973612367,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 637798.4531392189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24286.977276688755,
            "unit": "ns/iter",
            "extra": "iterations: 28693\ncpu: 24284.902240964562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 116583.21088549026,
            "unit": "ns/iter",
            "extra": "iterations: 6008\ncpu: 116572.65312916048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94331.3291122199,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 94329.13916206374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 94632.43442289585,
            "unit": "ns/iter",
            "extra": "iterations: 7373\ncpu: 94628.48230028556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 95333.16136952434,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 95323.61205838164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 173843.33002235027,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 173834.69083685218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 764912.5322404747,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 764830.1639344239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 649611.7509294008,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 649598.1412639434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 649700.0565862774,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 649685.064935067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 649687.8182665183,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 649622.5535880734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 422518.03860069474,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 422490.832328106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 634774.4827898691,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 634723.0072463762 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387054005,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7585.040461363731,
            "unit": "ns/iter",
            "extra": "iterations: 92335\ncpu: 7584.669951805925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94036.91853561687,
            "unit": "ns/iter",
            "extra": "iterations: 9096\ncpu: 94034.31178540019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181572.30729382572,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 181568.60754247825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 271816.01223336085,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 271806.9008782937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 352972.79784590023,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 352958.24357912195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 440312.52296818787,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 440310.9540636043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 525383.6452784297,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 525337.1670702179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 610579.3632538415,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 610556.7321178113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559614.669000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559600.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5689.120862865197,
            "unit": "ns/iter",
            "extra": "iterations: 123032\ncpu: 5688.881754340337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4701.608513040436,
            "unit": "ns/iter",
            "extra": "iterations: 148807\ncpu: 4701.470360937322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4762.287712704423,
            "unit": "ns/iter",
            "extra": "iterations: 146330\ncpu: 4762.129433472298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4904.737773733844,
            "unit": "ns/iter",
            "extra": "iterations: 145077\ncpu: 4904.044748650708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8398.120925883815,
            "unit": "ns/iter",
            "extra": "iterations: 83423\ncpu: 8397.758411948731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47092.444552251436,
            "unit": "ns/iter",
            "extra": "iterations: 17521\ncpu: 47091.05073911307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 196218.0311926614,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 196210.50458715577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159601.6672243862,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 159591.9687674286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156524.74006561693,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 156520.23332118118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 157306.20524578332,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 157302.25605282438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 356879.7555464209,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 356873.0484798679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2861252.1975683775,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2861248.024316109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2358968.5516373026,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2358911.33501259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2331020.326683368,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2330986.533665836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2365278.3358585336,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2365231.0606060624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1394797.6771772073,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1394792.7927927922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2282910.9362744507,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2282899.5098039275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9842999.768518776,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 9842538.888888875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5691308.506097756,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5691151.2195121795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11702375.593406836,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11701892.307692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46678.63246321288,
            "unit": "ns/iter",
            "extra": "iterations: 17737\ncpu: 46678.71680667547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 200206.6906829342,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 200204.85801455076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 161723.56653991595,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 161724.92395437293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 159564.95889639016,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 159559.8536036037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159867.40554722943,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 159861.80659670083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 362749.0415268535,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 362733.26342281926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2857327.9138462427,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2857333.2307692347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2386955.8542199642,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2386866.496163692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2349061.462121201,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2349004.797979809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2375004.7868021526,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2374907.106598978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1400984.3203007563,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1400952.1804511282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2299877.147783232,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2299810.8374384306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9991608.268518558,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 9991174.074074078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5652659.92121202,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5652472.121212136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45333.63870932409,
            "unit": "ns/iter",
            "extra": "iterations: 18254\ncpu: 45332.102552865224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 200441.2273472321,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 200435.35471786457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 160425.05406922914,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 160417.75491113175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 158363.98928703176,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 158359.8817879567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 157866.77892791273,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 157861.09057301263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 351009.72437451454,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 350994.63276836055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2844989.027522876,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2844888.9908256955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2379626.1938775666,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2379555.3571428484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2347393.3299747803,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2347270.5289672646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2379694.642857167,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2379588.010204074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1404830.058734928,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1404808.433734942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2294255.9532018807,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2294182.2660098523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2596.0312315915435,
            "unit": "ns/iter",
            "extra": "iterations: 269919\ncpu: 2595.9443388572113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19773.18533668042,
            "unit": "ns/iter",
            "extra": "iterations: 35449\ncpu: 19772.137436881098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14246.415864357114,
            "unit": "ns/iter",
            "extra": "iterations: 49129\ncpu: 14246.569236092784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14750.204846465353,
            "unit": "ns/iter",
            "extra": "iterations: 47416\ncpu: 14750.381727686907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11646.556779534052,
            "unit": "ns/iter",
            "extra": "iterations: 60277\ncpu: 11646.040778406437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81133.13294595946,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 81129.63393375963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 182048.24271592393,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 182039.85431842136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 44577.231528663855,
            "unit": "ns/iter",
            "extra": "iterations: 15700\ncpu: 44574.649681528506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 44606.87518327098,
            "unit": "ns/iter",
            "extra": "iterations: 15687\ncpu: 44606.973927456114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 44683.29165336161,
            "unit": "ns/iter",
            "extra": "iterations: 15659\ncpu: 44682.61063924915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 86651.82850449659,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 86652.75551719982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84706.85270941556,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 84703.78227664018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23819.460403964968,
            "unit": "ns/iter",
            "extra": "iterations: 29359\ncpu: 23818.495180353086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 116317.00033090638,
            "unit": "ns/iter",
            "extra": "iterations: 6044\ncpu: 116313.1204500327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 93776.82586598935,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 93771.60625919522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 93175.74677703841,
            "unit": "ns/iter",
            "extra": "iterations: 7369\ncpu: 93176.9032433163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 95269.6790710319,
            "unit": "ns/iter",
            "extra": "iterations: 7363\ncpu: 95270.81352709577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 174149.83080367203,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 174141.67703408716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 770088.3729373423,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 770060.2860285981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 654598.11412534,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 654555.098222644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 651442.4944030065,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 651449.6268656667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 659168.8203198522,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 659176.0112888013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 418715.1727435779,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 418720.38254632533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 640684.5847845881,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 640652.245646197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24350.76647663968,
            "unit": "ns/iter",
            "extra": "iterations: 28768\ncpu: 24350.00000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 117315.72456700659,
            "unit": "ns/iter",
            "extra": "iterations: 5947\ncpu: 117311.98923827217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 95829.29035351516,
            "unit": "ns/iter",
            "extra": "iterations: 7298\ncpu: 95825.48643463933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 94486.93782034166,
            "unit": "ns/iter",
            "extra": "iterations: 7414\ncpu: 94483.4772052859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 95876.4494659051,
            "unit": "ns/iter",
            "extra": "iterations: 7302\ncpu: 95874.86989865809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 175078.3932415532,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 175076.82102628474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 767863.9090908727,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 767830.6681270492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 658596.8392857537,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 658568.4210526403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 653403.3755824245,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 653383.7837837836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 657325.1571562974,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 657317.2123479897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421587.35963858734,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 421569.21686746355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 639967.6053113485,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 639975.7326007312 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388112694,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7641.669120247992,
            "unit": "ns/iter",
            "extra": "iterations: 90480\ncpu: 7641.55061892131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94278.9571145775,
            "unit": "ns/iter",
            "extra": "iterations: 9094\ncpu: 94278.2603914669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182052.42661406676,
            "unit": "ns/iter",
            "extra": "iterations: 4817\ncpu: 182052.5638364127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272436.50579392526,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 272429.5646727216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 353604.52666390635,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 353593.6337329473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 440055.647773294,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 440050.25303643703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 525970.9909474817,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 525960.9535304767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 610800.6217543829,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 610781.4035087718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 572875.3079999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572861.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5773.8013853986795,
            "unit": "ns/iter",
            "extra": "iterations: 89938\ncpu: 5773.8442037848245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4825.974707204855,
            "unit": "ns/iter",
            "extra": "iterations: 144982\ncpu: 4825.910112979545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4721.6152849741775,
            "unit": "ns/iter",
            "extra": "iterations: 148224\ncpu: 4721.363611830749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4752.987000827858,
            "unit": "ns/iter",
            "extra": "iterations: 147394\ncpu: 4752.812868909175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8392.737495799518,
            "unit": "ns/iter",
            "extra": "iterations: 83332\ncpu: 8392.30427686843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47228.908443138964,
            "unit": "ns/iter",
            "extra": "iterations: 17683\ncpu: 47228.490640728356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195480.30034443468,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 195475.8668197474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158692.28443948497,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 158691.13218070322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156620.088084792,
            "unit": "ns/iter",
            "extra": "iterations: 5472\ncpu: 156617.39766081874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 157135.60048113207,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 157134.23390081464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 348349.8493150707,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 348339.4037066878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2886546.787692273,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2886424.615384617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2368163.1515151393,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2368062.8787878775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2336816.5461347313,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2336742.394014964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2343959.736180925,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2343849.246231157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1372297.995575215,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1372201.0324483763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2281068.9462102354,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2281062.5916870385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9670225.100000028,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 9670016.363636369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5514368.211764604,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 5514243.529411754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11609819.33695629,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11609666.304347793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46762.01415067689,
            "unit": "ns/iter",
            "extra": "iterations: 17879\ncpu: 46760.11521897195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 200367.18834815137,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 200357.86148806763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 160953.23295133724,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 160946.51512305037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 158728.9622748746,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 158720.54976303334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159609.0627216711,
            "unit": "ns/iter",
            "extra": "iterations: 5357\ncpu: 159606.83218219056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 353614.72323972866,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 353612.8205128204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2869893.938650337,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2869855.521472383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2377194.4758269885,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2377178.625954197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2342132.588972403,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2342071.1779448553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2359985.1037974814,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2359961.772151906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1370341.560472057,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1370353.5398230117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2286052.99510998,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2285974.57212713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9811170.018182028,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 9810970.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5401749.184971051,
            "unit": "ns/iter",
            "extra": "iterations: 173\ncpu: 5401645.664739877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45385.49870914536,
            "unit": "ns/iter",
            "extra": "iterations: 18205\ncpu: 45385.031584729375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 196608.3289715351,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 196608.44811753987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 159509.01063036147,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 159508.74673629212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157527.24659550955,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 157526.92307692225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 158194.9183786749,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 158193.00388673064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 342661.3660362444,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 342657.9196217494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2859040.9359757463,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2858840.548780497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2380430.0862944536,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2380302.791878173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2326913.437810924,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2326802.9850746226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2355052.4156172043,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2354982.115869031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1383988.9183975933,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1383912.9080118674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2284232.3618582757,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2284134.718826403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2623.813718783268,
            "unit": "ns/iter",
            "extra": "iterations: 266044\ncpu: 2623.606997338777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19565.360695060514,
            "unit": "ns/iter",
            "extra": "iterations: 35853\ncpu: 19564.98200987366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14412.88840672108,
            "unit": "ns/iter",
            "extra": "iterations: 48623\ncpu: 14412.541389877202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15253.01584848206,
            "unit": "ns/iter",
            "extra": "iterations: 45935\ncpu: 15252.733209970707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11647.725792231637,
            "unit": "ns/iter",
            "extra": "iterations: 60115\ncpu: 11646.890127256056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 79024.11024599583,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 79022.95192958709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 183798.98027872253,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 183800.42072048422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45109.21795944692,
            "unit": "ns/iter",
            "extra": "iterations: 15535\ncpu: 45106.44351464467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 44863.34976224084,
            "unit": "ns/iter",
            "extra": "iterations: 15562\ncpu: 44860.4870839222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45108.34770022442,
            "unit": "ns/iter",
            "extra": "iterations: 15545\ncpu: 45106.986169186894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 94521.88025977634,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 94516.20890271988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 85020.8281553422,
            "unit": "ns/iter",
            "extra": "iterations: 8240\ncpu: 85016.14077669817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24491.845246428315,
            "unit": "ns/iter",
            "extra": "iterations: 28568\ncpu: 24490.01680201604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115144.9763079917,
            "unit": "ns/iter",
            "extra": "iterations: 6078\ncpu: 115142.16847647318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 93614.44830814505,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 93611.51531362817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 93199.9448598089,
            "unit": "ns/iter",
            "extra": "iterations: 7490\ncpu: 93192.67022696891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 94583.40262020726,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 94579.44354403047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 170570.31781623006,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 170558.34755057265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 778592.2807990925,
            "unit": "ns/iter",
            "extra": "iterations: 901\ncpu: 778572.364039956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 661189.0774315184,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 661194.7119924449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 653276.7777777847,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 653228.2913165258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 658307.3414863377,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 658280.8090310465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 416243.98572277767,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 416214.0392623451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 642994.5013748687,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 642965.8111823912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24702.620576277295,
            "unit": "ns/iter",
            "extra": "iterations: 28285\ncpu: 24701.173767014425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 116837.91254563267,
            "unit": "ns/iter",
            "extra": "iterations: 6026\ncpu: 116831.28111516725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94280.94709279251,
            "unit": "ns/iter",
            "extra": "iterations: 7447\ncpu: 94278.82368738993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 93826.46007247569,
            "unit": "ns/iter",
            "extra": "iterations: 7451\ncpu: 93820.69520869789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 95062.86727346893,
            "unit": "ns/iter",
            "extra": "iterations: 7361\ncpu: 95059.57071050041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 172940.2098368739,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 172929.63420662397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 770532.4719472104,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 770491.309130927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 660153.1622641446,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 660146.2264150907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 654871.0383895298,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 654827.3408239606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 655981.6523364458,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 655959.4392523416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 417474.102089544,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 417442.4477611946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 642409.6773602208,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 642384.509624207 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}