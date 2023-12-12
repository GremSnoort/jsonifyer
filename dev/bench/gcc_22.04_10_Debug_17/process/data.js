window.BENCHMARK_DATA = {
  "lastUpdate": 1702397910224,
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
      }
    ]
  }
}