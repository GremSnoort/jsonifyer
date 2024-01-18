window.BENCHMARK_DATA = {
  "lastUpdate": 1705573961721,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Release c++-17": [
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
        "date": 1702397916412,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1830.70384803491,
            "unit": "ns/iter",
            "extra": "iterations: 382351\ncpu: 1830.639909402617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27325.00979444982,
            "unit": "ns/iter",
            "extra": "iterations: 30017\ncpu: 27323.84315554519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55815.568893668744,
            "unit": "ns/iter",
            "extra": "iterations: 14878\ncpu: 55814.329883048784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 69496.01377717653,
            "unit": "ns/iter",
            "extra": "iterations: 12557\ncpu: 69493.4458867564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 97473.79518834842,
            "unit": "ns/iter",
            "extra": "iterations: 9477\ncpu: 97468.9880763955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 121804.45561632498,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 121799.31285934661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 148180.93389261805,
            "unit": "ns/iter",
            "extra": "iterations: 5960\ncpu: 148173.75838926175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 172650.65399920507,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 172643.57341822507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 196092.86622369572,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 196081.50609080846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1593.427966853349,
            "unit": "ns/iter",
            "extra": "iterations: 439742\ncpu: 1593.4054513783046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1311.3631688406172,
            "unit": "ns/iter",
            "extra": "iterations: 530844\ncpu: 1311.2929598902847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1295.9299730962773,
            "unit": "ns/iter",
            "extra": "iterations: 543791\ncpu: 1295.8399458615515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1367.4419804276968,
            "unit": "ns/iter",
            "extra": "iterations: 506941\ncpu: 1367.3802276793558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2406.969396110306,
            "unit": "ns/iter",
            "extra": "iterations: 291891\ncpu: 2406.761085473691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10037.559330137197,
            "unit": "ns/iter",
            "extra": "iterations: 81569\ncpu: 10037.07413355563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 51907.66159599676,
            "unit": "ns/iter",
            "extra": "iterations: 15777\ncpu: 51905.39392786975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 38678.92596221068,
            "unit": "ns/iter",
            "extra": "iterations: 21435\ncpu: 38677.09353860513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40963.065517582865,
            "unit": "ns/iter",
            "extra": "iterations: 20132\ncpu: 40962.26405722235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38739.7027560883,
            "unit": "ns/iter",
            "extra": "iterations: 21262\ncpu: 38737.63521775938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 107810.45591970047,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 107805.32107872781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 823261.5110132168,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 823203.7004405292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 676728.9387308655,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 676713.1291028443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 676717.0060000467,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 676692.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 687822.9475982552,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 687790.7569141211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 484174.0434540549,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 484151.5877437332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 681621.4231332685,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 681589.1654465602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3697762.8139535342,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3697548.837209297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1582728.4706867647,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1582664.1541038547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4718298.23500002,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4718002.4999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 13036.896404839203,
            "unit": "ns/iter",
            "extra": "iterations: 64559\ncpu: 13036.250561501878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 56106.10249999582,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56101.86000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50333.1714686839,
            "unit": "ns/iter",
            "extra": "iterations: 16382\ncpu: 50330.954706384946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52270.264839608,
            "unit": "ns/iter",
            "extra": "iterations: 15836\ncpu: 52267.81384187951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50631.27262258026,
            "unit": "ns/iter",
            "extra": "iterations: 16499\ncpu: 50628.71083095967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 114420.06786795132,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 114417.01959752719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 871547.342056053,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 871505.5140186887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 715088.0007698138,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 715054.426481909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 715839.0325064544,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 715816.2532078685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 711118.965960656,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 711104.9924357012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 499247.5791881297,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 499205.83190394193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 692771.7982261971,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 692752.549889138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3775993.7119999453,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3775771.200000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1586747.5025210173,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1586673.277310918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8953.47166140681,
            "unit": "ns/iter",
            "extra": "iterations: 92524\ncpu: 8952.986252215682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 51500.71914420014,
            "unit": "ns/iter",
            "extra": "iterations: 16172\ncpu: 51498.08310660412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 41230.6648414007,
            "unit": "ns/iter",
            "extra": "iterations: 20271\ncpu: 41229.26347984786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 41311.4240487367,
            "unit": "ns/iter",
            "extra": "iterations: 20026\ncpu: 41307.864775791524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 41183.17798477526,
            "unit": "ns/iter",
            "extra": "iterations: 19968\ncpu: 41181.8159054488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 103471.77902666871,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 103464.57013033621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 877017.4462962695,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 876994.4444444423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 713917.4523449335,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 713860.5143721622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 703620.2594514571,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 703598.1467753884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 708736.1674140629,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 708681.4648729446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 493532.2729319061,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 493503.03882948856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 687970.3191801074,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 687919.2532942925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 634.9633478806943,
            "unit": "ns/iter",
            "extra": "iterations: 1106730\ncpu: 634.9407714618752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4895.204311676975,
            "unit": "ns/iter",
            "extra": "iterations: 143007\ncpu: 4895.1610760312415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3790.0769546174874,
            "unit": "ns/iter",
            "extra": "iterations: 207304\ncpu: 3790.0064639370426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3876.2374471611133,
            "unit": "ns/iter",
            "extra": "iterations: 180975\ncpu: 3876.0966984390075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2798.9470578726587,
            "unit": "ns/iter",
            "extra": "iterations: 247440\ncpu: 2798.7520206919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 25697.799409483454,
            "unit": "ns/iter",
            "extra": "iterations: 27095\ncpu: 25696.992064956718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 49171.197052629126,
            "unit": "ns/iter",
            "extra": "iterations: 14250\ncpu: 49166.098245614034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11525.379152460791,
            "unit": "ns/iter",
            "extra": "iterations: 60717\ncpu: 11524.9633545794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11481.345200806754,
            "unit": "ns/iter",
            "extra": "iterations: 60979\ncpu: 11481.024615031309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11532.277010720245,
            "unit": "ns/iter",
            "extra": "iterations: 60911\ncpu: 11532.156753295969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23109.81305091498,
            "unit": "ns/iter",
            "extra": "iterations: 30404\ncpu: 23109.36389948683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22213.21036202642,
            "unit": "ns/iter",
            "extra": "iterations: 31075\ncpu: 22208.450522928295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6798.480284452969,
            "unit": "ns/iter",
            "extra": "iterations: 103497\ncpu: 6798.417345430248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 33864.64970740361,
            "unit": "ns/iter",
            "extra": "iterations: 20677\ncpu: 33864.48711128363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27309.534753053114,
            "unit": "ns/iter",
            "extra": "iterations: 25451\ncpu: 27309.229499823377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27345.425711726708,
            "unit": "ns/iter",
            "extra": "iterations: 25677\ncpu: 27345.051992055476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 27792.729339659305,
            "unit": "ns/iter",
            "extra": "iterations: 25290\ncpu: 27792.87860814528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59163.93289384685,
            "unit": "ns/iter",
            "extra": "iterations: 11832\ncpu: 59164.26639621388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 215261.27815384546,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 215259.20000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 185683.20651014952,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 185682.4439701163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 184314.80690199678,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 184313.88303477495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 186974.63094921524,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 186975.59159797992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 110823.03313870862,
            "unit": "ns/iter",
            "extra": "iterations: 6337\ncpu: 110821.11409184313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 184264.63113457122,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 184265.540897097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6300.647110644716,
            "unit": "ns/iter",
            "extra": "iterations: 112378\ncpu: 6300.565057217644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32678.301505659234,
            "unit": "ns/iter",
            "extra": "iterations: 21386\ncpu: 32678.481249415756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26062.38612570341,
            "unit": "ns/iter",
            "extra": "iterations: 26841\ncpu: 26062.23687642016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26409.246629149366,
            "unit": "ns/iter",
            "extra": "iterations: 26477\ncpu: 26409.37417381126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26989.380557590346,
            "unit": "ns/iter",
            "extra": "iterations: 25933\ncpu: 26989.037134153383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 58360.11006398246,
            "unit": "ns/iter",
            "extra": "iterations: 11566\ncpu: 58360.47034411266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 212581.42813828163,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 212582.47422680113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 183578.95995786323,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 183578.2139093781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 181970.45705360553,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 181971.44716293894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 182398.8334636518,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 182397.10711493235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 112291.34267040035,
            "unit": "ns/iter",
            "extra": "iterations: 6426\ncpu: 112289.83815748562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184234.47172775236,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 184233.4554973818 ns\nthreads: 1"
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
        "date": 1702409120395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1721.7906862241425,
            "unit": "ns/iter",
            "extra": "iterations: 408234\ncpu: 1721.7240602203638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25158.02938171453,
            "unit": "ns/iter",
            "extra": "iterations: 32299\ncpu: 25156.60856373262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52467.79357566624,
            "unit": "ns/iter",
            "extra": "iterations: 15846\ncpu: 52464.82393032942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65706.18079138588,
            "unit": "ns/iter",
            "extra": "iterations: 13369\ncpu: 65705.7147131423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92923.15604616274,
            "unit": "ns/iter",
            "extra": "iterations: 9965\ncpu: 92920.722528851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 117073.3073661873,
            "unit": "ns/iter",
            "extra": "iterations: 7548\ncpu: 117069.36936936942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 137397.29820051737,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 137393.3322622108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163382.92074548025,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 163380.5722891568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 182867.7763463667,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 182860.95036958804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1523.9015004893201,
            "unit": "ns/iter",
            "extra": "iterations: 459850\ncpu: 1523.8795259323695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1304.7135666964007,
            "unit": "ns/iter",
            "extra": "iterations: 536446\ncpu: 1304.6875174761294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1327.1497930543967,
            "unit": "ns/iter",
            "extra": "iterations: 528883\ncpu: 1327.1122346530337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1360.8866939348507,
            "unit": "ns/iter",
            "extra": "iterations: 538356\ncpu: 1360.8461687062106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2351.8193501674573,
            "unit": "ns/iter",
            "extra": "iterations: 298323\ncpu: 2351.7771006593553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9585.504230633767,
            "unit": "ns/iter",
            "extra": "iterations: 85330\ncpu: 9585.200984413457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48990.59518443663,
            "unit": "ns/iter",
            "extra": "iterations: 16862\ncpu: 48990.273988850684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 36239.86739379882,
            "unit": "ns/iter",
            "extra": "iterations: 22646\ncpu: 36239.2122229092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 36345.01019247734,
            "unit": "ns/iter",
            "extra": "iterations: 22860\ncpu: 36342.73840769897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 36025.766093667364,
            "unit": "ns/iter",
            "extra": "iterations: 22804\ncpu: 36024.960533239864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 109632.7601566358,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 109629.99265785616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 791232.8156761364,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 791176.916451335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 655717.2550000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655681.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 653168.891000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653141.8999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 650135.4790000278,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650106.7999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 469336.12249322224,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 469312.73712737276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 655429.2370000213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655397.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3535928.384905485,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3535742.2641509464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1577658.1285956255,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1577561.4213197972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4618429.880000007,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4618092.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12515.675149010509,
            "unit": "ns/iter",
            "extra": "iterations: 67277\ncpu: 12514.962022682343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52361.831199999644,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52360.369999999886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 47571.75459317354,
            "unit": "ns/iter",
            "extra": "iterations: 17526\ncpu: 47570.23850279579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 47337.49115119746,
            "unit": "ns/iter",
            "extra": "iterations: 17573\ncpu: 47334.99687019885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50088.47982607421,
            "unit": "ns/iter",
            "extra": "iterations: 15639\ncpu: 50085.97736428147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 115693.64493042056,
            "unit": "ns/iter",
            "extra": "iterations: 7545\ncpu: 115685.06295560044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 853754.253924277,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 853747.3684210497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 692362.7967115246,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 692337.2944693598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 684062.8161172313,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 684045.6410256405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 684423.2368035369,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 684410.703812316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 482513.5274847204,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 482507.82898389536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 673842.8599277826,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 673824.8375451309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3670267.519841297,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3670126.587301585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1604236.6224137917,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1604194.8275862082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8497.1075925772,
            "unit": "ns/iter",
            "extra": "iterations: 96568\ncpu: 8496.941015657361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 48735.86085016371,
            "unit": "ns/iter",
            "extra": "iterations: 17032\ncpu: 48735.409816815365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38922.42982167138,
            "unit": "ns/iter",
            "extra": "iterations: 21253\ncpu: 38921.37110055049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38121.68403066465,
            "unit": "ns/iter",
            "extra": "iterations: 21654\ncpu: 38121.03999261118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 38406.67643365258,
            "unit": "ns/iter",
            "extra": "iterations: 21501\ncpu: 38406.13924933739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 104754.65632087876,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 104751.98758505505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 838282.0535236296,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 838267.5289919704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 685053.4866039086,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 685048.081100653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 684920.9470630655,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 684902.3205221191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 679117.8715003466,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 679101.363962667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 476922.6532389714,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 476913.01034295186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 663736.670999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663728.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 664.3433612470677,
            "unit": "ns/iter",
            "extra": "iterations: 1053127\ncpu: 664.3142754862392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4576.463647463789,
            "unit": "ns/iter",
            "extra": "iterations: 153153\ncpu: 4576.228999758416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3492.9907503557406,
            "unit": "ns/iter",
            "extra": "iterations: 208008\ncpu: 3492.825275950917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3599.774589278635,
            "unit": "ns/iter",
            "extra": "iterations: 194414\ncpu: 3599.6656619378987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2692.744736406352,
            "unit": "ns/iter",
            "extra": "iterations: 259661\ncpu: 2692.728211013588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 26487.95218342235,
            "unit": "ns/iter",
            "extra": "iterations: 26518\ncpu: 26487.491515197195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 46902.159492699306,
            "unit": "ns/iter",
            "extra": "iterations: 15612\ncpu: 46902.19702792763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10857.932939289716,
            "unit": "ns/iter",
            "extra": "iterations: 63614\ncpu: 10857.655547521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10857.024339133439,
            "unit": "ns/iter",
            "extra": "iterations: 64423\ncpu: 10856.794933486432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10767.330326162302,
            "unit": "ns/iter",
            "extra": "iterations: 64845\ncpu: 10767.027527180318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21832.022873991362,
            "unit": "ns/iter",
            "extra": "iterations: 32220\ncpu: 21831.23836126616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21646.969429908524,
            "unit": "ns/iter",
            "extra": "iterations: 32679\ncpu: 21646.51305119509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6439.581479746272,
            "unit": "ns/iter",
            "extra": "iterations: 108843\ncpu: 6439.401707045927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 31607.398575706153,
            "unit": "ns/iter",
            "extra": "iterations: 22046\ncpu: 31606.67694819882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25604.995744682426,
            "unit": "ns/iter",
            "extra": "iterations: 27260\ncpu: 25604.578136463548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25386.260267500867,
            "unit": "ns/iter",
            "extra": "iterations: 27514\ncpu: 25386.003489132774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26251.184859154564,
            "unit": "ns/iter",
            "extra": "iterations: 26696\ncpu: 26250.27344920582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 57152.76778873532,
            "unit": "ns/iter",
            "extra": "iterations: 12269\ncpu: 57152.8567935446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 205982.85710084988,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 205979.74125257434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 175917.52858576024,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 175914.01705115451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 175255.4872818072,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 175253.64089775627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 175102.85133098197,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 175095.90657960964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 104984.97273407808,
            "unit": "ns/iter",
            "extra": "iterations: 6675\ncpu: 104981.93258427088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 176133.65735146677,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 176129.20443101387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6119.730384652235,
            "unit": "ns/iter",
            "extra": "iterations: 114311\ncpu: 6119.7417571362685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 30923.515845693244,
            "unit": "ns/iter",
            "extra": "iterations: 22656\ncpu: 30922.75776836164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 24714.68900908482,
            "unit": "ns/iter",
            "extra": "iterations: 28287\ncpu: 24714.441262770863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 24717.083774811188,
            "unit": "ns/iter",
            "extra": "iterations: 28314\ncpu: 24716.889171434974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25469.409344363394,
            "unit": "ns/iter",
            "extra": "iterations: 27439\ncpu: 25469.437661722295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 55449.580873017556,
            "unit": "ns/iter",
            "extra": "iterations: 12600\ncpu: 55448.41269841162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 200987.23601949884,
            "unit": "ns/iter",
            "extra": "iterations: 3487\ncpu: 200983.2234012045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 175680.03945409314,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 175674.06947890762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 173930.7591609712,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 173925.12004043462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 173150.5292520292,
            "unit": "ns/iter",
            "extra": "iterations: 4051\ncpu: 173149.09898790307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 104286.36800240197,
            "unit": "ns/iter",
            "extra": "iterations: 6663\ncpu: 104283.9261593878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 173357.27385377322,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 173355.24163568948 ns\nthreads: 1"
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
        "date": 1702412567433,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1626.9065528524945,
            "unit": "ns/iter",
            "extra": "iterations: 433689\ncpu: 1626.8657955355104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19166.880696553788,
            "unit": "ns/iter",
            "extra": "iterations: 43184\ncpu: 19164.97545387181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39385.385081652435,
            "unit": "ns/iter",
            "extra": "iterations: 19962\ncpu: 39382.34144875264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58440.26419514981,
            "unit": "ns/iter",
            "extra": "iterations: 14512\ncpu: 58437.121003307606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64692.547892433286,
            "unit": "ns/iter",
            "extra": "iterations: 13499\ncpu: 64687.48055411513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81823.15991902791,
            "unit": "ns/iter",
            "extra": "iterations: 10868\ncpu: 81820.0772911299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96735.7625939029,
            "unit": "ns/iter",
            "extra": "iterations: 9052\ncpu: 96726.72337604956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112005.22869723217,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 112000.19425019431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 129651.76914989538,
            "unit": "ns/iter",
            "extra": "iterations: 6658\ncpu: 129639.9819765694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1462.524640884994,
            "unit": "ns/iter",
            "extra": "iterations: 477702\ncpu: 1462.4225981888326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1181.8391440087507,
            "unit": "ns/iter",
            "extra": "iterations: 590006\ncpu: 1181.7322196723414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1188.8507028731892,
            "unit": "ns/iter",
            "extra": "iterations: 587446\ncpu: 1188.8226322078979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1174.2785271631665,
            "unit": "ns/iter",
            "extra": "iterations: 596563\ncpu: 1174.2623997800747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2157.9555339077924,
            "unit": "ns/iter",
            "extra": "iterations: 324382\ncpu: 2157.82071754906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7115.846129006797,
            "unit": "ns/iter",
            "extra": "iterations: 114583\ncpu: 7115.512772400791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 36741.525249346705,
            "unit": "ns/iter",
            "extra": "iterations: 22258\ncpu: 36739.12301195079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29313.375303895515,
            "unit": "ns/iter",
            "extra": "iterations: 27559\ncpu: 29311.17239377336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29503.000910815994,
            "unit": "ns/iter",
            "extra": "iterations: 27448\ncpu: 29502.284319440358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29096.280362621757,
            "unit": "ns/iter",
            "extra": "iterations: 28349\ncpu: 29095.936364598372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81497.48822505608,
            "unit": "ns/iter",
            "extra": "iterations: 10913\ncpu: 81496.57289471265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 650028.0340000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649980.8000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 509809.2080000924,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509749.8000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 512832.7229999741,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512831.5999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 515066.59500000754,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515029.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 361347.0795360441,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 361326.30488815246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 525248.916999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525218.1999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2620955.4676056476,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2620773.802816896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1191490.3741766005,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1191431.6205533578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3481192.769516731,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3480992.5650557615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9993.388042991259,
            "unit": "ns/iter",
            "extra": "iterations: 84854\ncpu: 9992.938459000163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51235.76024806418,
            "unit": "ns/iter",
            "extra": "iterations: 16125\ncpu: 51234.2015503877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39946.256609717195,
            "unit": "ns/iter",
            "extra": "iterations: 20311\ncpu: 39946.122790606096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 40075.860485648795,
            "unit": "ns/iter",
            "extra": "iterations: 20385\ncpu: 40074.47633063526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40228.223244667,
            "unit": "ns/iter",
            "extra": "iterations: 20865\ncpu: 40226.66666666686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91601.2784771318,
            "unit": "ns/iter",
            "extra": "iterations: 9771\ncpu: 91599.25289120886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 687983.5630630512,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 687975.0750750758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 548288.409999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548272.0999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 538470.7339999295,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538451.1999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 538734.7680000403,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538724.1999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 389419.1380070833,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 389400.1763668458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 537571.9229999732,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537569.5000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2745612.75892859,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2745505.0595238092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1224575.5814266084,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1224559.6231493964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6949.127113248849,
            "unit": "ns/iter",
            "extra": "iterations: 119366\ncpu: 6948.783573211846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36635.89243862275,
            "unit": "ns/iter",
            "extra": "iterations: 22443\ncpu: 36635.52109789257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29007.19086580659,
            "unit": "ns/iter",
            "extra": "iterations: 28355\ncpu: 29005.85081996106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28470.67907218334,
            "unit": "ns/iter",
            "extra": "iterations: 28885\ncpu: 28469.236628007748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28472.374316556416,
            "unit": "ns/iter",
            "extra": "iterations: 28532\ncpu: 28471.582784242073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78262.41473007148,
            "unit": "ns/iter",
            "extra": "iterations: 11188\ncpu: 78262.11119056135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 658899.9090000697,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658879.5999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 530819.8389999461,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530785.0999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 529404.1209999705,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529389.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 533362.2730000798,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533341.3000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 376496.40590717556,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 376488.1856540084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 543637.2402538436,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 543606.1650045356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 638.5003218224365,
            "unit": "ns/iter",
            "extra": "iterations: 1096878\ncpu: 638.4855927459565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3940.159652810782,
            "unit": "ns/iter",
            "extra": "iterations: 177886\ncpu: 3940.099839222867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3165.084519457353,
            "unit": "ns/iter",
            "extra": "iterations: 230302\ncpu: 3164.9990013113415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3124.6494351573656,
            "unit": "ns/iter",
            "extra": "iterations: 223602\ncpu: 3124.5968282931462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2425.4414280365368,
            "unit": "ns/iter",
            "extra": "iterations: 291001\ncpu: 2425.36245579913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21122.560941743825,
            "unit": "ns/iter",
            "extra": "iterations: 33130\ncpu: 21122.221551463983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37064.51063714087,
            "unit": "ns/iter",
            "extra": "iterations: 18379\ncpu: 37063.131835246786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8930.159732863229,
            "unit": "ns/iter",
            "extra": "iterations: 78312\ncpu: 8930.012003268948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9046.575896086106,
            "unit": "ns/iter",
            "extra": "iterations: 77448\ncpu: 9046.272337568435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9113.082446980954,
            "unit": "ns/iter",
            "extra": "iterations: 76813\ncpu: 9112.76476638074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17258.858799488644,
            "unit": "ns/iter",
            "extra": "iterations: 40616\ncpu: 17258.49172739811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15974.244661169327,
            "unit": "ns/iter",
            "extra": "iterations: 43783\ncpu: 15973.916817029532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5675.754592474249,
            "unit": "ns/iter",
            "extra": "iterations: 123354\ncpu: 5675.6708335359635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28488.474803437544,
            "unit": "ns/iter",
            "extra": "iterations: 24547\ncpu: 28487.668554202264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22806.01951937402,
            "unit": "ns/iter",
            "extra": "iterations: 30585\ncpu: 22805.744646068393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22737.980253739814,
            "unit": "ns/iter",
            "extra": "iterations: 30740\ncpu: 22737.24788549121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23191.64052939769,
            "unit": "ns/iter",
            "extra": "iterations: 30072\ncpu: 23191.31085395057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51100.83497751071,
            "unit": "ns/iter",
            "extra": "iterations: 13786\ncpu: 51098.12128246026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 181044.54458018788,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 181034.02651416487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152529.03014529403,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 152527.08739969908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151343.32409972817,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 151341.50862987462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 147750.20776698194,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 147740.15102481315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 91990.21753971076,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 91986.75331495338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150790.04753557817,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 150780.41621029333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5481.642387947684,
            "unit": "ns/iter",
            "extra": "iterations: 127574\ncpu: 5481.480552463663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27971.43131357101,
            "unit": "ns/iter",
            "extra": "iterations: 25267\ncpu: 27970.882969881375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22447.141911435432,
            "unit": "ns/iter",
            "extra": "iterations: 31118\ncpu: 22446.52291278347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22511.596430142006,
            "unit": "ns/iter",
            "extra": "iterations: 31878\ncpu: 22511.493820189433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22703.402199936034,
            "unit": "ns/iter",
            "extra": "iterations: 30910\ncpu: 22703.118731802046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49876.284591633004,
            "unit": "ns/iter",
            "extra": "iterations: 14252\ncpu: 49874.831602582264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 177043.7923857968,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177038.6294416274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148832.17200169837,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 148830.23900981902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 145256.34560370847,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 145253.42869163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 146590.61422678898,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 146586.4123711353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 90569.01949570021,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 90564.29685469127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148206.69835234963,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 148202.36586396195 ns\nthreads: 1"
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
        "date": 1702416017049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1615.0475887706411,
            "unit": "ns/iter",
            "extra": "iterations: 430942\ncpu: 1614.961178070367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19270.186392696076,
            "unit": "ns/iter",
            "extra": "iterations: 42389\ncpu: 19268.81738186794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40155.03052989782,
            "unit": "ns/iter",
            "extra": "iterations: 20570\ncpu: 40153.50510452114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59111.47759409051,
            "unit": "ns/iter",
            "extra": "iterations: 14215\ncpu: 59107.68202602884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66026.97087451331,
            "unit": "ns/iter",
            "extra": "iterations: 13356\ncpu: 66024.68553459122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82086.59012091049,
            "unit": "ns/iter",
            "extra": "iterations: 10669\ncpu: 82084.07535851531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98285.36446700337,
            "unit": "ns/iter",
            "extra": "iterations: 8865\ncpu: 98281.73716864067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 113151.31348579962,
            "unit": "ns/iter",
            "extra": "iterations: 7608\ncpu: 113148.15983175591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 129915.09039547872,
            "unit": "ns/iter",
            "extra": "iterations: 6549\ncpu: 129909.77248434882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1450.3529773033185,
            "unit": "ns/iter",
            "extra": "iterations: 481963\ncpu: 1450.3401713409523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1216.955897414595,
            "unit": "ns/iter",
            "extra": "iterations: 577041\ncpu: 1216.8984526229494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1184.7463642648022,
            "unit": "ns/iter",
            "extra": "iterations: 590252\ncpu: 1184.7280483590066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1172.0070990203023,
            "unit": "ns/iter",
            "extra": "iterations: 595716\ncpu: 1171.9458601078384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2225.539490282752,
            "unit": "ns/iter",
            "extra": "iterations: 316293\ncpu: 2225.472267802323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7211.42409942093,
            "unit": "ns/iter",
            "extra": "iterations: 112733\ncpu: 7211.1546752060085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37376.318328410445,
            "unit": "ns/iter",
            "extra": "iterations: 22015\ncpu: 37375.475811946344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30864.206777923126,
            "unit": "ns/iter",
            "extra": "iterations: 27324\ncpu: 30862.772654076984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29585.67187218177,
            "unit": "ns/iter",
            "extra": "iterations: 27727\ncpu: 29585.02542647961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29103.699169232852,
            "unit": "ns/iter",
            "extra": "iterations: 27926\ncpu: 29102.356227171767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80838.0252511333,
            "unit": "ns/iter",
            "extra": "iterations: 10851\ncpu: 80836.54962676232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 657876.4569999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657846.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 521772.3709999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521755.5000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 522038.2480000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522033.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 515863.06500001915,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515853.1000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 364885.9207342439,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 364875.4693366703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 514366.5609999744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514362.30000000197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2592298.6472222772,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2592166.666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1201903.0051746517,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1201847.0892626133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3516961.400000024,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3516836.60377358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10093.957960936468,
            "unit": "ns/iter",
            "extra": "iterations: 82685\ncpu: 10093.459515026914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50986.276088289225,
            "unit": "ns/iter",
            "extra": "iterations: 16310\ncpu: 50984.788473329274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40529.046053597456,
            "unit": "ns/iter",
            "extra": "iterations: 20411\ncpu: 40527.88202439867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 40862.4817913388,
            "unit": "ns/iter",
            "extra": "iterations: 20320\ncpu: 40862.125984251936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40060.99690821304,
            "unit": "ns/iter",
            "extra": "iterations: 20700\ncpu: 40059.14009661829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90057.8275445186,
            "unit": "ns/iter",
            "extra": "iterations: 9098\ncpu: 90056.4519674654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 689003.586826363,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 688975.2994012022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 548575.0269999699,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548570.5999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 536797.5899999919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536787.4000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 536707.8520000064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536691.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 383803.63684443076,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 383800.57293962385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 534626.7949999515,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534602.0999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2755542.315476251,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2755456.547619032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1218088.7309711867,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 1218039.8950131177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6974.031036765346,
            "unit": "ns/iter",
            "extra": "iterations: 117828\ncpu: 6973.819465661776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36402.853160098704,
            "unit": "ns/iter",
            "extra": "iterations: 22705\ncpu: 36401.58995815877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28876.35748488348,
            "unit": "ns/iter",
            "extra": "iterations: 28611\ncpu: 28875.582817797367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28787.63246164621,
            "unit": "ns/iter",
            "extra": "iterations: 28680\ncpu: 28786.24476987446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28271.97610567462,
            "unit": "ns/iter",
            "extra": "iterations: 28919\ncpu: 28271.738303537473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78631.302464124,
            "unit": "ns/iter",
            "extra": "iterations: 11079\ncpu: 78628.04404729659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 668107.9094176666,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 668102.4442846865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 531286.5279999528,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531253.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 526501.7980000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526480.4000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 539889.4389999781,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539884.899999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 373088.44795222953,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 373075.25597269804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 524789.4910000354,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524785.1000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 647.1861030108635,
            "unit": "ns/iter",
            "extra": "iterations: 1091186\ncpu: 647.1755502728232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3933.426611750641,
            "unit": "ns/iter",
            "extra": "iterations: 177726\ncpu: 3933.0925131944987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3126.5667668545716,
            "unit": "ns/iter",
            "extra": "iterations: 223247\ncpu: 3126.355561328932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3208.32231013009,
            "unit": "ns/iter",
            "extra": "iterations: 225615\ncpu: 3208.2423597721777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2412.960837587545,
            "unit": "ns/iter",
            "extra": "iterations: 288925\ncpu: 2412.865276455824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20984.424828165513,
            "unit": "ns/iter",
            "extra": "iterations: 33317\ncpu: 20983.930125761563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37099.21433351972,
            "unit": "ns/iter",
            "extra": "iterations: 17930\ncpu: 37098.349135527074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8891.35910639798,
            "unit": "ns/iter",
            "extra": "iterations: 78648\ncpu: 8891.020750686603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8837.890434188352,
            "unit": "ns/iter",
            "extra": "iterations: 79021\ncpu: 8837.815264296789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8861.173985371008,
            "unit": "ns/iter",
            "extra": "iterations: 78748\ncpu: 8860.236450449558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16915.374993949277,
            "unit": "ns/iter",
            "extra": "iterations: 41318\ncpu: 16914.36177936976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16359.334332060902,
            "unit": "ns/iter",
            "extra": "iterations: 42721\ncpu: 16358.535614803019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5665.054898233516,
            "unit": "ns/iter",
            "extra": "iterations: 124157\ncpu: 5664.6036872669365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28101.311820158946,
            "unit": "ns/iter",
            "extra": "iterations: 24822\ncpu: 28098.57787446611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22695.164397802593,
            "unit": "ns/iter",
            "extra": "iterations: 30779\ncpu: 22694.086877416543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22334.094808917478,
            "unit": "ns/iter",
            "extra": "iterations: 31400\ncpu: 22331.802547770836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22777.208462265666,
            "unit": "ns/iter",
            "extra": "iterations: 30701\ncpu: 22776.622911305993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51111.13596843919,
            "unit": "ns/iter",
            "extra": "iterations: 13687\ncpu: 51109.227734346816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 179603.43365778722,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 179594.54405737625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 149928.45158543924,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 149927.19727601527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150040.83056619394,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 150035.07875691995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 149515.67617812246,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 149511.54345006423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 92493.72194927797,
            "unit": "ns/iter",
            "extra": "iterations: 7531\ncpu: 92491.24950205901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 152262.87083601393,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 152255.27616591397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5488.8213770386,
            "unit": "ns/iter",
            "extra": "iterations: 127520\ncpu: 5488.35868883316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28062.514742408577,
            "unit": "ns/iter",
            "extra": "iterations: 24962\ncpu: 28061.397323932688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22677.789923555993,
            "unit": "ns/iter",
            "extra": "iterations: 31003\ncpu: 22676.4538915589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22281.608246112057,
            "unit": "ns/iter",
            "extra": "iterations: 31433\ncpu: 22279.855565806665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22595.356318142723,
            "unit": "ns/iter",
            "extra": "iterations: 31093\ncpu: 22594.23342874604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50192.08863294808,
            "unit": "ns/iter",
            "extra": "iterations: 13979\ncpu: 50187.46691465848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 175262.58631839973,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 175251.66666666607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148225.7018251371,
            "unit": "ns/iter",
            "extra": "iterations: 4712\ncpu: 147937.75466892947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 147126.18064651694,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 147120.79019649187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 147097.12484420347,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 147096.32322392863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 92002.1700474179,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 91995.95626975829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148741.49271383512,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 148740.52798310472 ns\nthreads: 1"
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
        "date": 1702418358848,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1644.8232691058306,
            "unit": "ns/iter",
            "extra": "iterations: 429359\ncpu: 1644.7720904883793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19319.77404995069,
            "unit": "ns/iter",
            "extra": "iterations: 42682\ncpu: 19318.670633990907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40363.800477024044,
            "unit": "ns/iter",
            "extra": "iterations: 20544\ncpu: 40362.806658878515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58828.032532322126,
            "unit": "ns/iter",
            "extra": "iterations: 14232\ncpu: 58826.039910061816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65771.62583767838,
            "unit": "ns/iter",
            "extra": "iterations: 13430\ncpu: 65768.97989575577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82440.4372245654,
            "unit": "ns/iter",
            "extra": "iterations: 10665\ncpu: 82437.77777777782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 97377.26332358769,
            "unit": "ns/iter",
            "extra": "iterations: 8894\ncpu: 97375.61277265572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 113616.57202180079,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 113611.64028030097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 132242.13778990606,
            "unit": "ns/iter",
            "extra": "iterations: 6597\ncpu: 132239.68470516903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1467.3963630798496,
            "unit": "ns/iter",
            "extra": "iterations: 476997\ncpu: 1467.3343857508519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1213.4585614735965,
            "unit": "ns/iter",
            "extra": "iterations: 573295\ncpu: 1213.4567718190472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1181.6377823783203,
            "unit": "ns/iter",
            "extra": "iterations: 592202\ncpu: 1181.5711530862793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1180.17453166329,
            "unit": "ns/iter",
            "extra": "iterations: 579551\ncpu: 1180.1270293727382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2117.027795157291,
            "unit": "ns/iter",
            "extra": "iterations: 330849\ncpu: 2116.906806428313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7203.064805565678,
            "unit": "ns/iter",
            "extra": "iterations: 113123\ncpu: 7202.768667733353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37556.55684684782,
            "unit": "ns/iter",
            "extra": "iterations: 22200\ncpu: 37555.18468468463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29982.89672452554,
            "unit": "ns/iter",
            "extra": "iterations: 27538\ncpu: 29981.65080979018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29821.85542212378,
            "unit": "ns/iter",
            "extra": "iterations: 27563\ncpu: 29820.40416500378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29348.526149651778,
            "unit": "ns/iter",
            "extra": "iterations: 27878\ncpu: 29347.288184231304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81408.31910980275,
            "unit": "ns/iter",
            "extra": "iterations: 10874\ncpu: 81403.66930292442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 645321.9369999772,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645289.9000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 518925.6900000032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518915.5000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 515707.00100000977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515672.1999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 521219.2719999962,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521190.6999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 363098.75295608805,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 363083.15033783804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 520159.28299999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520150.7999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2640435.483050814,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2640411.8644067785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1182809.8020698722,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1182774.6442432094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3518951.6958175194,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3518874.1444866937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10011.748956326996,
            "unit": "ns/iter",
            "extra": "iterations: 83599\ncpu: 10011.414012129348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51225.532938564655,
            "unit": "ns/iter",
            "extra": "iterations: 16212\ncpu: 51223.729336294295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40724.76035082602,
            "unit": "ns/iter",
            "extra": "iterations: 20409\ncpu: 40722.573374491614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41163.07466745794,
            "unit": "ns/iter",
            "extra": "iterations: 20223\ncpu: 41162.245957573105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40403.15914872767,
            "unit": "ns/iter",
            "extra": "iterations: 20440\ncpu: 40401.08121330725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90946.12786577926,
            "unit": "ns/iter",
            "extra": "iterations: 9596\ncpu: 90943.78907878257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 696361.6919000812,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 696353.5957607871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 546105.9259999956,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546077.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 550231.4940000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550215.3999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 540593.5609999801,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540590.2999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 386924.7975297788,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 386917.4680194112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 532269.0689999945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532251.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2743093.4970588377,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2743014.117647057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1236730.7296937332,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1236676.6977363476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7015.915401136425,
            "unit": "ns/iter",
            "extra": "iterations: 118264\ncpu: 7015.632821484143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37092.794410736045,
            "unit": "ns/iter",
            "extra": "iterations: 22579\ncpu: 37091.700252447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29508.368932038928,
            "unit": "ns/iter",
            "extra": "iterations: 28222\ncpu: 29507.557933526994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28811.78826745167,
            "unit": "ns/iter",
            "extra": "iterations: 28536\ncpu: 28811.32954864024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28199.75629677663,
            "unit": "ns/iter",
            "extra": "iterations: 29261\ncpu: 28198.61590512976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78091.61746529298,
            "unit": "ns/iter",
            "extra": "iterations: 11165\ncpu: 78090.57769816376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 675593.7080000081,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 675577.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 531786.2019999779,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531759.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 526243.1259999687,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526246.7000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 535882.5889999821,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535854.1999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 372824.7970765252,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 372812.98366294283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 524455.0830000207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524424.4000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 640.061221390552,
            "unit": "ns/iter",
            "extra": "iterations: 1099681\ncpu: 640.0528880648113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4027.883981178064,
            "unit": "ns/iter",
            "extra": "iterations: 173627\ncpu: 4027.775058026701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3188.8831216118824,
            "unit": "ns/iter",
            "extra": "iterations: 219707\ncpu: 3188.7664025269964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3071.883663583731,
            "unit": "ns/iter",
            "extra": "iterations: 227908\ncpu: 3071.785545044472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2465.5951818992435,
            "unit": "ns/iter",
            "extra": "iterations: 284718\ncpu: 2465.5416938865724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21282.02546864215,
            "unit": "ns/iter",
            "extra": "iterations: 33021\ncpu: 21281.51479361612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37176.29973926519,
            "unit": "ns/iter",
            "extra": "iterations: 18793\ncpu: 37175.41637843867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9021.746416971093,
            "unit": "ns/iter",
            "extra": "iterations: 77588\ncpu: 9021.527813579363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8916.858069219446,
            "unit": "ns/iter",
            "extra": "iterations: 78186\ncpu: 8916.63469163277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8841.485833280722,
            "unit": "ns/iter",
            "extra": "iterations: 79235\ncpu: 8841.347889190332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17181.622870987252,
            "unit": "ns/iter",
            "extra": "iterations: 40864\ncpu: 17181.23531714963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16355.639893529284,
            "unit": "ns/iter",
            "extra": "iterations: 42829\ncpu: 16355.525461719795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5675.07076831396,
            "unit": "ns/iter",
            "extra": "iterations: 124194\ncpu: 5674.903779570656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28519.21134062914,
            "unit": "ns/iter",
            "extra": "iterations: 24496\ncpu: 28519.154147615765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22914.52106815125,
            "unit": "ns/iter",
            "extra": "iterations: 30520\ncpu: 22914.26277850621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22750.80611015326,
            "unit": "ns/iter",
            "extra": "iterations: 30703\ncpu: 22750.933133570103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23202.54944213262,
            "unit": "ns/iter",
            "extra": "iterations: 30025\ncpu: 23202.181515403914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50902.219784226174,
            "unit": "ns/iter",
            "extra": "iterations: 13718\ncpu: 50902.09214171171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 177905.87713920113,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 177904.77650063756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152640.10977738665,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 152636.8616324736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150060.96591889428,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 150058.930112166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 152142.78245767133,
            "unit": "ns/iter",
            "extra": "iterations: 4606\ncpu: 152141.20712114678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93708.41419251655,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 93709.06670217054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150502.32335719152,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 150499.7180654941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5449.0848968327555,
            "unit": "ns/iter",
            "extra": "iterations: 128238\ncpu: 5449.015112525191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27821.644482388303,
            "unit": "ns/iter",
            "extra": "iterations: 25183\ncpu: 27821.300083389688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22246.38933019965,
            "unit": "ns/iter",
            "extra": "iterations: 31472\ncpu: 22246.33324860172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22092.436255984612,
            "unit": "ns/iter",
            "extra": "iterations: 31752\ncpu: 22092.353237591018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22488.212844924783,
            "unit": "ns/iter",
            "extra": "iterations: 30985\ncpu: 22487.76827497206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49611.7712826312,
            "unit": "ns/iter",
            "extra": "iterations: 14096\ncpu: 49611.06696935305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176216.57365902842,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 176216.14202971777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148331.4113910638,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 148330.72199873158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146724.70673379363,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 146721.31319488195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 147621.9069081722,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 147619.3133951135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 92084.38973484123,
            "unit": "ns/iter",
            "extra": "iterations: 7618\ncpu: 92082.84326594832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 146301.99113737044,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 146303.16522473184 ns\nthreads: 1"
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
        "date": 1702422477867,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1631.8198900739872,
            "unit": "ns/iter",
            "extra": "iterations: 431381\ncpu: 1631.77863651853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19148.149539698425,
            "unit": "ns/iter",
            "extra": "iterations: 42798\ncpu: 19147.47651759428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39649.9518999516,
            "unit": "ns/iter",
            "extra": "iterations: 20790\ncpu: 39649.36988936988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58085.993265759884,
            "unit": "ns/iter",
            "extra": "iterations: 14404\ncpu: 58085.19855595666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64812.43527065865,
            "unit": "ns/iter",
            "extra": "iterations: 13541\ncpu: 64811.07746842919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81412.3601557435,
            "unit": "ns/iter",
            "extra": "iterations: 10787\ncpu: 81411.43042551224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96192.0045555568,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 96189.88888888888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 111961.96270095967,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 111962.44372990353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 130193.68380270676,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 130190.46341826842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1527.3919547799012,
            "unit": "ns/iter",
            "extra": "iterations: 458558\ncpu: 1527.3773437602244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1182.0323180117562,
            "unit": "ns/iter",
            "extra": "iterations: 592456\ncpu: 1182.0195930161892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1185.6857904952653,
            "unit": "ns/iter",
            "extra": "iterations: 589352\ncpu: 1185.6691756369696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1186.14180869488,
            "unit": "ns/iter",
            "extra": "iterations: 590669\ncpu: 1186.1468944535764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2135.488863291926,
            "unit": "ns/iter",
            "extra": "iterations: 327296\ncpu: 2135.413203949943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7145.968809930852,
            "unit": "ns/iter",
            "extra": "iterations: 114716\ncpu: 7145.781756686078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37104.441868853566,
            "unit": "ns/iter",
            "extra": "iterations: 22174\ncpu: 37103.35528095966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31023.320560167274,
            "unit": "ns/iter",
            "extra": "iterations: 27349\ncpu: 31022.969761234373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29635.455624092658,
            "unit": "ns/iter",
            "extra": "iterations: 27560\ncpu: 29635.315674891197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29109.842881512548,
            "unit": "ns/iter",
            "extra": "iterations: 28138\ncpu: 29109.435638638162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81596.47145202883,
            "unit": "ns/iter",
            "extra": "iterations: 10964\ncpu: 81593.46041590678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 643174.5070000261,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643127.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 518441.7430000394,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518428.4999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 518531.44099999324,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518533.5999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 518905.61999999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518890.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 365247.3570226873,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 365236.753574432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 524556.9289999708,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524546.6999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2624362.929577408,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2624344.788732398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1202509.817824402,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1202490.6946264717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3539171.9274809845,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3538990.458015277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10230.53006311957,
            "unit": "ns/iter",
            "extra": "iterations: 83175\ncpu: 10230.474301172253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51276.40423578389,
            "unit": "ns/iter",
            "extra": "iterations: 16337\ncpu: 51275.564669155894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40445.50881834293,
            "unit": "ns/iter",
            "extra": "iterations: 20412\ncpu: 40444.91965510474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 40651.119631901944,
            "unit": "ns/iter",
            "extra": "iterations: 20212\ncpu: 40642.61824658633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39970.61287970708,
            "unit": "ns/iter",
            "extra": "iterations: 20575\ncpu: 39968.63183475077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 89884.32938363594,
            "unit": "ns/iter",
            "extra": "iterations: 9621\ncpu: 89879.46159442938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 692683.6411985073,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 692636.4044943778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 550724.4529999866,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550727.2999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 544271.2899999833,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544242.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 547422.3559999701,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547371.5000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 381886.3872960012,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 381871.7688575209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 533498.6319999758,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533471.1999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2743715.499999936,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2743702.662721892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1210559.105124859,
            "unit": "ns/iter",
            "extra": "iterations: 761\ncpu: 1210526.0183968537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6895.674475976556,
            "unit": "ns/iter",
            "extra": "iterations: 119985\ncpu: 6895.6452889944485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37120.41129673668,
            "unit": "ns/iter",
            "extra": "iterations: 22626\ncpu: 37116.82577565609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28797.81839721081,
            "unit": "ns/iter",
            "extra": "iterations: 28700\ncpu: 28796.609756097576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28613.01622464767,
            "unit": "ns/iter",
            "extra": "iterations: 28845\ncpu: 28610.74362974539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28256.238101787407,
            "unit": "ns/iter",
            "extra": "iterations: 29080\ncpu: 28255.37482806066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 78245.31818994902,
            "unit": "ns/iter",
            "extra": "iterations: 11182\ncpu: 78240.32373457347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 672767.0500000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 672752.6000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 531863.5959999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531866.1000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 534770.8890000149,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534723.4999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 536023.3670000412,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536026.8000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 373758.37191490893,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 373751.3617021284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 528697.4880000344,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528677.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 663.4539015328979,
            "unit": "ns/iter",
            "extra": "iterations: 1050523\ncpu: 663.457059007754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3989.8947308510737,
            "unit": "ns/iter",
            "extra": "iterations: 175702\ncpu: 3989.8288010381398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3196.6116507067222,
            "unit": "ns/iter",
            "extra": "iterations: 219300\ncpu: 3196.59005927953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3171.1833835086823,
            "unit": "ns/iter",
            "extra": "iterations: 228532\ncpu: 3170.990495860538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2403.4994941788395,
            "unit": "ns/iter",
            "extra": "iterations: 303467\ncpu: 2403.4725357287607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20737.961010126,
            "unit": "ns/iter",
            "extra": "iterations: 33778\ncpu: 20737.181005388073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36346.537671409314,
            "unit": "ns/iter",
            "extra": "iterations: 19179\ncpu: 36345.90958861254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8868.266907237514,
            "unit": "ns/iter",
            "extra": "iterations: 79256\ncpu: 8867.765216513604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8703.725686034339,
            "unit": "ns/iter",
            "extra": "iterations: 80098\ncpu: 8703.769132812347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8885.50788906168,
            "unit": "ns/iter",
            "extra": "iterations: 79287\ncpu: 8885.181681738542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17112.362244898228,
            "unit": "ns/iter",
            "extra": "iterations: 40572\ncpu: 17112.07729468606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16579.157919665722,
            "unit": "ns/iter",
            "extra": "iterations: 42224\ncpu: 16578.737211064676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5716.458017280877,
            "unit": "ns/iter",
            "extra": "iterations: 121288\ncpu: 5716.182144977254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28342.63213693333,
            "unit": "ns/iter",
            "extra": "iterations: 24713\ncpu: 28341.22526605426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22748.460871541887,
            "unit": "ns/iter",
            "extra": "iterations: 30796\ncpu: 22747.080789713214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22517.881951815485,
            "unit": "ns/iter",
            "extra": "iterations: 31089\ncpu: 22515.93168001516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23027.76871284453,
            "unit": "ns/iter",
            "extra": "iterations: 30447\ncpu: 23026.314579433176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51009.80122279494,
            "unit": "ns/iter",
            "extra": "iterations: 13739\ncpu: 51006.77633015591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 179548.077704416,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 179538.64906043545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151670.23472041957,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 151667.03511053132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150953.3925091994,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 150944.79324529172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 151113.65506055014,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 151109.36418685148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 92329.64350132536,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 92330.09283819677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150895.84181033898,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 150894.8706896532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5489.7126816431855,
            "unit": "ns/iter",
            "extra": "iterations: 128067\ncpu: 5489.596851648073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27695.099674757872,
            "unit": "ns/iter",
            "extra": "iterations: 25212\ncpu: 27693.110423608046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22331.158953722515,
            "unit": "ns/iter",
            "extra": "iterations: 31311\ncpu: 22330.692089042546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23598.093525861994,
            "unit": "ns/iter",
            "extra": "iterations: 31649\ncpu: 23597.98729817704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22651.94408873249,
            "unit": "ns/iter",
            "extra": "iterations: 30924\ncpu: 22651.77855387396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49437.593677228106,
            "unit": "ns/iter",
            "extra": "iterations: 14171\ncpu: 49437.34387128579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 174437.2777358516,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 174438.1635220142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148037.39249999856,
            "unit": "ns/iter",
            "extra": "iterations: 4800\ncpu: 148035.45833333468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146783.8462994117,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 146782.04373423036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148373.76009301245,
            "unit": "ns/iter",
            "extra": "iterations: 4731\ncpu: 148369.26653984183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91659.23368503028,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 91653.64074508303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 146993.42530646618,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 146981.30064408822 ns\nthreads: 1"
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
        "date": 1702453368429,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1645.6149959944205,
            "unit": "ns/iter",
            "extra": "iterations: 431902\ncpu: 1645.5010627410848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19071.289085339595,
            "unit": "ns/iter",
            "extra": "iterations: 43098\ncpu: 19071.005615109752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39396.13934973537,
            "unit": "ns/iter",
            "extra": "iterations: 20976\ncpu: 39396.238558352394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58684.25866242821,
            "unit": "ns/iter",
            "extra": "iterations: 14459\ncpu: 58684.57708001934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65342.97329772977,
            "unit": "ns/iter",
            "extra": "iterations: 13482\ncpu: 65342.79780448008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82075.3676360942,
            "unit": "ns/iter",
            "extra": "iterations: 10728\ncpu: 82075.97874720355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96944.41983544618,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 96942.18367800755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112869.12901561521,
            "unit": "ns/iter",
            "extra": "iterations: 7751\ncpu: 112864.88195071615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 132682.74168681822,
            "unit": "ns/iter",
            "extra": "iterations: 6616\ncpu: 132678.11366384517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1475.1055373022464,
            "unit": "ns/iter",
            "extra": "iterations: 456540\ncpu: 1475.0587024138074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1194.3315876472427,
            "unit": "ns/iter",
            "extra": "iterations: 578951\ncpu: 1194.2974448614825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1202.3924270744667,
            "unit": "ns/iter",
            "extra": "iterations: 575656\ncpu: 1202.3595689092106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1206.0655357749301,
            "unit": "ns/iter",
            "extra": "iterations: 580309\ncpu: 1206.0745223665347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2143.853285303746,
            "unit": "ns/iter",
            "extra": "iterations: 326743\ncpu: 2143.867810481021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7133.224208884278,
            "unit": "ns/iter",
            "extra": "iterations: 113479\ncpu: 7133.0836542444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 36854.87182453154,
            "unit": "ns/iter",
            "extra": "iterations: 22477\ncpu: 36855.19864750632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29581.971153844974,
            "unit": "ns/iter",
            "extra": "iterations: 27872\ncpu: 29578.598593570612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29336.74335936097,
            "unit": "ns/iter",
            "extra": "iterations: 28047\ncpu: 29336.5386672372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29129.025203164885,
            "unit": "ns/iter",
            "extra": "iterations: 27933\ncpu: 29128.919199513173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81350.64910829038,
            "unit": "ns/iter",
            "extra": "iterations: 10878\ncpu: 81348.90604890592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 643589.7591508182,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 643595.97364568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 512834.6850000298,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512836.8000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 509079.0230000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509073.49999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 519552.0860000329,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519561.0999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 364181.0788590598,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 364176.00671140937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517809.63199996675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517809.1000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2611199.943820221,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2611193.8202247275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1179767.3775510136,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 1179767.3469387752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3522856.3422052218,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3522806.4638783266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10070.111289703204,
            "unit": "ns/iter",
            "extra": "iterations: 83368\ncpu: 10070.174407446542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53021.342028278006,
            "unit": "ns/iter",
            "extra": "iterations: 16408\ncpu: 53019.72208678692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 41566.960719566545,
            "unit": "ns/iter",
            "extra": "iterations: 20290\ncpu: 41567.27944800395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41062.51649057038,
            "unit": "ns/iter",
            "extra": "iterations: 20254\ncpu: 41062.42223758271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40341.25527497416,
            "unit": "ns/iter",
            "extra": "iterations: 20711\ncpu: 40340.73680652777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 93816.79302032969,
            "unit": "ns/iter",
            "extra": "iterations: 9542\ncpu: 93817.60637182971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 699526.683183171,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 699527.3273273256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 554040.0969999837,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554031.9999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 547125.6719999928,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547134.199999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 544783.0730000192,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544785.0999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 386330.8953846222,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 386333.84615384566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 531819.2540000268,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531827.3999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2756894.422619029,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2756776.1904762015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1227401.9108367574,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1227404.5267489727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6958.5982678099035,
            "unit": "ns/iter",
            "extra": "iterations: 117770\ncpu: 6958.560754012097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36405.939727115416,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 36406.225990197556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28865.15989634393,
            "unit": "ns/iter",
            "extra": "iterations: 28556\ncpu: 28865.058131390895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28776.866447229455,
            "unit": "ns/iter",
            "extra": "iterations: 28558\ncpu: 28777.106239932706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28607.818679593227,
            "unit": "ns/iter",
            "extra": "iterations: 28673\ncpu: 28607.836640742215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 77763.44665056508,
            "unit": "ns/iter",
            "extra": "iterations: 11181\ncpu: 77763.96565602336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 668334.1567217628,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 668318.4759166072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 532007.607999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531989.8999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 530828.453999959,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530811.700000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 528432.4470000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528405.2000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 374685.1585677938,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 374678.51662404026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 525252.6600000351,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525224.9000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 636.5370738775612,
            "unit": "ns/iter",
            "extra": "iterations: 1102852\ncpu: 636.5262065988921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3950.4754157671273,
            "unit": "ns/iter",
            "extra": "iterations: 176902\ncpu: 3950.362912799151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3031.4410016830475,
            "unit": "ns/iter",
            "extra": "iterations: 230532\ncpu: 3031.3652768379134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3057.1064201587265,
            "unit": "ns/iter",
            "extra": "iterations: 228904\ncpu: 3057.012109880139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2417.6659767023593,
            "unit": "ns/iter",
            "extra": "iterations: 289387\ncpu: 2417.6141291764875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20741.371736880243,
            "unit": "ns/iter",
            "extra": "iterations: 33825\ncpu: 20741.028824833662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37878.72411174294,
            "unit": "ns/iter",
            "extra": "iterations: 18435\ncpu: 37877.87360998112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8880.254939361517,
            "unit": "ns/iter",
            "extra": "iterations: 77591\ncpu: 8879.836578984716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9295.267491188686,
            "unit": "ns/iter",
            "extra": "iterations: 78025\ncpu: 9295.204101249601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9002.614681603724,
            "unit": "ns/iter",
            "extra": "iterations: 78016\ncpu: 9002.418734618625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17280.1005502503,
            "unit": "ns/iter",
            "extra": "iterations: 40527\ncpu: 17279.83566511208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16758.871516546107,
            "unit": "ns/iter",
            "extra": "iterations: 41733\ncpu: 16758.67299259573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5652.31227593816,
            "unit": "ns/iter",
            "extra": "iterations: 123013\ncpu: 5652.153024477099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28212.290415283587,
            "unit": "ns/iter",
            "extra": "iterations: 24706\ncpu: 28211.628754148685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22993.795041591722,
            "unit": "ns/iter",
            "extra": "iterations: 30655\ncpu: 22993.162616212674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22785.350017969715,
            "unit": "ns/iter",
            "extra": "iterations: 30607\ncpu: 22784.742052471935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23080.542729484114,
            "unit": "ns/iter",
            "extra": "iterations: 29991\ncpu: 23079.980660864763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51197.298910259575,
            "unit": "ns/iter",
            "extra": "iterations: 13673\ncpu: 51196.935566445456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 181020.935400511,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 181023.95348837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151995.95386614755,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 151992.72254710732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150933.07020179936,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 150929.56204379653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 150638.19388404998,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 150632.76704183733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 92455.13777955268,
            "unit": "ns/iter",
            "extra": "iterations: 7512\ncpu: 92453.08839190553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150781.41704718317,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 150777.64731463202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5505.462743407646,
            "unit": "ns/iter",
            "extra": "iterations: 127615\ncpu: 5505.4993535242575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27599.08758138879,
            "unit": "ns/iter",
            "extra": "iterations: 25188\ncpu: 27599.523582658356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22200.88055309475,
            "unit": "ns/iter",
            "extra": "iterations: 31604\ncpu: 22200.76889001377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22024.54018362552,
            "unit": "ns/iter",
            "extra": "iterations: 31804\ncpu: 22024.239089422743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22308.588818524837,
            "unit": "ns/iter",
            "extra": "iterations: 31266\ncpu: 22308.325337426948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49908.759408124126,
            "unit": "ns/iter",
            "extra": "iterations: 14057\ncpu: 49908.44419150552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 175127.83792667085,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 175126.3211125163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148719.18101078735,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 148716.62085007312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146570.84799155087,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 146566.17336152223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 145585.75650558394,
            "unit": "ns/iter",
            "extra": "iterations: 4842\ncpu: 145582.69310202403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91889.24433315537,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 91886.39957828265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 147675.62951934338,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 147672.011909826 ns\nthreads: 1"
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
        "date": 1702479556873,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1633.8237802254105,
            "unit": "ns/iter",
            "extra": "iterations: 429895\ncpu: 1633.710557229091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19205.05660288453,
            "unit": "ns/iter",
            "extra": "iterations: 42436\ncpu: 19204.430200772927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39846.642014539655,
            "unit": "ns/iter",
            "extra": "iterations: 20769\ncpu: 39844.58568058165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59058.25421593923,
            "unit": "ns/iter",
            "extra": "iterations: 14291\ncpu: 59057.93856273181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65552.0225251958,
            "unit": "ns/iter",
            "extra": "iterations: 13496\ncpu: 65549.70361588616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82161.79523587064,
            "unit": "ns/iter",
            "extra": "iterations: 10705\ncpu: 82156.72115833717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98961.72712091116,
            "unit": "ns/iter",
            "extra": "iterations: 8982\ncpu: 98955.76708973503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112405.77186463414,
            "unit": "ns/iter",
            "extra": "iterations: 7535\ncpu: 112403.34439283352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131267.78247914359,
            "unit": "ns/iter",
            "extra": "iterations: 6712\ncpu: 131261.08462455322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1467.5805829273072,
            "unit": "ns/iter",
            "extra": "iterations: 476869\ncpu: 1467.574952450252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1170.1191150887182,
            "unit": "ns/iter",
            "extra": "iterations: 597800\ncpu: 1170.05269320843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1236.3759909263297,
            "unit": "ns/iter",
            "extra": "iterations: 581905\ncpu: 1236.3564499359875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1170.1194144915235,
            "unit": "ns/iter",
            "extra": "iterations: 600572\ncpu: 1170.1166554551316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2139.4098237271523,
            "unit": "ns/iter",
            "extra": "iterations: 325518\ncpu: 2139.4058085881616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7158.035630886978,
            "unit": "ns/iter",
            "extra": "iterations: 114339\ncpu: 7158.007329082807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37042.02408443169,
            "unit": "ns/iter",
            "extra": "iterations: 22172\ncpu: 37041.579469601274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29791.82259408136,
            "unit": "ns/iter",
            "extra": "iterations: 27609\ncpu: 29787.06218986561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29479.78508426008,
            "unit": "ns/iter",
            "extra": "iterations: 27890\ncpu: 29478.415202581575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29373.191595088236,
            "unit": "ns/iter",
            "extra": "iterations: 28174\ncpu: 29370.01490736141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 83258.9655044522,
            "unit": "ns/iter",
            "extra": "iterations: 10784\ncpu: 83257.44621661719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 657214.1611511009,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 657192.6618705023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 526511.940999967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526504.199999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 525118.464000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525116.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 534006.6100000058,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533992.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 376756.43320689216,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 376752.04382637976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 528766.9570000162,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528763.6999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2648120.29745043,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2648014.730878194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1192748.96243528,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1192694.430051812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3595698.8593750517,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3595623.4375000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10420.79640411579,
            "unit": "ns/iter",
            "extra": "iterations: 81927\ncpu: 10420.665958719326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51409.06940082447,
            "unit": "ns/iter",
            "extra": "iterations: 16239\ncpu: 51408.762854855566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40756.79500422067,
            "unit": "ns/iter",
            "extra": "iterations: 20137\ncpu: 40755.05288771906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41166.68733180505,
            "unit": "ns/iter",
            "extra": "iterations: 20066\ncpu: 41166.48061397397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40718.03522475889,
            "unit": "ns/iter",
            "extra": "iterations: 20355\ncpu: 40717.239007614546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90682.24432646648,
            "unit": "ns/iter",
            "extra": "iterations: 9606\ncpu: 90680.88694565886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 693166.9034431049,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 693145.2095808402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 556456.303999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556439.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 550653.924999949,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550650.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 551930.1689999452,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551892.7000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 389204.3119429505,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 389186.408199645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 545250.8050000233,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545233.7999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2791917.2035927647,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2791745.808383235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1217024.252252253,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 1216998.9703989734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7041.783036566789,
            "unit": "ns/iter",
            "extra": "iterations: 117264\ncpu: 7041.6129417383145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37679.79426297103,
            "unit": "ns/iter",
            "extra": "iterations: 21858\ncpu: 37677.50022874937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29810.22863317145,
            "unit": "ns/iter",
            "extra": "iterations: 27765\ncpu: 29808.759229245366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29643.805599538657,
            "unit": "ns/iter",
            "extra": "iterations: 27788\ncpu: 29642.090110839243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29396.013123078308,
            "unit": "ns/iter",
            "extra": "iterations: 27966\ncpu: 29393.97840234571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 79489.0538560172,
            "unit": "ns/iter",
            "extra": "iterations: 10918\ncpu: 79482.69829639152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 676195.9977826922,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 676166.3710273481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 544125.8509999898,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544111.3999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 543093.5179999778,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543053.8000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 549001.0930000152,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548973.5999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 382741.2913214156,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 382721.5002180578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 523580.566000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523577.600000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 653.5453283458809,
            "unit": "ns/iter",
            "extra": "iterations: 1075497\ncpu: 653.5082850068352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3969.5824146891377,
            "unit": "ns/iter",
            "extra": "iterations: 174714\ncpu: 3969.3991322962024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3094.8324582901437,
            "unit": "ns/iter",
            "extra": "iterations: 237893\ncpu: 3094.6980365122145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3185.9352474825305,
            "unit": "ns/iter",
            "extra": "iterations: 225026\ncpu: 3185.8851866006553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2445.3112133916625,
            "unit": "ns/iter",
            "extra": "iterations: 285489\ncpu: 2445.174069753993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20841.848967658243,
            "unit": "ns/iter",
            "extra": "iterations: 33516\ncpu: 20841.720372359374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37680.21447262951,
            "unit": "ns/iter",
            "extra": "iterations: 18725\ncpu: 37676.432576768886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9005.404225479404,
            "unit": "ns/iter",
            "extra": "iterations: 77719\ncpu: 9005.047671740464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9006.405744648753,
            "unit": "ns/iter",
            "extra": "iterations: 77916\ncpu: 9005.956414600309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9010.717212202317,
            "unit": "ns/iter",
            "extra": "iterations: 76347\ncpu: 9010.200793744336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17282.17362184491,
            "unit": "ns/iter",
            "extra": "iterations: 40761\ncpu: 17281.281126567013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16966.16806337017,
            "unit": "ns/iter",
            "extra": "iterations: 41407\ncpu: 16965.26191223709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5776.305399607203,
            "unit": "ns/iter",
            "extra": "iterations: 121657\ncpu: 5776.230714221077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28803.6271538304,
            "unit": "ns/iter",
            "extra": "iterations: 24085\ncpu: 28803.018476230023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 23209.001074799162,
            "unit": "ns/iter",
            "extra": "iterations: 29773\ncpu: 23208.655493231894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 23111.14311111136,
            "unit": "ns/iter",
            "extra": "iterations: 30375\ncpu: 23108.971193415367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23597.193204015617,
            "unit": "ns/iter",
            "extra": "iterations: 29694\ncpu: 23596.2113558296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52524.23817680781,
            "unit": "ns/iter",
            "extra": "iterations: 13427\ncpu: 52520.86095181284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 185597.43138284204,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 185587.29992128132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 153728.20949227927,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 153717.81456953438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 154051.58717835505,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 154039.41881100138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 154225.8067484653,
            "unit": "ns/iter",
            "extra": "iterations: 4564\ncpu: 154221.69149868484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 95604.7378352863,
            "unit": "ns/iter",
            "extra": "iterations: 7419\ncpu: 95599.5417172131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 153669.7872034579,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 153668.9911334746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5506.723706937106,
            "unit": "ns/iter",
            "extra": "iterations: 127372\ncpu: 5506.578368872361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27851.26504286346,
            "unit": "ns/iter",
            "extra": "iterations: 24962\ncpu: 27851.109686724354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22230.554356846747,
            "unit": "ns/iter",
            "extra": "iterations: 31330\ncpu: 22230.13724864371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22280.04738428714,
            "unit": "ns/iter",
            "extra": "iterations: 31846\ncpu: 22279.42284745316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22700.702721288093,
            "unit": "ns/iter",
            "extra": "iterations: 30537\ncpu: 22700.569800569716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51015.16770000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51011.919999999125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 181608.29419455552,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 181607.29602510514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 153921.78701070911,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 153917.31904657814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 152579.3752706768,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 152578.51883932497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 152272.81362551154,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 152270.73117812787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 95000.33505434432,
            "unit": "ns/iter",
            "extra": "iterations: 7360\ncpu: 94996.39945652182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 152602.9611482832,
            "unit": "ns/iter",
            "extra": "iterations: 4633\ncpu: 152602.09367580578 ns\nthreads: 1"
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
        "date": 1702488585860,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1756.524001457173,
            "unit": "ns/iter",
            "extra": "iterations: 425495\ncpu: 1756.509947237923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19220.62253946217,
            "unit": "ns/iter",
            "extra": "iterations: 43080\ncpu: 19220.43871866295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39872.89155405619,
            "unit": "ns/iter",
            "extra": "iterations: 20720\ncpu: 39869.79729729731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58720.10755549066,
            "unit": "ns/iter",
            "extra": "iterations: 14281\ncpu: 58718.60513969607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65749.83133808295,
            "unit": "ns/iter",
            "extra": "iterations: 13198\ncpu: 65744.72647370819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82510.66013684496,
            "unit": "ns/iter",
            "extra": "iterations: 10669\ncpu: 82506.9453557034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 97028.61083577298,
            "unit": "ns/iter",
            "extra": "iterations: 8878\ncpu: 97023.92430727636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112894.78658297255,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 112892.31071008241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134680.60897144862,
            "unit": "ns/iter",
            "extra": "iterations: 6621\ncpu: 134678.13019181413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1528.3820509744914,
            "unit": "ns/iter",
            "extra": "iterations: 458465\ncpu: 1528.3681415157077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1248.871631052949,
            "unit": "ns/iter",
            "extra": "iterations: 557370\ncpu: 1248.808152573694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1192.1408207144866,
            "unit": "ns/iter",
            "extra": "iterations: 586952\ncpu: 1192.1230356144965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1221.6108977942058,
            "unit": "ns/iter",
            "extra": "iterations: 568794\ncpu: 1221.613448805721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2159.294439674686,
            "unit": "ns/iter",
            "extra": "iterations: 324963\ncpu: 2159.1941236386933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6589.8276656780145,
            "unit": "ns/iter",
            "extra": "iterations: 124096\ncpu: 6589.540355853538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34592.472265378965,
            "unit": "ns/iter",
            "extra": "iterations: 23815\ncpu: 34591.10644551753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27799.11196846235,
            "unit": "ns/iter",
            "extra": "iterations: 29678\ncpu: 27797.856998450006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27653.535311212167,
            "unit": "ns/iter",
            "extra": "iterations: 29594\ncpu: 27653.267554233975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27536.131218990256,
            "unit": "ns/iter",
            "extra": "iterations: 29828\ncpu: 27535.553842027573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80409.35257750838,
            "unit": "ns/iter",
            "extra": "iterations: 10999\ncpu: 80407.3461223748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 628908.0560000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628870.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 523053.97499998205,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523012.3000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 516399.68399996404,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516391.20000000106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 501467.59800003335,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501432.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 369666.8645215944,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 369652.2861981368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 515682.2370000213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515675.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2606990.49299728,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2606852.380952379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1190923.012886575,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1190861.2113402067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3705673.9880477632,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3705620.3187251007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10119.98950216847,
            "unit": "ns/iter",
            "extra": "iterations: 82779\ncpu: 10119.933799635159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50860.47211118493,
            "unit": "ns/iter",
            "extra": "iterations: 16261\ncpu: 50859.07385769639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40562.38012579776,
            "unit": "ns/iter",
            "extra": "iterations: 20509\ncpu: 40561.74362475013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41256.04658893651,
            "unit": "ns/iter",
            "extra": "iterations: 20155\ncpu: 41255.74299181358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40670.67227904305,
            "unit": "ns/iter",
            "extra": "iterations: 20728\ncpu: 40670.05982246247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91082.14364348515,
            "unit": "ns/iter",
            "extra": "iterations: 9447\ncpu: 91081.58145443015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 692588.8145645645,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 692574.0240240244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 545086.1330000408,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545067.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 537817.5379999562,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537817.5000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 535062.0570000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535053.4999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 383988.7205817779,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 383985.5883649196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 527028.0290000073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527013.199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2748162.851632065,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2748143.6201780387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1195690.5365853969,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1195664.6983311938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6911.203550444714,
            "unit": "ns/iter",
            "extra": "iterations: 119140\ncpu: 6911.036595601843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36205.4092514125,
            "unit": "ns/iter",
            "extra": "iterations: 22656\ncpu: 36204.343220338975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28841.743941871882,
            "unit": "ns/iter",
            "extra": "iterations: 26287\ncpu: 28841.221896754985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28371.177349033416,
            "unit": "ns/iter",
            "extra": "iterations: 29129\ncpu: 28369.87538192182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28291.193987481893,
            "unit": "ns/iter",
            "extra": "iterations: 29239\ncpu: 28290.687096001802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 77671.39429335772,
            "unit": "ns/iter",
            "extra": "iterations: 11215\ncpu: 77655.35443602302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 660209.3000000196,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660203.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 530541.0029999962,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530540.7000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 521615.3430000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521600.8000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 522699.55600002053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522683.7000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 374275.4313387873,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 374269.0916917791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 525546.3259999829,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525538.4000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 688.2668465839647,
            "unit": "ns/iter",
            "extra": "iterations: 1016393\ncpu: 688.2609384362135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3982.121219643774,
            "unit": "ns/iter",
            "extra": "iterations: 181266\ncpu: 3982.0600664217286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3186.7816186121827,
            "unit": "ns/iter",
            "extra": "iterations: 227034\ncpu: 3186.7773108873675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3087.893364520864,
            "unit": "ns/iter",
            "extra": "iterations: 226585\ncpu: 3087.7983979522282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2459.797221306815,
            "unit": "ns/iter",
            "extra": "iterations: 285242\ncpu: 2459.7969443489933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21204.48643149978,
            "unit": "ns/iter",
            "extra": "iterations: 33423\ncpu: 21204.164796696936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37674.01422544336,
            "unit": "ns/iter",
            "extra": "iterations: 18488\ncpu: 37673.96689744693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9098.489845474667,
            "unit": "ns/iter",
            "extra": "iterations: 77010\ncpu: 9098.196338137894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9049.229970518245,
            "unit": "ns/iter",
            "extra": "iterations: 77336\ncpu: 9049.142701975863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9087.429599751043,
            "unit": "ns/iter",
            "extra": "iterations: 77102\ncpu: 9087.430935643637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17229.89753287872,
            "unit": "ns/iter",
            "extra": "iterations: 40452\ncpu: 17229.558489073504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16760.955066967872,
            "unit": "ns/iter",
            "extra": "iterations: 41662\ncpu: 16760.959627478176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5890.610531453199,
            "unit": "ns/iter",
            "extra": "iterations: 118844\ncpu: 5890.531284709349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 29325.906382087545,
            "unit": "ns/iter",
            "extra": "iterations: 23895\ncpu: 29325.930110901732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 23435.676188238933,
            "unit": "ns/iter",
            "extra": "iterations: 29792\ncpu: 23434.8516380235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 23402.514396810377,
            "unit": "ns/iter",
            "extra": "iterations: 29833\ncpu: 23402.54416250473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23796.306973720097,
            "unit": "ns/iter",
            "extra": "iterations: 29224\ncpu: 23794.55242266651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51082.09502657942,
            "unit": "ns/iter",
            "extra": "iterations: 13733\ncpu: 51082.116070778415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 184119.79636937022,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184119.75795843187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 154830.1672986795,
            "unit": "ns/iter",
            "extra": "iterations: 4483\ncpu: 154822.75262101294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 156029.31384615749,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 156022.59340659226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 155857.49432197036,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 155849.8107325767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 97412.45648535997,
            "unit": "ns/iter",
            "extra": "iterations: 7170\ncpu: 97408.63319386396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 154309.7412835881,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 154301.310237621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5554.413159102882,
            "unit": "ns/iter",
            "extra": "iterations: 126346\ncpu: 5554.35391702152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28108.474674384455,
            "unit": "ns/iter",
            "extra": "iterations: 24876\ncpu: 28107.91927962735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22630.78138919414,
            "unit": "ns/iter",
            "extra": "iterations: 30982\ncpu: 22630.785617455487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22930.31816873013,
            "unit": "ns/iter",
            "extra": "iterations: 31257\ncpu: 22924.714463960197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22203.372446555815,
            "unit": "ns/iter",
            "extra": "iterations: 31575\ncpu: 22203.255740301003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49516.34552902926,
            "unit": "ns/iter",
            "extra": "iterations: 14158\ncpu: 49513.26458539319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 179782.05528414555,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 179782.12908202762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 151539.7184131189,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 151539.8231996536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 149961.98258813136,
            "unit": "ns/iter",
            "extra": "iterations: 4652\ncpu: 149954.0842648336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 149563.2237732705,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 149555.71065989637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 95771.3497964715,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 95766.48575305277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 151022.884358149,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 151016.80690399196 ns\nthreads: 1"
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
        "date": 1702490828944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1609.2220166428192,
            "unit": "ns/iter",
            "extra": "iterations: 441030\ncpu: 1609.1794209010727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19080.36575631735,
            "unit": "ns/iter",
            "extra": "iterations: 43097\ncpu: 19077.45782769102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39712.73178919084,
            "unit": "ns/iter",
            "extra": "iterations: 20853\ncpu: 39711.46597611855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58867.574991243266,
            "unit": "ns/iter",
            "extra": "iterations: 14275\ncpu: 58865.6042031524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65468.88141672097,
            "unit": "ns/iter",
            "extra": "iterations: 13383\ncpu: 65469.02039901368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81445.46899481099,
            "unit": "ns/iter",
            "extra": "iterations: 10595\ncpu: 81444.25672487028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98767.46513461316,
            "unit": "ns/iter",
            "extra": "iterations: 8877\ncpu: 98759.78371071306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112290.9655262806,
            "unit": "ns/iter",
            "extra": "iterations: 7629\ncpu: 112286.45956219685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131445.2829135843,
            "unit": "ns/iter",
            "extra": "iterations: 6631\ncpu: 131442.66324837887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1478.2818576632556,
            "unit": "ns/iter",
            "extra": "iterations: 474101\ncpu: 1478.193465105533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1205.1924312120084,
            "unit": "ns/iter",
            "extra": "iterations: 581969\ncpu: 1205.0803393307876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1192.7862194584482,
            "unit": "ns/iter",
            "extra": "iterations: 590180\ncpu: 1192.7144261072895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1196.1809933887612,
            "unit": "ns/iter",
            "extra": "iterations: 583397\ncpu: 1196.1261370901816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2144.004176483186,
            "unit": "ns/iter",
            "extra": "iterations: 326830\ncpu: 2143.812073555061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7267.794598178477,
            "unit": "ns/iter",
            "extra": "iterations: 113110\ncpu: 7267.196534347094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37280.45823206472,
            "unit": "ns/iter",
            "extra": "iterations: 22218\ncpu: 37278.04482851736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30091.792897030955,
            "unit": "ns/iter",
            "extra": "iterations: 27397\ncpu: 30089.579151001926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30087.033381020756,
            "unit": "ns/iter",
            "extra": "iterations: 27261\ncpu: 30083.610285756287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29770.221802211083,
            "unit": "ns/iter",
            "extra": "iterations: 27777\ncpu: 29768.37671454804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80863.06254047788,
            "unit": "ns/iter",
            "extra": "iterations: 10809\ncpu: 80854.0290498659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 640035.7450000342,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639995.9000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 516897.8020000168,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516886.40000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 518134.2459999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518083.1000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 517486.2079999798,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517437.7999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 366922.98892674485,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 366892.9301533226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 514130.0359999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514082.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2618281.9410113106,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2618014.3258426934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1215915.5665348526,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1215755.8629776011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3529411.321969738,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3529192.045454543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10060.79110956936,
            "unit": "ns/iter",
            "extra": "iterations: 83618\ncpu: 10059.780190868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50278.76340404897,
            "unit": "ns/iter",
            "extra": "iterations: 16357\ncpu: 50274.928165311525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40356.536744506055,
            "unit": "ns/iter",
            "extra": "iterations: 20384\ncpu: 40353.757849293565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41011.01725838287,
            "unit": "ns/iter",
            "extra": "iterations: 20280\ncpu: 41007.58382643009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40437.76972177624,
            "unit": "ns/iter",
            "extra": "iterations: 20523\ncpu: 40437.94279588764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90290.3387949823,
            "unit": "ns/iter",
            "extra": "iterations: 9643\ncpu: 90283.52172560408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 681814.5655431048,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 681753.7827715351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 553246.5530000081,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553172.4999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 548271.5330000473,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548231.7999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 543891.6490000451,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543894.3999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 381106.2078207399,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 381101.7574692446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 528132.9420000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528134.6999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2757966.3952802606,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2757928.3185840677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1239229.343046353,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1239181.3245033054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7072.302720943057,
            "unit": "ns/iter",
            "extra": "iterations: 117055\ncpu: 7072.252360001732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36811.232891979475,
            "unit": "ns/iter",
            "extra": "iterations: 22431\ncpu: 36810.57019303649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29333.52597333295,
            "unit": "ns/iter",
            "extra": "iterations: 28125\ncpu: 29333.5822222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29152.333110249474,
            "unit": "ns/iter",
            "extra": "iterations: 28390\ncpu: 29152.381120112695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28723.219944733763,
            "unit": "ns/iter",
            "extra": "iterations: 28589\ncpu: 28722.21134002609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 77943.68021437892,
            "unit": "ns/iter",
            "extra": "iterations: 11195\ncpu: 77942.21527467626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 671522.4120000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671507.9000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 530582.6299999694,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530584.5999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 533580.6890000185,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533582.6000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 529539.0650000513,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529529.4999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 374529.58429860434,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 374526.16902616713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 515269.107999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515272.40000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 639.6701865713412,
            "unit": "ns/iter",
            "extra": "iterations: 1097757\ncpu: 639.6722589789935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3914.873648084291,
            "unit": "ns/iter",
            "extra": "iterations: 177156\ncpu: 3914.803337171752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2991.9358160429174,
            "unit": "ns/iter",
            "extra": "iterations: 233750\ncpu: 2991.903315508038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2908.257404015925,
            "unit": "ns/iter",
            "extra": "iterations: 239701\ncpu: 2908.195209865636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2385.1921212243406,
            "unit": "ns/iter",
            "extra": "iterations: 294132\ncpu: 2385.1661838902196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20779.184278728735,
            "unit": "ns/iter",
            "extra": "iterations: 33954\ncpu: 20779.224833598455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35035.971084096615,
            "unit": "ns/iter",
            "extra": "iterations: 19989\ncpu: 35035.38446145396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8887.994380022048,
            "unit": "ns/iter",
            "extra": "iterations: 78648\ncpu: 8887.779727392919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8858.058223868245,
            "unit": "ns/iter",
            "extra": "iterations: 78868\ncpu: 8858.0742506466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8823.283895046216,
            "unit": "ns/iter",
            "extra": "iterations: 79311\ncpu: 8823.305720517972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16951.579165254494,
            "unit": "ns/iter",
            "extra": "iterations: 41306\ncpu: 16951.377523846553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16483.119756954202,
            "unit": "ns/iter",
            "extra": "iterations: 42461\ncpu: 16483.170438755664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5678.125159952827,
            "unit": "ns/iter",
            "extra": "iterations: 123474\ncpu: 5677.978359816646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28449.7678302915,
            "unit": "ns/iter",
            "extra": "iterations: 24607\ncpu: 28449.827284919254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22933.011706067944,
            "unit": "ns/iter",
            "extra": "iterations: 30497\ncpu: 22933.06226841996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22781.728127237042,
            "unit": "ns/iter",
            "extra": "iterations: 30746\ncpu: 22781.500032524567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23194.167268152894,
            "unit": "ns/iter",
            "extra": "iterations: 30203\ncpu: 23193.447670761412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51611.82553191431,
            "unit": "ns/iter",
            "extra": "iterations: 13630\ncpu: 51611.90755686034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 179155.93727319373,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 179156.37636080894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152417.68262951044,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 152415.8249891186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151830.47795723454,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 151830.85988651277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 148834.0008494369,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 148830.43108940183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93146.27741592591,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 93146.48411538055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 151876.65535868265,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 151877.16076058833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5563.87412036295,
            "unit": "ns/iter",
            "extra": "iterations: 125620\ncpu: 5563.817863397624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27941.224352290516,
            "unit": "ns/iter",
            "extra": "iterations: 24934\ncpu: 27940.867891232894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22538.536539321514,
            "unit": "ns/iter",
            "extra": "iterations: 31254\ncpu: 22538.61265758001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22415.671379908985,
            "unit": "ns/iter",
            "extra": "iterations: 31118\ncpu: 22415.258050003285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22704.432738849977,
            "unit": "ns/iter",
            "extra": "iterations: 30783\ncpu: 22704.128902316035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49601.36910511326,
            "unit": "ns/iter",
            "extra": "iterations: 14080\ncpu: 49599.63778409136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 177454.66920344892,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 177455.20040588672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148020.45759830004,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 148020.85015940375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 147519.8272383303,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 147517.88566624632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 147307.98421716978,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 147308.3754208752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91634.54809961145,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 91632.34600262153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 147682.82666386134,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 147683.12973883768 ns\nthreads: 1"
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
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573956037,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1632.128711992787,
            "unit": "ns/iter",
            "extra": "iterations: 428274\ncpu: 1632.087401990315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19234.91597622101,
            "unit": "ns/iter",
            "extra": "iterations: 42726\ncpu: 19233.37780274306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39868.297654522605,
            "unit": "ns/iter",
            "extra": "iterations: 20806\ncpu: 39867.20176872057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58561.35823901038,
            "unit": "ns/iter",
            "extra": "iterations: 14401\ncpu: 58559.13478230679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66145.27115512383,
            "unit": "ns/iter",
            "extra": "iterations: 13531\ncpu: 66142.01463306483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81628.08064816541,
            "unit": "ns/iter",
            "extra": "iterations: 10738\ncpu: 81623.77537716518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96701.90252667245,
            "unit": "ns/iter",
            "extra": "iterations: 8905\ncpu: 96695.22740033688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112476.65959648073,
            "unit": "ns/iter",
            "extra": "iterations: 7732\ncpu: 112470.79668908438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131371.74390987007,
            "unit": "ns/iter",
            "extra": "iterations: 6568\ncpu: 131360.88611449458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1454.3259085385932,
            "unit": "ns/iter",
            "extra": "iterations: 481405\ncpu: 1454.20633354452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1198.8974431000797,
            "unit": "ns/iter",
            "extra": "iterations: 583832\ncpu: 1198.8053070061271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1223.4530696673892,
            "unit": "ns/iter",
            "extra": "iterations: 575779\ncpu: 1223.4221810798924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1196.6654772372217,
            "unit": "ns/iter",
            "extra": "iterations: 585715\ncpu: 1196.6601504144485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2165.160405746055,
            "unit": "ns/iter",
            "extra": "iterations: 323355\ncpu: 2165.0310030771125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7180.406924173341,
            "unit": "ns/iter",
            "extra": "iterations: 114353\ncpu: 7180.068734532533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37071.70349700766,
            "unit": "ns/iter",
            "extra": "iterations: 22219\ncpu: 37070.63774247261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29620.130550942024,
            "unit": "ns/iter",
            "extra": "iterations: 27698\ncpu: 29619.127734854555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29742.623247875035,
            "unit": "ns/iter",
            "extra": "iterations: 27538\ncpu: 29741.273876098447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29186.10519744546,
            "unit": "ns/iter",
            "extra": "iterations: 28033\ncpu: 29185.602682552668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81304.72320690837,
            "unit": "ns/iter",
            "extra": "iterations: 10889\ncpu: 81300.18367159515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 646919.8020000136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646904.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 520502.4400000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520468.69999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 523043.04500000854,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523017.29999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 532527.717999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532506.4000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 372923.70636638906,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 372910.7405803372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 525743.1289999773,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525711.6999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2625679.571830985,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2625596.338028167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1206189.0549738163,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1206142.2774869087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3547636.794676781,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3547412.547528526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10139.286906352581,
            "unit": "ns/iter",
            "extra": "iterations: 82330\ncpu: 10138.790234422444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51293.525475332346,
            "unit": "ns/iter",
            "extra": "iterations: 16094\ncpu: 51290.13296880827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 41166.22539824336,
            "unit": "ns/iter",
            "extra": "iterations: 20151\ncpu: 41164.2995384844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41335.10616387254,
            "unit": "ns/iter",
            "extra": "iterations: 20101\ncpu: 41333.20730311918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40503.97120714193,
            "unit": "ns/iter",
            "extra": "iterations: 20387\ncpu: 40502.45744837378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90479.50701717728,
            "unit": "ns/iter",
            "extra": "iterations: 9548\ncpu: 90476.80142438275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 683229.3801039205,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 683218.9309576832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 549351.1309999804,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549332.3000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 545724.0339999885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545711.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 540435.9770000156,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540423.9999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 386208.81208644784,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 386197.6621085164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 556077.8649999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556075.100000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2769377.2403561254,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2769240.652818991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1196338.548638154,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 1196246.5629053179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6987.386621892162,
            "unit": "ns/iter",
            "extra": "iterations: 117924\ncpu: 6987.026389878221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36617.52783066921,
            "unit": "ns/iter",
            "extra": "iterations: 22583\ncpu: 36615.20612850385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29235.602023548836,
            "unit": "ns/iter",
            "extra": "iterations: 28366\ncpu: 29233.977296763707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 28669.21303821563,
            "unit": "ns/iter",
            "extra": "iterations: 28915\ncpu: 28667.37679405151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28428.61846450124,
            "unit": "ns/iter",
            "extra": "iterations: 29072\ncpu: 28427.02944413851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 77615.22845441605,
            "unit": "ns/iter",
            "extra": "iterations: 11232\ncpu: 77610.68376068359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 671382.7220000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671349.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 533947.3939999948,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533933.4000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 532459.8139999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532414.799999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 533043.7360000246,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533040.2999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 377886.131260788,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 377856.04490500706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 520988.7460000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520971.29999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 638.4405164527617,
            "unit": "ns/iter",
            "extra": "iterations: 1104070\ncpu: 638.4093399874992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3952.595958342256,
            "unit": "ns/iter",
            "extra": "iterations: 177254\ncpu: 3952.3000891376246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2919.5279480525833,
            "unit": "ns/iter",
            "extra": "iterations: 239319\ncpu: 2919.343637571619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2944.6361839121378,
            "unit": "ns/iter",
            "extra": "iterations: 238244\ncpu: 2944.458202515086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2434.786593692906,
            "unit": "ns/iter",
            "extra": "iterations: 287775\ncpu: 2434.6121101555013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20548.925532852987,
            "unit": "ns/iter",
            "extra": "iterations: 34015\ncpu: 20547.343818903362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36634.569771089045,
            "unit": "ns/iter",
            "extra": "iterations: 19134\ncpu: 36632.2096791055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8939.148168432788,
            "unit": "ns/iter",
            "extra": "iterations: 78512\ncpu: 8938.57754228654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8910.457769582676,
            "unit": "ns/iter",
            "extra": "iterations: 78640\ncpu: 8909.932604272635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8864.96940893612,
            "unit": "ns/iter",
            "extra": "iterations: 79010\ncpu: 8864.777876218228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17600.344594429138,
            "unit": "ns/iter",
            "extra": "iterations: 40967\ncpu: 17599.77298801471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16507.013298373688,
            "unit": "ns/iter",
            "extra": "iterations: 42336\ncpu: 16506.65863567639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5684.13394462743,
            "unit": "ns/iter",
            "extra": "iterations: 123454\ncpu: 5683.7980138351095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28859.624438120663,
            "unit": "ns/iter",
            "extra": "iterations: 24249\ncpu: 28857.7054723906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22940.329591704045,
            "unit": "ns/iter",
            "extra": "iterations: 30468\ncpu: 22938.581462518112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22932.30756385061,
            "unit": "ns/iter",
            "extra": "iterations: 30540\ncpu: 22930.831696136283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 23379.258312275775,
            "unit": "ns/iter",
            "extra": "iterations: 30076\ncpu: 23377.51363213225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51496.483372399205,
            "unit": "ns/iter",
            "extra": "iterations: 13652\ncpu: 51493.77380603622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 180107.01099476364,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 180093.4816753941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 151829.36694071474,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 151826.3522284732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151500.50879796105,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 151497.4560101787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 151404.30373229645,
            "unit": "ns/iter",
            "extra": "iterations: 4662\ncpu: 151398.79879879937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93525.67216824152,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 93518.80740050554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 152499.51791531348,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 152485.0597176971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5555.577002183075,
            "unit": "ns/iter",
            "extra": "iterations: 126412\ncpu: 5555.212321615065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28032.374087444874,
            "unit": "ns/iter",
            "extra": "iterations: 24930\ncpu: 28030.505415162632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22364.06908289359,
            "unit": "ns/iter",
            "extra": "iterations: 30847\ncpu: 22363.049891399725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22159.5385347903,
            "unit": "ns/iter",
            "extra": "iterations: 31504\ncpu: 22157.995810055818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22631.265603687687,
            "unit": "ns/iter",
            "extra": "iterations: 30794\ncpu: 22630.018834837636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50175.754399998594,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50174.5200000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 177642.83854692057,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 177630.12108980824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148658.45719141664,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 148649.73443806887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 147343.06473772228,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 147332.07743546803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148217.54414870116,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 148208.91423743198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 92206.24898493872,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 92203.52324820016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 147407.76258533035,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 147403.98890784758 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}