window.BENCHMARK_DATA = {
  "lastUpdate": 1702392465820,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 22.04 Debug c++-17": [
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
        "date": 1702392464331,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16441.654904349078,
            "unit": "ns/iter",
            "extra": "iterations: 42707\ncpu: 16441.45690402042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157780.29247910163,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 157735.9331476323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 299166.77479338547,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 299164.2561983471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 439765.8775303626,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 439750.86032388697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 584391.2761840922,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 584362.5750500336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 584325.9980000539,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584303.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 699210.7307692204,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 699175.1131221718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 814106.7502222338,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 814053.8666666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 923488.7579681635,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 923436.0557768919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13216.172036301774,
            "unit": "ns/iter",
            "extra": "iterations: 52890\ncpu: 13215.061448288883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11069.140927737584,
            "unit": "ns/iter",
            "extra": "iterations: 63380\ncpu: 11068.46954875354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10817.455097406368,
            "unit": "ns/iter",
            "extra": "iterations: 64729\ncpu: 10816.22456704106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10838.224795177095,
            "unit": "ns/iter",
            "extra": "iterations: 64690\ncpu: 10837.44473643531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17661.28255267454,
            "unit": "ns/iter",
            "extra": "iterations: 39582\ncpu: 17661.186903137754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 67900.78195369297,
            "unit": "ns/iter",
            "extra": "iterations: 12612\ncpu: 67898.96923564852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 336087.59174852166,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 336066.9941060906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265717.1077210387,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 265703.11332503165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 258108.70233404878,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 258102.18247953997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 260440.0526476896,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 260429.29292929283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 580694.817819168,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 580667.5531914895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4981891.850267412,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4981795.721925135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4081562.2838429026,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4081467.685589511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4007397.158798202,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4007225.7510729698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4005952.8448274517,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4005923.706896548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2304632.123762267,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2304532.178217815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3920424.24894504,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3920289.8734177235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15303953.600000244,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15303494.285714285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6796440.679999591,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6796481.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19076166.410713874,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 19075467.85714282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 71048.42529598357,
            "unit": "ns/iter",
            "extra": "iterations: 11994\ncpu: 71047.41537435398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 386511.0183527285,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 386513.4288272144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 302776.2299823589,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 302759.89417989407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 301590.3083980162,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 301587.4029640085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 299113.5988818964,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 299101.04821802926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 603962.9182389717,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 603958.4905660367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5051180.983695657,
            "unit": "ns/iter",
            "extra": "iterations: 184\ncpu: 5051200.543478281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4133668.4266666956,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4133478.66666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4073508.2052401197,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4073438.427947588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4071044.493449826,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4070933.624454157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2322378.4225000087,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2322257.7499999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3973748.846808479,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3973681.7021276806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15587327.499999633,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15586761.764705833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6828266.210000038,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6828146.999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 65241.46765292033,
            "unit": "ns/iter",
            "extra": "iterations: 13046\ncpu: 65237.77403035423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 351188.2870597758,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 351176.61752661696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 279795.10536649806,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 279769.175392672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 269226.56167401175,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 269220.4531151662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 265274.6833748472,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 265259.6824408462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 578349.9826203207,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 578343.3155080207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5023555.983870875,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 5023455.376344092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4115871.2202641536,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4115696.916299576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4015342.1077586757,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4015361.6379310368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4051780.0883721025,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4051697.2093023015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2304119.1182265626,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2303908.1280788234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3950126.2161018634,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3950150.847457621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6130.470724500761,
            "unit": "ns/iter",
            "extra": "iterations: 114396\ncpu: 6130.294765551277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41063.87792573697,
            "unit": "ns/iter",
            "extra": "iterations: 17047\ncpu: 41063.424649498396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32050.162554359697,
            "unit": "ns/iter",
            "extra": "iterations: 21845\ncpu: 32048.560311283778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32625.37512856217,
            "unit": "ns/iter",
            "extra": "iterations: 21390\ncpu: 32625.568022440817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24753.53373647408,
            "unit": "ns/iter",
            "extra": "iterations: 28278\ncpu: 24752.121790791312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163263.5435288569,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 163261.63873370393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 333826.0548141298,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 333806.7206863693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 82408.94081511801,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82409.40342587119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 81447.61481999319,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 81446.37073284472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 81710.19324009279,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 81709.615384616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 166572.2021022555,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 166567.9168657429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 157850.5210443374,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157841.93112761618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46113.17675001603,
            "unit": "ns/iter",
            "extra": "iterations: 15157\ncpu: 46113.05667348411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 229375.49934383316,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 229373.98293963177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 188182.5254237288,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 188174.25343018273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186305.90149493227,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 186295.75547250063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 189206.07704741365,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 189207.03125000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 322296.42526608263,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 322283.5724201749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1391690.6960000687,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1391656.0000000116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1167102.684474079,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1167023.0383973373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1156242.7805279784,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1156250.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1155819.6958677506,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1155801.487603308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718344.5540679565,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 718307.3120494329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1145472.727422002,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1145422.8243021406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46197.998218058216,
            "unit": "ns/iter",
            "extra": "iterations: 15152\ncpu: 46195.822333685384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231931.31332890052,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 231929.9734747996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188279.21501339987,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 188272.2520107219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 186101.41297383746,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 186096.76988788095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 188980.17670790473,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 188970.2797202827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 317822.2323556471,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 317805.8661778242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1369612.0490195362,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1369535.2941176544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1166520.8458960857,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1166453.936348399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1144362.3613861674,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1144303.7953795576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1143516.1090909133,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1143444.7933884407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 717205.9436474784,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 717188.9344262264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1139502.8680782302,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1139469.0553745981 ns\nthreads: 1"
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
        "date": 1702392464331,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16441.654904349078,
            "unit": "ns/iter",
            "extra": "iterations: 42707\ncpu: 16441.45690402042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157780.29247910163,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 157735.9331476323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 299166.77479338547,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 299164.2561983471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 439765.8775303626,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 439750.86032388697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 584391.2761840922,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 584362.5750500336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 584325.9980000539,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584303.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 699210.7307692204,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 699175.1131221718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 814106.7502222338,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 814053.8666666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 923488.7579681635,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 923436.0557768919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13216.172036301774,
            "unit": "ns/iter",
            "extra": "iterations: 52890\ncpu: 13215.061448288883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11069.140927737584,
            "unit": "ns/iter",
            "extra": "iterations: 63380\ncpu: 11068.46954875354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10817.455097406368,
            "unit": "ns/iter",
            "extra": "iterations: 64729\ncpu: 10816.22456704106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10838.224795177095,
            "unit": "ns/iter",
            "extra": "iterations: 64690\ncpu: 10837.44473643531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17661.28255267454,
            "unit": "ns/iter",
            "extra": "iterations: 39582\ncpu: 17661.186903137754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 67900.78195369297,
            "unit": "ns/iter",
            "extra": "iterations: 12612\ncpu: 67898.96923564852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 336087.59174852166,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 336066.9941060906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 265717.1077210387,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 265703.11332503165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 258108.70233404878,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 258102.18247953997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 260440.0526476896,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 260429.29292929283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 580694.817819168,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 580667.5531914895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4981891.850267412,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4981795.721925135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4081562.2838429026,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4081467.685589511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4007397.158798202,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4007225.7510729698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4005952.8448274517,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4005923.706896548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2304632.123762267,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2304532.178217815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3920424.24894504,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3920289.8734177235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15303953.600000244,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15303494.285714285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6796440.679999591,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6796481.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19076166.410713874,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 19075467.85714282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 71048.42529598357,
            "unit": "ns/iter",
            "extra": "iterations: 11994\ncpu: 71047.41537435398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 386511.0183527285,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 386513.4288272144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 302776.2299823589,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 302759.89417989407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 301590.3083980162,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 301587.4029640085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 299113.5988818964,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 299101.04821802926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 603962.9182389717,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 603958.4905660367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5051180.983695657,
            "unit": "ns/iter",
            "extra": "iterations: 184\ncpu: 5051200.543478281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4133668.4266666956,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4133478.66666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4073508.2052401197,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4073438.427947588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4071044.493449826,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4070933.624454157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2322378.4225000087,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2322257.7499999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3973748.846808479,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3973681.7021276806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15587327.499999633,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15586761.764705833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6828266.210000038,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6828146.999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 65241.46765292033,
            "unit": "ns/iter",
            "extra": "iterations: 13046\ncpu: 65237.77403035423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 351188.2870597758,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 351176.61752661696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 279795.10536649806,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 279769.175392672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 269226.56167401175,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 269220.4531151662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 265274.6833748472,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 265259.6824408462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 578349.9826203207,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 578343.3155080207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5023555.983870875,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 5023455.376344092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4115871.2202641536,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4115696.916299576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4015342.1077586757,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4015361.6379310368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4051780.0883721025,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4051697.2093023015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2304119.1182265626,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2303908.1280788234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3950126.2161018634,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3950150.847457621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6130.470724500761,
            "unit": "ns/iter",
            "extra": "iterations: 114396\ncpu: 6130.294765551277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41063.87792573697,
            "unit": "ns/iter",
            "extra": "iterations: 17047\ncpu: 41063.424649498396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32050.162554359697,
            "unit": "ns/iter",
            "extra": "iterations: 21845\ncpu: 32048.560311283778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32625.37512856217,
            "unit": "ns/iter",
            "extra": "iterations: 21390\ncpu: 32625.568022440817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24753.53373647408,
            "unit": "ns/iter",
            "extra": "iterations: 28278\ncpu: 24752.121790791312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163263.5435288569,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 163261.63873370393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 333826.0548141298,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 333806.7206863693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 82408.94081511801,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 82409.40342587119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 81447.61481999319,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 81446.37073284472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 81710.19324009279,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 81709.615384616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 166572.2021022555,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 166567.9168657429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 157850.5210443374,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157841.93112761618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46113.17675001603,
            "unit": "ns/iter",
            "extra": "iterations: 15157\ncpu: 46113.05667348411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 229375.49934383316,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 229373.98293963177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 188182.5254237288,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 188174.25343018273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 186305.90149493227,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 186295.75547250063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 189206.07704741365,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 189207.03125000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 322296.42526608263,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 322283.5724201749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1391690.6960000687,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1391656.0000000116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1167102.684474079,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1167023.0383973373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1156242.7805279784,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1156250.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1155819.6958677506,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1155801.487603308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 718344.5540679565,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 718307.3120494329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1145472.727422002,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1145422.8243021406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46197.998218058216,
            "unit": "ns/iter",
            "extra": "iterations: 15152\ncpu: 46195.822333685384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 231931.31332890052,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 231929.9734747996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 188279.21501339987,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 188272.2520107219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 186101.41297383746,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 186096.76988788095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 188980.17670790473,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 188970.2797202827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 317822.2323556471,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 317805.8661778242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1369612.0490195362,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1369535.2941176544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1166520.8458960857,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1166453.936348399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1144362.3613861674,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1144303.7953795576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1143516.1090909133,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1143444.7933884407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 717205.9436474784,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 717188.9344262264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1139502.8680782302,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1139469.0553745981 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}