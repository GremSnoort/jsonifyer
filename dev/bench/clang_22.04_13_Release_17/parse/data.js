window.BENCHMARK_DATA = {
  "lastUpdate": 1702493556028,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 22.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702491006049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.773151490077,
            "unit": "ns/iter",
            "extra": "iterations: 1244002\ncpu: 564.7817286467385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5370.014229999923,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5370.022999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10354.102953438702,
            "unit": "ns/iter",
            "extra": "iterations: 80347\ncpu: 10354.269605585772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15312.931701292,
            "unit": "ns/iter",
            "extra": "iterations: 54247\ncpu: 15312.632956661195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20628.45566014258,
            "unit": "ns/iter",
            "extra": "iterations: 40370\ncpu: 20628.090165964823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25779.388929751152,
            "unit": "ns/iter",
            "extra": "iterations: 32628\ncpu: 25777.583670467095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30097.91823810776,
            "unit": "ns/iter",
            "extra": "iterations: 28424\ncpu: 30096.186321418514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34627.28208006117,
            "unit": "ns/iter",
            "extra": "iterations: 24057\ncpu: 34625.38138587521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39530.40127211102,
            "unit": "ns/iter",
            "extra": "iterations: 21539\ncpu: 39527.638237615494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 550.4854027528386,
            "unit": "ns/iter",
            "extra": "iterations: 1258936\ncpu: 550.4841389872078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 424.465605212611,
            "unit": "ns/iter",
            "extra": "iterations: 1663944\ncpu: 424.4532267912865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.4267856399437,
            "unit": "ns/iter",
            "extra": "iterations: 1705929\ncpu: 411.4247427647929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 424.4422503568109,
            "unit": "ns/iter",
            "extra": "iterations: 1649534\ncpu: 424.42368571972446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 874.0306353180464,
            "unit": "ns/iter",
            "extra": "iterations: 816835\ncpu: 874.0308630261924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2145.317418221249,
            "unit": "ns/iter",
            "extra": "iterations: 374424\ncpu: 2145.263391235604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10537.843316195913,
            "unit": "ns/iter",
            "extra": "iterations: 77800\ncpu: 10537.338046272509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8183.598640676413,
            "unit": "ns/iter",
            "extra": "iterations: 100344\ncpu: 8182.854978872666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8046.280587691932,
            "unit": "ns/iter",
            "extra": "iterations: 101822\ncpu: 8046.0804148415955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8131.703371524527,
            "unit": "ns/iter",
            "extra": "iterations: 100459\ncpu: 8131.504394827724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29608.50299809667,
            "unit": "ns/iter",
            "extra": "iterations: 27851\ncpu: 29607.069764101783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 252561.79708454304,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 252549.1836734689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196145.47884393268,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 196139.88439306355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200435.5508552895,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 200419.0938511327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197066.75190048857,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 197060.14743146754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104378.37613472487,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 104370.98662207347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192987.6084726727,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 192988.69565217377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5322.778280000193,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5322.251000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29321.967304982398,
            "unit": "ns/iter",
            "extra": "iterations: 29087\ncpu: 29318.523739127417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22238.35218338258,
            "unit": "ns/iter",
            "extra": "iterations: 37648\ncpu: 22238.129515512035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22182.47291229308,
            "unit": "ns/iter",
            "extra": "iterations: 37637\ncpu: 22179.759279432405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22295.98950396829,
            "unit": "ns/iter",
            "extra": "iterations: 37538\ncpu: 22296.456923650683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48388.32669877639,
            "unit": "ns/iter",
            "extra": "iterations: 17233\ncpu: 48386.79278129174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 274786.3900440947,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 274767.3597983629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 215839.9285537081,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 215835.92160754075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216451.17648514578,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 216440.6435643554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 216807.9525457316,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 216802.81759762779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117510.05203558727,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 117500.02696144428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204981.90713612858,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 204982.1833648387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 860960.6881232976,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 860893.3816863077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 480350.6214902754,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 480345.3563714924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2034.5457394558923,
            "unit": "ns/iter",
            "extra": "iterations: 389915\ncpu: 2034.517523049896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10426.703238014927,
            "unit": "ns/iter",
            "extra": "iterations: 80327\ncpu: 10426.877637656095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8207.4281486294,
            "unit": "ns/iter",
            "extra": "iterations: 101703\ncpu: 8206.840506179718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7879.913081985021,
            "unit": "ns/iter",
            "extra": "iterations: 105007\ncpu: 7879.952765053769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7750.515085522943,
            "unit": "ns/iter",
            "extra": "iterations: 106990\ncpu: 7750.240209365365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29303.13191400523,
            "unit": "ns/iter",
            "extra": "iterations: 28746\ncpu: 29302.93953941413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263645.0159810434,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 263604.14323764347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198411.15596948285,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 198406.0368043089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197714.65382030405,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 197696.16849652654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198148.73949955127,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 198143.49865951843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101611.59718833436,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 101600.72034390652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189833.46649317452,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 189826.241596183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 212.1617397097013,
            "unit": "ns/iter",
            "extra": "iterations: 3296389\ncpu: 212.1522672233162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1505.5601423672792,
            "unit": "ns/iter",
            "extra": "iterations: 464714\ncpu: 1505.4838029411706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1170.1605992141842,
            "unit": "ns/iter",
            "extra": "iterations: 598851\ncpu: 1170.0751939965012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1171.8251535225281,
            "unit": "ns/iter",
            "extra": "iterations: 599423\ncpu: 1171.8173977308195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 874.4649565666117,
            "unit": "ns/iter",
            "extra": "iterations: 800421\ncpu: 874.4264580764393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9298.414939246815,
            "unit": "ns/iter",
            "extra": "iterations: 75305\ncpu: 9298.146205431174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12231.596485363938,
            "unit": "ns/iter",
            "extra": "iterations: 56848\ncpu: 12230.88059386437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2809.1331877645553,
            "unit": "ns/iter",
            "extra": "iterations: 250511\ncpu: 2808.94212230201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2783.5973650592096,
            "unit": "ns/iter",
            "extra": "iterations: 250480\ncpu: 2783.4421909932853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2779.186082308613,
            "unit": "ns/iter",
            "extra": "iterations: 248820\ncpu: 2779.0458966320866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5296.604570489733,
            "unit": "ns/iter",
            "extra": "iterations: 131452\ncpu: 5296.400206919662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5080.712100260016,
            "unit": "ns/iter",
            "extra": "iterations: 138121\ncpu: 5080.558351011052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1986.4633763296347,
            "unit": "ns/iter",
            "extra": "iterations: 352122\ncpu: 1986.390796371711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10329.387921928721,
            "unit": "ns/iter",
            "extra": "iterations: 69117\ncpu: 10328.851078605843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8183.737574530474,
            "unit": "ns/iter",
            "extra": "iterations: 85369\ncpu: 8183.278473450556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8136.761891483834,
            "unit": "ns/iter",
            "extra": "iterations: 86070\ncpu: 8136.514464970366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8011.547935483983,
            "unit": "ns/iter",
            "extra": "iterations: 87357\ncpu: 8011.124466270688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18221.757499413976,
            "unit": "ns/iter",
            "extra": "iterations: 38503\ncpu: 18221.6087058151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55424.93796054101,
            "unit": "ns/iter",
            "extra": "iterations: 12621\ncpu: 55423.12019649799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43493.60514583883,
            "unit": "ns/iter",
            "extra": "iterations: 15702\ncpu: 43493.803337154866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43674.55320872178,
            "unit": "ns/iter",
            "extra": "iterations: 16050\ncpu: 43672.97819314641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43721.964837212625,
            "unit": "ns/iter",
            "extra": "iterations: 16125\ncpu: 43722.04031007761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25686.20450683204,
            "unit": "ns/iter",
            "extra": "iterations: 27070\ncpu: 25685.038788326186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43122.982469088536,
            "unit": "ns/iter",
            "extra": "iterations: 16257\ncpu: 43122.69791474408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1963.9823631428847,
            "unit": "ns/iter",
            "extra": "iterations: 357490\ncpu: 1963.872555875695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10089.758085344849,
            "unit": "ns/iter",
            "extra": "iterations: 68921\ncpu: 10089.792661162637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8256.048402312139,
            "unit": "ns/iter",
            "extra": "iterations: 84810\ncpu: 8255.550053059811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8130.138430546066,
            "unit": "ns/iter",
            "extra": "iterations: 85877\ncpu: 8130.069750922746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8094.6003095863325,
            "unit": "ns/iter",
            "extra": "iterations: 86567\ncpu: 8094.57876558043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18039.034240945693,
            "unit": "ns/iter",
            "extra": "iterations: 38930\ncpu: 18038.258412535506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54801.883571311686,
            "unit": "ns/iter",
            "extra": "iterations: 12746\ncpu: 54801.56911972423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43492.904522298646,
            "unit": "ns/iter",
            "extra": "iterations: 15899\ncpu: 43491.301339707075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43978.368967040806,
            "unit": "ns/iter",
            "extra": "iterations: 15809\ncpu: 43979.157441963594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43386.09893795093,
            "unit": "ns/iter",
            "extra": "iterations: 16101\ncpu: 43385.49158437333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26047.08243942798,
            "unit": "ns/iter",
            "extra": "iterations: 26662\ncpu: 26045.87052734223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42906.3691716953,
            "unit": "ns/iter",
            "extra": "iterations: 16407\ncpu: 42907.10062778036 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702493555672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 572.9591861188846,
            "unit": "ns/iter",
            "extra": "iterations: 1235119\ncpu: 572.9487604028437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5201.38621000001,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5200.818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9985.639519102682,
            "unit": "ns/iter",
            "extra": "iterations: 83261\ncpu: 9985.002582241386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15118.48311219519,
            "unit": "ns/iter",
            "extra": "iterations: 55395\ncpu: 15117.738063002082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20012.094098730056,
            "unit": "ns/iter",
            "extra": "iterations: 41669\ncpu: 20010.823393889954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24866.225083652647,
            "unit": "ns/iter",
            "extra": "iterations: 33472\ncpu: 24864.74366634799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29684.272636139573,
            "unit": "ns/iter",
            "extra": "iterations: 27931\ncpu: 29682.06652106978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34886.59926669689,
            "unit": "ns/iter",
            "extra": "iterations: 24001\ncpu: 34885.0089579601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39053.48265696085,
            "unit": "ns/iter",
            "extra": "iterations: 21709\ncpu: 39052.029112349665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 548.1005616522808,
            "unit": "ns/iter",
            "extra": "iterations: 1282288\ncpu: 548.0653332168756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 419.9029488352314,
            "unit": "ns/iter",
            "extra": "iterations: 1648244\ncpu: 419.8972967594606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 406.0088275507237,
            "unit": "ns/iter",
            "extra": "iterations: 1723921\ncpu: 406.0094981150528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 419.17917004839285,
            "unit": "ns/iter",
            "extra": "iterations: 1670748\ncpu: 419.15501320366684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 851.3157464247422,
            "unit": "ns/iter",
            "extra": "iterations: 822809\ncpu: 851.289667468392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2138.5822164176134,
            "unit": "ns/iter",
            "extra": "iterations: 373648\ncpu: 2138.540551535133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10215.637220905255,
            "unit": "ns/iter",
            "extra": "iterations: 80170\ncpu: 10215.536983909198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8430.421629965647,
            "unit": "ns/iter",
            "extra": "iterations: 97818\ncpu: 8429.779795129716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8183.3790580888435,
            "unit": "ns/iter",
            "extra": "iterations: 101156\ncpu: 8182.876942544188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8242.79053714186,
            "unit": "ns/iter",
            "extra": "iterations: 99378\ncpu: 8242.1079112077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29868.549908273868,
            "unit": "ns/iter",
            "extra": "iterations: 27801\ncpu: 29867.67742167549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256232.2893400909,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 256221.55867423114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197025.1774267396,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 197019.391025641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201429.6689686909,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 201420.41896869268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201380.32406982666,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 201376.66513550765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102994.80122684907,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 102990.78683496533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191535.78934677155,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 191532.2665497587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5218.306670000175,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5218.028000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29044.486818856996,
            "unit": "ns/iter",
            "extra": "iterations: 28867\ncpu: 29044.310111892435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22470.434059141797,
            "unit": "ns/iter",
            "extra": "iterations: 37200\ncpu: 22469.575268817207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22579.71289120244,
            "unit": "ns/iter",
            "extra": "iterations: 37289\ncpu: 22578.76585588243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22505.469176446484,
            "unit": "ns/iter",
            "extra": "iterations: 37666\ncpu: 22502.986778527124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46998.03063358221,
            "unit": "ns/iter",
            "extra": "iterations: 17693\ncpu: 46997.88051771882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 275140.8446540794,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 275125.31446540897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 215559.17134344246,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 215547.156692327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216429.60927152165,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 216427.3485405941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214730.6892156815,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 214725.29411764868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117498.35949028698,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 117495.74782025474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204516.96093197548,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 204509.53165450666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 854230.4596049767,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 854161.4901256762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 471461.19037433696,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 471424.65240641637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2049.9734644425603,
            "unit": "ns/iter",
            "extra": "iterations: 392040\ncpu: 2049.8487399244927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10025.181722638901,
            "unit": "ns/iter",
            "extra": "iterations: 82780\ncpu: 10024.509543367909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7797.857709379742,
            "unit": "ns/iter",
            "extra": "iterations: 105657\ncpu: 7797.509866833239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7867.600273294266,
            "unit": "ns/iter",
            "extra": "iterations: 104649\ncpu: 7867.147321044671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7972.106450611903,
            "unit": "ns/iter",
            "extra": "iterations: 103184\ncpu: 7971.62738409054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29392.893735745216,
            "unit": "ns/iter",
            "extra": "iterations: 28495\ncpu: 29390.994911387934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262880.5621301602,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 262866.2721893498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197310.53977527533,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 197299.66292134812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197705.69187736866,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 197691.31796822546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197500.65890257512,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 197487.32362821847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101661.35266981562,
            "unit": "ns/iter",
            "extra": "iterations: 8671\ncpu: 101660.22373428626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190005.94091105362,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 190000.19338203565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.26481205591602,
            "unit": "ns/iter",
            "extra": "iterations: 3360202\ncpu: 209.25959213166462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1511.9662658140164,
            "unit": "ns/iter",
            "extra": "iterations: 463595\ncpu: 1511.8918452528553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1175.6997274374362,
            "unit": "ns/iter",
            "extra": "iterations: 597294\ncpu: 1175.6794811265465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1181.6403130080857,
            "unit": "ns/iter",
            "extra": "iterations: 590911\ncpu: 1181.639367011274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 926.6517657111219,
            "unit": "ns/iter",
            "extra": "iterations: 756126\ncpu: 926.6193729616552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9293.237894091482,
            "unit": "ns/iter",
            "extra": "iterations: 75046\ncpu: 9292.80574580927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12372.673176716364,
            "unit": "ns/iter",
            "extra": "iterations: 57040\ncpu: 12372.268583450134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2782.547852738781,
            "unit": "ns/iter",
            "extra": "iterations: 249923\ncpu: 2782.4902069837385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2795.684991478493,
            "unit": "ns/iter",
            "extra": "iterations: 251717\ncpu: 2795.570025067844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2807.1933661308185,
            "unit": "ns/iter",
            "extra": "iterations: 249206\ncpu: 2807.1242265435285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5366.721493046409,
            "unit": "ns/iter",
            "extra": "iterations: 130284\ncpu: 5366.60065702621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5323.127352853362,
            "unit": "ns/iter",
            "extra": "iterations: 131383\ncpu: 5323.083656180798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1988.1238508690399,
            "unit": "ns/iter",
            "extra": "iterations: 354507\ncpu: 1988.0986835238884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10249.758466165573,
            "unit": "ns/iter",
            "extra": "iterations: 68508\ncpu: 10249.169440065354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8178.288259679919,
            "unit": "ns/iter",
            "extra": "iterations: 86599\ncpu: 8177.952401297921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8149.987763552275,
            "unit": "ns/iter",
            "extra": "iterations: 86463\ncpu: 8149.636260597098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8157.252447090776,
            "unit": "ns/iter",
            "extra": "iterations: 86327\ncpu: 8157.1582471301035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18142.23017463392,
            "unit": "ns/iter",
            "extra": "iterations: 38423\ncpu: 18142.177862218286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55328.22923509858,
            "unit": "ns/iter",
            "extra": "iterations: 12786\ncpu: 55325.183794776036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44155.659924143394,
            "unit": "ns/iter",
            "extra": "iterations: 15820\ncpu: 44155.10113780017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44106.162108153185,
            "unit": "ns/iter",
            "extra": "iterations: 16014\ncpu: 44105.67003871582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43736.36899646116,
            "unit": "ns/iter",
            "extra": "iterations: 15824\ncpu: 43735.19337714867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25932.937409725655,
            "unit": "ns/iter",
            "extra": "iterations: 27001\ncpu: 25932.102514721766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43211.575639361115,
            "unit": "ns/iter",
            "extra": "iterations: 16149\ncpu: 43209.5176171897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1941.5661715236035,
            "unit": "ns/iter",
            "extra": "iterations: 358213\ncpu: 1941.5359018237766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10140.703028717873,
            "unit": "ns/iter",
            "extra": "iterations: 68808\ncpu: 10140.355772584531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8192.125740197835,
            "unit": "ns/iter",
            "extra": "iterations: 85788\ncpu: 8191.977899006832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8004.5894581579605,
            "unit": "ns/iter",
            "extra": "iterations: 86778\ncpu: 8004.387056627247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7992.077616850545,
            "unit": "ns/iter",
            "extra": "iterations: 86927\ncpu: 7991.8299262598985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18188.60362016693,
            "unit": "ns/iter",
            "extra": "iterations: 38617\ncpu: 18188.554263666425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55041.52176971637,
            "unit": "ns/iter",
            "extra": "iterations: 12793\ncpu: 55039.3027436873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43724.301529815006,
            "unit": "ns/iter",
            "extra": "iterations: 16015\ncpu: 43723.24695597924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43548.76336119889,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 43547.030141843614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43813.115179633765,
            "unit": "ns/iter",
            "extra": "iterations: 15949\ncpu: 43813.016490061935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25962.446576457136,
            "unit": "ns/iter",
            "extra": "iterations: 27048\ncpu: 25961.120970126856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43344.14880771371,
            "unit": "ns/iter",
            "extra": "iterations: 16397\ncpu: 43343.61163627447 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}