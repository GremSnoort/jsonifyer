window.BENCHMARK_DATA = {
  "lastUpdate": 1702390805674,
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
        "date": 1702388123926,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7602.538199692924,
            "unit": "ns/iter",
            "extra": "iterations: 91951\ncpu: 7602.281650009244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94516.85366931565,
            "unit": "ns/iter",
            "extra": "iterations: 9048\ncpu: 94515.22988505747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184304.51591290836,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 184298.59715242882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 274805.4484829209,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 274797.88242730725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 356358.6148705154,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 356353.3416875521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 443719.8631043402,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 443707.8880407124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 530181.8696450465,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 530167.8702570384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 617143.6294201114,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 617125.2475247518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 566564.6599999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566556.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5916.440084205779,
            "unit": "ns/iter",
            "extra": "iterations: 117807\ncpu: 5916.334343460063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4858.388750069351,
            "unit": "ns/iter",
            "extra": "iterations: 144072\ncpu: 4858.302793047913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4801.900134378998,
            "unit": "ns/iter",
            "extra": "iterations: 145856\ncpu: 4801.772295963141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4904.896448692249,
            "unit": "ns/iter",
            "extra": "iterations: 143243\ncpu: 4904.832347828524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8484.300238582708,
            "unit": "ns/iter",
            "extra": "iterations: 82571\ncpu: 8484.162720567738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47618.76049793605,
            "unit": "ns/iter",
            "extra": "iterations: 17432\ncpu: 47617.789123451155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 200352.67416783815,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 200348.0543834977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 162144.77992790833,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 162140.1062416996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 163479.14187511065,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 163471.75864044277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 166114.37853545762,
            "unit": "ns/iter",
            "extra": "iterations: 5162\ncpu: 166109.29872142608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 355704.9231085638,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 355699.3421052625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2967747.3396226484,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2967633.9622641504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2407924.5025772834,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2407842.010309275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2398293.8435898554,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2398239.2307692324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2422191.4818652733,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2422136.5284974067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1430158.6881720698,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1430102.764976959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2337931.4974874603,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2337890.4522613077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10001821.650943287,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10001384.905660361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5591992.204819145,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5591819.879518084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11595585.747252718,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11595215.384615397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48320.96315452916,
            "unit": "ns/iter",
            "extra": "iterations: 17207\ncpu: 48319.35840065115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 205342.1792003817,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 205337.00618752962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167164.90767735356,
            "unit": "ns/iter",
            "extra": "iterations: 5145\ncpu: 166917.22060252726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 166526.8468101605,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 166526.39131277852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 167892.26956350473,
            "unit": "ns/iter",
            "extra": "iterations: 5086\ncpu: 167890.66063704158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 359820.2382133894,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 359819.3961952022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2937534.5062893867,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2937499.6855345927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2415632.7901554694,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2415600.5181347155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2406229.0981912734,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2406208.7855297187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2435414.5885417587,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2435389.3229166665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1442848.9724771183,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1442835.7798165085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2349457.4949748553,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2349374.874371851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10180489.149532737,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 10180411.214953257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5805217.124223613,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5805168.322981377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47457.515691991364,
            "unit": "ns/iter",
            "extra": "iterations: 17493\ncpu: 47455.582232893496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 203706.17591049973,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 203702.97548202853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 164802.99480868317,
            "unit": "ns/iter",
            "extra": "iterations: 5201\ncpu: 164801.67275524003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 164848.95174933126,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 164847.23183391045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 167353.58928221505,
            "unit": "ns/iter",
            "extra": "iterations: 5113\ncpu: 167350.02933698444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 360612.0058284582,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 360610.7410491243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2940392.172955941,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2940325.471698135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2405087.8634020933,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2405080.4123711437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2415620.9043927607,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2415597.9328165236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2430696.9376623356,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2430619.4805194833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1426091.9417177495,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1426081.134969326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2353384.0808080942,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2353328.2828282905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2642.439577979853,
            "unit": "ns/iter",
            "extra": "iterations: 265011\ncpu: 2642.4261634422655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20312.942521417925,
            "unit": "ns/iter",
            "extra": "iterations: 34552\ncpu: 20312.56946052315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15699.39727994989,
            "unit": "ns/iter",
            "extra": "iterations: 44558\ncpu: 15699.230216795977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15241.842623308728,
            "unit": "ns/iter",
            "extra": "iterations: 45820\ncpu: 15241.789611523516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11886.599657638848,
            "unit": "ns/iter",
            "extra": "iterations: 59002\ncpu: 11886.47164502905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81238.42247477142,
            "unit": "ns/iter",
            "extra": "iterations: 8623\ncpu: 81236.59979125594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189385.370330269,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 189379.8592311855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45939.78205884249,
            "unit": "ns/iter",
            "extra": "iterations: 15261\ncpu: 45939.204508223425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46116.90849025545,
            "unit": "ns/iter",
            "extra": "iterations: 15135\ncpu: 46116.76247109329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46218.06639333659,
            "unit": "ns/iter",
            "extra": "iterations: 15122\ncpu: 46216.90252611999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 98225.62225332929,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 98225.40237928773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88211.61078900512,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 88210.8268212763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22473.38061973296,
            "unit": "ns/iter",
            "extra": "iterations: 31207\ncpu: 22472.86506232555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 108777.14833800097,
            "unit": "ns/iter",
            "extra": "iterations: 6438\ncpu: 108775.83100341703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 87484.31446384103,
            "unit": "ns/iter",
            "extra": "iterations: 8020\ncpu: 87482.44389027344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 87216.32591395175,
            "unit": "ns/iter",
            "extra": "iterations: 8042\ncpu: 87215.14548619831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 88707.71152869576,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 88707.30066023307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 164768.90702042583,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 164767.2693120457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 783928.3281075172,
            "unit": "ns/iter",
            "extra": "iterations: 893\ncpu: 783917.6931690987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 657027.5324553314,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 657008.5606773288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 653754.9552238865,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 653752.7052238727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 664540.5681601554,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 664543.85128693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 412864.5493790837,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 412860.4376108846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 642069.2458715237,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 642036.3302752274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22372.013989586245,
            "unit": "ns/iter",
            "extra": "iterations: 31309\ncpu: 22371.32134530013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 109157.322711022,
            "unit": "ns/iter",
            "extra": "iterations: 6433\ncpu: 109155.16866158956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 87967.74698188904,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 87966.29778671963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 88520.61872782058,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 88519.45007602587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 89496.91926345947,
            "unit": "ns/iter",
            "extra": "iterations: 7766\ncpu: 89493.18825650343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 164001.1832903059,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 163996.31541891667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 780030.9131402905,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 779991.5367483262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 656773.4090056289,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 656757.5046904291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 655364.5154639485,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 655341.3308341115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 662584.5577841729,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 662561.604584529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 414048.68049793725,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 414040.4860699461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 642286.0064338356,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 642259.650735284 ns\nthreads: 1"
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
        "date": 1702390804490,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7701.325329168096,
            "unit": "ns/iter",
            "extra": "iterations: 90911\ncpu: 7700.662186094092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96174.73534376087,
            "unit": "ns/iter",
            "extra": "iterations: 8887\ncpu: 96169.57353437606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185909.0676707648,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 185901.37887144677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 278232.4742930669,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 278220.9190231364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 361527.0248945246,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 361515.44303797476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449985.62500001164,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 449953.77066115674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 537352.2998149298,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 537329.487970389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 502218.871000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502211.59999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573394.1299999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573383.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5989.257587821824,
            "unit": "ns/iter",
            "extra": "iterations: 116799\ncpu: 5988.866343033761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4903.909277326077,
            "unit": "ns/iter",
            "extra": "iterations: 142886\ncpu: 4903.607071371589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4844.267531063561,
            "unit": "ns/iter",
            "extra": "iterations: 144301\ncpu: 4844.193040935267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4846.649709704108,
            "unit": "ns/iter",
            "extra": "iterations: 144680\ncpu: 4846.453552667953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8575.97768987507,
            "unit": "ns/iter",
            "extra": "iterations: 79381\ncpu: 8575.87457955933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48903.98956490947,
            "unit": "ns/iter",
            "extra": "iterations: 16962\ncpu: 48902.487914161116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 196472.43225806046,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 196465.57603686597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159570.27306547805,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 159563.8764880952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160148.72097378358,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 160143.46441947596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 160542.4428838881,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 160537.26591760342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 356549.0353909309,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 356532.71604938235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2982697.9398734826,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2982407.278481009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2426117.459740217,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2425998.9610389597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2417310.8937824275,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2417212.9533678787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2424246.255208355,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2424172.9166666614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1443829.2790697769,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1443819.2248061998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2363882.5253806086,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2363776.395939094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10064012.113207461,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10063697.16981132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5665712.412120904,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5665431.515151521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11711099.406593323,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11710559.340659352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47282.52739608938,
            "unit": "ns/iter",
            "extra": "iterations: 17539\ncpu: 47279.6168538686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 198039.205848493,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 198032.97259958554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 161992.22148666583,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 161983.9606582186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 165272.04921829904,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 165266.9754873569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163024.18750000815,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 163017.37804878035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 355358.2076480348,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 355346.3815789488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2963178.4076433023,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2963065.605095544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2449171.9499998884,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2449061.578947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2437282.5770235527,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2437190.0783289797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2437773.986911022,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2437675.392670146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1442068.53023261,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1442008.6821705448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2371991.149746188,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2371973.350253799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10259903.6190473,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10259435.238095213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5808084.136645953,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5807801.242236043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47137.41018523806,
            "unit": "ns/iter",
            "extra": "iterations: 17653\ncpu: 47135.63700220948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 200390.3033707862,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 200381.71816479356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161292.77319976958,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 161285.42808542712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159894.19715141764,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 159886.52548725545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 163513.66355318323,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 163504.9370949299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 363342.80524345225,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 363343.7786100706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2947851.227129262,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2947648.895899037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2457661.0656168223,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2457582.93963254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2442113.8537860024,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2442000.783289821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2431813.9558441876,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2431693.2467532475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1438968.1728395328,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1438887.1913580287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2369925.256345185,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2369831.2182741016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2699.965724065743,
            "unit": "ns/iter",
            "extra": "iterations: 259424\ncpu: 2699.9448778832952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20238.212412917033,
            "unit": "ns/iter",
            "extra": "iterations: 34593\ncpu: 20236.839823085713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15815.460785198175,
            "unit": "ns/iter",
            "extra": "iterations: 44320\ncpu: 15814.271209386234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15740.531292838781,
            "unit": "ns/iter",
            "extra": "iterations: 44499\ncpu: 15739.609878873709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11868.406846699463,
            "unit": "ns/iter",
            "extra": "iterations: 58656\ncpu: 11867.595812874893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81843.75962660347,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81840.45507584518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189261.14382265133,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189254.98783455286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46361.0600915305,
            "unit": "ns/iter",
            "extra": "iterations: 15077\ncpu: 46359.19612655038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46291.11453511306,
            "unit": "ns/iter",
            "extra": "iterations: 15122\ncpu: 46287.07181589749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46431.02660739167,
            "unit": "ns/iter",
            "extra": "iterations: 15071\ncpu: 46427.290823436386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 99100.31339272468,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 99093.35313251182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 78744.20745397297,
            "unit": "ns/iter",
            "extra": "iterations: 8908\ncpu: 78739.98652896346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22607.76022976554,
            "unit": "ns/iter",
            "extra": "iterations: 30988\ncpu: 22605.89260358883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 110146.0748224168,
            "unit": "ns/iter",
            "extra": "iterations: 6335\ncpu: 110143.97790055114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88502.31486622631,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88499.54568399959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 88049.25524695904,
            "unit": "ns/iter",
            "extra": "iterations: 7957\ncpu: 88048.46047505326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 89549.43957588346,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 89549.6806336226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 166617.82988342005,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 166614.06138472536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 790063.9572072125,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 790055.9684684768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 674172.6764985707,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 674145.8610846814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 667314.8061127312,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 667309.1690544306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 666076.4376784147,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 666078.6869647921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 420862.7620481977,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 420859.6987951868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 651040.8418604806,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 651034.046511633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22549.034238374115,
            "unit": "ns/iter",
            "extra": "iterations: 30901\ncpu: 22547.710430083156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 110537.30523486204,
            "unit": "ns/iter",
            "extra": "iterations: 6323\ncpu: 110536.54910643505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 89013.59062540434,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 89010.8903324418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89247.34306476093,
            "unit": "ns/iter",
            "extra": "iterations: 7844\ncpu: 89245.07904130506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90409.88091859226,
            "unit": "ns/iter",
            "extra": "iterations: 7751\ncpu: 90407.92155850753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 165163.6473087823,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 165159.1595845135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 783850.2587176184,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 783841.9572553338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 668632.96940726,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 668613.4799235233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 666610.3691722271,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 666594.4814462421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 666391.203809499,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 666375.8095238103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421527.0439759199,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 421519.69879517786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 649522.2671614015,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 649523.9332096451 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}