window.BENCHMARK_DATA = {
  "lastUpdate": 1702394260400,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-16 18.04 Debug c++-17": [
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
        "date": 1702394247557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15868.092241906177,
            "unit": "ns/iter",
            "extra": "iterations: 44199\ncpu: 15867.766239055181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149970.24575370937,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 149962.65038924277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284608.73060556833,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284607.070376432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417616.02176019526,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417595.5996131526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556792.0158528985,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 556744.3880786301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579432.9450000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578735.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662399.2349090754,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 662368.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771444.2539550498,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 771396.0033305588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 877021.7140151414,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876981.9128787867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12912.430573458565,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12912.0861110088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10759.985006399973,
            "unit": "ns/iter",
            "extra": "iterations: 65628\ncpu: 10759.628512220395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11160.887673154077,
            "unit": "ns/iter",
            "extra": "iterations: 65621\ncpu: 11160.608646622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.530446940931,
            "unit": "ns/iter",
            "extra": "iterations: 65803\ncpu: 10663.454553743744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18650.518202077496,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18649.925705794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63089.91321309635,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 63088.76702245127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329477.76665382966,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329475.7027339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258399.72473444126,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258393.50531107705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254907.25237528342,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254899.04988123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250282.6636229699,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 250283.0338733426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 539501.8910001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539460.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4612731.681592225,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4612445.77114428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3773025.211382365,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772743.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3761151.676113598,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3761045.3441295526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3772268.076922937,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772034.4129554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2234407.836144454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2234215.6626506033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3676472.372294149,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3676135.0649350625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14915374.887324797,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914684.50704228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6624359.690000575,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6623884.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18448004.241379138,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18446515.517241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67342.79768785999,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 67339.33011323161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355495.355868951,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355473.28909166245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287954.5847343884,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 287939.94620040484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291206.7326766323,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291199.3885869553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284639.8965863448,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 284620.78313252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 542298.446000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542299.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4708696.863636333,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4708530.8080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850880.8893442117,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850792.2131147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3830175.459016726,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830146.311475427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3810093.346939019,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810016.3265306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2255509.175182389,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2255254.014598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3727649.3999997913,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3727617.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15056011.30985833,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15055597.183098579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525330.310000755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525195.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.73040000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57532.35000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312589.31386861333,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312575.54744525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 245893.25273776666,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 245882.99711815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245151.14261072798,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 245146.86601495225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243271.21064616562,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243259.77796754907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 508541.25600005774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508511.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4665347.195979583,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4665056.281407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3802680.5365853664,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802481.7073170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3786215.4593495885,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786051.219512191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3775547.303643997,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775362.7530364273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2224777.9499999913,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2224662.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3676626.430830097,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676358.4980236925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.923945456648,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 6183.684774048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39267.59604059978,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 39266.68723010472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31737.1791891783,
            "unit": "ns/iter",
            "extra": "iterations: 22027\ncpu: 31736.75943160654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31952.839790574504,
            "unit": "ns/iter",
            "extra": "iterations: 21965\ncpu: 31951.30890052359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23785.635062062916,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 23785.750722666093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188375.02892342993,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 188371.7728976963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314557.2726457471,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 314551.2556053781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77949.74355268887,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77943.55269008405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79282.4899799614,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 79111.96838120696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77634.03195739158,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77625.7989347551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 163555.74296435592,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163546.29455910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148259.3902284247,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148254.67428088095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47845.80514403178,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 47842.359396434025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228449.36910996187,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228430.85732984144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185855.03274758716,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 185840.20234291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187964.71126005656,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 187957.58713136657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187110.92457357637,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 187108.04904051192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 352603.8177711145,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 352593.67469879764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317492.1657250305,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317494.3502824896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096569.8726414924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096491.1949685568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102258.0298742924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102146.2264151112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098687.1381476873,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098596.8602825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 720202.1280991954,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 720152.1694214864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086997.8602484406,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086979.6583850922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46959.448386881035,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 46956.288148098785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227131.82586092822,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227125.4385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188409.22192297585,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 188407.59493670976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187493.8986088673,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 187490.23542000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186828.90565030678,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186826.75906183428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 350239.16799997323,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 350226.54999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1316965.2052730748,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1316964.9717513982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1089172.2632398645,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089135.5140186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1106633.9257503478,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106608.0568720335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1089182.6376361167,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089147.278382565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725233.1854921689,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 725219.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1090652.9517133676,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090653.5825545245 ns\nthreads: 1"
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
        "date": 1702394247557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15868.092241906177,
            "unit": "ns/iter",
            "extra": "iterations: 44199\ncpu: 15867.766239055181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149970.24575370937,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 149962.65038924277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284608.73060556833,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284607.070376432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417616.02176019526,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417595.5996131526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556792.0158528985,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 556744.3880786301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579432.9450000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578735.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662399.2349090754,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 662368.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771444.2539550498,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 771396.0033305588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 877021.7140151414,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876981.9128787867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12912.430573458565,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12912.0861110088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10759.985006399973,
            "unit": "ns/iter",
            "extra": "iterations: 65628\ncpu: 10759.628512220395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11160.887673154077,
            "unit": "ns/iter",
            "extra": "iterations: 65621\ncpu: 11160.608646622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.530446940931,
            "unit": "ns/iter",
            "extra": "iterations: 65803\ncpu: 10663.454553743744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18650.518202077496,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18649.925705794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63089.91321309635,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 63088.76702245127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329477.76665382966,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329475.7027339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258399.72473444126,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258393.50531107705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254907.25237528342,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254899.04988123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250282.6636229699,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 250283.0338733426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 539501.8910001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539460.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4612731.681592225,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4612445.77114428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3773025.211382365,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772743.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3761151.676113598,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3761045.3441295526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3772268.076922937,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772034.4129554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2234407.836144454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2234215.6626506033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3676472.372294149,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3676135.0649350625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14915374.887324797,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914684.50704228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6624359.690000575,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6623884.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18448004.241379138,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18446515.517241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67342.79768785999,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 67339.33011323161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355495.355868951,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355473.28909166245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287954.5847343884,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 287939.94620040484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291206.7326766323,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291199.3885869553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284639.8965863448,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 284620.78313252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 542298.446000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542299.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4708696.863636333,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4708530.8080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850880.8893442117,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850792.2131147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3830175.459016726,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830146.311475427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3810093.346939019,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810016.3265306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2255509.175182389,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2255254.014598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3727649.3999997913,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3727617.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15056011.30985833,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15055597.183098579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525330.310000755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525195.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.73040000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57532.35000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312589.31386861333,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312575.54744525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 245893.25273776666,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 245882.99711815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245151.14261072798,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 245146.86601495225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243271.21064616562,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243259.77796754907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 508541.25600005774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508511.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4665347.195979583,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4665056.281407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3802680.5365853664,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802481.7073170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3786215.4593495885,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786051.219512191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3775547.303643997,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775362.7530364273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2224777.9499999913,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2224662.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3676626.430830097,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676358.4980236925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.923945456648,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 6183.684774048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39267.59604059978,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 39266.68723010472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31737.1791891783,
            "unit": "ns/iter",
            "extra": "iterations: 22027\ncpu: 31736.75943160654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31952.839790574504,
            "unit": "ns/iter",
            "extra": "iterations: 21965\ncpu: 31951.30890052359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23785.635062062916,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 23785.750722666093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188375.02892342993,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 188371.7728976963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314557.2726457471,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 314551.2556053781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77949.74355268887,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77943.55269008405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79282.4899799614,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 79111.96838120696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77634.03195739158,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77625.7989347551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 163555.74296435592,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163546.29455910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148259.3902284247,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148254.67428088095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47845.80514403178,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 47842.359396434025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228449.36910996187,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228430.85732984144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185855.03274758716,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 185840.20234291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187964.71126005656,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 187957.58713136657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187110.92457357637,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 187108.04904051192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 352603.8177711145,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 352593.67469879764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317492.1657250305,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317494.3502824896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096569.8726414924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096491.1949685568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102258.0298742924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102146.2264151112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098687.1381476873,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098596.8602825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 720202.1280991954,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 720152.1694214864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086997.8602484406,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086979.6583850922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46959.448386881035,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 46956.288148098785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227131.82586092822,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227125.4385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188409.22192297585,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 188407.59493670976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187493.8986088673,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 187490.23542000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186828.90565030678,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186826.75906183428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 350239.16799997323,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 350226.54999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1316965.2052730748,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1316964.9717513982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1089172.2632398645,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089135.5140186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1106633.9257503478,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106608.0568720335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1089182.6376361167,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089147.278382565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725233.1854921689,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 725219.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1090652.9517133676,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090653.5825545245 ns\nthreads: 1"
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
        "date": 1702394247557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15868.092241906177,
            "unit": "ns/iter",
            "extra": "iterations: 44199\ncpu: 15867.766239055181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149970.24575370937,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 149962.65038924277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284608.73060556833,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284607.070376432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417616.02176019526,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417595.5996131526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556792.0158528985,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 556744.3880786301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579432.9450000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578735.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662399.2349090754,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 662368.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771444.2539550498,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 771396.0033305588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 877021.7140151414,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876981.9128787867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12912.430573458565,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12912.0861110088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10759.985006399973,
            "unit": "ns/iter",
            "extra": "iterations: 65628\ncpu: 10759.628512220395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11160.887673154077,
            "unit": "ns/iter",
            "extra": "iterations: 65621\ncpu: 11160.608646622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.530446940931,
            "unit": "ns/iter",
            "extra": "iterations: 65803\ncpu: 10663.454553743744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18650.518202077496,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18649.925705794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63089.91321309635,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 63088.76702245127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329477.76665382966,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329475.7027339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258399.72473444126,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258393.50531107705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254907.25237528342,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254899.04988123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250282.6636229699,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 250283.0338733426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 539501.8910001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539460.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4612731.681592225,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4612445.77114428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3773025.211382365,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772743.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3761151.676113598,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3761045.3441295526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3772268.076922937,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772034.4129554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2234407.836144454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2234215.6626506033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3676472.372294149,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3676135.0649350625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14915374.887324797,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914684.50704228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6624359.690000575,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6623884.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18448004.241379138,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18446515.517241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67342.79768785999,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 67339.33011323161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355495.355868951,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355473.28909166245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287954.5847343884,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 287939.94620040484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291206.7326766323,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291199.3885869553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284639.8965863448,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 284620.78313252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 542298.446000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542299.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4708696.863636333,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4708530.8080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850880.8893442117,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850792.2131147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3830175.459016726,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830146.311475427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3810093.346939019,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810016.3265306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2255509.175182389,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2255254.014598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3727649.3999997913,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3727617.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15056011.30985833,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15055597.183098579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525330.310000755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525195.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.73040000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57532.35000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312589.31386861333,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312575.54744525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 245893.25273776666,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 245882.99711815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245151.14261072798,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 245146.86601495225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243271.21064616562,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243259.77796754907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 508541.25600005774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508511.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4665347.195979583,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4665056.281407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3802680.5365853664,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802481.7073170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3786215.4593495885,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786051.219512191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3775547.303643997,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775362.7530364273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2224777.9499999913,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2224662.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3676626.430830097,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676358.4980236925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.923945456648,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 6183.684774048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39267.59604059978,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 39266.68723010472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31737.1791891783,
            "unit": "ns/iter",
            "extra": "iterations: 22027\ncpu: 31736.75943160654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31952.839790574504,
            "unit": "ns/iter",
            "extra": "iterations: 21965\ncpu: 31951.30890052359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23785.635062062916,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 23785.750722666093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188375.02892342993,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 188371.7728976963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314557.2726457471,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 314551.2556053781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77949.74355268887,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77943.55269008405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79282.4899799614,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 79111.96838120696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77634.03195739158,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77625.7989347551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 163555.74296435592,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163546.29455910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148259.3902284247,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148254.67428088095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47845.80514403178,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 47842.359396434025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228449.36910996187,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228430.85732984144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185855.03274758716,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 185840.20234291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187964.71126005656,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 187957.58713136657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187110.92457357637,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 187108.04904051192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 352603.8177711145,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 352593.67469879764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317492.1657250305,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317494.3502824896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096569.8726414924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096491.1949685568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102258.0298742924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102146.2264151112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098687.1381476873,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098596.8602825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 720202.1280991954,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 720152.1694214864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086997.8602484406,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086979.6583850922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46959.448386881035,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 46956.288148098785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227131.82586092822,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227125.4385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188409.22192297585,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 188407.59493670976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187493.8986088673,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 187490.23542000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186828.90565030678,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186826.75906183428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 350239.16799997323,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 350226.54999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1316965.2052730748,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1316964.9717513982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1089172.2632398645,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089135.5140186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1106633.9257503478,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106608.0568720335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1089182.6376361167,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089147.278382565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725233.1854921689,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 725219.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1090652.9517133676,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090653.5825545245 ns\nthreads: 1"
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
        "date": 1702394247557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15868.092241906177,
            "unit": "ns/iter",
            "extra": "iterations: 44199\ncpu: 15867.766239055181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149970.24575370937,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 149962.65038924277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284608.73060556833,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284607.070376432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417616.02176019526,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417595.5996131526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556792.0158528985,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 556744.3880786301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579432.9450000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578735.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662399.2349090754,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 662368.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771444.2539550498,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 771396.0033305588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 877021.7140151414,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876981.9128787867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12912.430573458565,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12912.0861110088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10759.985006399973,
            "unit": "ns/iter",
            "extra": "iterations: 65628\ncpu: 10759.628512220395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11160.887673154077,
            "unit": "ns/iter",
            "extra": "iterations: 65621\ncpu: 11160.608646622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.530446940931,
            "unit": "ns/iter",
            "extra": "iterations: 65803\ncpu: 10663.454553743744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18650.518202077496,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18649.925705794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63089.91321309635,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 63088.76702245127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329477.76665382966,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329475.7027339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258399.72473444126,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258393.50531107705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254907.25237528342,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254899.04988123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250282.6636229699,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 250283.0338733426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 539501.8910001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539460.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4612731.681592225,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4612445.77114428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3773025.211382365,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772743.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3761151.676113598,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3761045.3441295526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3772268.076922937,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772034.4129554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2234407.836144454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2234215.6626506033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3676472.372294149,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3676135.0649350625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14915374.887324797,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914684.50704228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6624359.690000575,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6623884.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18448004.241379138,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18446515.517241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67342.79768785999,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 67339.33011323161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355495.355868951,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355473.28909166245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287954.5847343884,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 287939.94620040484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291206.7326766323,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291199.3885869553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284639.8965863448,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 284620.78313252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 542298.446000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542299.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4708696.863636333,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4708530.8080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850880.8893442117,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850792.2131147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3830175.459016726,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830146.311475427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3810093.346939019,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810016.3265306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2255509.175182389,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2255254.014598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3727649.3999997913,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3727617.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15056011.30985833,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15055597.183098579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525330.310000755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525195.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.73040000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57532.35000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312589.31386861333,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312575.54744525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 245893.25273776666,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 245882.99711815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245151.14261072798,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 245146.86601495225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243271.21064616562,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243259.77796754907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 508541.25600005774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508511.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4665347.195979583,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4665056.281407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3802680.5365853664,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802481.7073170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3786215.4593495885,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786051.219512191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3775547.303643997,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775362.7530364273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2224777.9499999913,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2224662.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3676626.430830097,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676358.4980236925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.923945456648,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 6183.684774048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39267.59604059978,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 39266.68723010472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31737.1791891783,
            "unit": "ns/iter",
            "extra": "iterations: 22027\ncpu: 31736.75943160654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31952.839790574504,
            "unit": "ns/iter",
            "extra": "iterations: 21965\ncpu: 31951.30890052359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23785.635062062916,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 23785.750722666093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188375.02892342993,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 188371.7728976963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314557.2726457471,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 314551.2556053781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77949.74355268887,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77943.55269008405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79282.4899799614,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 79111.96838120696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77634.03195739158,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77625.7989347551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 163555.74296435592,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163546.29455910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148259.3902284247,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148254.67428088095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47845.80514403178,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 47842.359396434025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228449.36910996187,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228430.85732984144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185855.03274758716,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 185840.20234291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187964.71126005656,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 187957.58713136657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187110.92457357637,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 187108.04904051192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 352603.8177711145,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 352593.67469879764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317492.1657250305,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317494.3502824896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096569.8726414924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096491.1949685568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102258.0298742924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102146.2264151112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098687.1381476873,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098596.8602825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 720202.1280991954,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 720152.1694214864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086997.8602484406,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086979.6583850922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46959.448386881035,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 46956.288148098785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227131.82586092822,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227125.4385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188409.22192297585,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 188407.59493670976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187493.8986088673,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 187490.23542000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186828.90565030678,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186826.75906183428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 350239.16799997323,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 350226.54999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1316965.2052730748,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1316964.9717513982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1089172.2632398645,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089135.5140186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1106633.9257503478,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106608.0568720335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1089182.6376361167,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089147.278382565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725233.1854921689,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 725219.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1090652.9517133676,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090653.5825545245 ns\nthreads: 1"
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
        "date": 1702394247557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15868.092241906177,
            "unit": "ns/iter",
            "extra": "iterations: 44199\ncpu: 15867.766239055181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149970.24575370937,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 149962.65038924277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284608.73060556833,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284607.070376432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417616.02176019526,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417595.5996131526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556792.0158528985,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 556744.3880786301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579432.9450000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578735.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662399.2349090754,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 662368.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771444.2539550498,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 771396.0033305588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 877021.7140151414,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876981.9128787867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12912.430573458565,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12912.0861110088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10759.985006399973,
            "unit": "ns/iter",
            "extra": "iterations: 65628\ncpu: 10759.628512220395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11160.887673154077,
            "unit": "ns/iter",
            "extra": "iterations: 65621\ncpu: 11160.608646622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.530446940931,
            "unit": "ns/iter",
            "extra": "iterations: 65803\ncpu: 10663.454553743744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18650.518202077496,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18649.925705794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63089.91321309635,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 63088.76702245127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329477.76665382966,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329475.7027339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258399.72473444126,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258393.50531107705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254907.25237528342,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254899.04988123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250282.6636229699,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 250283.0338733426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 539501.8910001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539460.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4612731.681592225,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4612445.77114428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3773025.211382365,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772743.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3761151.676113598,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3761045.3441295526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3772268.076922937,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772034.4129554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2234407.836144454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2234215.6626506033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3676472.372294149,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3676135.0649350625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14915374.887324797,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914684.50704228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6624359.690000575,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6623884.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18448004.241379138,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18446515.517241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67342.79768785999,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 67339.33011323161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355495.355868951,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355473.28909166245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287954.5847343884,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 287939.94620040484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291206.7326766323,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291199.3885869553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284639.8965863448,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 284620.78313252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 542298.446000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542299.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4708696.863636333,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4708530.8080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850880.8893442117,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850792.2131147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3830175.459016726,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830146.311475427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3810093.346939019,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810016.3265306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2255509.175182389,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2255254.014598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3727649.3999997913,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3727617.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15056011.30985833,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15055597.183098579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525330.310000755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525195.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.73040000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57532.35000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312589.31386861333,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312575.54744525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 245893.25273776666,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 245882.99711815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245151.14261072798,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 245146.86601495225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243271.21064616562,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243259.77796754907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 508541.25600005774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508511.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4665347.195979583,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4665056.281407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3802680.5365853664,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802481.7073170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3786215.4593495885,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786051.219512191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3775547.303643997,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775362.7530364273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2224777.9499999913,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2224662.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3676626.430830097,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676358.4980236925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.923945456648,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 6183.684774048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39267.59604059978,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 39266.68723010472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31737.1791891783,
            "unit": "ns/iter",
            "extra": "iterations: 22027\ncpu: 31736.75943160654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31952.839790574504,
            "unit": "ns/iter",
            "extra": "iterations: 21965\ncpu: 31951.30890052359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23785.635062062916,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 23785.750722666093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188375.02892342993,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 188371.7728976963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314557.2726457471,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 314551.2556053781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77949.74355268887,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77943.55269008405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79282.4899799614,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 79111.96838120696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77634.03195739158,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77625.7989347551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 163555.74296435592,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163546.29455910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148259.3902284247,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148254.67428088095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47845.80514403178,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 47842.359396434025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228449.36910996187,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228430.85732984144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185855.03274758716,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 185840.20234291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187964.71126005656,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 187957.58713136657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187110.92457357637,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 187108.04904051192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 352603.8177711145,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 352593.67469879764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317492.1657250305,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317494.3502824896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096569.8726414924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096491.1949685568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102258.0298742924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102146.2264151112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098687.1381476873,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098596.8602825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 720202.1280991954,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 720152.1694214864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086997.8602484406,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086979.6583850922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46959.448386881035,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 46956.288148098785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227131.82586092822,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227125.4385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188409.22192297585,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 188407.59493670976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187493.8986088673,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 187490.23542000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186828.90565030678,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186826.75906183428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 350239.16799997323,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 350226.54999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1316965.2052730748,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1316964.9717513982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1089172.2632398645,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089135.5140186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1106633.9257503478,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106608.0568720335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1089182.6376361167,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089147.278382565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725233.1854921689,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 725219.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1090652.9517133676,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090653.5825545245 ns\nthreads: 1"
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
        "date": 1702394247557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15868.092241906177,
            "unit": "ns/iter",
            "extra": "iterations: 44199\ncpu: 15867.766239055181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149970.24575370937,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 149962.65038924277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284608.73060556833,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284607.070376432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417616.02176019526,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417595.5996131526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556792.0158528985,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 556744.3880786301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579432.9450000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578735.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662399.2349090754,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 662368.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771444.2539550498,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 771396.0033305588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 877021.7140151414,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876981.9128787867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12912.430573458565,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12912.0861110088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10759.985006399973,
            "unit": "ns/iter",
            "extra": "iterations: 65628\ncpu: 10759.628512220395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11160.887673154077,
            "unit": "ns/iter",
            "extra": "iterations: 65621\ncpu: 11160.608646622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.530446940931,
            "unit": "ns/iter",
            "extra": "iterations: 65803\ncpu: 10663.454553743744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18650.518202077496,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18649.925705794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63089.91321309635,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 63088.76702245127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329477.76665382966,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329475.7027339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258399.72473444126,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258393.50531107705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254907.25237528342,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254899.04988123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250282.6636229699,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 250283.0338733426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 539501.8910001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539460.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4612731.681592225,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4612445.77114428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3773025.211382365,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772743.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3761151.676113598,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3761045.3441295526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3772268.076922937,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772034.4129554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2234407.836144454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2234215.6626506033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3676472.372294149,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3676135.0649350625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14915374.887324797,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914684.50704228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6624359.690000575,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6623884.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18448004.241379138,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18446515.517241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67342.79768785999,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 67339.33011323161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355495.355868951,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355473.28909166245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287954.5847343884,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 287939.94620040484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291206.7326766323,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291199.3885869553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284639.8965863448,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 284620.78313252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 542298.446000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542299.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4708696.863636333,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4708530.8080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850880.8893442117,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850792.2131147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3830175.459016726,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830146.311475427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3810093.346939019,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810016.3265306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2255509.175182389,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2255254.014598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3727649.3999997913,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3727617.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15056011.30985833,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15055597.183098579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525330.310000755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525195.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.73040000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57532.35000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312589.31386861333,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312575.54744525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 245893.25273776666,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 245882.99711815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245151.14261072798,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 245146.86601495225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243271.21064616562,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243259.77796754907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 508541.25600005774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508511.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4665347.195979583,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4665056.281407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3802680.5365853664,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802481.7073170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3786215.4593495885,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786051.219512191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3775547.303643997,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775362.7530364273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2224777.9499999913,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2224662.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3676626.430830097,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676358.4980236925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.923945456648,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 6183.684774048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39267.59604059978,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 39266.68723010472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31737.1791891783,
            "unit": "ns/iter",
            "extra": "iterations: 22027\ncpu: 31736.75943160654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31952.839790574504,
            "unit": "ns/iter",
            "extra": "iterations: 21965\ncpu: 31951.30890052359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23785.635062062916,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 23785.750722666093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188375.02892342993,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 188371.7728976963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314557.2726457471,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 314551.2556053781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77949.74355268887,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77943.55269008405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79282.4899799614,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 79111.96838120696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77634.03195739158,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77625.7989347551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 163555.74296435592,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163546.29455910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148259.3902284247,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148254.67428088095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47845.80514403178,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 47842.359396434025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228449.36910996187,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228430.85732984144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185855.03274758716,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 185840.20234291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187964.71126005656,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 187957.58713136657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187110.92457357637,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 187108.04904051192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 352603.8177711145,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 352593.67469879764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317492.1657250305,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317494.3502824896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096569.8726414924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096491.1949685568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102258.0298742924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102146.2264151112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098687.1381476873,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098596.8602825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 720202.1280991954,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 720152.1694214864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086997.8602484406,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086979.6583850922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46959.448386881035,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 46956.288148098785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227131.82586092822,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227125.4385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188409.22192297585,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 188407.59493670976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187493.8986088673,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 187490.23542000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186828.90565030678,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186826.75906183428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 350239.16799997323,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 350226.54999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1316965.2052730748,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1316964.9717513982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1089172.2632398645,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089135.5140186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1106633.9257503478,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106608.0568720335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1089182.6376361167,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089147.278382565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725233.1854921689,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 725219.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1090652.9517133676,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090653.5825545245 ns\nthreads: 1"
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
        "date": 1702394247557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15868.092241906177,
            "unit": "ns/iter",
            "extra": "iterations: 44199\ncpu: 15867.766239055181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149970.24575370937,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 149962.65038924277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284608.73060556833,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284607.070376432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417616.02176019526,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417595.5996131526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556792.0158528985,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 556744.3880786301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579432.9450000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578735.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662399.2349090754,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 662368.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771444.2539550498,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 771396.0033305588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 877021.7140151414,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876981.9128787867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12912.430573458565,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12912.0861110088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10759.985006399973,
            "unit": "ns/iter",
            "extra": "iterations: 65628\ncpu: 10759.628512220395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11160.887673154077,
            "unit": "ns/iter",
            "extra": "iterations: 65621\ncpu: 11160.608646622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.530446940931,
            "unit": "ns/iter",
            "extra": "iterations: 65803\ncpu: 10663.454553743744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18650.518202077496,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18649.925705794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63089.91321309635,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 63088.76702245127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329477.76665382966,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329475.7027339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258399.72473444126,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258393.50531107705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254907.25237528342,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254899.04988123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250282.6636229699,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 250283.0338733426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 539501.8910001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539460.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4612731.681592225,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4612445.77114428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3773025.211382365,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772743.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3761151.676113598,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3761045.3441295526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3772268.076922937,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772034.4129554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2234407.836144454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2234215.6626506033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3676472.372294149,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3676135.0649350625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14915374.887324797,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914684.50704228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6624359.690000575,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6623884.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18448004.241379138,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18446515.517241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67342.79768785999,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 67339.33011323161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355495.355868951,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355473.28909166245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287954.5847343884,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 287939.94620040484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291206.7326766323,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291199.3885869553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284639.8965863448,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 284620.78313252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 542298.446000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542299.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4708696.863636333,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4708530.8080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850880.8893442117,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850792.2131147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3830175.459016726,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830146.311475427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3810093.346939019,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810016.3265306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2255509.175182389,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2255254.014598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3727649.3999997913,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3727617.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15056011.30985833,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15055597.183098579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525330.310000755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525195.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.73040000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57532.35000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312589.31386861333,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312575.54744525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 245893.25273776666,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 245882.99711815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245151.14261072798,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 245146.86601495225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243271.21064616562,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243259.77796754907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 508541.25600005774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508511.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4665347.195979583,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4665056.281407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3802680.5365853664,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802481.7073170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3786215.4593495885,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786051.219512191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3775547.303643997,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775362.7530364273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2224777.9499999913,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2224662.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3676626.430830097,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676358.4980236925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.923945456648,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 6183.684774048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39267.59604059978,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 39266.68723010472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31737.1791891783,
            "unit": "ns/iter",
            "extra": "iterations: 22027\ncpu: 31736.75943160654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31952.839790574504,
            "unit": "ns/iter",
            "extra": "iterations: 21965\ncpu: 31951.30890052359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23785.635062062916,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 23785.750722666093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188375.02892342993,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 188371.7728976963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314557.2726457471,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 314551.2556053781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77949.74355268887,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77943.55269008405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79282.4899799614,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 79111.96838120696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77634.03195739158,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77625.7989347551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 163555.74296435592,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163546.29455910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148259.3902284247,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148254.67428088095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47845.80514403178,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 47842.359396434025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228449.36910996187,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228430.85732984144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185855.03274758716,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 185840.20234291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187964.71126005656,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 187957.58713136657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187110.92457357637,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 187108.04904051192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 352603.8177711145,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 352593.67469879764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317492.1657250305,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317494.3502824896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096569.8726414924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096491.1949685568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102258.0298742924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102146.2264151112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098687.1381476873,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098596.8602825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 720202.1280991954,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 720152.1694214864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086997.8602484406,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086979.6583850922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46959.448386881035,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 46956.288148098785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227131.82586092822,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227125.4385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188409.22192297585,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 188407.59493670976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187493.8986088673,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 187490.23542000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186828.90565030678,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186826.75906183428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 350239.16799997323,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 350226.54999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1316965.2052730748,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1316964.9717513982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1089172.2632398645,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089135.5140186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1106633.9257503478,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106608.0568720335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1089182.6376361167,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089147.278382565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725233.1854921689,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 725219.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1090652.9517133676,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090653.5825545245 ns\nthreads: 1"
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
        "date": 1702394247557,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15868.092241906177,
            "unit": "ns/iter",
            "extra": "iterations: 44199\ncpu: 15867.766239055181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149970.24575370937,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 149962.65038924277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284608.73060556833,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 284607.070376432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417616.02176019526,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417595.5996131526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556792.0158528985,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 556744.3880786301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579432.9450000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578735.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662399.2349090754,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 662368.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771444.2539550498,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 771396.0033305588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 877021.7140151414,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876981.9128787867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12912.430573458565,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12912.0861110088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10759.985006399973,
            "unit": "ns/iter",
            "extra": "iterations: 65628\ncpu: 10759.628512220395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11160.887673154077,
            "unit": "ns/iter",
            "extra": "iterations: 65621\ncpu: 11160.608646622262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.530446940931,
            "unit": "ns/iter",
            "extra": "iterations: 65803\ncpu: 10663.454553743744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18650.518202077496,
            "unit": "ns/iter",
            "extra": "iterations: 37688\ncpu: 18649.925705794933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63089.91321309635,
            "unit": "ns/iter",
            "extra": "iterations: 13585\ncpu: 63088.76702245127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329477.76665382966,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329475.7027339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258399.72473444126,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258393.50531107705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254907.25237528342,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 254899.04988123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250282.6636229699,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 250283.0338733426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 539501.8910001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539460.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4612731.681592225,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4612445.77114428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3773025.211382365,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772743.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3761151.676113598,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3761045.3441295526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3772268.076922937,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772034.4129554676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2234407.836144454,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2234215.6626506033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3676472.372294149,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3676135.0649350625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14915374.887324797,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14914684.50704228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6624359.690000575,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6623884.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18448004.241379138,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18446515.517241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67342.79768785999,
            "unit": "ns/iter",
            "extra": "iterations: 12629\ncpu: 67339.33011323161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355495.355868951,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355473.28909166245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287954.5847343884,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 287939.94620040484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291206.7326766323,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291199.3885869553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284639.8965863448,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 284620.78313252825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 542298.446000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542299.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4708696.863636333,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4708530.8080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3850880.8893442117,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850792.2131147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3830175.459016726,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830146.311475427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3810093.346939019,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810016.3265306023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2255509.175182389,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2255254.014598539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3727649.3999997913,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3727617.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15056011.30985833,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15055597.183098579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6525330.310000755,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6525195.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57534.73040000472,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57532.35000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312589.31386861333,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 312575.54744525766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 245893.25273776666,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 245882.99711815597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 245151.14261072798,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 245146.86601495225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 243271.21064616562,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243259.77796754907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 508541.25600005774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508511.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4665347.195979583,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4665056.281407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3802680.5365853664,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3802481.7073170575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3786215.4593495885,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3786051.219512191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3775547.303643997,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775362.7530364273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2224777.9499999913,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2224662.380952377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3676626.430830097,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3676358.4980236925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6183.923945456648,
            "unit": "ns/iter",
            "extra": "iterations: 113011\ncpu: 6183.684774048539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39267.59604059978,
            "unit": "ns/iter",
            "extra": "iterations: 17831\ncpu: 39266.68723010472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31737.1791891783,
            "unit": "ns/iter",
            "extra": "iterations: 22027\ncpu: 31736.75943160654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31952.839790574504,
            "unit": "ns/iter",
            "extra": "iterations: 21965\ncpu: 31951.30890052359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23785.635062062916,
            "unit": "ns/iter",
            "extra": "iterations: 29405\ncpu: 23785.750722666093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 188375.02892342993,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 188371.7728976963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 314557.2726457471,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 314551.2556053781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77949.74355268887,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77943.55269008405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 79282.4899799614,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 79111.96838120696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77634.03195739158,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 77625.7989347551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 163555.74296435592,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 163546.29455910073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 148259.3902284247,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 148254.67428088095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47845.80514403178,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 47842.359396434025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228449.36910996187,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 228430.85732984144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 185855.03274758716,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 185840.20234291998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 187964.71126005656,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 187957.58713136657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 187110.92457357637,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 187108.04904051192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 352603.8177711145,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 352593.67469879764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1317492.1657250305,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317494.3502824896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1096569.8726414924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1096491.1949685568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102258.0298742924,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102146.2264151112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1098687.1381476873,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1098596.8602825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 720202.1280991954,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 720152.1694214864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1086997.8602484406,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1086979.6583850922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46959.448386881035,
            "unit": "ns/iter",
            "extra": "iterations: 14909\ncpu: 46956.288148098785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227131.82586092822,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 227125.4385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188409.22192297585,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 188407.59493670976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 187493.8986088673,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 187490.23542000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 186828.90565030678,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 186826.75906183428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 350239.16799997323,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 350226.54999999504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1316965.2052730748,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1316964.9717513982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1089172.2632398645,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1089135.5140186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1106633.9257503478,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106608.0568720335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1089182.6376361167,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1089147.278382565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 725233.1854921689,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 725219.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1090652.9517133676,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090653.5825545245 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}