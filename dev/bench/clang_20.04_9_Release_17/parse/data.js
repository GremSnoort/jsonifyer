window.BENCHMARK_DATA = {
  "lastUpdate": 1705962494656,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-9 20.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490941434,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 549.5334333307426,
            "unit": "ns/iter",
            "extra": "iterations: 1271366\ncpu: 549.5026609174699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5190.256180000006,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5189.9439999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10073.5637038558,
            "unit": "ns/iter",
            "extra": "iterations: 82703\ncpu: 10073.148495217827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14987.429112553691,
            "unit": "ns/iter",
            "extra": "iterations: 55440\ncpu: 14986.78751803752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19614.71912672075,
            "unit": "ns/iter",
            "extra": "iterations: 42140\ncpu: 19613.749406739433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24330.880572642614,
            "unit": "ns/iter",
            "extra": "iterations: 34297\ncpu: 24328.96171676821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29047.45338139441,
            "unit": "ns/iter",
            "extra": "iterations: 29130\ncpu: 29046.055612770324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33277.60891883295,
            "unit": "ns/iter",
            "extra": "iterations: 24936\ncpu: 33276.50786012191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37431.50801732703,
            "unit": "ns/iter",
            "extra": "iterations: 22389\ncpu: 37429.96560811115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 530.2700577287294,
            "unit": "ns/iter",
            "extra": "iterations: 1320314\ncpu: 530.2697691609725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 401.8863649306744,
            "unit": "ns/iter",
            "extra": "iterations: 1720842\ncpu: 401.88175323475383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 390.6621033857837,
            "unit": "ns/iter",
            "extra": "iterations: 1745966\ncpu: 390.6580082315459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 401.67455605720335,
            "unit": "ns/iter",
            "extra": "iterations: 1708497\ncpu: 401.6640356992136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 851.6856886666613,
            "unit": "ns/iter",
            "extra": "iterations: 798514\ncpu: 851.6713545410605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1645.8975068542163,
            "unit": "ns/iter",
            "extra": "iterations: 506268\ncpu: 1645.8229633316732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9414.905902247632,
            "unit": "ns/iter",
            "extra": "iterations: 84561\ncpu: 9414.633223353567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7426.054317637078,
            "unit": "ns/iter",
            "extra": "iterations: 109817\ncpu: 7425.664514601541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7035.3290581618,
            "unit": "ns/iter",
            "extra": "iterations: 112822\ncpu: 7035.024197408321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6875.875283604055,
            "unit": "ns/iter",
            "extra": "iterations: 115478\ncpu: 6875.62739223054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26527.5421326639,
            "unit": "ns/iter",
            "extra": "iterations: 31116\ncpu: 26526.507263144318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240947.5177692517,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 240937.8075451066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181142.95659721334,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 181132.747395834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 181588.21484790015,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 181582.36545415837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182093.36600041567,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 182084.91295938139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96832.45615206093,
            "unit": "ns/iter",
            "extra": "iterations: 8997\ncpu: 96828.37612537514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176617.67788956012,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 176607.32909053608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5417.055421337067,
            "unit": "ns/iter",
            "extra": "iterations: 151494\ncpu: 5416.781522700575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26663.818484144726,
            "unit": "ns/iter",
            "extra": "iterations: 31573\ncpu: 26662.531276723752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20024.35449837932,
            "unit": "ns/iter",
            "extra": "iterations: 41326\ncpu: 20024.185742631696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20494.90209361051,
            "unit": "ns/iter",
            "extra": "iterations: 40743\ncpu: 20494.720565495933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20135.08635412498,
            "unit": "ns/iter",
            "extra": "iterations: 41573\ncpu: 20134.7509200683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45951.35095044197,
            "unit": "ns/iter",
            "extra": "iterations: 18202\ncpu: 45950.68124381947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259278.8573969945,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 259271.21257041107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 199656.40999768837,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 199651.9834900249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199829.15038970785,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 199824.89683631467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197609.31717861857,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 197599.6359499432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108600.2958527749,
            "unit": "ns/iter",
            "extra": "iterations: 7933\ncpu: 108597.03769065876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187651.11644709125,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 187645.49511262306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 796145.0016542951,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 796107.7750206807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441203.4425574287,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 441201.69830169977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1679.4433315087904,
            "unit": "ns/iter",
            "extra": "iterations: 478714\ncpu: 1679.4549564040337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9184.040162536015,
            "unit": "ns/iter",
            "extra": "iterations: 89088\ncpu: 9184.043866738511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6734.641919138585,
            "unit": "ns/iter",
            "extra": "iterations: 123743\ncpu: 6734.574885044009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6857.68010910579,
            "unit": "ns/iter",
            "extra": "iterations: 119150\ncpu: 6857.561896768787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6722.444084092744,
            "unit": "ns/iter",
            "extra": "iterations: 121486\ncpu: 6722.32026735589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26793.61758928357,
            "unit": "ns/iter",
            "extra": "iterations: 31053\ncpu: 26792.89601648789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 241919.3036257865,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 241912.31663437656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184156.06530528684,
            "unit": "ns/iter",
            "extra": "iterations: 4946\ncpu: 184152.7092600081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185209.3360101418,
            "unit": "ns/iter",
            "extra": "iterations: 4732\ncpu: 185206.65680473385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183547.21212755938,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 183545.44691565286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94672.12604212888,
            "unit": "ns/iter",
            "extra": "iterations: 9116\ncpu: 94669.71259324257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 171071.01622919802,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 171067.0807453417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 177.86293940099418,
            "unit": "ns/iter",
            "extra": "iterations: 3862474\ncpu: 177.86071828574254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1349.7699773172296,
            "unit": "ns/iter",
            "extra": "iterations: 515810\ncpu: 1349.7541730482171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1070.6299933762677,
            "unit": "ns/iter",
            "extra": "iterations: 671815\ncpu: 1070.6085752774288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1039.0521153625018,
            "unit": "ns/iter",
            "extra": "iterations: 659556\ncpu: 1039.0439932318147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.3665930688247,
            "unit": "ns/iter",
            "extra": "iterations: 843322\ncpu: 818.3247917165662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9110.750019332907,
            "unit": "ns/iter",
            "extra": "iterations: 77590\ncpu: 9110.578682819938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11613.362843119674,
            "unit": "ns/iter",
            "extra": "iterations: 60511\ncpu: 11613.156285634017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2613.935252044153,
            "unit": "ns/iter",
            "extra": "iterations: 263684\ncpu: 2613.8992126939906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2571.592789156689,
            "unit": "ns/iter",
            "extra": "iterations: 269067\ncpu: 2571.534970843708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2620.6931398782294,
            "unit": "ns/iter",
            "extra": "iterations: 264179\ncpu: 2620.635251098688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4914.2486347307295,
            "unit": "ns/iter",
            "extra": "iterations: 141364\ncpu: 4913.972439942271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4918.638134604977,
            "unit": "ns/iter",
            "extra": "iterations: 139831\ncpu: 4918.568128669622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1937.6006234593262,
            "unit": "ns/iter",
            "extra": "iterations: 358644\ncpu: 1937.5542320518543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10133.789311896748,
            "unit": "ns/iter",
            "extra": "iterations: 69292\ncpu: 10133.341511285684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8007.216373865811,
            "unit": "ns/iter",
            "extra": "iterations: 86919\ncpu: 8006.703942751405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7954.733127831241,
            "unit": "ns/iter",
            "extra": "iterations: 91808\ncpu: 7954.172838968262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8006.671784030785,
            "unit": "ns/iter",
            "extra": "iterations: 86568\ncpu: 8006.234405322848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18186.053385144707,
            "unit": "ns/iter",
            "extra": "iterations: 38344\ncpu: 18185.870018777205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51692.01225161059,
            "unit": "ns/iter",
            "extra": "iterations: 13386\ncpu: 51691.90945764249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41395.75666844443,
            "unit": "ns/iter",
            "extra": "iterations: 16833\ncpu: 41395.28901562483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40732.42539159017,
            "unit": "ns/iter",
            "extra": "iterations: 16982\ncpu: 40730.73842892482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40660.32535177839,
            "unit": "ns/iter",
            "extra": "iterations: 16914\ncpu: 40659.873477592795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24858.22640017592,
            "unit": "ns/iter",
            "extra": "iterations: 27818\ncpu: 24857.937306779928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40765.59684210745,
            "unit": "ns/iter",
            "extra": "iterations: 17100\ncpu: 40765.56725146131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2025.3226687695728,
            "unit": "ns/iter",
            "extra": "iterations: 338598\ncpu: 2025.3158612868413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11149.51650109604,
            "unit": "ns/iter",
            "extra": "iterations: 62511\ncpu: 11149.162547391592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9630.888422061045,
            "unit": "ns/iter",
            "extra": "iterations: 73070\ncpu: 9630.587108252477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9640.132114020746,
            "unit": "ns/iter",
            "extra": "iterations: 71461\ncpu: 9639.964456136826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9033.04070761096,
            "unit": "ns/iter",
            "extra": "iterations: 80157\ncpu: 9033.026435620159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19708.576946897752,
            "unit": "ns/iter",
            "extra": "iterations: 35518\ncpu: 19708.73078439093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50564.24989080826,
            "unit": "ns/iter",
            "extra": "iterations: 13738\ncpu: 50563.16057650236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41879.472729438516,
            "unit": "ns/iter",
            "extra": "iterations: 16813\ncpu: 41879.075715220264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40135.25154603661,
            "unit": "ns/iter",
            "extra": "iterations: 17464\ncpu: 40135.1637654601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40667.757481041575,
            "unit": "ns/iter",
            "extra": "iterations: 17277\ncpu: 40667.274411066544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25565.059216740065,
            "unit": "ns/iter",
            "extra": "iterations: 27526\ncpu: 25564.677032623615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42316.49595237876,
            "unit": "ns/iter",
            "extra": "iterations: 16800\ncpu: 42314.964285714785 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702493613284,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 531.4499821079258,
            "unit": "ns/iter",
            "extra": "iterations: 1321817\ncpu: 531.4494366466766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5127.67163000035,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5127.268999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9989.807486375461,
            "unit": "ns/iter",
            "extra": "iterations: 83672\ncpu: 9989.289128979826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14991.559243059935,
            "unit": "ns/iter",
            "extra": "iterations: 56015\ncpu: 14991.089886637506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19727.060325155424,
            "unit": "ns/iter",
            "extra": "iterations: 42503\ncpu: 19725.614662494416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23988.918308242322,
            "unit": "ns/iter",
            "extra": "iterations: 34875\ncpu: 23987.128315412196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28952.154088269108,
            "unit": "ns/iter",
            "extra": "iterations: 28912\ncpu: 28950.992667404535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33512.87148803613,
            "unit": "ns/iter",
            "extra": "iterations: 24986\ncpu: 33511.31433602818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38147.374307558974,
            "unit": "ns/iter",
            "extra": "iterations: 21843\ncpu: 38146.394725999206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 518.5638098005577,
            "unit": "ns/iter",
            "extra": "iterations: 1348774\ncpu: 518.5242301527168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 401.64377728863184,
            "unit": "ns/iter",
            "extra": "iterations: 1736759\ncpu: 401.6312568410474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 398.1765096478857,
            "unit": "ns/iter",
            "extra": "iterations: 1754482\ncpu: 398.16509944245666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 404.8736469891004,
            "unit": "ns/iter",
            "extra": "iterations: 1727074\ncpu: 404.8688707027029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.4460829262265,
            "unit": "ns/iter",
            "extra": "iterations: 837564\ncpu: 847.3685592981551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1690.1701706502945,
            "unit": "ns/iter",
            "extra": "iterations: 473366\ncpu: 1690.0968806378141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9486.41923575735,
            "unit": "ns/iter",
            "extra": "iterations: 85601\ncpu: 9485.917220593217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7190.367150858195,
            "unit": "ns/iter",
            "extra": "iterations: 114280\ncpu: 7190.186384319211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7236.905026330876,
            "unit": "ns/iter",
            "extra": "iterations: 115074\ncpu: 7236.534751551159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6978.141911645827,
            "unit": "ns/iter",
            "extra": "iterations: 116643\ncpu: 6977.8435053968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28044.10062082264,
            "unit": "ns/iter",
            "extra": "iterations: 29477\ncpu: 28042.84357295518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241109.09676535067,
            "unit": "ns/iter",
            "extra": "iterations: 3648\ncpu: 241097.31359649095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183593.30598622336,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 183576.42118863037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 182442.32114603012,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 182431.28073551468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184281.0463378113,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 184274.0550928893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96458.61347046905,
            "unit": "ns/iter",
            "extra": "iterations: 9042\ncpu: 96455.10948905103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 178631.174753293,
            "unit": "ns/iter",
            "extra": "iterations: 4864\ncpu: 178616.8379934216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5473.507770844072,
            "unit": "ns/iter",
            "extra": "iterations: 149662\ncpu: 5473.362643824074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26487.816245005175,
            "unit": "ns/iter",
            "extra": "iterations: 31542\ncpu: 26487.2424069495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20335.267638712114,
            "unit": "ns/iter",
            "extra": "iterations: 40876\ncpu: 20335.03278207256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20228.598831877953,
            "unit": "ns/iter",
            "extra": "iterations: 41434\ncpu: 20227.803253366805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20563.189998294914,
            "unit": "ns/iter",
            "extra": "iterations: 41053\ncpu: 20563.191484178966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45306.53584453936,
            "unit": "ns/iter",
            "extra": "iterations: 18371\ncpu: 45304.13151162167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259550.59038288344,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 259531.13683585648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 199632.4357438881,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 199620.520497467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199826.32651654028,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 199818.72702205888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200190.6326390445,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 200180.7049668114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108127.73068815513,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 108122.44265344107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192214.9615046057,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 192205.76330840265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786203.1530190187,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 786174.9379652599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440030.3728308873,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 440015.0718889422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1589.4999543118201,
            "unit": "ns/iter",
            "extra": "iterations: 503414\ncpu: 1589.4142793009332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9367.616208899888,
            "unit": "ns/iter",
            "extra": "iterations: 88655\ncpu: 9367.382550335573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6649.838271393881,
            "unit": "ns/iter",
            "extra": "iterations: 122619\ncpu: 6649.671747445295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6779.322549312199,
            "unit": "ns/iter",
            "extra": "iterations: 120456\ncpu: 6778.95746164571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6604.022048582985,
            "unit": "ns/iter",
            "extra": "iterations: 123500\ncpu: 6603.510121457497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26912.487648586917,
            "unit": "ns/iter",
            "extra": "iterations: 31211\ncpu: 26910.8839832112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243780.03792250756,
            "unit": "ns/iter",
            "extra": "iterations: 3639\ncpu: 243771.75048090235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184012.75104167778,
            "unit": "ns/iter",
            "extra": "iterations: 4800\ncpu: 184005.3958333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184496.41146922676,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 184489.45165341135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183989.75812499903,
            "unit": "ns/iter",
            "extra": "iterations: 4800\ncpu: 183984.7291666678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94674.6464450929,
            "unit": "ns/iter",
            "extra": "iterations: 9297\ncpu: 94671.06593524748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177309.6756214966,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 177302.6062550119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.7441403515524,
            "unit": "ns/iter",
            "extra": "iterations: 3792591\ncpu: 183.73433887281712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1404.211535494215,
            "unit": "ns/iter",
            "extra": "iterations: 499051\ncpu: 1404.162300045495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1148.2879908106447,
            "unit": "ns/iter",
            "extra": "iterations: 610266\ncpu: 1148.2524014118487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1143.5862402632424,
            "unit": "ns/iter",
            "extra": "iterations: 621102\ncpu: 1143.5685281966526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 829.5442837009311,
            "unit": "ns/iter",
            "extra": "iterations: 847174\ncpu: 829.5436356639801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9249.111179216601,
            "unit": "ns/iter",
            "extra": "iterations: 76678\ncpu: 9248.639766295457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11643.855264694705,
            "unit": "ns/iter",
            "extra": "iterations: 59937\ncpu: 11643.504012546538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2622.9128058972415,
            "unit": "ns/iter",
            "extra": "iterations: 267369\ncpu: 2622.8332379595176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2605.1243358169318,
            "unit": "ns/iter",
            "extra": "iterations: 269504\ncpu: 2605.0399994063096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2618.328827060296,
            "unit": "ns/iter",
            "extra": "iterations: 267405\ncpu: 2618.1933770872024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5014.107413889638,
            "unit": "ns/iter",
            "extra": "iterations: 139414\ncpu: 5013.734632102932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5023.288330160101,
            "unit": "ns/iter",
            "extra": "iterations: 139205\ncpu: 5023.28867497574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1967.051775287997,
            "unit": "ns/iter",
            "extra": "iterations: 358646\ncpu: 1966.995867791627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10148.869992572843,
            "unit": "ns/iter",
            "extra": "iterations: 68673\ncpu: 10148.570762890684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8175.576440866889,
            "unit": "ns/iter",
            "extra": "iterations: 85105\ncpu: 8175.1095705304815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8104.976280116453,
            "unit": "ns/iter",
            "extra": "iterations: 85793\ncpu: 8104.415278635694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8093.540850481507,
            "unit": "ns/iter",
            "extra": "iterations: 86939\ncpu: 8093.470134231889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18804.961155619967,
            "unit": "ns/iter",
            "extra": "iterations: 37071\ncpu: 18804.761134039785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51887.257852721894,
            "unit": "ns/iter",
            "extra": "iterations: 13403\ncpu: 51885.68230993064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41910.31088082958,
            "unit": "ns/iter",
            "extra": "iterations: 16791\ncpu: 41908.75469001254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42057.700639992756,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 42057.64698845562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41552.58172678791,
            "unit": "ns/iter",
            "extra": "iterations: 16910\ncpu: 41550.13010053241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24966.35238877445,
            "unit": "ns/iter",
            "extra": "iterations: 28006\ncpu: 24965.27886881429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41223.59340015341,
            "unit": "ns/iter",
            "extra": "iterations: 17061\ncpu: 41220.35636832536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1866.1717550587575,
            "unit": "ns/iter",
            "extra": "iterations: 372187\ncpu: 1866.10386714209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10132.07412272432,
            "unit": "ns/iter",
            "extra": "iterations: 69277\ncpu: 10131.869162925577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9726.784411347811,
            "unit": "ns/iter",
            "extra": "iterations: 71706\ncpu: 9726.77460742469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9417.770076436722,
            "unit": "ns/iter",
            "extra": "iterations: 75225\ncpu: 9417.28946493845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9332.025316287029,
            "unit": "ns/iter",
            "extra": "iterations: 75011\ncpu: 9331.750009998621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18558.814384597026,
            "unit": "ns/iter",
            "extra": "iterations: 37707\ncpu: 18558.25443551617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50951.83522134102,
            "unit": "ns/iter",
            "extra": "iterations: 13418\ncpu: 50949.72425100672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42658.94548895546,
            "unit": "ns/iter",
            "extra": "iterations: 16382\ncpu: 42655.585398608295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41906.079990396465,
            "unit": "ns/iter",
            "extra": "iterations: 16652\ncpu: 41904.816238289895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41191.21127925811,
            "unit": "ns/iter",
            "extra": "iterations: 16916\ncpu: 41189.8321116101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24297.009488667747,
            "unit": "ns/iter",
            "extra": "iterations: 28455\ncpu: 24296.278334212155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41619.058764589936,
            "unit": "ns/iter",
            "extra": "iterations: 16966\ncpu: 41616.28551220139 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702504017994,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 523.6772696943164,
            "unit": "ns/iter",
            "extra": "iterations: 1341315\ncpu: 523.6439613364498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5128.8797799998065,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5128.532999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10106.944385970708,
            "unit": "ns/iter",
            "extra": "iterations: 82659\ncpu: 10106.546171620756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14687.994484387898,
            "unit": "ns/iter",
            "extra": "iterations: 56748\ncpu: 14687.81102417706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19703.15947755875,
            "unit": "ns/iter",
            "extra": "iterations: 42263\ncpu: 19702.60274944988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24298.4272354657,
            "unit": "ns/iter",
            "extra": "iterations: 34646\ncpu: 24297.601454713375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29015.35117080024,
            "unit": "ns/iter",
            "extra": "iterations: 28741\ncpu: 29013.663407675445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33757.48183030665,
            "unit": "ns/iter",
            "extra": "iterations: 24739\ncpu: 33755.77024131938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37815.55366368497,
            "unit": "ns/iter",
            "extra": "iterations: 22259\ncpu: 37813.6888449616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 526.3021897974662,
            "unit": "ns/iter",
            "extra": "iterations: 1334370\ncpu: 526.2737471615826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.7352010996925,
            "unit": "ns/iter",
            "extra": "iterations: 1720415\ncpu: 407.71127896466766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 406.55899032955085,
            "unit": "ns/iter",
            "extra": "iterations: 1724325\ncpu: 406.5314253403502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 413.29786559824095,
            "unit": "ns/iter",
            "extra": "iterations: 1694620\ncpu: 413.27902420601674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 843.308646554173,
            "unit": "ns/iter",
            "extra": "iterations: 819656\ncpu: 843.243629034619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1705.3930001624558,
            "unit": "ns/iter",
            "extra": "iterations: 467468\ncpu: 1705.3317018491111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9746.23550616086,
            "unit": "ns/iter",
            "extra": "iterations: 83501\ncpu: 9745.939569585993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7381.354522184435,
            "unit": "ns/iter",
            "extra": "iterations: 107824\ncpu: 7381.059875352416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7194.600287256501,
            "unit": "ns/iter",
            "extra": "iterations: 112791\ncpu: 7194.270819480274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6857.827620950518,
            "unit": "ns/iter",
            "extra": "iterations: 118106\ncpu: 6857.5262899429335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28113.40746177129,
            "unit": "ns/iter",
            "extra": "iterations: 29296\ncpu: 28112.134762424932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241044.00303112838,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 241025.18600165308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184339.29147788358,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 184328.99676375408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185686.06579229393,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 185672.73704579717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184295.54991393932,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 184287.4784853704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96594.61841087464,
            "unit": "ns/iter",
            "extra": "iterations: 9049\ncpu: 96588.96010608901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179491.68932039107,
            "unit": "ns/iter",
            "extra": "iterations: 4841\ncpu: 179481.42945672382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5439.201865555134,
            "unit": "ns/iter",
            "extra": "iterations: 150947\ncpu: 5438.9500950664815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26372.462980049357,
            "unit": "ns/iter",
            "extra": "iterations: 31429\ncpu: 26371.007668077214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20504.994779611745,
            "unit": "ns/iter",
            "extra": "iterations: 40610\ncpu: 20504.16153656728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20713.26187128505,
            "unit": "ns/iter",
            "extra": "iterations: 40539\ncpu: 20711.961321196875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20163.587023341344,
            "unit": "ns/iter",
            "extra": "iterations: 41644\ncpu: 20162.385937950305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45315.72015771504,
            "unit": "ns/iter",
            "extra": "iterations: 18514\ncpu: 45313.85438046895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259811.06367152007,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 259801.72567688202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201118.2095082862,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 201103.93847588028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200663.799029799,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 200655.4862554878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200208.96170604945,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 200197.75280898923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108528.60947408216,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 108523.18786522375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190686.2584717496,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 190672.84606866038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 791134.0980066533,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 791103.6544850537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 443809.0414378307,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 443785.82126810093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1618.9136540095112,
            "unit": "ns/iter",
            "extra": "iterations: 497927\ncpu: 1618.8146053537873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9150.33461882086,
            "unit": "ns/iter",
            "extra": "iterations: 88423\ncpu: 9150.146455107819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6364.033419023086,
            "unit": "ns/iter",
            "extra": "iterations: 128370\ncpu: 6363.9557529017675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6756.867876979462,
            "unit": "ns/iter",
            "extra": "iterations: 120630\ncpu: 6756.681588327939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6783.9867275708075,
            "unit": "ns/iter",
            "extra": "iterations: 120626\ncpu: 6783.845937028536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26992.1848707193,
            "unit": "ns/iter",
            "extra": "iterations: 31211\ncpu: 26990.74685207143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247155.9461645835,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 247151.43654114314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184586.55249894963,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 184581.79336413322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184803.6210945653,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 184799.99999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184561.43563940216,
            "unit": "ns/iter",
            "extra": "iterations: 4770\ncpu: 184554.0670859545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95169.69575546925,
            "unit": "ns/iter",
            "extra": "iterations: 9259\ncpu: 95165.73064045752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178683.1166063474,
            "unit": "ns/iter",
            "extra": "iterations: 4974\ncpu: 178676.91998391657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.95326072412985,
            "unit": "ns/iter",
            "extra": "iterations: 3811270\ncpu: 183.94926100748594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1399.6447553229793,
            "unit": "ns/iter",
            "extra": "iterations: 499802\ncpu: 1399.5994413787894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1079.665938844508,
            "unit": "ns/iter",
            "extra": "iterations: 649426\ncpu: 1079.6537249817566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1065.0110147198159,
            "unit": "ns/iter",
            "extra": "iterations: 656122\ncpu: 1064.9876090117384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 833.7821628785605,
            "unit": "ns/iter",
            "extra": "iterations: 839104\ncpu: 833.7515969414961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9285.907742411795,
            "unit": "ns/iter",
            "extra": "iterations: 75842\ncpu: 9285.645157036992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11537.43266774933,
            "unit": "ns/iter",
            "extra": "iterations: 60298\ncpu: 11537.100733026002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2609.996173364509,
            "unit": "ns/iter",
            "extra": "iterations: 267598\ncpu: 2609.967936980082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2609.0283539976585,
            "unit": "ns/iter",
            "extra": "iterations: 267934\ncpu: 2608.952577873637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2615.443444209399,
            "unit": "ns/iter",
            "extra": "iterations: 266604\ncpu: 2615.386865913482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5003.343819982356,
            "unit": "ns/iter",
            "extra": "iterations: 139320\ncpu: 5003.14025265576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5070.01861103413,
            "unit": "ns/iter",
            "extra": "iterations: 137714\ncpu: 5069.914460403446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1931.383449990234,
            "unit": "ns/iter",
            "extra": "iterations: 360459\ncpu: 1931.3419834155827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10193.995139254188,
            "unit": "ns/iter",
            "extra": "iterations: 68508\ncpu: 10193.774449699315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8100.725552087394,
            "unit": "ns/iter",
            "extra": "iterations: 86490\ncpu: 8100.548040235879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8074.285482103986,
            "unit": "ns/iter",
            "extra": "iterations: 86755\ncpu: 8073.834361131768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8013.32836774984,
            "unit": "ns/iter",
            "extra": "iterations: 87603\ncpu: 8013.170781822478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18743.733390208126,
            "unit": "ns/iter",
            "extra": "iterations: 37508\ncpu: 18743.188119867664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52496.160420922286,
            "unit": "ns/iter",
            "extra": "iterations: 13209\ncpu: 52494.98069498057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41747.34368084467,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 41745.75034392018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41672.616915124105,
            "unit": "ns/iter",
            "extra": "iterations: 16636\ncpu: 41671.72998316875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41486.544887407435,
            "unit": "ns/iter",
            "extra": "iterations: 16831\ncpu: 41485.24151862619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25032.919095120917,
            "unit": "ns/iter",
            "extra": "iterations: 28070\ncpu: 25032.37620235108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41124.720411866656,
            "unit": "ns/iter",
            "extra": "iterations: 17093\ncpu: 41122.816357572934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2173.972390891475,
            "unit": "ns/iter",
            "extra": "iterations: 324929\ncpu: 2173.946000510865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9868.284797478176,
            "unit": "ns/iter",
            "extra": "iterations: 71054\ncpu: 9867.968024319523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9228.341471457063,
            "unit": "ns/iter",
            "extra": "iterations: 75816\ncpu: 9228.06795399392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9250.571877102462,
            "unit": "ns/iter",
            "extra": "iterations: 75803\ncpu: 9249.9267839004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9656.929862228551,
            "unit": "ns/iter",
            "extra": "iterations: 72657\ncpu: 9656.090947878316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18974.246276522725,
            "unit": "ns/iter",
            "extra": "iterations: 36995\ncpu: 18974.012704419707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51470.906702098364,
            "unit": "ns/iter",
            "extra": "iterations: 13548\ncpu: 51469.41984056658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40964.14459388317,
            "unit": "ns/iter",
            "extra": "iterations: 17027\ncpu: 40963.2877195043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41128.949202253665,
            "unit": "ns/iter",
            "extra": "iterations: 17048\ncpu: 41124.800563116034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41643.36639761025,
            "unit": "ns/iter",
            "extra": "iterations: 16725\ncpu: 41641.351270553256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24492.303437914252,
            "unit": "ns/iter",
            "extra": "iterations: 28622\ncpu: 24491.132695129803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41640.10551756595,
            "unit": "ns/iter",
            "extra": "iterations: 16964\ncpu: 41637.60315963179 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1705576268009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 523.3236184906054,
            "unit": "ns/iter",
            "extra": "iterations: 1323679\ncpu: 523.306481405235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5732.686555087686,
            "unit": "ns/iter",
            "extra": "iterations: 140886\ncpu: 5732.344590661955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9620.149518099664,
            "unit": "ns/iter",
            "extra": "iterations: 85080\ncpu: 9619.560413728253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14385.72718655755,
            "unit": "ns/iter",
            "extra": "iterations: 58025\ncpu: 14385.077121930204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19226.265562273158,
            "unit": "ns/iter",
            "extra": "iterations: 43342\ncpu: 19224.509713441934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23807.91984558011,
            "unit": "ns/iter",
            "extra": "iterations: 34970\ncpu: 23806.73434372318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28327.783952924307,
            "unit": "ns/iter",
            "extra": "iterations: 29401\ncpu: 28325.135199483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33256.06518465802,
            "unit": "ns/iter",
            "extra": "iterations: 25236\ncpu: 33254.0735457283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37195.19586991677,
            "unit": "ns/iter",
            "extra": "iterations: 22663\ncpu: 37192.36641221376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 511.39354508165263,
            "unit": "ns/iter",
            "extra": "iterations: 1376005\ncpu: 511.36362149846815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 400.88960062133344,
            "unit": "ns/iter",
            "extra": "iterations: 1750970\ncpu: 400.86192224881034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 394.502288356987,
            "unit": "ns/iter",
            "extra": "iterations: 1790149\ncpu: 394.496882661722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.66491848325643,
            "unit": "ns/iter",
            "extra": "iterations: 1748291\ncpu: 403.65522673284926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 832.6851707466781,
            "unit": "ns/iter",
            "extra": "iterations: 841364\ncpu: 832.6670739418364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1702.4703024721239,
            "unit": "ns/iter",
            "extra": "iterations: 475713\ncpu: 1702.4281447006936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9340.00146220812,
            "unit": "ns/iter",
            "extra": "iterations: 86171\ncpu: 9339.855635886795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7500.757859675724,
            "unit": "ns/iter",
            "extra": "iterations: 107479\ncpu: 7500.557318173802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7021.783904971395,
            "unit": "ns/iter",
            "extra": "iterations: 114408\ncpu: 7021.632228515478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6699.626815009057,
            "unit": "ns/iter",
            "extra": "iterations: 119903\ncpu: 6699.536291835899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27497.184049287698,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 27496.732179328355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244374.12269936712,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 244371.36084774102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187185.96207413403,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 187182.3226912362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186796.64776375564,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 186792.8739567728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189811.154277094,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 189807.06744236185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96094.86746721968,
            "unit": "ns/iter",
            "extra": "iterations: 9077\ncpu: 96093.1475156991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179868.33484254664,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 179862.56431364437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5499.333602650574,
            "unit": "ns/iter",
            "extra": "iterations: 148524\ncpu: 5499.128760335012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27249.398048429284,
            "unit": "ns/iter",
            "extra": "iterations: 30642\ncpu: 27249.034005613186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20533.79262526141,
            "unit": "ns/iter",
            "extra": "iterations: 40815\ncpu: 20533.240230307438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20020.65024201475,
            "unit": "ns/iter",
            "extra": "iterations: 41320\ncpu: 20019.934656340698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20218.607985263694,
            "unit": "ns/iter",
            "extra": "iterations: 41802\ncpu: 20217.56853739056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44645.19634630853,
            "unit": "ns/iter",
            "extra": "iterations: 18885\ncpu: 44643.27243844305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259170.09928656678,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 259150.92152199813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200940.38495168326,
            "unit": "ns/iter",
            "extra": "iterations: 4346\ncpu: 200926.59917165208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200484.62508597373,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 200475.73950928706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200505.29219434576,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 200490.44439327694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109487.86509931038,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 109481.09127482946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190977.67890108805,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 190964.46153846194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787838.1102818935,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 787810.1160862368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 429909.02531644277,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 429877.7020447909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1629.3024943780256,
            "unit": "ns/iter",
            "extra": "iterations: 492267\ncpu: 1629.2140240966735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8955.644571776476,
            "unit": "ns/iter",
            "extra": "iterations: 92148\ncpu: 8955.063593349818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7497.149856219311,
            "unit": "ns/iter",
            "extra": "iterations: 110933\ncpu: 7496.881901688413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7277.428315180571,
            "unit": "ns/iter",
            "extra": "iterations: 115959\ncpu: 7262.898955665382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6948.3095034605,
            "unit": "ns/iter",
            "extra": "iterations: 119346\ncpu: 6947.9814991704625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27352.395597172897,
            "unit": "ns/iter",
            "extra": "iterations: 30435\ncpu: 27350.681780844556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245713.5099189863,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 245696.92651578688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184091.61447038874,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 184079.29524603733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 182920.02069108642,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 182909.1661493897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183335.19549812374,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 183324.30179241358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94031.53365800923,
            "unit": "ns/iter",
            "extra": "iterations: 9240\ncpu: 94027.25108225066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176211.6380035929,
            "unit": "ns/iter",
            "extra": "iterations: 4989\ncpu: 176200.72158749285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 188.38191429081098,
            "unit": "ns/iter",
            "extra": "iterations: 3716614\ncpu: 188.370516819879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1417.894984955625,
            "unit": "ns/iter",
            "extra": "iterations: 495529\ncpu: 1417.821762197573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1151.8749983624925,
            "unit": "ns/iter",
            "extra": "iterations: 610680\ncpu: 1151.8050370079193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1136.8372948708784,
            "unit": "ns/iter",
            "extra": "iterations: 615039\ncpu: 1136.813925620975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 832.156090210302,
            "unit": "ns/iter",
            "extra": "iterations: 842122\ncpu: 832.103780687357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9289.105621963336,
            "unit": "ns/iter",
            "extra": "iterations: 75543\ncpu: 9288.442344095432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11599.975130782093,
            "unit": "ns/iter",
            "extra": "iterations: 60597\ncpu: 11599.029654933374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2642.848056363914,
            "unit": "ns/iter",
            "extra": "iterations: 264710\ncpu: 2642.681802727511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2609.015072896481,
            "unit": "ns/iter",
            "extra": "iterations: 269424\ncpu: 2608.8080497654164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2599.6026455933516,
            "unit": "ns/iter",
            "extra": "iterations: 267766\ncpu: 2599.445411291965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5003.880182981465,
            "unit": "ns/iter",
            "extra": "iterations: 139905\ncpu: 5003.603159286671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5037.252353127448,
            "unit": "ns/iter",
            "extra": "iterations: 138964\ncpu: 5037.04124809302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1952.8940645038283,
            "unit": "ns/iter",
            "extra": "iterations: 357746\ncpu: 1952.8911574133604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10202.622856811578,
            "unit": "ns/iter",
            "extra": "iterations: 68706\ncpu: 10201.692719704288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8102.196258440681,
            "unit": "ns/iter",
            "extra": "iterations: 86488\ncpu: 8101.706595134613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8053.826718529467,
            "unit": "ns/iter",
            "extra": "iterations: 87153\ncpu: 8053.416405631589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8001.810968800334,
            "unit": "ns/iter",
            "extra": "iterations: 87758\ncpu: 8001.391326146971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18660.865250128118,
            "unit": "ns/iter",
            "extra": "iterations: 37321\ncpu: 18660.83974170026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51484.3638859996,
            "unit": "ns/iter",
            "extra": "iterations: 13474\ncpu: 51480.22858839238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41559.53387549763,
            "unit": "ns/iter",
            "extra": "iterations: 16723\ncpu: 41559.03247025072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41519.182231532766,
            "unit": "ns/iter",
            "extra": "iterations: 16715\ncpu: 41517.46335626675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42036.056310096756,
            "unit": "ns/iter",
            "extra": "iterations: 16640\ncpu: 42034.61538461526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25275.417659199473,
            "unit": "ns/iter",
            "extra": "iterations: 27623\ncpu: 25275.100459761892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41221.57919273569,
            "unit": "ns/iter",
            "extra": "iterations: 16946\ncpu: 41221.52720406045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2038.6045364603601,
            "unit": "ns/iter",
            "extra": "iterations: 343660\ncpu: 2038.58319269046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10676.249870659496,
            "unit": "ns/iter",
            "extra": "iterations: 65718\ncpu: 10676.116132566556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8838.71297375128,
            "unit": "ns/iter",
            "extra": "iterations: 79815\ncpu: 8838.59174340676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8792.993387647308,
            "unit": "ns/iter",
            "extra": "iterations: 80153\ncpu: 8792.756353473855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9749.16616747629,
            "unit": "ns/iter",
            "extra": "iterations: 71783\ncpu: 9747.873451931415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18233.231503208408,
            "unit": "ns/iter",
            "extra": "iterations: 38358\ncpu: 18232.191459408732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50910.97543033527,
            "unit": "ns/iter",
            "extra": "iterations: 13594\ncpu: 50907.782845372676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40915.06052325945,
            "unit": "ns/iter",
            "extra": "iterations: 17200\ncpu: 40913.30232558146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42275.51771985155,
            "unit": "ns/iter",
            "extra": "iterations: 16648\ncpu: 42271.81042767827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40527.84580708665,
            "unit": "ns/iter",
            "extra": "iterations: 17303\ncpu: 40525.423336993896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25112.677500448153,
            "unit": "ns/iter",
            "extra": "iterations: 27845\ncpu: 25109.85096067517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41928.7573355444,
            "unit": "ns/iter",
            "extra": "iterations: 16904\ncpu: 41926.283719829655 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774044201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 529.8962672630234,
            "unit": "ns/iter",
            "extra": "iterations: 1323131\ncpu: 529.8754998560235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5112.031239999624,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5111.841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9858.175282638904,
            "unit": "ns/iter",
            "extra": "iterations: 85268\ncpu: 9858.00652061735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14934.62694650131,
            "unit": "ns/iter",
            "extra": "iterations: 56319\ncpu: 14934.07730961132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19417.014846756465,
            "unit": "ns/iter",
            "extra": "iterations: 42905\ncpu: 19416.776599463934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24036.24627566219,
            "unit": "ns/iter",
            "extra": "iterations: 34100\ncpu: 24035.04105571846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28552.298382947334,
            "unit": "ns/iter",
            "extra": "iterations: 29127\ncpu: 28551.807601194763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32901.359326138634,
            "unit": "ns/iter",
            "extra": "iterations: 25584\ncpu: 32900.48076923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37864.21297837087,
            "unit": "ns/iter",
            "extra": "iterations: 22237\ncpu: 37862.62085713006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 516.3449404693872,
            "unit": "ns/iter",
            "extra": "iterations: 1359049\ncpu: 516.3194998855823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.4124820321193,
            "unit": "ns/iter",
            "extra": "iterations: 1755211\ncpu: 398.3934695030974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.25808685765924,
            "unit": "ns/iter",
            "extra": "iterations: 1783171\ncpu: 396.2485930962322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 401.47918674613805,
            "unit": "ns/iter",
            "extra": "iterations: 1743072\ncpu: 401.457598997632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 836.6500298465443,
            "unit": "ns/iter",
            "extra": "iterations: 832591\ncpu: 836.6381572704975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1668.593472530774,
            "unit": "ns/iter",
            "extra": "iterations: 477643\ncpu: 1668.5170723741358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9375.935619626236,
            "unit": "ns/iter",
            "extra": "iterations: 87682\ncpu: 9375.446499851727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7162.281400217201,
            "unit": "ns/iter",
            "extra": "iterations: 112754\ncpu: 7162.065203895195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7018.430359043857,
            "unit": "ns/iter",
            "extra": "iterations: 115557\ncpu: 7018.10794672759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6860.105283585405,
            "unit": "ns/iter",
            "extra": "iterations: 118518\ncpu: 6859.867699421192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27731.69567253079,
            "unit": "ns/iter",
            "extra": "iterations: 29902\ncpu: 27730.262189820096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238708.81083308815,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 238221.41875171824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182616.66188743696,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 182609.73678579097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186295.4343197889,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 186290.46199701919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187344.70117646985,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 187336.19251336943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95901.4427489338,
            "unit": "ns/iter",
            "extra": "iterations: 9109\ncpu: 95896.1466681305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179188.68774379257,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 179182.26236912335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5487.932190295084,
            "unit": "ns/iter",
            "extra": "iterations: 147560\ncpu: 5487.781241528872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27127.276819082108,
            "unit": "ns/iter",
            "extra": "iterations: 30771\ncpu: 27126.73296285468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20460.154206874995,
            "unit": "ns/iter",
            "extra": "iterations: 40517\ncpu: 20459.500950218488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20106.387025477678,
            "unit": "ns/iter",
            "extra": "iterations: 41173\ncpu: 20106.101085662907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20178.76917179814,
            "unit": "ns/iter",
            "extra": "iterations: 41741\ncpu: 20178.3953427086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45320.465190045936,
            "unit": "ns/iter",
            "extra": "iterations: 18285\ncpu: 45318.66010391021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259653.01423064305,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 259639.84583456756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201778.51374885766,
            "unit": "ns/iter",
            "extra": "iterations: 4364\ncpu: 201771.47112740634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199402.03592676873,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 199393.8901601832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199280.186514261,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 199269.30285714337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109154.95156446236,
            "unit": "ns/iter",
            "extra": "iterations: 7990\ncpu: 109150.0375469336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191337.66285714236,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 191330.87912087952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 779135.321895436,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 779100.1633986917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 431506.83894582285,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 431473.45046363934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1598.9505031261376,
            "unit": "ns/iter",
            "extra": "iterations: 503850\ncpu: 1598.8808177036867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9372.49712263567,
            "unit": "ns/iter",
            "extra": "iterations: 88449\ncpu: 9372.107089961495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7178.779837682051,
            "unit": "ns/iter",
            "extra": "iterations: 112249\ncpu: 7178.498694865856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6946.984258400125,
            "unit": "ns/iter",
            "extra": "iterations: 117523\ncpu: 6946.592581877624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6333.363294256637,
            "unit": "ns/iter",
            "extra": "iterations: 129146\ncpu: 6333.057934430816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27359.648577036583,
            "unit": "ns/iter",
            "extra": "iterations: 30570\ncpu: 27358.913967942466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244324.26604241988,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 244312.9165519138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 183102.5498131878,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 183092.90161892987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184030.89585921046,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 184024.4927536224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182922.21967485454,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 182916.11087953305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94750.27143626145,
            "unit": "ns/iter",
            "extra": "iterations: 9295\ncpu: 94746.60570199016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177141.2677070804,
            "unit": "ns/iter",
            "extra": "iterations: 4998\ncpu: 177134.83393357322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 184.08161467799678,
            "unit": "ns/iter",
            "extra": "iterations: 3828429\ncpu: 184.0733888495776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1356.169554256988,
            "unit": "ns/iter",
            "extra": "iterations: 517675\ncpu: 1356.1143574636642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1058.3194775494524,
            "unit": "ns/iter",
            "extra": "iterations: 672523\ncpu: 1058.269977383673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1085.413225742602,
            "unit": "ns/iter",
            "extra": "iterations: 651109\ncpu: 1085.3996796235335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 844.815731592816,
            "unit": "ns/iter",
            "extra": "iterations: 807013\ncpu: 844.7913478469424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9270.798046342485,
            "unit": "ns/iter",
            "extra": "iterations: 74834\ncpu: 9270.312959350016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11615.364749264274,
            "unit": "ns/iter",
            "extra": "iterations: 60203\ncpu: 11614.77667225882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2614.852182528627,
            "unit": "ns/iter",
            "extra": "iterations: 268473\ncpu: 2614.6964499223195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2608.412566681984,
            "unit": "ns/iter",
            "extra": "iterations: 269188\ncpu: 2608.284173142937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2591.91660058296,
            "unit": "ns/iter",
            "extra": "iterations: 268599\ncpu: 2591.764675222167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4984.69550165652,
            "unit": "ns/iter",
            "extra": "iterations: 140674\ncpu: 4984.5074427399795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5028.583279965062,
            "unit": "ns/iter",
            "extra": "iterations: 176447\ncpu: 5028.490708257968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1953.484041718123,
            "unit": "ns/iter",
            "extra": "iterations: 356680\ncpu: 1953.4266008747386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10040.178784846368,
            "unit": "ns/iter",
            "extra": "iterations: 69950\ncpu: 10039.76983559669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8093.401769151548,
            "unit": "ns/iter",
            "extra": "iterations: 86256\ncpu: 8093.033528102363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7986.329948948106,
            "unit": "ns/iter",
            "extra": "iterations: 87362\ncpu: 7985.861129552828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7912.335806334724,
            "unit": "ns/iter",
            "extra": "iterations: 88152\ncpu: 7912.243624648415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18724.977379779106,
            "unit": "ns/iter",
            "extra": "iterations: 37577\ncpu: 18724.38193575862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52123.09048152722,
            "unit": "ns/iter",
            "extra": "iterations: 13395\ncpu: 52120.619634191935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41760.34887469214,
            "unit": "ns/iter",
            "extra": "iterations: 16751\ncpu: 41759.47107635377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41609.92285680164,
            "unit": "ns/iter",
            "extra": "iterations: 16774\ncpu: 41609.32991534513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41455.51597661002,
            "unit": "ns/iter",
            "extra": "iterations: 16931\ncpu: 41453.889315456254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24910.437919880424,
            "unit": "ns/iter",
            "extra": "iterations: 28133\ncpu: 24909.35556108481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41168.74094805097,
            "unit": "ns/iter",
            "extra": "iterations: 17151\ncpu: 41166.46842749746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1901.522480344175,
            "unit": "ns/iter",
            "extra": "iterations: 365030\ncpu: 1901.4322110511778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11656.534582594975,
            "unit": "ns/iter",
            "extra": "iterations: 59235\ncpu: 11655.769393095186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8795.857791435186,
            "unit": "ns/iter",
            "extra": "iterations: 79074\ncpu: 8795.715405822553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9004.490578631741,
            "unit": "ns/iter",
            "extra": "iterations: 77908\ncpu: 9004.098423781907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8452.823550499248,
            "unit": "ns/iter",
            "extra": "iterations: 83684\ncpu: 8452.3756034606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18638.13889853192,
            "unit": "ns/iter",
            "extra": "iterations: 37459\ncpu: 18637.57708427872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52781.67156563486,
            "unit": "ns/iter",
            "extra": "iterations: 13132\ncpu: 52778.89125799556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40667.88522667309,
            "unit": "ns/iter",
            "extra": "iterations: 17051\ncpu: 40666.38906809062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41435.55756568712,
            "unit": "ns/iter",
            "extra": "iterations: 16859\ncpu: 41433.32937896701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40744.17834138248,
            "unit": "ns/iter",
            "extra": "iterations: 17388\ncpu: 40741.91396365276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24554.44864826793,
            "unit": "ns/iter",
            "extra": "iterations: 28519\ncpu: 24553.255724253693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41846.68235224879,
            "unit": "ns/iter",
            "extra": "iterations: 17022\ncpu: 41844.77734696273 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705775532080,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 526.3025622350225,
            "unit": "ns/iter",
            "extra": "iterations: 1320839\ncpu: 526.3027515087001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5086.523520000128,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5086.4969999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10028.608959946794,
            "unit": "ns/iter",
            "extra": "iterations: 84063\ncpu: 10028.586893163463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14831.150022886419,
            "unit": "ns/iter",
            "extra": "iterations: 56798\ncpu: 14831.30391915208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19712.245051419355,
            "unit": "ns/iter",
            "extra": "iterations: 42689\ncpu: 19712.295907610867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23470.691719676346,
            "unit": "ns/iter",
            "extra": "iterations: 35844\ncpu: 23470.003347840626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27951.044122589694,
            "unit": "ns/iter",
            "extra": "iterations: 29758\ncpu: 27950.961086094492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32963.485141128534,
            "unit": "ns/iter",
            "extra": "iterations: 25473\ncpu: 32963.671338279775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37673.44057252457,
            "unit": "ns/iter",
            "extra": "iterations: 21379\ncpu: 37673.324290191325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 511.65745409090385,
            "unit": "ns/iter",
            "extra": "iterations: 1366176\ncpu: 511.65245180708774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 399.6669888601256,
            "unit": "ns/iter",
            "extra": "iterations: 1738086\ncpu: 399.6682557710032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.3337238354604,
            "unit": "ns/iter",
            "extra": "iterations: 1761834\ncpu: 396.3376231812991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.589783336915,
            "unit": "ns/iter",
            "extra": "iterations: 1710167\ncpu: 405.5909744486944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 840.4863076839448,
            "unit": "ns/iter",
            "extra": "iterations: 823345\ncpu: 840.4784142734829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1679.4165391045447,
            "unit": "ns/iter",
            "extra": "iterations: 482771\ncpu: 1679.4018281959766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9670.893882870192,
            "unit": "ns/iter",
            "extra": "iterations: 83634\ncpu: 9671.00102828993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7759.352693420946,
            "unit": "ns/iter",
            "extra": "iterations: 110640\ncpu: 7759.3383947939255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7340.034975178228,
            "unit": "ns/iter",
            "extra": "iterations: 110993\ncpu: 7339.843053165509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6894.247967995385,
            "unit": "ns/iter",
            "extra": "iterations: 118233\ncpu: 6894.274018252104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28215.18553892773,
            "unit": "ns/iter",
            "extra": "iterations: 29002\ncpu: 28215.136887111243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247283.17348066266,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 247284.1436464083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188241.7089262538,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 188238.42173350594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186792.23861645412,
            "unit": "ns/iter",
            "extra": "iterations: 4568\ncpu: 186791.9220665505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190918.63193388577,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 190916.96758755733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97442.3856936323,
            "unit": "ns/iter",
            "extra": "iterations: 8989\ncpu: 97442.28501501837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183511.18231693856,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 183505.16986706018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5490.696713800309,
            "unit": "ns/iter",
            "extra": "iterations: 147313\ncpu: 5490.670884443321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26878.928239246616,
            "unit": "ns/iter",
            "extra": "iterations: 30964\ncpu: 26878.862550058097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20357.01624157806,
            "unit": "ns/iter",
            "extra": "iterations: 41560\ncpu: 20356.963426371552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20500.65405604669,
            "unit": "ns/iter",
            "extra": "iterations: 40680\ncpu: 20500.742379547766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20201.75715539487,
            "unit": "ns/iter",
            "extra": "iterations: 41018\ncpu: 20201.72363352668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44027.41921631809,
            "unit": "ns/iter",
            "extra": "iterations: 18630\ncpu: 44027.5845410627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259874.325408613,
            "unit": "ns/iter",
            "extra": "iterations: 3365\ncpu: 259864.07132243528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204018.6220196406,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 204018.67695184733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200104.47919622142,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 200098.32151300326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203151.53076023696,
            "unit": "ns/iter",
            "extra": "iterations: 4275\ncpu: 203150.73684210578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108616.78249567065,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 108611.54988858644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194273.34493528362,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 194268.09460062423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789847.5766362663,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 789834.0513670297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 428483.6992771039,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 428468.91566264874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1612.8673667231099,
            "unit": "ns/iter",
            "extra": "iterations: 503388\ncpu: 1612.7907300134232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8852.519627742353,
            "unit": "ns/iter",
            "extra": "iterations: 92624\ncpu: 8852.330929348731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6920.69472716661,
            "unit": "ns/iter",
            "extra": "iterations: 118589\ncpu: 6920.561772171137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6974.634644131152,
            "unit": "ns/iter",
            "extra": "iterations: 117740\ncpu: 6974.449634788523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6607.534925620374,
            "unit": "ns/iter",
            "extra": "iterations: 123219\ncpu: 6607.1028007044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26642.501005266746,
            "unit": "ns/iter",
            "extra": "iterations: 31335\ncpu: 26641.710547311264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245628.85726140375,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 245621.85338865858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184693.21041622388,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 184689.87659485487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184986.02255639134,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 184976.77527151164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185560.52089428707,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 185555.05641454257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94900.38352915183,
            "unit": "ns/iter",
            "extra": "iterations: 9277\ncpu: 94897.85490999217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180755.05014325026,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 180749.6316004913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.81120516022528,
            "unit": "ns/iter",
            "extra": "iterations: 3808531\ncpu: 183.80344022406558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1419.5352973399742,
            "unit": "ns/iter",
            "extra": "iterations: 492870\ncpu: 1419.480796153138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1148.9758847822761,
            "unit": "ns/iter",
            "extra": "iterations: 609698\ncpu: 1148.9358666093724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1074.6418892403722,
            "unit": "ns/iter",
            "extra": "iterations: 652368\ncpu: 1074.6524967503046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 849.5209477954634,
            "unit": "ns/iter",
            "extra": "iterations: 824144\ncpu: 849.5010580675247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9757.026603716351,
            "unit": "ns/iter",
            "extra": "iterations: 75403\ncpu: 9756.452661034702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12085.087987982992,
            "unit": "ns/iter",
            "extra": "iterations: 57917\ncpu: 12084.741958319622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2705.6606230088187,
            "unit": "ns/iter",
            "extra": "iterations: 259611\ncpu: 2705.5506122621737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2685.9191182391914,
            "unit": "ns/iter",
            "extra": "iterations: 260615\ncpu: 2685.8630546975223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2636.478480356848,
            "unit": "ns/iter",
            "extra": "iterations: 266431\ncpu: 2636.393287567899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5034.01872756437,
            "unit": "ns/iter",
            "extra": "iterations: 138726\ncpu: 5033.9460519297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5094.229007521851,
            "unit": "ns/iter",
            "extra": "iterations: 137061\ncpu: 5094.221550988214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1987.5379453275118,
            "unit": "ns/iter",
            "extra": "iterations: 352718\ncpu: 1987.5583327190432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10341.218319082544,
            "unit": "ns/iter",
            "extra": "iterations: 67951\ncpu: 10341.016320583853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8317.022506327383,
            "unit": "ns/iter",
            "extra": "iterations: 84554\ncpu: 8316.47349622724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8203.612435918256,
            "unit": "ns/iter",
            "extra": "iterations: 86218\ncpu: 8203.4981094434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7986.33969760276,
            "unit": "ns/iter",
            "extra": "iterations: 88096\ncpu: 7986.184389756747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18765.7266385859,
            "unit": "ns/iter",
            "extra": "iterations: 37273\ncpu: 18765.77415287202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53149.3994349462,
            "unit": "ns/iter",
            "extra": "iterations: 13096\ncpu: 53148.9080635316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42428.608427168416,
            "unit": "ns/iter",
            "extra": "iterations: 16518\ncpu: 42429.00472212162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42565.37593573507,
            "unit": "ns/iter",
            "extra": "iterations: 16431\ncpu: 42565.0416894889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42291.42200239498,
            "unit": "ns/iter",
            "extra": "iterations: 16680\ncpu: 42291.49280575496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25377.353852249995,
            "unit": "ns/iter",
            "extra": "iterations: 27763\ncpu: 25376.42906026002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42197.587285383976,
            "unit": "ns/iter",
            "extra": "iterations: 16658\ncpu: 42196.98042982411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.29499740858,
            "unit": "ns/iter",
            "extra": "iterations: 364671\ncpu: 1914.263815877871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10118.24981953653,
            "unit": "ns/iter",
            "extra": "iterations: 69266\ncpu: 10118.255709872208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9779.872622542218,
            "unit": "ns/iter",
            "extra": "iterations: 71873\ncpu: 9779.683608587375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9857.199531302807,
            "unit": "ns/iter",
            "extra": "iterations: 71688\ncpu: 9857.07649815872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 10361.81526092725,
            "unit": "ns/iter",
            "extra": "iterations: 67912\ncpu: 10361.834432795278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19894.74736902082,
            "unit": "ns/iter",
            "extra": "iterations: 35158\ncpu: 19894.706752375023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52520.9608934294,
            "unit": "ns/iter",
            "extra": "iterations: 13297\ncpu: 52520.54598781654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43035.51922009049,
            "unit": "ns/iter",
            "extra": "iterations: 16207\ncpu: 43034.30616400321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43814.73689156469,
            "unit": "ns/iter",
            "extra": "iterations: 15963\ncpu: 43814.23917809918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42545.53520785234,
            "unit": "ns/iter",
            "extra": "iterations: 16502\ncpu: 42545.19452187555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25250.269156332066,
            "unit": "ns/iter",
            "extra": "iterations: 27902\ncpu: 25249.78496165111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43279.20268182279,
            "unit": "ns/iter",
            "extra": "iterations: 16183\ncpu: 43279.5958722111 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705779063879,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 527.0617225364749,
            "unit": "ns/iter",
            "extra": "iterations: 1194831\ncpu: 527.0166241083467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5009.48802000039,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5009.352999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9676.718908976007,
            "unit": "ns/iter",
            "extra": "iterations: 85901\ncpu: 9676.091081593924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14518.359179178919,
            "unit": "ns/iter",
            "extra": "iterations: 57211\ncpu: 14517.489643600007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19528.325601013163,
            "unit": "ns/iter",
            "extra": "iterations: 42678\ncpu: 19527.318524766866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24045.113370674073,
            "unit": "ns/iter",
            "extra": "iterations: 34815\ncpu: 24043.38359902341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28578.916340941912,
            "unit": "ns/iter",
            "extra": "iterations: 29166\ncpu: 28576.438318590135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33279.022124779534,
            "unit": "ns/iter",
            "extra": "iterations: 24859\ncpu: 33277.5815599984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38185.057574943305,
            "unit": "ns/iter",
            "extra": "iterations: 22284\ncpu: 38181.95566325615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 512.2171833787414,
            "unit": "ns/iter",
            "extra": "iterations: 1363364\ncpu: 512.2057645647096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 399.32760218067193,
            "unit": "ns/iter",
            "extra": "iterations: 1752876\ncpu: 399.30930653394756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 397.657104861799,
            "unit": "ns/iter",
            "extra": "iterations: 1751343\ncpu: 397.6294763504347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.1447607478947,
            "unit": "ns/iter",
            "extra": "iterations: 1722221\ncpu: 407.1179018256081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 874.0921260487019,
            "unit": "ns/iter",
            "extra": "iterations: 794455\ncpu: 874.0264709769602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1671.5819772995546,
            "unit": "ns/iter",
            "extra": "iterations: 472149\ncpu: 1671.5473293388322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9711.484478976108,
            "unit": "ns/iter",
            "extra": "iterations: 84305\ncpu: 9711.133384733997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7109.0869093069305,
            "unit": "ns/iter",
            "extra": "iterations: 114188\ncpu: 7108.733842435286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6971.656739977172,
            "unit": "ns/iter",
            "extra": "iterations: 113398\ncpu: 6971.3548739836815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6962.75366008924,
            "unit": "ns/iter",
            "extra": "iterations: 116254\ncpu: 6962.345381664277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27632.850020143433,
            "unit": "ns/iter",
            "extra": "iterations: 29784\ncpu: 27631.23489121678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247403.89950577877,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 247390.36243822056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185863.29410489288,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 185851.64716081464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187293.50379034088,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 187283.77734459625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187717.19360453932,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 187709.1146399826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97033.89471340331,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 97030.52865887612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182880.97610142594,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 182870.51122194482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5594.749191927287,
            "unit": "ns/iter",
            "extra": "iterations: 145717\ncpu: 5594.507161141113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26578.473277052846,
            "unit": "ns/iter",
            "extra": "iterations: 31153\ncpu: 26578.1594067987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20666.503334001965,
            "unit": "ns/iter",
            "extra": "iterations: 39892\ncpu: 20665.29880677828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20004.352535116992,
            "unit": "ns/iter",
            "extra": "iterations: 41576\ncpu: 20003.961420050036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19951.166825773937,
            "unit": "ns/iter",
            "extra": "iterations: 41900\ncpu: 19949.8400954654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45110.77126302762,
            "unit": "ns/iter",
            "extra": "iterations: 18812\ncpu: 45109.69062300675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 260724.21832242794,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 260710.6484235577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202392.09907194343,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 202378.07424594022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203168.82141199804,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 203157.47793776068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202184.013413509,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 202177.08140610514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110591.9941557633,
            "unit": "ns/iter",
            "extra": "iterations: 7871\ncpu: 110587.37136323222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193072.90878829057,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 193064.64713715087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 790998.4825870645,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 790946.6003316712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438348.22189635853,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 438316.66666666704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1630.5258466808623,
            "unit": "ns/iter",
            "extra": "iterations: 498594\ncpu: 1630.4287656891186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8957.161521823962,
            "unit": "ns/iter",
            "extra": "iterations: 91548\ncpu: 8956.86197404646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6702.086613980052,
            "unit": "ns/iter",
            "extra": "iterations: 122105\ncpu: 6701.81319356292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6476.427866949311,
            "unit": "ns/iter",
            "extra": "iterations: 125726\ncpu: 6476.106771868963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6868.577498786095,
            "unit": "ns/iter",
            "extra": "iterations: 127602\ncpu: 6868.166643156066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26687.863144556406,
            "unit": "ns/iter",
            "extra": "iterations: 30777\ncpu: 26686.987035773418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247119.71259509673,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 247111.01718794106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 187290.1476838005,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 187281.25796855145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185084.39915966132,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 185077.62605042147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184558.86428571967,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 184548.00420168016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95943.0135223567,
            "unit": "ns/iter",
            "extra": "iterations: 9170\ncpu: 95939.67284623759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178417.64857201988,
            "unit": "ns/iter",
            "extra": "iterations: 4937\ncpu: 178410.35041523143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 186.45912819995831,
            "unit": "ns/iter",
            "extra": "iterations: 3746226\ncpu: 186.4534334020424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1421.362360670208,
            "unit": "ns/iter",
            "extra": "iterations: 489217\ncpu: 1421.3067002986334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1037.5096150576117,
            "unit": "ns/iter",
            "extra": "iterations: 676283\ncpu: 1037.4365465345134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1159.851736926539,
            "unit": "ns/iter",
            "extra": "iterations: 604257\ncpu: 1159.784826654889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 843.4059082162568,
            "unit": "ns/iter",
            "extra": "iterations: 829929\ncpu: 843.3287666776303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9186.679642747878,
            "unit": "ns/iter",
            "extra": "iterations: 75241\ncpu: 9186.41166385346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11552.350302311535,
            "unit": "ns/iter",
            "extra": "iterations: 60699\ncpu: 11551.8822385871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2607.7940319527233,
            "unit": "ns/iter",
            "extra": "iterations: 268396\ncpu: 2607.706523197058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2600.5986851412526,
            "unit": "ns/iter",
            "extra": "iterations: 268622\ncpu: 2600.412103252879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2646.3133867914935,
            "unit": "ns/iter",
            "extra": "iterations: 264507\ncpu: 2646.1481170630796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5007.4023775911965,
            "unit": "ns/iter",
            "extra": "iterations: 139553\ncpu: 5007.104110982928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5087.2915924543395,
            "unit": "ns/iter",
            "extra": "iterations: 137555\ncpu: 5086.7667478463045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1967.4969744745838,
            "unit": "ns/iter",
            "extra": "iterations: 356467\ncpu: 1967.4014705428553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10183.19385488807,
            "unit": "ns/iter",
            "extra": "iterations: 67989\ncpu: 10182.898704202224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8074.461108345637,
            "unit": "ns/iter",
            "extra": "iterations: 86381\ncpu: 8074.240863152823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8104.790081032729,
            "unit": "ns/iter",
            "extra": "iterations: 86138\ncpu: 8104.24667394186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8054.594055654508,
            "unit": "ns/iter",
            "extra": "iterations: 87108\ncpu: 8053.872204619525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19186.328716300293,
            "unit": "ns/iter",
            "extra": "iterations: 36387\ncpu: 19184.783026904865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52892.5892504072,
            "unit": "ns/iter",
            "extra": "iterations: 13154\ncpu: 52889.86620039487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41727.750554397026,
            "unit": "ns/iter",
            "extra": "iterations: 16685\ncpu: 41725.136350015484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41856.52065378933,
            "unit": "ns/iter",
            "extra": "iterations: 16825\ncpu: 41852.90341753346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41814.58808135535,
            "unit": "ns/iter",
            "extra": "iterations: 16814\ncpu: 41812.60259307654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25126.400358292318,
            "unit": "ns/iter",
            "extra": "iterations: 27910\ncpu: 25124.725904693696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41282.88348884089,
            "unit": "ns/iter",
            "extra": "iterations: 16934\ncpu: 41279.47324908446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1891.4361161980803,
            "unit": "ns/iter",
            "extra": "iterations: 369679\ncpu: 1891.2910930834646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11866.48303754622,
            "unit": "ns/iter",
            "extra": "iterations: 58600\ncpu: 11865.800341296987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8691.651638424542,
            "unit": "ns/iter",
            "extra": "iterations: 80138\ncpu: 8690.850782400397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8877.859301978351,
            "unit": "ns/iter",
            "extra": "iterations: 76817\ncpu: 8877.65859119721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9778.648068849985,
            "unit": "ns/iter",
            "extra": "iterations: 71227\ncpu: 9778.35652210539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19080.488327007795,
            "unit": "ns/iter",
            "extra": "iterations: 36623\ncpu: 19079.152445184565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51766.0923512418,
            "unit": "ns/iter",
            "extra": "iterations: 13427\ncpu: 51764.20644969174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40901.20173153687,
            "unit": "ns/iter",
            "extra": "iterations: 16517\ncpu: 40897.929406066134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41185.204667017475,
            "unit": "ns/iter",
            "extra": "iterations: 17013\ncpu: 41182.30176923568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42661.71367116632,
            "unit": "ns/iter",
            "extra": "iterations: 15807\ncpu: 42661.30195483012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25590.570765572033,
            "unit": "ns/iter",
            "extra": "iterations: 27365\ncpu: 25589.83738351928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42503.29729078305,
            "unit": "ns/iter",
            "extra": "iterations: 16610\ncpu: 42500.57796508165 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705954211118,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 523.2506518122336,
            "unit": "ns/iter",
            "extra": "iterations: 1348548\ncpu: 523.2484123664861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5094.4483899991155,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5094.410999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9893.085223521666,
            "unit": "ns/iter",
            "extra": "iterations: 84824\ncpu: 9893.129303027443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14909.00105448071,
            "unit": "ns/iter",
            "extra": "iterations: 56900\ncpu: 14908.873462214413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19647.234320658394,
            "unit": "ns/iter",
            "extra": "iterations: 42843\ncpu: 19647.09053987816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24362.81566115506,
            "unit": "ns/iter",
            "extra": "iterations: 34659\ncpu: 24362.540754205238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28460.396297061598,
            "unit": "ns/iter",
            "extra": "iterations: 29112\ncpu: 28459.638636988177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33209.83236256297,
            "unit": "ns/iter",
            "extra": "iterations: 25066\ncpu: 33208.14250379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37873.616722225845,
            "unit": "ns/iter",
            "extra": "iterations: 22198\ncpu: 37871.97945760879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 512.7709170496881,
            "unit": "ns/iter",
            "extra": "iterations: 1370700\ncpu: 512.7558911505068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 400.51439741007067,
            "unit": "ns/iter",
            "extra": "iterations: 1753232\ncpu: 400.49685381056264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 394.4820087630922,
            "unit": "ns/iter",
            "extra": "iterations: 1773808\ncpu: 394.46766504604796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.88678978881654,
            "unit": "ns/iter",
            "extra": "iterations: 1735188\ncpu: 403.87099265324525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 835.4710245374565,
            "unit": "ns/iter",
            "extra": "iterations: 836846\ncpu: 835.4378224906364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1667.9908103716161,
            "unit": "ns/iter",
            "extra": "iterations: 478583\ncpu: 1667.8782990620207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9581.549198030218,
            "unit": "ns/iter",
            "extra": "iterations: 84729\ncpu: 9581.221305574263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7381.550966119865,
            "unit": "ns/iter",
            "extra": "iterations: 109769\ncpu: 7381.414607038421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7214.074719197239,
            "unit": "ns/iter",
            "extra": "iterations: 111377\ncpu: 7213.814342278904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6987.326170063295,
            "unit": "ns/iter",
            "extra": "iterations: 115357\ncpu: 6987.227476442709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27327.16619831186,
            "unit": "ns/iter",
            "extra": "iterations: 29892\ncpu: 27325.92332396632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240634.8739703603,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 240626.30422844572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182344.3197105232,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 182337.3988931456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186836.75261473682,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 186830.35218783387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186655.84049211454,
            "unit": "ns/iter",
            "extra": "iterations: 4633\ncpu: 186644.614720483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95265.06572923169,
            "unit": "ns/iter",
            "extra": "iterations: 9174\ncpu: 95262.90603880552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180789.95650389607,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 180782.23225276996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5042.438909999873,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5034.826000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26330.35564800429,
            "unit": "ns/iter",
            "extra": "iterations: 31489\ncpu: 26329.642097240274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20288.751698296106,
            "unit": "ns/iter",
            "extra": "iterations: 41365\ncpu: 20288.48785204884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20154.225155875647,
            "unit": "ns/iter",
            "extra": "iterations: 41700\ncpu: 20153.429256594736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19911.487571384747,
            "unit": "ns/iter",
            "extra": "iterations: 42201\ncpu: 19911.58029430576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45051.36552206294,
            "unit": "ns/iter",
            "extra": "iterations: 18609\ncpu: 45049.77698962868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258367.7863731052,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 258366.28979470363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200074.11095765073,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 200068.13996316734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200567.24844146433,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 200562.6414223037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199695.27125966162,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 199689.67712596612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109273.78618708397,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 109271.52491569836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191305.38617349975,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 191300.26420079285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787417.9020576581,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 787380.0823045273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 427900.8982642284,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 427891.8997107024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1634.4430946877087,
            "unit": "ns/iter",
            "extra": "iterations: 492599\ncpu: 1634.3597936658434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9119.830273628519,
            "unit": "ns/iter",
            "extra": "iterations: 88843\ncpu: 9119.559222448594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6783.68140399662,
            "unit": "ns/iter",
            "extra": "iterations: 119402\ncpu: 6783.4785011976355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6608.496608861119,
            "unit": "ns/iter",
            "extra": "iterations: 121788\ncpu: 6608.142838374921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6708.609563284179,
            "unit": "ns/iter",
            "extra": "iterations: 119666\ncpu: 6708.349907241775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26789.74629018587,
            "unit": "ns/iter",
            "extra": "iterations: 31201\ncpu: 26788.2247363866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243654.73106687886,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 243644.88667772288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184037.55241511867,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 184028.68593123727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184325.99685270977,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 184313.9320184641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184558.6879462457,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 184547.81604367946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93937.56994319145,
            "unit": "ns/iter",
            "extra": "iterations: 9329\ncpu: 93932.70446993256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176372.14859998948,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 176362.9000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.45976393346794,
            "unit": "ns/iter",
            "extra": "iterations: 3817483\ncpu: 183.45171412682117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1417.615195462301,
            "unit": "ns/iter",
            "extra": "iterations: 513219\ncpu: 1417.5387115442043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1091.4671690610664,
            "unit": "ns/iter",
            "extra": "iterations: 641727\ncpu: 1091.44511606961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1127.3273096245537,
            "unit": "ns/iter",
            "extra": "iterations: 621876\ncpu: 1127.2797149270853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 851.3861360028757,
            "unit": "ns/iter",
            "extra": "iterations: 822894\ncpu: 851.3619008037426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9319.572004973626,
            "unit": "ns/iter",
            "extra": "iterations: 75592\ncpu: 9319.164726426103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11677.909493818435,
            "unit": "ns/iter",
            "extra": "iterations: 60018\ncpu: 11677.34013129387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2604.0313699931094,
            "unit": "ns/iter",
            "extra": "iterations: 266943\ncpu: 2603.830405742056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2601.481279966657,
            "unit": "ns/iter",
            "extra": "iterations: 269257\ncpu: 2601.383436642321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2645.2421593363106,
            "unit": "ns/iter",
            "extra": "iterations: 264359\ncpu: 2645.131431122084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4978.982023967708,
            "unit": "ns/iter",
            "extra": "iterations: 141188\ncpu: 4978.700031164108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5052.932175154257,
            "unit": "ns/iter",
            "extra": "iterations: 138666\ncpu: 5052.753378622032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1946.0544359321366,
            "unit": "ns/iter",
            "extra": "iterations: 359744\ncpu: 1946.0038249421682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10057.35795536069,
            "unit": "ns/iter",
            "extra": "iterations: 69626\ncpu: 10057.291816275521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8073.975991709116,
            "unit": "ns/iter",
            "extra": "iterations: 85887\ncpu: 8073.833059717995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8062.473147762659,
            "unit": "ns/iter",
            "extra": "iterations: 86436\ncpu: 8061.962608172644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7913.109038246685,
            "unit": "ns/iter",
            "extra": "iterations: 87694\ncpu: 7912.71352658113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19316.624865794707,
            "unit": "ns/iter",
            "extra": "iterations: 37256\ncpu: 19315.68874812122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52419.944821353,
            "unit": "ns/iter",
            "extra": "iterations: 13266\ncpu: 52418.211970450786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41875.76774654508,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 41874.32110528867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41479.68784758923,
            "unit": "ns/iter",
            "extra": "iterations: 16902\ncpu: 41477.62394982893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41621.427414555445,
            "unit": "ns/iter",
            "extra": "iterations: 16794\ncpu: 41619.26283196334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24996.882895773928,
            "unit": "ns/iter",
            "extra": "iterations: 27958\ncpu: 24995.600543672448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41414.32923295452,
            "unit": "ns/iter",
            "extra": "iterations: 16909\ncpu: 41412.00544088942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2046.6977460996568,
            "unit": "ns/iter",
            "extra": "iterations: 341630\ncpu: 2046.5588502180635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11185.494797302006,
            "unit": "ns/iter",
            "extra": "iterations: 62852\ncpu: 11184.97740724235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9185.19110750106,
            "unit": "ns/iter",
            "extra": "iterations: 76334\ncpu: 9184.892708360605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8962.584191388007,
            "unit": "ns/iter",
            "extra": "iterations: 78375\ncpu: 8961.90239234456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8875.463452014204,
            "unit": "ns/iter",
            "extra": "iterations: 78951\ncpu: 8875.345467441857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19262.870221216614,
            "unit": "ns/iter",
            "extra": "iterations: 36254\ncpu: 19262.409665140643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51438.94608387066,
            "unit": "ns/iter",
            "extra": "iterations: 13521\ncpu: 51435.84054433853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42283.65601755899,
            "unit": "ns/iter",
            "extra": "iterations: 16402\ncpu: 42281.191318131336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41540.20915307465,
            "unit": "ns/iter",
            "extra": "iterations: 16672\ncpu: 41539.647312859866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41466.82584637291,
            "unit": "ns/iter",
            "extra": "iterations: 16807\ncpu: 41466.008210865155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26026.412697822354,
            "unit": "ns/iter",
            "extra": "iterations: 26981\ncpu: 26026.348170934965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42750.14923141183,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 42748.035169567695 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705955640151,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 527.8007816760114,
            "unit": "ns/iter",
            "extra": "iterations: 1302074\ncpu: 527.8014152805447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5004.817239999966,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5004.819999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9886.803892777896,
            "unit": "ns/iter",
            "extra": "iterations: 85132\ncpu: 9886.820467039419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14610.295943427074,
            "unit": "ns/iter",
            "extra": "iterations: 57413\ncpu: 14610.349572396499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19288.009147684566,
            "unit": "ns/iter",
            "extra": "iterations: 43071\ncpu: 19288.0894337257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23873.5351591613,
            "unit": "ns/iter",
            "extra": "iterations: 34870\ncpu: 23873.782621164315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28903.86109962785,
            "unit": "ns/iter",
            "extra": "iterations: 29028\ncpu: 28903.21758302328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33502.18160846342,
            "unit": "ns/iter",
            "extra": "iterations: 25142\ncpu: 33501.24095139609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38611.74197890721,
            "unit": "ns/iter",
            "extra": "iterations: 22285\ncpu: 38608.45860444242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 501.5650706811974,
            "unit": "ns/iter",
            "extra": "iterations: 1317890\ncpu: 501.5377611181523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 391.88221712619264,
            "unit": "ns/iter",
            "extra": "iterations: 1790498\ncpu: 391.86472143504267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 390.02930610901325,
            "unit": "ns/iter",
            "extra": "iterations: 1798294\ncpu: 390.0059167188457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 397.3992469123955,
            "unit": "ns/iter",
            "extra": "iterations: 1765266\ncpu: 397.3971061585052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 825.19100533259,
            "unit": "ns/iter",
            "extra": "iterations: 841254\ncpu: 825.1186918576309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1665.824181086482,
            "unit": "ns/iter",
            "extra": "iterations: 478225\ncpu: 1665.723038318782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9508.163612335558,
            "unit": "ns/iter",
            "extra": "iterations: 85507\ncpu: 9507.739717216125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7211.660752697803,
            "unit": "ns/iter",
            "extra": "iterations: 112502\ncpu: 7211.347353824812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7046.87429441199,
            "unit": "ns/iter",
            "extra": "iterations: 114975\ncpu: 7046.711893889988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6595.252975120136,
            "unit": "ns/iter",
            "extra": "iterations: 122348\ncpu: 6595.079608984225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27646.83769282356,
            "unit": "ns/iter",
            "extra": "iterations: 29820\ncpu: 27646.525821596246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238579.38866064974,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 238580.7450013689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185599.47156906477,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 185596.5156049593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 182694.18711328355,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 182694.83678258987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184647.40779609213,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 184643.58535018237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95685.7908782665,
            "unit": "ns/iter",
            "extra": "iterations: 9143\ncpu: 95686.3502132781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180326.60004095375,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 180324.3088265411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5534.277363074297,
            "unit": "ns/iter",
            "extra": "iterations: 147763\ncpu: 5534.102583190643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26881.631915790433,
            "unit": "ns/iter",
            "extra": "iterations: 30781\ncpu: 26881.560053279627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20562.447081052916,
            "unit": "ns/iter",
            "extra": "iterations: 40751\ncpu: 20562.216878113417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20683.471209505784,
            "unit": "ns/iter",
            "extra": "iterations: 39388\ncpu: 20683.601604549567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20475.036674388655,
            "unit": "ns/iter",
            "extra": "iterations: 40137\ncpu: 20474.64683459152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44598.55707663314,
            "unit": "ns/iter",
            "extra": "iterations: 18335\ncpu: 44598.903736023865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 261209.86838171206,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 261205.53395154097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202864.93646025888,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 202863.37800369688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200158.50905341576,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 200151.52418060816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201348.92313002096,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 201346.72036823898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110451.96261681212,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 110445.75650416798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191141.8961748734,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 191141.18032786853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787606.1835236548,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 787588.0097879291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 431867.4386563025,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 431863.8266796477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1646.2526220174905,
            "unit": "ns/iter",
            "extra": "iterations: 487697\ncpu: 1646.210044351304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9337.640172616246,
            "unit": "ns/iter",
            "extra": "iterations: 89215\ncpu: 9337.170879336403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6944.039371345576,
            "unit": "ns/iter",
            "extra": "iterations: 118030\ncpu: 6943.882063882052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7260.887623160944,
            "unit": "ns/iter",
            "extra": "iterations: 120879\ncpu: 7260.681342499538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6255.827495335157,
            "unit": "ns/iter",
            "extra": "iterations: 131295\ncpu: 6255.711184736706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26900.371202917497,
            "unit": "ns/iter",
            "extra": "iterations: 31274\ncpu: 26899.47560273715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244379.68810376828,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 244365.71901738885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184667.3728777876,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 184659.4843848252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 183272.29313929018,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 183266.2370062367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184780.8686054008,
            "unit": "ns/iter",
            "extra": "iterations: 4711\ncpu: 184773.3814476762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94863.57050102792,
            "unit": "ns/iter",
            "extra": "iterations: 9241\ncpu: 94858.45687696067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177418.82370637468,
            "unit": "ns/iter",
            "extra": "iterations: 4986\ncpu: 177409.5266746898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.74461784483657,
            "unit": "ns/iter",
            "extra": "iterations: 3633210\ncpu: 193.7365855538198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1404.6964200227285,
            "unit": "ns/iter",
            "extra": "iterations: 499249\ncpu: 1404.6237448647832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1001.009842204756,
            "unit": "ns/iter",
            "extra": "iterations: 700148\ncpu: 1000.9616538217651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1084.1655345885877,
            "unit": "ns/iter",
            "extra": "iterations: 643654\ncpu: 1084.1661824520627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 828.3016749294068,
            "unit": "ns/iter",
            "extra": "iterations: 836692\ncpu: 828.2622518202666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9310.50572617532,
            "unit": "ns/iter",
            "extra": "iterations: 75705\ncpu: 9310.206723466072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11644.488535920907,
            "unit": "ns/iter",
            "extra": "iterations: 60188\ncpu: 11644.120090383445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2628.9969453647795,
            "unit": "ns/iter",
            "extra": "iterations: 267135\ncpu: 2628.9224549385317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2613.532064131928,
            "unit": "ns/iter",
            "extra": "iterations: 268883\ncpu: 2613.456410408963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2601.53322678044,
            "unit": "ns/iter",
            "extra": "iterations: 269662\ncpu: 2601.5011384622276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5016.870220069042,
            "unit": "ns/iter",
            "extra": "iterations: 148590\ncpu: 5016.667339659478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5057.06107914498,
            "unit": "ns/iter",
            "extra": "iterations: 138165\ncpu: 5056.942062027278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1960.638614996679,
            "unit": "ns/iter",
            "extra": "iterations: 357602\ncpu: 1960.596137605476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10167.31058711319,
            "unit": "ns/iter",
            "extra": "iterations: 69169\ncpu: 10167.164481198211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8084.572235413063,
            "unit": "ns/iter",
            "extra": "iterations: 86758\ncpu: 8084.557043730751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8041.169662780011,
            "unit": "ns/iter",
            "extra": "iterations: 87391\ncpu: 8040.845167122465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7977.97994439164,
            "unit": "ns/iter",
            "extra": "iterations: 87756\ncpu: 7977.667623866131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18590.98376148079,
            "unit": "ns/iter",
            "extra": "iterations: 37565\ncpu: 18590.18767469736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52364.86439405055,
            "unit": "ns/iter",
            "extra": "iterations: 13318\ncpu: 52364.0636732247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41972.175803061386,
            "unit": "ns/iter",
            "extra": "iterations: 16655\ncpu: 41970.549384569546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41534.106308138034,
            "unit": "ns/iter",
            "extra": "iterations: 16772\ncpu: 41532.482709277465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42113.3321400881,
            "unit": "ns/iter",
            "extra": "iterations: 16761\ncpu: 42111.747509098954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24989.077808140155,
            "unit": "ns/iter",
            "extra": "iterations: 27812\ncpu: 24988.24608082837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41298.38133097644,
            "unit": "ns/iter",
            "extra": "iterations: 16980\ncpu: 41296.20730270899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2192.055453036052,
            "unit": "ns/iter",
            "extra": "iterations: 324058\ncpu: 2192.0113066179583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9960.419097916385,
            "unit": "ns/iter",
            "extra": "iterations: 70060\ncpu: 9959.94576077647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9891.988537532541,
            "unit": "ns/iter",
            "extra": "iterations: 69793\ncpu: 9891.769948275776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8382.27571445681,
            "unit": "ns/iter",
            "extra": "iterations: 83630\ncpu: 8382.08298457496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9564.000654869453,
            "unit": "ns/iter",
            "extra": "iterations: 74824\ncpu: 9563.92334010491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18325.935138930494,
            "unit": "ns/iter",
            "extra": "iterations: 37033\ncpu: 18325.984932357493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52116.273151283815,
            "unit": "ns/iter",
            "extra": "iterations: 13293\ncpu: 52112.99180019495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41528.36876459503,
            "unit": "ns/iter",
            "extra": "iterations: 16699\ncpu: 41526.786035091645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40359.3788089414,
            "unit": "ns/iter",
            "extra": "iterations: 17262\ncpu: 40359.46587880873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41951.38070882161,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 41951.54341416465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24363.161719618798,
            "unit": "ns/iter",
            "extra": "iterations: 28704\ncpu: 24363.440635451385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42325.61963519159,
            "unit": "ns/iter",
            "extra": "iterations: 16776\ncpu: 42324.45159752056 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705957477366,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 532.5758517317687,
            "unit": "ns/iter",
            "extra": "iterations: 1316641\ncpu: 532.5775211314246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5145.350129999997,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5144.8949999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10010.716081265735,
            "unit": "ns/iter",
            "extra": "iterations: 84415\ncpu: 10010.341763904524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14800.549509572416,
            "unit": "ns/iter",
            "extra": "iterations: 56787\ncpu: 14800.068677690315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19427.99083062236,
            "unit": "ns/iter",
            "extra": "iterations: 42751\ncpu: 19427.51748497112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24246.980250183708,
            "unit": "ns/iter",
            "extra": "iterations: 33975\ncpu: 24245.33038999265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28693.839069069625,
            "unit": "ns/iter",
            "extra": "iterations: 29261\ncpu: 28693.335839513355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33045.21655035073,
            "unit": "ns/iter",
            "extra": "iterations: 25075\ncpu: 33044.20338983052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37787.98739703832,
            "unit": "ns/iter",
            "extra": "iterations: 22217\ncpu: 37786.96943781787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 525.5151818254743,
            "unit": "ns/iter",
            "extra": "iterations: 1335676\ncpu: 525.5007951030029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.84409200530956,
            "unit": "ns/iter",
            "extra": "iterations: 1712510\ncpu: 407.83598343951206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 398.20401227883076,
            "unit": "ns/iter",
            "extra": "iterations: 1758801\ncpu: 398.1996826246966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.4774832817818,
            "unit": "ns/iter",
            "extra": "iterations: 1730603\ncpu: 405.4714455019433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 832.9588556650139,
            "unit": "ns/iter",
            "extra": "iterations: 830491\ncpu: 832.9506280019893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1670.501023211356,
            "unit": "ns/iter",
            "extra": "iterations: 482305\ncpu: 1670.443184292098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9573.772850444655,
            "unit": "ns/iter",
            "extra": "iterations: 84878\ncpu: 9573.513749145832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7320.161911716491,
            "unit": "ns/iter",
            "extra": "iterations: 110937\ncpu: 7320.031188872957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7222.087098787439,
            "unit": "ns/iter",
            "extra": "iterations: 112160\ncpu: 7221.871433666204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6924.163300654946,
            "unit": "ns/iter",
            "extra": "iterations: 117201\ncpu: 6923.94945435617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27765.381301777135,
            "unit": "ns/iter",
            "extra": "iterations: 29575\ncpu: 27764.87573964501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240264.7960870605,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 240259.46541747067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183225.5915102363,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 183220.8617747434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185853.70196834693,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 185847.51818570812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184071.62714040608,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 184065.77482876697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95976.07426123956,
            "unit": "ns/iter",
            "extra": "iterations: 9103\ncpu: 95973.62407997342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180892.88148453223,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 180885.23682591727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5637.555724012537,
            "unit": "ns/iter",
            "extra": "iterations: 145108\ncpu: 5637.4624417675095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26255.858632640528,
            "unit": "ns/iter",
            "extra": "iterations: 31740\ncpu: 26255.42218021427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20471.147120021273,
            "unit": "ns/iter",
            "extra": "iterations: 40851\ncpu: 20470.93828792443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20305.16952878691,
            "unit": "ns/iter",
            "extra": "iterations: 40937\ncpu: 20304.773188069474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19757.711210675938,
            "unit": "ns/iter",
            "extra": "iterations: 42183\ncpu: 19757.127278761527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45410.64594262968,
            "unit": "ns/iter",
            "extra": "iterations: 17918\ncpu: 45409.77229601524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258274.13991161992,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 258271.7820323989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 198086.98882808702,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 198079.09256725907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 198048.17948132483,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 198043.35759781642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 198009.50852466092,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 198002.11411684458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108346.07891811378,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 108343.15178461152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191361.18849205083,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 191354.76190476184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789104.0157545933,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 789090.2985074593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 447916.55409501033,
            "unit": "ns/iter",
            "extra": "iterations: 1978\ncpu: 447903.6905965619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1599.8836005581409,
            "unit": "ns/iter",
            "extra": "iterations: 502511\ncpu: 1599.8407995048817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9130.979975807533,
            "unit": "ns/iter",
            "extra": "iterations: 90940\ncpu: 9130.630085770848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6826.550882929389,
            "unit": "ns/iter",
            "extra": "iterations: 122320\ncpu: 6826.33093525179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6386.204686714982,
            "unit": "ns/iter",
            "extra": "iterations: 127424\ncpu: 6386.032458563547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6642.577472661255,
            "unit": "ns/iter",
            "extra": "iterations: 123450\ncpu: 6642.476306196816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26653.350778795662,
            "unit": "ns/iter",
            "extra": "iterations: 31202\ncpu: 26652.086404717553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246051.89616566984,
            "unit": "ns/iter",
            "extra": "iterations: 3573\ncpu: 246040.10635320516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184715.44722453677,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 184706.72834314418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184357.84565307872,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 184352.26795464047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184725.19655243258,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 184719.10868194353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94612.42726096477,
            "unit": "ns/iter",
            "extra": "iterations: 9266\ncpu: 94609.24886682462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178597.74869531192,
            "unit": "ns/iter",
            "extra": "iterations: 4982\ncpu: 178591.56965074228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 184.4451404115383,
            "unit": "ns/iter",
            "extra": "iterations: 3775402\ncpu: 184.43582961496554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1408.8769703636365,
            "unit": "ns/iter",
            "extra": "iterations: 496482\ncpu: 1408.832545792198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1024.8862150477908,
            "unit": "ns/iter",
            "extra": "iterations: 682788\ncpu: 1024.8569101975984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1119.0764862573203,
            "unit": "ns/iter",
            "extra": "iterations: 626557\ncpu: 1119.0381721056538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 842.5578511799249,
            "unit": "ns/iter",
            "extra": "iterations: 830856\ncpu: 842.5486486226304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9323.11362102984,
            "unit": "ns/iter",
            "extra": "iterations: 74106\ncpu: 9322.61355355839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11644.191910930056,
            "unit": "ns/iter",
            "extra": "iterations: 59908\ncpu: 11643.748748080394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2630.668762820416,
            "unit": "ns/iter",
            "extra": "iterations: 267156\ncpu: 2630.6068364551193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2606.4697689901154,
            "unit": "ns/iter",
            "extra": "iterations: 267391\ncpu: 2606.3682023703336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2605.1502959674945,
            "unit": "ns/iter",
            "extra": "iterations: 270300\ncpu: 2605.12023677395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5035.307584893569,
            "unit": "ns/iter",
            "extra": "iterations: 143944\ncpu: 5035.061551714547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5051.310044362412,
            "unit": "ns/iter",
            "extra": "iterations: 138406\ncpu: 5051.312804358184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1960.468295013738,
            "unit": "ns/iter",
            "extra": "iterations: 355780\ncpu: 1958.923492045671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10231.981654435625,
            "unit": "ns/iter",
            "extra": "iterations: 68954\ncpu: 10231.670388954966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8167.8180586275785,
            "unit": "ns/iter",
            "extra": "iterations: 86341\ncpu: 8167.282056033674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8099.985489722424,
            "unit": "ns/iter",
            "extra": "iterations: 86835\ncpu: 8099.706339609467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8081.803784081911,
            "unit": "ns/iter",
            "extra": "iterations: 86996\ncpu: 8081.234769414779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18810.13139256063,
            "unit": "ns/iter",
            "extra": "iterations: 37133\ncpu: 18809.355559744614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52158.683772851175,
            "unit": "ns/iter",
            "extra": "iterations: 13348\ncpu: 52157.23703925687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41935.2336749328,
            "unit": "ns/iter",
            "extra": "iterations: 16784\ncpu: 41933.62726406066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41789.93255551046,
            "unit": "ns/iter",
            "extra": "iterations: 16799\ncpu: 41787.826656348756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41544.750596086815,
            "unit": "ns/iter",
            "extra": "iterations: 16776\ncpu: 41543.55627086313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25099.049845690337,
            "unit": "ns/iter",
            "extra": "iterations: 27866\ncpu: 25097.096820498544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41322.0521385621,
            "unit": "ns/iter",
            "extra": "iterations: 16974\ncpu: 41321.768587251456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2021.8397048417573,
            "unit": "ns/iter",
            "extra": "iterations: 346255\ncpu: 2021.7065457538347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 12124.331046371513,
            "unit": "ns/iter",
            "extra": "iterations: 58010\ncpu: 12124.023444233731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9475.61697269258,
            "unit": "ns/iter",
            "extra": "iterations: 74013\ncpu: 9475.263805007176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9472.561745465158,
            "unit": "ns/iter",
            "extra": "iterations: 74135\ncpu: 9472.025359141993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8100.476153263799,
            "unit": "ns/iter",
            "extra": "iterations: 85735\ncpu: 8100.423397678889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18287.616405307403,
            "unit": "ns/iter",
            "extra": "iterations: 38134\ncpu: 18286.917186762552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52493.94193936845,
            "unit": "ns/iter",
            "extra": "iterations: 13262\ncpu: 52492.46719951731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41176.70194870726,
            "unit": "ns/iter",
            "extra": "iterations: 16883\ncpu: 41175.25321329196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41342.162095492815,
            "unit": "ns/iter",
            "extra": "iterations: 17027\ncpu: 41341.886415692796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40631.207869076374,
            "unit": "ns/iter",
            "extra": "iterations: 17232\ncpu: 40628.389043640025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25963.505326850092,
            "unit": "ns/iter",
            "extra": "iterations: 26939\ncpu: 25962.808567504493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42138.61372676858,
            "unit": "ns/iter",
            "extra": "iterations: 16843\ncpu: 42136.66805200962 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705959088231,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 526.8431610290746,
            "unit": "ns/iter",
            "extra": "iterations: 1335274\ncpu: 526.827602424671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5086.194089999481,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5085.906999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9933.483054385435,
            "unit": "ns/iter",
            "extra": "iterations: 83827\ncpu: 9933.045438820427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14777.578091450428,
            "unit": "ns/iter",
            "extra": "iterations: 56818\ncpu: 14777.112886761235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19308.972588335837,
            "unit": "ns/iter",
            "extra": "iterations: 42792\ncpu: 19308.485230884275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24272.560192478824,
            "unit": "ns/iter",
            "extra": "iterations: 34290\ncpu: 24271.741032370945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28998.44915137183,
            "unit": "ns/iter",
            "extra": "iterations: 28988\ncpu: 28997.398923692574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32896.22487605381,
            "unit": "ns/iter",
            "extra": "iterations: 25414\ncpu: 32895.24671440937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38192.70893039278,
            "unit": "ns/iter",
            "extra": "iterations: 22541\ncpu: 38191.17164278428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 514.0197711613133,
            "unit": "ns/iter",
            "extra": "iterations: 1359910\ncpu: 513.9959997352765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 399.37461363703204,
            "unit": "ns/iter",
            "extra": "iterations: 1753209\ncpu: 399.36214107958614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 395.8669763071343,
            "unit": "ns/iter",
            "extra": "iterations: 1766565\ncpu: 395.8594220988184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 404.4043258036833,
            "unit": "ns/iter",
            "extra": "iterations: 1729066\ncpu: 404.3949739339043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 831.9225794563471,
            "unit": "ns/iter",
            "extra": "iterations: 841185\ncpu: 831.8829983891773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1679.409450627246,
            "unit": "ns/iter",
            "extra": "iterations: 470318\ncpu: 1679.3526932841214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9443.49405474466,
            "unit": "ns/iter",
            "extra": "iterations: 86035\ncpu: 9443.268437263916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7041.350069819161,
            "unit": "ns/iter",
            "extra": "iterations: 116014\ncpu: 7041.11486544729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7022.823274357978,
            "unit": "ns/iter",
            "extra": "iterations: 114624\ncpu: 7022.563337520925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6884.921553315008,
            "unit": "ns/iter",
            "extra": "iterations: 116525\ncpu: 6884.712293499247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27478.538284837465,
            "unit": "ns/iter",
            "extra": "iterations: 30038\ncpu: 27477.042412943585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246702.82718764836,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 246694.8541552009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 186343.58049201302,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 186334.7432024169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183866.80231811025,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 183858.08113329037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188686.34184888456,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 188681.31630223055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97118.5152722445,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 97116.15759185488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179859.76188516984,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 179851.57439802412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5494.280441985931,
            "unit": "ns/iter",
            "extra": "iterations: 148783\ncpu: 5494.091394850216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26907.987551596463,
            "unit": "ns/iter",
            "extra": "iterations: 30526\ncpu: 26907.636113477107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20419.023573139828,
            "unit": "ns/iter",
            "extra": "iterations: 40894\ncpu: 20417.785005135294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20407.097543653832,
            "unit": "ns/iter",
            "extra": "iterations: 40833\ncpu: 20406.063722969222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20151.242127275033,
            "unit": "ns/iter",
            "extra": "iterations: 41123\ncpu: 20150.48026651752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43768.45310184507,
            "unit": "ns/iter",
            "extra": "iterations: 18892\ncpu: 43767.404192250615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 260688.62207560852,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 260677.29454109241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201462.01527425065,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 201454.33927331632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199954.6116616651,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 199947.96035952985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200826.6708160596,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 200822.17611802727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109283.96606165588,
            "unit": "ns/iter",
            "extra": "iterations: 8044\ncpu: 109279.78617603212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190709.7516969544,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 190703.56908254855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786579.2023025993,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 786541.4473684203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440700.03838065255,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 440681.33543638064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1628.9985626592345,
            "unit": "ns/iter",
            "extra": "iterations: 485619\ncpu: 1628.920820643358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9200.47573565104,
            "unit": "ns/iter",
            "extra": "iterations: 90668\ncpu: 9200.057352097721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6399.974784385917,
            "unit": "ns/iter",
            "extra": "iterations: 127659\ncpu: 6399.840982617788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6893.53641573928,
            "unit": "ns/iter",
            "extra": "iterations: 119344\ncpu: 6893.300878133801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6487.977051537217,
            "unit": "ns/iter",
            "extra": "iterations: 126588\ncpu: 6487.8258602710985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27026.825043826968,
            "unit": "ns/iter",
            "extra": "iterations: 30802\ncpu: 27025.952860203837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245032.79050277697,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 245025.11173184292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 182998.4434873772,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 182993.48739495783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 183882.01260770473,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 183875.66715696687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182783.99036044523,
            "unit": "ns/iter",
            "extra": "iterations: 4772\ncpu: 182777.28415758538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95085.39781456339,
            "unit": "ns/iter",
            "extra": "iterations: 9243\ncpu: 95082.3433950013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176562.7155189853,
            "unit": "ns/iter",
            "extra": "iterations: 4981\ncpu: 176558.2613932944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.18541316987134,
            "unit": "ns/iter",
            "extra": "iterations: 3785017\ncpu: 183.1758483515399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1377.015727719459,
            "unit": "ns/iter",
            "extra": "iterations: 508211\ncpu: 1376.9798371149045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1085.8497280397658,
            "unit": "ns/iter",
            "extra": "iterations: 644212\ncpu: 1085.8352529912556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 980.1848685194975,
            "unit": "ns/iter",
            "extra": "iterations: 714973\ncpu: 980.1802305821348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 833.3679499072944,
            "unit": "ns/iter",
            "extra": "iterations: 839723\ncpu: 833.3300385960625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9278.696927617786,
            "unit": "ns/iter",
            "extra": "iterations: 74893\ncpu: 9278.37848664093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11641.168395942886,
            "unit": "ns/iter",
            "extra": "iterations: 59948\ncpu: 11640.88710215519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2606.008374570487,
            "unit": "ns/iter",
            "extra": "iterations: 269984\ncpu: 2605.933684959111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2588.557171945905,
            "unit": "ns/iter",
            "extra": "iterations: 268637\ncpu: 2588.4889274374113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2635.8928676144633,
            "unit": "ns/iter",
            "extra": "iterations: 266026\ncpu: 2635.7904866441513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5066.855086094471,
            "unit": "ns/iter",
            "extra": "iterations: 138220\ncpu: 5066.735638836617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5096.0289587677335,
            "unit": "ns/iter",
            "extra": "iterations: 137126\ncpu: 5095.835217245449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1994.418622106729,
            "unit": "ns/iter",
            "extra": "iterations: 350390\ncpu: 1994.3791204086888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10134.615043928787,
            "unit": "ns/iter",
            "extra": "iterations: 69091\ncpu: 10134.315612742706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8141.3965775108145,
            "unit": "ns/iter",
            "extra": "iterations: 86253\ncpu: 8140.995675512694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8063.559262247786,
            "unit": "ns/iter",
            "extra": "iterations: 86750\ncpu: 8063.3567723342785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8093.812199385486,
            "unit": "ns/iter",
            "extra": "iterations: 87529\ncpu: 8093.418181402744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18922.434652767006,
            "unit": "ns/iter",
            "extra": "iterations: 36834\ncpu: 18921.58603464187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52297.70347877701,
            "unit": "ns/iter",
            "extra": "iterations: 13338\ncpu: 52294.676863098575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41818.13821864738,
            "unit": "ns/iter",
            "extra": "iterations: 16785\ncpu: 41816.02025618133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42008.488295514566,
            "unit": "ns/iter",
            "extra": "iterations: 16703\ncpu: 42005.741483566206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42081.1203891628,
            "unit": "ns/iter",
            "extra": "iterations: 16754\ncpu: 42080.49421033828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25414.579762075286,
            "unit": "ns/iter",
            "extra": "iterations: 27908\ncpu: 25413.91357316875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41713.96144536233,
            "unit": "ns/iter",
            "extra": "iterations: 16937\ncpu: 41712.88894137109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1997.5455295636264,
            "unit": "ns/iter",
            "extra": "iterations: 351431\ncpu: 1997.504773341002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11222.614076811502,
            "unit": "ns/iter",
            "extra": "iterations: 62230\ncpu: 11222.117949542095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9809.577389458798,
            "unit": "ns/iter",
            "extra": "iterations: 73479\ncpu: 9809.184937192917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8904.845837367053,
            "unit": "ns/iter",
            "extra": "iterations: 78508\ncpu: 8904.407194171317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9358.659173721555,
            "unit": "ns/iter",
            "extra": "iterations: 74648\ncpu: 9358.162308434288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18686.32000430878,
            "unit": "ns/iter",
            "extra": "iterations: 37137\ncpu: 18686.054339338178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51727.3239624183,
            "unit": "ns/iter",
            "extra": "iterations: 13517\ncpu: 51724.34711844322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41904.95372535243,
            "unit": "ns/iter",
            "extra": "iterations: 16683\ncpu: 41903.61445783133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41967.997061468144,
            "unit": "ns/iter",
            "extra": "iterations: 16675\ncpu: 41965.84107945994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42588.43739020061,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 42586.90858423698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27847.829944408,
            "unit": "ns/iter",
            "extra": "iterations: 26262\ncpu: 27846.275988119673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42147.27343934885,
            "unit": "ns/iter",
            "extra": "iterations: 16852\ncpu: 42145.18158082143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705960584616,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 521.5415395592693,
            "unit": "ns/iter",
            "extra": "iterations: 1342696\ncpu: 521.5036761858231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5081.939259999899,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5081.775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9767.678299702695,
            "unit": "ns/iter",
            "extra": "iterations: 84644\ncpu: 9767.200274089124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14583.080540623094,
            "unit": "ns/iter",
            "extra": "iterations: 57859\ncpu: 14583.121035621074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19470.60338026993,
            "unit": "ns/iter",
            "extra": "iterations: 43606\ncpu: 19470.11420446727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23775.74862538737,
            "unit": "ns/iter",
            "extra": "iterations: 34737\ncpu: 23775.806776635876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28412.130736430692,
            "unit": "ns/iter",
            "extra": "iterations: 29548\ncpu: 28410.985515094104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33386.26164888574,
            "unit": "ns/iter",
            "extra": "iterations: 25217\ncpu: 33383.71336796606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37531.74632189019,
            "unit": "ns/iter",
            "extra": "iterations: 22430\ncpu: 37530.38787338386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 512.3811328150825,
            "unit": "ns/iter",
            "extra": "iterations: 1367337\ncpu: 512.3483822934652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 397.76590882690004,
            "unit": "ns/iter",
            "extra": "iterations: 1747379\ncpu: 397.7447365454205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 397.50857955747057,
            "unit": "ns/iter",
            "extra": "iterations: 1774975\ncpu: 397.48013352300757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.1923711452592,
            "unit": "ns/iter",
            "extra": "iterations: 1720232\ncpu: 406.16992359170166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 837.6914130159822,
            "unit": "ns/iter",
            "extra": "iterations: 838292\ncpu: 837.6244792983829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1666.2576921308496,
            "unit": "ns/iter",
            "extra": "iterations: 478086\ncpu: 1666.1196939462777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9801.912736276574,
            "unit": "ns/iter",
            "extra": "iterations: 82795\ncpu: 9801.437284860198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7422.292399574486,
            "unit": "ns/iter",
            "extra": "iterations: 110007\ncpu: 7421.89224322089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7627.743535488122,
            "unit": "ns/iter",
            "extra": "iterations: 107278\ncpu: 7627.7260948190715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6992.22500109594,
            "unit": "ns/iter",
            "extra": "iterations: 113995\ncpu: 6992.099653493574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27391.882585751715,
            "unit": "ns/iter",
            "extra": "iterations: 30320\ncpu: 27391.88654353557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 237790.21611218282,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 237790.6791311518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181920.04505659253,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 181919.92312620126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185191.25269049106,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 185187.1717606547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188860.50929055508,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 188857.1157094595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97872.76825431675,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 97872.6690631319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181635.10098927817,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 181632.15169002506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5630.86109113017,
            "unit": "ns/iter",
            "extra": "iterations: 144584\ncpu: 5630.733691141481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26084.199567454278,
            "unit": "ns/iter",
            "extra": "iterations: 31904\ncpu: 26084.487838515593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20199.907757323068,
            "unit": "ns/iter",
            "extra": "iterations: 41174\ncpu: 20199.92956720265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20105.688317641965,
            "unit": "ns/iter",
            "extra": "iterations: 41430\ncpu: 20105.896693217455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20205.29319473013,
            "unit": "ns/iter",
            "extra": "iterations: 41365\ncpu: 20204.97522059712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43753.529048597375,
            "unit": "ns/iter",
            "extra": "iterations: 18951\ncpu: 43753.627776898094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259724.43567600692,
            "unit": "ns/iter",
            "extra": "iterations: 3358\ncpu: 259724.68731387673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204190.04013920744,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 204185.4524361949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 201755.64998839636,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 201752.1195274495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201621.35697782534,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 201616.72828096148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110422.29171410226,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 110421.20177103067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191529.1132960883,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 191524.15642458104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 797889.5845129513,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 797891.2572855987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 451708.7773904227,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 451703.8844621539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1623.606745506854,
            "unit": "ns/iter",
            "extra": "iterations: 474123\ncpu: 1623.6244603193643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9234.933487696182,
            "unit": "ns/iter",
            "extra": "iterations: 88104\ncpu: 9234.845182965604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6466.063053757652,
            "unit": "ns/iter",
            "extra": "iterations: 123926\ncpu: 6465.571389377554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6584.763583679327,
            "unit": "ns/iter",
            "extra": "iterations: 123549\ncpu: 6584.728326412995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6372.700840256609,
            "unit": "ns/iter",
            "extra": "iterations: 127223\ncpu: 6372.421653317414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26445.32840790342,
            "unit": "ns/iter",
            "extra": "iterations: 31537\ncpu: 26444.19570663033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 248255.62135112882,
            "unit": "ns/iter",
            "extra": "iterations: 3597\ncpu: 248251.54295245965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185060.38084258788,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 185047.7258436395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185008.67266638827,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 185000.04185851858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183495.64798672427,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 183487.21461187233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95492.13773687648,
            "unit": "ns/iter",
            "extra": "iterations: 9235\ncpu: 95488.40281537628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176637.71826749892,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 176631.7826348509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.66888289914533,
            "unit": "ns/iter",
            "extra": "iterations: 3776830\ncpu: 185.6669217306583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1373.599553388468,
            "unit": "ns/iter",
            "extra": "iterations: 510063\ncpu: 1373.5748329127991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1086.1411544514817,
            "unit": "ns/iter",
            "extra": "iterations: 644358\ncpu: 1086.14264120256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1070.3011795925995,
            "unit": "ns/iter",
            "extra": "iterations: 651920\ncpu: 1070.2905264449594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 801.3839929561526,
            "unit": "ns/iter",
            "extra": "iterations: 873378\ncpu: 801.3822193826704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9129.987520798571,
            "unit": "ns/iter",
            "extra": "iterations: 76928\ncpu: 9130.100873544045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11564.682320259912,
            "unit": "ns/iter",
            "extra": "iterations: 60476\ncpu: 11564.485084992337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2610.9180612086566,
            "unit": "ns/iter",
            "extra": "iterations: 268786\ncpu: 2610.928396568262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2590.9169515307544,
            "unit": "ns/iter",
            "extra": "iterations: 267964\ncpu: 2590.8957919720606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2609.7878554442655,
            "unit": "ns/iter",
            "extra": "iterations: 268713\ncpu: 2609.786277552639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4991.540529065869,
            "unit": "ns/iter",
            "extra": "iterations: 138962\ncpu: 4991.231415782707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4489.116832155625,
            "unit": "ns/iter",
            "extra": "iterations: 155197\ncpu: 4489.018473295218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1948.3246028049978,
            "unit": "ns/iter",
            "extra": "iterations: 358703\ncpu: 1948.2806109789947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10080.561611136614,
            "unit": "ns/iter",
            "extra": "iterations: 69963\ncpu: 10080.098051827339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8137.370264083345,
            "unit": "ns/iter",
            "extra": "iterations: 86071\ncpu: 8136.780100149786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8021.295233952918,
            "unit": "ns/iter",
            "extra": "iterations: 87368\ncpu: 8020.829136525846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7930.666252275467,
            "unit": "ns/iter",
            "extra": "iterations: 88483\ncpu: 7930.458958217971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18854.520908457398,
            "unit": "ns/iter",
            "extra": "iterations: 37162\ncpu: 18854.179000053864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51980.295883229075,
            "unit": "ns/iter",
            "extra": "iterations: 13360\ncpu: 51977.46257485047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41723.74801281674,
            "unit": "ns/iter",
            "extra": "iterations: 16858\ncpu: 41723.03357456352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41835.206663477155,
            "unit": "ns/iter",
            "extra": "iterations: 16718\ncpu: 41834.465845197155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41708.671941932575,
            "unit": "ns/iter",
            "extra": "iterations: 16808\ncpu: 41706.31841980041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25058.981000926553,
            "unit": "ns/iter",
            "extra": "iterations: 28054\ncpu: 25057.706565908673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41095.71628101727,
            "unit": "ns/iter",
            "extra": "iterations: 16682\ncpu: 41092.84857930771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2000.0963998683212,
            "unit": "ns/iter",
            "extra": "iterations: 352376\ncpu: 1999.9736077371813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10604.870483475604,
            "unit": "ns/iter",
            "extra": "iterations: 66146\ncpu: 10604.719862123105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9454.458544122119,
            "unit": "ns/iter",
            "extra": "iterations: 73138\ncpu: 9454.435450791687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8647.339950926655,
            "unit": "ns/iter",
            "extra": "iterations: 80694\ncpu: 8646.86222023931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 10181.458095930502,
            "unit": "ns/iter",
            "extra": "iterations: 68800\ncpu: 10181.01162790702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20055.922224449925,
            "unit": "ns/iter",
            "extra": "iterations: 34921\ncpu: 20054.755018470587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51455.50793297811,
            "unit": "ns/iter",
            "extra": "iterations: 13488\ncpu: 51453.254744958394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42944.16908331274,
            "unit": "ns/iter",
            "extra": "iterations: 16276\ncpu: 42941.34308183835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42043.98118279477,
            "unit": "ns/iter",
            "extra": "iterations: 16740\ncpu: 42041.750298685125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41038.742383405595,
            "unit": "ns/iter",
            "extra": "iterations: 17068\ncpu: 41036.43660651493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24447.980022971504,
            "unit": "ns/iter",
            "extra": "iterations: 28733\ncpu: 24446.820728778453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41753.656734911136,
            "unit": "ns/iter",
            "extra": "iterations: 16949\ncpu: 41750.5634550714 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705962493731,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 531.239591930399,
            "unit": "ns/iter",
            "extra": "iterations: 1315854\ncpu: 531.227324612001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5150.354849999985,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5150.351000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10002.655333501083,
            "unit": "ns/iter",
            "extra": "iterations: 83913\ncpu: 10002.192747250127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14962.784719116276,
            "unit": "ns/iter",
            "extra": "iterations: 55913\ncpu: 14962.377264679057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19733.1801876505,
            "unit": "ns/iter",
            "extra": "iterations: 42206\ncpu: 19732.47405582146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24287.086442512846,
            "unit": "ns/iter",
            "extra": "iterations: 34173\ncpu: 24286.0503906593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29053.317850603922,
            "unit": "ns/iter",
            "extra": "iterations: 28957\ncpu: 29051.790586041378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33983.34541620329,
            "unit": "ns/iter",
            "extra": "iterations: 25132\ncpu: 33980.26818398855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36664.17552014135,
            "unit": "ns/iter",
            "extra": "iterations: 22590\ncpu: 36662.571934484266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 513.5934353363158,
            "unit": "ns/iter",
            "extra": "iterations: 1317478\ncpu: 513.5839080424871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.0263253257861,
            "unit": "ns/iter",
            "extra": "iterations: 1757813\ncpu: 398.0206085630263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.127647415566,
            "unit": "ns/iter",
            "extra": "iterations: 1772625\ncpu: 396.11671955433394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 403.420590075081,
            "unit": "ns/iter",
            "extra": "iterations: 1737711\ncpu: 403.41627577888363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 836.7413981227436,
            "unit": "ns/iter",
            "extra": "iterations: 834004\ncpu: 836.7218862259652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1667.8663948886294,
            "unit": "ns/iter",
            "extra": "iterations: 477841\ncpu: 1667.8125150416147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10050.502910018418,
            "unit": "ns/iter",
            "extra": "iterations: 81271\ncpu: 10049.854191532044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7446.317303476744,
            "unit": "ns/iter",
            "extra": "iterations: 109504\ncpu: 7446.0942066043335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7310.127512376905,
            "unit": "ns/iter",
            "extra": "iterations: 111299\ncpu: 7309.610149237619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6984.004183956586,
            "unit": "ns/iter",
            "extra": "iterations: 116636\ncpu: 6983.333619122751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28375.492428415433,
            "unit": "ns/iter",
            "extra": "iterations: 29056\ncpu: 28372.625275330487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 237346.284112674,
            "unit": "ns/iter",
            "extra": "iterations: 3657\ncpu: 237327.8643697019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181912.27125848268,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 181896.87500000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183883.54000847388,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 183865.19898391177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182665.36889076492,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 182654.80237994046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95784.35728411285,
            "unit": "ns/iter",
            "extra": "iterations: 9102\ncpu: 95776.80729510005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179083.4452420013,
            "unit": "ns/iter",
            "extra": "iterations: 4876\ncpu: 179067.32977850735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5480.060196065341,
            "unit": "ns/iter",
            "extra": "iterations: 148930\ncpu: 5479.480964211377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26748.091704742736,
            "unit": "ns/iter",
            "extra": "iterations: 31078\ncpu: 26746.251367526813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20162.12796463176,
            "unit": "ns/iter",
            "extra": "iterations: 40941\ncpu: 20160.63603722433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20057.80672714995,
            "unit": "ns/iter",
            "extra": "iterations: 41444\ncpu: 20056.789885146245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20248.70243354887,
            "unit": "ns/iter",
            "extra": "iterations: 40969\ncpu: 20246.92816519808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44968.47520773375,
            "unit": "ns/iter",
            "extra": "iterations: 18413\ncpu: 44964.54678759588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258786.34610813876,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 258763.42840166483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 199723.0671402501,
            "unit": "ns/iter",
            "extra": "iterations: 4364\ncpu: 199704.39963336405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199399.544315322,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 199381.6359079524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199182.86533212094,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 199169.22202001838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109267.66537645367,
            "unit": "ns/iter",
            "extra": "iterations: 8009\ncpu: 109257.9972530901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193526.01484928984,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 193503.0585106395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786811.6980197782,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 786749.0099009913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441270.0706412868,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 441228.056112225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1601.5682133936443,
            "unit": "ns/iter",
            "extra": "iterations: 498084\ncpu: 1601.4812762505942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9625.460776776534,
            "unit": "ns/iter",
            "extra": "iterations: 85842\ncpu: 9625.062323804192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6571.499423135749,
            "unit": "ns/iter",
            "extra": "iterations: 127413\ncpu: 6571.2439076075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7362.183836473138,
            "unit": "ns/iter",
            "extra": "iterations: 114183\ncpu: 7361.559952006848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7086.472351061745,
            "unit": "ns/iter",
            "extra": "iterations: 116424\ncpu: 7085.993437779153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26807.755096118268,
            "unit": "ns/iter",
            "extra": "iterations: 31004\ncpu: 26804.518771771433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245546.70047234755,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 245527.11864406752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184719.5374320375,
            "unit": "ns/iter",
            "extra": "iterations: 4782\ncpu: 184719.05060643988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185443.25535488853,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 185442.8391432171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184173.07416719425,
            "unit": "ns/iter",
            "extra": "iterations: 4773\ncpu: 184170.10266080016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94651.81657506354,
            "unit": "ns/iter",
            "extra": "iterations: 9279\ncpu: 94649.3587671089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178445.32824733958,
            "unit": "ns/iter",
            "extra": "iterations: 4981\ncpu: 178442.50150572148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.51722206859293,
            "unit": "ns/iter",
            "extra": "iterations: 3771353\ncpu: 185.51673630126962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1401.1051319273029,
            "unit": "ns/iter",
            "extra": "iterations: 500124\ncpu: 1401.080931928882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1111.0336442028577,
            "unit": "ns/iter",
            "extra": "iterations: 631669\ncpu: 1111.0317270595822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1121.114973856431,
            "unit": "ns/iter",
            "extra": "iterations: 656758\ncpu: 1121.0645321412098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 845.0985604697617,
            "unit": "ns/iter",
            "extra": "iterations: 824783\ncpu: 845.0799786125552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9411.495097454625,
            "unit": "ns/iter",
            "extra": "iterations: 75369\ncpu: 9411.370722710924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11643.22488580834,
            "unit": "ns/iter",
            "extra": "iterations: 59986\ncpu: 11643.046710899267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2642.2875370628826,
            "unit": "ns/iter",
            "extra": "iterations: 265764\ncpu: 2642.2453755963998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2609.1689493819076,
            "unit": "ns/iter",
            "extra": "iterations: 269489\ncpu: 2609.132469228782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2634.448296699304,
            "unit": "ns/iter",
            "extra": "iterations: 264780\ncpu: 2634.442178412267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5012.40816003096,
            "unit": "ns/iter",
            "extra": "iterations: 138823\ncpu: 5012.267419663908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5057.214703050396,
            "unit": "ns/iter",
            "extra": "iterations: 138121\ncpu: 5057.207086540067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1961.4609236978495,
            "unit": "ns/iter",
            "extra": "iterations: 357736\ncpu: 1961.405617550381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10205.915794703644,
            "unit": "ns/iter",
            "extra": "iterations: 68428\ncpu: 10205.892324779394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8089.212128521366,
            "unit": "ns/iter",
            "extra": "iterations: 87051\ncpu: 8089.194839806533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8145.045121171013,
            "unit": "ns/iter",
            "extra": "iterations: 86035\ncpu: 8144.932876155032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8104.568659854807,
            "unit": "ns/iter",
            "extra": "iterations: 86528\ncpu: 8104.440181213045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19039.24008322276,
            "unit": "ns/iter",
            "extra": "iterations: 36529\ncpu: 19038.443428508635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52255.22621279224,
            "unit": "ns/iter",
            "extra": "iterations: 13337\ncpu: 52254.42753242824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41698.91357877676,
            "unit": "ns/iter",
            "extra": "iterations: 16813\ncpu: 41698.197823112714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42058.232829918656,
            "unit": "ns/iter",
            "extra": "iterations: 16686\ncpu: 42058.1385592714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42026.4491771532,
            "unit": "ns/iter",
            "extra": "iterations: 16528\ncpu: 42025.88334946818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25338.273949819526,
            "unit": "ns/iter",
            "extra": "iterations: 27662\ncpu: 25338.21849468589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41639.79898507322,
            "unit": "ns/iter",
            "extra": "iterations: 16750\ncpu: 41638.98507462662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2241.5917050160433,
            "unit": "ns/iter",
            "extra": "iterations: 313129\ncpu: 2241.5873330160857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11999.990459926223,
            "unit": "ns/iter",
            "extra": "iterations: 57966\ncpu: 11999.83093537598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9409.478926894371,
            "unit": "ns/iter",
            "extra": "iterations: 74550\ncpu: 9409.45942320596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9057.25420792637,
            "unit": "ns/iter",
            "extra": "iterations: 77354\ncpu: 9057.232980841227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8136.305052475417,
            "unit": "ns/iter",
            "extra": "iterations: 86136\ncpu: 8136.285641311391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19352.286563781206,
            "unit": "ns/iter",
            "extra": "iterations: 36156\ncpu: 19352.02179444636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51339.241545530036,
            "unit": "ns/iter",
            "extra": "iterations: 13484\ncpu: 51338.50489468977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41111.086797138916,
            "unit": "ns/iter",
            "extra": "iterations: 16913\ncpu: 41109.495654230726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42581.564138430374,
            "unit": "ns/iter",
            "extra": "iterations: 16441\ncpu: 42581.46706404724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41400.298939302585,
            "unit": "ns/iter",
            "extra": "iterations: 16970\ncpu: 41399.77018267533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26046.578927939667,
            "unit": "ns/iter",
            "extra": "iterations: 27088\ncpu: 26046.518753691726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42542.6584359647,
            "unit": "ns/iter",
            "extra": "iterations: 16726\ncpu: 42541.97058471835 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}