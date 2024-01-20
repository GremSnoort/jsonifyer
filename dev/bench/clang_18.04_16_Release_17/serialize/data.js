window.BENCHMARK_DATA = {
  "lastUpdate": 1705773473371,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-16 18.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490339423,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 693.6666593647791,
            "unit": "ns/iter",
            "extra": "iterations: 1004306\ncpu: 693.6204702550816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11042.705394900233,
            "unit": "ns/iter",
            "extra": "iterations: 76146\ncpu: 11042.13090641662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24232.707875000735,
            "unit": "ns/iter",
            "extra": "iterations: 34273\ncpu: 24231.28410118752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38416.347710233145,
            "unit": "ns/iter",
            "extra": "iterations: 22142\ncpu: 38414.005058260314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48394.893383699964,
            "unit": "ns/iter",
            "extra": "iterations: 16414\ncpu: 48391.75094431581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60049.68934577023,
            "unit": "ns/iter",
            "extra": "iterations: 14154\ncpu: 60045.845697329365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59937.76579999804,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59937.77000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69238.25506137381,
            "unit": "ns/iter",
            "extra": "iterations: 12546\ncpu: 69233.93113342897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79005.16944545302,
            "unit": "ns/iter",
            "extra": "iterations: 11036\ncpu: 79000.77926785055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 580.1771888628011,
            "unit": "ns/iter",
            "extra": "iterations: 1207305\ncpu: 580.1279709766787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 492.2953866903139,
            "unit": "ns/iter",
            "extra": "iterations: 1422146\ncpu: 492.2715389277895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.41971953268296,
            "unit": "ns/iter",
            "extra": "iterations: 1483524\ncpu: 471.40012564676994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.8202687047257,
            "unit": "ns/iter",
            "extra": "iterations: 1425133\ncpu: 492.7954092705733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 968.1227147362449,
            "unit": "ns/iter",
            "extra": "iterations: 722619\ncpu: 968.106429529253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4374.980518459348,
            "unit": "ns/iter",
            "extra": "iterations: 184431\ncpu: 4374.788403251081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18862.208898459532,
            "unit": "ns/iter",
            "extra": "iterations: 43648\ncpu: 18861.349890029327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15049.14715676335,
            "unit": "ns/iter",
            "extra": "iterations: 54955\ncpu: 15048.526976617202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14841.389688723377,
            "unit": "ns/iter",
            "extra": "iterations: 55706\ncpu: 14840.629375650706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14922.226972734145,
            "unit": "ns/iter",
            "extra": "iterations: 55456\ncpu: 14921.469272937155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47107.33431717736,
            "unit": "ns/iter",
            "extra": "iterations: 17618\ncpu: 47104.20592575776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 439681.90590590326,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 439652.50250250305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 367547.6287149572,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 367532.9845123489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366842.57232704555,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 366830.6918238996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 374372.6501508164,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 374357.6906505817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223930.0023364351,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 223921.23572170292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366562.8125264774,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 366538.848920863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1870892.1443089545,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1870772.76422764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 758107.4301948112,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 758063.8798701285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2501094.8346885643,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2501059.620596206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4305.424135843216,
            "unit": "ns/iter",
            "extra": "iterations: 189925\ncpu: 4305.385810188231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18503.832102501292,
            "unit": "ns/iter",
            "extra": "iterations: 44956\ncpu: 18503.48785479128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14805.544450816215,
            "unit": "ns/iter",
            "extra": "iterations: 55792\ncpu: 14805.427301405245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14809.750402518115,
            "unit": "ns/iter",
            "extra": "iterations: 55898\ncpu: 14809.735589824371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14825.4665890161,
            "unit": "ns/iter",
            "extra": "iterations: 55805\ncpu: 14825.16978765353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47624.13363713555,
            "unit": "ns/iter",
            "extra": "iterations: 17555\ncpu: 47623.395044146964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 449411.7339927049,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 449411.34825611627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374536.7209697893,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 374533.4325818798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 374724.5776720389,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 374716.96235395956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373573.4366869335,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 373570.16478751175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222061.6654172899,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 222061.79410294798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 365565.5830866626,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 365558.9852008464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1882778.3394309941,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882599.59349594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 715710.6901840272,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 715681.3650306731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4179.159236270498,
            "unit": "ns/iter",
            "extra": "iterations: 190591\ncpu: 4178.989039356549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18322.43143701887,
            "unit": "ns/iter",
            "extra": "iterations: 45316\ncpu: 18321.31256068491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14754.094372833726,
            "unit": "ns/iter",
            "extra": "iterations: 56245\ncpu: 14753.490976975787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14748.1624333916,
            "unit": "ns/iter",
            "extra": "iterations: 56300\ncpu: 14747.699822380077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14784.528773769222,
            "unit": "ns/iter",
            "extra": "iterations: 56058\ncpu: 14784.371543758256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47060.77605258537,
            "unit": "ns/iter",
            "extra": "iterations: 17647\ncpu: 47057.78319261098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441897.3938618714,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 441850.58823529456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 364490.9219409119,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 364451.64556962054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365457.1101695171,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 365427.3305084749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 367299.7940298638,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 367293.73134328437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225421.72540456458,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 225421.5001284358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364404.0612072545,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 364396.91853102716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.35963166573123,
            "unit": "ns/iter",
            "extra": "iterations: 2368718\ncpu: 295.29779399658554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1642.2165945348506,
            "unit": "ns/iter",
            "extra": "iterations: 426996\ncpu: 1641.8380968439976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1248.137992735632,
            "unit": "ns/iter",
            "extra": "iterations: 560544\ncpu: 1248.1170077638844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1290.1304315031432,
            "unit": "ns/iter",
            "extra": "iterations: 543588\ncpu: 1290.0866097117714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 995.8372557331774,
            "unit": "ns/iter",
            "extra": "iterations: 707730\ncpu: 995.7951478671279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7982.595277458564,
            "unit": "ns/iter",
            "extra": "iterations: 87707\ncpu: 7982.317260879996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18672.680258310345,
            "unit": "ns/iter",
            "extra": "iterations: 37474\ncpu: 18672.186048994226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4440.0895283367245,
            "unit": "ns/iter",
            "extra": "iterations: 157358\ncpu: 4440.01067629232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4555.176645012934,
            "unit": "ns/iter",
            "extra": "iterations: 153783\ncpu: 4555.05810135061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4594.793961937638,
            "unit": "ns/iter",
            "extra": "iterations: 152433\ncpu: 4594.558264942596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9256.017217212913,
            "unit": "ns/iter",
            "extra": "iterations: 75622\ncpu: 9255.756261405575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8390.822973442037,
            "unit": "ns/iter",
            "extra": "iterations: 83479\ncpu: 8390.59044789707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3238.5908251810815,
            "unit": "ns/iter",
            "extra": "iterations: 217225\ncpu: 3238.4937277016534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16112.55850341682,
            "unit": "ns/iter",
            "extra": "iterations: 43459\ncpu: 16111.949193492794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12863.160016931804,
            "unit": "ns/iter",
            "extra": "iterations: 54338\ncpu: 12862.788472155777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12916.947866947852,
            "unit": "ns/iter",
            "extra": "iterations: 54054\ncpu: 12916.520516520372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13190.932863327274,
            "unit": "ns/iter",
            "extra": "iterations: 52907\ncpu: 13190.341542706894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28365.59268717813,
            "unit": "ns/iter",
            "extra": "iterations: 24669\ncpu: 28364.189873930743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98653.51804015803,
            "unit": "ns/iter",
            "extra": "iterations: 7123\ncpu: 98649.81047311366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84985.34603251332,
            "unit": "ns/iter",
            "extra": "iterations: 8242\ncpu: 84983.64474642092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85394.36786237975,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85392.5573450453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85535.13570194639,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 85531.76659264902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54480.08512621968,
            "unit": "ns/iter",
            "extra": "iterations: 12875\ncpu: 54477.44466019482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83746.42171565283,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 83743.95920815816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3056.6424173935275,
            "unit": "ns/iter",
            "extra": "iterations: 229189\ncpu: 3056.579504251928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15340.55660253317,
            "unit": "ns/iter",
            "extra": "iterations: 45634\ncpu: 15340.095104527414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12163.019189430639,
            "unit": "ns/iter",
            "extra": "iterations: 57219\ncpu: 12162.550900924634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12209.504985244024,
            "unit": "ns/iter",
            "extra": "iterations: 57269\ncpu: 12209.02233319961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12608.40676349324,
            "unit": "ns/iter",
            "extra": "iterations: 55563\ncpu: 12607.639976243161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27752.569435087156,
            "unit": "ns/iter",
            "extra": "iterations: 25225\ncpu: 27751.877106045307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98331.16267409778,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 98326.10027855138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83935.88758389403,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83933.74880153476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82807.77198581908,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82805.03546099212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83261.24119047931,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83258.42857142822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55397.58565453859,
            "unit": "ns/iter",
            "extra": "iterations: 12673\ncpu: 55396.29921881169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83934.63674346513,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 83931.12092634602 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492946379,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 691.1323843443862,
            "unit": "ns/iter",
            "extra": "iterations: 1011041\ncpu: 691.125087904447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10759.191171916278,
            "unit": "ns/iter",
            "extra": "iterations: 77480\ncpu: 10758.6770779556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24009.769241793183,
            "unit": "ns/iter",
            "extra": "iterations: 34885\ncpu: 24009.178730113228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38006.660817191645,
            "unit": "ns/iter",
            "extra": "iterations: 23079\ncpu: 38004.86589540275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50013.93915533419,
            "unit": "ns/iter",
            "extra": "iterations: 16764\ncpu: 50011.33381054638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59387.818315997916,
            "unit": "ns/iter",
            "extra": "iterations: 14228\ncpu: 59384.53753162779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59522.317300002214,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59518.41000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68701.51115329795,
            "unit": "ns/iter",
            "extra": "iterations: 12642\ncpu: 68697.43711438062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78066.65898493845,
            "unit": "ns/iter",
            "extra": "iterations: 11152\ncpu: 78062.84074605462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 575.9347879594538,
            "unit": "ns/iter",
            "extra": "iterations: 1214791\ncpu: 575.9010397673347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 486.15071336789765,
            "unit": "ns/iter",
            "extra": "iterations: 1441332\ncpu: 486.11652277199096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.1398767439743,
            "unit": "ns/iter",
            "extra": "iterations: 1470273\ncpu: 475.1125131183124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.1115510137045,
            "unit": "ns/iter",
            "extra": "iterations: 1423295\ncpu: 492.10374518283277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 938.7309355105735,
            "unit": "ns/iter",
            "extra": "iterations: 745037\ncpu: 938.6788844044005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4325.312892498505,
            "unit": "ns/iter",
            "extra": "iterations: 167198\ncpu: 4325.204248854653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18490.871706292117,
            "unit": "ns/iter",
            "extra": "iterations: 44289\ncpu: 18489.988484725327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14758.353702941416,
            "unit": "ns/iter",
            "extra": "iterations: 55753\ncpu: 14757.919753197117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14775.42209729141,
            "unit": "ns/iter",
            "extra": "iterations: 55319\ncpu: 14774.733816591053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14845.156945936353,
            "unit": "ns/iter",
            "extra": "iterations: 54917\ncpu: 14844.268623559195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46277.30779377261,
            "unit": "ns/iter",
            "extra": "iterations: 18194\ncpu: 46276.074530064856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 435095.9755351499,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 435072.1712538212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362669.6166736408,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 362647.21407624654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364915.4378130472,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 364896.61936560954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365540.9719626516,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 365530.03398470744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224129.72924187695,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 224118.7983496652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363090.2080706012,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 363077.21731820103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1877517.519191811,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1877450.9090909094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 736422.8703849663,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 736411.3904163397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2501211.179347931,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2501057.3369565154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4197.922895858086,
            "unit": "ns/iter",
            "extra": "iterations: 188628\ncpu: 4197.705006679834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18516.589137453262,
            "unit": "ns/iter",
            "extra": "iterations: 44925\ncpu: 18516.01112966062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14742.76629357824,
            "unit": "ns/iter",
            "extra": "iterations: 56019\ncpu: 14741.994680376356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14756.0505014461,
            "unit": "ns/iter",
            "extra": "iterations: 56038\ncpu: 14755.250008922487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14797.337831067834,
            "unit": "ns/iter",
            "extra": "iterations: 55880\ncpu: 14796.7197566213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45587.369647876796,
            "unit": "ns/iter",
            "extra": "iterations: 18147\ncpu: 45585.87645340821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 459407.3607426982,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 459380.21220159385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380854.9584244812,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 380843.10722100706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375167.34325141774,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 375147.7360931416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374989.12537959253,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 374973.79609544476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224421.03794872263,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 224408.07692307682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374250.1623126341,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 374233.104925056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1886361.9325151162,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1886285.8895705559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 735985.913629174,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 735943.4231378739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4237.463352299353,
            "unit": "ns/iter",
            "extra": "iterations: 193682\ncpu: 4237.368469966219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18449.700123835093,
            "unit": "ns/iter",
            "extra": "iterations: 45222\ncpu: 18449.27247799747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14846.603528697891,
            "unit": "ns/iter",
            "extra": "iterations: 56168\ncpu: 14846.170417319545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14818.945314583345,
            "unit": "ns/iter",
            "extra": "iterations: 56249\ncpu: 14818.076765809094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14870.258878420978,
            "unit": "ns/iter",
            "extra": "iterations: 55725\ncpu: 14869.552265590048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47313.299983246194,
            "unit": "ns/iter",
            "extra": "iterations: 17911\ncpu: 47310.719669476835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 447321.9741066879,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 447298.3946141889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370504.19227467664,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 370477.3819742492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370251.14835399436,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 370232.9628046163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370451.29368830257,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 370439.9742378688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224173.23959937264,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 224163.4052388281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367862.8959830616,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 367856.1522198714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.653301021371,
            "unit": "ns/iter",
            "extra": "iterations: 2349182\ncpu: 298.6499130335578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1608.0573038401553,
            "unit": "ns/iter",
            "extra": "iterations: 435538\ncpu: 1608.0511918592745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1256.4260689331472,
            "unit": "ns/iter",
            "extra": "iterations: 557729\ncpu: 1256.3940551773446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1265.331359372464,
            "unit": "ns/iter",
            "extra": "iterations: 552527\ncpu: 1265.3115594351061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1050.9064605615395,
            "unit": "ns/iter",
            "extra": "iterations: 666521\ncpu: 1050.8753662675233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8049.692072925922,
            "unit": "ns/iter",
            "extra": "iterations: 87157\ncpu: 8049.551957960956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19144.006902031382,
            "unit": "ns/iter",
            "extra": "iterations: 36511\ncpu: 19143.76763167261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4484.164172611488,
            "unit": "ns/iter",
            "extra": "iterations: 156305\ncpu: 4483.928217267498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4493.909562019235,
            "unit": "ns/iter",
            "extra": "iterations: 155532\ncpu: 4493.841781755468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4575.742161710464,
            "unit": "ns/iter",
            "extra": "iterations: 153286\ncpu: 4575.719243766627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9397.816464709991,
            "unit": "ns/iter",
            "extra": "iterations: 74438\ncpu: 9397.673231414105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8469.165190706708,
            "unit": "ns/iter",
            "extra": "iterations: 82771\ncpu: 8468.846576699636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3244.9820828406605,
            "unit": "ns/iter",
            "extra": "iterations: 215715\ncpu: 3244.9375333194694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16265.227177749322,
            "unit": "ns/iter",
            "extra": "iterations: 43072\ncpu: 16264.965638929994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12910.00973407124,
            "unit": "ns/iter",
            "extra": "iterations: 54037\ncpu: 12909.804393286064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12920.443780323296,
            "unit": "ns/iter",
            "extra": "iterations: 54207\ncpu: 12920.093345877924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13248.474641583123,
            "unit": "ns/iter",
            "extra": "iterations: 52941\ncpu: 13248.283938724479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28560.141214031242,
            "unit": "ns/iter",
            "extra": "iterations: 24431\ncpu: 28559.43268797869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98069.02552595176,
            "unit": "ns/iter",
            "extra": "iterations: 7130\ncpu: 98068.55539971952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85262.39676752767,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 85261.18604933804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85308.66265646258,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 85305.96670312436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85375.31611017449,
            "unit": "ns/iter",
            "extra": "iterations: 8206\ncpu: 85374.87204484567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54939.152327223776,
            "unit": "ns/iter",
            "extra": "iterations: 12762\ncpu: 54937.27472183053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84375.81466296525,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84375.40094055264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3055.121899959456,
            "unit": "ns/iter",
            "extra": "iterations: 228868\ncpu: 3055.0741038502533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15319.132761276795,
            "unit": "ns/iter",
            "extra": "iterations: 45450\ncpu: 15318.64026402634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12174.785210411097,
            "unit": "ns/iter",
            "extra": "iterations: 57554\ncpu: 12174.563019077626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12051.320737214828,
            "unit": "ns/iter",
            "extra": "iterations: 58219\ncpu: 12050.949002902873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12552.68168318514,
            "unit": "ns/iter",
            "extra": "iterations: 55894\ncpu: 12552.655025584223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27654.894491975538,
            "unit": "ns/iter",
            "extra": "iterations: 25363\ncpu: 27653.873753104526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97354.29288587735,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 97352.10095687107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83735.35189176761,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83733.39319923376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82932.4425430736,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 82932.13309566307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83464.0976655546,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 83463.79228203876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55019.41368486712,
            "unit": "ns/iter",
            "extra": "iterations: 12744\ncpu: 55017.20809792909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83368.25956381038,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83367.01227505803 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702504000022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 706.1818117247044,
            "unit": "ns/iter",
            "extra": "iterations: 985514\ncpu: 706.1488725680204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10722.028134547803,
            "unit": "ns/iter",
            "extra": "iterations: 77236\ncpu: 10721.848619814595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24163.150372037784,
            "unit": "ns/iter",
            "extra": "iterations: 34674\ncpu: 24162.536771067655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38822.84253157334,
            "unit": "ns/iter",
            "extra": "iterations: 21852\ncpu: 38822.11239245835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48265.004069908166,
            "unit": "ns/iter",
            "extra": "iterations: 16708\ncpu: 48264.484079482914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59447.95353919996,
            "unit": "ns/iter",
            "extra": "iterations: 14184\ncpu: 59446.57360406095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59137.8748000011,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59136.86999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68676.44577270729,
            "unit": "ns/iter",
            "extra": "iterations: 12715\ncpu: 68674.09359024778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80150.00846686446,
            "unit": "ns/iter",
            "extra": "iterations: 10984\ncpu: 80146.88638018949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 578.9178889682839,
            "unit": "ns/iter",
            "extra": "iterations: 1208376\ncpu: 578.9066482617993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 491.0396037037319,
            "unit": "ns/iter",
            "extra": "iterations: 1427619\ncpu: 491.03360210252276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 477.8991490838508,
            "unit": "ns/iter",
            "extra": "iterations: 1467007\ncpu: 477.8926753587409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 493.7768355114326,
            "unit": "ns/iter",
            "extra": "iterations: 1415028\ncpu: 493.7712186613974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 959.0889128560835,
            "unit": "ns/iter",
            "extra": "iterations: 737115\ncpu: 959.0769418611761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4370.282819537954,
            "unit": "ns/iter",
            "extra": "iterations: 182498\ncpu: 4370.129535666137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18616.487252706538,
            "unit": "ns/iter",
            "extra": "iterations: 43774\ncpu: 18616.164846712705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14814.404702452106,
            "unit": "ns/iter",
            "extra": "iterations: 54865\ncpu: 14813.823020140379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14975.704721546763,
            "unit": "ns/iter",
            "extra": "iterations: 54982\ncpu: 14975.47924775381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14818.603875717912,
            "unit": "ns/iter",
            "extra": "iterations: 55422\ncpu: 14817.920681317884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46991.23237934655,
            "unit": "ns/iter",
            "extra": "iterations: 17820\ncpu: 46990.02805836133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 436571.13499746163,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 436566.5817626076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361261.0755033494,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 361255.3691275167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362005.0900334759,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 361999.5812395308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 366901.85292860685,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 366895.2971355282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225516.42926829375,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 225513.88960205374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363849.1364210591,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 363837.2631578956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1869532.3555556284,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1869452.5252525243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 722686.9434546592,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 722676.3749031768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2496594.1239892435,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2496447.1698113196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4198.418899633475,
            "unit": "ns/iter",
            "extra": "iterations: 187792\ncpu: 4198.367875095837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18522.240141151673,
            "unit": "ns/iter",
            "extra": "iterations: 43641\ncpu: 18522.400953232012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15038.754395813594,
            "unit": "ns/iter",
            "extra": "iterations: 55223\ncpu: 15038.612534632279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14875.533836363336,
            "unit": "ns/iter",
            "extra": "iterations: 55000\ncpu: 14875.56909090906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15046.73806285634,
            "unit": "ns/iter",
            "extra": "iterations: 55143\ncpu: 15046.29055365147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47030.3915822799,
            "unit": "ns/iter",
            "extra": "iterations: 17677\ncpu: 47030.808395089836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 457415.3118393791,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 457416.3847780144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 378677.20847899915,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 378669.2744755247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 374998.6225108381,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 375004.1558441556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 375332.7988729914,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 375326.18118769117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223352.34111085132,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 223352.8531574929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 370250.31172707694,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 370248.65671641997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1861191.9672801392,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1861141.1042944742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 747569.2835093079,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 747562.3883021891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4193.599152515469,
            "unit": "ns/iter",
            "extra": "iterations: 188558\ncpu: 4193.451882179518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18382.5645992792,
            "unit": "ns/iter",
            "extra": "iterations: 44033\ncpu: 18382.60168509983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14812.275269172582,
            "unit": "ns/iter",
            "extra": "iterations: 54612\ncpu: 14812.15300666523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14777.589014406887,
            "unit": "ns/iter",
            "extra": "iterations: 55946\ncpu: 14777.598040968009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14802.486229632172,
            "unit": "ns/iter",
            "extra": "iterations: 55663\ncpu: 14802.13247579187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46974.99572457231,
            "unit": "ns/iter",
            "extra": "iterations: 17776\ncpu: 46975.13501350153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 442114.41264126136,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 442109.24974306516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372409.64240217645,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 372412.6933575972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369163.99400685815,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 369166.95205479563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371855.7421030203,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 371858.7624405036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221889.10360704642,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 221885.06011767738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369302.3714893261,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 369296.340425531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 293.6568415371182,
            "unit": "ns/iter",
            "extra": "iterations: 2375168\ncpu: 293.6594379850186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1552.8126955479293,
            "unit": "ns/iter",
            "extra": "iterations: 455451\ncpu: 1552.8260998438845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1192.3669774393018,
            "unit": "ns/iter",
            "extra": "iterations: 584243\ncpu: 1192.377486764929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1190.3815874556635,
            "unit": "ns/iter",
            "extra": "iterations: 584558\ncpu: 1190.3826480862492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1000.1913706109972,
            "unit": "ns/iter",
            "extra": "iterations: 696434\ncpu: 1000.1914036362356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7995.260571690593,
            "unit": "ns/iter",
            "extra": "iterations: 87285\ncpu: 7995.334822707211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18627.856827431606,
            "unit": "ns/iter",
            "extra": "iterations: 37591\ncpu: 18628.043946689424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4412.804164962557,
            "unit": "ns/iter",
            "extra": "iterations: 158945\ncpu: 4412.844694705728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4412.855486755202,
            "unit": "ns/iter",
            "extra": "iterations: 159238\ncpu: 4412.86376367449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4441.238326724537,
            "unit": "ns/iter",
            "extra": "iterations: 157368\ncpu: 4441.277769305066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8806.704235291169,
            "unit": "ns/iter",
            "extra": "iterations: 79357\ncpu: 8806.78327053687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8398.223525723672,
            "unit": "ns/iter",
            "extra": "iterations: 82939\ncpu: 8398.299955388959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3174.1000941040243,
            "unit": "ns/iter",
            "extra": "iterations: 221032\ncpu: 3174.085652756128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15933.94382756606,
            "unit": "ns/iter",
            "extra": "iterations: 44399\ncpu: 15934.086353296332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12691.45435910486,
            "unit": "ns/iter",
            "extra": "iterations: 55126\ncpu: 12691.56659289622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12818.941350525762,
            "unit": "ns/iter",
            "extra": "iterations: 54749\ncpu: 12819.063361887971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13157.401789062022,
            "unit": "ns/iter",
            "extra": "iterations: 53324\ncpu: 13157.306278598782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28037.830329958062,
            "unit": "ns/iter",
            "extra": "iterations: 24306\ncpu: 28037.772566444528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97474.70733751122,
            "unit": "ns/iter",
            "extra": "iterations: 7155\ncpu: 97475.61146051787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84313.54611124969,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 84313.68889959101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83989.5264356726,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 83990.21700035913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83466.65574356643,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83465.33603431913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53955.749961427544,
            "unit": "ns/iter",
            "extra": "iterations: 12962\ncpu: 53956.12559790186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82960.45504217128,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 82961.00486993707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2989.348272027567,
            "unit": "ns/iter",
            "extra": "iterations: 233800\ncpu: 2989.3669803250727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15095.336360693651,
            "unit": "ns/iter",
            "extra": "iterations: 46355\ncpu: 15095.318735842882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12049.225479569688,
            "unit": "ns/iter",
            "extra": "iterations: 58125\ncpu: 12049.154408601993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11947.288379969803,
            "unit": "ns/iter",
            "extra": "iterations: 58468\ncpu: 11947.395156324666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12341.710810810626,
            "unit": "ns/iter",
            "extra": "iterations: 56610\ncpu: 12341.822999470054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27261.23893355988,
            "unit": "ns/iter",
            "extra": "iterations: 25618\ncpu: 27259.493325005544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95887.31864824843,
            "unit": "ns/iter",
            "extra": "iterations: 7309\ncpu: 95883.2124777664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82311.68725052493,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 82310.62455975627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81217.29003475572,
            "unit": "ns/iter",
            "extra": "iterations: 8630\ncpu: 81214.19466975686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81467.07413009983,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 81464.41289421654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54131.62451841308,
            "unit": "ns/iter",
            "extra": "iterations: 12978\ncpu: 54130.02773925118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82065.18769049479,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 82060.84407971853 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1705575680282,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 684.1555247583128,
            "unit": "ns/iter",
            "extra": "iterations: 1022461\ncpu: 684.1354340165543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11498.280405145302,
            "unit": "ns/iter",
            "extra": "iterations: 77898\ncpu: 11497.676448689312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23985.44274028396,
            "unit": "ns/iter",
            "extra": "iterations: 35208\ncpu: 23984.45807770962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36744.72584010064,
            "unit": "ns/iter",
            "extra": "iterations: 22527\ncpu: 36743.392373596136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46463.247119519125,
            "unit": "ns/iter",
            "extra": "iterations: 17445\ncpu: 46461.79994267697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57872.928649836664,
            "unit": "ns/iter",
            "extra": "iterations: 14576\ncpu: 57871.42563117458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57711.08569999796,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57709.20999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66879.97628977403,
            "unit": "ns/iter",
            "extra": "iterations: 12948\ncpu: 66878.20512820513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78024.42423175208,
            "unit": "ns/iter",
            "extra": "iterations: 11357\ncpu: 78021.5461829709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 563.5468795308667,
            "unit": "ns/iter",
            "extra": "iterations: 1241480\ncpu: 563.5385185423856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 476.77887002999876,
            "unit": "ns/iter",
            "extra": "iterations: 1467915\ncpu: 476.7598941355593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 456.5914791842056,
            "unit": "ns/iter",
            "extra": "iterations: 1501429\ncpu: 456.57397053074084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 474.3748968531343,
            "unit": "ns/iter",
            "extra": "iterations: 1480898\ncpu: 474.3436752565006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 926.3811915438386,
            "unit": "ns/iter",
            "extra": "iterations: 757404\ncpu: 926.3309937629066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4021.926463980916,
            "unit": "ns/iter",
            "extra": "iterations: 200310\ncpu: 4021.704358244716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 16353.559530219454,
            "unit": "ns/iter",
            "extra": "iterations: 50151\ncpu: 16352.31002372832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 13252.845792361199,
            "unit": "ns/iter",
            "extra": "iterations: 62137\ncpu: 13252.20078214268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 13865.88066058408,
            "unit": "ns/iter",
            "extra": "iterations: 59402\ncpu: 13864.738560991233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 13787.150007350538,
            "unit": "ns/iter",
            "extra": "iterations: 61217\ncpu: 13786.649133410634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46133.517025438334,
            "unit": "ns/iter",
            "extra": "iterations: 17885\ncpu: 46130.66815767411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 439635.8847675428,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 439612.06726013916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359315.43788948096,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 359293.4358122146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360996.4080531698,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 360983.1465338317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365878.2717205928,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 365867.3764906298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222162.10238216814,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 222162.59503294498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 361547.30839189445,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 361530.6324927648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1850594.4268538284,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1850580.7615230472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 735963.9920192068,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 735922.4261771737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2499692.0161725017,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2499567.3854447496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4206.490116698552,
            "unit": "ns/iter",
            "extra": "iterations: 187235\ncpu: 4206.282479237315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18469.013972410747,
            "unit": "ns/iter",
            "extra": "iterations: 45232\ncpu: 18467.803767244466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14797.493644142796,
            "unit": "ns/iter",
            "extra": "iterations: 55854\ncpu: 14797.002900418953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14753.654467841434,
            "unit": "ns/iter",
            "extra": "iterations: 55989\ncpu: 14752.946114415397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14799.98628475682,
            "unit": "ns/iter",
            "extra": "iterations: 56069\ncpu: 14799.468512011945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46926.20241385037,
            "unit": "ns/iter",
            "extra": "iterations: 17731\ncpu: 46924.33590886036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460066.7492063526,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 460033.5978835989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 380443.0374401306,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 380417.32694819325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376999.8177468856,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 376972.8142670734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381007.0181582412,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 380983.7440553403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222299.19709702162,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 222278.9915966388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375193.99785594584,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 375181.94682675664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1878064.710472366,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1877966.3244353186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 749281.148594411,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 749266.104417675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4325.482740797528,
            "unit": "ns/iter",
            "extra": "iterations: 187668\ncpu: 4325.266960803106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18449.518526824937,
            "unit": "ns/iter",
            "extra": "iterations: 44584\ncpu: 18449.39888749322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14772.962794188928,
            "unit": "ns/iter",
            "extra": "iterations: 55959\ncpu: 14772.367268893298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14736.535783055137,
            "unit": "ns/iter",
            "extra": "iterations: 56088\ncpu: 14736.42312081021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14789.763394694819,
            "unit": "ns/iter",
            "extra": "iterations: 55899\ncpu: 14789.241310220168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46905.54960205927,
            "unit": "ns/iter",
            "extra": "iterations: 17842\ncpu: 46904.38291671352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441220.0283212981,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 441204.7373841408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368425.1471972995,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 368406.24732563016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369568.4938060676,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 369543.2721059378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374640.15278376127,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 373814.45835131523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222053.82521784783,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 222038.1342901076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366007.3057404436,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 365976.3727121472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.8958481161275,
            "unit": "ns/iter",
            "extra": "iterations: 2357749\ncpu: 297.8850165984614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1543.7713280799621,
            "unit": "ns/iter",
            "extra": "iterations: 443535\ncpu: 1543.7388255718188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1194.294094451723,
            "unit": "ns/iter",
            "extra": "iterations: 585822\ncpu: 1194.2834171471904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1231.5979349196664,
            "unit": "ns/iter",
            "extra": "iterations: 585062\ncpu: 1231.4676051427068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1023.058156113516,
            "unit": "ns/iter",
            "extra": "iterations: 683144\ncpu: 1023.0146206363606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7983.201924831008,
            "unit": "ns/iter",
            "extra": "iterations: 87696\ncpu: 7982.823617952999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18839.32556761611,
            "unit": "ns/iter",
            "extra": "iterations: 37129\ncpu: 18838.597861509963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4450.814267736307,
            "unit": "ns/iter",
            "extra": "iterations: 157334\ncpu: 4450.657200605066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4471.2871578034965,
            "unit": "ns/iter",
            "extra": "iterations: 156562\ncpu: 4471.132841941258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4507.127152300841,
            "unit": "ns/iter",
            "extra": "iterations: 154602\ncpu: 4506.788398597699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8926.193527598487,
            "unit": "ns/iter",
            "extra": "iterations: 79136\ncpu: 8925.740497371775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8397.504471324608,
            "unit": "ns/iter",
            "extra": "iterations: 83085\ncpu: 8397.301558644836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3179.03931805867,
            "unit": "ns/iter",
            "extra": "iterations: 220840\ncpu: 3178.953993841691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15917.789624107387,
            "unit": "ns/iter",
            "extra": "iterations: 43736\ncpu: 15917.251234680934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12420.046897507817,
            "unit": "ns/iter",
            "extra": "iterations: 54843\ncpu: 12419.688930219036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12846.1780854571,
            "unit": "ns/iter",
            "extra": "iterations: 54530\ncpu: 12845.061434072992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13135.91753643643,
            "unit": "ns/iter",
            "extra": "iterations: 53175\ncpu: 13134.997649271263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28452.044435400494,
            "unit": "ns/iter",
            "extra": "iterations: 24575\ncpu: 28449.42421159702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98833.63291496134,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 98827.52785220613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85268.59323472378,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 85265.57953443285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85082.15955382751,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 85078.35838991322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84996.97205271212,
            "unit": "ns/iter",
            "extra": "iterations: 8194\ncpu: 84994.31291188758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 57720.3700922847,
            "unit": "ns/iter",
            "extra": "iterations: 12786\ncpu: 57715.48568747069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85187.4518043151,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 85185.12957132563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3059.029302797231,
            "unit": "ns/iter",
            "extra": "iterations: 228886\ncpu: 3058.952928532063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15260.607069016045,
            "unit": "ns/iter",
            "extra": "iterations: 45947\ncpu: 15260.315145711455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12126.294154554018,
            "unit": "ns/iter",
            "extra": "iterations: 57378\ncpu: 12125.863571403845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12145.083953019814,
            "unit": "ns/iter",
            "extra": "iterations: 57556\ncpu: 12144.643477656538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12589.735117383081,
            "unit": "ns/iter",
            "extra": "iterations: 55417\ncpu: 12589.351642997586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27451.587709714528,
            "unit": "ns/iter",
            "extra": "iterations: 25630\ncpu: 27450.093640265106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96995.03931339626,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 96989.86710963586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83346.2332857516,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 83339.40042826434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82298.6037536716,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 82295.96480938469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82529.13668045,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82525.58771411736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55156.11471656287,
            "unit": "ns/iter",
            "extra": "iterations: 12666\ncpu: 55153.16595610324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83544.07106113697,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83538.29405431174 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773472236,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 726.8878144823223,
            "unit": "ns/iter",
            "extra": "iterations: 961461\ncpu: 726.8553794693701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10850.25046064502,
            "unit": "ns/iter",
            "extra": "iterations: 77066\ncpu: 10850.020761425272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23910.242798352017,
            "unit": "ns/iter",
            "extra": "iterations: 34506\ncpu: 23908.317394076388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38183.937113581385,
            "unit": "ns/iter",
            "extra": "iterations: 22644\ncpu: 38182.61791202968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47365.90189278026,
            "unit": "ns/iter",
            "extra": "iterations: 17012\ncpu: 47364.84246414297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58950.17026877011,
            "unit": "ns/iter",
            "extra": "iterations: 14436\ncpu: 58947.06982543637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61457.01110000346,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61454.36000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68198.02235515832,
            "unit": "ns/iter",
            "extra": "iterations: 12704\ncpu: 68194.64735516375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77504.60745164295,
            "unit": "ns/iter",
            "extra": "iterations: 11219\ncpu: 77500.77547018444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 565.0554922194166,
            "unit": "ns/iter",
            "extra": "iterations: 1236786\ncpu: 565.0385757924174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 481.9701897390347,
            "unit": "ns/iter",
            "extra": "iterations: 1458424\ncpu: 481.96203573172096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 468.93302205724,
            "unit": "ns/iter",
            "extra": "iterations: 1493208\ncpu: 468.9234185726298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 487.55938847186735,
            "unit": "ns/iter",
            "extra": "iterations: 1444447\ncpu: 487.5521912538154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 945.6725048142324,
            "unit": "ns/iter",
            "extra": "iterations: 743101\ncpu: 945.6437281069462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4365.460615279184,
            "unit": "ns/iter",
            "extra": "iterations: 186062\ncpu: 4365.245993271064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18694.080205750724,
            "unit": "ns/iter",
            "extra": "iterations: 43937\ncpu: 18692.15467601336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14946.03198333053,
            "unit": "ns/iter",
            "extra": "iterations: 55185\ncpu: 14945.28042040409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14840.299549913187,
            "unit": "ns/iter",
            "extra": "iterations: 55767\ncpu: 14839.227500134495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14895.974764203009,
            "unit": "ns/iter",
            "extra": "iterations: 55556\ncpu: 14894.832241342025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47571.09482514361,
            "unit": "ns/iter",
            "extra": "iterations: 17643\ncpu: 47566.309584537834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 451548.20860762475,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 451529.1645569614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362756.29665271414,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 362729.12133891165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363547.2261557864,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 363522.82382340636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368530.92501064384,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 368508.64933958254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227490.68441765444,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 227476.94123819485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366791.2529660991,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 366778.8983050836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1855227.8100000878,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1855074.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 739964.5581947664,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 739936.0253365001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2498152.7989131506,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2497781.249999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4069.3910952576443,
            "unit": "ns/iter",
            "extra": "iterations: 188394\ncpu: 4068.2712825249005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18396.760959194246,
            "unit": "ns/iter",
            "extra": "iterations: 44871\ncpu: 18396.394107552846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14817.73513610298,
            "unit": "ns/iter",
            "extra": "iterations: 55840\ncpu: 14817.816977077344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14799.506755909026,
            "unit": "ns/iter",
            "extra": "iterations: 55729\ncpu: 14798.844407758948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14846.199087103389,
            "unit": "ns/iter",
            "extra": "iterations: 55428\ncpu: 14846.112073320297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47291.7100073407,
            "unit": "ns/iter",
            "extra": "iterations: 17697\ncpu: 47291.12843984866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480415.3753322481,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 480385.1674641149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 379856.64947554725,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 379851.09265734354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 373707.1935902649,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 373686.0978778685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378117.43741882715,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 378119.1857947152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222095.4832657064,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 222088.46348884382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372526.65245475277,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 372508.9577950044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1857081.7877551755,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1857017.5510204013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 749699.8512861767,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 749664.4694533733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4328.130238312569,
            "unit": "ns/iter",
            "extra": "iterations: 185890\ncpu: 4328.031631610084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18508.523701981812,
            "unit": "ns/iter",
            "extra": "iterations: 44722\ncpu: 18507.39904297663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14810.515400558199,
            "unit": "ns/iter",
            "extra": "iterations: 55485\ncpu: 14810.27124448046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14914.179227792873,
            "unit": "ns/iter",
            "extra": "iterations: 55555\ncpu: 14913.276932769255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14829.936765608278,
            "unit": "ns/iter",
            "extra": "iterations: 55318\ncpu: 14829.610614989628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47112.56468918497,
            "unit": "ns/iter",
            "extra": "iterations: 17615\ncpu: 47110.50241271665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 446290.2376751608,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 446292.6310326919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 373974.64564564097,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 373963.6207636199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372686.7717344831,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 372669.1648822264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373633.8867761702,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 373626.83664650016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225676.391114545,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 225661.32511556192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372859.2614991824,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 372854.3867120954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.4684197125222,
            "unit": "ns/iter",
            "extra": "iterations: 2325058\ncpu: 298.44838279303144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1633.6922728177258,
            "unit": "ns/iter",
            "extra": "iterations: 427905\ncpu: 1633.6869164884731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1291.2363165120883,
            "unit": "ns/iter",
            "extra": "iterations: 543246\ncpu: 1291.1780298428314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1288.7988964154297,
            "unit": "ns/iter",
            "extra": "iterations: 542233\ncpu: 1288.7701412492327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1022.9754956791558,
            "unit": "ns/iter",
            "extra": "iterations: 684818\ncpu: 1022.9579245872577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7957.893490382765,
            "unit": "ns/iter",
            "extra": "iterations: 87701\ncpu: 7957.707437771502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18825.135920765777,
            "unit": "ns/iter",
            "extra": "iterations: 37257\ncpu: 18825.224789972333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4438.422838585965,
            "unit": "ns/iter",
            "extra": "iterations: 157663\ncpu: 4438.2841884272375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4447.356156637102,
            "unit": "ns/iter",
            "extra": "iterations: 157383\ncpu: 4447.2109440029035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4506.423814114911,
            "unit": "ns/iter",
            "extra": "iterations: 155580\ncpu: 4506.412135235893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8935.8317921498,
            "unit": "ns/iter",
            "extra": "iterations: 78403\ncpu: 8935.450174100522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8490.03742659171,
            "unit": "ns/iter",
            "extra": "iterations: 83096\ncpu: 8489.645710984805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3194.6089742712534,
            "unit": "ns/iter",
            "extra": "iterations: 219093\ncpu: 3194.5844915172747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15864.893571656363,
            "unit": "ns/iter",
            "extra": "iterations: 44086\ncpu: 15864.48759243306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12791.154333036297,
            "unit": "ns/iter",
            "extra": "iterations: 54823\ncpu: 12791.22813417739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12839.959831294742,
            "unit": "ns/iter",
            "extra": "iterations: 54296\ncpu: 12839.23493443338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13143.026266345949,
            "unit": "ns/iter",
            "extra": "iterations: 53224\ncpu: 13142.790846234866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28473.364582912203,
            "unit": "ns/iter",
            "extra": "iterations: 24587\ncpu: 28470.63488835556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99234.84883226933,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 99233.22009908006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85421.97266960026,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85422.5353831136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84740.80304864071,
            "unit": "ns/iter",
            "extra": "iterations: 8266\ncpu: 84736.77715944879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85252.7730958273,
            "unit": "ns/iter",
            "extra": "iterations: 8140\ncpu: 85252.1130221128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55131.149420756126,
            "unit": "ns/iter",
            "extra": "iterations: 12689\ncpu: 55127.90606036706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85378.79656891763,
            "unit": "ns/iter",
            "extra": "iterations: 8219\ncpu: 85376.72466236763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3104.5857274062446,
            "unit": "ns/iter",
            "extra": "iterations: 225383\ncpu: 3104.4590763278297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15177.215560529949,
            "unit": "ns/iter",
            "extra": "iterations: 46001\ncpu: 15176.913545357867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12124.165683238436,
            "unit": "ns/iter",
            "extra": "iterations: 57791\ncpu: 12124.104099254164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12074.361527989919,
            "unit": "ns/iter",
            "extra": "iterations: 58037\ncpu: 12073.747781587645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12551.248553044363,
            "unit": "ns/iter",
            "extra": "iterations: 55634\ncpu: 12551.2078944531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28358.432936649966,
            "unit": "ns/iter",
            "extra": "iterations: 25461\ncpu: 28357.216919995084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98096.35667457947,
            "unit": "ns/iter",
            "extra": "iterations: 7169\ncpu: 98094.12749337414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 86295.76778267515,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 86292.48183009507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82757.47172706664,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82755.51882894686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82977.67549275419,
            "unit": "ns/iter",
            "extra": "iterations: 8422\ncpu: 82978.04559487007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54979.6491269652,
            "unit": "ns/iter",
            "extra": "iterations: 12657\ncpu: 54977.07987674784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83665.52243125197,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 83665.06271104624 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}