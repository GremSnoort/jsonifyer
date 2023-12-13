window.BENCHMARK_DATA = {
  "lastUpdate": 1702488585011,
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
        "date": 1702412523272,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6871.030857154076,
            "unit": "ns/iter",
            "extra": "iterations: 101662\ncpu: 6870.880958470225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66118.67725155385,
            "unit": "ns/iter",
            "extra": "iterations: 12880\ncpu: 66116.78571428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126911.66367062579,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 126909.35053638734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187651.23313941204,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 187647.8129713424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 248162.8391428623,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 248152.68571428588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 305811.3121899309,
            "unit": "ns/iter",
            "extra": "iterations: 2822\ncpu: 305798.6534372786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 365759.0050462591,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 365748.19175777974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 424334.56042882515,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 424320.2241715401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 483326.263010625,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 483313.7101287071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5211.208707129627,
            "unit": "ns/iter",
            "extra": "iterations: 134097\ncpu: 5211.024855142173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4393.443074272188,
            "unit": "ns/iter",
            "extra": "iterations: 159023\ncpu: 4393.326751476208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4496.860235753116,
            "unit": "ns/iter",
            "extra": "iterations: 155841\ncpu: 4496.771067947466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4435.008423747028,
            "unit": "ns/iter",
            "extra": "iterations: 157056\ncpu: 4434.931489405049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7869.852683738082,
            "unit": "ns/iter",
            "extra": "iterations: 88999\ncpu: 7869.679434600389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30791.573856209016,
            "unit": "ns/iter",
            "extra": "iterations: 26775\ncpu: 30791.41736694677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 128443.53894832355,
            "unit": "ns/iter",
            "extra": "iterations: 6637\ncpu: 128441.97679674557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102396.77164787627,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 102394.7469417125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102425.4304659462,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 102424.08602150554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104306.24963504096,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 104305.48661800499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 256250.21439059102,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 256245.932452277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1983833.9424306327,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1983783.3688699377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1642564.340425549,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1642544.8581560273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1645275.9893805317,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645269.2035398223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1636793.485008887,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1636767.0194003496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 984761.8877118594,
            "unit": "ns/iter",
            "extra": "iterations: 944\ncpu: 984758.1567796635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1592828.543739263,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1592815.9519725516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6732487.840000089,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6732315.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3806034.337398339,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3805915.040650408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8270497.824427546,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 8270451.145038168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30964.42560879213,
            "unit": "ns/iter",
            "extra": "iterations: 26569\ncpu: 30964.127366479723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130266.87308566719,
            "unit": "ns/iter",
            "extra": "iterations: 6595\ncpu: 130267.46019711912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103908.78704374592,
            "unit": "ns/iter",
            "extra": "iterations: 8274\ncpu: 103905.92216582019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107506.71437219784,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 107507.09528998676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105535.16012830034,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 105534.5423143351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 255634.18448022768,
            "unit": "ns/iter",
            "extra": "iterations: 3415\ncpu: 255637.3352855033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2007042.920258696,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2007010.3448275924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1648339.4973451404,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1648324.601769907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1658452.313725449,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1658442.424242426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1649073.5053191164,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1649023.0496453843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 982928.0201058412,
            "unit": "ns/iter",
            "extra": "iterations: 945\ncpu: 982914.9206349218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1597423.9896551047,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1597408.103448278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6740295.259999698,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6739932.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3806636.9713115334,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3806539.754098369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30250.484962681403,
            "unit": "ns/iter",
            "extra": "iterations: 27332\ncpu: 30249.857310112657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 129801.53872867902,
            "unit": "ns/iter",
            "extra": "iterations: 6623\ncpu: 129800.40767024012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104064.39682154385,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 104062.79267257026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102968.94966362028,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 102967.22729456997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103997.40271054946,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 103995.76476282641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 253205.7277761615,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 253204.02215097492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2002098.1724137978,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2002084.0517241382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1641502.440140836,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1641469.5422535168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1653944.8120567463,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1653921.0992907796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1645417.3922262203,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1645397.8798586589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 987046.7473347875,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 987021.53518124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1603755.912371105,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1603698.1099656404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2707.323077756231,
            "unit": "ns/iter",
            "extra": "iterations: 258526\ncpu: 2707.1741333560162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14483.699809861517,
            "unit": "ns/iter",
            "extra": "iterations: 48386\ncpu: 14483.455958334964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10370.626569413027,
            "unit": "ns/iter",
            "extra": "iterations: 66904\ncpu: 10370.65496831285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11032.780289588516,
            "unit": "ns/iter",
            "extra": "iterations: 63124\ncpu: 11032.455167606555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9111.953894284166,
            "unit": "ns/iter",
            "extra": "iterations: 76715\ncpu: 9111.195985139786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58338.45804631107,
            "unit": "ns/iter",
            "extra": "iterations: 12049\ncpu: 58335.729106149825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 128561.0033045684,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128560.25335046773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33066.42803870754,
            "unit": "ns/iter",
            "extra": "iterations: 21185\ncpu: 33066.09865470834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33133.80301811929,
            "unit": "ns/iter",
            "extra": "iterations: 21139\ncpu: 33133.23241402143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33277.932627664995,
            "unit": "ns/iter",
            "extra": "iterations: 20973\ncpu: 33278.03366232732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68327.05904743618,
            "unit": "ns/iter",
            "extra": "iterations: 10246\ncpu: 68326.4591059921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60038.99751392822,
            "unit": "ns/iter",
            "extra": "iterations: 11665\ncpu: 60038.13973424692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17435.475782979396,
            "unit": "ns/iter",
            "extra": "iterations: 40199\ncpu: 17435.182467225484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 81981.5698082323,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 81978.70673526725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 66240.89046403782,
            "unit": "ns/iter",
            "extra": "iterations: 10581\ncpu: 66237.70910121835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 65960.29805250221,
            "unit": "ns/iter",
            "extra": "iterations: 10629\ncpu: 65959.50700912636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 66149.84793668464,
            "unit": "ns/iter",
            "extra": "iterations: 10614\ncpu: 66148.92594686327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 128363.58902595621,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 128360.08101638696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 559725.4868943663,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 559480.3018268491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 474837.48505435744,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 474843.0706521775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 475888.43051769637,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 475884.4686648464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 475026.32903663267,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475018.18181818747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 311117.58436946745,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 311112.38898756495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 464658.9774535502,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 464656.63129973144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17797.21208039964,
            "unit": "ns/iter",
            "extra": "iterations: 39353\ncpu: 17797.184458618365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 83945.02254197,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 83943.09352517889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 67016.87428133046,
            "unit": "ns/iter",
            "extra": "iterations: 10436\ncpu: 67014.21042545125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 67372.64361292373,
            "unit": "ns/iter",
            "extra": "iterations: 10396\ncpu: 67370.18083878417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 68039.89141634827,
            "unit": "ns/iter",
            "extra": "iterations: 10287\ncpu: 68036.42461359111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 132684.8234750422,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 132679.26062846452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 556844.7444267411,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 556827.5477706958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 501003.09200001904,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500981.09999998996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 475448.3210884471,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475434.96598639374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 475532.8871516165,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 475521.2780421413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 312993.4862588537,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 312980.18617021415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 463683.67263088335,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 463665.2750165679 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418343640,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6813.572703463348,
            "unit": "ns/iter",
            "extra": "iterations: 103090\ncpu: 6813.584246774663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66547.74189294396,
            "unit": "ns/iter",
            "extra": "iterations: 12890\ncpu: 66544.93405740886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 127256.73970418016,
            "unit": "ns/iter",
            "extra": "iterations: 6896\ncpu: 127251.33410672854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 186833.89622642586,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 186819.8113207547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 247327.32134637673,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 247313.43498273892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 305063.78977073473,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 305045.39682539663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 364875.8606213202,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 364818.8077246014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 424237.74149658845,
            "unit": "ns/iter",
            "extra": "iterations: 2058\ncpu: 423926.19047619065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 483804.9633943741,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 483785.24681087077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5149.89032727089,
            "unit": "ns/iter",
            "extra": "iterations: 136187\ncpu: 5149.902707306858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4335.546936676308,
            "unit": "ns/iter",
            "extra": "iterations: 161377\ncpu: 4335.501341579029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4429.04301523034,
            "unit": "ns/iter",
            "extra": "iterations: 158502\ncpu: 4428.953577872832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4348.891238163768,
            "unit": "ns/iter",
            "extra": "iterations: 160948\ncpu: 4348.754256033005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7555.056329510112,
            "unit": "ns/iter",
            "extra": "iterations: 92598\ncpu: 7554.92019266075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30166.71926102033,
            "unit": "ns/iter",
            "extra": "iterations: 27335\ncpu: 30166.065483811988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125837.67866060336,
            "unit": "ns/iter",
            "extra": "iterations: 6809\ncpu: 125836.70142458491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99621.90416860698,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 99620.06287843495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99962.10001166762,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 99961.22067919237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100820.16338791212,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 100814.53645894713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 246919.82625919752,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 246914.91228070145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1962626.8562366746,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1962564.9048625769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1625653.8706293816,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1625611.5384615376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1623333.070298752,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1623310.72056239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1627324.236014002,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1627337.412587413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 972122.1063607874,
            "unit": "ns/iter",
            "extra": "iterations: 959\ncpu: 972109.3847758062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1572605.2385786688,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1572557.1912013525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6643247.760000008,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6643063.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3731397.203187252,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3731274.501992029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8153221.785185164,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 8153022.222222217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29016.965437295137,
            "unit": "ns/iter",
            "extra": "iterations: 28036\ncpu: 29015.983021828997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127207.50317061816,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 127203.42132428824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100664.64214361527,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 100662.53378775434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101080.91131498772,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 101079.13432133588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101716.8286663514,
            "unit": "ns/iter",
            "extra": "iterations: 8428\ncpu: 101713.9416231609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 248909.95546675127,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 248904.56751355858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1985012.5119305216,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 1984941.8655097552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1642443.9070175467,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1642406.8421052597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1635959.2390157958,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1635923.1985940244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1622707.9530434543,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1622684.8695652175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 968280.6833855769,
            "unit": "ns/iter",
            "extra": "iterations: 957\ncpu: 968258.0982236147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1588737.9200679995,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1588719.3877551057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6676271.440000505,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6675873.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3730377.376984149,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3730315.4761904664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28591.16188553111,
            "unit": "ns/iter",
            "extra": "iterations: 28724\ncpu: 28591.19899735408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126342.90479693424,
            "unit": "ns/iter",
            "extra": "iterations: 6796\ncpu: 126344.5409064156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100939.40442040964,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 100936.24500352748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100508.26073188082,
            "unit": "ns/iter",
            "extra": "iterations: 8526\ncpu: 100507.2484166082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100942.53619776209,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 100940.50618010605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 246338.32502830937,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 246336.55152887976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1965182.2684989818,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1965103.3826638418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1619657.6880415909,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1619679.7227036366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1619475.5982608353,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1619430.086956522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1614083.6252158794,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1614063.7305699426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 980617.1449735371,
            "unit": "ns/iter",
            "extra": "iterations: 945\ncpu: 980576.8253968273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1573758.6091370746,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1573738.24027072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2694.4835912573553,
            "unit": "ns/iter",
            "extra": "iterations: 259831\ncpu: 2694.3567164811166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14041.034928459709,
            "unit": "ns/iter",
            "extra": "iterations: 49902\ncpu: 14040.972305719155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10761.595556375485,
            "unit": "ns/iter",
            "extra": "iterations: 65082\ncpu: 10761.51009495706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11065.246002761474,
            "unit": "ns/iter",
            "extra": "iterations: 65170\ncpu: 11065.052938468687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 8896.778491754108,
            "unit": "ns/iter",
            "extra": "iterations: 77189\ncpu: 8896.574641464491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56294.36096886784,
            "unit": "ns/iter",
            "extra": "iterations: 12303\ncpu: 56291.30293424352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 121282.16594641889,
            "unit": "ns/iter",
            "extra": "iterations: 5785\ncpu: 121282.50648228252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32716.971819119623,
            "unit": "ns/iter",
            "extra": "iterations: 21362\ncpu: 32715.70545829065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32551.315622816976,
            "unit": "ns/iter",
            "extra": "iterations: 21475\ncpu: 32550.710128055318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32871.165329579104,
            "unit": "ns/iter",
            "extra": "iterations: 21315\ncpu: 32869.209476893884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67286.87540638461,
            "unit": "ns/iter",
            "extra": "iterations: 10458\ncpu: 67285.86727863806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59371.585180173206,
            "unit": "ns/iter",
            "extra": "iterations: 11822\ncpu: 59370.969379123846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16903.188863789026,
            "unit": "ns/iter",
            "extra": "iterations: 41612\ncpu: 16902.80447947719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 81261.67319050118,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 81258.5639837871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65368.85317940528,
            "unit": "ns/iter",
            "extra": "iterations: 10741\ncpu: 65366.04599199315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64818.11980712132,
            "unit": "ns/iter",
            "extra": "iterations: 10784\ncpu: 64817.21995548993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65162.873340141545,
            "unit": "ns/iter",
            "extra": "iterations: 10769\ncpu: 65159.89414058918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 127549.7404441225,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 127546.96032034997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 551457.1349019706,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 551458.901960787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 466148.48666668724,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 466129.6000000069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 466755.9920000031,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 466752.2666666647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 466763.45236510545,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 466765.0233177868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 305431.38142981566,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 305423.4524847468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 458343.0827900702,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 458345.04563233384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16941.410741044703,
            "unit": "ns/iter",
            "extra": "iterations: 41374\ncpu: 16941.120027070076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 81422.15382825305,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 81422.65534093566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65810.13364617564,
            "unit": "ns/iter",
            "extra": "iterations: 10655\ncpu: 65809.00985452824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 65378.54434393156,
            "unit": "ns/iter",
            "extra": "iterations: 10723\ncpu: 65375.753054181856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66327.75405021448,
            "unit": "ns/iter",
            "extra": "iterations: 10555\ncpu: 66327.65513974405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 127214.46780648077,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 127212.7500909427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 553011.5712025536,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 553009.8101265765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 465222.10232556716,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 465207.1760797314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 468595.69163881015,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 468591.70568561915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 465191.7003322291,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 465177.0764119596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 304692.8599391157,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 304692.083514567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 457945.8340953581,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 457948.0731548053 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420963994,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6850.983376021606,
            "unit": "ns/iter",
            "extra": "iterations: 101901\ncpu: 6851.0220704409185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64959.62060282698,
            "unit": "ns/iter",
            "extra": "iterations: 13105\ncpu: 64956.36779855018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125273.6917378905,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 125272.83475783476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183465.6765390252,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 183456.50518299133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 242550.88503496538,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 242552.05594405602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 298717.2962834331,
            "unit": "ns/iter",
            "extra": "iterations: 2879\ncpu: 298706.42584230663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 357491.3656134663,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 357465.9006975788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 414709.5586272842,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 414679.55195424246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 473307.5794899629,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 473283.55941399885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5207.1350242280705,
            "unit": "ns/iter",
            "extra": "iterations: 134761\ncpu: 5206.930046526812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4454.331458815895,
            "unit": "ns/iter",
            "extra": "iterations: 157196\ncpu: 4454.072622713046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4398.988172954036,
            "unit": "ns/iter",
            "extra": "iterations: 157013\ncpu: 4398.758064618854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4407.514503960751,
            "unit": "ns/iter",
            "extra": "iterations: 159060\ncpu: 4407.536149880546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7612.379324176527,
            "unit": "ns/iter",
            "extra": "iterations: 92243\ncpu: 7611.939117331402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30354.5398040299,
            "unit": "ns/iter",
            "extra": "iterations: 27045\ncpu: 30352.634498058822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123494.87605102612,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 123490.69295447924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100336.71367873925,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 100328.93898265072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99839.7171123655,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 99835.33996882135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101692.17357236292,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 101685.24278760538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 244296.4654300176,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 244283.1084879145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1948293.2526315572,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1948162.1052631598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1632213.7075307008,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1632145.359019262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1606164.592400678,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606098.272884281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1597353.7598628048,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1597264.3224699823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 974665.312825841,
            "unit": "ns/iter",
            "extra": "iterations: 959\ncpu: 974625.7559958264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1564789.6374367683,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1564675.7166947767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6625342.739999951,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6624601.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3802452.3157894616,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3802337.2469635657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8073407.338235269,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 8073097.794117663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29733.44488104506,
            "unit": "ns/iter",
            "extra": "iterations: 27994\ncpu: 29733.18925484025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127052.94858076888,
            "unit": "ns/iter",
            "extra": "iterations: 6729\ncpu: 127044.70203596422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101215.69530875812,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 101214.13355672538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101670.5803465478,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 101668.05126987936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102439.60131658011,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 102438.77917414746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 251560.4024802677,
            "unit": "ns/iter",
            "extra": "iterations: 3548\ncpu: 251548.42164599686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1981402.64468085,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1981276.8085106495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1630232.7202797013,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1630077.6223776273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1625047.5365854222,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1624936.411149823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1613808.9169550694,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1613688.0622837471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 989708.073627887,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 989007.3627844783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1576362.257575758,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1576260.1010101002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6651375.4200002495,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6651067.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3703910.6215139413,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3703668.5258963946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29236.289377935373,
            "unit": "ns/iter",
            "extra": "iterations: 28309\ncpu: 29236.14398247912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125831.7530537193,
            "unit": "ns/iter",
            "extra": "iterations: 6795\ncpu: 125827.93230316397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101386.00047483467,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 101383.83190883131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99700.48056496268,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 99694.72394070285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100777.77985645336,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 100775.66772561484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243314.70820499875,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 243305.26463175565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1975726.8832271267,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1975723.354564746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1614484.5294117099,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1614443.2525951522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1610842.431778962,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1610806.2176165867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1609549.0968857764,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1609511.937716274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 978760.2651991987,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 978732.7044025182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1569188.3737374365,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1569162.1212121171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2708.5889627234415,
            "unit": "ns/iter",
            "extra": "iterations: 258687\ncpu: 2708.5002338733593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14369.85439205198,
            "unit": "ns/iter",
            "extra": "iterations: 48713\ncpu: 14369.69186870024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11075.359389081103,
            "unit": "ns/iter",
            "extra": "iterations: 63249\ncpu: 11075.17905421428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11216.827773865247,
            "unit": "ns/iter",
            "extra": "iterations: 62476\ncpu: 11216.201421345802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9112.459414106173,
            "unit": "ns/iter",
            "extra": "iterations: 76874\ncpu: 9112.524390561213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56213.58038585294,
            "unit": "ns/iter",
            "extra": "iterations: 12440\ncpu: 56212.6125401931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126353.98157514236,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 126352.83598265957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32930.00970187794,
            "unit": "ns/iter",
            "extra": "iterations: 21233\ncpu: 32928.90783214838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32734.909643624665,
            "unit": "ns/iter",
            "extra": "iterations: 21382\ncpu: 32735.08558600704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32915.81563720134,
            "unit": "ns/iter",
            "extra": "iterations: 21257\ncpu: 32915.18088159155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67269.8225233037,
            "unit": "ns/iter",
            "extra": "iterations: 10407\ncpu: 67268.68453925218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59409.70026479938,
            "unit": "ns/iter",
            "extra": "iterations: 11707\ncpu: 59408.89211582827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16970.378130905243,
            "unit": "ns/iter",
            "extra": "iterations: 41282\ncpu: 16969.73257109652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80837.83523974566,
            "unit": "ns/iter",
            "extra": "iterations: 8655\ncpu: 80838.34777585167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65213.83502656432,
            "unit": "ns/iter",
            "extra": "iterations: 10729\ncpu: 65211.15667816106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64813.96423620765,
            "unit": "ns/iter",
            "extra": "iterations: 10821\ncpu: 64812.84539321685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65266.51887056478,
            "unit": "ns/iter",
            "extra": "iterations: 10731\ncpu: 65264.97064579246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 126729.77123361662,
            "unit": "ns/iter",
            "extra": "iterations: 5569\ncpu: 126721.09894056275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 549985.9866035926,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 549989.2828999237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 465296.6908244654,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 465277.4601063883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 462794.1346534754,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462784.22442244366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 462848.81059605046,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 462837.8807946969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 301438.8625592468,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 301425.50624730316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 454492.0531088056,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 454494.68911917007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17161.421331689256,
            "unit": "ns/iter",
            "extra": "iterations: 40550\ncpu: 17160.65351418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 80742.9105135017,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 80737.34786136527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65574.08480929797,
            "unit": "ns/iter",
            "extra": "iterations: 10671\ncpu: 65569.2062599575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 66007.85488275581,
            "unit": "ns/iter",
            "extra": "iterations: 10619\ncpu: 66008.268198513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66564.64916603234,
            "unit": "ns/iter",
            "extra": "iterations: 10552\ncpu: 66562.19673995444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 126460.11624549201,
            "unit": "ns/iter",
            "extra": "iterations: 5540\ncpu: 126451.48014440498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 544382.7188473666,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 544358.956386292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 462604.0072751598,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 462580.4894179908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 460333.3212639777,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 460316.0631994767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 461186.177090205,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 461182.6201448256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 302258.92112066643,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 302240.08620689984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 453438.80206987564,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 453420.3751617084 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421410765,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6875.265543323365,
            "unit": "ns/iter",
            "extra": "iterations: 101008\ncpu: 6875.143552985904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65645.26461064046,
            "unit": "ns/iter",
            "extra": "iterations: 12970\ncpu: 65637.93369313801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125730.89547089038,
            "unit": "ns/iter",
            "extra": "iterations: 6955\ncpu: 125725.96693026596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 185352.85434829758,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 185318.86030193485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 245131.82207718267,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 245129.88081725308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 302109.6936050591,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 302096.6268446942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 365497.0447446189,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 365474.7150696498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 420851.0610465088,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 420831.4922480619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 480990.30760751484,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 480957.7728776185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5214.530511130803,
            "unit": "ns/iter",
            "extra": "iterations: 134623\ncpu: 5214.409127712197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4421.036128673728,
            "unit": "ns/iter",
            "extra": "iterations: 158323\ncpu: 4420.8308331701655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4419.927781079558,
            "unit": "ns/iter",
            "extra": "iterations: 158158\ncpu: 4419.963580723073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4416.672823069027,
            "unit": "ns/iter",
            "extra": "iterations: 158101\ncpu: 4416.448346310273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7735.987971750191,
            "unit": "ns/iter",
            "extra": "iterations: 90620\ncpu: 7736.047230192018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31122.466735583243,
            "unit": "ns/iter",
            "extra": "iterations: 27086\ncpu: 31120.82625710704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127390.72953367574,
            "unit": "ns/iter",
            "extra": "iterations: 6755\ncpu: 127386.83937823796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101188.86853853325,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 101184.83317669158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102033.05539082101,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 102033.82754121692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101655.94740591587,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 101647.4652736552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 259159.8256880629,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 259159.54424385898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1974028.5889830373,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1973874.364406786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1617472.4139129822,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1617424.1739130442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1614674.9581881508,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1614585.5400696879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1613239.0121107749,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1613208.4775086495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 959268.9803719097,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 959220.6611570251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1568007.6818182175,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1567958.922558925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6569303.699999977,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6568828.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3666341.653696565,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3666284.0466926075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8063986.074626567,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8063849.253731336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29358.83710487742,
            "unit": "ns/iter",
            "extra": "iterations: 28061\ncpu: 29358.50824988422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 130493.1849596592,
            "unit": "ns/iter",
            "extra": "iterations: 6569\ncpu: 130489.4656720964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103989.6331920068,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 103989.35190793479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102828.52503884265,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 102827.32162065235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104538.56101757404,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 104537.17586334051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256175.761918777,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 256173.8081224245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1989204.690831638,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1989172.4946695024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1636165.7175439217,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1636144.3859649107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1631191.8056042593,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1631188.4413309938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1622961.5801393534,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1622955.052264812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 959456.8345398664,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 959451.7063081688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1574871.6773648416,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1574866.385135136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6606809.290000229,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6605713.999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3615895.8875969895,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3615836.0465116273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28813.43104111996,
            "unit": "ns/iter",
            "extra": "iterations: 28575\ncpu: 28811.87401574786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 131909.5598894334,
            "unit": "ns/iter",
            "extra": "iterations: 6512\ncpu: 131907.32493857513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104436.15515564212,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 104427.7723735403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104403.00890707488,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 104400.54164660501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103657.17984740455,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 103654.01477534248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 252928.01628855002,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 252923.29842931943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1974282.3093220282,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1974154.2372881307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1618580.2465277356,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1618530.555555559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1615653.1284722397,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1615578.8194444447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1614301.0190640925,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1614283.1889081406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 966191.8708333771,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 966115.8333333327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1566407.4680135266,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1566418.3501683522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2736.910643492561,
            "unit": "ns/iter",
            "extra": "iterations: 254766\ncpu: 2736.823594985199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14882.483591370843,
            "unit": "ns/iter",
            "extra": "iterations: 46957\ncpu: 14882.6138807846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11616.591849913895,
            "unit": "ns/iter",
            "extra": "iterations: 60392\ncpu: 11615.863028215654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10901.03150731715,
            "unit": "ns/iter",
            "extra": "iterations: 64366\ncpu: 10900.783022092446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9283.85294430114,
            "unit": "ns/iter",
            "extra": "iterations: 75298\ncpu: 9283.622406969598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58220.48109278968,
            "unit": "ns/iter",
            "extra": "iterations: 12006\ncpu: 58217.70781276023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 128341.48354059961,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 128342.66642282388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33005.52809306182,
            "unit": "ns/iter",
            "extra": "iterations: 21233\ncpu: 33004.455328968776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32973.09319603141,
            "unit": "ns/iter",
            "extra": "iterations: 21267\ncpu: 32972.17284995519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33183.47578847283,
            "unit": "ns/iter",
            "extra": "iterations: 21085\ncpu: 33181.5556082523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67945.72395933061,
            "unit": "ns/iter",
            "extra": "iterations: 10426\ncpu: 67945.79896412774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59571.44140392775,
            "unit": "ns/iter",
            "extra": "iterations: 11767\ncpu: 59567.264383445625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17400.988089910792,
            "unit": "ns/iter",
            "extra": "iterations: 40218\ncpu: 17400.49977621966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 81609.42254833717,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81606.32424877746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65614.57703502252,
            "unit": "ns/iter",
            "extra": "iterations: 10651\ncpu: 65611.47310111762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 65497.18036763744,
            "unit": "ns/iter",
            "extra": "iterations: 10717\ncpu: 65497.74190538325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64858.724609555844,
            "unit": "ns/iter",
            "extra": "iterations: 10821\ncpu: 64854.04306441253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 129423.16639026717,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 129419.97420306067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 552476.1347517864,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 552460.75650118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 468265.3538461667,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 468246.2207357841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 471246.3666890409,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 471218.603089322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 466754.59973318205,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466758.9059372929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 303903.869678552,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 303895.56907037745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 456352.13057743484,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 456335.49868765875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17617.73725273177,
            "unit": "ns/iter",
            "extra": "iterations: 39734\ncpu: 17616.83193235001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 80886.4969976886,
            "unit": "ns/iter",
            "extra": "iterations: 8660\ncpu: 80887.12471131718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65892.19217718855,
            "unit": "ns/iter",
            "extra": "iterations: 10610\ncpu: 65889.94344957623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 65460.91437938984,
            "unit": "ns/iter",
            "extra": "iterations: 10675\ncpu: 65458.80093676741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66351.40819423384,
            "unit": "ns/iter",
            "extra": "iterations: 10544\ncpu: 66348.85242792137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 129978.6432683359,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 129969.87929433594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 555119.9360189658,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 555124.3285940011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 468314.34402137034,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 468285.6379425512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 470339.89583335136,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470322.37903225695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 467080.82235530583,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 467062.00931470486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 303401.23961937503,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 303389.31660899444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 458560.34138380166,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 458564.0339425594 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422454090,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6781.50996980025,
            "unit": "ns/iter",
            "extra": "iterations: 103312\ncpu: 6781.20837850395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64817.14575267361,
            "unit": "ns/iter",
            "extra": "iterations: 13173\ncpu: 64814.88651028619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 124383.5750106222,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 124377.22056948577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183592.0042114134,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 183587.4289324068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 241423.93433919342,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 241407.32048058137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 297811.5277108446,
            "unit": "ns/iter",
            "extra": "iterations: 2905\ncpu: 297804.1996557659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 355893.38502455625,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 355870.17184942734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 412966.99225556094,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 412945.6437560502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 471931.94918918377,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 471903.51351351355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5166.356628125263,
            "unit": "ns/iter",
            "extra": "iterations: 135438\ncpu: 5165.906171089353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4347.7327790898025,
            "unit": "ns/iter",
            "extra": "iterations: 161301\ncpu: 4347.537213036503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4335.641819208811,
            "unit": "ns/iter",
            "extra": "iterations: 161103\ncpu: 4335.53875470972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4365.4618575148215,
            "unit": "ns/iter",
            "extra": "iterations: 159848\ncpu: 4365.502852710071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7624.86557922941,
            "unit": "ns/iter",
            "extra": "iterations: 91898\ncpu: 7624.349822629437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30533.61118563277,
            "unit": "ns/iter",
            "extra": "iterations: 26838\ncpu: 30532.70735524257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127000.73873606064,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 126998.57249070653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106899.50911458083,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 106896.80397727265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102510.99809000888,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 102506.51784648407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103063.37383512754,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 103067.55077658308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 246441.75615973456,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 246430.89776267394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1953439.321428523,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1953373.3193277295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1592617.7179487713,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1592256.5811965847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1590976.8874296413,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1590953.4709193246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1600121.4373928136,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1600120.754716979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 973943.3472803035,
            "unit": "ns/iter",
            "extra": "iterations: 956\ncpu: 973923.0125523006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1552689.3722871158,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1552694.824707847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6641392.110000197,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6641668.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3627637.548262403,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3627644.4015443977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8013045.321167805,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 8012913.138686136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29803.463927565248,
            "unit": "ns/iter",
            "extra": "iterations: 27722\ncpu: 29803.066156842942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128842.88969149208,
            "unit": "ns/iter",
            "extra": "iterations: 6645\ncpu: 128843.28066215232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102515.83491074554,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 102516.94021804196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102299.21535155934,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 102298.13775814742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104272.59136374776,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 104272.8470358624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 247943.457458877,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 247946.2563811694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1973521.1146495964,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1973508.704883224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1597925.051457952,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1597926.586620926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1595244.2766323339,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1595262.7147766326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1606556.5817556062,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1606575.0430292587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 969495.2604167047,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 969506.1458333321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1565489.904841364,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1565490.6510851355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6658975.100000361,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6658936.000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3698048.8452380695,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3698065.476190459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29487.03065463414,
            "unit": "ns/iter",
            "extra": "iterations: 27924\ncpu: 29487.380031514145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127662.81584069568,
            "unit": "ns/iter",
            "extra": "iterations: 6679\ncpu: 127663.15316664134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102287.89403416055,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 102288.36901611739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102494.76821668506,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 102495.96116970257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 102760.9975944139,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 102762.12412797695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 244528.36307518845,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 244528.50729517394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1952856.2907948724,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1952875.5230125578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1590600.5802048135,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1590617.5767918075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1606283.5521367567,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1606299.8290598323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1604088.7816291298,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1604061.1785095339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 980945.0329087217,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 980936.7303609316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1562507.7908937868,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1562523.4401349104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2665.010609694242,
            "unit": "ns/iter",
            "extra": "iterations: 247698\ncpu: 2664.679973193179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14914.445006078126,
            "unit": "ns/iter",
            "extra": "iterations: 46887\ncpu: 14913.654104549325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10950.03202852529,
            "unit": "ns/iter",
            "extra": "iterations: 63943\ncpu: 10949.390863737968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10864.985720056498,
            "unit": "ns/iter",
            "extra": "iterations: 64356\ncpu: 10864.631114426069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9222.34512959164,
            "unit": "ns/iter",
            "extra": "iterations: 75815\ncpu: 9221.987733298169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57078.39797087395,
            "unit": "ns/iter",
            "extra": "iterations: 12222\ncpu: 57078.96416298513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126472.87310194933,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 126466.37744034742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32322.276521096377,
            "unit": "ns/iter",
            "extra": "iterations: 21662\ncpu: 32320.995291293635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32573.283554317055,
            "unit": "ns/iter",
            "extra": "iterations: 21495\ncpu: 32571.29565015178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32509.219399644266,
            "unit": "ns/iter",
            "extra": "iterations: 21454\ncpu: 32509.56931108432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67247.54768102948,
            "unit": "ns/iter",
            "extra": "iterations: 10371\ncpu: 67241.45212612042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59001.235599899555,
            "unit": "ns/iter",
            "extra": "iterations: 11927\ncpu: 59000.06707470415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16817.630914294405,
            "unit": "ns/iter",
            "extra": "iterations: 41573\ncpu: 16817.222716667056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 79851.90466416105,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 79847.85038202758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64353.54929058334,
            "unit": "ns/iter",
            "extra": "iterations: 10854\ncpu: 64351.4372581536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 63764.63550036266,
            "unit": "ns/iter",
            "extra": "iterations: 10952\ncpu: 63764.10701241824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64371.10467358411,
            "unit": "ns/iter",
            "extra": "iterations: 10891\ncpu: 64369.73647966251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 124895.83964962633,
            "unit": "ns/iter",
            "extra": "iterations: 5594\ncpu: 124890.66857347032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 543682.3776223931,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 543672.571872571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 454308.9063719156,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 454283.09492847667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 457857.21021611313,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 457848.91944989824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 457467.12844035024,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 457439.5806028829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 304413.1785714489,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 304381.0104529601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 448782.3044872112,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448779.4230769282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16826.16213291084,
            "unit": "ns/iter",
            "extra": "iterations: 41577\ncpu: 16825.891718979303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 79261.91692237911,
            "unit": "ns/iter",
            "extra": "iterations: 8799\ncpu: 79262.42754858406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64170.62698340368,
            "unit": "ns/iter",
            "extra": "iterations: 10903\ncpu: 64169.14610657621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64586.89416866553,
            "unit": "ns/iter",
            "extra": "iterations: 10838\ncpu: 64584.06532570656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65057.254695927426,
            "unit": "ns/iter",
            "extra": "iterations: 10754\ncpu: 65056.5092058773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 125612.37315846152,
            "unit": "ns/iter",
            "extra": "iterations: 5566\ncpu: 125609.03701042145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 543272.9729102325,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 543239.3188854492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 455583.46414601925,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455562.0599739232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 456052.6481723072,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 456032.18015665235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 457433.5480078149,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 457413.84715872345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 304925.7101827528,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 304902.6109660577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 448830.96602563624,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448807.05128204677 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453358241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6817.147064546877,
            "unit": "ns/iter",
            "extra": "iterations: 102778\ncpu: 6816.831423067195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66754.61706302105,
            "unit": "ns/iter",
            "extra": "iterations: 12741\ncpu: 66751.11058786594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128283.65669452959,
            "unit": "ns/iter",
            "extra": "iterations: 6819\ncpu: 128278.33993254139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 189863.27272726336,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 189851.68269230772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 251707.6189785361,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 251691.46836912364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 309950.8189004685,
            "unit": "ns/iter",
            "extra": "iterations: 2783\ncpu: 309924.0388070426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 371521.508734543,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 371512.0579463143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 431040.0904123309,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 431032.09140586184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 492474.4465799658,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 492464.4997173541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5126.99829830117,
            "unit": "ns/iter",
            "extra": "iterations: 136922\ncpu: 5126.745154175363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4322.513335015796,
            "unit": "ns/iter",
            "extra": "iterations: 162467\ncpu: 4322.288218530542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4350.613615084503,
            "unit": "ns/iter",
            "extra": "iterations: 161277\ncpu: 4350.324596811692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4362.186185681293,
            "unit": "ns/iter",
            "extra": "iterations: 160587\ncpu: 4362.12831673797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7666.454254001531,
            "unit": "ns/iter",
            "extra": "iterations: 90456\ncpu: 7666.068585831804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30617.22457863631,
            "unit": "ns/iter",
            "extra": "iterations: 26877\ncpu: 30615.942999590738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130126.37431776882,
            "unit": "ns/iter",
            "extra": "iterations: 6596\ncpu: 130119.01152213481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102280.86175170584,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 102275.62432787693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102107.88911458851,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 102103.93117457288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103931.57495092895,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 103923.28263002944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 257571.30976331036,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 257564.7928994082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1983162.7970084813,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1983080.9829059802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1639782.4416960557,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1639707.950530035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1654094.21631198,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1654007.8014184446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1632904.7197897786,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1632804.0280210138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 987200.904403876,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 985309.0225563945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1589655.2178387765,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1589635.6775300144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6711849.010000037,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6711661.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3645035.031128557,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3644893.3852140107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8219393.578947365,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8219171.428571422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30182.32526568526,
            "unit": "ns/iter",
            "extra": "iterations: 27476\ncpu: 30181.616683651268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 131366.05056696324,
            "unit": "ns/iter",
            "extra": "iterations: 6526\ncpu: 131363.72969659814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103741.6024619781,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 103738.39005551538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 103012.74804381852,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 103007.57192728968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104704.08414200056,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 104702.69008721295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 259930.75691758416,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 259926.33144897534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2007257.8047211014,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2007211.5879828385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1651012.9858657576,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1650996.9964664346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1654421.867021293,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1654376.063829787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1631748.708771902,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1631746.4912280706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 977193.9853095755,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 977161.8048268659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1596072.2298456263,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596069.1252144077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6711104.319999777,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6710996.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3770536.8024194194,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3770454.032258085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29568.725852120428,
            "unit": "ns/iter",
            "extra": "iterations: 27901\ncpu: 29567.829110067574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132518.77868852232,
            "unit": "ns/iter",
            "extra": "iterations: 6466\ncpu: 132517.6770801108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104257.66202132935,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 104254.88366456608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102381.01939887396,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 102380.93641480057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103345.6159796931,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 103342.52387283916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 255923.6928971356,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 255911.34689065628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1994237.450854675,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1994158.7606837598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1630796.5314685798,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1630741.2587412554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1637660.5551664236,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1637561.4711033227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1634693.9632223763,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1634593.5201401098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 999508.1829924562,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 999455.8665231501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1594712.7914530076,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1594613.3333333249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2732.3777091719976,
            "unit": "ns/iter",
            "extra": "iterations: 255567\ncpu: 2732.2670767352624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14614.255300058428,
            "unit": "ns/iter",
            "extra": "iterations: 47924\ncpu: 14613.556881729368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11622.753098363964,
            "unit": "ns/iter",
            "extra": "iterations: 59951\ncpu: 11621.982952744787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11268.85741829774,
            "unit": "ns/iter",
            "extra": "iterations: 62238\ncpu: 11268.221986567754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9284.526577326651,
            "unit": "ns/iter",
            "extra": "iterations: 75666\ncpu: 9284.202944519393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58684.80073708004,
            "unit": "ns/iter",
            "extra": "iterations: 11939\ncpu: 58684.17790434722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 128992.71323394123,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 128985.79053929678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32982.66219207734,
            "unit": "ns/iter",
            "extra": "iterations: 21231\ncpu: 32980.95709104614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33068.45695988041,
            "unit": "ns/iter",
            "extra": "iterations: 21236\ncpu: 33067.39498964032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33269.70691698698,
            "unit": "ns/iter",
            "extra": "iterations: 21093\ncpu: 33269.359503152555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68069.19279907212,
            "unit": "ns/iter",
            "extra": "iterations: 10332\ncpu: 68065.40843979905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59761.662786719055,
            "unit": "ns/iter",
            "extra": "iterations: 11684\ncpu: 59759.371790482626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16895.516136824746,
            "unit": "ns/iter",
            "extra": "iterations: 41396\ncpu: 16895.511643637143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 81245.04225679133,
            "unit": "ns/iter",
            "extra": "iterations: 8614\ncpu: 81243.64987230206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65616.07496954418,
            "unit": "ns/iter",
            "extra": "iterations: 10671\ncpu: 65615.22818854814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64808.10968040351,
            "unit": "ns/iter",
            "extra": "iterations: 10795\ncpu: 64808.05928670777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65391.546643009875,
            "unit": "ns/iter",
            "extra": "iterations: 10709\ncpu: 65388.925203099905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 128003.01534246429,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 128002.90410958813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 553082.5130434728,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 553063.6363636333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 469244.87290971534,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 469239.6655518408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 473244.2772143643,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473234.34753211774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 469558.8220282272,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 469553.3915379406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 308563.88903509127,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 308560.0877193004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 458394.55555553694,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 458387.9738562079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17414.604625715296,
            "unit": "ns/iter",
            "extra": "iterations: 40210\ncpu: 17414.25516040787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 82790.76302699922,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 82789.72051160703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66997.68658301099,
            "unit": "ns/iter",
            "extra": "iterations: 10360\ncpu: 66995.2606177606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 66835.98392036886,
            "unit": "ns/iter",
            "extra": "iterations: 10448\ncpu: 66835.96860643191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 67832.27357211776,
            "unit": "ns/iter",
            "extra": "iterations: 10330\ncpu: 67831.2778315585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 129978.2002959105,
            "unit": "ns/iter",
            "extra": "iterations: 5407\ncpu: 129975.25429998194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 553056.2691396651,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 553055.7221783696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 472481.95743242605,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472473.1756756797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 470634.32616005413,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 470624.7478143852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 469556.5690235755,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 469556.22895622405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 308346.15557513025,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 308336.3155575155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 458997.3043478228,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 458996.83794466895 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479555651,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6865.972512806142,
            "unit": "ns/iter",
            "extra": "iterations: 101902\ncpu: 6865.678789425134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66824.12975900475,
            "unit": "ns/iter",
            "extra": "iterations: 12739\ncpu: 66821.50875264934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128049.61655454393,
            "unit": "ns/iter",
            "extra": "iterations: 6838\ncpu: 128041.76659842063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 189331.54577006088,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 189322.71149674617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 249981.0806264473,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 249970.88167053368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 307721.62040670076,
            "unit": "ns/iter",
            "extra": "iterations: 2803\ncpu: 307719.4077773815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 368473.8367952528,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 368451.42009325995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 426697.7686274278,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 426664.5098039216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 488929.880872471,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 488904.64205816627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5349.812422024081,
            "unit": "ns/iter",
            "extra": "iterations: 133054\ncpu: 5349.322079757099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4445.83408362602,
            "unit": "ns/iter",
            "extra": "iterations: 157272\ncpu: 4445.8066280075345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4492.630025206529,
            "unit": "ns/iter",
            "extra": "iterations: 155516\ncpu: 4492.555749890692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4451.360627787293,
            "unit": "ns/iter",
            "extra": "iterations: 157187\ncpu: 4451.378294642677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7881.270007100164,
            "unit": "ns/iter",
            "extra": "iterations: 88731\ncpu: 7881.053972117969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30368.660014755078,
            "unit": "ns/iter",
            "extra": "iterations: 27110\ncpu: 30368.218369605314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 126477.009289296,
            "unit": "ns/iter",
            "extra": "iterations: 6782\ncpu: 126475.89206723684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100102.94238201517,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 100102.0494203069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100029.1101764267,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 100025.43521439446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 100801.7885478111,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 100801.03896103892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 252227.9869753899,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 252220.54992764082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1987436.1648822152,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1987443.4689507487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1645407.730017754,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1645360.7460035502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1641671.9522124617,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1641645.4867256654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1641906.3362832277,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1641882.1238938055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 981577.452810196,
            "unit": "ns/iter",
            "extra": "iterations: 943\ncpu: 981581.3361611855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1593077.9965635224,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1593048.1099656385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6768900.719999921,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6768726.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3821892.8278688807,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821839.344262295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8224280.537878788,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8224196.969696973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29704.305517489287,
            "unit": "ns/iter",
            "extra": "iterations: 27730\ncpu: 29703.984853948754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 127682.19988092853,
            "unit": "ns/iter",
            "extra": "iterations: 6719\ncpu: 127678.28545914564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 101920.99761250586,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 101920.19816163313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101177.6496695042,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 101178.03352219028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 101879.71365690984,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 101877.57554128002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 253692.6884290334,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 253688.05013115625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2024882.6052060851,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2024859.0021691902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1651471.6737587785,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1651432.4468085044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1648345.3274336532,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1648352.0353982316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1641899.4260563503,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1641835.739436617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 977507.7347368504,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 977511.1578947366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1597139.1698112758,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1597074.6140651808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6722321.729999976,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6722249.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3829406.820408139,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3829171.4285714314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29352.972420436876,
            "unit": "ns/iter",
            "extra": "iterations: 28028\ncpu: 29353.075495932593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127519.83701944277,
            "unit": "ns/iter",
            "extra": "iterations: 6737\ncpu: 127517.32225025947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101416.18694677135,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 101416.57028207241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100834.12433831503,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 100829.25538172046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100894.66410498945,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 100885.5994324898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251607.0023081415,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 251591.86381996662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2015210.1695278746,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2015087.982832618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1684293.7491228322,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1684138.5964912241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1644481.2728873275,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1644387.6760563469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1645109.7097345646,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1644972.0353982337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 987280.5091299084,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 987209.7744360855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1598287.6331058282,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1598220.3071672264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2726.141254341172,
            "unit": "ns/iter",
            "extra": "iterations: 257139\ncpu: 2726.1558923383773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14530.021012158957,
            "unit": "ns/iter",
            "extra": "iterations: 48115\ncpu: 14529.047074716795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11108.317332525214,
            "unit": "ns/iter",
            "extra": "iterations: 62726\ncpu: 11107.234639543341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10852.78215706648,
            "unit": "ns/iter",
            "extra": "iterations: 64597\ncpu: 10851.903339164328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9221.410050820838,
            "unit": "ns/iter",
            "extra": "iterations: 75954\ncpu: 9220.453169023322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57606.51339763984,
            "unit": "ns/iter",
            "extra": "iterations: 12129\ncpu: 57604.84788523348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 130400.22543352812,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130387.82397911568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33226.24989427382,
            "unit": "ns/iter",
            "extra": "iterations: 21281\ncpu: 33225.64259198355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33401.264310246996,
            "unit": "ns/iter",
            "extra": "iterations: 20964\ncpu: 33400.1812631176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33404.096981834926,
            "unit": "ns/iter",
            "extra": "iterations: 20973\ncpu: 33403.690459161466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68247.31043902496,
            "unit": "ns/iter",
            "extra": "iterations: 10250\ncpu: 68242.62439024357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 57028.28193505751,
            "unit": "ns/iter",
            "extra": "iterations: 12134\ncpu: 57025.070051096074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17232.65284450661,
            "unit": "ns/iter",
            "extra": "iterations: 40587\ncpu: 17231.707196885898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 81740.84224661342,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 81733.59411489982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65874.57306107177,
            "unit": "ns/iter",
            "extra": "iterations: 10676\ncpu: 65872.9018358933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 65362.19344904708,
            "unit": "ns/iter",
            "extra": "iterations: 10716\ncpu: 65357.838745801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65578.02564103037,
            "unit": "ns/iter",
            "extra": "iterations: 10647\ncpu: 65573.78604301678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 128897.51748252042,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 128890.32020610943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 549338.7639653588,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 549288.3556254882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 468620.3461794043,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 467551.82724252465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 471839.24680565146,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 471823.5373234725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 467610.1301735698,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 467586.1148197532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 310257.1215077547,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 310252.23946784745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 458409.7117647176,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 458387.1241830093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17602.801079181932,
            "unit": "ns/iter",
            "extra": "iterations: 39845\ncpu: 17602.052955201576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 81345.98697522872,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81341.53971392066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66000.02299067215,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 65999.44407801682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 66093.31710997943,
            "unit": "ns/iter",
            "extra": "iterations: 10602\ncpu: 66092.9164308613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 67075.65421813805,
            "unit": "ns/iter",
            "extra": "iterations: 10443\ncpu: 67072.85262855572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 130455.08153387123,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130453.25763216779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 550995.2389936998,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550980.4245283053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 467620.1103678944,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 467614.5150501691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 468504.87641950406,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 468488.51035404316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 467311.5760214367,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 467285.66644340614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 308765.6447774475,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 308744.7774349891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 458817.919344278,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 458790.49180327315 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488582753,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6892.820341521694,
            "unit": "ns/iter",
            "extra": "iterations: 101487\ncpu: 6892.77444401746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 67029.61096667495,
            "unit": "ns/iter",
            "extra": "iterations: 12693\ncpu: 67028.81115575515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128201.89447312459,
            "unit": "ns/iter",
            "extra": "iterations: 6586\ncpu: 128196.9328879441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 189758.03673912573,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 189754.76086956516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 255310.81551424076,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 255293.11446833223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 309958.4091895742,
            "unit": "ns/iter",
            "extra": "iterations: 2764\ncpu: 309949.74674384965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 371082.08351086226,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 371079.1222837667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 431538.9578163778,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 431507.7915632755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 492746.1383039316,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 492736.8241320434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5239.700630315017,
            "unit": "ns/iter",
            "extra": "iterations: 133584\ncpu: 5239.458318361481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4498.967415600437,
            "unit": "ns/iter",
            "extra": "iterations: 155688\ncpu: 4498.703175581936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4505.575291342113,
            "unit": "ns/iter",
            "extra": "iterations: 155144\ncpu: 4505.282189449803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4482.15224139606,
            "unit": "ns/iter",
            "extra": "iterations: 155595\ncpu: 4481.964716089851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7772.884041523424,
            "unit": "ns/iter",
            "extra": "iterations: 89877\ncpu: 7772.812844220442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30678.864167478565,
            "unit": "ns/iter",
            "extra": "iterations: 26702\ncpu: 30677.555988315486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 128993.76287889689,
            "unit": "ns/iter",
            "extra": "iterations: 6697\ncpu: 128991.66791100519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101525.7635778976,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 101523.41591233917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100598.51457109272,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 100598.80141010559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101484.16670619353,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 101479.93834479515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 250060.04555875162,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 250058.1948424076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2009715.1475053595,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2009591.3232104147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1659439.1571428804,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1659403.7500000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1634365.5396825196,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1634286.9488536157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1631648.3996479053,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1631641.1971830959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 990140.1833688737,
            "unit": "ns/iter",
            "extra": "iterations: 938\ncpu: 990088.9125799573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1596869.2444061877,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1596753.700516352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6800622.519999705,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6800311.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3910741.6708333176,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3910565.833333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8237918.0225563375,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8236886.466165407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30240.29215014589,
            "unit": "ns/iter",
            "extra": "iterations: 27147\ncpu: 30240.184919143943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128765.27083960109,
            "unit": "ns/iter",
            "extra": "iterations: 6646\ncpu: 128755.49202527797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102740.06522262843,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 102739.21780986756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101857.28783911867,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 101851.5349833412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 102957.52747384917,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 102958.37441385075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 251843.67460085827,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 251834.60087082814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2032041.4671052103,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2031909.6491228093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1664002.0249553495,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1663908.9126559696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1633158.0615113634,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1633114.9384885759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1640315.9701229627,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1640272.0562390122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 985057.7144373703,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 984972.1868365159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1601824.3109964998,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1601742.0962199324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6827449.740000021,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6826954.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3927024.183333335,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3926863.7499999907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29944.107646058786,
            "unit": "ns/iter",
            "extra": "iterations: 27609\ncpu: 29944.003766887563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126734.07999999721,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 126731.40740740664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102598.55667144974,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 102592.57532281223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100168.39822284819,
            "unit": "ns/iter",
            "extra": "iterations: 8553\ncpu: 100166.4211387817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101886.41731816817,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 101884.55342335926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 249861.5070382053,
            "unit": "ns/iter",
            "extra": "iterations: 3481\ncpu: 249853.950014363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2022185.2754880146,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2022022.9934923968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1662535.5062388636,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1662512.6559714868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1663174.414462054,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1663118.8712522124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1640428.7530864694,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1640359.7883597899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1007044.1195175555,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 1006985.6359649115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1607013.0346620954,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1606940.0346620341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2779.86579487714,
            "unit": "ns/iter",
            "extra": "iterations: 252278\ncpu: 2779.7061178541007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14946.449899547859,
            "unit": "ns/iter",
            "extra": "iterations: 47784\ncpu: 14945.079943077179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11271.352011100285,
            "unit": "ns/iter",
            "extra": "iterations: 61981\ncpu: 11271.113728400693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11490.561253607866,
            "unit": "ns/iter",
            "extra": "iterations: 60976\ncpu: 11490.671739700863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9277.842264820534,
            "unit": "ns/iter",
            "extra": "iterations: 75538\ncpu: 9277.511980725016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57367.842402884184,
            "unit": "ns/iter",
            "extra": "iterations: 12202\ncpu: 57365.66956236669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 130354.69707689752,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 130354.16123626863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33373.66747851024,
            "unit": "ns/iter",
            "extra": "iterations: 20940\ncpu: 33372.024832855976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33232.218290483805,
            "unit": "ns/iter",
            "extra": "iterations: 21082\ncpu: 33231.75694905637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33249.57228887289,
            "unit": "ns/iter",
            "extra": "iterations: 21089\ncpu: 33248.98762388012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68476.48409755649,
            "unit": "ns/iter",
            "extra": "iterations: 10250\ncpu: 68475.83414634211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60347.135741932274,
            "unit": "ns/iter",
            "extra": "iterations: 11625\ncpu: 60345.60000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17205.903642572266,
            "unit": "ns/iter",
            "extra": "iterations: 40713\ncpu: 17205.587895757955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 83347.01177029943,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 83347.84211152038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 67029.77329757466,
            "unit": "ns/iter",
            "extra": "iterations: 10441\ncpu: 67027.88047121864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 66124.60058474044,
            "unit": "ns/iter",
            "extra": "iterations: 10603\ncpu: 66123.98377817617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 66039.08180535643,
            "unit": "ns/iter",
            "extra": "iterations: 10635\ncpu: 66036.4927127403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 129983.83859583567,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 129983.26523031158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 559026.3000000049,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 559031.3600000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 471783.98369561875,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 471773.4375000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 475270.12815267366,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 475250.23858213716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 499761.8146406766,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 499760.4432505068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 307780.8204565401,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 307772.3441615465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 462873.50561797916,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 462868.07666887785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17527.75474952418,
            "unit": "ns/iter",
            "extra": "iterations: 40004\ncpu: 17527.677232276863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 82646.17326089872,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 82645.6005669078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66504.21613148539,
            "unit": "ns/iter",
            "extra": "iterations: 10526\ncpu: 66502.82158464735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 66686.87385081983,
            "unit": "ns/iter",
            "extra": "iterations: 10551\ncpu: 66685.32840489129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66951.50105182326,
            "unit": "ns/iter",
            "extra": "iterations: 10458\ncpu: 66950.32510996315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 130688.46331471193,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130685.7728119183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 558586.4631999811,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 558581.3599999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 473475.2137042245,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 473464.11126187595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 473960.12737129634,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 473957.3170731726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 469763.8661312091,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 469742.9718875513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 308879.4370304804,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 308882.4569155968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 462619.432253798,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 462617.05221414904 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}