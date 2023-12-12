window.BENCHMARK_DATA = {
  "lastUpdate": 1702399129758,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-12 22.04 Release c++-17": [
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
        "date": 1702399129430,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 948.2241924762237,
            "unit": "ns/iter",
            "extra": "iterations: 737130\ncpu: 948.2240581715572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19241.97454503855,
            "unit": "ns/iter",
            "extra": "iterations: 43685\ncpu: 19241.73514936477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44998.26929699711,
            "unit": "ns/iter",
            "extra": "iterations: 20327\ncpu: 44996.63009789934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56083.02660000391,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56082.239999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 67215.14126552122,
            "unit": "ns/iter",
            "extra": "iterations: 11758\ncpu: 67213.49719340028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84028.45712918826,
            "unit": "ns/iter",
            "extra": "iterations: 10450\ncpu: 84024.58373205739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100540.79813558128,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 100539.21049602947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 130787.69080444842,
            "unit": "ns/iter",
            "extra": "iterations: 7471\ncpu: 130787.60540757595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 149308.7403912091,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 149302.45367192852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 839.1354529950588,
            "unit": "ns/iter",
            "extra": "iterations: 849601\ncpu: 839.1359002637702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 651.6083784221626,
            "unit": "ns/iter",
            "extra": "iterations: 1080275\ncpu: 651.6016754992936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 639.1867564880961,
            "unit": "ns/iter",
            "extra": "iterations: 1080514\ncpu: 639.1302657809151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 642.836071654587,
            "unit": "ns/iter",
            "extra": "iterations: 1091849\ncpu: 642.8262516153782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1268.2507042151215,
            "unit": "ns/iter",
            "extra": "iterations: 552743\ncpu: 1268.2351472565026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5575.241904921374,
            "unit": "ns/iter",
            "extra": "iterations: 143019\ncpu: 5574.915221054553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 25993.871559631632,
            "unit": "ns/iter",
            "extra": "iterations: 32264\ncpu: 25992.896107116274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20452.774453423623,
            "unit": "ns/iter",
            "extra": "iterations: 40342\ncpu: 20451.30633087106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18771.176826005518,
            "unit": "ns/iter",
            "extra": "iterations: 44852\ncpu: 18770.46508516903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19868.327263064795,
            "unit": "ns/iter",
            "extra": "iterations: 41404\ncpu: 19867.38720896533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56460.955464497114,
            "unit": "ns/iter",
            "extra": "iterations: 14887\ncpu: 56456.79451870749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 643806.2089999904,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643404.9999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 508579.9209999777,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508540.9000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 502638.77600002615,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502595.60000000295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 511155.8639999885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511149.200000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 365528.7084901936,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 365509.61940610607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 502020.0039999736,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502005.49999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2807779.522255295,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2807554.5994065315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1198515.0286425943,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 1198417.1855541724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3525458.5724906945,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3525242.007434936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5676.902580338947,
            "unit": "ns/iter",
            "extra": "iterations: 141183\ncpu: 5676.3661347329435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 25481.46042240686,
            "unit": "ns/iter",
            "extra": "iterations: 32670\ncpu: 25479.571472298725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20537.067868192797,
            "unit": "ns/iter",
            "extra": "iterations: 40726\ncpu: 20536.256936600646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 19521.000583742785,
            "unit": "ns/iter",
            "extra": "iterations: 42827\ncpu: 19519.73988371823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20723.383381630723,
            "unit": "ns/iter",
            "extra": "iterations: 40028\ncpu: 20721.61486959122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 56408.03391310059,
            "unit": "ns/iter",
            "extra": "iterations: 14891\ncpu: 56406.02377274876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 632322.2270000315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632286.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 515118.4860000058,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515075.0999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 511193.8760001067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511181.8999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 513669.30300002877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513609.80000000464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 362605.19546393666,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 362579.7113402044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 503833.9620000443,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503835.29999999865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2917340.832298349,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2917153.105590056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1187879.88475833,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1187765.5514250326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5628.137822217547,
            "unit": "ns/iter",
            "extra": "iterations: 141015\ncpu: 5627.7700953799085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 26413.962596500958,
            "unit": "ns/iter",
            "extra": "iterations: 31735\ncpu: 26412.594926736852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 20633.607106726708,
            "unit": "ns/iter",
            "extra": "iterations: 40525\ncpu: 20631.930906847636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19608.035005224705,
            "unit": "ns/iter",
            "extra": "iterations: 42108\ncpu: 19606.623444476132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 20161.735882722744,
            "unit": "ns/iter",
            "extra": "iterations: 41474\ncpu: 20160.454742730442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 55860.302868090235,
            "unit": "ns/iter",
            "extra": "iterations: 15132\ncpu: 55860.2498017446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 650182.4270000043,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650163.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 502291.63899996364,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502233.6999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 501843.5619999764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501821.200000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 503292.68799998774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503253.8000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 366989.1443427239,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 366963.76871880266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 502032.62499996985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501981.7000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 294.5801981445553,
            "unit": "ns/iter",
            "extra": "iterations: 2381090\ncpu: 294.55917247982984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2552.3191105922742,
            "unit": "ns/iter",
            "extra": "iterations: 274115\ncpu: 2552.1065975958827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1929.8987789431599,
            "unit": "ns/iter",
            "extra": "iterations: 364766\ncpu: 1929.8012972700349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1904.076600955107,
            "unit": "ns/iter",
            "extra": "iterations: 367515\ncpu: 1904.07411942371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1468.7644483306547,
            "unit": "ns/iter",
            "extra": "iterations: 474605\ncpu: 1468.7045016382046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10380.173814462394,
            "unit": "ns/iter",
            "extra": "iterations: 67480\ncpu: 10379.857735625394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32701.8130706834,
            "unit": "ns/iter",
            "extra": "iterations: 21575\ncpu: 32701.478563151686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7575.992849569641,
            "unit": "ns/iter",
            "extra": "iterations: 92442\ncpu: 7575.996841262636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7460.433207005284,
            "unit": "ns/iter",
            "extra": "iterations: 93408\ncpu: 7460.434866392616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7610.694168298486,
            "unit": "ns/iter",
            "extra": "iterations: 92443\ncpu: 7610.545958049774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15754.233016243157,
            "unit": "ns/iter",
            "extra": "iterations: 44572\ncpu: 15754.078793861705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14819.808719728135,
            "unit": "ns/iter",
            "extra": "iterations: 47318\ncpu: 14819.421784521714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3247.041285298184,
            "unit": "ns/iter",
            "extra": "iterations: 215452\ncpu: 3246.973803909928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17234.990347775194,
            "unit": "ns/iter",
            "extra": "iterations: 40716\ncpu: 17233.517536103795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13373.68126636992,
            "unit": "ns/iter",
            "extra": "iterations: 52307\ncpu: 13372.6059609612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13182.032942596106,
            "unit": "ns/iter",
            "extra": "iterations: 53062\ncpu: 13181.221966755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14045.120315622038,
            "unit": "ns/iter",
            "extra": "iterations: 50060\ncpu: 14044.308829404852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31127.486623408033,
            "unit": "ns/iter",
            "extra": "iterations: 22502\ncpu: 31125.975468847166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 144116.95013336962,
            "unit": "ns/iter",
            "extra": "iterations: 4873\ncpu: 144102.68828237383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 122644.13075440272,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 122641.7819009284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 123416.26737026765,
            "unit": "ns/iter",
            "extra": "iterations: 5685\ncpu: 123411.64467897975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 126289.79880802699,
            "unit": "ns/iter",
            "extra": "iterations: 5537\ncpu: 126284.25139967326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 71611.77347087277,
            "unit": "ns/iter",
            "extra": "iterations: 9597\ncpu: 71607.2001667196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 122801.8474991318,
            "unit": "ns/iter",
            "extra": "iterations: 5718\ncpu: 122791.43057013117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3179.350740654467,
            "unit": "ns/iter",
            "extra": "iterations: 219333\ncpu: 3179.1577190846874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16631.995044105563,
            "unit": "ns/iter",
            "extra": "iterations: 42172\ncpu: 16631.999905150282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13083.23225434273,
            "unit": "ns/iter",
            "extra": "iterations: 50294\ncpu: 13083.232592356728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13018.34306922375,
            "unit": "ns/iter",
            "extra": "iterations: 53753\ncpu: 13018.339441519545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13839.098396631043,
            "unit": "ns/iter",
            "extra": "iterations: 50581\ncpu: 13838.818924102025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 31048.71311511442,
            "unit": "ns/iter",
            "extra": "iterations: 22577\ncpu: 31048.124197191984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 145076.5359734511,
            "unit": "ns/iter",
            "extra": "iterations: 4823\ncpu: 145076.71573709196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 126059.00739803692,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 126056.47780584637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 124820.78148412543,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 124817.05315733286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 126971.72117133847,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 126971.84430701949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 71641.2458781311,
            "unit": "ns/iter",
            "extra": "iterations: 9765\ncpu: 71641.36200716933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 123056.10396039567,
            "unit": "ns/iter",
            "extra": "iterations: 5656\ncpu: 123051.80339462323 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}