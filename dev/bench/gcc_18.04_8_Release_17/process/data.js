window.BENCHMARK_DATA = {
  "lastUpdate": 1702422479012,
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
      }
    ]
  }
}