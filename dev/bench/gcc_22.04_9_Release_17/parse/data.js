window.BENCHMARK_DATA = {
  "lastUpdate": 1702398778370,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-9 22.04 Release c++-17": [
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
        "date": 1702398778048,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 633.1379903092702,
            "unit": "ns/iter",
            "extra": "iterations: 1104150\ncpu: 633.1358963908889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5840.987084033167,
            "unit": "ns/iter",
            "extra": "iterations: 138743\ncpu: 5840.666556150581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11317.442662972582,
            "unit": "ns/iter",
            "extra": "iterations: 72911\ncpu: 11316.994692158933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17399.525667059497,
            "unit": "ns/iter",
            "extra": "iterations: 49246\ncpu: 17398.724769524426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22520.003796816465,
            "unit": "ns/iter",
            "extra": "iterations: 36873\ncpu: 22518.674911181635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28148.665080649513,
            "unit": "ns/iter",
            "extra": "iterations: 29634\ncpu: 28147.701963960313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33523.96232490687,
            "unit": "ns/iter",
            "extra": "iterations: 24844\ncpu: 33522.45612622764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38471.180061788145,
            "unit": "ns/iter",
            "extra": "iterations: 21687\ncpu: 38469.06902752799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44255.30257702054,
            "unit": "ns/iter",
            "extra": "iterations: 19053\ncpu: 44252.500918490536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 599.2199736606535,
            "unit": "ns/iter",
            "extra": "iterations: 1170872\ncpu: 599.1763403685466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 449.85291368308526,
            "unit": "ns/iter",
            "extra": "iterations: 1552245\ncpu: 449.8343367187528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 449.798152866306,
            "unit": "ns/iter",
            "extra": "iterations: 1555058\ncpu: 449.76656819231135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 451.19055856695087,
            "unit": "ns/iter",
            "extra": "iterations: 1550951\ncpu: 451.17963107796476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 918.297480752585,
            "unit": "ns/iter",
            "extra": "iterations: 760624\ncpu: 918.2505416605318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1383.5656545574166,
            "unit": "ns/iter",
            "extra": "iterations: 568384\ncpu: 1383.5224073865559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8904.681670801605,
            "unit": "ns/iter",
            "extra": "iterations: 91908\ncpu: 8904.144361753075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8624.043773726811,
            "unit": "ns/iter",
            "extra": "iterations: 95354\ncpu: 8623.62040396836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9424.369022012734,
            "unit": "ns/iter",
            "extra": "iterations: 87404\ncpu: 9423.877625737952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8062.163873552279,
            "unit": "ns/iter",
            "extra": "iterations: 102335\ncpu: 8061.811696877898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27237.68169874488,
            "unit": "ns/iter",
            "extra": "iterations: 30446\ncpu: 27235.71240885501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 280354.4353135334,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 280336.43564356386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220462.83240926708,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 220451.03326612964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 219753.54423660645,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 219742.99797775495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218633.3019627608,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 218629.3155510823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108134.4211307636,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 108131.98070023504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209708.4239287358,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 209705.58497833455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5326.202736178766,
            "unit": "ns/iter",
            "extra": "iterations: 151379\ncpu: 5326.134404375763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26184.150328220872,
            "unit": "ns/iter",
            "extra": "iterations: 32143\ncpu: 26183.45518464358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22319.567112222034,
            "unit": "ns/iter",
            "extra": "iterations: 37631\ncpu: 22318.147272195736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23014.798024449337,
            "unit": "ns/iter",
            "extra": "iterations: 36648\ncpu: 23014.590154987996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21326.416993163224,
            "unit": "ns/iter",
            "extra": "iterations: 39051\ncpu: 21326.12993265224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45489.94061396249,
            "unit": "ns/iter",
            "extra": "iterations: 18405\ncpu: 45401.35289323534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 300592.4061196272,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 300584.52712100104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 233922.59030956842,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 233920.43068640577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 232733.50614973356,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 232725.93582887563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 233005.34323962312,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 233002.24899598365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121014.82656724445,
            "unit": "ns/iter",
            "extra": "iterations: 7242\ncpu: 121011.3642640153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 222142.56645325493,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 222140.02560819447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 880819.2976958867,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 880781.3824884739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 480103.2703583073,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 480090.8794788255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1425.9395221467732,
            "unit": "ns/iter",
            "extra": "iterations: 552136\ncpu: 1425.9296622571244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8562.685480813523,
            "unit": "ns/iter",
            "extra": "iterations: 94964\ncpu: 8562.714291731632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7817.663728323986,
            "unit": "ns/iter",
            "extra": "iterations: 103800\ncpu: 7817.495183044313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8596.207575662425,
            "unit": "ns/iter",
            "extra": "iterations: 95358\ncpu: 8596.07479183708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7583.993134989774,
            "unit": "ns/iter",
            "extra": "iterations: 106482\ncpu: 7583.788809376265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26749.351408791754,
            "unit": "ns/iter",
            "extra": "iterations: 31055\ncpu: 26749.05812268553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 292086.7428004026,
            "unit": "ns/iter",
            "extra": "iterations: 3021\ncpu: 292071.43330023106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 221931.6842501814,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 221920.37176588824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 220086.90087390103,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 220085.59300873784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 220033.27962085736,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 220030.30680967757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105810.98596741688,
            "unit": "ns/iter",
            "extra": "iterations: 8409\ncpu: 105808.6573908913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 217906.89431279653,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 217896.30331753512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.37052143774474,
            "unit": "ns/iter",
            "extra": "iterations: 3590745\ncpu: 195.36906686495445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1489.5153664453949,
            "unit": "ns/iter",
            "extra": "iterations: 470343\ncpu: 1489.4851204333866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1221.6247723068643,
            "unit": "ns/iter",
            "extra": "iterations: 572591\ncpu: 1221.5563988955398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1218.1977916567446,
            "unit": "ns/iter",
            "extra": "iterations: 571288\ncpu: 1218.1463640055533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 975.4945056747631,
            "unit": "ns/iter",
            "extra": "iterations: 731664\ncpu: 975.4340790308116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8816.140429474175,
            "unit": "ns/iter",
            "extra": "iterations: 78794\ncpu: 8815.615402187903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14032.771107621715,
            "unit": "ns/iter",
            "extra": "iterations: 49674\ncpu: 14032.429439948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3110.218045978018,
            "unit": "ns/iter",
            "extra": "iterations: 225934\ncpu: 3110.0303628493234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3120.6522595694432,
            "unit": "ns/iter",
            "extra": "iterations: 223339\ncpu: 3120.485002619326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3117.7292094456584,
            "unit": "ns/iter",
            "extra": "iterations: 225968\ncpu: 3117.5816929830507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5665.443098433381,
            "unit": "ns/iter",
            "extra": "iterations: 121016\ncpu: 5665.3153302042665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5863.613476217152,
            "unit": "ns/iter",
            "extra": "iterations: 119351\ncpu: 5863.186734924656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1901.0961163345914,
            "unit": "ns/iter",
            "extra": "iterations: 370655\ncpu: 1900.979077578882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10091.05139220328,
            "unit": "ns/iter",
            "extra": "iterations: 69135\ncpu: 10090.418745931873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8065.039979613869,
            "unit": "ns/iter",
            "extra": "iterations: 88295\ncpu: 8064.7137437000165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8070.980828238749,
            "unit": "ns/iter",
            "extra": "iterations: 86690\ncpu: 8070.720959741615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8040.644431481431,
            "unit": "ns/iter",
            "extra": "iterations: 87429\ncpu: 8040.48427867188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18188.922263696753,
            "unit": "ns/iter",
            "extra": "iterations: 38309\ncpu: 18188.01065023886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60595.6832520039,
            "unit": "ns/iter",
            "extra": "iterations: 11476\ncpu: 60593.00278842731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48754.774575325704,
            "unit": "ns/iter",
            "extra": "iterations: 14364\ncpu: 48754.97772208295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48434.17355085036,
            "unit": "ns/iter",
            "extra": "iterations: 14405\ncpu: 48433.578618535794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48232.6262313139,
            "unit": "ns/iter",
            "extra": "iterations: 14517\ncpu: 48231.34945236639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27024.985068277234,
            "unit": "ns/iter",
            "extra": "iterations: 25851\ncpu: 27024.792077675997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46551.83635636437,
            "unit": "ns/iter",
            "extra": "iterations: 14996\ncpu: 46550.653507602074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1908.557431640685,
            "unit": "ns/iter",
            "extra": "iterations: 366958\ncpu: 1908.51432589014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10192.159210488244,
            "unit": "ns/iter",
            "extra": "iterations: 68802\ncpu: 10191.828725909123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8144.882318134313,
            "unit": "ns/iter",
            "extra": "iterations: 86190\ncpu: 8144.832347140027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8187.284969804319,
            "unit": "ns/iter",
            "extra": "iterations: 85774\ncpu: 8187.315503532487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8185.560353470223,
            "unit": "ns/iter",
            "extra": "iterations: 85778\ncpu: 8185.201333675218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18257.199186250993,
            "unit": "ns/iter",
            "extra": "iterations: 38341\ncpu: 18256.965128713284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60954.686483652156,
            "unit": "ns/iter",
            "extra": "iterations: 11438\ncpu: 60953.2698024125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48671.418175485924,
            "unit": "ns/iter",
            "extra": "iterations: 14360\ncpu: 48670.981894150136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48388.917986308836,
            "unit": "ns/iter",
            "extra": "iterations: 14461\ncpu: 48386.93727957889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48287.79577222492,
            "unit": "ns/iter",
            "extra": "iterations: 14523\ncpu: 48287.50946774071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27405.10345771878,
            "unit": "ns/iter",
            "extra": "iterations: 25566\ncpu: 27405.2022217005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47304.581703766235,
            "unit": "ns/iter",
            "extra": "iterations: 14779\ncpu: 47303.53203870424 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}