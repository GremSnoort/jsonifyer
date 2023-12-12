window.BENCHMARK_DATA = {
  "lastUpdate": 1702392478448,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-11 20.04 Debug c++-17": [
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
        "date": 1702392477623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7747.54660890252,
            "unit": "ns/iter",
            "extra": "iterations: 90251\ncpu: 7747.382300473127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56000.15610000355,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55995.59 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102767.09853751837,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 102756.31742987296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149045.50060607042,
            "unit": "ns/iter",
            "extra": "iterations: 5775\ncpu: 149034.9437229437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196746.08354029316,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 196726.16843531278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243818.99574830075,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 243794.44444444435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289455.15615615784,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 289434.76810143463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 335480.7814186629,
            "unit": "ns/iter",
            "extra": "iterations: 2594\ncpu: 335467.07787201257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380974.6892010411,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380957.11150131695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6450.9509915060535,
            "unit": "ns/iter",
            "extra": "iterations: 107614\ncpu: 6450.846544129936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5295.889855842646,
            "unit": "ns/iter",
            "extra": "iterations: 131800\ncpu: 5295.346737481032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5355.911696394566,
            "unit": "ns/iter",
            "extra": "iterations: 130459\ncpu: 5355.645068565607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5243.566109222629,
            "unit": "ns/iter",
            "extra": "iterations: 133287\ncpu: 5243.2735375543025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8432.457141139308,
            "unit": "ns/iter",
            "extra": "iterations: 83145\ncpu: 8432.051235792886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26593.143806766642,
            "unit": "ns/iter",
            "extra": "iterations: 30388\ncpu: 26591.411083322324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130823.6254584291,
            "unit": "ns/iter",
            "extra": "iterations: 6544\ncpu: 130814.82273838612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100179.31654161456,
            "unit": "ns/iter",
            "extra": "iterations: 8397\ncpu: 100173.3833511969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100042.22798594912,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 100029.7423887589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97130.77036276608,
            "unit": "ns/iter",
            "extra": "iterations: 8766\ncpu: 97123.53410905764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 221536.21721721275,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 221513.2132132133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1865423.208835273,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1865306.6265060261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1460224.1921260084,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1460114.6456692873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1462194.9228347964,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1462110.2362204755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1421525.1470138938,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1421439.5099540588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 797323.8403141919,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 797299.9127399663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1402622.7975645598,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1402536.8340943682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35941.72897845805,
            "unit": "ns/iter",
            "extra": "iterations: 23024\ncpu: 35938.75955524668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169715.659319028,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 169708.75811848068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130027.99894387303,
            "unit": "ns/iter",
            "extra": "iterations: 6628\ncpu: 130020.56427278198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128486.87294468968,
            "unit": "ns/iter",
            "extra": "iterations: 6690\ncpu: 128483.1539611356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123881.02892262381,
            "unit": "ns/iter",
            "extra": "iterations: 6915\ncpu: 123876.471438901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 241078.42083217195,
            "unit": "ns/iter",
            "extra": "iterations: 3581\ncpu: 241074.16922647366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1910465.768916183,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1910284.458077702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1532669.4391446281,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1532582.7302631615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1507035.7669904658,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1506899.0291262155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1460552.4820031442,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1460477.3082942087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 826237.5338079047,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 826170.8185053364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1446991.7082683118,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1446952.2620904876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5133991.159999596,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5133701.000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3141495.02356916,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3141404.377104382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25450.898696681514,
            "unit": "ns/iter",
            "extra": "iterations: 32072\ncpu: 25449.94699426286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126392.10624998606,
            "unit": "ns/iter",
            "extra": "iterations: 6880\ncpu: 126174.1569767441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106010.53260606105,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 106002.73939393925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103848.60651568831,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 103842.25505631561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96493.81747022041,
            "unit": "ns/iter",
            "extra": "iterations: 8815\ncpu: 96486.2847419166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 219543.1313666113,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 219533.25769036947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1914569.107070793,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1914454.343434336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1471854.130503144,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1471802.830188685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1480468.2034700287,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1480358.3596214545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1426662.3195717803,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1426635.1681957173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 808945.0545453887,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 808913.8528138506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1408330.128398701,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1408283.2326284049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2900.8735388057985,
            "unit": "ns/iter",
            "extra": "iterations: 240129\ncpu: 2900.7487642058973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19240.885156292337,
            "unit": "ns/iter",
            "extra": "iterations: 36406\ncpu: 19239.435807284335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14686.565038604509,
            "unit": "ns/iter",
            "extra": "iterations: 47664\ncpu: 14685.886623027836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14349.4237590839,
            "unit": "ns/iter",
            "extra": "iterations: 48714\ncpu: 14348.953073038456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11361.500276044786,
            "unit": "ns/iter",
            "extra": "iterations: 61584\ncpu: 11361.124642764351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71702.8073669012,
            "unit": "ns/iter",
            "extra": "iterations: 9692\ncpu: 71701.27940569537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 131693.7682766311,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131691.44897575688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31921.469424949017,
            "unit": "ns/iter",
            "extra": "iterations: 21946\ncpu: 31920.523102159674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31909.660069319376,
            "unit": "ns/iter",
            "extra": "iterations: 21928\ncpu: 31909.14812112376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31014.308426142004,
            "unit": "ns/iter",
            "extra": "iterations: 22537\ncpu: 31013.688600967154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63522.59385511097,
            "unit": "ns/iter",
            "extra": "iterations: 11001\ncpu: 63520.84355967636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59523.442377919375,
            "unit": "ns/iter",
            "extra": "iterations: 11775\ncpu: 59520.83227176233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23018.451066912996,
            "unit": "ns/iter",
            "extra": "iterations: 30368\ncpu: 23017.113408851405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119112.58757447015,
            "unit": "ns/iter",
            "extra": "iterations: 5875\ncpu: 119107.69361702116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94866.42953552118,
            "unit": "ns/iter",
            "extra": "iterations: 7557\ncpu: 94859.86502580294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93203.59374589288,
            "unit": "ns/iter",
            "extra": "iterations: 7611\ncpu: 93202.25988700609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90992.0575950222,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 90986.92437410716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 140747.5706543724,
            "unit": "ns/iter",
            "extra": "iterations: 4982\ncpu: 140742.79405861115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 551247.783293943,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551225.8471237154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454964.49121665885,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 454931.0995445652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 460229.67367038754,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 460216.1523309245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 450279.4323453721,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 450272.6804123663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 284945.4258957852,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 284941.1644951139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 445806.2770700459,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 445793.5668789817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22466.627844368817,
            "unit": "ns/iter",
            "extra": "iterations: 31202\ncpu: 22465.58233446586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114941.46184210315,
            "unit": "ns/iter",
            "extra": "iterations: 6080\ncpu: 114939.93421052635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93862.92410833633,
            "unit": "ns/iter",
            "extra": "iterations: 7458\ncpu: 93857.61598283637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93535.00987455752,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 93530.06405124016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91520.67198326305,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 91515.93672375407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 139872.40992794037,
            "unit": "ns/iter",
            "extra": "iterations: 4996\ncpu: 139869.93594875713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 550216.030564298,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 550205.7210031433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 457148.0229357355,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 457127.8505897796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 462701.18494050956,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 462674.24042272277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 443012.06708861986,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 442995.2531645587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 284093.0582995954,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 284078.29959513765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 447616.34169886174,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 447608.04375804705 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}