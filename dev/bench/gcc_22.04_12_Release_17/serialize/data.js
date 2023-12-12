window.BENCHMARK_DATA = {
  "lastUpdate": 1702418678893,
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
      }
    ]
  }
}