window.BENCHMARK_DATA = {
  "lastUpdate": 1702394242503,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 20.04 Debug c++-17": [
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
        "date": 1702394239401,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7413.249602273612,
            "unit": "ns/iter",
            "extra": "iterations: 94286\ncpu: 7412.790870330696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54481.10309999948,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54475.71 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100352.3519644474,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 100345.1239476146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145577.83418021377,
            "unit": "ns/iter",
            "extra": "iterations: 5904\ncpu: 145569.0887533875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193496.88582157405,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 193479.9911660777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235942.7850287922,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235924.23910063063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280931.26421840704,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 280915.6321091974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 327749.17353499355,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 327724.57466918713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 370448.5107204414,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 370436.6638078904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6006.762421630559,
            "unit": "ns/iter",
            "extra": "iterations: 116913\ncpu: 6006.640835493053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4950.770793502489,
            "unit": "ns/iter",
            "extra": "iterations: 141222\ncpu: 4950.6804888756815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5011.515646522599,
            "unit": "ns/iter",
            "extra": "iterations: 139392\ncpu: 5011.4095500459025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5056.616930123827,
            "unit": "ns/iter",
            "extra": "iterations: 138416\ncpu: 5056.326580742112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7831.440870684621,
            "unit": "ns/iter",
            "extra": "iterations: 89355\ncpu: 7831.240557327514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25565.08593232696,
            "unit": "ns/iter",
            "extra": "iterations: 31711\ncpu: 25564.031408659444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129065.51399339485,
            "unit": "ns/iter",
            "extra": "iterations: 6646\ncpu: 129059.02798675888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98785.12891259724,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 98781.40505448639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98409.79745812337,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 98406.26227614123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93155.30160122867,
            "unit": "ns/iter",
            "extra": "iterations: 9118\ncpu: 93154.90239087521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203643.48950072314,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 203635.34764348983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1750712.7102271712,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1750685.6060606034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1376908.7674075274,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376887.851851852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1389212.2185629166,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1389089.82035928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1355714.975182435,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1355617.2262773702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 761106.2074074429,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 761029.9588477353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1332606.691092004,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1332521.8390804618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33752.944444446,
            "unit": "ns/iter",
            "extra": "iterations: 24624\ncpu: 33750.446718648534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156188.16763425645,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 156178.3200290275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126266.18095238396,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 126253.74358974404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128793.69138756495,
            "unit": "ns/iter",
            "extra": "iterations: 6688\ncpu: 128787.21590909093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121085.79602838279,
            "unit": "ns/iter",
            "extra": "iterations: 7050\ncpu: 121076.34042553203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222943.1178599202,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 222929.18066683988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1794065.5297504556,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1793935.3166986597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1415897.812499969,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1415808.6890243993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1433787.4316435687,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1433701.6897081395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406241.061933475,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1406121.903323267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 796821.0396894031,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 796786.4538395187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1372761.6381093534,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1372666.7651403262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6541008.062937224,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6540658.741258745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3017364.4401294896,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3017148.543689318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25094.033171350344,
            "unit": "ns/iter",
            "extra": "iterations: 33131\ncpu: 25092.8133771994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137865.65413534222,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 137857.0148776202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102428.63054893671,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 102422.44630071527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97172.26838360718,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 97166.293911668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92866.25318662211,
            "unit": "ns/iter",
            "extra": "iterations: 9179\ncpu: 92860.55125830711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197448.08617142553,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 197434.33142857123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1770060.5901328935,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769957.115749518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1381625.8370370297,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1381520.4444444433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1391291.1513353013,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1391225.519287833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1408270.2661765472,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1408181.1764705817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 758126.2901878874,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 758079.3319415419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1338773.5971223298,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1338694.8201438761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2808.244563973054,
            "unit": "ns/iter",
            "extra": "iterations: 248941\ncpu: 2808.09147549019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17817.12304284678,
            "unit": "ns/iter",
            "extra": "iterations: 39279\ncpu: 17816.105297996473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14240.658650021229,
            "unit": "ns/iter",
            "extra": "iterations: 49023\ncpu: 14240.017950757727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14307.020422349016,
            "unit": "ns/iter",
            "extra": "iterations: 48917\ncpu: 14306.515117443945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10974.886877617519,
            "unit": "ns/iter",
            "extra": "iterations: 64249\ncpu: 10974.253295771055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67975.26054494752,
            "unit": "ns/iter",
            "extra": "iterations: 10313\ncpu: 67970.72626781775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122123.63674394847,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 122117.1692522218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29511.9588294924,
            "unit": "ns/iter",
            "extra": "iterations: 23682\ncpu: 29510.2398446077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29849.33133945819,
            "unit": "ns/iter",
            "extra": "iterations: 23405\ncpu: 29847.271950437756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29219.664132661313,
            "unit": "ns/iter",
            "extra": "iterations: 23941\ncpu: 29217.76868134173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60721.35463756866,
            "unit": "ns/iter",
            "extra": "iterations: 11547\ncpu: 60717.112669957176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55921.5847178733,
            "unit": "ns/iter",
            "extra": "iterations: 12459\ncpu: 55921.42226502935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21391.659169603536,
            "unit": "ns/iter",
            "extra": "iterations: 32635\ncpu: 21390.871763443913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112967.62588457782,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 112963.42192168633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88680.25937222487,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 88676.03253272286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89122.69642175396,
            "unit": "ns/iter",
            "extra": "iterations: 7853\ncpu: 89119.62307398467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88387.3507067109,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88381.46138313971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132833.37258614184,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 132822.26429382802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 526630.8078077871,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526613.1381381383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 429564.1017780504,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429529.4911097473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435540.77128655376,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 435521.4418893656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 424661.86832519475,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424652.3665048503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278133.16924909025,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 278124.03655144793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424353.76213593397,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424342.23300970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21876.81254705323,
            "unit": "ns/iter",
            "extra": "iterations: 31880\ncpu: 21876.207653701706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109008.77644306379,
            "unit": "ns/iter",
            "extra": "iterations: 6410\ncpu: 109003.5725429001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89728.2172078829,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 89725.38992585147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89987.88460550398,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 89983.8473400151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88180.94700139057,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 88179.44719158213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132976.27950663315,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 132969.9810246691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 522750.6940912816,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 522732.90949887934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426271.30689442647,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 426254.1183648524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430439.3690036371,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 430430.9348093533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 426946.491473829,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 426920.0974421424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 283221.9882922769,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 283217.35970932513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426184.9300486399,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426159.7931873446 ns\nthreads: 1"
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
        "date": 1702394239401,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7413.249602273612,
            "unit": "ns/iter",
            "extra": "iterations: 94286\ncpu: 7412.790870330696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54481.10309999948,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54475.71 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100352.3519644474,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 100345.1239476146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145577.83418021377,
            "unit": "ns/iter",
            "extra": "iterations: 5904\ncpu: 145569.0887533875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193496.88582157405,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 193479.9911660777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235942.7850287922,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235924.23910063063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280931.26421840704,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 280915.6321091974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 327749.17353499355,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 327724.57466918713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 370448.5107204414,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 370436.6638078904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6006.762421630559,
            "unit": "ns/iter",
            "extra": "iterations: 116913\ncpu: 6006.640835493053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4950.770793502489,
            "unit": "ns/iter",
            "extra": "iterations: 141222\ncpu: 4950.6804888756815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5011.515646522599,
            "unit": "ns/iter",
            "extra": "iterations: 139392\ncpu: 5011.4095500459025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5056.616930123827,
            "unit": "ns/iter",
            "extra": "iterations: 138416\ncpu: 5056.326580742112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7831.440870684621,
            "unit": "ns/iter",
            "extra": "iterations: 89355\ncpu: 7831.240557327514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25565.08593232696,
            "unit": "ns/iter",
            "extra": "iterations: 31711\ncpu: 25564.031408659444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129065.51399339485,
            "unit": "ns/iter",
            "extra": "iterations: 6646\ncpu: 129059.02798675888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98785.12891259724,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 98781.40505448639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98409.79745812337,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 98406.26227614123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93155.30160122867,
            "unit": "ns/iter",
            "extra": "iterations: 9118\ncpu: 93154.90239087521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203643.48950072314,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 203635.34764348983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1750712.7102271712,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1750685.6060606034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1376908.7674075274,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376887.851851852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1389212.2185629166,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1389089.82035928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1355714.975182435,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1355617.2262773702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 761106.2074074429,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 761029.9588477353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1332606.691092004,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1332521.8390804618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33752.944444446,
            "unit": "ns/iter",
            "extra": "iterations: 24624\ncpu: 33750.446718648534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156188.16763425645,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 156178.3200290275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126266.18095238396,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 126253.74358974404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128793.69138756495,
            "unit": "ns/iter",
            "extra": "iterations: 6688\ncpu: 128787.21590909093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121085.79602838279,
            "unit": "ns/iter",
            "extra": "iterations: 7050\ncpu: 121076.34042553203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222943.1178599202,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 222929.18066683988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1794065.5297504556,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1793935.3166986597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1415897.812499969,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1415808.6890243993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1433787.4316435687,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1433701.6897081395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406241.061933475,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1406121.903323267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 796821.0396894031,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 796786.4538395187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1372761.6381093534,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1372666.7651403262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6541008.062937224,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6540658.741258745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3017364.4401294896,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3017148.543689318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25094.033171350344,
            "unit": "ns/iter",
            "extra": "iterations: 33131\ncpu: 25092.8133771994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137865.65413534222,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 137857.0148776202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102428.63054893671,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 102422.44630071527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97172.26838360718,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 97166.293911668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92866.25318662211,
            "unit": "ns/iter",
            "extra": "iterations: 9179\ncpu: 92860.55125830711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197448.08617142553,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 197434.33142857123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1770060.5901328935,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769957.115749518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1381625.8370370297,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1381520.4444444433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1391291.1513353013,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1391225.519287833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1408270.2661765472,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1408181.1764705817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 758126.2901878874,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 758079.3319415419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1338773.5971223298,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1338694.8201438761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2808.244563973054,
            "unit": "ns/iter",
            "extra": "iterations: 248941\ncpu: 2808.09147549019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17817.12304284678,
            "unit": "ns/iter",
            "extra": "iterations: 39279\ncpu: 17816.105297996473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14240.658650021229,
            "unit": "ns/iter",
            "extra": "iterations: 49023\ncpu: 14240.017950757727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14307.020422349016,
            "unit": "ns/iter",
            "extra": "iterations: 48917\ncpu: 14306.515117443945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10974.886877617519,
            "unit": "ns/iter",
            "extra": "iterations: 64249\ncpu: 10974.253295771055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67975.26054494752,
            "unit": "ns/iter",
            "extra": "iterations: 10313\ncpu: 67970.72626781775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122123.63674394847,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 122117.1692522218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29511.9588294924,
            "unit": "ns/iter",
            "extra": "iterations: 23682\ncpu: 29510.2398446077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29849.33133945819,
            "unit": "ns/iter",
            "extra": "iterations: 23405\ncpu: 29847.271950437756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29219.664132661313,
            "unit": "ns/iter",
            "extra": "iterations: 23941\ncpu: 29217.76868134173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60721.35463756866,
            "unit": "ns/iter",
            "extra": "iterations: 11547\ncpu: 60717.112669957176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55921.5847178733,
            "unit": "ns/iter",
            "extra": "iterations: 12459\ncpu: 55921.42226502935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21391.659169603536,
            "unit": "ns/iter",
            "extra": "iterations: 32635\ncpu: 21390.871763443913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112967.62588457782,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 112963.42192168633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88680.25937222487,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 88676.03253272286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89122.69642175396,
            "unit": "ns/iter",
            "extra": "iterations: 7853\ncpu: 89119.62307398467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88387.3507067109,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88381.46138313971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132833.37258614184,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 132822.26429382802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 526630.8078077871,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526613.1381381383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 429564.1017780504,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429529.4911097473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435540.77128655376,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 435521.4418893656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 424661.86832519475,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424652.3665048503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278133.16924909025,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 278124.03655144793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424353.76213593397,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424342.23300970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21876.81254705323,
            "unit": "ns/iter",
            "extra": "iterations: 31880\ncpu: 21876.207653701706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109008.77644306379,
            "unit": "ns/iter",
            "extra": "iterations: 6410\ncpu: 109003.5725429001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89728.2172078829,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 89725.38992585147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89987.88460550398,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 89983.8473400151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88180.94700139057,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 88179.44719158213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132976.27950663315,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 132969.9810246691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 522750.6940912816,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 522732.90949887934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426271.30689442647,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 426254.1183648524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430439.3690036371,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 430430.9348093533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 426946.491473829,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 426920.0974421424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 283221.9882922769,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 283217.35970932513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426184.9300486399,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426159.7931873446 ns\nthreads: 1"
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
        "date": 1702394239401,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7413.249602273612,
            "unit": "ns/iter",
            "extra": "iterations: 94286\ncpu: 7412.790870330696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54481.10309999948,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54475.71 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100352.3519644474,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 100345.1239476146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145577.83418021377,
            "unit": "ns/iter",
            "extra": "iterations: 5904\ncpu: 145569.0887533875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193496.88582157405,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 193479.9911660777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235942.7850287922,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235924.23910063063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280931.26421840704,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 280915.6321091974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 327749.17353499355,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 327724.57466918713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 370448.5107204414,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 370436.6638078904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6006.762421630559,
            "unit": "ns/iter",
            "extra": "iterations: 116913\ncpu: 6006.640835493053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4950.770793502489,
            "unit": "ns/iter",
            "extra": "iterations: 141222\ncpu: 4950.6804888756815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5011.515646522599,
            "unit": "ns/iter",
            "extra": "iterations: 139392\ncpu: 5011.4095500459025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5056.616930123827,
            "unit": "ns/iter",
            "extra": "iterations: 138416\ncpu: 5056.326580742112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7831.440870684621,
            "unit": "ns/iter",
            "extra": "iterations: 89355\ncpu: 7831.240557327514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25565.08593232696,
            "unit": "ns/iter",
            "extra": "iterations: 31711\ncpu: 25564.031408659444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129065.51399339485,
            "unit": "ns/iter",
            "extra": "iterations: 6646\ncpu: 129059.02798675888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98785.12891259724,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 98781.40505448639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98409.79745812337,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 98406.26227614123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93155.30160122867,
            "unit": "ns/iter",
            "extra": "iterations: 9118\ncpu: 93154.90239087521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203643.48950072314,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 203635.34764348983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1750712.7102271712,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1750685.6060606034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1376908.7674075274,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376887.851851852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1389212.2185629166,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1389089.82035928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1355714.975182435,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1355617.2262773702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 761106.2074074429,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 761029.9588477353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1332606.691092004,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1332521.8390804618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33752.944444446,
            "unit": "ns/iter",
            "extra": "iterations: 24624\ncpu: 33750.446718648534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156188.16763425645,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 156178.3200290275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126266.18095238396,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 126253.74358974404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128793.69138756495,
            "unit": "ns/iter",
            "extra": "iterations: 6688\ncpu: 128787.21590909093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121085.79602838279,
            "unit": "ns/iter",
            "extra": "iterations: 7050\ncpu: 121076.34042553203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222943.1178599202,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 222929.18066683988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1794065.5297504556,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1793935.3166986597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1415897.812499969,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1415808.6890243993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1433787.4316435687,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1433701.6897081395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406241.061933475,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1406121.903323267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 796821.0396894031,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 796786.4538395187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1372761.6381093534,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1372666.7651403262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6541008.062937224,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6540658.741258745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3017364.4401294896,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3017148.543689318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25094.033171350344,
            "unit": "ns/iter",
            "extra": "iterations: 33131\ncpu: 25092.8133771994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137865.65413534222,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 137857.0148776202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102428.63054893671,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 102422.44630071527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97172.26838360718,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 97166.293911668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92866.25318662211,
            "unit": "ns/iter",
            "extra": "iterations: 9179\ncpu: 92860.55125830711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197448.08617142553,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 197434.33142857123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1770060.5901328935,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769957.115749518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1381625.8370370297,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1381520.4444444433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1391291.1513353013,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1391225.519287833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1408270.2661765472,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1408181.1764705817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 758126.2901878874,
            "unit": "ns/iter",
            "extra": "iterations: 958\ncpu: 758079.3319415419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1338773.5971223298,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1338694.8201438761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2808.244563973054,
            "unit": "ns/iter",
            "extra": "iterations: 248941\ncpu: 2808.09147549019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17817.12304284678,
            "unit": "ns/iter",
            "extra": "iterations: 39279\ncpu: 17816.105297996473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14240.658650021229,
            "unit": "ns/iter",
            "extra": "iterations: 49023\ncpu: 14240.017950757727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14307.020422349016,
            "unit": "ns/iter",
            "extra": "iterations: 48917\ncpu: 14306.515117443945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10974.886877617519,
            "unit": "ns/iter",
            "extra": "iterations: 64249\ncpu: 10974.253295771055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67975.26054494752,
            "unit": "ns/iter",
            "extra": "iterations: 10313\ncpu: 67970.72626781775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122123.63674394847,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 122117.1692522218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29511.9588294924,
            "unit": "ns/iter",
            "extra": "iterations: 23682\ncpu: 29510.2398446077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29849.33133945819,
            "unit": "ns/iter",
            "extra": "iterations: 23405\ncpu: 29847.271950437756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29219.664132661313,
            "unit": "ns/iter",
            "extra": "iterations: 23941\ncpu: 29217.76868134173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60721.35463756866,
            "unit": "ns/iter",
            "extra": "iterations: 11547\ncpu: 60717.112669957176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55921.5847178733,
            "unit": "ns/iter",
            "extra": "iterations: 12459\ncpu: 55921.42226502935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21391.659169603536,
            "unit": "ns/iter",
            "extra": "iterations: 32635\ncpu: 21390.871763443913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112967.62588457782,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 112963.42192168633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88680.25937222487,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 88676.03253272286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89122.69642175396,
            "unit": "ns/iter",
            "extra": "iterations: 7853\ncpu: 89119.62307398467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88387.3507067109,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88381.46138313971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132833.37258614184,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 132822.26429382802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 526630.8078077871,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526613.1381381383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 429564.1017780504,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429529.4911097473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435540.77128655376,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 435521.4418893656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 424661.86832519475,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424652.3665048503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278133.16924909025,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 278124.03655144793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424353.76213593397,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424342.23300970637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21876.81254705323,
            "unit": "ns/iter",
            "extra": "iterations: 31880\ncpu: 21876.207653701706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109008.77644306379,
            "unit": "ns/iter",
            "extra": "iterations: 6410\ncpu: 109003.5725429001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89728.2172078829,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 89725.38992585147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89987.88460550398,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 89983.8473400151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88180.94700139057,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 88179.44719158213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132976.27950663315,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 132969.9810246691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 522750.6940912816,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 522732.90949887934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426271.30689442647,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 426254.1183648524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430439.3690036371,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 430430.9348093533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 426946.491473829,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 426920.0974421424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 283221.9882922769,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 283217.35970932513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 426184.9300486399,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426159.7931873446 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}