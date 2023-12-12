window.BENCHMARK_DATA = {
  "lastUpdate": 1702394231607,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-15 20.04 Debug c++-17": [
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
        "date": 1702392476264,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15394.377742000219,
            "unit": "ns/iter",
            "extra": "iterations: 44721\ncpu: 15394.049775273365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146354.6708581173,
            "unit": "ns/iter",
            "extra": "iterations: 5885\ncpu: 146351.67374681396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 276049.6833068333,
            "unit": "ns/iter",
            "extra": "iterations: 3145\ncpu: 276046.2957074721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 406449.54971590475,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 406433.00189393957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 530996.7662576778,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 530979.1411042946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527543.1809999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527535.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 640038.5499999857,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640002.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 743691.4903381614,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 743653.7037037037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 825255.2318181602,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 825223.0909090906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11908.629390254713,
            "unit": "ns/iter",
            "extra": "iterations: 58795\ncpu: 11908.094225699462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9649.244930878614,
            "unit": "ns/iter",
            "extra": "iterations: 70673\ncpu: 9648.990420669828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9744.962931033833,
            "unit": "ns/iter",
            "extra": "iterations: 71920\ncpu: 9744.655172413786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9610.182925638766,
            "unit": "ns/iter",
            "extra": "iterations: 71745\ncpu: 9609.678723255995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16231.958004522903,
            "unit": "ns/iter",
            "extra": "iterations: 43338\ncpu: 16231.235866906636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54797.531799999895,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54794.97000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288208.1223788269,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 288197.18116191117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 225521.8751015868,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 225513.27553508547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230625.72810317395,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 230617.51746372876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224056.0761528315,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 224047.03557312224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 556028.9408740421,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 556008.0976863762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4433106.507246591,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4432952.657004828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3590390.0492425836,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3590314.0151515068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3504384.0524345515,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3504313.4831460714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3604306.381322851,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3604123.735408562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2082179.7274773924,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2082130.4054054085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3532473.2813687697,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3532357.034220534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13905733.39473708,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13905478.947368452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6372482.110000419,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6372096.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17262711.950818766,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 17262401.639344238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59098.63059999907,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59096.60999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 328977.04078488715,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 328970.7579838408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 263078.78191325825,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 263070.0399876948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 266406.23188855173,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 266402.66253870045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 260708.5415648047,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 260697.89119804394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 594205.9557093615,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 594159.8615916917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4572158.230392269,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4571854.411764706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3719859.6919997726,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3719692.8000000184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3602875.3527134084,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3602824.4186046463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3652674.6220472236,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3652578.740157471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2137364.8680556845,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2137284.9537036926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3570892.3038459243,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3570796.153846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14389203.162161758,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14388124.32432434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6242817.489999197,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6242623.000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55310.99820000236,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55309.809999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 288611.79236998543,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288598.4469952751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 238752.9254814418,
            "unit": "ns/iter",
            "extra": "iterations: 3583\ncpu: 238747.27881663459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 236913.9037925135,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 236904.6569994419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 233249.23774708319,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 233111.6707284042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 545940.0849714126,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 545930.31071655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4538018.917475635,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4537698.543689331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3665536.122529781,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3665458.8932806277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3561211.3371212906,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3561110.9848484825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3626926.9147284776,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3626768.9922480374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2105941.2511210577,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2105839.461883411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3494989.3041822547,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3494815.589353614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5488.6991576145665,
            "unit": "ns/iter",
            "extra": "iterations: 132837\ncpu: 5488.488899930003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35722.12002468364,
            "unit": "ns/iter",
            "extra": "iterations: 19446\ncpu: 35720.34865782188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28552.33789824781,
            "unit": "ns/iter",
            "extra": "iterations: 24608\ncpu: 28551.089076723074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28998.447948342862,
            "unit": "ns/iter",
            "extra": "iterations: 24005\ncpu: 28996.404915642357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22044.771682753762,
            "unit": "ns/iter",
            "extra": "iterations: 31811\ncpu: 22043.78359686906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 149642.36612379013,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 149637.43756785986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302157.6618087862,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 302152.25032147503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73354.43527165131,
            "unit": "ns/iter",
            "extra": "iterations: 9424\ncpu: 73353.19397283583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72946.38335592837,
            "unit": "ns/iter",
            "extra": "iterations: 9589\ncpu: 72942.72604025462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73832.08495350796,
            "unit": "ns/iter",
            "extra": "iterations: 9464\ncpu: 73828.41293322154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152816.70708178025,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 152810.94058320418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 141474.3731464573,
            "unit": "ns/iter",
            "extra": "iterations: 4923\ncpu: 141467.15417428393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43378.61226643713,
            "unit": "ns/iter",
            "extra": "iterations: 16109\ncpu: 43377.050096219275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219758.99213091863,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 219747.3717343429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177929.48166069706,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 177920.50433010794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175012.58562843615,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 175007.58637956996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175718.9750818168,
            "unit": "ns/iter",
            "extra": "iterations: 3973\ncpu: 175715.73118550234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295370.50712489674,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 295365.0880134085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1274841.4853479601,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1274805.1282051206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1064133.7553517201,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1064071.865443427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1046599.330849476,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1046558.4202682629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1048438.5662651053,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1048393.6746987856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 664699.2801887456,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 664683.8679245227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1043493.2929746659,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1043460.2391629217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44461.54236528996,
            "unit": "ns/iter",
            "extra": "iterations: 15626\ncpu: 44460.35453730976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227026.90547104517,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 227020.91291679966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182358.4634082494,
            "unit": "ns/iter",
            "extra": "iterations: 3826\ncpu: 182355.12284370352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179602.7590547135,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 179597.1487284854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181705.08595171373,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 181698.77953778455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 299425.26649531396,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 299413.7532133674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1273028.3897997383,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1272970.3096539115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1069131.2946565486,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1069054.503816781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1035027.8783382846,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1034969.2878338457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1052349.2602117967,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1052309.6822995518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 671152.8480768545,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 671134.0384615465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1041362.9955156645,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1041298.6547085189 ns\nthreads: 1"
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
        "date": 1702394227425,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15638.13938836783,
            "unit": "ns/iter",
            "extra": "iterations: 44602\ncpu: 15637.697861082463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145941.03233017406,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 145928.70163370596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 276549.20968259894,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 276541.9685796729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 404968.7512880491,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 404949.2740046839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 545897.5556923108,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 545857.4153846151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 538887.7470000467,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538834.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 643012.6480000239,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642964.7999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 746370.8381876741,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 746351.6181229772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 852032.3155963575,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 852011.0091743126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12039.278709122698,
            "unit": "ns/iter",
            "extra": "iterations: 58100\ncpu: 12038.767641996561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9782.209733000449,
            "unit": "ns/iter",
            "extra": "iterations: 71386\ncpu: 9782.101532513363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9766.276949261835,
            "unit": "ns/iter",
            "extra": "iterations: 71681\ncpu: 9766.31185390828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9812.345003299024,
            "unit": "ns/iter",
            "extra": "iterations: 71237\ncpu: 9811.652652413766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16682.05132055697,
            "unit": "ns/iter",
            "extra": "iterations: 41952\ncpu: 16680.50629290619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54608.07609999848,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54607.57999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 285467.5156197508,
            "unit": "ns/iter",
            "extra": "iterations: 2977\ncpu: 285463.016459523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231168.93736443238,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 231167.2180043382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231043.0466757259,
            "unit": "ns/iter",
            "extra": "iterations: 3685\ncpu: 231041.031207598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229998.889793708,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 229985.58631921854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 549174.2263556122,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 549145.9646910474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4487479.082125602,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4487307.729468596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3627160.34374988,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3626953.1249999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3578863.642307685,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3578578.4615384704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3631280.1666667396,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3624089.922480629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2083473.1106095596,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2083344.2437923194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3521408.216730005,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3521131.1787072336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13971622.052631453,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13970898.684210524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6376587.870000208,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6376031.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17190300.225806713,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 17188922.58064518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59735.84209999672,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59734.88000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 325552.63318113214,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 325553.76712328725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 260785.58529143926,
            "unit": "ns/iter",
            "extra": "iterations: 3277\ncpu: 260772.10863594813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263306.0874384173,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 263302.37068965414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 265719.8050979221,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 265715.8532794521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 578641.3074346845,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 578622.5050234467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4591208.76470597,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4591152.941176502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3672762.2420636225,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3672677.777777786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3634900.3178294646,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3634788.372093022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3643151.0352942906,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3643023.921568621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2134335.9473684873,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2134265.2173912986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3564263.574712536,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3564279.6934865774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14248392.826666532,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14247775.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6095239.620000256,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6095028.999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54766.10040000195,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54764.58000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 286554.7380471494,
            "unit": "ns/iter",
            "extra": "iterations: 2970\ncpu: 286549.8316498317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 234995.47953540046,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 234985.06637168076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 239447.32771693345,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 239434.45661330942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 234315.6386438904,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 234294.34950385874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 542435.305904485,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 542397.3618090483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4516501.995168796,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4516199.999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3640315.800780947,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3640048.046874983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3616285.1274130074,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3616138.996138993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3628458.0585936867,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3628216.796875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2092133.0788287623,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2092006.5315315325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3519286.0454544364,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3519068.5606060703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5622.997695043977,
            "unit": "ns/iter",
            "extra": "iterations: 125382\ncpu: 5622.677896348767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36817.30943376197,
            "unit": "ns/iter",
            "extra": "iterations: 19038\ncpu: 36816.90828868579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28432.039868459105,
            "unit": "ns/iter",
            "extra": "iterations: 24631\ncpu: 28431.525313629078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29689.646113397524,
            "unit": "ns/iter",
            "extra": "iterations: 23581\ncpu: 29689.45761418107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22636.14736603636,
            "unit": "ns/iter",
            "extra": "iterations: 30923\ncpu: 22634.94809688571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 153082.83650272424,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153079.25683060056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 301991.6164797387,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 301986.3244176028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74373.02021706331,
            "unit": "ns/iter",
            "extra": "iterations: 9398\ncpu: 74370.66397105817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74118.80188778767,
            "unit": "ns/iter",
            "extra": "iterations: 9429\ncpu: 74117.98706119419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74671.66111707603,
            "unit": "ns/iter",
            "extra": "iterations: 9310\ncpu: 74669.47368420995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153287.42042238513,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 153282.88700196048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 142948.99999999974,
            "unit": "ns/iter",
            "extra": "iterations: 4891\ncpu: 142946.0233081152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44236.10196078096,
            "unit": "ns/iter",
            "extra": "iterations: 15810\ncpu: 44235.591397849705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217255.8864764208,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 217254.2803970223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178049.13201318277,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 178042.80274181245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175954.2013574659,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 175947.28506787514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177699.64671569227,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 177692.16332741443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 303334.2123702092,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 303335.59688581637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1273955.3236362801,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1273923.4545454471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1067267.117199347,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1067242.922374438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1051934.9218045883,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1051901.503759387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1050136.8378377457,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1050120.27027029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 670531.2284069309,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 670519.5777351229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1047456.029895362,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1047381.1659192867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44947.57339331305,
            "unit": "ns/iter",
            "extra": "iterations: 15560\ncpu: 44947.27506426738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 226236.4901390167,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 226227.64306498627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182260.35398229896,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 182259.55231650383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181377.3674729867,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 181370.45805455488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 183284.9474372205,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 183281.56380753164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 311001.0146731669,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 310988.0391285031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1269156.42181819,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1269135.454545459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1065502.7656012408,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1065414.9162861444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1050153.1589204983,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1050109.7451274195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1059997.76139807,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1059978.2674771962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 670445.9090038764,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 670427.5862068922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1046407.5523951786,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1046411.9760478935 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}