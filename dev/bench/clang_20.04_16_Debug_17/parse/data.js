window.BENCHMARK_DATA = {
  "lastUpdate": 1705773025707,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-16 20.04 Debug c++-17": [
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
        "date": 1702489607104,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6798.792996839775,
            "unit": "ns/iter",
            "extra": "iterations: 103182\ncpu: 6798.092690585568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57607.045726766446,
            "unit": "ns/iter",
            "extra": "iterations: 14193\ncpu: 57603.72014373283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91032.91357763049,
            "unit": "ns/iter",
            "extra": "iterations: 9442\ncpu: 91026.61512391441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132282.47554805214,
            "unit": "ns/iter",
            "extra": "iterations: 6523\ncpu: 132276.97378506826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173773.04404665725,
            "unit": "ns/iter",
            "extra": "iterations: 4972\ncpu: 173765.16492357198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 215048.68114144815,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 215039.305210918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 257287.916840525,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 257268.07749627417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 298489.16919366614,
            "unit": "ns/iter",
            "extra": "iterations: 2902\ncpu: 298471.0199862167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 337921.0428348547,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 337897.1962616816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5436.741325970343,
            "unit": "ns/iter",
            "extra": "iterations: 129294\ncpu: 5436.460315250514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4509.9717966893795,
            "unit": "ns/iter",
            "extra": "iterations: 155230\ncpu: 4509.909811247823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4481.690709781803,
            "unit": "ns/iter",
            "extra": "iterations: 156358\ncpu: 4481.624221338215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4512.87986313685,
            "unit": "ns/iter",
            "extra": "iterations: 154607\ncpu: 4512.795669018857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7186.395911714672,
            "unit": "ns/iter",
            "extra": "iterations: 97547\ncpu: 7186.117461326341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23898.553750442254,
            "unit": "ns/iter",
            "extra": "iterations: 33916\ncpu: 23898.260408066955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 119119.79999999609,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 119119.16492693126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 92605.48451928365,
            "unit": "ns/iter",
            "extra": "iterations: 9205\ncpu: 92604.45410103234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93882.6539264155,
            "unit": "ns/iter",
            "extra": "iterations: 9105\ncpu: 93881.14222954426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89658.02570068794,
            "unit": "ns/iter",
            "extra": "iterations: 9455\ncpu: 89655.78001057671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182351.20781379746,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 182344.4098088115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1618441.1398601606,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1618378.496503502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1270753.401098889,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1270691.0714285702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1264223.277322503,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1264203.2786885216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1229582.2794701674,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1229559.470198672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704010.5217060072,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 704005.4836252867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1221027.8773087736,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1220998.416886544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30910.957459444784,
            "unit": "ns/iter",
            "extra": "iterations: 26939\ncpu: 30909.751661160495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156875.94594594356,
            "unit": "ns/iter",
            "extra": "iterations: 5513\ncpu: 156868.61962633752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120266.0947324404,
            "unit": "ns/iter",
            "extra": "iterations: 7157\ncpu: 120263.18289786224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120763.86220970376,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 120755.39760731875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115481.92149709554,
            "unit": "ns/iter",
            "extra": "iterations: 7401\ncpu: 115478.30022969867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 201424.52384275294,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 201414.18934635952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1665492.2258063594,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1665426.8817204323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1319994.1588651354,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1319929.6453900728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1315316.278481016,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1315252.8832630145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1265049.8685636518,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1264992.9539295381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 742800.6450320313,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 742779.7275641026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1260411.937415038,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1260321.9047619132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6134768.559210544,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6134359.210526331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2778955.8805970144,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2778817.3134328234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22741.1711594386,
            "unit": "ns/iter",
            "extra": "iterations: 36095\ncpu: 22740.67045297134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130134.81080671861,
            "unit": "ns/iter",
            "extra": "iterations: 6607\ncpu: 130131.84501286503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95570.5700466991,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 95564.95441405382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94985.9234439099,
            "unit": "ns/iter",
            "extra": "iterations: 9013\ncpu: 94983.5681792967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 88127.15226167433,
            "unit": "ns/iter",
            "extra": "iterations: 9661\ncpu: 88123.34126901925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 174046.37019335903,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 174038.14903324042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1622637.4843749546,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1622566.1458333372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1279869.1552198625,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1279802.7472527472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1249724.6554054576,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1249662.8378378307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1225882.015830998,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1225820.1846965763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 714448.3037094304,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 714423.10664606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1219795.323298508,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1219765.052356027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2569.2210763754933,
            "unit": "ns/iter",
            "extra": "iterations: 271318\ncpu: 2569.157593672394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17101.847729272828,
            "unit": "ns/iter",
            "extra": "iterations: 40868\ncpu: 17101.468141333047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13851.56735617524,
            "unit": "ns/iter",
            "extra": "iterations: 50374\ncpu: 13850.935006153977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13453.405919661294,
            "unit": "ns/iter",
            "extra": "iterations: 52030\ncpu: 13452.884874111101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10211.20682601802,
            "unit": "ns/iter",
            "extra": "iterations: 68444\ncpu: 10210.905265618554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63335.56973051592,
            "unit": "ns/iter",
            "extra": "iterations: 11021\ncpu: 63331.122402685454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 107045.34072827309,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 107041.30966952234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27972.79376996963,
            "unit": "ns/iter",
            "extra": "iterations: 25040\ncpu: 27972.328274760337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27398.944576994723,
            "unit": "ns/iter",
            "extra": "iterations: 25567\ncpu: 27398.67407204596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27183.728168908034,
            "unit": "ns/iter",
            "extra": "iterations: 25766\ncpu: 27183.136691764455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56807.11495372667,
            "unit": "ns/iter",
            "extra": "iterations: 12318\ncpu: 56804.08345510628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51618.000957573495,
            "unit": "ns/iter",
            "extra": "iterations: 13576\ncpu: 51616.3597525047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19585.686519848066,
            "unit": "ns/iter",
            "extra": "iterations: 35645\ncpu: 19585.06382381847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94824.74830669697,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 94821.6743429955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77962.03784505927,
            "unit": "ns/iter",
            "extra": "iterations: 8984\ncpu: 77959.71727515661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78831.95726689164,
            "unit": "ns/iter",
            "extra": "iterations: 8869\ncpu: 78827.65813507739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77330.80170222252,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 77328.63932795379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 119248.81634043212,
            "unit": "ns/iter",
            "extra": "iterations: 5875\ncpu: 119243.30212765982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 478442.4032809539,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478412.30348598876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 389782.75810058974,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 389757.6536312852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 392482.2497188232,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 392467.15410574066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 387541.3516361081,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 387537.3821408783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 247786.4764268003,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 247780.25522864022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 382033.63621441624,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 382019.63894967147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20178.108507519915,
            "unit": "ns/iter",
            "extra": "iterations: 34781\ncpu: 20177.493459072473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 97271.91350825768,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 97271.70623351313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81391.74682658639,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 81388.51752649488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82126.53040620146,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 82121.83611176228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81144.72043508313,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 81140.2337421892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 120617.13650465681,
            "unit": "ns/iter",
            "extra": "iterations: 5802\ncpu: 120614.23647018235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 478976.75137358025,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 478963.6675824162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 389637.72732330376,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 389619.47690595774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 391753.49271297944,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 391741.5358744387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 390023.74680024985,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 390008.45854201633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255126.4667397673,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 255113.99853800843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 384818.2562120343,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 384808.72446162015 ns\nthreads: 1"
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
        "date": 1702489607104,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6798.792996839775,
            "unit": "ns/iter",
            "extra": "iterations: 103182\ncpu: 6798.092690585568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57607.045726766446,
            "unit": "ns/iter",
            "extra": "iterations: 14193\ncpu: 57603.72014373283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91032.91357763049,
            "unit": "ns/iter",
            "extra": "iterations: 9442\ncpu: 91026.61512391441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132282.47554805214,
            "unit": "ns/iter",
            "extra": "iterations: 6523\ncpu: 132276.97378506826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173773.04404665725,
            "unit": "ns/iter",
            "extra": "iterations: 4972\ncpu: 173765.16492357198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 215048.68114144815,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 215039.305210918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 257287.916840525,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 257268.07749627417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 298489.16919366614,
            "unit": "ns/iter",
            "extra": "iterations: 2902\ncpu: 298471.0199862167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 337921.0428348547,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 337897.1962616816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5436.741325970343,
            "unit": "ns/iter",
            "extra": "iterations: 129294\ncpu: 5436.460315250514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4509.9717966893795,
            "unit": "ns/iter",
            "extra": "iterations: 155230\ncpu: 4509.909811247823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4481.690709781803,
            "unit": "ns/iter",
            "extra": "iterations: 156358\ncpu: 4481.624221338215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4512.87986313685,
            "unit": "ns/iter",
            "extra": "iterations: 154607\ncpu: 4512.795669018857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7186.395911714672,
            "unit": "ns/iter",
            "extra": "iterations: 97547\ncpu: 7186.117461326341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23898.553750442254,
            "unit": "ns/iter",
            "extra": "iterations: 33916\ncpu: 23898.260408066955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 119119.79999999609,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 119119.16492693126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 92605.48451928365,
            "unit": "ns/iter",
            "extra": "iterations: 9205\ncpu: 92604.45410103234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93882.6539264155,
            "unit": "ns/iter",
            "extra": "iterations: 9105\ncpu: 93881.14222954426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89658.02570068794,
            "unit": "ns/iter",
            "extra": "iterations: 9455\ncpu: 89655.78001057671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182351.20781379746,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 182344.4098088115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1618441.1398601606,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1618378.496503502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1270753.401098889,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1270691.0714285702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1264223.277322503,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1264203.2786885216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1229582.2794701674,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1229559.470198672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704010.5217060072,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 704005.4836252867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1221027.8773087736,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1220998.416886544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30910.957459444784,
            "unit": "ns/iter",
            "extra": "iterations: 26939\ncpu: 30909.751661160495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156875.94594594356,
            "unit": "ns/iter",
            "extra": "iterations: 5513\ncpu: 156868.61962633752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120266.0947324404,
            "unit": "ns/iter",
            "extra": "iterations: 7157\ncpu: 120263.18289786224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120763.86220970376,
            "unit": "ns/iter",
            "extra": "iterations: 7105\ncpu: 120755.39760731875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115481.92149709554,
            "unit": "ns/iter",
            "extra": "iterations: 7401\ncpu: 115478.30022969867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 201424.52384275294,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 201414.18934635952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1665492.2258063594,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1665426.8817204323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1319994.1588651354,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1319929.6453900728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1315316.278481016,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1315252.8832630145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1265049.8685636518,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1264992.9539295381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 742800.6450320313,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 742779.7275641026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1260411.937415038,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1260321.9047619132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6134768.559210544,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6134359.210526331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2778955.8805970144,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2778817.3134328234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22741.1711594386,
            "unit": "ns/iter",
            "extra": "iterations: 36095\ncpu: 22740.67045297134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130134.81080671861,
            "unit": "ns/iter",
            "extra": "iterations: 6607\ncpu: 130131.84501286503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95570.5700466991,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 95564.95441405382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94985.9234439099,
            "unit": "ns/iter",
            "extra": "iterations: 9013\ncpu: 94983.5681792967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 88127.15226167433,
            "unit": "ns/iter",
            "extra": "iterations: 9661\ncpu: 88123.34126901925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 174046.37019335903,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 174038.14903324042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1622637.4843749546,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1622566.1458333372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1279869.1552198625,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1279802.7472527472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1249724.6554054576,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1249662.8378378307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1225882.015830998,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1225820.1846965763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 714448.3037094304,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 714423.10664606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1219795.323298508,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1219765.052356027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2569.2210763754933,
            "unit": "ns/iter",
            "extra": "iterations: 271318\ncpu: 2569.157593672394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17101.847729272828,
            "unit": "ns/iter",
            "extra": "iterations: 40868\ncpu: 17101.468141333047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13851.56735617524,
            "unit": "ns/iter",
            "extra": "iterations: 50374\ncpu: 13850.935006153977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13453.405919661294,
            "unit": "ns/iter",
            "extra": "iterations: 52030\ncpu: 13452.884874111101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10211.20682601802,
            "unit": "ns/iter",
            "extra": "iterations: 68444\ncpu: 10210.905265618554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63335.56973051592,
            "unit": "ns/iter",
            "extra": "iterations: 11021\ncpu: 63331.122402685454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 107045.34072827309,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 107041.30966952234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27972.79376996963,
            "unit": "ns/iter",
            "extra": "iterations: 25040\ncpu: 27972.328274760337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27398.944576994723,
            "unit": "ns/iter",
            "extra": "iterations: 25567\ncpu: 27398.67407204596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27183.728168908034,
            "unit": "ns/iter",
            "extra": "iterations: 25766\ncpu: 27183.136691764455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56807.11495372667,
            "unit": "ns/iter",
            "extra": "iterations: 12318\ncpu: 56804.08345510628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51618.000957573495,
            "unit": "ns/iter",
            "extra": "iterations: 13576\ncpu: 51616.3597525047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19585.686519848066,
            "unit": "ns/iter",
            "extra": "iterations: 35645\ncpu: 19585.06382381847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94824.74830669697,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 94821.6743429955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77962.03784505927,
            "unit": "ns/iter",
            "extra": "iterations: 8984\ncpu: 77959.71727515661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78831.95726689164,
            "unit": "ns/iter",
            "extra": "iterations: 8869\ncpu: 78827.65813507739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77330.80170222252,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 77328.63932795379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 119248.81634043212,
            "unit": "ns/iter",
            "extra": "iterations: 5875\ncpu: 119243.30212765982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 478442.4032809539,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478412.30348598876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 389782.75810058974,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 389757.6536312852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 392482.2497188232,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 392467.15410574066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 387541.3516361081,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 387537.3821408783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 247786.4764268003,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 247780.25522864022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 382033.63621441624,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 382019.63894967147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20178.108507519915,
            "unit": "ns/iter",
            "extra": "iterations: 34781\ncpu: 20177.493459072473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 97271.91350825768,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 97271.70623351313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81391.74682658639,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 81388.51752649488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82126.53040620146,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 82121.83611176228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81144.72043508313,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 81140.2337421892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 120617.13650465681,
            "unit": "ns/iter",
            "extra": "iterations: 5802\ncpu: 120614.23647018235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 478976.75137358025,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 478963.6675824162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 389637.72732330376,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 389619.47690595774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 391753.49271297944,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 391741.5358744387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 390023.74680024985,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 390008.45854201633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255126.4667397673,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 255113.99853800843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 384818.2562120343,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 384808.72446162015 ns\nthreads: 1"
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
        "date": 1702492230301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6634.18312224362,
            "unit": "ns/iter",
            "extra": "iterations: 105405\ncpu: 6633.961387030977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56317.83817969275,
            "unit": "ns/iter",
            "extra": "iterations: 14547\ncpu: 56315.618340551315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89033.66797521681,
            "unit": "ns/iter",
            "extra": "iterations: 9680\ncpu: 89030.37190082649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 129009.45312735274,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 129010.18449077538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 169991.48418779415,
            "unit": "ns/iter",
            "extra": "iterations: 5091\ncpu: 169990.06089176986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 210020.32322252373,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 210018.4663916523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 250706.5005780359,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 250698.6705202312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 292369.46816354705,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 292371.1126005361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 333707.46036583773,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 333697.10365853633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5405.666360045888,
            "unit": "ns/iter",
            "extra": "iterations: 129367\ncpu: 5405.700062612578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4453.3139182284895,
            "unit": "ns/iter",
            "extra": "iterations: 156974\ncpu: 4453.30628002089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4398.279321791643,
            "unit": "ns/iter",
            "extra": "iterations: 159361\ncpu: 4398.0904989301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4423.288028342497,
            "unit": "ns/iter",
            "extra": "iterations: 158349\ncpu: 4423.033931379425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7044.583250451507,
            "unit": "ns/iter",
            "extra": "iterations: 98534\ncpu: 7044.308563541519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24538.872286542624,
            "unit": "ns/iter",
            "extra": "iterations: 33168\ncpu: 24538.096960926192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 117899.59361233952,
            "unit": "ns/iter",
            "extra": "iterations: 7264\ncpu: 117897.21916299583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90378.70273683486,
            "unit": "ns/iter",
            "extra": "iterations: 9500\ncpu: 90375.85263157898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90523.91803104535,
            "unit": "ns/iter",
            "extra": "iterations: 9406\ncpu: 90519.37061450152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 85941.09432818156,
            "unit": "ns/iter",
            "extra": "iterations: 9891\ncpu: 85937.3571934083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 179852.26238232187,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 179843.65534179253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1592933.2439863489,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1592877.6632302352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1238326.5147058468,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1238250.4010695168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1248353.4771505336,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1248296.9086021506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1221262.5913271913,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 1221214.5860709597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 700615.4777358255,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 700574.3396226409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1243312.7020725643,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1243247.6683937835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29543.667422032275,
            "unit": "ns/iter",
            "extra": "iterations: 27801\ncpu: 29542.106399050466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 153091.52826162564,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 153085.81585495913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 119333.26355839345,
            "unit": "ns/iter",
            "extra": "iterations: 7228\ncpu: 119328.41726618669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119068.05766836766,
            "unit": "ns/iter",
            "extra": "iterations: 7231\ncpu: 119062.38417922841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 113328.07355470513,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 113322.95277153065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 198655.99452554842,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 198645.41514598465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1622972.3588849923,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1622900.5226480814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1276624.1868132385,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1276565.9340659387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1271296.4344262932,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1271245.9016393425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1244493.7576974237,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1244462.784471224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 725712.2638563162,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 725685.5581576858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1230738.4066225074,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1230714.039735102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5973594.839743485,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5973546.794871791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2719882.825072714,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2719882.7988338205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23055.162852536643,
            "unit": "ns/iter",
            "extra": "iterations: 35351\ncpu: 23054.776385392237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 129447.78433429054,
            "unit": "ns/iter",
            "extra": "iterations: 6677\ncpu: 129444.69072937014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93681.94626833464,
            "unit": "ns/iter",
            "extra": "iterations: 9138\ncpu: 93681.04618078325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93523.86323754847,
            "unit": "ns/iter",
            "extra": "iterations: 9118\ncpu: 93524.39131388534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 85820.97905758965,
            "unit": "ns/iter",
            "extra": "iterations: 9932\ncpu: 85819.9657672171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 171142.425896748,
            "unit": "ns/iter",
            "extra": "iterations: 5074\ncpu: 171136.7363027202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1594636.535042794,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1594593.6752136678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1247533.1537431926,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1247498.3957219329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1231952.055702936,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1231940.318302386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1224192.796320633,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 1224199.4743758251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 708155.3277693514,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 708132.3975720833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1206800.4474708517,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 1206715.3047989607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2619.7910393180646,
            "unit": "ns/iter",
            "extra": "iterations: 267993\ncpu: 2619.6971562690137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16726.466193616197,
            "unit": "ns/iter",
            "extra": "iterations: 41856\ncpu: 16725.55667048932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13124.032812704518,
            "unit": "ns/iter",
            "extra": "iterations: 53333\ncpu: 13123.707648172782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13250.680246751446,
            "unit": "ns/iter",
            "extra": "iterations: 52847\ncpu: 13250.33019849761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10059.063303717441,
            "unit": "ns/iter",
            "extra": "iterations: 69443\ncpu: 10058.8698644932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 60936.9120592081,
            "unit": "ns/iter",
            "extra": "iterations: 11485\ncpu: 60933.016978668005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111230.72475751732,
            "unit": "ns/iter",
            "extra": "iterations: 6289\ncpu: 111228.55779933221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27236.76394782763,
            "unit": "ns/iter",
            "extra": "iterations: 25685\ncpu: 27237.05275452591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 26997.161875360594,
            "unit": "ns/iter",
            "extra": "iterations: 25915\ncpu: 26997.34902566088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27103.446047337948,
            "unit": "ns/iter",
            "extra": "iterations: 25856\ncpu: 27102.664758663377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55456.08047619168,
            "unit": "ns/iter",
            "extra": "iterations: 12600\ncpu: 55454.44444444449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50800.49346595665,
            "unit": "ns/iter",
            "extra": "iterations: 13774\ncpu: 50799.82575867558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19856.45059501928,
            "unit": "ns/iter",
            "extra": "iterations: 35209\ncpu: 19856.562242608434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95315.2856754672,
            "unit": "ns/iter",
            "extra": "iterations: 7358\ncpu: 95313.61783093175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78137.76524356025,
            "unit": "ns/iter",
            "extra": "iterations: 8971\ncpu: 78136.71831456892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78163.6879480222,
            "unit": "ns/iter",
            "extra": "iterations: 8928\ncpu: 78162.4439964154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 75788.5880882435,
            "unit": "ns/iter",
            "extra": "iterations: 9201\ncpu: 75788.46864471225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 118090.4161543711,
            "unit": "ns/iter",
            "extra": "iterations: 5856\ncpu: 118091.10314207645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 466587.4629753131,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466582.32154769823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 386857.21420639515,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 386855.49389566836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 381803.0234844691,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 381798.798470784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 383138.62650600914,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 383137.4041621036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 249407.20361829118,
            "unit": "ns/iter",
            "extra": "iterations: 2819\ncpu: 249403.93756651308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 376023.40322582825,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 376020.4838709658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19701.07591903695,
            "unit": "ns/iter",
            "extra": "iterations: 35472\ncpu: 19701.1924898513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 96519.19446367546,
            "unit": "ns/iter",
            "extra": "iterations: 7225\ncpu: 96518.13148788961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81147.05033634165,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 81146.61331477562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 81818.90952547651,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81817.22047335857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81378.06742617254,
            "unit": "ns/iter",
            "extra": "iterations: 8602\ncpu: 81377.4238549179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122531.73966148398,
            "unit": "ns/iter",
            "extra": "iterations: 5731\ncpu: 122531.51282498678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 472922.59527027357,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472925.27027027163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 383889.0755750628,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 383881.8181818134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 389146.3879933304,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 389148.63813230104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 385057.2311916352,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 385055.84843492246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257459.67083486935,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 257458.44060316271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 382590.1749862919,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 382585.95721339 ns\nthreads: 1"
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
        "date": 1702503303770,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6604.314692650506,
            "unit": "ns/iter",
            "extra": "iterations: 105808\ncpu: 6604.197225162558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56083.32952825988,
            "unit": "ns/iter",
            "extra": "iterations: 14542\ncpu: 56079.94773758766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 88494.23771168721,
            "unit": "ns/iter",
            "extra": "iterations: 9684\ncpu: 88488.94052044608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 129241.51065107614,
            "unit": "ns/iter",
            "extra": "iterations: 6666\ncpu: 129234.77347734768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 169714.9027397268,
            "unit": "ns/iter",
            "extra": "iterations: 5110\ncpu: 169703.9921722113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 209813.65349178037,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 209789.6944713869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 249291.44236310577,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 249274.35158501452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 291173.85166667495,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 291142.2666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 329109.6465451874,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 329090.3948367504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5492.875788813352,
            "unit": "ns/iter",
            "extra": "iterations: 127565\ncpu: 5492.34899854976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4480.295741355473,
            "unit": "ns/iter",
            "extra": "iterations: 156106\ncpu: 4480.03856354016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4469.559045675598,
            "unit": "ns/iter",
            "extra": "iterations: 156760\ncpu: 4469.298928298033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4485.920285815132,
            "unit": "ns/iter",
            "extra": "iterations: 156045\ncpu: 4485.636835528217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7061.675212035398,
            "unit": "ns/iter",
            "extra": "iterations: 99040\ncpu: 7061.424676898209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23719.963738614122,
            "unit": "ns/iter",
            "extra": "iterations: 34141\ncpu: 23717.54195834919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 121544.30975333587,
            "unit": "ns/iter",
            "extra": "iterations: 7054\ncpu: 121535.93705698884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 93247.55808879242,
            "unit": "ns/iter",
            "extra": "iterations: 9167\ncpu: 93241.90029453469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94302.37098194683,
            "unit": "ns/iter",
            "extra": "iterations: 9084\ncpu: 94296.87362395437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90418.87838695834,
            "unit": "ns/iter",
            "extra": "iterations: 9448\ncpu: 90412.8598645215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182612.98509315145,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 182592.7536231885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1587913.7366610188,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1587804.3029259888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1243750.0788769831,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1243659.7593582885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1243647.7965193482,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1243580.8567603712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1228213.1245033059,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1228110.198675497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704713.9992389984,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 704662.3287671236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1207745.5513654957,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1207675.9427828346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30198.623717592844,
            "unit": "ns/iter",
            "extra": "iterations: 27195\ncpu: 30196.878102592356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155805.47421177404,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 155794.93347913263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121792.20639616907,
            "unit": "ns/iter",
            "extra": "iterations: 7098\ncpu: 121782.12172442951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120840.56698127657,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 120834.5964220313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116445.4922181603,
            "unit": "ns/iter",
            "extra": "iterations: 7389\ncpu: 116436.73027473291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 198965.11488190448,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 198951.8229763807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1623001.881326501,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1622863.3507853483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1273133.1381668579,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1273041.039671685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1281044.5424657413,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1280913.8356164352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1258417.9715832628,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1258340.1894452013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 736342.8725257389,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 736283.6896278687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1234412.409814319,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1234382.891246683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6081248.422077947,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6080495.454545445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2810599.8798799454,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2810421.6216216395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22567.697098859106,
            "unit": "ns/iter",
            "extra": "iterations: 36365\ncpu: 22566.57500343736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 131713.06793145195,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 131702.99877601024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97360.53841775151,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 97349.07228229984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96089.8591992827,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 96083.1983805663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 89690.69211329431,
            "unit": "ns/iter",
            "extra": "iterations: 9497\ncpu: 89684.78466884281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 172970.0090162221,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 172966.57984371897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1603056.1219930784,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1602970.9621993173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1251495.5470431573,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1251451.3440860205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1234204.2320955351,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1234110.344827585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1228385.853561916,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1228364.64379947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 713850.0635528092,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 713811.6385911164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1213197.3181225643,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 1213178.0964797987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2593.178708812163,
            "unit": "ns/iter",
            "extra": "iterations: 270619\ncpu: 2593.0817865707754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16020.291058247616,
            "unit": "ns/iter",
            "extra": "iterations: 43761\ncpu: 16020.225771805875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13804.885105292477,
            "unit": "ns/iter",
            "extra": "iterations: 50716\ncpu: 13803.355942897744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12667.467869158972,
            "unit": "ns/iter",
            "extra": "iterations: 53500\ncpu: 12667.21682242988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10173.483817102262,
            "unit": "ns/iter",
            "extra": "iterations: 68869\ncpu: 10173.143213927848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62868.38248764846,
            "unit": "ns/iter",
            "extra": "iterations: 11135\ncpu: 62868.43286933105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111616.66285169938,
            "unit": "ns/iter",
            "extra": "iterations: 6291\ncpu: 111611.95358448663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27459.706906697655,
            "unit": "ns/iter",
            "extra": "iterations: 25497\ncpu: 27457.99113621209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27000.303340016482,
            "unit": "ns/iter",
            "extra": "iterations: 25928\ncpu: 26999.745448935417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26962.259635044957,
            "unit": "ns/iter",
            "extra": "iterations: 25921\ncpu: 26961.722155780975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55535.3583842559,
            "unit": "ns/iter",
            "extra": "iterations: 12601\ncpu: 55535.07658122391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51173.914932456224,
            "unit": "ns/iter",
            "extra": "iterations: 13695\ncpu: 51171.00401606405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19556.539297586998,
            "unit": "ns/iter",
            "extra": "iterations: 35791\ncpu: 19555.79056187309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94468.84750813218,
            "unit": "ns/iter",
            "extra": "iterations: 7384\ncpu: 94465.5471289274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77363.14441988786,
            "unit": "ns/iter",
            "extra": "iterations: 9050\ncpu: 77361.35911602309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 77990.39823896656,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 77987.13776192597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 76573.4945235558,
            "unit": "ns/iter",
            "extra": "iterations: 9130\ncpu: 76564.65498357126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 118852.26951198676,
            "unit": "ns/iter",
            "extra": "iterations: 5881\ncpu: 118849.34534943089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 472016.37179482705,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471974.9662618018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 390812.6887897511,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 390803.68098159414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 388814.32295720384,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 388793.607559755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 381380.6926430513,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 381373.8964577624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 248904.14067496048,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 248896.41207815424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 379581.3000543049,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 379579.9240368975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19726.639187744393,
            "unit": "ns/iter",
            "extra": "iterations: 35506\ncpu: 19725.888582211366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 98944.88957922126,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 98940.82180175178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 82081.10805455035,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 82075.66149900849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 81516.75866494933,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 81516.50134204766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81644.2057930337,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 81637.73651016086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 121832.487206258,
            "unit": "ns/iter",
            "extra": "iterations: 5745\ncpu: 121827.91993037453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 472323.5639810535,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 472299.6614759607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 384123.2900219444,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 384121.87500000466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 406752.8096035336,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 406721.8313791214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 383220.5358511057,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 383214.3404488251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 253916.87613182495,
            "unit": "ns/iter",
            "extra": "iterations: 2761\ncpu: 253896.70409271886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 380801.5412342783,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 380799.4538503525 ns\nthreads: 1"
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
        "date": 1705574965247,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6707.590357180614,
            "unit": "ns/iter",
            "extra": "iterations: 104513\ncpu: 6707.32157722006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57415.57385722444,
            "unit": "ns/iter",
            "extra": "iterations: 14176\ncpu: 57412.24604966139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92056.02195713966,
            "unit": "ns/iter",
            "extra": "iterations: 9473\ncpu: 92049.55135648683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 131988.99341196538,
            "unit": "ns/iter",
            "extra": "iterations: 6527\ncpu: 131978.21357438326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173672.58174523548,
            "unit": "ns/iter",
            "extra": "iterations: 4985\ncpu: 173663.24974924777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 214400.42092215543,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 214387.80366881512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 255275.15856173012,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 255266.69613910973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 296348.09917920566,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 296326.8809849519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 337538.693893396,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 337521.5869311551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5472.6548186461505,
            "unit": "ns/iter",
            "extra": "iterations: 127982\ncpu: 5472.274226063044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4490.417759767959,
            "unit": "ns/iter",
            "extra": "iterations: 156207\ncpu: 4490.293008635974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4466.047836049009,
            "unit": "ns/iter",
            "extra": "iterations: 156242\ncpu: 4465.813289640427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4467.832045075375,
            "unit": "ns/iter",
            "extra": "iterations: 155119\ncpu: 4467.485607823676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7101.5343540070435,
            "unit": "ns/iter",
            "extra": "iterations: 98693\ncpu: 7101.159150091713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23753.8254905999,
            "unit": "ns/iter",
            "extra": "iterations: 34193\ncpu: 23753.51972625978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 120164.66586978143,
            "unit": "ns/iter",
            "extra": "iterations: 7111\ncpu: 120156.61650963315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 93095.88034934984,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 93092.21615720518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 92661.36874117484,
            "unit": "ns/iter",
            "extra": "iterations: 9207\ncpu: 92657.27164114283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87798.76222474384,
            "unit": "ns/iter",
            "extra": "iterations: 9673\ncpu: 87794.86198697386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 178650.10215271305,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 178640.1502843219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1601139.2915950755,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1601036.0205831893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1261666.257142852,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1261612.1088435326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1243552.8875502895,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1243524.8995983922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1235588.6218376227,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1235530.359520641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 700744.6454544854,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 700711.5909090897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1217612.7112860228,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 1217535.1706036779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29969.458546008205,
            "unit": "ns/iter",
            "extra": "iterations: 27428\ncpu: 29969.162899227158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 154439.7845383024,
            "unit": "ns/iter",
            "extra": "iterations: 5588\ncpu: 154432.87401574815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120420.76291113388,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 120417.102869139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119507.57603111085,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 119503.65227051807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 114437.52963848718,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 114432.5093035619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 209018.02771751545,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 209007.78500843604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1632935.567901184,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1632890.6525573183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1305428.2987376307,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1305357.363253855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1307942.2510460594,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1307900.697350065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1258101.116373475,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1258030.0405954046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 727599.5810493976,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 727567.8151918587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1243295.3199465035,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1243226.1044176733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6048787.129032374,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6048410.967741939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2815347.798798723,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2815330.330330335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22497.13756381385,
            "unit": "ns/iter",
            "extra": "iterations: 36434\ncpu: 22496.76950101553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 129349.25346176323,
            "unit": "ns/iter",
            "extra": "iterations: 6644\ncpu: 129349.4280553885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94867.26594570503,
            "unit": "ns/iter",
            "extra": "iterations: 9062\ncpu: 94865.16221584643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94352.76117931416,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 94349.82463831674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 86277.59857216493,
            "unit": "ns/iter",
            "extra": "iterations: 9805\ncpu: 86275.82865884737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 170901.87984189086,
            "unit": "ns/iter",
            "extra": "iterations: 5060\ncpu: 170899.70355731255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1616415.778546824,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1616385.2941176454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1288529.2427983715,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1288508.504801095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1245237.0346666914,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1245221.0666666587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1245476.1054739547,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1245478.37116155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 718405.9552123455,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 718382.3938223934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1229821.6723684464,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1229795.1315789502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2602.686195581754,
            "unit": "ns/iter",
            "extra": "iterations: 268798\ncpu: 2602.599721724123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17558.95180408265,
            "unit": "ns/iter",
            "extra": "iterations: 38302\ncpu: 17559.015195028904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13172.486223508977,
            "unit": "ns/iter",
            "extra": "iterations: 53134\ncpu: 13172.168479692782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12800.414231142146,
            "unit": "ns/iter",
            "extra": "iterations: 54711\ncpu: 12800.106011588248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10107.989294536905,
            "unit": "ns/iter",
            "extra": "iterations: 69217\ncpu: 10107.901238135142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62981.800753226016,
            "unit": "ns/iter",
            "extra": "iterations: 11152\ncpu: 62980.81958393131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111694.39703302711,
            "unit": "ns/iter",
            "extra": "iterations: 6269\ncpu: 111694.5286329555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27865.350309128204,
            "unit": "ns/iter",
            "extra": "iterations: 25232\ncpu: 27864.8898224475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27333.402640524797,
            "unit": "ns/iter",
            "extra": "iterations: 25601\ncpu: 27332.951837818757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27446.66229112484,
            "unit": "ns/iter",
            "extra": "iterations: 25673\ncpu: 27445.96268453242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56174.68907764334,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 56174.7014985174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51633.444576166024,
            "unit": "ns/iter",
            "extra": "iterations: 13496\ncpu: 51633.491404860935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20024.2776335675,
            "unit": "ns/iter",
            "extra": "iterations: 35057\ncpu: 20023.698548078784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95470.46300095037,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 95469.6484749007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78091.36768801916,
            "unit": "ns/iter",
            "extra": "iterations: 8975\ncpu: 78089.99442896938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78557.44393102071,
            "unit": "ns/iter",
            "extra": "iterations: 8873\ncpu: 78557.54536233435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77439.96791085968,
            "unit": "ns/iter",
            "extra": "iterations: 8975\ncpu: 77439.24233983234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 119064.41306566542,
            "unit": "ns/iter",
            "extra": "iterations: 5878\ncpu: 119060.22456617978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 481233.56383711606,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 481233.81642512383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 391989.6771124909,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 391990.03917179647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 391290.14941243303,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 391278.90318970336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 393890.8394160743,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 393880.17967434187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 252351.37279595464,
            "unit": "ns/iter",
            "extra": "iterations: 2779\ncpu: 252342.6772220228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 384843.1441936937,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 384843.6433681886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20304.26428240887,
            "unit": "ns/iter",
            "extra": "iterations: 34588\ncpu: 20303.642881924225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 97496.80317371902,
            "unit": "ns/iter",
            "extra": "iterations: 7184\ncpu: 97494.94710467642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81815.76921279891,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 81813.67671104812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82172.30381231815,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 82171.80058650921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81025.79524913078,
            "unit": "ns/iter",
            "extra": "iterations: 8630\ncpu: 81026.9872537652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 121642.01300954456,
            "unit": "ns/iter",
            "extra": "iterations: 5765\ncpu: 121638.71639202036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 481536.441075128,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 481513.71467952896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395532.3518518136,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 395511.56004489126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 392573.1408529558,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 392569.07968574885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 389490.27282848686,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 389478.61915367475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258557.83770796107,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 258555.4528650654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 387402.2430632198,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 387402.9411764733 ns\nthreads: 1"
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
        "date": 1705773025291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6694.920346693973,
            "unit": "ns/iter",
            "extra": "iterations: 104415\ncpu: 6694.763204520424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56309.90831380523,
            "unit": "ns/iter",
            "extra": "iterations: 14506\ncpu: 56309.07900179234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89495.33901830684,
            "unit": "ns/iter",
            "extra": "iterations: 9616\ncpu: 89494.90432612314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130038.6090168938,
            "unit": "ns/iter",
            "extra": "iterations: 6632\ncpu: 130036.80639324494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 170882.4694400781,
            "unit": "ns/iter",
            "extra": "iterations: 5072\ncpu: 170879.0023659305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 211952.3249938656,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 211949.47265145948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 252355.70995921586,
            "unit": "ns/iter",
            "extra": "iterations: 3434\ncpu: 252353.14502038414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 293057.8462576012,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 293055.46190155094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 331492.50555768627,
            "unit": "ns/iter",
            "extra": "iterations: 2609\ncpu: 331486.7382138751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5535.2090460208165,
            "unit": "ns/iter",
            "extra": "iterations: 126575\ncpu: 5535.17045230101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4499.971801451911,
            "unit": "ns/iter",
            "extra": "iterations: 155469\ncpu: 4500.009648225692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4483.432769669388,
            "unit": "ns/iter",
            "extra": "iterations: 156358\ncpu: 4483.352946443414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4462.370596249478,
            "unit": "ns/iter",
            "extra": "iterations: 155606\ncpu: 4462.406333945991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7056.871992506361,
            "unit": "ns/iter",
            "extra": "iterations: 98213\ncpu: 7056.696160386098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24783.86283307157,
            "unit": "ns/iter",
            "extra": "iterations: 32763\ncpu: 24783.896468577383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 121805.09472935155,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 121800.37037037016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94266.89121658322,
            "unit": "ns/iter",
            "extra": "iterations: 9165\ncpu: 94265.71740316432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94261.14323666198,
            "unit": "ns/iter",
            "extra": "iterations: 9034\ncpu: 94259.57493911899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91438.52814319561,
            "unit": "ns/iter",
            "extra": "iterations: 9274\ncpu: 91439.29264610741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 189639.54781860998,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 189632.30174081208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1596085.358003404,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1596048.1927710832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1254273.7385444825,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1254228.1671158993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1257735.070270262,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1257705.5405405376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1238641.6797297087,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1238606.6216216187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 716627.3562066389,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 716598.3037779502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1216508.1832460996,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1216452.617801047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31034.477703212917,
            "unit": "ns/iter",
            "extra": "iterations: 25183\ncpu: 31034.213556764502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155281.85373293996,
            "unit": "ns/iter",
            "extra": "iterations: 5572\ncpu: 155279.0380473792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121876.95944413217,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 121878.04878048807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121498.91772689686,
            "unit": "ns/iter",
            "extra": "iterations: 7074\ncpu: 121497.04551880115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118717.1218971013,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 118718.1528220776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 206560.50239348513,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 206555.2656773585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1638057.653169181,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1638053.345070427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1278864.9696969425,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1278840.7713498685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1279193.8734524134,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1279195.323246216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1254585.9070079962,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1254527.2237196772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 744220.2279293727,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 744169.3418940635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1245274.0013387694,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1245236.278447121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6120505.058823618,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6120183.660130686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2786157.0597013864,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2786023.8805970144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23472.307483576533,
            "unit": "ns/iter",
            "extra": "iterations: 35010\ncpu: 23471.313910311233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130936.36802300414,
            "unit": "ns/iter",
            "extra": "iterations: 6611\ncpu: 130932.89971260108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97801.9510004527,
            "unit": "ns/iter",
            "extra": "iterations: 8796\ncpu: 97798.24920418435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94959.13042518226,
            "unit": "ns/iter",
            "extra": "iterations: 9055\ncpu: 94959.23799006068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90154.34964523879,
            "unit": "ns/iter",
            "extra": "iterations: 9584\ncpu: 90154.43447412322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 181732.66078925403,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 181734.48782535718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1602468.6174957983,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1602405.488850766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1264673.313008202,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1264620.1897019013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1249340.8326640243,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1249279.785809903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1240674.8042610479,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1240653.3954726974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 720403.7074304089,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 720375.6965944272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1218424.4569191372,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1218394.647519577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2585.0876240826406,
            "unit": "ns/iter",
            "extra": "iterations: 270485\ncpu: 2585.0061925799832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16969.25712205742,
            "unit": "ns/iter",
            "extra": "iterations: 41210\ncpu: 16968.602280999727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13265.338341447241,
            "unit": "ns/iter",
            "extra": "iterations: 52781\ncpu: 13265.148443568774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13717.05316336599,
            "unit": "ns/iter",
            "extra": "iterations: 51069\ncpu: 13713.301611545061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10139.655671329305,
            "unit": "ns/iter",
            "extra": "iterations: 68908\ncpu: 10139.160910199089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64077.49168645717,
            "unit": "ns/iter",
            "extra": "iterations: 10946\ncpu: 64075.068518179854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112063.23918615474,
            "unit": "ns/iter",
            "extra": "iterations: 6242\ncpu: 112059.25985261149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27244.155656706404,
            "unit": "ns/iter",
            "extra": "iterations: 25704\ncpu: 27242.615935263002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27095.274621430774,
            "unit": "ns/iter",
            "extra": "iterations: 25821\ncpu: 27094.306959451606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27197.093996504304,
            "unit": "ns/iter",
            "extra": "iterations: 25735\ncpu: 27195.993782786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56041.62780304779,
            "unit": "ns/iter",
            "extra": "iterations: 12531\ncpu: 56042.175404995476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51078.54807902434,
            "unit": "ns/iter",
            "extra": "iterations: 13717\ncpu: 51076.03703433729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19528.966570943336,
            "unit": "ns/iter",
            "extra": "iterations: 35867\ncpu: 19527.981152591496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94558.94954004088,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 94554.74837662371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78226.1897321414,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 78223.47098214325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78865.6233108081,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 78866.38513513506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77211.68404772588,
            "unit": "ns/iter",
            "extra": "iterations: 9052\ncpu: 77210.8484312859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121208.28343726869,
            "unit": "ns/iter",
            "extra": "iterations: 5772\ncpu: 121202.44282744463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 472997.55902308435,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 472992.6729986472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 390591.72737425193,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 390595.19553072535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 387842.28658540867,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 387820.45454545354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 389509.9916481251,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 389494.59910913213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253180.01919593822,
            "unit": "ns/iter",
            "extra": "iterations: 2761\ncpu: 253169.28649039788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 381470.1105032255,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 381450.3282275684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20189.402421096343,
            "unit": "ns/iter",
            "extra": "iterations: 34695\ncpu: 20188.133736849726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 100856.28616807381,
            "unit": "ns/iter",
            "extra": "iterations: 6926\ncpu: 100851.55934161023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81886.65754385627,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 81885.54385964917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82506.05366200022,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 82502.60643943794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 82401.01696512602,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 82396.73656927382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122464.38146135946,
            "unit": "ns/iter",
            "extra": "iterations: 5707\ncpu: 122459.96145085074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 477874.4890710898,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 477855.46448087576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 391876.0078607865,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 391861.53846153634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 391950.3776655705,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 391945.39842872665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 389048.51551041025,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 389048.9565707844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256610.84668865593,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 256605.4518843759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 387976.3309312904,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 387979.4900221753 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}