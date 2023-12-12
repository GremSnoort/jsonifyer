window.BENCHMARK_DATA = {
  "lastUpdate": 1702388117740,
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
        "date": 1702382294969,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15656.523604016169,
            "unit": "ns/iter",
            "extra": "iterations: 45416\ncpu: 15656.638629557865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147368.69471861614,
            "unit": "ns/iter",
            "extra": "iterations: 5775\ncpu: 147365.99134199135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279181.96422817063,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 279180.8250080568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 410284.1736867025,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 410275.9583530524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 545952.7643391528,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 545931.795511222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 545656.9919999766,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545639.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 657288.9880000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657282.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 759582.224856889,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 759557.3180703185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 864112.1765799315,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 864089.7769516727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11809.112532442763,
            "unit": "ns/iter",
            "extra": "iterations: 59334\ncpu: 11808.836417568364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10124.612528470638,
            "unit": "ns/iter",
            "extra": "iterations: 69809\ncpu: 10124.362188256526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9866.76768374348,
            "unit": "ns/iter",
            "extra": "iterations: 70955\ncpu: 9866.306814177984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9991.188280636254,
            "unit": "ns/iter",
            "extra": "iterations: 70055\ncpu: 9990.962814931125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16068.535868467225,
            "unit": "ns/iter",
            "extra": "iterations: 43548\ncpu: 16068.494534766243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63480.205637984945,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 63480.66765578634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 331249.6536979931,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 331240.4083204934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 262512.9214577433,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 262507.8542255728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 260206.27054169046,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 260198.6305538648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 261423.1000000004,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 261410.58282208594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 561543.0602178078,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 561512.7482383096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4571561.411764843,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4571485.294117652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3753437.983870952,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3753367.3387096757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3742597.8514055163,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3742495.180722894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3727137.5204917802,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3726973.7704918017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2184939.6423528884,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2184838.3529411773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3637573.9570313483,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3637378.5156250116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14631681.780822294,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14631080.82191781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6518381.409999847,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6518264.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18717688.9500004,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 18717213.333333287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69298.50595142232,
            "unit": "ns/iter",
            "extra": "iterations: 12434\ncpu: 69296.77497185124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 360576.7680000051,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 360576.4631578941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 293947.43600274896,
            "unit": "ns/iter",
            "extra": "iterations: 2922\ncpu: 293941.23887748044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 289081.35077651497,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 289083.38960162067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 287321.0529845755,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 287275.85513078497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 576390.1318753879,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 576385.5533465893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4633895.925372934,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4633663.681592048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3806955.783673458,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3806650.6122448826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3784005.886178712,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783897.9674796658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3761268.20564498,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3761126.6129032336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2222225.9164677975,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2222116.9451073958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3669219.7244095462,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3669120.8661417346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14968356.295775054,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14967525.352112731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6473795.649999943,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6473449.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60389.10899999906,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60388.820000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 323468.9429429575,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 323453.7162162165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 263300.19643405656,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 263283.58438364643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 256781.50540866016,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 256772.59615384552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 256464.99189190546,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 256449.06906907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 557059.7808483415,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 557044.2802056572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4589330.60098514,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4589309.8522167355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3770155.370967777,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3769967.7419354944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3750891.7911647228,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3750748.995983942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3748865.036000097,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3748668.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2184593.781176398,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2184514.352941178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3645179.0703124763,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3644949.6093750033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5634.202108339029,
            "unit": "ns/iter",
            "extra": "iterations: 123889\ncpu: 5634.246785428887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37842.738506366775,
            "unit": "ns/iter",
            "extra": "iterations: 18532\ncpu: 37842.56960932441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30035.859404633997,
            "unit": "ns/iter",
            "extra": "iterations: 24254\ncpu: 30035.70957367848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30900.002169473384,
            "unit": "ns/iter",
            "extra": "iterations: 23508\ncpu: 30898.485621915817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23287.26616007368,
            "unit": "ns/iter",
            "extra": "iterations: 30136\ncpu: 23287.161534377497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 149167.11560569674,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 149166.3615073478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 304473.690207978,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 304476.03986135335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75069.24991982843,
            "unit": "ns/iter",
            "extra": "iterations: 9355\ncpu: 75064.8102618914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74639.74813789624,
            "unit": "ns/iter",
            "extra": "iterations: 9398\ncpu: 74636.58225154277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74298.7712557085,
            "unit": "ns/iter",
            "extra": "iterations: 9421\ncpu: 74293.91784311626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 156061.65555555487,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 156055.91111111356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146772.39907582352,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 146771.81264440078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42757.79942588352,
            "unit": "ns/iter",
            "extra": "iterations: 16373\ncpu: 42756.41605081534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209252.4880525819,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 209242.8016726395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171483.6977941261,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 171481.5441176454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172155.9008610085,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 172157.19557195346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173498.2854675646,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 173493.16555637866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 292385.8146137843,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 292387.76617953874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1279908.6282051401,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1279845.2380952432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1074344.51326051,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1074306.0842433786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1068187.5945121774,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1068100.152439018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1068078.1491628697,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1068037.4429223672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 684068.027317042,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 684062.2439024423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1064077.6433991096,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1064064.946889236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44454.695275442595,
            "unit": "ns/iter",
            "extra": "iterations: 15811\ncpu: 44454.99968376436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214768.17315355124,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 214763.68372663241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178155.7637935443,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 178154.5385202131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178011.14706629622,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 177999.54279908587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178942.983150374,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 178936.02246617328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294426.5704077194,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 294405.2963430017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1280919.9014869551,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1280865.4275093027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1078077.2299382607,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1077991.8209876546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1076067.5576036365,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1075999.6927803482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1074332.7120979994,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1074339.663093409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 687460.4347399728,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 687398.626104035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1068062.4695121688,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1068008.2317073306 ns\nthreads: 1"
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
        "date": 1702387065172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14858.916422412038,
            "unit": "ns/iter",
            "extra": "iterations: 47082\ncpu: 14857.554904209677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148747.67092595735,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 148737.80850691407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 283043.9640170165,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 283020.96826954524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417547.28038277634,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 417520.90909090923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 558044.6175726951,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 558007.0796460178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 554043.9709999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554003.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 659610.2420000136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659558.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 773118.6486711144,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 773078.8205980068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 886563.4432892314,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 886467.958412098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12008.98158287732,
            "unit": "ns/iter",
            "extra": "iterations: 58261\ncpu: 12008.544309229164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9917.409921005832,
            "unit": "ns/iter",
            "extra": "iterations: 70638\ncpu: 9917.193295393412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9808.94536430766,
            "unit": "ns/iter",
            "extra": "iterations: 71327\ncpu: 9808.358686051575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9775.217982205253,
            "unit": "ns/iter",
            "extra": "iterations: 71593\ncpu: 9774.688866229946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16103.086767546662,
            "unit": "ns/iter",
            "extra": "iterations: 43484\ncpu: 16101.681078097667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63124.48884485653,
            "unit": "ns/iter",
            "extra": "iterations: 13626\ncpu: 63121.32687509169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 327484.7007633643,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 327465.11450381676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 262431.74370779964,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 262418.44689993886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 261558.4911369226,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 261537.68337408247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262265.42936117586,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 262254.63759213703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 566601.5827384877,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 566577.5470473721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4609635.591133092,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4609348.275862062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3742264.3800000516,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3742078.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3716806.040160694,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3716602.409638551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3736739.7630521692,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3736594.377510042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2178384.4192037764,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2178324.1217798586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3639148.8313725796,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3638991.764705874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14610005.616438143,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14609305.479452021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6387309.1599998595,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6386913.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17800276.881356023,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 17799747.45762712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69866.92239196225,
            "unit": "ns/iter",
            "extra": "iterations: 12241\ncpu: 69864.51270321048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 360607.21035058383,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 360589.3155258766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 291308.56924122636,
            "unit": "ns/iter",
            "extra": "iterations: 2939\ncpu: 291297.2439605305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 290011.04237287585,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290000.40677966067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 287790.87277609966,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 287789.2917086277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 576331.6899999988,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 576317.6666666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4664946.295000049,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4664883.499999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3781341.251012166,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3781281.781376523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3769652.2348178388,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3769530.3643724793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3776757.4153226563,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3776704.0322580924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2196745.591016549,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2196661.229314421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3681116.0513832285,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3681022.529644266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14837667.916665964,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14837197.222222148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6269371.860000206,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6269270.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 62620.53155411459,
            "unit": "ns/iter",
            "extra": "iterations: 13564\ncpu: 62619.721321144454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 316666.2209174244,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 316658.23853211035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261141.99786258952,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 261135.6030534349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 258020.23796547757,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 258013.23039660827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 259898.49161330928,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 259890.5154010374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555263.7734274821,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 555240.3722721455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4644833.297872315,
            "unit": "ns/iter",
            "extra": "iterations: 188\ncpu: 4644599.468085085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3755319.5927420156,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3755066.9354838897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3730139.523999924,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3729916.400000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3760690.4618474534,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3760478.714859431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2180265.539906157,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2180108.2159624384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3663135.3242186913,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3662887.890624994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5683.977856330123,
            "unit": "ns/iter",
            "extra": "iterations: 123060\ncpu: 5683.509670079606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37748.30481168379,
            "unit": "ns/iter",
            "extra": "iterations: 18559\ncpu: 37746.02079853419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28883.296991705196,
            "unit": "ns/iter",
            "extra": "iterations: 24233\ncpu: 28880.555440927445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31400.438325893756,
            "unit": "ns/iter",
            "extra": "iterations: 23081\ncpu: 31398.297300810053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23273.835290205123,
            "unit": "ns/iter",
            "extra": "iterations: 30065\ncpu: 23271.957425577908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 149431.31731796457,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 149422.42152466267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 304777.6797385725,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 304752.7668845319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74909.85185185021,
            "unit": "ns/iter",
            "extra": "iterations: 9369\ncpu: 74905.34742235138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74522.31462475614,
            "unit": "ns/iter",
            "extra": "iterations: 9354\ncpu: 74520.0662818055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74396.70956429737,
            "unit": "ns/iter",
            "extra": "iterations: 9410\ncpu: 74392.42295430331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 155218.315454744,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 155206.5507737949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146936.5157961325,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 146923.25189553402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42528.685019750934,
            "unit": "ns/iter",
            "extra": "iterations: 16455\ncpu: 42525.651777574785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208902.0547904188,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 208884.6407185651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 173134.19159456834,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 173123.16440049474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172808.18644905428,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 172794.634025716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172747.72801182623,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 172731.31313131403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295187.51664559054,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 295161.3147914019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1291496.3812155037,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1291413.4438305537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1088671.1003086385,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1088640.2777777845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1071432.4471668683,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1071411.6385911051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1071573.6947852704,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1071494.6319018481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 681192.0261374755,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 681138.8189738638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1063317.3034900841,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1063241.881638856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43985.50106757019,
            "unit": "ns/iter",
            "extra": "iterations: 15924\ncpu: 43981.518462697044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213981.85948905605,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 213964.68978102168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178019.8578680067,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 178005.65989847903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176854.89939486433,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 176844.02420574662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178271.82604273251,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 178255.7985757876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 295764.5084388058,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 295745.063291141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1286819.1014759664,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1286548.7084871011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1079672.0509259603,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1079638.7345678927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1074075.0046224631,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1073995.5315870503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1079673.1029185965,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1079591.2442396241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 685934.5478515966,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 685893.1640624927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1069005.381317028,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1068949.004594192 ns\nthreads: 1"
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
        "date": 1702388110291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14806.27711229935,
            "unit": "ns/iter",
            "extra": "iterations: 46750\ncpu: 14805.379679144386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146173.17439861878,
            "unit": "ns/iter",
            "extra": "iterations: 5820\ncpu: 146168.1443298969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 280942.42679425696,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 280926.8899521531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 407558.75990566786,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 407556.9339622643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 539482.6024691125,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 539455.4320987655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 539125.7119999864,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539115.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 642947.7388442002,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 642907.6079005119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 748773.7736459194,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 748748.9086499597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 853101.2945139733,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 853060.5389797881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12055.181264829858,
            "unit": "ns/iter",
            "extra": "iterations: 58158\ncpu: 12054.743973314084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9884.09467647837,
            "unit": "ns/iter",
            "extra": "iterations: 70799\ncpu: 9883.30484893854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9852.38535219983,
            "unit": "ns/iter",
            "extra": "iterations: 71096\ncpu: 9852.139360864181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9929.631188469464,
            "unit": "ns/iter",
            "extra": "iterations: 70494\ncpu: 9929.340085681057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16122.26441787069,
            "unit": "ns/iter",
            "extra": "iterations: 43401\ncpu: 16122.296721273688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63533.990626656196,
            "unit": "ns/iter",
            "extra": "iterations: 13229\ncpu: 63532.63285206742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 329460.02656912204,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 329458.4520600694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 262908.70716701547,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 262903.629652415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 257253.86777610215,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 257248.9561270801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 259399.79008214813,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 259388.1655004563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 559072.767708983,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 559048.6279515006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4532057.180487821,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4531820.487804877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3669329.517786648,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3669142.6877470403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3669566.8937007547,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3669523.6220472394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3682947.432539757,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3682741.2698412603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2120377.4393592533,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2120332.4942791746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3586980.976923061,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3586762.3076923043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14215538.226666618,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14215178.666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6233290.519999742,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6233194.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17520494.18032733,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 17519257.377049163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69307.1537294346,
            "unit": "ns/iter",
            "extra": "iterations: 12522\ncpu: 69304.20859287669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 361897.2724210547,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 361895.57894736953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 291054.279551629,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 291053.1249999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284139.8501822961,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 284130.32814053626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284933.6108341747,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 284934.29710867396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 574209.473858392,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 574200.1323626708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4738037.305418762,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4737919.704433524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3737870.53815252,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3737884.337349393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3730221.419999907,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3729994.0000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3728601.8839999996,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3728615.6000000117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2161735.4755245754,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2161671.32867133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3633623.2812499427,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3633570.703125005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14525977.932432422,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14525855.405405385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6221947.40999987,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6221655.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59563.87999999607,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59561.53999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 323284.6795933775,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 323286.3328313257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 262912.07121212,
            "unit": "ns/iter",
            "extra": "iterations: 3300\ncpu: 262899.90909090824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 257120.6543209942,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 257105.9620596214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 255256.44792598777,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 255243.300507312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 559911.7786357554,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 559884.6203346179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4586305.360975607,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4586179.024390238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3704163.669322795,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3703967.72908366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3675811.062992098,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3675644.0944881933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3700763.60317446,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3700655.555555552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2128748.967889866,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2128340.366972476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3597083.6756756925,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3596931.274131274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5575.550779973361,
            "unit": "ns/iter",
            "extra": "iterations: 125453\ncpu: 5575.237738435933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36348.81253570053,
            "unit": "ns/iter",
            "extra": "iterations: 19257\ncpu: 36348.93804850204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27736.690537489267,
            "unit": "ns/iter",
            "extra": "iterations: 25247\ncpu: 27735.88149087047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30987.62257691704,
            "unit": "ns/iter",
            "extra": "iterations: 22492\ncpu: 30987.742308376437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22112.068966606377,
            "unit": "ns/iter",
            "extra": "iterations: 31624\ncpu: 22111.684163926173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 148649.0239711437,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 148644.82392872282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302048.83944757725,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 302029.26197669527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74323.18854896743,
            "unit": "ns/iter",
            "extra": "iterations: 9414\ncpu: 74320.84130019067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74249.79159165929,
            "unit": "ns/iter",
            "extra": "iterations: 9443\ncpu: 74247.68611669938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74339.31601777328,
            "unit": "ns/iter",
            "extra": "iterations: 9452\ncpu: 74338.17181548846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153107.3711475486,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153107.8032786892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 145929.01601164954,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 145917.03056768706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43439.28162809492,
            "unit": "ns/iter",
            "extra": "iterations: 16117\ncpu: 43439.39318731719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210748.6164960851,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 210743.196869355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172737.81614016902,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 172735.21717670097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173508.44326065463,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 173497.77006937595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173684.37781629266,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 173678.65808368204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 293600.5734676767,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 293587.82535684365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1274824.5136611816,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1274774.6812386266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1067465.4717556695,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1067422.7480916139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1059798.1833333762,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1059757.7272727333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1068828.6122137664,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1068826.2595419842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 673726.818443799,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 673687.3198847362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1057267.4811462662,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1057233.6349924488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43784.52915725961,
            "unit": "ns/iter",
            "extra": "iterations: 15948\ncpu: 43782.010283420845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215442.82488479404,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 215437.84946236684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178336.4996178424,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 178325.8598726108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180290.71733605186,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 180284.3162175897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178108.91858361725,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 178097.49289222088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296414.8825275682,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 296405.7675996609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1280190.032846772,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1280141.4233576797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1071085.6605504537,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1071066.2079510747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1064099.8239757053,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1064083.1562974274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1070424.8137404257,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1070339.9999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 675674.5169409789,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 675647.6282671895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1061380.0907715864,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1061336.0060514295 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}