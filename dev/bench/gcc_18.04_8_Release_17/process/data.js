window.BENCHMARK_DATA = {
  "lastUpdate": 1702412570330,
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
      }
    ]
  }
}