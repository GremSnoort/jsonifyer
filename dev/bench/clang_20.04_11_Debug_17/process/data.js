window.BENCHMARK_DATA = {
  "lastUpdate": 1702392473058,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-11 20.04 Debug c++-17": [
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
        "date": 1702392466805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17754.87958077176,
            "unit": "ns/iter",
            "extra": "iterations: 41314\ncpu: 17753.884881638187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 158409.46680343238,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 158407.44125326377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 301515.89329162304,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 301496.0027806744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 442627.0147959019,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 442604.1326530613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 587714.9724647314,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 587683.5460040296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 592451.7909999735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592411.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 705737.9579188834,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 705706.8859984697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 821680.8371681626,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 821639.1150442483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 931743.2085020453,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 931722.9757085013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13439.948416288893,
            "unit": "ns/iter",
            "extra": "iterations: 51935\ncpu: 13439.738134206214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11200.28998895327,
            "unit": "ns/iter",
            "extra": "iterations: 62461\ncpu: 11199.868718080084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11238.786854957729,
            "unit": "ns/iter",
            "extra": "iterations: 62244\ncpu: 11238.520981942032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11297.653539107805,
            "unit": "ns/iter",
            "extra": "iterations: 61880\ncpu: 11297.2850678733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19067.62406014996,
            "unit": "ns/iter",
            "extra": "iterations: 36708\ncpu: 19067.069848534375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70021.1114993915,
            "unit": "ns/iter",
            "extra": "iterations: 12305\ncpu: 70020.22754977642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359863.1526427152,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 359854.460887949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 285668.0321285081,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 285659.3708166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 285850.35071882437,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285841.85891006415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282602.96157667733,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 282596.12454455136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 594284.3651226055,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 594265.0544959117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4968140.037433119,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4967988.770053482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4055771.2173912697,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4055695.6521739126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4106127.907079878,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4106015.044247783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4041388.530434816,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4041258.695652169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2377192.0871794443,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2377108.4615384587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3959416.3589743143,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3959350.854700856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15752857.970149666,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15752222.388059704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7049761.0899997195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7049493.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19889536.754717786,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 19888760.377358466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 79400.6153560178,
            "unit": "ns/iter",
            "extra": "iterations: 10758\ncpu: 79398.47555307679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 392460.7872243116,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 392448.11580882606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 319099.1848676966,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 319087.14125978504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314064.1228519249,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 314051.5173674578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308840.80988456635,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 308828.82395382423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505717.41000010207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505703.59999999683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5058532.637837891,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5058432.972972998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4120263.696035229,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4120174.4493392124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4163837.7155555245,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4163655.555555547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4139965.7511111503,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139820.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2408819.077720401,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408667.3575129635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4016147.5344825503,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4015987.9310344527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16336589.560606545,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16335890.909090912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6840695.680000408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6840442.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68905.03017067075,
            "unit": "ns/iter",
            "extra": "iterations: 12363\ncpu: 68903.14648548097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 359545.10337551986,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 359523.8396624477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 287379.4540884597,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 287369.40348525514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 300268.1816626427,
            "unit": "ns/iter",
            "extra": "iterations: 2923\ncpu: 300251.7276770442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285005.85466664087,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 284986.63333333476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 587124.6035182916,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 587101.4208389713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5028990.243243464,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5028582.702702714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4058706.3463204466,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4058548.917748911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4142303.7196256495,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4142118.2242990364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4062955.3799129506,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4062699.9999999767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2406843.1653746865,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2406739.018087849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3975813.585470452,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3975583.7606837703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6195.107227880843,
            "unit": "ns/iter",
            "extra": "iterations: 112993\ncpu: 6194.673121343793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41148.649931997374,
            "unit": "ns/iter",
            "extra": "iterations: 16911\ncpu: 41148.49506238547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33266.726996341546,
            "unit": "ns/iter",
            "extra": "iterations: 21051\ncpu: 33266.60491188069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33435.81403929753,
            "unit": "ns/iter",
            "extra": "iterations: 21682\ncpu: 33435.41647449515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24908.19399801056,
            "unit": "ns/iter",
            "extra": "iterations: 28124\ncpu: 24907.175366235067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 166656.92435774032,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166655.09039010602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 334318.5349282332,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 334311.578947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85547.63019226282,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 85546.10728696849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 83869.14249821109,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83864.32160804114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 84487.73545673031,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84478.7860576914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 171962.18574247207,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 171948.98865318194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 158914.25272232332,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158904.37840290432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49329.10331686752,
            "unit": "ns/iter",
            "extra": "iterations: 14170\ncpu: 49326.492589978836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 250819.24304068726,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 250797.03783011824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 198902.32190804597,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 198888.48900314045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 199888.05542857334,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 199872.54285714228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 199867.92382309958,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 199855.43509272614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338157.15255049046,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 338127.14148219756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1426627.225609723,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1426527.032520328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1190782.8146258427,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1190759.6938775457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1206025.1120689812,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1205940.172413782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1194745.4085470664,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1194663.7606837675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 770363.8068433044,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 770282.2295805711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1181947.420608029,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1181866.2162162056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49711.62814677464,
            "unit": "ns/iter",
            "extra": "iterations: 14062\ncpu: 49706.855354857675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 245408.21290775895,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 245391.23114696506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 201896.60051767022,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 201873.4541271217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 201683.18930957728,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 201668.02418072172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 201725.51982760715,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 201713.96551724043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339609.1829209087,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 339601.4556040706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1412849.038461644,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1412846.5587044617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1186535.1928934017,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1186464.9746193052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1199990.5783132112,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1199966.609294313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1184596.9006848407,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1184547.773972596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 765863.0765027226,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 765820.1092896287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1181296.4949494742,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1181204.3771043783 ns\nthreads: 1"
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
        "date": 1702392466805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17754.87958077176,
            "unit": "ns/iter",
            "extra": "iterations: 41314\ncpu: 17753.884881638187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 158409.46680343238,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 158407.44125326377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 301515.89329162304,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 301496.0027806744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 442627.0147959019,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 442604.1326530613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 587714.9724647314,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 587683.5460040296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 592451.7909999735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592411.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 705737.9579188834,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 705706.8859984697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 821680.8371681626,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 821639.1150442483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 931743.2085020453,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 931722.9757085013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13439.948416288893,
            "unit": "ns/iter",
            "extra": "iterations: 51935\ncpu: 13439.738134206214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11200.28998895327,
            "unit": "ns/iter",
            "extra": "iterations: 62461\ncpu: 11199.868718080084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11238.786854957729,
            "unit": "ns/iter",
            "extra": "iterations: 62244\ncpu: 11238.520981942032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11297.653539107805,
            "unit": "ns/iter",
            "extra": "iterations: 61880\ncpu: 11297.2850678733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19067.62406014996,
            "unit": "ns/iter",
            "extra": "iterations: 36708\ncpu: 19067.069848534375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70021.1114993915,
            "unit": "ns/iter",
            "extra": "iterations: 12305\ncpu: 70020.22754977642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359863.1526427152,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 359854.460887949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 285668.0321285081,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 285659.3708166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 285850.35071882437,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285841.85891006415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282602.96157667733,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 282596.12454455136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 594284.3651226055,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 594265.0544959117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4968140.037433119,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4967988.770053482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4055771.2173912697,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4055695.6521739126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4106127.907079878,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4106015.044247783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4041388.530434816,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4041258.695652169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2377192.0871794443,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2377108.4615384587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3959416.3589743143,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3959350.854700856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15752857.970149666,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15752222.388059704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7049761.0899997195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7049493.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19889536.754717786,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 19888760.377358466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 79400.6153560178,
            "unit": "ns/iter",
            "extra": "iterations: 10758\ncpu: 79398.47555307679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 392460.7872243116,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 392448.11580882606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 319099.1848676966,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 319087.14125978504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314064.1228519249,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 314051.5173674578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308840.80988456635,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 308828.82395382423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505717.41000010207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505703.59999999683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5058532.637837891,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5058432.972972998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4120263.696035229,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4120174.4493392124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4163837.7155555245,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4163655.555555547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4139965.7511111503,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139820.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2408819.077720401,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408667.3575129635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4016147.5344825503,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4015987.9310344527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16336589.560606545,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16335890.909090912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6840695.680000408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6840442.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68905.03017067075,
            "unit": "ns/iter",
            "extra": "iterations: 12363\ncpu: 68903.14648548097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 359545.10337551986,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 359523.8396624477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 287379.4540884597,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 287369.40348525514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 300268.1816626427,
            "unit": "ns/iter",
            "extra": "iterations: 2923\ncpu: 300251.7276770442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285005.85466664087,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 284986.63333333476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 587124.6035182916,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 587101.4208389713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5028990.243243464,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5028582.702702714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4058706.3463204466,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4058548.917748911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4142303.7196256495,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4142118.2242990364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4062955.3799129506,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4062699.9999999767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2406843.1653746865,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2406739.018087849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3975813.585470452,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3975583.7606837703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6195.107227880843,
            "unit": "ns/iter",
            "extra": "iterations: 112993\ncpu: 6194.673121343793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41148.649931997374,
            "unit": "ns/iter",
            "extra": "iterations: 16911\ncpu: 41148.49506238547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33266.726996341546,
            "unit": "ns/iter",
            "extra": "iterations: 21051\ncpu: 33266.60491188069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33435.81403929753,
            "unit": "ns/iter",
            "extra": "iterations: 21682\ncpu: 33435.41647449515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24908.19399801056,
            "unit": "ns/iter",
            "extra": "iterations: 28124\ncpu: 24907.175366235067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 166656.92435774032,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166655.09039010602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 334318.5349282332,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 334311.578947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85547.63019226282,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 85546.10728696849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 83869.14249821109,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83864.32160804114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 84487.73545673031,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84478.7860576914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 171962.18574247207,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 171948.98865318194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 158914.25272232332,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158904.37840290432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49329.10331686752,
            "unit": "ns/iter",
            "extra": "iterations: 14170\ncpu: 49326.492589978836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 250819.24304068726,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 250797.03783011824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 198902.32190804597,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 198888.48900314045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 199888.05542857334,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 199872.54285714228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 199867.92382309958,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 199855.43509272614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338157.15255049046,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 338127.14148219756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1426627.225609723,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1426527.032520328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1190782.8146258427,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1190759.6938775457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1206025.1120689812,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1205940.172413782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1194745.4085470664,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1194663.7606837675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 770363.8068433044,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 770282.2295805711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1181947.420608029,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1181866.2162162056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49711.62814677464,
            "unit": "ns/iter",
            "extra": "iterations: 14062\ncpu: 49706.855354857675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 245408.21290775895,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 245391.23114696506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 201896.60051767022,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 201873.4541271217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 201683.18930957728,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 201668.02418072172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 201725.51982760715,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 201713.96551724043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339609.1829209087,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 339601.4556040706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1412849.038461644,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1412846.5587044617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1186535.1928934017,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1186464.9746193052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1199990.5783132112,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1199966.609294313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1184596.9006848407,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1184547.773972596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 765863.0765027226,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 765820.1092896287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1181296.4949494742,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1181204.3771043783 ns\nthreads: 1"
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
        "date": 1702392466805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17754.87958077176,
            "unit": "ns/iter",
            "extra": "iterations: 41314\ncpu: 17753.884881638187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 158409.46680343238,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 158407.44125326377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 301515.89329162304,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 301496.0027806744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 442627.0147959019,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 442604.1326530613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 587714.9724647314,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 587683.5460040296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 592451.7909999735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592411.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 705737.9579188834,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 705706.8859984697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 821680.8371681626,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 821639.1150442483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 931743.2085020453,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 931722.9757085013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13439.948416288893,
            "unit": "ns/iter",
            "extra": "iterations: 51935\ncpu: 13439.738134206214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11200.28998895327,
            "unit": "ns/iter",
            "extra": "iterations: 62461\ncpu: 11199.868718080084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11238.786854957729,
            "unit": "ns/iter",
            "extra": "iterations: 62244\ncpu: 11238.520981942032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11297.653539107805,
            "unit": "ns/iter",
            "extra": "iterations: 61880\ncpu: 11297.2850678733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19067.62406014996,
            "unit": "ns/iter",
            "extra": "iterations: 36708\ncpu: 19067.069848534375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70021.1114993915,
            "unit": "ns/iter",
            "extra": "iterations: 12305\ncpu: 70020.22754977642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359863.1526427152,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 359854.460887949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 285668.0321285081,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 285659.3708166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 285850.35071882437,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285841.85891006415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282602.96157667733,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 282596.12454455136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 594284.3651226055,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 594265.0544959117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4968140.037433119,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4967988.770053482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4055771.2173912697,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4055695.6521739126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4106127.907079878,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4106015.044247783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4041388.530434816,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4041258.695652169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2377192.0871794443,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2377108.4615384587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3959416.3589743143,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3959350.854700856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15752857.970149666,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15752222.388059704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7049761.0899997195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7049493.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19889536.754717786,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 19888760.377358466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 79400.6153560178,
            "unit": "ns/iter",
            "extra": "iterations: 10758\ncpu: 79398.47555307679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 392460.7872243116,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 392448.11580882606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 319099.1848676966,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 319087.14125978504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314064.1228519249,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 314051.5173674578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308840.80988456635,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 308828.82395382423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505717.41000010207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505703.59999999683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5058532.637837891,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5058432.972972998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4120263.696035229,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4120174.4493392124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4163837.7155555245,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4163655.555555547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4139965.7511111503,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139820.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2408819.077720401,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408667.3575129635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4016147.5344825503,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4015987.9310344527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16336589.560606545,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16335890.909090912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6840695.680000408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6840442.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68905.03017067075,
            "unit": "ns/iter",
            "extra": "iterations: 12363\ncpu: 68903.14648548097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 359545.10337551986,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 359523.8396624477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 287379.4540884597,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 287369.40348525514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 300268.1816626427,
            "unit": "ns/iter",
            "extra": "iterations: 2923\ncpu: 300251.7276770442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285005.85466664087,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 284986.63333333476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 587124.6035182916,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 587101.4208389713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5028990.243243464,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5028582.702702714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4058706.3463204466,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4058548.917748911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4142303.7196256495,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4142118.2242990364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4062955.3799129506,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4062699.9999999767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2406843.1653746865,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2406739.018087849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3975813.585470452,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3975583.7606837703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6195.107227880843,
            "unit": "ns/iter",
            "extra": "iterations: 112993\ncpu: 6194.673121343793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41148.649931997374,
            "unit": "ns/iter",
            "extra": "iterations: 16911\ncpu: 41148.49506238547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33266.726996341546,
            "unit": "ns/iter",
            "extra": "iterations: 21051\ncpu: 33266.60491188069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33435.81403929753,
            "unit": "ns/iter",
            "extra": "iterations: 21682\ncpu: 33435.41647449515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24908.19399801056,
            "unit": "ns/iter",
            "extra": "iterations: 28124\ncpu: 24907.175366235067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 166656.92435774032,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166655.09039010602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 334318.5349282332,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 334311.578947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85547.63019226282,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 85546.10728696849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 83869.14249821109,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83864.32160804114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 84487.73545673031,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84478.7860576914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 171962.18574247207,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 171948.98865318194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 158914.25272232332,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158904.37840290432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49329.10331686752,
            "unit": "ns/iter",
            "extra": "iterations: 14170\ncpu: 49326.492589978836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 250819.24304068726,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 250797.03783011824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 198902.32190804597,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 198888.48900314045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 199888.05542857334,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 199872.54285714228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 199867.92382309958,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 199855.43509272614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338157.15255049046,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 338127.14148219756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1426627.225609723,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1426527.032520328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1190782.8146258427,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1190759.6938775457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1206025.1120689812,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1205940.172413782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1194745.4085470664,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1194663.7606837675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 770363.8068433044,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 770282.2295805711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1181947.420608029,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1181866.2162162056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49711.62814677464,
            "unit": "ns/iter",
            "extra": "iterations: 14062\ncpu: 49706.855354857675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 245408.21290775895,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 245391.23114696506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 201896.60051767022,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 201873.4541271217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 201683.18930957728,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 201668.02418072172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 201725.51982760715,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 201713.96551724043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339609.1829209087,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 339601.4556040706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1412849.038461644,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1412846.5587044617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1186535.1928934017,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1186464.9746193052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1199990.5783132112,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1199966.609294313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1184596.9006848407,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1184547.773972596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 765863.0765027226,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 765820.1092896287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1181296.4949494742,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1181204.3771043783 ns\nthreads: 1"
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
        "date": 1702392466805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17754.87958077176,
            "unit": "ns/iter",
            "extra": "iterations: 41314\ncpu: 17753.884881638187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 158409.46680343238,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 158407.44125326377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 301515.89329162304,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 301496.0027806744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 442627.0147959019,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 442604.1326530613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 587714.9724647314,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 587683.5460040296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 592451.7909999735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592411.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 705737.9579188834,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 705706.8859984697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 821680.8371681626,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 821639.1150442483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 931743.2085020453,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 931722.9757085013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13439.948416288893,
            "unit": "ns/iter",
            "extra": "iterations: 51935\ncpu: 13439.738134206214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11200.28998895327,
            "unit": "ns/iter",
            "extra": "iterations: 62461\ncpu: 11199.868718080084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11238.786854957729,
            "unit": "ns/iter",
            "extra": "iterations: 62244\ncpu: 11238.520981942032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11297.653539107805,
            "unit": "ns/iter",
            "extra": "iterations: 61880\ncpu: 11297.2850678733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19067.62406014996,
            "unit": "ns/iter",
            "extra": "iterations: 36708\ncpu: 19067.069848534375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70021.1114993915,
            "unit": "ns/iter",
            "extra": "iterations: 12305\ncpu: 70020.22754977642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359863.1526427152,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 359854.460887949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 285668.0321285081,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 285659.3708166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 285850.35071882437,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285841.85891006415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282602.96157667733,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 282596.12454455136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 594284.3651226055,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 594265.0544959117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4968140.037433119,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4967988.770053482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4055771.2173912697,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4055695.6521739126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4106127.907079878,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4106015.044247783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4041388.530434816,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4041258.695652169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2377192.0871794443,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2377108.4615384587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3959416.3589743143,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3959350.854700856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15752857.970149666,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15752222.388059704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7049761.0899997195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7049493.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19889536.754717786,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 19888760.377358466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 79400.6153560178,
            "unit": "ns/iter",
            "extra": "iterations: 10758\ncpu: 79398.47555307679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 392460.7872243116,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 392448.11580882606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 319099.1848676966,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 319087.14125978504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314064.1228519249,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 314051.5173674578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308840.80988456635,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 308828.82395382423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505717.41000010207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505703.59999999683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5058532.637837891,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5058432.972972998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4120263.696035229,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4120174.4493392124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4163837.7155555245,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4163655.555555547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4139965.7511111503,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139820.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2408819.077720401,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408667.3575129635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4016147.5344825503,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4015987.9310344527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16336589.560606545,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16335890.909090912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6840695.680000408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6840442.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68905.03017067075,
            "unit": "ns/iter",
            "extra": "iterations: 12363\ncpu: 68903.14648548097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 359545.10337551986,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 359523.8396624477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 287379.4540884597,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 287369.40348525514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 300268.1816626427,
            "unit": "ns/iter",
            "extra": "iterations: 2923\ncpu: 300251.7276770442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285005.85466664087,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 284986.63333333476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 587124.6035182916,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 587101.4208389713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5028990.243243464,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5028582.702702714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4058706.3463204466,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4058548.917748911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4142303.7196256495,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4142118.2242990364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4062955.3799129506,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4062699.9999999767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2406843.1653746865,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2406739.018087849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3975813.585470452,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3975583.7606837703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6195.107227880843,
            "unit": "ns/iter",
            "extra": "iterations: 112993\ncpu: 6194.673121343793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41148.649931997374,
            "unit": "ns/iter",
            "extra": "iterations: 16911\ncpu: 41148.49506238547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33266.726996341546,
            "unit": "ns/iter",
            "extra": "iterations: 21051\ncpu: 33266.60491188069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33435.81403929753,
            "unit": "ns/iter",
            "extra": "iterations: 21682\ncpu: 33435.41647449515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24908.19399801056,
            "unit": "ns/iter",
            "extra": "iterations: 28124\ncpu: 24907.175366235067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 166656.92435774032,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166655.09039010602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 334318.5349282332,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 334311.578947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85547.63019226282,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 85546.10728696849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 83869.14249821109,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83864.32160804114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 84487.73545673031,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84478.7860576914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 171962.18574247207,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 171948.98865318194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 158914.25272232332,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158904.37840290432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49329.10331686752,
            "unit": "ns/iter",
            "extra": "iterations: 14170\ncpu: 49326.492589978836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 250819.24304068726,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 250797.03783011824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 198902.32190804597,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 198888.48900314045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 199888.05542857334,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 199872.54285714228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 199867.92382309958,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 199855.43509272614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338157.15255049046,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 338127.14148219756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1426627.225609723,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1426527.032520328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1190782.8146258427,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1190759.6938775457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1206025.1120689812,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1205940.172413782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1194745.4085470664,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1194663.7606837675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 770363.8068433044,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 770282.2295805711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1181947.420608029,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1181866.2162162056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49711.62814677464,
            "unit": "ns/iter",
            "extra": "iterations: 14062\ncpu: 49706.855354857675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 245408.21290775895,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 245391.23114696506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 201896.60051767022,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 201873.4541271217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 201683.18930957728,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 201668.02418072172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 201725.51982760715,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 201713.96551724043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339609.1829209087,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 339601.4556040706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1412849.038461644,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1412846.5587044617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1186535.1928934017,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1186464.9746193052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1199990.5783132112,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1199966.609294313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1184596.9006848407,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1184547.773972596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 765863.0765027226,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 765820.1092896287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1181296.4949494742,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1181204.3771043783 ns\nthreads: 1"
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
        "date": 1702392466805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17754.87958077176,
            "unit": "ns/iter",
            "extra": "iterations: 41314\ncpu: 17753.884881638187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 158409.46680343238,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 158407.44125326377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 301515.89329162304,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 301496.0027806744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 442627.0147959019,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 442604.1326530613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 587714.9724647314,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 587683.5460040296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 592451.7909999735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592411.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 705737.9579188834,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 705706.8859984697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 821680.8371681626,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 821639.1150442483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 931743.2085020453,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 931722.9757085013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13439.948416288893,
            "unit": "ns/iter",
            "extra": "iterations: 51935\ncpu: 13439.738134206214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11200.28998895327,
            "unit": "ns/iter",
            "extra": "iterations: 62461\ncpu: 11199.868718080084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11238.786854957729,
            "unit": "ns/iter",
            "extra": "iterations: 62244\ncpu: 11238.520981942032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11297.653539107805,
            "unit": "ns/iter",
            "extra": "iterations: 61880\ncpu: 11297.2850678733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19067.62406014996,
            "unit": "ns/iter",
            "extra": "iterations: 36708\ncpu: 19067.069848534375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70021.1114993915,
            "unit": "ns/iter",
            "extra": "iterations: 12305\ncpu: 70020.22754977642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359863.1526427152,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 359854.460887949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 285668.0321285081,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 285659.3708166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 285850.35071882437,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285841.85891006415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282602.96157667733,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 282596.12454455136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 594284.3651226055,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 594265.0544959117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4968140.037433119,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4967988.770053482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4055771.2173912697,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4055695.6521739126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4106127.907079878,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4106015.044247783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4041388.530434816,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4041258.695652169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2377192.0871794443,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2377108.4615384587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3959416.3589743143,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3959350.854700856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15752857.970149666,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15752222.388059704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7049761.0899997195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7049493.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19889536.754717786,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 19888760.377358466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 79400.6153560178,
            "unit": "ns/iter",
            "extra": "iterations: 10758\ncpu: 79398.47555307679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 392460.7872243116,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 392448.11580882606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 319099.1848676966,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 319087.14125978504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314064.1228519249,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 314051.5173674578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308840.80988456635,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 308828.82395382423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505717.41000010207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505703.59999999683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5058532.637837891,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5058432.972972998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4120263.696035229,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4120174.4493392124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4163837.7155555245,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4163655.555555547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4139965.7511111503,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139820.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2408819.077720401,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408667.3575129635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4016147.5344825503,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4015987.9310344527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16336589.560606545,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16335890.909090912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6840695.680000408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6840442.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68905.03017067075,
            "unit": "ns/iter",
            "extra": "iterations: 12363\ncpu: 68903.14648548097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 359545.10337551986,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 359523.8396624477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 287379.4540884597,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 287369.40348525514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 300268.1816626427,
            "unit": "ns/iter",
            "extra": "iterations: 2923\ncpu: 300251.7276770442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285005.85466664087,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 284986.63333333476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 587124.6035182916,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 587101.4208389713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5028990.243243464,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5028582.702702714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4058706.3463204466,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4058548.917748911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4142303.7196256495,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4142118.2242990364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4062955.3799129506,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4062699.9999999767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2406843.1653746865,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2406739.018087849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3975813.585470452,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3975583.7606837703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6195.107227880843,
            "unit": "ns/iter",
            "extra": "iterations: 112993\ncpu: 6194.673121343793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41148.649931997374,
            "unit": "ns/iter",
            "extra": "iterations: 16911\ncpu: 41148.49506238547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33266.726996341546,
            "unit": "ns/iter",
            "extra": "iterations: 21051\ncpu: 33266.60491188069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33435.81403929753,
            "unit": "ns/iter",
            "extra": "iterations: 21682\ncpu: 33435.41647449515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24908.19399801056,
            "unit": "ns/iter",
            "extra": "iterations: 28124\ncpu: 24907.175366235067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 166656.92435774032,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166655.09039010602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 334318.5349282332,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 334311.578947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85547.63019226282,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 85546.10728696849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 83869.14249821109,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83864.32160804114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 84487.73545673031,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84478.7860576914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 171962.18574247207,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 171948.98865318194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 158914.25272232332,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158904.37840290432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49329.10331686752,
            "unit": "ns/iter",
            "extra": "iterations: 14170\ncpu: 49326.492589978836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 250819.24304068726,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 250797.03783011824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 198902.32190804597,
            "unit": "ns/iter",
            "extra": "iterations: 3501\ncpu: 198888.48900314045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 199888.05542857334,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 199872.54285714228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 199867.92382309958,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 199855.43509272614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338157.15255049046,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 338127.14148219756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1426627.225609723,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1426527.032520328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1190782.8146258427,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1190759.6938775457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1206025.1120689812,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1205940.172413782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1194745.4085470664,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1194663.7606837675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 770363.8068433044,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 770282.2295805711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1181947.420608029,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1181866.2162162056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49711.62814677464,
            "unit": "ns/iter",
            "extra": "iterations: 14062\ncpu: 49706.855354857675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 245408.21290775895,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 245391.23114696506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 201896.60051767022,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 201873.4541271217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 201683.18930957728,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 201668.02418072172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 201725.51982760715,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 201713.96551724043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 339609.1829209087,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 339601.4556040706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1412849.038461644,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1412846.5587044617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1186535.1928934017,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1186464.9746193052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1199990.5783132112,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1199966.609294313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1184596.9006848407,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1184547.773972596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 765863.0765027226,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 765820.1092896287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1181296.4949494742,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1181204.3771043783 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}