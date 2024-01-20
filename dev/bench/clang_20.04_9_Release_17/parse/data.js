window.BENCHMARK_DATA = {
  "lastUpdate": 1705774044722,
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
      }
    ]
  }
}