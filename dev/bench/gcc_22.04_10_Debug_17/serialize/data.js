window.BENCHMARK_DATA = {
  "lastUpdate": 1702387030033,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-10 22.04 Debug c++-17": [
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
        "date": 1702381118623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7615.162049710999,
            "unit": "ns/iter",
            "extra": "iterations: 92052\ncpu: 7615.081692956156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94400.44460415743,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 94396.15214506854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184352.27558066527,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 184199.07930529406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 274723.0793902802,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 274719.11718005716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 357799.48999165994,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 357785.1959966637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 443700.0316165249,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 443686.2825089242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 530411.558734038,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 530402.8606208152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 617063.0792640125,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 617033.8995045995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 565295.0499999748,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565293.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5975.114379196961,
            "unit": "ns/iter",
            "extra": "iterations: 116752\ncpu: 5974.664245580378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4841.303122656953,
            "unit": "ns/iter",
            "extra": "iterations: 144044\ncpu: 4841.139512926608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4841.954663132191,
            "unit": "ns/iter",
            "extra": "iterations: 144849\ncpu: 4841.900876084758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4878.730021583341,
            "unit": "ns/iter",
            "extra": "iterations: 143167\ncpu: 4878.43706999518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8603.525530398489,
            "unit": "ns/iter",
            "extra": "iterations: 81354\ncpu: 8603.401184944822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46530.25605459033,
            "unit": "ns/iter",
            "extra": "iterations: 17879\ncpu: 46529.07321438564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194827.29778993133,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 194823.44497607622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158170.0705730587,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 158166.50082918734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158253.6491682084,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 158247.1349353052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 161673.69465936464,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 161663.33270428362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353594.5061025323,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 353581.8958502848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2972279.386792542,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2972193.0817610044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2424620.400000112,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424579.480519483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2454303.783289835,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2454205.744125321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2438657.205729259,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2438611.718750002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1438910.0354938407,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1438879.3209876542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2361504.0987341604,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2361388.607594934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10117885.142856916,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10117550.476190472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5672352.109090959,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5672076.363636379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11755476.67032963,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11755297.802197797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46661.0303593568,
            "unit": "ns/iter",
            "extra": "iterations: 17754\ncpu: 46660.08223498945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 199945.87835002702,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 199937.56700069897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 162368.3252738948,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 162365.1681148473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161909.4540662621,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 161903.65210843357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162667.77167300525,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 162664.3536121676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 364169.99832355254,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 364155.44844928815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2949974.348101172,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2949901.265822783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2439156.428198445,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2439034.9869451695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2462610.343007874,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2462585.2242744053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2446893.685039455,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2446836.2204724336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1436253.6856702762,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1436249.4607087758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2368459.762025355,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2368389.113924054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10260836.367924618,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10260554.716981078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5744740.165644117,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5744655.828220822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45666.50445299497,
            "unit": "ns/iter",
            "extra": "iterations: 18190\ncpu: 45665.327102803574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 201552.00985221015,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 201551.25498475178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 160294.4292919826,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 160291.6682234268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 158019.45163073728,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 158018.9976045696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159619.2651614124,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 159614.8161970512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 356300.06362889137,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 356288.7520525444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2951360.085173481,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2951300.630914829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2434569.0520834276,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2434480.7291666693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2454317.5301838354,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2454279.265091855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2434834.1644908655,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2434694.5169712775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1441401.8509316742,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1441379.1925465818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2370984.3842238886,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2370878.1170483553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2648.688422928965,
            "unit": "ns/iter",
            "extra": "iterations: 264782\ncpu: 2648.6800462267065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20010.70190010178,
            "unit": "ns/iter",
            "extra": "iterations: 35156\ncpu: 19985.61554215498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15358.82596483413,
            "unit": "ns/iter",
            "extra": "iterations: 45215\ncpu: 15358.148844410041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14532.869598541165,
            "unit": "ns/iter",
            "extra": "iterations: 48274\ncpu: 14531.609147781355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11827.6109318245,
            "unit": "ns/iter",
            "extra": "iterations: 59185\ncpu: 11827.099771901647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80626.98089758142,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 80623.49827387895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189877.67944534554,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 189871.15280043747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46614.54830982242,
            "unit": "ns/iter",
            "extra": "iterations: 15028\ncpu: 46611.35214266716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46812.94118826068,
            "unit": "ns/iter",
            "extra": "iterations: 14963\ncpu: 46810.920269998656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46722.648442721125,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 46719.5695762597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 99096.88173568308,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 99093.13669880753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88223.86728783984,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 88218.42105263041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22619.261678019364,
            "unit": "ns/iter",
            "extra": "iterations: 30977\ncpu: 22618.51050779596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 112197.76259798535,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 112194.00095984427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 89229.66836409568,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 89229.35709739111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 88847.36770674399,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 88844.39370877655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 89933.19230275498,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 89927.79987171265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 167234.44216061477,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 167228.48948374877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 789961.5067719775,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 789901.4672686321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664509.3276353263,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 664507.0275403514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 665260.20857141,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 665233.9999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 669436.3244019098,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 669390.2392344574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 423499.1625674918,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 423482.0635872796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 652503.7446009294,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 652460.4694835673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22773.349903961545,
            "unit": "ns/iter",
            "extra": "iterations: 30717\ncpu: 22772.415926034344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 110719.92469546142,
            "unit": "ns/iter",
            "extra": "iterations: 6321\ncpu: 110713.06755260348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 88611.50189442061,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 88610.38140944668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 90159.73112054558,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 90159.46224109165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90647.24276402059,
            "unit": "ns/iter",
            "extra": "iterations: 7670\ncpu: 90641.69491525408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 166189.54094469702,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 166183.90695466212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 786308.3251121305,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 786249.4394618851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 668457.2213740689,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 668430.916030537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 667950.1339712779,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 667947.9425837203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 665971.0758157243,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 665931.2859884874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 416619.8701608122,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 416618.2251340056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 650425.0139275559,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 650384.401114203 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381118623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7615.162049710999,
            "unit": "ns/iter",
            "extra": "iterations: 92052\ncpu: 7615.081692956156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94400.44460415743,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 94396.15214506854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184352.27558066527,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 184199.07930529406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 274723.0793902802,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 274719.11718005716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 357799.48999165994,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 357785.1959966637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 443700.0316165249,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 443686.2825089242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 530411.558734038,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 530402.8606208152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 617063.0792640125,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 617033.8995045995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 565295.0499999748,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565293.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5975.114379196961,
            "unit": "ns/iter",
            "extra": "iterations: 116752\ncpu: 5974.664245580378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4841.303122656953,
            "unit": "ns/iter",
            "extra": "iterations: 144044\ncpu: 4841.139512926608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4841.954663132191,
            "unit": "ns/iter",
            "extra": "iterations: 144849\ncpu: 4841.900876084758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4878.730021583341,
            "unit": "ns/iter",
            "extra": "iterations: 143167\ncpu: 4878.43706999518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8603.525530398489,
            "unit": "ns/iter",
            "extra": "iterations: 81354\ncpu: 8603.401184944822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46530.25605459033,
            "unit": "ns/iter",
            "extra": "iterations: 17879\ncpu: 46529.07321438564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194827.29778993133,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 194823.44497607622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158170.0705730587,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 158166.50082918734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158253.6491682084,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 158247.1349353052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 161673.69465936464,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 161663.33270428362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353594.5061025323,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 353581.8958502848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2972279.386792542,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2972193.0817610044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2424620.400000112,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424579.480519483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2454303.783289835,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2454205.744125321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2438657.205729259,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2438611.718750002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1438910.0354938407,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1438879.3209876542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2361504.0987341604,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2361388.607594934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10117885.142856916,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10117550.476190472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5672352.109090959,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5672076.363636379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11755476.67032963,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11755297.802197797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46661.0303593568,
            "unit": "ns/iter",
            "extra": "iterations: 17754\ncpu: 46660.08223498945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 199945.87835002702,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 199937.56700069897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 162368.3252738948,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 162365.1681148473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161909.4540662621,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 161903.65210843357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162667.77167300525,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 162664.3536121676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 364169.99832355254,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 364155.44844928815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2949974.348101172,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2949901.265822783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2439156.428198445,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2439034.9869451695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2462610.343007874,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2462585.2242744053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2446893.685039455,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2446836.2204724336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1436253.6856702762,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1436249.4607087758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2368459.762025355,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2368389.113924054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10260836.367924618,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10260554.716981078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5744740.165644117,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5744655.828220822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45666.50445299497,
            "unit": "ns/iter",
            "extra": "iterations: 18190\ncpu: 45665.327102803574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 201552.00985221015,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 201551.25498475178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 160294.4292919826,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 160291.6682234268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 158019.45163073728,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 158018.9976045696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159619.2651614124,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 159614.8161970512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 356300.06362889137,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 356288.7520525444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2951360.085173481,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2951300.630914829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2434569.0520834276,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2434480.7291666693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2454317.5301838354,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2454279.265091855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2434834.1644908655,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2434694.5169712775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1441401.8509316742,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1441379.1925465818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2370984.3842238886,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2370878.1170483553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2648.688422928965,
            "unit": "ns/iter",
            "extra": "iterations: 264782\ncpu: 2648.6800462267065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20010.70190010178,
            "unit": "ns/iter",
            "extra": "iterations: 35156\ncpu: 19985.61554215498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15358.82596483413,
            "unit": "ns/iter",
            "extra": "iterations: 45215\ncpu: 15358.148844410041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14532.869598541165,
            "unit": "ns/iter",
            "extra": "iterations: 48274\ncpu: 14531.609147781355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11827.6109318245,
            "unit": "ns/iter",
            "extra": "iterations: 59185\ncpu: 11827.099771901647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80626.98089758142,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 80623.49827387895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189877.67944534554,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 189871.15280043747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46614.54830982242,
            "unit": "ns/iter",
            "extra": "iterations: 15028\ncpu: 46611.35214266716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46812.94118826068,
            "unit": "ns/iter",
            "extra": "iterations: 14963\ncpu: 46810.920269998656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46722.648442721125,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 46719.5695762597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 99096.88173568308,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 99093.13669880753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88223.86728783984,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 88218.42105263041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22619.261678019364,
            "unit": "ns/iter",
            "extra": "iterations: 30977\ncpu: 22618.51050779596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 112197.76259798535,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 112194.00095984427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 89229.66836409568,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 89229.35709739111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 88847.36770674399,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 88844.39370877655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 89933.19230275498,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 89927.79987171265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 167234.44216061477,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 167228.48948374877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 789961.5067719775,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 789901.4672686321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664509.3276353263,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 664507.0275403514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 665260.20857141,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 665233.9999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 669436.3244019098,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 669390.2392344574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 423499.1625674918,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 423482.0635872796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 652503.7446009294,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 652460.4694835673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22773.349903961545,
            "unit": "ns/iter",
            "extra": "iterations: 30717\ncpu: 22772.415926034344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 110719.92469546142,
            "unit": "ns/iter",
            "extra": "iterations: 6321\ncpu: 110713.06755260348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 88611.50189442061,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 88610.38140944668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 90159.73112054558,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 90159.46224109165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90647.24276402059,
            "unit": "ns/iter",
            "extra": "iterations: 7670\ncpu: 90641.69491525408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 166189.54094469702,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 166183.90695466212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 786308.3251121305,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 786249.4394618851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 668457.2213740689,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 668430.916030537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 667950.1339712779,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 667947.9425837203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 665971.0758157243,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 665931.2859884874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 416619.8701608122,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 416618.2251340056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 650425.0139275559,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 650384.401114203 ns\nthreads: 1"
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
        "date": 1702382267140,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7656.813464082033,
            "unit": "ns/iter",
            "extra": "iterations: 91473\ncpu: 7656.555486318366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95556.25117318337,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 95553.58659217878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184864.24589473484,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 184857.03157894732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 276293.21421740553,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 276288.0459037297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 367353.5692048861,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 367340.3449726545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 448993.4238683309,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 448978.08641975315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 541828.2001231398,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 541806.834975369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 500449.6860000245,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500442.00000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 571145.5290000344,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571126.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5939.694685908308,
            "unit": "ns/iter",
            "extra": "iterations: 117800\ncpu: 5939.7011884550075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4941.672037667377,
            "unit": "ns/iter",
            "extra": "iterations: 141873\ncpu: 4941.616798122273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4814.856865779078,
            "unit": "ns/iter",
            "extra": "iterations: 145395\ncpu: 4814.714398706964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4835.949516693331,
            "unit": "ns/iter",
            "extra": "iterations: 144939\ncpu: 4835.885441461589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8620.72638868383,
            "unit": "ns/iter",
            "extra": "iterations: 81444\ncpu: 8620.609252983655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47179.387358734566,
            "unit": "ns/iter",
            "extra": "iterations: 17609\ncpu: 47178.44284172867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 196675.1583180179,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 196672.65624999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 161131.9934259918,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 161130.8978211868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159145.23433140223,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 159143.23972475363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 161048.3433848545,
            "unit": "ns/iter",
            "extra": "iterations: 5306\ncpu: 161046.3814549568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 358189.19933965476,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 358185.51382583485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2958430.302839146,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2958367.507886436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2405072.8717949637,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2404936.9230769165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2403993.961538384,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2403978.7179487185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2405898.514138849,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2405841.645244209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1439584.1410852647,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1439577.6744186084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2344066.412060195,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2344007.7889447296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10059782.764151266,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10059375.471698117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5836641.062499837,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5836550.624999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11700937.340659384,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11700572.527472524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47854.381379470535,
            "unit": "ns/iter",
            "extra": "iterations: 17282\ncpu: 47851.868996644014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198933.06474820612,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 198930.47110698652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163199.58639740603,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 163196.11354543723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 164859.64573732065,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 164856.35560675905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163749.5733918734,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 163744.85588852857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 356753.1644171791,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 356749.3251533731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2949894.3047620123,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2949853.0158730005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2429485.210937443,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2429428.906250012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2424693.298701334,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2424646.4935064944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2419484.3979329,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2419459.173126613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1440196.1023255289,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1440140.6201550337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2355651.3551637386,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2355589.1687657447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10217547.721154027,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10217305.76923078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5665228.830302953,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5665135.757575795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 48019.670441414244,
            "unit": "ns/iter",
            "extra": "iterations: 17308\ncpu: 48019.4418765887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 205856.614793476,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 205854.10662824239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 162168.72069683723,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 162167.75231963658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159955.20400523464,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 159952.16170690733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 162240.3014399344,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 162238.27207275497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 357608.9512396613,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 357605.4958677682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2943171.5962144868,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2943158.6750788693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2409570.3479381474,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2409498.711340206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2423460.353246686,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2423425.19480519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2396777.5578406868,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2396749.6143958913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1437498.7295208895,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1437461.2055641364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2348740.2594458535,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2348680.856423164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2661.012271779301,
            "unit": "ns/iter",
            "extra": "iterations: 263287\ncpu: 2661.0326373881076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19863.56941883863,
            "unit": "ns/iter",
            "extra": "iterations: 35257\ncpu: 19863.244178461027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15707.100589726995,
            "unit": "ns/iter",
            "extra": "iterations: 44597\ncpu: 15706.475771912868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14651.675979878519,
            "unit": "ns/iter",
            "extra": "iterations: 47710\ncpu: 14650.978830433985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11856.3303604727,
            "unit": "ns/iter",
            "extra": "iterations: 58978\ncpu: 11855.866594323272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81216.46007868613,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 81217.05623698281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 188752.00942887424,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 188751.83189655206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46175.50738688745,
            "unit": "ns/iter",
            "extra": "iterations: 15162\ncpu: 46174.75267115133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46221.79640201644,
            "unit": "ns/iter",
            "extra": "iterations: 15064\ncpu: 46220.47265002744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46081.571485020526,
            "unit": "ns/iter",
            "extra": "iterations: 15185\ncpu: 46080.86927889341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98562.88647581145,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 98559.2300098708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87945.41087992478,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 87943.87064427222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22422.07861071874,
            "unit": "ns/iter",
            "extra": "iterations: 31268\ncpu: 22421.130228987913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 110003.41681068382,
            "unit": "ns/iter",
            "extra": "iterations: 6365\ncpu: 110004.19481539672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88389.29352354839,
            "unit": "ns/iter",
            "extra": "iterations: 7921\ncpu: 88389.93813912406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 87958.53615365078,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 87955.5862415268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 89471.66440721261,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 89470.29031845526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 165586.11187321774,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 165580.7000946075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 787453.128378406,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 787459.0090090191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 659320.0141642735,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 659318.8857412636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 663897.0445497348,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 663870.0473933726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 659947.5084905803,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 659936.5094339679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 420717.0715573954,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 420706.3138905654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 648107.7611524161,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 648096.8401486964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22626.413827622484,
            "unit": "ns/iter",
            "extra": "iterations: 30967\ncpu: 22625.54332030861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 112931.95331421307,
            "unit": "ns/iter",
            "extra": "iterations: 6276\ncpu: 112930.06692160702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 89287.86744067547,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 89287.12681806575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89854.41986397654,
            "unit": "ns/iter",
            "extra": "iterations: 7793\ncpu: 89852.11086872937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90469.52164304977,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 90467.97088262199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 165604.35257780747,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 165598.6932763151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 783608.7651006484,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 783595.7494407289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 662016.6471144737,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 662011.0690633947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 666193.3162878748,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 666181.6287878834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 660667.916981111,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 660657.1698113221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 416836.17829454946,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 416820.5724508052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 647816.2984244827,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 647804.6339203019 ns\nthreads: 1"
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
        "date": 1702387027641,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7739.824741811247,
            "unit": "ns/iter",
            "extra": "iterations: 90244\ncpu: 7739.397633083641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95709.65877094486,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 95708.24581005587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184895.727941172,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 184889.70588235298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 277020.689478742,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 277019.2836584586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 361695.6665266696,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 361678.11843763123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 450749.27682735596,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 450740.48729911883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 537329.0652709301,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 537321.4285714285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 502581.3320000339,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502551.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 578690.881,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578646.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5933.675473836467,
            "unit": "ns/iter",
            "extra": "iterations: 118237\ncpu: 5933.4404627992935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4901.042948866071,
            "unit": "ns/iter",
            "extra": "iterations: 142821\ncpu: 4900.767394150715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4805.502599235819,
            "unit": "ns/iter",
            "extra": "iterations: 145235\ncpu: 4805.4773298447335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4825.0634260285315,
            "unit": "ns/iter",
            "extra": "iterations: 144704\ncpu: 4825.039390756295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8564.352885836925,
            "unit": "ns/iter",
            "extra": "iterations: 81848\ncpu: 8564.302121004801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47802.82869575399,
            "unit": "ns/iter",
            "extra": "iterations: 17466\ncpu: 47802.54208175884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205280.3710255826,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 205268.82620129068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 162029.58845718336,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 162027.32930969456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 161866.83920830017,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 161860.77285579682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 163907.84193424165,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 163906.89984709467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 364092.9008819799,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 364063.9647207053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2929257.9813084053,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2929081.931464167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2410123.005154688,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2409989.948453608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2406615.02864592,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2406500.7812499967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2417373.67761197,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2417298.50746269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1415038.420972662,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1415028.5714285735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2337537.884711867,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2337454.8872180413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9928824.037383258,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9928413.084112128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5767752.785276295,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5767582.822085888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11587500.293478446,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11586821.739130432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47211.951704546416,
            "unit": "ns/iter",
            "extra": "iterations: 17600\ncpu: 47210.630681818235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198919.65151866074,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 198912.52028750302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 162328.76276957712,
            "unit": "ns/iter",
            "extra": "iterations: 5286\ncpu: 162325.7661748019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 162718.85206204976,
            "unit": "ns/iter",
            "extra": "iterations: 5286\ncpu: 162714.88838441207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 165429.34444231293,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 165425.37083413577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 368332.8289473726,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 368330.64516129025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2935337.3836477776,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2935195.9119496895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2420509.624999993,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2420494.2708333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2422511.378238365,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2422324.6113989595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2423899.966321285,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2423883.937823829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1416307.036418886,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1416247.192716234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2345869.3366833427,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2345854.0201005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10106484.728971822,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 10105837.38317759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5777481.13580253,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5777230.864197543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47705.07481082323,
            "unit": "ns/iter",
            "extra": "iterations: 17444\ncpu: 47704.00137583102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 200925.2061032757,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 200911.6431924879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161598.2402413773,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 161590.42051668794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 161570.2795698896,
            "unit": "ns/iter",
            "extra": "iterations: 5301\ncpu: 161556.74401056315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 163112.6071087345,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 163111.61857443195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 368121.6407643382,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 368109.5966029725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2918205.8380063744,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2918157.6323987604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2412932.4129870683,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2412918.961038965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2422563.500000019,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2422402.5906735617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2412319.734375057,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2412275.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1416970.949847971,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1416886.1702127657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2335358.694235543,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2335343.8596491227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2680.916070545976,
            "unit": "ns/iter",
            "extra": "iterations: 260993\ncpu: 2680.6975666013964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19586.627003441576,
            "unit": "ns/iter",
            "extra": "iterations: 35751\ncpu: 19585.66753377531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14464.012223419013,
            "unit": "ns/iter",
            "extra": "iterations: 48268\ncpu: 14463.1660727604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15151.790991420099,
            "unit": "ns/iter",
            "extra": "iterations: 46156\ncpu: 15150.76696420836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11874.863258449966,
            "unit": "ns/iter",
            "extra": "iterations: 58936\ncpu: 11874.462128410629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82844.85514295557,
            "unit": "ns/iter",
            "extra": "iterations: 8429\ncpu: 82842.54359947734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 187964.5227515985,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 187957.8961456127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46023.24193230194,
            "unit": "ns/iter",
            "extra": "iterations: 15215\ncpu: 46021.08445612933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46128.22546174401,
            "unit": "ns/iter",
            "extra": "iterations: 15160\ncpu: 46124.637203165796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46131.63420584472,
            "unit": "ns/iter",
            "extra": "iterations: 15167\ncpu: 46128.99057163564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97112.17382866897,
            "unit": "ns/iter",
            "extra": "iterations: 7214\ncpu: 97106.32104241934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 87111.5555555535,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 87108.69997514303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22319.003891670865,
            "unit": "ns/iter",
            "extra": "iterations: 31349\ncpu: 22318.18877795157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 110169.72896020528,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 110162.0733050173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 87946.00364047375,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 87941.33818729661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 87742.18797650358,
            "unit": "ns/iter",
            "extra": "iterations: 8001\ncpu: 87522.33470816167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 89065.69495001332,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 89058.47218661914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 177301.21295410825,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 177291.56309751567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 786569.4685393192,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 786546.2921348275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 660044.1473087783,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 660040.1322001885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 662790.6960600639,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 662752.5328330155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 660120.0059347156,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 660116.3204747721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 415008.7763938541,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 414974.3179122197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 645600.4193548391,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 645552.9032258078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22573.533733423392,
            "unit": "ns/iter",
            "extra": "iterations: 30993\ncpu: 22573.039073339307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 110355.67999367659,
            "unit": "ns/iter",
            "extra": "iterations: 6328\ncpu: 110353.84007585433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 89512.26904853871,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 89511.75566653887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89335.17488846106,
            "unit": "ns/iter",
            "extra": "iterations: 7845\ncpu: 89329.3690248574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90070.16951768506,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 90060.52733118899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 167420.22553499203,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 167414.16205818675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 782433.6383928733,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 782413.83928571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 661791.7497639542,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 661788.3852691144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 657494.0723004561,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 657437.840375581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 663168.770104079,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 663157.1428571396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 411896.9628697499,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 411871.93203272694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 644552.4815837644,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 644533.1491712678 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}