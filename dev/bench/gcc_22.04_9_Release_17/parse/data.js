window.BENCHMARK_DATA = {
  "lastUpdate": 1702488571542,
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412544697,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 630.2231893009063,
            "unit": "ns/iter",
            "extra": "iterations: 1101025\ncpu: 630.204309620581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5791.53625999993,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5791.259999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11162.094439457993,
            "unit": "ns/iter",
            "extra": "iterations: 74651\ncpu: 11161.48879452385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16852.234319480016,
            "unit": "ns/iter",
            "extra": "iterations: 50094\ncpu: 16851.18177825688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22074.173782098253,
            "unit": "ns/iter",
            "extra": "iterations: 37852\ncpu: 22073.16918524781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27676.11692591644,
            "unit": "ns/iter",
            "extra": "iterations: 30344\ncpu: 27674.377142103865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32827.39564140232,
            "unit": "ns/iter",
            "extra": "iterations: 25834\ncpu: 32826.4341565379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38251.34420522338,
            "unit": "ns/iter",
            "extra": "iterations: 21830\ncpu: 38250.201557489694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42266.6283023651,
            "unit": "ns/iter",
            "extra": "iterations: 19645\ncpu: 42265.70628658693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 578.636951167548,
            "unit": "ns/iter",
            "extra": "iterations: 1212779\ncpu: 578.6134984197447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 449.7457989428918,
            "unit": "ns/iter",
            "extra": "iterations: 1549848\ncpu: 449.7257150378621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 445.0243547146332,
            "unit": "ns/iter",
            "extra": "iterations: 1571359\ncpu: 445.0151111235562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.4174158421529,
            "unit": "ns/iter",
            "extra": "iterations: 1612773\ncpu: 432.3916633028956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 884.7065100590236,
            "unit": "ns/iter",
            "extra": "iterations: 790085\ncpu: 884.6907611206395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1592.5398095895703,
            "unit": "ns/iter",
            "extra": "iterations: 504489\ncpu: 1592.4361086168399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9500.253088349244,
            "unit": "ns/iter",
            "extra": "iterations: 86373\ncpu: 9499.972213538951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9208.640389310922,
            "unit": "ns/iter",
            "extra": "iterations: 89697\ncpu: 9208.009186483405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10021.391687393932,
            "unit": "ns/iter",
            "extra": "iterations: 86038\ncpu: 10021.162742044215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8640.615822529455,
            "unit": "ns/iter",
            "extra": "iterations: 86775\ncpu: 8640.256986459231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27751.732002803124,
            "unit": "ns/iter",
            "extra": "iterations: 29963\ncpu: 27751.042952975375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 284132.50703785714,
            "unit": "ns/iter",
            "extra": "iterations: 3197\ncpu: 284119.8623709726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211708.64880805617,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 211701.9906610957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209357.27113276697,
            "unit": "ns/iter",
            "extra": "iterations: 4105\ncpu: 209348.3556638246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211855.88404021118,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 211852.6844814906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109479.90401308282,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 109476.24858472763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206751.0709586483,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 206743.93796992485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5505.601410259096,
            "unit": "ns/iter",
            "extra": "iterations: 148767\ncpu: 5505.425934515053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26358.036143815883,
            "unit": "ns/iter",
            "extra": "iterations: 31596\ncpu: 26357.292062286404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22307.47483857144,
            "unit": "ns/iter",
            "extra": "iterations: 37478\ncpu: 22306.71327178609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22820.20916439218,
            "unit": "ns/iter",
            "extra": "iterations: 36249\ncpu: 22818.974316532895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21931.175295257704,
            "unit": "ns/iter",
            "extra": "iterations: 38187\ncpu: 21930.078298897537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44700.16670270402,
            "unit": "ns/iter",
            "extra": "iterations: 18500\ncpu: 44697.67027027013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 324297.8738707432,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 324279.5691452395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 235791.4981029831,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 235780.37940379465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 234156.89339421247,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 234155.20945220217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 230083.91721592948,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 230066.41181123254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123663.43578887524,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 123657.36663844198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 222259.74724992606,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 222244.001023281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 886830.8935574169,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 886807.6563958968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 504660.8752847312,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 504634.2824601368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1560.774381811076,
            "unit": "ns/iter",
            "extra": "iterations: 506156\ncpu: 1560.7109270659687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8795.822039434903,
            "unit": "ns/iter",
            "extra": "iterations: 93369\ncpu: 8795.280017993073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7958.312470424874,
            "unit": "ns/iter",
            "extra": "iterations: 103549\ncpu: 7958.018908922385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8971.193715849919,
            "unit": "ns/iter",
            "extra": "iterations: 91691\ncpu: 8970.63179592325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8134.203300725441,
            "unit": "ns/iter",
            "extra": "iterations: 105189\ncpu: 8134.014963541816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27359.956456798074,
            "unit": "ns/iter",
            "extra": "iterations: 30797\ncpu: 27358.65506380497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 292394.55614442937,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 292385.359390526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218327.84841740833,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 218315.87537091915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216946.75024557294,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 216937.62278978372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 215193.52507874803,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 215183.76544705598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107815.84500365063,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 107811.86481886741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206531.84552081182,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 206523.74794262915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 207.48081458679067,
            "unit": "ns/iter",
            "extra": "iterations: 3378400\ncpu: 207.47238337674688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1530.1301785205571,
            "unit": "ns/iter",
            "extra": "iterations: 453001\ncpu: 1530.0646135438897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1250.0058398935803,
            "unit": "ns/iter",
            "extra": "iterations: 559428\ncpu: 1249.9798007965264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1262.4352034836438,
            "unit": "ns/iter",
            "extra": "iterations: 552059\ncpu: 1262.3523934941659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 930.9326307005604,
            "unit": "ns/iter",
            "extra": "iterations: 752598\ncpu: 930.9048123965292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8952.976187719667,
            "unit": "ns/iter",
            "extra": "iterations: 77733\ncpu: 8952.643021625237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13562.633877047976,
            "unit": "ns/iter",
            "extra": "iterations: 51988\ncpu: 13562.108563514628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3092.1514995639513,
            "unit": "ns/iter",
            "extra": "iterations: 223565\ncpu: 3092.012166484031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3107.3549673057946,
            "unit": "ns/iter",
            "extra": "iterations: 228021\ncpu: 3107.2366141715056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3130.170814454388,
            "unit": "ns/iter",
            "extra": "iterations: 223131\ncpu: 3130.069331468971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5748.1192252081155,
            "unit": "ns/iter",
            "extra": "iterations: 122407\ncpu: 5747.879614727944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5787.62385669152,
            "unit": "ns/iter",
            "extra": "iterations: 121249\ncpu: 5787.4283499245985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1855.204703461678,
            "unit": "ns/iter",
            "extra": "iterations: 373257\ncpu: 1855.099837377475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10035.192886573337,
            "unit": "ns/iter",
            "extra": "iterations: 70627\ncpu: 10034.811049598604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7971.169299498006,
            "unit": "ns/iter",
            "extra": "iterations: 86852\ncpu: 7970.893013402166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7885.840078673999,
            "unit": "ns/iter",
            "extra": "iterations: 88975\ncpu: 7885.586962629947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7828.96159769751,
            "unit": "ns/iter",
            "extra": "iterations: 88953\ncpu: 7828.750014052401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18249.22200822397,
            "unit": "ns/iter",
            "extra": "iterations: 38422\ncpu: 18248.05580136373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60533.68925864666,
            "unit": "ns/iter",
            "extra": "iterations: 11479\ncpu: 60533.31300635877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48062.49407195492,
            "unit": "ns/iter",
            "extra": "iterations: 14676\ncpu: 48059.280457889836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47240.562834134565,
            "unit": "ns/iter",
            "extra": "iterations: 14777\ncpu: 47238.96596061428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46515.77962148541,
            "unit": "ns/iter",
            "extra": "iterations: 15006\ncpu: 46513.634546181565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27329.95049349003,
            "unit": "ns/iter",
            "extra": "iterations: 25431\ncpu: 27328.771971216163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46890.11588886369,
            "unit": "ns/iter",
            "extra": "iterations: 14721\ncpu: 46889.80368181471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1911.3503432457344,
            "unit": "ns/iter",
            "extra": "iterations: 365336\ncpu: 1911.258950664594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9900.860297018695,
            "unit": "ns/iter",
            "extra": "iterations: 70972\ncpu: 9900.41424787244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8127.930337469265,
            "unit": "ns/iter",
            "extra": "iterations: 86230\ncpu: 8127.5055085236645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8075.261390694877,
            "unit": "ns/iter",
            "extra": "iterations: 86935\ncpu: 8074.793811468377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8024.520688030377,
            "unit": "ns/iter",
            "extra": "iterations: 87031\ncpu: 8024.472888970562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17900.633311220172,
            "unit": "ns/iter",
            "extra": "iterations: 39194\ncpu: 17899.721896208583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57778.237900194414,
            "unit": "ns/iter",
            "extra": "iterations: 11963\ncpu: 57775.4409429073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46841.432530116006,
            "unit": "ns/iter",
            "extra": "iterations: 14940\ncpu: 46838.08567603716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46123.218037660954,
            "unit": "ns/iter",
            "extra": "iterations: 15135\ncpu: 46122.147340601536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45886.19981650784,
            "unit": "ns/iter",
            "extra": "iterations: 15259\ncpu: 45882.797037813274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27709.170774297956,
            "unit": "ns/iter",
            "extra": "iterations: 25197\ncpu: 27707.445330793267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46248.58032702051,
            "unit": "ns/iter",
            "extra": "iterations: 15412\ncpu: 46246.171814171415 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702415986685,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 616.0165510287998,
            "unit": "ns/iter",
            "extra": "iterations: 1130685\ncpu: 615.9742987657925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5849.275250000119,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5849.059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11244.54601889316,
            "unit": "ns/iter",
            "extra": "iterations: 74100\ncpu: 11243.924426450738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17184.83418174335,
            "unit": "ns/iter",
            "extra": "iterations: 48915\ncpu: 17184.123479505262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22542.84338064787,
            "unit": "ns/iter",
            "extra": "iterations: 37058\ncpu: 22542.088078147768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27938.568151640116,
            "unit": "ns/iter",
            "extra": "iterations: 30124\ncpu: 27937.91993095205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33095.63544543397,
            "unit": "ns/iter",
            "extra": "iterations: 25346\ncpu: 33093.28888187484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38668.10377096386,
            "unit": "ns/iter",
            "extra": "iterations: 21586\ncpu: 38666.83498563883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44318.173972385826,
            "unit": "ns/iter",
            "extra": "iterations: 19049\ncpu: 44317.73846396136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 578.5570721155368,
            "unit": "ns/iter",
            "extra": "iterations: 1206605\ncpu: 578.5418591834107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 456.298219812672,
            "unit": "ns/iter",
            "extra": "iterations: 1541467\ncpu: 456.28839281022584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 444.5370103070184,
            "unit": "ns/iter",
            "extra": "iterations: 1556026\ncpu: 444.51680113314296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 446.5766378181506,
            "unit": "ns/iter",
            "extra": "iterations: 1557560\ncpu: 446.561994401499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 887.0046875935178,
            "unit": "ns/iter",
            "extra": "iterations: 785051\ncpu: 886.941994851289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1542.6929965346098,
            "unit": "ns/iter",
            "extra": "iterations: 512789\ncpu: 1542.6181138830966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9090.170133041434,
            "unit": "ns/iter",
            "extra": "iterations: 89671\ncpu: 9090.024645649093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8958.568979969046,
            "unit": "ns/iter",
            "extra": "iterations: 93056\ncpu: 8958.204736932581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9542.044999477721,
            "unit": "ns/iter",
            "extra": "iterations: 86201\ncpu: 9541.793018642486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8427.028588110083,
            "unit": "ns/iter",
            "extra": "iterations: 97628\ncpu: 8426.663457204897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28169.88762910829,
            "unit": "ns/iter",
            "extra": "iterations: 29723\ncpu: 28169.330148369958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275306.8813719371,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 275304.1850220264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213962.14375313808,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 213955.94581033615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213232.18599508473,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 213223.4398034394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208776.97545410774,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 208769.58762886588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109978.8105316192,
            "unit": "ns/iter",
            "extra": "iterations: 7938\ncpu: 109976.15268329543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208530.18559423732,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 208516.66266506587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5489.131742502414,
            "unit": "ns/iter",
            "extra": "iterations: 149314\ncpu: 5488.86574601175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27117.64930634375,
            "unit": "ns/iter",
            "extra": "iterations: 30779\ncpu: 27116.70619578285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22756.37672181959,
            "unit": "ns/iter",
            "extra": "iterations: 36807\ncpu: 22755.77471676581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23156.06837559728,
            "unit": "ns/iter",
            "extra": "iterations: 36241\ncpu: 23155.061946414327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22020.697464379406,
            "unit": "ns/iter",
            "extra": "iterations: 38531\ncpu: 22020.48480444317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44738.86297895389,
            "unit": "ns/iter",
            "extra": "iterations: 18530\ncpu: 44738.16513761473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295761.20689655474,
            "unit": "ns/iter",
            "extra": "iterations: 2929\ncpu: 295749.7097985651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 229419.11237140803,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 229410.73595357395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229112.05035592202,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 229097.57447930373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226956.84813453123,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226950.86705202414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123191.78148515896,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 123187.51952292994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 220716.5717181939,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 220710.9731373539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 883410.9800947721,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 883369.6682464476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 492889.0837549302,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 492879.2017987602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1562.34147977794,
            "unit": "ns/iter",
            "extra": "iterations: 505292\ncpu: 1561.9584319561802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9812.676782113434,
            "unit": "ns/iter",
            "extra": "iterations: 90258\ncpu: 9812.504154756387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8530.027471331838,
            "unit": "ns/iter",
            "extra": "iterations: 96537\ncpu: 8529.678776013387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9124.937137287912,
            "unit": "ns/iter",
            "extra": "iterations: 90292\ncpu: 9124.7131528818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7815.027899569205,
            "unit": "ns/iter",
            "extra": "iterations: 104231\ncpu: 7814.579155913345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27342.079920917193,
            "unit": "ns/iter",
            "extra": "iterations: 29842\ncpu: 27340.93224314729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 283488.019652063,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 283470.2641752583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 216365.11761810735,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 216357.135826771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214305.93190139526,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 214293.84915792104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 211857.26979116275,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 211850.04856726632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108856.08580246927,
            "unit": "ns/iter",
            "extra": "iterations: 8100\ncpu: 108851.28395061704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 205251.06775755525,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 205246.55450564643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.85117786531782,
            "unit": "ns/iter",
            "extra": "iterations: 3502268\ncpu: 199.8396753189646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1513.0166464539025,
            "unit": "ns/iter",
            "extra": "iterations: 463402\ncpu: 1512.935205286122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1298.1814925096144,
            "unit": "ns/iter",
            "extra": "iterations: 539025\ncpu: 1298.0639116924174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1244.2958066361534,
            "unit": "ns/iter",
            "extra": "iterations: 561387\ncpu: 1244.2391790333572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 934.4208304334298,
            "unit": "ns/iter",
            "extra": "iterations: 739975\ncpu: 934.3930538193902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9017.67639808454,
            "unit": "ns/iter",
            "extra": "iterations: 77481\ncpu: 9017.33973490276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13372.610309555861,
            "unit": "ns/iter",
            "extra": "iterations: 51913\ncpu: 13371.941517539024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3090.3167500109457,
            "unit": "ns/iter",
            "extra": "iterations: 225970\ncpu: 3090.2044519183887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3115.806065510461,
            "unit": "ns/iter",
            "extra": "iterations: 224911\ncpu: 3115.7466731284735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3122.337985823246,
            "unit": "ns/iter",
            "extra": "iterations: 227835\ncpu: 3122.215199596207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5761.042073885751,
            "unit": "ns/iter",
            "extra": "iterations: 122784\ncpu: 5760.781535053416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5817.547356800995,
            "unit": "ns/iter",
            "extra": "iterations: 121387\ncpu: 5817.26296885168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1847.4297129656684,
            "unit": "ns/iter",
            "extra": "iterations: 379188\ncpu: 1847.3559289851103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9809.685259244005,
            "unit": "ns/iter",
            "extra": "iterations: 71265\ncpu: 9809.480109450555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7945.11562379397,
            "unit": "ns/iter",
            "extra": "iterations: 88122\ncpu: 7944.993304736702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8104.5501463092905,
            "unit": "ns/iter",
            "extra": "iterations: 88511\ncpu: 8104.288732473848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7848.10017911147,
            "unit": "ns/iter",
            "extra": "iterations: 89330\ncpu: 7847.752154931103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17980.2849739598,
            "unit": "ns/iter",
            "extra": "iterations: 38786\ncpu: 17979.203836435805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59058.40299401465,
            "unit": "ns/iter",
            "extra": "iterations: 11690\ncpu: 59056.84345594441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47028.30402112185,
            "unit": "ns/iter",
            "extra": "iterations: 14772\ncpu: 47026.63823449848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46739.57605092087,
            "unit": "ns/iter",
            "extra": "iterations: 15082\ncpu: 46736.7391592623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46237.16439618246,
            "unit": "ns/iter",
            "extra": "iterations: 15195\ncpu: 46235.98552155307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27375.03154942765,
            "unit": "ns/iter",
            "extra": "iterations: 25674\ncpu: 27373.71660045172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45747.27208319713,
            "unit": "ns/iter",
            "extra": "iterations: 15385\ncpu: 45746.1488462791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.1586347645784,
            "unit": "ns/iter",
            "extra": "iterations: 372390\ncpu: 1885.0586750449781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9951.001863748677,
            "unit": "ns/iter",
            "extra": "iterations: 70825\ncpu: 9950.641722555545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8043.212305922739,
            "unit": "ns/iter",
            "extra": "iterations: 86950\ncpu: 8042.473835537565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7973.662767631263,
            "unit": "ns/iter",
            "extra": "iterations: 87714\ncpu: 7973.219782474921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7870.446660331988,
            "unit": "ns/iter",
            "extra": "iterations: 89455\ncpu: 7870.335923089771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17894.434339565163,
            "unit": "ns/iter",
            "extra": "iterations: 39156\ncpu: 17894.468280723235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59985.65553752825,
            "unit": "ns/iter",
            "extra": "iterations: 11711\ncpu: 59983.61369652501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47420.69690566985,
            "unit": "ns/iter",
            "extra": "iterations: 14672\ncpu: 47420.188113413744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47125.61754788179,
            "unit": "ns/iter",
            "extra": "iterations: 14828\ncpu: 47123.44213649882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46834.97201954699,
            "unit": "ns/iter",
            "extra": "iterations: 14939\ncpu: 46832.59254300839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27734.4233625936,
            "unit": "ns/iter",
            "extra": "iterations: 25177\ncpu: 27732.478055367956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46695.84519466613,
            "unit": "ns/iter",
            "extra": "iterations: 15077\ncpu: 46692.3061617028 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418357204,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 626.7627567267161,
            "unit": "ns/iter",
            "extra": "iterations: 1116411\ncpu: 626.7566335337077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5768.977530000257,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5768.904999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11028.876622170383,
            "unit": "ns/iter",
            "extra": "iterations: 75362\ncpu: 11029.049122900138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16707.643115438863,
            "unit": "ns/iter",
            "extra": "iterations: 50330\ncpu: 16707.36737532287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22082.5577284393,
            "unit": "ns/iter",
            "extra": "iterations: 37789\ncpu: 22082.891846833736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27382.175184870513,
            "unit": "ns/iter",
            "extra": "iterations: 30562\ncpu: 27381.699496106277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32925.08439947972,
            "unit": "ns/iter",
            "extra": "iterations: 25403\ncpu: 32925.16238239576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38101.4024094177,
            "unit": "ns/iter",
            "extra": "iterations: 21831\ncpu: 38101.25509596446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43276.44924964445,
            "unit": "ns/iter",
            "extra": "iterations: 19724\ncpu: 43275.993713242766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 581.6692651856906,
            "unit": "ns/iter",
            "extra": "iterations: 1206713\ncpu: 581.669543628021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 456.8109312357216,
            "unit": "ns/iter",
            "extra": "iterations: 1556201\ncpu: 456.8033306751509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 444.0118832709333,
            "unit": "ns/iter",
            "extra": "iterations: 1564889\ncpu: 444.01078926364744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 441.4108694881028,
            "unit": "ns/iter",
            "extra": "iterations: 1606313\ncpu: 441.4057534241462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 898.5096806196594,
            "unit": "ns/iter",
            "extra": "iterations: 780167\ncpu: 898.5237776014624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1539.0619463861374,
            "unit": "ns/iter",
            "extra": "iterations: 513896\ncpu: 1539.020930304963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9028.118789256594,
            "unit": "ns/iter",
            "extra": "iterations: 90589\ncpu: 9028.150216913777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8615.2520420931,
            "unit": "ns/iter",
            "extra": "iterations: 95123\ncpu: 8615.12988446536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9226.065807509845,
            "unit": "ns/iter",
            "extra": "iterations: 89002\ncpu: 9225.771330981333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8278.234550006588,
            "unit": "ns/iter",
            "extra": "iterations: 98657\ncpu: 8277.95290754837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27979.01744186074,
            "unit": "ns/iter",
            "extra": "iterations: 29756\ncpu: 27978.226240086035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 271684.63528678194,
            "unit": "ns/iter",
            "extra": "iterations: 3208\ncpu: 271676.80798005016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211008.7507971654,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 210999.23963698806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209538.1430317858,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 209528.97310513502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210125.54483263084,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 210119.93647691145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109288.91427496885,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 109285.78769269347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207954.05612963875,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 207947.55753875064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5695.080030450899,
            "unit": "ns/iter",
            "extra": "iterations: 144495\ncpu: 5694.915394996361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27003.867090639975,
            "unit": "ns/iter",
            "extra": "iterations: 31134\ncpu: 27003.43354532016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22576.69638704095,
            "unit": "ns/iter",
            "extra": "iterations: 36978\ncpu: 22576.350803180314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23009.20513600966,
            "unit": "ns/iter",
            "extra": "iterations: 36137\ncpu: 23008.606137753603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21822.112053700435,
            "unit": "ns/iter",
            "extra": "iterations: 37839\ncpu: 21821.681334073328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45695.93185332678,
            "unit": "ns/iter",
            "extra": "iterations: 18108\ncpu: 45694.43339960233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294528.8416075537,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 294518.6761229309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 234676.49381055497,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 234667.0344456411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227817.16806063088,
            "unit": "ns/iter",
            "extra": "iterations: 3826\ncpu: 227810.82070046867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225979.71103055234,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 225972.81201449982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122830.14113986447,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 122826.33290906606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 218071.9977483022,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 218060.9206905176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 874995.9314179522,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 874963.484708064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 485000.82821076276,
            "unit": "ns/iter",
            "extra": "iterations: 1822\ncpu: 484979.19868276606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1560.4131978931596,
            "unit": "ns/iter",
            "extra": "iterations: 518507\ncpu: 1560.3388189551963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9283.200720320094,
            "unit": "ns/iter",
            "extra": "iterations: 90793\ncpu: 9283.113235601875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8667.77189805664,
            "unit": "ns/iter",
            "extra": "iterations: 96093\ncpu: 8667.846773438174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9062.862860053316,
            "unit": "ns/iter",
            "extra": "iterations: 92278\ncpu: 9062.498103556685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7875.4176862338145,
            "unit": "ns/iter",
            "extra": "iterations: 105110\ncpu: 7875.241175910988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27478.882968632894,
            "unit": "ns/iter",
            "extra": "iterations: 30573\ncpu: 27477.859549275512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 279278.1849599851,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 279279.8719999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212274.423955288,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 212274.80563654017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210805.02410501274,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 210798.3770883066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210650.47783603214,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 210644.7092469024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106305.04022643014,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 106303.33614356231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 202949.13629014586,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 202943.89004388984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 201.45310429777402,
            "unit": "ns/iter",
            "extra": "iterations: 3477131\ncpu: 201.4484642655096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1536.6103456585145,
            "unit": "ns/iter",
            "extra": "iterations: 456520\ncpu: 1536.611539472537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1102.1131023983626,
            "unit": "ns/iter",
            "extra": "iterations: 638448\ncpu: 1102.1202979725801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1242.9514957193162,
            "unit": "ns/iter",
            "extra": "iterations: 561703\ncpu: 1242.8913500551055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 912.7586289967265,
            "unit": "ns/iter",
            "extra": "iterations: 767934\ncpu: 912.7284376001119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8826.119196400385,
            "unit": "ns/iter",
            "extra": "iterations: 78895\ncpu: 8825.920527283157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13460.852544212574,
            "unit": "ns/iter",
            "extra": "iterations: 52531\ncpu: 13460.547105518646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3073.8435361366714,
            "unit": "ns/iter",
            "extra": "iterations: 228826\ncpu: 3073.742931310248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3051.051535378184,
            "unit": "ns/iter",
            "extra": "iterations: 230269\ncpu: 3050.944764601388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3041.0051550457338,
            "unit": "ns/iter",
            "extra": "iterations: 228320\ncpu: 3040.9368430273234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5448.40980618741,
            "unit": "ns/iter",
            "extra": "iterations: 128939\ncpu: 5448.344566035092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5699.2597787530485,
            "unit": "ns/iter",
            "extra": "iterations: 123482\ncpu: 5699.077598354404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1841.2761903499973,
            "unit": "ns/iter",
            "extra": "iterations: 377410\ncpu: 1841.1851832224804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10074.186991754257,
            "unit": "ns/iter",
            "extra": "iterations: 69971\ncpu: 10073.83344528449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8067.035060118324,
            "unit": "ns/iter",
            "extra": "iterations: 87079\ncpu: 8066.838158453774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8057.432906130932,
            "unit": "ns/iter",
            "extra": "iterations: 86610\ncpu: 8057.414848170105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8026.496418476526,
            "unit": "ns/iter",
            "extra": "iterations: 88091\ncpu: 8026.52824919676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18170.393220251764,
            "unit": "ns/iter",
            "extra": "iterations: 38556\ncpu: 18169.40035273397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59014.858767614984,
            "unit": "ns/iter",
            "extra": "iterations: 11782\ncpu: 59012.76523510401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47650.5885099483,
            "unit": "ns/iter",
            "extra": "iterations: 14778\ncpu: 47646.454188658965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46592.194869033025,
            "unit": "ns/iter",
            "extra": "iterations: 14851\ncpu: 46592.451686755456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46957.357792640614,
            "unit": "ns/iter",
            "extra": "iterations: 14950\ncpu: 46955.71906354515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27814.432412012065,
            "unit": "ns/iter",
            "extra": "iterations: 25145\ncpu: 27813.80393716461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46276.39746566676,
            "unit": "ns/iter",
            "extra": "iterations: 15073\ncpu: 46274.61686459292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1870.0588871674156,
            "unit": "ns/iter",
            "extra": "iterations: 374360\ncpu: 1870.0165615984633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10061.91663082487,
            "unit": "ns/iter",
            "extra": "iterations: 69750\ncpu: 10061.617204300994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8154.626656129264,
            "unit": "ns/iter",
            "extra": "iterations: 86044\ncpu: 8154.647622146898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8019.185129295757,
            "unit": "ns/iter",
            "extra": "iterations: 87474\ncpu: 8018.683265884654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8010.241325661008,
            "unit": "ns/iter",
            "extra": "iterations: 87413\ncpu: 8009.968768947481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18133.65240294697,
            "unit": "ns/iter",
            "extra": "iterations: 38536\ncpu: 18132.76935852195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58120.30294215674,
            "unit": "ns/iter",
            "extra": "iterations: 12032\ncpu: 58118.21808510614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46278.837051342525,
            "unit": "ns/iter",
            "extra": "iterations: 15017\ncpu: 46276.75301325121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46405.81168917291,
            "unit": "ns/iter",
            "extra": "iterations: 15108\ncpu: 46404.229547259536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46232.85090669596,
            "unit": "ns/iter",
            "extra": "iterations: 15165\ncpu: 46232.19914276347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28201.63407383696,
            "unit": "ns/iter",
            "extra": "iterations: 24893\ncpu: 28201.482344434415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45989.560647425686,
            "unit": "ns/iter",
            "extra": "iterations: 15384\ncpu: 45987.773010920806 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420973707,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 621.5102541359438,
            "unit": "ns/iter",
            "extra": "iterations: 1133055\ncpu: 621.4986033334657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5775.812230000384,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5775.807999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11108.309896665294,
            "unit": "ns/iter",
            "extra": "iterations: 75096\ncpu: 11108.212155108127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16809.797570041057,
            "unit": "ns/iter",
            "extra": "iterations: 50042\ncpu: 16809.118340593897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22303.699769672607,
            "unit": "ns/iter",
            "extra": "iterations: 37338\ncpu: 22303.674540682405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27697.06115756606,
            "unit": "ns/iter",
            "extra": "iterations: 30495\ncpu: 27696.314149860627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33370.29710375439,
            "unit": "ns/iter",
            "extra": "iterations: 25136\ncpu: 33369.366645448754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38017.3825558194,
            "unit": "ns/iter",
            "extra": "iterations: 22036\ncpu: 38016.21437647485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42910.59507931968,
            "unit": "ns/iter",
            "extra": "iterations: 19794\ncpu: 42909.346266545406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 574.521275678043,
            "unit": "ns/iter",
            "extra": "iterations: 1217235\ncpu: 574.5160959058855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 446.0507028735602,
            "unit": "ns/iter",
            "extra": "iterations: 1562870\ncpu: 446.0321715817701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 442.8146274655293,
            "unit": "ns/iter",
            "extra": "iterations: 1572029\ncpu: 442.79908322301907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 441.21731619496535,
            "unit": "ns/iter",
            "extra": "iterations: 1573937\ncpu: 441.2135936825932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 946.6661186654619,
            "unit": "ns/iter",
            "extra": "iterations: 740266\ncpu: 946.6398564840189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1548.0265829686116,
            "unit": "ns/iter",
            "extra": "iterations: 511681\ncpu: 1547.9621092047587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9123.813228672221,
            "unit": "ns/iter",
            "extra": "iterations: 90833\ncpu: 9123.592747129347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9004.3355172153,
            "unit": "ns/iter",
            "extra": "iterations: 93259\ncpu: 9003.429159652125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9700.42934520839,
            "unit": "ns/iter",
            "extra": "iterations: 85111\ncpu: 9700.16801588513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8371.489730116218,
            "unit": "ns/iter",
            "extra": "iterations: 98005\ncpu: 8371.191265751748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28008.66723646551,
            "unit": "ns/iter",
            "extra": "iterations: 29835\ncpu: 28007.940338528624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273705.2466903527,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 273697.35227639636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213707.98967043377,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 213702.43482538153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209086.77515955523,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 209081.05056455548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211593.05030675116,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 211587.730061349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110112.19113189448,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 110109.3860535626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205129.89234391393,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 205124.45229681907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5430.026765913924,
            "unit": "ns/iter",
            "extra": "iterations: 149257\ncpu: 5429.870625833279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26589.990087576673,
            "unit": "ns/iter",
            "extra": "iterations: 31173\ncpu: 26589.17332306813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22446.914860018605,
            "unit": "ns/iter",
            "extra": "iterations: 37362\ncpu: 22446.50179326587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23131.187794722933,
            "unit": "ns/iter",
            "extra": "iterations: 36263\ncpu: 23130.47183079171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21732.400114795295,
            "unit": "ns/iter",
            "extra": "iterations: 38329\ncpu: 21731.90795481224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44510.989961604086,
            "unit": "ns/iter",
            "extra": "iterations: 18230\ncpu: 44509.786066922614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295090.6755599433,
            "unit": "ns/iter",
            "extra": "iterations: 3036\ncpu: 295083.92621870694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228582.65001321016,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 228572.16494845354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228809.81366621456,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 228804.3889618915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224901.34871662228,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 224893.51827845478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121816.24674424989,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 121810.737046273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219597.94111699203,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 219589.71443012316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 876838.2553191022,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 876806.9380203494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 491004.4774624263,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 490995.0473010568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1557.8785743863818,
            "unit": "ns/iter",
            "extra": "iterations: 509563\ncpu: 1557.7861814927764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9109.558012076703,
            "unit": "ns/iter",
            "extra": "iterations: 91412\ncpu: 9109.294184570907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8538.341234862874,
            "unit": "ns/iter",
            "extra": "iterations: 97112\ncpu: 8538.159032869298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9188.34682681473,
            "unit": "ns/iter",
            "extra": "iterations: 89500\ncpu: 9188.113966480472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7867.756159298547,
            "unit": "ns/iter",
            "extra": "iterations: 106668\ncpu: 7867.576967787936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27007.79626884981,
            "unit": "ns/iter",
            "extra": "iterations: 31036\ncpu: 27007.771620054307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 278582.01927328284,
            "unit": "ns/iter",
            "extra": "iterations: 3165\ncpu: 278584.2022116916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 209165.40511829386,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 209165.52390149678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 211617.9371702749,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 211609.3045563555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208779.87389748156,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 208773.11084624552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106030.84876062951,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 106027.45778948598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 199021.56304052332,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 199017.9107874366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.8782038457287,
            "unit": "ns/iter",
            "extra": "iterations: 3553815\ncpu: 195.87797901691636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1520.76528739155,
            "unit": "ns/iter",
            "extra": "iterations: 463601\ncpu: 1520.7549164043992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1133.741933207948,
            "unit": "ns/iter",
            "extra": "iterations: 609443\ncpu: 1133.7324409337753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1245.74127596449,
            "unit": "ns/iter",
            "extra": "iterations: 563558\ncpu: 1245.715968897603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 901.5143605413281,
            "unit": "ns/iter",
            "extra": "iterations: 778940\ncpu: 901.4785477700456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8803.968098563622,
            "unit": "ns/iter",
            "extra": "iterations: 79056\ncpu: 8803.630337988216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12456.070663093802,
            "unit": "ns/iter",
            "extra": "iterations: 56734\ncpu: 12455.746113441674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3026.3534062285025,
            "unit": "ns/iter",
            "extra": "iterations: 231473\ncpu: 3026.2276809822097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3070.304577848357,
            "unit": "ns/iter",
            "extra": "iterations: 234193\ncpu: 3070.2544482542166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3001.6522546662004,
            "unit": "ns/iter",
            "extra": "iterations: 229901\ncpu: 3001.5637165562407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5607.755446658661,
            "unit": "ns/iter",
            "extra": "iterations: 124480\ncpu: 5607.704048843151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5643.5665152092015,
            "unit": "ns/iter",
            "extra": "iterations: 126768\ncpu: 5643.342957213212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1843.815015672939,
            "unit": "ns/iter",
            "extra": "iterations: 380589\ncpu: 1843.7755689207927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9902.125837093117,
            "unit": "ns/iter",
            "extra": "iterations: 71378\ncpu: 9901.833898400158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7947.391510131172,
            "unit": "ns/iter",
            "extra": "iterations: 87893\ncpu: 7947.151650302051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7806.28675195045,
            "unit": "ns/iter",
            "extra": "iterations: 89349\ncpu: 7806.174663398646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7869.740085058992,
            "unit": "ns/iter",
            "extra": "iterations: 88175\ncpu: 7869.636518287372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17689.564640146316,
            "unit": "ns/iter",
            "extra": "iterations: 39016\ncpu: 17689.20699200315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58485.107023412,
            "unit": "ns/iter",
            "extra": "iterations: 11960\ncpu: 58483.46153846148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46945.12391698581,
            "unit": "ns/iter",
            "extra": "iterations: 14889\ncpu: 46944.160118208136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46153.639965774026,
            "unit": "ns/iter",
            "extra": "iterations: 15193\ncpu: 46153.235042454246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46017.27402821677,
            "unit": "ns/iter",
            "extra": "iterations: 15024\ncpu: 46016.340521831815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27493.06318280292,
            "unit": "ns/iter",
            "extra": "iterations: 25355\ncpu: 27492.044961546155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44818.422105400445,
            "unit": "ns/iter",
            "extra": "iterations: 15598\ncpu: 44816.75214771114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1860.958381518105,
            "unit": "ns/iter",
            "extra": "iterations: 380480\ncpu: 1860.905172413811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9758.394788511592,
            "unit": "ns/iter",
            "extra": "iterations: 71304\ncpu: 9758.330528441595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7988.207883910304,
            "unit": "ns/iter",
            "extra": "iterations: 89930\ncpu: 7988.045146224812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7894.643497578337,
            "unit": "ns/iter",
            "extra": "iterations: 87329\ncpu: 7894.4600304596115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7878.899487074247,
            "unit": "ns/iter",
            "extra": "iterations: 87342\ncpu: 7878.473128620687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17633.887437934784,
            "unit": "ns/iter",
            "extra": "iterations: 40280\ncpu: 17633.23485600808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56710.21257557894,
            "unit": "ns/iter",
            "extra": "iterations: 12405\ncpu: 56709.41555824227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45641.30696798747,
            "unit": "ns/iter",
            "extra": "iterations: 15399\ncpu: 45639.599974024466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44844.68421393439,
            "unit": "ns/iter",
            "extra": "iterations: 15425\ncpu: 44842.91085899502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45398.49832646713,
            "unit": "ns/iter",
            "extra": "iterations: 15536\ncpu: 45396.82028836274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27606.55907940674,
            "unit": "ns/iter",
            "extra": "iterations: 25288\ncpu: 27605.82094273934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45477.65908061737,
            "unit": "ns/iter",
            "extra": "iterations: 15467\ncpu: 45477.655653973 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421421104,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 614.6345936378452,
            "unit": "ns/iter",
            "extra": "iterations: 1138984\ncpu: 614.6387482177099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5734.228740000162,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5734.147999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11134.486470250466,
            "unit": "ns/iter",
            "extra": "iterations: 74909\ncpu: 11134.202832770425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16815.269212523614,
            "unit": "ns/iter",
            "extra": "iterations: 50592\ncpu: 16814.91342504744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21889.49141755502,
            "unit": "ns/iter",
            "extra": "iterations: 37868\ncpu: 21888.35956480406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27157.971941018328,
            "unit": "ns/iter",
            "extra": "iterations: 30721\ncpu: 27157.79108752969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32583.91986767914,
            "unit": "ns/iter",
            "extra": "iterations: 25695\ncpu: 32583.288577544277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38037.38020904734,
            "unit": "ns/iter",
            "extra": "iterations: 21909\ncpu: 38036.39600164315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43594.525982385174,
            "unit": "ns/iter",
            "extra": "iterations: 19417\ncpu: 43594.42241334914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.5604414444628,
            "unit": "ns/iter",
            "extra": "iterations: 1230687\ncpu: 571.5476802793884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 454.9431350666998,
            "unit": "ns/iter",
            "extra": "iterations: 1563635\ncpu: 454.9338560469675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 448.2738951492815,
            "unit": "ns/iter",
            "extra": "iterations: 1569126\ncpu: 448.2596043912343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 439.2074064911776,
            "unit": "ns/iter",
            "extra": "iterations: 1592684\ncpu: 439.2030685308576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 900.046656730701,
            "unit": "ns/iter",
            "extra": "iterations: 781002\ncpu: 899.9659411883723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1537.9246875675024,
            "unit": "ns/iter",
            "extra": "iterations: 514271\ncpu: 1537.8658333835644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9337.876672975268,
            "unit": "ns/iter",
            "extra": "iterations: 87718\ncpu: 9337.35379283615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8924.482725497035,
            "unit": "ns/iter",
            "extra": "iterations: 93693\ncpu: 8924.477815845348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9406.438402425745,
            "unit": "ns/iter",
            "extra": "iterations: 87057\ncpu: 9406.202832626908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8247.279873227006,
            "unit": "ns/iter",
            "extra": "iterations: 98759\ncpu: 8246.832187446229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27877.351905273765,
            "unit": "ns/iter",
            "extra": "iterations: 29812\ncpu: 27875.49979873866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 271541.21303258743,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 271536.77944862127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214080.46878854625,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 214072.88428324685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213813.2907888246,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 213808.89269965692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211220.02860635563,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 211210.26894865595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108485.9720987688,
            "unit": "ns/iter",
            "extra": "iterations: 8100\ncpu: 108485.81481481483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205550.37411930392,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 205541.24001878826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5484.903854575781,
            "unit": "ns/iter",
            "extra": "iterations: 148421\ncpu: 5484.817512346619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27195.239582996834,
            "unit": "ns/iter",
            "extra": "iterations: 31079\ncpu: 27194.84539399595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22625.34410909753,
            "unit": "ns/iter",
            "extra": "iterations: 36811\ncpu: 22625.462497622942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23386.361995873012,
            "unit": "ns/iter",
            "extra": "iterations: 35854\ncpu: 23385.94856919725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22441.26522457266,
            "unit": "ns/iter",
            "extra": "iterations: 37538\ncpu: 22440.907880014915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45226.04584418345,
            "unit": "ns/iter",
            "extra": "iterations: 18432\ncpu: 45226.37261284728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 292666.54644603044,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 292656.52500940335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228856.74744028205,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 228849.09425045922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227331.82184960815,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 227323.50013099235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228116.03500522237,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 228115.15151515036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124132.3699618121,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 124128.52496110943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217369.21421445897,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 217363.09226932822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 883303.0065298176,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 883275.373134332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 486295.7438153039,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 486289.7196261671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1587.6290272411677,
            "unit": "ns/iter",
            "extra": "iterations: 511175\ncpu: 1587.5790091455933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8787.599073955489,
            "unit": "ns/iter",
            "extra": "iterations: 93516\ncpu: 8787.486633303399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8430.80766741577,
            "unit": "ns/iter",
            "extra": "iterations: 98886\ncpu: 8430.580668648803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9118.66629767611,
            "unit": "ns/iter",
            "extra": "iterations: 91240\ncpu: 9118.420648838233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8099.006307822536,
            "unit": "ns/iter",
            "extra": "iterations: 102254\ncpu: 8098.702251256641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27595.429491391274,
            "unit": "ns/iter",
            "extra": "iterations: 30436\ncpu: 27594.95334472338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 282926.00191327307,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 282914.5727040818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 217235.19667726825,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 217236.69679941324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215947.46047526316,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 215939.5489815704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 215666.90662795838,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 215664.5137880987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107203.50903140608,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 107199.17565765584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 205581.38859011812,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 205577.64788403097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.14597926502145,
            "unit": "ns/iter",
            "extra": "iterations: 3567308\ncpu: 196.1423291737078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1534.7873678999758,
            "unit": "ns/iter",
            "extra": "iterations: 456662\ncpu: 1534.763785907293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1290.5635428310086,
            "unit": "ns/iter",
            "extra": "iterations: 542154\ncpu: 1290.515609955846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1326.8009187701166,
            "unit": "ns/iter",
            "extra": "iterations: 533104\ncpu: 1326.8099657852886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 907.4482937018494,
            "unit": "ns/iter",
            "extra": "iterations: 775099\ncpu: 907.4167299919105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9044.135360603717,
            "unit": "ns/iter",
            "extra": "iterations: 78036\ncpu: 9044.09887744122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13638.661694594073,
            "unit": "ns/iter",
            "extra": "iterations: 50549\ncpu: 13638.57445251138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3103.0274392929973,
            "unit": "ns/iter",
            "extra": "iterations: 226828\ncpu: 3103.0075652035825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3040.764840102799,
            "unit": "ns/iter",
            "extra": "iterations: 229210\ncpu: 3040.7499672789313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3043.9233995909117,
            "unit": "ns/iter",
            "extra": "iterations: 231722\ncpu: 3043.91425932799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5689.772026629244,
            "unit": "ns/iter",
            "extra": "iterations: 122874\ncpu: 5689.684554909892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5746.340505060251,
            "unit": "ns/iter",
            "extra": "iterations: 121728\ncpu: 5746.133182176656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1839.6737746917295,
            "unit": "ns/iter",
            "extra": "iterations: 381353\ncpu: 1839.6860651417492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9899.246218782451,
            "unit": "ns/iter",
            "extra": "iterations: 71075\ncpu: 9898.849103060105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7930.642296678775,
            "unit": "ns/iter",
            "extra": "iterations: 88702\ncpu: 7930.618249870413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8043.407880050322,
            "unit": "ns/iter",
            "extra": "iterations: 86903\ncpu: 8043.36329010516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7858.934541939709,
            "unit": "ns/iter",
            "extra": "iterations: 88973\ncpu: 7858.520000449515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18520.815378951243,
            "unit": "ns/iter",
            "extra": "iterations: 38013\ncpu: 18520.948096703687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59236.459660212815,
            "unit": "ns/iter",
            "extra": "iterations: 11713\ncpu: 59233.45001280612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46873.075790179464,
            "unit": "ns/iter",
            "extra": "iterations: 14870\ncpu: 46870.74646940136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46453.37343407866,
            "unit": "ns/iter",
            "extra": "iterations: 15087\ncpu: 46450.61311062541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46394.046742490726,
            "unit": "ns/iter",
            "extra": "iterations: 15211\ncpu: 46394.37249358966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27157.40453803387,
            "unit": "ns/iter",
            "extra": "iterations: 25738\ncpu: 27157.086797730954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45450.658907675665,
            "unit": "ns/iter",
            "extra": "iterations: 15380\ncpu: 45448.53706111846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1891.5547052008503,
            "unit": "ns/iter",
            "extra": "iterations: 370303\ncpu: 1891.5388209115076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9992.792455802444,
            "unit": "ns/iter",
            "extra": "iterations: 69855\ncpu: 9992.442917471946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8251.200076391797,
            "unit": "ns/iter",
            "extra": "iterations: 83778\ncpu: 8250.651722409248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8228.987446559087,
            "unit": "ns/iter",
            "extra": "iterations: 84439\ncpu: 8228.51289096273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8143.1589065458265,
            "unit": "ns/iter",
            "extra": "iterations: 84320\ncpu: 8143.055028463052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18238.264383595535,
            "unit": "ns/iter",
            "extra": "iterations: 38603\ncpu: 18237.968551667036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59058.207904227915,
            "unit": "ns/iter",
            "extra": "iterations: 11361\ncpu: 59055.831352874004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46366.287598595154,
            "unit": "ns/iter",
            "extra": "iterations: 15087\ncpu: 46365.526612315494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46083.14339152779,
            "unit": "ns/iter",
            "extra": "iterations: 15238\ncpu: 46080.48956555966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46384.01474185661,
            "unit": "ns/iter",
            "extra": "iterations: 15127\ncpu: 46382.461823230034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27941.331814615125,
            "unit": "ns/iter",
            "extra": "iterations: 25460\ncpu: 27939.540455616967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46410.05943575257,
            "unit": "ns/iter",
            "extra": "iterations: 15277\ncpu: 46408.56189042327 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421899241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 627.465540122621,
            "unit": "ns/iter",
            "extra": "iterations: 1120477\ncpu: 627.4426873554745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5769.127449999588,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5769.05 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11201.555247508264,
            "unit": "ns/iter",
            "extra": "iterations: 74664\ncpu: 11201.262991535408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16693.80765789885,
            "unit": "ns/iter",
            "extra": "iterations: 50301\ncpu: 16693.634321385263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21868.177363329884,
            "unit": "ns/iter",
            "extra": "iterations: 37426\ncpu: 21867.704269759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27556.339248538152,
            "unit": "ns/iter",
            "extra": "iterations: 30261\ncpu: 27555.61613958561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32665.706450983456,
            "unit": "ns/iter",
            "extra": "iterations: 25655\ncpu: 32664.084973689336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38032.23080129637,
            "unit": "ns/iter",
            "extra": "iterations: 21590\ncpu: 38031.32931912919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43318.453121768674,
            "unit": "ns/iter",
            "extra": "iterations: 19348\ncpu: 43317.37647302053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 584.2351166441545,
            "unit": "ns/iter",
            "extra": "iterations: 1191230\ncpu: 584.227898894421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 452.72041857014943,
            "unit": "ns/iter",
            "extra": "iterations: 1544305\ncpu: 452.70584502413755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 453.7710727668601,
            "unit": "ns/iter",
            "extra": "iterations: 1561933\ncpu: 453.7655584458492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 459.6855492120812,
            "unit": "ns/iter",
            "extra": "iterations: 1519322\ncpu: 459.6799756733586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 915.8407699695014,
            "unit": "ns/iter",
            "extra": "iterations: 759147\ncpu: 915.8008923172978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1561.25870942355,
            "unit": "ns/iter",
            "extra": "iterations: 508300\ncpu: 1561.1697816250253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9646.071757278512,
            "unit": "ns/iter",
            "extra": "iterations: 86486\ncpu: 9645.871008024405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8852.337561542234,
            "unit": "ns/iter",
            "extra": "iterations: 93026\ncpu: 8851.963967062988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9692.815769478351,
            "unit": "ns/iter",
            "extra": "iterations: 85545\ncpu: 9692.710269448828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8565.050378759735,
            "unit": "ns/iter",
            "extra": "iterations: 95179\ncpu: 8564.71700690276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28136.759893730545,
            "unit": "ns/iter",
            "extra": "iterations: 28983\ncpu: 28135.959010454437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273059.5881985671,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 273053.38744926674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211119.01482213524,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 211116.62549407087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209689.68089778378,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 209680.94657233523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212039.68402947453,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 212032.72727272703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111041.83392720873,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 111036.67599898185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205722.07981999853,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 205722.16958787333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5507.710507947293,
            "unit": "ns/iter",
            "extra": "iterations: 150429\ncpu: 5507.323720825104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27069.47739994193,
            "unit": "ns/iter",
            "extra": "iterations: 30907\ncpu: 27067.86164946446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22780.200054039662,
            "unit": "ns/iter",
            "extra": "iterations: 37010\ncpu: 22779.048905701162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23288.944261102406,
            "unit": "ns/iter",
            "extra": "iterations: 35756\ncpu: 23287.49021143313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22253.003104518742,
            "unit": "ns/iter",
            "extra": "iterations: 37687\ncpu: 22251.665030381824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45590.00589675116,
            "unit": "ns/iter",
            "extra": "iterations: 17976\ncpu: 45587.57788161978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293329.1690046702,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 293310.55444221676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228828.44575472618,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 228817.3218029353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227931.53014878597,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 227929.57452362427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226223.36892451253,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 226202.66287487056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124272.53434357407,
            "unit": "ns/iter",
            "extra": "iterations: 7061\ncpu: 124267.38422319757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 218874.03181818107,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 218856.13636363702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 956766.7378731427,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 956731.4365671647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 484644.9318681432,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 484636.2087912089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1554.5401476495358,
            "unit": "ns/iter",
            "extra": "iterations: 438606\ncpu: 1554.5097422287854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9284.46734846685,
            "unit": "ns/iter",
            "extra": "iterations: 90838\ncpu: 9284.375481626614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8675.64998801723,
            "unit": "ns/iter",
            "extra": "iterations: 95971\ncpu: 8675.475925019031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9103.470350182803,
            "unit": "ns/iter",
            "extra": "iterations: 91181\ncpu: 9103.245193625824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8017.622637461222,
            "unit": "ns/iter",
            "extra": "iterations: 102538\ncpu: 8017.545690378198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27661.762355862524,
            "unit": "ns/iter",
            "extra": "iterations: 30613\ncpu: 27660.817299839786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280884.9625515643,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 280882.1643922562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212128.77936545204,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 212126.6166141926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210597.68075907778,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 210592.38529906407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 210864.8464839069,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 210862.83671036924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107112.5591162896,
            "unit": "ns/iter",
            "extra": "iterations: 8238\ncpu: 107112.47875697933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 202727.2851239679,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 202724.42607897244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 217.16848377254342,
            "unit": "ns/iter",
            "extra": "iterations: 3209591\ncpu: 217.15935145630567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1498.4941658311593,
            "unit": "ns/iter",
            "extra": "iterations: 468790\ncpu: 1498.4743701870834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1131.5937622885779,
            "unit": "ns/iter",
            "extra": "iterations: 617951\ncpu: 1131.5792028817839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1275.0946716386518,
            "unit": "ns/iter",
            "extra": "iterations: 547598\ncpu: 1275.0676591221934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 935.8295217180067,
            "unit": "ns/iter",
            "extra": "iterations: 745878\ncpu: 935.8179219657899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9064.857533217417,
            "unit": "ns/iter",
            "extra": "iterations: 77218\ncpu: 9064.664974487803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13118.707245604617,
            "unit": "ns/iter",
            "extra": "iterations: 52556\ncpu: 13118.709566938245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3024.044096629027,
            "unit": "ns/iter",
            "extra": "iterations: 229496\ncpu: 3024.0182835430537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3043.9020644998795,
            "unit": "ns/iter",
            "extra": "iterations: 231969\ncpu: 3043.903280179692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3085.7956296839225,
            "unit": "ns/iter",
            "extra": "iterations: 226574\ncpu: 3085.7265176057226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5645.309172752796,
            "unit": "ns/iter",
            "extra": "iterations: 124183\ncpu: 5645.234049749121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5601.15962392561,
            "unit": "ns/iter",
            "extra": "iterations: 125188\ncpu: 5601.025657411202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1859.3514657867242,
            "unit": "ns/iter",
            "extra": "iterations: 374577\ncpu: 1859.2919479840025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10040.4032994741,
            "unit": "ns/iter",
            "extra": "iterations: 69405\ncpu: 10040.286722858407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8184.042583594907,
            "unit": "ns/iter",
            "extra": "iterations: 87475\ncpu: 8183.8342383538375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8029.339932101597,
            "unit": "ns/iter",
            "extra": "iterations: 87188\ncpu: 8029.226499059524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7891.922611219219,
            "unit": "ns/iter",
            "extra": "iterations: 88204\ncpu: 7891.6262301030865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18078.497227451637,
            "unit": "ns/iter",
            "extra": "iterations: 38773\ncpu: 18077.920202202287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58092.7165314854,
            "unit": "ns/iter",
            "extra": "iterations: 11959\ncpu: 58091.980934860665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47430.83460542456,
            "unit": "ns/iter",
            "extra": "iterations: 14674\ncpu: 47429.51478806099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46287.40707846742,
            "unit": "ns/iter",
            "extra": "iterations: 15088\ncpu: 46286.77094379709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46380.9363654234,
            "unit": "ns/iter",
            "extra": "iterations: 15259\ncpu: 46380.93584114353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27418.033295243666,
            "unit": "ns/iter",
            "extra": "iterations: 25379\ncpu: 27417.285945072726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45693.23611381106,
            "unit": "ns/iter",
            "extra": "iterations: 15429\ncpu: 45692.02151792102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1890.968891522184,
            "unit": "ns/iter",
            "extra": "iterations: 369642\ncpu: 1890.9293316235764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10013.31655807087,
            "unit": "ns/iter",
            "extra": "iterations: 69984\ncpu: 10013.325903063667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8124.405273122968,
            "unit": "ns/iter",
            "extra": "iterations: 86628\ncpu: 8124.3154638224005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8061.520886860217,
            "unit": "ns/iter",
            "extra": "iterations: 87184\ncpu: 8061.353000550561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8027.6708269392375,
            "unit": "ns/iter",
            "extra": "iterations: 88616\ncpu: 8027.285140380944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18010.903093102515,
            "unit": "ns/iter",
            "extra": "iterations: 38893\ncpu: 18010.428611832314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57448.83271222016,
            "unit": "ns/iter",
            "extra": "iterations: 12075\ncpu: 57448.90269151172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45851.231429519874,
            "unit": "ns/iter",
            "extra": "iterations: 15145\ncpu: 45850.18818091734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45149.72343191905,
            "unit": "ns/iter",
            "extra": "iterations: 15385\ncpu: 45148.50828729249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45578.15034715181,
            "unit": "ns/iter",
            "extra": "iterations: 15411\ncpu: 45576.101485950996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27835.853495852065,
            "unit": "ns/iter",
            "extra": "iterations: 25187\ncpu: 27835.52229324638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45237.691746170996,
            "unit": "ns/iter",
            "extra": "iterations: 15617\ncpu: 45237.24146763117 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453355628,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 634.9375726740343,
            "unit": "ns/iter",
            "extra": "iterations: 1126606\ncpu: 634.9067020768574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5710.7349199998225,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5710.649000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11071.07988775555,
            "unit": "ns/iter",
            "extra": "iterations: 75193\ncpu: 11070.51986222122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16502.873092749694,
            "unit": "ns/iter",
            "extra": "iterations: 50793\ncpu: 16502.48262555864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21988.57621338592,
            "unit": "ns/iter",
            "extra": "iterations: 37828\ncpu: 21987.726023051717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27631.576625693826,
            "unit": "ns/iter",
            "extra": "iterations: 30264\ncpu: 27631.568860692565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32677.27969854688,
            "unit": "ns/iter",
            "extra": "iterations: 25742\ncpu: 32675.580762955477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38913.45780320375,
            "unit": "ns/iter",
            "extra": "iterations: 21850\ncpu: 38911.313501144185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44432.76967748604,
            "unit": "ns/iter",
            "extra": "iterations: 19286\ncpu: 44431.66027169967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 578.5905777001694,
            "unit": "ns/iter",
            "extra": "iterations: 1216773\ncpu: 578.5683936116267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 445.88808278944373,
            "unit": "ns/iter",
            "extra": "iterations: 1552469\ncpu: 445.86584337593877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 438.4232468888673,
            "unit": "ns/iter",
            "extra": "iterations: 1589460\ncpu: 438.4004001358949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 437.4096489911987,
            "unit": "ns/iter",
            "extra": "iterations: 1612666\ncpu: 437.40452145701545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 901.1385369483083,
            "unit": "ns/iter",
            "extra": "iterations: 776883\ncpu: 901.0978487108091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1547.2171148496261,
            "unit": "ns/iter",
            "extra": "iterations: 513332\ncpu: 1547.1782394239983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8985.103376154719,
            "unit": "ns/iter",
            "extra": "iterations: 90843\ncpu: 8984.6812632784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8775.071284076437,
            "unit": "ns/iter",
            "extra": "iterations: 93429\ncpu: 8774.936047693986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9414.142868589424,
            "unit": "ns/iter",
            "extra": "iterations: 87360\ncpu: 9413.76717032966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8238.246260115313,
            "unit": "ns/iter",
            "extra": "iterations: 99602\ncpu: 8238.029356840238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27823.890817450745,
            "unit": "ns/iter",
            "extra": "iterations: 29959\ncpu: 27822.27711205314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272622.60636306985,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 272617.4360573918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 207471.31485099986,
            "unit": "ns/iter",
            "extra": "iterations: 4094\ncpu: 207459.4772838304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 206685.4800680714,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 206678.1234807973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 209308.50573590863,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 209299.9023675861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108806.71062453378,
            "unit": "ns/iter",
            "extra": "iterations: 8038\ncpu: 108804.20502612575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 203211.33161229617,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 203199.8826566535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5505.609091518068,
            "unit": "ns/iter",
            "extra": "iterations: 149260\ncpu: 5505.4522310062985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28246.18855272261,
            "unit": "ns/iter",
            "extra": "iterations: 31466\ncpu: 28245.24248395095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22694.481203819396,
            "unit": "ns/iter",
            "extra": "iterations: 37082\ncpu: 22693.929669381407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23001.12684641122,
            "unit": "ns/iter",
            "extra": "iterations: 36422\ncpu: 23000.53813629122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21623.72560010379,
            "unit": "ns/iter",
            "extra": "iterations: 38535\ncpu: 21622.46529129361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45838.391259049014,
            "unit": "ns/iter",
            "extra": "iterations: 18236\ncpu: 45837.22307523577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293438.9542241684,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 293417.5698418048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230454.34732119643,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 230447.95460543645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228414.24577614246,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 228405.5966209079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224969.75764645517,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 224962.36391912858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122423.8129395232,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 122416.77918424759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 216587.07982151874,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 216570.22806147623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 870797.0220994555,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 870746.132596683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 472658.02896994766,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 472653.05793991283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1523.0256881461735,
            "unit": "ns/iter",
            "extra": "iterations: 529466\ncpu: 1522.970691224739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8852.337550328588,
            "unit": "ns/iter",
            "extra": "iterations: 94380\ncpu: 8852.036448400067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8365.109907513599,
            "unit": "ns/iter",
            "extra": "iterations: 98501\ncpu: 8364.820661719194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9060.984462399523,
            "unit": "ns/iter",
            "extra": "iterations: 90104\ncpu: 9060.981754417095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8023.541673977563,
            "unit": "ns/iter",
            "extra": "iterations: 102582\ncpu: 8023.197052114448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27410.688299430632,
            "unit": "ns/iter",
            "extra": "iterations: 30725\ncpu: 27409.526444263673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 283495.84952567844,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 283477.85410533263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210003.0026666707,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 209834.64242424292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 209407.84076126458,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 209389.95422789725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 206375.58824928055,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 206367.9115128453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105556.27903342148,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 105544.75835537353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 200829.4489513693,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 200816.31712376088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 197.07164638793483,
            "unit": "ns/iter",
            "extra": "iterations: 3542300\ncpu: 197.0647601840609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1525.2907259056562,
            "unit": "ns/iter",
            "extra": "iterations: 459247\ncpu: 1525.2491578605845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1240.7968340953505,
            "unit": "ns/iter",
            "extra": "iterations: 564957\ncpu: 1240.701150707045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1248.0873633384895,
            "unit": "ns/iter",
            "extra": "iterations: 559594\ncpu: 1248.027498507851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 907.6880472567124,
            "unit": "ns/iter",
            "extra": "iterations: 770091\ncpu: 907.6205279635798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8881.907857977149,
            "unit": "ns/iter",
            "extra": "iterations: 78748\ncpu: 8881.237618733103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12684.333164097938,
            "unit": "ns/iter",
            "extra": "iterations: 55150\ncpu: 12684.152311876707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3046.6069391385004,
            "unit": "ns/iter",
            "extra": "iterations: 229308\ncpu: 3046.3607898547148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2986.5608597040814,
            "unit": "ns/iter",
            "extra": "iterations: 231475\ncpu: 2986.382546711314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3002.017039003603,
            "unit": "ns/iter",
            "extra": "iterations: 234286\ncpu: 3001.796095370614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5584.877969779536,
            "unit": "ns/iter",
            "extra": "iterations: 124420\ncpu: 5584.725124578031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5581.7648597770085,
            "unit": "ns/iter",
            "extra": "iterations: 125372\ncpu: 5581.331557285474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1841.3783031439382,
            "unit": "ns/iter",
            "extra": "iterations: 379714\ncpu: 1841.25763074313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9988.387296910587,
            "unit": "ns/iter",
            "extra": "iterations: 70597\ncpu: 9987.601456152579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7872.376750462369,
            "unit": "ns/iter",
            "extra": "iterations: 88191\ncpu: 7871.72387205046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8008.573783476615,
            "unit": "ns/iter",
            "extra": "iterations: 87113\ncpu: 8008.351221976054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7985.293408946005,
            "unit": "ns/iter",
            "extra": "iterations: 87816\ncpu: 7984.691855698295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18093.168561873084,
            "unit": "ns/iter",
            "extra": "iterations: 38870\ncpu: 18092.027270388728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58857.31179348951,
            "unit": "ns/iter",
            "extra": "iterations: 11854\ncpu: 58852.210224396986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46791.57317564503,
            "unit": "ns/iter",
            "extra": "iterations: 14882\ncpu: 46789.483940330996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46554.232897617614,
            "unit": "ns/iter",
            "extra": "iterations: 15071\ncpu: 46552.650786278115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46257.94498704383,
            "unit": "ns/iter",
            "extra": "iterations: 15051\ncpu: 46255.285363098985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27293.808403360017,
            "unit": "ns/iter",
            "extra": "iterations: 25585\ncpu: 27291.686535079443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45794.71968371379,
            "unit": "ns/iter",
            "extra": "iterations: 15429\ncpu: 45790.75766413895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1875.4026397336106,
            "unit": "ns/iter",
            "extra": "iterations: 373371\ncpu: 1875.2591925993127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9877.838284108071,
            "unit": "ns/iter",
            "extra": "iterations: 70797\ncpu: 9877.836631495686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8016.390888875864,
            "unit": "ns/iter",
            "extra": "iterations: 87695\ncpu: 8016.0784537316085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8094.625434755428,
            "unit": "ns/iter",
            "extra": "iterations: 86543\ncpu: 8093.971782813189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7916.620763669207,
            "unit": "ns/iter",
            "extra": "iterations: 88520\ncpu: 7915.917306823287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17763.278455544187,
            "unit": "ns/iter",
            "extra": "iterations: 39263\ncpu: 17761.69676285566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57764.8393821085,
            "unit": "ns/iter",
            "extra": "iterations: 12041\ncpu: 57764.84511253269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45754.820839132466,
            "unit": "ns/iter",
            "extra": "iterations: 15087\ncpu: 45750.57996950959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45856.01190476283,
            "unit": "ns/iter",
            "extra": "iterations: 15288\ncpu: 45851.8969126114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45469.19149771265,
            "unit": "ns/iter",
            "extra": "iterations: 15290\ncpu: 45465.95160235442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27797.586662422993,
            "unit": "ns/iter",
            "extra": "iterations: 25132\ncpu: 27794.92280757613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45387.386155022024,
            "unit": "ns/iter",
            "extra": "iterations: 15688\ncpu: 45386.48011218742 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479524632,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 638.8139145738934,
            "unit": "ns/iter",
            "extra": "iterations: 1119330\ncpu: 638.7720332699026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5744.5825199999945,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5744.091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11118.30915278784,
            "unit": "ns/iter",
            "extra": "iterations: 74633\ncpu: 11117.568635858135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16404.324579111653,
            "unit": "ns/iter",
            "extra": "iterations: 51023\ncpu: 16403.439625267034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21714.59262435714,
            "unit": "ns/iter",
            "extra": "iterations: 38478\ncpu: 21713.256926035658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27080.751654026004,
            "unit": "ns/iter",
            "extra": "iterations: 30985\ncpu: 27078.67355171859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32358.221234148612,
            "unit": "ns/iter",
            "extra": "iterations: 25864\ncpu: 32355.664243736446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37912.21790747132,
            "unit": "ns/iter",
            "extra": "iterations: 22069\ncpu: 37910.49435860258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42944.48246928374,
            "unit": "ns/iter",
            "extra": "iterations: 20022\ncpu: 42942.27849365699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 600.7180233979869,
            "unit": "ns/iter",
            "extra": "iterations: 1165313\ncpu: 600.6762131719108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 463.82539672107725,
            "unit": "ns/iter",
            "extra": "iterations: 1521409\ncpu: 463.8136753496267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 463.9138769173933,
            "unit": "ns/iter",
            "extra": "iterations: 1508678\ncpu: 463.9052203319738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 463.83016905038033,
            "unit": "ns/iter",
            "extra": "iterations: 1505291\ncpu: 463.80812746505563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 910.0613840025017,
            "unit": "ns/iter",
            "extra": "iterations: 769435\ncpu: 909.9942165355098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1540.6104167925378,
            "unit": "ns/iter",
            "extra": "iterations: 513133\ncpu: 1540.4871641465274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9329.76898622357,
            "unit": "ns/iter",
            "extra": "iterations: 87761\ncpu: 9329.491459760025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8849.469576690997,
            "unit": "ns/iter",
            "extra": "iterations: 92462\ncpu: 8848.961735631945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9641.214170577767,
            "unit": "ns/iter",
            "extra": "iterations: 84372\ncpu: 9640.532404115102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8285.303454545561,
            "unit": "ns/iter",
            "extra": "iterations: 99000\ncpu: 8284.706060606044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27970.412251600384,
            "unit": "ns/iter",
            "extra": "iterations: 29841\ncpu: 27968.603599075097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 283544.1459390774,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 283529.282994924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216011.84905188755,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 215995.25948103765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 215781.44972893957,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 215770.6259241009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216141.26022671472,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 216126.41695416422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110248.41290970742,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 110246.00025116144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205868.7493497222,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 205855.59233861446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5421.154206202048,
            "unit": "ns/iter",
            "extra": "iterations: 149339\ncpu: 5420.878002397242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26665.38178555482,
            "unit": "ns/iter",
            "extra": "iterations: 31206\ncpu: 26663.51983592893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22527.57554188643,
            "unit": "ns/iter",
            "extra": "iterations: 37231\ncpu: 22526.375869571093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23025.50068101409,
            "unit": "ns/iter",
            "extra": "iterations: 36710\ncpu: 23023.802778534464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21946.10811446499,
            "unit": "ns/iter",
            "extra": "iterations: 38265\ncpu: 21945.17966810405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45178.345691654,
            "unit": "ns/iter",
            "extra": "iterations: 18557\ncpu: 45175.933609958716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 293887.9932500829,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 293871.75160310493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 228854.48373557886,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 228846.4323189933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227462.38259056222,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 227447.2243940577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226811.24739312052,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 226792.51824817393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 139124.69738030742,
            "unit": "ns/iter",
            "extra": "iterations: 5535\ncpu: 139105.81752484108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217937.02675668203,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 217929.95748937194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 880158.367688032,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 880142.2469823604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 488273.03152653086,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 488257.4115044252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1542.8233581233342,
            "unit": "ns/iter",
            "extra": "iterations: 518218\ncpu: 1542.8009061823282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8938.35295583319,
            "unit": "ns/iter",
            "extra": "iterations: 92309\ncpu: 8937.974628692735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8537.648755469107,
            "unit": "ns/iter",
            "extra": "iterations: 96904\ncpu: 8537.618674151701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9055.298044904488,
            "unit": "ns/iter",
            "extra": "iterations: 90993\ncpu: 9055.042695591976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7934.396246451914,
            "unit": "ns/iter",
            "extra": "iterations: 103582\ncpu: 7934.209611708556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27079.808400498405,
            "unit": "ns/iter",
            "extra": "iterations: 30522\ncpu: 27077.06899941028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281002.7085586973,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 280983.9325485212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 213776.7588049587,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 213764.31867864897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214041.33583172335,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 214024.78239845322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213665.48226432363,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 213654.32458697856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109948.19127886026,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 109942.1399780132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 202918.1309661018,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 202908.73875951176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 202.5399427349993,
            "unit": "ns/iter",
            "extra": "iterations: 3516284\ncpu: 202.5166340375233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1504.712785103116,
            "unit": "ns/iter",
            "extra": "iterations: 466191\ncpu: 1504.6290039919281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1283.5520885599299,
            "unit": "ns/iter",
            "extra": "iterations: 542096\ncpu: 1283.4662126265473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1170.2308093295135,
            "unit": "ns/iter",
            "extra": "iterations: 596605\ncpu: 1170.2107759740493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 914.4179196989107,
            "unit": "ns/iter",
            "extra": "iterations: 759890\ncpu: 914.3565516061556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8849.429122833913,
            "unit": "ns/iter",
            "extra": "iterations: 79278\ncpu: 8848.860970256592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12731.719727345582,
            "unit": "ns/iter",
            "extra": "iterations: 54868\ncpu: 12731.041772982491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3046.3338188057332,
            "unit": "ns/iter",
            "extra": "iterations: 227270\ncpu: 3046.149073788874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3072.4689895197835,
            "unit": "ns/iter",
            "extra": "iterations: 228713\ncpu: 3072.3260155740913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3066.5865097589567,
            "unit": "ns/iter",
            "extra": "iterations: 226460\ncpu: 3066.3450498984253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5773.0028771066745,
            "unit": "ns/iter",
            "extra": "iterations: 121650\ncpu: 5772.535963830684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5751.540942481875,
            "unit": "ns/iter",
            "extra": "iterations: 122379\ncpu: 5751.3429591678805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1845.1587449838398,
            "unit": "ns/iter",
            "extra": "iterations: 379023\ncpu: 1845.093305683279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9967.681879175287,
            "unit": "ns/iter",
            "extra": "iterations: 70052\ncpu: 9966.950265517033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7942.255943928561,
            "unit": "ns/iter",
            "extra": "iterations: 88031\ncpu: 7941.715986413917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7952.802912940217,
            "unit": "ns/iter",
            "extra": "iterations: 88433\ncpu: 7952.444223310348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7795.398980521845,
            "unit": "ns/iter",
            "extra": "iterations: 88869\ncpu: 7794.8395953595045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17937.59799396706,
            "unit": "ns/iter",
            "extra": "iterations: 38783\ncpu: 17937.188974550565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58413.14592023896,
            "unit": "ns/iter",
            "extra": "iterations: 11986\ncpu: 58411.31319873213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46890.46480898371,
            "unit": "ns/iter",
            "extra": "iterations: 14606\ncpu: 46889.76448035085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46314.02790481993,
            "unit": "ns/iter",
            "extra": "iterations: 15087\ncpu: 46310.52561808169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46038.75175148676,
            "unit": "ns/iter",
            "extra": "iterations: 15130\ncpu: 46036.457369464646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27169.29170754564,
            "unit": "ns/iter",
            "extra": "iterations: 25481\ncpu: 27167.54444488061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45813.05127709058,
            "unit": "ns/iter",
            "extra": "iterations: 15504\ncpu: 45812.248452012056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1906.0915846785788,
            "unit": "ns/iter",
            "extra": "iterations: 366415\ncpu: 1906.0829933272294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9952.29856704916,
            "unit": "ns/iter",
            "extra": "iterations: 70135\ncpu: 9951.911313894705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8222.201888368088,
            "unit": "ns/iter",
            "extra": "iterations: 85047\ncpu: 8221.921996072808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8047.061676355597,
            "unit": "ns/iter",
            "extra": "iterations: 86354\ncpu: 8046.354540611777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7985.40910232978,
            "unit": "ns/iter",
            "extra": "iterations: 87560\ncpu: 7985.380310644089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18026.653002219384,
            "unit": "ns/iter",
            "extra": "iterations: 38738\ncpu: 18026.625019360796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57870.51607217767,
            "unit": "ns/iter",
            "extra": "iterations: 11915\ncpu: 57868.52706672268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46339.2911248923,
            "unit": "ns/iter",
            "extra": "iterations: 14997\ncpu: 46338.54104154158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46470.97664166538,
            "unit": "ns/iter",
            "extra": "iterations: 15198\ncpu: 46470.1473878142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46098.34404336821,
            "unit": "ns/iter",
            "extra": "iterations: 15126\ncpu: 46097.27621314301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27466.187384915727,
            "unit": "ns/iter",
            "extra": "iterations: 25525\ncpu: 27464.57590597477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45768.56729641754,
            "unit": "ns/iter",
            "extra": "iterations: 15350\ncpu: 45766.94462540682 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488570057,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 626.8018437924753,
            "unit": "ns/iter",
            "extra": "iterations: 1116937\ncpu: 626.7832473989134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5823.779756922488,
            "unit": "ns/iter",
            "extra": "iterations: 139791\ncpu: 5823.414955183095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11507.942952251615,
            "unit": "ns/iter",
            "extra": "iterations: 74201\ncpu: 11507.695314079327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16947.517468874907,
            "unit": "ns/iter",
            "extra": "iterations: 49717\ncpu: 16947.02817949595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22480.10259640591,
            "unit": "ns/iter",
            "extra": "iterations: 36512\ncpu: 22479.502629272567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27793.414151377154,
            "unit": "ns/iter",
            "extra": "iterations: 30414\ncpu: 27792.220687841138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33042.68292396399,
            "unit": "ns/iter",
            "extra": "iterations: 25527\ncpu: 33041.650017628395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38532.56187912079,
            "unit": "ns/iter",
            "extra": "iterations: 21542\ncpu: 38531.617305728345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43961.17161526855,
            "unit": "ns/iter",
            "extra": "iterations: 19130\ncpu: 43958.72974385776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 577.9206832308261,
            "unit": "ns/iter",
            "extra": "iterations: 1213060\ncpu: 577.8996916887869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 451.2396014585301,
            "unit": "ns/iter",
            "extra": "iterations: 1550554\ncpu: 451.21382422024607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 445.4220066446528,
            "unit": "ns/iter",
            "extra": "iterations: 1552831\ncpu: 445.41086570270693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.03164983469117,
            "unit": "ns/iter",
            "extra": "iterations: 1572994\ncpu: 438.0098716206163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 897.9464849574375,
            "unit": "ns/iter",
            "extra": "iterations: 766719\ncpu: 897.9344453443829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1553.127426508969,
            "unit": "ns/iter",
            "extra": "iterations: 508395\ncpu: 1553.0607106678879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8899.570484533566,
            "unit": "ns/iter",
            "extra": "iterations: 91552\ncpu: 8899.212469416267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8852.298599892816,
            "unit": "ns/iter",
            "extra": "iterations: 92850\ncpu: 8851.825525040369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9610.421846499214,
            "unit": "ns/iter",
            "extra": "iterations: 85524\ncpu: 9609.990178195587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8274.104162448639,
            "unit": "ns/iter",
            "extra": "iterations: 98788\ncpu: 8273.805522938015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27587.359004304162,
            "unit": "ns/iter",
            "extra": "iterations: 29969\ncpu: 27586.038906870457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276651.0963317596,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 276635.0558213711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 218181.89586448963,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 218171.17588440474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217236.76824773816,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 217019.51339395437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215795.18880595168,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 215781.34328358195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110196.14137759333,
            "unit": "ns/iter",
            "extra": "iterations: 8014\ncpu: 110188.98178188127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205651.24227292018,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 205637.1374227293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5433.920585947293,
            "unit": "ns/iter",
            "extra": "iterations: 151686\ncpu: 5433.664939414298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26147.256969208123,
            "unit": "ns/iter",
            "extra": "iterations: 32249\ncpu: 26147.108437470863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22372.86815405127,
            "unit": "ns/iter",
            "extra": "iterations: 37157\ncpu: 22372.30131603744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23046.995557282407,
            "unit": "ns/iter",
            "extra": "iterations: 36014\ncpu: 23047.06503026605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21683.417300158762,
            "unit": "ns/iter",
            "extra": "iterations: 38543\ncpu: 21682.736164802947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44664.24800257275,
            "unit": "ns/iter",
            "extra": "iterations: 18649\ncpu: 44663.451123384446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294045.8530598575,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 294042.90517821047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230061.8854941786,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 230060.22848033873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229757.86798419023,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 229755.38866930208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225211.114656305,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 225202.82749675625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 130262.37491201877,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 130261.70632127266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219309.26598401158,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 219306.29370629447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 890853.6257036105,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 890842.870544089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 491850.34373259445,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 491832.0334261829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1493.6653244693468,
            "unit": "ns/iter",
            "extra": "iterations: 529480\ncpu: 1493.6696381355264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8847.751886179927,
            "unit": "ns/iter",
            "extra": "iterations: 93973\ncpu: 8847.659434092764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8551.44657335417,
            "unit": "ns/iter",
            "extra": "iterations: 96450\ncpu: 8550.915500259265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9282.619015024764,
            "unit": "ns/iter",
            "extra": "iterations: 89119\ncpu: 9281.98476194756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8115.026352765425,
            "unit": "ns/iter",
            "extra": "iterations: 101773\ncpu: 8114.653198785578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27437.963684210772,
            "unit": "ns/iter",
            "extra": "iterations: 30400\ncpu: 27436.615131578874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 286757.61586159404,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 286741.2859007838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215068.41249695315,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 215053.52697095476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 223889.60455436664,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 223887.97747306706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 214860.37777778468,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 214848.42490842403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109316.69836754937,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 109316.69552312711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207068.53089030916,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 207056.8005637773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 203.54493644885076,
            "unit": "ns/iter",
            "extra": "iterations: 3439513\ncpu: 203.54660674345436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1596.9797810156563,
            "unit": "ns/iter",
            "extra": "iterations: 442406\ncpu: 1596.9747245742628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1213.3859494015283,
            "unit": "ns/iter",
            "extra": "iterations: 573456\ncpu: 1213.3162788426619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1357.9148597160092,
            "unit": "ns/iter",
            "extra": "iterations: 574264\ncpu: 1357.8253207584007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 956.0995929458823,
            "unit": "ns/iter",
            "extra": "iterations: 727913\ncpu: 956.0054566960596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9115.280359976008,
            "unit": "ns/iter",
            "extra": "iterations: 76894\ncpu: 9114.804796213017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13680.673552990007,
            "unit": "ns/iter",
            "extra": "iterations: 51019\ncpu: 13679.964327015461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3136.7552330309945,
            "unit": "ns/iter",
            "extra": "iterations: 222481\ncpu: 3136.5725612524166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3163.7927780834275,
            "unit": "ns/iter",
            "extra": "iterations: 221714\ncpu: 3163.608071659905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3093.552421075221,
            "unit": "ns/iter",
            "extra": "iterations: 225024\ncpu: 3093.3904827929455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5957.770923499309,
            "unit": "ns/iter",
            "extra": "iterations: 117607\ncpu: 5957.797580076054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5791.728898882375,
            "unit": "ns/iter",
            "extra": "iterations: 120977\ncpu: 5791.6422129826615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1887.1454015998813,
            "unit": "ns/iter",
            "extra": "iterations: 371564\ncpu: 1887.005199642565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10209.96953271917,
            "unit": "ns/iter",
            "extra": "iterations: 68631\ncpu: 10209.357287523146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8162.358734304025,
            "unit": "ns/iter",
            "extra": "iterations: 85771\ncpu: 8161.777290692695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8214.74586055005,
            "unit": "ns/iter",
            "extra": "iterations: 85579\ncpu: 8214.342303602489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8017.926108373916,
            "unit": "ns/iter",
            "extra": "iterations: 86478\ncpu: 8017.89125557947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18080.0254418789,
            "unit": "ns/iter",
            "extra": "iterations: 38755\ncpu: 18079.52780286429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60628.148620512475,
            "unit": "ns/iter",
            "extra": "iterations: 11526\ncpu: 60624.58788825348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48403.90704107927,
            "unit": "ns/iter",
            "extra": "iterations: 14458\ncpu: 48402.88421635037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47694.768053560176,
            "unit": "ns/iter",
            "extra": "iterations: 14637\ncpu: 47694.39092710261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48060.76343570026,
            "unit": "ns/iter",
            "extra": "iterations: 14588\ncpu: 48057.06745270133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27813.569634842897,
            "unit": "ns/iter",
            "extra": "iterations: 25167\ncpu: 27812.19056701269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47509.94364678338,
            "unit": "ns/iter",
            "extra": "iterations: 14835\ncpu: 47507.178968655135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1885.8359100425125,
            "unit": "ns/iter",
            "extra": "iterations: 373021\ncpu: 1885.6496014969616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10010.708257977085,
            "unit": "ns/iter",
            "extra": "iterations: 70223\ncpu: 10009.961123848258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8043.467663693409,
            "unit": "ns/iter",
            "extra": "iterations: 86992\ncpu: 8043.500551774893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8161.133615134477,
            "unit": "ns/iter",
            "extra": "iterations: 86113\ncpu: 8160.98033978621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8021.442651099268,
            "unit": "ns/iter",
            "extra": "iterations: 87360\ncpu: 8020.9787087913355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18036.925952738984,
            "unit": "ns/iter",
            "extra": "iterations: 38678\ncpu: 18036.599617353797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59268.0088930287,
            "unit": "ns/iter",
            "extra": "iterations: 11807\ncpu: 59268.21377149163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 52639.75709999613,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52638.63999999927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46983.45486042314,
            "unit": "ns/iter",
            "extra": "iterations: 15009\ncpu: 46981.63768405632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46572.26764393807,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 46569.461395596256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28021.873136134323,
            "unit": "ns/iter",
            "extra": "iterations: 24814\ncpu: 28020.34335455825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46070.46974326113,
            "unit": "ns/iter",
            "extra": "iterations: 15385\ncpu: 46067.0133246671 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}