window.BENCHMARK_DATA = {
  "lastUpdate": 1702394275839,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-9 20.04 Debug c++-17": [
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
        "date": 1702392456013,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7896.074159358182,
            "unit": "ns/iter",
            "extra": "iterations: 88593\ncpu: 7895.922928448072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57846.80869999193,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57844.99000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107139.64243933295,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 107135.49471064097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154806.25733836467,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 154802.3590851792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 203915.10082064863,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 203910.29308323574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 253059.71328468804,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 253050.27737226276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 300654.43804235454,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 300640.5761888233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 350479.6339105969,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 350475.07047925895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 396376.3815609617,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 396356.4582382478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6584.059224349344,
            "unit": "ns/iter",
            "extra": "iterations: 105666\ncpu: 6583.8718225351695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5316.800264208828,
            "unit": "ns/iter",
            "extra": "iterations: 131714\ncpu: 5316.411315425842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5390.364027572121,
            "unit": "ns/iter",
            "extra": "iterations: 130133\ncpu: 5389.951818524119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5422.835707437095,
            "unit": "ns/iter",
            "extra": "iterations: 129312\ncpu: 5422.520725068056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8656.008508695177,
            "unit": "ns/iter",
            "extra": "iterations: 80976\ncpu: 8655.938796680513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28688.199099836394,
            "unit": "ns/iter",
            "extra": "iterations: 28217\ncpu: 28686.745578906313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138205.12622923235,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 138200.04836369486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104815.88209286073,
            "unit": "ns/iter",
            "extra": "iterations: 8142\ncpu: 104816.34733480719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105644.75377755913,
            "unit": "ns/iter",
            "extra": "iterations: 8074\ncpu: 105645.19445132538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99924.42559907207,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 99709.47983635278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 241451.21089918635,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 241448.14713896465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1905141.5979379506,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1905028.4536082442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1466044.6455696756,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1465964.7151898697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1503407.5528454536,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1503314.7967479704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1473238.6814581107,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1473156.1014263048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 836023.7660343518,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 835993.5862691948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1444759.4392523738,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1444691.588785048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36752.22901950564,
            "unit": "ns/iter",
            "extra": "iterations: 22509\ncpu: 36749.651250610936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166398.1041987814,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 166389.13713405258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134464.05899936828,
            "unit": "ns/iter",
            "extra": "iterations: 6356\ncpu: 134457.0956576463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137442.29947793466,
            "unit": "ns/iter",
            "extra": "iterations: 6321\ncpu: 137434.70969783302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126479.01960206698,
            "unit": "ns/iter",
            "extra": "iterations: 6785\ncpu: 126468.29771554934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 262650.4907827039,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 262634.7537020248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1963719.2757895,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1963590.7368421096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1518096.90048943,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1518036.3784665568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1527989.2676519433,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1527904.7619047551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1509211.6861788463,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509128.455284554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 865995.3744164569,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 865983.4733893567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1492107.2115384594,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1492053.8461538467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5334122.8299996145,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5333930.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3217885.136986334,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3217817.8082191884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28390.904629984983,
            "unit": "ns/iter",
            "extra": "iterations: 28877\ncpu: 28389.992035183805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 147824.17142857815,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 147814.7989734811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107119.13274003666,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 107112.38405615468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100988.63833549635,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 100981.4806082759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99225.51168981142,
            "unit": "ns/iter",
            "extra": "iterations: 8640\ncpu: 99224.22453703692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225977.37988535292,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 225974.1010943186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1912885.9014374209,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1912833.0595482504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1461609.3343800434,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1461567.8178963936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1498968.4863124879,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1498936.0708534545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1471744.099526124,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1471706.1611374405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 831635.7830357747,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 831600.6250000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1449518.6619938053,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1449485.514018691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2905.3305346406455,
            "unit": "ns/iter",
            "extra": "iterations: 239993\ncpu: 2905.2780706103817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19161.096779499243,
            "unit": "ns/iter",
            "extra": "iterations: 36485\ncpu: 19161.003151980352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.73473065971,
            "unit": "ns/iter",
            "extra": "iterations: 44943\ncpu: 15566.36183610349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15060.553468052087,
            "unit": "ns/iter",
            "extra": "iterations: 46467\ncpu: 15060.249209116151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11382.353351092763,
            "unit": "ns/iter",
            "extra": "iterations: 61562\ncpu: 11382.399857054676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75447.90600382513,
            "unit": "ns/iter",
            "extra": "iterations: 9394\ncpu: 75446.64679582666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134203.63634617566,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 134200.9211283818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31527.973823170356,
            "unit": "ns/iter",
            "extra": "iterations: 22157\ncpu: 31526.817709978684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32317.301895519544,
            "unit": "ns/iter",
            "extra": "iterations: 21630\ncpu: 32317.08275543232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31614.11809850261,
            "unit": "ns/iter",
            "extra": "iterations: 22151\ncpu: 31613.43957383392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61456.110305178016,
            "unit": "ns/iter",
            "extra": "iterations: 11305\ncpu: 61454.80760725297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60266.23059006083,
            "unit": "ns/iter",
            "extra": "iterations: 11592\ncpu: 60263.552449965435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24294.29692655077,
            "unit": "ns/iter",
            "extra": "iterations: 28795\ncpu: 24293.849626671334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113209.49442198323,
            "unit": "ns/iter",
            "extra": "iterations: 6185\ncpu: 113207.67987065489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94067.00106509597,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 94047.03767807256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93917.84433709057,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 93912.77509393448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91671.44978913589,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 91669.96573537089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 143260.86485382082,
            "unit": "ns/iter",
            "extra": "iterations: 4891\ncpu: 143259.84461255395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 576179.6592593067,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 576145.349794237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 467672.0060120027,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467665.130260517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478186.37072504335,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478142.68125855515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 464742.40622925694,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 464738.83366468095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 297039.03264096234,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 297036.1593895728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 462064.76567653875,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462046.006600655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23662.01191039933,
            "unit": "ns/iter",
            "extra": "iterations: 29554\ncpu: 23661.808892197318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112996.7753880833,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 112995.16494178693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93406.09925292607,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 93400.20010672335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93804.87521850823,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 93607.54336426046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93377.31377788898,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 93372.28384337663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 142436.88877591654,
            "unit": "ns/iter",
            "extra": "iterations: 4918\ncpu: 142432.5945506312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574592.672682467,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 574595.406070553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 465696.28381958045,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 465656.0344827632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 473256.7471264203,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473246.17985124164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 457002.82679735764,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 456980.8496732022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 293201.6085678055,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 293189.24821503734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 458944.7119314033,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 458946.27554383187 ns\nthreads: 1"
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
        "date": 1702392456013,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7896.074159358182,
            "unit": "ns/iter",
            "extra": "iterations: 88593\ncpu: 7895.922928448072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57846.80869999193,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57844.99000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 107139.64243933295,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 107135.49471064097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 154806.25733836467,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 154802.3590851792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 203915.10082064863,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 203910.29308323574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 253059.71328468804,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 253050.27737226276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 300654.43804235454,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 300640.5761888233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 350479.6339105969,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 350475.07047925895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 396376.3815609617,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 396356.4582382478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6584.059224349344,
            "unit": "ns/iter",
            "extra": "iterations: 105666\ncpu: 6583.8718225351695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5316.800264208828,
            "unit": "ns/iter",
            "extra": "iterations: 131714\ncpu: 5316.411315425842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5390.364027572121,
            "unit": "ns/iter",
            "extra": "iterations: 130133\ncpu: 5389.951818524119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5422.835707437095,
            "unit": "ns/iter",
            "extra": "iterations: 129312\ncpu: 5422.520725068056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8656.008508695177,
            "unit": "ns/iter",
            "extra": "iterations: 80976\ncpu: 8655.938796680513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28688.199099836394,
            "unit": "ns/iter",
            "extra": "iterations: 28217\ncpu: 28686.745578906313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138205.12622923235,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 138200.04836369486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104815.88209286073,
            "unit": "ns/iter",
            "extra": "iterations: 8142\ncpu: 104816.34733480719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105644.75377755913,
            "unit": "ns/iter",
            "extra": "iterations: 8074\ncpu: 105645.19445132538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99924.42559907207,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 99709.47983635278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 241451.21089918635,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 241448.14713896465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1905141.5979379506,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1905028.4536082442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1466044.6455696756,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1465964.7151898697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1503407.5528454536,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1503314.7967479704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1473238.6814581107,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1473156.1014263048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 836023.7660343518,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 835993.5862691948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1444759.4392523738,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1444691.588785048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36752.22901950564,
            "unit": "ns/iter",
            "extra": "iterations: 22509\ncpu: 36749.651250610936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166398.1041987814,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 166389.13713405258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134464.05899936828,
            "unit": "ns/iter",
            "extra": "iterations: 6356\ncpu: 134457.0956576463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137442.29947793466,
            "unit": "ns/iter",
            "extra": "iterations: 6321\ncpu: 137434.70969783302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126479.01960206698,
            "unit": "ns/iter",
            "extra": "iterations: 6785\ncpu: 126468.29771554934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 262650.4907827039,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 262634.7537020248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1963719.2757895,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1963590.7368421096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1518096.90048943,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1518036.3784665568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1527989.2676519433,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1527904.7619047551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1509211.6861788463,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1509128.455284554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 865995.3744164569,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 865983.4733893567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1492107.2115384594,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1492053.8461538467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5334122.8299996145,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5333930.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3217885.136986334,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3217817.8082191884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28390.904629984983,
            "unit": "ns/iter",
            "extra": "iterations: 28877\ncpu: 28389.992035183805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 147824.17142857815,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 147814.7989734811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107119.13274003666,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 107112.38405615468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100988.63833549635,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 100981.4806082759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99225.51168981142,
            "unit": "ns/iter",
            "extra": "iterations: 8640\ncpu: 99224.22453703692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 225977.37988535292,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 225974.1010943186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1912885.9014374209,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1912833.0595482504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1461609.3343800434,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1461567.8178963936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1498968.4863124879,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1498936.0708534545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1471744.099526124,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1471706.1611374405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 831635.7830357747,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 831600.6250000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1449518.6619938053,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1449485.514018691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2905.3305346406455,
            "unit": "ns/iter",
            "extra": "iterations: 239993\ncpu: 2905.2780706103817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19161.096779499243,
            "unit": "ns/iter",
            "extra": "iterations: 36485\ncpu: 19161.003151980352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15566.73473065971,
            "unit": "ns/iter",
            "extra": "iterations: 44943\ncpu: 15566.36183610349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15060.553468052087,
            "unit": "ns/iter",
            "extra": "iterations: 46467\ncpu: 15060.249209116151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11382.353351092763,
            "unit": "ns/iter",
            "extra": "iterations: 61562\ncpu: 11382.399857054676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 75447.90600382513,
            "unit": "ns/iter",
            "extra": "iterations: 9394\ncpu: 75446.64679582666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134203.63634617566,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 134200.9211283818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31527.973823170356,
            "unit": "ns/iter",
            "extra": "iterations: 22157\ncpu: 31526.817709978684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32317.301895519544,
            "unit": "ns/iter",
            "extra": "iterations: 21630\ncpu: 32317.08275543232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31614.11809850261,
            "unit": "ns/iter",
            "extra": "iterations: 22151\ncpu: 31613.43957383392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61456.110305178016,
            "unit": "ns/iter",
            "extra": "iterations: 11305\ncpu: 61454.80760725297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60266.23059006083,
            "unit": "ns/iter",
            "extra": "iterations: 11592\ncpu: 60263.552449965435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24294.29692655077,
            "unit": "ns/iter",
            "extra": "iterations: 28795\ncpu: 24293.849626671334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113209.49442198323,
            "unit": "ns/iter",
            "extra": "iterations: 6185\ncpu: 113207.67987065489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94067.00106509597,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 94047.03767807256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93917.84433709057,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 93912.77509393448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91671.44978913589,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 91669.96573537089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 143260.86485382082,
            "unit": "ns/iter",
            "extra": "iterations: 4891\ncpu: 143259.84461255395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 576179.6592593067,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 576145.349794237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 467672.0060120027,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467665.130260517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478186.37072504335,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478142.68125855515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 464742.40622925694,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 464738.83366468095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 297039.03264096234,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 297036.1593895728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 462064.76567653875,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462046.006600655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23662.01191039933,
            "unit": "ns/iter",
            "extra": "iterations: 29554\ncpu: 23661.808892197318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112996.7753880833,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 112995.16494178693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93406.09925292607,
            "unit": "ns/iter",
            "extra": "iterations: 7496\ncpu: 93400.20010672335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93804.87521850823,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 93607.54336426046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93377.31377788898,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 93372.28384337663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 142436.88877591654,
            "unit": "ns/iter",
            "extra": "iterations: 4918\ncpu: 142432.5945506312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 574592.672682467,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 574595.406070553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 465696.28381958045,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 465656.0344827632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 473256.7471264203,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473246.17985124164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 457002.82679735764,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 456980.8496732022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 293201.6085678055,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 293189.24821503734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 458944.7119314033,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 458946.27554383187 ns\nthreads: 1"
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
        "date": 1702394269129,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7766.427015614622,
            "unit": "ns/iter",
            "extra": "iterations: 89985\ncpu: 7766.156581652498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56550.68340000753,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56550.44 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103767.2275036293,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 103768.8558297049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152057.90672565193,
            "unit": "ns/iter",
            "extra": "iterations: 5650\ncpu: 152056.90265486727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 200427.42151431207,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 200425.13850415524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 248287.296593177,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 248279.81677641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 295745.92257843143,
            "unit": "ns/iter",
            "extra": "iterations: 2932\ncpu: 295732.2646657571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 343505.9053254367,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 343496.37080867856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 392430.35042735713,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 392421.5024741334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6467.567810216042,
            "unit": "ns/iter",
            "extra": "iterations: 108376\ncpu: 6467.2390566176955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5291.244136033271,
            "unit": "ns/iter",
            "extra": "iterations: 132291\ncpu: 5291.079514101488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5325.78363900476,
            "unit": "ns/iter",
            "extra": "iterations: 132168\ncpu: 5325.871617940802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5355.493848669182,
            "unit": "ns/iter",
            "extra": "iterations: 130297\ncpu: 5355.3642831377665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8505.739528939768,
            "unit": "ns/iter",
            "extra": "iterations: 82155\ncpu: 8505.605258353124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27660.586586111353,
            "unit": "ns/iter",
            "extra": "iterations: 29462\ncpu: 27658.974271943553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133520.9148770497,
            "unit": "ns/iter",
            "extra": "iterations: 6426\ncpu: 133515.32835356385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106446.93170489579,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 106443.79361914242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105734.52095956319,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 105731.97724743433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 103430.24061895465,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 103426.04771115404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 233372.953838022,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 233363.2814560797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1866765.6052105236,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1866736.07214429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1471874.5784469761,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471828.5261489702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1466728.076923137,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1466638.2978723391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1431934.9660494772,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1431889.1975308617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 802700.5451389296,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 802671.4409722234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1420214.33486247,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1420192.9663608568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34211.55588685922,
            "unit": "ns/iter",
            "extra": "iterations: 24147\ncpu: 34209.62852528267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167065.4899962373,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 167061.38165345375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134633.57543204614,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 134627.5883543518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137592.95181108214,
            "unit": "ns/iter",
            "extra": "iterations: 6267\ncpu: 137587.8251156855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128699.46025545587,
            "unit": "ns/iter",
            "extra": "iterations: 6655\ncpu: 128694.99624342582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 257757.38004750697,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 257754.66152018975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1912098.2254097816,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1912048.3606557434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1514101.713355069,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1514063.192182414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1480513.2807017192,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1480470.0159489578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1487768.0048000913,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1487710.720000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 853932.5459559129,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 853884.0992647051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1454139.9170578278,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1454080.5946791898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5268974.8799991775,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5268830.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3146349.402026996,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3146338.5135135297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26980.327186060094,
            "unit": "ns/iter",
            "extra": "iterations: 30420\ncpu: 26980.259697567453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142338.16187169528,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 142337.96296296336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106858.91828599534,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 106854.21026407639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101602.01670023167,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 101599.41963756963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103778.2573573996,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 103772.06007024297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 220078.32615306502,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 220069.61479979625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1877569.1405624065,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1877558.8353413695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1470238.742495933,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1470261.2954186387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1472383.9290222256,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1472322.7129337469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1447570.8806202412,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1447557.6744186005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 794877.3589088053,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 794860.4433077577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1420856.6575342703,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1420860.121765598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.536606594414,
            "unit": "ns/iter",
            "extra": "iterations: 245871\ncpu: 2882.4383518186423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19242.442074089755,
            "unit": "ns/iter",
            "extra": "iterations: 36469\ncpu: 19242.53475554589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14988.661261723142,
            "unit": "ns/iter",
            "extra": "iterations: 46809\ncpu: 14987.267405840841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15591.654266344638,
            "unit": "ns/iter",
            "extra": "iterations: 46316\ncpu: 15591.71128767609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11693.010765609215,
            "unit": "ns/iter",
            "extra": "iterations: 61585\ncpu: 11692.865145733504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71840.84061828392,
            "unit": "ns/iter",
            "extra": "iterations: 9769\ncpu: 71839.6970007159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 129493.13894541463,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129487.10453283919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31295.893755863664,
            "unit": "ns/iter",
            "extra": "iterations: 22373\ncpu: 31295.47222098062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31227.09227065824,
            "unit": "ns/iter",
            "extra": "iterations: 22434\ncpu: 31226.571275741997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30869.768620185605,
            "unit": "ns/iter",
            "extra": "iterations: 22677\ncpu: 30869.38307536255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62764.94841234816,
            "unit": "ns/iter",
            "extra": "iterations: 11243\ncpu: 62763.5061816241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58482.883992653144,
            "unit": "ns/iter",
            "extra": "iterations: 11982\ncpu: 58481.83107995318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23563.220394407144,
            "unit": "ns/iter",
            "extra": "iterations: 29665\ncpu: 23562.808022922498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112720.50718786633,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 112719.04377321899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92421.04227771041,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 92422.4996697059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93066.37471753269,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 93061.33191545881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91042.39867411443,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 91038.89249967512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 141905.50840252425,
            "unit": "ns/iter",
            "extra": "iterations: 4939\ncpu: 141905.34521158287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 551035.0952006225,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 551023.2887490111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 467262.27745288203,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 467254.71085120144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 454553.2281270376,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 454525.9235256021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 447887.8318414653,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447869.2455242889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 295312.38010953274,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 295307.079646016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 444702.4917512465,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 444702.91878172284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23908.846054465605,
            "unit": "ns/iter",
            "extra": "iterations: 29413\ncpu: 23907.59868085536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111748.29605264206,
            "unit": "ns/iter",
            "extra": "iterations: 6232\ncpu: 111743.87034659764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94088.84429530612,
            "unit": "ns/iter",
            "extra": "iterations: 7450\ncpu: 94084.13422818857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93762.50103661316,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 93757.77470628858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94217.93230853016,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 94214.87324703268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 140629.901913387,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 140632.14501510785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 557082.1200317853,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 557060.4133545341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 456471.7787839796,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 456478.91332470893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449372.3496458101,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 449375.1448808805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 451277.581619503,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 451270.82262210577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292563.9100794321,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 292559.1802593083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 446839.30528994027,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 446813.2568515037 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}