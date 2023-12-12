window.BENCHMARK_DATA = {
  "lastUpdate": 1702409111767,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 20.04 Debug c++-17": [
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
        "date": 1702398822590,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15026.616843784555,
            "unit": "ns/iter",
            "extra": "iterations: 46391\ncpu: 15026.388739195103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146983.35145429382,
            "unit": "ns/iter",
            "extra": "iterations: 5776\ncpu: 146982.86011080333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 278223.0848328984,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 278220.6619537275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 410298.6330664206,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 410295.3838907208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 542985.6183395359,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 542976.9516728625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 543349.27900004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543317.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 660430.8949999905,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660424.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 755069.480065098,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 755063.3848657449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 859162.7005545524,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 859107.4861367833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12021.34735693676,
            "unit": "ns/iter",
            "extra": "iterations: 58663\ncpu: 12021.274056901286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10013.319688026162,
            "unit": "ns/iter",
            "extra": "iterations: 70134\ncpu: 10013.153392078018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9847.39986813667,
            "unit": "ns/iter",
            "extra": "iterations: 71286\ncpu: 9847.446904020424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10154.325558960621,
            "unit": "ns/iter",
            "extra": "iterations: 70488\ncpu: 10154.221995233236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16234.147615407546,
            "unit": "ns/iter",
            "extra": "iterations: 43173\ncpu: 16233.796585829126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62403.75842367396,
            "unit": "ns/iter",
            "extra": "iterations: 13652\ncpu: 62402.78347494876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 323805.05683971633,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 323798.97688518383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 256335.2140498358,
            "unit": "ns/iter",
            "extra": "iterations: 3331\ncpu: 256328.79015310667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 257004.1876506181,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 256995.99397590375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 252347.2079738238,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 252327.9381136564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 564880.7193548573,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 564874.7096774199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4534439.048780414,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4534286.8292682925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3699065.6984126,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3698924.603174602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3672866.8735177303,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3672880.2371541606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3669041.039370134,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3668865.3543307045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2124673.7739726203,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2124634.474885839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3589548.8339768825,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3589424.710424708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14174312.239999836,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14173805.333333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6242804.320000346,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6242666.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17928513.423729036,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 17927715.254237283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68020.17648940418,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 68019.2722910837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 352803.2646090557,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 352798.88888888876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 280544.8269986889,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 280533.0602883346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 278199.41880064236,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 278188.81685575383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 278179.28719948157,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 278180.1819363215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 581374.7108594135,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 581345.9693537655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4618187.628712839,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4617972.772277235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3836418.847389628,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3836393.1726907487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3720924.641975254,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3720653.4979424123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3710721.7356830137,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 3710617.6211453746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2175128.9883449334,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2175032.1678321683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3626024.9844357837,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3625833.0739299525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14643123.452055085,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14639568.49315069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6191360.830000008,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6191377.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60743.098599999714,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60734.93000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 320191.78369320964,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 320166.4929262843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 255812.87866109158,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255793.8732815307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 254846.2297579906,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 254834.62802509617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 250127.065102636,
            "unit": "ns/iter",
            "extra": "iterations: 3410\ncpu: 250120.38123167158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553192.0433120911,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 553152.2929936302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4573389.26470585,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4573080.882352958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3690992.7312253984,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3690739.9209486255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3681392.711462464,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3681357.7075098916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3692052.612648141,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3691894.8616600763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2105940.5610859776,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2105823.981900457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3580598.6360153807,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3580606.513409961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5679.666491017172,
            "unit": "ns/iter",
            "extra": "iterations: 123352\ncpu: 5679.562552694738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37262.14376996888,
            "unit": "ns/iter",
            "extra": "iterations: 18780\ncpu: 37262.30031948898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30394.66565472582,
            "unit": "ns/iter",
            "extra": "iterations: 24705\ncpu: 30393.831208257627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29250.322226854256,
            "unit": "ns/iter",
            "extra": "iterations: 23980\ncpu: 29250.45037531287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23142.310720436235,
            "unit": "ns/iter",
            "extra": "iterations: 30204\ncpu: 23141.517679777386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 147837.45249630822,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 147838.12934485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 300713.1648776304,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 300710.2189781015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74199.04639830311,
            "unit": "ns/iter",
            "extra": "iterations: 9440\ncpu: 74198.38983050713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74053.02312810227,
            "unit": "ns/iter",
            "extra": "iterations: 9469\ncpu: 74049.60397085153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74462.42841960092,
            "unit": "ns/iter",
            "extra": "iterations: 9409\ncpu: 74453.93771920558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 152124.31678230627,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 152114.61405030344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 144387.72910662438,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 144379.18896665328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45566.955149935675,
            "unit": "ns/iter",
            "extra": "iterations: 15340\ncpu: 45565.638852673095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 223347.22161990343,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 223330.16581632668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 182359.6158837316,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 182346.9763820389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 182490.6444966112,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 182477.82994261762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 182646.5604079487,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 182638.10146443374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304650.587902535,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 304614.9260226277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1297446.9776950923,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1297390.892193308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1076751.5861538448,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1076678.3076923047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1070173.1597542171,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1070177.2657449965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1075952.3680124322,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1075920.962732907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 687972.4033366012,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 687893.0323846923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1069516.8795731724,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1069462.65243904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46443.920132891995,
            "unit": "ns/iter",
            "extra": "iterations: 15050\ncpu: 46440.385382059314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 229553.13695937008,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 229540.36697247895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 185385.82410597365,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 185370.35761589446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185612.32062483617,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 185601.27084988347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 190682.24819855808,
            "unit": "ns/iter",
            "extra": "iterations: 3747\ncpu: 190661.00880704727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 308586.63556338166,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 308567.1214788737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1283228.2705666816,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1283145.5210237838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1071756.773353749,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1071698.315467083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1071098.852986195,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1071103.6753445754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1070106.501524436,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1070082.9268292645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 685911.8868109883,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 685914.763779531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1070637.7779479644,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1070624.3491577369 ns\nthreads: 1"
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
        "date": 1702409107486,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14814.22111953317,
            "unit": "ns/iter",
            "extra": "iterations: 47359\ncpu: 14813.49057201377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 140703.00729443715,
            "unit": "ns/iter",
            "extra": "iterations: 6032\ncpu: 140702.27122015913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 270962.323241592,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 270950.3975535169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 391353.4972972989,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 391354.7747747747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 519160.5477178229,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 519135.0326022527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 520036.7509999637,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520010.30000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 621510.2730000126,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621474.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 720863.3289269139,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 720778.1493001556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 826553.4774535641,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 826505.6587091065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11624.463000780554,
            "unit": "ns/iter",
            "extra": "iterations: 60231\ncpu: 11623.351762381499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9602.550376641833,
            "unit": "ns/iter",
            "extra": "iterations: 72881\ncpu: 9601.801566937906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9513.861386953984,
            "unit": "ns/iter",
            "extra": "iterations: 72908\ncpu: 9513.562297690249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9526.824164335403,
            "unit": "ns/iter",
            "extra": "iterations: 73654\ncpu: 9526.207673717636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15645.6226968643,
            "unit": "ns/iter",
            "extra": "iterations: 44993\ncpu: 15644.486920187603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63226.44363395108,
            "unit": "ns/iter",
            "extra": "iterations: 13572\ncpu: 63225.0221043325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 320538.0122996752,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 320521.61759224767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 255825.86710566925,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 255826.8482490271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 256275.48908818647,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 256268.93871449836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 253231.24578526267,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 253222.03490091703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 558908.4847133708,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 558891.3375796174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4372638.476415093,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4372552.8301886795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3548450.513307961,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3548357.794676811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3590177.6896552746,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3589992.720306516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3552682.0153257023,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3552415.708812269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2101693.031602717,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2101483.9729119567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3468001.4007488843,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3467761.423220977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 13890039.220779149,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13889457.142857125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6205866.640000295,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6205792.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17334480.22580598,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 17333624.193548366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 67216.32085352283,
            "unit": "ns/iter",
            "extra": "iterations: 12794\ncpu: 67212.35735501014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 356834.67892562767,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 356835.7438016534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 282473.16622951743,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 282464.9180327858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 281001.8844647578,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 280995.88772846083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 280241.41256918333,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 280219.2119830668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 590960.4503127416,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 590929.2564280762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4433353.352381107,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4433120.952380928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3806342.2178988857,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3806122.9571984364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3606421.4843751774,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3606430.0781250005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3600535.1046510935,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3600364.34108527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2123772.5662100795,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2123603.881278535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3505362.4545454048,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3505325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14239015.421052301,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14238157.894736802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5936354.809999784,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5935921.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60370.52539999763,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60368.19999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 319407.9414380921,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 319388.8065233505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 257309.78258276643,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 257300.0894721151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 254452.46731449643,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 254448.17432273252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 253645.95862676486,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 253633.92018779303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 548112.625782235,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 548099.4367959958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4379865.882629179,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4379803.755868563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3552212.5229008207,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3552074.4274809244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3589538.839080572,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3589511.111111121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3558314.9083971204,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3558115.2671755543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2092063.1078652558,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2091966.0674157322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3468309.724907104,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3468201.1152416444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5667.401166883376,
            "unit": "ns/iter",
            "extra": "iterations: 123577\ncpu: 5667.349102179186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35999.68705943011,
            "unit": "ns/iter",
            "extra": "iterations: 19435\ncpu: 35998.72909698982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27718.131634314286,
            "unit": "ns/iter",
            "extra": "iterations: 25191\ncpu: 27717.87146202988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29219.222997244684,
            "unit": "ns/iter",
            "extra": "iterations: 23942\ncpu: 29218.711887060257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22451.08949478692,
            "unit": "ns/iter",
            "extra": "iterations: 31175\ncpu: 22450.842020850305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 144777.57222797844,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 144772.55958549338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 287589.36852919,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 287580.81347576255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71436.47744437635,
            "unit": "ns/iter",
            "extra": "iterations: 9798\ncpu: 71431.81261481984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71529.71365729085,
            "unit": "ns/iter",
            "extra": "iterations: 9775\ncpu: 71527.35549872166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71581.87382605199,
            "unit": "ns/iter",
            "extra": "iterations: 9796\ncpu: 71582.19681502624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 147201.97559949578,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 147200.12620950784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 140110.67954362903,
            "unit": "ns/iter",
            "extra": "iterations: 4996\ncpu: 140107.485988789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42644.55680087851,
            "unit": "ns/iter",
            "extra": "iterations: 16417\ncpu: 42643.41231650114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211594.90105899159,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211595.73373676126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 173522.97006134992,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 173506.74846625573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173836.4955817366,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 173827.09867452134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172844.34708497633,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 172836.8577075103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 293629.4172963833,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 293620.1511334978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1234281.8573943174,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1234251.056338014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1029771.3817915127,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1029711.4537444945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1040827.820208001,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1040817.6820207906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1030098.5471976378,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1030081.2684365768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 660422.9056603546,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 660406.7924528283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1023160.7076023357,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1023128.3625730998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43693.374641027985,
            "unit": "ns/iter",
            "extra": "iterations: 16018\ncpu: 43691.353477337805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214327.22361577564,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 214317.68124808723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177091.97248865012,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 177089.95456839955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176855.40779154975,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 176849.4308120394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177349.97634791513,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 177340.971515769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 293264.9183845368,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 293255.95288177935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1233241.0264083988,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1233150.1760563313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1032824.8301329459,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1032826.5878877555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1042175.4008942572,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1042159.612518631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1032840.5465287671,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1032783.8995568784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 665836.1125954159,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 665819.1793893113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1029621.8023598542,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1029601.3274336146 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}