window.BENCHMARK_DATA = {
  "lastUpdate": 1702381119892,
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
      }
    ]
  }
}