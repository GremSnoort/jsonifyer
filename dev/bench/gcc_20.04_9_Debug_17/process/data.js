window.BENCHMARK_DATA = {
  "lastUpdate": 1702398823864,
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
      }
    ]
  }
}