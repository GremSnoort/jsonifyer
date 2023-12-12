window.BENCHMARK_DATA = {
  "lastUpdate": 1702397917370,
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
      }
    ]
  }
}