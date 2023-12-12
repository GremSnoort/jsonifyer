window.BENCHMARK_DATA = {
  "lastUpdate": 1702382263149,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-11 22.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381096096,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6907.386397526866,
            "unit": "ns/iter",
            "extra": "iterations: 101261\ncpu: 6907.306860489232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50920.30159999581,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50918.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93828.33799890846,
            "unit": "ns/iter",
            "extra": "iterations: 9145\ncpu: 93824.59267359211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136086.2209761489,
            "unit": "ns/iter",
            "extra": "iterations: 6331\ncpu: 136082.0407518559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179639.4636420076,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 179629.87362751196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221920.7262942122,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 221912.12198872358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267065.47907119757,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 267047.6015887563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307112.9342058794,
            "unit": "ns/iter",
            "extra": "iterations: 2827\ncpu: 307091.2628227805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 349683.9738955763,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 349655.0602409636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5775.0812675125,
            "unit": "ns/iter",
            "extra": "iterations: 121340\ncpu: 5774.743695401343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4731.0260427495905,
            "unit": "ns/iter",
            "extra": "iterations: 149101\ncpu: 4730.838156685736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4689.992994968698,
            "unit": "ns/iter",
            "extra": "iterations: 149464\ncpu: 4689.901247123054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4774.61827561294,
            "unit": "ns/iter",
            "extra": "iterations: 148099\ncpu: 4774.631834110966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7352.271747329069,
            "unit": "ns/iter",
            "extra": "iterations: 95460\ncpu: 7352.310915566724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26037.309447608262,
            "unit": "ns/iter",
            "extra": "iterations: 31246\ncpu: 26036.606285604532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126348.6081819574,
            "unit": "ns/iter",
            "extra": "iterations: 6771\ncpu: 126348.07266282676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98957.20812064789,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 98954.80278422269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100057.8100879759,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 100058.22873900276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94522.0787001234,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 94517.29855200638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 209463.77827415298,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 209464.56618857302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1696044.2193783969,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1695940.21937843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1329776.2906976787,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1329710.029069768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1332957.958452748,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1332900.286532949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1319889.7627841271,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1319830.6818181844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 742080.7516077083,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 742043.8906752411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1289692.4441341136,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1289646.6480446951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32908.67021445442,
            "unit": "ns/iter",
            "extra": "iterations: 25180\ncpu: 32907.61715647337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157086.7733066219,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 157079.4428259288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123407.5226029356,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 123402.74978404853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123323.17969310429,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 123319.87666714478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119237.30789547128,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 119232.99972199052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221095.92632385803,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 221086.08339728735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1727570.6672827194,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1727498.5212569335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1355974.9052477537,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1355921.8658892133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1358076.392700762,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1358070.2189781056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1341251.1907514625,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1341193.786127169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 774737.965604005,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 774734.563758387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1338674.318181758,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1338602.414772723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6334931.12925183,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6334846.258503421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2788218.5705705625,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2788127.927927931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24653.41219079702,
            "unit": "ns/iter",
            "extra": "iterations: 33271\ncpu: 24652.956027771903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124415.99098575299,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 124415.19337016615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95448.52251848858,
            "unit": "ns/iter",
            "extra": "iterations: 8926\ncpu: 95446.89670625069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96071.96956765754,
            "unit": "ns/iter",
            "extra": "iterations: 8905\ncpu: 96069.08478382931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92588.16349686621,
            "unit": "ns/iter",
            "extra": "iterations: 9254\ncpu: 92587.443267776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192107.69072847706,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 192102.38410595982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1692737.9151624523,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1692704.151624555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1329399.8746438613,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1329374.216524216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1331637.3851640145,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1331626.818830249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1318250.667613667,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1318240.9090909094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 736910.4722221841,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 736898.0158730157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1284966.3314763154,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1284956.6852367646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2629.744135734372,
            "unit": "ns/iter",
            "extra": "iterations: 267169\ncpu: 2629.709285134139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17525.94369053564,
            "unit": "ns/iter",
            "extra": "iterations: 39940\ncpu: 17525.96394591888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13142.412719586904,
            "unit": "ns/iter",
            "extra": "iterations: 53225\ncpu: 13142.290277125468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13724.587183924066,
            "unit": "ns/iter",
            "extra": "iterations: 50858\ncpu: 13724.257737229122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10236.171630276758,
            "unit": "ns/iter",
            "extra": "iterations: 68700\ncpu: 10235.970887918462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67039.74370029522,
            "unit": "ns/iter",
            "extra": "iterations: 10437\ncpu: 67037.07003928327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 109611.15768024581,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 109611.42633228896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28059.8079509959,
            "unit": "ns/iter",
            "extra": "iterations: 24978\ncpu: 28058.963888221508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30092.58341792194,
            "unit": "ns/iter",
            "extra": "iterations: 24629\ncpu: 30092.630638677965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28127.171996297966,
            "unit": "ns/iter",
            "extra": "iterations: 24861\ncpu: 28126.426933751573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57277.944028930186,
            "unit": "ns/iter",
            "extra": "iterations: 12167\ncpu: 57274.46371332263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53502.96686264051,
            "unit": "ns/iter",
            "extra": "iterations: 13097\ncpu: 53502.5654730089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20585.615696172303,
            "unit": "ns/iter",
            "extra": "iterations: 34072\ncpu: 20585.263559521194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100940.86549285441,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 100938.15846442635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84223.46562311878,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84220.71041541306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82625.83633792527,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82621.23247319307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81537.24367385023,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 81532.82567947586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123637.90917123151,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 123634.58208164066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507191.78417266154,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 507172.7338129577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 418547.78633973387,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 418539.4629305309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 410140.26377491927,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 410124.20867526287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 404441.9999999859,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 404417.1974522243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 269411.02578906296,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 269399.73056197003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 402979.1498558838,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 402964.14985591016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20835.427330009712,
            "unit": "ns/iter",
            "extra": "iterations: 33487\ncpu: 20834.365574700507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103689.5146406402,
            "unit": "ns/iter",
            "extra": "iterations: 6762\ncpu: 103682.06152025967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84938.57127259216,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 84937.85029722197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85043.47529211211,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85039.17964946409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84633.76749545494,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 84630.75803517301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123156.55759070019,
            "unit": "ns/iter",
            "extra": "iterations: 5678\ncpu: 123152.30715040679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 492867.1983123048,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 492851.4767932458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 409938.03460406465,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 409916.12903225294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 412244.02592806506,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 412244.84384207346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405866.616009246,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 405853.94431554596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264734.8611426434,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 264732.5009458982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 404859.44849533984,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 404852.7777777813 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381096096,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6907.386397526866,
            "unit": "ns/iter",
            "extra": "iterations: 101261\ncpu: 6907.306860489232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50920.30159999581,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50918.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93828.33799890846,
            "unit": "ns/iter",
            "extra": "iterations: 9145\ncpu: 93824.59267359211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136086.2209761489,
            "unit": "ns/iter",
            "extra": "iterations: 6331\ncpu: 136082.0407518559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179639.4636420076,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 179629.87362751196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221920.7262942122,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 221912.12198872358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267065.47907119757,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 267047.6015887563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307112.9342058794,
            "unit": "ns/iter",
            "extra": "iterations: 2827\ncpu: 307091.2628227805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 349683.9738955763,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 349655.0602409636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5775.0812675125,
            "unit": "ns/iter",
            "extra": "iterations: 121340\ncpu: 5774.743695401343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4731.0260427495905,
            "unit": "ns/iter",
            "extra": "iterations: 149101\ncpu: 4730.838156685736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4689.992994968698,
            "unit": "ns/iter",
            "extra": "iterations: 149464\ncpu: 4689.901247123054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4774.61827561294,
            "unit": "ns/iter",
            "extra": "iterations: 148099\ncpu: 4774.631834110966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7352.271747329069,
            "unit": "ns/iter",
            "extra": "iterations: 95460\ncpu: 7352.310915566724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26037.309447608262,
            "unit": "ns/iter",
            "extra": "iterations: 31246\ncpu: 26036.606285604532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126348.6081819574,
            "unit": "ns/iter",
            "extra": "iterations: 6771\ncpu: 126348.07266282676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98957.20812064789,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 98954.80278422269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100057.8100879759,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 100058.22873900276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94522.0787001234,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 94517.29855200638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 209463.77827415298,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 209464.56618857302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1696044.2193783969,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1695940.21937843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1329776.2906976787,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1329710.029069768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1332957.958452748,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1332900.286532949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1319889.7627841271,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1319830.6818181844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 742080.7516077083,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 742043.8906752411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1289692.4441341136,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1289646.6480446951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32908.67021445442,
            "unit": "ns/iter",
            "extra": "iterations: 25180\ncpu: 32907.61715647337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157086.7733066219,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 157079.4428259288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123407.5226029356,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 123402.74978404853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123323.17969310429,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 123319.87666714478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119237.30789547128,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 119232.99972199052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221095.92632385803,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 221086.08339728735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1727570.6672827194,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1727498.5212569335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1355974.9052477537,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1355921.8658892133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1358076.392700762,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1358070.2189781056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1341251.1907514625,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1341193.786127169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 774737.965604005,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 774734.563758387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1338674.318181758,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1338602.414772723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6334931.12925183,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6334846.258503421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2788218.5705705625,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2788127.927927931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24653.41219079702,
            "unit": "ns/iter",
            "extra": "iterations: 33271\ncpu: 24652.956027771903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124415.99098575299,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 124415.19337016615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95448.52251848858,
            "unit": "ns/iter",
            "extra": "iterations: 8926\ncpu: 95446.89670625069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96071.96956765754,
            "unit": "ns/iter",
            "extra": "iterations: 8905\ncpu: 96069.08478382931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92588.16349686621,
            "unit": "ns/iter",
            "extra": "iterations: 9254\ncpu: 92587.443267776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192107.69072847706,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 192102.38410595982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1692737.9151624523,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1692704.151624555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1329399.8746438613,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1329374.216524216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1331637.3851640145,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1331626.818830249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1318250.667613667,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1318240.9090909094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 736910.4722221841,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 736898.0158730157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1284966.3314763154,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1284956.6852367646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2629.744135734372,
            "unit": "ns/iter",
            "extra": "iterations: 267169\ncpu: 2629.709285134139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17525.94369053564,
            "unit": "ns/iter",
            "extra": "iterations: 39940\ncpu: 17525.96394591888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13142.412719586904,
            "unit": "ns/iter",
            "extra": "iterations: 53225\ncpu: 13142.290277125468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13724.587183924066,
            "unit": "ns/iter",
            "extra": "iterations: 50858\ncpu: 13724.257737229122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10236.171630276758,
            "unit": "ns/iter",
            "extra": "iterations: 68700\ncpu: 10235.970887918462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67039.74370029522,
            "unit": "ns/iter",
            "extra": "iterations: 10437\ncpu: 67037.07003928327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 109611.15768024581,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 109611.42633228896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28059.8079509959,
            "unit": "ns/iter",
            "extra": "iterations: 24978\ncpu: 28058.963888221508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30092.58341792194,
            "unit": "ns/iter",
            "extra": "iterations: 24629\ncpu: 30092.630638677965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28127.171996297966,
            "unit": "ns/iter",
            "extra": "iterations: 24861\ncpu: 28126.426933751573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57277.944028930186,
            "unit": "ns/iter",
            "extra": "iterations: 12167\ncpu: 57274.46371332263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53502.96686264051,
            "unit": "ns/iter",
            "extra": "iterations: 13097\ncpu: 53502.5654730089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20585.615696172303,
            "unit": "ns/iter",
            "extra": "iterations: 34072\ncpu: 20585.263559521194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100940.86549285441,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 100938.15846442635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84223.46562311878,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84220.71041541306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82625.83633792527,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82621.23247319307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81537.24367385023,
            "unit": "ns/iter",
            "extra": "iterations: 8536\ncpu: 81532.82567947586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123637.90917123151,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 123634.58208164066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507191.78417266154,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 507172.7338129577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 418547.78633973387,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 418539.4629305309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 410140.26377491927,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 410124.20867526287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 404441.9999999859,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 404417.1974522243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 269411.02578906296,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 269399.73056197003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 402979.1498558838,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 402964.14985591016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20835.427330009712,
            "unit": "ns/iter",
            "extra": "iterations: 33487\ncpu: 20834.365574700507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103689.5146406402,
            "unit": "ns/iter",
            "extra": "iterations: 6762\ncpu: 103682.06152025967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84938.57127259216,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 84937.85029722197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85043.47529211211,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85039.17964946409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84633.76749545494,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 84630.75803517301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123156.55759070019,
            "unit": "ns/iter",
            "extra": "iterations: 5678\ncpu: 123152.30715040679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 492867.1983123048,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 492851.4767932458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 409938.03460406465,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 409916.12903225294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 412244.02592806506,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 412244.84384207346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405866.616009246,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 405853.94431554596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264734.8611426434,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 264732.5009458982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 404859.44849533984,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 404852.7777777813 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382262225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6884.846979324537,
            "unit": "ns/iter",
            "extra": "iterations: 101666\ncpu: 6884.701866897489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51420.776099996605,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51419.069999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95067.10940967525,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 95060.09764758099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138325.64647435822,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 138311.7948717949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182519.3005039834,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 182509.0088198236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225739.48100936902,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 225722.21644120707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271469.7271601062,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 271453.3911427686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312705.5902052579,
            "unit": "ns/iter",
            "extra": "iterations: 2777\ncpu: 312680.6625855241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357895.1476758494,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 357487.2480460713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5747.924200511063,
            "unit": "ns/iter",
            "extra": "iterations: 122547\ncpu: 5747.564607864736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4682.905471739672,
            "unit": "ns/iter",
            "extra": "iterations: 149733\ncpu: 4682.722579524892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4669.344191176544,
            "unit": "ns/iter",
            "extra": "iterations: 149600\ncpu: 4669.243983957218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4691.255825184075,
            "unit": "ns/iter",
            "extra": "iterations: 149094\ncpu: 4690.984882020742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7224.323156995957,
            "unit": "ns/iter",
            "extra": "iterations: 97219\ncpu: 7224.015881669218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25673.462943071052,
            "unit": "ns/iter",
            "extra": "iterations: 31654\ncpu: 25673.2387691919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125373.93394709616,
            "unit": "ns/iter",
            "extra": "iterations: 6843\ncpu: 125369.44322665519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95427.50045045113,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 95426.6216216216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95864.51206374545,
            "unit": "ns/iter",
            "extra": "iterations: 8911\ncpu: 95861.40724946685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 92463.29449521124,
            "unit": "ns/iter",
            "extra": "iterations: 9192\ncpu: 92462.42384682313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 208232.26388240274,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 208224.19505366345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1687638.7927272224,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1687608.727272728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1332590.6154949907,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1332550.358680057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1334619.4913294252,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1334585.9826589562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1316056.2418207522,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1316007.1123755306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 733453.932800012,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 733432.8800000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1288217.9331475776,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1288125.7660167168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33157.9214003428,
            "unit": "ns/iter",
            "extra": "iterations: 25051\ncpu: 33155.410961638234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 153129.3408766871,
            "unit": "ns/iter",
            "extra": "iterations: 5612\ncpu: 153121.98859586605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123127.55747368436,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 123116.01403508763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121311.15044498067,
            "unit": "ns/iter",
            "extra": "iterations: 7079\ncpu: 121301.65277581592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 114732.91685664591,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 114727.70551160001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220538.15067447914,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 220525.2990582837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1735360.2620817272,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1735225.2788104026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1362495.2266081825,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1362412.134502916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1364862.1876832643,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1364772.2873900302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1338355.3928057977,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1338247.0503597157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 766002.9128289698,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 765949.4243421021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1319436.279432608,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1319342.4113475205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6197487.526666995,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6197043.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2843973.6310976357,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2843786.5853658654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24778.0025639487,
            "unit": "ns/iter",
            "extra": "iterations: 33152\ncpu: 24776.31213803105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121473.9901574775,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 121467.70247469012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93965.33812239638,
            "unit": "ns/iter",
            "extra": "iterations: 9118\ncpu: 93961.97631059443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93775.49414724999,
            "unit": "ns/iter",
            "extra": "iterations: 9141\ncpu: 93772.83666994845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 88548.23949492867,
            "unit": "ns/iter",
            "extra": "iterations: 9662\ncpu: 88545.77727178644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 190136.19145672812,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 190131.6100766709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1699976.5255474795,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1699898.1751824773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1335499.6930835107,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1335396.9740634034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1338761.8307029656,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1338672.7403156413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1318239.8048090262,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1318184.016973127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 734575.6339355625,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 734521.9952867231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1292365.4426002435,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1292257.3997233799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2585.4132270169575,
            "unit": "ns/iter",
            "extra": "iterations: 270764\ncpu: 2585.1896854825454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17515.315387115388,
            "unit": "ns/iter",
            "extra": "iterations: 40027\ncpu: 17514.43275788836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13614.675853838356,
            "unit": "ns/iter",
            "extra": "iterations: 51122\ncpu: 13614.20327843206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14103.246888176449,
            "unit": "ns/iter",
            "extra": "iterations: 49569\ncpu: 14102.985737053305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10200.261434951542,
            "unit": "ns/iter",
            "extra": "iterations: 68518\ncpu: 10199.638051315034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66486.43643101578,
            "unit": "ns/iter",
            "extra": "iterations: 10524\ncpu: 66481.18586088972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114991.57935463183,
            "unit": "ns/iter",
            "extra": "iterations: 6074\ncpu: 114983.3058939744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28088.677736183912,
            "unit": "ns/iter",
            "extra": "iterations: 24843\ncpu: 28086.462987561943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28245.34560038946,
            "unit": "ns/iter",
            "extra": "iterations: 24809\ncpu: 28243.306864444432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27927.34587276496,
            "unit": "ns/iter",
            "extra": "iterations: 25041\ncpu: 27925.01098198957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56980.858944115,
            "unit": "ns/iter",
            "extra": "iterations: 12293\ncpu: 56978.3047262668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53059.55001896069,
            "unit": "ns/iter",
            "extra": "iterations: 13185\ncpu: 53057.71710276809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21276.859884308386,
            "unit": "ns/iter",
            "extra": "iterations: 32673\ncpu: 21275.499648027442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103511.04326493677,
            "unit": "ns/iter",
            "extra": "iterations: 6726\ncpu: 103505.61998215856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85214.15646090939,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 85207.69419560625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83910.90451410151,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 83906.43833958711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83901.4980060422,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 83898.51359516644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132217.26630144974,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 132209.04753490002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 500760.1325215523,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 500728.1518624635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411152.0687830809,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411130.7466196358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 415319.21352315124,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 415302.01660735474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 408647.0941520445,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 408630.2339181296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262395.138524887,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 262386.70909771766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 405964.38911410095,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 405943.60162131407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21205.02084292652,
            "unit": "ns/iter",
            "extra": "iterations: 32577\ncpu: 21203.345918899628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105488.91112110527,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105485.38669064821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86300.4270820663,
            "unit": "ns/iter",
            "extra": "iterations: 8153\ncpu: 86294.6277443891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87174.78187251512,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 87169.24800796834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86246.02685060441,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 86240.189678532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127284.09127566405,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 127274.08357771313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 499663.2471014219,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 499648.18840578775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 412466.4343731721,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 412429.487934078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 411792.75088129507,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 411762.0446533464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405394.58318839344,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 405354.3188405805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264497.73829303915,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 264480.7779456166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 406411.7499999458,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 406384.1067285358 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}