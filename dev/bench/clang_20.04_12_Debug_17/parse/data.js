window.BENCHMARK_DATA = {
  "lastUpdate": 1702394280441,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-12 20.04 Debug c++-17": [
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
        "date": 1702394278462,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7536.4812460057265,
            "unit": "ns/iter",
            "extra": "iterations: 92327\ncpu: 7536.289492781095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53783.60690000364,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53778.43 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99021.67443470431,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 99018.47023534839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143773.3004679257,
            "unit": "ns/iter",
            "extra": "iterations: 5984\ncpu: 143772.192513369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188980.1061696218,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 188972.64006976242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233642.3407127294,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 233635.9071274299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278197.4672657273,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 278194.7689345314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323271.46562615864,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 323259.606094389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368529.5678073732,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 368529.48880439356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5960.4314240854055,
            "unit": "ns/iter",
            "extra": "iterations: 117184\ncpu: 5959.997951938825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5006.873949999999,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5006.354000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5031.220144029938,
            "unit": "ns/iter",
            "extra": "iterations: 138582\ncpu: 5031.185868294577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5045.834878244025,
            "unit": "ns/iter",
            "extra": "iterations: 138843\ncpu: 5045.746634688102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7684.041509310088,
            "unit": "ns/iter",
            "extra": "iterations: 91618\ncpu: 7683.695343709767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26096.73155073213,
            "unit": "ns/iter",
            "extra": "iterations: 31153\ncpu: 26095.307033030487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139007.20303911102,
            "unit": "ns/iter",
            "extra": "iterations: 6186\ncpu: 139003.79890074357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108250.77031130984,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 108250.62009617819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107371.22364457365,
            "unit": "ns/iter",
            "extra": "iterations: 7968\ncpu: 107368.73744979905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104130.50518862222,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 104130.16725674557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199574.1856274034,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 199570.64654201432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1748728.9132075277,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1748697.7358490585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1392486.7346326539,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1392440.7796101926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1384853.4940298598,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1384802.537313436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1380275.343239222,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1380242.0505200604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 767520.3037344235,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 767511.7012448135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1339005.478323648,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1338979.3352601137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35214.45966916474,
            "unit": "ns/iter",
            "extra": "iterations: 23456\ncpu: 35214.009208731346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174610.3462861769,
            "unit": "ns/iter",
            "extra": "iterations: 4941\ncpu: 174611.03015583943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136033.7969817248,
            "unit": "ns/iter",
            "extra": "iterations: 6295\ncpu: 136027.59332803843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135912.25184834207,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 135910.88563787923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132644.96348443802,
            "unit": "ns/iter",
            "extra": "iterations: 6463\ncpu: 132641.45133838808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 218402.02522704675,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 218402.5983854689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1782689.266794535,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1782584.0690978838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1430739.7338461669,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1430696.7692307748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1424821.473200481,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424722.0520673802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406809.67069492,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1406755.5891238705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 787171.8475867714,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 787113.8018628311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1371407.2974964213,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1371330.0441826165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6520110.2517479025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6519769.230769237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3018386.8090612227,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3018164.0776699027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28894.044727759825,
            "unit": "ns/iter",
            "extra": "iterations: 28394\ncpu: 28894.00577586811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148961.9745630707,
            "unit": "ns/iter",
            "extra": "iterations: 5779\ncpu: 148957.7435542478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113257.721391078,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 113256.52230971139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110797.79515446853,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 110788.02717600303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109025.98690733741,
            "unit": "ns/iter",
            "extra": "iterations: 7867\ncpu: 109019.21952459628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189445.957423577,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 189429.75982532778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1764136.379245403,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1764056.0377358436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1390267.2901786384,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1390203.7202380886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1397367.7901785006,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1397319.0476190515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1365330.5894428042,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365222.2873900277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 768201.9265676237,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 768178.3828382873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1341011.5775861908,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1340907.6149425374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2931.7305403476616,
            "unit": "ns/iter",
            "extra": "iterations: 239457\ncpu: 2931.583541095071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18452.76447805163,
            "unit": "ns/iter",
            "extra": "iterations: 37954\ncpu: 18451.314749433484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14991.014243183925,
            "unit": "ns/iter",
            "extra": "iterations: 46689\ncpu: 14991.203495470163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14734.478584025323,
            "unit": "ns/iter",
            "extra": "iterations: 47628\ncpu: 14733.698664650976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11094.394536383727,
            "unit": "ns/iter",
            "extra": "iterations: 63145\ncpu: 11093.820571699996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68084.15229857682,
            "unit": "ns/iter",
            "extra": "iterations: 10289\ncpu: 68079.32743706832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122940.55220214024,
            "unit": "ns/iter",
            "extra": "iterations: 5699\ncpu: 122929.21565186848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29679.646824386935,
            "unit": "ns/iter",
            "extra": "iterations: 23586\ncpu: 29677.482404816463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29566.001310393058,
            "unit": "ns/iter",
            "extra": "iterations: 23657\ncpu: 29564.437587183587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29723.89816311071,
            "unit": "ns/iter",
            "extra": "iterations: 23518\ncpu: 29722.450888680843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60221.37192710745,
            "unit": "ns/iter",
            "extra": "iterations: 11634\ncpu: 60216.64088017883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55357.086322961855,
            "unit": "ns/iter",
            "extra": "iterations: 12627\ncpu: 55356.81476201795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22482.0821882518,
            "unit": "ns/iter",
            "extra": "iterations: 31075\ncpu: 22481.432019308155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109454.6764752008,
            "unit": "ns/iter",
            "extra": "iterations: 6389\ncpu: 109448.19220535377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88270.8539538509,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 88265.65771219709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89647.41817248777,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 89638.9209278473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88692.04346724428,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 88689.15219870764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130302.03430916595,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130293.2500466163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525969.572072034,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 525936.1861861864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 434382.9999999882,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434372.8739913135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436889.61475921376,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 436879.8624140043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 429908.4569495606,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 429875.4612546113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273960.46015621955,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 273937.65625000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 423579.31719134585,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 423532.44552057626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22339.118630522487,
            "unit": "ns/iter",
            "extra": "iterations: 31282\ncpu: 22338.165718304685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112184.80362876522,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 112175.6422607579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91006.64168189294,
            "unit": "ns/iter",
            "extra": "iterations: 7658\ncpu: 91004.25698615766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93472.336093593,
            "unit": "ns/iter",
            "extra": "iterations: 7608\ncpu: 93258.88538380573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90187.04417825956,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 90187.1458011341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130700.39750278923,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130700.09317927671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 528919.7167674061,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528916.9184289965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 435606.9153702438,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 435581.08276291017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 434852.7928039907,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 434811.78660049586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430493.4458127942,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 430498.2758620699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 286172.04379859904,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 286164.0605812474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 429259.8946078692,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 429247.303921563 ns\nthreads: 1"
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
        "date": 1702394278462,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7536.4812460057265,
            "unit": "ns/iter",
            "extra": "iterations: 92327\ncpu: 7536.289492781095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53783.60690000364,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53778.43 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99021.67443470431,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 99018.47023534839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143773.3004679257,
            "unit": "ns/iter",
            "extra": "iterations: 5984\ncpu: 143772.192513369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188980.1061696218,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 188972.64006976242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233642.3407127294,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 233635.9071274299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278197.4672657273,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 278194.7689345314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323271.46562615864,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 323259.606094389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368529.5678073732,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 368529.48880439356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5960.4314240854055,
            "unit": "ns/iter",
            "extra": "iterations: 117184\ncpu: 5959.997951938825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5006.873949999999,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5006.354000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5031.220144029938,
            "unit": "ns/iter",
            "extra": "iterations: 138582\ncpu: 5031.185868294577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5045.834878244025,
            "unit": "ns/iter",
            "extra": "iterations: 138843\ncpu: 5045.746634688102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7684.041509310088,
            "unit": "ns/iter",
            "extra": "iterations: 91618\ncpu: 7683.695343709767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26096.73155073213,
            "unit": "ns/iter",
            "extra": "iterations: 31153\ncpu: 26095.307033030487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139007.20303911102,
            "unit": "ns/iter",
            "extra": "iterations: 6186\ncpu: 139003.79890074357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108250.77031130984,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 108250.62009617819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107371.22364457365,
            "unit": "ns/iter",
            "extra": "iterations: 7968\ncpu: 107368.73744979905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104130.50518862222,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 104130.16725674557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199574.1856274034,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 199570.64654201432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1748728.9132075277,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1748697.7358490585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1392486.7346326539,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1392440.7796101926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1384853.4940298598,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1384802.537313436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1380275.343239222,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1380242.0505200604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 767520.3037344235,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 767511.7012448135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1339005.478323648,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1338979.3352601137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35214.45966916474,
            "unit": "ns/iter",
            "extra": "iterations: 23456\ncpu: 35214.009208731346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174610.3462861769,
            "unit": "ns/iter",
            "extra": "iterations: 4941\ncpu: 174611.03015583943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136033.7969817248,
            "unit": "ns/iter",
            "extra": "iterations: 6295\ncpu: 136027.59332803843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135912.25184834207,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 135910.88563787923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132644.96348443802,
            "unit": "ns/iter",
            "extra": "iterations: 6463\ncpu: 132641.45133838808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 218402.02522704675,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 218402.5983854689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1782689.266794535,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1782584.0690978838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1430739.7338461669,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1430696.7692307748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1424821.473200481,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424722.0520673802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406809.67069492,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1406755.5891238705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 787171.8475867714,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 787113.8018628311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1371407.2974964213,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1371330.0441826165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6520110.2517479025,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6519769.230769237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3018386.8090612227,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3018164.0776699027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28894.044727759825,
            "unit": "ns/iter",
            "extra": "iterations: 28394\ncpu: 28894.00577586811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148961.9745630707,
            "unit": "ns/iter",
            "extra": "iterations: 5779\ncpu: 148957.7435542478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113257.721391078,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 113256.52230971139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110797.79515446853,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 110788.02717600303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109025.98690733741,
            "unit": "ns/iter",
            "extra": "iterations: 7867\ncpu: 109019.21952459628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189445.957423577,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 189429.75982532778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1764136.379245403,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1764056.0377358436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1390267.2901786384,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1390203.7202380886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1397367.7901785006,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1397319.0476190515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1365330.5894428042,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365222.2873900277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 768201.9265676237,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 768178.3828382873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1341011.5775861908,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1340907.6149425374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2931.7305403476616,
            "unit": "ns/iter",
            "extra": "iterations: 239457\ncpu: 2931.583541095071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18452.76447805163,
            "unit": "ns/iter",
            "extra": "iterations: 37954\ncpu: 18451.314749433484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14991.014243183925,
            "unit": "ns/iter",
            "extra": "iterations: 46689\ncpu: 14991.203495470163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14734.478584025323,
            "unit": "ns/iter",
            "extra": "iterations: 47628\ncpu: 14733.698664650976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11094.394536383727,
            "unit": "ns/iter",
            "extra": "iterations: 63145\ncpu: 11093.820571699996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68084.15229857682,
            "unit": "ns/iter",
            "extra": "iterations: 10289\ncpu: 68079.32743706832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122940.55220214024,
            "unit": "ns/iter",
            "extra": "iterations: 5699\ncpu: 122929.21565186848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29679.646824386935,
            "unit": "ns/iter",
            "extra": "iterations: 23586\ncpu: 29677.482404816463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29566.001310393058,
            "unit": "ns/iter",
            "extra": "iterations: 23657\ncpu: 29564.437587183587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29723.89816311071,
            "unit": "ns/iter",
            "extra": "iterations: 23518\ncpu: 29722.450888680843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60221.37192710745,
            "unit": "ns/iter",
            "extra": "iterations: 11634\ncpu: 60216.64088017883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55357.086322961855,
            "unit": "ns/iter",
            "extra": "iterations: 12627\ncpu: 55356.81476201795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22482.0821882518,
            "unit": "ns/iter",
            "extra": "iterations: 31075\ncpu: 22481.432019308155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109454.6764752008,
            "unit": "ns/iter",
            "extra": "iterations: 6389\ncpu: 109448.19220535377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88270.8539538509,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 88265.65771219709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89647.41817248777,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 89638.9209278473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88692.04346724428,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 88689.15219870764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130302.03430916595,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130293.2500466163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525969.572072034,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 525936.1861861864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 434382.9999999882,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434372.8739913135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 436889.61475921376,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 436879.8624140043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 429908.4569495606,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 429875.4612546113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273960.46015621955,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 273937.65625000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 423579.31719134585,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 423532.44552057626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22339.118630522487,
            "unit": "ns/iter",
            "extra": "iterations: 31282\ncpu: 22338.165718304685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112184.80362876522,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 112175.6422607579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91006.64168189294,
            "unit": "ns/iter",
            "extra": "iterations: 7658\ncpu: 91004.25698615766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93472.336093593,
            "unit": "ns/iter",
            "extra": "iterations: 7608\ncpu: 93258.88538380573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90187.04417825956,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 90187.1458011341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130700.39750278923,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130700.09317927671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 528919.7167674061,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528916.9184289965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 435606.9153702438,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 435581.08276291017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 434852.7928039907,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 434811.78660049586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430493.4458127942,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 430498.2758620699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 286172.04379859904,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 286164.0605812474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 429259.8946078692,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 429247.303921563 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}