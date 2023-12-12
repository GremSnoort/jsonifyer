window.BENCHMARK_DATA = {
  "lastUpdate": 1702409125066,
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
      }
    ]
  }
}