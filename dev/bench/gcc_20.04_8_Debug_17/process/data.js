window.BENCHMARK_DATA = {
  "lastUpdate": 1702382293144,
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
      }
    ]
  }
}