window.BENCHMARK_DATA = {
  "lastUpdate": 1705955729347,
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
        "date": 1702504643448,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 566.9022577041903,
            "unit": "ns/iter",
            "extra": "iterations: 1241571\ncpu: 566.9089403666806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5345.612940000137,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5345.181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10725.228516038109,
            "unit": "ns/iter",
            "extra": "iterations: 80467\ncpu: 10724.298159493952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15205.278388343682,
            "unit": "ns/iter",
            "extra": "iterations: 55595\ncpu: 15204.658692328445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20511.994024868294,
            "unit": "ns/iter",
            "extra": "iterations: 41338\ncpu: 20511.173738448895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25002.481683900056,
            "unit": "ns/iter",
            "extra": "iterations: 33850\ncpu: 25000.791728212702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30353.598412350482,
            "unit": "ns/iter",
            "extra": "iterations: 27588\ncpu: 30351.86675366102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35193.48094834547,
            "unit": "ns/iter",
            "extra": "iterations: 23620\ncpu: 35191.50296359016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39526.13282019874,
            "unit": "ns/iter",
            "extra": "iterations: 21307\ncpu: 39525.84596611443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 548.3328795300798,
            "unit": "ns/iter",
            "extra": "iterations: 1283963\ncpu: 548.3080119909994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 419.9539145239005,
            "unit": "ns/iter",
            "extra": "iterations: 1652321\ncpu: 419.9529631348878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.71467852433193,
            "unit": "ns/iter",
            "extra": "iterations: 1691839\ncpu: 413.7148392961749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 428.47076298669066,
            "unit": "ns/iter",
            "extra": "iterations: 1652768\ncpu: 428.4399262328405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 851.8579806923834,
            "unit": "ns/iter",
            "extra": "iterations: 815537\ncpu: 851.8415473485571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2142.5963898047557,
            "unit": "ns/iter",
            "extra": "iterations: 373110\ncpu: 2142.5735037924464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10518.593851215011,
            "unit": "ns/iter",
            "extra": "iterations: 79040\ncpu: 10518.426113360323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8018.4072967386,
            "unit": "ns/iter",
            "extra": "iterations: 102073\ncpu: 8018.123303909934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8562.377484886332,
            "unit": "ns/iter",
            "extra": "iterations: 96433\ncpu: 8561.980857175467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8272.867126893658,
            "unit": "ns/iter",
            "extra": "iterations: 99516\ncpu: 8272.534064873982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29793.600392700842,
            "unit": "ns/iter",
            "extra": "iterations: 27502\ncpu: 29792.040578867043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 249476.5552684326,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 249468.1883433826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 193939.85364736288,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 193928.8817745259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 194565.32980193608,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 194554.97466605224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 195225.42627839695,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 195211.85507911086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103395.41834318933,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 103391.51479289928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192184.7661934228,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 192176.64152617566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5278.309679999893,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5277.934000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28212.825796039626,
            "unit": "ns/iter",
            "extra": "iterations: 29741\ncpu: 28210.92431323762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22122.81936620615,
            "unit": "ns/iter",
            "extra": "iterations: 37457\ncpu: 22121.910457324353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22260.055066253542,
            "unit": "ns/iter",
            "extra": "iterations: 37809\ncpu: 22259.02298394568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22195.44758407815,
            "unit": "ns/iter",
            "extra": "iterations: 37584\ncpu: 22194.596104725395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48355.08121856741,
            "unit": "ns/iter",
            "extra": "iterations: 17299\ncpu: 48353.87594658645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 273762.9500471081,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 273750.07854225393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 213463.01237012565,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 213455.86343394403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215615.49356118936,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 215611.41654284374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214379.6115742919,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 214366.74840608117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118154.49462072614,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 118150.64687457429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206586.41935485337,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 206572.53320683105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 847048.1353790695,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 847007.9422382715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 467563.0909090865,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 467535.3594080333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2052.963517583578,
            "unit": "ns/iter",
            "extra": "iterations: 390791\ncpu: 2052.875322103123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10221.094811878113,
            "unit": "ns/iter",
            "extra": "iterations: 81224\ncpu: 10220.571505958815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7779.468539559588,
            "unit": "ns/iter",
            "extra": "iterations: 105434\ncpu: 7778.786729138571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7872.404726041061,
            "unit": "ns/iter",
            "extra": "iterations: 104231\ncpu: 7871.961316690834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7659.4451555633295,
            "unit": "ns/iter",
            "extra": "iterations: 107030\ncpu: 7659.162851536928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29107.122209610454,
            "unit": "ns/iter",
            "extra": "iterations: 29073\ncpu: 29105.32452791251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260392.07285546768,
            "unit": "ns/iter",
            "extra": "iterations: 3404\ncpu: 260374.4712103407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 196942.1854171504,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 196934.04160143257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198675.7818920716,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 198662.47459923165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198253.02709417487,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 198242.1991420188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100886.10905963332,
            "unit": "ns/iter",
            "extra": "iterations: 8720\ncpu: 100878.01605504594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192365.62633761283,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 192356.49705175764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.24339364959312,
            "unit": "ns/iter",
            "extra": "iterations: 3377697\ncpu: 209.23013520750976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1516.5178612995314,
            "unit": "ns/iter",
            "extra": "iterations: 463964\ncpu: 1516.4213171711672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1230.5076799289839,
            "unit": "ns/iter",
            "extra": "iterations: 566737\ncpu: 1230.5100955116761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1177.5375713784224,
            "unit": "ns/iter",
            "extra": "iterations: 594016\ncpu: 1177.5123902386376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 913.2062607232712,
            "unit": "ns/iter",
            "extra": "iterations: 765279\ncpu: 913.1881313873732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9448.553704128073,
            "unit": "ns/iter",
            "extra": "iterations: 74417\ncpu: 9448.234946315952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12557.248289414281,
            "unit": "ns/iter",
            "extra": "iterations: 55975\ncpu: 12556.878963823232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2820.952593127209,
            "unit": "ns/iter",
            "extra": "iterations: 246652\ncpu: 2820.909216223657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2825.055220819899,
            "unit": "ns/iter",
            "extra": "iterations: 251608\ncpu: 2824.9471399955432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2839.866255446715,
            "unit": "ns/iter",
            "extra": "iterations: 251285\ncpu: 2837.332112939508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5352.241173705471,
            "unit": "ns/iter",
            "extra": "iterations: 127630\ncpu: 5351.834208258234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5326.026602903679,
            "unit": "ns/iter",
            "extra": "iterations: 132993\ncpu: 5325.997608896748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1968.9807971430264,
            "unit": "ns/iter",
            "extra": "iterations: 356197\ncpu: 1968.9548199451297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10040.053262510686,
            "unit": "ns/iter",
            "extra": "iterations: 68904\ncpu: 10039.95994427021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8084.904476153359,
            "unit": "ns/iter",
            "extra": "iterations: 85989\ncpu: 8084.586400586214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8087.282558595273,
            "unit": "ns/iter",
            "extra": "iterations: 86782\ncpu: 8087.064137724404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8047.501526350267,
            "unit": "ns/iter",
            "extra": "iterations: 87136\ncpu: 8047.384548292228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18120.933817239817,
            "unit": "ns/iter",
            "extra": "iterations: 38575\ncpu: 18120.2618276087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56073.11221784363,
            "unit": "ns/iter",
            "extra": "iterations: 12449\ncpu: 56072.43152060361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44121.41422646294,
            "unit": "ns/iter",
            "extra": "iterations: 15914\ncpu: 44119.54254115894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43816.53712887089,
            "unit": "ns/iter",
            "extra": "iterations: 15931\ncpu: 43814.83899315818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43966.67686028288,
            "unit": "ns/iter",
            "extra": "iterations: 15925\ncpu: 43964.96703296663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26013.593244245247,
            "unit": "ns/iter",
            "extra": "iterations: 26940\ncpu: 26012.44246473628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43843.15451639597,
            "unit": "ns/iter",
            "extra": "iterations: 15953\ncpu: 43842.010907038835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1943.6908176750237,
            "unit": "ns/iter",
            "extra": "iterations: 360192\ncpu: 1943.57509328361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9998.410321173784,
            "unit": "ns/iter",
            "extra": "iterations: 69682\ncpu: 9997.985132458827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8176.820965620741,
            "unit": "ns/iter",
            "extra": "iterations: 85168\ncpu: 8176.772966372228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8196.340063587488,
            "unit": "ns/iter",
            "extra": "iterations: 85237\ncpu: 8196.100285087457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8177.259902123106,
            "unit": "ns/iter",
            "extra": "iterations: 85209\ncpu: 8177.237146310753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18073.41913034445,
            "unit": "ns/iter",
            "extra": "iterations: 38797\ncpu: 18072.528803773315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54058.59091260286,
            "unit": "ns/iter",
            "extra": "iterations: 12919\ncpu: 54056.018267668434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43105.99678794227,
            "unit": "ns/iter",
            "extra": "iterations: 16189\ncpu: 43103.95330162429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43362.81686882372,
            "unit": "ns/iter",
            "extra": "iterations: 15994\ncpu: 43362.49843691451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43037.41813462199,
            "unit": "ns/iter",
            "extra": "iterations: 16179\ncpu: 43035.1381420357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25862.921817572395,
            "unit": "ns/iter",
            "extra": "iterations: 26937\ncpu: 25862.044771132383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42464.21220159171,
            "unit": "ns/iter",
            "extra": "iterations: 16588\ncpu: 42464.08849770944 ns\nthreads: 1"
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
        "date": 1705576299589,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 570.2793809907527,
            "unit": "ns/iter",
            "extra": "iterations: 1230030\ncpu: 570.2550344300546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5285.4322900009265,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5285.26 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10379.048402662427,
            "unit": "ns/iter",
            "extra": "iterations: 80822\ncpu: 10378.760733463663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15460.61837837763,
            "unit": "ns/iter",
            "extra": "iterations: 54575\ncpu: 15460.04947320202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20287.70923827258,
            "unit": "ns/iter",
            "extra": "iterations: 41209\ncpu: 20287.150865102285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25396.978315863795,
            "unit": "ns/iter",
            "extra": "iterations: 33204\ncpu: 25395.416214913846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30191.967853123497,
            "unit": "ns/iter",
            "extra": "iterations: 27561\ncpu: 30191.18682195854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34871.941972918925,
            "unit": "ns/iter",
            "extra": "iterations: 23782\ncpu: 34870.33470692119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39143.6303058338,
            "unit": "ns/iter",
            "extra": "iterations: 21580\ncpu: 39142.54865616313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 538.4106249431559,
            "unit": "ns/iter",
            "extra": "iterations: 1286181\ncpu: 538.3771024451445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 421.4660580673862,
            "unit": "ns/iter",
            "extra": "iterations: 1693068\ncpu: 421.4594452201569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 406.7776758353346,
            "unit": "ns/iter",
            "extra": "iterations: 1682867\ncpu: 406.7709450598297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 413.6841657111856,
            "unit": "ns/iter",
            "extra": "iterations: 1687635\ncpu: 413.6548483528731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 857.9559759647576,
            "unit": "ns/iter",
            "extra": "iterations: 818462\ncpu: 857.9357380061638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2042.7656383946673,
            "unit": "ns/iter",
            "extra": "iterations: 386117\ncpu: 2042.6958667968527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9952.150698756686,
            "unit": "ns/iter",
            "extra": "iterations: 84221\ncpu: 9952.033340853237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7834.2522436598065,
            "unit": "ns/iter",
            "extra": "iterations: 104851\ncpu: 7833.940544200807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7802.34629412662,
            "unit": "ns/iter",
            "extra": "iterations: 105009\ncpu: 7801.961736613027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7832.358417496846,
            "unit": "ns/iter",
            "extra": "iterations: 104063\ncpu: 7832.020987286548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29823.710438545557,
            "unit": "ns/iter",
            "extra": "iterations: 28184\ncpu: 29822.356656258795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 250718.5808400652,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 250707.1346375135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199672.83367557827,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 199666.68948208954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196605.15640137522,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 196594.04844290635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197763.64641389842,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 197754.86523526724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103059.70359422042,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 103056.72735871373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191421.02539960056,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 191416.37836654254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5219.84820000057,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5219.556000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29068.557557834738,
            "unit": "ns/iter",
            "extra": "iterations: 28745\ncpu: 29067.458688467555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22400.655148996044,
            "unit": "ns/iter",
            "extra": "iterations: 36813\ncpu: 22399.978268546463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22377.045378929815,
            "unit": "ns/iter",
            "extra": "iterations: 36669\ncpu: 22376.30696228422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22409.674292515025,
            "unit": "ns/iter",
            "extra": "iterations: 37810\ncpu: 22409.045226130667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47716.24270186982,
            "unit": "ns/iter",
            "extra": "iterations: 17573\ncpu: 47715.28481192724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271432.9593114322,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 271416.682316118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 213017.7208731878,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 213010.79224920314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 213218.3494387316,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 213209.95607613557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212954.79096868454,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 212948.60403010415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116606.11518324025,
            "unit": "ns/iter",
            "extra": "iterations: 7449\ncpu: 116601.46328366261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 203881.05645348795,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 203868.75146404287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 855410.0975610192,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 855353.5682023494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 469942.9308342469,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 469920.0105596619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2059.853995660599,
            "unit": "ns/iter",
            "extra": "iterations: 390824\ncpu: 2059.7417251755123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10252.789818623934,
            "unit": "ns/iter",
            "extra": "iterations: 80716\ncpu: 10252.24366916102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8101.1271715031635,
            "unit": "ns/iter",
            "extra": "iterations: 101485\ncpu: 8100.524215401273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8325.857206396435,
            "unit": "ns/iter",
            "extra": "iterations: 98926\ncpu: 8325.331055536477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7820.722968752867,
            "unit": "ns/iter",
            "extra": "iterations: 105674\ncpu: 7820.308685201683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29699.501836290066,
            "unit": "ns/iter",
            "extra": "iterations: 28318\ncpu: 29696.673493890707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263836.8435435262,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 263821.02102102275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 196103.53295964122,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 196094.88789237587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198338.29986522824,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 198322.57412398874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197302.73688909117,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 197290.09149743462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101100.64700534094,
            "unit": "ns/iter",
            "extra": "iterations: 8799\ncpu: 101076.82691214925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190164.8018292571,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 190151.5897212548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 204.3792122991755,
            "unit": "ns/iter",
            "extra": "iterations: 3435416\ncpu: 204.3671858080645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1516.901477469201,
            "unit": "ns/iter",
            "extra": "iterations: 460991\ncpu: 1516.776032503884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1233.706765442368,
            "unit": "ns/iter",
            "extra": "iterations: 565861\ncpu: 1233.645365204531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1237.210508502661,
            "unit": "ns/iter",
            "extra": "iterations: 567293\ncpu: 1237.1467654281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 925.1306808036069,
            "unit": "ns/iter",
            "extra": "iterations: 756033\ncpu: 925.085280668969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9374.91271459227,
            "unit": "ns/iter",
            "extra": "iterations: 74560\ncpu: 9374.531920600795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12183.772266994489,
            "unit": "ns/iter",
            "extra": "iterations: 57080\ncpu: 12182.818850735832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2803.9371333436266,
            "unit": "ns/iter",
            "extra": "iterations: 252280\ncpu: 2803.737117488493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2832.639814643304,
            "unit": "ns/iter",
            "extra": "iterations: 248386\ncpu: 2832.401584630382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2772.138924584743,
            "unit": "ns/iter",
            "extra": "iterations: 252907\ncpu: 2771.9865405069904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5327.683960725546,
            "unit": "ns/iter",
            "extra": "iterations: 131895\ncpu: 5327.284582432993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5311.473663911553,
            "unit": "ns/iter",
            "extra": "iterations: 132233\ncpu: 5311.151527984681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1976.4522124940954,
            "unit": "ns/iter",
            "extra": "iterations: 354758\ncpu: 1976.4084248981067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10021.369472470555,
            "unit": "ns/iter",
            "extra": "iterations: 69380\ncpu: 10020.712020755243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8140.019982845524,
            "unit": "ns/iter",
            "extra": "iterations: 86274\ncpu: 8139.619120476733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8001.660881434437,
            "unit": "ns/iter",
            "extra": "iterations: 87176\ncpu: 8001.131045241776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8093.38627677984,
            "unit": "ns/iter",
            "extra": "iterations: 86350\ncpu: 8092.955414012879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18475.15737713492,
            "unit": "ns/iter",
            "extra": "iterations: 37928\ncpu: 18474.40677072352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54437.07213445743,
            "unit": "ns/iter",
            "extra": "iterations: 12851\ncpu: 54435.81822426216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43694.91439712908,
            "unit": "ns/iter",
            "extra": "iterations: 16156\ncpu: 43693.57514236197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43218.120314613945,
            "unit": "ns/iter",
            "extra": "iterations: 16274\ncpu: 43215.9272459134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43733.04029961119,
            "unit": "ns/iter",
            "extra": "iterations: 16154\ncpu: 43729.98019066419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25793.901018120938,
            "unit": "ns/iter",
            "extra": "iterations: 27207\ncpu: 25792.465174403358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42991.13049095528,
            "unit": "ns/iter",
            "extra": "iterations: 16254\ncpu: 42987.38156761462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1950.5477987823513,
            "unit": "ns/iter",
            "extra": "iterations: 358597\ncpu: 1950.359595869443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10089.5629360549,
            "unit": "ns/iter",
            "extra": "iterations: 69372\ncpu: 10089.188721674429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8240.673348198095,
            "unit": "ns/iter",
            "extra": "iterations: 85210\ncpu: 8239.928412158295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8263.154023178382,
            "unit": "ns/iter",
            "extra": "iterations: 84734\ncpu: 8263.08565628923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8177.209359144178,
            "unit": "ns/iter",
            "extra": "iterations: 85542\ncpu: 8176.786841551613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18116.800504393494,
            "unit": "ns/iter",
            "extra": "iterations: 38462\ncpu: 18115.789610524727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54168.60629305099,
            "unit": "ns/iter",
            "extra": "iterations: 12776\ncpu: 54164.8872886665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43316.22042372475,
            "unit": "ns/iter",
            "extra": "iterations: 16001\ncpu: 43313.94912817952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43648.22847908457,
            "unit": "ns/iter",
            "extra": "iterations: 16089\ncpu: 43645.78904841808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42972.417709039546,
            "unit": "ns/iter",
            "extra": "iterations: 16229\ncpu: 42971.7419434351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26161.832785540457,
            "unit": "ns/iter",
            "extra": "iterations: 26774\ncpu: 26161.070441472883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43293.50871900028,
            "unit": "ns/iter",
            "extra": "iterations: 16573\ncpu: 43291.667169492306 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774135746,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 602.3299166869992,
            "unit": "ns/iter",
            "extra": "iterations: 1163324\ncpu: 602.3000471063953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5700.136089999432,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5700.090000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11158.395299598518,
            "unit": "ns/iter",
            "extra": "iterations: 75568\ncpu: 11157.970304890961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16614.480339423513,
            "unit": "ns/iter",
            "extra": "iterations: 51499\ncpu: 16614.08765218742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21486.56366710339,
            "unit": "ns/iter",
            "extra": "iterations: 39039\ncpu: 21485.355669971057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27096.413068288828,
            "unit": "ns/iter",
            "extra": "iterations: 31542\ncpu: 27093.94775220341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31846.02817059962,
            "unit": "ns/iter",
            "extra": "iterations: 26659\ncpu: 31845.30177426007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36828.253774262776,
            "unit": "ns/iter",
            "extra": "iterations: 22256\ncpu: 36825.77282530556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42592.01068440632,
            "unit": "ns/iter",
            "extra": "iterations: 19842\ncpu: 42589.58774317098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 568.6063747171739,
            "unit": "ns/iter",
            "extra": "iterations: 1218156\ncpu: 568.5760280292499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.948854833715,
            "unit": "ns/iter",
            "extra": "iterations: 1560734\ncpu: 439.9409508603001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 431.3883733681232,
            "unit": "ns/iter",
            "extra": "iterations: 1634162\ncpu: 431.3703904508851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 440.2706896046258,
            "unit": "ns/iter",
            "extra": "iterations: 1602991\ncpu: 440.2532515778315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 897.3874242720789,
            "unit": "ns/iter",
            "extra": "iterations: 782571\ncpu: 897.3331493244717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2170.5715357240388,
            "unit": "ns/iter",
            "extra": "iterations: 370633\ncpu: 2170.4330159483907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10950.464618025842,
            "unit": "ns/iter",
            "extra": "iterations: 74586\ncpu: 10950.089829190452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8819.88254820121,
            "unit": "ns/iter",
            "extra": "iterations: 92787\ncpu: 8819.427290460946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8808.199584699565,
            "unit": "ns/iter",
            "extra": "iterations: 91500\ncpu: 8807.920218579256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8546.486450007793,
            "unit": "ns/iter",
            "extra": "iterations: 94834\ncpu: 8546.037286205368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31240.517750912175,
            "unit": "ns/iter",
            "extra": "iterations: 26055\ncpu: 31239.324505852954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273377.99140129023,
            "unit": "ns/iter",
            "extra": "iterations: 3140\ncpu: 273364.58598726126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209380.29093169622,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 209375.8260869567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 212120.68563023728,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 212109.07307503626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210940.34318352255,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 210931.98410727567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111999.3108880708,
            "unit": "ns/iter",
            "extra": "iterations: 7871\ncpu: 111991.30987168076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209059.31515732946,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 209049.0511650247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5682.74955999982,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5682.384999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 30614.45505886104,
            "unit": "ns/iter",
            "extra": "iterations: 27269\ncpu: 30613.396164142498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 24145.712579573155,
            "unit": "ns/iter",
            "extra": "iterations: 34246\ncpu: 24144.33218478066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 23903.372353347597,
            "unit": "ns/iter",
            "extra": "iterations: 34572\ncpu: 23902.78838366308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 23679.088820212513,
            "unit": "ns/iter",
            "extra": "iterations: 34947\ncpu: 23678.13260079543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49578.82446523209,
            "unit": "ns/iter",
            "extra": "iterations: 16783\ncpu: 49577.11970446262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294101.1216666614,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 294086.8666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 232862.8716861224,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 232849.78791092423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230893.104685401,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 230883.37349397576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 230522.67440633982,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 230514.5910290241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 125067.38888087812,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 125062.18050541454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217033.1085845808,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 217027.4655084317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 905192.5678537309,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 905157.3628488915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 497215.81864409696,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 497207.79661017115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2188.3526846174445,
            "unit": "ns/iter",
            "extra": "iterations: 361802\ncpu: 2188.28033012531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11297.151772952891,
            "unit": "ns/iter",
            "extra": "iterations: 73465\ncpu: 11296.873341046765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8774.072451069414,
            "unit": "ns/iter",
            "extra": "iterations: 94726\ncpu: 8773.77805459958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8548.66756525538,
            "unit": "ns/iter",
            "extra": "iterations: 93480\ncpu: 8548.464912280677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8465.636196535506,
            "unit": "ns/iter",
            "extra": "iterations: 99015\ncpu: 8465.379992930322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 30968.241266536446,
            "unit": "ns/iter",
            "extra": "iterations: 26908\ncpu: 30967.173331351303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 283028.6427879662,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 283006.84091642505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212782.05728274194,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 212772.1175030605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213046.12720587323,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 213039.92647058764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209961.94671355208,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 209945.06356505267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 109462.35625548656,
            "unit": "ns/iter",
            "extra": "iterations: 7969\ncpu: 109457.04605345703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 202417.16218764827,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 202392.5506836395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 214.7434566487228,
            "unit": "ns/iter",
            "extra": "iterations: 3256015\ncpu: 214.7324259869802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1605.8186983881615,
            "unit": "ns/iter",
            "extra": "iterations: 427470\ncpu: 1605.826841649694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1156.5331027768977,
            "unit": "ns/iter",
            "extra": "iterations: 589588\ncpu: 1156.499453855914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1174.3603462760054,
            "unit": "ns/iter",
            "extra": "iterations: 591667\ncpu: 1174.293479271277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 985.7534967868316,
            "unit": "ns/iter",
            "extra": "iterations: 740680\ncpu: 985.7414808014188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9746.92732024666,
            "unit": "ns/iter",
            "extra": "iterations: 71932\ncpu: 9746.417449813762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13434.211888097778,
            "unit": "ns/iter",
            "extra": "iterations: 51867\ncpu: 13434.243353191874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3077.397212997444,
            "unit": "ns/iter",
            "extra": "iterations: 230355\ncpu: 3077.3071997569195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2997.8110351330033,
            "unit": "ns/iter",
            "extra": "iterations: 233255\ncpu: 2997.714089730123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3141.226125846627,
            "unit": "ns/iter",
            "extra": "iterations: 232092\ncpu: 3141.0539785946676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5782.323205257143,
            "unit": "ns/iter",
            "extra": "iterations: 122037\ncpu: 5782.361906634856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5733.13639851799,
            "unit": "ns/iter",
            "extra": "iterations: 122494\ncpu: 5732.96406354597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2144.5664066189825,
            "unit": "ns/iter",
            "extra": "iterations: 328017\ncpu: 2144.4275754000682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 11158.80968660902,
            "unit": "ns/iter",
            "extra": "iterations: 63180\ncpu: 11158.515352959745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8843.47538280956,
            "unit": "ns/iter",
            "extra": "iterations: 80066\ncpu: 8842.977043938896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8732.357631317675,
            "unit": "ns/iter",
            "extra": "iterations: 80720\ncpu: 8732.399653121925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8644.391759653272,
            "unit": "ns/iter",
            "extra": "iterations: 80118\ncpu: 8643.927706632683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19541.34165045405,
            "unit": "ns/iter",
            "extra": "iterations: 35469\ncpu: 19539.747385040788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59528.644884657406,
            "unit": "ns/iter",
            "extra": "iterations: 11661\ncpu: 59526.344224337656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48353.016477425976,
            "unit": "ns/iter",
            "extra": "iterations: 14444\ncpu: 48351.57158681886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48410.079431442195,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48405.23968784808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48122.457425739936,
            "unit": "ns/iter",
            "extra": "iterations: 14645\ncpu: 48119.76101058295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28606.057988020693,
            "unit": "ns/iter",
            "extra": "iterations: 24712\ncpu: 28603.714794432035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48781.52150212181,
            "unit": "ns/iter",
            "extra": "iterations: 14859\ncpu: 48780.267851134486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2140.9501034111313,
            "unit": "ns/iter",
            "extra": "iterations: 331686\ncpu: 2140.8353080925954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11153.893397230297,
            "unit": "ns/iter",
            "extra": "iterations: 63019\ncpu: 11153.076056427437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8909.450401678749,
            "unit": "ns/iter",
            "extra": "iterations: 80537\ncpu: 8909.050498528595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8992.298439572933,
            "unit": "ns/iter",
            "extra": "iterations: 77607\ncpu: 8992.13859574524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8961.330467385733,
            "unit": "ns/iter",
            "extra": "iterations: 77345\ncpu: 8960.93347986303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19815.839616155106,
            "unit": "ns/iter",
            "extra": "iterations: 34910\ncpu: 19814.78945860765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59659.404729145484,
            "unit": "ns/iter",
            "extra": "iterations: 11630\ncpu: 59657.42906276906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47517.37673301405,
            "unit": "ns/iter",
            "extra": "iterations: 14570\ncpu: 47515.785861358294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47954.96980659898,
            "unit": "ns/iter",
            "extra": "iterations: 14374\ncpu: 47952.88715736794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47556.91464743075,
            "unit": "ns/iter",
            "extra": "iterations: 14692\ncpu: 47555.47236591326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28274.076258403293,
            "unit": "ns/iter",
            "extra": "iterations: 24535\ncpu: 28273.348277969937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47371.947817902306,
            "unit": "ns/iter",
            "extra": "iterations: 14871\ncpu: 47370.32479322194 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705775550589,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 567.0729763024592,
            "unit": "ns/iter",
            "extra": "iterations: 1233880\ncpu: 567.0541705838493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5346.437039999046,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5346.190999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10275.95121195863,
            "unit": "ns/iter",
            "extra": "iterations: 80737\ncpu: 10275.515562876995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15050.388263275956,
            "unit": "ns/iter",
            "extra": "iterations: 55501\ncpu: 15050.089187582204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20158.516997888233,
            "unit": "ns/iter",
            "extra": "iterations: 41211\ncpu: 20158.241731576512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24972.7282273736,
            "unit": "ns/iter",
            "extra": "iterations: 33425\ncpu: 24971.57816005983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29989.755319151107,
            "unit": "ns/iter",
            "extra": "iterations: 25474\ncpu: 29988.360681479146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34593.429086986434,
            "unit": "ns/iter",
            "extra": "iterations: 24107\ncpu: 34592.89832828638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39012.3859657217,
            "unit": "ns/iter",
            "extra": "iterations: 21704\ncpu: 39010.440471802445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 543.128596764,
            "unit": "ns/iter",
            "extra": "iterations: 1290118\ncpu: 543.1231096690381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 422.1127084148115,
            "unit": "ns/iter",
            "extra": "iterations: 1651394\ncpu: 422.0936978092452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.3967693264593,
            "unit": "ns/iter",
            "extra": "iterations: 1707322\ncpu: 409.3892657624036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.9602988874343,
            "unit": "ns/iter",
            "extra": "iterations: 1671666\ncpu: 415.9501359721381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 857.4566457987294,
            "unit": "ns/iter",
            "extra": "iterations: 816403\ncpu: 857.4239683097677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2936.225142982425,
            "unit": "ns/iter",
            "extra": "iterations: 273635\ncpu: 2936.17081148245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10704.146948051863,
            "unit": "ns/iter",
            "extra": "iterations: 78327\ncpu: 10703.819883309727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8546.242404117616,
            "unit": "ns/iter",
            "extra": "iterations: 96368\ncpu: 8546.185455752948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8618.31477088623,
            "unit": "ns/iter",
            "extra": "iterations: 95695\ncpu: 8617.881812006903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8269.372951858744,
            "unit": "ns/iter",
            "extra": "iterations: 98565\ncpu: 8269.317709125964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29556.6687626556,
            "unit": "ns/iter",
            "extra": "iterations: 28149\ncpu: 29555.881203595105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 250554.0175136289,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 250545.76514498994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 201408.81888863273,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 201398.17059227073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199198.98511972727,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 199187.79353638692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198138.86722571755,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 198129.443279758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103607.34212095907,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 103600.53680066773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191751.96112600344,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 191740.81769436994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5378.608429999758,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5378.482000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28499.751259925608,
            "unit": "ns/iter",
            "extra": "iterations: 28970\ncpu: 28498.926475664495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22204.10404608855,
            "unit": "ns/iter",
            "extra": "iterations: 37666\ncpu: 22203.175277438553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22043.966166603226,
            "unit": "ns/iter",
            "extra": "iterations: 37862\ncpu: 22043.76155512125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21853.92774064507,
            "unit": "ns/iter",
            "extra": "iterations: 38002\ncpu: 21853.312983527107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47731.4798294157,
            "unit": "ns/iter",
            "extra": "iterations: 17352\ncpu: 47728.5557860766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277445.41942676913,
            "unit": "ns/iter",
            "extra": "iterations: 3140\ncpu: 277424.39490445744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216565.3992490471,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 216557.3717146425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 216421.71453330075,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 216414.50854171795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215956.44392293182,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 215946.26976284734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117379.51467815018,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 117372.0980339345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206026.854416975,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 206017.52650176626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 855197.6400358815,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 855169.7486534993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479581.5457994706,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 479543.90243902645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2056.2466417541214,
            "unit": "ns/iter",
            "extra": "iterations: 394179\ncpu: 2056.101669546065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10348.104737811402,
            "unit": "ns/iter",
            "extra": "iterations: 79847\ncpu: 10347.792653449733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7774.469291308754,
            "unit": "ns/iter",
            "extra": "iterations: 106224\ncpu: 7774.379612893469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8149.767429749596,
            "unit": "ns/iter",
            "extra": "iterations: 99858\ncpu: 8149.2669590818905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7569.343902484304,
            "unit": "ns/iter",
            "extra": "iterations: 109438\ncpu: 7568.992488897826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29192.23212982388,
            "unit": "ns/iter",
            "extra": "iterations: 28777\ncpu: 29190.20050734962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264868.6620011787,
            "unit": "ns/iter",
            "extra": "iterations: 3358\ncpu: 264858.2191780827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200252.78277751303,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 200236.13522156246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200729.27442496343,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 200719.88157595042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199793.49796010842,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 199778.39981867725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102490.77454629532,
            "unit": "ns/iter",
            "extra": "iterations: 8596\ncpu: 102485.77245230332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191105.53753554446,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 191103.91770628086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.28557856091405,
            "unit": "ns/iter",
            "extra": "iterations: 3424998\ncpu: 205.2806162222584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1495.2452766935673,
            "unit": "ns/iter",
            "extra": "iterations: 468316\ncpu: 1495.1961923145802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1229.8162588079088,
            "unit": "ns/iter",
            "extra": "iterations: 568947\ncpu: 1229.7850239125867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1175.6991084856345,
            "unit": "ns/iter",
            "extra": "iterations: 595055\ncpu: 1175.6770382569703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 927.5234113467753,
            "unit": "ns/iter",
            "extra": "iterations: 750085\ncpu: 927.4971503229643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9372.666733599397,
            "unit": "ns/iter",
            "extra": "iterations: 74703\ncpu: 9372.215305944826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12438.42849493109,
            "unit": "ns/iter",
            "extra": "iterations: 56024\ncpu: 12438.467442524647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2812.913828753634,
            "unit": "ns/iter",
            "extra": "iterations: 250037\ncpu: 2812.883293272589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2823.0276193526647,
            "unit": "ns/iter",
            "extra": "iterations: 249680\ncpu: 2822.99583466837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2852.317980121251,
            "unit": "ns/iter",
            "extra": "iterations: 246094\ncpu: 2852.2300421789973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5347.695087163088,
            "unit": "ns/iter",
            "extra": "iterations: 132510\ncpu: 5347.515659195556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5456.858620479743,
            "unit": "ns/iter",
            "extra": "iterations: 131292\ncpu: 5456.88313073151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1982.9403673989411,
            "unit": "ns/iter",
            "extra": "iterations: 354873\ncpu: 1982.8950075097098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 11252.81797550313,
            "unit": "ns/iter",
            "extra": "iterations: 62129\ncpu: 11252.69037003636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8328.928490674996,
            "unit": "ns/iter",
            "extra": "iterations: 84031\ncpu: 8328.633480501221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8131.076258737114,
            "unit": "ns/iter",
            "extra": "iterations: 84410\ncpu: 8130.766496860561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8163.3732325467745,
            "unit": "ns/iter",
            "extra": "iterations: 85858\ncpu: 8163.259102238623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18165.406328061537,
            "unit": "ns/iter",
            "extra": "iterations: 38432\ncpu: 18164.85480849288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56010.60719823239,
            "unit": "ns/iter",
            "extra": "iterations: 12253\ncpu: 56009.90777768765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44912.43004390126,
            "unit": "ns/iter",
            "extra": "iterations: 15717\ncpu: 44910.52999936294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43757.34478220686,
            "unit": "ns/iter",
            "extra": "iterations: 15955\ncpu: 43755.08617988088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44446.55458870736,
            "unit": "ns/iter",
            "extra": "iterations: 15974\ncpu: 44442.612996119096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25857.30925549705,
            "unit": "ns/iter",
            "extra": "iterations: 27065\ncpu: 25856.016996120747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44258.999561545395,
            "unit": "ns/iter",
            "extra": "iterations: 15965\ncpu: 44256.31694331326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1946.4763332119703,
            "unit": "ns/iter",
            "extra": "iterations: 359639\ncpu: 1946.4799423866496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10052.133547603096,
            "unit": "ns/iter",
            "extra": "iterations: 70005\ncpu: 10051.489179344317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8144.030679192371,
            "unit": "ns/iter",
            "extra": "iterations: 86117\ncpu: 8143.418837163457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8111.23459682533,
            "unit": "ns/iter",
            "extra": "iterations: 85794\ncpu: 8110.904025922542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8099.038877490673,
            "unit": "ns/iter",
            "extra": "iterations: 86271\ncpu: 8098.719152438164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18007.664357277794,
            "unit": "ns/iter",
            "extra": "iterations: 38827\ncpu: 18007.711128853753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55020.14609692207,
            "unit": "ns/iter",
            "extra": "iterations: 12567\ncpu: 55016.35235139629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43896.14003534548,
            "unit": "ns/iter",
            "extra": "iterations: 15846\ncpu: 43895.09655433541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44101.8960365154,
            "unit": "ns/iter",
            "extra": "iterations: 15996\ncpu: 44100.54388597138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43979.47068444535,
            "unit": "ns/iter",
            "extra": "iterations: 15896\ncpu: 43977.60442878692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26112.193168963022,
            "unit": "ns/iter",
            "extra": "iterations: 26526\ncpu: 26110.020357384838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44107.839580119224,
            "unit": "ns/iter",
            "extra": "iterations: 16195\ncpu: 44106.03890089523 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705779071841,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 565.5032913702177,
            "unit": "ns/iter",
            "extra": "iterations: 1238390\ncpu: 565.4412584080944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5315.060169999697,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5314.691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10338.155276270008,
            "unit": "ns/iter",
            "extra": "iterations: 80682\ncpu: 10337.59326739545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15283.856623785012,
            "unit": "ns/iter",
            "extra": "iterations: 54493\ncpu: 15282.90422623089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20061.55587536937,
            "unit": "ns/iter",
            "extra": "iterations: 41691\ncpu: 20061.00597251206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24778.708174110336,
            "unit": "ns/iter",
            "extra": "iterations: 33496\ncpu: 24778.054096011456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30872.38123295021,
            "unit": "ns/iter",
            "extra": "iterations: 27495\ncpu: 30871.296599381727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35337.464178408314,
            "unit": "ns/iter",
            "extra": "iterations: 23631\ncpu: 35335.91892006263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39406.01256435848,
            "unit": "ns/iter",
            "extra": "iterations: 21171\ncpu: 39405.15327570733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 542.1672805255894,
            "unit": "ns/iter",
            "extra": "iterations: 1285583\ncpu: 542.1506818307336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.7339663023902,
            "unit": "ns/iter",
            "extra": "iterations: 1628305\ncpu: 420.7227761383769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 407.0365857236695,
            "unit": "ns/iter",
            "extra": "iterations: 1703998\ncpu: 407.0209002592729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 422.6750234386689,
            "unit": "ns/iter",
            "extra": "iterations: 1646848\ncpu: 422.6679693572203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 868.1455329109488,
            "unit": "ns/iter",
            "extra": "iterations: 819471\ncpu: 868.1446933448514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2149.536618901343,
            "unit": "ns/iter",
            "extra": "iterations: 372376\ncpu: 2149.4784841128285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10898.29420893404,
            "unit": "ns/iter",
            "extra": "iterations: 75392\ncpu: 10897.806133276734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8290.313600111518,
            "unit": "ns/iter",
            "extra": "iterations: 100558\ncpu: 8290.312058712378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8552.42312798537,
            "unit": "ns/iter",
            "extra": "iterations: 95659\ncpu: 8552.166549932574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8305.456682398926,
            "unit": "ns/iter",
            "extra": "iterations: 98101\ncpu: 8305.447447018914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29816.392702243764,
            "unit": "ns/iter",
            "extra": "iterations: 27899\ncpu: 29814.477221405905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 251128.25985612656,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 251114.7625899279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 196173.10430157866,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 196166.46623496752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200306.5931098724,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 200298.4636871508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200386.32778548053,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 200374.87286176588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103164.08187202773,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 103160.07109004716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 194625.18575232802,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 194618.2867288062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5206.059910000249,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5205.763999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28675.94702193327,
            "unit": "ns/iter",
            "extra": "iterations: 28861\ncpu: 28674.91770901905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22451.850430696606,
            "unit": "ns/iter",
            "extra": "iterations: 37033\ncpu: 22451.35149731322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22541.487277113825,
            "unit": "ns/iter",
            "extra": "iterations: 37295\ncpu: 22540.836573267152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22371.459718551934,
            "unit": "ns/iter",
            "extra": "iterations: 37449\ncpu: 22370.821650778387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46905.1952177786,
            "unit": "ns/iter",
            "extra": "iterations: 17816\ncpu: 46903.09833857208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 273811.4422835541,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 273805.17565872066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 219430.5780632269,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 219423.98715415059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 213399.6635673935,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 213387.6682162952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 211688.05679609842,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 211685.8009708743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117150.35798976578,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 117149.21853947712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205106.60346876908,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 205106.652411498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 843871.7644959459,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 843816.7707404093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476789.1981690764,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 476772.6440495422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2059.3624908484007,
            "unit": "ns/iter",
            "extra": "iterations: 387916\ncpu: 2059.241949287994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10264.510323272023,
            "unit": "ns/iter",
            "extra": "iterations: 80304\ncpu: 10264.173640167346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8030.0733680130625,
            "unit": "ns/iter",
            "extra": "iterations: 103233\ncpu: 8029.733709182122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7827.608362275572,
            "unit": "ns/iter",
            "extra": "iterations: 103943\ncpu: 7827.458318501539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7541.010330882937,
            "unit": "ns/iter",
            "extra": "iterations: 108316\ncpu: 7540.80283614609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29301.530611524515,
            "unit": "ns/iter",
            "extra": "iterations: 28339\ncpu: 29301.50322876601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262744.2045589258,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 262729.0112492601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198279.38025634133,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 198268.9003822806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197097.11610150547,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 197088.56950370435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197270.1400089647,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 197265.1881720441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102621.22445212693,
            "unit": "ns/iter",
            "extra": "iterations: 8670\ncpu: 102616.2283737026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192039.28879684053,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 192032.65039232682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 207.3997962157747,
            "unit": "ns/iter",
            "extra": "iterations: 3376120\ncpu: 207.39410921412872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1532.0716653915426,
            "unit": "ns/iter",
            "extra": "iterations: 458757\ncpu: 1532.0263233040616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1172.5971252106515,
            "unit": "ns/iter",
            "extra": "iterations: 598583\ncpu: 1172.582081348786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1070.151450631337,
            "unit": "ns/iter",
            "extra": "iterations: 654715\ncpu: 1070.0969123969883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 925.7863173619087,
            "unit": "ns/iter",
            "extra": "iterations: 759795\ncpu: 925.7370738159692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9348.768349693124,
            "unit": "ns/iter",
            "extra": "iterations: 75083\ncpu: 9348.481014344128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12314.970800570238,
            "unit": "ns/iter",
            "extra": "iterations: 55960\ncpu: 12314.581844174403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2805.0863577116656,
            "unit": "ns/iter",
            "extra": "iterations: 249335\ncpu: 2804.98485972685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2778.966389298125,
            "unit": "ns/iter",
            "extra": "iterations: 251170\ncpu: 2778.95568738305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2838.152402792789,
            "unit": "ns/iter",
            "extra": "iterations: 246380\ncpu: 2838.0055199285766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5383.651261368099,
            "unit": "ns/iter",
            "extra": "iterations: 131405\ncpu: 5383.649024009748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5370.445576439781,
            "unit": "ns/iter",
            "extra": "iterations: 131037\ncpu: 5370.250387295199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1982.0986062137106,
            "unit": "ns/iter",
            "extra": "iterations: 355363\ncpu: 1982.0363965860304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10140.918622463623,
            "unit": "ns/iter",
            "extra": "iterations: 69196\ncpu: 10140.779813861933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8136.1088926698985,
            "unit": "ns/iter",
            "extra": "iterations: 86397\ncpu: 8135.7061009061945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8086.715911868009,
            "unit": "ns/iter",
            "extra": "iterations: 85917\ncpu: 8086.601021916538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8194.129465531087,
            "unit": "ns/iter",
            "extra": "iterations: 85992\ncpu: 8193.990138617615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18148.996387638093,
            "unit": "ns/iter",
            "extra": "iterations: 38479\ncpu: 18148.535564853766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54907.59511817041,
            "unit": "ns/iter",
            "extra": "iterations: 12905\ncpu: 54907.70244091498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44002.29405113844,
            "unit": "ns/iter",
            "extra": "iterations: 15919\ncpu: 44001.70865004093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44498.70611402948,
            "unit": "ns/iter",
            "extra": "iterations: 15996\ncpu: 44497.54938734739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43728.769182666096,
            "unit": "ns/iter",
            "extra": "iterations: 15991\ncpu: 43728.24088549789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25750.714728794745,
            "unit": "ns/iter",
            "extra": "iterations: 27083\ncpu: 25749.850459697605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43258.63711671269,
            "unit": "ns/iter",
            "extra": "iterations: 16176\ncpu: 43258.172601384635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1977.2884991786127,
            "unit": "ns/iter",
            "extra": "iterations: 356105\ncpu: 1977.2221676191095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10218.310383224469,
            "unit": "ns/iter",
            "extra": "iterations: 69150\ncpu: 10218.037599421436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8258.033534167545,
            "unit": "ns/iter",
            "extra": "iterations: 84481\ncpu: 8257.887572353555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8148.347422691842,
            "unit": "ns/iter",
            "extra": "iterations: 85147\ncpu: 8148.229532455635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8082.918851044501,
            "unit": "ns/iter",
            "extra": "iterations: 86409\ncpu: 8082.9138168477775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17860.799001956355,
            "unit": "ns/iter",
            "extra": "iterations: 38876\ncpu: 17859.93157732279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54293.124873017616,
            "unit": "ns/iter",
            "extra": "iterations: 12797\ncpu: 54292.50605610756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43038.84654258561,
            "unit": "ns/iter",
            "extra": "iterations: 16226\ncpu: 43037.421422408435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43447.76799007546,
            "unit": "ns/iter",
            "extra": "iterations: 16120\ncpu: 43447.69851116594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42984.38028689703,
            "unit": "ns/iter",
            "extra": "iterations: 16243\ncpu: 42981.59207043023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26018.911023857112,
            "unit": "ns/iter",
            "extra": "iterations: 26996\ncpu: 26017.769299155603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42800.91702231375,
            "unit": "ns/iter",
            "extra": "iterations: 16402\ncpu: 42799.548835508205 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705954287790,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 580.9950409493327,
            "unit": "ns/iter",
            "extra": "iterations: 1219185\ncpu: 580.9828697039417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5256.995189999998,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5256.531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10167.495631722217,
            "unit": "ns/iter",
            "extra": "iterations: 82069\ncpu: 10167.072828961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15168.912941601515,
            "unit": "ns/iter",
            "extra": "iterations: 55055\ncpu: 15168.050131686497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19826.482441028103,
            "unit": "ns/iter",
            "extra": "iterations: 41802\ncpu: 19825.77627864695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25165.579914539278,
            "unit": "ns/iter",
            "extra": "iterations: 33467\ncpu: 25163.994382526085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30070.753348980637,
            "unit": "ns/iter",
            "extra": "iterations: 27695\ncpu: 30069.64434013359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34762.56103472587,
            "unit": "ns/iter",
            "extra": "iterations: 23929\ncpu: 34760.061013832616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38920.142254311155,
            "unit": "ns/iter",
            "extra": "iterations: 21328\ncpu: 38918.257689422375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 540.2116033995203,
            "unit": "ns/iter",
            "extra": "iterations: 1279918\ncpu: 540.1860900463932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.1610545348689,
            "unit": "ns/iter",
            "extra": "iterations: 1645958\ncpu: 420.1482662376561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.4456726011462,
            "unit": "ns/iter",
            "extra": "iterations: 1685724\ncpu: 410.43124497248647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 411.7234384822737,
            "unit": "ns/iter",
            "extra": "iterations: 1698924\ncpu: 411.7179461824075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 844.41175939175,
            "unit": "ns/iter",
            "extra": "iterations: 830196\ncpu: 844.3814472726925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2053.087264681467,
            "unit": "ns/iter",
            "extra": "iterations: 391384\ncpu: 2053.0144308403032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10435.69075203723,
            "unit": "ns/iter",
            "extra": "iterations: 78374\ncpu: 10434.892949192332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7885.953445385735,
            "unit": "ns/iter",
            "extra": "iterations: 104415\ncpu: 7885.685006943432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7876.540890159653,
            "unit": "ns/iter",
            "extra": "iterations: 104206\ncpu: 7876.151085350152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7746.377467028143,
            "unit": "ns/iter",
            "extra": "iterations: 105694\ncpu: 7746.173860389433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29702.74364831108,
            "unit": "ns/iter",
            "extra": "iterations: 28457\ncpu: 29700.614962926516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 257191.4072544917,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 257183.36773813123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197860.0216631844,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 197849.19636617744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200982.41647547155,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 200975.99816429566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203371.6566363611,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 203357.9426172151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104395.06092339099,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 104390.57591623046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193000.52686946164,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 192991.99634118457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5209.164180000698,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5208.713000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29122.257439590554,
            "unit": "ns/iter",
            "extra": "iterations: 28597\ncpu: 29121.138580969993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22403.0517167051,
            "unit": "ns/iter",
            "extra": "iterations: 37106\ncpu: 22402.10747587989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22572.79564276825,
            "unit": "ns/iter",
            "extra": "iterations: 37914\ncpu: 22571.221712296294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21949.931300712433,
            "unit": "ns/iter",
            "extra": "iterations: 38079\ncpu: 21948.830063814716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46611.61027885712,
            "unit": "ns/iter",
            "extra": "iterations: 17823\ncpu: 46608.668574314244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 276604.29473017895,
            "unit": "ns/iter",
            "extra": "iterations: 3169\ncpu: 276592.6159671803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 217517.14829558937,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 217500.7713361539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 217413.7490673849,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 217407.53543894412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215652.2044102833,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 215629.50941526316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117787.4305853696,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 117782.97529538185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 203906.263849755,
            "unit": "ns/iter",
            "extra": "iterations: 4260\ncpu: 203892.37089201823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 844941.947741286,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 844924.1806908739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 469225.8478489614,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 469198.84575026477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2059.4820677167327,
            "unit": "ns/iter",
            "extra": "iterations: 393787\ncpu: 2059.3876892838075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10639.122176133726,
            "unit": "ns/iter",
            "extra": "iterations: 78837\ncpu: 10638.63541230642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7994.628953979638,
            "unit": "ns/iter",
            "extra": "iterations: 104262\ncpu: 7994.27691776486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8245.028578005078,
            "unit": "ns/iter",
            "extra": "iterations: 99937\ncpu: 8244.532055194763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7802.136690080272,
            "unit": "ns/iter",
            "extra": "iterations: 101646\ncpu: 7801.917438954826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29216.801454408964,
            "unit": "ns/iter",
            "extra": "iterations: 26815\ncpu: 29215.371993287292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263837.4653755826,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 263825.0293427218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198083.90790065163,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 198074.87584649972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 204791.5021459381,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 204777.7539341911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198581.0771826931,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 198572.5697569749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101986.50921309686,
            "unit": "ns/iter",
            "extra": "iterations: 8629\ncpu: 101979.61525089806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190040.05807150807,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 190031.48429035692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 204.84665119914504,
            "unit": "ns/iter",
            "extra": "iterations: 3419642\ncpu: 204.8357108726583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1513.5929829871675,
            "unit": "ns/iter",
            "extra": "iterations: 462305\ncpu: 1513.4917424643972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1203.1688059238302,
            "unit": "ns/iter",
            "extra": "iterations: 583380\ncpu: 1203.137234735514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1208.9874056026176,
            "unit": "ns/iter",
            "extra": "iterations: 580258\ncpu: 1208.8624370538578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 939.3693846174373,
            "unit": "ns/iter",
            "extra": "iterations: 742091\ncpu: 939.3384369302426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9270.643943131472,
            "unit": "ns/iter",
            "extra": "iterations: 75047\ncpu: 9270.108065612227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12210.813944104337,
            "unit": "ns/iter",
            "extra": "iterations: 56999\ncpu: 12210.158072948661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2805.5036862829684,
            "unit": "ns/iter",
            "extra": "iterations: 249167\ncpu: 2805.336581489531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2788.588183431651,
            "unit": "ns/iter",
            "extra": "iterations: 250665\ncpu: 2788.4519178983887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2846.2140674272964,
            "unit": "ns/iter",
            "extra": "iterations: 245745\ncpu: 2846.024130704602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5276.25811881927,
            "unit": "ns/iter",
            "extra": "iterations: 132470\ncpu: 5275.999094134539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5281.680763299757,
            "unit": "ns/iter",
            "extra": "iterations: 131639\ncpu: 5281.620188545975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1972.6548179329686,
            "unit": "ns/iter",
            "extra": "iterations: 353990\ncpu: 1972.500918105031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10223.153791298324,
            "unit": "ns/iter",
            "extra": "iterations: 68710\ncpu: 10222.829282491533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8330.887305374894,
            "unit": "ns/iter",
            "extra": "iterations: 84201\ncpu: 8330.345245305996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8164.071386535018,
            "unit": "ns/iter",
            "extra": "iterations: 84960\ncpu: 8163.7029190206395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8119.959914609702,
            "unit": "ns/iter",
            "extra": "iterations: 86191\ncpu: 8119.712034899259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18069.792231306037,
            "unit": "ns/iter",
            "extra": "iterations: 38668\ncpu: 18068.226957691142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54403.84793055619,
            "unit": "ns/iter",
            "extra": "iterations: 12902\ncpu: 54401.75166640783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44466.639012311476,
            "unit": "ns/iter",
            "extra": "iterations: 15754\ncpu: 44464.10435444929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46513.18721069187,
            "unit": "ns/iter",
            "extra": "iterations: 15122\ncpu: 46511.698188069844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44151.942994679375,
            "unit": "ns/iter",
            "extra": "iterations: 15788\ncpu: 44149.85431973638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25915.288848605454,
            "unit": "ns/iter",
            "extra": "iterations: 27028\ncpu: 25914.66997188074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43765.7494884416,
            "unit": "ns/iter",
            "extra": "iterations: 16127\ncpu: 43762.29924970582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1951.8442000235314,
            "unit": "ns/iter",
            "extra": "iterations: 359217\ncpu: 1951.7110827160081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10237.002416925556,
            "unit": "ns/iter",
            "extra": "iterations: 69096\ncpu: 10236.455076994367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8072.040346648453,
            "unit": "ns/iter",
            "extra": "iterations: 87120\ncpu: 8071.68158861344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8163.659393599063,
            "unit": "ns/iter",
            "extra": "iterations: 85521\ncpu: 8163.245284783859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8217.665280444493,
            "unit": "ns/iter",
            "extra": "iterations: 85364\ncpu: 8217.364462771216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18132.777480801673,
            "unit": "ns/iter",
            "extra": "iterations: 38536\ncpu: 18131.27465227311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54596.35408010725,
            "unit": "ns/iter",
            "extra": "iterations: 12757\ncpu: 54593.74461080178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42945.06089664568,
            "unit": "ns/iter",
            "extra": "iterations: 16060\ncpu: 42943.11955168128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43052.92893084697,
            "unit": "ns/iter",
            "extra": "iterations: 16097\ncpu: 43051.14617630673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42775.362978986646,
            "unit": "ns/iter",
            "extra": "iterations: 16180\ncpu: 42772.96662546378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26391.076736015257,
            "unit": "ns/iter",
            "extra": "iterations: 26728\ncpu: 26389.70742292692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42539.41935677273,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 42537.58941989736 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705955728475,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 603.6575087644275,
            "unit": "ns/iter",
            "extra": "iterations: 1202022\ncpu: 603.6525121836372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5390.886430000137,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5390.582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10597.165235808206,
            "unit": "ns/iter",
            "extra": "iterations: 79789\ncpu: 10596.797804208598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15668.937991541612,
            "unit": "ns/iter",
            "extra": "iterations: 53912\ncpu: 15667.940347232534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20565.290219657287,
            "unit": "ns/iter",
            "extra": "iterations: 40745\ncpu: 20564.41035709903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25428.26909743116,
            "unit": "ns/iter",
            "extra": "iterations: 32884\ncpu: 25427.086120909866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30579.191793892027,
            "unit": "ns/iter",
            "extra": "iterations: 27248\ncpu: 30578.537874339378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35707.58619507332,
            "unit": "ns/iter",
            "extra": "iterations: 23325\ncpu: 35705.766345123244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40432.69528381547,
            "unit": "ns/iter",
            "extra": "iterations: 21246\ncpu: 40431.172926668514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 575.1060519641188,
            "unit": "ns/iter",
            "extra": "iterations: 1255328\ncpu: 575.0595063600906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 414.5687445187199,
            "unit": "ns/iter",
            "extra": "iterations: 1672737\ncpu: 414.5654696464541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 403.5531280004715,
            "unit": "ns/iter",
            "extra": "iterations: 1728900\ncpu: 403.5480363236745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.7746313862672,
            "unit": "ns/iter",
            "extra": "iterations: 1697712\ncpu: 406.7632201457025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 858.4208427464398,
            "unit": "ns/iter",
            "extra": "iterations: 808713\ncpu: 858.3650813082029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2042.2085546857113,
            "unit": "ns/iter",
            "extra": "iterations: 390780\ncpu: 2042.1474998720507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10911.259751359466,
            "unit": "ns/iter",
            "extra": "iterations: 77220\ncpu: 10911.030821030827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8160.222075534541,
            "unit": "ns/iter",
            "extra": "iterations: 98471\ncpu: 8160.060322328411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7871.801152069317,
            "unit": "ns/iter",
            "extra": "iterations: 103466\ncpu: 7871.331645178151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7808.039492621576,
            "unit": "ns/iter",
            "extra": "iterations: 104222\ncpu: 7807.89276736196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29908.248267401115,
            "unit": "ns/iter",
            "extra": "iterations: 27704\ncpu: 29906.21931851003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 254036.5267153517,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 254026.56934306584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 195326.4658441827,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 195311.30911583235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200385.82098345805,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 200375.82143666391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200765.41614765202,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 200757.001153403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103581.56537185225,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 103577.08432022712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192048.76778613176,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 192038.0247459123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5307.842290000053,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5307.666999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28736.627961352304,
            "unit": "ns/iter",
            "extra": "iterations: 29083\ncpu: 28735.360863734746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22120.8769287894,
            "unit": "ns/iter",
            "extra": "iterations: 37718\ncpu: 22120.454424942996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22208.433870061614,
            "unit": "ns/iter",
            "extra": "iterations: 37449\ncpu: 22207.100323106122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22267.49894748141,
            "unit": "ns/iter",
            "extra": "iterations: 37529\ncpu: 22266.96421434091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46441.02128384458,
            "unit": "ns/iter",
            "extra": "iterations: 17619\ncpu: 46439.03172711275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 274138.8855705715,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 274123.4517447324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214324.8002973412,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 214308.79583746378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215211.3335811672,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 215198.51301115146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215242.86293292698,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 215230.01719479403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117169.78663619775,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 117163.86125302476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 206952.50380590168,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 206938.58230256892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 842218.38799276,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 842155.0179211517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479161.56486483465,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 479127.3513513535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2043.715933604799,
            "unit": "ns/iter",
            "extra": "iterations: 388462\ncpu: 2043.6155917438484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10084.125416177456,
            "unit": "ns/iter",
            "extra": "iterations: 81696\ncpu: 10083.537749706284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7787.6754136842455,
            "unit": "ns/iter",
            "extra": "iterations: 105636\ncpu: 7787.158733765022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7961.837450330353,
            "unit": "ns/iter",
            "extra": "iterations: 103433\ncpu: 7961.506482457216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7700.546793898409,
            "unit": "ns/iter",
            "extra": "iterations: 107311\ncpu: 7700.278629404251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29095.197372472787,
            "unit": "ns/iter",
            "extra": "iterations: 29229\ncpu: 29093.674090800363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 262947.10803570965,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 262936.57738095295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197896.81045751888,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 197892.6526932608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200030.53062612374,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 200023.5934664245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 197783.6692772224,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 197773.21548444824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101119.06718048746,
            "unit": "ns/iter",
            "extra": "iterations: 8693\ncpu: 101114.45991027259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190747.17269771374,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 190734.30119176614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 204.43663901603892,
            "unit": "ns/iter",
            "extra": "iterations: 3428853\ncpu: 204.42999452003326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1523.3676137361792,
            "unit": "ns/iter",
            "extra": "iterations: 461177\ncpu: 1523.3097053842578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1233.2666483563926,
            "unit": "ns/iter",
            "extra": "iterations: 567984\ncpu: 1233.2218865320149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1184.7273021376552,
            "unit": "ns/iter",
            "extra": "iterations: 587302\ncpu: 1184.7129756070976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 927.6129939356715,
            "unit": "ns/iter",
            "extra": "iterations: 756399\ncpu: 927.585573222595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9281.656308813719,
            "unit": "ns/iter",
            "extra": "iterations: 74919\ncpu: 9281.307812437488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12452.119914959341,
            "unit": "ns/iter",
            "extra": "iterations: 55973\ncpu: 12451.837493077099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2819.3023958910635,
            "unit": "ns/iter",
            "extra": "iterations: 250387\ncpu: 2819.1843026994143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2795.3009180093795,
            "unit": "ns/iter",
            "extra": "iterations: 253810\ncpu: 2795.1369134392075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2828.9407276282723,
            "unit": "ns/iter",
            "extra": "iterations: 247434\ncpu: 2828.7939410105146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5330.6017028245915,
            "unit": "ns/iter",
            "extra": "iterations: 131781\ncpu: 5330.279023531472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5353.052884060941,
            "unit": "ns/iter",
            "extra": "iterations: 129869\ncpu: 5352.817839515181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2044.7443070624174,
            "unit": "ns/iter",
            "extra": "iterations: 353596\ncpu: 2044.6617043179194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10198.058952218707,
            "unit": "ns/iter",
            "extra": "iterations: 68564\ncpu: 10197.577445889949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8233.121109046815,
            "unit": "ns/iter",
            "extra": "iterations: 85551\ncpu: 8232.710313146528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8138.446164238065,
            "unit": "ns/iter",
            "extra": "iterations: 85863\ncpu: 8137.870794172061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8217.567377383742,
            "unit": "ns/iter",
            "extra": "iterations: 85266\ncpu: 8217.195599652947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18207.76574314057,
            "unit": "ns/iter",
            "extra": "iterations: 38620\ncpu: 18206.66235111338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54911.545297532866,
            "unit": "ns/iter",
            "extra": "iterations: 12738\ncpu: 54909.89166274197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44164.03433825383,
            "unit": "ns/iter",
            "extra": "iterations: 15988\ncpu: 44161.558669002145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43575.686618827436,
            "unit": "ns/iter",
            "extra": "iterations: 15888\ncpu: 43572.60196374577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44463.767306972826,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 44460.52139204182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25925.63506723829,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 25924.054233781473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43604.95811976294,
            "unit": "ns/iter",
            "extra": "iterations: 15998\ncpu: 43603.39417427182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1962.276690687392,
            "unit": "ns/iter",
            "extra": "iterations: 357887\ncpu: 1962.1673880303183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9973.595903245878,
            "unit": "ns/iter",
            "extra": "iterations: 70446\ncpu: 9972.977883769212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8119.260105044599,
            "unit": "ns/iter",
            "extra": "iterations: 87011\ncpu: 8118.9987472848015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8192.760258345472,
            "unit": "ns/iter",
            "extra": "iterations: 85467\ncpu: 8192.282401394663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8124.451286348046,
            "unit": "ns/iter",
            "extra": "iterations: 85941\ncpu: 8124.241049091891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18074.825217207617,
            "unit": "ns/iter",
            "extra": "iterations: 38442\ncpu: 18074.353571614494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54550.38362748722,
            "unit": "ns/iter",
            "extra": "iterations: 12692\ncpu: 54546.42294358633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43388.7164086322,
            "unit": "ns/iter",
            "extra": "iterations: 16083\ncpu: 43386.2339115839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43764.65955850547,
            "unit": "ns/iter",
            "extra": "iterations: 15991\ncpu: 43762.516415483704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43182.97930102154,
            "unit": "ns/iter",
            "extra": "iterations: 16281\ncpu: 43181.08838523471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25629.994762467733,
            "unit": "ns/iter",
            "extra": "iterations: 27112\ncpu: 25628.197845972067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43077.74128993461,
            "unit": "ns/iter",
            "extra": "iterations: 16590\ncpu: 43075.304400241694 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}