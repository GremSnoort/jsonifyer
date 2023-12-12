window.BENCHMARK_DATA = {
  "lastUpdate": 1702394247637,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 22.04 Debug c++-17": [
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
        "date": 1702394246666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7469.153560417755,
            "unit": "ns/iter",
            "extra": "iterations: 93416\ncpu: 7468.854371842082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54195.3827000043,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54194.52 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99805.12798139043,
            "unit": "ns/iter",
            "extra": "iterations: 8595\ncpu: 99801.73356602677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145543.91167513252,
            "unit": "ns/iter",
            "extra": "iterations: 5910\ncpu: 145542.74111675128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190507.05226175382,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 190502.56916996048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236694.76121443586,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 236683.8347921226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282875.2912463581,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 282868.369671331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328123.06747080444,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 328109.72483980405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374073.590500657,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 374064.65554129175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6179.67705649763,
            "unit": "ns/iter",
            "extra": "iterations: 113348\ncpu: 6179.352083847961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5025.994229999924,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5025.650000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4992.167917441516,
            "unit": "ns/iter",
            "extra": "iterations: 140313\ncpu: 4991.944438505346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5059.986908191405,
            "unit": "ns/iter",
            "extra": "iterations: 138178\ncpu: 5059.930669136905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7862.452139824614,
            "unit": "ns/iter",
            "extra": "iterations: 88769\ncpu: 7862.348342326695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26370.139652655973,
            "unit": "ns/iter",
            "extra": "iterations: 30805\ncpu: 26368.98230806683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138233.68378684373,
            "unit": "ns/iter",
            "extra": "iterations: 6211\ncpu: 138233.77877958436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106139.40295148057,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 106134.02951475748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108321.38320474737,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 108320.10876438585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100136.29394440413,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 100130.99670122509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205575.70113083796,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 205572.49019155296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1821844.0377735004,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1821769.5825049682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1438296.4489796294,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1438220.5651491366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1435010.2967541413,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1434932.612055639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1434654.485316851,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1434574.0340030883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 777181.0212043582,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 777132.6547921984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1393844.956845263,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1393738.9880952393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35055.21057736785,
            "unit": "ns/iter",
            "extra": "iterations: 23711\ncpu: 35054.881700476675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 180356.38495204804,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 180350.04168403463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135404.4047357744,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 135404.39077936354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135521.2522748575,
            "unit": "ns/iter",
            "extra": "iterations: 6374\ncpu: 135518.7009727015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129443.84946398466,
            "unit": "ns/iter",
            "extra": "iterations: 6623\ncpu: 129442.3977049674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225896.20530835076,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 225894.27530575072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1907153.8114753244,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1907078.483606551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1468743.8958991761,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468692.5867507902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1465431.0047244795,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1465397.6377952704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1450556.8987537941,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1450505.9190031192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 824544.6453900873,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 824512.5886524855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1434705.6543779576,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1434649.462365598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5082770.239999945,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5082603.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3097783.8211918017,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3097639.0728476886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27309.303763618904,
            "unit": "ns/iter",
            "extra": "iterations: 30290\ncpu: 27308.709144932345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134897.11391414067,
            "unit": "ns/iter",
            "extra": "iterations: 6382\ncpu: 134892.07145095605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106814.46046570539,
            "unit": "ns/iter",
            "extra": "iterations: 8031\ncpu: 106812.52645996796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106450.700818667,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 106448.47432398918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 107102.05019930436,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 107100.78475336268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189249.30568255158,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 189246.13542347087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1847267.0143149756,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1847213.2924335427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1422681.467175531,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1422634.5038167883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1420411.8919330721,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1420385.6925418575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1401478.1036586217,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1401451.6768292682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 781412.0946057648,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 781404.2323651462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1384526.8660713625,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384494.1964285725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2827.710588272882,
            "unit": "ns/iter",
            "extra": "iterations: 248048\ncpu: 2827.6736760626964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18922.167727904347,
            "unit": "ns/iter",
            "extra": "iterations: 38163\ncpu: 18921.71474988866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14146.16599894736,
            "unit": "ns/iter",
            "extra": "iterations: 49422\ncpu: 14145.734693051745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14937.144171910297,
            "unit": "ns/iter",
            "extra": "iterations: 46722\ncpu: 14936.971876203816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11207.521794193359,
            "unit": "ns/iter",
            "extra": "iterations: 62379\ncpu: 11207.379085910274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 73669.7327368371,
            "unit": "ns/iter",
            "extra": "iterations: 9500\ncpu: 73668.80000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121297.01869159368,
            "unit": "ns/iter",
            "extra": "iterations: 5778\ncpu: 121292.33298719245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30477.574886996466,
            "unit": "ns/iter",
            "extra": "iterations: 23008\ncpu: 30477.047114047335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30727.43123655948,
            "unit": "ns/iter",
            "extra": "iterations: 22781\ncpu: 30726.302620604816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30132.006844302538,
            "unit": "ns/iter",
            "extra": "iterations: 23231\ncpu: 30131.66889070638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61924.627168134546,
            "unit": "ns/iter",
            "extra": "iterations: 11300\ncpu: 61922.38053097324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57831.86132715651,
            "unit": "ns/iter",
            "extra": "iterations: 12086\ncpu: 57830.26642396129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21320.738240742234,
            "unit": "ns/iter",
            "extra": "iterations: 32400\ncpu: 21320.490740740726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109077.86463700733,
            "unit": "ns/iter",
            "extra": "iterations: 6405\ncpu: 109075.11319281899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90127.43811977057,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 90126.31036703166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91365.8928850646,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 91363.36982017159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90590.76903159352,
            "unit": "ns/iter",
            "extra": "iterations: 7724\ncpu: 90589.33195235513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 134155.82750046992,
            "unit": "ns/iter",
            "extra": "iterations: 5229\ncpu: 134151.730732453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 547409.8176149381,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 547396.570537798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 444739.7796177787,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 444725.7961783487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453791.86679294857,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 453782.13383838505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 439017.24827584164,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 438982.38244514255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 280272.0000000248,
            "unit": "ns/iter",
            "extra": "iterations: 2488\ncpu: 280241.4790996797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 435328.1032981087,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 435281.2072184193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22111.076560322428,
            "unit": "ns/iter",
            "extra": "iterations: 31596\ncpu: 22109.80503861277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115267.9888359887,
            "unit": "ns/iter",
            "extra": "iterations: 6091\ncpu: 115254.81858479825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91650.84397905786,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 91643.27225130952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91062.55642022024,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 91058.21011673193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89471.61398799469,
            "unit": "ns/iter",
            "extra": "iterations: 7821\ncpu: 89468.26492775812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131319.93786262657,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 131310.55586749048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 540667.374806848,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 540599.7681607443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 435766.1200248712,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 435730.47263681155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 434121.41158155596,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 434095.33001245226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 437050.7666874609,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 437042.2333125442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 282171.39380529465,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 282167.0555108626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 434758.0806451295,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 434741.06699752045 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}