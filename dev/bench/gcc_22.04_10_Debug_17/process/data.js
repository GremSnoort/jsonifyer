window.BENCHMARK_DATA = {
  "lastUpdate": 1702409100342,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Debug c++-17": [
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
        "date": 1702397909220,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14934.315199795581,
            "unit": "ns/iter",
            "extra": "iterations: 46948\ncpu: 14933.963108119622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146665.25250778053,
            "unit": "ns/iter",
            "extra": "iterations: 5782\ncpu: 146659.65063991703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279411.6994219693,
            "unit": "ns/iter",
            "extra": "iterations: 3114\ncpu: 279395.8574181117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 407964.2061320767,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 407951.6037735849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 542706.4306071864,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 542679.5539033455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 542695.9270000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542642.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 647260.6300000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647229.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 758716.1889699742,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 758685.0770478507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 863295.84703634,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 863226.8642447412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11852.376695970255,
            "unit": "ns/iter",
            "extra": "iterations: 59037\ncpu: 11852.136795568882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9906.157553316161,
            "unit": "ns/iter",
            "extra": "iterations: 70757\ncpu: 9905.859490933759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9756.249727767748,
            "unit": "ns/iter",
            "extra": "iterations: 71630\ncpu: 9756.08962725115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9816.579144954589,
            "unit": "ns/iter",
            "extra": "iterations: 71388\ncpu: 9816.520983918861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16292.260344907538,
            "unit": "ns/iter",
            "extra": "iterations: 43258\ncpu: 16291.386564334929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62082.03690607829,
            "unit": "ns/iter",
            "extra": "iterations: 13575\ncpu: 62081.35543278075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 332158.5480247837,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 332152.28505034855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 262471.1450968369,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 262467.72210267396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 257634.38229072248,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 257621.4868540349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 257279.66164507446,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 257276.98101837945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 565892.4624352376,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 565874.4170984457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4592262.901477823,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4591987.6847290695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3781971.493927138,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3781883.8056680225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3731342.579999932,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3731159.599999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3738148.5863453825,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3737889.558232931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2157492.364269156,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2157386.3109048745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3647784.643137205,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3647551.764705888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14422145.864865124,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14421721.621621635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6186374.699999818,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6186077.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17747532.499999844,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17746576.66666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68168.91027588966,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 68167.51699320281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 361698.8151578952,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 361689.38947368413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 291127.49949169316,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 291113.4191799408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 287562.99363271135,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 287554.0549597865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 285087.9583055353,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 285074.7831887921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 580331.3092369336,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 580298.9290495301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4652340.155000019,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4652234.499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3803117.7714285557,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802897.142857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3774989.0688258493,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3774795.546558711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3779936.1129033067,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3779820.5645161327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2187794.235849057,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2187702.594339615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3685663.600790527,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3685519.3675889336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14796401.904109253,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14795852.054794485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6303062.320000094,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6302920.000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60629.06880000015,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60626.57000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 316848.48283499276,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 316844.4813584352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 265185.0854572709,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 264829.8950524737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 257742.28055389045,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 257732.0891029482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 254617.85845971512,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 254601.90306274005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553627.6704689405,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 553571.0392902396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4628539.512437801,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4628268.65671641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3776456.8987853294,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3776069.635627525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3740522.816000066,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3740285.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3736563.2088355036,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3736434.1365461834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2150960.854503483,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2150778.752886836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3645158.394531167,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3644965.2343750196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5689.121997177689,
            "unit": "ns/iter",
            "extra": "iterations: 122593\ncpu: 5688.498527648402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37697.97222969703,
            "unit": "ns/iter",
            "extra": "iterations: 18581\ncpu: 37698.20784672517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30062.65817711794,
            "unit": "ns/iter",
            "extra": "iterations: 23205\ncpu: 30060.939452704206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29086.344728392483,
            "unit": "ns/iter",
            "extra": "iterations: 23987\ncpu: 29085.79647308971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23488.491615391322,
            "unit": "ns/iter",
            "extra": "iterations: 29578\ncpu: 23487.06471025721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 148020.81033022635,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 148014.92379339342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 304702.9747496681,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 304664.99782324757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75139.0584952273,
            "unit": "ns/iter",
            "extra": "iterations: 9317\ncpu: 75134.24922185163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74833.94860311337,
            "unit": "ns/iter",
            "extra": "iterations: 9378\ncpu: 74829.44124546842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75166.54391602406,
            "unit": "ns/iter",
            "extra": "iterations: 9336\ncpu: 75163.58183376108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 154141.6591109173,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 154143.0897887314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132431.0466262287,
            "unit": "ns/iter",
            "extra": "iterations: 5276\ncpu: 132424.2039423781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43355.05972738669,
            "unit": "ns/iter",
            "extra": "iterations: 16140\ncpu: 43354.56009913306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210962.25474253666,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 210952.9659741037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172912.34034133557,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 172913.28221617456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174891.8277153552,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 174880.9987515599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173789.77028032212,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 173787.09997519158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 296769.34011874796,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 296744.614079729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1286883.235727341,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1286850.6445672172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1078103.7623456102,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1078084.2592592544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1074497.5875968875,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1074490.542635659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1081881.7600619274,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1081857.1207430216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 674137.8511047229,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 674115.1777137367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1069554.141984724,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1069559.2366412056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44192.46577886027,
            "unit": "ns/iter",
            "extra": "iterations: 15619\ncpu: 44191.45271784314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213559.0420988285,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 213555.003050641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177636.7769328332,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 177629.45500633883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176355.788902905,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 176356.92307692565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178030.67750127442,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 178024.5556119856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297132.1106400914,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 297130.22467147175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1289137.632352865,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1289145.2205882387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1082536.982972077,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1082529.5665634822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1075750.546296241,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1075756.944444447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1074162.053763385,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1074138.4024577474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 679344.4922480454,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 679331.6860465095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1070384.5603053328,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1070368.8549618293 ns\nthreads: 1"
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
        "date": 1702409098533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14973.349306028265,
            "unit": "ns/iter",
            "extra": "iterations: 46976\ncpu: 14972.394414168937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144386.36106375413,
            "unit": "ns/iter",
            "extra": "iterations: 5866\ncpu: 144377.173542448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 274593.4218009496,
            "unit": "ns/iter",
            "extra": "iterations: 3165\ncpu: 274572.38546603476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 404996.9145962812,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 404992.4430641823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 539629.276517502,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 539595.5855303493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 537647.3100000112,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537647.4999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 641468.7889999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641429.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 765297.8057377203,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 765243.1967213114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 851924.9093406864,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 851884.9816849821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11846.191681920202,
            "unit": "ns/iter",
            "extra": "iterations: 59004\ncpu: 11845.501999864402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9762.541520226041,
            "unit": "ns/iter",
            "extra": "iterations: 72555\ncpu: 9761.27902970162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9686.07976152729,
            "unit": "ns/iter",
            "extra": "iterations: 72629\ncpu: 9685.421801208877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9752.840579507518,
            "unit": "ns/iter",
            "extra": "iterations: 71440\ncpu: 9752.610582306812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15985.736055191364,
            "unit": "ns/iter",
            "extra": "iterations: 44210\ncpu: 15984.512553720891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62044.84190462513,
            "unit": "ns/iter",
            "extra": "iterations: 13903\ncpu: 62043.67402718832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 326683.68173039745,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 326660.7570490543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258005.8810103528,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 258000.2434570907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 253781.06364712593,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 253769.74541148625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 253751.95622595586,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 253749.30493936606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573135.2883235683,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 573102.6092628827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4565633.044334897,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4565423.152709363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3666043.3543308647,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3665846.4566929056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3664395.7007874087,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3664236.6141732205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3708871.076305084,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3708514.859437761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2143964.6435185433,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2143849.7685185205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3596412.836576063,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3596075.875486378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14323939.266666912,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14322913.333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6218305.050000481,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6217900.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17748980.199999664,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17747493.33333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 65647.22793374267,
            "unit": "ns/iter",
            "extra": "iterations: 12859\ncpu: 65644.72353993315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 356206.99587287375,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 356198.3078827902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 286785.136482943,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 286766.3713910771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 278756.042016814,
            "unit": "ns/iter",
            "extra": "iterations: 3094\ncpu: 278751.51906916656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278129.6941747672,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 278117.44336569577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 577627.6391478038,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 577626.2982689734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4606811.509901128,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4606679.702970276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3725365.9558233214,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3725170.281124502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3739452.6626505093,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3739400.4016064173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3775824.4089069683,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775776.92307692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2181518.6070588264,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2181382.823529415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3724436.192156895,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3724348.62745097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14628073.34246541,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14627436.986301323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6458530.230000292,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6458431.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60494.468599995336,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60494.489999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 319792.02781899594,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 319789.1691394648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 254638.02290747888,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 254630.19089574076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 250598.36086702926,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 250593.96602226258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 247429.4220236315,
            "unit": "ns/iter",
            "extra": "iterations: 3469\ncpu: 247417.2960507341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 546236.0025047155,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 546228.0525986245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4605236.073891472,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4605024.630541882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3685378.6574802035,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3685205.511811007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3690598.5019761776,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3690526.8774703466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3721551.6613547476,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3721489.243027886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2158629.138888794,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2158600.462962962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3597345.915057902,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3597257.528957528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5624.679555523399,
            "unit": "ns/iter",
            "extra": "iterations: 124371\ncpu: 5624.610238721258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35934.808332082976,
            "unit": "ns/iter",
            "extra": "iterations: 20019\ncpu: 35934.73699985015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30081.359373655894,
            "unit": "ns/iter",
            "extra": "iterations: 23246\ncpu: 30081.317215865183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30236.465815468346,
            "unit": "ns/iter",
            "extra": "iterations: 23183\ncpu: 30236.104041754796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22548.83138972872,
            "unit": "ns/iter",
            "extra": "iterations: 31042\ncpu: 22548.762966303824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 146447.30725788817,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 146442.71072997418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298860.1284246618,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 298856.33561643906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73375.55282169703,
            "unit": "ns/iter",
            "extra": "iterations: 9551\ncpu: 73372.63113810112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73292.59488630247,
            "unit": "ns/iter",
            "extra": "iterations: 9543\ncpu: 73290.86241223842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73643.88321935825,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 73642.3040504999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152126.3617717628,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 152126.2055422214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 144597.53473945352,
            "unit": "ns/iter",
            "extra": "iterations: 4836\ncpu: 144594.93382961146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41851.88338018345,
            "unit": "ns/iter",
            "extra": "iterations: 16721\ncpu: 41851.37252556674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206036.42094455182,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 206032.6195365218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 166897.48963545222,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 166897.30760066732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 167127.25661816853,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 167126.97352730733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167607.5776768759,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 167599.5219885275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 277499.4857369272,
            "unit": "ns/iter",
            "extra": "iterations: 2524\ncpu: 277499.08874801884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1266589.8191682086,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1266556.7811935025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1047213.2780268844,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1047211.2107623359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1047723.5838323621,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1047696.4071856299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1049608.1034483043,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1049595.802098936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 674212.5946205872,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 674211.8155619695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1043489.718750039,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1043452.8273809471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43177.52227845048,
            "unit": "ns/iter",
            "extra": "iterations: 16204\ncpu: 43176.56751419401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209294.4565022558,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 209287.0254110623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172353.49975381565,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 172353.3234859667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171136.0124602893,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 171130.34449059248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172577.35827160452,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 172577.16049382705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 285355.67633836437,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 285339.64037597034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1260091.719424502,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1260078.9568345149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1049749.1141141185,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1049747.447447453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1052906.3930722275,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1052851.2048192665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1057012.9411764196,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1057012.36802412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 671311.4305019419,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 671274.6138996175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1047769.2017937569,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1047754.7085201835 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}