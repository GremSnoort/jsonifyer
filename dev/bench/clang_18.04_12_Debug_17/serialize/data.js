window.BENCHMARK_DATA = {
  "lastUpdate": 1702394202960,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-12 18.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392422089,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9112.045172315138,
            "unit": "ns/iter",
            "extra": "iterations: 76662\ncpu: 9111.279382223267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 105556.0500801797,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 105547.52682866657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 202635.9684381478,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 202615.22394987228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 303208.5683251786,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 303172.0392431675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 394835.1277086042,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 394805.3941908714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 490319.9076056488,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 490286.14084507065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 586659.4409182959,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 586609.9257258611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 548342.090999995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548330.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 626595.3760000684,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626542.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7019.984584698612,
            "unit": "ns/iter",
            "extra": "iterations: 99771\ncpu: 7019.380381072648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5878.776891294338,
            "unit": "ns/iter",
            "extra": "iterations: 119323\ncpu: 5878.500372937319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5849.619827296927,
            "unit": "ns/iter",
            "extra": "iterations: 119280\ncpu: 5849.387994634463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5780.670440323778,
            "unit": "ns/iter",
            "extra": "iterations: 121456\ncpu: 5780.206823870379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10146.19615938199,
            "unit": "ns/iter",
            "extra": "iterations: 68791\ncpu: 10145.55392420521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53360.55348146286,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 53358.306420359135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 223861.32457053656,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 223855.2837064028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 176918.76357231566,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 176914.4633236634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 173741.63834999793,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 173737.53318358242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 178583.229656045,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 178574.8531879196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 385210.1299911638,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 385191.08251996536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3234564.044368689,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3234486.348122868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2673413.9771429,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2673289.1428571395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2649832.4857955943,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2649726.4204545487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2651617.778409135,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2651295.7386363572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1543032.4657763124,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1542935.3923205337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2558650.6933701676,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2558463.812154693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10658777.797979236,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10657723.232323227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6147314.730263157,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6146901.315789485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12643113.321429057,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12642048.809523808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51148.43444698743,
            "unit": "ns/iter",
            "extra": "iterations: 16193\ncpu: 51143.506453405906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 219459.5520779896,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 219444.12519240682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 182159.74610294763,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 182147.78987828328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 177795.5059436933,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 177781.25130344095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178921.91841493032,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 178908.03136257728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 393464.32076325483,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 393435.80190822465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3202495.271477762,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3202292.4398625363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2705463.6541785556,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2705233.1412103693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2684091.8419540017,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2683956.609195411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2671356.959885242,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2671233.524355316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1577681.7901862804,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1577579.1878172562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2587130.774999954,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2586922.2222222197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10961538.051020045,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10960507.142857146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6305733.385135215,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6305132.432432407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49840.596280027945,
            "unit": "ns/iter",
            "extra": "iterations: 16613\ncpu: 49834.701739601245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 211608.3119880991,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 211595.01116902402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 174262.1665984476,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 174250.6549324603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 172332.8786525996,
            "unit": "ns/iter",
            "extra": "iterations: 4928\ncpu: 172320.4139610393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 177425.34827945204,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 177350.32325338823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 388586.1909009733,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 388568.24264049926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3208977.356164596,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3208884.2465753453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2690582.6206893967,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2690385.919540235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2681386.2708931807,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2681259.3659942546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2691482.637931065,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2691378.7356321933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1566761.2907563348,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1566706.0504201674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2580854.6648197556,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2580483.6565096905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3187.228676973522,
            "unit": "ns/iter",
            "extra": "iterations: 219270\ncpu: 3187.135951110503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22501.144078143385,
            "unit": "ns/iter",
            "extra": "iterations: 31122\ncpu: 22500.890045626864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17072.024914841015,
            "unit": "ns/iter",
            "extra": "iterations: 41100\ncpu: 17071.506082725035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17838.172669951175,
            "unit": "ns/iter",
            "extra": "iterations: 39173\ncpu: 17837.204196768154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13345.723726296748,
            "unit": "ns/iter",
            "extra": "iterations: 52524\ncpu: 13345.160307668924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 90902.33921619257,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 90901.3495977155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 205592.87318436438,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 205586.98324022524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 51903.74734890672,
            "unit": "ns/iter",
            "extra": "iterations: 13485\ncpu: 51901.11976269924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 51745.76543482985,
            "unit": "ns/iter",
            "extra": "iterations: 13557\ncpu: 51743.19539721158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 51590.46695645083,
            "unit": "ns/iter",
            "extra": "iterations: 13573\ncpu: 51588.60237235701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 108074.97392780236,
            "unit": "ns/iter",
            "extra": "iterations: 6482\ncpu: 108073.43412526928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86025.7732644003,
            "unit": "ns/iter",
            "extra": "iterations: 8124\ncpu: 86024.56917774443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 28158.38933483728,
            "unit": "ns/iter",
            "extra": "iterations: 24791\ncpu: 28157.649953612385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 138214.77906976998,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 138212.908947577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 111396.03370428238,
            "unit": "ns/iter",
            "extra": "iterations: 6290\ncpu: 111393.19554849096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 112336.4358439126,
            "unit": "ns/iter",
            "extra": "iterations: 6227\ncpu: 112331.15464910895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 112557.31123596383,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 112554.54253611597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 196273.57002800945,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 196260.28011204506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 878094.0476190164,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 878020.8020050025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 754021.3526881807,
            "unit": "ns/iter",
            "extra": "iterations: 930\ncpu: 754011.3978494649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749869.4743590585,
            "unit": "ns/iter",
            "extra": "iterations: 936\ncpu: 749841.6666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 740879.862473315,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 740831.8763326231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 472692.25589226646,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 472667.2053872008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 727753.9656964538,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 727731.4968814909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 28196.094045657686,
            "unit": "ns/iter",
            "extra": "iterations: 24839\ncpu: 28195.704335923383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 140205.23286863643,
            "unit": "ns/iter",
            "extra": "iterations: 5093\ncpu: 140198.86118201417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 110794.02008857414,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 110788.10503005178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 112430.43460797369,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 112428.92030848298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 112833.45151418862,
            "unit": "ns/iter",
            "extra": "iterations: 6208\ncpu: 112831.86211340352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 192964.73417723103,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 192962.0803522325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 872974.05875006,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 872962.1250000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 754732.4892241318,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 754693.6422413671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 749026.0938165938,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 749006.5031982872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 751335.295258546,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 751324.784482756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 473427.9648410842,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473421.29817444243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 731120.8800000426,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 731101.5789473698 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394202541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9042.95722084599,
            "unit": "ns/iter",
            "extra": "iterations: 77117\ncpu: 9042.693569511262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 104164.27536761027,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 104162.1825252157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 204209.09720248327,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 204207.302038881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 301963.73363509506,
            "unit": "ns/iter",
            "extra": "iterations: 2872\ncpu: 301952.0543175489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 395743.813450055,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 395732.7959465685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 490266.9594594608,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 490263.0067567571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 586358.8596373136,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 586328.81128274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 548444.4549999806,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548431.400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 624414.5370000069,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624414.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7100.741549625934,
            "unit": "ns/iter",
            "extra": "iterations: 100321\ncpu: 7100.210324857205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5738.573594152571,
            "unit": "ns/iter",
            "extra": "iterations: 122435\ncpu: 5738.467758402429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5849.455305150803,
            "unit": "ns/iter",
            "extra": "iterations: 120383\ncpu: 5849.394017427709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5734.986835609163,
            "unit": "ns/iter",
            "extra": "iterations: 121540\ncpu: 5734.935000822766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9855.083149529788,
            "unit": "ns/iter",
            "extra": "iterations: 70728\ncpu: 9855.08285261848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 55284.13773055413,
            "unit": "ns/iter",
            "extra": "iterations: 14964\ncpu: 55283.186313819795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 209366.2007335059,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 209356.0146699269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 177575.19879642423,
            "unit": "ns/iter",
            "extra": "iterations: 4819\ncpu: 177572.25565469998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174778.52155260215,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 174774.68845760945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176879.8451171398,
            "unit": "ns/iter",
            "extra": "iterations: 4823\ncpu: 176878.1671159028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 389428.06771295675,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 389411.390134529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3201671.9488054477,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3201534.8122866913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2628881.9888268895,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2628838.826815638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2626841.1610169616,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2626766.9491525465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2599789.4986071605,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2599720.3342618328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1546921.8116667587,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1546846.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2534969.939890594,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2534936.6120218574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10576995.75000015,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10576624.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5907816.641509717,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5907666.037735849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12704682.927711386,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12704255.421686716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52612.49379178602,
            "unit": "ns/iter",
            "extra": "iterations: 15705\ncpu: 52610.77363896864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 212926.02383907398,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 212920.41221753156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 173701.3940937047,
            "unit": "ns/iter",
            "extra": "iterations: 4910\ncpu: 173698.5947046845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 181038.9642706126,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 181036.0465116271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 175978.62347842136,
            "unit": "ns/iter",
            "extra": "iterations: 4847\ncpu: 175973.63317516053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 402870.41620372416,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 402867.3611111107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3207107.599314986,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3207057.876712329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2669349.8857142525,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2669273.1428571343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2671393.7020056434,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2671324.6418338115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2641893.935028015,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2641875.141242946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1565650.5328836755,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1565617.3693085974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2569965.2644627634,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2568981.267217626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10881947.212121278,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10881440.404040378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6135950.927631633,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6135494.078947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50129.48969572293,
            "unit": "ns/iter",
            "extra": "iterations: 16498\ncpu: 50129.039883622376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 203540.97736477718,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 203531.8799142247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 171302.21597277405,
            "unit": "ns/iter",
            "extra": "iterations: 4996\ncpu: 171296.13690952747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 171910.23954142886,
            "unit": "ns/iter",
            "extra": "iterations: 4972\ncpu: 171901.3274336273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 180731.80909092678,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 180725.68710359422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 390992.36544551916,
            "unit": "ns/iter",
            "extra": "iterations: 2211\ncpu: 390979.01402080595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3220401.257731892,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3220369.4158075447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2648329.1444759658,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2648312.7478753715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2667174.0487108375,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2667063.323782237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2644906.382436205,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2644874.2209631638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1560745.52605042,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1560708.9075630284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2575460.419889382,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2575387.2928176713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3182.391439113126,
            "unit": "ns/iter",
            "extra": "iterations: 220351\ncpu: 3182.3041420279565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22890.30650114061,
            "unit": "ns/iter",
            "extra": "iterations: 30610\ncpu: 22889.86605684415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17415.65696460662,
            "unit": "ns/iter",
            "extra": "iterations: 40232\ncpu: 17415.338536488518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16594.471074769535,
            "unit": "ns/iter",
            "extra": "iterations: 42195\ncpu: 16593.999289015403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13223.467564654797,
            "unit": "ns/iter",
            "extra": "iterations: 52859\ncpu: 13223.227832535451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 91894.57369790747,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 91894.83072916672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 205314.13378219533,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 205305.70843091636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 51737.00731761498,
            "unit": "ns/iter",
            "extra": "iterations: 13529\ncpu: 51736.46980560234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 51507.25246215325,
            "unit": "ns/iter",
            "extra": "iterations: 13606\ncpu: 51506.11494928672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 52168.4428833252,
            "unit": "ns/iter",
            "extra": "iterations: 13096\ncpu: 52163.18723274299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 108547.7754784584,
            "unit": "ns/iter",
            "extra": "iterations: 6427\ncpu: 108547.84502878485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 96301.50527324472,
            "unit": "ns/iter",
            "extra": "iterations: 7301\ncpu: 96300.58896041583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 28231.482929002137,
            "unit": "ns/iter",
            "extra": "iterations: 24691\ncpu: 28230.56984326325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 137177.44062130814,
            "unit": "ns/iter",
            "extra": "iterations: 5086\ncpu: 137172.17852929764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110738.83929423137,
            "unit": "ns/iter",
            "extra": "iterations: 6291\ncpu: 110734.77984422073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 111513.4081761968,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 111508.92093170613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 112730.03574304152,
            "unit": "ns/iter",
            "extra": "iterations: 6211\ncpu: 112727.86990822699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 195438.6891777408,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 195438.73975699162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 878426.2072864734,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 878392.7135678361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 741707.6167728297,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 741663.0573248445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 749055.064171142,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 749037.3262032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 740373.4211640198,
            "unit": "ns/iter",
            "extra": "iterations: 945\ncpu: 740354.3915343834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 474181.98104266607,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 474162.0853080536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 725769.7852696576,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 725726.5560165916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27881.85139356163,
            "unit": "ns/iter",
            "extra": "iterations: 24972\ncpu: 27881.57536440762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 136969.9858961826,
            "unit": "ns/iter",
            "extra": "iterations: 5105\ncpu: 136965.6807051921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 114264.17684276603,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 114262.40113887966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110805.8516761524,
            "unit": "ns/iter",
            "extra": "iterations: 6324\ncpu: 110800.6641366238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 111522.24055476491,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 111520.03825920532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 196298.65695885764,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 196298.90786894382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 876057.1460674413,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 876044.194756564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 745292.3198725117,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 745284.6971307172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 749344.8736617273,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 749329.87152033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 769937.9184322053,
            "unit": "ns/iter",
            "extra": "iterations: 944\ncpu: 769931.5677966173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 471295.34097035625,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471281.06469002465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 721006.5623069752,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 720990.4222451064 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}