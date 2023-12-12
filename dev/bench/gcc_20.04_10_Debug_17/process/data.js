window.BENCHMARK_DATA = {
  "lastUpdate": 1702381129510,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Debug c++-17": [
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
        "date": 1702381128865,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14879.130267215116,
            "unit": "ns/iter",
            "extra": "iterations: 46704\ncpu: 14879.222336416584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145239.56460146344,
            "unit": "ns/iter",
            "extra": "iterations: 5859\ncpu: 145234.08431472947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 274445.5175466286,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 274449.7628833386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 402928.69205758645,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 402907.2921504875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 535818.293578,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 535781.4067278286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 535909.4059999734,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535903.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 639004.1349999934,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639000.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 746847.6537530135,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 746831.2348668284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 847178.5402930528,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 847185.8058608063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11962.410584938829,
            "unit": "ns/iter",
            "extra": "iterations: 58536\ncpu: 11962.235205685394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9851.240364982583,
            "unit": "ns/iter",
            "extra": "iterations: 71017\ncpu: 9851.024402607844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9811.177653646955,
            "unit": "ns/iter",
            "extra": "iterations: 71251\ncpu: 9810.959846177615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9812.59747863888,
            "unit": "ns/iter",
            "extra": "iterations: 71390\ncpu: 9812.739879534929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16199.903070876928,
            "unit": "ns/iter",
            "extra": "iterations: 41226\ncpu: 16200.25469363996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62571.568801980735,
            "unit": "ns/iter",
            "extra": "iterations: 13706\ncpu: 62569.94746826202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321373.56097560993,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 321366.26641651016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254924.0570228015,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 254921.7286914773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 268952.1351671085,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 268945.7556935817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 253681.17358827952,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 253674.8132656112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 567561.291909383,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 567539.5469255657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4547747.941463546,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4547647.80487804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3695288.940476198,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3694711.507936503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3681299.6086955033,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3681226.8774703536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3690593.1150794374,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3690549.6031746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2152753.648960685,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2152666.7436489607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3604237.864341134,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3604079.8449612414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14340786.199999608,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14340191.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6456690.670000285,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6456797.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17499287.213114876,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 17498511.47540984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68098.5151297969,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 68098.65424430634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 351516.23599181324,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 351507.60736196314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 282250.847144259,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 282246.087817763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 283159.4561056104,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 283152.11221122066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 281122.740679641,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 281117.3870009884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583710.7272727183,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 583700.6060606067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4617626.257425958,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4617513.86138613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3756896.3170731715,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3756789.0243902346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3751068.401606378,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3751000.4016064303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3734721.2960000886,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3734631.1999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2176208.468384189,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2176156.2060889928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3645408.5078125866,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3645350.3906249963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14647426.452055018,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14646649.315068511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6431932.719999623,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6431678.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 61221.18284359374,
            "unit": "ns/iter",
            "extra": "iterations: 13919\ncpu: 61221.54608808116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 311847.92779390805,
            "unit": "ns/iter",
            "extra": "iterations: 2756\ncpu: 311843.21480406314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 253795.43314557342,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 253797.09457456262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 253168.72028384646,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 253167.53400354795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 251867.742789876,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 251868.92289582215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 560727.4064515965,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 560737.1612903249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4576903.181372546,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4576748.529411766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3724892.289682428,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3724759.9206349235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3693657.326771576,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3693641.7322834814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3778423.9960475448,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3778313.438735173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2156533.962877052,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2156538.9791183374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3605753.038759617,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3605649.6124030906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5650.731527930738,
            "unit": "ns/iter",
            "extra": "iterations: 123592\ncpu: 5650.82529613571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37545.00549362602,
            "unit": "ns/iter",
            "extra": "iterations: 18749\ncpu: 37543.55965651484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29588.14115115047,
            "unit": "ns/iter",
            "extra": "iterations: 23698\ncpu: 29588.02852561378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30057.817869563598,
            "unit": "ns/iter",
            "extra": "iterations: 23291\ncpu: 30057.13365677737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23519.772032194,
            "unit": "ns/iter",
            "extra": "iterations: 29820\ncpu: 23519.87592219953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 147889.389417992,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 147882.7936507941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 289160.0066889835,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 289163.4197324412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73986.72202666299,
            "unit": "ns/iter",
            "extra": "iterations: 9375\ncpu: 73985.33333333337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73921.58141742146,
            "unit": "ns/iter",
            "extra": "iterations: 9482\ncpu: 73919.05716093682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73753.66168263466,
            "unit": "ns/iter",
            "extra": "iterations: 9497\ncpu: 73751.3846477843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 146872.8148614525,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 146869.3534844658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146274.79196168503,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 146274.17742607213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42563.16929445473,
            "unit": "ns/iter",
            "extra": "iterations: 16427\ncpu: 42562.275522006945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209499.302061552,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 209494.05437705733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171636.4817267498,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 171639.17095903834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172319.38597785996,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 172321.4022140213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172176.11458077404,
            "unit": "ns/iter",
            "extra": "iterations: 4067\ncpu: 172164.2242439127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297537.66187050025,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 297538.1294964037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1266359.3072726475,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1266311.8181818204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1057620.3721633952,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1057578.81996974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1059626.229607207,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1059593.5045317183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1049733.4580838175,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1049708.2335329277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 671612.9510556891,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 671623.8003838778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1051304.3600605081,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1051261.5733736665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43859.15491895881,
            "unit": "ns/iter",
            "extra": "iterations: 15918\ncpu: 43859.05892700101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213541.8059792522,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 213542.25137278702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178010.37318006752,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 178006.4623243955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177732.1326712483,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 177721.69595110978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179200.40173779728,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 179195.73217480074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 299559.1230243433,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 299548.9107219088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1267356.061371827,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1267325.2707581131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1061497.630862312,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1061472.4659606619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1061037.6090909312,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1061030.4545454553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1062418.197268654,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1062413.201820959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 677872.7112402809,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 677849.1279069859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1056684.9486404646,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1056643.8066465375 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}