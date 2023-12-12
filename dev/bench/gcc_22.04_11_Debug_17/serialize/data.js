window.BENCHMARK_DATA = {
  "lastUpdate": 1702397899324,
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
      }
    ]
  }
}