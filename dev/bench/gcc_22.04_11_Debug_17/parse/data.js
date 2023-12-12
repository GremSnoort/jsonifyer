window.BENCHMARK_DATA = {
  "lastUpdate": 1702396477973,
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388116959,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7268.337846395315,
            "unit": "ns/iter",
            "extra": "iterations: 99489\ncpu: 7268.165324809778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51184.122000000796,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51180.79 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94421.15554822233,
            "unit": "ns/iter",
            "extra": "iterations: 9084\ncpu: 94418.16380449143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137927.81376323328,
            "unit": "ns/iter",
            "extra": "iterations: 6234\ncpu: 137926.4677574591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181550.67043314112,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 181547.01820464525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224634.2708171072,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 224633.64461738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267715.17159581376,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 267709.24214417743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315254.93376530125,
            "unit": "ns/iter",
            "extra": "iterations: 2778\ncpu: 315259.4672426208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354001.73463573505,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 353994.9124949124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5704.589873953903,
            "unit": "ns/iter",
            "extra": "iterations: 122733\ncpu: 5704.375351372489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4638.916105484603,
            "unit": "ns/iter",
            "extra": "iterations: 152060\ncpu: 4638.688675522818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4703.75486566942,
            "unit": "ns/iter",
            "extra": "iterations: 148849\ncpu: 4703.6426176863715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4611.829488814861,
            "unit": "ns/iter",
            "extra": "iterations: 152078\ncpu: 4611.641394547535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7195.2268717719935,
            "unit": "ns/iter",
            "extra": "iterations: 97381\ncpu: 7194.957948675823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25069.33402125382,
            "unit": "ns/iter",
            "extra": "iterations: 32465\ncpu: 25069.536423841062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 121252.06087696394,
            "unit": "ns/iter",
            "extra": "iterations: 7047\ncpu: 121248.9570029801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95088.32556583932,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 95086.08540528476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94224.8152641409,
            "unit": "ns/iter",
            "extra": "iterations: 9067\ncpu: 94220.22719752969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91611.37103196613,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 91610.57785429878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 214766.8218515998,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 214757.50543872424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1681802.1956520875,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1681754.7101449282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1321686.1934565979,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1321616.500711241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1321389.0911679806,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1321387.464387462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1301160.5764374863,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1301126.7882187918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 727505.6473354426,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 727499.4514106578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1275801.4814305285,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1275763.1361760665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33012.94829997308,
            "unit": "ns/iter",
            "extra": "iterations: 25029\ncpu: 33012.61736385785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 151321.81324455552,
            "unit": "ns/iter",
            "extra": "iterations: 5708\ncpu: 151315.85494043402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 118966.70084405551,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 118959.40224159427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119599.79400224499,
            "unit": "ns/iter",
            "extra": "iterations: 7136\ncpu: 119594.07230941694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115633.17784648863,
            "unit": "ns/iter",
            "extra": "iterations: 7439\ncpu: 115631.0794461624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226078.36601309828,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 226068.732026144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1722569.9851853398,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1722514.0740740763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1353045.620639648,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1353002.1802325624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1353287.710755829,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1353249.7093023309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1323772.460881813,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1323734.2816500755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 758305.351549759,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 758309.5432300164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1307616.783403546,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1307563.853727147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6234023.179999894,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6233801.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2786936.2814371954,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2786976.04790419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24044.478458784437,
            "unit": "ns/iter",
            "extra": "iterations: 34051\ncpu: 24043.44365804243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120573.64440408652,
            "unit": "ns/iter",
            "extra": "iterations: 7157\ncpu: 120575.4366354623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 91843.06031337669,
            "unit": "ns/iter",
            "extra": "iterations: 9318\ncpu: 91839.54711311439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 91193.8849151212,
            "unit": "ns/iter",
            "extra": "iterations: 9367\ncpu: 91192.30276502618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 89753.07021364436,
            "unit": "ns/iter",
            "extra": "iterations: 9642\ncpu: 89748.91101431218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 195195.10514491083,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 195193.39474275376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1689388.0579709648,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1689319.9275362345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1324102.8108106721,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1324101.991465145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1326111.3304842627,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1326085.0427350367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1300942.7160838826,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1300930.7692307706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 744994.4590163205,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 744964.6370023419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1279591.7089654503,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1279549.3793103478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2613.375330858953,
            "unit": "ns/iter",
            "extra": "iterations: 268619\ncpu: 2613.26153399425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17318.295539445236,
            "unit": "ns/iter",
            "extra": "iterations: 40421\ncpu: 17318.5745033523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14120.822145077278,
            "unit": "ns/iter",
            "extra": "iterations: 49546\ncpu: 14120.300326968843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13539.586417005625,
            "unit": "ns/iter",
            "extra": "iterations: 51697\ncpu: 13539.644466796908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10220.845836491351,
            "unit": "ns/iter",
            "extra": "iterations: 68596\ncpu: 10220.868563764665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68012.53148418092,
            "unit": "ns/iter",
            "extra": "iterations: 10275\ncpu: 68011.09489051082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114983.46697337663,
            "unit": "ns/iter",
            "extra": "iterations: 6086\ncpu: 114985.17909957295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27964.411654282,
            "unit": "ns/iter",
            "extra": "iterations: 25038\ncpu: 27963.02819714031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28133.003329719977,
            "unit": "ns/iter",
            "extra": "iterations: 24927\ncpu: 28131.475909656416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27785.412793460575,
            "unit": "ns/iter",
            "extra": "iterations: 25216\ncpu: 27784.80329949231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56090.59217151772,
            "unit": "ns/iter",
            "extra": "iterations: 12314\ncpu: 56091.39191164494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52693.964094838826,
            "unit": "ns/iter",
            "extra": "iterations: 13285\ncpu: 52694.8061723751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21035.17462937528,
            "unit": "ns/iter",
            "extra": "iterations: 33322\ncpu: 21035.25298601524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103662.2957600899,
            "unit": "ns/iter",
            "extra": "iterations: 6769\ncpu: 103661.38277441157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84990.51393791489,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 84987.41326841255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85349.1681923642,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 85350.21359697291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84395.7497589215,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 84394.10559305771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123157.99050131186,
            "unit": "ns/iter",
            "extra": "iterations: 5685\ncpu: 123156.71064203966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 504843.91426517116,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 504840.63400575647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 409185.57703571,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 409187.17047451506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 415271.9228486414,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415272.9970326433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 412838.33156344277,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 412840.1769911564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261927.25627575765,
            "unit": "ns/iter",
            "extra": "iterations: 2669\ncpu: 261923.11727238522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 406242.9366647077,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 406249.1574665905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21619.39068831905,
            "unit": "ns/iter",
            "extra": "iterations: 32325\ncpu: 21619.028615622476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106605.63035851711,
            "unit": "ns/iter",
            "extra": "iterations: 6555\ncpu: 106606.14797864143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87298.27968007712,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 87297.22569357623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87413.4292106883,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 87410.8390304542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86472.56419753494,
            "unit": "ns/iter",
            "extra": "iterations: 8100\ncpu: 86472.85185185252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126756.84697572816,
            "unit": "ns/iter",
            "extra": "iterations: 5522\ncpu: 126753.89351684108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 496618.4316087694,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 496608.6463501064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 415779.43635293044,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 415760.27235049946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 418493.0581185991,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 418497.12402636243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 406040.76392113493,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 406042.11136890826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261949.6665416118,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 261948.19954988774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 407049.82151163847,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 407050.9883720907 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390782395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7013.703910502494,
            "unit": "ns/iter",
            "extra": "iterations: 99578\ncpu: 7013.323224005304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51358.2705000033,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51357.299999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94582.58562927203,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 94581.0557637205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138841.8533724352,
            "unit": "ns/iter",
            "extra": "iterations: 6138\ncpu: 138839.58944281528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181553.84060087582,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 181555.72710202375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225929.41171875046,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 225917.7604166667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269617.8205779518,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 269604.95395363605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313368.31166487036,
            "unit": "ns/iter",
            "extra": "iterations: 2769\ncpu: 313358.36041892396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357148.6502260622,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 357131.36046033737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5691.922454681077,
            "unit": "ns/iter",
            "extra": "iterations: 123128\ncpu: 5691.493405236819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4610.729599768188,
            "unit": "ns/iter",
            "extra": "iterations: 151812\ncpu: 4610.596659025631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4618.10072392644,
            "unit": "ns/iter",
            "extra": "iterations: 151811\ncpu: 4618.023068157117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4610.679372595629,
            "unit": "ns/iter",
            "extra": "iterations: 152055\ncpu: 4610.627075729171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7303.635224329956,
            "unit": "ns/iter",
            "extra": "iterations: 95752\ncpu: 7303.3994068009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25629.442981491284,
            "unit": "ns/iter",
            "extra": "iterations: 31823\ncpu: 25627.872922100374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128013.29112232609,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 128008.28384798113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98738.58648617598,
            "unit": "ns/iter",
            "extra": "iterations: 8643\ncpu: 98733.40275367345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99529.4040616229,
            "unit": "ns/iter",
            "extra": "iterations: 8568\ncpu: 99525.42016806714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95167.36490718124,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 95161.67524043848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 210274.8849056603,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 210266.88679245295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1693492.936131329,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1693392.8832116798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1325320.807418017,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325242.938659054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1321215.132290146,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1321155.4765291587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1303978.3511236547,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1303946.2078651679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 721768.1587548539,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 721748.0933852139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1278757.0840220058,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1278752.7548209322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33325.35160165252,
            "unit": "ns/iter",
            "extra": "iterations: 24943\ncpu: 33324.86870063742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156331.08623187852,
            "unit": "ns/iter",
            "extra": "iterations: 5520\ncpu: 156331.28623188415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124878.3678929795,
            "unit": "ns/iter",
            "extra": "iterations: 6877\ncpu: 124868.37283699278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122954.3952853276,
            "unit": "ns/iter",
            "extra": "iterations: 6957\ncpu: 122952.6232571509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120952.70398643077,
            "unit": "ns/iter",
            "extra": "iterations: 7074\ncpu: 120951.18744698915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221026.1893551696,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 221023.46468782055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1734528.3656715548,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1734438.05970149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1363238.954611947,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1363170.7174231294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1359426.9170306022,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1359403.930131009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1333489.777142875,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1333474.8571428584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 770246.1718241026,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 770237.8664495142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1320396.344192641,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1320334.84419264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6187303.09271532,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6187205.298013264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2796236.315315365,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2796126.7267267243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24643.79060035014,
            "unit": "ns/iter",
            "extra": "iterations: 33214\ncpu: 24643.611127837714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123409.62762762763,
            "unit": "ns/iter",
            "extra": "iterations: 6993\ncpu: 123406.30630630685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97305.86959955328,
            "unit": "ns/iter",
            "extra": "iterations: 8865\ncpu: 97306.90355329977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97061.87298182173,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 97058.58642881323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92640.92498108253,
            "unit": "ns/iter",
            "extra": "iterations: 9251\ncpu: 92641.0550210786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 191427.68900154694,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 191423.76019396159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1701833.3959854061,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1701850.7299270134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1324478.1406250345,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1324425.2840909052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1324466.2571022625,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1324457.9545454488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1303014.3963585894,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1302968.207282914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 718865.6779922739,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 718872.8957528991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1276841.1442307597,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1276788.8736263777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2584.4367287070577,
            "unit": "ns/iter",
            "extra": "iterations: 272027\ncpu: 2584.41441474561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17386.922389020823,
            "unit": "ns/iter",
            "extra": "iterations: 40368\ncpu: 17386.593341260366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14225.270285098512,
            "unit": "ns/iter",
            "extra": "iterations: 49211\ncpu: 14225.410985348833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13028.714376057713,
            "unit": "ns/iter",
            "extra": "iterations: 53763\ncpu: 13027.995089559721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10057.71237977524,
            "unit": "ns/iter",
            "extra": "iterations: 69557\ncpu: 10057.378840375575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66171.29621233432,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66170.75658826905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115989.22404916317,
            "unit": "ns/iter",
            "extra": "iterations: 6021\ncpu: 115988.92210596298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27781.800031689894,
            "unit": "ns/iter",
            "extra": "iterations: 25244\ncpu: 27781.068768816403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28129.66435986188,
            "unit": "ns/iter",
            "extra": "iterations: 24854\ncpu: 28129.625010058633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27723.22154334253,
            "unit": "ns/iter",
            "extra": "iterations: 25205\ncpu: 27722.368577663136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55925.66158877427,
            "unit": "ns/iter",
            "extra": "iterations: 12538\ncpu: 55924.61317594554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53362.59678776286,
            "unit": "ns/iter",
            "extra": "iterations: 13075\ncpu: 53360.73422562187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20462.97430138306,
            "unit": "ns/iter",
            "extra": "iterations: 34282\ncpu: 20461.959628959892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103630.295484823,
            "unit": "ns/iter",
            "extra": "iterations: 6755\ncpu: 103630.17024426167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84202.25892316915,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 84203.15789473732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85326.15057820776,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 85322.88496652363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82943.35999048095,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 82944.28180411657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121998.89485614258,
            "unit": "ns/iter",
            "extra": "iterations: 5735\ncpu: 121995.48387096783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 501430.143982828,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 501429.3696275114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411828.47408716986,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 411810.95406360895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414908.00948989386,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 414912.27758007246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 411797.71663729363,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411780.89359200426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256729.5613328311,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 256732.66202856414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 413793.6330063479,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 413782.2850548188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20821.418391282776,
            "unit": "ns/iter",
            "extra": "iterations: 33679\ncpu: 20821.642566584243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104699.01527174805,
            "unit": "ns/iter",
            "extra": "iterations: 6679\ncpu: 104694.92438987772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85589.17433888468,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 85590.14446620933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86448.78239367357,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 86445.14094955448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86092.39075371511,
            "unit": "ns/iter",
            "extra": "iterations: 8133\ncpu: 86092.25378089362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124375.89032144523,
            "unit": "ns/iter",
            "extra": "iterations: 5662\ncpu: 124377.44613210666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 499562.8427448019,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 499543.1736954965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 409747.0995899283,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 409746.5143526653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 413869.1059171588,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 413861.47928994586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 404043.41251449217,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 404048.14600231766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261797.75683775046,
            "unit": "ns/iter",
            "extra": "iterations: 2669\ncpu: 261797.6395653847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 405879.01682136225,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 405867.40139211266 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702391745448,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6901.44930802695,
            "unit": "ns/iter",
            "extra": "iterations: 101160\ncpu: 6900.925266903916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50698.26799999646,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50696.04999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93335.61976731353,
            "unit": "ns/iter",
            "extra": "iterations: 9197\ncpu: 93328.65064695009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135746.4635876413,
            "unit": "ns/iter",
            "extra": "iterations: 6344\ncpu: 135741.18852459014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179043.0187474243,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 179034.56942727655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225232.01303680422,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 225211.73312883425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263732.9633923121,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 263719.2800488104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 306510.83515323,
            "unit": "ns/iter",
            "extra": "iterations: 2839\ncpu: 306489.8555829517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 349027.3960674296,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 349009.7110754416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5665.0183896623075,
            "unit": "ns/iter",
            "extra": "iterations: 122732\ncpu: 5664.7345435583175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4649.826093904707,
            "unit": "ns/iter",
            "extra": "iterations: 150173\ncpu: 4649.51489282362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4698.004408868942,
            "unit": "ns/iter",
            "extra": "iterations: 148791\ncpu: 4697.872183129358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4685.918518462153,
            "unit": "ns/iter",
            "extra": "iterations: 131269\ncpu: 4685.428395127562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7343.3830679491,
            "unit": "ns/iter",
            "extra": "iterations: 95145\ncpu: 7342.938672552425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25118.95499100368,
            "unit": "ns/iter",
            "extra": "iterations: 32238\ncpu: 25117.60965320433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123154.41841842147,
            "unit": "ns/iter",
            "extra": "iterations: 6993\ncpu: 123009.28070928072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95446.12170834231,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 95440.7280371762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94398.41055071443,
            "unit": "ns/iter",
            "extra": "iterations: 9061\ncpu: 94392.36287385474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89396.89580044283,
            "unit": "ns/iter",
            "extra": "iterations: 9501\ncpu: 89394.34796337201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 209949.6351829985,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 209935.30106257362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1677296.0126125915,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1677215.1351351372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1318645.9971590897,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1318576.8465909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1319127.675177284,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1319070.9219858155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1307558.566807263,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1307491.4205344587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 722985.0554687723,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 722959.6093750012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1271019.4506849204,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1270970.68493151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32518.458280606857,
            "unit": "ns/iter",
            "extra": "iterations: 25288\ncpu: 32517.25324264479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 148630.9586776846,
            "unit": "ns/iter",
            "extra": "iterations: 5808\ncpu: 148624.46625344327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 118058.7173733442,
            "unit": "ns/iter",
            "extra": "iterations: 7264\ncpu: 118054.17125550668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119774.88465298564,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 119769.65507610684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 114164.39954702368,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 114159.88542499313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222060.65168251292,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 222052.42743385542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1708442.8201834364,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1708401.4678899113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1348326.3994211361,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1348282.6338639606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1352948.1075581315,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1352888.9534883648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1333752.326180204,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1333682.2603719544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 767143.0725474121,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 767106.7600989289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1306276.2075736288,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1306220.8976157124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6275785.587837852,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6275495.945945975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2857314.865443516,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2857181.345565755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24305.270066043093,
            "unit": "ns/iter",
            "extra": "iterations: 33614\ncpu: 24304.182780984018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 119666.29355376067,
            "unit": "ns/iter",
            "extra": "iterations: 7198\ncpu: 119662.14226173957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93512.39690665771,
            "unit": "ns/iter",
            "extra": "iterations: 9181\ncpu: 93506.92734996164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 91049.50728181495,
            "unit": "ns/iter",
            "extra": "iterations: 9407\ncpu: 91046.77367917489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 87014.51936799208,
            "unit": "ns/iter",
            "extra": "iterations: 9810\ncpu: 87011.9469928644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192597.0962008455,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 192592.75716507502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1677027.235611482,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1676968.705035975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1317146.725352173,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1317105.492957743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1317507.1386138413,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1317455.586987261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1302848.8429172302,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1302787.6577840056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 716760.7599999954,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 716732.2307692323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1267873.6444141832,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1267841.416893738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2609.7253876351615,
            "unit": "ns/iter",
            "extra": "iterations: 268229\ncpu: 2609.6592836717846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17282.9316673654,
            "unit": "ns/iter",
            "extra": "iterations: 40537\ncpu: 17282.28038582033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13036.214890805311,
            "unit": "ns/iter",
            "extra": "iterations: 53711\ncpu: 13035.759900206613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13008.800367796883,
            "unit": "ns/iter",
            "extra": "iterations: 53834\ncpu: 13008.492774083225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10134.317049682388,
            "unit": "ns/iter",
            "extra": "iterations: 68535\ncpu: 10133.846939519939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66275.11249881616,
            "unit": "ns/iter",
            "extra": "iterations: 10569\ncpu: 66274.02781720182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114111.61739837685,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 114108.34146341508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28061.982705350347,
            "unit": "ns/iter",
            "extra": "iterations: 24921\ncpu: 28060.13001083422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28069.063973062726,
            "unit": "ns/iter",
            "extra": "iterations: 24948\ncpu: 28067.616642616686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27733.872038104117,
            "unit": "ns/iter",
            "extra": "iterations: 25195\ncpu: 27732.4270688628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56048.65289918773,
            "unit": "ns/iter",
            "extra": "iterations: 12469\ncpu: 56045.74544871244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52781.81246198344,
            "unit": "ns/iter",
            "extra": "iterations: 14797\ncpu: 52776.765560586864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20797.15544719295,
            "unit": "ns/iter",
            "extra": "iterations: 33632\ncpu: 20795.813510941854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102987.13311735772,
            "unit": "ns/iter",
            "extra": "iterations: 6791\ncpu: 102979.82624061292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84803.76031457953,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 84800.50816696869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83968.5310510553,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 83966.69069069075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83118.92294013171,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 83114.75992886708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125148.49750268372,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 125141.6696396719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 494237.33757061674,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 494216.9491525418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 408130.01516919833,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 408117.0361726987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414224.13981039776,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 414213.38862560014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 406757.36236931547,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 406725.0290360013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 257584.55101288314,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 257568.6187845334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 403251.45250432217,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 402503.7420840562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20939.042714246436,
            "unit": "ns/iter",
            "extra": "iterations: 33291\ncpu: 20937.769967859185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104025.56939078296,
            "unit": "ns/iter",
            "extra": "iterations: 6730\ncpu: 104018.81129272026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85191.15200974423,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 85190.13398294734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85847.64574376661,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 85842.09556565568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84679.24400581312,
            "unit": "ns/iter",
            "extra": "iterations: 8258\ncpu: 84672.88689755464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126983.27259528499,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 126975.0453720495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 490402.8158263537,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 490385.36414565804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 406705.16898952826,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 406687.1080139406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 409367.5450819566,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 409350.52693208214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 402430.92811961035,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 402420.529039677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261605.09559372987,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 261598.02091112663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 400360.71706757846,
            "unit": "ns/iter",
            "extra": "iterations: 1746\ncpu: 400339.23253150086 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396466219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6845.238282930989,
            "unit": "ns/iter",
            "extra": "iterations: 102244\ncpu: 6845.187981690857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51395.37879999807,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51390.54999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94634.83637965204,
            "unit": "ns/iter",
            "extra": "iterations: 9082\ncpu: 94629.59700506496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137180.0110258906,
            "unit": "ns/iter",
            "extra": "iterations: 6258\ncpu: 137167.51358261425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181796.7905419513,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 181785.33165934295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224767.8559122945,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 224748.2380579483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266826.25061730045,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 266812.59259259276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310751.2354203882,
            "unit": "ns/iter",
            "extra": "iterations: 2795\ncpu: 310733.23792486585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354747.32084690605,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 354746.00977198675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5711.019553095258,
            "unit": "ns/iter",
            "extra": "iterations: 123561\ncpu: 5710.525165707632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4848.130390967315,
            "unit": "ns/iter",
            "extra": "iterations: 150831\ncpu: 4847.838972094603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4606.751293803511,
            "unit": "ns/iter",
            "extra": "iterations: 152071\ncpu: 4606.37925705755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4638.069840345881,
            "unit": "ns/iter",
            "extra": "iterations: 151202\ncpu: 4637.751484768724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7298.573518211323,
            "unit": "ns/iter",
            "extra": "iterations: 95847\ncpu: 7297.986374117085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25733.55600698394,
            "unit": "ns/iter",
            "extra": "iterations: 31505\ncpu: 25731.95048405017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131571.28492646612,
            "unit": "ns/iter",
            "extra": "iterations: 6528\ncpu: 131566.22242647066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101797.58491240664,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 101797.04445238928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100624.35953866105,
            "unit": "ns/iter",
            "extra": "iterations: 8497\ncpu: 100621.45463104623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97310.45031978056,
            "unit": "ns/iter",
            "extra": "iterations: 8756\ncpu: 97309.95888533593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 221463.43451348308,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 221453.82520425878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1691995.256363622,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1691973.8181818193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1339577.624277435,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1339528.7572254296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1333288.3506493652,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1333280.9523809545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1318445.9189189826,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1318387.1977240408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 728896.1869085196,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 728872.4763406928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1290686.5597221737,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1290610.277777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34128.38576070375,
            "unit": "ns/iter",
            "extra": "iterations: 24313\ncpu: 34126.96911117511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160790.23643483352,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 160786.7797874322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127386.80480569406,
            "unit": "ns/iter",
            "extra": "iterations: 6742\ncpu: 127382.43844556481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124104.36262465794,
            "unit": "ns/iter",
            "extra": "iterations: 6919\ncpu: 124097.28284434191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121815.17019462469,
            "unit": "ns/iter",
            "extra": "iterations: 7039\ncpu: 121807.04645546238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 232795.05025529946,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 232781.56409567286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1716686.5962963128,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1716511.8518518445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1366630.1323529992,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1366556.9117647035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1377327.3881481516,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1377215.4074074142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1346282.5765895816,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1345251.0115607008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 758110.3051839449,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 757986.5384615357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1322332.8530670449,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1322259.4864479406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6204333.033333191,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6203917.333333303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2823626.4878787003,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2823412.1212121355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24719.375531242367,
            "unit": "ns/iter",
            "extra": "iterations: 33177\ncpu: 24718.048648159936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127013.63106653205,
            "unit": "ns/iter",
            "extra": "iterations: 6779\ncpu: 127006.1218468797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97785.66222526257,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 97778.36237330592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98195.7459335631,
            "unit": "ns/iter",
            "extra": "iterations: 8730\ncpu: 98190.81328751463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93985.3562396906,
            "unit": "ns/iter",
            "extra": "iterations: 9095\ncpu: 93977.37218251784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 202965.2283777506,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 202957.15287517468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1689546.610507115,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1689484.6014492845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1331060.955651072,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1331043.633762518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1332135.7100000698,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1332099.8571428584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1312114.427362345,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1312095.0634696747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 726302.2722308883,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 726288.6115444639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1283520.8386206497,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1283461.2413793078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2656.023627286581,
            "unit": "ns/iter",
            "extra": "iterations: 263001\ncpu: 2655.9830570986555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17535.294005992513,
            "unit": "ns/iter",
            "extra": "iterations: 40040\ncpu: 17535.19980019974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13242.74538368434,
            "unit": "ns/iter",
            "extra": "iterations: 52856\ncpu: 13242.383078553014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12405.886139755346,
            "unit": "ns/iter",
            "extra": "iterations: 56341\ncpu: 12405.62467829819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10170.275971139054,
            "unit": "ns/iter",
            "extra": "iterations: 68605\ncpu: 10169.709204868448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 69397.07295797189,
            "unit": "ns/iter",
            "extra": "iterations: 10088\ncpu: 69396.7386994446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115663.97455387878,
            "unit": "ns/iter",
            "extra": "iterations: 6052\ncpu: 115661.89689358896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28100.291012498503,
            "unit": "ns/iter",
            "extra": "iterations: 24968\ncpu: 28100.140179429654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28465.549136947884,
            "unit": "ns/iter",
            "extra": "iterations: 24564\ncpu: 28464.472398632377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27920.061656647376,
            "unit": "ns/iter",
            "extra": "iterations: 25123\ncpu: 27919.94188592147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56640.44296931978,
            "unit": "ns/iter",
            "extra": "iterations: 12353\ncpu: 56639.577430583966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53399.88621978526,
            "unit": "ns/iter",
            "extra": "iterations: 13113\ncpu: 53396.83520170841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20943.348083654946,
            "unit": "ns/iter",
            "extra": "iterations: 33423\ncpu: 20943.24267719863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101869.68561047477,
            "unit": "ns/iter",
            "extra": "iterations: 6880\ncpu: 101864.04069767296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84478.94485337388,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 84478.50850729983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85170.66654519236,
            "unit": "ns/iter",
            "extra": "iterations: 8232\ncpu: 85170.18950437325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83094.32532413087,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83091.54276198459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125363.45319224888,
            "unit": "ns/iter",
            "extra": "iterations: 5576\ncpu: 125362.91248206413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 495595.7322946238,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 495584.5609065083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 414986.518979806,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 414984.8161328607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414963.90337875567,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 414961.7664493184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 410098.441520473,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 410072.0467836264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261536.1010816665,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 261534.83774711387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 404056.2156069164,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 404035.9537572273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21309.443009903734,
            "unit": "ns/iter",
            "extra": "iterations: 32918\ncpu: 21309.34139376635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106740.03795732185,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 106735.0914634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86748.22664851983,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 86747.69268835806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87041.71268794981,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 87041.34460047306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87469.97601088176,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 87465.80932360554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127188.38174877487,
            "unit": "ns/iter",
            "extra": "iterations: 5501\ncpu: 127187.5477185967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 496183.84337352286,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 496152.445074417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 413799.6310507833,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 413793.03423848946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 415619.80392161437,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 415617.88472965045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 406212.7746806386,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 406198.08362369676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 262462.595577202,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 262461.39430284494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 405642.81987217366,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 405621.78965717426 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}