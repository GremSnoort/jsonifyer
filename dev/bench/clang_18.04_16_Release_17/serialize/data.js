window.BENCHMARK_DATA = {
  "lastUpdate": 1705963484285,
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
        "date": 1705774906497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 731.3551642545062,
            "unit": "ns/iter",
            "extra": "iterations: 1023594\ncpu: 731.3629231902494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10665.774882300075,
            "unit": "ns/iter",
            "extra": "iterations: 78590\ncpu: 10665.718284769055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23818.055295729937,
            "unit": "ns/iter",
            "extra": "iterations: 35066\ncpu: 23818.03456339474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36602.04698972125,
            "unit": "ns/iter",
            "extra": "iterations: 22473\ncpu: 36601.70426734303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49127.319677514686,
            "unit": "ns/iter",
            "extra": "iterations: 16745\ncpu: 49126.98716034635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59267.41075043627,
            "unit": "ns/iter",
            "extra": "iterations: 14325\ncpu: 59266.10122164048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58712.7488999954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58711.48000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67258.03446149021,
            "unit": "ns/iter",
            "extra": "iterations: 12971\ncpu: 67256.8884434508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77034.20738368895,
            "unit": "ns/iter",
            "extra": "iterations: 10618\ncpu: 77033.2454322847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 559.5106534487345,
            "unit": "ns/iter",
            "extra": "iterations: 1235797\ncpu: 559.5000635217602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 473.9655856333609,
            "unit": "ns/iter",
            "extra": "iterations: 1473251\ncpu: 473.9580017254367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 466.40152326181317,
            "unit": "ns/iter",
            "extra": "iterations: 1502959\ncpu: 466.39223026043885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 480.0579439982186,
            "unit": "ns/iter",
            "extra": "iterations: 1459668\ncpu: 480.04244800872505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 950.8314611619033,
            "unit": "ns/iter",
            "extra": "iterations: 737201\ncpu: 950.7892691409816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4285.893113905133,
            "unit": "ns/iter",
            "extra": "iterations: 187639\ncpu: 4285.772680519506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18693.300898542184,
            "unit": "ns/iter",
            "extra": "iterations: 44294\ncpu: 18693.084842190805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14727.31935936455,
            "unit": "ns/iter",
            "extra": "iterations: 56319\ncpu: 14726.89855998862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14747.248405368047,
            "unit": "ns/iter",
            "extra": "iterations: 55969\ncpu: 14746.706212367542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14792.237815052331,
            "unit": "ns/iter",
            "extra": "iterations: 55745\ncpu: 14791.50417077768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47592.67400044669,
            "unit": "ns/iter",
            "extra": "iterations: 17908\ncpu: 47591.79137815496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 433721.13414635375,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 433712.75406504015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 363401.1730045896,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 363384.37108232465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364015.4882746867,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 364007.87269681727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368114.336159395,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 368103.68800339213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221418.05487180114,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 221406.89743589787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 356365.81696616014,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 356351.9013790213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1866781.256565749,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1866585.8585858606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 743943.0527558832,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 743919.4488188972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2514391.261580294,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2514242.779291552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4205.3039955308595,
            "unit": "ns/iter",
            "extra": "iterations: 187960\ncpu: 4205.172377101517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18478.275307452503,
            "unit": "ns/iter",
            "extra": "iterations: 44641\ncpu: 18477.829797719685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14748.277670777621,
            "unit": "ns/iter",
            "extra": "iterations: 55555\ncpu: 14747.54027540277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14748.28322345847,
            "unit": "ns/iter",
            "extra": "iterations: 55518\ncpu: 14748.155553153914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14786.215703742488,
            "unit": "ns/iter",
            "extra": "iterations: 55006\ncpu: 14786.023342907998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47380.55833905564,
            "unit": "ns/iter",
            "extra": "iterations: 17484\ncpu: 47379.42118508365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458028.3863275094,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 458007.79014308564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 378046.32613387384,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 378028.38012958714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377014.4185745076,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 377006.13390928746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376188.65591397363,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 376169.89247311803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221940.29931104198,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 221933.24827762184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 368391.7887746124,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 368383.7617823499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869131.6768917313,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1869051.7382413056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 734790.2559241687,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 734755.9241706135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4138.023317716569,
            "unit": "ns/iter",
            "extra": "iterations: 194230\ncpu: 4137.803120012358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18479.598171437185,
            "unit": "ns/iter",
            "extra": "iterations: 43969\ncpu: 18478.43708067055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14870.153633935415,
            "unit": "ns/iter",
            "extra": "iterations: 55821\ncpu: 14869.235592339726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14879.273332377878,
            "unit": "ns/iter",
            "extra": "iterations: 55888\ncpu: 14878.7074148296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14905.82795486536,
            "unit": "ns/iter",
            "extra": "iterations: 55654\ncpu: 14905.187407913201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46840.997809607885,
            "unit": "ns/iter",
            "extra": "iterations: 17805\ncpu: 46839.80904240389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 447982.035622115,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 447979.4527620047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370207.70171673095,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 370195.36480686814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372715.3351717952,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 372705.72761985497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372797.83447978715,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 372783.3190025802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225051.16036034643,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 225038.7902187898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368156.523368414,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 368140.8842105252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.0174784110938,
            "unit": "ns/iter",
            "extra": "iterations: 2363716\ncpu: 298.0201936273214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1663.2383294822553,
            "unit": "ns/iter",
            "extra": "iterations: 422839\ncpu: 1663.2195705694166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1231.7660068886105,
            "unit": "ns/iter",
            "extra": "iterations: 567615\ncpu: 1231.7114593518559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1240.1347659816356,
            "unit": "ns/iter",
            "extra": "iterations: 564037\ncpu: 1240.0913415254672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1043.4622610423698,
            "unit": "ns/iter",
            "extra": "iterations: 670673\ncpu: 1043.4353254119358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8124.001447144311,
            "unit": "ns/iter",
            "extra": "iterations: 86377\ncpu: 8123.758639452553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18491.45297173915,
            "unit": "ns/iter",
            "extra": "iterations: 39455\ncpu: 18491.334431631072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4426.389749865348,
            "unit": "ns/iter",
            "extra": "iterations: 160154\ncpu: 4426.210397492429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4457.279018594814,
            "unit": "ns/iter",
            "extra": "iterations: 157244\ncpu: 4457.104245631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4500.646573689821,
            "unit": "ns/iter",
            "extra": "iterations: 155809\ncpu: 4500.401132155347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8855.775435761485,
            "unit": "ns/iter",
            "extra": "iterations: 79229\ncpu: 8855.361042042703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8385.634928820564,
            "unit": "ns/iter",
            "extra": "iterations: 83381\ncpu: 8385.23644475363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3197.694491078486,
            "unit": "ns/iter",
            "extra": "iterations: 218010\ncpu: 3197.593229668359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16003.07067720947,
            "unit": "ns/iter",
            "extra": "iterations: 43635\ncpu: 16002.603414689887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12761.798302573363,
            "unit": "ns/iter",
            "extra": "iterations: 54671\ncpu: 12761.76949388165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12846.614100254015,
            "unit": "ns/iter",
            "extra": "iterations: 54382\ncpu: 12846.487808466032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13148.443785534242,
            "unit": "ns/iter",
            "extra": "iterations: 53118\ncpu: 13147.477314657772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28785.23811284767,
            "unit": "ns/iter",
            "extra": "iterations: 24333\ncpu: 28784.292935519592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99135.80566517034,
            "unit": "ns/iter",
            "extra": "iterations: 7096\ncpu: 99132.14487034935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86545.45125107745,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 86540.89732528005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86085.69319577214,
            "unit": "ns/iter",
            "extra": "iterations: 8142\ncpu: 86078.40825349953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86167.80679851749,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 86163.79480840583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56032.749438020466,
            "unit": "ns/iter",
            "extra": "iterations: 12456\ncpu: 56032.44219653267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85132.8894967151,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 85130.31850230992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3203.751702709157,
            "unit": "ns/iter",
            "extra": "iterations: 216273\ncpu: 3203.6703610714767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15354.44510164587,
            "unit": "ns/iter",
            "extra": "iterations: 45648\ncpu: 15354.232386961117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12358.010485689567,
            "unit": "ns/iter",
            "extra": "iterations: 56744\ncpu: 12357.625475821196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12242.812586216449,
            "unit": "ns/iter",
            "extra": "iterations: 57269\ncpu: 12242.667062459639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12589.447727068324,
            "unit": "ns/iter",
            "extra": "iterations: 55545\ncpu: 12589.097128454361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27844.035565436487,
            "unit": "ns/iter",
            "extra": "iterations: 25193\ncpu: 27843.75421744115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98354.32466618509,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98352.32607168086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84256.02880807465,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 84254.37522506253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83513.64904760722,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83511.75000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83825.98887292916,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83823.09164872009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55852.49126724519,
            "unit": "ns/iter",
            "extra": "iterations: 12539\ncpu: 55852.00574208546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83650.76846709404,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 83645.89292045964 ns\nthreads: 1"
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
        "date": 1705778471367,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 695.5994017299137,
            "unit": "ns/iter",
            "extra": "iterations: 1001220\ncpu: 695.5812908251933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10965.75385126535,
            "unit": "ns/iter",
            "extra": "iterations: 75235\ncpu: 10965.0920449259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23960.92725196284,
            "unit": "ns/iter",
            "extra": "iterations: 35025\ncpu: 23960.476802284084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39533.435029249835,
            "unit": "ns/iter",
            "extra": "iterations: 22564\ncpu: 39532.16185073569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48774.63701621043,
            "unit": "ns/iter",
            "extra": "iterations: 16717\ncpu: 48770.7004845367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59018.19975056413,
            "unit": "ns/iter",
            "extra": "iterations: 14433\ncpu: 59014.619275271965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58883.442699993786,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58877.13999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67862.74732316843,
            "unit": "ns/iter",
            "extra": "iterations: 12795\ncpu: 67857.65533411497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77803.66893865484,
            "unit": "ns/iter",
            "extra": "iterations: 11297\ncpu: 77801.54023191995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 563.6086871259437,
            "unit": "ns/iter",
            "extra": "iterations: 1244232\ncpu: 563.6005182313276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 479.74669610030736,
            "unit": "ns/iter",
            "extra": "iterations: 1456385\ncpu: 479.7298791185025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 469.4649987496814,
            "unit": "ns/iter",
            "extra": "iterations: 1491561\ncpu: 469.4603170772087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 486.0868627282572,
            "unit": "ns/iter",
            "extra": "iterations: 1443968\ncpu: 486.0880573530717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 937.8787168495401,
            "unit": "ns/iter",
            "extra": "iterations: 747878\ncpu: 937.8560406911294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4349.567060723978,
            "unit": "ns/iter",
            "extra": "iterations: 185675\ncpu: 4349.483775414033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17791.476974680263,
            "unit": "ns/iter",
            "extra": "iterations: 46210\ncpu: 17791.31573252542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14192.663225122396,
            "unit": "ns/iter",
            "extra": "iterations: 58404\ncpu: 14192.580987603575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14924.527929032149,
            "unit": "ns/iter",
            "extra": "iterations: 55462\ncpu: 14924.117413724676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14588.525235063804,
            "unit": "ns/iter",
            "extra": "iterations: 56687\ncpu: 14588.014888775244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47381.68675518847,
            "unit": "ns/iter",
            "extra": "iterations: 17622\ncpu: 47380.62081489051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 440431.7624618952,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 440439.4710071213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361592.1783333439,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 361578.33333333366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359920.6670828026,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 359916.437786101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 366479.7460050571,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 366470.47939444927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221741.88395817525,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 221738.17903596032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 359563.4551495146,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 359558.9285714284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1841349.241448703,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1841212.8772635825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 741392.6034892977,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 741323.2355273594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2563002.878116518,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2562833.5180055387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4278.915154068957,
            "unit": "ns/iter",
            "extra": "iterations: 185112\ncpu: 4278.652383421905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18327.37941143602,
            "unit": "ns/iter",
            "extra": "iterations: 45025\ncpu: 18325.992226540904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14755.32712437529,
            "unit": "ns/iter",
            "extra": "iterations: 55887\ncpu: 14754.570830425673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14768.811376120519,
            "unit": "ns/iter",
            "extra": "iterations: 55889\ncpu: 14767.741416021054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14799.744430516,
            "unit": "ns/iter",
            "extra": "iterations: 55840\ncpu: 14799.197707736375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47382.99043414396,
            "unit": "ns/iter",
            "extra": "iterations: 17667\ncpu: 47379.78717382691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 453286.8729486033,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 453264.5314981458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376860.52492411924,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 376833.7667967046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372513.8978978882,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 372508.62290862185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376403.4854663752,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 376385.2928416485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 219892.7145007634,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 219878.2990466632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 365049.4487344437,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 365038.09523809416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1909235.2357722668,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1908115.040650405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 730741.3639937288,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 730702.2798742128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4319.041375036566,
            "unit": "ns/iter",
            "extra": "iterations: 185595\ncpu: 4318.819472507341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18540.436833178137,
            "unit": "ns/iter",
            "extra": "iterations: 44802\ncpu: 18539.806258649187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14856.33409225406,
            "unit": "ns/iter",
            "extra": "iterations: 55781\ncpu: 14855.658736845835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14797.811645614625,
            "unit": "ns/iter",
            "extra": "iterations: 55815\ncpu: 14797.357341216577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14844.621143946875,
            "unit": "ns/iter",
            "extra": "iterations: 55562\ncpu: 14844.030092509302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47770.166950112056,
            "unit": "ns/iter",
            "extra": "iterations: 17640\ncpu: 47769.13832199543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441069.361025618,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 441059.3846153851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 364800.1370212559,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 364793.44680851087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368552.4629156095,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 368525.0639386168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369595.3865187718,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 369561.6894197934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221619.14361568488,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 221610.4677623256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364811.8767752981,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 364809.9415204664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.80627676434074,
            "unit": "ns/iter",
            "extra": "iterations: 2361121\ncpu: 295.7970811322244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1658.6492122769582,
            "unit": "ns/iter",
            "extra": "iterations: 437273\ncpu: 1658.6379675854635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1286.9716882448852,
            "unit": "ns/iter",
            "extra": "iterations: 552562\ncpu: 1286.9446324575435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1295.9571931174153,
            "unit": "ns/iter",
            "extra": "iterations: 540614\ncpu: 1295.9370271580092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1035.7134059868065,
            "unit": "ns/iter",
            "extra": "iterations: 677645\ncpu: 1035.7040928509673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8082.263415984586,
            "unit": "ns/iter",
            "extra": "iterations: 86669\ncpu: 8082.087020734179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18853.90950945025,
            "unit": "ns/iter",
            "extra": "iterations: 37142\ncpu: 18853.766625383447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4444.153788566535,
            "unit": "ns/iter",
            "extra": "iterations: 157619\ncpu: 4443.8487745766615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4463.0296759829425,
            "unit": "ns/iter",
            "extra": "iterations: 156288\ncpu: 4462.894783988562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4485.899470797846,
            "unit": "ns/iter",
            "extra": "iterations: 156084\ncpu: 4485.909510263672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9326.819010538577,
            "unit": "ns/iter",
            "extra": "iterations: 75253\ncpu: 9326.616879061276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8442.615601913201,
            "unit": "ns/iter",
            "extra": "iterations: 82836\ncpu: 8442.38736781113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3571.027801347568,
            "unit": "ns/iter",
            "extra": "iterations: 195638\ncpu: 3570.9882538157353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17660.18497284928,
            "unit": "ns/iter",
            "extra": "iterations: 39595\ncpu: 17659.79290314409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14133.269359387014,
            "unit": "ns/iter",
            "extra": "iterations: 49640\ncpu: 14133.309830781609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14136.801817850543,
            "unit": "ns/iter",
            "extra": "iterations: 49399\ncpu: 14136.227453997182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14392.902314689058,
            "unit": "ns/iter",
            "extra": "iterations: 48257\ncpu: 14392.93573989269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30169.69446478692,
            "unit": "ns/iter",
            "extra": "iterations: 23215\ncpu: 30169.058798191334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101816.08962812311,
            "unit": "ns/iter",
            "extra": "iterations: 6884\ncpu: 101814.36664729739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87500.26673338003,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 87497.48529963716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87190.64125560729,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 87188.64830236978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87165.17835497716,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 87165.61533704416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 57494.19825726054,
            "unit": "ns/iter",
            "extra": "iterations: 12050\ncpu: 57492.572614107834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86290.1366888774,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 86285.9733530724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3399.3192389420747,
            "unit": "ns/iter",
            "extra": "iterations: 205661\ncpu: 3399.251194927552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17246.54167904954,
            "unit": "ns/iter",
            "extra": "iterations: 40380\ncpu: 17246.381872213828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13731.064671341115,
            "unit": "ns/iter",
            "extra": "iterations: 50919\ncpu: 13730.909876470443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13717.45593243463,
            "unit": "ns/iter",
            "extra": "iterations: 51387\ncpu: 13717.167766166558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14055.365259478012,
            "unit": "ns/iter",
            "extra": "iterations: 49792\ncpu: 14055.410507712193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29406.38342467549,
            "unit": "ns/iter",
            "extra": "iterations: 23903\ncpu: 29405.589256578678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100615.96542401197,
            "unit": "ns/iter",
            "extra": "iterations: 7028\ncpu: 100614.91178144472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85820.09654052432,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 85819.04583489489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84844.75694023198,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 84843.59316280631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85366.92122911918,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 85365.17497866083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57315.95334152945,
            "unit": "ns/iter",
            "extra": "iterations: 12195\ncpu: 57314.66174661646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85703.06026296852,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 85703.27489651929 ns\nthreads: 1"
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
        "date": 1705953637260,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 683.7516877406418,
            "unit": "ns/iter",
            "extra": "iterations: 1026224\ncpu: 683.7599783283182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10685.952456866846,
            "unit": "ns/iter",
            "extra": "iterations: 77782\ncpu: 10686.080327067957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23846.617955928843,
            "unit": "ns/iter",
            "extra": "iterations: 34852\ncpu: 23846.76058762769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37320.72607275178,
            "unit": "ns/iter",
            "extra": "iterations: 22349\ncpu: 37320.604948767286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47257.0572226096,
            "unit": "ns/iter",
            "extra": "iterations: 17196\ncpu: 47256.62944870899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58740.87558621294,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 58739.8275862069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58658.62160000006,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58657.32999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68527.66809252021,
            "unit": "ns/iter",
            "extra": "iterations: 12624\ncpu: 68525.3485424589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78400.11534325562,
            "unit": "ns/iter",
            "extra": "iterations: 11158\ncpu: 78396.46890123676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 564.361362283554,
            "unit": "ns/iter",
            "extra": "iterations: 1236424\ncpu: 564.3335943009832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 477.4390782046035,
            "unit": "ns/iter",
            "extra": "iterations: 1460758\ncpu: 477.4258980611428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 466.05272092989117,
            "unit": "ns/iter",
            "extra": "iterations: 1502060\ncpu: 466.03830739118246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 481.6896444135057,
            "unit": "ns/iter",
            "extra": "iterations: 1451883\ncpu: 481.68495670794385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 938.295126831622,
            "unit": "ns/iter",
            "extra": "iterations: 746147\ncpu: 938.26672224106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4334.012142102003,
            "unit": "ns/iter",
            "extra": "iterations: 185388\ncpu: 4334.005437245134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18674.177850753465,
            "unit": "ns/iter",
            "extra": "iterations: 44155\ncpu: 18673.814969992094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15013.416889664682,
            "unit": "ns/iter",
            "extra": "iterations: 54933\ncpu: 15013.389037554796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14842.444835362674,
            "unit": "ns/iter",
            "extra": "iterations: 55425\ncpu: 14842.002706359921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14593.505990553156,
            "unit": "ns/iter",
            "extra": "iterations: 55671\ncpu: 14593.31608916669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47560.92974359381,
            "unit": "ns/iter",
            "extra": "iterations: 17550\ncpu: 47557.92022792023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 443890.4091370583,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 443871.4720812175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 357248.5342126897,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 357253.50370981125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359201.14009064465,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 359196.66254635266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365377.58246343746,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 365375.03131524124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220788.0780659656,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 220783.30395366423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 361463.2419824874,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 361462.6405664305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1858015.8076152923,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1857890.3807615233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 747717.3455999945,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 747697.1200000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2504366.9513513274,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2503999.459459457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4194.587035146805,
            "unit": "ns/iter",
            "extra": "iterations: 191055\ncpu: 4194.425688937748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18581.670230263397,
            "unit": "ns/iter",
            "extra": "iterations: 43776\ncpu: 18580.980445906407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15004.003769074408,
            "unit": "ns/iter",
            "extra": "iterations: 54390\ncpu: 15003.296561868061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14842.630406914202,
            "unit": "ns/iter",
            "extra": "iterations: 54606\ncpu: 14842.032011134366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14928.509375057005,
            "unit": "ns/iter",
            "extra": "iterations: 54453\ncpu: 14928.018658292525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46540.65433623009,
            "unit": "ns/iter",
            "extra": "iterations: 17815\ncpu: 46538.355318551774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 452088.888188973,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 452078.7401574802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376122.05584643094,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 376127.53054101195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 373933.8225944632,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 373927.6632302402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 376450.8871176016,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 376447.91038345685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223093.2269594249,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 223096.29818738753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373195.24484538194,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 373190.9793814411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1868741.8827160236,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1868652.263374479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739425.944888122,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 739387.9392971268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4319.802192961042,
            "unit": "ns/iter",
            "extra": "iterations: 188421\ncpu: 4319.82422341457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18739.731738716146,
            "unit": "ns/iter",
            "extra": "iterations: 44274\ncpu: 18738.943849663432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15013.963584921836,
            "unit": "ns/iter",
            "extra": "iterations: 54785\ncpu: 15013.527425390188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14888.602280941554,
            "unit": "ns/iter",
            "extra": "iterations: 55328\ncpu: 14860.309427414672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14790.272524966465,
            "unit": "ns/iter",
            "extra": "iterations: 55272\ncpu: 14790.476190476196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47148.869775831205,
            "unit": "ns/iter",
            "extra": "iterations: 17754\ncpu: 47145.64041906067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 445561.80072654114,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 445540.5293201868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370271.7529107246,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 370260.5433376444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 374097.1043814242,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 374085.1804123711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373478.7452586374,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 373472.71551724157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225988.09163246426,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 225973.10061601596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368191.1529866783,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 368182.46669531637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.3763251599023,
            "unit": "ns/iter",
            "extra": "iterations: 2370846\ncpu: 295.35807049466763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1599.060579035039,
            "unit": "ns/iter",
            "extra": "iterations: 438419\ncpu: 1598.9683385072244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1243.5161159320498,
            "unit": "ns/iter",
            "extra": "iterations: 561432\ncpu: 1243.4859430883942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1171.1252455238468,
            "unit": "ns/iter",
            "extra": "iterations: 598720\ncpu: 1171.1431052912917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1023.2041414459464,
            "unit": "ns/iter",
            "extra": "iterations: 684785\ncpu: 1023.1763254159958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8109.627447802333,
            "unit": "ns/iter",
            "extra": "iterations: 86353\ncpu: 8108.95857700373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18927.681985790892,
            "unit": "ns/iter",
            "extra": "iterations: 36882\ncpu: 18927.067404153797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4469.9505620703485,
            "unit": "ns/iter",
            "extra": "iterations: 156742\ncpu: 4469.806433502176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4464.633937344453,
            "unit": "ns/iter",
            "extra": "iterations: 156730\ncpu: 4464.41013207429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4512.87866569918,
            "unit": "ns/iter",
            "extra": "iterations: 154268\ncpu: 4512.865273420298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8747.775922452043,
            "unit": "ns/iter",
            "extra": "iterations: 79950\ncpu: 8747.54971857399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8326.90810765844,
            "unit": "ns/iter",
            "extra": "iterations: 84044\ncpu: 8326.871638665314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3206.6162820095683,
            "unit": "ns/iter",
            "extra": "iterations: 217553\ncpu: 3206.582304082283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15757.330526696209,
            "unit": "ns/iter",
            "extra": "iterations: 44181\ncpu: 15757.20558611181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12597.70383375825,
            "unit": "ns/iter",
            "extra": "iterations: 55533\ncpu: 12597.70046638935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12563.941668607467,
            "unit": "ns/iter",
            "extra": "iterations: 55819\ncpu: 12563.965674770447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12962.63535512359,
            "unit": "ns/iter",
            "extra": "iterations: 53995\ncpu: 12962.811371423324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28416.765382894297,
            "unit": "ns/iter",
            "extra": "iterations: 24589\ncpu: 28415.57200374168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100007.40616563811,
            "unit": "ns/iter",
            "extra": "iterations: 7039\ncpu: 100006.6486716859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86007.79781220031,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 86006.44051130656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85021.05765504175,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 85021.17248062059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85280.72270848164,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 85279.04206175565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54292.87892168403,
            "unit": "ns/iter",
            "extra": "iterations: 12909\ncpu: 54290.618948020754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84809.42746801236,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84808.17040791674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3024.434501090296,
            "unit": "ns/iter",
            "extra": "iterations: 232126\ncpu: 3024.370385049478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15200.103248233878,
            "unit": "ns/iter",
            "extra": "iterations: 46025\ncpu: 15200.299837044828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12077.259832577487,
            "unit": "ns/iter",
            "extra": "iterations: 57818\ncpu: 12077.090179528914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12052.476127207241,
            "unit": "ns/iter",
            "extra": "iterations: 57953\ncpu: 12052.221627870806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12300.949396819979,
            "unit": "ns/iter",
            "extra": "iterations: 56202\ncpu: 12300.459058396607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27485.042240803356,
            "unit": "ns/iter",
            "extra": "iterations: 25473\ncpu: 27483.41773642663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97155.26787694289,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 97155.5293791577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83310.99023809515,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83310.34523809508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81720.79103432733,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 81716.05183282748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82696.8623429025,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 82693.9767607301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54585.12893646861,
            "unit": "ns/iter",
            "extra": "iterations: 12797\ncpu: 54580.44854262689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82787.13702007622,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 82786.87331219856 ns\nthreads: 1"
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
        "date": 1705955062701,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 736.9808952373426,
            "unit": "ns/iter",
            "extra": "iterations: 946989\ncpu: 736.9892364114052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12374.806376918023,
            "unit": "ns/iter",
            "extra": "iterations: 71257\ncpu: 12374.657928343882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24503.757360673746,
            "unit": "ns/iter",
            "extra": "iterations: 34236\ncpu: 24503.627760252373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38200.952821164006,
            "unit": "ns/iter",
            "extra": "iterations: 21959\ncpu: 38199.10287353705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48799.850677077775,
            "unit": "ns/iter",
            "extra": "iterations: 16394\ncpu: 48799.3229230206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59187.9936532318,
            "unit": "ns/iter",
            "extra": "iterations: 14338\ncpu: 59187.85046728972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59253.53979999955,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59250.83999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68384.10201511324,
            "unit": "ns/iter",
            "extra": "iterations: 12704\ncpu: 68381.84823677583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78067.28317152639,
            "unit": "ns/iter",
            "extra": "iterations: 11124\ncpu: 78066.81049982016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 567.4958437877933,
            "unit": "ns/iter",
            "extra": "iterations: 1232733\ncpu: 567.4812794011359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 480.9258218532488,
            "unit": "ns/iter",
            "extra": "iterations: 1446639\ncpu: 480.8881828846028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 464.87109742849816,
            "unit": "ns/iter",
            "extra": "iterations: 1506859\ncpu: 464.8222560969542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 475.4125193155946,
            "unit": "ns/iter",
            "extra": "iterations: 1470959\ncpu: 475.3955072847034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 958.0455205147235,
            "unit": "ns/iter",
            "extra": "iterations: 715897\ncpu: 957.9992652574315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4350.1642684745,
            "unit": "ns/iter",
            "extra": "iterations: 184375\ncpu: 4349.934101694919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18550.50266857325,
            "unit": "ns/iter",
            "extra": "iterations: 44031\ncpu: 18549.867139061105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14953.040873031141,
            "unit": "ns/iter",
            "extra": "iterations: 54706\ncpu: 14952.383650787871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14327.78991055249,
            "unit": "ns/iter",
            "extra": "iterations: 54334\ncpu: 14327.043839952843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14502.24928092242,
            "unit": "ns/iter",
            "extra": "iterations: 56322\ncpu: 14501.76662760559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46969.58645589917,
            "unit": "ns/iter",
            "extra": "iterations: 17587\ncpu: 46969.16472394377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 439610.8719112356,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 439583.6106908731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362437.85158863023,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 362422.4498327759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 364613.1716541866,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 364583.1670822945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371087.87947749253,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 371079.7302991992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221888.34576981008,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 221881.08250131394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 368446.15549938846,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 368433.1226295836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1854701.837728231,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1854673.4279918924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733644.1924882616,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 733612.9890453828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2485755.8636364792,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2485602.406417117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4291.056825757088,
            "unit": "ns/iter",
            "extra": "iterations: 182998\ncpu: 4290.790063279373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18682.496388676704,
            "unit": "ns/iter",
            "extra": "iterations: 44582\ncpu: 18681.96581580017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14781.170411817333,
            "unit": "ns/iter",
            "extra": "iterations: 55583\ncpu: 14780.225968371655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14801.406064806783,
            "unit": "ns/iter",
            "extra": "iterations: 54841\ncpu: 14800.767673820681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14833.948922219342,
            "unit": "ns/iter",
            "extra": "iterations: 54603\ncpu: 14833.227112063374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47675.951929623974,
            "unit": "ns/iter",
            "extra": "iterations: 17620\ncpu: 47674.097616344836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 456280.5026232961,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 456254.03987408185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 375814.5850281326,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 375807.1830376456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375253.4288171881,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 375241.8924731194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380888.71571614407,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 380863.82237701584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220454.08202532746,
            "unit": "ns/iter",
            "extra": "iterations: 3950\ncpu: 220443.54430379643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373499.19367249333,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 373472.7233860614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1882005.792607849,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1881813.7577002146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 729822.7101562027,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 729775.0781250001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4198.344464636991,
            "unit": "ns/iter",
            "extra": "iterations: 190394\ncpu: 4198.235238505425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18395.782553532506,
            "unit": "ns/iter",
            "extra": "iterations: 44926\ncpu: 18395.143124248792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14838.006456227327,
            "unit": "ns/iter",
            "extra": "iterations: 55915\ncpu: 14837.383528570153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14861.483787007832,
            "unit": "ns/iter",
            "extra": "iterations: 55326\ncpu: 14860.499584282288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14861.021656508612,
            "unit": "ns/iter",
            "extra": "iterations: 55780\ncpu: 14860.268913589121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47092.496598257436,
            "unit": "ns/iter",
            "extra": "iterations: 17785\ncpu: 47092.56676974968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 437842.594349186,
            "unit": "ns/iter",
            "extra": "iterations: 1982\ncpu: 437824.5711402632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369784.99418601446,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 369764.8671096338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373030.9161727504,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 373013.12447078683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369212.7843977712,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 369198.8855550776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221052.93219909226,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 221051.65058405334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 362672.7547568559,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 362651.28964058997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.12583969188074,
            "unit": "ns/iter",
            "extra": "iterations: 2370810\ncpu: 295.1179554666981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1625.6327263537487,
            "unit": "ns/iter",
            "extra": "iterations: 431316\ncpu: 1625.6009515065684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1282.7790642796917,
            "unit": "ns/iter",
            "extra": "iterations: 540311\ncpu: 1282.7510452313531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1216.854785604607,
            "unit": "ns/iter",
            "extra": "iterations: 575852\ncpu: 1216.793377465043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1013.5648385503001,
            "unit": "ns/iter",
            "extra": "iterations: 682287\ncpu: 1013.5165993196497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8083.378987525908,
            "unit": "ns/iter",
            "extra": "iterations: 85454\ncpu: 8083.144147728586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18099.894966894255,
            "unit": "ns/iter",
            "extra": "iterations: 38664\ncpu: 18098.47661907715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4452.303319702063,
            "unit": "ns/iter",
            "extra": "iterations: 157484\ncpu: 4452.017347794057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4435.48132251605,
            "unit": "ns/iter",
            "extra": "iterations: 157034\ncpu: 4435.229313397104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4456.731046516255,
            "unit": "ns/iter",
            "extra": "iterations: 156462\ncpu: 4456.790786261203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9257.899471670293,
            "unit": "ns/iter",
            "extra": "iterations: 75521\ncpu: 9257.369473391565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8369.149090604205,
            "unit": "ns/iter",
            "extra": "iterations: 83627\ncpu: 8368.512561732516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3212.5666659011513,
            "unit": "ns/iter",
            "extra": "iterations: 217735\ncpu: 3212.302569637439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15991.068187514978,
            "unit": "ns/iter",
            "extra": "iterations: 43879\ncpu: 15990.45329200741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12764.955151715576,
            "unit": "ns/iter",
            "extra": "iterations: 54807\ncpu: 12763.929789990294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12762.769185834808,
            "unit": "ns/iter",
            "extra": "iterations: 54780\ncpu: 12762.635998539792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13038.826333389841,
            "unit": "ns/iter",
            "extra": "iterations: 52929\ncpu: 13038.385384193849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29219.109775544817,
            "unit": "ns/iter",
            "extra": "iterations: 24459\ncpu: 29218.721125148626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98113.83105660045,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 98109.98048508659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84352.42273384912,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 84343.73191899767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83338.36835171047,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 83333.04983229397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83149.87286730598,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 83147.98578199038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53701.41183366852,
            "unit": "ns/iter",
            "extra": "iterations: 12794\ncpu: 53702.157261216875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83406.58923713298,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 83406.25665286773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3052.5919869638838,
            "unit": "ns/iter",
            "extra": "iterations: 228902\ncpu: 3052.52597181325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15295.24976566783,
            "unit": "ns/iter",
            "extra": "iterations: 45875\ncpu: 15294.565667574732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12147.644927661368,
            "unit": "ns/iter",
            "extra": "iterations: 57577\ncpu: 12147.301874012212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12399.90858014892,
            "unit": "ns/iter",
            "extra": "iterations: 57668\ncpu: 12399.91329680252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12506.984696418314,
            "unit": "ns/iter",
            "extra": "iterations: 52210\ncpu: 12506.468109557349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27654.84774510361,
            "unit": "ns/iter",
            "extra": "iterations: 25234\ncpu: 27654.505825473487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96034.84288658977,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 96031.75257731846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82630.68109259367,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 82626.51058294853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81701.56336056454,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81697.85297549599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82470.46665104,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 82465.53745164689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54359.84790100372,
            "unit": "ns/iter",
            "extra": "iterations: 12768\ncpu: 54359.453320801185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82368.83307882266,
            "unit": "ns/iter",
            "extra": "iterations: 8513\ncpu: 82369.15306002597 ns\nthreads: 1"
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
        "date": 1705956933666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 683.7812424781251,
            "unit": "ns/iter",
            "extra": "iterations: 1013716\ncpu: 683.7808617009105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10812.337537290838,
            "unit": "ns/iter",
            "extra": "iterations: 78101\ncpu: 10812.127885686483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24117.775126831584,
            "unit": "ns/iter",
            "extra": "iterations: 34495\ncpu: 24116.556022611974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38552.870199761666,
            "unit": "ns/iter",
            "extra": "iterations: 21926\ncpu: 38552.78664599108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47265.511252702636,
            "unit": "ns/iter",
            "extra": "iterations: 17107\ncpu: 47265.25983515517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58383.63475495351,
            "unit": "ns/iter",
            "extra": "iterations: 14467\ncpu: 58381.38522153872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58896.9092999946,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58894.41 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68185.23705679194,
            "unit": "ns/iter",
            "extra": "iterations: 12748\ncpu: 68182.63256981492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78127.80035826414,
            "unit": "ns/iter",
            "extra": "iterations: 11165\ncpu: 78124.47828034037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 574.5980780444621,
            "unit": "ns/iter",
            "extra": "iterations: 1219279\ncpu: 574.5998249785329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 467.14627322301976,
            "unit": "ns/iter",
            "extra": "iterations: 1510085\ncpu: 467.1100633408053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 462.65245418100636,
            "unit": "ns/iter",
            "extra": "iterations: 1517492\ncpu: 462.61080783292545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 471.9688082170732,
            "unit": "ns/iter",
            "extra": "iterations: 1471862\ncpu: 471.95416418115263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 966.0207006348328,
            "unit": "ns/iter",
            "extra": "iterations: 761281\ncpu: 964.5674855933618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4179.248426432012,
            "unit": "ns/iter",
            "extra": "iterations: 197640\ncpu: 4179.158571139452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18503.38803656925,
            "unit": "ns/iter",
            "extra": "iterations: 44519\ncpu: 18502.762865293447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14808.525232973558,
            "unit": "ns/iter",
            "extra": "iterations: 55800\ncpu: 14808.596774193531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14791.989786959666,
            "unit": "ns/iter",
            "extra": "iterations: 55811\ncpu: 14791.51063410438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14818.817598732037,
            "unit": "ns/iter",
            "extra": "iterations: 55504\ncpu: 14818.1590515999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47109.85731988903,
            "unit": "ns/iter",
            "extra": "iterations: 17753\ncpu: 47108.19579789336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 444430.32772681286,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 444416.7176350663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362707.2623700567,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 362707.69230769266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362842.14665558917,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 362840.1744910682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 367020.68358714966,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 367028.59560067795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219633.44472552833,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 219630.88793321478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 364281.6761506666,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 364284.0585774056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1856293.8450414992,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1856038.8429752043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 728374.075252086,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 728372.8471683501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2509071.057377142,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2509006.010928963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4223.905723548919,
            "unit": "ns/iter",
            "extra": "iterations: 188467\ncpu: 4223.822207601329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18747.197743320678,
            "unit": "ns/iter",
            "extra": "iterations: 44047\ncpu: 18747.3380706972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15004.646285774716,
            "unit": "ns/iter",
            "extra": "iterations: 55624\ncpu: 15004.658061268474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14869.749865306483,
            "unit": "ns/iter",
            "extra": "iterations: 55682\ncpu: 14869.93462878491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14945.611339167679,
            "unit": "ns/iter",
            "extra": "iterations: 55542\ncpu: 14945.669943466286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47731.90820820062,
            "unit": "ns/iter",
            "extra": "iterations: 17714\ncpu: 47732.92875691534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458239.55183415045,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 458238.38383838045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 377802.568585063,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 377806.10125486925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372283.82256675774,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 372281.9552110253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374597.32003434194,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 374598.7129987145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221226.75251256482,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 221229.6482412075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374585.9883920709,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 374587.833190024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1863621.485655852,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1863659.6311475425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 738918.508366522,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 738890.517928286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4154.176823242976,
            "unit": "ns/iter",
            "extra": "iterations: 195325\ncpu: 4154.228081402802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18285.4673425916,
            "unit": "ns/iter",
            "extra": "iterations: 45074\ncpu: 18285.483870967662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14720.74715461736,
            "unit": "ns/iter",
            "extra": "iterations: 55880\ncpu: 14720.884037222635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14689.11031265043,
            "unit": "ns/iter",
            "extra": "iterations: 55941\ncpu: 14688.815001519393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14752.71890345962,
            "unit": "ns/iter",
            "extra": "iterations: 55593\ncpu: 14753.05164319258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47614.63058770045,
            "unit": "ns/iter",
            "extra": "iterations: 17628\ncpu: 47614.7152257772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 443948.03840168513,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 443944.4732745187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370274.304753826,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 370278.9898132413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369331.6219667986,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 369330.26819923485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372254.63827052654,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 372258.39041096054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 220535.91854506772,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 220530.5071721296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 377179.1856236711,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 377182.87526427093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.29629174682697,
            "unit": "ns/iter",
            "extra": "iterations: 2344608\ncpu: 297.29929267493793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1649.731416796196,
            "unit": "ns/iter",
            "extra": "iterations: 424133\ncpu: 1649.7110576163761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1217.058669901096,
            "unit": "ns/iter",
            "extra": "iterations: 575491\ncpu: 1217.0386678505797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1287.7844816178172,
            "unit": "ns/iter",
            "extra": "iterations: 544116\ncpu: 1287.7950657580363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1020.2263247838972,
            "unit": "ns/iter",
            "extra": "iterations: 681715\ncpu: 1020.2175395876517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8039.799702788661,
            "unit": "ns/iter",
            "extra": "iterations: 87480\ncpu: 8039.9782807499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18535.823425324998,
            "unit": "ns/iter",
            "extra": "iterations: 37865\ncpu: 18535.77710286561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4480.870876657483,
            "unit": "ns/iter",
            "extra": "iterations: 157245\ncpu: 4480.925307640941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4440.31388097664,
            "unit": "ns/iter",
            "extra": "iterations: 157633\ncpu: 4440.298668426017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4525.425072306834,
            "unit": "ns/iter",
            "extra": "iterations: 154896\ncpu: 4525.47515752509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9430.196608529059,
            "unit": "ns/iter",
            "extra": "iterations: 74422\ncpu: 9430.106688882222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8475.093938696298,
            "unit": "ns/iter",
            "extra": "iterations: 82639\ncpu: 8475.090453659883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3214.2212877174975,
            "unit": "ns/iter",
            "extra": "iterations: 217703\ncpu: 3214.156901834182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15940.815763300878,
            "unit": "ns/iter",
            "extra": "iterations: 44242\ncpu: 15941.169024908218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12674.796162811406,
            "unit": "ns/iter",
            "extra": "iterations: 55353\ncpu: 12674.752949253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12677.549222046093,
            "unit": "ns/iter",
            "extra": "iterations: 55209\ncpu: 12677.625024905254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12943.032702652825,
            "unit": "ns/iter",
            "extra": "iterations: 53910\ncpu: 12942.468929697583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28546.30726665939,
            "unit": "ns/iter",
            "extra": "iterations: 24578\ncpu: 28545.695337293644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99978.01384923063,
            "unit": "ns/iter",
            "extra": "iterations: 7004\ncpu: 99973.45802398784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86049.83792086915,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 86046.96485622994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85430.52131948828,
            "unit": "ns/iter",
            "extra": "iterations: 8185\ncpu: 85428.79657910876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85678.9364573048,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85679.67369970538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55819.52143712077,
            "unit": "ns/iter",
            "extra": "iterations: 12525\ncpu: 55817.389221556456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85179.49155426114,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 85176.91092477893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3002.6836254058735,
            "unit": "ns/iter",
            "extra": "iterations: 233960\ncpu: 3002.49999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15107.899844282965,
            "unit": "ns/iter",
            "extra": "iterations: 46238\ncpu: 15107.459232665778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12113.271065307985,
            "unit": "ns/iter",
            "extra": "iterations: 57927\ncpu: 12112.810951715162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12002.74102757756,
            "unit": "ns/iter",
            "extra": "iterations: 58234\ncpu: 12002.486519902475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12483.71804342618,
            "unit": "ns/iter",
            "extra": "iterations: 55771\ncpu: 12483.8392713059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27690.234119138666,
            "unit": "ns/iter",
            "extra": "iterations: 25282\ncpu: 27689.628985048457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98069.58783973365,
            "unit": "ns/iter",
            "extra": "iterations: 7138\ncpu: 98064.13561221678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84389.69041591727,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 84385.8107293559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81951.7064035925,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 81951.86672967803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82112.83699096907,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 82111.57141180537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54739.558166678195,
            "unit": "ns/iter",
            "extra": "iterations: 12851\ncpu: 54739.60781262149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83621.94912428095,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 83620.13582747523 ns\nthreads: 1"
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
        "date": 1705958482172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 690.1183698355113,
            "unit": "ns/iter",
            "extra": "iterations: 1015284\ncpu: 690.0951851895627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11122.738534834598,
            "unit": "ns/iter",
            "extra": "iterations: 75773\ncpu: 11122.323254985286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24350.303680355664,
            "unit": "ns/iter",
            "extra": "iterations: 34263\ncpu: 24349.213437235503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38598.50060265089,
            "unit": "ns/iter",
            "extra": "iterations: 22401\ncpu: 38598.27239855363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50120.637175565425,
            "unit": "ns/iter",
            "extra": "iterations: 16683\ncpu: 50116.96937001735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60422.25266297319,
            "unit": "ns/iter",
            "extra": "iterations: 14082\ncpu: 60419.33674194012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60281.06740000112,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60276.08999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68568.54129229188,
            "unit": "ns/iter",
            "extra": "iterations: 12799\ncpu: 68567.10680521908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78329.57592093588,
            "unit": "ns/iter",
            "extra": "iterations: 11130\ncpu: 78328.88589398014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 573.1430556101798,
            "unit": "ns/iter",
            "extra": "iterations: 1221504\ncpu: 573.1391792413295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 485.1668428923124,
            "unit": "ns/iter",
            "extra": "iterations: 1461195\ncpu: 484.11471432628747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.47480649530837,
            "unit": "ns/iter",
            "extra": "iterations: 1484331\ncpu: 471.4610824674552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 483.50149906981756,
            "unit": "ns/iter",
            "extra": "iterations: 1441227\ncpu: 483.49836632258496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 934.7318083144216,
            "unit": "ns/iter",
            "extra": "iterations: 747182\ncpu: 934.663040597873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4344.661332709532,
            "unit": "ns/iter",
            "extra": "iterations: 183791\ncpu: 4344.591410896075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18706.564525619186,
            "unit": "ns/iter",
            "extra": "iterations: 44184\ncpu: 18705.86864023177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15065.43060562885,
            "unit": "ns/iter",
            "extra": "iterations: 54918\ncpu: 15065.27550165705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14908.988928538758,
            "unit": "ns/iter",
            "extra": "iterations: 54645\ncpu: 14908.417970537073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15021.67855710767,
            "unit": "ns/iter",
            "extra": "iterations: 54862\ncpu: 15021.38091939778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47223.65188945563,
            "unit": "ns/iter",
            "extra": "iterations: 17730\ncpu: 47222.08121827412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458609.65969387855,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 458587.1428571441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362465.0146199029,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 362456.8922305772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362295.5054347992,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 362282.81772575306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372554.7123462221,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 372545.1845566395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221279.9941055841,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 221271.04049205472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366838.737065307,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 366833.92705682805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1857773.2937624946,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1857698.3903420574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 754760.2361889386,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 754735.6285028016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2478643.509383455,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2478535.656836462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4261.1349200815885,
            "unit": "ns/iter",
            "extra": "iterations: 186377\ncpu: 4260.937776656996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18434.154578069913,
            "unit": "ns/iter",
            "extra": "iterations: 44877\ncpu: 18433.2687122579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14814.155910429883,
            "unit": "ns/iter",
            "extra": "iterations: 56045\ncpu: 14813.546257471691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14811.752908892851,
            "unit": "ns/iter",
            "extra": "iterations: 56121\ncpu: 14811.03152117741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14824.547041377484,
            "unit": "ns/iter",
            "extra": "iterations: 55972\ncpu: 14823.96198099055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46710.35743580899,
            "unit": "ns/iter",
            "extra": "iterations: 17799\ncpu: 46708.09596044731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458606.41029721615,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 458587.95116772904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 378188.3941637585,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 378174.99999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 377960.61231569905,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 377947.87510841055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381750.500433303,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 381734.7487001735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222868.68174847684,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 222860.8895705528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371562.77620274044,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 371547.25085910584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1854778.2208590102,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1854736.1963190122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 733893.9521568868,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 733870.8235294085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4322.748596438165,
            "unit": "ns/iter",
            "extra": "iterations: 186668\ncpu: 4322.6589452932585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18431.62014324051,
            "unit": "ns/iter",
            "extra": "iterations: 44680\ncpu: 18431.42121754693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14775.481442872484,
            "unit": "ns/iter",
            "extra": "iterations: 55639\ncpu: 14775.434497384937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14755.181618160352,
            "unit": "ns/iter",
            "extra": "iterations: 55903\ncpu: 14754.819955995094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14814.00472418382,
            "unit": "ns/iter",
            "extra": "iterations: 55671\ncpu: 14813.939034685945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47528.55503313809,
            "unit": "ns/iter",
            "extra": "iterations: 17653\ncpu: 47527.5024075227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 453207.6090768299,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 453187.1583290373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376357.042553201,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 376348.5019539717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370705.1781116343,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 370692.4892703845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374558.40371327946,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 374557.1243523337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222338.23860453974,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 222331.7799847212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366961.49915473844,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 366953.71935756487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.2527350586924,
            "unit": "ns/iter",
            "extra": "iterations: 2372801\ncpu: 295.2431324835086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1666.81004191639,
            "unit": "ns/iter",
            "extra": "iterations: 421314\ncpu: 1666.7898526989304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1250.8733167749563,
            "unit": "ns/iter",
            "extra": "iterations: 559640\ncpu: 1250.8703809591934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1313.6316638073445,
            "unit": "ns/iter",
            "extra": "iterations: 532766\ncpu: 1313.6249310203652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1035.566904031033,
            "unit": "ns/iter",
            "extra": "iterations: 675333\ncpu: 1035.530471633994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8081.950330085061,
            "unit": "ns/iter",
            "extra": "iterations: 85887\ncpu: 8081.692223502981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19022.179183850156,
            "unit": "ns/iter",
            "extra": "iterations: 36856\ncpu: 19021.42392012179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4473.100608938381,
            "unit": "ns/iter",
            "extra": "iterations: 156666\ncpu: 4473.013927718818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4554.06569978493,
            "unit": "ns/iter",
            "extra": "iterations: 156241\ncpu: 4553.927586228917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4533.305910398257,
            "unit": "ns/iter",
            "extra": "iterations: 154372\ncpu: 4533.298784753672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9420.027635991122,
            "unit": "ns/iter",
            "extra": "iterations: 74251\ncpu: 9414.953333961772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8533.090859563168,
            "unit": "ns/iter",
            "extra": "iterations: 80762\ncpu: 8532.904088556505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3211.378621776901,
            "unit": "ns/iter",
            "extra": "iterations: 218194\ncpu: 3211.237247587002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15892.836934356365,
            "unit": "ns/iter",
            "extra": "iterations: 43645\ncpu: 15892.626875930631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12723.279437354922,
            "unit": "ns/iter",
            "extra": "iterations: 55168\ncpu: 12722.768633990892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12754.770870823193,
            "unit": "ns/iter",
            "extra": "iterations: 55017\ncpu: 12754.659468891346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13100.689615832307,
            "unit": "ns/iter",
            "extra": "iterations: 53466\ncpu: 13100.28242247405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28207.067120581345,
            "unit": "ns/iter",
            "extra": "iterations: 24821\ncpu: 28206.941702590597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100107.70984308368,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 100102.88159771878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85801.2277422581,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 85797.58976881589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85551.63089709778,
            "unit": "ns/iter",
            "extra": "iterations: 8182\ncpu: 85547.92226839426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85596.48736109771,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 85593.54011478774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55438.97469860427,
            "unit": "ns/iter",
            "extra": "iterations: 12608\ncpu: 55438.48350253793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85424.70529922715,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 85421.12348549886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.968270636642,
            "unit": "ns/iter",
            "extra": "iterations: 230449\ncpu: 3045.8222860589945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15057.363420634407,
            "unit": "ns/iter",
            "extra": "iterations: 45933\ncpu: 15056.277621753154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12097.237940511523,
            "unit": "ns/iter",
            "extra": "iterations: 57859\ncpu: 12096.567517585756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12121.939738655152,
            "unit": "ns/iter",
            "extra": "iterations: 57931\ncpu: 12121.791441542637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12525.388443332839,
            "unit": "ns/iter",
            "extra": "iterations: 55985\ncpu: 12525.158524604873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27429.19204443538,
            "unit": "ns/iter",
            "extra": "iterations: 25567\ncpu: 27428.708882543575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98399.9682229952,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 98397.47735191495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84119.9596880724,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 84117.33653269443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82986.56003317972,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 82983.72644304957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83434.89683958798,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83431.42516398356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55431.03324100077,
            "unit": "ns/iter",
            "extra": "iterations: 12635\ncpu: 55431.31776810541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83776.48881713464,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 83776.1392177963 ns\nthreads: 1"
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
        "date": 1705959971464,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 694.559567353433,
            "unit": "ns/iter",
            "extra": "iterations: 1006919\ncpu: 694.5232933334261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11028.260815919943,
            "unit": "ns/iter",
            "extra": "iterations: 75375\ncpu: 11028.070315091209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24418.78941662432,
            "unit": "ns/iter",
            "extra": "iterations: 34129\ncpu: 24418.098977409245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39147.03309345783,
            "unit": "ns/iter",
            "extra": "iterations: 21122\ncpu: 39146.39712148473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50188.82433384854,
            "unit": "ns/iter",
            "extra": "iterations: 17038\ncpu: 50188.4434792816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58714.99196620939,
            "unit": "ns/iter",
            "extra": "iterations: 14439\ncpu: 58710.13920631624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58380.76940000292,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58376.240000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67255.21912013339,
            "unit": "ns/iter",
            "extra": "iterations: 13002\ncpu: 67254.56852791879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77750.89814649,
            "unit": "ns/iter",
            "extra": "iterations: 11222\ncpu: 77747.32667973623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 564.2074745271373,
            "unit": "ns/iter",
            "extra": "iterations: 1201280\ncpu: 564.1866176078851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 475.5189236154688,
            "unit": "ns/iter",
            "extra": "iterations: 1470887\ncpu: 475.51062726096535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.7700976780122,
            "unit": "ns/iter",
            "extra": "iterations: 1482012\ncpu: 471.7476646612844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.6803726821051,
            "unit": "ns/iter",
            "extra": "iterations: 1443697\ncpu: 482.66623813722737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 957.0652940927672,
            "unit": "ns/iter",
            "extra": "iterations: 731521\ncpu: 956.9938525346492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4300.685580232106,
            "unit": "ns/iter",
            "extra": "iterations: 187132\ncpu: 4300.479875168329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17573.516306903522,
            "unit": "ns/iter",
            "extra": "iterations: 46790\ncpu: 17572.038897200255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14044.092757564895,
            "unit": "ns/iter",
            "extra": "iterations: 58820\ncpu: 14043.636518191077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14800.622466153965,
            "unit": "ns/iter",
            "extra": "iterations: 55844\ncpu: 14800.017907026728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14828.719302652187,
            "unit": "ns/iter",
            "extra": "iterations: 55754\ncpu: 14828.419485597473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47330.170780029424,
            "unit": "ns/iter",
            "extra": "iterations: 17666\ncpu: 47327.90105286994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 457449.45584484393,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 457384.1755997968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 364675.97264310287,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 364668.47643097595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363177.46787063935,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 363161.86476270563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368696.4642857136,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 368685.5867346935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221502.2370389323,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 221486.92287851384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379059.4846416709,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 379047.3976109226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1873510.6485942798,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1873385.9437751004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750579.7109687831,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 750556.0448358671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2480725.221311558,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2480585.245901643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4217.248830496348,
            "unit": "ns/iter",
            "extra": "iterations: 190893\ncpu: 4217.208069442037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18732.01449242647,
            "unit": "ns/iter",
            "extra": "iterations: 44230\ncpu: 18731.872032557145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14835.255140842966,
            "unit": "ns/iter",
            "extra": "iterations: 55487\ncpu: 14835.146971362608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14875.787488630818,
            "unit": "ns/iter",
            "extra": "iterations: 56077\ncpu: 14875.510458833342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14885.042338349695,
            "unit": "ns/iter",
            "extra": "iterations: 55954\ncpu: 14884.951924795272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47132.52611458126,
            "unit": "ns/iter",
            "extra": "iterations: 17787\ncpu: 47131.89970202928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 462751.82854096,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 462739.82960596285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381685.9794580596,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 381681.64335664234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378819.6052401896,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 378804.7598253274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381000.62248465046,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 380990.63867016684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 219709.93429004343,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 219706.0674723044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374436.8881179688,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 374420.9887250655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1875014.10515446,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1874963.2989690623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 737785.521048479,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 737740.5083399497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4136.5231274751395,
            "unit": "ns/iter",
            "extra": "iterations: 194163\ncpu: 4136.447726909837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18348.56087282693,
            "unit": "ns/iter",
            "extra": "iterations: 45324\ncpu: 18347.78704439152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14786.270485819132,
            "unit": "ns/iter",
            "extra": "iterations: 56173\ncpu: 14786.116105602398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14783.944065897209,
            "unit": "ns/iter",
            "extra": "iterations: 56209\ncpu: 14783.344304292996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14842.301142561846,
            "unit": "ns/iter",
            "extra": "iterations: 55927\ncpu: 14842.038729057525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46210.82898829733,
            "unit": "ns/iter",
            "extra": "iterations: 17683\ncpu: 46206.85404060385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 449327.0532024822,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 449313.53305785294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374941.9563356492,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 374923.4589041084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370486.66935140884,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 370464.30690970895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373548.11068213574,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 373537.83783783595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226839.79798760836,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 226830.62435500557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368745.25556506816,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 368733.9041095879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.35935826340193,
            "unit": "ns/iter",
            "extra": "iterations: 2361031\ncpu: 296.3582434961678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1703.7267980000356,
            "unit": "ns/iter",
            "extra": "iterations: 431827\ncpu: 1703.669525064445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1227.8380580844268,
            "unit": "ns/iter",
            "extra": "iterations: 570859\ncpu: 1227.7728826207556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1238.241608914559,
            "unit": "ns/iter",
            "extra": "iterations: 566792\ncpu: 1238.1937289164282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1024.1328873125867,
            "unit": "ns/iter",
            "extra": "iterations: 682330\ncpu: 1024.0796975070662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8646.916207724245,
            "unit": "ns/iter",
            "extra": "iterations: 86249\ncpu: 8646.478220037277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17442.97500997592,
            "unit": "ns/iter",
            "extra": "iterations: 40096\ncpu: 17442.732442139037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4438.231784785735,
            "unit": "ns/iter",
            "extra": "iterations: 158837\ncpu: 4438.055994510073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4370.854172005791,
            "unit": "ns/iter",
            "extra": "iterations: 159983\ncpu: 4370.614377777645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4467.360978409501,
            "unit": "ns/iter",
            "extra": "iterations: 156785\ncpu: 4467.190738909898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9322.487038028681,
            "unit": "ns/iter",
            "extra": "iterations: 74680\ncpu: 9321.881360471225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8349.08124320356,
            "unit": "ns/iter",
            "extra": "iterations: 83687\ncpu: 8348.766236094076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3477.1387648606847,
            "unit": "ns/iter",
            "extra": "iterations: 200447\ncpu: 3476.9604932974466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16096.216216836721,
            "unit": "ns/iter",
            "extra": "iterations: 43535\ncpu: 16095.536924313647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12840.049676979344,
            "unit": "ns/iter",
            "extra": "iterations: 54331\ncpu: 12839.80968507846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12802.174637814713,
            "unit": "ns/iter",
            "extra": "iterations: 54530\ncpu: 12802.044746011255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13125.382216199472,
            "unit": "ns/iter",
            "extra": "iterations: 53127\ncpu: 13124.900709620577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28520.998452767293,
            "unit": "ns/iter",
            "extra": "iterations: 24560\ncpu: 28519.833061888883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99861.9407312146,
            "unit": "ns/iter",
            "extra": "iterations: 7002\ncpu: 99857.84061696682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86540.43113475177,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 86535.19366414975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85920.43611626922,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 85920.77922077963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85565.08349632563,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 85564.16870415599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55314.0290688515,
            "unit": "ns/iter",
            "extra": "iterations: 12694\ncpu: 55310.77674491823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85702.42813566662,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85701.40312347394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3025.941847314436,
            "unit": "ns/iter",
            "extra": "iterations: 231666\ncpu: 3025.7987792770773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15195.24412535463,
            "unit": "ns/iter",
            "extra": "iterations: 46173\ncpu: 15195.027396963575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12987.054253473425,
            "unit": "ns/iter",
            "extra": "iterations: 55296\ncpu: 12986.754918981305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12520.419337520121,
            "unit": "ns/iter",
            "extra": "iterations: 55881\ncpu: 12520.307439022376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12935.85441562634,
            "unit": "ns/iter",
            "extra": "iterations: 54058\ncpu: 12935.30652262386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27725.36897367295,
            "unit": "ns/iter",
            "extra": "iterations: 24953\ncpu: 27724.578207028884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98032.40114016482,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 98028.17018909934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83997.99748442866,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 83992.57307139492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83461.3950749478,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 83457.67309064932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84015.38061493772,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84011.3259668503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55213.84700055519,
            "unit": "ns/iter",
            "extra": "iterations: 12719\ncpu: 55213.161412061316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84062.5671016424,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 84059.33197653409 ns\nthreads: 1"
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
        "date": 1705962035253,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 690.4647507702775,
            "unit": "ns/iter",
            "extra": "iterations: 1013242\ncpu: 690.4251896388031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10800.039967353268,
            "unit": "ns/iter",
            "extra": "iterations: 77188\ncpu: 10799.6048608592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24089.774896024617,
            "unit": "ns/iter",
            "extra": "iterations: 34624\ncpu: 24088.692814232905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38883.8763787994,
            "unit": "ns/iter",
            "extra": "iterations: 22302\ncpu: 38882.799748901445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48382.393618976734,
            "unit": "ns/iter",
            "extra": "iterations: 16361\ncpu: 48381.51702218691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59491.2332534174,
            "unit": "ns/iter",
            "extra": "iterations: 14182\ncpu: 59488.069383725866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59707.119999995935,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59706.61999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68561.07339376808,
            "unit": "ns/iter",
            "extra": "iterations: 12576\ncpu: 68558.4128498727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78657.69006323494,
            "unit": "ns/iter",
            "extra": "iterations: 11070\ncpu: 78654.16440831077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 563.5078372276122,
            "unit": "ns/iter",
            "extra": "iterations: 1217012\ncpu: 563.4770240556392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 468.931313710073,
            "unit": "ns/iter",
            "extra": "iterations: 1490443\ncpu: 468.9284326874628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 459.14997520636354,
            "unit": "ns/iter",
            "extra": "iterations: 1526599\ncpu: 459.1516829239373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 478.4397410549307,
            "unit": "ns/iter",
            "extra": "iterations: 1458688\ncpu: 478.437883906634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 951.954330208279,
            "unit": "ns/iter",
            "extra": "iterations: 733198\ncpu: 951.9566338151485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4321.576318514931,
            "unit": "ns/iter",
            "extra": "iterations: 187294\ncpu: 4321.51857507448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18582.374185963836,
            "unit": "ns/iter",
            "extra": "iterations: 44224\ncpu: 18582.43261577427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14703.93616677688,
            "unit": "ns/iter",
            "extra": "iterations: 55739\ncpu: 14703.96490787418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14091.1085092181,
            "unit": "ns/iter",
            "extra": "iterations: 58419\ncpu: 14091.156986596849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14528.40876989461,
            "unit": "ns/iter",
            "extra": "iterations: 56922\ncpu: 14527.955799163761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47390.08962846725,
            "unit": "ns/iter",
            "extra": "iterations: 17818\ncpu: 47389.454484229376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 449571.10723318945,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 449552.6049570046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 358540.01034772256,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 358532.3675496696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 358613.23016530514,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 358609.13223140483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364773.9074702869,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 364768.67572156165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220284.84393939437,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 220283.7121212122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 355749.6363636306,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 355738.74948580784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1826836.5158730955,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1826760.7142857113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 734162.9479409459,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 734147.7855477877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2483017.4220430497,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2482973.3870967696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4191.82296648184,
            "unit": "ns/iter",
            "extra": "iterations: 186524\ncpu: 4191.729214471046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18580.570726096823,
            "unit": "ns/iter",
            "extra": "iterations: 44333\ncpu: 18580.393837547617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14945.59790961046,
            "unit": "ns/iter",
            "extra": "iterations: 54918\ncpu: 14945.300265850887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14792.887615674257,
            "unit": "ns/iter",
            "extra": "iterations: 55328\ncpu: 14792.656521110555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14720.967319676834,
            "unit": "ns/iter",
            "extra": "iterations: 55844\ncpu: 14720.6450111023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46884.65150912446,
            "unit": "ns/iter",
            "extra": "iterations: 17593\ncpu: 46883.857215938166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 457903.0575805893,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 457879.45060750295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 377910.83493446454,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 377896.89956332085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376333.55041107227,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 376328.2128948513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383411.13537116017,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 383402.8820960725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223016.93059455365,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 223012.09492217342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372039.06479111925,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 372030.8184143219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1861420.248472512,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1861311.8126272983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 736627.3746997253,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 736599.8398718972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4226.917247639609,
            "unit": "ns/iter",
            "extra": "iterations: 189481\ncpu: 4226.78052152986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18720.992626832252,
            "unit": "ns/iter",
            "extra": "iterations: 44350\ncpu: 18720.710259301035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14533.4047257482,
            "unit": "ns/iter",
            "extra": "iterations: 55314\ncpu: 14533.311639006346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14762.523703559069,
            "unit": "ns/iter",
            "extra": "iterations: 56173\ncpu: 14762.32709664782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14443.970984674592,
            "unit": "ns/iter",
            "extra": "iterations: 57349\ncpu: 14443.653769028313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46110.78601368075,
            "unit": "ns/iter",
            "extra": "iterations: 18132\ncpu: 46110.16986543139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 442054.73438294895,
            "unit": "ns/iter",
            "extra": "iterations: 1969\ncpu: 442045.09903504245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370953.158521035,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 370945.6863578399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370351.9075021411,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 370344.0323955657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371215.6712446243,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 371216.69527897064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228567.65593047786,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 228563.65030674968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364343.83282407786,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 364336.5779135738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 294.1033778581154,
            "unit": "ns/iter",
            "extra": "iterations: 2383315\ncpu: 294.1015770051377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1575.7598832900046,
            "unit": "ns/iter",
            "extra": "iterations: 442464\ncpu: 1575.7209626093872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1270.0223110182264,
            "unit": "ns/iter",
            "extra": "iterations: 552328\ncpu: 1270.014375515998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1238.3406830728231,
            "unit": "ns/iter",
            "extra": "iterations: 567231\ncpu: 1238.33217860096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1020.2375830755271,
            "unit": "ns/iter",
            "extra": "iterations: 686724\ncpu: 1020.224864720027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8162.865762023461,
            "unit": "ns/iter",
            "extra": "iterations: 85706\ncpu: 8162.78440249223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18515.772634752986,
            "unit": "ns/iter",
            "extra": "iterations: 37829\ncpu: 18515.239630970882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4350.909689230083,
            "unit": "ns/iter",
            "extra": "iterations: 160601\ncpu: 4350.855847721973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4414.676652166368,
            "unit": "ns/iter",
            "extra": "iterations: 157929\ncpu: 4414.5780698921535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4476.498534700077,
            "unit": "ns/iter",
            "extra": "iterations: 156282\ncpu: 4476.509770798944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9326.5012810931,
            "unit": "ns/iter",
            "extra": "iterations: 74936\ncpu: 9326.351820219972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8367.98713799333,
            "unit": "ns/iter",
            "extra": "iterations: 83424\ncpu: 8367.915707710084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3212.236071570863,
            "unit": "ns/iter",
            "extra": "iterations: 218133\ncpu: 3212.1618462130677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17165.684743713384,
            "unit": "ns/iter",
            "extra": "iterations: 41360\ncpu: 17165.592359767717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12670.700032897714,
            "unit": "ns/iter",
            "extra": "iterations: 54716\ncpu: 12670.41084874634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12659.79219512217,
            "unit": "ns/iter",
            "extra": "iterations: 55350\ncpu: 12659.701897019037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13016.42931304049,
            "unit": "ns/iter",
            "extra": "iterations: 53744\ncpu: 13016.221345638596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28490.876919938593,
            "unit": "ns/iter",
            "extra": "iterations: 24480\ncpu: 28490.637254901903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99201.28295774842,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 99201.53521126791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84956.59844811047,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84953.49175557689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84916.62893844051,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 84916.17789626689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85508.14030363344,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 85507.28452497427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54917.20766017644,
            "unit": "ns/iter",
            "extra": "iterations: 12689\ncpu: 54914.776578138444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85105.7366255166,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 85102.03340595521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3101.192023653255,
            "unit": "ns/iter",
            "extra": "iterations: 225592\ncpu: 3101.0718465194022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15249.181252190547,
            "unit": "ns/iter",
            "extra": "iterations: 45616\ncpu: 15248.879779024774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12208.513295968107,
            "unit": "ns/iter",
            "extra": "iterations: 57273\ncpu: 12208.442023292058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13560.224311070266,
            "unit": "ns/iter",
            "extra": "iterations: 51384\ncpu: 13559.47182002202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12895.985173461755,
            "unit": "ns/iter",
            "extra": "iterations: 54969\ncpu: 12895.464716476437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27598.82554750232,
            "unit": "ns/iter",
            "extra": "iterations: 25388\ncpu: 27597.30975263871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96586.70140417613,
            "unit": "ns/iter",
            "extra": "iterations: 7264\ncpu: 96582.15859030948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82698.49219489296,
            "unit": "ns/iter",
            "extra": "iterations: 8456\ncpu: 82692.67975401976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81504.82772669212,
            "unit": "ns/iter",
            "extra": "iterations: 8591\ncpu: 81503.66662786642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81615.38898756707,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 81611.35583185311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54520.78768560594,
            "unit": "ns/iter",
            "extra": "iterations: 12863\ncpu: 54518.09064759325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83087.63330966725,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 83083.9720842199 ns\nthreads: 1"
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
        "date": 1705963481485,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 688.407353315771,
            "unit": "ns/iter",
            "extra": "iterations: 1012686\ncpu: 688.3829735969492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10790.290177351202,
            "unit": "ns/iter",
            "extra": "iterations: 76853\ncpu: 10789.988679687194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24048.713426097107,
            "unit": "ns/iter",
            "extra": "iterations: 34567\ncpu: 24047.77678132322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37924.03846324965,
            "unit": "ns/iter",
            "extra": "iterations: 22489\ncpu: 37923.06016274623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48539.30919270188,
            "unit": "ns/iter",
            "extra": "iterations: 16611\ncpu: 48538.101258202405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59064.0795726167,
            "unit": "ns/iter",
            "extra": "iterations: 14226\ncpu: 59063.5526500773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58764.394199999966,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58761.59000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68152.6631066395,
            "unit": "ns/iter",
            "extra": "iterations: 12734\ncpu: 68151.3978325742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78084.22479928556,
            "unit": "ns/iter",
            "extra": "iterations: 11210\ncpu: 78081.61462979484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 587.3120470441385,
            "unit": "ns/iter",
            "extra": "iterations: 1192583\ncpu: 587.3050345342838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 493.45420161601083,
            "unit": "ns/iter",
            "extra": "iterations: 1416098\ncpu: 493.4402845000837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 480.7462651151073,
            "unit": "ns/iter",
            "extra": "iterations: 1458144\ncpu: 480.7437399872705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 489.7960885087175,
            "unit": "ns/iter",
            "extra": "iterations: 1430503\ncpu: 489.7939396142475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 959.5670785320082,
            "unit": "ns/iter",
            "extra": "iterations: 730174\ncpu: 959.5542980166383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4334.669777703491,
            "unit": "ns/iter",
            "extra": "iterations: 184933\ncpu: 4334.639031433009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18605.591454205896,
            "unit": "ns/iter",
            "extra": "iterations: 43694\ncpu: 18605.35313773057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15005.770922629623,
            "unit": "ns/iter",
            "extra": "iterations: 55060\ncpu: 15005.47221213224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15067.460399904994,
            "unit": "ns/iter",
            "extra": "iterations: 55063\ncpu: 15067.39371265639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15097.446470075618,
            "unit": "ns/iter",
            "extra": "iterations: 55072\ncpu: 15097.105607205116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48010.567874219705,
            "unit": "ns/iter",
            "extra": "iterations: 17363\ncpu: 48009.278350515495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 442728.66529980657,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 442717.9395181956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360235.8156146286,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 360226.6196013297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 385712.7289331708,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 385704.60772104724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370133.0127280509,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 370126.6864658467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220593.92929805667,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 220591.22583926743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 365405.85967880755,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 365404.2688081147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1866358.0722891786,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1866286.1445783123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 742656.0196386509,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 742629.7721916748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2484025.1604278297,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2483922.7272727285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4196.386951119068,
            "unit": "ns/iter",
            "extra": "iterations: 186698\ncpu: 4196.234025002943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18637.22788686784,
            "unit": "ns/iter",
            "extra": "iterations: 44408\ncpu: 18636.790668348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15022.855148691842,
            "unit": "ns/iter",
            "extra": "iterations: 54946\ncpu: 15022.407454591668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15010.884352132589,
            "unit": "ns/iter",
            "extra": "iterations: 54934\ncpu: 15010.501692940617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15078.321011064494,
            "unit": "ns/iter",
            "extra": "iterations: 54319\ncpu: 15077.764686389573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47436.49340309301,
            "unit": "ns/iter",
            "extra": "iterations: 17584\ncpu: 47435.270700636895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458539.5744344881,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 458537.08574434527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376825.19878732145,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 376817.3668254653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 373933.2488181995,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 373921.14310270717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373646.31784947304,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373631.2258064498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221213.90569396174,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 221206.3548551093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371838.333473516,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 371826.2405382662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1859824.5316972516,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1859798.568507157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739428.6727853501,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 739420.8300079822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4257.069315450383,
            "unit": "ns/iter",
            "extra": "iterations: 185947\ncpu: 4256.90492452152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18641.103353292132,
            "unit": "ns/iter",
            "extra": "iterations: 43927\ncpu: 18640.392014023357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14941.458986807602,
            "unit": "ns/iter",
            "extra": "iterations: 55409\ncpu: 14940.97709758339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14923.898705654494,
            "unit": "ns/iter",
            "extra": "iterations: 55472\ncpu: 14923.431641188361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14968.83575702721,
            "unit": "ns/iter",
            "extra": "iterations: 55150\ncpu: 14968.38440616504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47225.97538426447,
            "unit": "ns/iter",
            "extra": "iterations: 17631\ncpu: 47223.81033407061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 442468.07688362343,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 442452.99846232444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 366456.50020997564,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 366443.1751364982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 366627.45035612246,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 366621.95224130474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 367065.7574215368,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 367055.97964376357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222455.31491853908,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 222450.6364562128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364918.7680914293,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 364906.8133728318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.1199160923265,
            "unit": "ns/iter",
            "extra": "iterations: 2344481\ncpu: 298.11152233692627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1671.7079331062557,
            "unit": "ns/iter",
            "extra": "iterations: 420907\ncpu: 1671.6443299826396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1257.2290619184898,
            "unit": "ns/iter",
            "extra": "iterations: 556295\ncpu: 1257.1752397558887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1291.8979449357628,
            "unit": "ns/iter",
            "extra": "iterations: 558620\ncpu: 1291.9025455586875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1033.7482754449877,
            "unit": "ns/iter",
            "extra": "iterations: 677856\ncpu: 1033.736663834208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8075.20736190783,
            "unit": "ns/iter",
            "extra": "iterations: 86771\ncpu: 8074.966290580963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17926.826009316424,
            "unit": "ns/iter",
            "extra": "iterations: 38640\ncpu: 17926.084368530006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4409.810593111314,
            "unit": "ns/iter",
            "extra": "iterations: 158537\ncpu: 4409.652005525555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4415.681739327466,
            "unit": "ns/iter",
            "extra": "iterations: 158521\ncpu: 4415.656600702797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4472.284741953745,
            "unit": "ns/iter",
            "extra": "iterations: 156619\ncpu: 4472.14322655614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9228.967561268802,
            "unit": "ns/iter",
            "extra": "iterations: 75527\ncpu: 9228.99360493591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8317.878359719096,
            "unit": "ns/iter",
            "extra": "iterations: 84010\ncpu: 8317.544339959437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3129.241383784557,
            "unit": "ns/iter",
            "extra": "iterations: 223503\ncpu: 3128.983950998404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15820.608242301863,
            "unit": "ns/iter",
            "extra": "iterations: 44308\ncpu: 15820.046041346679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12622.649941931313,
            "unit": "ns/iter",
            "extra": "iterations: 55108\ncpu: 12622.122014952429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12700.609241640792,
            "unit": "ns/iter",
            "extra": "iterations: 55185\ncpu: 12700.099664764051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13322.635412504831,
            "unit": "ns/iter",
            "extra": "iterations: 52569\ncpu: 13322.176567939267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28288.75474600106,
            "unit": "ns/iter",
            "extra": "iterations: 24705\ncpu: 28287.77575389632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 96894.11746737329,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 96893.86281588527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84472.94075404179,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 84471.62178336357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84454.37824518692,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 84450.66105769237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84466.00060321145,
            "unit": "ns/iter",
            "extra": "iterations: 8289\ncpu: 84462.93883459986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54598.64908453222,
            "unit": "ns/iter",
            "extra": "iterations: 12835\ncpu: 54597.2574990269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83680.36717997368,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 83679.29499518764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3116.5542363181034,
            "unit": "ns/iter",
            "extra": "iterations: 225467\ncpu: 3116.54166685149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15312.418400924576,
            "unit": "ns/iter",
            "extra": "iterations: 45889\ncpu: 15312.233868683023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12807.738699277535,
            "unit": "ns/iter",
            "extra": "iterations: 57076\ncpu: 12807.260494778915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12208.405726879604,
            "unit": "ns/iter",
            "extra": "iterations: 57169\ncpu: 12208.000839615897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12888.801064931755,
            "unit": "ns/iter",
            "extra": "iterations: 54088\ncpu: 12888.191465759517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27698.811535725992,
            "unit": "ns/iter",
            "extra": "iterations: 25278\ncpu: 27697.56705435561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98451.6887324005,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98448.02816901256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84309.73924569832,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84309.21797806941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82320.32121426392,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 82319.60230615363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82236.86113733012,
            "unit": "ns/iter",
            "extra": "iterations: 8476\ncpu: 82232.95186408689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54595.71159556745,
            "unit": "ns/iter",
            "extra": "iterations: 12798\ncpu: 54593.248945146945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82942.88396874114,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 82940.03078380354 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}