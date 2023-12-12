window.BENCHMARK_DATA = {
  "lastUpdate": 1702381103820,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 20.04 Release c++-17": [
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
        "date": 1702381103312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1838.8535381936993,
            "unit": "ns/iter",
            "extra": "iterations: 369878\ncpu: 1838.717360859527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25190.555920352286,
            "unit": "ns/iter",
            "extra": "iterations: 32895\ncpu: 25189.560723514212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50561.14134231541,
            "unit": "ns/iter",
            "extra": "iterations: 16032\ncpu: 50557.64720558881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64249.00657514381,
            "unit": "ns/iter",
            "extra": "iterations: 13840\ncpu: 64246.112716763004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 89508.12832459537,
            "unit": "ns/iter",
            "extra": "iterations: 10302\ncpu: 89505.1543389633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 111735.57919075296,
            "unit": "ns/iter",
            "extra": "iterations: 7785\ncpu: 111730.01926782275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 137646.83660632267,
            "unit": "ns/iter",
            "extra": "iterations: 6518\ncpu: 137640.30377416383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 157812.91151889402,
            "unit": "ns/iter",
            "extra": "iterations: 5504\ncpu: 157805.12354651175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 180440.1933442204,
            "unit": "ns/iter",
            "extra": "iterations: 4898\ncpu: 180433.19722335652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1429.3359352048117,
            "unit": "ns/iter",
            "extra": "iterations: 490160\ncpu: 1429.261669658887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1145.509843437693,
            "unit": "ns/iter",
            "extra": "iterations: 613302\ncpu: 1145.4368320990334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1130.692670173994,
            "unit": "ns/iter",
            "extra": "iterations: 617750\ncpu: 1130.6703358964003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1136.807148027951,
            "unit": "ns/iter",
            "extra": "iterations: 614715\ncpu: 1136.7689091692903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2220.198124970286,
            "unit": "ns/iter",
            "extra": "iterations: 315195\ncpu: 2220.084709465569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7417.048825442594,
            "unit": "ns/iter",
            "extra": "iterations: 110680\ncpu: 7416.881098662821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 43453.69103390413,
            "unit": "ns/iter",
            "extra": "iterations: 19083\ncpu: 43451.349368547955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33319.11427421066,
            "unit": "ns/iter",
            "extra": "iterations: 24835\ncpu: 33318.64707066638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32837.042717901066,
            "unit": "ns/iter",
            "extra": "iterations: 24931\ncpu: 32836.3122217319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32535.30266276947,
            "unit": "ns/iter",
            "extra": "iterations: 25312\ncpu: 32534.390802781196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81376.00868681096,
            "unit": "ns/iter",
            "extra": "iterations: 10821\ncpu: 81371.53682654124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 810666.271711083,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 810615.0472914894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 668076.0120000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668063.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 669037.994000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669008.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 669418.7106963374,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 669369.8492462318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 472351.0140464738,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 472336.25067531073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 661303.3240000163,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661256.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3589891.977272707,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3589789.015151508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1587569.3480475096,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1587564.6859083152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4692355.0298506925,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4692188.557213925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11478.425278187342,
            "unit": "ns/iter",
            "extra": "iterations: 73961\ncpu: 11478.403482916692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50693.57369999921,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50693.15000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 46167.20589865773,
            "unit": "ns/iter",
            "extra": "iterations: 18038\ncpu: 46166.160328196114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46551.81525395722,
            "unit": "ns/iter",
            "extra": "iterations: 18133\ncpu: 46550.355705068374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 45783.93523372601,
            "unit": "ns/iter",
            "extra": "iterations: 18312\ncpu: 45781.91896024455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91104.23175335432,
            "unit": "ns/iter",
            "extra": "iterations: 9536\ncpu: 91100.62919463096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 848058.3068592172,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 848035.920577617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 696726.1060383104,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 696723.7849779081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 690979.7732942083,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 690983.5656639793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 686875.7684441302,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 686881.0080350622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 486089.04537905945,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 486083.3978970673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 677227.5648414724,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 677194.4524495713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3761528.18548387,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3761477.0161290374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1604574.6530611566,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1604566.3265306167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7580.823456677197,
            "unit": "ns/iter",
            "extra": "iterations: 109180\ncpu: 7580.703425535826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 42724.731849632444,
            "unit": "ns/iter",
            "extra": "iterations: 19366\ncpu: 42725.00258184447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34305.84945123182,
            "unit": "ns/iter",
            "extra": "iterations: 24145\ncpu: 34305.29716297374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 33868.37474416593,
            "unit": "ns/iter",
            "extra": "iterations: 24430\ncpu: 33868.23577568542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 33891.76054192059,
            "unit": "ns/iter",
            "extra": "iterations: 24284\ncpu: 33891.59117114165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 76658.30698872039,
            "unit": "ns/iter",
            "extra": "iterations: 11261\ncpu: 76657.9522244911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 836281.2493391924,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 836278.1497797337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 669739.0059999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669744.2000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 669434.1280000345,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669420.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 666265.495999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666255.299999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 476605.5539215573,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 476602.8867102418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 659129.5359999663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659125.7000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 592.8247490838206,
            "unit": "ns/iter",
            "extra": "iterations: 1185854\ncpu: 592.820617040548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4401.23146696136,
            "unit": "ns/iter",
            "extra": "iterations: 159418\ncpu: 4401.213790161698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3422.3592435427513,
            "unit": "ns/iter",
            "extra": "iterations: 203845\ncpu: 3422.328239593826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3522.377665666277,
            "unit": "ns/iter",
            "extra": "iterations: 198215\ncpu: 3522.401432787635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2561.5234218720575,
            "unit": "ns/iter",
            "extra": "iterations: 272950\ncpu: 2561.4848873420156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21738.582072465397,
            "unit": "ns/iter",
            "extra": "iterations: 32319\ncpu: 21738.5377022803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45643.029342722984,
            "unit": "ns/iter",
            "extra": "iterations: 15336\ncpu: 45642.06442357834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10853.78578327504,
            "unit": "ns/iter",
            "extra": "iterations: 64192\ncpu: 10853.246510468613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10715.309147300874,
            "unit": "ns/iter",
            "extra": "iterations: 65451\ncpu: 10715.00817405394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10729.003460578711,
            "unit": "ns/iter",
            "extra": "iterations: 65307\ncpu: 10728.927986280192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20753.486824514024,
            "unit": "ns/iter",
            "extra": "iterations: 33661\ncpu: 20753.26639137257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20949.216647184676,
            "unit": "ns/iter",
            "extra": "iterations: 33363\ncpu: 20948.730629739708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6310.524609476597,
            "unit": "ns/iter",
            "extra": "iterations: 111197\ncpu: 6305.60716566093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 32079.3607414878,
            "unit": "ns/iter",
            "extra": "iterations: 21794\ncpu: 32078.829035514675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25877.469589605633,
            "unit": "ns/iter",
            "extra": "iterations: 27096\ncpu: 25877.254945379347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25734.761764599145,
            "unit": "ns/iter",
            "extra": "iterations: 27179\ncpu: 25734.52665660995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26250.47322301658,
            "unit": "ns/iter",
            "extra": "iterations: 26590\ncpu: 26250.631816472658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 56996.166693833315,
            "unit": "ns/iter",
            "extra": "iterations: 12268\ncpu: 56994.3593087707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 212590.74264035988,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 212587.31411229123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 178941.3513928011,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 178940.45489394228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 178857.24565883042,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 178856.61389172514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 179942.97189273566,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 179941.6451779261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 106612.34418534061,
            "unit": "ns/iter",
            "extra": "iterations: 6604\ncpu: 106611.87159297359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 180143.01570950056,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 180144.14112799487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6317.8552257855945,
            "unit": "ns/iter",
            "extra": "iterations: 111256\ncpu: 6317.797691809834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31726.06973374382,
            "unit": "ns/iter",
            "extra": "iterations: 22084\ncpu: 31726.276942582575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26738.987663751395,
            "unit": "ns/iter",
            "extra": "iterations: 26183\ncpu: 26738.81908108314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26654.268621386847,
            "unit": "ns/iter",
            "extra": "iterations: 26193\ncpu: 26654.442026495595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27265.715581203076,
            "unit": "ns/iter",
            "extra": "iterations: 25473\ncpu: 27265.18274251153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 58767.17361344782,
            "unit": "ns/iter",
            "extra": "iterations: 11900\ncpu: 58766.72268907599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 209036.68385183965,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 209033.51111111013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 179362.8333759894,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 179361.96570258544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 178408.52620864322,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 178409.54198473273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 179711.60620831867,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179701.53925089835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 105899.92799878385,
            "unit": "ns/iter",
            "extra": "iterations: 6611\ncpu: 105894.79655120184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 178696.78938008513,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 178685.06097560807 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}