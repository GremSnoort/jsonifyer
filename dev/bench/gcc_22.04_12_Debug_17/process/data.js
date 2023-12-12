window.BENCHMARK_DATA = {
  "lastUpdate": 1702381395158,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-12 22.04 Debug c++-17": [
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
        "date": 1702381394479,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15732.970011510331,
            "unit": "ns/iter",
            "extra": "iterations: 45184\ncpu: 15732.316749291787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149877.26929275686,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 149874.62846911373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284862.49918381096,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 284855.6317335945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417854.14299516595,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 417849.61352657015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 554284.9962025713,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 554260.4430379744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 554042.953000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554017.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 663542.1010752587,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 663524.7311827963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 767643.9139072236,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 767631.2086092716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 875814.3764150603,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 875777.7358490559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12442.023125779151,
            "unit": "ns/iter",
            "extra": "iterations: 55263\ncpu: 12441.29345131463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10129.410414763928,
            "unit": "ns/iter",
            "extra": "iterations: 68979\ncpu: 10129.28137549109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10102.952962755018,
            "unit": "ns/iter",
            "extra": "iterations: 69243\ncpu: 10102.94470199154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10142.065527230268,
            "unit": "ns/iter",
            "extra": "iterations: 69040\ncpu: 10141.701911935088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16761.513294350167,
            "unit": "ns/iter",
            "extra": "iterations: 41559\ncpu: 16760.947087273507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 64133.20938412301,
            "unit": "ns/iter",
            "extra": "iterations: 13363\ncpu: 64129.75379779993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 338696.56372351333,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 338684.1789852171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 267315.1731791468,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 267303.0321975611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 264657.23376620555,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 264646.784168212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 261285.0477210117,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 261272.40746405636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 580282.0228955599,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 580254.208754208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4714375.918782021,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4714221.319796955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3847898.655737656,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3847670.90163935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3805230.6285714377,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3805215.510204073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3797742.375510023,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3797576.734693869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2185278.077464807,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2185162.2065727664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3714313.5920000533,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3714182.3999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14490325.89189178,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14489712.162162159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6279819.0700004855,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6279520.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18003396.28813409,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 18002357.627118636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69511.5846416614,
            "unit": "ns/iter",
            "extra": "iterations: 12293\ncpu: 69509.15154966255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 372834.2376836493,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 372819.9654278288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 293672.2254533197,
            "unit": "ns/iter",
            "extra": "iterations: 2923\ncpu: 293662.29900786903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 293491.2708333221,
            "unit": "ns/iter",
            "extra": "iterations: 2928\ncpu: 293480.22540983674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 289740.49949236715,
            "unit": "ns/iter",
            "extra": "iterations: 2955\ncpu: 289732.79187817266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 589880.8294679216,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 589860.8458390181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4767972.8629438225,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4767734.010152272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3867722.0954357465,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3867633.609958485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3866658.355372057,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3866522.727272731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3830894.8065842097,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3830664.1975308713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2230501.4832535125,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2230370.3349282322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3746163.1451617084,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3746014.516129043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14904965.333332459,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14904137.500000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6436823.599999571,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6436525.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 62061.65678090887,
            "unit": "ns/iter",
            "extra": "iterations: 13656\ncpu: 62059.46104276519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 335353.89913994033,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 335341.0867865513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 266108.4434431029,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 266104.9098819136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 262110.61947176253,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 262093.33538083418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 262758.07964332885,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 262749.96924969077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 559228.912734277,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 559192.6308985135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4733497.9191920655,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4733241.919191949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3830361.3647541604,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830274.5901639364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3775471.093117704,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775345.344129543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3777863.3279999667,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3777640.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2145600.303240645,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2145535.648148139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3697146.4422310465,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3697001.99203188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5674.1426787235005,
            "unit": "ns/iter",
            "extra": "iterations: 123305\ncpu: 5673.912655610036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38713.34731896117,
            "unit": "ns/iter",
            "extra": "iterations: 18090\ncpu: 38711.829740187895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29965.426280683572,
            "unit": "ns/iter",
            "extra": "iterations: 23386\ncpu: 29965.30830411347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30915.01817139508,
            "unit": "ns/iter",
            "extra": "iterations: 22673\ncpu: 30914.10047192694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23863.962946548738,
            "unit": "ns/iter",
            "extra": "iterations: 29336\ncpu: 23863.64194164199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 152810.75944115873,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 152800.76402532042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 312082.2021418633,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 312081.25836680055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76360.12393720665,
            "unit": "ns/iter",
            "extra": "iterations: 9174\ncpu: 76356.63832570294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76330.35121258955,
            "unit": "ns/iter",
            "extra": "iterations: 9154\ncpu: 76326.57854489735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76263.7442444139,
            "unit": "ns/iter",
            "extra": "iterations: 9165\ncpu: 76259.8254228036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157054.37897092657,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 157050.49217002327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150338.60262195853,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 150336.68600902546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44139.77789713016,
            "unit": "ns/iter",
            "extra": "iterations: 15826\ncpu: 44138.01971439356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215672.26631776075,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 215667.70320197297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176481.44200705856,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 176475.2899646992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177748.18008634736,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 177746.20269240494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177722.65090998576,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 177711.45096056443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 294862.48948696995,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 294845.0798990747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1314109.2945591942,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1314018.7617260816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1102935.7405661512,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1102880.5031446717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1093300.0078369356,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1093258.620689645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1094777.5915493267,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1094726.447574332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 691067.2519762986,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 691064.8221343864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1090086.4403101313,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1090057.6744186028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44295.182439701246,
            "unit": "ns/iter",
            "extra": "iterations: 15797\ncpu: 44295.00538076822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215765.20715165779,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 215762.6078914935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178768.5128727975,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 178763.82870252331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178670.6359000529,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 178664.40591534847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178390.96122446912,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 178386.428571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294219.8761062185,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 294216.22418879066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1314047.3808630775,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1314013.1332082455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1090106.4463452874,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1090083.514774479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1091392.087363525,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1091357.2542901798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1087440.575427622,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1087436.8584758907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 686608.0303029976,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 686599.4134897301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1086100.680620189,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1086062.1705426394 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}