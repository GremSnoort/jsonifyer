window.BENCHMARK_DATA = {
  "lastUpdate": 1702399123986,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-12 22.04 Debug c++-17": [
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
        "date": 1702399123536,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7541.142950777986,
            "unit": "ns/iter",
            "extra": "iterations: 93067\ncpu: 7540.8060859380885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54760.658899999726,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54760.56 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100754.84839924406,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 100750.28248587571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145938.80424447553,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 145932.9711375212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193531.0440881636,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 193524.20396348246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238967.94969597616,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 238956.5782200111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285264.6431972749,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 285257.68707483006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330650.2947007182,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 330643.46168509347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377977.1824500267,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 377971.19895742805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6272.624619665952,
            "unit": "ns/iter",
            "extra": "iterations: 111415\ncpu: 6272.413050307414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5081.144246894547,
            "unit": "ns/iter",
            "extra": "iterations: 137743\ncpu: 5081.0204511299935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5073.0014527740595,
            "unit": "ns/iter",
            "extra": "iterations: 138356\ncpu: 5072.954552025211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5038.742000449175,
            "unit": "ns/iter",
            "extra": "iterations: 138039\ncpu: 5038.644875723522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7803.318321687951,
            "unit": "ns/iter",
            "extra": "iterations: 90019\ncpu: 7803.293749097404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27063.048967787974,
            "unit": "ns/iter",
            "extra": "iterations: 30081\ncpu: 27062.468003058402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140646.56962853923,
            "unit": "ns/iter",
            "extra": "iterations: 6111\ncpu: 140645.91719849457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107115.51331082768,
            "unit": "ns/iter",
            "extra": "iterations: 8001\ncpu: 107114.06074240732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107249.28229843933,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 107246.79519278943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101741.60068989224,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 101740.2759605092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 217778.9463937689,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 217768.37231968823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1818018.910156427,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1817901.9531249993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1414502.5990854225,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1414470.1219512157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1424772.6138460864,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1424726.4615384617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1387622.8552238722,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387602.089552241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 746554.4230459525,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 746526.4302981454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1362072.5271659542,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1362055.2129221712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34709.17917362436,
            "unit": "ns/iter",
            "extra": "iterations: 23960\ncpu: 34708.09265442402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169100.94116284474,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 169100.16214964085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134457.9013023675,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 134455.5154558296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133686.5781201428,
            "unit": "ns/iter",
            "extra": "iterations: 6426\ncpu: 133685.37192654845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123642.93427499334,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 123637.73421735353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 230023.99707524234,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 230020.39351236424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1867554.2135727932,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1867498.403193607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1446108.8923556525,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1446084.3993759798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1440790.295950062,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1440749.6884735196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1410585.2824427148,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1410561.0687022926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 775183.1294904086,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 775162.4895572263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1390550.80418535,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1390509.4170403634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6358793.6258507855,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6358587.074829939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2852153.322085729,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2852042.638036809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25953.109179572344,
            "unit": "ns/iter",
            "extra": "iterations: 31581\ncpu: 25952.99705519157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137382.6069207412,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 137379.1261361828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106053.20449797882,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 106053.06624062918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104126.7138525084,
            "unit": "ns/iter",
            "extra": "iterations: 8244\ncpu: 104122.22222222263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101299.755599162,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 101297.24082198073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 196848.09620194856,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 196837.13895838062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1822778.5703124332,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1822721.4843750116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1408502.938159995,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1408426.696832581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1408627.0996980178,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1408571.6012084542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1384359.1528190298,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1384287.5370919893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 738089.1500789915,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 738056.6350710908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1356095.9344977892,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1356041.048034932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2669.5751509556903,
            "unit": "ns/iter",
            "extra": "iterations: 263157\ncpu: 2669.463476175801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18561.38035003914,
            "unit": "ns/iter",
            "extra": "iterations: 37710\ncpu: 18560.440201538106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14709.135346359188,
            "unit": "ns/iter",
            "extra": "iterations: 47855\ncpu: 14708.486051614229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14617.824938241014,
            "unit": "ns/iter",
            "extra": "iterations: 47766\ncpu: 14617.171209646916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11210.009180417885,
            "unit": "ns/iter",
            "extra": "iterations: 64594\ncpu: 11209.852308263951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67914.33465903657,
            "unit": "ns/iter",
            "extra": "iterations: 10309\ncpu: 67914.02657871772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124234.97996808827,
            "unit": "ns/iter",
            "extra": "iterations: 5641\ncpu: 124231.50150682569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30069.333118360555,
            "unit": "ns/iter",
            "extra": "iterations: 23259\ncpu: 30069.108732103527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29819.057771723958,
            "unit": "ns/iter",
            "extra": "iterations: 23489\ncpu: 29818.3362424962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29533.314483750586,
            "unit": "ns/iter",
            "extra": "iterations: 23661\ncpu: 29533.15159967889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57800.46745317808,
            "unit": "ns/iter",
            "extra": "iterations: 12121\ncpu: 57797.920963616605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55545.22144296598,
            "unit": "ns/iter",
            "extra": "iterations: 12405\ncpu: 55544.53043127782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22164.35808095519,
            "unit": "ns/iter",
            "extra": "iterations: 31599\ncpu: 22164.283679863427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110339.28148148516,
            "unit": "ns/iter",
            "extra": "iterations: 6345\ncpu: 110337.02127659439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90409.15815274419,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 90408.63003096121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89690.49301371266,
            "unit": "ns/iter",
            "extra": "iterations: 7801\ncpu: 89687.89898730976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90037.33739310216,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90037.18579942998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133217.36895237074,
            "unit": "ns/iter",
            "extra": "iterations: 5250\ncpu: 133216.76190476172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 542550.436532551,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 542528.2507739943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 436952.3462017514,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 436949.6886674973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 441649.5608833205,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 441648.64353312727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 437412.7414116518,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 437402.62336039776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 267255.13582605147,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 267253.4147272016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 430280.87384615134,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 430262.58461539046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22464.465074415446,
            "unit": "ns/iter",
            "extra": "iterations: 31109\ncpu: 22464.309363849738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111622.63129552988,
            "unit": "ns/iter",
            "extra": "iterations: 6314\ncpu: 111619.65473550696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91208.31715590766,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91207.6581865625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91478.96718526635,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 91476.42829128016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90802.28252690902,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 90798.5860682319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132567.7434782639,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 132564.23440453765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 533140.0436446796,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 533129.3261868391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 439310.53166145156,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 439307.71159874945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 440660.68824636826,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 440649.71715902525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 434696.5353597574,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 434687.15880893514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 267749.3124282857,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 267745.08604206145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430121.7110289539,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 430112.93900184234 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}