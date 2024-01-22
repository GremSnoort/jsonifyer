window.BENCHMARK_DATA = {
  "lastUpdate": 1705959798864,
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
        "date": 1705774818141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6652.619959496053,
            "unit": "ns/iter",
            "extra": "iterations: 105173\ncpu: 6652.275774200602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56745.80230379335,
            "unit": "ns/iter",
            "extra": "iterations: 14411\ncpu: 56743.980292831846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89265.75233935879,
            "unit": "ns/iter",
            "extra": "iterations: 9618\ncpu: 89263.13162819712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130114.48639662142,
            "unit": "ns/iter",
            "extra": "iterations: 6616\ncpu: 130108.53990326484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 170328.99449685225,
            "unit": "ns/iter",
            "extra": "iterations: 5088\ncpu: 170319.96855345916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 210243.12521275377,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 210232.84707026504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 251162.6738060813,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 251158.4081041969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 291824.1376177517,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 291797.67833108996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 331446.81188894104,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 331429.68322252604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5415.716145169982,
            "unit": "ns/iter",
            "extra": "iterations: 129531\ncpu: 5415.503624614958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5020.277180000221,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5020.060000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4417.191810357961,
            "unit": "ns/iter",
            "extra": "iterations: 159079\ncpu: 4416.943782648873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4485.770574519247,
            "unit": "ns/iter",
            "extra": "iterations: 156966\ncpu: 4485.705184562265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7109.132836198933,
            "unit": "ns/iter",
            "extra": "iterations: 98565\ncpu: 7108.536498757162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24751.916215723242,
            "unit": "ns/iter",
            "extra": "iterations: 32894\ncpu: 24751.20386696666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 118420.63965825777,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 118412.0435441643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91434.57173493378,
            "unit": "ns/iter",
            "extra": "iterations: 9326\ncpu: 91429.54106798169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 89792.1450365547,
            "unit": "ns/iter",
            "extra": "iterations: 9439\ncpu: 89787.51986439222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 85260.6695748141,
            "unit": "ns/iter",
            "extra": "iterations: 9972\ncpu: 85257.57119935835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 181626.3576431923,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 181619.88051091915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1572647.3542372333,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1572561.8644067808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1250474.3637659932,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1249605.4208273885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1237022.689333268,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1236967.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1220320.9368420318,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1220248.1578947376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 702190.267627045,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 702140.864291129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1198228.0919690293,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1198148.1865285013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30430.00085578255,
            "unit": "ns/iter",
            "extra": "iterations: 26876\ncpu: 30428.400803691133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 153110.18310858394,
            "unit": "ns/iter",
            "extra": "iterations: 5636\ncpu: 153097.7111426544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 117084.44669842154,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 117076.70524166116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 117008.90301459905,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 117002.15523121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 113085.08629105739,
            "unit": "ns/iter",
            "extra": "iterations: 7579\ncpu: 113079.15292254928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 196216.04356751504,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 196202.53193430617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1595180.5917667765,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1595041.852487135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1269385.156889433,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1269378.171896316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1270633.9329685057,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1270626.8125854968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1238127.8934753332,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1238111.9840213084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 727290.6397807936,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 727251.6053249825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1229705.0976253906,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1229671.7678100292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6048160.487012694,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6047873.376623389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2771029.2729970007,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2770857.566765582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23059.564967288617,
            "unit": "ns/iter",
            "extra": "iterations: 35464\ncpu: 23058.222422738716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121823.23551084589,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 121817.31614000247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93596.95694566655,
            "unit": "ns/iter",
            "extra": "iterations: 9128\ncpu: 93593.44872918479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93289.39591440072,
            "unit": "ns/iter",
            "extra": "iterations: 9252\ncpu: 93280.16645049653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 85618.04606910133,
            "unit": "ns/iter",
            "extra": "iterations: 9985\ncpu: 85612.90936404568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 173409.2162324689,
            "unit": "ns/iter",
            "extra": "iterations: 4990\ncpu: 173404.22845691306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1576471.9341216416,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1576446.2837837879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1241282.8426666541,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1241232.8000000059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1229177.5486843155,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1229129.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1229422.45899466,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1229408.4656084666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 709918.5564885471,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 709899.9236641265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1204114.5956071855,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 1204086.6925064565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2569.2352908694907,
            "unit": "ns/iter",
            "extra": "iterations: 271617\ncpu: 2569.1654056999328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16847.185830514056,
            "unit": "ns/iter",
            "extra": "iterations: 41667\ncpu: 16847.123623011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13807.331932608584,
            "unit": "ns/iter",
            "extra": "iterations: 50688\ncpu: 13807.09438131303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12387.076143936347,
            "unit": "ns/iter",
            "extra": "iterations: 56275\ncpu: 12386.500222123515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10229.553410947678,
            "unit": "ns/iter",
            "extra": "iterations: 68544\ncpu: 10229.083508403372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63633.217757258826,
            "unit": "ns/iter",
            "extra": "iterations: 11049\ncpu: 63631.867137297544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110219.69723184273,
            "unit": "ns/iter",
            "extra": "iterations: 6358\ncpu: 110219.2985215475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27460.477894156957,
            "unit": "ns/iter",
            "extra": "iterations: 25491\ncpu: 27460.005492134325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27115.028460794754,
            "unit": "ns/iter",
            "extra": "iterations: 25825\ncpu: 27114.30784123904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27219.535982937785,
            "unit": "ns/iter",
            "extra": "iterations: 25790\ncpu: 27219.15471112838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55014.78578154242,
            "unit": "ns/iter",
            "extra": "iterations: 12744\ncpu: 55013.755492780816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50853.76266376027,
            "unit": "ns/iter",
            "extra": "iterations: 13740\ncpu: 50852.8311499271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19992.74219752297,
            "unit": "ns/iter",
            "extra": "iterations: 35085\ncpu: 19991.84836824853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 97011.12290889016,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 97009.5396101193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 79198.65213441552,
            "unit": "ns/iter",
            "extra": "iterations: 8808\ncpu: 79196.15122615796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78980.17878103735,
            "unit": "ns/iter",
            "extra": "iterations: 8860\ncpu: 78979.04063205363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 78454.66438203055,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 78451.57303370726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 118150.88246205993,
            "unit": "ns/iter",
            "extra": "iterations: 5930\ncpu: 118148.2124789199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 472171.1618145084,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 472140.0135409679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 386688.9922651554,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 386663.7569060791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 387141.43235782697,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 387118.16675869626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 385166.58567487233,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 385131.5151515123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251478.32218625103,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 251473.46278317302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 380474.17166208033,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 380473.4604904658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20600.82390548611,
            "unit": "ns/iter",
            "extra": "iterations: 33942\ncpu: 20600.75128159805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 100139.82415223343,
            "unit": "ns/iter",
            "extra": "iterations: 6989\ncpu: 100135.67033910303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 82403.28140822242,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82401.5188979158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82957.05392272826,
            "unit": "ns/iter",
            "extra": "iterations: 8438\ncpu: 82955.13154776007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83317.06745041149,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 83316.75572972244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123058.4598064998,
            "unit": "ns/iter",
            "extra": "iterations: 5685\ncpu: 123055.83113456357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 476914.3130969022,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 476904.3656207413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 383459.9287280956,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 383443.0921052629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 389856.6791086526,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 389838.3286908052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 386297.77415789827,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 386264.0530093865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260887.86187642737,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 260872.48696947243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 384618.6287920372,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 384594.6497517911 ns\nthreads: 1"
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
        "date": 1705777742170,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6766.725484515076,
            "unit": "ns/iter",
            "extra": "iterations: 103557\ncpu: 6766.30744420947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57883.44862262076,
            "unit": "ns/iter",
            "extra": "iterations: 14121\ncpu: 57881.686849373255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91821.01143895385,
            "unit": "ns/iter",
            "extra": "iterations: 9354\ncpu: 91817.17981612147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132955.31166022556,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 132951.52123552133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175882.03244004658,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 175878.74269595003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216437.60766147487,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 216432.69904857274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258545.1423476756,
            "unit": "ns/iter",
            "extra": "iterations: 3365\ncpu: 258545.02228826174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299620.66954123176,
            "unit": "ns/iter",
            "extra": "iterations: 2899\ncpu: 299614.6257330116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 340239.3033751935,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 340222.9984301413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5568.506110327786,
            "unit": "ns/iter",
            "extra": "iterations: 125607\ncpu: 5568.260526881458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4507.392170878351,
            "unit": "ns/iter",
            "extra": "iterations: 155292\ncpu: 4507.107256008038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4501.497575256574,
            "unit": "ns/iter",
            "extra": "iterations: 156099\ncpu: 4501.301737999598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4496.249662382607,
            "unit": "ns/iter",
            "extra": "iterations: 154761\ncpu: 4496.094623322417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7283.48898747221,
            "unit": "ns/iter",
            "extra": "iterations: 96027\ncpu: 7283.252626865349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23816.77046346734,
            "unit": "ns/iter",
            "extra": "iterations: 34134\ncpu: 23815.573914572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 117684.76303122165,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 117680.30532251394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 92427.76995153209,
            "unit": "ns/iter",
            "extra": "iterations: 9285\ncpu: 92424.97576736668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93072.47690277139,
            "unit": "ns/iter",
            "extra": "iterations: 9092\ncpu: 93072.45930488325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89027.43612794884,
            "unit": "ns/iter",
            "extra": "iterations: 9566\ncpu: 89025.28747647908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182188.23935510518,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 182181.9966928485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1619742.558669067,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1619689.3169877438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1273793.7154697296,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1273785.0828729288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1275840.4116021611,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1275812.7071823198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1242006.207219329,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1241958.4224598925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 716865.6134779182,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 716823.5476374906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1228474.4082446434,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1228391.7553191513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30823.543402190535,
            "unit": "ns/iter",
            "extra": "iterations: 26577\ncpu: 30821.94378598035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 151996.2489832023,
            "unit": "ns/iter",
            "extra": "iterations: 5655\ncpu: 151984.95137046836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 119760.54745738217,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 119752.80587501747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119153.18064425205,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 119147.02860316573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115657.427336569,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 115651.37763371185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 197902.54526700935,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 197893.07815723147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1661745.290552542,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1661646.1675579336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1308521.6751054637,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1308522.362869199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1325902.0099431626,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1325821.7329545503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1267082.822404334,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1267057.3770491732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 741398.8244213671,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 741375.9776536333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1261097.9129252338,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1261071.1564625907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6051842.058441224,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6051617.53246756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2841574.1884497744,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2841459.270516725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22778.385903987848,
            "unit": "ns/iter",
            "extra": "iterations: 35996\ncpu: 22777.364151572536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 128049.52551476836,
            "unit": "ns/iter",
            "extra": "iterations: 6702\ncpu: 128044.83736198253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94337.53347257267,
            "unit": "ns/iter",
            "extra": "iterations: 9097\ncpu: 94333.17577223218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93798.02295082354,
            "unit": "ns/iter",
            "extra": "iterations: 9150\ncpu: 93792.99453551929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 87641.81905935844,
            "unit": "ns/iter",
            "extra": "iterations: 9738\ncpu: 87637.43068391865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 175022.07448526775,
            "unit": "ns/iter",
            "extra": "iterations: 4954\ncpu: 175016.43116673434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1636302.7742504792,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1636235.2733686052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1279411.9299450393,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1279358.3791208784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1269230.238744843,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1268397.407912684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1243556.715620797,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1243527.5033377833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 720514.102861573,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 720498.4532095892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1231768.7486773008,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1231734.1269841343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2581.2672573800523,
            "unit": "ns/iter",
            "extra": "iterations: 271536\ncpu: 2581.2669406634836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17437.360910884203,
            "unit": "ns/iter",
            "extra": "iterations: 40093\ncpu: 17436.6373182351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13436.853838789542,
            "unit": "ns/iter",
            "extra": "iterations: 52230\ncpu: 13436.2186482865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13966.871617985676,
            "unit": "ns/iter",
            "extra": "iterations: 50155\ncpu: 13966.507825740151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10288.55642978864,
            "unit": "ns/iter",
            "extra": "iterations: 67996\ncpu: 10288.203717865685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65903.09512196017,
            "unit": "ns/iter",
            "extra": "iterations: 10660\ncpu: 65901.42589118214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115096.2566802813,
            "unit": "ns/iter",
            "extra": "iterations: 6362\ncpu: 115091.41779314671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27863.496221463327,
            "unit": "ns/iter",
            "extra": "iterations: 25142\ncpu: 27862.74361625965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27640.227702032746,
            "unit": "ns/iter",
            "extra": "iterations: 25305\ncpu: 27639.48231574808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27838.809573030114,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 27838.876520633054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57070.73334421715,
            "unit": "ns/iter",
            "extra": "iterations: 12248\ncpu: 57070.13389941244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52435.742250242394,
            "unit": "ns/iter",
            "extra": "iterations: 13323\ncpu: 52434.72190947974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19553.993985676847,
            "unit": "ns/iter",
            "extra": "iterations: 35748\ncpu: 19553.865950542848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96220.16781008887,
            "unit": "ns/iter",
            "extra": "iterations: 7288\ncpu: 96216.28704720183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78818.4322769895,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 78818.58576745364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78789.48228790425,
            "unit": "ns/iter",
            "extra": "iterations: 8864\ncpu: 78784.66832129903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77378.69211167123,
            "unit": "ns/iter",
            "extra": "iterations: 9026\ncpu: 77374.54021715069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 120526.33195592239,
            "unit": "ns/iter",
            "extra": "iterations: 5808\ncpu: 120524.3629476565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 485342.964583345,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485317.2916666636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 404472.99942124885,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 404441.3773148093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 393521.02866779914,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 393486.84654299746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 397029.7878616139,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 397010.6636415159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 252043.8009342417,
            "unit": "ns/iter",
            "extra": "iterations: 2783\ncpu: 252034.06395975745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 390243.69046289654,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 390223.53597323305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20209.342569559445,
            "unit": "ns/iter",
            "extra": "iterations: 34574\ncpu: 20207.638688031413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 98581.00084925667,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 98574.05520169735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 82538.72982870806,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82534.19964560069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82531.01542265661,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 82529.70331999066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81842.83151983064,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 81840.18954018912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 121440.54972279708,
            "unit": "ns/iter",
            "extra": "iterations: 5772\ncpu: 121433.67983367934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 490018.49439775123,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 490000.98039215786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 397613.92857144785,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 397602.26757369714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 397700.7306818078,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 397677.7840909097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 398860.9544159352,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 398834.7008547058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259797.1416913729,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 259787.05489614265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 393196.34656838246,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 393164.7759500793 ns\nthreads: 1"
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
        "date": 1705952932410,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6659.500019031093,
            "unit": "ns/iter",
            "extra": "iterations: 105092\ncpu: 6659.514520610513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55984.66550379148,
            "unit": "ns/iter",
            "extra": "iterations: 14619\ncpu: 55983.945550311255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 88101.73690158513,
            "unit": "ns/iter",
            "extra": "iterations: 9734\ncpu: 88101.94164783235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 128094.89074128913,
            "unit": "ns/iter",
            "extra": "iterations: 6718\ncpu: 128088.30008931227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 167970.52496600058,
            "unit": "ns/iter",
            "extra": "iterations: 5147\ncpu: 167965.00874295703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 206932.21392677806,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 206918.99976070828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 246460.19812395863,
            "unit": "ns/iter",
            "extra": "iterations: 3518\ncpu: 246449.31779420134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 286680.7813324333,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 286661.2796833774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 325795.83945986134,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 325774.2310577646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5463.604911974351,
            "unit": "ns/iter",
            "extra": "iterations: 116898\ncpu: 5463.140515663225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4516.356461427719,
            "unit": "ns/iter",
            "extra": "iterations: 156289\ncpu: 4516.301851057984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4492.128718215946,
            "unit": "ns/iter",
            "extra": "iterations: 155619\ncpu: 4492.094795622639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4425.191568846915,
            "unit": "ns/iter",
            "extra": "iterations: 158199\ncpu: 4425.142383959443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7128.478159955697,
            "unit": "ns/iter",
            "extra": "iterations: 97802\ncpu: 7128.316394347778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24499.80146196213,
            "unit": "ns/iter",
            "extra": "iterations: 33243\ncpu: 24499.443491862934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 121086.68603667388,
            "unit": "ns/iter",
            "extra": "iterations: 7090\ncpu: 121085.06346967541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 93400.42556898916,
            "unit": "ns/iter",
            "extra": "iterations: 9183\ncpu: 93399.66241968836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93984.48573317121,
            "unit": "ns/iter",
            "extra": "iterations: 9077\ncpu: 93983.7281039989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89853.67701731891,
            "unit": "ns/iter",
            "extra": "iterations: 9468\ncpu: 89852.35530206999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 180260.62581832818,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 180256.79214402635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1553877.6515150974,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1553864.1414141417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1229105.1662269232,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1229089.4459102934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1230358.773209542,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1230339.3899204205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1201433.507115262,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1201403.234152654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 699953.0459683511,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 699937.2268274293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1185314.976982101,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 1185291.6879795382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32016.492112959804,
            "unit": "ns/iter",
            "extra": "iterations: 25992\ncpu: 32016.339642967087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158775.06960045025,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 158774.07475603014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120970.03609342621,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 120968.90304317077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122361.04666666868,
            "unit": "ns/iter",
            "extra": "iterations: 7050\ncpu: 122358.79432624122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116660.34323882363,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 116658.64231188671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 204100.96284974783,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 204099.6237949691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1584652.8826530392,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1584621.5986394614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1250910.2402684172,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1250902.6845637665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1268855.3956639357,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1268857.8590785905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1221144.1358188514,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1221136.4846870848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 730828.3056426195,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 730822.4921630103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1209504.0807290995,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 1209484.3750000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6067364.025805898,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6067231.6129032215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2783401.75297639,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2783363.690476191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23102.765725761557,
            "unit": "ns/iter",
            "extra": "iterations: 35356\ncpu: 23102.58513406509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 131503.10340094284,
            "unit": "ns/iter",
            "extra": "iterations: 6557\ncpu: 131499.4052157995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96000.76404745951,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 95999.49630624626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94033.05733259227,
            "unit": "ns/iter",
            "extra": "iterations: 9035\ncpu: 94032.29662423939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 88490.75057160242,
            "unit": "ns/iter",
            "extra": "iterations: 9622\ncpu: 88489.60715028063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 171390.84909377765,
            "unit": "ns/iter",
            "extra": "iterations: 5076\ncpu: 171387.74625689487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1568274.050420287,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1568252.4369747925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1235900.6007957745,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1235890.583554372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1218316.6971279292,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1218307.7023498684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1201763.8296772987,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 1201747.2258064519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 709197.0258358319,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 709184.9544072929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1195314.9486521075,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1195296.277278562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2564.535923555063,
            "unit": "ns/iter",
            "extra": "iterations: 272718\ncpu: 2564.5050931731603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17040.473308571716,
            "unit": "ns/iter",
            "extra": "iterations: 41193\ncpu: 17040.159735877514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13312.457271791956,
            "unit": "ns/iter",
            "extra": "iterations: 52518\ncpu: 13312.489051372822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13930.883528217815,
            "unit": "ns/iter",
            "extra": "iterations: 50201\ncpu: 13930.923686779188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10203.894999417218,
            "unit": "ns/iter",
            "extra": "iterations: 68552\ncpu: 10203.928404714625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 61814.67908866142,
            "unit": "ns/iter",
            "extra": "iterations: 11324\ncpu: 61814.129282938746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110485.30573550865,
            "unit": "ns/iter",
            "extra": "iterations: 6329\ncpu: 110484.61052298894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27295.40111409914,
            "unit": "ns/iter",
            "extra": "iterations: 25671\ncpu: 27295.119005882167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 26953.652644137554,
            "unit": "ns/iter",
            "extra": "iterations: 25982\ncpu: 26953.375413748003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26832.37090881081,
            "unit": "ns/iter",
            "extra": "iterations: 26001\ncpu: 26832.20260759191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56032.68168313046,
            "unit": "ns/iter",
            "extra": "iterations: 12453\ncpu: 56032.14486469123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50646.575646566176,
            "unit": "ns/iter",
            "extra": "iterations: 13649\ncpu: 50646.2231665323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19911.76539248151,
            "unit": "ns/iter",
            "extra": "iterations: 35212\ncpu: 19911.311484721253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96616.36594153782,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 96615.58819453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 79312.25704903138,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 79308.53810440496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78833.5410076758,
            "unit": "ns/iter",
            "extra": "iterations: 8852\ncpu: 78830.43380027243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 78570.42081599945,
            "unit": "ns/iter",
            "extra": "iterations: 8897\ncpu: 78566.65168034093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 119084.6186181033,
            "unit": "ns/iter",
            "extra": "iterations: 5876\ncpu: 119079.5098706596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 470462.347269057,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 470440.0539446978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 388168.0143250646,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 388148.20936639636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 383129.0662651007,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 383095.9474260705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 381991.71786491567,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 381973.0392156924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254315.98402905161,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 254290.74410163212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 377969.92741059035,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 377950.541711814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20091.201419619625,
            "unit": "ns/iter",
            "extra": "iterations: 34798\ncpu: 20089.847117650235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 98600.9465691783,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98595.95050618642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81363.33566434351,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 81360.18648018717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82497.78218870975,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 82494.41630345215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81190.25060828235,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 81186.15455914708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123915.62884411939,
            "unit": "ns/iter",
            "extra": "iterations: 5658\ncpu: 123906.11523506421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 471427.09675236745,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 471422.2598105554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 388910.43246244447,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 388894.60811561876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 388964.90863783646,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 388945.5703211491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 383315.52028505976,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 383295.5043859617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255843.6997084875,
            "unit": "ns/iter",
            "extra": "iterations: 2744\ncpu: 255833.52769679192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 381488.113176597,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 381465.3909240021 ns\nthreads: 1"
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
        "date": 1705955006413,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6715.706784841932,
            "unit": "ns/iter",
            "extra": "iterations: 104026\ncpu: 6715.418260819411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56505.32862973341,
            "unit": "ns/iter",
            "extra": "iterations: 14457\ncpu: 56502.72532337275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89732.04167973093,
            "unit": "ns/iter",
            "extra": "iterations: 9573\ncpu: 89726.96124516871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130313.06326623888,
            "unit": "ns/iter",
            "extra": "iterations: 6607\ncpu: 130308.85424549723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 171203.6666666664,
            "unit": "ns/iter",
            "extra": "iterations: 5064\ncpu: 171198.18325434448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 211418.39785471745,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 211408.31301803992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 251728.5501740314,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 251712.81902552204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307372.48739493196,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 307352.67226890795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 332560.29380263446,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 332534.8508033664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5494.936293724103,
            "unit": "ns/iter",
            "extra": "iterations: 127303\ncpu: 5494.603426470695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4559.986009439601,
            "unit": "ns/iter",
            "extra": "iterations: 153818\ncpu: 4559.873356824298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4535.365321616022,
            "unit": "ns/iter",
            "extra": "iterations: 154765\ncpu: 4535.34132394276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4564.22236876253,
            "unit": "ns/iter",
            "extra": "iterations: 153920\ncpu: 4563.868243243242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7162.389406155147,
            "unit": "ns/iter",
            "extra": "iterations: 97736\ncpu: 7162.339363182445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24037.217422372592,
            "unit": "ns/iter",
            "extra": "iterations: 33589\ncpu: 24035.776593527637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 119086.95567944326,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 119084.58536585387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91825.02925730692,
            "unit": "ns/iter",
            "extra": "iterations: 9331\ncpu: 91823.33083270834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93733.48764413987,
            "unit": "ns/iter",
            "extra": "iterations: 9105\ncpu: 93730.71938495334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89199.84181323626,
            "unit": "ns/iter",
            "extra": "iterations: 9552\ncpu: 89194.11641541022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 181047.1167146838,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 181036.68176204182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1610487.2100694617,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1610388.0208333286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1242753.7108434413,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1242669.4779116458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1262806.4878049928,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1262722.3577235765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1237845.8026667736,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1237801.3333333323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 699373.3235072007,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 699371.4285714288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1216935.893840148,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1216854.914809962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30709.366617883617,
            "unit": "ns/iter",
            "extra": "iterations: 26649\ncpu: 30706.716949979367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155313.54332974216,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 155305.9510967277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120978.44871615613,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 120968.10719797954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121705.94713842741,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 121698.87228643938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117616.40562801059,
            "unit": "ns/iter",
            "extra": "iterations: 7285\ncpu: 117610.66575154389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 197125.73620609895,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 197117.00866393108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1644549.196460068,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1644448.4955752187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1283179.2878788083,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1283133.3333333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1280728.9725275594,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1280707.0054945021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1254351.4892182536,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1254327.2237196765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 749320.5545746573,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 749311.1556982307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1239385.5186666467,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1239357.0666666657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6155505.842105108,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6155244.078947385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2760088.970414281,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2760059.1715976438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22840.411090716894,
            "unit": "ns/iter",
            "extra": "iterations: 35958\ncpu: 22840.333166472014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 130376.36444511736,
            "unit": "ns/iter",
            "extra": "iterations: 6632\ncpu: 130371.86369119368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95687.72461332443,
            "unit": "ns/iter",
            "extra": "iterations: 8922\ncpu: 95687.58125980718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95181.25467547288,
            "unit": "ns/iter",
            "extra": "iterations: 9090\ncpu: 95180.62706270619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 87519.30279741381,
            "unit": "ns/iter",
            "extra": "iterations: 9759\ncpu: 87516.60006148201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 171310.7924341559,
            "unit": "ns/iter",
            "extra": "iterations: 5049\ncpu: 171304.8128342252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1618182.8993055488,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1618162.1527777812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1244323.5393857565,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1244299.3324432552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1245534.5660880823,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1245491.722296401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1231925.6988110084,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 1231887.4504623557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 708218.6432927459,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 708197.8658536542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1217010.0215517704,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1216974.7126436871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2612.0917249816425,
            "unit": "ns/iter",
            "extra": "iterations: 268084\ncpu: 2612.074200623693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16970.344703684932,
            "unit": "ns/iter",
            "extra": "iterations: 41189\ncpu: 16969.55740610348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13922.932394087364,
            "unit": "ns/iter",
            "extra": "iterations: 50395\ncpu: 13922.29189403707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12415.082239347705,
            "unit": "ns/iter",
            "extra": "iterations: 56445\ncpu: 12414.341394277602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10155.83792808055,
            "unit": "ns/iter",
            "extra": "iterations: 68883\ncpu: 10155.129712701253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62889.4679390014,
            "unit": "ns/iter",
            "extra": "iterations: 11213\ncpu: 62884.74984393123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111825.23744220426,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 111821.92632753955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27226.97210042155,
            "unit": "ns/iter",
            "extra": "iterations: 25771\ncpu: 27226.463854720525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27009.12807369266,
            "unit": "ns/iter",
            "extra": "iterations: 25946\ncpu: 27008.85685654815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27137.339754744276,
            "unit": "ns/iter",
            "extra": "iterations: 25851\ncpu: 27137.070132683446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56440.1552058061,
            "unit": "ns/iter",
            "extra": "iterations: 12390\ncpu: 56434.38256658587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51046.75070945427,
            "unit": "ns/iter",
            "extra": "iterations: 13743\ncpu: 51041.88314050777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20233.49336027761,
            "unit": "ns/iter",
            "extra": "iterations: 34640\ncpu: 20232.589491917006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96398.44269261582,
            "unit": "ns/iter",
            "extra": "iterations: 7294\ncpu: 96391.9659994525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78459.6804007688,
            "unit": "ns/iter",
            "extra": "iterations: 8883\ncpu: 78458.52752448528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 79878.2382848141,
            "unit": "ns/iter",
            "extra": "iterations: 8792\ncpu: 79873.4872611466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77994.33975716314,
            "unit": "ns/iter",
            "extra": "iterations: 8977\ncpu: 77985.7524785562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123558.11434109481,
            "unit": "ns/iter",
            "extra": "iterations: 5676\ncpu: 123549.27766032549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 476762.7975460314,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 476708.2481254266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 390980.31975447,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 390979.2410714303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 393325.55474455125,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 393319.42728804384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 388517.3805555395,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 388506.22222222044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 248300.2284191863,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 248293.96092362443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 383331.5057724005,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 383315.33809785027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19805.860339661718,
            "unit": "ns/iter",
            "extra": "iterations: 35035\ncpu: 19805.09775938331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 99065.73116608047,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 99066.4734982331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81219.05393805877,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 81216.48300661222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82449.34184814023,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 82445.2266038851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81499.9779848526,
            "unit": "ns/iter",
            "extra": "iterations: 8585\ncpu: 81497.46068724449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122371.6647907132,
            "unit": "ns/iter",
            "extra": "iterations: 5686\ncpu: 122369.87337319697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 479124.16753154097,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 479127.35359525523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 389004.04830650234,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 388995.6135480333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 393501.4013490843,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 393486.00337267923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 389711.31886478525,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 389702.9493600506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258696.53237145158,
            "unit": "ns/iter",
            "extra": "iterations: 2703\ncpu: 258691.749907512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 386426.54772476543,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 386386.29300776776 ns\nthreads: 1"
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
        "date": 1705956491801,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6743.280103980513,
            "unit": "ns/iter",
            "extra": "iterations: 103865\ncpu: 6743.208973186349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57860.333593855255,
            "unit": "ns/iter",
            "extra": "iterations: 14074\ncpu: 57856.487139405996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92656.87148507578,
            "unit": "ns/iter",
            "extra": "iterations: 9353\ncpu: 92650.76446060088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133436.193169522,
            "unit": "ns/iter",
            "extra": "iterations: 6471\ncpu: 133430.53623860292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174842.13567534622,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 174834.7264284272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 215881.81961079157,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 215868.637724551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 256560.58799170904,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 256547.91481810133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299500.2235982002,
            "unit": "ns/iter",
            "extra": "iterations: 2907\ncpu: 299482.7313381495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 339935.20813769655,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 339917.7230046945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5566.29422458551,
            "unit": "ns/iter",
            "extra": "iterations: 125965\ncpu: 5565.665065692851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4528.65647384282,
            "unit": "ns/iter",
            "extra": "iterations: 154684\ncpu: 4528.319671071341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4523.174553095612,
            "unit": "ns/iter",
            "extra": "iterations: 154675\ncpu: 4523.203491191212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4489.6465041442625,
            "unit": "ns/iter",
            "extra": "iterations: 155999\ncpu: 4489.413393675608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7207.146901873754,
            "unit": "ns/iter",
            "extra": "iterations: 97446\ncpu: 7207.023377049847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23913.50958362879,
            "unit": "ns/iter",
            "extra": "iterations: 33912\ncpu: 23913.47605567351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 122528.68421804933,
            "unit": "ns/iter",
            "extra": "iterations: 6989\ncpu: 122525.16812133336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 93968.91469873567,
            "unit": "ns/iter",
            "extra": "iterations: 9062\ncpu: 93962.67932023831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94792.9341050791,
            "unit": "ns/iter",
            "extra": "iterations: 8984\ncpu: 94787.33303650923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90618.93313458342,
            "unit": "ns/iter",
            "extra": "iterations: 9392\ncpu: 90613.41567291284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184137.57772670072,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 184128.70873380656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1620206.3933566941,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1620097.727272731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1287937.5401663485,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1287868.9750692484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1283080.6385042034,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1283007.894736845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1248348.8183041064,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1248321.3997308246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 710432.3245952585,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 710398.3037779504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1234746.6146666193,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1234696.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29843.841390334874,
            "unit": "ns/iter",
            "extra": "iterations: 27533\ncpu: 29843.52231867211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159037.64706962893,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 159035.80745912186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122170.3744169497,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 122166.09187279132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119040.83457402808,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 119038.86131789384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117445.72101598488,
            "unit": "ns/iter",
            "extra": "iterations: 7323\ncpu: 117440.39328144226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 203283.011960605,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 203280.44090056387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1669374.4470375688,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1669294.7935368097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1314043.1212975192,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1314025.6699576883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1318583.4036827215,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1318555.6657223862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1275945.0989011424,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1275936.8131868152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 738150.4332533695,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 738132.9336530786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1265612.999999972,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1265592.5271739098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6049022.168831648,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6048972.077922057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2737704.8093841434,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2737588.8563049766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22152.082144696058,
            "unit": "ns/iter",
            "extra": "iterations: 36947\ncpu: 22151.66319322258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132608.94322203472,
            "unit": "ns/iter",
            "extra": "iterations: 6499\ncpu: 132607.7088782891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98304.4525773214,
            "unit": "ns/iter",
            "extra": "iterations: 8730\ncpu: 98300.1718213063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96595.85516853155,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 96589.16853932565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91515.0820316621,
            "unit": "ns/iter",
            "extra": "iterations: 9411\ncpu: 91507.5549888426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 176437.45711088288,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 176427.5699888016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1638943.7578946822,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1638893.6842105172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1291982.3407202023,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1291944.0443213303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1272748.2445355786,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1272660.5191256818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1261578.4707481505,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1259862.1768707496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 725439.7640186856,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 725409.0342679125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1239236.1544607228,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1239159.387483356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2596.7385034172034,
            "unit": "ns/iter",
            "extra": "iterations: 268906\ncpu: 2596.701077700005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16935.11556609389,
            "unit": "ns/iter",
            "extra": "iterations: 41327\ncpu: 16933.665642316235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13355.121242217867,
            "unit": "ns/iter",
            "extra": "iterations: 52358\ncpu: 13354.333626188913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14064.654987063015,
            "unit": "ns/iter",
            "extra": "iterations: 49859\ncpu: 14063.468982530649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10249.346299115161,
            "unit": "ns/iter",
            "extra": "iterations: 68308\ncpu: 10248.689758154285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64317.420840586914,
            "unit": "ns/iter",
            "extra": "iterations: 10921\ncpu: 64315.73116014992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112303.92436166252,
            "unit": "ns/iter",
            "extra": "iterations: 6227\ncpu: 112301.33290509164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27898.120471846567,
            "unit": "ns/iter",
            "extra": "iterations: 25093\ncpu: 27898.30630056198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27621.278747435335,
            "unit": "ns/iter",
            "extra": "iterations: 25324\ncpu: 27620.766861475262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27387.62606744919,
            "unit": "ns/iter",
            "extra": "iterations: 25411\ncpu: 27387.17484553951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55911.278655818736,
            "unit": "ns/iter",
            "extra": "iterations: 12528\ncpu: 55906.106321839434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51671.52280779299,
            "unit": "ns/iter",
            "extra": "iterations: 13548\ncpu: 51668.23147327986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19900.333219946086,
            "unit": "ns/iter",
            "extra": "iterations: 35277\ncpu: 19898.849108484323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96694.0562077114,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 96691.3409750034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 80291.02559981446,
            "unit": "ns/iter",
            "extra": "iterations: 8711\ncpu: 80289.76007346979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 80735.79031141571,
            "unit": "ns/iter",
            "extra": "iterations: 8670\ncpu: 80729.78085351843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 79865.26298330908,
            "unit": "ns/iter",
            "extra": "iterations: 8742\ncpu: 79860.79844429145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121556.50286209889,
            "unit": "ns/iter",
            "extra": "iterations: 5765\ncpu: 121548.41283607906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 482910.6939058127,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 482844.7368421104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 401278.1910498888,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 401242.97188754816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 395810.05772497103,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 395812.2807017507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 395016.5803722111,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 395007.5014100404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 252948.24286231247,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 252943.40440910918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 390410.6797093527,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 390403.40972610423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20284.54354119679,
            "unit": "ns/iter",
            "extra": "iterations: 34542\ncpu: 20284.699785768065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 99636.44425336045,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 99634.49412439133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 82684.90667453753,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82677.82634376928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84372.58431703235,
            "unit": "ns/iter",
            "extra": "iterations: 8302\ncpu: 84365.40592628188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 82833.80859098304,
            "unit": "ns/iter",
            "extra": "iterations: 8474\ncpu: 82827.89709700285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 121290.38068868784,
            "unit": "ns/iter",
            "extra": "iterations: 5779\ncpu: 121288.26786641356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 484566.4993075127,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484539.1966759063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395742.5347654226,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 395711.7580553929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 394299.3683023129,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 394281.0490693735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 392021.24076147954,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 391991.5453527387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258446.13853142151,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 258424.75397426003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 390145.8146696485,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 390139.5296752507 ns\nthreads: 1"
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
        "date": 1705958206241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6697.3888388658825,
            "unit": "ns/iter",
            "extra": "iterations: 104398\ncpu: 6697.161823023431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57877.736227985995,
            "unit": "ns/iter",
            "extra": "iterations: 14141\ncpu: 57876.161516158696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90979.35702935529,
            "unit": "ns/iter",
            "extra": "iterations: 9439\ncpu: 90977.7942578663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132138.77281105876,
            "unit": "ns/iter",
            "extra": "iterations: 6510\ncpu: 132131.85867895547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 173313.23903025378,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 173309.21658986175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 214633.807806325,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 214515.95849802368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 254817.2908823557,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 254815.38235294094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 296508.38079021004,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 296496.4577656678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 336640.9476744459,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 336628.139534884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5563.952163411867,
            "unit": "ns/iter",
            "extra": "iterations: 125866\ncpu: 5563.853622106052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4579.924098498093,
            "unit": "ns/iter",
            "extra": "iterations: 152856\ncpu: 4579.778353483019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4529.882447466494,
            "unit": "ns/iter",
            "extra": "iterations: 154331\ncpu: 4529.765244830918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4523.689884813294,
            "unit": "ns/iter",
            "extra": "iterations: 154965\ncpu: 4523.339463749873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7411.708795361648,
            "unit": "ns/iter",
            "extra": "iterations: 96585\ncpu: 7411.638453175963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24633.829551625728,
            "unit": "ns/iter",
            "extra": "iterations: 33142\ncpu: 24633.054734174188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129261.90560338792,
            "unit": "ns/iter",
            "extra": "iterations: 6621\ncpu: 129259.14514423785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95404.44012511247,
            "unit": "ns/iter",
            "extra": "iterations: 8952\ncpu: 95401.80965147434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 97418.1749688017,
            "unit": "ns/iter",
            "extra": "iterations: 8813\ncpu: 97417.06569840017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90881.6742691838,
            "unit": "ns/iter",
            "extra": "iterations: 9339\ncpu: 90877.17100331922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 190178.80400261402,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 190175.50576462955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1584390.7427100802,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1584334.9914236676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1252543.1445945324,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1252499.054054055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1251346.8434548911,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1251302.0242915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1235195.9022758221,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1235167.0682730894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 711020.5545243112,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 711002.6295436962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1210991.7555556844,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 1210954.1176470595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30612.357896699818,
            "unit": "ns/iter",
            "extra": "iterations: 26815\ncpu: 30611.422711169198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158106.0383979403,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 158101.7821054568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123561.11932388948,
            "unit": "ns/iter",
            "extra": "iterations: 6981\ncpu: 123557.41297808378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123099.71846045127,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 123098.07555238779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117898.11751784506,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 117893.14936847912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 208609.14894129455,
            "unit": "ns/iter",
            "extra": "iterations: 4156\ncpu: 208604.33108758368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1622667.184668905,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1622587.1080139366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1288022.3060941605,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1287976.592797783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1287961.364265902,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1287910.3878116373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1263456.5502716987,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1263438.043478258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 747694.5990338604,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 747655.2334943659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1242615.432396264,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1242558.6345381548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6137566.723684005,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6137305.263157933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2899641.084375304,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2899518.7500000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23142.145943203115,
            "unit": "ns/iter",
            "extra": "iterations: 35459\ncpu: 23140.486195324116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135135.87370730925,
            "unit": "ns/iter",
            "extra": "iterations: 6382\ncpu: 135127.84393607013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97298.16783930662,
            "unit": "ns/iter",
            "extra": "iterations: 8812\ncpu: 97294.0876078072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98031.4874113057,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 98024.67383840671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 89354.14798488558,
            "unit": "ns/iter",
            "extra": "iterations: 9528\ncpu: 89349.1603694376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 184152.7718220354,
            "unit": "ns/iter",
            "extra": "iterations: 4720\ncpu: 184144.27966101808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1599514.4486302163,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1599441.780821922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1265097.9021740144,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1265032.744565218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1242015.9144385143,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1241954.6791443836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1235785.974767655,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1235724.4355909706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 710075.1061879055,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 710059.663865547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1209855.0846354843,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 1209818.8802083335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2555.4382186897146,
            "unit": "ns/iter",
            "extra": "iterations: 274023\ncpu: 2555.2340496965494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17074.94360203737,
            "unit": "ns/iter",
            "extra": "iterations: 40888\ncpu: 17074.139111719924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13565.855681950476,
            "unit": "ns/iter",
            "extra": "iterations: 51338\ncpu: 13565.347306089036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14092.651268535543,
            "unit": "ns/iter",
            "extra": "iterations: 49703\ncpu: 14092.356598193348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10395.411862444276,
            "unit": "ns/iter",
            "extra": "iterations: 67406\ncpu: 10395.331276147559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63918.99954413033,
            "unit": "ns/iter",
            "extra": "iterations: 10968\ncpu: 63915.189642596604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112935.85861680197,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 112930.93664355976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27830.514484403382,
            "unit": "ns/iter",
            "extra": "iterations: 25165\ncpu: 27829.57679316519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27572.460812825408,
            "unit": "ns/iter",
            "extra": "iterations: 25442\ncpu: 27571.32693970588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27606.76833156233,
            "unit": "ns/iter",
            "extra": "iterations: 25407\ncpu: 27605.876333294018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56406.366513285364,
            "unit": "ns/iter",
            "extra": "iterations: 12387\ncpu: 56402.429966901036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52047.64606699658,
            "unit": "ns/iter",
            "extra": "iterations: 13463\ncpu: 52046.08928173561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20235.66610752814,
            "unit": "ns/iter",
            "extra": "iterations: 34577\ncpu: 20235.277785811424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 99623.34088014347,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 99365.54407811002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81605.63813866847,
            "unit": "ns/iter",
            "extra": "iterations: 8553\ncpu: 81605.77575119892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82424.95422617307,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 82418.94169983632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 80758.81380826532,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 80757.5922285197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122339.88989865093,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 122338.27333100393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 475549.2517006906,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475532.1088435407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 399199.156267888,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 399186.6628505965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 391680.53497482435,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 391671.79630665807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 391165.6672249848,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 391147.57118927274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 255796.14921558817,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 255788.32542867443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 387749.2386489269,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 387732.8349944675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20097.552659499866,
            "unit": "ns/iter",
            "extra": "iterations: 34875\ncpu: 20097.310394265078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 100719.84396141791,
            "unit": "ns/iter",
            "extra": "iterations: 6947\ncpu: 100715.33035842878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84065.50870660934,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 84062.7116608625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84988.65126458686,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 84987.08657587622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83186.03571427718,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 83181.72786720282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125182.46127645035,
            "unit": "ns/iter",
            "extra": "iterations: 5578\ncpu: 125179.43707422104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 479679.4862637176,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 479658.31043955626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 397648.36967633356,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 397644.1226575757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 399170.13048436167,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 399163.98860398325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 392754.37338576873,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 392730.7130825356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258853.67849224812,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 258843.2742054705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 391286.29028632725,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 391266.5356541253 ns\nthreads: 1"
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
        "date": 1705959798371,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6713.128643901947,
            "unit": "ns/iter",
            "extra": "iterations: 104078\ncpu: 6712.830761544227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56469.01927209744,
            "unit": "ns/iter",
            "extra": "iterations: 14425\ncpu: 56467.19584055458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 88725.87900723591,
            "unit": "ns/iter",
            "extra": "iterations: 9670\ncpu: 88722.35780765254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 129081.22875131354,
            "unit": "ns/iter",
            "extra": "iterations: 6671\ncpu: 129076.82506370866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 169939.19392156583,
            "unit": "ns/iter",
            "extra": "iterations: 5100\ncpu: 169934.35294117662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 209746.492714906,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 209738.10101991266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 249275.504465578,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 249259.89628349178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 289709.7628419108,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 289696.8312208139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 329954.3964407664,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 329933.47216963273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5354.845251045212,
            "unit": "ns/iter",
            "extra": "iterations: 130534\ncpu: 5354.571222823181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4485.435146550488,
            "unit": "ns/iter",
            "extra": "iterations: 156499\ncpu: 4485.104697154613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4396.823794865506,
            "unit": "ns/iter",
            "extra": "iterations: 157555\ncpu: 4396.638634127762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4492.685238816252,
            "unit": "ns/iter",
            "extra": "iterations: 157799\ncpu: 4492.577899733203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7092.561065681797,
            "unit": "ns/iter",
            "extra": "iterations: 98566\ncpu: 7092.322910537105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23914.86352656999,
            "unit": "ns/iter",
            "extra": "iterations: 33948\ncpu: 23913.21138211384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123121.29588765882,
            "unit": "ns/iter",
            "extra": "iterations: 6979\ncpu: 123118.24043559232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94066.8833369985,
            "unit": "ns/iter",
            "extra": "iterations: 9086\ncpu: 94061.1490204713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94395.98753447716,
            "unit": "ns/iter",
            "extra": "iterations: 9065\ncpu: 94392.31108659711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91984.18868128033,
            "unit": "ns/iter",
            "extra": "iterations: 9259\ncpu: 91980.34344961685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201356.05271602923,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 201339.10153564106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1578536.2727272927,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1578411.1492281328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1242625.4082998477,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1242581.2583668008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1247084.0347593834,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1246986.2299465216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1234660.063914665,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1234621.8375499335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 713231.602001576,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 713186.3741339492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1203060.102730794,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1203013.7841352408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30192.739288093453,
            "unit": "ns/iter",
            "extra": "iterations: 27026\ncpu: 30190.842152001744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157674.89458325558,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 157672.18675907317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123080.01042858255,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 123073.68571428563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122244.74655686229,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 122240.28113019982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117315.17350721447,
            "unit": "ns/iter",
            "extra": "iterations: 7285\ncpu: 117305.40837337011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217496.93155510645,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 217494.46401610438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1603605.108433755,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1603538.898450943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1274251.2150685014,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1274229.863013697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1291177.3828017684,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1291127.739251043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1246295.3919462876,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1246262.1476510055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 759444.0407830314,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 759418.5154975536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1235659.8711818492,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1235622.974767591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6193970.786666797,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6193608.666666677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2826652.125000212,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2826466.1585365855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22599.499558619475,
            "unit": "ns/iter",
            "extra": "iterations: 36250\ncpu: 22599.158620689534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133469.93605463448,
            "unit": "ns/iter",
            "extra": "iterations: 6443\ncpu: 133465.1715039577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97696.8584604834,
            "unit": "ns/iter",
            "extra": "iterations: 8782\ncpu: 97694.51150079757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97778.35663777294,
            "unit": "ns/iter",
            "extra": "iterations: 8768\ncpu: 97774.29288321138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90079.89312896343,
            "unit": "ns/iter",
            "extra": "iterations: 9460\ncpu: 90078.40380549652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190441.877919808,
            "unit": "ns/iter",
            "extra": "iterations: 4538\ncpu: 190437.13089466823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1583079.2711863916,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1583030.6779661027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1247900.72824626,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1247827.5769745603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1233983.0238410202,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1233943.0463576145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1237145.9747676272,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1237092.4302788873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 725272.5163806533,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 725261.154446178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1204962.646830523,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1204909.3143596388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2531.1729624487975,
            "unit": "ns/iter",
            "extra": "iterations: 277355\ncpu: 2531.132303365729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17239.076248773796,
            "unit": "ns/iter",
            "extra": "iterations: 40840\ncpu: 17238.26150832526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13789.30282024389,
            "unit": "ns/iter",
            "extra": "iterations: 52655\ncpu: 13788.804482005411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12776.085761166953,
            "unit": "ns/iter",
            "extra": "iterations: 54850\ncpu: 12775.757520510404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10157.059357552615,
            "unit": "ns/iter",
            "extra": "iterations: 68955\ncpu: 10156.808063229633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66558.81414160594,
            "unit": "ns/iter",
            "extra": "iterations: 10508\ncpu: 66558.88846593066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111761.41330354735,
            "unit": "ns/iter",
            "extra": "iterations: 6269\ncpu: 111753.80443451893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27273.158872690638,
            "unit": "ns/iter",
            "extra": "iterations: 25725\ncpu: 27272.610301263354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27262.456341643734,
            "unit": "ns/iter",
            "extra": "iterations: 25711\ncpu: 27260.437166971406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27021.89930943632,
            "unit": "ns/iter",
            "extra": "iterations: 25921\ncpu: 27021.538520890364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56399.64261528696,
            "unit": "ns/iter",
            "extra": "iterations: 12404\ncpu: 56397.267010641786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51233.203705059546,
            "unit": "ns/iter",
            "extra": "iterations: 13657\ncpu: 51230.760782016936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19555.188922524972,
            "unit": "ns/iter",
            "extra": "iterations: 35676\ncpu: 19554.476398699433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 97248.26421126985,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 97245.78179291144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81207.10553884346,
            "unit": "ns/iter",
            "extra": "iterations: 8973\ncpu: 81205.47197147018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78472.68276016961,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 78469.28419401815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 76832.36974882375,
            "unit": "ns/iter",
            "extra": "iterations: 9117\ncpu: 76829.64791049782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 118241.91295546535,
            "unit": "ns/iter",
            "extra": "iterations: 5928\ncpu: 118112.48313090575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 470978.9514170088,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 470946.8286099847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 387926.40936979314,
            "unit": "ns/iter",
            "extra": "iterations: 1793\ncpu: 387915.00278862775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 392720.47035570105,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 392713.94692264043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 381825.7652505889,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 381811.11111110967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251134.9964132133,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 251132.2094691534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 381015.7854030612,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 381002.06971677026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20204.731162658318,
            "unit": "ns/iter",
            "extra": "iterations: 34705\ncpu: 20203.820775104574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 95643.41440087654,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95638.4478753927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81142.27837085015,
            "unit": "ns/iter",
            "extra": "iterations: 8618\ncpu: 81137.72336969258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 82252.58354876455,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 82250.11750881207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 80564.34890930953,
            "unit": "ns/iter",
            "extra": "iterations: 8710\ncpu: 80561.61882893201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 120565.42144209644,
            "unit": "ns/iter",
            "extra": "iterations: 5811\ncpu: 120565.54809843368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 471494.46491227555,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 471482.1187584315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 385585.8113311855,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 385566.4466446682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 389426.9454038999,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 389411.9220055731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 387121.25674934697,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 387105.34435261827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255187.56746898798,
            "unit": "ns/iter",
            "extra": "iterations: 2742\ncpu: 255182.42159007967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 381127.4261487785,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 381106.01750547107 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}