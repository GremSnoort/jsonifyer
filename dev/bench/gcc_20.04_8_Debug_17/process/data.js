window.BENCHMARK_DATA = {
  "lastUpdate": 1702381133982,
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
      }
    ]
  }
}