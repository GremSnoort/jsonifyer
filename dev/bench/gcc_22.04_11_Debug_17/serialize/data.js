window.BENCHMARK_DATA = {
  "lastUpdate": 1702409088589,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-11 22.04 Debug c++-17": [
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
        "date": 1702397898471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7963.900675068243,
            "unit": "ns/iter",
            "extra": "iterations: 87843\ncpu: 7963.328893594254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97616.9715294328,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 97613.27866985538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 189583.72805507784,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 189536.63941480208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 284470.7694071406,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 284461.28398296767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 369491.3542832571,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 369467.5850193712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 459556.15575500287,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 459513.19957761356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553513.6380832364,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 553495.2080706183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 513961.02000001067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513947.5000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 589827.320999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589800.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6173.710988729788,
            "unit": "ns/iter",
            "extra": "iterations: 113307\ncpu: 6173.441181921689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5091.634731758138,
            "unit": "ns/iter",
            "extra": "iterations: 137488\ncpu: 5091.274147561967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5026.328470459787,
            "unit": "ns/iter",
            "extra": "iterations: 139081\ncpu: 5026.1797082275825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5168.357305852184,
            "unit": "ns/iter",
            "extra": "iterations: 135850\ncpu: 5168.217151269783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9064.76383225826,
            "unit": "ns/iter",
            "extra": "iterations: 77500\ncpu: 9064.005161290317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47407.01920665562,
            "unit": "ns/iter",
            "extra": "iterations: 17546\ncpu: 47405.04388464608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 199560.89544925187,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 199551.43523920685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163187.69697546156,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 163177.02111470408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 162539.9409979162,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 162532.53652058405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 165969.1156449515,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 165962.5604331851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 364984.8218197095,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 364971.86183656385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3072796.8534202515,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3072619.2182410513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2527364.5795148346,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2527286.522911057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2501737.3163538515,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2501597.0509383352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2548693.627717383,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2548611.684782608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1479684.880763127,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1479608.2670906237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2453210.460732975,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2453016.4921466005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10387918.368931895,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10387114.563106785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5915721.402515568,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5915518.86792453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12482689.102272622,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12460045.454545457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49440.683665624165,
            "unit": "ns/iter",
            "extra": "iterations: 16903\ncpu: 49438.04650062111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 205681.06967311547,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 205676.47339537187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 166965.25681994908,
            "unit": "ns/iter",
            "extra": "iterations: 5132\ncpu: 166957.81371784906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161815.4201775893,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 161809.88097487285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164004.03483253307,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 163992.34449760718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 379668.5822729365,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 379631.94383501314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3054937.549019589,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3054865.686274513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2521841.275204385,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2521743.0517711085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2522971.500000009,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2522903.783783788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2552373.904632015,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552236.2397820177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1481625.0652866275,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1481577.229299363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2448469.8560210643,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2448361.780104699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10589053.592232993,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10588654.368932035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5896940.843749831,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5896795.000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45597.24567093453,
            "unit": "ns/iter",
            "extra": "iterations: 18191\ncpu: 45595.21741520537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 202260.5707881058,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 202256.15856536216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 162515.949525611,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 162508.8045540801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 161679.08253068785,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 161674.220963173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 163832.76196833822,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 163819.58802212583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 372316.6304721007,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 372297.5536480661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3056080.0065358104,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3055936.6013071914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2533580.663956575,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2533424.661246628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2519585.115902953,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2519468.4636118677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2535714.5912806103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2535520.163487726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1473807.7760252159,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1473769.716088319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2450310.572178421,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2450172.440944866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2679.887654377445,
            "unit": "ns/iter",
            "extra": "iterations: 262182\ncpu: 2679.807919689383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20419.337275858787,
            "unit": "ns/iter",
            "extra": "iterations: 34242\ncpu: 20417.414286548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15942.781946339011,
            "unit": "ns/iter",
            "extra": "iterations: 43980\ncpu: 15942.598908594786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15411.489084506615,
            "unit": "ns/iter",
            "extra": "iterations: 45440\ncpu: 15410.792253521211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12154.279822323886,
            "unit": "ns/iter",
            "extra": "iterations: 57633\ncpu: 12153.785157808952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86320.91451414394,
            "unit": "ns/iter",
            "extra": "iterations: 8130\ncpu: 86316.22386223866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 193761.7199221942,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 193753.68157821786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47609.24796084523,
            "unit": "ns/iter",
            "extra": "iterations: 14712\ncpu: 47606.178629689966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47510.98332879444,
            "unit": "ns/iter",
            "extra": "iterations: 14696\ncpu: 47510.506260206705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49755.412956305234,
            "unit": "ns/iter",
            "extra": "iterations: 14464\ncpu: 49752.95907079648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 100265.52460192716,
            "unit": "ns/iter",
            "extra": "iterations: 6971\ncpu: 100264.43838760644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88958.08365164115,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 88951.93531958394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22943.263956551385,
            "unit": "ns/iter",
            "extra": "iterations: 30380\ncpu: 22942.32060566189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 112460.4587686888,
            "unit": "ns/iter",
            "extra": "iterations: 6221\ncpu: 112443.14418903775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 90428.28853857046,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 90422.48352500315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 90170.67500967847,
            "unit": "ns/iter",
            "extra": "iterations: 7751\ncpu: 90166.92039736865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 91971.61687541488,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 91968.14765985466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 171409.0243662329,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 171405.1439822791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 813607.421911425,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 813557.8088578144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 697900.4805194912,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 697864.5354645356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 688354.4084645767,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 688325.0984252047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 700517.9218436434,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700483.6673346604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 433041.1662546549,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 433022.9295426512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 676246.3694390636,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676223.6943907076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22960.058920289826,
            "unit": "ns/iter",
            "extra": "iterations: 30397\ncpu: 22959.782215350097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115381.69904353912,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115374.4887862801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 91753.85676878296,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91750.02618486632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92356.61645101805,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92351.4127277529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 92800.15612989354,
            "unit": "ns/iter",
            "extra": "iterations: 7545\ncpu: 92795.30815109499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 174602.59630277634,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 174598.72595553516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 810504.573598154,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 810464.25233646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 696251.8895522354,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 696222.985074618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 689048.6219151099,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 689009.1806515205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 702414.7021063165,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 702377.6328986981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432654.8257339153,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 432626.54590880946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 676260.0067632876,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 676244.9275362259 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397898471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7963.900675068243,
            "unit": "ns/iter",
            "extra": "iterations: 87843\ncpu: 7963.328893594254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97616.9715294328,
            "unit": "ns/iter",
            "extra": "iterations: 8781\ncpu: 97613.27866985538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 189583.72805507784,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 189536.63941480208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 284470.7694071406,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 284461.28398296767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 369491.3542832571,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 369467.5850193712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 459556.15575500287,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 459513.19957761356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553513.6380832364,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 553495.2080706183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 513961.02000001067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513947.5000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 589827.320999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589800.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6173.710988729788,
            "unit": "ns/iter",
            "extra": "iterations: 113307\ncpu: 6173.441181921689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5091.634731758138,
            "unit": "ns/iter",
            "extra": "iterations: 137488\ncpu: 5091.274147561967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5026.328470459787,
            "unit": "ns/iter",
            "extra": "iterations: 139081\ncpu: 5026.1797082275825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5168.357305852184,
            "unit": "ns/iter",
            "extra": "iterations: 135850\ncpu: 5168.217151269783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9064.76383225826,
            "unit": "ns/iter",
            "extra": "iterations: 77500\ncpu: 9064.005161290317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47407.01920665562,
            "unit": "ns/iter",
            "extra": "iterations: 17546\ncpu: 47405.04388464608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 199560.89544925187,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 199551.43523920685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163187.69697546156,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 163177.02111470408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 162539.9409979162,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 162532.53652058405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 165969.1156449515,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 165962.5604331851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 364984.8218197095,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 364971.86183656385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3072796.8534202515,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3072619.2182410513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2527364.5795148346,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2527286.522911057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2501737.3163538515,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2501597.0509383352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2548693.627717383,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2548611.684782608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1479684.880763127,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1479608.2670906237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2453210.460732975,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2453016.4921466005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10387918.368931895,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10387114.563106785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5915721.402515568,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5915518.86792453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12482689.102272622,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12460045.454545457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49440.683665624165,
            "unit": "ns/iter",
            "extra": "iterations: 16903\ncpu: 49438.04650062111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 205681.06967311547,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 205676.47339537187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 166965.25681994908,
            "unit": "ns/iter",
            "extra": "iterations: 5132\ncpu: 166957.81371784906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 161815.4201775893,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 161809.88097487285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164004.03483253307,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 163992.34449760718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 379668.5822729365,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 379631.94383501314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3054937.549019589,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3054865.686274513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2521841.275204385,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2521743.0517711085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2522971.500000009,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2522903.783783788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2552373.904632015,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2552236.2397820177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1481625.0652866275,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1481577.229299363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2448469.8560210643,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2448361.780104699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10589053.592232993,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10588654.368932035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5896940.843749831,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5896795.000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45597.24567093453,
            "unit": "ns/iter",
            "extra": "iterations: 18191\ncpu: 45595.21741520537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 202260.5707881058,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 202256.15856536216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 162515.949525611,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 162508.8045540801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 161679.08253068785,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 161674.220963173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 163832.76196833822,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 163819.58802212583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 372316.6304721007,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 372297.5536480661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3056080.0065358104,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3055936.6013071914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2533580.663956575,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2533424.661246628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2519585.115902953,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2519468.4636118677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2535714.5912806103,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2535520.163487726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1473807.7760252159,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1473769.716088319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2450310.572178421,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2450172.440944866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2679.887654377445,
            "unit": "ns/iter",
            "extra": "iterations: 262182\ncpu: 2679.807919689383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20419.337275858787,
            "unit": "ns/iter",
            "extra": "iterations: 34242\ncpu: 20417.414286548606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15942.781946339011,
            "unit": "ns/iter",
            "extra": "iterations: 43980\ncpu: 15942.598908594786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15411.489084506615,
            "unit": "ns/iter",
            "extra": "iterations: 45440\ncpu: 15410.792253521211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12154.279822323886,
            "unit": "ns/iter",
            "extra": "iterations: 57633\ncpu: 12153.785157808952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86320.91451414394,
            "unit": "ns/iter",
            "extra": "iterations: 8130\ncpu: 86316.22386223866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 193761.7199221942,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 193753.68157821786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47609.24796084523,
            "unit": "ns/iter",
            "extra": "iterations: 14712\ncpu: 47606.178629689966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47510.98332879444,
            "unit": "ns/iter",
            "extra": "iterations: 14696\ncpu: 47510.506260206705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49755.412956305234,
            "unit": "ns/iter",
            "extra": "iterations: 14464\ncpu: 49752.95907079648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 100265.52460192716,
            "unit": "ns/iter",
            "extra": "iterations: 6971\ncpu: 100264.43838760644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88958.08365164115,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 88951.93531958394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22943.263956551385,
            "unit": "ns/iter",
            "extra": "iterations: 30380\ncpu: 22942.32060566189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 112460.4587686888,
            "unit": "ns/iter",
            "extra": "iterations: 6221\ncpu: 112443.14418903775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 90428.28853857046,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 90422.48352500315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 90170.67500967847,
            "unit": "ns/iter",
            "extra": "iterations: 7751\ncpu: 90166.92039736865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 91971.61687541488,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 91968.14765985466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 171409.0243662329,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 171405.1439822791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 813607.421911425,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 813557.8088578144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 697900.4805194912,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 697864.5354645356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 688354.4084645767,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 688325.0984252047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 700517.9218436434,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700483.6673346604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 433041.1662546549,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 433022.9295426512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 676246.3694390636,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676223.6943907076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22960.058920289826,
            "unit": "ns/iter",
            "extra": "iterations: 30397\ncpu: 22959.782215350097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115381.69904353912,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115374.4887862801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 91753.85676878296,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91750.02618486632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92356.61645101805,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92351.4127277529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 92800.15612989354,
            "unit": "ns/iter",
            "extra": "iterations: 7545\ncpu: 92795.30815109499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 174602.59630277634,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 174598.72595553516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 810504.573598154,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 810464.25233646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 696251.8895522354,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 696222.985074618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 689048.6219151099,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 689009.1806515205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 702414.7021063165,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 702377.6328986981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 432654.8257339153,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 432626.54590880946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 676260.0067632876,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 676244.9275362259 ns\nthreads: 1"
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
        "date": 1702409088280,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7634.412213990436,
            "unit": "ns/iter",
            "extra": "iterations: 91649\ncpu: 7634.386627240888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 90369.1950058224,
            "unit": "ns/iter",
            "extra": "iterations: 9451\ncpu: 90369.68574753996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 175618.58634458666,
            "unit": "ns/iter",
            "extra": "iterations: 5009\ncpu: 175615.91135955276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 262419.8570994109,
            "unit": "ns/iter",
            "extra": "iterations: 3289\ncpu: 262417.3304955914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 340439.0389816928,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 340437.3508353223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 423726.29689019127,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 423712.09912536456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 507913.06703230145,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 507903.22973796504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 600913.8006802737,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 600903.3333333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 550342.9710000205,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550346.7000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5623.69435887553,
            "unit": "ns/iter",
            "extra": "iterations: 124656\ncpu: 5623.621807213452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4742.336374720482,
            "unit": "ns/iter",
            "extra": "iterations: 147630\ncpu: 4742.2759601707085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4710.276781441689,
            "unit": "ns/iter",
            "extra": "iterations: 148377\ncpu: 4710.254958652625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4760.2674240869965,
            "unit": "ns/iter",
            "extra": "iterations: 146550\ncpu: 4760.292732855684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8415.299137544842,
            "unit": "ns/iter",
            "extra": "iterations: 82671\ncpu: 8415.088725187807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45332.1558341997,
            "unit": "ns/iter",
            "extra": "iterations: 18263\ncpu: 45331.44609319381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195333.38022126496,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 195333.16775795902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 154588.74304683806,
            "unit": "ns/iter",
            "extra": "iterations: 5573\ncpu: 154589.71828458615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 152582.01753454158,
            "unit": "ns/iter",
            "extra": "iterations: 5646\ncpu: 152581.4913212894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 155239.44062612558,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 155237.8373515654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 370326.643252439,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 370320.47679863736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2748575.5680473205,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2748545.266272188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2317716.2014926537,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2317675.1243781056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2281130.254901988,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2281134.8039215626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2326290.425000082,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2326285.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1367561.039647521,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1367520.558002933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2227302.1947115925,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2227297.596153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9445692.651785314,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9445410.714285713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5370335.508571316,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 5370099.428571434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11062204.824742666,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11061813.402061842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 45663.30834809742,
            "unit": "ns/iter",
            "extra": "iterations: 18064\ncpu: 45662.74357838802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 201523.9631973784,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 201521.917487106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 159142.52978172243,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 159138.2722900478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 154525.50044811307,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 154521.29413873385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 157655.3525947763,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 157650.33124769875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 371883.1054203959,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 371884.5497225768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2766404.264880929,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2766393.7500000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2333183.222499997,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2333146.4999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2290943.357142871,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2290936.4532019645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2335563.7200000957,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2335552.750000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1364448.880291959,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1364424.6715328495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2239104.5131894806,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2239093.525179848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9622156.429824563,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9621976.3157895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5366178.71428559,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 5366167.428571406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45084.49525513947,
            "unit": "ns/iter",
            "extra": "iterations: 18441\ncpu: 45084.80559622578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 190438.99224978217,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 190440.30115146088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 153811.54725745154,
            "unit": "ns/iter",
            "extra": "iterations: 5597\ncpu: 153810.95229587288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 151566.87000879104,
            "unit": "ns/iter",
            "extra": "iterations: 5685\ncpu: 151564.520668426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 154099.130489331,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 154099.98207564038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 364814.73277309735,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 364816.6806722689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2793070.388059705,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2793018.2089552158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2321594.721393018,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2321557.4626865606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2296078.212345722,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2296071.8518518596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2337943.792499999,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2337932.2499999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1364281.0921052413,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1364278.070175442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2238047.1918464927,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2238025.659472425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2751.0559293441625,
            "unit": "ns/iter",
            "extra": "iterations: 254303\ncpu: 2751.0461929273174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 18339.833822143046,
            "unit": "ns/iter",
            "extra": "iterations: 38188\ncpu: 18339.711427673687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14547.099572666471,
            "unit": "ns/iter",
            "extra": "iterations: 48206\ncpu: 14546.996224536417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14464.144758322733,
            "unit": "ns/iter",
            "extra": "iterations: 48391\ncpu: 14463.935442540953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11268.585964630056,
            "unit": "ns/iter",
            "extra": "iterations: 62200\ncpu: 11268.41318327973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 81924.56557759488,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81924.3173862311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 174665.91254084223,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 174664.56396079433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 43705.8790166589,
            "unit": "ns/iter",
            "extra": "iterations: 16027\ncpu: 43705.32226867139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 43925.05831086397,
            "unit": "ns/iter",
            "extra": "iterations: 15949\ncpu: 43924.88557276324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 43953.15125416291,
            "unit": "ns/iter",
            "extra": "iterations: 15907\ncpu: 43953.39158860867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 91461.6150627669,
            "unit": "ns/iter",
            "extra": "iterations: 7648\ncpu: 91461.29707112923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 81899.52930832116,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 81898.13599062152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20725.246765168584,
            "unit": "ns/iter",
            "extra": "iterations: 33773\ncpu: 20725.38122168571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100540.26322599282,
            "unit": "ns/iter",
            "extra": "iterations: 6956\ncpu: 100539.89361702271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80247.47576384094,
            "unit": "ns/iter",
            "extra": "iterations: 8706\ncpu: 80246.91017688994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 82188.6351224082,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 82187.35875706124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82242.88011316737,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82241.41223623788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 157891.31276836083,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 157892.36158192102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 732405.0073221793,
            "unit": "ns/iter",
            "extra": "iterations: 956\ncpu: 732409.4142259416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 627216.5606469305,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 627206.9182389922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 622467.24999998,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 622464.3992932845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 629320.2794249746,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 629310.8715184194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 394734.89114494773,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 394733.558939652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 609195.0043553769,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 609198.9547038233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20906.11490710943,
            "unit": "ns/iter",
            "extra": "iterations: 33427\ncpu: 20905.97720405648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104115.26341608993,
            "unit": "ns/iter",
            "extra": "iterations: 6727\ncpu: 104114.7762747144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82346.09693757657,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 82345.83038869231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81571.16573426661,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 81570.01165501062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82151.92012704432,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 82151.64098341404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 159133.42645719956,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 159132.21766848586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 738572.3966422119,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 738577.0199370428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 626029.4928186404,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 626027.1992818664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 617723.6370044157,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 617713.3920704862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 636737.7074707537,
            "unit": "ns/iter",
            "extra": "iterations: 1111\ncpu: 636741.8541854199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 386909.5008310064,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 386901.82825484575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 609351.930008705,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 609349.3438320243 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}