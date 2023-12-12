window.BENCHMARK_DATA = {
  "lastUpdate": 1702421417437,
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
      }
    ]
  }
}