window.BENCHMARK_DATA = {
  "lastUpdate": 1702382554837,
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
        "date": 1702382554207,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15605.210547695393,
            "unit": "ns/iter",
            "extra": "iterations: 44313\ncpu: 15605.109110193396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150538.23218104546,
            "unit": "ns/iter",
            "extra": "iterations: 5612\ncpu: 150533.41054882394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 283845.5467060029,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 283844.6738774172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417856.4151850198,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 417847.90965881787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 555114.5326156041,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 555104.1798606713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 557301.2480000444,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557246.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662064.4470672396,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 662043.6337625181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 772048.7057356726,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 772009.3100581878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 885722.222009578,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 885704.3062200958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12451.586464825732,
            "unit": "ns/iter",
            "extra": "iterations: 56150\ncpu: 12451.510240427422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10228.909589642368,
            "unit": "ns/iter",
            "extra": "iterations: 68355\ncpu: 10228.85085216883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10178.359402793005,
            "unit": "ns/iter",
            "extra": "iterations: 68586\ncpu: 10178.198174554575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10099.23788914888,
            "unit": "ns/iter",
            "extra": "iterations: 69318\ncpu: 10099.057964742216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16795.89352518009,
            "unit": "ns/iter",
            "extra": "iterations: 41700\ncpu: 16795.87769784172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63147.0794585076,
            "unit": "ns/iter",
            "extra": "iterations: 13592\ncpu: 63146.88051795173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 340372.9988128249,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 340371.0328452713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 267076.5032761467,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 267069.7035881442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 265827.1908017532,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 265825.916718459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262917.47033506725,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 262911.6200430365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 585182.2601463574,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 585164.1383898885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4700956.0757574905,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4699986.363636357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3815339.7654320947,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3815121.399176954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3810203.3510204004,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810006.5306122513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3819522.8647539145,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3819333.6065573758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2168899.5465117227,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2168762.7906976743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3707624.0000001234,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3707459.2000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14462388.561643621,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14461935.616438381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6391738.830000121,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6391644.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18009820.5762726,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 18009442.372881345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69668.12230744582,
            "unit": "ns/iter",
            "extra": "iterations: 12256\ncpu: 69667.11814621414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 371120.9172801658,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 371111.47682979493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 295303.39841870044,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 295301.6500515634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 294349.9698009565,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 294345.67604667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 291338.3128396681,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291332.5407608701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 594722.9972508245,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 594715.7388316123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4782793.297436117,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4782667.692307668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3871951.979253162,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3871836.9294605907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3873310.107883865,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3873250.2074688654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3856981.6846475117,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3856878.838174287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2212864.6047617295,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2212841.1904761926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3754591.592741833,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3754531.048387099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14890603.333332326,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14890186.111111112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6592626.5100006275,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6592440.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 62767.339195973866,
            "unit": "ns/iter",
            "extra": "iterations: 13532\ncpu: 62766.59769435395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 344180.33107569674,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 344176.0159362556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 268985.5486808748,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 268978.5489949741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 262137.60135135963,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 262134.79729729836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 259140.90163934205,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 259138.19064966607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 566692.1241830399,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 566689.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4712966.616161587,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4712709.090909069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3837315.2798357415,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3837078.6008230387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3801632.4303277703,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3801429.5081967083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3803416.8489795257,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3803211.428571419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2154750.519813706,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2154586.0139860134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3714611.4166663634,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3714406.349206349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5735.857668891792,
            "unit": "ns/iter",
            "extra": "iterations: 122208\ncpu: 5735.500949201375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38452.508453718525,
            "unit": "ns/iter",
            "extra": "iterations: 18690\ncpu: 38450.10700909606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31894.64836515078,
            "unit": "ns/iter",
            "extra": "iterations: 22785\ncpu: 31892.819837612402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32094.269828654298,
            "unit": "ns/iter",
            "extra": "iterations: 22644\ncpu: 32093.079844550422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23545.34540071406,
            "unit": "ns/iter",
            "extra": "iterations: 29722\ncpu: 23544.482201736217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 151858.17725097356,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 151847.47716398476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 311145.8012450092,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 311127.8345931512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76781.79006796709,
            "unit": "ns/iter",
            "extra": "iterations: 9122\ncpu: 76777.2199079145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77221.98510971024,
            "unit": "ns/iter",
            "extra": "iterations: 8932\ncpu: 77218.59605911205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76493.69286103532,
            "unit": "ns/iter",
            "extra": "iterations: 9175\ncpu: 76493.16621253375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 156453.87823950025,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 156451.6085790895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150954.2854063562,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 150947.91981030593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44062.38129722659,
            "unit": "ns/iter",
            "extra": "iterations: 15880\ncpu: 44061.794710327515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215357.18790494464,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 215356.21721690815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176784.30130668185,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 176776.04406866475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 178520.31763809506,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 178509.7225757188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178739.59989820598,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 178724.1028251467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 296205.6030534469,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 296189.7370653043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1314679.78007534,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1314593.0451127896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1106012.1536000224,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1105970.719999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1104524.7905512522,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104485.1968503778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1100266.8979591439,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1100254.003139715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 689367.4675834223,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 689334.479371325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1093240.5747662357,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1093171.0280373918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44402.99822795688,
            "unit": "ns/iter",
            "extra": "iterations: 15801\ncpu: 44399.55699006384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 218110.1056074628,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 218094.7975077883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179683.47462839697,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 179672.88569964224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179851.93263319516,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 179834.9897540991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179716.74465345597,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 179707.5496006189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297600.2050298625,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 297577.79198635765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1329763.6933332665,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1329691.2380952465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1111455.6037734828,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1109372.1698113088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1095329.5508607298,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1095325.3521126776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1094611.634222966,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1094594.1915227545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 684988.7392578191,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 684969.8242187424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1092417.2121684537,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1092408.5803432146 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}