window.BENCHMARK_DATA = {
  "lastUpdate": 1702491509871,
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
        "date": 1702409430504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 849.4506364474826,
            "unit": "ns/iter",
            "extra": "iterations: 823320\ncpu: 849.4489384443473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 17591.148406753407,
            "unit": "ns/iter",
            "extra": "iterations: 47262\ncpu: 17590.785408996653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41514.841646228255,
            "unit": "ns/iter",
            "extra": "iterations: 22014\ncpu: 41514.72699191425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 51465.11110000347,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51464.02999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 62347.51267025504,
            "unit": "ns/iter",
            "extra": "iterations: 12628\ncpu: 62346.61070636682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 78333.28279053123,
            "unit": "ns/iter",
            "extra": "iterations: 11238\ncpu: 78329.36465563274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 93948.76576285494,
            "unit": "ns/iter",
            "extra": "iterations: 9294\ncpu: 93946.2664084355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122710.27949843806,
            "unit": "ns/iter",
            "extra": "iterations: 7975\ncpu: 122707.58620689655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137363.3244852025,
            "unit": "ns/iter",
            "extra": "iterations: 6216\ncpu: 137350.61132561124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 685.6689480908709,
            "unit": "ns/iter",
            "extra": "iterations: 1024214\ncpu: 685.6084763535749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 563.9262440194674,
            "unit": "ns/iter",
            "extra": "iterations: 1241540\ncpu: 563.9270583307834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 553.3013348822442,
            "unit": "ns/iter",
            "extra": "iterations: 1263707\ncpu: 553.2835538617728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 559.0289129569377,
            "unit": "ns/iter",
            "extra": "iterations: 1255700\ncpu: 558.9971330731865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1178.6846591919448,
            "unit": "ns/iter",
            "extra": "iterations: 590523\ncpu: 1178.6064217651124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5356.774827051729,
            "unit": "ns/iter",
            "extra": "iterations: 149756\ncpu: 5356.517935842312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23016.689642678695,
            "unit": "ns/iter",
            "extra": "iterations: 35878\ncpu: 23015.346451864654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18366.098461127443,
            "unit": "ns/iter",
            "extra": "iterations: 45033\ncpu: 18365.25658961207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17764.481915954133,
            "unit": "ns/iter",
            "extra": "iterations: 46118\ncpu: 17763.471963224736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18146.099117280675,
            "unit": "ns/iter",
            "extra": "iterations: 45088\ncpu: 18145.255943931857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56229.8284800659,
            "unit": "ns/iter",
            "extra": "iterations: 14698\ncpu: 56225.731392026115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 571905.0000000153,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571897.100000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 594835.4877049244,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 594779.5081967212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 584594.2346180192,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 584554.8343475322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 593874.5933014777,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 593847.4367737529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 357917.17852737464,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 357899.62978198257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 586380.104038291,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 586335.2498288839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2746993.554252076,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2746790.909090907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1175767.4246231702,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 1175679.020100504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3449808.047445372,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3449606.204379562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5474.726413892186,
            "unit": "ns/iter",
            "extra": "iterations: 149039\ncpu: 5474.659652842547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22944.785948859993,
            "unit": "ns/iter",
            "extra": "iterations: 35627\ncpu: 22944.53083335664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18388.083626521813,
            "unit": "ns/iter",
            "extra": "iterations: 44340\ncpu: 18387.801082543963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17728.909692061814,
            "unit": "ns/iter",
            "extra": "iterations: 45821\ncpu: 17728.44765500534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18200.984448632575,
            "unit": "ns/iter",
            "extra": "iterations: 44562\ncpu: 18200.922310488644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 56975.307862072,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 56974.703448275926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 588486.3879999784,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588478.1999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 611544.190042064,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 611537.2370266513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 602556.8538938496,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 602526.5334252231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 597519.6602209887,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 597476.5883977879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 358824.15755103074,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 358798.4897959192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 594282.660027436,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 594249.1758241772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2888548.0400000373,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2888361.846153858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1208481.8404117865,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 1208446.8468468513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5394.895120970584,
            "unit": "ns/iter",
            "extra": "iterations: 149210\ncpu: 5394.483613698833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22959.46076343368,
            "unit": "ns/iter",
            "extra": "iterations: 36624\ncpu: 22957.82546963747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18454.476288703412,
            "unit": "ns/iter",
            "extra": "iterations: 45569\ncpu: 18452.592771401625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17856.124515772575,
            "unit": "ns/iter",
            "extra": "iterations: 46982\ncpu: 17854.642203397023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18233.085091114164,
            "unit": "ns/iter",
            "extra": "iterations: 45986\ncpu: 18231.681381289876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 56984.04378116238,
            "unit": "ns/iter",
            "extra": "iterations: 14641\ncpu: 56978.29383238848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 597300.9809999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597250.0000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 612253.1969381236,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 612217.6061238702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 606687.3781744051,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 606670.899107754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 602913.0760794422,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 602878.8211103487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 358461.2174442221,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 358421.37931034487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 598173.4208731595,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 598120.3956343821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.9540488569008,
            "unit": "ns/iter",
            "extra": "iterations: 2298550\ncpu: 304.9235387526919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2087.771544186498,
            "unit": "ns/iter",
            "extra": "iterations: 335102\ncpu: 2087.6219777858705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1620.2736117986542,
            "unit": "ns/iter",
            "extra": "iterations: 432178\ncpu: 1620.1595176061699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1630.2994776849391,
            "unit": "ns/iter",
            "extra": "iterations: 430583\ncpu: 1630.2986880578198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1324.3879866497443,
            "unit": "ns/iter",
            "extra": "iterations: 527330\ncpu: 1324.3407354028614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10011.432197536433,
            "unit": "ns/iter",
            "extra": "iterations: 69496\ncpu: 10010.662484171746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 29283.966051321753,
            "unit": "ns/iter",
            "extra": "iterations: 23889\ncpu: 29281.60241115144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 6901.700320954363,
            "unit": "ns/iter",
            "extra": "iterations: 101572\ncpu: 6901.123341078233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 6814.597216270075,
            "unit": "ns/iter",
            "extra": "iterations: 102668\ncpu: 6814.210854404546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 6843.62545174468,
            "unit": "ns/iter",
            "extra": "iterations: 101274\ncpu: 6843.2707308885065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 14672.219489675013,
            "unit": "ns/iter",
            "extra": "iterations: 47656\ncpu: 14672.02031223782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13553.024851956237,
            "unit": "ns/iter",
            "extra": "iterations: 51505\ncpu: 13551.785263566491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2901.9295046807547,
            "unit": "ns/iter",
            "extra": "iterations: 239179\ncpu: 2901.7685499145173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 14617.270405179204,
            "unit": "ns/iter",
            "extra": "iterations: 47880\ncpu: 14615.804093567282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 11622.362378768996,
            "unit": "ns/iter",
            "extra": "iterations: 60216\ncpu: 11621.33818254271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 11510.900522093174,
            "unit": "ns/iter",
            "extra": "iterations: 60717\ncpu: 11510.184956437346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12216.017044370963,
            "unit": "ns/iter",
            "extra": "iterations: 57673\ncpu: 12215.561874707371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29208.42332956991,
            "unit": "ns/iter",
            "extra": "iterations: 23901\ncpu: 29206.72356805185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 131601.16923365803,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 131594.47783621337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 113346.26777559161,
            "unit": "ns/iter",
            "extra": "iterations: 6132\ncpu: 113339.00848010262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 110988.60490118219,
            "unit": "ns/iter",
            "extra": "iterations: 6325\ncpu: 110978.24505928942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 110788.35300632886,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 110780.11075949333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 66707.24654531022,
            "unit": "ns/iter",
            "extra": "iterations: 10493\ncpu: 66703.03059182274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 111637.12890375227,
            "unit": "ns/iter",
            "extra": "iterations: 6276\ncpu: 111629.36583811232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2834.795368388759,
            "unit": "ns/iter",
            "extra": "iterations: 247171\ncpu: 2834.645245599185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14478.413325885867,
            "unit": "ns/iter",
            "extra": "iterations: 48342\ncpu: 14477.88879235457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11451.825673973644,
            "unit": "ns/iter",
            "extra": "iterations: 61167\ncpu: 11451.140320761395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11167.974533812825,
            "unit": "ns/iter",
            "extra": "iterations: 62475\ncpu: 11167.057222889156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 11995.710229121918,
            "unit": "ns/iter",
            "extra": "iterations: 58353\ncpu: 11994.913714804772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29257.865460167886,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 29255.897350162977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 128119.23083958801,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 128110.26156941833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 112232.92023251997,
            "unit": "ns/iter",
            "extra": "iterations: 6193\ncpu: 112231.06733408726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 109491.04894448911,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 109483.6747458941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 111701.28628262976,
            "unit": "ns/iter",
            "extra": "iterations: 6284\ncpu: 111693.39592616113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 66456.92200742786,
            "unit": "ns/iter",
            "extra": "iterations: 10501\ncpu: 66451.595086182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 111157.34147114331,
            "unit": "ns/iter",
            "extra": "iterations: 6308\ncpu: 111147.38427393747 ns\nthreads: 1"
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
        "date": 1702412861881,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 810.7185196490274,
            "unit": "ns/iter",
            "extra": "iterations: 864849\ncpu: 810.6777021190983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11639.434297996764,
            "unit": "ns/iter",
            "extra": "iterations: 70249\ncpu: 11638.903044883202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25824.32279930877,
            "unit": "ns/iter",
            "extra": "iterations: 32308\ncpu: 25823.795963847962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41417.14215303235,
            "unit": "ns/iter",
            "extra": "iterations: 20492\ncpu: 41414.542260394286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51216.30585208667,
            "unit": "ns/iter",
            "extra": "iterations: 15550\ncpu: 51213.87138263662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52510.24540000344,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52505.99000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63928.11111110835,
            "unit": "ns/iter",
            "extra": "iterations: 13599\ncpu: 63926.781380983906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73674.35375644302,
            "unit": "ns/iter",
            "extra": "iterations: 11833\ncpu: 73672.08653764892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84359.08065914463,
            "unit": "ns/iter",
            "extra": "iterations: 10377\ncpu: 84354.89062349428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 672.1330329243593,
            "unit": "ns/iter",
            "extra": "iterations: 1039472\ncpu: 672.0951598503856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 566.871900511784,
            "unit": "ns/iter",
            "extra": "iterations: 1234720\ncpu: 566.847544382533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 556.6172792405274,
            "unit": "ns/iter",
            "extra": "iterations: 1255495\ncpu: 556.569799162881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 555.9872830041442,
            "unit": "ns/iter",
            "extra": "iterations: 1260911\ncpu: 555.9640609051705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1061.2582945681402,
            "unit": "ns/iter",
            "extra": "iterations: 659739\ncpu: 1061.2257271436129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3924.03639011596,
            "unit": "ns/iter",
            "extra": "iterations: 203929\ncpu: 3923.88037012882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17335.79154085104,
            "unit": "ns/iter",
            "extra": "iterations: 47026\ncpu: 17335.437842895408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14314.953234144763,
            "unit": "ns/iter",
            "extra": "iterations: 57264\ncpu: 14314.377270187193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13312.437204465214,
            "unit": "ns/iter",
            "extra": "iterations: 61541\ncpu: 13311.866885490961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13615.492245777406,
            "unit": "ns/iter",
            "extra": "iterations: 59387\ncpu: 13614.328051593784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37384.29415196826,
            "unit": "ns/iter",
            "extra": "iterations: 22281\ncpu: 37383.039360890485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 521404.0046783935,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 520915.7894736859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 419929.66167952894,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 419900.19305019383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 415862.7479596639,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 415839.9903984643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 417062.31346898066,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 417045.2034883735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 258414.32105733707,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 258404.00950400904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 416384.6195756654,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 416358.7270973957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2099077.4545452953,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2098754.3237250536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 796625.3617021411,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 796575.6595744662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2594302.1323943776,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2594106.4788732347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3945.8621844035,
            "unit": "ns/iter",
            "extra": "iterations: 207306\ncpu: 3945.635437469261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17960.747197600227,
            "unit": "ns/iter",
            "extra": "iterations: 46032\ncpu: 17959.87139381303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14394.163520257827,
            "unit": "ns/iter",
            "extra": "iterations: 57314\ncpu: 14393.408242314203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13808.159785397565,
            "unit": "ns/iter",
            "extra": "iterations: 60018\ncpu: 13807.524409343825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13946.458834062238,
            "unit": "ns/iter",
            "extra": "iterations: 58082\ncpu: 13945.501187975708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36935.067535805756,
            "unit": "ns/iter",
            "extra": "iterations: 22551\ncpu: 36931.838942840644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 520077.08014353795,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 520060.4665071809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 428759.5795398601,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 428734.65491923736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 424022.99759038235,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 424003.7108433738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 420925.7574734517,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 420907.23240115546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251278.56615121037,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 251262.056128293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 419570.8363636512,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 419550.047846888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2052568.982022483,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2052191.6853932599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 798924.4983108592,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 798883.4459459464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3935.1680509225957,
            "unit": "ns/iter",
            "extra": "iterations: 209258\ncpu: 3934.9362987316995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17530.533278992203,
            "unit": "ns/iter",
            "extra": "iterations: 39259\ncpu: 17529.493874016236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14750.106627883275,
            "unit": "ns/iter",
            "extra": "iterations: 56036\ncpu: 14749.25048183302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14417.443481726656,
            "unit": "ns/iter",
            "extra": "iterations: 57707\ncpu: 14416.760531651222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14641.860073940265,
            "unit": "ns/iter",
            "extra": "iterations: 57073\ncpu: 14640.907259124371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37120.43953663161,
            "unit": "ns/iter",
            "extra": "iterations: 22617\ncpu: 37118.601052305756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 513084.69843112363,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 513056.24636839336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 417504.00240963214,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 417473.34939759027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 412849.33476599207,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 412829.5128939807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 412108.5639562686,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 412085.7346647665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252461.94935252855,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 252450.8201438845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 410012.4693295441,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 409989.20589633926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 337.1883010060895,
            "unit": "ns/iter",
            "extra": "iterations: 2081991\ncpu: 337.1800838716417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1769.4768947098296,
            "unit": "ns/iter",
            "extra": "iterations: 395364\ncpu: 1769.3930150443707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1370.3206311727545,
            "unit": "ns/iter",
            "extra": "iterations: 511619\ncpu: 1370.243677424011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1300.2666349950482,
            "unit": "ns/iter",
            "extra": "iterations: 538864\ncpu: 1300.1855755812273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1125.2346170076603,
            "unit": "ns/iter",
            "extra": "iterations: 623237\ncpu: 1125.1965143276088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6911.6070337140145,
            "unit": "ns/iter",
            "extra": "iterations: 101767\ncpu: 6911.439857714173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21275.142874532736,
            "unit": "ns/iter",
            "extra": "iterations: 32861\ncpu: 21274.918596512805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5105.374736014214,
            "unit": "ns/iter",
            "extra": "iterations: 137318\ncpu: 5105.097656534412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4972.0205850723905,
            "unit": "ns/iter",
            "extra": "iterations: 140393\ncpu: 4971.811984928001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5034.3951956272795,
            "unit": "ns/iter",
            "extra": "iterations: 139040\ncpu: 5034.221806674321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10368.40372582834,
            "unit": "ns/iter",
            "extra": "iterations: 70642\ncpu: 10367.853401659117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9478.140910074571,
            "unit": "ns/iter",
            "extra": "iterations: 73884\ncpu: 9477.709652969555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2409.6979012453044,
            "unit": "ns/iter",
            "extra": "iterations: 290458\ncpu: 2409.5583526706255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12079.431618331824,
            "unit": "ns/iter",
            "extra": "iterations: 57998\ncpu: 12079.014793613607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9569.821647500597,
            "unit": "ns/iter",
            "extra": "iterations: 72267\ncpu: 9569.22246668612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9539.936533246571,
            "unit": "ns/iter",
            "extra": "iterations: 73377\ncpu: 9539.30386905985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10115.69324947907,
            "unit": "ns/iter",
            "extra": "iterations: 68691\ncpu: 10115.325151766649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24658.397724471808,
            "unit": "ns/iter",
            "extra": "iterations: 28389\ncpu: 24657.240480467586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 103465.26426249606,
            "unit": "ns/iter",
            "extra": "iterations: 6766\ncpu: 103459.56251847323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88352.11931601856,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 88345.53514882745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 88073.05302173476,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 88070.2977761028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 88205.86627610713,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 88057.80692817153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55301.01047821538,
            "unit": "ns/iter",
            "extra": "iterations: 12693\ncpu: 55298.83400299355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 88131.13404656926,
            "unit": "ns/iter",
            "extra": "iterations: 7945\ncpu: 88126.88483322832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2426.284699327223,
            "unit": "ns/iter",
            "extra": "iterations: 289667\ncpu: 2426.129659229407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11948.336434532048,
            "unit": "ns/iter",
            "extra": "iterations: 58472\ncpu: 11948.07600218893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9539.10325428093,
            "unit": "ns/iter",
            "extra": "iterations: 73411\ncpu: 9538.270831346836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9417.439168660978,
            "unit": "ns/iter",
            "extra": "iterations: 74386\ncpu: 9417.06369478127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 10021.018857348703,
            "unit": "ns/iter",
            "extra": "iterations: 69575\ncpu: 10020.674092705738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23796.595330213047,
            "unit": "ns/iter",
            "extra": "iterations: 29466\ncpu: 23794.95689947759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 103478.16945668576,
            "unit": "ns/iter",
            "extra": "iterations: 6810\ncpu: 103473.59765051257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 86587.73307806582,
            "unit": "ns/iter",
            "extra": "iterations: 8096\ncpu: 86581.87994071114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85341.09089802322,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 85336.66382356455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85833.61509341944,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 85830.82183416632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55520.33657802543,
            "unit": "ns/iter",
            "extra": "iterations: 12636\ncpu: 55517.43431465682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 87046.67473620102,
            "unit": "ns/iter",
            "extra": "iterations: 8055\ncpu: 87044.22098075843 ns\nthreads: 1"
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
        "date": 1702418678172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 806.5968259488474,
            "unit": "ns/iter",
            "extra": "iterations: 868228\ncpu: 806.5820268408759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11870.021021805125,
            "unit": "ns/iter",
            "extra": "iterations: 68976\ncpu: 11869.721352354438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26467.110713725986,
            "unit": "ns/iter",
            "extra": "iterations: 31875\ncpu: 26466.290196078437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40170.70410844792,
            "unit": "ns/iter",
            "extra": "iterations: 21687\ncpu: 40169.26269193529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53565.108900196814,
            "unit": "ns/iter",
            "extra": "iterations: 15730\ncpu: 53564.278448823956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52367.02610000066,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52363.119999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63571.75914433609,
            "unit": "ns/iter",
            "extra": "iterations: 13697\ncpu: 63570.701613492034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73461.48807198896,
            "unit": "ns/iter",
            "extra": "iterations: 11779\ncpu: 73457.1186008999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83920.24238887463,
            "unit": "ns/iter",
            "extra": "iterations: 10281\ncpu: 83916.51590312232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 667.4992974948998,
            "unit": "ns/iter",
            "extra": "iterations: 1042697\ncpu: 667.4761699707585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 560.9500653115717,
            "unit": "ns/iter",
            "extra": "iterations: 1248631\ncpu: 560.9216013377858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 551.5192146109387,
            "unit": "ns/iter",
            "extra": "iterations: 1260369\ncpu: 551.4840495124841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 550.6373276801255,
            "unit": "ns/iter",
            "extra": "iterations: 1271255\ncpu: 550.6169887237409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1073.4807944953886,
            "unit": "ns/iter",
            "extra": "iterations: 647757\ncpu: 1073.4519271887468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3929.6383092705582,
            "unit": "ns/iter",
            "extra": "iterations: 186665\ncpu: 3929.4457986232005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17357.532775068274,
            "unit": "ns/iter",
            "extra": "iterations: 47170\ncpu: 17357.110451558212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14327.433614803414,
            "unit": "ns/iter",
            "extra": "iterations: 56963\ncpu: 14326.980671664081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13301.187254168774,
            "unit": "ns/iter",
            "extra": "iterations: 61526\ncpu: 13300.908558983181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13801.87733342262,
            "unit": "ns/iter",
            "extra": "iterations: 59462\ncpu: 13801.177222427748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37682.71102748112,
            "unit": "ns/iter",
            "extra": "iterations: 22054\ncpu: 37681.83549469479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 509769.2788798325,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 509742.3570595112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 416113.5621387483,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 416091.570327552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 411176.7466602883,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 411164.79007633636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 430680.1338164159,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 430653.76811594126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256388.9719101291,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 256373.388527498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 415667.1461318393,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 415647.08691499504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2042664.7187500787,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2042447.321428577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 805516.4504273509,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 805483.6752136755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2606082.960674004,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2605813.483146072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3824.256106562516,
            "unit": "ns/iter",
            "extra": "iterations: 205926\ncpu: 3824.199469712426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17894.724656908544,
            "unit": "ns/iter",
            "extra": "iterations: 45979\ncpu: 17894.08208095003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14318.922109497962,
            "unit": "ns/iter",
            "extra": "iterations: 57170\ncpu: 14318.273570054165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13759.139764108253,
            "unit": "ns/iter",
            "extra": "iterations: 59858\ncpu: 13758.209428981849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13833.7063028579,
            "unit": "ns/iter",
            "extra": "iterations: 59592\ncpu: 13833.15042287559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36790.9656908209,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 36790.18413034833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 524245.483793512,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 524213.8055222096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 428503.75986360596,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 428477.8860204564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 421789.9725829696,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 421759.59595959674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 421190.3839884876,
            "unit": "ns/iter",
            "extra": "iterations: 2086\ncpu: 421177.42090124474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 247882.260096024,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 247868.0033888744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 418945.7843419647,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 418934.39000960655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2053107.4563757838,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2052996.1968680231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 820191.1804577613,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 820154.8415492967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3891.2883419360155,
            "unit": "ns/iter",
            "extra": "iterations: 204202\ncpu: 3891.1009686486914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17452.490998710018,
            "unit": "ns/iter",
            "extra": "iterations: 47271\ncpu: 17452.05305578472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14763.66417963616,
            "unit": "ns/iter",
            "extra": "iterations: 56158\ncpu: 14762.840556999887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14412.573701362435,
            "unit": "ns/iter",
            "extra": "iterations: 57387\ncpu: 14411.574049871997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14563.486774615812,
            "unit": "ns/iter",
            "extra": "iterations: 57125\ncpu: 14562.965426695855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37033.23683041853,
            "unit": "ns/iter",
            "extra": "iterations: 22514\ncpu: 37032.419827662736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 510705.748973622,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 510690.0879765423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 420435.5220552526,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 420415.17207949643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 417533.614060249,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 417525.3467240571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 414876.0641940144,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 414857.2515454131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252775.79657634042,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 252763.5092724685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 410161.2745282658,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 410147.92452830076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 330.2669824638859,
            "unit": "ns/iter",
            "extra": "iterations: 2112959\ncpu: 330.2524090623631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1763.6252599169977,
            "unit": "ns/iter",
            "extra": "iterations: 396280\ncpu: 1763.5628848289125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1362.1346215043766,
            "unit": "ns/iter",
            "extra": "iterations: 515356\ncpu: 1362.101343537278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1365.1536209112921,
            "unit": "ns/iter",
            "extra": "iterations: 512951\ncpu: 1365.090037839862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1133.4256082718089,
            "unit": "ns/iter",
            "extra": "iterations: 621104\ncpu: 1133.386035188952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6865.529089965824,
            "unit": "ns/iter",
            "extra": "iterations: 102183\ncpu: 6865.31223393326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21462.201700012974,
            "unit": "ns/iter",
            "extra": "iterations: 32588\ncpu: 21461.23419663714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5046.527578956572,
            "unit": "ns/iter",
            "extra": "iterations: 138874\ncpu: 5046.390973112302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4957.999109534286,
            "unit": "ns/iter",
            "extra": "iterations: 140376\ncpu: 4957.799053969407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5027.026700161242,
            "unit": "ns/iter",
            "extra": "iterations: 139325\ncpu: 5027.007356899347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10386.100176293392,
            "unit": "ns/iter",
            "extra": "iterations: 67501\ncpu: 10385.905393994173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9536.181896257884,
            "unit": "ns/iter",
            "extra": "iterations: 73355\ncpu: 9535.524504123834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2393.677680525806,
            "unit": "ns/iter",
            "extra": "iterations: 290997\ncpu: 2393.576566081458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12233.79578303885,
            "unit": "ns/iter",
            "extra": "iterations: 57909\ncpu: 12233.583726190916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9604.638652812255,
            "unit": "ns/iter",
            "extra": "iterations: 72952\ncpu: 9604.184943524644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9515.713741503792,
            "unit": "ns/iter",
            "extra": "iterations: 72976\ncpu: 9515.255700504378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9980.573134887429,
            "unit": "ns/iter",
            "extra": "iterations: 69406\ncpu: 9980.295651672746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24515.29814510585,
            "unit": "ns/iter",
            "extra": "iterations: 28627\ncpu: 24514.832151465638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102753.84097631832,
            "unit": "ns/iter",
            "extra": "iterations: 6760\ncpu: 102750.84319526743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88550.95260962668,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88544.77442183868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86496.57078708133,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 86494.2122988651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86846.86855862381,
            "unit": "ns/iter",
            "extra": "iterations: 8034\ncpu: 86844.6850883748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54612.92545666684,
            "unit": "ns/iter",
            "extra": "iterations: 12865\ncpu: 54611.10765643291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86890.1474959413,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 86887.7357312351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2337.827772189528,
            "unit": "ns/iter",
            "extra": "iterations: 299249\ncpu: 2337.714745913956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11780.019803821813,
            "unit": "ns/iter",
            "extra": "iterations: 59130\ncpu: 11779.26433282598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9406.090792804254,
            "unit": "ns/iter",
            "extra": "iterations: 74268\ncpu: 9405.705014272726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9281.746178793384,
            "unit": "ns/iter",
            "extra": "iterations: 75238\ncpu: 9281.590419734708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9744.750633651642,
            "unit": "ns/iter",
            "extra": "iterations: 71806\ncpu: 9744.703785198946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23534.18759632519,
            "unit": "ns/iter",
            "extra": "iterations: 29846\ncpu: 23533.53548214186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 101491.57357006549,
            "unit": "ns/iter",
            "extra": "iterations: 6871\ncpu: 101482.09867559477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84896.8186333801,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 84892.64598982406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83430.31625861708,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83428.57142857068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84031.1597547797,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 84030.71282606033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54821.94037559147,
            "unit": "ns/iter",
            "extra": "iterations: 12780\ncpu: 54818.78716744917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85813.06783207547,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 85809.31921703913 ns\nthreads: 1"
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
        "date": 1702476032560,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 808.0469012984593,
            "unit": "ns/iter",
            "extra": "iterations: 865072\ncpu: 808.0102003070265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11841.692316502127,
            "unit": "ns/iter",
            "extra": "iterations: 69851\ncpu: 11841.118953200385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26106.506907112103,
            "unit": "ns/iter",
            "extra": "iterations: 31996\ncpu: 26105.4819352419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40886.74709212079,
            "unit": "ns/iter",
            "extra": "iterations: 19430\ncpu: 40885.213587236256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50939.51599118546,
            "unit": "ns/iter",
            "extra": "iterations: 14977\ncpu: 50938.859584696525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52713.09400000064,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52713.260000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64202.530257464336,
            "unit": "ns/iter",
            "extra": "iterations: 13633\ncpu: 64198.943739455724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 74132.88771626638,
            "unit": "ns/iter",
            "extra": "iterations: 11560\ncpu: 74130.21626297582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 85248.21309570315,
            "unit": "ns/iter",
            "extra": "iterations: 10324\ncpu: 85243.56838434709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 684.1121235083692,
            "unit": "ns/iter",
            "extra": "iterations: 1022765\ncpu: 684.0826582841597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 572.4608386556325,
            "unit": "ns/iter",
            "extra": "iterations: 1225175\ncpu: 572.4476095251698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 559.626721875715,
            "unit": "ns/iter",
            "extra": "iterations: 1246896\ncpu: 559.5971917465451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 558.7685093949802,
            "unit": "ns/iter",
            "extra": "iterations: 1255403\ncpu: 558.7495011562022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1070.8564759087585,
            "unit": "ns/iter",
            "extra": "iterations: 649654\ncpu: 1070.8064600541202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4026.47736723124,
            "unit": "ns/iter",
            "extra": "iterations: 198164\ncpu: 4026.351405906226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17473.01168878531,
            "unit": "ns/iter",
            "extra": "iterations: 46797\ncpu: 17471.86999166613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14364.651649278738,
            "unit": "ns/iter",
            "extra": "iterations: 56934\ncpu: 14364.228756103576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13316.70144724224,
            "unit": "ns/iter",
            "extra": "iterations: 61289\ncpu: 13315.784235344006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13807.662181146701,
            "unit": "ns/iter",
            "extra": "iterations: 59079\ncpu: 13806.999102896127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38276.2052977158,
            "unit": "ns/iter",
            "extra": "iterations: 22085\ncpu: 38273.14014036684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 512878.37235296296,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 512850.5882352929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 415569.29144519335,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 415564.6689221843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 411180.59269800206,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 411175.8179231876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 415038.31244063715,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 415030.1994301994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 259282.26383104717,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 259281.0232004763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 413136.01193889853,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 413106.68576886324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2051867.4799998533,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2051754.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 807552.8721227616,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 807516.3682864468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2622395.7977205967,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2622375.213675212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3828.932451503908,
            "unit": "ns/iter",
            "extra": "iterations: 205482\ncpu: 3828.8341557897975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17862.84936307138,
            "unit": "ns/iter",
            "extra": "iterations: 45374\ncpu: 17862.758407898804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14285.969108745327,
            "unit": "ns/iter",
            "extra": "iterations: 57492\ncpu: 14285.778890976162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13683.313571035049,
            "unit": "ns/iter",
            "extra": "iterations: 60047\ncpu: 13683.358036204956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13773.023891357912,
            "unit": "ns/iter",
            "extra": "iterations: 59645\ncpu: 13772.490569201058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37305.316183058814,
            "unit": "ns/iter",
            "extra": "iterations: 22332\ncpu: 37305.46749059633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 521801.83373497654,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 521798.07228916045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 429419.0962012934,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 429407.64676862286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 424002.35693640675,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 423995.7129094417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 427625.68746975024,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 427606.1441702948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251066.265223686,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 251056.88311688325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 419016.23631124746,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 418995.6772334293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2060255.2257336003,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2060053.047404054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 811457.1334489203,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 811430.8492201064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3919.366224755345,
            "unit": "ns/iter",
            "extra": "iterations: 201775\ncpu: 3919.2803865691867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17488.144544720788,
            "unit": "ns/iter",
            "extra": "iterations: 46982\ncpu: 17487.005661742733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14690.090992005402,
            "unit": "ns/iter",
            "extra": "iterations: 55917\ncpu: 14689.25908042271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14536.950036698436,
            "unit": "ns/iter",
            "extra": "iterations: 57222\ncpu: 14536.821502219418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14472.821927002668,
            "unit": "ns/iter",
            "extra": "iterations: 56606\ncpu: 14472.464049747357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37178.72700429224,
            "unit": "ns/iter",
            "extra": "iterations: 22352\ncpu: 37178.18539728008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 520993.8008323143,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 520982.34244946245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 418627.225790997,
            "unit": "ns/iter",
            "extra": "iterations: 2086\ncpu: 418616.299137104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 418719.585435507,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 418709.0433127069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 416930.6181384249,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 416915.751789979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 251300.67661265243,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 251298.1528843429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 412071.26253546914,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 412060.9744560065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 331.34901995707366,
            "unit": "ns/iter",
            "extra": "iterations: 2099857\ncpu: 331.3451820766835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1759.1959192915713,
            "unit": "ns/iter",
            "extra": "iterations: 397480\ncpu: 1759.187883667116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1357.6403635386419,
            "unit": "ns/iter",
            "extra": "iterations: 520990\ncpu: 1357.6450603658498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1325.5688902819982,
            "unit": "ns/iter",
            "extra": "iterations: 529603\ncpu: 1325.5187376204387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1126.2540930182217,
            "unit": "ns/iter",
            "extra": "iterations: 621363\ncpu: 1126.2400561346574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6863.208490216855,
            "unit": "ns/iter",
            "extra": "iterations: 102518\ncpu: 6862.999668350922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21404.11111450219,
            "unit": "ns/iter",
            "extra": "iterations: 32768\ncpu: 21403.99780273467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5006.044572008666,
            "unit": "ns/iter",
            "extra": "iterations: 139886\ncpu: 5006.068512931964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5058.234922471265,
            "unit": "ns/iter",
            "extra": "iterations: 141817\ncpu: 5058.0480478362715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4973.38548018026,
            "unit": "ns/iter",
            "extra": "iterations: 140718\ncpu: 4973.217356699231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10324.63518882394,
            "unit": "ns/iter",
            "extra": "iterations: 67709\ncpu: 10324.593480925769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9513.724268099677,
            "unit": "ns/iter",
            "extra": "iterations: 73644\ncpu: 9513.634511976588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2427.3950395237653,
            "unit": "ns/iter",
            "extra": "iterations: 288561\ncpu: 2427.338413714955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12111.42054585728,
            "unit": "ns/iter",
            "extra": "iterations: 57744\ncpu: 12111.457467442553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9638.891189716649,
            "unit": "ns/iter",
            "extra": "iterations: 72824\ncpu: 9638.555970559079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9686.39932129856,
            "unit": "ns/iter",
            "extra": "iterations: 72786\ncpu: 9686.43283048949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10209.813451553762,
            "unit": "ns/iter",
            "extra": "iterations: 68572\ncpu: 10209.519920667308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24500.52210128578,
            "unit": "ns/iter",
            "extra": "iterations: 28573\ncpu: 24499.933503657445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 103829.39115042718,
            "unit": "ns/iter",
            "extra": "iterations: 6780\ncpu: 103827.2418879053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88104.78796668943,
            "unit": "ns/iter",
            "extra": "iterations: 7928\ncpu: 88104.08678103072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86901.04854127433,
            "unit": "ns/iter",
            "extra": "iterations: 8055\ncpu: 86901.45251396642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86638.35678017442,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 86634.69969040225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54689.033382735346,
            "unit": "ns/iter",
            "extra": "iterations: 12821\ncpu: 54687.824662662846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86884.92431962633,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 86885.26158816884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2329.6966363911465,
            "unit": "ns/iter",
            "extra": "iterations: 300570\ncpu: 2329.6656352929604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11862.682500167703,
            "unit": "ns/iter",
            "extra": "iterations: 59052\ncpu: 11862.734539050409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9371.486015577098,
            "unit": "ns/iter",
            "extra": "iterations: 74726\ncpu: 9371.032839975347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9315.427500000647,
            "unit": "ns/iter",
            "extra": "iterations: 75600\ncpu: 9315.210317460336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9779.238100543595,
            "unit": "ns/iter",
            "extra": "iterations: 71810\ncpu: 9778.895696978205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23432.09742110536,
            "unit": "ns/iter",
            "extra": "iterations: 29819\ncpu: 23430.413494751778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 101644.92497460755,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 101639.21056450377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84845.37930194855,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 84841.42040617699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83888.79048873598,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 83888.20076664955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84316.70979824186,
            "unit": "ns/iter",
            "extra": "iterations: 8277\ncpu: 84312.17832548067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55205.972204723046,
            "unit": "ns/iter",
            "extra": "iterations: 12700\ncpu: 55202.732283465084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86053.1621921205,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 86047.94334975423 ns\nthreads: 1"
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
        "date": 1702479862024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 810.4680695481393,
            "unit": "ns/iter",
            "extra": "iterations: 860182\ncpu: 810.443720049943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11820.3208214995,
            "unit": "ns/iter",
            "extra": "iterations: 70067\ncpu: 11819.979448242397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25825.402069840806,
            "unit": "ns/iter",
            "extra": "iterations: 32273\ncpu: 25824.088247141568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40296.343843841496,
            "unit": "ns/iter",
            "extra": "iterations: 20646\ncpu: 40295.89751041365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51293.97873578407,
            "unit": "ns/iter",
            "extra": "iterations: 15472\ncpu: 51291.487849017605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55039.19309999219,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54978.99999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63198.82950247448,
            "unit": "ns/iter",
            "extra": "iterations: 13748\ncpu: 63196.56677334882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72961.49398198273,
            "unit": "ns/iter",
            "extra": "iterations: 11881\ncpu: 72956.80498274555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83528.04272274263,
            "unit": "ns/iter",
            "extra": "iterations: 10416\ncpu: 83526.44009216582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 677.7252638660286,
            "unit": "ns/iter",
            "extra": "iterations: 1033195\ncpu: 677.7003373032196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 571.1034570797265,
            "unit": "ns/iter",
            "extra": "iterations: 1218109\ncpu: 571.0715543518678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 568.6852785668652,
            "unit": "ns/iter",
            "extra": "iterations: 1226151\ncpu: 568.6819975679985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 567.7072054845987,
            "unit": "ns/iter",
            "extra": "iterations: 1231659\ncpu: 567.7046974852617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1064.2552288706083,
            "unit": "ns/iter",
            "extra": "iterations: 656834\ncpu: 1064.2253598321633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4048.7778689682095,
            "unit": "ns/iter",
            "extra": "iterations: 198608\ncpu: 4048.5539353903246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17491.52327623263,
            "unit": "ns/iter",
            "extra": "iterations: 46700\ncpu: 17490.822269807286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14399.035692276344,
            "unit": "ns/iter",
            "extra": "iterations: 56791\ncpu: 14398.478632177617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13493.195419215646,
            "unit": "ns/iter",
            "extra": "iterations: 60470\ncpu: 13492.862576484196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13923.07729969636,
            "unit": "ns/iter",
            "extra": "iterations: 58823\ncpu: 13922.651003859033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37467.51282509893,
            "unit": "ns/iter",
            "extra": "iterations: 22378\ncpu: 37465.83251407636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 513181.0052508365,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 513157.4095682602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 415797.3842877592,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 415781.73213440547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 412279.8147618921,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 412265.99999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 417933.3692826112,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 417914.73278767604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 263611.91611942503,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 263606.38805970096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 421181.59252065927,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 421158.08644973347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2063784.567567566,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2063596.6216216243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 816960.171577161,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 816926.1698440191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2618142.342776301,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2617941.6430594865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3944.371689261048,
            "unit": "ns/iter",
            "extra": "iterations: 200786\ncpu: 3944.315838753699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18176.46753046822,
            "unit": "ns/iter",
            "extra": "iterations: 45458\ncpu: 18176.373795591586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14516.164177253335,
            "unit": "ns/iter",
            "extra": "iterations: 56439\ncpu: 14516.008433884406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13991.443806887806,
            "unit": "ns/iter",
            "extra": "iterations: 58557\ncpu: 13991.365677886413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14047.338741522708,
            "unit": "ns/iter",
            "extra": "iterations: 58245\ncpu: 14046.603141900614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37211.99325673121,
            "unit": "ns/iter",
            "extra": "iterations: 22541\ncpu: 37211.72973692376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 519938.92417911737,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 519932.71641791024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 428714.13258319383,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 428694.6183953026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 420736.8362937979,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 420734.2294767166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 422165.0987415072,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 422162.10067763925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251182.14431528735,
            "unit": "ns/iter",
            "extra": "iterations: 3527\ncpu: 251171.4488233623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 418264.3509021582,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 418253.6562203212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2059302.4753363265,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2059093.7219730953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 811433.4628670245,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 811426.1658031064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3870.2137563451956,
            "unit": "ns/iter",
            "extra": "iterations: 209009\ncpu: 3870.1165978498334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17628.331375553622,
            "unit": "ns/iter",
            "extra": "iterations: 46992\ncpu: 17628.379298604083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14882.09071579148,
            "unit": "ns/iter",
            "extra": "iterations: 55966\ncpu: 14881.78179609051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14646.393888004315,
            "unit": "ns/iter",
            "extra": "iterations: 56610\ncpu: 14646.200317964993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14505.027769044926,
            "unit": "ns/iter",
            "extra": "iterations: 57258\ncpu: 14504.130427189102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37307.483154535366,
            "unit": "ns/iter",
            "extra": "iterations: 22558\ncpu: 37305.38611579037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 513388.7102915004,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 513371.0291493185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 419476.170767005,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 419442.11287988443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 415303.08743427705,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 415283.27759197325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 414861.2310660922,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 414842.01640134887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 250993.55867347337,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 250983.5884353739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 414752.43631177157,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 414738.3079847917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 329.79380994472575,
            "unit": "ns/iter",
            "extra": "iterations: 2124666\ncpu: 329.7778097828067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1762.8749959151683,
            "unit": "ns/iter",
            "extra": "iterations: 397819\ncpu: 1762.8248022341843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1364.6987098056638,
            "unit": "ns/iter",
            "extra": "iterations: 513256\ncpu: 1364.640257493342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1366.9476072841164,
            "unit": "ns/iter",
            "extra": "iterations: 512075\ncpu: 1366.8654005760843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1134.3176068802568,
            "unit": "ns/iter",
            "extra": "iterations: 617537\ncpu: 1134.2688778162214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6910.859590185198,
            "unit": "ns/iter",
            "extra": "iterations: 101802\ncpu: 6910.789571914088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21052.466294171598,
            "unit": "ns/iter",
            "extra": "iterations: 33110\ncpu: 21052.6970703716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5064.184240034835,
            "unit": "ns/iter",
            "extra": "iterations: 140013\ncpu: 5063.9262068522685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4927.324940393855,
            "unit": "ns/iter",
            "extra": "iterations: 142183\ncpu: 4927.076373406115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4979.252319241536,
            "unit": "ns/iter",
            "extra": "iterations: 140671\ncpu: 4979.076000028503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10329.910704504975,
            "unit": "ns/iter",
            "extra": "iterations: 67551\ncpu: 10329.457743038476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8504.563270778057,
            "unit": "ns/iter",
            "extra": "iterations: 82060\ncpu: 8504.073848403606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2396.547852649106,
            "unit": "ns/iter",
            "extra": "iterations: 292011\ncpu: 2396.454243162089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12426.66182911075,
            "unit": "ns/iter",
            "extra": "iterations: 58225\ncpu: 12426.605410047412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9440.219253507632,
            "unit": "ns/iter",
            "extra": "iterations: 73919\ncpu: 9440.198054627417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9513.365680745732,
            "unit": "ns/iter",
            "extra": "iterations: 73772\ncpu: 9512.853115002938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10067.505736425077,
            "unit": "ns/iter",
            "extra": "iterations: 69817\ncpu: 10067.018061503652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24630.155029210957,
            "unit": "ns/iter",
            "extra": "iterations: 28414\ncpu: 24628.85549377056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 103454.10977954703,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 103449.09010208512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88727.99213197872,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 88727.2588832493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87683.75410864744,
            "unit": "ns/iter",
            "extra": "iterations: 7971\ncpu: 87681.73378497099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87905.2928624833,
            "unit": "ns/iter",
            "extra": "iterations: 8014\ncpu: 87899.98752183688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54996.01149245808,
            "unit": "ns/iter",
            "extra": "iterations: 12791\ncpu: 54992.87780470652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87306.89202346439,
            "unit": "ns/iter",
            "extra": "iterations: 8011\ncpu: 87301.82249407005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2338.959809780583,
            "unit": "ns/iter",
            "extra": "iterations: 298182\ncpu: 2338.853787284276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11807.431840057598,
            "unit": "ns/iter",
            "extra": "iterations: 59221\ncpu: 11807.35887607441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9333.097096044568,
            "unit": "ns/iter",
            "extra": "iterations: 75070\ncpu: 9333.118422805419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9286.717485874859,
            "unit": "ns/iter",
            "extra": "iterations: 75398\ncpu: 9286.238361760239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9752.390990112783,
            "unit": "ns/iter",
            "extra": "iterations: 71810\ncpu: 9751.974655340404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23679.190724772667,
            "unit": "ns/iter",
            "extra": "iterations: 29692\ncpu: 23678.303920247603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 101935.92619603938,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 101928.95274212239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85905.23681604562,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 85905.03837583575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84328.54500363852,
            "unit": "ns/iter",
            "extra": "iterations: 8266\ncpu: 84326.5787563504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85138.6677591626,
            "unit": "ns/iter",
            "extra": "iterations: 8238\ncpu: 85134.82641417856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55367.33663680241,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 55363.91025132725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86773.00272750738,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 86767.09645425218 ns\nthreads: 1"
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
        "date": 1702488882974,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 806.9243033859855,
            "unit": "ns/iter",
            "extra": "iterations: 867410\ncpu: 806.9238307144257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11759.365590787445,
            "unit": "ns/iter",
            "extra": "iterations: 70423\ncpu: 11758.730812376636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25828.8798058965,
            "unit": "ns/iter",
            "extra": "iterations: 32148\ncpu: 25828.642528306584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42546.969735180945,
            "unit": "ns/iter",
            "extra": "iterations: 19032\ncpu: 42545.21857923496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51633.26476091824,
            "unit": "ns/iter",
            "extra": "iterations: 15497\ncpu: 51628.379686390865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 53168.032399992175,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53165.99000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64533.92662317605,
            "unit": "ns/iter",
            "extra": "iterations: 13492\ncpu: 64418.02549659056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 74545.9274303273,
            "unit": "ns/iter",
            "extra": "iterations: 11768\ncpu: 74544.76546566964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84428.60767302742,
            "unit": "ns/iter",
            "extra": "iterations: 10374\ncpu: 84427.51108540573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 674.966745497995,
            "unit": "ns/iter",
            "extra": "iterations: 1032161\ncpu: 674.9200948301659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 565.8497475113442,
            "unit": "ns/iter",
            "extra": "iterations: 1239660\ncpu: 565.839504380234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 557.9732737964036,
            "unit": "ns/iter",
            "extra": "iterations: 1253676\ncpu: 557.973272201112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 556.0221441744613,
            "unit": "ns/iter",
            "extra": "iterations: 1257351\ncpu: 555.9942291372888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1067.0325390868336,
            "unit": "ns/iter",
            "extra": "iterations: 656933\ncpu: 1066.972887646076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4027.716156632461,
            "unit": "ns/iter",
            "extra": "iterations: 198222\ncpu: 4027.5337752620794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17680.970407942335,
            "unit": "ns/iter",
            "extra": "iterations: 46330\ncpu: 17680.382041873538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14598.91132654969,
            "unit": "ns/iter",
            "extra": "iterations: 56319\ncpu: 14598.05571831888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13141.666470597358,
            "unit": "ns/iter",
            "extra": "iterations: 62903\ncpu: 13141.067993577424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13833.151144012234,
            "unit": "ns/iter",
            "extra": "iterations: 59440\ncpu: 13832.424293405134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37854.54598790792,
            "unit": "ns/iter",
            "extra": "iterations: 22158\ncpu: 37852.54535607916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 511404.7485380049,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 511358.421052633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 419459.0704909891,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 419416.6747690811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 415721.48133971705,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 415706.1244019138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 418950.39477504673,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 418919.01306241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 268104.938860722,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 268080.4354309571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 415272.0383141883,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 415266.1877394629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2047350.258849604,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2047133.6283185878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 827492.7475982686,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 827478.6899563321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2612290.76136357,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2612039.7727272715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3876.800711442089,
            "unit": "ns/iter",
            "extra": "iterations: 200438\ncpu: 3876.703020385361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18124.508532349428,
            "unit": "ns/iter",
            "extra": "iterations: 45474\ncpu: 18124.391960241002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14488.878656668889,
            "unit": "ns/iter",
            "extra": "iterations: 56814\ncpu: 14488.765093110844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13987.00387570695,
            "unit": "ns/iter",
            "extra": "iterations: 59086\ncpu: 13987.010459330464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14075.561990685634,
            "unit": "ns/iter",
            "extra": "iterations: 58412\ncpu: 14075.402314592884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37322.130805859946,
            "unit": "ns/iter",
            "extra": "iterations: 22262\ncpu: 37320.941514688806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 522307.97957957105,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 522299.15915916336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 428881.6906758328,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 428881.25308337423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 422698.61315280496,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 422698.5976789159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 420699.8354854073,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 420691.91774270806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249593.46094419746,
            "unit": "ns/iter",
            "extra": "iterations: 3495\ncpu: 249593.53361945582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 420085.7423224526,
            "unit": "ns/iter",
            "extra": "iterations: 2084\ncpu: 420081.381957775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2059286.6221720185,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2059155.4298642501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 814307.656468487,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 814288.8111888067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3917.2781927757014,
            "unit": "ns/iter",
            "extra": "iterations: 202277\ncpu: 3917.209569056315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17455.985605526927,
            "unit": "ns/iter",
            "extra": "iterations: 46893\ncpu: 17455.97637173989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14715.722043068976,
            "unit": "ns/iter",
            "extra": "iterations: 55818\ncpu: 14715.421548604338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14379.33321071937,
            "unit": "ns/iter",
            "extra": "iterations: 57090\ncpu: 14379.185496584454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14461.64458138882,
            "unit": "ns/iter",
            "extra": "iterations: 56795\ncpu: 14461.482524870113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37149.36069950741,
            "unit": "ns/iter",
            "extra": "iterations: 22473\ncpu: 37149.32140791154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 520084.10095574346,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 520078.9127837529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 426561.31560972164,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 426556.5853658524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 419452.76882240205,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 419448.74517374457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 418373.36639385246,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 418363.5532017336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 255728.5274151426,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 255720.39454598216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 413050.3427477327,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 413044.9976065099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 331.3817786844097,
            "unit": "ns/iter",
            "extra": "iterations: 2115215\ncpu: 331.3774249898958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1763.8024738104386,
            "unit": "ns/iter",
            "extra": "iterations: 396150\ncpu: 1763.778619209908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1327.828397119949,
            "unit": "ns/iter",
            "extra": "iterations: 526652\ncpu: 1327.8111542346737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1351.0788055454748,
            "unit": "ns/iter",
            "extra": "iterations: 517324\ncpu: 1351.0649032327938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1111.461615615726,
            "unit": "ns/iter",
            "extra": "iterations: 629110\ncpu: 1111.4619065028369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7021.996916122523,
            "unit": "ns/iter",
            "extra": "iterations: 99550\ncpu: 7021.904570567558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21272.25514203469,
            "unit": "ns/iter",
            "extra": "iterations: 32915\ncpu: 21271.84566307158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5053.094849187508,
            "unit": "ns/iter",
            "extra": "iterations: 138483\ncpu: 5053.033224294698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4910.880659703676,
            "unit": "ns/iter",
            "extra": "iterations: 142852\ncpu: 4910.610981995349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5003.893499999776,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5003.456000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10318.662919017623,
            "unit": "ns/iter",
            "extra": "iterations: 67509\ncpu: 10318.347183338597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9435.219464543543,
            "unit": "ns/iter",
            "extra": "iterations: 74217\ncpu: 9434.644353719443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2397.447808222375,
            "unit": "ns/iter",
            "extra": "iterations: 292297\ncpu: 2397.3290865113095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12152.449350381085,
            "unit": "ns/iter",
            "extra": "iterations: 57957\ncpu: 12151.671066480125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9562.079346892568,
            "unit": "ns/iter",
            "extra": "iterations: 73311\ncpu: 9561.565113011813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9413.357431878314,
            "unit": "ns/iter",
            "extra": "iterations: 74389\ncpu: 9412.672572557693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10063.384386456963,
            "unit": "ns/iter",
            "extra": "iterations: 69555\ncpu: 10063.154338293554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24550.499401829577,
            "unit": "ns/iter",
            "extra": "iterations: 28420\ncpu: 24549.919071076947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 104010.75666074628,
            "unit": "ns/iter",
            "extra": "iterations: 6756\ncpu: 104004.75133214901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88032.77454820818,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88024.78200429762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87683.93751560834,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 87676.73081729579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87638.69279819966,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87629.88247061861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54889.92640150302,
            "unit": "ns/iter",
            "extra": "iterations: 12772\ncpu: 54888.70184779282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87563.59559835015,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 87556.32112041877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2331.0420759553144,
            "unit": "ns/iter",
            "extra": "iterations: 300623\ncpu: 2330.8708914487515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11872.965214295318,
            "unit": "ns/iter",
            "extra": "iterations: 58961\ncpu: 11871.974695137496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9370.53970014374,
            "unit": "ns/iter",
            "extra": "iterations: 74836\ncpu: 9369.602864931225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9271.190331004565,
            "unit": "ns/iter",
            "extra": "iterations: 75437\ncpu: 9270.571470233313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9720.040717947759,
            "unit": "ns/iter",
            "extra": "iterations: 71983\ncpu: 9719.90469972069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23511.422378285642,
            "unit": "ns/iter",
            "extra": "iterations: 29618\ncpu: 23510.665811330968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 102493.73244586834,
            "unit": "ns/iter",
            "extra": "iterations: 6836\ncpu: 102486.74663545749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 86320.63261030854,
            "unit": "ns/iter",
            "extra": "iterations: 8114\ncpu: 86315.1836332272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84685.49981798623,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 84680.0873680379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85174.27930235381,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85170.55738504739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55267.04744958575,
            "unit": "ns/iter",
            "extra": "iterations: 12645\ncpu: 55265.51996836652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86184.79326091905,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 86184.85559121173 ns\nthreads: 1"
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
        "date": 1702491509474,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 802.0130692373293,
            "unit": "ns/iter",
            "extra": "iterations: 870441\ncpu: 801.9945062330473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11671.206663658291,
            "unit": "ns/iter",
            "extra": "iterations: 70922\ncpu: 11670.773525845294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25673.1263938224,
            "unit": "ns/iter",
            "extra": "iterations: 32375\ncpu: 25672.849420849423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41348.31652739075,
            "unit": "ns/iter",
            "extra": "iterations: 21540\ncpu: 41346.248839368585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53326.99669463368,
            "unit": "ns/iter",
            "extra": "iterations: 15732\ncpu: 53325.03178235441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52551.70460000045,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52547.69999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64669.57427325855,
            "unit": "ns/iter",
            "extra": "iterations: 13760\ncpu: 64667.8924418605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73221.03334467631,
            "unit": "ns/iter",
            "extra": "iterations: 11756\ncpu: 73217.58251105814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 84002.92967244258,
            "unit": "ns/iter",
            "extra": "iterations: 10380\ncpu: 83998.74759152209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 687.8631446417659,
            "unit": "ns/iter",
            "extra": "iterations: 1016650\ncpu: 687.8184232528405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 571.2109108166208,
            "unit": "ns/iter",
            "extra": "iterations: 1220037\ncpu: 571.1947260615874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 556.8945669620978,
            "unit": "ns/iter",
            "extra": "iterations: 1257234\ncpu: 556.8890119102732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 561.4592180724941,
            "unit": "ns/iter",
            "extra": "iterations: 1247072\ncpu: 561.431416951065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1078.3507049586037,
            "unit": "ns/iter",
            "extra": "iterations: 649258\ncpu: 1078.3161701511572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4037.6126703362543,
            "unit": "ns/iter",
            "extra": "iterations: 198211\ncpu: 4037.450494674863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17489.931861100493,
            "unit": "ns/iter",
            "extra": "iterations: 45011\ncpu: 17489.76250249938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14440.48911293188,
            "unit": "ns/iter",
            "extra": "iterations: 54652\ncpu: 14439.853985215539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13523.438325502057,
            "unit": "ns/iter",
            "extra": "iterations: 58525\ncpu: 13522.771465185837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13479.679778451198,
            "unit": "ns/iter",
            "extra": "iterations: 58497\ncpu: 13479.161324512337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37761.212292781085,
            "unit": "ns/iter",
            "extra": "iterations: 22078\ncpu: 37760.163964127314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 503114.59638910386,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 503086.4298194533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 417234.56684239337,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 417226.0661236223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 412858.42359118524,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 412850.57306590397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 417781.23894229246,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 417758.79807692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256227.2004709929,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 256219.69384751213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 414573.2728578361,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 414547.5347056014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2044732.906666569,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2044616.2222222202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 823703.7651183445,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 823642.8571428577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2619574.543662015,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2619265.070422532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4039.0079953106842,
            "unit": "ns/iter",
            "extra": "iterations: 199617\ncpu: 4038.898490609518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17786.646617512153,
            "unit": "ns/iter",
            "extra": "iterations: 46519\ncpu: 17786.17984049534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14257.097289808573,
            "unit": "ns/iter",
            "extra": "iterations: 57745\ncpu: 14256.69235431635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13698.231008675006,
            "unit": "ns/iter",
            "extra": "iterations: 60396\ncpu: 13697.844228094566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13803.224790267423,
            "unit": "ns/iter",
            "extra": "iterations: 59838\ncpu: 13802.690597947838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37377.06375261027,
            "unit": "ns/iter",
            "extra": "iterations: 22054\ncpu: 37375.92273510487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 522104.04621843324,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 522086.1944777931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 424768.67023867904,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 424742.2308816369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 419611.941317904,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 419607.74410774227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 419138.7681644357,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 419125.525812619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251296.558915818,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 251286.96148359412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 413824.24473178474,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 413819.3486590029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2054527.5448430178,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2054343.946188341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 813290.9816272543,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 813246.3692038457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3868.5966366798984,
            "unit": "ns/iter",
            "extra": "iterations: 204203\ncpu: 3868.4123151961353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17445.759071238903,
            "unit": "ns/iter",
            "extra": "iterations: 47375\ncpu: 17444.335620052727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14702.127142451225,
            "unit": "ns/iter",
            "extra": "iterations: 56244\ncpu: 14701.367256951924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14349.176104443664,
            "unit": "ns/iter",
            "extra": "iterations: 57676\ncpu: 14348.439558915288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14425.240629959151,
            "unit": "ns/iter",
            "extra": "iterations: 57337\ncpu: 14424.314142700285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37522.66414095825,
            "unit": "ns/iter",
            "extra": "iterations: 22304\ncpu: 37521.31456241018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 511085.91111109254,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 511058.88888888666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 417235.963820572,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 417212.01157742314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 417804.59477434907,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 417776.3420427524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 417515.99952309916,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 417481.7835002398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 250919.0951025227,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 250909.96583143523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 414008.3065589267,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 413984.83840304165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 335.2109204154591,
            "unit": "ns/iter",
            "extra": "iterations: 2087503\ncpu: 335.18773386193897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1777.0075841105704,
            "unit": "ns/iter",
            "extra": "iterations: 395432\ncpu: 1776.9004531752573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1386.48624402027,
            "unit": "ns/iter",
            "extra": "iterations: 504835\ncpu: 1386.4656769043322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1318.374121293506,
            "unit": "ns/iter",
            "extra": "iterations: 529756\ncpu: 1318.3573192186536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1123.0750834751059,
            "unit": "ns/iter",
            "extra": "iterations: 623839\ncpu: 1123.0248509631529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6980.980105324459,
            "unit": "ns/iter",
            "extra": "iterations: 100831\ncpu: 6980.387975920041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21383.175477170706,
            "unit": "ns/iter",
            "extra": "iterations: 32745\ncpu: 21382.910367995122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5067.171623305132,
            "unit": "ns/iter",
            "extra": "iterations: 138064\ncpu: 5067.07903580946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5004.199860352155,
            "unit": "ns/iter",
            "extra": "iterations: 140353\ncpu: 5004.141699856703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5055.197662807839,
            "unit": "ns/iter",
            "extra": "iterations: 138200\ncpu: 5054.83646888569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10316.668488375948,
            "unit": "ns/iter",
            "extra": "iterations: 67702\ncpu: 10316.132462851954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9452.315666218254,
            "unit": "ns/iter",
            "extra": "iterations: 74300\ncpu: 9452.127860026994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2401.2372657513642,
            "unit": "ns/iter",
            "extra": "iterations: 291517\ncpu: 2401.0860430095067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12078.968470952226,
            "unit": "ns/iter",
            "extra": "iterations: 58010\ncpu: 12078.822616790005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9582.896474537512,
            "unit": "ns/iter",
            "extra": "iterations: 73267\ncpu: 9582.430016241924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9596.315412234806,
            "unit": "ns/iter",
            "extra": "iterations: 73247\ncpu: 9596.100864199243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10137.78049416664,
            "unit": "ns/iter",
            "extra": "iterations: 69005\ncpu: 10137.617563944767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24537.1091170415,
            "unit": "ns/iter",
            "extra": "iterations: 28529\ncpu: 24536.622384240625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 103323.49468557075,
            "unit": "ns/iter",
            "extra": "iterations: 6774\ncpu: 103320.80011809953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88175.03517587594,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 88166.75879397072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87642.7962731438,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 87639.494747373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 88544.35503857122,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 88540.346440763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54635.63590866515,
            "unit": "ns/iter",
            "extra": "iterations: 12788\ncpu: 54632.4131998746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87412.11073616309,
            "unit": "ns/iter",
            "extra": "iterations: 8001\ncpu: 87411.12360954951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2350.5855766904006,
            "unit": "ns/iter",
            "extra": "iterations: 297768\ncpu: 2350.427514037762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11824.546668695939,
            "unit": "ns/iter",
            "extra": "iterations: 59151\ncpu: 11824.37152372742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9370.76605990642,
            "unit": "ns/iter",
            "extra": "iterations: 74549\ncpu: 9370.364458275839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9208.426262254337,
            "unit": "ns/iter",
            "extra": "iterations: 76094\ncpu: 9208.238494493748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9678.694991698843,
            "unit": "ns/iter",
            "extra": "iterations: 72280\ncpu: 9678.591588267738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23647.068386747615,
            "unit": "ns/iter",
            "extra": "iterations: 29611\ncpu: 23645.864712437866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 102285.77623703235,
            "unit": "ns/iter",
            "extra": "iterations: 6851\ncpu: 102283.95854619725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 86299.42992846065,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 86291.14236368173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84420.53929867443,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 84419.66142684464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84385.70700637695,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 84385.49730524315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55275.29847907967,
            "unit": "ns/iter",
            "extra": "iterations: 12624\ncpu: 55270.85709759149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86497.41028812519,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 86495.62260418024 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}