window.BENCHMARK_DATA = {
  "lastUpdate": 1705772035730,
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
        "date": 1702412533442,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14731.139326311777,
            "unit": "ns/iter",
            "extra": "iterations: 47945\ncpu: 14731.004275732614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 120261.4612630695,
            "unit": "ns/iter",
            "extra": "iterations: 6983\ncpu: 120253.90233424031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 224664.9797770178,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 224653.95385014263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 328085.56442417536,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 328083.0102622577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 431953.0536779419,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 431936.1829025846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 542294.8143121668,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 542270.5737199257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 520539.2570000526,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520512.79999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 598157.0569999804,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598151.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 683271.151693647,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 683255.2282768782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11525.513348513363,
            "unit": "ns/iter",
            "extra": "iterations: 60606\ncpu: 11525.34897534896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9654.131590552232,
            "unit": "ns/iter",
            "extra": "iterations: 72566\ncpu: 9653.691811592205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9655.186506733651,
            "unit": "ns/iter",
            "extra": "iterations: 72614\ncpu: 9654.870961522587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9618.290043707007,
            "unit": "ns/iter",
            "extra": "iterations: 72758\ncpu: 9617.936171967323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15514.388080204511,
            "unit": "ns/iter",
            "extra": "iterations: 45135\ncpu: 15514.088844577387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50524.38299999835,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50522.93999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 269856.04959196976,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 269843.4086629001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 213127.0477380567,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 213117.54561359677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209285.78693738036,
            "unit": "ns/iter",
            "extra": "iterations: 4088\ncpu: 209281.7025440315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 207850.96912979992,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 207842.00291686927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 472082.29068522574,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 472070.66381156247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3752830.554655936,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3752585.8299595113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3022750.808441571,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3022583.116883108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3021023.5179151753,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3020894.4625407127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3015552.0809060796,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3009745.9546925537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1753878.848484816,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1753873.6742424213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2933190.686708776,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2933069.93670887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11237036.200000267,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11236738.94736844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5044296.129999566,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5044004.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14588048.410958791,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14587547.94520547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54767.23829999628,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54766.040000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 299945.67862117285,
            "unit": "ns/iter",
            "extra": "iterations: 2872\ncpu: 299932.69498607237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235908.48789212634,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 235897.16565767763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235743.7545205426,
            "unit": "ns/iter",
            "extra": "iterations: 3650\ncpu: 235738.5479452044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231668.86945947114,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 231662.94594594665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 482008.97783932847,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 481991.6897506902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3820259.4631148586,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3820177.049180326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3074810.8874171153,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3074736.754966885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3082797.410596091,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3082671.523178809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3058548.029508104,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3058358.360655735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1804355.4912621614,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1804305.0485436802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2982029.0578778554,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2981874.9196141507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11474199.032257944,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11473765.591397852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6485547.384615698,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6485402.097902116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56389.03176349296,
            "unit": "ns/iter",
            "extra": "iterations: 14545\ncpu: 56386.52457889289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 266874.8339025076,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 266865.91120769747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 209823.19139574902,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 209818.50403324372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 206851.02094366765,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 206848.74819451116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 204656.35572555262,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 204652.4264881659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 451852.3402274902,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 451808.6866597729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3756821.802419326,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3756794.3548387163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3022973.2175324038,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3022885.389610383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3031909.8214286147,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3031807.1428571455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3017269.31067961,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3017166.019417471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1758416.331450045,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1758377.9661016962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2939923.0031446344,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2939787.735849073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5685.77809294678,
            "unit": "ns/iter",
            "extra": "iterations: 123038\ncpu: 5685.565435068831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33177.15624111426,
            "unit": "ns/iter",
            "extra": "iterations: 21102\ncpu: 33175.05923609145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27117.942166059554,
            "unit": "ns/iter",
            "extra": "iterations: 25798\ncpu: 27116.598185905852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25163.443708608513,
            "unit": "ns/iter",
            "extra": "iterations: 27784\ncpu: 25161.096314425457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20597.399293180868,
            "unit": "ns/iter",
            "extra": "iterations: 33955\ncpu: 20596.392283904996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 124413.70703125172,
            "unit": "ns/iter",
            "extra": "iterations: 5632\ncpu: 124408.20312500051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 249982.98286325304,
            "unit": "ns/iter",
            "extra": "iterations: 2801\ncpu: 249973.83077472335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62693.89967811226,
            "unit": "ns/iter",
            "extra": "iterations: 11184\ncpu: 62692.328326179886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62729.98145161567,
            "unit": "ns/iter",
            "extra": "iterations: 11160\ncpu: 62725.99462365575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62865.399245688306,
            "unit": "ns/iter",
            "extra": "iterations: 11136\ncpu: 62861.57507183971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126293.34113833038,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 126286.92363112334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 118407.5052435712,
            "unit": "ns/iter",
            "extra": "iterations: 5912\ncpu: 118403.11231393907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40203.01137081646,
            "unit": "ns/iter",
            "extra": "iterations: 17413\ncpu: 40201.32085223704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194939.44769059308,
            "unit": "ns/iter",
            "extra": "iterations: 3594\ncpu: 194928.21368948475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159245.13509210962,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159233.2499431411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158807.37298889944,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 158808.4749603444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158271.21927438123,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 158267.89115646188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 269584.32487504376,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 269578.96962706576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1082109.9582689023,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1082017.46522412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 908911.975388587,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 908879.145077728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 911760.6723016896,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 911727.1781534412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 906500.7837837302,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 906443.6293436339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 593265.2419627638,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 593254.0609137072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 897271.9553001199,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 897204.4699872407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41437.02844470934,
            "unit": "ns/iter",
            "extra": "iterations: 16910\ncpu: 41436.46954464788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 201334.59590424402,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201330.97779059687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 164589.67632509573,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 164583.36866902007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 165639.6349952885,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 165628.66886171274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164732.84156088327,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 164724.89421720727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 273662.21767912904,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 273652.1806853605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1087934.7698289745,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1087883.0482115145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 910635.7571429183,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 910576.8831168853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 913322.3992146046,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 913294.7643979219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 908648.1696891371,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 908616.7098445562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 593140.2187500041,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 593117.1452702766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 902495.8185328237,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 902448.6486486512 ns\nthreads: 1"
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
        "date": 1702416011822,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14596.288554518638,
            "unit": "ns/iter",
            "extra": "iterations: 47984\ncpu: 14595.598532844284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118714.86708232645,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 118707.94955363471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 221937.12990007683,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 221925.90315142195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 324627.80120709434,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 324615.4281403243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 432483.11391778063,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 432465.82466567616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558821.6564792239,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 558811.2469437649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 509851.89099998254,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509836.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 590262.5600000136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590238.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 675315.6382823804,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 675294.6142649195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11315.36163776355,
            "unit": "ns/iter",
            "extra": "iterations: 61816\ncpu: 11314.717872395488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9556.50025832757,
            "unit": "ns/iter",
            "extra": "iterations: 73550\ncpu: 9556.269204622713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9516.108595068345,
            "unit": "ns/iter",
            "extra": "iterations: 73484\ncpu: 9516.06063905068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9518.761615969182,
            "unit": "ns/iter",
            "extra": "iterations: 73541\ncpu: 9518.716090344167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15321.893305987101,
            "unit": "ns/iter",
            "extra": "iterations: 45832\ncpu: 15321.526444405667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55908.17998762885,
            "unit": "ns/iter",
            "extra": "iterations: 14551\ncpu: 55906.384440931884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 262282.98137404723,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 262279.6946564887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 207825.4675230223,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 207821.42510906467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205223.3515850159,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 205219.83669548502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 204209.29394881433,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 204208.61038029214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 451711.1112250095,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 451702.767811379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3636539.2235293877,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3636480.3921568613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2944808.907936534,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2944690.7936507915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2955361.1878980654,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2955207.0063694315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2930395.0410094643,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2930358.9905362884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1719064.4219330847,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1718963.0111524113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2947200.2383900853,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2947100.928792573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10966830.928571293,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10966072.448979594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6425171.4125873605,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6425116.083916075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14323257.175675891,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14322743.243243234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52772.72169999776,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52772.16000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293591.1270868823,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 293585.72402044357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232934.9663226558,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 232922.2433460078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232087.87216828504,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 232083.11758360273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228118.60568241437,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 228108.84227296768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 465558.0235798603,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 465541.5326902442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3685911.484127013,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3685676.58730158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3002703.041935485,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3002557.741935484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2995989.9806451704,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2995849.6774193533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2995164.300319465,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2994986.5814696304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1752727.5283019096,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1752642.6415094314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2908370.340625055,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2908146.562500003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11279895.894737316,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11279606.315789474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6467514.513888754,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6467341.666666688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53549.81424553651,
            "unit": "ns/iter",
            "extra": "iterations: 15289\ncpu: 53547.681339525305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261144.79420732064,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 261133.56707317146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206075.02333414435,
            "unit": "ns/iter",
            "extra": "iterations: 4157\ncpu: 206061.9918210257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202464.48323099228,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 202453.51913084628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198016.79550197104,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 198006.88615812655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 435386.0888554198,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 435380.5722891566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3653170.06274506,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3653050.1960784504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2952713.547468508,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2952588.6075949273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2956909.8095238125,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2956886.349206351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2938191.353312315,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2937965.2996845334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1723313.4151291363,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1723284.3173431694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2871674.8888888615,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2871503.703703701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5641.427245782172,
            "unit": "ns/iter",
            "extra": "iterations: 123821\ncpu: 5641.303979131163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32665.142510387643,
            "unit": "ns/iter",
            "extra": "iterations: 21423\ncpu: 32661.924100266056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26728.450001911082,
            "unit": "ns/iter",
            "extra": "iterations: 26171\ncpu: 26728.256467082054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25742.223300970625,
            "unit": "ns/iter",
            "extra": "iterations: 27192\ncpu: 25741.001029714625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20711.668055881193,
            "unit": "ns/iter",
            "extra": "iterations: 34072\ncpu: 20711.179267433843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 121696.48783455128,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 121681.8908585327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 246335.66503668556,
            "unit": "ns/iter",
            "extra": "iterations: 2863\ncpu: 246319.59483059743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61945.79474897669,
            "unit": "ns/iter",
            "extra": "iterations: 11274\ncpu: 61943.51605463942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61613.55803099566,
            "unit": "ns/iter",
            "extra": "iterations: 11356\ncpu: 61612.84783374409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61580.59978880927,
            "unit": "ns/iter",
            "extra": "iterations: 11364\ncpu: 61575.967969024416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124596.68000711346,
            "unit": "ns/iter",
            "extra": "iterations: 5622\ncpu: 124586.39274279603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116319.79850622294,
            "unit": "ns/iter",
            "extra": "iterations: 6025\ncpu: 116313.59336099669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39690.696490218754,
            "unit": "ns/iter",
            "extra": "iterations: 17380\ncpu: 39688.14154200258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 193131.38279096113,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 193118.61555432875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160723.722034665,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 160710.78100382673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157444.40707366998,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157438.1617481425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156898.18029116112,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 156893.2810750258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 260793.65698322558,
            "unit": "ns/iter",
            "extra": "iterations: 2685\ncpu: 260786.7783985126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1064421.6910198121,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1064414.91628616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 899034.6169665755,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 898985.7326478014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 886944.5537294934,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 886936.0303413457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 884871.1302149085,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 884819.0897597943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 582073.9608659567,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 582054.7876769379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 882707.6343001066,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 882701.6393442753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41165.048972866054,
            "unit": "ns/iter",
            "extra": "iterations: 16989\ncpu: 41163.976690799245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197979.0282645506,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 197977.727529679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 162777.95556072902,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 162771.5914378762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 161477.84163208687,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 161476.371599816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161713.35937137992,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 161699.69956089542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 264921.6140151389,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 264915.68181818293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1062638.3242424708,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1062576.8181818034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 896561.6222791035,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 896536.7477592779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 889079.788071066,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 889052.9187817345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 886636.2636942808,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 886584.7133758027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 586115.0259414172,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 586103.514644345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 886592.7569620223,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 886530.506329114 ns\nthreads: 1"
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
        "date": 1702418362622,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14375.854527481899,
            "unit": "ns/iter",
            "extra": "iterations: 48559\ncpu: 14376.002388846558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116716.20125000003,
            "unit": "ns/iter",
            "extra": "iterations: 7200\ncpu: 116709.40277777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 219434.03615676417,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 219435.9039190897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 319883.41283384315,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 319857.7151335311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 421086.03307393816,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 421055.9824902725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527268.9234016975,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 527248.0699638115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 503214.88499997713,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503143.8000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 587764.495999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587757.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 666528.4303161144,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 666513.1465517249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11154.404049267781,
            "unit": "ns/iter",
            "extra": "iterations: 62678\ncpu: 11153.701458246918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9390.291875693381,
            "unit": "ns/iter",
            "extra": "iterations: 74751\ncpu: 9390.256986528602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9394.580167928005,
            "unit": "ns/iter",
            "extra": "iterations: 74556\ncpu: 9394.362626750368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9480.70915427138,
            "unit": "ns/iter",
            "extra": "iterations: 73747\ncpu: 9479.984270546598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15242.992612609523,
            "unit": "ns/iter",
            "extra": "iterations: 45889\ncpu: 15243.13234108393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55995.18611835507,
            "unit": "ns/iter",
            "extra": "iterations: 14566\ncpu: 55991.49388988059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 262327.23067521665,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 262323.0369691413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 207178.9673123401,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 207173.5351089593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 204139.1211671635,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 204125.29673590555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201182.15101462498,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 201168.90042472843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 461240.7195822604,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 461185.2219321148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3647781.3710937835,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3647767.1874999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2925583.987421477,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2925264.465408805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2967882.352564106,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2967855.4487179467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2948284.380952481,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2948187.936507929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1718847.296296257,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1718743.518518518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2871524.9006211604,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2871390.993788827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10930134.224489806,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10929419.387755094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6605164.9014086,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6604386.619718313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14316300.472973512,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14315093.243243229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52724.528599998164,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52724.100000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291610.36868858646,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 291588.0718400553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 231328.47880096352,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 231323.71050499668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 229242.34775641613,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 229232.07799145178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226271.002110819,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 226268.28496042153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 470805.40596207505,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 470799.56639566604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3694499.2420636313,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3694273.015873004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2980126.173076915,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2980006.089743575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3012184.3721681996,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3011972.8155339938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2997796.630224977,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2997727.974276547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1744588.1632270988,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1744431.144465292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2903245.05312487,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2902964.062500013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11233396.863157826,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11232782.105263159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5023057.480000261,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5022579.999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53821.719734333106,
            "unit": "ns/iter",
            "extra": "iterations: 15207\ncpu: 53816.97902281845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 259148.14432057348,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 259124.55558903178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 203449.66310794928,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 203441.66073546704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202488.3289535399,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 202466.14265603013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199767.241541359,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 199763.88627819563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 442964.8624554213,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 442916.2506367811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3686377.730158736,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3686184.920634904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2951325.863924198,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2951069.6202531676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2999861.512820373,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2999441.6666666553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2974473.7006369648,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2974261.464968152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1722721.970425204,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1722378.0036968587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2885187.8139535543,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 2885128.2392026572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5621.618233985322,
            "unit": "ns/iter",
            "extra": "iterations: 124076\ncpu: 5621.369160836901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31474.723303810308,
            "unit": "ns/iter",
            "extra": "iterations: 22241\ncpu: 31475.10903286746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24944.220322039622,
            "unit": "ns/iter",
            "extra": "iterations: 28009\ncpu: 24942.575600699816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25825.625423853828,
            "unit": "ns/iter",
            "extra": "iterations: 27132\ncpu: 25824.79360165118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20257.649817402922,
            "unit": "ns/iter",
            "extra": "iterations: 34502\ncpu: 20256.150368094724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 123338.93986284372,
            "unit": "ns/iter",
            "extra": "iterations: 5687\ncpu: 123337.5241779493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 241583.80786477734,
            "unit": "ns/iter",
            "extra": "iterations: 2899\ncpu: 241563.19420489614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61430.70490942837,
            "unit": "ns/iter",
            "extra": "iterations: 11427\ncpu: 61428.64268836993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61958.11493236488,
            "unit": "ns/iter",
            "extra": "iterations: 11311\ncpu: 61957.22747767608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61585.97755281537,
            "unit": "ns/iter",
            "extra": "iterations: 11360\ncpu: 61582.491197183015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 123644.5186488394,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 123642.71639690502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115457.84397163105,
            "unit": "ns/iter",
            "extra": "iterations: 6063\ncpu: 115451.52564736904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39837.677267039726,
            "unit": "ns/iter",
            "extra": "iterations: 17578\ncpu: 39836.15314597791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192998.66161893978,
            "unit": "ns/iter",
            "extra": "iterations: 3632\ncpu: 192996.2279735684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 156087.31837463327,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 156082.04956463372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158997.31756451217,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158993.68492530668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157456.3355056265,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 157439.14606741592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 267076.1984732895,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 267060.61068702023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1063587.016819553,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1063458.7155963376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 885200.8860758992,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 885208.9873417808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 892248.6658162936,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 892226.5306122383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 891018.3601532181,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 890927.7139208288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 578702.5702479396,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 578673.8842975192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 881537.6164556732,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 881434.8101265752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40935.29909383177,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 40932.6805027769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 196530.87591652825,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 196505.01974055002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 162764.30740568394,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 162749.23148579602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164536.00446428984,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 164526.05733082705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163659.73504673335,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 163661.5887850468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 271080.75116100966,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 271067.2600619207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1061515.0242057352,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1061423.6006051602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 896334.7534766177,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 896275.6005056781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 893473.9438775459,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 893400.8928571295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 890058.8737244927,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 890008.9285714272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 589144.7683333221,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 589113.3333333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 885024.1273643702,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 884940.983606558 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420978109,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14304.124181669085,
            "unit": "ns/iter",
            "extra": "iterations: 48880\ncpu: 14303.858428805237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117777.88058658979,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 117778.12849162011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222666.752246471,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 222659.10141206687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 324966.8855852528,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 324956.1159202106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 428936.8843873573,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 428912.30237154174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 534863.5208589011,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 534850.9202453991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 510932.2479999889,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510913.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 592555.4940000097,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592538.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 678545.7659107504,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 678521.4337966355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11276.372187975232,
            "unit": "ns/iter",
            "extra": "iterations: 62455\ncpu: 11275.923464894717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9377.227415874697,
            "unit": "ns/iter",
            "extra": "iterations: 74621\ncpu: 9376.842979858213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9444.095432432638,
            "unit": "ns/iter",
            "extra": "iterations: 74000\ncpu: 9444.006756756753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9555.351912434366,
            "unit": "ns/iter",
            "extra": "iterations: 73362\ncpu: 9555.027125759949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15123.559013340315,
            "unit": "ns/iter",
            "extra": "iterations: 46176\ncpu: 15122.700103950105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56262.012250515894,
            "unit": "ns/iter",
            "extra": "iterations: 14530\ncpu: 56260.64005505838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 265760.8549783589,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 265755.10204081604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 211402.47270931047,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 211389.2813040257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 204880.29606526034,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 204873.6324376196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202887.30325338524,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 202880.83590596076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 449316.68903687963,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 449290.57377049123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3687551.4960317765,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3687384.920634914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2973992.453376236,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2973869.131832802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2981995.7749196095,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2981907.395498386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2957884.414012681,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2957722.9299363056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1737680.7032136354,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1737622.495274099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2927263.575657915,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 2927185.5263157794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11056494.865979297,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11055986.597938163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6462689.812499731,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6462431.9444444515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14369575.662162082,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14368851.351351352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53608.38070000113,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53605.589999999735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 297301.47582872387,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 297287.1546961322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232756.14661961317,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 232749.9592723335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232021.95437363695,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 232015.98272138243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229128.2984755229,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 229123.72292056697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 464906.5707395644,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 464888.5852090052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3745009.6733870683,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3744918.145161296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3031104.9185667136,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3031003.5830618907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3026861.218954229,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3026760.7843137207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2997773.373376635,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 2997723.701298698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1770438.836501853,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1770353.8022813634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2936629.407643314,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2936573.24840766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11366508.138298089,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11365887.234042607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6545485.174825076,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6545332.867132885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54377.01874750638,
            "unit": "ns/iter",
            "extra": "iterations: 15042\ncpu: 54375.63488897721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263068.73681001144,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 263057.39554742264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210868.27312453365,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 210865.08861374168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 206098.86291279568,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 206089.99762413948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 203122.99312795897,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 203118.60189573438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 430141.43712870765,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 430110.3465346524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3705367.6055776863,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3705035.05976094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2985842.4358973587,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2985668.910256414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2990636.0096152895,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2990404.166666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2983579.766773125,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2983497.7635782966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1749884.4258911286,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1749760.600375234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2907670.9281250504,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2907535.312499987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5578.2109837629505,
            "unit": "ns/iter",
            "extra": "iterations: 125640\ncpu: 5577.972779369643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32636.36361090319,
            "unit": "ns/iter",
            "extra": "iterations: 21424\ncpu: 32635.964339058995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26132.740595023675,
            "unit": "ns/iter",
            "extra": "iterations: 26688\ncpu: 26132.426558752933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25549.997551706372,
            "unit": "ns/iter",
            "extra": "iterations: 27366\ncpu: 25550.025579185836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20395.23869485578,
            "unit": "ns/iter",
            "extra": "iterations: 34387\ncpu: 20394.85270596441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122221.85873735319,
            "unit": "ns/iter",
            "extra": "iterations: 5734\ncpu: 122222.23578653621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 245681.4521800369,
            "unit": "ns/iter",
            "extra": "iterations: 2844\ncpu: 245676.1603375509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61784.226022568706,
            "unit": "ns/iter",
            "extra": "iterations: 11344\ncpu: 61784.41466854704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61510.3983311377,
            "unit": "ns/iter",
            "extra": "iterations: 11385\ncpu: 61509.29292929251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61750.45516388129,
            "unit": "ns/iter",
            "extra": "iterations: 11319\ncpu: 61749.96024383772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124919.63927998472,
            "unit": "ns/iter",
            "extra": "iterations: 5611\ncpu: 124919.72910354794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117338.8978908606,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 117336.32407097319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39685.82234940908,
            "unit": "ns/iter",
            "extra": "iterations: 17647\ncpu: 39685.34028446783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195185.92608089116,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 195176.93165969176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157231.90499775007,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 157232.17019360574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158215.65072202004,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 158211.73285198683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158724.19035762263,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158724.4907197822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 267565.5149769538,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 267560.6374807984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1070177.296636116,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1070179.8165137612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 899754.4598446173,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 899757.3834196988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 895188.9910600315,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 895166.79438059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 897892.7450980752,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 897894.2483660156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 586589.8317991911,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 586578.4100418484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 891840.5044472424,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 891842.693773831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40692.4632600864,
            "unit": "ns/iter",
            "extra": "iterations: 17202\ncpu: 40689.262876409426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200915.04164289322,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 200899.54363947312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 165039.19892094843,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 165024.2083040109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163220.57219500348,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 163202.21600186665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 163566.02263183056,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 163562.5058329438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 267389.21485715156,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 267380.11428571574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1074397.150076614,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1074399.846860655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 904617.2506460103,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 904562.0155038746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 901925.6131105219,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 901861.4395886994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 899686.5833332835,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 899625.5128205159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 590556.3114477901,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 590532.1548821625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 896798.2499999676,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 896775.0000000015 ns\nthreads: 1"
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
        "date": 1702421413775,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14643.762892857801,
            "unit": "ns/iter",
            "extra": "iterations: 47759\ncpu: 14643.713226826358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 120949.84218794735,
            "unit": "ns/iter",
            "extra": "iterations: 7002\ncpu: 120946.529562982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 228036.87050171156,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 228034.59416863672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 333509.9694508972,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 333484.1453982985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 442033.60314243013,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 442005.32184490643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 551070.1535556935,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 551067.337948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 525526.9150000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525504.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 609250.6580000076,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 699955.0863363418,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 699959.6096096092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11470.065655325994,
            "unit": "ns/iter",
            "extra": "iterations: 61107\ncpu: 11469.751419640948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9449.15403016527,
            "unit": "ns/iter",
            "extra": "iterations: 73992\ncpu: 9449.130987133747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9497.740588043791,
            "unit": "ns/iter",
            "extra": "iterations: 73736\ncpu: 9497.615818596092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9512.800258503328,
            "unit": "ns/iter",
            "extra": "iterations: 73500\ncpu: 9512.854421768694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15202.383459137065,
            "unit": "ns/iter",
            "extra": "iterations: 45971\ncpu: 15202.344956603074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55638.88016698424,
            "unit": "ns/iter",
            "extra": "iterations: 14612\ncpu: 55638.18094716663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 265256.996910721,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 265248.4090206984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 209136.6332518276,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 209136.3814180924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205734.64992987103,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 205723.5624123419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201946.66698135246,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 201945.81071512843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 449158.9860176068,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 449151.6830657676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3721316.8319999566,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3721256.4000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2978372.134615407,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2978323.0769230826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2997041.43181819,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 2996964.9350649347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2987633.160771683,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2987523.472668806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1723774.5754189875,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1723709.124767228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2911239.9591195337,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2911221.698113208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10987340.237113468,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 10987307.216494853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6415197.520833181,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6414977.083333347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14311205.554053986,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14311152.702702727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52586.673200002566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52583.56000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294112.5117546833,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 294112.33390119195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 231190.2114193446,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 231185.86049016987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 227776.25215797953,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 227773.99947684968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228787.48665244068,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 228781.63374265734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 462147.22635493585,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 462149.73432518396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3766706.760000034,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3766621.200000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2993272.560655762,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 2993289.8360655713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3020993.5129032456,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3020987.4193548467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3013057.0870967186,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3013021.9354838748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1762094.6812144641,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1762089.1840607205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2947306.503164589,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2947252.215189877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11266035.105262816,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11265994.736842128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5008747.219999919,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5008549.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53585.822789760714,
            "unit": "ns/iter",
            "extra": "iterations: 15349\ncpu: 53585.79712033387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 260495.9696048535,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 260492.94832826697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 203687.24315965784,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 203686.27171068426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202731.6300591768,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 202727.52662721847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201230.14067995074,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 201231.6060961319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 467958.4275793769,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 467958.4821428558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3751888.741935582,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3751840.7258064444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3005871.6205787784,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3005888.7459807084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3019654.6375404494,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3019624.271844662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3041710.8317151302,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3041697.0873786537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1737845.127819637,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1737780.639097746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2934780.349056645,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2934749.056603762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5621.300692977584,
            "unit": "ns/iter",
            "extra": "iterations: 124968\ncpu: 5621.287049484658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31844.56748382416,
            "unit": "ns/iter",
            "extra": "iterations: 21946\ncpu: 31844.75986512344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26983.541907849292,
            "unit": "ns/iter",
            "extra": "iterations: 25914\ncpu: 26983.530138149225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24854.458346687796,
            "unit": "ns/iter",
            "extra": "iterations: 28077\ncpu: 24854.635466752356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20372.042006012936,
            "unit": "ns/iter",
            "extra": "iterations: 34257\ncpu: 20371.710891204788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 121911.03192046043,
            "unit": "ns/iter",
            "extra": "iterations: 5733\ncpu: 121911.72161172284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 249591.91684510847,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 249585.5460385484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62695.60329991773,
            "unit": "ns/iter",
            "extra": "iterations: 11273\ncpu: 62696.10573937734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62480.86198288256,
            "unit": "ns/iter",
            "extra": "iterations: 11216\ncpu: 62479.76997146863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61925.997612096726,
            "unit": "ns/iter",
            "extra": "iterations: 11307\ncpu: 61925.89546298748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124666.50213523128,
            "unit": "ns/iter",
            "extra": "iterations: 5620\ncpu: 124665.74733096283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116851.53214523992,
            "unit": "ns/iter",
            "extra": "iterations: 6004\ncpu: 116848.38441039226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40340.947747434424,
            "unit": "ns/iter",
            "extra": "iterations: 17358\ncpu: 40341.24899181963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201537.9226327825,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 201532.13048498955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164549.14657568623,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 164545.53955016422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160756.00847652522,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160746.84994272713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161450.1622058205,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 161445.98523304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 271593.8608964458,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 271581.80061824026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1083829.5681114006,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1083764.5510835852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 922211.3311603676,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 922167.6662320803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 908537.9596354137,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 908534.7656250057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 903581.8296774045,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 903587.3548387027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 586764.7279596662,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 586727.4559193973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 895822.0423076787,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 895798.2051282006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41513.311840075396,
            "unit": "ns/iter",
            "extra": "iterations: 16858\ncpu: 41510.56471704827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 204756.96226968462,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 204752.06200643297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 167965.7949700582,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 167958.61077844436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167029.22092189954,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 167026.51062813285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 167152.08621924667,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 167147.79078098893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 272779.4043887173,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 272770.415360501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1087427.754276833,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1087393.001555202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 913103.7516340257,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 913065.751633993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 912971.7812500122,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 912952.9947916603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 909262.7898832603,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 909211.8028534357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 592290.9848101271,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 592278.6497890258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 907420.5347937993,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 907425.773195878 ns\nthreads: 1"
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
        "date": 1702421901655,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14688.208207705811,
            "unit": "ns/iter",
            "extra": "iterations: 47760\ncpu: 14682.428810720268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117950.59119409512,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 117944.4475407552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 223962.72190574382,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 223952.4598653547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 323978.2342880039,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 323968.4566428003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 427535.4992577933,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 427529.6882731318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 530421.1305674246,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 530403.6607687613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 509548.15399995825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509543.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 594470.6800000289,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594421.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 676815.2600732506,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 676771.3553113557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11276.549795780003,
            "unit": "ns/iter",
            "extra": "iterations: 61943\ncpu: 11276.652729121917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9364.016244522574,
            "unit": "ns/iter",
            "extra": "iterations: 74856\ncpu: 9363.32558512343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9380.629040265383,
            "unit": "ns/iter",
            "extra": "iterations: 74531\ncpu: 9379.88488011701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9480.166914749305,
            "unit": "ns/iter",
            "extra": "iterations: 73900\ncpu: 9479.51826792962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15171.690937006288,
            "unit": "ns/iter",
            "extra": "iterations: 46243\ncpu: 15170.776117466437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56592.06788620836,
            "unit": "ns/iter",
            "extra": "iterations: 14377\ncpu: 56587.05571398768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256263.9428914885,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 256247.7908025248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203753.0680353308,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 203734.80544282607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200558.9601873585,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 200549.08665105383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201754.06751054103,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 201735.79465541453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 464056.67789471,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 464050.4736842108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3701120.686507747,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3700865.476190473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2975308.4102564338,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2975128.2051282013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2981904.8141026027,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2981750.6410256424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2954189.651757206,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2953916.6134185325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1722783.0870369745,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1722789.4444444408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2898012.971875019,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2897934.062500007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10946610.469387354,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10946088.775510212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6532726.223776369,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6532505.594405597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14351294.162162583,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14350632.432432448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53149.732899998984,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53150.30999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286340.8348837333,
            "unit": "ns/iter",
            "extra": "iterations: 3010\ncpu: 286318.90365448635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 226047.92762811208,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 226038.90649762252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 226600.32813738703,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 226574.21400264092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 224049.21953123788,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 224037.10937499895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 474677.28820958047,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 474653.38427947677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3762925.4817814673,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3762682.9959514085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3056633.105263273,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3056485.526315802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3027639.9153093593,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3027421.824104225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3003253.022580654,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3003108.7096774406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1750577.2781954065,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1750445.6766917373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2935270.7034701295,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2935207.886435331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11228802.213483423,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11227768.539325899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6457407.5277781,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6456930.555555542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54038.626585622216,
            "unit": "ns/iter",
            "extra": "iterations: 15136\ncpu: 54036.508985201144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 253248.86879432213,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 253238.09101654918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199474.90881599905,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 199476.5526866713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199077.32180171701,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 199071.79010912369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198970.87825279712,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 198962.08178438593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 445462.2782608639,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 445430.1278772397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3726878.262948349,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3726535.0597609533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2987827.1474357685,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2987673.717948716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2989922.0064103305,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2989632.6923076953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2978045.2811502353,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2977963.5782747613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1720747.6122448768,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1720637.2912801413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2898676.4330217903,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2898479.127725862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5647.571289086484,
            "unit": "ns/iter",
            "extra": "iterations: 123925\ncpu: 5647.159975791777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31290.90551427872,
            "unit": "ns/iter",
            "extra": "iterations: 22342\ncpu: 31288.93116104197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26120.056538159857,
            "unit": "ns/iter",
            "extra": "iterations: 26743\ncpu: 26118.1655012525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25806.917173904774,
            "unit": "ns/iter",
            "extra": "iterations: 26779\ncpu: 25807.158594421056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20398.62277331466,
            "unit": "ns/iter",
            "extra": "iterations: 34356\ncpu: 20397.45022703452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122883.41603657295,
            "unit": "ns/iter",
            "extra": "iterations: 5687\ncpu: 122884.56128011378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 246375.82636203963,
            "unit": "ns/iter",
            "extra": "iterations: 2845\ncpu: 246366.29173989335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62123.052529009045,
            "unit": "ns/iter",
            "extra": "iterations: 11289\ncpu: 62119.213393568294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62196.17709258548,
            "unit": "ns/iter",
            "extra": "iterations: 11254\ncpu: 62189.728096675666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61969.02308712968,
            "unit": "ns/iter",
            "extra": "iterations: 11305\ncpu: 61964.40513047402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124135.4474942398,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 124136.55038073387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117009.60394055986,
            "unit": "ns/iter",
            "extra": "iterations: 5989\ncpu: 117002.57138086538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39330.22879639796,
            "unit": "ns/iter",
            "extra": "iterations: 17780\ncpu: 39329.12823397072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 193526.958760033,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 193516.5790202013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 156159.12455277078,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 156160.86762075292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156619.72073280014,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 156614.41018766773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156684.69946333297,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 156681.19409659944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 267804.5530042016,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 267795.4841178683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1073712.59877485,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1073701.5313935585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 908951.8910505318,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 908962.7756160838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 903598.2062256924,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 903576.7833981881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 896792.3831417264,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 896765.9003831468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 583217.4712739399,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 583200.1665278979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 891976.123252841,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 891961.4993646714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40176.09829206784,
            "unit": "ns/iter",
            "extra": "iterations: 17448\ncpu: 40175.911279229906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197539.73419864662,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 197538.91083521346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 162273.22337963004,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 162266.36574073872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 161842.2564814847,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 161838.2175925939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 160802.2900322959,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 160804.1762805698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 266583.5464938872,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 266576.98170731915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1071379.255742765,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1071363.2465543738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 902517.9201031341,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 902490.850515454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 905058.479487217,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 905049.1025641022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 895518.731457738,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 895503.1969309433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 587501.9874055512,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 587483.4592779127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 889125.0874524872,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 889109.5057034183 ns\nthreads: 1"
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
        "date": 1702422473838,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14505.506526680672,
            "unit": "ns/iter",
            "extra": "iterations: 42671\ncpu: 14504.661245342268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118582.87996642744,
            "unit": "ns/iter",
            "extra": "iterations: 7148\ncpu: 118582.24678231674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222781.4367786651,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 222761.118235445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 324770.3802710847,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 324754.66867469903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 429390.44696595543,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 429355.994079921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 532351.8475198968,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 532318.3710961425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 510741.180999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510700.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 592789.137000011,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592784.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 679230.2328467136,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 679223.3576642335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11360.9222005845,
            "unit": "ns/iter",
            "extra": "iterations: 61620\ncpu: 11360.660499837726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9560.993690334628,
            "unit": "ns/iter",
            "extra": "iterations: 73221\ncpu: 9561.026208328218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9505.528934663005,
            "unit": "ns/iter",
            "extra": "iterations: 73113\ncpu: 9505.089382189197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9558.749426104105,
            "unit": "ns/iter",
            "extra": "iterations: 73184\ncpu: 9558.798371228693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15300.909100850666,
            "unit": "ns/iter",
            "extra": "iterations: 45721\ncpu: 15300.48555368431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56928.519849035336,
            "unit": "ns/iter",
            "extra": "iterations: 14308\ncpu: 56928.11014816882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259229.10788757916,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 259215.1103052283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203939.2896122547,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 203933.91574916244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202716.77351338527,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 202708.62354892257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199404.87011467587,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 199401.21694359957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 459203.6889927338,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 459181.723779855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3694409.2270916365,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3694244.223107565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2956553.0955414143,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2956497.133757961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2986844.463022469,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2986711.897106102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2969615.1182108335,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2969560.0638977652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1736770.0430711375,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1736712.1722846427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2893908.2554517486,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2893717.4454828626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11103080.567010267,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11102116.49484536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6531897.985915591,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6531425.352112672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14447861.082191737,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14447008.219178088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53778.54470000045,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53771.5900000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 287424.9618729014,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 287408.99665551755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229371.02704150058,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 229359.3842034811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 229213.00161030347,
            "unit": "ns/iter",
            "extra": "iterations: 3726\ncpu: 229199.94632313328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227702.89954823704,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 227688.4666489509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 470889.6110509073,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 470861.10509208986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3750784.8790321606,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3750643.1451612697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3048599.738562251,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3048318.9542483743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3029273.1493506446,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3029123.376623368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3008856.847896502,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3008656.634304214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1762549.2661596832,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1762456.0836501806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2937895.170886209,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2937738.924050632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11326157.489361443,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11325031.91489358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6564384.133802503,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6564022.5352112325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54990.280685254176,
            "unit": "ns/iter",
            "extra": "iterations: 14885\ncpu: 54989.37856902961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 254881.5229357812,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 254872.4178751118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 200838.5378663487,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 200839.57796013978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 200602.7808923212,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 200597.5473020329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198712.20880649082,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 198703.66164542316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 435720.0421898529,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 435702.410848819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3712297.34136534,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3712277.5100401393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2989887.233974505,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2989806.730769218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2985634.298076944,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2985480.4487179364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2987438.5654951353,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2987316.932907348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1738862.5009346546,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1738811.5887850532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2895323.9252335625,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2895219.6261682115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5708.583881766075,
            "unit": "ns/iter",
            "extra": "iterations: 123078\ncpu: 5708.52386291621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32778.300560486816,
            "unit": "ns/iter",
            "extra": "iterations: 21410\ncpu: 32777.669313404724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26211.884374884972,
            "unit": "ns/iter",
            "extra": "iterations: 26707\ncpu: 26211.58497772129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26059.47503539678,
            "unit": "ns/iter",
            "extra": "iterations: 26838\ncpu: 26058.834488411776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20645.763462446022,
            "unit": "ns/iter",
            "extra": "iterations: 33872\ncpu: 20645.547945205268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122755.3453111311,
            "unit": "ns/iter",
            "extra": "iterations: 5705\ncpu: 122748.37861525115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247018.55751586737,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 247001.16443190226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61893.251304730744,
            "unit": "ns/iter",
            "extra": "iterations: 11305\ncpu: 61888.24413976065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62038.64833215108,
            "unit": "ns/iter",
            "extra": "iterations: 11272\ncpu: 62034.90951029114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62069.89676903858,
            "unit": "ns/iter",
            "extra": "iterations: 11266\ncpu: 62065.480205928405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125804.1064939705,
            "unit": "ns/iter",
            "extra": "iterations: 5559\ncpu: 125804.76704443274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116595.94908180987,
            "unit": "ns/iter",
            "extra": "iterations: 5990\ncpu: 116596.39398998249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39543.16392702118,
            "unit": "ns/iter",
            "extra": "iterations: 17703\ncpu: 39543.39377506628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194411.71710160756,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 194409.05052748535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 157231.50438103522,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 157232.32981352517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 157388.52606741502,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 157376.67415730478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157019.17096701032,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 157000.269239398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 263396.30146783695,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 263383.1012419999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1064541.2496194395,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1064478.0821917837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 900091.4724005116,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 900044.801026957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 898329.2130936916,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 898267.6508343945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 903719.9731114202,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 903711.011523703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 586772.7755444252,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 586745.8123952996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 888870.47588831,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 888814.086294411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41206.10770948358,
            "unit": "ns/iter",
            "extra": "iterations: 17018\ncpu: 41203.26125279126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 198236.00650820465,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 198210.1867572142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161790.31067286106,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 161782.1577726246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162203.86098238983,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 162200.92678405892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 162239.52888169573,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 162235.51293900213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 266780.82990867656,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 266776.4459665135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1070928.8190184035,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1070839.1104294455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 902513.3573264893,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 902500.771208219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 898637.0965251304,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 898494.0797940771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 925782.388174819,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 925737.4035989786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 591031.7579564515,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 590993.9698492553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 895159.8242038162,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 895125.7324840833 ns\nthreads: 1"
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
        "date": 1702453342471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14214.132321613557,
            "unit": "ns/iter",
            "extra": "iterations: 49289\ncpu: 14213.6906814908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117600.69022783157,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 117599.16277793027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222162.7984118833,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 222158.70901639346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 326356.38049143634,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 326342.8518242741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 425694.86225489737,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 425675.4901960784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 529778.4512195119,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 529770.6097560973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 509055.13600000064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509050.1999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 590753.1959999801,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590745.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 674564.2318946588,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 674548.2077542068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11428.232327846354,
            "unit": "ns/iter",
            "extra": "iterations: 61297\ncpu: 11428.042155407275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9599.328118672769,
            "unit": "ns/iter",
            "extra": "iterations: 74086\ncpu: 9599.257619523243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9386.582966086899,
            "unit": "ns/iter",
            "extra": "iterations: 73747\ncpu: 9386.1974046402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9385.169473569882,
            "unit": "ns/iter",
            "extra": "iterations: 73628\ncpu: 9384.935079046038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15175.433386769659,
            "unit": "ns/iter",
            "extra": "iterations: 46785\ncpu: 15174.99412204767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57631.03572183338,
            "unit": "ns/iter",
            "extra": "iterations: 14193\ncpu: 57629.8316071302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 264087.74354243255,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 264082.53382533806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 209565.7289926288,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 209559.6805896806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201061.04131255805,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 201054.390934844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200921.5291342268,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 200919.29700401047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 457151.44496609597,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 457140.427751695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3655545.335968337,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3655437.549407113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3006639.6198083404,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 3006557.1884984034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2977796.578778168,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2977675.241157557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2954011.869841242,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2953942.222222229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1740838.9114877656,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1740783.2391713716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2888580.361111143,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2888439.50617284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11069351.948453598,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11068923.711340217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5009624.770000016,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5009644.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14374021.324324086,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14372802.702702696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53961.11230000144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53961.34000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290983.444482173,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 290972.19015280134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233708.26172301135,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 233700.02726281367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 229404.35767991134,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 229401.15467239654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 225743.74728764742,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 225741.54538237696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 472039.51164050406,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 472023.60584731784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3738715.0200803047,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3738523.694779107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3027996.538961112,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3027895.7792207743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3015843.905844191,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3015729.545454542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2996371.4645161177,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2996364.516129042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1777429.4126679257,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1777349.9040307119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2926851.107255489,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2926739.74763407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11339582.425531877,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11339163.829787256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6488920.234482779,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6488615.17241376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54855.32786554573,
            "unit": "ns/iter",
            "extra": "iterations: 14875\ncpu: 54852.42352941172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261447.18389057522,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 261437.78115501566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 205402.76148535902,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 205398.0004760782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 200683.0651119825,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 200678.3421842527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201178.6741625709,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 201173.10845631207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 437439.6845027685,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 437426.1484098942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3683791.5263158437,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3683696.7611335977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2980624.5369775,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2980488.74598071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3000251.581993548,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3000216.398713841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2953158.679365118,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2953070.7936508018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1732174.934944279,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732127.3234200657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2895560.255451684,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2895497.5077881645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5578.073593038876,
            "unit": "ns/iter",
            "extra": "iterations: 124346\ncpu: 5577.897962137899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32894.60137152442,
            "unit": "ns/iter",
            "extra": "iterations: 21436\ncpu: 32893.585557006765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26350.665149862194,
            "unit": "ns/iter",
            "extra": "iterations: 26591\ncpu: 26350.084615095257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25888.9451692327,
            "unit": "ns/iter",
            "extra": "iterations: 27211\ncpu: 25888.28782477699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20620.540439019016,
            "unit": "ns/iter",
            "extra": "iterations: 34076\ncpu: 20619.705951402655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 121604.52706753252,
            "unit": "ns/iter",
            "extra": "iterations: 5671\ncpu: 121602.55686827737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 233260.88431372377,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 233255.16339869375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61705.825075138615,
            "unit": "ns/iter",
            "extra": "iterations: 11645\ncpu: 61704.388149421036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61073.634623864054,
            "unit": "ns/iter",
            "extra": "iterations: 11339\ncpu: 61072.2109533467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61897.35392910629,
            "unit": "ns/iter",
            "extra": "iterations: 11313\ncpu: 61894.14832493611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125032.61579699839,
            "unit": "ns/iter",
            "extra": "iterations: 5596\ncpu: 125029.5032165815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116235.84014930502,
            "unit": "ns/iter",
            "extra": "iterations: 6162\ncpu: 116228.4810126593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39274.89242162615,
            "unit": "ns/iter",
            "extra": "iterations: 17959\ncpu: 39272.60983350962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 192893.5265957488,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 192882.1668533016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 156923.43357110632,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 156919.30450289854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 156371.00067279357,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 156371.5855572974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 155782.1404958685,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 155782.80098280316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 265946.00228746235,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 265934.9980937853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1064900.8373860451,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1064839.057750756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 904184.1314432884,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 904128.9948453573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 891666.2038216377,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 891632.8662420403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 894491.8375959132,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 894464.7058823622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 583402.0633861449,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 583386.9057547936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 876055.8360656061,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 876010.9709962198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41304.170140488044,
            "unit": "ns/iter",
            "extra": "iterations: 17368\ncpu: 41241.33463841541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 197808.30228570983,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 197802.6285714277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 161784.91350849156,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 161779.67914438248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 161749.0827633336,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 161745.00683994315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 161167.83217912636,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 161165.37396121887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 266963.9086775231,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 266951.26942023967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1066802.0733944997,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1066770.1834862551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 898552.2699228841,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 898547.9434447333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 889052.7685421967,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 889046.1636828559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 891681.0480404296,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 891659.16561314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 590420.4407064465,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 590412.2792262409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 889329.6104061127,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 889320.8121827334 ns\nthreads: 1"
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
        "date": 1702479550407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14991.035633135923,
            "unit": "ns/iter",
            "extra": "iterations: 47091\ncpu: 14989.683803699221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118150.15427691126,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 118143.94512109757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 225586.41348372132,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 225575.18584978208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 334804.1822641575,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 334796.86792452843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 430337.669638425,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 430297.8207033183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 533652.3895384744,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 533629.046153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 512447.8600000089,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512437.00000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 598450.6700000338,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598410.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 678012.8845029557,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 677958.4064327487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11333.813767610547,
            "unit": "ns/iter",
            "extra": "iterations: 61681\ncpu: 11332.985846532956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9481.972575522292,
            "unit": "ns/iter",
            "extra": "iterations: 73985\ncpu: 9481.417854970598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9653.710215361289,
            "unit": "ns/iter",
            "extra": "iterations: 73458\ncpu: 9653.416918511255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9547.81755116822,
            "unit": "ns/iter",
            "extra": "iterations: 58093\ncpu: 9547.51519115899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15227.123579638894,
            "unit": "ns/iter",
            "extra": "iterations: 46027\ncpu: 15225.893497295066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56315.83041741187,
            "unit": "ns/iter",
            "extra": "iterations: 14518\ncpu: 56315.72530651602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 270318.4582023939,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 270297.0458830925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 214138.5779839619,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 214123.72116349038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 210474.20324404215,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 210442.1479478991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 207700.83308823258,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 207694.82843137198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 460955.7682359063,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 460924.9870667361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3734077.678714869,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3733728.1124498066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2999390.7605178286,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2999338.187702268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3002668.7119739605,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002513.592233007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2981491.280645294,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2981259.6774193486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1740333.7467166798,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1740273.1707317096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2926244.757097878,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2926119.242902198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11020439.10309265,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11019723.711340178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6514097.507042158,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6513677.464788734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14533476.0684932,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14532550.684931545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53897.15339999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53896.169999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 296977.04295114963,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 296965.2926913754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 240138.57488058053,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 240128.37875807707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 236954.87517259343,
            "unit": "ns/iter",
            "extra": "iterations: 3621\ncpu: 236949.84810825545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 233637.5765864256,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 233634.0536105034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 474778.0488069387,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 474736.6594360108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3778857.589430911,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3778673.9837398403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3062101.0328947906,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3061891.4473684295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3047536.1278690128,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3047222.950819674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3021036.76547243,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3020812.7035830743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1767232.079999931,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1767139.0476190497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2957384.2222223193,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2957228.2539682584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11319520.585106332,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11318661.702127635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5033893.869999701,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5033513.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55332.11406715376,
            "unit": "ns/iter",
            "extra": "iterations: 14772\ncpu: 55328.29677768714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 266519.51208177727,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 266502.07558859943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 209728.17119766003,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 209710.4824883663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205161.7041746562,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 205152.75911708374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 204133.75531153247,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 204110.55144425872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 440878.20091094344,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 440871.7611336023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3742073.294354956,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3741926.6129032257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3017098.307443472,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3016987.3786407765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3030011.8051947597,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3029860.3896103892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3007823.135483946,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3007634.1935483925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1742460.3058161,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1742434.14634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2937096.842767214,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2936948.7421383853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5676.921806702165,
            "unit": "ns/iter",
            "extra": "iterations: 123540\ncpu: 5676.652905941402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33097.58453992483,
            "unit": "ns/iter",
            "extra": "iterations: 21203\ncpu: 33095.38272885897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26251.586014246986,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 26251.518560179957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26831.72197962208,
            "unit": "ns/iter",
            "extra": "iterations: 26106\ncpu: 26830.25741208911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20694.36923803282,
            "unit": "ns/iter",
            "extra": "iterations: 33886\ncpu: 20693.67585433525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 123012.87480245938,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 123001.05355575058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247172.411863826,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 247157.330637007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62313.54897595569,
            "unit": "ns/iter",
            "extra": "iterations: 11230\ncpu: 62308.940338378925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62014.30640742143,
            "unit": "ns/iter",
            "extra": "iterations: 11315\ncpu: 62011.57755192235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62252.3979001738,
            "unit": "ns/iter",
            "extra": "iterations: 11239\ncpu: 62249.310436871245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125535.26647513322,
            "unit": "ns/iter",
            "extra": "iterations: 5569\ncpu: 125527.45555755118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 119340.97301826745,
            "unit": "ns/iter",
            "extra": "iterations: 5967\ncpu: 119335.29411764786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40036.68217453452,
            "unit": "ns/iter",
            "extra": "iterations: 17475\ncpu: 40032.64663805477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196712.13872507267,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 196699.606852006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158236.3978689614,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 158220.358195419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158763.95306122504,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 158755.12471655407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158631.54638704858,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 158620.53795304324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 264318.43987938523,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 264305.23935168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1080150.1044546948,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1080077.2657450046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 905375.4145077665,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 905343.1347150187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 911387.192708298,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 911351.4322916701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 905521.6865284545,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 905437.6943005299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 591701.7004219025,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 591669.0295358605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 894187.9334187139,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 894171.830985913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41160.804846410625,
            "unit": "ns/iter",
            "extra": "iterations: 16961\ncpu: 41160.079004775245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200572.25021470507,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 200568.10764385824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163509.52640226146,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 163502.6284909626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163751.72788797747,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 163745.27421236978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164182.6327485358,
            "unit": "ns/iter",
            "extra": "iterations: 4275\ncpu: 164170.3157894737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 266729.2208237962,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 266728.6041189925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1082570.8827160986,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1082458.4876543253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 902888.4548968547,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 902839.3041237079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 904195.6390685745,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 904100.7761966435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 901701.9187096534,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 901667.3548387093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 592596.429297203,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 592583.0651989853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 897047.9268293248,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 896964.9550706036 ns\nthreads: 1"
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
        "date": 1702488559052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14397.208147322044,
            "unit": "ns/iter",
            "extra": "iterations: 48384\ncpu: 14396.901868386243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117682.78661844681,
            "unit": "ns/iter",
            "extra": "iterations: 7189\ncpu: 117679.87202670745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222534.61426005443,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 222528.69966658123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 325245.1754517984,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 325239.2319277107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 431990.25529816526,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 431980.6801379989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 530871.0838433414,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 530845.5936352506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 509834.302999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509799.80000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 593192.2610000129,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593175.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 674408.061090906,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 674386.0363636358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11390.736250508196,
            "unit": "ns/iter",
            "extra": "iterations: 61475\ncpu: 11390.422122814145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9563.583764572744,
            "unit": "ns/iter",
            "extra": "iterations: 67248\ncpu: 9562.520818462996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9763.07342577607,
            "unit": "ns/iter",
            "extra": "iterations: 74497\ncpu: 9762.317945689088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9502.203234603785,
            "unit": "ns/iter",
            "extra": "iterations: 73703\ncpu: 9501.563029998772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15216.805818481862,
            "unit": "ns/iter",
            "extra": "iterations: 45957\ncpu: 15216.169462758684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56688.39970869659,
            "unit": "ns/iter",
            "extra": "iterations: 14418\ncpu: 56685.573588569845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263288.82004278246,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 263276.44362969726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210586.181905904,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 210154.402895054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202995.2662091854,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 202982.3946994795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200735.4399530065,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 200725.54641598088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452038.23405350005,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 452023.04526749055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3726800.629032315,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3726580.241935485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2972523.307692271,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2972353.525641027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2973452.21405759,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2973312.7795527135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2969210.830670976,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2969092.651757187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1705012.3720073828,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1704915.1012891368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2898122.418749871,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2897935.937499996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10875784.397959316,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10875069.38775513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6419127.255172686,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6418826.896551719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14419052.594594423,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14418108.10810814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54240.38820000305,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54236.45000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 292254.48984427645,
            "unit": "ns/iter",
            "extra": "iterations: 2954\ncpu: 292237.40690589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230244.29304324577,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 230203.38436744662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 227918.03137464105,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 227907.52459452345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 227012.34476391165,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 227000.5803218141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 465648.1532258054,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 465629.677419355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3786343.9346939246,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3786122.0408163434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3031569.9413681882,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3031122.149837132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3010464.5903225355,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3010315.4838709743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3003350.2282958725,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3003145.6591639863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1755356.2172283886,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1755272.846441946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2930911.8485803916,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2930764.0378548927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11150893.22916655,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11150312.500000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6511698.577464957,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6511347.183098557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55212.78453373014,
            "unit": "ns/iter",
            "extra": "iterations: 14884\ncpu: 55210.31980650356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 260836.25364520118,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 260835.57108140877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 200787.0234356642,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 200781.48582141922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199790.23754074748,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 199786.16674429463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198507.15482526965,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 198498.6114325383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 435955.7655000117,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 435946.20000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3739881.4859436215,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3739734.9397590277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2995221.996784428,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2995170.4180064234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2971031.8690095386,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2970977.955271565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2971841.6964856144,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2971780.830670933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1716687.7812500428,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1716645.9558823637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2901229.510903504,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2901172.2741433033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5633.901423524976,
            "unit": "ns/iter",
            "extra": "iterations: 124269\ncpu: 5633.775921589452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32719.347784508576,
            "unit": "ns/iter",
            "extra": "iterations: 21959\ncpu: 32718.50266405582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26923.208905132615,
            "unit": "ns/iter",
            "extra": "iterations: 26816\ncpu: 26922.878132458183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26613.004601986955,
            "unit": "ns/iter",
            "extra": "iterations: 26293\ncpu: 26612.34168790175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20348.726320370566,
            "unit": "ns/iter",
            "extra": "iterations: 34460\ncpu: 20348.482298316747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 123719.1129174728,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 123716.29263120586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247861.35136089675,
            "unit": "ns/iter",
            "extra": "iterations: 2829\ncpu: 247854.15341109966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62315.0034611301,
            "unit": "ns/iter",
            "extra": "iterations: 11268\ncpu: 62314.2971246005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61664.23116906011,
            "unit": "ns/iter",
            "extra": "iterations: 11351\ncpu: 61663.47458373722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61897.72364823177,
            "unit": "ns/iter",
            "extra": "iterations: 11337\ncpu: 61897.05389432804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 123721.6228349324,
            "unit": "ns/iter",
            "extra": "iterations: 5658\ncpu: 123718.82290562188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117887.68206838977,
            "unit": "ns/iter",
            "extra": "iterations: 5995\ncpu: 117882.55212677279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39683.37930251029,
            "unit": "ns/iter",
            "extra": "iterations: 17606\ncpu: 39682.21628990159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194983.2717149267,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 194978.6469933203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159138.1681838784,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 159134.43331816114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158590.82882473496,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 158587.20163673477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157980.04654316517,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 157979.6882060542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 267878.7342657332,
            "unit": "ns/iter",
            "extra": "iterations: 2574\ncpu: 267874.94172494434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1072832.7886676954,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1072818.989280248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 903628.2532299914,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 903607.3643411001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 904182.4884020665,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 904152.4484536041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 897655.8626443786,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 897633.7612323576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 584730.9595618836,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 584723.3361415326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 891752.1936305643,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 891741.2738853612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41047.86298076764,
            "unit": "ns/iter",
            "extra": "iterations: 17056\ncpu: 41046.94535647298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 201227.23871153803,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 201224.90652861574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166252.2527264082,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 166248.5775248917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 165752.97539044108,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 165751.06483672425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 165310.7292010391,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 165306.48126325608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 267057.2190003838,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 267053.452880581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1076506.0828221326,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1076477.453987729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 901802.0811856083,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 901778.608247431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 898840.661125352,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 898796.8030690508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 895047.0409730643,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 894988.4763124082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 585971.6093880585,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 585938.8935456832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 893709.9859872144,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 893684.2038216529 ns\nthreads: 1"
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
        "date": 1702490838704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14424.510813148598,
            "unit": "ns/iter",
            "extra": "iterations: 48552\ncpu: 14423.879551820728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118538.47572270932,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 118536.50014033116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 223651.33848930683,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 223645.34673885014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 326006.0272417855,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 325991.2977676882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 431064.40069339174,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 431026.8449727588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 535259.9145666756,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 535248.1868469577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 513648.7139999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513647.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 594641.1889999581,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594609.0999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 681631.5683979415,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 681616.0204828086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11384.007536665771,
            "unit": "ns/iter",
            "extra": "iterations: 61433\ncpu: 11383.738381651534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9623.795528200531,
            "unit": "ns/iter",
            "extra": "iterations: 73438\ncpu: 9623.666221846986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9442.522315456814,
            "unit": "ns/iter",
            "extra": "iterations: 74007\ncpu: 9442.62434634561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9502.404323751742,
            "unit": "ns/iter",
            "extra": "iterations: 73686\ncpu: 9502.237874223061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15172.029548752747,
            "unit": "ns/iter",
            "extra": "iterations: 46161\ncpu: 15171.907021078392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57463.963082992275,
            "unit": "ns/iter",
            "extra": "iterations: 14194\ncpu: 57462.1459771735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 265123.19646729913,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 265113.9138518744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 212170.54927141275,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 212172.9068905901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206622.67771457636,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 206622.2112292853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 205130.09767775045,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 205116.66267656197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456212.0501810746,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 456199.27573719557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3714543.1240001014,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3714330.799999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3008798.7193548046,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3008676.451612895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3002420.448387232,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3002240.6451612986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2985711.395498367,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2985527.9742765306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1751627.5754716399,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1751590.3773584915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2917511.5817610403,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2917310.3773584897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11112535.708333483,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11112097.916666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5098439.669999948,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5098362.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14459781.337838214,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14459398.64864866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53982.13510000005,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53977.779999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 295572.4659596359,
            "unit": "ns/iter",
            "extra": "iterations: 2923\ncpu: 295561.1700307909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 236924.13348059708,
            "unit": "ns/iter",
            "extra": "iterations: 3169\ncpu: 236921.96276427808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 245708.9004059537,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 245695.56156968765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229441.09621535504,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 229425.31982942412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 469888.97411004896,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 469879.8813376484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3764616.91497976,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3764435.2226720797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3072653.9999999893,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3068500.6600660104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3048176.455737777,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3048024.262295083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3029330.9902596655,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3029127.2727272636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1781632.2509652511,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1781562.3552123469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2952917.6476191627,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2952856.825396814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11454693.376343604,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11454507.526881753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6640223.390070897,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6639946.099290791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56099.68650793892,
            "unit": "ns/iter",
            "extra": "iterations: 14616\ncpu: 56095.87438423603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 261646.29085956616,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 261628.63196125912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208014.55262521634,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 208002.20179046743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 204039.22819111648,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 204032.08937485077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 204418.96718972898,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 204405.34950071335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 438012.20816531306,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 437988.7096774192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3736014.436000005,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3735867.2000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3012846.068181694,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3012575.649350655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3018564.6213591364,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3018468.932038833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2996879.270096412,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2996608.360128621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1755079.8176692321,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1755010.3383458583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2929292.3573667696,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2929113.479623835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5704.4327141914555,
            "unit": "ns/iter",
            "extra": "iterations: 122589\ncpu: 5704.055013092537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32557.10624651375,
            "unit": "ns/iter",
            "extra": "iterations: 21516\ncpu: 32555.00092954084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27122.25595492568,
            "unit": "ns/iter",
            "extra": "iterations: 25735\ncpu: 27120.784923256382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26970.815963925586,
            "unit": "ns/iter",
            "extra": "iterations: 25946\ncpu: 26968.943189701837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20582.361351948177,
            "unit": "ns/iter",
            "extra": "iterations: 34025\ncpu: 20581.043350477477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122952.56894737194,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 122939.07017543778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247845.5573248438,
            "unit": "ns/iter",
            "extra": "iterations: 2826\ncpu: 247848.15994338377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62590.38544836357,
            "unit": "ns/iter",
            "extra": "iterations: 11174\ncpu: 62588.13316627853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62519.37781737074,
            "unit": "ns/iter",
            "extra": "iterations: 11225\ncpu: 62515.706013363124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62363.57365654059,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 62360.51154086076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126069.80046905739,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 126061.98809309248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117930.35582100408,
            "unit": "ns/iter",
            "extra": "iterations: 5944\ncpu: 117931.49394347011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39396.19114166695,
            "unit": "ns/iter",
            "extra": "iterations: 17746\ncpu: 39393.452045531005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197463.23978586047,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 197448.74612567056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 158966.60004536985,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 158964.70054446562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 158636.5734693797,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 158638.16326530636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 157853.01757152402,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157841.51835998846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 261967.19101123005,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 261945.58052434426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1075937.4454685051,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1075884.4854070614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 906886.8480519333,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 906829.4805194762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 901666.0271317543,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 901626.7441860494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 902053.4646074801,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 902033.4620334595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 587525.4203019727,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 587483.8926174509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 889358.538853566,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 889316.3057324695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40921.69038292806,
            "unit": "ns/iter",
            "extra": "iterations: 17105\ncpu: 40919.82461268602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199352.76944999024,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 199341.15132516285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163677.2865497052,
            "unit": "ns/iter",
            "extra": "iterations: 4275\ncpu: 163665.3099415177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 165133.22980634065,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 165126.49976381537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164138.80530142892,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 164126.6009852241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 266195.3254663068,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 266181.8043395527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1076065.121725667,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1076035.5932203492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 908463.8350649194,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 908443.7662337649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 901359.7477477113,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 901319.5624195662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 896555.6722151228,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 896500.0000000113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 590052.9594936692,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 590022.4472573851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 894356.2793366999,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 894319.8979591882 ns\nthreads: 1"
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
        "date": 1705573929586,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14779.594990927044,
            "unit": "ns/iter",
            "extra": "iterations: 47394\ncpu: 14779.176689032367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122360.50723589207,
            "unit": "ns/iter",
            "extra": "iterations: 6910\ncpu: 122360.82489146167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 230129.5290682205,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 230122.67056012744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 336057.14613291237,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 336036.1445783133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 442909.9739928685,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 442896.8383477819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 549349.5748578942,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 549315.0347441566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 529554.5380000136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529559.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 614364.3830000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614306.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 700619.7972665086,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 700575.2467729681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11552.57318238707,
            "unit": "ns/iter",
            "extra": "iterations: 60684\ncpu: 11552.369652626714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9628.130514351502,
            "unit": "ns/iter",
            "extra": "iterations: 72674\ncpu: 9627.932960893844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9630.920129727509,
            "unit": "ns/iter",
            "extra": "iterations: 72768\ncpu: 9631.01363236588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9670.615546478382,
            "unit": "ns/iter",
            "extra": "iterations: 72711\ncpu: 9670.324985215446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15356.44503145716,
            "unit": "ns/iter",
            "extra": "iterations: 45617\ncpu: 15356.463599096824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56319.58816207999,
            "unit": "ns/iter",
            "extra": "iterations: 14462\ncpu: 56318.78025169401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 270581.4238514797,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 270584.04657016974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 214803.04470115947,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 214797.06177800053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 211362.77391519127,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 211352.36686390566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 209561.96374326365,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 209541.62175404193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 463322.00842106144,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 463307.47368421155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3835409.5720162857,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3835323.868312757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3064348.5214521224,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3064144.8844884494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3091632.601328994,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3091535.548172761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3073754.2582780696,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3073565.8940397315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1773566.188931299,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1773506.4885496155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2990738.919093821,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2990640.453074431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11195462.906249769,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11195222.916666636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6540671.957746384,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6540737.323943647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14780783.26388912,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14780379.166666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53556.18489999756,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53556.69999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 299792.80578800966,
            "unit": "ns/iter",
            "extra": "iterations: 2868\ncpu: 299786.26220362645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237395.83264176888,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 237395.49100968256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 234935.06559169886,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 234931.89396009844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 234147.7583196959,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 234147.49045281016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 474703.92837617215,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 474702.02296336624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3885415.5708333356,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3885330.416666684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3141663.8412161544,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3141691.8918918823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3127239.535353429,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3127169.360269357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3119342.412969168,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3119299.317406136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1794869.767891645,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1794844.4874274668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3028975.5620915415,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3028946.7320261416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11493956.999999916,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11493810.752688175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6610514.617021387,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6610417.021276618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54770.357080857626,
            "unit": "ns/iter",
            "extra": "iterations: 14977\ncpu: 54769.893837216994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 267855.6288756719,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 267838.39649232844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 216082.14190193338,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 216078.306092125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 209133.45538988785,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 209133.90369102868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 205583.3584359247,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 205582.1385469453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 448962.8748075974,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 448959.20985120704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3843516.4362139227,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3843454.732510289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3085678.5066224732,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085707.9470198723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3099088.3633332564,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3099086.66666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3091875.6589402473,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3091793.70860927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1781326.558095229,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1781302.4761904844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2997857.138709679,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2997808.3870967873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5717.703989862153,
            "unit": "ns/iter",
            "extra": "iterations: 122310\ncpu: 5717.652685798326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33176.06297456228,
            "unit": "ns/iter",
            "extra": "iterations: 21072\ncpu: 33176.0630220198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26446.218129139063,
            "unit": "ns/iter",
            "extra": "iterations: 26576\ncpu: 26446.214629741222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26217.857831956,
            "unit": "ns/iter",
            "extra": "iterations: 26743\ncpu: 26217.331638185708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20648.04510282611,
            "unit": "ns/iter",
            "extra": "iterations: 33989\ncpu: 20648.02436082245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 123951.63353377707,
            "unit": "ns/iter",
            "extra": "iterations: 5654\ncpu: 123951.80403254306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256094.93683825614,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 256094.5235487417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 63820.112700434496,
            "unit": "ns/iter",
            "extra": "iterations: 10976\ncpu: 63819.925291544656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63340.101645869254,
            "unit": "ns/iter",
            "extra": "iterations: 11058\ncpu: 63338.533188641166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63485.82175884238,
            "unit": "ns/iter",
            "extra": "iterations: 11030\ncpu: 63485.83862194119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126799.67929338703,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 126795.6656346752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120070.21118330782,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 120064.12448700384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41974.25190651507,
            "unit": "ns/iter",
            "extra": "iterations: 12195\ncpu: 41973.35793358003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 200910.8362489281,
            "unit": "ns/iter",
            "extra": "iterations: 3487\ncpu: 200910.1233151702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164326.67117437595,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 164322.5860023712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 163204.1549394154,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 163200.0698974824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162628.9510213556,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 162623.5376044567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 269615.56362938037,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 269601.88389081054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1113214.2638436737,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1113161.4006514568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934182.2569907003,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 934147.2703062654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 937379.7309237203,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 937371.6198125707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 931535.815159604,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 931502.9255319207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 602818.4211886645,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 602792.5064599465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 922077.0184210449,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 922037.8947368414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41894.30421776927,
            "unit": "ns/iter",
            "extra": "iterations: 16715\ncpu: 41892.210589290575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 208195.22136269492,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 208187.32520083297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169737.90109355428,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 169727.29040097317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167810.21592540212,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 167802.7259684365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 167940.50673400448,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 167936.72438672447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 271462.72314850136,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 271457.9294300073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1111791.3402225834,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1111789.5071541993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 932767.4773333002,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 932724.1333333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 933785.2327127452,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 933744.4148936064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 927894.7899603894,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 927839.6301188888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 600617.6351931276,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 600611.7596566578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 919798.7844941257,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 919807.0959264156 ns\nthreads: 1"
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
        "date": 1705771620009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14367.623258806554,
            "unit": "ns/iter",
            "extra": "iterations: 48171\ncpu: 14366.80367856179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119626.95423919304,
            "unit": "ns/iter",
            "extra": "iterations: 7124\ncpu: 119620.4098820887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 225817.41487988504,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 225814.23404804966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 330237.93053434964,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 330234.0076335878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 433241.38646617223,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 433230.77694235614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 544248.3591022629,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 544236.9700748128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 530432.3210000348,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530417.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 602122.384615384,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 602098.2988165678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 685528.3487332352,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 685499.0312965726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11462.609609264717,
            "unit": "ns/iter",
            "extra": "iterations: 60962\ncpu: 11462.491388077817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9547.65841402662,
            "unit": "ns/iter",
            "extra": "iterations: 73633\ncpu: 9547.334754797452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9453.559630307702,
            "unit": "ns/iter",
            "extra": "iterations: 74224\ncpu: 9453.471922828187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9475.908815081699,
            "unit": "ns/iter",
            "extra": "iterations: 74157\ncpu: 9475.808082851263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15182.091171990172,
            "unit": "ns/iter",
            "extra": "iterations: 45299\ncpu: 15181.474204728605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56252.99413550208,
            "unit": "ns/iter",
            "extra": "iterations: 14494\ncpu: 56251.74554988265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 263074.6117070279,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 263066.6258044746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 211439.34796467982,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 211434.67385973563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206136.53879414054,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 206135.11890463633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 203268.22282997268,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 203261.59334126013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452542.39601430256,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 452535.71793561545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3795443.239837359,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3795256.9105691025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3010024.5259739216,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3009787.6623376613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3018681.724025871,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3018476.948051939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3057754.216828453,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3057532.686084137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1742487.052532878,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1742451.2195121946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2929662.5063290023,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2929547.1518987357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11089077.68749982,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11088453.125000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6538189.140844903,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6537902.112676059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14513794.849315437,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14512983.5616438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53895.70289999597,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53891.10000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293502.66791808733,
            "unit": "ns/iter",
            "extra": "iterations: 2930\ncpu: 293496.55290102464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 234276.47463176,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 234267.48499727176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232475.47612624988,
            "unit": "ns/iter",
            "extra": "iterations: 3707\ncpu: 232465.1470191516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228914.59888357058,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 228909.6491228063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 462629.09313463944,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 462606.12027674145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3845186.690082423,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3845202.479338856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3111538.00668894,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3111402.341137116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3099424.957095721,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3099314.1914191335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3063205.753289485,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063080.9210526333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1801826.6019231314,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1801765.5769230765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3009640.012986953,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3009612.6623376464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11540171.193548294,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11539455.913978469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5045702.360000064,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5045506.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54525.92389710598,
            "unit": "ns/iter",
            "extra": "iterations: 15006\ncpu: 54522.11115553772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263936.66195017134,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 263933.80498308176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206718.98253699104,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 206704.1474654382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 204485.1407192869,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 204484.0453777455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201716.81169142917,
            "unit": "ns/iter",
            "extra": "iterations: 4174\ncpu: 201708.98418782794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 443078.22148338717,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 443069.10485933523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3910889.9458334176,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910688.33333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3119255.4666667623,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3119035.333333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3111700.53333323,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111635.666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3056613.6338982964,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3056425.423728816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1792202.7032520098,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1792167.0731707357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3048914.3106796024,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3048744.3365695793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5832.855461098196,
            "unit": "ns/iter",
            "extra": "iterations: 106691\ncpu: 5832.894058542884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33043.83956827591,
            "unit": "ns/iter",
            "extra": "iterations: 20476\ncpu: 33041.56573549515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27573.409033128457,
            "unit": "ns/iter",
            "extra": "iterations: 25174\ncpu: 27572.630491777192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27206.268437524446,
            "unit": "ns/iter",
            "extra": "iterations: 24922\ncpu: 27204.449883636953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20788.272117218592,
            "unit": "ns/iter",
            "extra": "iterations: 32486\ncpu: 20788.413470417872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 124247.52815295759,
            "unit": "ns/iter",
            "extra": "iterations: 5701\ncpu: 124241.06297140775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 261146.97201018527,
            "unit": "ns/iter",
            "extra": "iterations: 2751\ncpu: 261143.40239912862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64836.95994587305,
            "unit": "ns/iter",
            "extra": "iterations: 11085\ncpu: 64833.071718538566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63902.86997126243,
            "unit": "ns/iter",
            "extra": "iterations: 11136\ncpu: 63898.3656609201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64050.27532723716,
            "unit": "ns/iter",
            "extra": "iterations: 11154\ncpu: 64048.51174466553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 121601.35845427508,
            "unit": "ns/iter",
            "extra": "iterations: 5719\ncpu: 121592.97079909172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 119067.15076197132,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 119067.92452830213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39868.92154262909,
            "unit": "ns/iter",
            "extra": "iterations: 17347\ncpu: 39867.29693895238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199799.74334988953,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 199800.90616778593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 163249.00369601304,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 163241.972741974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160595.38978801208,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 160590.8365625731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161884.1091822741,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 161873.29830973258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276435.64951644756,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 276427.8916827849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1128293.4920634562,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1128259.8412698407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 954637.4953146256,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 954555.9571619794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 932048.5653896743,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 932053.8969616971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 931769.4031620333,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 931677.3386034205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 605703.705172373,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 605686.1206896479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 919510.0143228885,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 919489.7135416657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41803.638386484985,
            "unit": "ns/iter",
            "extra": "iterations: 16808\ncpu: 41802.52260828185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 205812.78226744258,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 205801.62790697682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169475.82366976293,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 169464.11357671316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 168628.06403013747,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 168621.4218455724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 167740.3479999986,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 167730.77647058817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 277465.7110760864,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 277454.86795427545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1127838.822400008,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1127770.7199999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 930480.1497006088,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 930484.8802395182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 935647.7833553205,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 935600.6605019763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 933808.5708712465,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 933729.9089726963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 619112.8740293117,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 619087.7480586743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 923300.0198412235,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 923235.8465608526 ns\nthreads: 1"
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
        "date": 1705772033706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14787.272006227826,
            "unit": "ns/iter",
            "extra": "iterations: 47532\ncpu: 14786.459648236978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118182.9748743748,
            "unit": "ns/iter",
            "extra": "iterations: 7164\ncpu: 118177.16359575657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 225593.88138639193,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 225586.26444159183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 325577.8860377396,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 325578.67924528295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 428827.82946120395,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 428806.1295106278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 538738.3402692896,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 538680.6609547128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 511810.41300000635,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511799.49999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 593967.5369999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593966.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 680977.6008771919,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 680969.8099415207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11459.258424941114,
            "unit": "ns/iter",
            "extra": "iterations: 61039\ncpu: 11459.006536804338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9616.852652394431,
            "unit": "ns/iter",
            "extra": "iterations: 72821\ncpu: 9616.565276499901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9608.986530645736,
            "unit": "ns/iter",
            "extra": "iterations: 72832\ncpu: 9608.880711775057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9561.673270303043,
            "unit": "ns/iter",
            "extra": "iterations: 73192\ncpu: 9561.67887200788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15262.01289872774,
            "unit": "ns/iter",
            "extra": "iterations: 45896\ncpu: 15262.170995293694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56463.223714265536,
            "unit": "ns/iter",
            "extra": "iterations: 14447\ncpu: 56462.891949885714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259799.50616913082,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 259796.56936503196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202686.92101518443,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 202685.36527514245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202313.84720908708,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 202310.85619678348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200935.41584391095,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 200932.41654913028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 466728.1601915865,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 466716.4981373073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3741616.4600000456,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3741424.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2990519.254838788,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2990434.83870967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3006759.5162337623,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3006679.2207792173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2998595.536977554,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2998487.781350482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1724135.2905028344,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1724073.1843575384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2918541.5754716215,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2918421.0691823973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10972609.479166748,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 10972379.166666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5028722.290000189,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5028579.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14347079.635135252,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14346539.18918919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53521.532999999974,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53520.269999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 287121.1123707858,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 287110.90363454504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229737.15188172762,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 229733.49462365464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 227850.43456196476,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 227849.0384615386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226754.4768702061,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 226750.91197462426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 475885.0855732267,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 475875.37026878446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3771921.4308943613,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3771797.9674796793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3044247.163398634,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3044195.4248365806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3047779.4491803176,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3047634.09836064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3024455.9058441785,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3024361.363636373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1760017.5104364275,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1759996.7741935535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2950061.4063492557,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2949979.3650793824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11379867.319148732,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11379589.361702131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6311778.510204048,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6311603.401360546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54364.44991375878,
            "unit": "ns/iter",
            "extra": "iterations: 15074\ncpu: 54361.48998275148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258398.27909773935,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 258391.00751879724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199632.3709489396,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 199625.15737934166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198826.63419713013,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 198822.83664969902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 196633.37869003604,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 196625.32287822835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 448634.031843862,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 448625.5264509504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3747768.6104417243,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3747688.353413649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3005742.5774193616,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3005692.9032258173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3021378.440129448,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3021323.948220061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3011036.3419355177,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3010918.387096767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1732840.7156133978,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732815.4275092965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2935943.0817610053,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2935793.7106918427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5679.579519529719,
            "unit": "ns/iter",
            "extra": "iterations: 123171\ncpu: 5679.547133659671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 30568.410667367116,
            "unit": "ns/iter",
            "extra": "iterations: 22836\ncpu: 30567.4330005253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25755.525782315788,
            "unit": "ns/iter",
            "extra": "iterations: 27131\ncpu: 25755.582175371394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25859.680982724985,
            "unit": "ns/iter",
            "extra": "iterations: 27149\ncpu: 25858.970864488587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20476.510845350716,
            "unit": "ns/iter",
            "extra": "iterations: 34116\ncpu: 20476.319029194656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125279.82138151344,
            "unit": "ns/iter",
            "extra": "iterations: 5313\ncpu: 125271.9932241665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247557.60841881644,
            "unit": "ns/iter",
            "extra": "iterations: 2827\ncpu: 247550.44216483843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62510.70557475799,
            "unit": "ns/iter",
            "extra": "iterations: 11283\ncpu: 62508.87175396663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62062.86234781896,
            "unit": "ns/iter",
            "extra": "iterations: 11253\ncpu: 62060.64160668327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62049.58205630814,
            "unit": "ns/iter",
            "extra": "iterations: 11224\ncpu: 62049.62580185292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124640.917895863,
            "unit": "ns/iter",
            "extra": "iterations: 5627\ncpu: 124642.15390083459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117344.53709298118,
            "unit": "ns/iter",
            "extra": "iterations: 5958\ncpu: 117342.98422289325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39847.23398804541,
            "unit": "ns/iter",
            "extra": "iterations: 17565\ncpu: 39847.29860518044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 202016.87998859736,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 202011.2884834664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 159370.60606060948,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 159371.06402369644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 159734.52380951875,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 159732.4675324664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 160416.73249138924,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 160416.6016073485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 269372.61689059576,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 269364.8368522094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1080615.4234931234,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1080614.9922720294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 911555.8272251423,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 911564.7905759065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 909081.7347994321,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 909080.3363518706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 904674.8348387447,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 904673.2903225934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 585299.2368200663,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 585279.8326359895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 896959.0473751968,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 896957.490396926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41510.75872714351,
            "unit": "ns/iter",
            "extra": "iterations: 16844\ncpu: 41509.89076228945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 203109.77732557678,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 203108.86627907035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166324.0914272162,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 166324.05604369644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167327.07662743577,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 167327.16790775978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166691.10019038385,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 166692.7653498351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 271758.284108526,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 271758.3720930225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1084766.2724458077,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1084756.346749228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 911834.67100131,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 911808.3224967499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 906216.613195353,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 906209.7024579551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 903477.736434065,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 903462.1447028492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 592549.6317567363,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 592550.4222972943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 899963.9884319002,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 899947.5578406191 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}