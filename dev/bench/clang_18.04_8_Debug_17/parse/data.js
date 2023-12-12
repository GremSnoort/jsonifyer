window.BENCHMARK_DATA = {
  "lastUpdate": 1702392468832,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-8 18.04 Debug c++-17": [
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
        "date": 1702392465939,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8425.086129484018,
            "unit": "ns/iter",
            "extra": "iterations: 82852\ncpu: 8424.827403080191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59943.85550000061,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59941.47999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109666.51050821714,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 109665.81327219463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159895.19725365733,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 159890.20226387086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211592.60481928036,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 211587.92771084348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257714.0606420749,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 257704.31034482757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 307791.8844239093,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 307777.5248933145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 370575.1917584654,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 370573.60261117894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406591.7094657927,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 406571.5089034676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6928.402884747868,
            "unit": "ns/iter",
            "extra": "iterations: 101014\ncpu: 6928.31389708357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5641.983592297021,
            "unit": "ns/iter",
            "extra": "iterations: 124149\ncpu: 5641.905291222641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5701.046399245581,
            "unit": "ns/iter",
            "extra": "iterations: 123127\ncpu: 5700.85277802593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5590.544364159941,
            "unit": "ns/iter",
            "extra": "iterations: 123726\ncpu: 5590.336711766325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9987.12092067577,
            "unit": "ns/iter",
            "extra": "iterations: 70079\ncpu: 9986.553746486126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32194.726370121756,
            "unit": "ns/iter",
            "extra": "iterations: 25381\ncpu: 32193.337535952094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 168145.0932887302,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 168139.6575477268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 127744.62027209665,
            "unit": "ns/iter",
            "extra": "iterations: 6689\ncpu: 127736.98609657623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 126340.5013286095,
            "unit": "ns/iter",
            "extra": "iterations: 6774\ncpu: 126334.41098317115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120110.66473988634,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 120107.24658113645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 420224.0968175337,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 420194.9350067229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1980020.599571802,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1979930.192719483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1538370.1026489055,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1538301.6556291392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1560565.2622673789,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1560473.9424703887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1522060.4170773232,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1521987.684729068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 865001.2570093746,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 864966.261682245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1503427.9805194372,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1503331.1688311724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41871.351828373095,
            "unit": "ns/iter",
            "extra": "iterations: 19717\ncpu: 41870.40117664969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 201751.0189119769,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 201751.48260564977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 157591.93409007048,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 157588.00805565706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 159853.6999071474,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 159850.15784586855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 149053.49514056664,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 149051.09337035764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 362906.96736403136,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 362898.66108786536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2023241.7233114722,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2023164.05228759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1574623.2932203491,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1574584.9152542453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1584917.3384616284,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1584870.2564102584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1565348.0670017344,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1565270.6867671697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 896936.6493756342,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 896891.0662824165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1532200.4563425912,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1532167.7100494164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549140.809999926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5548849.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3297179.4751772983,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3297110.992907823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31464.491636360646,
            "unit": "ns/iter",
            "extra": "iterations: 26125\ncpu: 31462.94354066987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 167774.59874975623,
            "unit": "ns/iter",
            "extra": "iterations: 5119\ncpu: 167770.97089275185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 120389.4490544842,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 120383.68614168787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119880.97364751757,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 119880.18683770242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 116828.5212418209,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 116824.23747276707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 345548.0087649289,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 345537.1314741038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1978986.5665961674,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1978865.3276955665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1531719.2983606905,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1531698.5245901572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1545645.0281458395,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1545586.589403982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1522669.6302931756,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1522615.7980456026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 844531.6088526685,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 844507.046070463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1489645.323199875,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1489579.6799999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3241.230845133246,
            "unit": "ns/iter",
            "extra": "iterations: 216877\ncpu: 3241.1150098904077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21003.966591761062,
            "unit": "ns/iter",
            "extra": "iterations: 33375\ncpu: 21004.017977528096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16960.55443959258,
            "unit": "ns/iter",
            "extra": "iterations: 41220\ncpu: 16960.436681222593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16804.515338558336,
            "unit": "ns/iter",
            "extra": "iterations: 43257\ncpu: 16803.037658644713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12324.889881214527,
            "unit": "ns/iter",
            "extra": "iterations: 56657\ncpu: 12324.256490813152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 115437.1683412882,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 115430.43979574945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138487.18477400197,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 138481.46312450466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33635.55155208113,
            "unit": "ns/iter",
            "extra": "iterations: 20843\ncpu: 33633.71395672384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33991.15269548076,
            "unit": "ns/iter",
            "extra": "iterations: 20590\ncpu: 33989.800874210676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33004.448741411186,
            "unit": "ns/iter",
            "extra": "iterations: 20221\ncpu: 33002.002868305484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68179.43663347914,
            "unit": "ns/iter",
            "extra": "iterations: 10242\ncpu: 68176.98691661784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62255.60520452294,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 62254.46038677456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24408.86261969694,
            "unit": "ns/iter",
            "extra": "iterations: 28927\ncpu: 24408.645901752872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122255.66742318659,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 122253.875698325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97951.9518492752,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 97946.72714584843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 99545.14766407703,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 99538.51501668464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96015.99298679481,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96010.49229923163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 178718.8379204815,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178710.19367991976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 598683.7904191457,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 598678.6142001675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 484167.1000690047,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 484158.1090407206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493547.78817733837,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493544.54609430255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474930.0400542838,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474925.2545824837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 314904.7954033205,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 314905.7683641285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 474206.3186440492,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474207.45762712683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24665.188367995477,
            "unit": "ns/iter",
            "extra": "iterations: 28370\ncpu: 24664.43778639395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119734.55712102783,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 119729.85910711279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96622.55529380048,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 96616.90687361313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97646.1475546759,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97641.73052807731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96795.5448638079,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96789.6999861733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 178268.5165647486,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178262.945973497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 582701.7088186478,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 582697.004991676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480330.6620879347,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480312.63736264233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 479667.62825791317,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 479648.35390947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475016.89594599686,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 474980.81081080943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303636.63719511364,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 303617.2473867577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 470932.5160427836,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 470928.20855614764 ns\nthreads: 1"
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
        "date": 1702392465939,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8425.086129484018,
            "unit": "ns/iter",
            "extra": "iterations: 82852\ncpu: 8424.827403080191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59943.85550000061,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59941.47999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109666.51050821714,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 109665.81327219463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159895.19725365733,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 159890.20226387086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211592.60481928036,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 211587.92771084348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257714.0606420749,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 257704.31034482757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 307791.8844239093,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 307777.5248933145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 370575.1917584654,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 370573.60261117894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406591.7094657927,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 406571.5089034676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6928.402884747868,
            "unit": "ns/iter",
            "extra": "iterations: 101014\ncpu: 6928.31389708357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5641.983592297021,
            "unit": "ns/iter",
            "extra": "iterations: 124149\ncpu: 5641.905291222641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5701.046399245581,
            "unit": "ns/iter",
            "extra": "iterations: 123127\ncpu: 5700.85277802593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5590.544364159941,
            "unit": "ns/iter",
            "extra": "iterations: 123726\ncpu: 5590.336711766325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9987.12092067577,
            "unit": "ns/iter",
            "extra": "iterations: 70079\ncpu: 9986.553746486126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32194.726370121756,
            "unit": "ns/iter",
            "extra": "iterations: 25381\ncpu: 32193.337535952094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 168145.0932887302,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 168139.6575477268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 127744.62027209665,
            "unit": "ns/iter",
            "extra": "iterations: 6689\ncpu: 127736.98609657623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 126340.5013286095,
            "unit": "ns/iter",
            "extra": "iterations: 6774\ncpu: 126334.41098317115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120110.66473988634,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 120107.24658113645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 420224.0968175337,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 420194.9350067229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1980020.599571802,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1979930.192719483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1538370.1026489055,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1538301.6556291392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1560565.2622673789,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1560473.9424703887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1522060.4170773232,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1521987.684729068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 865001.2570093746,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 864966.261682245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1503427.9805194372,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1503331.1688311724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41871.351828373095,
            "unit": "ns/iter",
            "extra": "iterations: 19717\ncpu: 41870.40117664969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 201751.0189119769,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 201751.48260564977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 157591.93409007048,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 157588.00805565706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 159853.6999071474,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 159850.15784586855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 149053.49514056664,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 149051.09337035764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 362906.96736403136,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 362898.66108786536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2023241.7233114722,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2023164.05228759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1574623.2932203491,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1574584.9152542453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1584917.3384616284,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1584870.2564102584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1565348.0670017344,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1565270.6867671697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 896936.6493756342,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 896891.0662824165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1532200.4563425912,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1532167.7100494164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549140.809999926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5548849.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3297179.4751772983,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3297110.992907823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31464.491636360646,
            "unit": "ns/iter",
            "extra": "iterations: 26125\ncpu: 31462.94354066987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 167774.59874975623,
            "unit": "ns/iter",
            "extra": "iterations: 5119\ncpu: 167770.97089275185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 120389.4490544842,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 120383.68614168787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119880.97364751757,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 119880.18683770242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 116828.5212418209,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 116824.23747276707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 345548.0087649289,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 345537.1314741038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1978986.5665961674,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1978865.3276955665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1531719.2983606905,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1531698.5245901572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1545645.0281458395,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1545586.589403982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1522669.6302931756,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1522615.7980456026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 844531.6088526685,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 844507.046070463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1489645.323199875,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1489579.6799999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3241.230845133246,
            "unit": "ns/iter",
            "extra": "iterations: 216877\ncpu: 3241.1150098904077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21003.966591761062,
            "unit": "ns/iter",
            "extra": "iterations: 33375\ncpu: 21004.017977528096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16960.55443959258,
            "unit": "ns/iter",
            "extra": "iterations: 41220\ncpu: 16960.436681222593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16804.515338558336,
            "unit": "ns/iter",
            "extra": "iterations: 43257\ncpu: 16803.037658644713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12324.889881214527,
            "unit": "ns/iter",
            "extra": "iterations: 56657\ncpu: 12324.256490813152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 115437.1683412882,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 115430.43979574945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138487.18477400197,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 138481.46312450466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33635.55155208113,
            "unit": "ns/iter",
            "extra": "iterations: 20843\ncpu: 33633.71395672384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33991.15269548076,
            "unit": "ns/iter",
            "extra": "iterations: 20590\ncpu: 33989.800874210676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33004.448741411186,
            "unit": "ns/iter",
            "extra": "iterations: 20221\ncpu: 33002.002868305484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68179.43663347914,
            "unit": "ns/iter",
            "extra": "iterations: 10242\ncpu: 68176.98691661784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62255.60520452294,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 62254.46038677456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24408.86261969694,
            "unit": "ns/iter",
            "extra": "iterations: 28927\ncpu: 24408.645901752872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122255.66742318659,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 122253.875698325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97951.9518492752,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 97946.72714584843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 99545.14766407703,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 99538.51501668464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96015.99298679481,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96010.49229923163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 178718.8379204815,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178710.19367991976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 598683.7904191457,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 598678.6142001675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 484167.1000690047,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 484158.1090407206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493547.78817733837,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493544.54609430255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474930.0400542838,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474925.2545824837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 314904.7954033205,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 314905.7683641285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 474206.3186440492,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474207.45762712683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24665.188367995477,
            "unit": "ns/iter",
            "extra": "iterations: 28370\ncpu: 24664.43778639395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119734.55712102783,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 119729.85910711279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96622.55529380048,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 96616.90687361313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97646.1475546759,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97641.73052807731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96795.5448638079,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96789.6999861733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 178268.5165647486,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178262.945973497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 582701.7088186478,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 582697.004991676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480330.6620879347,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480312.63736264233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 479667.62825791317,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 479648.35390947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475016.89594599686,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 474980.81081080943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303636.63719511364,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 303617.2473867577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 470932.5160427836,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 470928.20855614764 ns\nthreads: 1"
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
        "date": 1702392465939,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8425.086129484018,
            "unit": "ns/iter",
            "extra": "iterations: 82852\ncpu: 8424.827403080191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59943.85550000061,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59941.47999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109666.51050821714,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 109665.81327219463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159895.19725365733,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 159890.20226387086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211592.60481928036,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 211587.92771084348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257714.0606420749,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 257704.31034482757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 307791.8844239093,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 307777.5248933145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 370575.1917584654,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 370573.60261117894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406591.7094657927,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 406571.5089034676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6928.402884747868,
            "unit": "ns/iter",
            "extra": "iterations: 101014\ncpu: 6928.31389708357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5641.983592297021,
            "unit": "ns/iter",
            "extra": "iterations: 124149\ncpu: 5641.905291222641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5701.046399245581,
            "unit": "ns/iter",
            "extra": "iterations: 123127\ncpu: 5700.85277802593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5590.544364159941,
            "unit": "ns/iter",
            "extra": "iterations: 123726\ncpu: 5590.336711766325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9987.12092067577,
            "unit": "ns/iter",
            "extra": "iterations: 70079\ncpu: 9986.553746486126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32194.726370121756,
            "unit": "ns/iter",
            "extra": "iterations: 25381\ncpu: 32193.337535952094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 168145.0932887302,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 168139.6575477268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 127744.62027209665,
            "unit": "ns/iter",
            "extra": "iterations: 6689\ncpu: 127736.98609657623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 126340.5013286095,
            "unit": "ns/iter",
            "extra": "iterations: 6774\ncpu: 126334.41098317115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120110.66473988634,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 120107.24658113645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 420224.0968175337,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 420194.9350067229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1980020.599571802,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1979930.192719483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1538370.1026489055,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1538301.6556291392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1560565.2622673789,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1560473.9424703887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1522060.4170773232,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1521987.684729068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 865001.2570093746,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 864966.261682245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1503427.9805194372,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1503331.1688311724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41871.351828373095,
            "unit": "ns/iter",
            "extra": "iterations: 19717\ncpu: 41870.40117664969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 201751.0189119769,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 201751.48260564977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 157591.93409007048,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 157588.00805565706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 159853.6999071474,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 159850.15784586855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 149053.49514056664,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 149051.09337035764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 362906.96736403136,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 362898.66108786536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2023241.7233114722,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2023164.05228759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1574623.2932203491,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1574584.9152542453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1584917.3384616284,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1584870.2564102584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1565348.0670017344,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1565270.6867671697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 896936.6493756342,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 896891.0662824165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1532200.4563425912,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1532167.7100494164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549140.809999926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5548849.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3297179.4751772983,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3297110.992907823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31464.491636360646,
            "unit": "ns/iter",
            "extra": "iterations: 26125\ncpu: 31462.94354066987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 167774.59874975623,
            "unit": "ns/iter",
            "extra": "iterations: 5119\ncpu: 167770.97089275185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 120389.4490544842,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 120383.68614168787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119880.97364751757,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 119880.18683770242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 116828.5212418209,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 116824.23747276707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 345548.0087649289,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 345537.1314741038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1978986.5665961674,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1978865.3276955665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1531719.2983606905,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1531698.5245901572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1545645.0281458395,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1545586.589403982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1522669.6302931756,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1522615.7980456026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 844531.6088526685,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 844507.046070463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1489645.323199875,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1489579.6799999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3241.230845133246,
            "unit": "ns/iter",
            "extra": "iterations: 216877\ncpu: 3241.1150098904077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21003.966591761062,
            "unit": "ns/iter",
            "extra": "iterations: 33375\ncpu: 21004.017977528096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16960.55443959258,
            "unit": "ns/iter",
            "extra": "iterations: 41220\ncpu: 16960.436681222593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16804.515338558336,
            "unit": "ns/iter",
            "extra": "iterations: 43257\ncpu: 16803.037658644713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12324.889881214527,
            "unit": "ns/iter",
            "extra": "iterations: 56657\ncpu: 12324.256490813152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 115437.1683412882,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 115430.43979574945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138487.18477400197,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 138481.46312450466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33635.55155208113,
            "unit": "ns/iter",
            "extra": "iterations: 20843\ncpu: 33633.71395672384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33991.15269548076,
            "unit": "ns/iter",
            "extra": "iterations: 20590\ncpu: 33989.800874210676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33004.448741411186,
            "unit": "ns/iter",
            "extra": "iterations: 20221\ncpu: 33002.002868305484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68179.43663347914,
            "unit": "ns/iter",
            "extra": "iterations: 10242\ncpu: 68176.98691661784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62255.60520452294,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 62254.46038677456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24408.86261969694,
            "unit": "ns/iter",
            "extra": "iterations: 28927\ncpu: 24408.645901752872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122255.66742318659,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 122253.875698325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97951.9518492752,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 97946.72714584843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 99545.14766407703,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 99538.51501668464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96015.99298679481,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96010.49229923163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 178718.8379204815,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178710.19367991976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 598683.7904191457,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 598678.6142001675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 484167.1000690047,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 484158.1090407206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493547.78817733837,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493544.54609430255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474930.0400542838,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474925.2545824837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 314904.7954033205,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 314905.7683641285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 474206.3186440492,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474207.45762712683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24665.188367995477,
            "unit": "ns/iter",
            "extra": "iterations: 28370\ncpu: 24664.43778639395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119734.55712102783,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 119729.85910711279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96622.55529380048,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 96616.90687361313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97646.1475546759,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97641.73052807731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96795.5448638079,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96789.6999861733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 178268.5165647486,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178262.945973497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 582701.7088186478,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 582697.004991676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480330.6620879347,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480312.63736264233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 479667.62825791317,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 479648.35390947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475016.89594599686,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 474980.81081080943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303636.63719511364,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 303617.2473867577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 470932.5160427836,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 470928.20855614764 ns\nthreads: 1"
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
        "date": 1702392465939,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8425.086129484018,
            "unit": "ns/iter",
            "extra": "iterations: 82852\ncpu: 8424.827403080191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59943.85550000061,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59941.47999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109666.51050821714,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 109665.81327219463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159895.19725365733,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 159890.20226387086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211592.60481928036,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 211587.92771084348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257714.0606420749,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 257704.31034482757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 307791.8844239093,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 307777.5248933145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 370575.1917584654,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 370573.60261117894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406591.7094657927,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 406571.5089034676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6928.402884747868,
            "unit": "ns/iter",
            "extra": "iterations: 101014\ncpu: 6928.31389708357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5641.983592297021,
            "unit": "ns/iter",
            "extra": "iterations: 124149\ncpu: 5641.905291222641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5701.046399245581,
            "unit": "ns/iter",
            "extra": "iterations: 123127\ncpu: 5700.85277802593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5590.544364159941,
            "unit": "ns/iter",
            "extra": "iterations: 123726\ncpu: 5590.336711766325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9987.12092067577,
            "unit": "ns/iter",
            "extra": "iterations: 70079\ncpu: 9986.553746486126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32194.726370121756,
            "unit": "ns/iter",
            "extra": "iterations: 25381\ncpu: 32193.337535952094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 168145.0932887302,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 168139.6575477268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 127744.62027209665,
            "unit": "ns/iter",
            "extra": "iterations: 6689\ncpu: 127736.98609657623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 126340.5013286095,
            "unit": "ns/iter",
            "extra": "iterations: 6774\ncpu: 126334.41098317115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120110.66473988634,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 120107.24658113645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 420224.0968175337,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 420194.9350067229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1980020.599571802,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1979930.192719483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1538370.1026489055,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1538301.6556291392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1560565.2622673789,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1560473.9424703887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1522060.4170773232,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1521987.684729068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 865001.2570093746,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 864966.261682245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1503427.9805194372,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1503331.1688311724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41871.351828373095,
            "unit": "ns/iter",
            "extra": "iterations: 19717\ncpu: 41870.40117664969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 201751.0189119769,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 201751.48260564977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 157591.93409007048,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 157588.00805565706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 159853.6999071474,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 159850.15784586855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 149053.49514056664,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 149051.09337035764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 362906.96736403136,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 362898.66108786536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2023241.7233114722,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2023164.05228759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1574623.2932203491,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1574584.9152542453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1584917.3384616284,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1584870.2564102584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1565348.0670017344,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1565270.6867671697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 896936.6493756342,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 896891.0662824165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1532200.4563425912,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1532167.7100494164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5549140.809999926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5548849.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3297179.4751772983,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3297110.992907823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31464.491636360646,
            "unit": "ns/iter",
            "extra": "iterations: 26125\ncpu: 31462.94354066987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 167774.59874975623,
            "unit": "ns/iter",
            "extra": "iterations: 5119\ncpu: 167770.97089275185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 120389.4490544842,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 120383.68614168787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119880.97364751757,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 119880.18683770242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 116828.5212418209,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 116824.23747276707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 345548.0087649289,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 345537.1314741038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1978986.5665961674,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1978865.3276955665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1531719.2983606905,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1531698.5245901572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1545645.0281458395,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1545586.589403982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1522669.6302931756,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1522615.7980456026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 844531.6088526685,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 844507.046070463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1489645.323199875,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1489579.6799999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3241.230845133246,
            "unit": "ns/iter",
            "extra": "iterations: 216877\ncpu: 3241.1150098904077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21003.966591761062,
            "unit": "ns/iter",
            "extra": "iterations: 33375\ncpu: 21004.017977528096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16960.55443959258,
            "unit": "ns/iter",
            "extra": "iterations: 41220\ncpu: 16960.436681222593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16804.515338558336,
            "unit": "ns/iter",
            "extra": "iterations: 43257\ncpu: 16803.037658644713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12324.889881214527,
            "unit": "ns/iter",
            "extra": "iterations: 56657\ncpu: 12324.256490813152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 115437.1683412882,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 115430.43979574945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138487.18477400197,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 138481.46312450466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33635.55155208113,
            "unit": "ns/iter",
            "extra": "iterations: 20843\ncpu: 33633.71395672384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33991.15269548076,
            "unit": "ns/iter",
            "extra": "iterations: 20590\ncpu: 33989.800874210676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33004.448741411186,
            "unit": "ns/iter",
            "extra": "iterations: 20221\ncpu: 33002.002868305484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68179.43663347914,
            "unit": "ns/iter",
            "extra": "iterations: 10242\ncpu: 68176.98691661784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62255.60520452294,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 62254.46038677456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24408.86261969694,
            "unit": "ns/iter",
            "extra": "iterations: 28927\ncpu: 24408.645901752872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122255.66742318659,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 122253.875698325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97951.9518492752,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 97946.72714584843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 99545.14766407703,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 99538.51501668464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96015.99298679481,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96010.49229923163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 178718.8379204815,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178710.19367991976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 598683.7904191457,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 598678.6142001675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 484167.1000690047,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 484158.1090407206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493547.78817733837,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493544.54609430255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 474930.0400542838,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474925.2545824837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 314904.7954033205,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 314905.7683641285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 474206.3186440492,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 474207.45762712683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24665.188367995477,
            "unit": "ns/iter",
            "extra": "iterations: 28370\ncpu: 24664.43778639395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119734.55712102783,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 119729.85910711279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96622.55529380048,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 96616.90687361313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97646.1475546759,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97641.73052807731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96795.5448638079,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96789.6999861733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 178268.5165647486,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178262.945973497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 582701.7088186478,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 582697.004991676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480330.6620879347,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480312.63736264233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 479667.62825791317,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 479648.35390947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 475016.89594599686,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 474980.81081080943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303636.63719511364,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 303617.2473867577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 470932.5160427836,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 470928.20855614764 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}