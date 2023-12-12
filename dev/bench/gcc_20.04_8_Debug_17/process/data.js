window.BENCHMARK_DATA = {
  "lastUpdate": 1702390829747,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 20.04 Debug c++-17": [
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
        "date": 1702381133401,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15953.811693665026,
            "unit": "ns/iter",
            "extra": "iterations: 41236\ncpu: 15953.952856727132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152171.24029343683,
            "unit": "ns/iter",
            "extra": "iterations: 5589\ncpu: 152167.81177312578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 288424.9249917178,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 288424.09558579494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 422570.7330735358,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 422545.2995616171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 563407.0580644982,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 563381.0967741937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564052.7470000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564042.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 677570.8523391739,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 677495.6871345027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 789283.9599999883,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 789247.4042553186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 890087.9023923026,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 890036.4593301442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13045.73894109917,
            "unit": "ns/iter",
            "extra": "iterations: 53735\ncpu: 13045.179119754366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10816.619471763435,
            "unit": "ns/iter",
            "extra": "iterations: 64668\ncpu: 10816.247603142221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10693.541182577483,
            "unit": "ns/iter",
            "extra": "iterations: 65501\ncpu: 10693.186363566963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10778.935417049868,
            "unit": "ns/iter",
            "extra": "iterations: 65172\ncpu: 10778.897379242615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18346.955810061885,
            "unit": "ns/iter",
            "extra": "iterations: 38244\ncpu: 18346.930237422872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68939.33972602805,
            "unit": "ns/iter",
            "extra": "iterations: 12410\ncpu: 68937.16357775983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357156.4532944089,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 357155.5879899918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 287382.9784584462,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 287365.9710535173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286016.44522848976,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 286000.3024193549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 287849.76470587513,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 287842.21256684454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 561562.5749999823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561559.5999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4763033.600000035,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4762870.769230777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3865215.4710744466,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3865091.735537192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3856666.796680598,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3856539.8340248987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3848564.223140551,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3848147.1074380144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2201084.9905212964,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2200965.402843594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3748507.8629031926,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3748298.7903225687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14687188.9999996,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14686497.260274008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6647697.430000221,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6647408.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18437306.500000603,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18436712.068965513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 73933.29955870546,
            "unit": "ns/iter",
            "extra": "iterations: 11557\ncpu: 73930.82114735669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 392733.1580145716,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 392715.57377049094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 314014.6250914399,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 314002.9992684709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 313650.45278890245,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 313637.87823550764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 311580.7648982622,
            "unit": "ns/iter",
            "extra": "iterations: 2752\ncpu: 311579.43313953566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 558544.8040000073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558539.6999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4818452.632124425,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4818156.994818637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3897948.0000000563,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897821.7573221624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3922446.693277207,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3922312.184873957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3972159.5291666747,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3967584.5833333354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2243485.1421687463,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2243301.6867469815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3809876.4999999716,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3809640.650406501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15002020.492957713,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15001443.661971856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6473898.149999968,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6473859.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66659.31618628901,
            "unit": "ns/iter",
            "extra": "iterations: 12733\ncpu: 66657.559098406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 353223.5426229462,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 353193.85245901585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282908.01419610286,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 282897.1607791351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 278237.2612788066,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 278226.2901655326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 278246.92581793875,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 278239.16423712287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 526462.706000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526457.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4790835.815384608,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4790717.435897435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856690.9958676714,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3856591.7355372044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3870119.854771934,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3869989.62655602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3873988.4876032975,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3873908.2644628286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2207307.548463341,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2207237.352245859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3765123.2782257963,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3765113.709677405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6138.667629626558,
            "unit": "ns/iter",
            "extra": "iterations: 113885\ncpu: 6138.598586293179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40208.24213311696,
            "unit": "ns/iter",
            "extra": "iterations: 17383\ncpu: 40208.13438416834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30314.009852217263,
            "unit": "ns/iter",
            "extra": "iterations: 23142\ncpu: 30313.58568835863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30611.719467902727,
            "unit": "ns/iter",
            "extra": "iterations: 22853\ncpu: 30611.560845403415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24481.65284087021,
            "unit": "ns/iter",
            "extra": "iterations: 28618\ncpu: 24480.93507582656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 178900.62352940414,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 178899.948849105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 317330.8095237985,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 317326.666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77953.07017937169,
            "unit": "ns/iter",
            "extra": "iterations: 8920\ncpu: 77951.8946188343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77330.11027790252,
            "unit": "ns/iter",
            "extra": "iterations: 9068\ncpu: 77329.84119982389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77396.44529009594,
            "unit": "ns/iter",
            "extra": "iterations: 9066\ncpu: 77392.73108316692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151115.0488697565,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 151116.44779332817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 151401.92849428122,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 151398.0125297061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48742.856435645,
            "unit": "ns/iter",
            "extra": "iterations: 14342\ncpu: 48743.278482777794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 235770.5309435197,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 235761.3797767988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 193975.31901330382,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 193976.9401330389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 192735.22812327556,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 192727.95817281335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 191938.9279649381,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 191932.2377430822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 342948.1073529435,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 342930.8333333362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1344371.601923036,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1344322.692307697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1125541.9660743303,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1125463.1663974265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1128164.7532257466,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1128149.6774193598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1123324.2439806983,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1123316.0513643553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 710937.5638945583,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 710896.551724145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1114589.5971338316,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1114544.1082802587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48988.75733184093,
            "unit": "ns/iter",
            "extra": "iterations: 14287\ncpu: 48987.114159725745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 237143.8519146027,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 237133.1074212137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 196555.7780583613,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 196545.59483725915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197205.29262802165,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 197198.6494091175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 196696.82552595288,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 196690.09817671875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 344297.8629665814,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 344282.17092337855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1344266.8711538028,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1344195.9615384473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1128885.7876822867,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1128831.1183144203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1128985.78466557,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1128978.303425784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1128181.3967742445,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1128157.5806451556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 710280.1147207889,
            "unit": "ns/iter",
            "extra": "iterations: 985\ncpu: 710285.583756338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1117805.7811501715,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1117773.0031948949 ns\nthreads: 1"
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
        "date": 1702382292406,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16151.367591206978,
            "unit": "ns/iter",
            "extra": "iterations: 43445\ncpu: 16139.024053400852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 153434.14411817276,
            "unit": "ns/iter",
            "extra": "iterations: 5551\ncpu: 153431.1295262115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 290289.1645485047,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 290291.70568561874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 428311.5177340083,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 428284.0886699509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 574541.1456564264,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 574494.8399738733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 567687.2610000032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567637.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 678145.3113553287,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 678113.1868131872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 801180.962393173,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 801137.9487179492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 900772.2794971052,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 900737.5241779496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13060.380121225624,
            "unit": "ns/iter",
            "extra": "iterations: 53454\ncpu: 13059.597036704463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10826.934812545624,
            "unit": "ns/iter",
            "extra": "iterations: 64629\ncpu: 10827.043587244108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10889.336188904552,
            "unit": "ns/iter",
            "extra": "iterations: 64202\ncpu: 10889.44113890533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10924.627327054875,
            "unit": "ns/iter",
            "extra": "iterations: 63922\ncpu: 10923.658521322875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18010.53186621037,
            "unit": "ns/iter",
            "extra": "iterations: 38897\ncpu: 18010.689770419292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69315.02353416648,
            "unit": "ns/iter",
            "extra": "iterations: 12365\ncpu: 69312.33319854425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 361783.24884405255,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 361780.95838587626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 292902.13487737917,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 292889.9182561302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288077.13746631035,
            "unit": "ns/iter",
            "extra": "iterations: 2968\ncpu: 288072.944743935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 288266.33976311196,
            "unit": "ns/iter",
            "extra": "iterations: 2955\ncpu: 288265.4822335023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 559263.9550000059,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559269.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4787240.994845566,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4786965.463917514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3888828.087866019,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3888622.175732215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3889464.8083333056,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3889495.4166666702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3902124.133333255,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3901931.249999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2228034.633093567,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2227926.8585131913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3781120.3918367103,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3781020.8163265325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14809172.37500042,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14808312.499999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6564356.700000077,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6564331.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18706006.736841463,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18704687.71929829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76476.43401707699,
            "unit": "ns/iter",
            "extra": "iterations: 11359\ncpu: 76476.15106963635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 397008.76830953173,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 396992.7683095351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 316093.2905479774,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 316082.4567855843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 314199.10660825775,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 314181.9277108437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 310588.04330566153,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 310572.4648141456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 555675.1799999803,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555636.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4841003.005208104,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4840901.041666678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3920296.761506312,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3920136.401673638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3935291.219409345,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3935239.6624472663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3917490.037815171,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3917521.0084033865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2278550.0341463033,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2278479.7560975654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3817127.0244897553,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3817158.3673469536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15135213.943662146,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15134266.197183115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6518211.929999893,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6518047.000000067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67047.09447891281,
            "unit": "ns/iter",
            "extra": "iterations: 12733\ncpu: 67043.9723552976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354847.33278351376,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 354850.18556700886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282893.4017798238,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 282882.1357943319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 281373.18614576216,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 281370.6172028895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 280105.0657722474,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 280104.2866492149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 518214.76600002823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518219.8999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4806194.360824487,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4806039.175257713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3896261.9874998457,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3896172.500000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3891895.370833491,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3891923.7500000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3883631.7583334316,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3883462.5000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2209686.5308057475,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2209656.398104274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3768562.024291618,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3768499.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6190.853249995593,
            "unit": "ns/iter",
            "extra": "iterations: 112954\ncpu: 6190.897179382763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40199.635722478415,
            "unit": "ns/iter",
            "extra": "iterations: 17440\ncpu: 40198.48050458724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30784.190660621032,
            "unit": "ns/iter",
            "extra": "iterations: 22721\ncpu: 30783.526253245913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30801.345497819315,
            "unit": "ns/iter",
            "extra": "iterations: 22689\ncpu: 30801.00048481643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24522.818296662514,
            "unit": "ns/iter",
            "extra": "iterations: 28497\ncpu: 24522.995403024906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 176731.19817996965,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 176730.68756319664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 320262.3864253313,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 320252.85067873006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78182.6506841734,
            "unit": "ns/iter",
            "extra": "iterations: 8989\ncpu: 78180.56513516606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78035.24824591205,
            "unit": "ns/iter",
            "extra": "iterations: 8979\ncpu: 78035.90600289566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78126.67230820292,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 78124.80792784835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 159781.8875712643,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 159783.03306727664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 151178.13599999863,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 151175.5891891899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49033.937395073284,
            "unit": "ns/iter",
            "extra": "iterations: 14296\ncpu: 49034.24034694989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234929.49815375987,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 234923.2628398823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 193877.44736115256,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 193866.34429400516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 193246.40932928704,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 193232.92851228215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 191976.17585733597,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 191974.84224965595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 338153.2803286707,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 338155.2440792639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1363631.021442529,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1363604.483430812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1131679.2847896449,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1131666.019417471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1137199.597402584,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1137172.5649350528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1132090.4530744108,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1132097.249190926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 717253.7198764158,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 717228.9392378901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1120749.4131833003,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1120742.2829582067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49928.277152748684,
            "unit": "ns/iter",
            "extra": "iterations: 13866\ncpu: 49927.0950526465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 238829.11274341654,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 238821.89955585648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 197971.49179863164,
            "unit": "ns/iter",
            "extra": "iterations: 3536\ncpu: 197972.87895927642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 198118.34512023,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 198110.18387553215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 198106.95841583976,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 198105.99717114677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 341421.4382625606,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341401.90336749813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1358613.4105059027,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1358581.9066148098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1140492.889610436,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1140437.012987027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1131115.2504039174,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1131077.3828756122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1133506.5121556171,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1133490.5996758381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 718561.2328204955,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 718523.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1121909.1272141228,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1121882.769726262 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390828900,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15890.772269347568,
            "unit": "ns/iter",
            "extra": "iterations: 43973\ncpu: 15889.916539694812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 151808.81139172282,
            "unit": "ns/iter",
            "extra": "iterations: 5583\ncpu: 151800.68063765005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 287178.5508250768,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 287166.6336633663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425549.95483244216,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 425529.2374939288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 557949.1884244345,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 557904.2443729906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 556821.9290000229,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556806.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 668910.435251787,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 668868.7769784171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 778864.207737604,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 778814.5500420516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 884012.0658396982,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 883966.3167938929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12957.110900895872,
            "unit": "ns/iter",
            "extra": "iterations: 53913\ncpu: 12957.067868603102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10680.696505950404,
            "unit": "ns/iter",
            "extra": "iterations: 65540\ncpu: 10680.024412572484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10681.115557863,
            "unit": "ns/iter",
            "extra": "iterations: 65491\ncpu: 10680.572903146993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10907.042116630857,
            "unit": "ns/iter",
            "extra": "iterations: 64820\ncpu: 10906.493366244986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18078.678490410897,
            "unit": "ns/iter",
            "extra": "iterations: 38792\ncpu: 18077.82532480926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69048.62163469192,
            "unit": "ns/iter",
            "extra": "iterations: 12406\ncpu: 69045.73593422535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 362909.63097756193,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 362894.3292424883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288083.58526740863,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 288070.2993609146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290125.48983050656,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290112.8135593226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 286592.014473243,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 286571.7940087516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 565689.5560000237,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565645.0999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4751743.17857149,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4751357.142857147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3861831.8381742705,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3861630.705394189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3866761.153526908,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3866707.053941909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3844670.182572629,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3844441.9087136895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2195332.0070921336,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2195210.4018912553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3754376.5141701214,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3754119.8380566817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14662185.84931533,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14661261.643835621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6412000.010000156,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6411599.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18391227.827586245,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18390012.068965543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 73715.66591811838,
            "unit": "ns/iter",
            "extra": "iterations: 11578\ncpu: 73709.93263085159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 393247.41332117055,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 393229.4708029192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 316411.3511422356,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 316410.2431834939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 313360.1373265062,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 313341.01533966576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 308651.70911721844,
            "unit": "ns/iter",
            "extra": "iterations: 2764\ncpu: 308632.67004341545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 562650.2439999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562648.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4800686.257731954,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4800478.350515471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3902597.3849372678,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3902338.912133896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3901988.585774093,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3901789.958158977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3895675.167363985,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3895448.9539748915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2235040.781774531,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2234965.2278177496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3792922.817073132,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3792729.2682926753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14991233.777777778,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14990250.00000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6423540.619999813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6423004.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66905.50145223239,
            "unit": "ns/iter",
            "extra": "iterations: 12739\ncpu: 66900.07849909751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 360085.61990760616,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 360069.13061738695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 285139.76632416015,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 285114.71660589805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 285257.1116683228,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285227.6496155152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 280389.8816781396,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 280362.60242543404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 527692.860000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527652.2000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4773665.831632689,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4773386.224489807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3865635.107883795,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3865294.605809134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3865147.099585201,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3865045.2282157773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3857248.211618421,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3856985.062240651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2189734.4869975513,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2189610.6382978708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3757662.4354838463,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3757389.919354843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6216.313427628667,
            "unit": "ns/iter",
            "extra": "iterations: 111777\ncpu: 6215.9809263086445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40009.19959999984,
            "unit": "ns/iter",
            "extra": "iterations: 17500\ncpu: 40005.89142857141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31920.174460432794,
            "unit": "ns/iter",
            "extra": "iterations: 21684\ncpu: 31917.96255303432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30242.646715138988,
            "unit": "ns/iter",
            "extra": "iterations: 23106\ncpu: 30240.067514931103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24081.779440602793,
            "unit": "ns/iter",
            "extra": "iterations: 29067\ncpu: 24079.97729383855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 177584.64137056237,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177572.4873096448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 313622.5906040172,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 313592.84116331005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77440.53740744451,
            "unit": "ns/iter",
            "extra": "iterations: 9049\ncpu: 77434.47894794945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77230.97803047286,
            "unit": "ns/iter",
            "extra": "iterations: 9058\ncpu: 77226.8712740124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77190.15105373906,
            "unit": "ns/iter",
            "extra": "iterations: 9063\ncpu: 77188.52477104717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157974.0602300905,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 157961.22264831874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149960.25300170892,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 149940.50171526455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49078.58230163384,
            "unit": "ns/iter",
            "extra": "iterations: 14216\ncpu: 49076.660101294605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234790.67555852226,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 234785.22840946727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 192575.54185021206,
            "unit": "ns/iter",
            "extra": "iterations: 3632\ncpu: 192561.20594713555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 191996.0521405029,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 191977.00329308384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 191942.11553238152,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 191919.78594950945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341526.27992185665,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 341496.18954567297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1350301.5864077578,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1350196.893203897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1134679.8168556918,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1134599.0275526592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1133989.6623586304,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1133903.7156704236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1126699.6170212536,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1126693.7806873918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 713385.632653111,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 713338.2653061248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1124049.3578275156,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1123967.0926517663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49541.36773049619,
            "unit": "ns/iter",
            "extra": "iterations: 14100\ncpu: 49538.361702127375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 236195.08170156024,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 236184.57123565278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 197239.57371075582,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 197225.61659193088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 196210.2114413839,
            "unit": "ns/iter",
            "extra": "iterations: 3566\ncpu: 196193.57823892473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 197907.7784380406,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 197885.79513299343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 343187.9705449267,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 343062.29749631544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1342202.8138195302,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1342151.2476007766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1149656.3847487047,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1149589.42807625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1128558.8373590657,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1128534.2995168935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1123996.2741935612,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1123930.3225806449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 713456.2134831378,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 713357.405515832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1116491.5007973765,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1116402.2328548692 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}