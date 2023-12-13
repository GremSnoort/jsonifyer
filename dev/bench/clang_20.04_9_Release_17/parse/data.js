window.BENCHMARK_DATA = {
  "lastUpdate": 1702493614665,
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
      }
    ]
  }
}