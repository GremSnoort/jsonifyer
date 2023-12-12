window.BENCHMARK_DATA = {
  "lastUpdate": 1702392458554,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 18.04 Debug c++-17": [
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
        "date": 1702392457402,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8145.016449662892,
            "unit": "ns/iter",
            "extra": "iterations: 86020\ncpu: 8144.425714950012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58864.770399998175,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58859.55999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109037.90731583395,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 109029.50424749585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158400.7511461603,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 158388.88685127455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 208671.5874277404,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 208659.87475915233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258564.67053571242,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 258543.48214285707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308171.6563610325,
            "unit": "ns/iter",
            "extra": "iterations: 2814\ncpu: 308153.8734896943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 358391.10289257334,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 358367.0247933887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 407597.8079811994,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 407568.68544600956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6903.761071995722,
            "unit": "ns/iter",
            "extra": "iterations: 101269\ncpu: 6903.330732998241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5705.473019376792,
            "unit": "ns/iter",
            "extra": "iterations: 122310\ncpu: 5704.979151336762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5753.398551321327,
            "unit": "ns/iter",
            "extra": "iterations: 121352\ncpu: 5752.963280374435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5619.776033894171,
            "unit": "ns/iter",
            "extra": "iterations: 124626\ncpu: 5619.656411984658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9561.226345210223,
            "unit": "ns/iter",
            "extra": "iterations: 73167\ncpu: 9560.914073284423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 33821.10683707645,
            "unit": "ns/iter",
            "extra": "iterations: 24177\ncpu: 33819.06770897954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144779.1602097656,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 144766.21553036725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114152.77036836992,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 114146.10110244693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114245.43988741635,
            "unit": "ns/iter",
            "extra": "iterations: 7461\ncpu: 114239.08323281072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113642.83806098335,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 113636.20988147579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 354698.78239325335,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 354675.03810975596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1962207.3557895035,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1962126.3157894774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1539052.0829187664,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1539004.9751243782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1568027.532883584,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1567910.455311975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1523372.9342106236,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1523261.6776315803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 855217.091497216,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 855159.7966728273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1494630.0337620908,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1494573.9549839252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41153.747018015754,
            "unit": "ns/iter",
            "extra": "iterations: 20037\ncpu: 41152.97699256385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178106.70000000717,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 178095.93814433005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138670.19715350028,
            "unit": "ns/iter",
            "extra": "iterations: 6183\ncpu: 138661.4588387518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138076.92631241216,
            "unit": "ns/iter",
            "extra": "iterations: 6229\ncpu: 138068.88746187196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 156753.5740529899,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 156734.4659404975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 324631.9101460233,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 324612.2800449268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1979064.1319148447,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1978900.8510638315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1600681.5093696925,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1600604.5996592923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1607837.4896193813,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1607704.32525951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1563916.9663300533,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1563822.5589225618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 876954.1962264595,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 876897.4528301901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1529339.208196711,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1529298.1967213033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5380766.129999301,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5380663.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3333175.7741934354,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3333101.7921147137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29475.944645739808,
            "unit": "ns/iter",
            "extra": "iterations: 27875\ncpu: 29475.250224215164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137798.7004645252,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 137797.13278872322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107352.64660900611,
            "unit": "ns/iter",
            "extra": "iterations: 7977\ncpu: 107346.77196941222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110440.91649350835,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 110438.81818181853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103135.35379585697,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 103133.39387335078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 287112.11396204465,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 287106.797734088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1979798.6927966059,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1979743.6440677915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1529687.887070511,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1529650.0818330618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1559055.3645485144,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1559004.1806020092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1507824.9159934213,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1507761.550888537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 841477.6549550076,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 841449.4594594549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490032.3652312455,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1490001.5948963382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3190.34030305513,
            "unit": "ns/iter",
            "extra": "iterations: 219234\ncpu: 3190.2537927511407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20203.92679625626,
            "unit": "ns/iter",
            "extra": "iterations: 34725\ncpu: 20203.27141828649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16724.058802489028,
            "unit": "ns/iter",
            "extra": "iterations: 41937\ncpu: 16722.641104513947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16552.737347232032,
            "unit": "ns/iter",
            "extra": "iterations: 42303\ncpu: 16552.703117982182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12316.978549162564,
            "unit": "ns/iter",
            "extra": "iterations: 56781\ncpu: 12316.59181768546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 99335.18283261,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 99329.09871244623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135467.74898000035,
            "unit": "ns/iter",
            "extra": "iterations: 5147\ncpu: 135454.42005051463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33344.91616396924,
            "unit": "ns/iter",
            "extra": "iterations: 21053\ncpu: 33342.706502636385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33857.69621846577,
            "unit": "ns/iter",
            "extra": "iterations: 20653\ncpu: 33855.541567811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32920.938301168375,
            "unit": "ns/iter",
            "extra": "iterations: 21297\ncpu: 32919.01206742714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64264.09459087102,
            "unit": "ns/iter",
            "extra": "iterations: 10889\ncpu: 64259.88612361072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61672.927815975636,
            "unit": "ns/iter",
            "extra": "iterations: 11346\ncpu: 61667.32769257888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23683.304979186163,
            "unit": "ns/iter",
            "extra": "iterations: 29543\ncpu: 23681.714788613463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113433.27755235137,
            "unit": "ns/iter",
            "extra": "iterations: 6161\ncpu: 113429.37834767078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93558.24310943426,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 93555.33850682201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93021.62626262853,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 93021.49122807072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91827.50314054184,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 91819.79848207257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 163344.66931710823,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 163341.20673526695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577448.1033912721,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 577424.64846981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 481785.621733118,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 481770.6327372701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482240.58235703176,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 482211.71605788736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 470295.683680323,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470290.3290799233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305895.3648707774,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 305884.9759088877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 467161.90466668195,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 467151.3999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23131.50195067324,
            "unit": "ns/iter",
            "extra": "iterations: 30246\ncpu: 23131.009059049422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120803.92169714112,
            "unit": "ns/iter",
            "extra": "iterations: 5798\ncpu: 120802.5526043463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94618.57288273177,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 94612.66286644939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94984.57599566913,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 94979.47710647508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93977.80897958855,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 93970.73469387864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 164282.17706380147,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 164272.2795497186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 578414.8854080488,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 578401.4839241521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473686.3616734472,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 473661.8083670674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 479013.6210670577,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478980.3693570466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 470925.5010073851,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470914.5063801274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305485.19624946377,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 305471.5220235507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 467845.8663994597,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467837.94255176844 ns\nthreads: 1"
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
        "date": 1702392457402,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8145.016449662892,
            "unit": "ns/iter",
            "extra": "iterations: 86020\ncpu: 8144.425714950012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58864.770399998175,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58859.55999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109037.90731583395,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 109029.50424749585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158400.7511461603,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 158388.88685127455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 208671.5874277404,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 208659.87475915233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258564.67053571242,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 258543.48214285707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308171.6563610325,
            "unit": "ns/iter",
            "extra": "iterations: 2814\ncpu: 308153.8734896943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 358391.10289257334,
            "unit": "ns/iter",
            "extra": "iterations: 2420\ncpu: 358367.0247933887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 407597.8079811994,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 407568.68544600956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6903.761071995722,
            "unit": "ns/iter",
            "extra": "iterations: 101269\ncpu: 6903.330732998241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5705.473019376792,
            "unit": "ns/iter",
            "extra": "iterations: 122310\ncpu: 5704.979151336762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5753.398551321327,
            "unit": "ns/iter",
            "extra": "iterations: 121352\ncpu: 5752.963280374435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5619.776033894171,
            "unit": "ns/iter",
            "extra": "iterations: 124626\ncpu: 5619.656411984658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9561.226345210223,
            "unit": "ns/iter",
            "extra": "iterations: 73167\ncpu: 9560.914073284423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 33821.10683707645,
            "unit": "ns/iter",
            "extra": "iterations: 24177\ncpu: 33819.06770897954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144779.1602097656,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 144766.21553036725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114152.77036836992,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 114146.10110244693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114245.43988741635,
            "unit": "ns/iter",
            "extra": "iterations: 7461\ncpu: 114239.08323281072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113642.83806098335,
            "unit": "ns/iter",
            "extra": "iterations: 7509\ncpu: 113636.20988147579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 354698.78239325335,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 354675.03810975596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1962207.3557895035,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1962126.3157894774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1539052.0829187664,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1539004.9751243782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1568027.532883584,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1567910.455311975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1523372.9342106236,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1523261.6776315803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 855217.091497216,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 855159.7966728273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1494630.0337620908,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1494573.9549839252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41153.747018015754,
            "unit": "ns/iter",
            "extra": "iterations: 20037\ncpu: 41152.97699256385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 178106.70000000717,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 178095.93814433005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138670.19715350028,
            "unit": "ns/iter",
            "extra": "iterations: 6183\ncpu: 138661.4588387518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138076.92631241216,
            "unit": "ns/iter",
            "extra": "iterations: 6229\ncpu: 138068.88746187196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 156753.5740529899,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 156734.4659404975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 324631.9101460233,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 324612.2800449268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1979064.1319148447,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1978900.8510638315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1600681.5093696925,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1600604.5996592923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1607837.4896193813,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1607704.32525951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1563916.9663300533,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1563822.5589225618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 876954.1962264595,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 876897.4528301901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1529339.208196711,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1529298.1967213033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5380766.129999301,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5380663.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3333175.7741934354,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3333101.7921147137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29475.944645739808,
            "unit": "ns/iter",
            "extra": "iterations: 27875\ncpu: 29475.250224215164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137798.7004645252,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 137797.13278872322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107352.64660900611,
            "unit": "ns/iter",
            "extra": "iterations: 7977\ncpu: 107346.77196941222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110440.91649350835,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 110438.81818181853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103135.35379585697,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 103133.39387335078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 287112.11396204465,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 287106.797734088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1979798.6927966059,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1979743.6440677915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1529687.887070511,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1529650.0818330618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1559055.3645485144,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1559004.1806020092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1507824.9159934213,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1507761.550888537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 841477.6549550076,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 841449.4594594549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1490032.3652312455,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1490001.5948963382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3190.34030305513,
            "unit": "ns/iter",
            "extra": "iterations: 219234\ncpu: 3190.2537927511407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20203.92679625626,
            "unit": "ns/iter",
            "extra": "iterations: 34725\ncpu: 20203.27141828649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16724.058802489028,
            "unit": "ns/iter",
            "extra": "iterations: 41937\ncpu: 16722.641104513947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16552.737347232032,
            "unit": "ns/iter",
            "extra": "iterations: 42303\ncpu: 16552.703117982182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12316.978549162564,
            "unit": "ns/iter",
            "extra": "iterations: 56781\ncpu: 12316.59181768546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 99335.18283261,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 99329.09871244623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135467.74898000035,
            "unit": "ns/iter",
            "extra": "iterations: 5147\ncpu: 135454.42005051463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33344.91616396924,
            "unit": "ns/iter",
            "extra": "iterations: 21053\ncpu: 33342.706502636385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33857.69621846577,
            "unit": "ns/iter",
            "extra": "iterations: 20653\ncpu: 33855.541567811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32920.938301168375,
            "unit": "ns/iter",
            "extra": "iterations: 21297\ncpu: 32919.01206742714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64264.09459087102,
            "unit": "ns/iter",
            "extra": "iterations: 10889\ncpu: 64259.88612361072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61672.927815975636,
            "unit": "ns/iter",
            "extra": "iterations: 11346\ncpu: 61667.32769257888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23683.304979186163,
            "unit": "ns/iter",
            "extra": "iterations: 29543\ncpu: 23681.714788613463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113433.27755235137,
            "unit": "ns/iter",
            "extra": "iterations: 6161\ncpu: 113429.37834767078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93558.24310943426,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 93555.33850682201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93021.62626262853,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 93021.49122807072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91827.50314054184,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 91819.79848207257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 163344.66931710823,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 163341.20673526695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577448.1033912721,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 577424.64846981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 481785.621733118,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 481770.6327372701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 482240.58235703176,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 482211.71605788736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 470295.683680323,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470290.3290799233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305895.3648707774,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 305884.9759088877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 467161.90466668195,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 467151.3999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23131.50195067324,
            "unit": "ns/iter",
            "extra": "iterations: 30246\ncpu: 23131.009059049422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120803.92169714112,
            "unit": "ns/iter",
            "extra": "iterations: 5798\ncpu: 120802.5526043463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94618.57288273177,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 94612.66286644939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94984.57599566913,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 94979.47710647508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93977.80897958855,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 93970.73469387864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 164282.17706380147,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 164272.2795497186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 578414.8854080488,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 578401.4839241521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473686.3616734472,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 473661.8083670674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 479013.6210670577,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478980.3693570466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 470925.5010073851,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470914.5063801274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305485.19624946377,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 305471.5220235507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 467845.8663994597,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467837.94255176844 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}