window.BENCHMARK_DATA = {
  "lastUpdate": 1705771625716,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-9 20.04 Debug c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702398824940,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7683.404891693573,
            "unit": "ns/iter",
            "extra": "iterations: 90807\ncpu: 7682.988095631394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94695.41302418419,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 94693.69869092524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 183074.9236880653,
            "unit": "ns/iter",
            "extra": "iterations: 4783\ncpu: 183070.56240853018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 273312.02537267195,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 273310.0222010784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 364221.58603491745,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 364212.5519534497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 442897.81108830555,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 442856.8788501029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 531560.2108141087,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 531561.8469015794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 617150.1354610125,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 617134.6808510631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 566068.8259999915,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566053.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5782.9580160559935,
            "unit": "ns/iter",
            "extra": "iterations: 120951\ncpu: 5782.752519615378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4786.59777182007,
            "unit": "ns/iter",
            "extra": "iterations: 146218\ncpu: 4786.617926657456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4816.866308206543,
            "unit": "ns/iter",
            "extra": "iterations: 145065\ncpu: 4816.734567262949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4745.016607402664,
            "unit": "ns/iter",
            "extra": "iterations: 147645\ncpu: 4744.919231941473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8424.86402436833,
            "unit": "ns/iter",
            "extra": "iterations: 83059\ncpu: 8424.68365860411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47422.15890254234,
            "unit": "ns/iter",
            "extra": "iterations: 17495\ncpu: 47419.98856816224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 205070.57002868212,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 205066.22848948342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 162098.30802726196,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 162092.5217720557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158085.94517260685,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 158083.7179250509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 158327.97024579466,
            "unit": "ns/iter",
            "extra": "iterations: 5411\ncpu: 158325.07854370735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 351377.61257605744,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 351373.0628803255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2895797.2074301997,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2895616.099071205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2383220.4198473967,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2383226.7175572542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2378401.5801526913,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2378310.4325699736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2383866.010230144,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2383741.4322250616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1399685.1689290823,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1399602.5641025607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2301264.819306843,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2301210.643564359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9877618.768518493,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 9877275.925925924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5626420.455089823,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5626178.443113769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11836551.230769375,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11836323.076923085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48054.65220122282,
            "unit": "ns/iter",
            "extra": "iterations: 17513\ncpu: 48053.22331981987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 201190.56151863548,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 201184.25123037255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163027.69150550294,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 163023.83390216122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161071.46637865968,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 161065.43951915804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162866.17982873338,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 162858.4966698389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 360759.2264779461,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 360748.7094088246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2900058.324999932,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2900027.500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2397518.5154639706,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2397412.6288659885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2389310.0775194047,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2389273.9018087727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2390840.3923077257,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2390786.666666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1412485.0578386427,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1412489.954337903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2319100.181592061,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2319056.716417897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10063591.407407137,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10062881.481481485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5589258.769230827,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 5588985.798816576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46922.58779795517,
            "unit": "ns/iter",
            "extra": "iterations: 17620\ncpu: 46919.143019296454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 203178.8790973904,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 203166.3182897856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 161264.2841509466,
            "unit": "ns/iter",
            "extra": "iterations: 5300\ncpu: 161256.8867924526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 158590.63813591108,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 158582.95581136292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 159330.6289719634,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 159322.28037383175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 351201.9610863405,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 351188.28536684345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2889115.842592631,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2888964.197530845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2393628.787723852,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2393457.8005115115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2377028.0790816457,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2376915.561224501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2399082.3282050453,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2398940.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1406151.6189758962,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1406098.945783138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2314462.5148514737,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2314287.128712858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2619.9188202530886,
            "unit": "ns/iter",
            "extra": "iterations: 266803\ncpu: 2619.7711420036385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 18908.48985195145,
            "unit": "ns/iter",
            "extra": "iterations: 37150\ncpu: 18907.391655450952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14725.308148210628,
            "unit": "ns/iter",
            "extra": "iterations: 47581\ncpu: 14724.76828986372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15148.057159557591,
            "unit": "ns/iter",
            "extra": "iterations: 47901\ncpu: 15146.940564915092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11445.9083804728,
            "unit": "ns/iter",
            "extra": "iterations: 61166\ncpu: 11445.816303175003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 79684.52790381374,
            "unit": "ns/iter",
            "extra": "iterations: 8816\ncpu: 79682.92876588015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185792.5853011462,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 185790.87291058383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45211.37028853635,
            "unit": "ns/iter",
            "extra": "iterations: 15388\ncpu: 45209.88432544857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 44987.39805950264,
            "unit": "ns/iter",
            "extra": "iterations: 15563\ncpu: 44986.97551885837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45136.29113761,
            "unit": "ns/iter",
            "extra": "iterations: 15515\ncpu: 45135.07573316174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96482.95557083949,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 96483.37001375518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86258.07963077162,
            "unit": "ns/iter",
            "extra": "iterations: 8125\ncpu: 86256.40615384607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23715.599654611662,
            "unit": "ns/iter",
            "extra": "iterations: 29532\ncpu: 23713.751185155244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115512.83110891498,
            "unit": "ns/iter",
            "extra": "iterations: 6069\ncpu: 115511.97890921129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 94071.20059355073,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 94060.48833130901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 92989.45683930932,
            "unit": "ns/iter",
            "extra": "iterations: 7530\ncpu: 92987.01195219171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 95099.41512764523,
            "unit": "ns/iter",
            "extra": "iterations: 7364\ncpu: 95093.72623574028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 174010.639421888,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 173996.6608522301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 777771.5111111169,
            "unit": "ns/iter",
            "extra": "iterations: 900\ncpu: 777714.7777777789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664450.1768060917,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 664442.5855513253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 663062.2462121235,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 663042.3295454507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 662044.6650898916,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 662001.2298959323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 420178.35191847844,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 420132.1342925655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 645819.9407407294,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 645765.3703703703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24155.348307246364,
            "unit": "ns/iter",
            "extra": "iterations: 29006\ncpu: 24153.95435427128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 117591.54957982762,
            "unit": "ns/iter",
            "extra": "iterations: 5950\ncpu: 117584.4873949569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 94719.25879805002,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 94716.98700595526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 94273.39106445765,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 94267.35298075523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 95675.95775802541,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 95671.41490088793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 172939.6125525081,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 172938.39881393773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 778315.4188889007,
            "unit": "ns/iter",
            "extra": "iterations: 900\ncpu: 778273.5555555418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 663196.9611742721,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 663191.4772727237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 662926.8823529255,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 662906.5464895709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 661361.5425330803,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661343.5727788177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421262.4681107226,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 421264.0192539108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 645276.6780442786,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 645262.8228782244 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409112926,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6907.121982022836,
            "unit": "ns/iter",
            "extra": "iterations: 101351\ncpu: 6906.964904145002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 89933.83195476393,
            "unit": "ns/iter",
            "extra": "iterations: 9551\ncpu: 89930.48895403622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 173756.12945368452,
            "unit": "ns/iter",
            "extra": "iterations: 5052\ncpu: 173746.49643705465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 259195.43108067047,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 259185.7993450432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 339563.8573667546,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 339546.4733542322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 421452.75741372636,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 421405.1045211474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 503886.65742344107,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 503868.91969959566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 595516.075319437,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 595495.2252858097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 546568.3620000164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546550.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5280.595476307215,
            "unit": "ns/iter",
            "extra": "iterations: 132635\ncpu: 5280.487804878049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4311.54890822181,
            "unit": "ns/iter",
            "extra": "iterations: 162304\ncpu: 4311.394050670343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4266.971451055156,
            "unit": "ns/iter",
            "extra": "iterations: 163929\ncpu: 4266.916164925054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4394.985764767159,
            "unit": "ns/iter",
            "extra": "iterations: 159323\ncpu: 4394.811797417822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7974.56683881017,
            "unit": "ns/iter",
            "extra": "iterations: 87524\ncpu: 7974.220785156075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46489.82149270321,
            "unit": "ns/iter",
            "extra": "iterations: 17820\ncpu: 46489.25364758702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 192338.09955257978,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 192333.78076062663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 152972.3207547203,
            "unit": "ns/iter",
            "extra": "iterations: 5618\ncpu: 152968.867924528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 151775.29790234033,
            "unit": "ns/iter",
            "extra": "iterations: 5673\ncpu: 151770.86197778975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 152462.77923923696,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 152460.4159260579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353444.8409736262,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 353433.0223123722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2750904.0324484967,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2750789.970501473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2257934.609223328,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2257807.038834952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2236081.4758453374,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2236046.3768115947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2262577.0582524394,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2262391.9902912676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1370364.8493353091,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1370294.3870014783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2195758.1843971275,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2195676.359338058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9684774.045454312,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 9684519.090909079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5553183.01183443,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 5552874.556213021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11442816.882978523,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11442367.021276591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46164.16035945365,
            "unit": "ns/iter",
            "extra": "iterations: 17916\ncpu: 46163.69167224816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 192841.42828417756,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 192835.83556747096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 160907.69623460696,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 160902.37146994943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 152747.86040339293,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 152734.99646142908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 154005.94485227473,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 153990.6714413611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 355691.62982528243,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 355678.99227955873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2766799.231453937,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2766607.1216617073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2277021.5686274003,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2276858.0882352833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2241567.4302884545,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2241425.7211538563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2282240.2019705144,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2282007.8817734118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1386346.0476899906,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1386264.2324888273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2209659.952606652,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2209507.8199052033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9867931.763636762,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 9867001.818181816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5599116.337349181,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5598963.25301205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 44508.742943655845,
            "unit": "ns/iter",
            "extra": "iterations: 18494\ncpu: 44505.472044987386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 190482.49025685544,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 190471.9441984067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 153484.68281780768,
            "unit": "ns/iter",
            "extra": "iterations: 5593\ncpu: 153470.89218666204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 149537.57727827487,
            "unit": "ns/iter",
            "extra": "iterations: 5739\ncpu: 149527.37410698715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 152860.02912966453,
            "unit": "ns/iter",
            "extra": "iterations: 5630\ncpu: 152849.28952042566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 357292.9276073464,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 357293.21063394594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2763564.7662721826,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2763282.5443786853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2270269.1674756748,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2270107.524271843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2249541.7028985005,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2249261.5942029017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2279526.7195121828,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2279463.6585365804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1405200.188163947,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1405162.0637329204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2211166.3895486663,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 2211119.0023752814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2618.088437002164,
            "unit": "ns/iter",
            "extra": "iterations: 267422\ncpu: 2618.0471315000354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 18508.716414755883,
            "unit": "ns/iter",
            "extra": "iterations: 37844\ncpu: 18507.97484409668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14556.4907270884,
            "unit": "ns/iter",
            "extra": "iterations: 48151\ncpu: 14556.056987393826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13400.686774631304,
            "unit": "ns/iter",
            "extra": "iterations: 52301\ncpu: 13400.487562379307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11045.921908756909,
            "unit": "ns/iter",
            "extra": "iterations: 63413\ncpu: 11045.733524671503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 79324.69384510368,
            "unit": "ns/iter",
            "extra": "iterations: 8806\ncpu: 79322.07585737012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 176631.4329580301,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 176622.67144319473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 42946.434785281046,
            "unit": "ns/iter",
            "extra": "iterations: 16277\ncpu: 42944.40007372348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 42868.50585351003,
            "unit": "ns/iter",
            "extra": "iterations: 16315\ncpu: 42867.54520379987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 43658.27128058124,
            "unit": "ns/iter",
            "extra": "iterations: 16024\ncpu: 43657.71342985485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 84796.02313468693,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 84791.79990310162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 82283.29391692979,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 82279.06812566213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21807.841706399886,
            "unit": "ns/iter",
            "extra": "iterations: 31669\ncpu: 21807.44260949198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104908.31837286383,
            "unit": "ns/iter",
            "extra": "iterations: 6662\ncpu: 104906.16931852236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 85059.34024745143,
            "unit": "ns/iter",
            "extra": "iterations: 8244\ncpu: 85058.12712275558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84688.97308111895,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 84687.57123802697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85459.52550646804,
            "unit": "ns/iter",
            "extra": "iterations: 8194\ncpu: 85455.4918232862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 164060.11249120926,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 164055.14412936443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 733884.996852047,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 733874.5015739818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 626362.0660125035,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 626351.293487955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 619462.6221238538,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 619443.0088495578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 628809.335420367,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 628781.3059034015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 405672.02437606815,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 405665.1189785241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 612003.4666080477,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 611981.546572942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21743.1524060846,
            "unit": "ns/iter",
            "extra": "iterations: 32210\ncpu: 21742.089413225636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 107143.57313707541,
            "unit": "ns/iter",
            "extra": "iterations: 6522\ncpu: 107139.49708678457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 85449.175054975,
            "unit": "ns/iter",
            "extra": "iterations: 8186\ncpu: 85447.69118006407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84541.95263412478,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 84542.07346544223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 86144.13695598448,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 86139.70985984802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 164308.80568608284,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 164301.0338345863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 734785.575471661,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 734765.7232704475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 620098.1992913833,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 620085.8281665184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 615413.3653168969,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 615414.8767605621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 623430.4951111274,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 623409.4222222287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 405147.8555748157,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 405122.5303292868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 609728.9886661036,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609703.9232781238 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412536189,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7131.475427416228,
            "unit": "ns/iter",
            "extra": "iterations: 97914\ncpu: 7131.384684519069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 67454.40836291718,
            "unit": "ns/iter",
            "extra": "iterations: 12675\ncpu: 67450.24063116372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128366.46584578982,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 128364.23336265021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 189088.01258680588,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 189082.57378472222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 251394.2511587418,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 251392.75782155286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 307449.2404156147,
            "unit": "ns/iter",
            "extra": "iterations: 2791\ncpu: 307448.5847366537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 368716.66990701563,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 368708.91800507193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 427618.99852579454,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 427616.7076167074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 487229.7651006945,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 487218.06487695756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5229.837387448004,
            "unit": "ns/iter",
            "extra": "iterations: 133938\ncpu: 5229.890695695018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4384.897842178044,
            "unit": "ns/iter",
            "extra": "iterations: 159420\ncpu: 4384.866390666162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4402.5038219240205,
            "unit": "ns/iter",
            "extra": "iterations: 159213\ncpu: 4402.42254087292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4387.664455344404,
            "unit": "ns/iter",
            "extra": "iterations: 159633\ncpu: 4387.697405924842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7724.782537667726,
            "unit": "ns/iter",
            "extra": "iterations: 90595\ncpu: 7724.694519565114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30082.23754943542,
            "unit": "ns/iter",
            "extra": "iterations: 27308\ncpu: 30082.111469166593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127838.29395113087,
            "unit": "ns/iter",
            "extra": "iterations: 6712\ncpu: 127836.50178784247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102408.11476390144,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 102406.1805140467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99782.10431235087,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 99782.6689976692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103013.19901335528,
            "unit": "ns/iter",
            "extra": "iterations: 8311\ncpu: 103012.81434243744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 243337.49415042822,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 243330.2506963787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1971018.34394897,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970946.921443734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1626306.2609457716,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1626285.2889667256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1649214.8579040752,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1649211.1900532816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1640996.989417974,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1640952.9100529065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 988226.174840088,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 988233.9019189784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1589787.8681507036,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1589779.2808219194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6705702.460000111,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6705620.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3709528.7023808463,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3709428.1746031675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8454303.906976627,
            "unit": "ns/iter",
            "extra": "iterations: 129\ncpu: 8454249.612403119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29731.687615060237,
            "unit": "ns/iter",
            "extra": "iterations: 27703\ncpu: 29730.198895426536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125632.07251684228,
            "unit": "ns/iter",
            "extra": "iterations: 6826\ncpu: 125630.5156753583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103083.96479635053,
            "unit": "ns/iter",
            "extra": "iterations: 8323\ncpu: 103080.8602667309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101653.55804577256,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 101653.39736748465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102151.30460730185,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 102150.41776080205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 244975.13080168716,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 244976.8776371308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1990240.3496801017,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1990177.8251599146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1645996.2477876085,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646005.4867256589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1662492.9589285995,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1662471.2500000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1652722.0601769479,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1652694.1592920355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 988827.4989384193,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 988777.9193205935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1600886.7975986507,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1600896.0548885104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6720493.870000155,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6720073.000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3709572.1349206967,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3709517.857142855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29610.225276698904,
            "unit": "ns/iter",
            "extra": "iterations: 27828\ncpu: 29609.37904269083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125325.57708089266,
            "unit": "ns/iter",
            "extra": "iterations: 6824\ncpu: 125326.2602579142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101093.04279971293,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 101088.15322771297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99296.34915489513,
            "unit": "ns/iter",
            "extra": "iterations: 8638\ncpu: 99292.00046307045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100259.98888628843,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 100253.89564810487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243746.04399888366,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 243735.56112503365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1969362.1057082203,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1969273.150105699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1618710.3982609028,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1618647.6521739138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1718455.4217926061,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1718361.3356766144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1634092.4112477845,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1634043.760984185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 980865.8735511622,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 980821.3909378285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1586583.061224547,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1586526.3605442117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2620.842060573747,
            "unit": "ns/iter",
            "extra": "iterations: 267343\ncpu: 2620.699625574649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14225.70217126662,
            "unit": "ns/iter",
            "extra": "iterations: 49280\ncpu: 14225.779220779132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10650.33531508295,
            "unit": "ns/iter",
            "extra": "iterations: 65094\ncpu: 10650.1797400682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11168.371826049999,
            "unit": "ns/iter",
            "extra": "iterations: 66203\ncpu: 11167.883630651175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9079.365971232144,
            "unit": "ns/iter",
            "extra": "iterations: 77170\ncpu: 9078.962031877658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56690.44039520758,
            "unit": "ns/iter",
            "extra": "iterations: 12348\ncpu: 56686.6294136704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127725.34190840679,
            "unit": "ns/iter",
            "extra": "iterations: 5481\ncpu: 127722.64185367635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32639.9602256825,
            "unit": "ns/iter",
            "extra": "iterations: 21446\ncpu: 32638.22624265618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32906.69452003491,
            "unit": "ns/iter",
            "extra": "iterations: 21314\ncpu: 32905.13277657887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32820.2731750779,
            "unit": "ns/iter",
            "extra": "iterations: 21316\ncpu: 32818.17414148993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67199.11925107669,
            "unit": "ns/iter",
            "extra": "iterations: 10415\ncpu: 67199.51992318769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59768.6234852395,
            "unit": "ns/iter",
            "extra": "iterations: 11718\ncpu: 59767.69073220617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19413.981400772052,
            "unit": "ns/iter",
            "extra": "iterations: 36023\ncpu: 19413.308164228656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93155.25651249274,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 93151.96703880929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75050.11386986524,
            "unit": "ns/iter",
            "extra": "iterations: 9344\ncpu: 75047.11044520557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74789.91711172655,
            "unit": "ns/iter",
            "extra": "iterations: 9362\ncpu: 74786.76564836588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74487.0911505359,
            "unit": "ns/iter",
            "extra": "iterations: 9413\ncpu: 74484.67013704553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141113.48677569724,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 141112.98203109353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 568230.258718565,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 568210.8678021075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 481252.6769972473,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 481255.2341597805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 485414.12543313566,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 485408.7318087414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 481635.61004129023,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 481625.9284731709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 320262.21966914815,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 320264.52205882577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 472814.78489554196,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472810.24949426437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19706.331067552062,
            "unit": "ns/iter",
            "extra": "iterations: 35455\ncpu: 19706.45889155287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93962.97199893901,
            "unit": "ns/iter",
            "extra": "iterations: 7464\ncpu: 93958.89603429758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76018.31595559415,
            "unit": "ns/iter",
            "extra": "iterations: 9188\ncpu: 76015.9447104909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75914.9363161318,
            "unit": "ns/iter",
            "extra": "iterations: 9186\ncpu: 75914.59830176315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76532.71818677764,
            "unit": "ns/iter",
            "extra": "iterations: 9155\ncpu: 76532.29929000445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141009.45505730953,
            "unit": "ns/iter",
            "extra": "iterations: 4973\ncpu: 141010.2955962206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 573972.1387987197,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 573960.6331168753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 479247.8711446018,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 479244.82522275817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 484462.325726136,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 484449.3084370593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 481774.40965516854,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 481765.9310344781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 321425.96093751845,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 321413.0514705851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 472170.1031693183,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 472159.06945380935 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702416018702,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7073.425937326575,
            "unit": "ns/iter",
            "extra": "iterations: 99085\ncpu: 7073.073623656456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66430.73820479003,
            "unit": "ns/iter",
            "extra": "iterations: 12823\ncpu: 66429.72003431334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 127711.74519231105,
            "unit": "ns/iter",
            "extra": "iterations: 6864\ncpu: 127702.8263403264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 188046.74929638312,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 188039.77051309816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 248533.52633111327,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 248521.93773639793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 309168.93500896083,
            "unit": "ns/iter",
            "extra": "iterations: 2785\ncpu: 309140.25134649925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 366079.2367312602,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 366058.3403538335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 424833.04001950554,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 424799.9511957051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 484260.86247216945,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 484243.207126949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5216.805983646655,
            "unit": "ns/iter",
            "extra": "iterations: 133798\ncpu: 5215.432218717758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4312.552541157987,
            "unit": "ns/iter",
            "extra": "iterations: 161816\ncpu: 4312.444999258419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4408.11529588259,
            "unit": "ns/iter",
            "extra": "iterations: 158644\ncpu: 4407.955548271604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4406.709692635804,
            "unit": "ns/iter",
            "extra": "iterations: 158997\ncpu: 4406.4523229998085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7776.247433001672,
            "unit": "ns/iter",
            "extra": "iterations: 89891\ncpu: 7776.078806554617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30053.096551471463,
            "unit": "ns/iter",
            "extra": "iterations: 27374\ncpu: 30052.50602761743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127676.43576336854,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 127670.39139527967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101126.28159697818,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 101123.60028348697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98957.24759476278,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 98955.03651327227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99925.48953827975,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 99924.86265341922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 245287.10078829905,
            "unit": "ns/iter",
            "extra": "iterations: 3552\ncpu: 245277.16779279287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1938451.5062762115,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1938370.5020920457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1608407.1224137938,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1608325.172413794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1649273.3297871621,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1649160.6382978745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1631462.8137082697,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1631396.3093145825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 985470.1222104275,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 985403.7194473973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1575650.5670628324,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1575592.869269948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6666772.90999985,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6666524.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3699936.003937007,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3699765.748031507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8371461.0307691395,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8370776.923076934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29389.885635734263,
            "unit": "ns/iter",
            "extra": "iterations: 28007\ncpu: 29388.199378726847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128973.45428656705,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 128964.62829736191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103390.80166385182,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 103389.70340004789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100217.85913348904,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 100211.5222482434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103562.93447775318,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 103561.62959381103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 246019.36071126605,
            "unit": "ns/iter",
            "extra": "iterations: 3543\ncpu: 246021.22495060804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1966015.6484209627,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1966007.7894736847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1627443.2272726696,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1627434.4405594384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1679676.6374999906,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1679673.21428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1642181.0087874222,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1642191.2126537873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 978340.2210526124,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 978321.5789473699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1584324.0374150148,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1584303.0612244948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6663293.67000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6663029.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3668971.93725489,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3668938.039215684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29523.649729265413,
            "unit": "ns/iter",
            "extra": "iterations: 27887\ncpu: 29523.48406067334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 124747.34066414375,
            "unit": "ns/iter",
            "extra": "iterations: 6866\ncpu: 124746.7521118555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100314.32095148851,
            "unit": "ns/iter",
            "extra": "iterations: 8534\ncpu: 100313.82704476283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99476.6723716374,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99477.26161369238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100936.4935935097,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 100935.2768308453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 244276.6264689349,
            "unit": "ns/iter",
            "extra": "iterations: 3574\ncpu: 244275.51762730753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1965922.065125989,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1965916.3865546207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1615440.3559027012,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1615434.3750000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1650812.738053112,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1650792.7433628333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1631245.6938052957,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1631196.8141592895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 976114.7789473805,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 976110.5263157937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1577876.8313458352,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1577859.114139701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2668.032132853718,
            "unit": "ns/iter",
            "extra": "iterations: 260979\ncpu: 2667.9399491913177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14282.573532929326,
            "unit": "ns/iter",
            "extra": "iterations: 50168\ncpu: 14282.51275713599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11427.7326191831,
            "unit": "ns/iter",
            "extra": "iterations: 61145\ncpu: 11427.69809469294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11034.036878405126,
            "unit": "ns/iter",
            "extra": "iterations: 63506\ncpu: 11033.828299688239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9205.64039926488,
            "unit": "ns/iter",
            "extra": "iterations: 76140\ncpu: 9205.415024954042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56778.63413843631,
            "unit": "ns/iter",
            "extra": "iterations: 12338\ncpu: 56776.70611120107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126273.69947625243,
            "unit": "ns/iter",
            "extra": "iterations: 5537\ncpu: 126272.09680332312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32520.376417338688,
            "unit": "ns/iter",
            "extra": "iterations: 21431\ncpu: 32518.9538518966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33601.58404695507,
            "unit": "ns/iter",
            "extra": "iterations: 20786\ncpu: 33600.115462330636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34572.687002652994,
            "unit": "ns/iter",
            "extra": "iterations: 21112\ncpu: 34572.12959454352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67178.98108315407,
            "unit": "ns/iter",
            "extra": "iterations: 10414\ncpu: 67178.61532552361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59553.108482446645,
            "unit": "ns/iter",
            "extra": "iterations: 11624\ncpu: 59553.441156229026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18973.57500676913,
            "unit": "ns/iter",
            "extra": "iterations: 36930\ncpu: 18972.92986731651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90172.8616094298,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 90170.92516658183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72900.52379960215,
            "unit": "ns/iter",
            "extra": "iterations: 9601\ncpu: 72897.02114363022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74096.693300877,
            "unit": "ns/iter",
            "extra": "iterations: 9449\ncpu: 74094.20044449174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73691.017601528,
            "unit": "ns/iter",
            "extra": "iterations: 9431\ncpu: 73691.53854310344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139585.58044603094,
            "unit": "ns/iter",
            "extra": "iterations: 5022\ncpu: 139580.22700119452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 561200.8537169971,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 561184.1726618696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 474292.8599458584,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 474267.0500676653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 483153.1831955914,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 483145.04132230993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 477836.48090040765,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 477819.7135061436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 313027.73903313663,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 313011.63831691555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 466026.9946808519,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 466009.9069148979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19131.684435668634,
            "unit": "ns/iter",
            "extra": "iterations: 36468\ncpu: 19131.008007019787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90207.21586073579,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 90203.08188265636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73195.79935342475,
            "unit": "ns/iter",
            "extra": "iterations: 9589\ncpu: 73193.97225988153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74489.73700435716,
            "unit": "ns/iter",
            "extra": "iterations: 9407\ncpu: 74488.37036249644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75619.7479700848,
            "unit": "ns/iter",
            "extra": "iterations: 9360\ncpu: 75618.68589743505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137904.34831239312,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 137899.21507064308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 558421.2920989873,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558405.9856344747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 474917.174796743,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 474908.4010840069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 484325.8723257506,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 484312.35334713187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 479123.7739726038,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 479112.9452054849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 314983.9679603005,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 314982.129963898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 467344.11615486495,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 467332.376502005 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418364890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7044.756095587576,
            "unit": "ns/iter",
            "extra": "iterations: 98883\ncpu: 7044.372642415784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66067.93944328185,
            "unit": "ns/iter",
            "extra": "iterations: 12897\ncpu: 66065.45708304257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126671.37025224204,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 126663.786604813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187075.53783319096,
            "unit": "ns/iter",
            "extra": "iterations: 4652\ncpu: 187071.8400687876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 248164.27550728124,
            "unit": "ns/iter",
            "extra": "iterations: 3499\ncpu: 248163.9611317521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 304108.29380530916,
            "unit": "ns/iter",
            "extra": "iterations: 2825\ncpu: 304107.46902654873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 369793.55402008607,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 369772.06867671676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 424160.98782863154,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 424158.9094449857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 482699.72631577123,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 482691.1357340723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5198.151126047436,
            "unit": "ns/iter",
            "extra": "iterations: 134497\ncpu: 5197.831178390593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4363.956767550854,
            "unit": "ns/iter",
            "extra": "iterations: 160250\ncpu: 4363.814040561616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4446.388800549564,
            "unit": "ns/iter",
            "extra": "iterations: 157222\ncpu: 4446.36882878986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4406.8540597257,
            "unit": "ns/iter",
            "extra": "iterations: 159161\ncpu: 4406.829562518451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7696.913118463697,
            "unit": "ns/iter",
            "extra": "iterations: 91032\ncpu: 7696.780253097821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29751.12469668002,
            "unit": "ns/iter",
            "extra": "iterations: 27611\ncpu: 29750.295172213984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126481.19604952996,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 126479.80542452853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100920.37771771532,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 100919.86132330509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98955.50786309033,
            "unit": "ns/iter",
            "extra": "iterations: 8648\ncpu: 98955.20351526371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99586.99671554519,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 99586.62756598245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 250015.46043577357,
            "unit": "ns/iter",
            "extra": "iterations: 3488\ncpu: 249992.97591743054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1954926.9320593567,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1954831.210191082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1620690.4886561886,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1620612.91448517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1651871.4511545633,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1651763.7655417435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1637238.1234567931,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1637206.3492063484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 989572.6002132079,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 989530.0639658837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1586341.8136752879,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586283.0769230768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6732233.339999992,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6732055.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3739319.5502008107,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3739199.5983935734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8457079.751938075,
            "unit": "ns/iter",
            "extra": "iterations: 129\ncpu: 8456788.372093022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29293.96501104388,
            "unit": "ns/iter",
            "extra": "iterations: 28066\ncpu: 29293.60079811872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125730.90354734784,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 125729.0823805339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102649.73386711878,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 102648.33891013435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100055.3599394059,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 100055.18527149802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101184.02865600862,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 101182.79455298962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 248944.0866209274,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 248937.87878787922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1970127.207188115,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1970103.5940803443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1634593.8441331377,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1634589.141856383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1667422.6517856994,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1667374.4642857155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1647666.6908127223,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1647587.8091872756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 983722.6853813435,
            "unit": "ns/iter",
            "extra": "iterations: 944\ncpu: 983671.0805084714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1592629.029010216,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1592627.133105798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6736805.300000128,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6736342.999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3754069.0956175933,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3753931.4741035993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29107.087919440382,
            "unit": "ns/iter",
            "extra": "iterations: 28401\ncpu: 29106.23217492334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123386.89849840773,
            "unit": "ns/iter",
            "extra": "iterations: 6926\ncpu: 123386.50014438288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99716.75206708153,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 99715.03435425671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98395.92028068437,
            "unit": "ns/iter",
            "extra": "iterations: 8693\ncpu: 98394.23674220602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99379.61037295967,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 99377.03962703946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 250679.07192373349,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 250678.4806470244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1957130.5567226107,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1956987.3949579792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1618379.696180641,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1618318.4027777815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1641836.0123238694,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1641801.9366197207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1638102.8084358608,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1638012.8295254894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 975286.617989438,
            "unit": "ns/iter",
            "extra": "iterations: 945\ncpu: 975253.2275132292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1582445.711604161,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1582349.9999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2615.200266363687,
            "unit": "ns/iter",
            "extra": "iterations: 261297\ncpu: 2615.1299096430357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14093.799565322302,
            "unit": "ns/iter",
            "extra": "iterations: 49692\ncpu: 14093.053207759733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11172.781310165758,
            "unit": "ns/iter",
            "extra": "iterations: 62847\ncpu: 11172.36304039977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11140.309992131975,
            "unit": "ns/iter",
            "extra": "iterations: 62279\ncpu: 11139.995825238084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8955.564774138777,
            "unit": "ns/iter",
            "extra": "iterations: 78079\ncpu: 8955.648765993396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57046.23554795821,
            "unit": "ns/iter",
            "extra": "iterations: 12282\ncpu: 57043.755088747734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126102.61137099047,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 126097.12126664235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32342.400221832915,
            "unit": "ns/iter",
            "extra": "iterations: 21638\ncpu: 32341.15445050375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32865.659230734855,
            "unit": "ns/iter",
            "extra": "iterations: 21293\ncpu: 32864.93683370092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32755.524248666938,
            "unit": "ns/iter",
            "extra": "iterations: 21362\ncpu: 32754.639078737466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 63817.87915490706,
            "unit": "ns/iter",
            "extra": "iterations: 10981\ncpu: 63814.24278298904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59086.3491485175,
            "unit": "ns/iter",
            "extra": "iterations: 11803\ncpu: 59084.84283656741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18404.679105862437,
            "unit": "ns/iter",
            "extra": "iterations: 37757\ncpu: 18403.901263341948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89938.33517756309,
            "unit": "ns/iter",
            "extra": "iterations: 7772\ncpu: 89939.38497169268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71880.39954620064,
            "unit": "ns/iter",
            "extra": "iterations: 9696\ncpu: 71878.49628712921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71872.67158974464,
            "unit": "ns/iter",
            "extra": "iterations: 9750\ncpu: 71868.00000000077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71746.4956949546,
            "unit": "ns/iter",
            "extra": "iterations: 9756\ncpu: 71741.29766297681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 136775.02813049915,
            "unit": "ns/iter",
            "extra": "iterations: 5119\ncpu: 136768.3141238507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 560006.7964884653,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559994.4134078209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 477207.86493862304,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 477203.2060027308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 481045.31887052546,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 481033.95316803793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 478975.79163808795,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 478968.4715558673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 316908.56247161375,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 316899.273057701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 467643.04806408903,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 467621.02803739096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18654.332826990798,
            "unit": "ns/iter",
            "extra": "iterations: 37524\ncpu: 18653.581707707006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89893.1185699609,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 89891.13940329221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72355.95555098551,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 72351.46620022626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72949.98947368468,
            "unit": "ns/iter",
            "extra": "iterations: 9595\ncpu: 72949.52579468497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73119.08030952253,
            "unit": "ns/iter",
            "extra": "iterations: 9563\ncpu: 73118.75980340803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 135637.65086122917,
            "unit": "ns/iter",
            "extra": "iterations: 5167\ncpu: 135632.4366169941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 560991.9904230152,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 560956.7438148392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 476374.21972787747,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 476362.7210884394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 481532.2949245418,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 481528.46364883106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 478648.301445289,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 478610.5987611827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 317700.16931458534,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 317692.6009986375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 468081.3819398229,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 468049.5652173917 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421416515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6911.196015983433,
            "unit": "ns/iter",
            "extra": "iterations: 101104\ncpu: 6910.734491216965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65859.09751566911,
            "unit": "ns/iter",
            "extra": "iterations: 12921\ncpu: 65856.26499496942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126178.95867530793,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 126171.64866810657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187083.97319321395,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 187082.4576452927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 246701.1008087806,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 246697.1981513576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 303389.64328728215,
            "unit": "ns/iter",
            "extra": "iterations: 2823\ncpu: 303380.41091037914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 363100.500834743,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 363084.34891485795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 421410.0800970865,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 421392.912621359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 479399.3871145226,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 479378.7444933927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5263.530080690616,
            "unit": "ns/iter",
            "extra": "iterations: 133225\ncpu: 5263.24038281104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4407.734349859107,
            "unit": "ns/iter",
            "extra": "iterations: 159104\ncpu: 4407.524637972641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4362.217727631998,
            "unit": "ns/iter",
            "extra": "iterations: 160687\ncpu: 4361.934070584434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4398.422501680365,
            "unit": "ns/iter",
            "extra": "iterations: 159197\ncpu: 4398.408889614756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7565.645904807401,
            "unit": "ns/iter",
            "extra": "iterations: 92108\ncpu: 7565.05189560081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30026.310922533572,
            "unit": "ns/iter",
            "extra": "iterations: 27457\ncpu: 30025.206686819405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126103.44887117668,
            "unit": "ns/iter",
            "extra": "iterations: 6777\ncpu: 126094.68791500648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102179.74074958026,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 102176.79637144896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98969.96314269309,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 98964.56383593305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100020.12364526473,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 100016.21023190797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 245929.32160944588,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 245914.15306696703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1983081.0555556272,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1982993.3760683744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1624399.0631578167,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1624304.3859649103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1642431.280918692,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1642396.9964664269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1641752.8088496043,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1641663.185840709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 985845.2803838032,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 985815.4584221772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1588841.9571917185,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1588795.0342465728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6682877.039999653,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6682608.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3732967.734126958,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3732784.1269841357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8401369.907692503,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8400819.230769228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29396.408125941292,
            "unit": "ns/iter",
            "extra": "iterations: 27886\ncpu: 29395.657319084854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125712.21383647948,
            "unit": "ns/iter",
            "extra": "iterations: 6837\ncpu: 125712.27146409194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102468.61804726264,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 102466.7581761764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100371.4868712811,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 100371.03512661962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101070.1835629339,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 101068.20911338739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 247264.966496311,
            "unit": "ns/iter",
            "extra": "iterations: 3522\ncpu: 247258.31913685286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2001715.6559140526,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2001701.7204300982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1648348.907801419,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1648357.9787234124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1663566.820788607,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1663551.9713261586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1644370.685412924,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1644381.3708260017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 999821.7426470523,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 998739.0756302557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1594157.7106164454,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1594130.8219178112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6676505.639999846,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6676406.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3694192.1309523736,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3694114.6825396814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29386.195484718944,
            "unit": "ns/iter",
            "extra": "iterations: 28171\ncpu: 29385.903943772046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 124877.59237791524,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 124872.40979568184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100464.8938384213,
            "unit": "ns/iter",
            "extra": "iterations: 8553\ncpu: 100464.67905997942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99271.88903046653,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 99269.30383412536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99836.51412231247,
            "unit": "ns/iter",
            "extra": "iterations: 8568\ncpu: 99836.00606909434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 246244.68002257968,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 246234.25507900663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2003214.2344086757,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2003203.010752681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1629084.2220279735,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1629028.6713286666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1624804.3531469086,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1624801.3986014083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1633485.5236427095,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1633390.7180385266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 970147.7546972615,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 970122.3382045904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1583108.3214285409,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1583063.7755102036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2596.423293747587,
            "unit": "ns/iter",
            "extra": "iterations: 269626\ncpu: 2596.3556927002433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14272.944594457575,
            "unit": "ns/iter",
            "extra": "iterations: 49255\ncpu: 14272.421074002617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10728.628272251975,
            "unit": "ns/iter",
            "extra": "iterations: 65322\ncpu: 10728.384005388725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11207.846266986688,
            "unit": "ns/iter",
            "extra": "iterations: 62550\ncpu: 11207.598721023196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9019.515089322964,
            "unit": "ns/iter",
            "extra": "iterations: 77472\ncpu: 9019.31407476242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56486.10085594118,
            "unit": "ns/iter",
            "extra": "iterations: 12384\ncpu: 56486.4260335917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 128944.53510226613,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 128940.9618573797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32788.43284770685,
            "unit": "ns/iter",
            "extra": "iterations: 21347\ncpu: 32788.035789572314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32766.159816498373,
            "unit": "ns/iter",
            "extra": "iterations: 21362\ncpu: 32765.972287238932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32803.086502435275,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 32803.26433121034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66691.64062351629,
            "unit": "ns/iter",
            "extra": "iterations: 10521\ncpu: 66687.78633209797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59638.402983800035,
            "unit": "ns/iter",
            "extra": "iterations: 11730\ncpu: 59637.09292412614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18441.302943344326,
            "unit": "ns/iter",
            "extra": "iterations: 37984\ncpu: 18440.87773799479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89112.16463179319,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 89109.31756843513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72169.1752216079,
            "unit": "ns/iter",
            "extra": "iterations: 9702\ncpu: 72169.57328385868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71556.21236586523,
            "unit": "ns/iter",
            "extra": "iterations: 9785\ncpu: 71553.26520183953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72479.9335541324,
            "unit": "ns/iter",
            "extra": "iterations: 9662\ncpu: 72478.36886772982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138646.62924900383,
            "unit": "ns/iter",
            "extra": "iterations: 5060\ncpu: 138643.55731225194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 572572.0326797742,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 572547.0588235304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 484714.9750692566,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484699.3767313051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 483168.2358620771,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 483157.6551724138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 479442.73990418727,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 479437.98767967214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 315765.20459665265,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 315767.14736367663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 470797.3627186882,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470791.11709286337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18644.22646378131,
            "unit": "ns/iter",
            "extra": "iterations: 37591\ncpu: 18644.06639887205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89591.44211743599,
            "unit": "ns/iter",
            "extra": "iterations: 7783\ncpu: 89591.26300912186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72712.61097256887,
            "unit": "ns/iter",
            "extra": "iterations: 9624\ncpu: 72710.27639235153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 71845.64496616622,
            "unit": "ns/iter",
            "extra": "iterations: 9754\ncpu: 71844.55607955693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72870.6155210156,
            "unit": "ns/iter",
            "extra": "iterations: 9587\ncpu: 72868.41556274092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137657.9945033363,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137658.75539850866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 570669.4184339433,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 570657.4225122425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 481099.5928473132,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 481102.33837689896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 479552.19257221214,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 479532.18707015505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 479505.81861741765,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 479503.2854209496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 317341.2583559181,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 317334.01084011013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 470441.7740417014,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 470422.46133154 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421903759,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6826.569825877155,
            "unit": "ns/iter",
            "extra": "iterations: 101882\ncpu: 6825.801417325926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63492.094914494446,
            "unit": "ns/iter",
            "extra": "iterations: 13391\ncpu: 63489.12702561423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 121330.60257832582,
            "unit": "ns/iter",
            "extra": "iterations: 7214\ncpu: 121321.87413362905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 179432.6482205217,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 179419.7695947336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 237123.70905587697,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 237103.27552986506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 292096.90653574077,
            "unit": "ns/iter",
            "extra": "iterations: 2953\ncpu: 292084.08398239093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 349553.07587314164,
            "unit": "ns/iter",
            "extra": "iterations: 2491\ncpu: 349522.6013649135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 405597.2807262408,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 405575.3724394785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 463481.7361702372,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 463455.8510638299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5079.340305314461,
            "unit": "ns/iter",
            "extra": "iterations: 137694\ncpu: 5079.15668075588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4289.147407763689,
            "unit": "ns/iter",
            "extra": "iterations: 164279\ncpu: 4288.864675338904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4322.653324070704,
            "unit": "ns/iter",
            "extra": "iterations: 162662\ncpu: 4322.283631087774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4228.047933774323,
            "unit": "ns/iter",
            "extra": "iterations: 165374\ncpu: 4227.808482590972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7574.624466970781,
            "unit": "ns/iter",
            "extra": "iterations: 92631\ncpu: 7574.091826710265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30278.701206060618,
            "unit": "ns/iter",
            "extra": "iterations: 27196\ncpu: 30276.691425209585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127580.94212171072,
            "unit": "ns/iter",
            "extra": "iterations: 6721\ncpu: 127571.07573277768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100624.34873900544,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 100621.27859237554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98384.1213553077,
            "unit": "ns/iter",
            "extra": "iterations: 8677\ncpu: 98383.27763051781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100351.75377236836,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 100344.90583694004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 243553.33631285196,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 243537.65363128515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1884820.32793513,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1884718.8259109266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1559395.4252100207,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1559292.4369747858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1586699.5869190614,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1586602.753872637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1572740.8192567409,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1572627.3648648658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 961982.4643226822,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 961940.8479834549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1527806.6293245924,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1527662.2734761126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6514309.519999984,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6513826.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3641207.5039062854,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3641052.734374997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8089778.463235324,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 8089561.764705904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29618.47246573886,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 29617.26840090176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125792.73611931768,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 125789.16125221532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101345.45509264288,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 101343.07801251099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99782.76280042132,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 99783.62939742248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100526.12069777818,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 100524.50495049535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 246464.48058940025,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 246461.74553697868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1899267.8918367317,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1899182.244897968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1572486.0101180284,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1572479.595278239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1605143.7869415444,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1605069.9312714715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1581932.0945946374,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1581903.5472972947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 955193.040041086,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 955146.3039014367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1534491.9638752316,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1534504.597701148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6531613.519999837,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6531292.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3637400.6679537767,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3637318.146718135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29472.94150706921,
            "unit": "ns/iter",
            "extra": "iterations: 27935\ncpu: 29472.36799713618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 122623.68990246904,
            "unit": "ns/iter",
            "extra": "iterations: 6972\ncpu: 122624.62707974763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 99996.6325912121,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 99992.1902319617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97918.75730491457,
            "unit": "ns/iter",
            "extra": "iterations: 8727\ncpu: 97916.23696573843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98800.84825037538,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 98795.87712206978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 242798.84604678152,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 242794.90534521197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1890670.4645029928,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1890513.5902636983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1558653.9496644456,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1558531.7114093958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1583036.307032586,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1582930.5317324195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1564262.5303029825,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1564206.2289562298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 946037.0753563734,
            "unit": "ns/iter",
            "extra": "iterations: 982\ncpu: 945959.4704684302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1518144.4315961257,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1518048.697068404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2617.235148394974,
            "unit": "ns/iter",
            "extra": "iterations: 268035\ncpu: 2617.083962915297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13489.615049138269,
            "unit": "ns/iter",
            "extra": "iterations: 49757\ncpu: 13489.01059147456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10500.465158832869,
            "unit": "ns/iter",
            "extra": "iterations: 66674\ncpu: 10500.05399406065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10475.148539325779,
            "unit": "ns/iter",
            "extra": "iterations: 66750\ncpu: 10475.246441947565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8932.328015380252,
            "unit": "ns/iter",
            "extra": "iterations: 78539\ncpu: 8931.633965291143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56375.59193548584,
            "unit": "ns/iter",
            "extra": "iterations: 12400\ncpu: 56373.20161290281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 115380.852718281,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 115373.47611202608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 31267.565564983637,
            "unit": "ns/iter",
            "extra": "iterations: 22390\ncpu: 31265.395265743748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31911.71388736438,
            "unit": "ns/iter",
            "extra": "iterations: 21876\ncpu: 31909.978972389894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 31579.81095828629,
            "unit": "ns/iter",
            "extra": "iterations: 22175\ncpu: 31578.28635851187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 64629.76735598577,
            "unit": "ns/iter",
            "extra": "iterations: 10832\ncpu: 64628.2403988188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 56885.700343025565,
            "unit": "ns/iter",
            "extra": "iterations: 12244\ncpu: 56883.2979418483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17801.364061983135,
            "unit": "ns/iter",
            "extra": "iterations: 39301\ncpu: 17801.524134246065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 85901.95797083588,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 85898.57860556319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 69190.94404421153,
            "unit": "ns/iter",
            "extra": "iterations: 10133\ncpu: 69186.90417447989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 68804.56998330112,
            "unit": "ns/iter",
            "extra": "iterations: 10181\ncpu: 68802.04302131373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 69271.50208292148,
            "unit": "ns/iter",
            "extra": "iterations: 10082\ncpu: 69269.54969252188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 132798.1159281924,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 132797.74637127598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 536005.8758620824,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 535939.5402298764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 458888.93446921714,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 458878.636959369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 459248.2688524454,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 459226.36065574246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 457386.39161754545,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 457350.4911591378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 300980.9746127341,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 300959.1652323594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 446456.6472843406,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 446425.8785942573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18014.471695686476,
            "unit": "ns/iter",
            "extra": "iterations: 38881\ncpu: 18013.356137959403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 86494.58446698419,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 86490.00742023325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 69808.67652052197,
            "unit": "ns/iter",
            "extra": "iterations: 10013\ncpu: 69805.93228802495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 69848.62395376309,
            "unit": "ns/iter",
            "extra": "iterations: 10036\ncpu: 69845.19728975675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 70383.6928880377,
            "unit": "ns/iter",
            "extra": "iterations: 9941\ncpu: 70377.1250377224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 131034.58964292314,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 131026.36006730075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 536639.7475133565,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 536630.6044376424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 453865.77590672346,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 453837.6943005156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 457592.27207322593,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 457558.404185741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 457685.7949052864,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 457655.3886348745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 302475.49740708724,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 302460.4580812453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 447228.4095846624,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 447232.332268373 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422476945,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6975.497679257858,
            "unit": "ns/iter",
            "extra": "iterations: 99968\ncpu: 6975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64629.25250455618,
            "unit": "ns/iter",
            "extra": "iterations: 13176\ncpu: 64624.552216150565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 124214.39215963494,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 124209.11406736486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 184481.95615513733,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 184445.48903878586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 242041.27645241658,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 242029.72214426048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 297366.67613438546,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 297355.6979563559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 356007.11437908123,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 355999.87745098054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 413377.23657958803,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 413357.1971496438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 471121.0779220825,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 471110.227272728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5230.867210953126,
            "unit": "ns/iter",
            "extra": "iterations: 134243\ncpu: 5230.756910974879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4375.929341983353,
            "unit": "ns/iter",
            "extra": "iterations: 159996\ncpu: 4375.764394109853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4349.007080921904,
            "unit": "ns/iter",
            "extra": "iterations: 155347\ncpu: 4349.025085775718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4381.596317511234,
            "unit": "ns/iter",
            "extra": "iterations: 159566\ncpu: 4381.378865171783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7771.795920660607,
            "unit": "ns/iter",
            "extra": "iterations: 88985\ncpu: 7771.632297578262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30514.55020184395,
            "unit": "ns/iter",
            "extra": "iterations: 27001\ncpu: 30512.92174363916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126917.31742031507,
            "unit": "ns/iter",
            "extra": "iterations: 6745\ncpu: 126914.67753891766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101810.61466366175,
            "unit": "ns/iter",
            "extra": "iterations: 8429\ncpu: 101805.01838889538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100091.64989493218,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 100089.29488676165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100711.04942378702,
            "unit": "ns/iter",
            "extra": "iterations: 8417\ncpu: 100707.68682428426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 251522.29403285927,
            "unit": "ns/iter",
            "extra": "iterations: 3469\ncpu: 251519.40040357457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1940998.841995832,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1940893.762993767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1596387.4837050077,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596342.0240137235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1598558.3464837158,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598467.066895365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1605899.7326388417,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1605905.034722219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 978322.1210526144,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 978290.8421052608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1554683.4496644316,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1554667.785234899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6570826.299999909,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6570535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3669602.4370079283,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3669615.3543307134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8272422.499999696,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8271703.030303028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29975.31046865859,
            "unit": "ns/iter",
            "extra": "iterations: 27568\ncpu: 29973.204439930385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 125881.60052716595,
            "unit": "ns/iter",
            "extra": "iterations: 6829\ncpu: 125875.64797188455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103754.65261505217,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 103753.48472037712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100938.1028443809,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 100938.48142924305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103142.66461427377,
            "unit": "ns/iter",
            "extra": "iterations: 8283\ncpu: 103137.26910539596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 251304.4151270235,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 251302.71362586544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1946973.8744769709,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1946785.1464435058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1608224.9948186434,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1608169.4300518208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1613798.372616943,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1613726.6897746902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1612720.5492228034,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1612656.1312607962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 958520.1958763377,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 958515.7731958743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1557748.148581025,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1557717.6961602655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6550678.6499997815,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6550528.99999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3704308.842519747,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3704116.5354330824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29413.351124097488,
            "unit": "ns/iter",
            "extra": "iterations: 28067\ncpu: 29413.079417109166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 124596.85296696442,
            "unit": "ns/iter",
            "extra": "iterations: 6842\ncpu: 124594.50453083972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100331.55252002348,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 100323.61045690077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 101212.13567251225,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 101209.30994152032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99490.21196861728,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 99489.62407776069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 250648.04221711349,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 250643.45203905774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1931145.0663899903,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1931057.6763485481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1581257.1084746127,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1581227.6271186378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1591224.0631399308,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1591191.8088737242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1590221.8074957456,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1590177.5127768326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 956319.3244078279,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 956257.3635427435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1546338.847429443,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1546294.527363182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2740.487482913429,
            "unit": "ns/iter",
            "extra": "iterations: 253853\ncpu: 2740.236672404876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14250.38121558106,
            "unit": "ns/iter",
            "extra": "iterations: 49211\ncpu: 14249.665725142793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11440.303304772979,
            "unit": "ns/iter",
            "extra": "iterations: 61275\ncpu: 11439.254181966531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10964.682768216135,
            "unit": "ns/iter",
            "extra": "iterations: 63969\ncpu: 10964.229548687636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9052.171437055065,
            "unit": "ns/iter",
            "extra": "iterations: 77457\ncpu: 9052.222523464627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57297.958285525965,
            "unit": "ns/iter",
            "extra": "iterations: 12202\ncpu: 57294.35338469078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 124458.79315239124,
            "unit": "ns/iter",
            "extra": "iterations: 5637\ncpu: 124451.78286322446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 31998.454387647558,
            "unit": "ns/iter",
            "extra": "iterations: 21891\ncpu: 31995.523274405106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32022.086369463672,
            "unit": "ns/iter",
            "extra": "iterations: 21848\ncpu: 32020.62431343846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32262.40407204422,
            "unit": "ns/iter",
            "extra": "iterations: 21709\ncpu: 32260.44037035387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66085.62438563028,
            "unit": "ns/iter",
            "extra": "iterations: 10580\ncpu: 66082.44801512368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58268.29341217688,
            "unit": "ns/iter",
            "extra": "iterations: 12007\ncpu: 58260.697926209476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18491.67166349439,
            "unit": "ns/iter",
            "extra": "iterations: 37824\ncpu: 18490.81535532995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 89496.75307377041,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 89496.02971311485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72389.56239634918,
            "unit": "ns/iter",
            "extra": "iterations: 9648\ncpu: 72385.12645107896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72401.86807278343,
            "unit": "ns/iter",
            "extra": "iterations: 9672\ncpu: 72398.50082712936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73301.15017815818,
            "unit": "ns/iter",
            "extra": "iterations: 9542\ncpu: 73294.31984908787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138382.32464969176,
            "unit": "ns/iter",
            "extra": "iterations: 5067\ncpu: 138377.28438918412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 554782.5603174705,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 554786.0317460302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 470093.0241772918,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470073.7407656211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 472520.2921727397,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 472502.63157895097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 470993.98252688086,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470988.64247311966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 311667.5756097494,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 311658.5809312645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 459916.82434211916,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 459906.6447368341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19028.95653005969,
            "unit": "ns/iter",
            "extra": "iterations: 36577\ncpu: 19028.274598791806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91171.61038791288,
            "unit": "ns/iter",
            "extra": "iterations: 7682\ncpu: 91172.05154907433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74622.16552379141,
            "unit": "ns/iter",
            "extra": "iterations: 9479\ncpu: 74621.63730351365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73542.6650577143,
            "unit": "ns/iter",
            "extra": "iterations: 9530\ncpu: 73539.48583420823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74456.7037037017,
            "unit": "ns/iter",
            "extra": "iterations: 9369\ncpu: 74454.94716618728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138576.6621086018,
            "unit": "ns/iter",
            "extra": "iterations: 5046\ncpu: 138571.0265556891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 558649.4168655588,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 558652.1081941127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 470745.93135936547,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470740.2422611082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 470870.6184387258,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470854.97981156694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 471247.40363882034,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471235.51212938165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 314798.5244723966,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 314795.37494387437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 460800.9841897198,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 460794.4005270086 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453345227,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6962.483475479711,
            "unit": "ns/iter",
            "extra": "iterations: 101304\ncpu: 6962.569098949696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65163.103778644174,
            "unit": "ns/iter",
            "extra": "iterations: 13047\ncpu: 65163.18693952633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125002.72876516773,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 125001.45610278372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 184628.89479277434,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 184625.56854410205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 244631.2563589596,
            "unit": "ns/iter",
            "extra": "iterations: 3499\ncpu: 244623.49242640752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300132.8453970349,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 300123.9634574844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 360238.9046636407,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 360234.13124226173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 418642.1484149905,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 418631.36407300667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 478031.1005435044,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 478023.6413043477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5221.359942196067,
            "unit": "ns/iter",
            "extra": "iterations: 132863\ncpu: 5221.188743291953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4357.882893077865,
            "unit": "ns/iter",
            "extra": "iterations: 162595\ncpu: 4357.918140164217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4366.564506397664,
            "unit": "ns/iter",
            "extra": "iterations: 159116\ncpu: 4366.586641192585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4419.866763735464,
            "unit": "ns/iter",
            "extra": "iterations: 160024\ncpu: 4419.8095285707195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7586.767984786143,
            "unit": "ns/iter",
            "extra": "iterations: 91494\ncpu: 7586.803506240857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30757.587084296323,
            "unit": "ns/iter",
            "extra": "iterations: 26371\ncpu: 30757.491183497023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130758.84097158452,
            "unit": "ns/iter",
            "extra": "iterations: 6546\ncpu: 130760.67827681049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105037.80122399383,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 105038.93512851902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102054.56432573934,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 102052.64099201166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102775.12533204857,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 102774.18497947356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 250502.54081925264,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 250500.40103122327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1954212.8833334025,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1954195.8333333314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1599631.405498227,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1599608.2474226814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1617099.0721830565,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1617085.2112676052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1590163.5000000051,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1590164.1868512116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 968370.539665947,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 968328.0793319425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1561833.8552187895,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1561780.4713804745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6538326.499999698,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6538369.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3593582.513513588,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3593513.5135135166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8103998.333333361,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 8103871.01449275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30788.723544039996,
            "unit": "ns/iter",
            "extra": "iterations: 26941\ncpu: 30788.504509854785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128417.88677877389,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 128417.22238329914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105121.97654899834,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 105120.61219451994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103107.82664565154,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 103107.68578009421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103494.36894273173,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 103492.9270680379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 252294.00549609677,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 252293.52039340444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1973112.7801268692,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1973076.1099365724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1610564.5476603135,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1610551.4731369186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1630791.1912280673,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1630776.1403508815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1610179.2738301803,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1610138.4748700217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 957051.4814049437,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 957029.2355371917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1554886.0488215548,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1554855.892255885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6588135.040000225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6587976.000000069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3598842.980694998,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3598768.339768327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30825.340608611936,
            "unit": "ns/iter",
            "extra": "iterations: 27078\ncpu: 30824.761799246662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129427.11595744081,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 129423.00911854132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104596.24591563386,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 104583.40648622312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102055.89246672508,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 102053.54087452401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103385.66771348934,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 103382.81193380855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 249278.2026913448,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 249274.40426128302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1967607.3619247687,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1967562.9707112964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1599477.685567001,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1599451.8900343631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1614016.9325259372,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1613752.0761245633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1613599.5354058638,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1613558.8946459512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 957366.9174407067,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 957355.7275541761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1556808.932998379,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1556785.7621440531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2646.486978907014,
            "unit": "ns/iter",
            "extra": "iterations: 260654\ncpu: 2646.474253224607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14567.40199017425,
            "unit": "ns/iter",
            "extra": "iterations: 48036\ncpu: 14567.501457240416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11379.648208791039,
            "unit": "ns/iter",
            "extra": "iterations: 60769\ncpu: 11379.52574503442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11301.921967769758,
            "unit": "ns/iter",
            "extra": "iterations: 64845\ncpu: 11301.633125144479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9222.820593918002,
            "unit": "ns/iter",
            "extra": "iterations: 75566\ncpu: 9222.622608051182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57225.66416387546,
            "unit": "ns/iter",
            "extra": "iterations: 12253\ncpu: 57223.6431894232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126124.15529753447,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 126123.74818577683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 31897.499727939,
            "unit": "ns/iter",
            "extra": "iterations: 22054\ncpu: 31897.71016595657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32038.207538452985,
            "unit": "ns/iter",
            "extra": "iterations: 21649\ncpu: 32038.001755277444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 31983.577366993642,
            "unit": "ns/iter",
            "extra": "iterations: 21747\ncpu: 31982.604497172233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65943.71263068894,
            "unit": "ns/iter",
            "extra": "iterations: 10617\ncpu: 65943.59988697307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 52738.154438404206,
            "unit": "ns/iter",
            "extra": "iterations: 13248\ncpu: 52736.96407004852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18335.1620896141,
            "unit": "ns/iter",
            "extra": "iterations: 38744\ncpu: 18334.776997728586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 87961.39057408329,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 87959.62647280043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71483.01459046052,
            "unit": "ns/iter",
            "extra": "iterations: 9938\ncpu: 71481.58583215986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71124.15935144186,
            "unit": "ns/iter",
            "extra": "iterations: 9683\ncpu: 71124.57915935105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71485.40823662301,
            "unit": "ns/iter",
            "extra": "iterations: 9737\ncpu: 71483.9991783917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 135844.1173963598,
            "unit": "ns/iter",
            "extra": "iterations: 5162\ncpu: 135841.0693529627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 560283.085737167,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 560271.1538461591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 470964.6624834792,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 470954.2932628794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 471633.43542936404,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 471627.65382014425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 469827.9649831647,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 469826.7340067275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 305880.526153852,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 305878.9890109848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 454988.27278688777,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 454982.81967212976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18594.839671010417,
            "unit": "ns/iter",
            "extra": "iterations: 37448\ncpu: 18594.611194189296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88896.63417737436,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 88897.17521313272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71064.58977517724,
            "unit": "ns/iter",
            "extra": "iterations: 9741\ncpu: 71062.27286726129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72543.39815005129,
            "unit": "ns/iter",
            "extra": "iterations: 9730\ncpu: 72541.81911613491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71008.2468875518,
            "unit": "ns/iter",
            "extra": "iterations: 9960\ncpu: 71006.85742971857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 133526.4824932682,
            "unit": "ns/iter",
            "extra": "iterations: 5198\ncpu: 133523.43208926579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 553720.3118195672,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 553723.7947122889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 465366.44176707364,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 465351.6064257077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 470394.05157402664,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 470388.01071668044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 469188.64654597046,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469182.4279007375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 304177.3698510181,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 304170.42068360973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 450461.1581334945,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 450463.3830200905 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479557546,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6907.8275141599,
            "unit": "ns/iter",
            "extra": "iterations: 100988\ncpu: 6907.419693428923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64298.05329106312,
            "unit": "ns/iter",
            "extra": "iterations: 13248\ncpu: 64294.96527777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 123836.50571146591,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 123832.37907206322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185687.47069942992,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 185682.48267170758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 242421.65629380042,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 242413.73703392202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 298030.8932273632,
            "unit": "ns/iter",
            "extra": "iterations: 2894\ncpu: 298001.624049758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 356131.67936118477,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 356114.2096642099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 413414.03568031266,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 413391.8648905808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 472913.16314362356,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 472843.5772357731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5154.933567851579,
            "unit": "ns/iter",
            "extra": "iterations: 135597\ncpu: 5154.604452900872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4354.346673800126,
            "unit": "ns/iter",
            "extra": "iterations: 160739\ncpu: 4354.153627930997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4380.992135303185,
            "unit": "ns/iter",
            "extra": "iterations: 159701\ncpu: 4380.787847289619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4350.890364747981,
            "unit": "ns/iter",
            "extra": "iterations: 161262\ncpu: 4350.486785479523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7642.0925756988045,
            "unit": "ns/iter",
            "extra": "iterations: 92076\ncpu: 7641.770928363522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29771.17053832729,
            "unit": "ns/iter",
            "extra": "iterations: 26991\ncpu: 29769.467600311178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127226.10696371042,
            "unit": "ns/iter",
            "extra": "iterations: 6778\ncpu: 127221.34848037772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101045.69618913172,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 101037.61467889874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98654.58304498087,
            "unit": "ns/iter",
            "extra": "iterations: 8670\ncpu: 98648.74279123425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99645.68785991266,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 99641.45022916925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 246224.15750709106,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 246207.47875354174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1933494.4158004436,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1933338.8773388802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1606129.2556131592,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606029.7063903285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1624438.2779720607,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1624306.8181818184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1606102.6770293978,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606023.8341968905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 980886.8554852298,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 980802.4261603352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1565160.7558921839,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1565102.0202020167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6623540.7600004235,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6622921.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3680437.8818898187,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3680187.007874028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8360700.77272752,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8359867.424242406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29550.400606278497,
            "unit": "ns/iter",
            "extra": "iterations: 28040\ncpu: 29549.51497860206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124923.9285088919,
            "unit": "ns/iter",
            "extra": "iterations: 6854\ncpu: 124915.2903414063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101823.851086564,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 101817.52760954811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99766.47405166079,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 99758.78519897579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101434.705492425,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 101430.97774621143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 247339.41934567504,
            "unit": "ns/iter",
            "extra": "iterations: 3515\ncpu: 247325.09246088157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1959909.0569620945,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1959791.9831223616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1613962.5407278556,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1613842.4610052037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1630261.7162872371,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1630175.481611213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1612325.0467127583,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1612256.0553633282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 964042.0239583373,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 964038.2291666638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1562287.3712374314,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1562150.1672240843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6597144.589999857,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6597124.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3810530.7632653587,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810321.632653052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29374.529066666986,
            "unit": "ns/iter",
            "extra": "iterations: 28125\ncpu: 29372.696888888942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125472.36846715675,
            "unit": "ns/iter",
            "extra": "iterations: 6850\ncpu: 125461.89781021808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100235.3421206058,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 100235.06357167823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99078.27268561299,
            "unit": "ns/iter",
            "extra": "iterations: 8728\ncpu: 99073.73968835974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99411.76501971386,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 99408.13036418405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 245038.57476111324,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 245025.3232152899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1947331.4801670283,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1947259.2901879027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1603310.8487972734,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1603168.556701025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1623041.1343804523,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1622956.893542755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1601880.3339070764,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1601787.6075731404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 965179.98652851,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 965152.5388601021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1557247.572864368,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1557153.7688442247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2615.0587860211854,
            "unit": "ns/iter",
            "extra": "iterations: 268176\ncpu: 2614.8708310959964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13890.74566714979,
            "unit": "ns/iter",
            "extra": "iterations: 50371\ncpu: 13889.9525520637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10899.544541525507,
            "unit": "ns/iter",
            "extra": "iterations: 64322\ncpu: 10899.375019433426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10885.493933226498,
            "unit": "ns/iter",
            "extra": "iterations: 64367\ncpu: 10884.955023536979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9066.867402100926,
            "unit": "ns/iter",
            "extra": "iterations: 77324\ncpu: 9066.33516114019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56921.710325202475,
            "unit": "ns/iter",
            "extra": "iterations: 12300\ncpu: 56916.86991869911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126368.58461260959,
            "unit": "ns/iter",
            "extra": "iterations: 5537\ncpu: 126361.02582625952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32401.466187382513,
            "unit": "ns/iter",
            "extra": "iterations: 21560\ncpu: 32400.32467532444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32702.300135659218,
            "unit": "ns/iter",
            "extra": "iterations: 21377\ncpu: 32700.76250175436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32706.02542452057,
            "unit": "ns/iter",
            "extra": "iterations: 21436\ncpu: 32703.111587983287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66291.09124432741,
            "unit": "ns/iter",
            "extra": "iterations: 10576\ncpu: 66287.25416036301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58930.76735585877,
            "unit": "ns/iter",
            "extra": "iterations: 11898\ncpu: 58930.71104387308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18439.29043866458,
            "unit": "ns/iter",
            "extra": "iterations: 38070\ncpu: 18438.368794325936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88389.89893149037,
            "unit": "ns/iter",
            "extra": "iterations: 7955\ncpu: 88383.59522313002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71294.02223801559,
            "unit": "ns/iter",
            "extra": "iterations: 9848\ncpu: 71284.81925264011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71040.8914822715,
            "unit": "ns/iter",
            "extra": "iterations: 9897\ncpu: 71034.2932201676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72462.08624756018,
            "unit": "ns/iter",
            "extra": "iterations: 9751\ncpu: 72460.69121115809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 138494.57870738223,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 138485.36875495443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 556435.5529037642,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 556404.7732696949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 470950.09139787,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470916.26344086096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 470525.3501344238,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470508.26612903544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 470502.2963709856,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470478.83064516436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 312346.47050938936,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 312321.4477211773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 461101.19395135273,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 461082.4457593641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18560.292589842902,
            "unit": "ns/iter",
            "extra": "iterations: 37732\ncpu: 18559.209689388223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88757.96726718797,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 88753.88226338549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71858.8237469204,
            "unit": "ns/iter",
            "extra": "iterations: 9736\ncpu: 71854.70419063224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 70592.33225871787,
            "unit": "ns/iter",
            "extra": "iterations: 9926\ncpu: 70585.3717509565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71334.10028507479,
            "unit": "ns/iter",
            "extra": "iterations: 9822\ncpu: 71332.31521075135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138673.8380782839,
            "unit": "ns/iter",
            "extra": "iterations: 5058\ncpu: 138669.25662317124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 556657.2738853659,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 556638.853503181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 470565.9724832369,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 470534.56375838345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 470560.48352389,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 470549.3611297884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 470063.0503355908,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 470040.9395973161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 313289.95523722575,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 313271.0832587279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 460798.00857516256,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 460779.68337730155 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488563076,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6984.90388588862,
            "unit": "ns/iter",
            "extra": "iterations: 100183\ncpu: 6984.315702264856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66307.27069019289,
            "unit": "ns/iter",
            "extra": "iterations: 12808\ncpu: 66304.6611492817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 127227.02512343824,
            "unit": "ns/iter",
            "extra": "iterations: 6886\ncpu: 127217.80424048798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187890.85609808168,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 187883.11464831143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 247222.29138127554,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 247211.4726027396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 304920.08875531243,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 304913.1188118813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 364816.18860016274,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 364812.4895222131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 423398.3675255099,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 423378.51239669416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 484504.9632925342,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 484481.42380422726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5271.277830036066,
            "unit": "ns/iter",
            "extra": "iterations: 132887\ncpu: 5270.965557202745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4432.514838464998,
            "unit": "ns/iter",
            "extra": "iterations: 158170\ncpu: 4432.294366820506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4460.348008239088,
            "unit": "ns/iter",
            "extra": "iterations: 157298\ncpu: 4460.082772826103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4416.317627078257,
            "unit": "ns/iter",
            "extra": "iterations: 158387\ncpu: 4416.236180999702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7595.7686135267495,
            "unit": "ns/iter",
            "extra": "iterations: 92097\ncpu: 7595.459135476731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30965.20345945312,
            "unit": "ns/iter",
            "extra": "iterations: 26536\ncpu: 30963.351673198686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132777.8084908519,
            "unit": "ns/iter",
            "extra": "iterations: 6454\ncpu: 132771.4905484968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107582.21806775172,
            "unit": "ns/iter",
            "extra": "iterations: 7970\ncpu: 107576.34880803023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 103818.58508186835,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 103814.4572468161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104504.47173058234,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 104498.53736479825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 250328.63341000475,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 250319.37895342088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1969395.789473741,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1969281.0526315814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1624314.8406305641,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1624241.1558668988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1608970.314136123,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1608898.2547993017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1626723.6929824671,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1626683.8596491227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 982123.6184909214,
            "unit": "ns/iter",
            "extra": "iterations: 941\ncpu: 982080.9776833173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1576328.4957555765,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1576312.5636672338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6690886.270000079,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6690627.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3863900.399177035,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3863793.8271604986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8324026.666666771,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8323472.7272727275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30625.624186149467,
            "unit": "ns/iter",
            "extra": "iterations: 27032\ncpu: 30624.197247706357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128309.64863649299,
            "unit": "ns/iter",
            "extra": "iterations: 6674\ncpu: 128307.55169313766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104673.2431276691,
            "unit": "ns/iter",
            "extra": "iterations: 8185\ncpu: 104671.38668295625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102925.58631452665,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 102923.10924369724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104983.56047450371,
            "unit": "ns/iter",
            "extra": "iterations: 8177\ncpu: 104981.03216338565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 253750.135860063,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 253745.4810495634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1981348.6673773588,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1981314.285714272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1636274.1757470055,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1636246.9244288215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1618064.09895831,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1618032.118055557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1633186.8333332678,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1633147.5438596425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 977287.8808016585,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 977285.7594936722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1583614.8251273793,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1583554.8387096687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6681588.989999909,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6681451.000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3928694.7560974457,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3922398.7804877944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30645.24447744561,
            "unit": "ns/iter",
            "extra": "iterations: 26935\ncpu: 30643.850009281676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129489.0433930975,
            "unit": "ns/iter",
            "extra": "iterations: 6637\ncpu: 129479.53894832029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104171.53841493282,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 104165.18419777068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103550.10030138439,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 103545.15973478038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104143.08205252417,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 104139.08991891598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 250727.18430131627,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 250712.53594019578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1983675.8382978665,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1983568.9361702057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1629449.743455512,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1629373.1239092425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1602408.7852233418,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1602344.5017182096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1623355.106271712,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1623273.3449477325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 971105.0199161632,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 971066.3522012556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1570862.7770270465,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1570797.6351351298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2692.573478040048,
            "unit": "ns/iter",
            "extra": "iterations: 259928\ncpu: 2692.5086947154464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14352.597984669088,
            "unit": "ns/iter",
            "extra": "iterations: 48528\ncpu: 14351.722716782051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11124.874199009646,
            "unit": "ns/iter",
            "extra": "iterations: 63203\ncpu: 11124.068477762126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11385.489910168179,
            "unit": "ns/iter",
            "extra": "iterations: 61448\ncpu: 11385.182593412328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9207.766619724098,
            "unit": "ns/iter",
            "extra": "iterations: 75979\ncpu: 9207.090117006006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57924.10777502184,
            "unit": "ns/iter",
            "extra": "iterations: 12090\ncpu: 57921.38130686496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127055.86036774961,
            "unit": "ns/iter",
            "extra": "iterations: 5493\ncpu: 127052.92190059996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32583.08245262858,
            "unit": "ns/iter",
            "extra": "iterations: 21479\ncpu: 32582.33623539293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32322.084234858303,
            "unit": "ns/iter",
            "extra": "iterations: 21630\ncpu: 32321.69671752173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32641.607463105498,
            "unit": "ns/iter",
            "extra": "iterations: 21412\ncpu: 32640.77152998324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67400.79890046708,
            "unit": "ns/iter",
            "extra": "iterations: 10368\ncpu: 67396.68209876507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59322.8720752821,
            "unit": "ns/iter",
            "extra": "iterations: 11796\ncpu: 59319.63377416048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18844.917734122548,
            "unit": "ns/iter",
            "extra": "iterations: 37160\ncpu: 18843.96393971992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90811.39860049187,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 90808.06012699225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73643.03122707973,
            "unit": "ns/iter",
            "extra": "iterations: 9543\ncpu: 73641.09818715345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72652.20641012207,
            "unit": "ns/iter",
            "extra": "iterations: 9641\ncpu: 72650.5030598485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73506.22834067565,
            "unit": "ns/iter",
            "extra": "iterations: 9534\ncpu: 73502.06628907044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139313.6980944778,
            "unit": "ns/iter",
            "extra": "iterations: 5038\ncpu: 139306.9868995631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 564172.4614148223,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 564151.2057877845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 480443.59315065946,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 480416.23287670553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 479172.4972714624,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 479148.0218281066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 478954.1656399772,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478948.0492813185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 312705.8384064422,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 312697.53804834833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 468056.7258172124,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 468027.41827885556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19176.291921378383,
            "unit": "ns/iter",
            "extra": "iterations: 36479\ncpu: 19175.71479481326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92368.45161715885,
            "unit": "ns/iter",
            "extra": "iterations: 7575\ncpu: 92367.36633663245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74941.72481283337,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 74937.82887700474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73971.99894525715,
            "unit": "ns/iter",
            "extra": "iterations: 9481\ncpu: 73967.32412192842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74843.49058622302,
            "unit": "ns/iter",
            "extra": "iterations: 9348\ncpu: 74840.65040650379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138506.36171055262,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 138497.2876658087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 565315.0387409187,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 565307.4253430152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 477090.23585547536,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 477077.9141104344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 475602.2539036179,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 475583.978275631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 478182.6454046387,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 478152.5377229137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 317202.6296966801,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 317182.5260298766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 468787.8653717573,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 468776.6242464826 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490845321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6922.94390246295,
            "unit": "ns/iter",
            "extra": "iterations: 100967\ncpu: 6923.013459843315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65208.77146570419,
            "unit": "ns/iter",
            "extra": "iterations: 13079\ncpu: 65208.563345821545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125180.27215641477,
            "unit": "ns/iter",
            "extra": "iterations: 7007\ncpu: 125177.19423433715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185046.85146621763,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 185046.5363365916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 245016.89776899427,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 245012.9059587687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300976.7541958207,
            "unit": "ns/iter",
            "extra": "iterations: 2860\ncpu: 300972.20279720303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 373461.5188249963,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 373440.1323955316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 418174.7827553038,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 418143.2080924858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 477017.38389923226,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 476986.85651697754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5345.475044926466,
            "unit": "ns/iter",
            "extra": "iterations: 132438\ncpu: 5345.174345731586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4456.513055693432,
            "unit": "ns/iter",
            "extra": "iterations: 157326\ncpu: 4456.417883884414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4460.536576190578,
            "unit": "ns/iter",
            "extra": "iterations: 156837\ncpu: 4460.522708289505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4396.1056003137455,
            "unit": "ns/iter",
            "extra": "iterations: 158134\ncpu: 4395.859208013457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7711.316827431587,
            "unit": "ns/iter",
            "extra": "iterations: 90816\ncpu: 7711.223793164194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30332.453966501478,
            "unit": "ns/iter",
            "extra": "iterations: 27165\ncpu: 30331.293944413723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 128720.63274800962,
            "unit": "ns/iter",
            "extra": "iterations: 6663\ncpu: 128713.6425033768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 103587.36666667022,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 103581.21103117494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99567.16093422836,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 99564.1529165696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100368.10203123427,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 100362.86251027357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 246894.97398925113,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 246874.89397794707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1978589.5872339455,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1978446.3829787206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1625086.1733799542,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1625006.6549912407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1630338.259194392,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1630229.4220665502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1632246.1075837468,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1632135.6261022908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 978395.5736841826,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 978328.631578949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1581902.9829931601,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1581845.0680272095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6696098.349999602,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6695835.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3650793.682353045,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3650503.5294117685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8340627.832060779,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 8339934.351145027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29775.90246184969,
            "unit": "ns/iter",
            "extra": "iterations: 27784\ncpu: 29774.29095882512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126049.44966740883,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 126038.92091648189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102698.82337444341,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 102692.61166327444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101175.73705979741,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 101166.47364689241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102243.91808346039,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 102240.31625252617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 248418.77543459137,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 248397.06469079657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1998831.354077257,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1998696.1373390558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1635133.4638447615,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1635011.6402116504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1643962.7358155898,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1643892.5531914835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1649378.0070670838,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1649237.1024734986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 992175.6012526315,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 992136.3256784953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1627520.8012422563,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1627408.0745341592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6692549.839999628,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6691970.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3715380.0912697823,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3714886.507936508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29792.799183585794,
            "unit": "ns/iter",
            "extra": "iterations: 27682\ncpu: 29791.030272379005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125995.91987179122,
            "unit": "ns/iter",
            "extra": "iterations: 6864\ncpu: 125987.90792540803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101383.96943127635,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 101379.69194312772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99910.91668611423,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 99901.68028004676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100790.42174474441,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 100783.96148878765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 246797.69278642428,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 246775.81329561473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1976464.6610169706,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1976390.2542372802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1622512.9146341034,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1622348.9547038341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1623158.1707317068,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1623054.7038327572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1644534.9333333813,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1644472.9824561484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 962337.3009307566,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 962295.553257503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1577059.1047296566,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1577010.9797297316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2673.7000642802714,
            "unit": "ns/iter",
            "extra": "iterations: 261356\ncpu: 2673.725110577146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13976.209779179639,
            "unit": "ns/iter",
            "extra": "iterations: 50086\ncpu: 13976.34468713812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10916.768430883669,
            "unit": "ns/iter",
            "extra": "iterations: 64240\ncpu: 10916.402552926487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11240.057798223366,
            "unit": "ns/iter",
            "extra": "iterations: 63912\ncpu: 11239.895481286712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9065.413794877186,
            "unit": "ns/iter",
            "extra": "iterations: 77768\ncpu: 9064.93673490375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56540.15369696991,
            "unit": "ns/iter",
            "extra": "iterations: 12375\ncpu: 56540.01616161648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127105.3238077888,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 127104.38660356673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32244.079063970177,
            "unit": "ns/iter",
            "extra": "iterations: 21666\ncpu: 32243.93058247944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32162.153874454583,
            "unit": "ns/iter",
            "extra": "iterations: 21745\ncpu: 32161.011726834044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32638.703223107033,
            "unit": "ns/iter",
            "extra": "iterations: 21501\ncpu: 32638.30984605365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 60275.81504970981,
            "unit": "ns/iter",
            "extra": "iterations: 11668\ncpu: 60136.44154953737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59063.3999324473,
            "unit": "ns/iter",
            "extra": "iterations: 11842\ncpu: 59061.89832798495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18413.110865851308,
            "unit": "ns/iter",
            "extra": "iterations: 38055\ncpu: 18412.936539219503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88822.05440020055,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 88816.4088257676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71556.01451793949,
            "unit": "ns/iter",
            "extra": "iterations: 9781\ncpu: 71556.73244044578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70593.37515139146,
            "unit": "ns/iter",
            "extra": "iterations: 9908\ncpu: 70592.59184497321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71969.42764578802,
            "unit": "ns/iter",
            "extra": "iterations: 9723\ncpu: 71967.97284788672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 137019.0781618197,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 137016.10369206406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 561900.2343498932,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 561863.6436597134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 475281.16632583097,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 475249.3524199055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 474927.572591621,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474915.80732700136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 475693.11948406155,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 475672.50509165495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 313051.77583891834,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 313054.6756152109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 465084.1415282471,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 465038.20598006714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18555.501124429135,
            "unit": "ns/iter",
            "extra": "iterations: 37797\ncpu: 18554.983199724997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89100.2080417334,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 89100.94159562212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71917.34512546692,
            "unit": "ns/iter",
            "extra": "iterations: 9724\ncpu: 71914.2842451674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 70797.04427558114,
            "unit": "ns/iter",
            "extra": "iterations: 9870\ncpu: 70789.73657548169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71909.54563166763,
            "unit": "ns/iter",
            "extra": "iterations: 9752\ncpu: 71906.39868744822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 134868.5791304374,
            "unit": "ns/iter",
            "extra": "iterations: 5175\ncpu: 134861.95169082127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 562364.0844051496,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 562327.250803863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 473037.0993243198,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 473024.4594594582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 474036.5626269654,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 474015.84292484797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 473978.9004739466,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 473928.0974949169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 312472.22798392316,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 312454.2691104166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 465484.07185630273,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 465445.6420492284 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573932230,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7105.323222363312,
            "unit": "ns/iter",
            "extra": "iterations: 98375\ncpu: 7105.11918678526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65611.15061404005,
            "unit": "ns/iter",
            "extra": "iterations: 12947\ncpu: 65609.1758708581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126496.7197341826,
            "unit": "ns/iter",
            "extra": "iterations: 6922\ncpu: 126496.90840797458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 186220.08747855408,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 186220.58319039454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 246784.77685477692,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 246783.27126897735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 303573.99189854594,
            "unit": "ns/iter",
            "extra": "iterations: 2839\ncpu: 303566.5375132088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 362720.8695289839,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 362719.75823259697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 424881.54505812493,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 424880.3294573645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 480060.5236784183,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 480061.4537444933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5217.739978275408,
            "unit": "ns/iter",
            "extra": "iterations: 134408\ncpu: 5217.670079161949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4350.842003865723,
            "unit": "ns/iter",
            "extra": "iterations: 160909\ncpu: 4350.81257108055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4375.241710083481,
            "unit": "ns/iter",
            "extra": "iterations: 159501\ncpu: 4375.129936489436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4363.398947020502,
            "unit": "ns/iter",
            "extra": "iterations: 160307\ncpu: 4363.40209722594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7716.405194919755,
            "unit": "ns/iter",
            "extra": "iterations: 90781\ncpu: 7716.271025875447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30257.333885210177,
            "unit": "ns/iter",
            "extra": "iterations: 27180\ncpu: 30257.343635025783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125579.04966936147,
            "unit": "ns/iter",
            "extra": "iterations: 6805\ncpu: 125567.3475385747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100374.1304755219,
            "unit": "ns/iter",
            "extra": "iterations: 8538\ncpu: 100371.50386507394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102700.91396365315,
            "unit": "ns/iter",
            "extra": "iterations: 8694\ncpu: 102692.99516908203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100642.34568629708,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 100641.34308981462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 244038.8392607247,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 244034.05208624972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1960166.0651259783,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1960147.0588235266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1619402.9073425985,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619355.5944055961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1633785.714788751,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1633788.2042253518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1611923.5659722225,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1611895.1388888871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 975252.2189473654,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 975238.4210526313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1574642.4957555912,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1574602.2071307271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6593430.269999771,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6593383.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3725259.8853754145,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3725152.9644268816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8259863.803030327,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8259839.393939389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29473.61264438203,
            "unit": "ns/iter",
            "extra": "iterations: 27791\ncpu: 29472.994854449287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127783.00476119858,
            "unit": "ns/iter",
            "extra": "iterations: 6721\ncpu: 127780.2112780837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102511.07914527706,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 102508.24877641155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100506.45694590172,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 100504.3579857464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101988.53608861669,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 101986.10052405909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 247743.56002265672,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 247739.86409966083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1974666.6183368543,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1974587.846481871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1628331.2499999348,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1628280.244755239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1651811.0444050261,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1651723.2682060483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1625048.0509665296,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1625001.7574692504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 971831.4879832631,
            "unit": "ns/iter",
            "extra": "iterations: 957\ncpu: 971793.7304075296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1580692.9505961686,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1580638.8415672944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6616698.419999807,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6616469.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3681665.702380937,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3681557.142857126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29637.166005219962,
            "unit": "ns/iter",
            "extra": "iterations: 27969\ncpu: 29635.86470735451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 123170.28894616252,
            "unit": "ns/iter",
            "extra": "iterations: 6984\ncpu: 123164.81958762894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100900.71289337742,
            "unit": "ns/iter",
            "extra": "iterations: 8516\ncpu: 100897.11131986901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99051.53862164689,
            "unit": "ns/iter",
            "extra": "iterations: 8648\ncpu: 99048.67021276552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99529.42423887317,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 99524.69555035129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243673.09032437528,
            "unit": "ns/iter",
            "extra": "iterations: 3576\ncpu: 243662.08053691327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1957926.8652631454,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1957818.9473684174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1614188.2963605039,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1614121.317157712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1638252.88266197,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1638187.3905429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1610171.1692573938,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1610102.7633851548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 967740.6170655472,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 967701.5608740906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1567723.477310898,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1567646.5546218525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2677.296216232631,
            "unit": "ns/iter",
            "extra": "iterations: 261829\ncpu: 2677.2233022315945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14044.02975378844,
            "unit": "ns/iter",
            "extra": "iterations: 49876\ncpu: 14043.427700697675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11271.403182938311,
            "unit": "ns/iter",
            "extra": "iterations: 62081\ncpu: 11270.92347094922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10976.710954140923,
            "unit": "ns/iter",
            "extra": "iterations: 63848\ncpu: 10976.34381656435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9105.474499112888,
            "unit": "ns/iter",
            "extra": "iterations: 76664\ncpu: 9105.277574872202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56438.85220404502,
            "unit": "ns/iter",
            "extra": "iterations: 12409\ncpu: 56437.44056733003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127018.8939338942,
            "unit": "ns/iter",
            "extra": "iterations: 5506\ncpu: 127011.89611333137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33390.67002320178,
            "unit": "ns/iter",
            "extra": "iterations: 21550\ncpu: 33389.68909512732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32847.7146281752,
            "unit": "ns/iter",
            "extra": "iterations: 19606\ncpu: 32846.36845863532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32693.631173918948,
            "unit": "ns/iter",
            "extra": "iterations: 21441\ncpu: 32691.91735460052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66522.01199314432,
            "unit": "ns/iter",
            "extra": "iterations: 10506\ncpu: 66518.91300209421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59231.56866898338,
            "unit": "ns/iter",
            "extra": "iterations: 11803\ncpu: 59227.7387104965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18504.674882565487,
            "unit": "ns/iter",
            "extra": "iterations: 37894\ncpu: 18503.966327123293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88841.41908872401,
            "unit": "ns/iter",
            "extra": "iterations: 7879\ncpu: 88839.94161695638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72267.56312377026,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 72264.71859244797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72279.29394158415,
            "unit": "ns/iter",
            "extra": "iterations: 9689\ncpu: 72276.07596243212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72449.96909879909,
            "unit": "ns/iter",
            "extra": "iterations: 9676\ncpu: 72446.08309218599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142939.6965026577,
            "unit": "ns/iter",
            "extra": "iterations: 5061\ncpu: 142932.58249357805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 557956.8557768689,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 557940.3187250949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 473474.6991869889,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 473443.97018969816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 477906.9993173524,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477874.334470993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 472727.420661726,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 472702.8359216712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 311450.1431747332,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 311437.08314806724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 462767.456258431,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 462763.25706595526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19051.542658863167,
            "unit": "ns/iter",
            "extra": "iterations: 36745\ncpu: 19051.23690298027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89284.77967397419,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 89285.04839531325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72887.85276647958,
            "unit": "ns/iter",
            "extra": "iterations: 9597\ncpu: 72887.43357299172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72872.50957206853,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 72871.06981981997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73466.89133165865,
            "unit": "ns/iter",
            "extra": "iterations: 9552\ncpu: 73466.33165829089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 136110.17518958673,
            "unit": "ns/iter",
            "extra": "iterations: 5143\ncpu: 136107.0775811773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 561074.6514056551,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 561075.9036144542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 474968.97418474325,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 474964.26630434854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 477873.52832769556,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477876.45051194914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 475045.513917193,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 475046.57162254245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 312391.11903700215,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 312387.8733838566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 465077.19215425634,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 465078.05851063307 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771624113,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7317.353914413702,
            "unit": "ns/iter",
            "extra": "iterations: 96464\ncpu: 7317.221968817384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68199.4566437419,
            "unit": "ns/iter",
            "extra": "iterations: 12651\ncpu: 68197.20180222907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 130951.72203288913,
            "unit": "ns/iter",
            "extra": "iterations: 6749\ncpu: 130943.4582901171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 196062.07257346355,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 196049.53250222627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 260145.67198581036,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 260126.86170212756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 312407.43654436053,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 312392.92813455674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 386419.62163374707,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 386402.96229802526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 441215.89533094707,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 441217.1883016935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 504848.19017701154,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 504849.800114221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5553.424967059814,
            "unit": "ns/iter",
            "extra": "iterations: 127504\ncpu: 5553.377148952189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4633.679299284368,
            "unit": "ns/iter",
            "extra": "iterations: 153386\ncpu: 4633.579987743336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4507.486925453742,
            "unit": "ns/iter",
            "extra": "iterations: 149183\ncpu: 4507.433822888662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4730.283368012795,
            "unit": "ns/iter",
            "extra": "iterations: 148503\ncpu: 4730.313192326077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8133.127982076005,
            "unit": "ns/iter",
            "extra": "iterations: 87481\ncpu: 8133.0334586938825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30998.521286074658,
            "unit": "ns/iter",
            "extra": "iterations: 25815\ncpu: 30998.65582025957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131830.8118733018,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 131829.57186057614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106290.96845077325,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 106291.33316965376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 103125.77586624288,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 103123.16452629039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104336.586748884,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 104336.1262241566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 253756.18108185922,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 253752.35753543495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2043947.1419213752,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2043935.371179036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1653055.4366471516,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1653024.7563352848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1656334.673664107,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1656320.6106870237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1665701.6302681742,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1665679.8850574708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1018911.7374371887,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 1018896.3567839174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1625048.6961805816,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1625031.5972222274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6935093.660000008,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6934822.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3836156.1951219523,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3836056.9105691095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8586822.789062865,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 8586361.71874999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30875.948294543105,
            "unit": "ns/iter",
            "extra": "iterations: 26767\ncpu: 30873.624238801527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 131485.59718181225,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 131395.28258538814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106733.24325655855,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 106725.00307919763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 104949.64837965708,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 104943.52469959969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 107603.18966363411,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 107497.82715443244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256144.643819563,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 256137.14118336272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2032500.2733188157,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2032483.947939258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1665828.4113475475,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1665756.9148936146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1670391.6583630096,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1670323.309608532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1684722.7424511877,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1684649.3783303688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1010427.5632432144,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 1010413.5135135128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1621398.0789022085,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1621281.9897084066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6921672.390000139,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6920532.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3783095.441767125,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3782944.979919685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30107.615073140532,
            "unit": "ns/iter",
            "extra": "iterations: 27413\ncpu: 30106.668369021994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129776.23007770762,
            "unit": "ns/iter",
            "extra": "iterations: 6563\ncpu: 129773.01538930327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104760.9486175678,
            "unit": "ns/iter",
            "extra": "iterations: 8174\ncpu: 104756.37386836349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102234.28494751938,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 102231.26192748068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103264.3894711485,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 103259.67955667971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 250185.42361708242,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 250177.7586701064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2080506.019438424,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2080426.78185745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1658466.5470692883,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1658441.2078152779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1645726.920913892,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1645660.4569420072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1655863.7566607718,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1655870.1598579108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1011664.1521739088,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 1011630.6521739097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1598719.8537037221,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1598731.4814814816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2733.28540695289,
            "unit": "ns/iter",
            "extra": "iterations: 247289\ncpu: 2733.168478986126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14823.861163268628,
            "unit": "ns/iter",
            "extra": "iterations: 45269\ncpu: 14823.724844816652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11424.296921274188,
            "unit": "ns/iter",
            "extra": "iterations: 61454\ncpu: 11424.070036124565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11059.675374068438,
            "unit": "ns/iter",
            "extra": "iterations: 63892\ncpu: 11059.231202654515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9422.436459304614,
            "unit": "ns/iter",
            "extra": "iterations: 75070\ncpu: 9422.248568003186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58062.715005785416,
            "unit": "ns/iter",
            "extra": "iterations: 12102\ncpu: 58061.1551809623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129512.35338773696,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 129510.78003416276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33101.28530383302,
            "unit": "ns/iter",
            "extra": "iterations: 20883\ncpu: 33100.46449264957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33095.83186118315,
            "unit": "ns/iter",
            "extra": "iterations: 19133\ncpu: 33095.531281032745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33431.47086598992,
            "unit": "ns/iter",
            "extra": "iterations: 20543\ncpu: 33430.61870223485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66300.96200400192,
            "unit": "ns/iter",
            "extra": "iterations: 9501\ncpu: 66301.38932743952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61629.20934075268,
            "unit": "ns/iter",
            "extra": "iterations: 11498\ncpu: 61627.83962428279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19084.081636501116,
            "unit": "ns/iter",
            "extra": "iterations: 37128\ncpu: 19083.446455505236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92511.04051255854,
            "unit": "ns/iter",
            "extra": "iterations: 7726\ncpu: 92509.9404607812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73873.39753498632,
            "unit": "ns/iter",
            "extra": "iterations: 9574\ncpu: 73871.00480468043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72395.11567786714,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 72395.52060995903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73621.18058313569,
            "unit": "ns/iter",
            "extra": "iterations: 9569\ncpu: 73620.50370989628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139613.8096824758,
            "unit": "ns/iter",
            "extra": "iterations: 5102\ncpu: 139607.11485691686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 590150.0155102107,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 590143.7551020484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 487855.7435529958,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 487817.69340974186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 501490.1379999515,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501493.89999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 499305.7657784119,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 499300.6311360444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 324655.6343675487,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 324657.1837708859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 484275.3518518548,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 484246.4387464331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19289.359954777025,
            "unit": "ns/iter",
            "extra": "iterations: 34496\ncpu: 19289.210343228144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93240.6558970371,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 93239.7557131608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76519.80619826066,
            "unit": "ns/iter",
            "extra": "iterations: 9422\ncpu: 76517.79876883922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76083.51464706135,
            "unit": "ns/iter",
            "extra": "iterations: 9251\ncpu: 76082.89914603805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76593.53132750801,
            "unit": "ns/iter",
            "extra": "iterations: 9273\ncpu: 76591.46985872876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139771.46071851446,
            "unit": "ns/iter",
            "extra": "iterations: 5066\ncpu: 139769.54204500595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 587960.9551867074,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 587925.8921161827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 502349.8919999838,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502319.99999999744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 496835.39608119,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 496820.2239328297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 510388.41799999087,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510359.9999999915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 336098.46037736995,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 336079.386792448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 493174.6504787986,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 493150.27359781123 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}