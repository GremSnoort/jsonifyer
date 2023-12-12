window.BENCHMARK_DATA = {
  "lastUpdate": 1702421912591,
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
        "date": 1702412514985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14348.91148832378,
            "unit": "ns/iter",
            "extra": "iterations: 50016\ncpu: 14347.658749200258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 113864.53551912922,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 113856.22810704778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 214800.20778900702,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 214789.32708898204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 313564.12386487686,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 313551.58009444247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 415617.3611111136,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 415588.4578544061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 513786.3020648996,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 513776.57817109145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 612169.0190678068,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 612140.3248587572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 572443.4910000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572426.2000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 652036.9379999806,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652004.9000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11163.642031307014,
            "unit": "ns/iter",
            "extra": "iterations: 63053\ncpu: 11163.072335971312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9185.917462070662,
            "unit": "ns/iter",
            "extra": "iterations: 76062\ncpu: 9185.164734032756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9166.905474266236,
            "unit": "ns/iter",
            "extra": "iterations: 76339\ncpu: 9166.509909744696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9179.05810902944,
            "unit": "ns/iter",
            "extra": "iterations: 76236\ncpu: 9178.975811952358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14975.05950979345,
            "unit": "ns/iter",
            "extra": "iterations: 46715\ncpu: 14975.204966284922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56938.33747829101,
            "unit": "ns/iter",
            "extra": "iterations: 14395\ncpu: 56935.130253560266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 249909.80704844854,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 249898.09104258462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199592.6774947383,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 199580.15891563473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199277.56799627517,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 199269.419174248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195233.3783660435,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 195221.1319032405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 449209.802550999,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 449191.88775510277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3556308.187739452,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3556284.674329505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2887895.565217438,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2887879.192546589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2882348.3447204493,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2882187.888198762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2860677.886153903,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2860502.461538466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1680786.1890909367,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1680721.272727271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2812244.699088135,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2812037.6899696025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10731482.609999716,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10731134.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6630035.4571426725,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6629863.571428578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13816669.753247006,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13815981.818181856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53517.11350000414,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53516.85000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 283053.1092161313,
            "unit": "ns/iter",
            "extra": "iterations: 3049\ncpu: 283048.5077074438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224471.4046560255,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 224471.35757258668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 223976.9749869691,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 223961.1776967174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 222764.80659398544,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 222748.31256490166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 459262.6217643902,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 459233.4389857366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3629190.227450983,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3628957.647058837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2947154.2317459974,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2946992.3809523876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2930228.207547276,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2930123.8993710577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2908452.589341704,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2908322.5705329045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1714819.1841620856,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1714654.3278084828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2862157.613496933,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2856154.601226986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11100280.608247042,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11099396.907216504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6538406.218309765,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6538133.098591548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54938.08316593,
            "unit": "ns/iter",
            "extra": "iterations: 14934\ncpu: 54934.41141020504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 248319.46240379004,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 248310.56838365798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 197580.49401829543,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 197574.61881304317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 196786.0402245189,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 196777.22170252563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192833.5698554695,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 192830.62629043346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 429401.90247525106,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 429400.8910891079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3601581.6332047936,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3601257.9150579153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2910522.816199351,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2910263.2398754014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2906647.7881620866,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2906443.6137071652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2989250.6728971917,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2989205.29595016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1678934.2797833357,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1678887.184115513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2812004.4380663848,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2812026.8882175074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5719.9052346128665,
            "unit": "ns/iter",
            "extra": "iterations: 122798\ncpu: 5719.773937686307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31603.714640982562,
            "unit": "ns/iter",
            "extra": "iterations: 22116\ncpu: 31604.051365527237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24995.70093125771,
            "unit": "ns/iter",
            "extra": "iterations: 28134\ncpu: 24995.315276889247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25390.979294561483,
            "unit": "ns/iter",
            "extra": "iterations: 27529\ncpu: 25390.751571070537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20220.284538761258,
            "unit": "ns/iter",
            "extra": "iterations: 34635\ncpu: 20220.300274289075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122106.53145035107,
            "unit": "ns/iter",
            "extra": "iterations: 5771\ncpu: 122104.71322127873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 238584.41090289902,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 238584.1908006831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60641.88659348676,
            "unit": "ns/iter",
            "extra": "iterations: 11569\ncpu: 60641.239519404466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60989.39292203457,
            "unit": "ns/iter",
            "extra": "iterations: 11557\ncpu: 60987.93804620494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 60413.503841840335,
            "unit": "ns/iter",
            "extra": "iterations: 11583\ncpu: 60409.125442459444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 121509.34190410512,
            "unit": "ns/iter",
            "extra": "iterations: 5756\ncpu: 121495.93467685826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113368.51406401879,
            "unit": "ns/iter",
            "extra": "iterations: 6186\ncpu: 113359.21435499625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37506.43719858497,
            "unit": "ns/iter",
            "extra": "iterations: 18662\ncpu: 37503.46693816311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 179875.93607188703,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 179874.94223363546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 147441.29181569797,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 147441.42646749303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 147327.49158604228,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 147327.30332351764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 145771.1497815706,
            "unit": "ns/iter",
            "extra": "iterations: 4807\ncpu: 145770.95901809892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 255498.40153173753,
            "unit": "ns/iter",
            "extra": "iterations: 2742\ncpu: 255494.018964257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1031882.5493372038,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1031879.234167882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 860690.5221130394,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 860699.3857493814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 863385.2623152282,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 863386.0837438281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 868105.8037036902,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 867998.1481481352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 556582.3984127183,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 556588.809523813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 852629.5176184945,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 852612.636695024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38222.364708453046,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 38222.84341559283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 183721.66780371428,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 183718.1579637889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 150151.43736548463,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150153.4438226422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 150688.1108480459,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 150690.292724924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 150811.99440137265,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 150813.99655469376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 254572.21503814688,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 254560.443152922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1032210.1867646939,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1032196.029411757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 863796.646913538,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 863804.8148148169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 863303.1528976734,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 863302.096177553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 860326.0652708918,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 860330.9113300516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 556292.9745830118,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 556292.7720412982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 853829.874543227,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 853809.9878197397 ns\nthreads: 1"
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
        "date": 1702416019645,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13999.890278250048,
            "unit": "ns/iter",
            "extra": "iterations: 50063\ncpu: 13999.490641791343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114379.49999999351,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 114377.25292676284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 215839.79611650936,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 215834.47846651726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 314517.39890511165,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 314508.0656934306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 426476.06539377716,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 426444.67780429585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517452.2225519392,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 517445.1632047481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 613864.5701132929,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 613850.5665722378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 576059.7610000105,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576054.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 657347.3700000249,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657341.5000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11079.528550788678,
            "unit": "ns/iter",
            "extra": "iterations: 63676\ncpu: 11078.820905835802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9255.523864251883,
            "unit": "ns/iter",
            "extra": "iterations: 75699\ncpu: 9255.15264402436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9253.563529770032,
            "unit": "ns/iter",
            "extra": "iterations: 75563\ncpu: 9253.503698900247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9254.78693594888,
            "unit": "ns/iter",
            "extra": "iterations: 75658\ncpu: 9254.811123741036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15037.695315857363,
            "unit": "ns/iter",
            "extra": "iterations: 46540\ncpu: 15037.20025784271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54285.93990560232,
            "unit": "ns/iter",
            "extra": "iterations: 15043\ncpu: 54285.2622482217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 243071.00769230945,
            "unit": "ns/iter",
            "extra": "iterations: 3510\ncpu: 243061.70940170955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196391.20307834283,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 196385.5272226051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195688.36321945093,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 195687.11304746635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195641.55643878973,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 195632.31887349556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456761.6904761758,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 456750.62111801235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3582918.6346153216,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3582833.846153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2885170.4174454184,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2885134.2679127827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2895180.987538907,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2895083.4890965745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2890736.9378880463,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2890601.24223602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1667221.401801824,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1667175.3153153139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2818678.0489296876,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2818612.8440367044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10724090.929999761,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10723789.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6402749.806896532,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6402666.206896549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13831521.25974046,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13831029.870129878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 51342.64849999681,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51341.24999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 277289.19515346905,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 277286.94668820704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 220893.7948850293,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 220889.3309222414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 220434.76526669148,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 220429.11620716288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220241.1942297872,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 220234.15765069678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 467159.5727321561,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 467150.4025764896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3642408.592156921,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3642322.7450980586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2937294.5078863446,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2937193.3753943252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2954201.2888889136,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2954185.0793650933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2923622.6635219427,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2923585.22012578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1706155.0406653904,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1706091.4972273547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2864607.5784614854,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2864527.3846153975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11011553.319587255,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11011099.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6397087.0689653065,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6396891.034482769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52851.03001742957,
            "unit": "ns/iter",
            "extra": "iterations: 15491\ncpu: 52849.570718481686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 246244.2684813718,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 246238.91117478517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 196037.61476725264,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 196033.13460215533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193529.49875367715,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 193525.01699524213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 190343.03900155355,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 190337.820369958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 435219.7955000179,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 435212.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3623373.2373540904,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3623140.8560311208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2918283.5732086245,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2917366.0436136937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2918304.6509433123,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2918181.761006282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2899984.5531249237,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2899965.0000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1677752.0017953329,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1677712.0287253181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2828998.5683890292,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2828921.5805470957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5642.357305364977,
            "unit": "ns/iter",
            "extra": "iterations: 123950\ncpu: 5642.319483662759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31309.493932202095,
            "unit": "ns/iter",
            "extra": "iterations: 22331\ncpu: 31309.22036630695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26881.01870146949,
            "unit": "ns/iter",
            "extra": "iterations: 27431\ncpu: 26880.766286318325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25050.2425707126,
            "unit": "ns/iter",
            "extra": "iterations: 27930\ncpu: 25050.064446831355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19943.656212612295,
            "unit": "ns/iter",
            "extra": "iterations: 35106\ncpu: 19943.545262918127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 121789.57005925382,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 121790.22307424055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 241368.61437455393,
            "unit": "ns/iter",
            "extra": "iterations: 2894\ncpu: 241359.84796130372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60830.377461608514,
            "unit": "ns/iter",
            "extra": "iterations: 11527\ncpu: 60829.01882536757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61378.00844772911,
            "unit": "ns/iter",
            "extra": "iterations: 11364\ncpu: 61375.86237240351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61500.367230645264,
            "unit": "ns/iter",
            "extra": "iterations: 11407\ncpu: 61497.23853773984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 120896.05863023408,
            "unit": "ns/iter",
            "extra": "iterations: 5782\ncpu: 120889.48460740199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 114257.5259549466,
            "unit": "ns/iter",
            "extra": "iterations: 6126\ncpu: 114249.24910218736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37633.2444133344,
            "unit": "ns/iter",
            "extra": "iterations: 18571\ncpu: 37631.40380162605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 179820.34954955106,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 179811.40283140115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 147163.5366575064,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 147162.13817874543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 147579.28037974815,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 147568.73417721558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 146720.08644566822,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 146715.98825010532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 253966.83725988108,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 253961.18158753164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1039517.6454005515,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1039495.8456973338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 868504.5055762278,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 868496.2825278895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 867540.2317224483,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 867509.9132589821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 873126.6733167571,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 873109.2269326735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 557904.9528377516,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 557894.4844124663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1058099.901599007,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 1058037.269372694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38519.16714317417,
            "unit": "ns/iter",
            "extra": "iterations: 18188\ncpu: 38517.94040026372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 184395.54251118546,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 184394.15635693376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151505.1487478434,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 151500.49654576866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 152335.00847641268,
            "unit": "ns/iter",
            "extra": "iterations: 4601\ncpu: 152333.9056726804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 152055.96409140166,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 152054.5593035909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 254597.07202620205,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 254595.16187704488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1027933.1160058513,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027911.8942731232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 860460.5933661417,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 860443.6117936037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 863277.0271604941,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 863279.3827160341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 864462.5377008487,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 864454.6353522794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 555747.9675119198,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 555745.0871632341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 855742.9963325526,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 855725.6723716332 ns\nthreads: 1"
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
        "date": 1702418365429,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13862.710009522369,
            "unit": "ns/iter",
            "extra": "iterations: 50412\ncpu: 13862.360152344681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116262.53339760654,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 116255.6121746316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 218988.68316081178,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 218985.3824791719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 320586.19933186134,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 320572.7171492204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 428008.8803756624,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 427978.15126050444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 524889.9173703381,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 524869.7828709284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 504877.6319999888,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504797.09999999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 585671.9120000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585671.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 668487.3982371424,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 668469.3910256412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11248.76079734184,
            "unit": "ns/iter",
            "extra": "iterations: 62307\ncpu: 11248.19362190443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9410.883636898992,
            "unit": "ns/iter",
            "extra": "iterations: 74723\ncpu: 9410.477363060927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9360.475356774523,
            "unit": "ns/iter",
            "extra": "iterations: 74767\ncpu: 9359.808471651942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9391.70206865181,
            "unit": "ns/iter",
            "extra": "iterations: 74638\ncpu: 9384.448940218124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15342.601925645351,
            "unit": "ns/iter",
            "extra": "iterations: 46426\ncpu: 15342.189721276865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56733.693146309146,
            "unit": "ns/iter",
            "extra": "iterations: 14401\ncpu: 56732.53246302344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 248076.65819127936,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 248059.43368968472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198366.2867766579,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 198360.5856379271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197357.14265926767,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 197349.69990766337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194473.34092980766,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 194468.32269826802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456478.14734672057,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 456446.98608964466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3626965.394531334,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3626898.437499998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2916598.5754718017,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2916436.477987419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2926426.9025157006,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2926250.3144654105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2906943.139240646,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2906880.3797468413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1691882.707495466,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1691793.0530164498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2841629.5858895225,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2841577.300613504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10765558.404040638,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10764561.61616159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6346429.234482959,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6346224.827586229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14175070.440000279,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14174414.66666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52484.70469999802,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52480.59000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 278653.8333872504,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 278638.9517955356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 222631.98471899214,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 222617.6638176632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 222690.53649069424,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 222685.22256728853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220955.37693098988,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 220938.98043254277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 465522.4008551689,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 465504.3292357037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3690136.7075098446,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3689918.5770751145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2978587.7834394635,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2978442.3566878997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2973271.0447284863,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2973112.1405750713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2944147.2120253197,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2943965.189873414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1730733.6468401644,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1730665.6133828992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2883539.3509316687,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2883073.2919254787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11126178.833333,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11125843.749999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6402246.726027408,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6401788.35616438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54170.69143310578,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 54166.294288736026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 246124.99144079987,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 246120.88445078538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 196292.50732265748,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 196282.79176201366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194018.40217391204,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 194015.2853260855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 191231.82619367153,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 191217.8714859441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 434448.156343646,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 434432.76723276655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3645046.8117648456,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3644836.470588233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2923755.416927769,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2923569.592476486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2929876.5314464513,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2929770.754716999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2921363.5956111928,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2921080.877742928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1690020.0163043065,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1689982.0652173955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2849523.1463414216,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2849391.158536584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5711.138202658402,
            "unit": "ns/iter",
            "extra": "iterations: 123015\ncpu: 5710.983213429215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32341.75385752397,
            "unit": "ns/iter",
            "extra": "iterations: 21646\ncpu: 32341.388709230305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26396.16561085887,
            "unit": "ns/iter",
            "extra": "iterations: 26520\ncpu: 26396.180241327387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25207.851217669573,
            "unit": "ns/iter",
            "extra": "iterations: 27799\ncpu: 25206.957084787235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19895.240570063455,
            "unit": "ns/iter",
            "extra": "iterations: 35154\ncpu: 19894.700460829474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122500.2124407015,
            "unit": "ns/iter",
            "extra": "iterations: 5691\ncpu: 122491.03848181352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 240548.6149862032,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 240538.32872927902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61033.96558082166,
            "unit": "ns/iter",
            "extra": "iterations: 11389\ncpu: 61029.60751602418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61448.329327137544,
            "unit": "ns/iter",
            "extra": "iterations: 11399\ncpu: 61446.9163961746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61188.79949437624,
            "unit": "ns/iter",
            "extra": "iterations: 11471\ncpu: 61188.780402755096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 117923.69873417188,
            "unit": "ns/iter",
            "extra": "iterations: 5925\ncpu: 117912.96202531559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115286.18357248635,
            "unit": "ns/iter",
            "extra": "iterations: 6063\ncpu: 115282.15404915043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38195.18766361146,
            "unit": "ns/iter",
            "extra": "iterations: 18336\ncpu: 38192.34293193765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184737.26797899543,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 184731.20734908088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 150471.04850826372,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 150462.78171281406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 150032.2287553642,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 150027.08154506327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 149777.9794784127,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 149769.04660111378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 255211.26756955602,
            "unit": "ns/iter",
            "extra": "iterations: 2732\ncpu: 255197.29136163899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1045124.3288490387,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1045123.7668161499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 871517.9987593029,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 871438.833746909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 873056.3715710898,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 873034.5386533584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 874829.5249376736,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 874764.8379052404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 566705.7897727472,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 566691.1525973966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 864625.7077114414,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 864626.119402978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38935.55194299008,
            "unit": "ns/iter",
            "extra": "iterations: 17962\ncpu: 38934.49504509489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 186452.59653795013,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 186452.64980026768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 153301.70290963803,
            "unit": "ns/iter",
            "extra": "iterations: 4571\ncpu: 153297.28724568035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 152946.10211651906,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 152940.75932795243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 153761.83450087256,
            "unit": "ns/iter",
            "extra": "iterations: 4568\ncpu: 153748.75218914205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 256988.59551800115,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 256981.4107274054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1051535.9119402384,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1051430.7462686496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 871428.7394014518,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 871398.2543640878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 869338.7139303393,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 869338.4328358152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 867191.9394314456,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 867113.3498145832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 565908.7666399359,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 565887.0088211711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 864527.0801480084,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 864480.1479654632 ns\nthreads: 1"
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
        "date": 1702421911286,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13843.897977306186,
            "unit": "ns/iter",
            "extra": "iterations: 50675\ncpu: 13843.163295510607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114278.14432431967,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 114274.93243243246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 215998.65666832717,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 215983.29201784826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 314625.86814383534,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 314606.5383218306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 418204.72731614066,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 418155.8739255012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 514845.74076281505,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 514825.3277711562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 612415.786723126,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 612377.3305084744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 573644.876000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573621.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 656140.1700000147,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656110.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11088.46826313185,
            "unit": "ns/iter",
            "extra": "iterations: 63223\ncpu: 11088.050234882861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9235.849788527867,
            "unit": "ns/iter",
            "extra": "iterations: 75660\ncpu: 9235.605339677502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9263.613880484429,
            "unit": "ns/iter",
            "extra": "iterations: 75689\ncpu: 9262.805691712134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9263.767701978364,
            "unit": "ns/iter",
            "extra": "iterations: 75726\ncpu: 9263.002139291664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15197.223363898383,
            "unit": "ns/iter",
            "extra": "iterations: 46131\ncpu: 15195.291669376351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57066.147208118986,
            "unit": "ns/iter",
            "extra": "iterations: 14381\ncpu: 57065.44051178646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250086.8927214207,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 250069.97953814667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198971.97739454263,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 198961.26776975044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200583.13625757888,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 200562.57582827806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195515.1609195519,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 195500.6206896554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456588.18125323544,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 456557.2760227851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3547164.3282441953,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3546762.595419845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2866765.364864926,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 2866542.2297297283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2871195.663580207,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2870828.395061729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2846836.279140979,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2846641.7177914036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1669324.379061322,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1669172.743682309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2789476.4164133626,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2789229.4832826736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10735943.259999773,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10735148.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6328889.108843423,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6328136.73469389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13791019.779220775,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13790271.428571424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53028.40989999709,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53020.67999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 282454.1259842451,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 282435.4002624659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224439.9955544021,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 224412.44769874393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 226239.82328153704,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 226229.65499078104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221586.98891466684,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 221568.1876772359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 468735.6417830307,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 468694.03866809845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3605328.774319159,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3605069.2607003953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2907363.1562500424,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2907126.8750000102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2918032.5924765635,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2917841.0658307294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2906522.6666666334,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2906200.934579459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1704810.1025641693,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1704725.4578754574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2835656.338414633,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2835656.0975609873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11022074.680412745,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11021816.494845323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6485902.4475526735,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6485823.776223754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54413.43883469478,
            "unit": "ns/iter",
            "extra": "iterations: 15172\ncpu: 54413.485367782625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 245930.06303724617,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 245923.15186246336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198624.3453787403,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 198617.60481816033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198168.30104286462,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 198165.098493627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193321.7399408894,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 193321.8913389405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 438808.9398496487,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 438775.03759398795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3574492.4214557935,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3574455.5555555723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2876342.2499999693,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2876297.5308641843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2887822.1331269573,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2887750.154798757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2870346.2523075216,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2870263.692307687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1674668.794275512,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1674642.576028634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2806883.8429001947,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2806840.4833836835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5712.986107718078,
            "unit": "ns/iter",
            "extra": "iterations: 122802\ncpu: 5712.642302242676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32398.29508348169,
            "unit": "ns/iter",
            "extra": "iterations: 21621\ncpu: 32397.197169418825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26440.095488086878,
            "unit": "ns/iter",
            "extra": "iterations: 27239\ncpu: 26439.60497815624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26493.597624577473,
            "unit": "ns/iter",
            "extra": "iterations: 26269\ncpu: 26493.631276409702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20090.456779832082,
            "unit": "ns/iter",
            "extra": "iterations: 34787\ncpu: 20088.909650156646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122891.70770840702,
            "unit": "ns/iter",
            "extra": "iterations: 5734\ncpu: 122889.57098011878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 235601.01109243237,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 235601.21008403593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 59976.65569144047,
            "unit": "ns/iter",
            "extra": "iterations: 11693\ncpu: 59970.07611391461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60244.45556320781,
            "unit": "ns/iter",
            "extra": "iterations: 11612\ncpu: 60239.950051671556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59857.1689345292,
            "unit": "ns/iter",
            "extra": "iterations: 11685\ncpu: 59848.87462558849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 120693.98385136326,
            "unit": "ns/iter",
            "extra": "iterations: 5759\ncpu: 120686.09133529924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 112797.47369268045,
            "unit": "ns/iter",
            "extra": "iterations: 6215\ncpu: 112790.04022526121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37884.96217264691,
            "unit": "ns/iter",
            "extra": "iterations: 18558\ncpu: 37884.31943097335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 179917.2339331587,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 179905.1928020543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 147758.83673899653,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 147732.86286075352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 147961.67195431725,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 147953.4898477138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 147246.40495693797,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 147229.02751522642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 250991.12643266216,
            "unit": "ns/iter",
            "extra": "iterations: 2792\ncpu: 250968.4813753588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1027187.4948604268,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027077.5330396586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 858693.5972905807,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 858650.3694581277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 864473.1075129163,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 864427.5906735687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 860906.9963145215,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 860820.7616707616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 549382.0353495908,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 549338.8059701591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 850976.7694174548,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 850877.7912621261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38484.01559582857,
            "unit": "ns/iter",
            "extra": "iterations: 18210\ncpu: 38480.05491488175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 184133.43529720823,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 184109.17937927332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152107.30200174896,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 152104.24281984282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 151886.26909722213,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 151884.07118055556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151385.45387773257,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 151369.99351912018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 251829.1751615353,
            "unit": "ns/iter",
            "extra": "iterations: 2786\ncpu: 251814.75233309495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1023265.0409356795,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1023150.2923976681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 859188.3251533741,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 859131.0429447839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 862156.383477197,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 862051.2946979126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 858557.4203431988,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 858509.6813725485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 554448.6819620396,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 554418.2753164555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 851778.1300121647,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 851674.1190765348 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}