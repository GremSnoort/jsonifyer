window.BENCHMARK_DATA = {
  "lastUpdate": 1705576300365,
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
      }
    ]
  }
}