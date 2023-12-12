window.BENCHMARK_DATA = {
  "lastUpdate": 1702398825365,
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
      }
    ]
  }
}