window.BENCHMARK_DATA = {
  "lastUpdate": 1702409116027,
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
        "date": 1702409114336,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 612.4828663935533,
            "unit": "ns/iter",
            "extra": "iterations: 1139369\ncpu: 612.4771693805958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5601.697310000304,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5601.387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11019.546988892005,
            "unit": "ns/iter",
            "extra": "iterations: 74358\ncpu: 11019.242045240591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16407.722174355753,
            "unit": "ns/iter",
            "extra": "iterations: 51068\ncpu: 16407.3431503094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21534.17998278503,
            "unit": "ns/iter",
            "extra": "iterations: 38337\ncpu: 21533.153350549077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26853.97262697397,
            "unit": "ns/iter",
            "extra": "iterations: 31089\ncpu: 26852.697095435677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31958.598685475394,
            "unit": "ns/iter",
            "extra": "iterations: 26017\ncpu: 31957.28177729947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38985.81819008598,
            "unit": "ns/iter",
            "extra": "iterations: 21990\ncpu: 38982.82401091404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42368.90700753793,
            "unit": "ns/iter",
            "extra": "iterations: 19636\ncpu: 42366.86697901808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 560.6713938482786,
            "unit": "ns/iter",
            "extra": "iterations: 1253178\ncpu: 560.6335253252139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 428.9695910516616,
            "unit": "ns/iter",
            "extra": "iterations: 1623897\ncpu: 428.9405670433531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 426.60529300777574,
            "unit": "ns/iter",
            "extra": "iterations: 1631851\ncpu: 426.6052476604782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 429.5728966508922,
            "unit": "ns/iter",
            "extra": "iterations: 1626323\ncpu: 429.55175570904424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 921.9363490255314,
            "unit": "ns/iter",
            "extra": "iterations: 760334\ncpu: 921.9151057298516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1417.0251443471632,
            "unit": "ns/iter",
            "extra": "iterations: 558376\ncpu: 1416.949510723957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9094.072046865778,
            "unit": "ns/iter",
            "extra": "iterations: 91496\ncpu: 9093.561467167976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8724.24790177558,
            "unit": "ns/iter",
            "extra": "iterations: 93174\ncpu: 8723.798484555795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9289.252534520747,
            "unit": "ns/iter",
            "extra": "iterations: 88281\ncpu: 9288.56605611626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8182.326118079237,
            "unit": "ns/iter",
            "extra": "iterations: 99188\ncpu: 8181.936322942284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 26432.404049238252,
            "unit": "ns/iter",
            "extra": "iterations: 30870\ncpu: 26430.868156786582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 267005.5182908042,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 266994.8047955738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213308.20185049987,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 213290.4796688578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210510.43337393322,
            "unit": "ns/iter",
            "extra": "iterations: 4105\ncpu: 210499.04993909824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210782.19476109763,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 210770.70094591312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109236.83627267211,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 109232.39524702933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202036.89760855283,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 202022.52147666624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5434.6506856069855,
            "unit": "ns/iter",
            "extra": "iterations: 152055\ncpu: 5434.266548288455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26579.43422773726,
            "unit": "ns/iter",
            "extra": "iterations: 31343\ncpu: 26578.304565612696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22313.3682329724,
            "unit": "ns/iter",
            "extra": "iterations: 37498\ncpu: 22312.288655394947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22663.420045137183,
            "unit": "ns/iter",
            "extra": "iterations: 36777\ncpu: 22662.172009679954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21757.259485006954,
            "unit": "ns/iter",
            "extra": "iterations: 38719\ncpu: 21755.96477181737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43268.04763320703,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 43265.853948620264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 290378.9438315013,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 290360.78234704066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 224409.69232763897,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 224399.22239502243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 225302.05101777028,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 225288.7142489041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 220713.5271794851,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 220704.69230769345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121254.24397340609,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 121246.52258243268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 214724.03665180918,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 214708.94006934107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 864477.6047794397,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 864431.9852941196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476489.1835853039,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 476463.82289416716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1387.0041786917577,
            "unit": "ns/iter",
            "extra": "iterations: 568599\ncpu: 1386.957943999198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9538.819226375788,
            "unit": "ns/iter",
            "extra": "iterations: 89294\ncpu: 9538.569220776311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8455.048806463597,
            "unit": "ns/iter",
            "extra": "iterations: 97651\ncpu: 8454.972299310828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9366.847853156076,
            "unit": "ns/iter",
            "extra": "iterations: 93160\ncpu: 9366.762559038236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7640.777593993187,
            "unit": "ns/iter",
            "extra": "iterations: 107614\ncpu: 7640.47893396772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26418.307569045133,
            "unit": "ns/iter",
            "extra": "iterations: 31827\ncpu: 26418.02557576898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 278042.91627469985,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 278039.19724051293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210137.47647198732,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 210134.87822180166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210069.19278812376,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 210061.65448974838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208901.68877911178,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 208894.51893672106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102489.89361702299,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 102482.54617722718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 199014.45230560706,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 199003.61663652814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.89965467018197,
            "unit": "ns/iter",
            "extra": "iterations: 3610751\ncpu: 191.88916654734712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1431.4246678613488,
            "unit": "ns/iter",
            "extra": "iterations: 485490\ncpu: 1431.4189787637188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1202.4775593950008,
            "unit": "ns/iter",
            "extra": "iterations: 581446\ncpu: 1202.4765842399795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1300.0563717040704,
            "unit": "ns/iter",
            "extra": "iterations: 539526\ncpu: 1300.005931132136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 922.8274913705781,
            "unit": "ns/iter",
            "extra": "iterations: 752658\ncpu: 922.7646553946129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8784.034942282864,
            "unit": "ns/iter",
            "extra": "iterations: 80218\ncpu: 8783.614650078578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13005.547719461254,
            "unit": "ns/iter",
            "extra": "iterations: 53825\ncpu: 13004.707849512293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2954.765531172926,
            "unit": "ns/iter",
            "extra": "iterations: 235140\ncpu: 2954.6453176830696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2947.4051819160413,
            "unit": "ns/iter",
            "extra": "iterations: 238599\ncpu: 2947.2298710388673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2959.5671096567094,
            "unit": "ns/iter",
            "extra": "iterations: 238982\ncpu: 2959.4517578729674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5597.954795528274,
            "unit": "ns/iter",
            "extra": "iterations: 125054\ncpu: 5597.83853375343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5533.615089158828,
            "unit": "ns/iter",
            "extra": "iterations: 126011\ncpu: 5533.26455626885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1844.6280706669575,
            "unit": "ns/iter",
            "extra": "iterations: 378338\ncpu: 1844.5630626582854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9846.00213663316,
            "unit": "ns/iter",
            "extra": "iterations: 71608\ncpu: 9845.136018322088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7831.597542363816,
            "unit": "ns/iter",
            "extra": "iterations: 88459\ncpu: 7831.202025797228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7789.339237317281,
            "unit": "ns/iter",
            "extra": "iterations: 88923\ncpu: 7789.095059770788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7774.107258731824,
            "unit": "ns/iter",
            "extra": "iterations: 89382\ncpu: 7773.47900024614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18191.433791143572,
            "unit": "ns/iter",
            "extra": "iterations: 38371\ncpu: 18190.388574705183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58158.56921161645,
            "unit": "ns/iter",
            "extra": "iterations: 12050\ncpu: 58154.47302904603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46920.50138653938,
            "unit": "ns/iter",
            "extra": "iterations: 14785\ncpu: 46917.95738924555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47215.17347487317,
            "unit": "ns/iter",
            "extra": "iterations: 14884\ncpu: 47214.72722386521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46414.52211041917,
            "unit": "ns/iter",
            "extra": "iterations: 15106\ncpu: 46410.17476499341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26350.561776282226,
            "unit": "ns/iter",
            "extra": "iterations: 26167\ncpu: 26348.39301410144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45586.84368223717,
            "unit": "ns/iter",
            "extra": "iterations: 15219\ncpu: 45581.49024246087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1837.7404179419548,
            "unit": "ns/iter",
            "extra": "iterations: 375076\ncpu: 1837.6662329768028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9911.974276573063,
            "unit": "ns/iter",
            "extra": "iterations: 70947\ncpu: 9911.951174820591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7845.200962897531,
            "unit": "ns/iter",
            "extra": "iterations: 89106\ncpu: 7844.837609139762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7865.548302843236,
            "unit": "ns/iter",
            "extra": "iterations: 89208\ncpu: 7865.143260694133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7802.571657897148,
            "unit": "ns/iter",
            "extra": "iterations: 89704\ncpu: 7801.937483278209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18102.05430237953,
            "unit": "ns/iter",
            "extra": "iterations: 38746\ncpu: 18101.28271305416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57590.912650848804,
            "unit": "ns/iter",
            "extra": "iterations: 12181\ncpu: 57590.23889664198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46642.13321764329,
            "unit": "ns/iter",
            "extra": "iterations: 14983\ncpu: 46639.518120536435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46500.98216173818,
            "unit": "ns/iter",
            "extra": "iterations: 15136\ncpu: 46496.72965116336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47032.57934593311,
            "unit": "ns/iter",
            "extra": "iterations: 14922\ncpu: 47030.096501809414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26776.453298498833,
            "unit": "ns/iter",
            "extra": "iterations: 26027\ncpu: 26773.86175894309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45762.4619252914,
            "unit": "ns/iter",
            "extra": "iterations: 15312\ncpu: 45761.39629049121 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}