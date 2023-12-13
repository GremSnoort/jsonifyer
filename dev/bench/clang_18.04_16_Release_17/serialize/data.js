window.BENCHMARK_DATA = {
  "lastUpdate": 1702492946959,
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
      }
    ]
  }
}