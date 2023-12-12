window.BENCHMARK_DATA = {
  "lastUpdate": 1702420964542,
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
      }
    ]
  }
}