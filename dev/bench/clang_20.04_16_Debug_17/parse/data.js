window.BENCHMARK_DATA = {
  "lastUpdate": 1702492230812,
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
      }
    ]
  }
}