window.BENCHMARK_DATA = {
  "lastUpdate": 1705574183078,
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
        "date": 1702409376559,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7037.794238434188,
            "unit": "ns/iter",
            "extra": "iterations: 99348\ncpu: 7037.19853444458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51023.1764000082,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51021.26 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94205.41387245132,
            "unit": "ns/iter",
            "extra": "iterations: 9126\ncpu: 94204.76660092043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137035.9926902882,
            "unit": "ns/iter",
            "extra": "iterations: 6293\ncpu: 137033.99014778322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179878.2135881994,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 179878.70351132346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223115.58806890209,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 223104.8855746978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265491.33333333815,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 265480.48406862764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309505.5857547848,
            "unit": "ns/iter",
            "extra": "iterations: 2822\ncpu: 309497.4131821405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351165.3237787885,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 351160.88009689184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5995.635875584131,
            "unit": "ns/iter",
            "extra": "iterations: 118281\ncpu: 5995.502236200234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4894.005868144851,
            "unit": "ns/iter",
            "extra": "iterations: 140760\ncpu: 4893.86686558681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4840.856028304686,
            "unit": "ns/iter",
            "extra": "iterations: 144709\ncpu: 4840.645018623578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4930.676375782626,
            "unit": "ns/iter",
            "extra": "iterations: 145499\ncpu: 4930.525982996442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7456.794080204136,
            "unit": "ns/iter",
            "extra": "iterations: 94260\ncpu: 7456.196690006361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27186.45568227015,
            "unit": "ns/iter",
            "extra": "iterations: 29988\ncpu: 27185.040682939838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125908.87387917332,
            "unit": "ns/iter",
            "extra": "iterations: 6803\ncpu: 125902.24900779089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99151.55787763098,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 99147.19609891986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98598.63798869569,
            "unit": "ns/iter",
            "extra": "iterations: 8671\ncpu: 98593.89920424424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96379.95405681188,
            "unit": "ns/iter",
            "extra": "iterations: 8837\ncpu: 96376.0552223604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 210232.0068493334,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 210218.98913556937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1642714.1168143088,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1642604.2477876113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1341054.8785312048,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1340971.751412432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1314465.4042253986,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1314410.7042253509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1301909.398316951,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1301835.2033660593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 710254.2822086124,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 710224.1564417171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1262300.679399831,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1262234.242837655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33734.46569283937,
            "unit": "ns/iter",
            "extra": "iterations: 24645\ncpu: 33732.57455873401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156125.23238544737,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 156120.37674334305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125144.63814928576,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 125141.6703040882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125189.00553209872,
            "unit": "ns/iter",
            "extra": "iterations: 6869\ncpu: 125189.48900858952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120395.1540734532,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120392.12044463199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221499.57084291725,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 221498.71893415335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1679003.079422214,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1678886.2815884394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1339254.430835647,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1339205.3314121051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1341253.2262248504,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1341139.9135446714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1328933.6961483534,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1328889.7289586305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 744802.4815705259,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 744759.455128208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1293300.504922747,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1293253.867791849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6093353.509803748,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6093064.052287584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2812283.030120496,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2812159.638554209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25294.71573604104,
            "unit": "ns/iter",
            "extra": "iterations: 32505\ncpu: 25293.927088140274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121912.90866544335,
            "unit": "ns/iter",
            "extra": "iterations: 7051\ncpu: 121910.32477662755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95761.39071221591,
            "unit": "ns/iter",
            "extra": "iterations: 8958\ncpu: 95756.13976333963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95665.90148553596,
            "unit": "ns/iter",
            "extra": "iterations: 8953\ncpu: 95661.63297218848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92789.1408282766,
            "unit": "ns/iter",
            "extra": "iterations: 9224\ncpu: 92784.74631396416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189140.44471100665,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 189132.80261722952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1648536.4091711445,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1648458.5537918801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1304494.4665737965,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1304426.1838440073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1302843.8286907903,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1302769.3593314774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1295586.8597221829,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1295576.2499999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 701703.3177710545,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 701626.5060240942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1257538.6662161704,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1257466.486486484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2675.7740903562676,
            "unit": "ns/iter",
            "extra": "iterations: 262273\ncpu: 2675.674202071894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17453.21583777104,
            "unit": "ns/iter",
            "extra": "iterations: 39993\ncpu: 17453.264321256196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14261.278222929483,
            "unit": "ns/iter",
            "extra": "iterations: 49047\ncpu: 14260.68872713927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14331.982028083843,
            "unit": "ns/iter",
            "extra": "iterations: 48854\ncpu: 14331.534777091027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10686.690882473526,
            "unit": "ns/iter",
            "extra": "iterations: 65577\ncpu: 10686.207054302555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67082.47438456253,
            "unit": "ns/iter",
            "extra": "iterations: 10521\ncpu: 67081.13297215074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115089.4731235681,
            "unit": "ns/iter",
            "extra": "iterations: 6102\ncpu: 115086.0209767289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28457.849374082525,
            "unit": "ns/iter",
            "extra": "iterations: 24604\ncpu: 28457.084213949074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28350.44997166567,
            "unit": "ns/iter",
            "extra": "iterations: 24706\ncpu: 28349.987857200853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28141.463471701587,
            "unit": "ns/iter",
            "extra": "iterations: 24789\ncpu: 28140.292065028945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56583.15313787517,
            "unit": "ns/iter",
            "extra": "iterations: 12381\ncpu: 56583.25660285921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53039.98731388132,
            "unit": "ns/iter",
            "extra": "iterations: 13164\ncpu: 53035.9313278641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21024.185728427346,
            "unit": "ns/iter",
            "extra": "iterations: 33339\ncpu: 21023.683973724626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106175.22573329112,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 106170.16933776761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86219.64895846717,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 86217.77394305529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85148.35991746359,
            "unit": "ns/iter",
            "extra": "iterations: 8238\ncpu: 85147.1230881282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84499.56113193404,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 84496.27524488955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125881.38497567894,
            "unit": "ns/iter",
            "extra": "iterations: 5551\ncpu: 125877.2653575943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 492286.22112677776,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 492265.8450704201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 412547.4997057241,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 412544.1436138912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 415129.868716721,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 415111.82732110866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 411495.38492988655,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 410482.3014018657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 255875.22961610422,
            "unit": "ns/iter",
            "extra": "iterations: 2735\ncpu: 255868.11700182638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 403166.626222023,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 403147.1535365151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21203.900157471817,
            "unit": "ns/iter",
            "extra": "iterations: 33022\ncpu: 21203.200896372215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103257.52107901243,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 103253.02181603767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85281.68346379773,
            "unit": "ns/iter",
            "extra": "iterations: 8176\ncpu: 85279.14628180029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85541.88353904393,
            "unit": "ns/iter",
            "extra": "iterations: 8183\ncpu: 85542.67383600176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85309.67987805925,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85302.84146341428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126954.89346162009,
            "unit": "ns/iter",
            "extra": "iterations: 5613\ncpu: 126951.3985391049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 492834.1344902973,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 492787.1294287802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 404599.22138732485,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 404587.10982658813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 406472.7937427303,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 406446.58169177076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 402510.20299019635,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 402507.53306497826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 254183.06722382686,
            "unit": "ns/iter",
            "extra": "iterations: 2752\ncpu: 254169.18604651326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 396784.12967160664,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 396785.3907134748 ns\nthreads: 1"
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
        "date": 1702412793514,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7209.103650614168,
            "unit": "ns/iter",
            "extra": "iterations: 96970\ncpu: 7208.8934722079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53846.3753999963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53843.409999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97209.67282411906,
            "unit": "ns/iter",
            "extra": "iterations: 8824\ncpu: 97206.1083408885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140910.4015349468,
            "unit": "ns/iter",
            "extra": "iterations: 6124\ncpu: 140908.4258654474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187229.8586862496,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187223.7683664649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231532.96100427437,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 231529.11324786316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 274630.04265402164,
            "unit": "ns/iter",
            "extra": "iterations: 3165\ncpu: 274622.18009478686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 320500.9606906463,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 320502.42468772957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 363772.8127623605,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 363758.60621326615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5960.545882052991,
            "unit": "ns/iter",
            "extra": "iterations: 117595\ncpu: 5960.504273140868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4870.450291746288,
            "unit": "ns/iter",
            "extra": "iterations: 143618\ncpu: 4870.409697948722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4865.289924149345,
            "unit": "ns/iter",
            "extra": "iterations: 145814\ncpu: 4865.04245134212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4861.426208801481,
            "unit": "ns/iter",
            "extra": "iterations: 144089\ncpu: 4861.298225402357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7536.03508640177,
            "unit": "ns/iter",
            "extra": "iterations: 93227\ncpu: 7535.6860137084695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26752.4768253339,
            "unit": "ns/iter",
            "extra": "iterations: 30378\ncpu: 26752.330634011414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149140.34119277544,
            "unit": "ns/iter",
            "extra": "iterations: 5768\ncpu: 149135.2288488212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113160.34589042043,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 113158.33772391954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113357.06898834648,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 113354.18432203369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111585.21859132749,
            "unit": "ns/iter",
            "extra": "iterations: 7681\ncpu: 111584.80666579895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 209085.4908750359,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 209075.2456715021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1761089.383587651,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1761040.076335873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1379062.91428565,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1379009.3233082704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1381440.780415486,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1381422.700296735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1360556.6427524954,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1360486.8228404077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 743781.4638844508,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 743762.6805778496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1336860.752517888,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1336806.1870503633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34041.79822105411,
            "unit": "ns/iter",
            "extra": "iterations: 24284\ncpu: 34041.274089935694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176991.04814587638,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 176986.1298914159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138028.6120121976,
            "unit": "ns/iter",
            "extra": "iterations: 6227\ncpu: 138026.3208607676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138842.12504023119,
            "unit": "ns/iter",
            "extra": "iterations: 6214\ncpu: 138838.07531380752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134075.69350812814,
            "unit": "ns/iter",
            "extra": "iterations: 6408\ncpu: 134075.20287141058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225135.46488033672,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 225122.06035379902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1799405.810810935,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799357.5289575267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1421866.9236640402,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1421795.877862596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1419762.4235472616,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419736.0856269125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1385349.4038748597,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1385283.0104321863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 770923.7429752242,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 770912.3140495836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1366824.838323349,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1366775.5988024012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6288358.229729615,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6288170.270270255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2774625.217647126,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2774558.2352941176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25188.19778403783,
            "unit": "ns/iter",
            "extra": "iterations: 32672\ncpu: 25187.469392752137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144187.5221962626,
            "unit": "ns/iter",
            "extra": "iterations: 5992\ncpu: 144186.79906542037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111117.64020139103,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 111113.18099664318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111086.87024378027,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 111084.96066038964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103867.0787182566,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 103865.01813784725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192374.1270754824,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 192367.05778171303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1785508.9216061754,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1785434.7992351784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1382905.980712118,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1382849.2581602347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1380310.4148146978,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1380228.59259259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1358437.4468703757,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1358394.6142649204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 740966.3351911155,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 740909.7929936323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1336729.7388808185,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1336649.4978479191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2688.8773104072698,
            "unit": "ns/iter",
            "extra": "iterations: 259965\ncpu: 2688.8173407958793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18114.605926615044,
            "unit": "ns/iter",
            "extra": "iterations: 38673\ncpu: 18114.47780104992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14408.152839506056,
            "unit": "ns/iter",
            "extra": "iterations: 48600\ncpu: 14407.23868312755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13765.902945729598,
            "unit": "ns/iter",
            "extra": "iterations: 51023\ncpu: 13765.162769731265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10704.704626170904,
            "unit": "ns/iter",
            "extra": "iterations: 65324\ncpu: 10704.260302492174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66981.29502245289,
            "unit": "ns/iter",
            "extra": "iterations: 10467\ncpu: 66978.28413107833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116146.16403523898,
            "unit": "ns/iter",
            "extra": "iterations: 6017\ncpu: 116145.20525178655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28991.759471657413,
            "unit": "ns/iter",
            "extra": "iterations: 24151\ncpu: 28990.998302347783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29306.034296257163,
            "unit": "ns/iter",
            "extra": "iterations: 23851\ncpu: 29306.196805165488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28801.94703136076,
            "unit": "ns/iter",
            "extra": "iterations: 24203\ncpu: 28799.665330744232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57386.44887801061,
            "unit": "ns/iter",
            "extra": "iterations: 12255\ncpu: 57386.12811097485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55432.563465777865,
            "unit": "ns/iter",
            "extra": "iterations: 12684\ncpu: 55428.981393882095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21333.496698210394,
            "unit": "ns/iter",
            "extra": "iterations: 32861\ncpu: 21333.07872554077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110579.52616688877,
            "unit": "ns/iter",
            "extra": "iterations: 6363\ncpu: 110578.78359264528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88925.17279551936,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 88924.32879501244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88749.34269376297,
            "unit": "ns/iter",
            "extra": "iterations: 7870\ncpu: 88749.80940279654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86572.68698231877,
            "unit": "ns/iter",
            "extra": "iterations: 8089\ncpu: 86569.03201879088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130377.36760828349,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 130374.35028248635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 522895.7916356048,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 522891.5608663185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 434560.5585305135,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 434557.4097135709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 424322.5995145919,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424308.73786408047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 420934.46441495937,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 420926.17611579935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262323.6639190863,
            "unit": "ns/iter",
            "extra": "iterations: 2669\ncpu: 262312.85125515243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420217.3566726536,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 420219.2100538648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21938.57305550426,
            "unit": "ns/iter",
            "extra": "iterations: 31962\ncpu: 21937.672861523235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108487.3413916038,
            "unit": "ns/iter",
            "extra": "iterations: 6453\ncpu: 108485.07670850717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87775.39944869705,
            "unit": "ns/iter",
            "extra": "iterations: 7981\ncpu: 87771.457210877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88475.06231040916,
            "unit": "ns/iter",
            "extra": "iterations: 7912\ncpu: 88474.33013144594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86540.33551979388,
            "unit": "ns/iter",
            "extra": "iterations: 8080\ncpu: 86540.79207920813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128546.0690414998,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128542.67352185062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 525163.45556384,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 525150.6348020913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 422899.7019347095,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 422879.80652962794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 422478.2356147742,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 422480.25439127896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 418793.87131688354,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 418785.2074564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261944.25056180047,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 261945.43071161374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 415266.85014926427,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 415262.92537312984 ns\nthreads: 1"
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
        "date": 1702418618840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7019.724583789373,
            "unit": "ns/iter",
            "extra": "iterations: 99769\ncpu: 7019.3396746484395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51417.69540000496,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51417.07 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95147.11636927944,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 95144.89637592818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138582.16792423074,
            "unit": "ns/iter",
            "extra": "iterations: 6229\ncpu: 138580.22154438918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183413.64249682717,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 183412.02185792345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225202.07148426547,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 225191.36989862233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 268595.6370668318,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 268589.8824257425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312602.7670840811,
            "unit": "ns/iter",
            "extra": "iterations: 2795\ncpu: 312589.3738819318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 356038.77341513825,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 356025.8077709613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5919.727866411693,
            "unit": "ns/iter",
            "extra": "iterations: 118214\ncpu: 5919.402101273957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4836.689341269969,
            "unit": "ns/iter",
            "extra": "iterations: 145993\ncpu: 4836.43599350654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4782.476610665948,
            "unit": "ns/iter",
            "extra": "iterations: 146306\ncpu: 4782.241329815599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4817.267365571347,
            "unit": "ns/iter",
            "extra": "iterations: 144798\ncpu: 4817.083799500004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7558.968409034869,
            "unit": "ns/iter",
            "extra": "iterations: 92843\ncpu: 7558.997447303517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27024.01194742828,
            "unit": "ns/iter",
            "extra": "iterations: 30132\ncpu: 27023.878268949957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138185.02583439622,
            "unit": "ns/iter",
            "extra": "iterations: 6232\ncpu: 138182.7503209244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106708.43399278987,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 106705.56177678196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107065.27077613647,
            "unit": "ns/iter",
            "extra": "iterations: 8014\ncpu: 107064.15023708552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104991.94375000519,
            "unit": "ns/iter",
            "extra": "iterations: 8160\ncpu: 104988.84803921552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205603.82543697068,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 205596.0671573136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1714362.1317254843,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1714273.8404452677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1362254.7715959663,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1362194.7291361669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1365480.4199705508,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1365432.5991189433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1353723.1339155152,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1353670.3056768568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 719357.3780016169,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 719331.9907048808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1311943.9589815878,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1311901.9801980192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33837.38914360249,
            "unit": "ns/iter",
            "extra": "iterations: 24428\ncpu: 33835.84820697564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169326.36900801968,
            "unit": "ns/iter",
            "extra": "iterations: 5111\ncpu: 169322.8526707104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131864.1519840543,
            "unit": "ns/iter",
            "extra": "iterations: 6527\ncpu: 131859.56794852173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135223.57212139727,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 135218.4449311643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128350.16467423849,
            "unit": "ns/iter",
            "extra": "iterations: 6692\ncpu: 128346.47340107581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221380.34469501025,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 221373.6545361356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1749198.2236841056,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1749121.6165413545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1393704.2814370738,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1393656.736526949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1387929.9194030212,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387903.134328352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1378885.674074034,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1378858.6666666658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 744494.277822961,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 744489.1957757937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1336484.5223021337,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1336468.3453237428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6184506.5894038165,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6184466.887417188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2804592.269461058,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2804504.491017978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25244.60797504877,
            "unit": "ns/iter",
            "extra": "iterations: 32702\ncpu: 25244.193015717756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136943.6494207298,
            "unit": "ns/iter",
            "extra": "iterations: 6301\ncpu: 136939.4381844153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104859.71725317137,
            "unit": "ns/iter",
            "extra": "iterations: 8184\ncpu: 104858.91984359692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105181.29413206282,
            "unit": "ns/iter",
            "extra": "iterations: 8163\ncpu: 105179.30907754533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101007.2982827559,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 101003.5403434483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 188533.01633632253,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 188524.52624700515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1735780.119180566,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1735743.9478584696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1366916.004379522,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1366888.7591240804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1365810.2928258206,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1365762.9575402585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1346116.5642135027,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1346060.0288600319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 717232.6761539037,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 717211.9230769224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1312033.4092827032,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1311976.090014062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2655.733685383146,
            "unit": "ns/iter",
            "extra": "iterations: 263031\ncpu: 2655.6303249426855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18213.226744334912,
            "unit": "ns/iter",
            "extra": "iterations: 38453\ncpu: 18212.38915039145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14326.197939075335,
            "unit": "ns/iter",
            "extra": "iterations: 48813\ncpu: 14326.249154938228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15012.332159196898,
            "unit": "ns/iter",
            "extra": "iterations: 46559\ncpu: 15012.21675723272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10651.88394097128,
            "unit": "ns/iter",
            "extra": "iterations: 65527\ncpu: 10651.531429792303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67107.5252080663,
            "unit": "ns/iter",
            "extra": "iterations: 10453\ncpu: 67105.19468095295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117437.96669387458,
            "unit": "ns/iter",
            "extra": "iterations: 6125\ncpu: 117436.26122448956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29028.652526178128,
            "unit": "ns/iter",
            "extra": "iterations: 24068\ncpu: 29028.224198105436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29023.290927187336,
            "unit": "ns/iter",
            "extra": "iterations: 24116\ncpu: 29022.474705589888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28579.777955007852,
            "unit": "ns/iter",
            "extra": "iterations: 24450\ncpu: 28578.670756646246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55909.726851854575,
            "unit": "ns/iter",
            "extra": "iterations: 12528\ncpu: 55908.44508301451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54194.81408012536,
            "unit": "ns/iter",
            "extra": "iterations: 12855\ncpu: 54194.461299105584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21832.56081688296,
            "unit": "ns/iter",
            "extra": "iterations: 32269\ncpu: 21832.42120920975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106264.82564492298,
            "unit": "ns/iter",
            "extra": "iterations: 6590\ncpu: 106264.06676782924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86449.4443483663,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 86447.01667696172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87489.00238574589,
            "unit": "ns/iter",
            "extra": "iterations: 7964\ncpu: 87487.56906077247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86693.70351072242,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 86693.98337675307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 128649.11598745591,
            "unit": "ns/iter",
            "extra": "iterations: 5423\ncpu: 128648.16522220202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507050.6534581938,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 507044.3804034547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 418411.40527577786,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 418408.2733812984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 419711.73337329115,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 419713.061713599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 414627.3398229856,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 414619.8230088478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256866.1777451634,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 256862.0639001097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 407984.30850446166,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 407975.42521994014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21380.92684345964,
            "unit": "ns/iter",
            "extra": "iterations: 32656\ncpu: 21380.15984811353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104783.42788820213,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104781.7964429845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87039.09506737451,
            "unit": "ns/iter",
            "extra": "iterations: 8089\ncpu: 87038.434911609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86879.95377943547,
            "unit": "ns/iter",
            "extra": "iterations: 8070\ncpu: 86877.07558859997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86293.35379505435,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 86292.45909705848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128115.45860805239,
            "unit": "ns/iter",
            "extra": "iterations: 5460\ncpu: 128113.02197802237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 509149.3793605089,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 509140.84302325937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 417483.5513126378,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 417469.0334128878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 416860.6605011772,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 416855.5489260098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 417994.6535244855,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 417983.75149342424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255648.4985239873,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 255643.69003689918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 409504.20586509386,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 409497.53665689135 ns\nthreads: 1"
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
        "date": 1702479823236,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7058.028263808554,
            "unit": "ns/iter",
            "extra": "iterations: 99102\ncpu: 7057.810135012412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51380.7445999987,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51377.34 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94689.79497353864,
            "unit": "ns/iter",
            "extra": "iterations: 9072\ncpu: 94683.0687830688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136846.30023828786,
            "unit": "ns/iter",
            "extra": "iterations: 6295\ncpu: 136837.69658459094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179751.43975903175,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 179741.00540091397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222121.15235759274,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 222104.68792586544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265231.526235043,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 265217.45934335684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307702.8341566524,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 307689.0966831334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 350475.133819952,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 350453.7307380373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5916.813302412349,
            "unit": "ns/iter",
            "extra": "iterations: 119016\ncpu: 5916.72212139544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4822.633850762088,
            "unit": "ns/iter",
            "extra": "iterations: 144239\ncpu: 4822.625642163351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4791.78589403443,
            "unit": "ns/iter",
            "extra": "iterations: 146236\ncpu: 4791.712710960368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4747.840181041902,
            "unit": "ns/iter",
            "extra": "iterations: 144939\ncpu: 4747.670399271416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7447.211843724961,
            "unit": "ns/iter",
            "extra": "iterations: 94244\ncpu: 7447.047026866433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27409.316833980498,
            "unit": "ns/iter",
            "extra": "iterations: 30183\ncpu: 27409.2966239274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140280.48649526585,
            "unit": "ns/iter",
            "extra": "iterations: 6146\ncpu: 140277.33485193612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108118.90018975348,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 108116.39468690705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106610.66039850585,
            "unit": "ns/iter",
            "extra": "iterations: 8030\ncpu: 106604.81942714826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102848.1896178824,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 102847.24825763014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206216.0601382526,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 206200.96774193554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1719797.9149722618,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1719763.7707948245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1368851.5647059523,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1368795.8823529389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1358230.4262773127,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1358214.8905109523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1339668.9682997114,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1339639.9135446702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 725502.002349233,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 725482.8504306973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1302860.948106671,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1302822.7208976161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34407.23239612569,
            "unit": "ns/iter",
            "extra": "iterations: 23972\ncpu: 34405.05172701477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169290.1382749815,
            "unit": "ns/iter",
            "extra": "iterations: 5113\ncpu: 169283.31703500898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132585.56695331624,
            "unit": "ns/iter",
            "extra": "iterations: 6512\ncpu: 132580.06756756792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134452.72121401964,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 134451.31414267854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127040.96938323698,
            "unit": "ns/iter",
            "extra": "iterations: 6761\ncpu: 127036.48868510567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221758.188664789,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 221754.4038805205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1748086.2247191495,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1748042.883895133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1380637.8753707586,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1380561.572700295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1369415.3122239502,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1369327.6877761355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1357988.263081417,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1357911.1918604665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 760967.5671030722,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 760916.3666121083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1326426.9686161124,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1326335.94864479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6230675.812080549,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6230432.214765129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2876265.0646152766,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2876175.6923076888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25365.352895705902,
            "unit": "ns/iter",
            "extra": "iterations: 32341\ncpu: 25364.936149160403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134555.1863849726,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 134551.25195618175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105151.24779950852,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 105150.02444987785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103709.26327220765,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 103708.24083011612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100226.89945175982,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 100225.60363933301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189412.1024635023,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 189408.3060824071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1737850.564245999,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1737734.8230912483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1350905.3275361506,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1350810.5797101432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1354146.636231894,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1354080.579710142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1329757.0653409772,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1329677.5568181814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 724545.2674418833,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 724503.4883720935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1307946.1290322123,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1307854.1374474019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2674.2554234587656,
            "unit": "ns/iter",
            "extra": "iterations: 261088\ncpu: 2674.066215222455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18400.856448007413,
            "unit": "ns/iter",
            "extra": "iterations: 38035\ncpu: 18399.608255554154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14850.468030742915,
            "unit": "ns/iter",
            "extra": "iterations: 48922\ncpu: 14849.719962389114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15126.184332391944,
            "unit": "ns/iter",
            "extra": "iterations: 46427\ncpu: 15125.231007818738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10684.026697878848,
            "unit": "ns/iter",
            "extra": "iterations: 65361\ncpu: 10683.433545998421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68316.93868016642,
            "unit": "ns/iter",
            "extra": "iterations: 10274\ncpu: 68314.87249367335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119056.18300323008,
            "unit": "ns/iter",
            "extra": "iterations: 5907\ncpu: 119048.26477061128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29007.96703797339,
            "unit": "ns/iter",
            "extra": "iterations: 24149\ncpu: 29005.77663671367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29018.60746349091,
            "unit": "ns/iter",
            "extra": "iterations: 24171\ncpu: 29015.849571800834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28415.5236901666,
            "unit": "ns/iter",
            "extra": "iterations: 24736\ncpu: 28413.357050452618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56529.104333092895,
            "unit": "ns/iter",
            "extra": "iterations: 12393\ncpu: 56525.13515694289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54424.29164086967,
            "unit": "ns/iter",
            "extra": "iterations: 12920\ncpu: 54421.176470588456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21230.924150907707,
            "unit": "ns/iter",
            "extra": "iterations: 32947\ncpu: 21229.498892160143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108851.82066823504,
            "unit": "ns/iter",
            "extra": "iterations: 6435\ncpu: 108850.16317016297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88241.58443520998,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 88240.33497040659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87331.22572604254,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 87326.27446092569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84746.37877325066,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 84740.61820816285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127021.59981850085,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 127012.21415607962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507498.18641618744,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 507484.0317919043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 418828.7479092274,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 418804.18160096294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414178.2641843922,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 414155.9692671396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 400377.21903670894,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 400353.2683486299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 258416.3332103361,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 258407.93357933307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 402913.69449278136,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 402895.36231884465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21729.56612651938,
            "unit": "ns/iter",
            "extra": "iterations: 32090\ncpu: 21728.54783421626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104567.48975317269,
            "unit": "ns/iter",
            "extra": "iterations: 6685\ncpu: 104566.28272251291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85809.17585108391,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 85806.86994856624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86444.12242633654,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 86440.88275181827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85517.3368859506,
            "unit": "ns/iter",
            "extra": "iterations: 8163\ncpu: 85513.02217322015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123855.29026548596,
            "unit": "ns/iter",
            "extra": "iterations: 5650\ncpu: 123853.36283186042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 502605.0272597198,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 502595.4088952695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 410725.599175986,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 410720.60035315156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 408182.3459965259,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 408165.6925774361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 406222.7426087359,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 406212.92753623653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 254985.73845035548,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 254978.2830120035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 403379.26273148885,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 403372.685185187 ns\nthreads: 1"
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
        "date": 1702488828034,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7130.912472469357,
            "unit": "ns/iter",
            "extra": "iterations: 98072\ncpu: 7130.791663267803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51601.87679999808,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51600.109999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95668.82999777283,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 95667.67845230152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139434.27815425312,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 139431.33268796385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184726.41090678688,
            "unit": "ns/iter",
            "extra": "iterations: 4731\ncpu: 184718.66413020503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227256.2185378551,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 227238.69451697147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270643.865714271,
            "unit": "ns/iter",
            "extra": "iterations: 3150\ncpu: 270640.31746031763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 314187.5137085199,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 314183.65800865827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357547.7327302585,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 357526.39802631567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5946.121801250789,
            "unit": "ns/iter",
            "extra": "iterations: 117585\ncpu: 5945.99396181485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4923.931659928955,
            "unit": "ns/iter",
            "extra": "iterations: 141747\ncpu: 4923.6759860878965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4915.573055641951,
            "unit": "ns/iter",
            "extra": "iterations: 142412\ncpu: 4915.523972698934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4822.927688815574,
            "unit": "ns/iter",
            "extra": "iterations: 144943\ncpu: 4822.866920099629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7496.441794453887,
            "unit": "ns/iter",
            "extra": "iterations: 93711\ncpu: 7496.452924416557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26862.757149431298,
            "unit": "ns/iter",
            "extra": "iterations: 30422\ncpu: 26861.494970744847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132870.77125075128,
            "unit": "ns/iter",
            "extra": "iterations: 6588\ncpu: 132869.3381906496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103462.9915346462,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 103458.61651953099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104084.31008505776,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 104083.43863912519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99554.85402742997,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 99550.93211396411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207571.63742147223,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 207567.7914824294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1727477.0447759647,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1727371.268656718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1375543.5502957879,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1375513.4615384613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1373968.505169797,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1373918.906942391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1363394.446559313,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1363323.5724743812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 739010.8739026062,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 738973.982442141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1325038.2339515747,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1324985.164051354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34401.65425620277,
            "unit": "ns/iter",
            "extra": "iterations: 24012\ncpu: 34399.70014992512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 162109.68965518658,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 162100.1130582253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128855.9160168064,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 128846.82063587275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129784.76176824023,
            "unit": "ns/iter",
            "extra": "iterations: 6628\ncpu: 129778.47012673487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124580.903667056,
            "unit": "ns/iter",
            "extra": "iterations: 6872\ncpu: 124574.18509895238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224182.58488613614,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 224172.07556935886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1768259.988679098,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1768167.3584905704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1407898.516616388,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1407827.7945619412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1402558.188536871,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1402476.621417799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1384786.7853948884,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1384699.7019374052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 762960.6680361535,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 762916.8447000838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1347055.8830409395,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1346973.0994152047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6295737.972972826,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6295423.648648611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2857910.330158842,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2857703.809523796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25400.507716904314,
            "unit": "ns/iter",
            "extra": "iterations: 32526\ncpu: 25399.38203283523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127031.99867316902,
            "unit": "ns/iter",
            "extra": "iterations: 6783\ncpu: 127022.60061919506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100442.52569031951,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 100440.02097168773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101227.74223893955,
            "unit": "ns/iter",
            "extra": "iterations: 8504\ncpu: 101227.61053621807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96750.80824392902,
            "unit": "ns/iter",
            "extra": "iterations: 8855\ncpu: 96748.7859966127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 191262.07802198653,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 191258.90109890208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1752889.1898497653,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1752870.3007518803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1383465.8979289096,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1383415.976331366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1383690.414814838,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1383675.40740741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1364901.9443630166,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1364876.5739385048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 740836.1711568843,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 740831.616481777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1331603.1483594552,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1331574.6077032855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2707.052580988717,
            "unit": "ns/iter",
            "extra": "iterations: 259048\ncpu: 2707.051588894711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17899.013740692826,
            "unit": "ns/iter",
            "extra": "iterations: 39081\ncpu: 17898.83063381182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13499.500703152973,
            "unit": "ns/iter",
            "extra": "iterations: 51909\ncpu: 13499.354639850393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14190.976684094578,
            "unit": "ns/iter",
            "extra": "iterations: 49537\ncpu: 14190.835133334735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10713.742014479563,
            "unit": "ns/iter",
            "extra": "iterations: 65337\ncpu: 10713.251297121064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68860.45226625375,
            "unit": "ns/iter",
            "extra": "iterations: 10171\ncpu: 68859.65981712683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118871.05390651655,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 118866.99078812772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29423.321355279542,
            "unit": "ns/iter",
            "extra": "iterations: 23877\ncpu: 29423.357205679204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29280.16061873301,
            "unit": "ns/iter",
            "extra": "iterations: 23920\ncpu: 29279.494147157053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29157.786525771873,
            "unit": "ns/iter",
            "extra": "iterations: 23942\ncpu: 29157.81054214364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57112.706357623305,
            "unit": "ns/iter",
            "extra": "iterations: 12253\ncpu: 57112.05419081018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54612.04260632373,
            "unit": "ns/iter",
            "extra": "iterations: 12815\ncpu: 54611.26804525938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21095.342567446485,
            "unit": "ns/iter",
            "extra": "iterations: 33138\ncpu: 21095.34974953218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108705.11346863728,
            "unit": "ns/iter",
            "extra": "iterations: 6504\ncpu: 108702.52152521642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85833.18641565139,
            "unit": "ns/iter",
            "extra": "iterations: 8127\ncpu: 85827.25482957996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87140.53604781878,
            "unit": "ns/iter",
            "extra": "iterations: 8031\ncpu: 87134.88980201725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86016.28720914587,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 86013.14785178006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130387.78168619653,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 130382.486506607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 505560.3292418549,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 505518.70036101213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 421835.3852657265,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 421820.1086956542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 419609.32893163175,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 419604.1416566637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 411546.6349206132,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411512.63962375256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 265814.63419256423,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 265802.7672479118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 411652.55614342354,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411624.2210464458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21568.521803443586,
            "unit": "ns/iter",
            "extra": "iterations: 32449\ncpu: 21567.410397855037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104522.83325875438,
            "unit": "ns/iter",
            "extra": "iterations: 6705\ncpu: 104514.2878448908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85470.4597364618,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85470.4978038062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85922.4992023543,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 85914.60301877499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84983.53868542358,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 84978.0742178023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128046.35360937085,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 128039.31843166031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 511654.92930027784,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 511610.27696793247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416250.77817531535,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 416233.4525939207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 418248.0370592146,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 418223.37118947896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 415997.6682492288,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415964.9851631974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261261.80945291833,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 261247.11574246385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 411023.2632197344,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 410976.14571092615 ns\nthreads: 1"
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
        "date": 1702491082369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7016.717788894864,
            "unit": "ns/iter",
            "extra": "iterations: 99950\ncpu: 7016.4092046023015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51195.11120000197,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51194.90999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94871.9917264144,
            "unit": "ns/iter",
            "extra": "iterations: 9065\ncpu: 94868.19635962491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137951.94754517786,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 137948.69662561972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181609.31209390296,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 181600.6078390274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224110.37551653208,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 224104.4163223141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269536.8620796251,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 269382.28941684664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311284.0261461246,
            "unit": "ns/iter",
            "extra": "iterations: 2792\ncpu: 311273.2091690544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353601.2253060998,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 353583.5918367351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5876.550134683251,
            "unit": "ns/iter",
            "extra": "iterations: 119169\ncpu: 5876.32270137368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4847.3529932373585,
            "unit": "ns/iter",
            "extra": "iterations: 144626\ncpu: 4847.08212907776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4764.628033061759,
            "unit": "ns/iter",
            "extra": "iterations: 146634\ncpu: 4764.276361553251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4823.9665705177,
            "unit": "ns/iter",
            "extra": "iterations: 145261\ncpu: 4823.641583081489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7544.031772411969,
            "unit": "ns/iter",
            "extra": "iterations: 92061\ncpu: 7543.461400593094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26838.75411508826,
            "unit": "ns/iter",
            "extra": "iterations: 30376\ncpu: 26835.705820384486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138317.87584758818,
            "unit": "ns/iter",
            "extra": "iterations: 6194\ncpu: 138315.030674847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105896.31523620401,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 105891.73880781591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105873.12999380859,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 105871.67594310452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102015.37756318161,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 102013.54315689098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205111.41735539434,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 205107.66758494038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1721537.381040874,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1721464.312267656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1352431.575182426,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1352379.5620437982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1359107.780701694,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1359046.0526315793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1340957.1950867067,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1340929.190751445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 727796.1703296361,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 727757.6138147558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1307235.2189265923,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1307182.0621468937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34060.37090248487,
            "unit": "ns/iter",
            "extra": "iterations: 24222\ncpu: 34059.01246800436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 168194.62524310275,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 168193.50447296735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129467.87800843027,
            "unit": "ns/iter",
            "extra": "iterations: 6648\ncpu: 129462.69554753316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132604.6918819237,
            "unit": "ns/iter",
            "extra": "iterations: 6504\ncpu: 132601.86039360397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127874.45871286275,
            "unit": "ns/iter",
            "extra": "iterations: 6697\ncpu: 127869.25489024946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226469.38781381125,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 226467.80857740616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1757724.0528301033,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1757609.4339622674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1392282.6611693692,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1392228.9355322327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1382320.7786032087,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1382236.2555720643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1366112.8667643631,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1366089.604685217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 756598.8078175178,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 756554.2345276886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1334245.2295552734,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1334196.7001434742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6223757.146666837,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6223389.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2845197.247706294,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2845012.2324158936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25244.48600712049,
            "unit": "ns/iter",
            "extra": "iterations: 32588\ncpu: 25242.890020866653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134908.55684127714,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 134901.4229867091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104275.91186111851,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 104267.4638824818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 102967.9039846451,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 102961.19779164683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99873.57017441263,
            "unit": "ns/iter",
            "extra": "iterations: 8543\ncpu: 99865.71462015729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 188806.5931981745,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 188796.38107695623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1731672.5390333144,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1731659.479553895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1363143.803806814,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1363083.6017569522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1354325.889695211,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1354285.4862119001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1346220.2958153994,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1346060.1731601777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 729652.4293521268,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 729645.7455113181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1311703.3469100168,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1311647.3314606792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2644.7069203407227,
            "unit": "ns/iter",
            "extra": "iterations: 264539\ncpu: 2644.6172398020917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18554.151236617956,
            "unit": "ns/iter",
            "extra": "iterations: 37643\ncpu: 18553.109475865404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14833.748919490914,
            "unit": "ns/iter",
            "extra": "iterations: 47200\ncpu: 14833.379237288173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14315.09232437076,
            "unit": "ns/iter",
            "extra": "iterations: 48882\ncpu: 14314.770263082512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10659.684422477823,
            "unit": "ns/iter",
            "extra": "iterations: 65556\ncpu: 10659.399597290909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67727.87764570012,
            "unit": "ns/iter",
            "extra": "iterations: 10347\ncpu: 67726.4521117229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119493.69685577293,
            "unit": "ns/iter",
            "extra": "iterations: 5852\ncpu: 119487.50854408741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29122.337158357517,
            "unit": "ns/iter",
            "extra": "iterations: 23965\ncpu: 29122.019611933985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28943.457718229027,
            "unit": "ns/iter",
            "extra": "iterations: 24183\ncpu: 28941.57879502141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28566.15383044853,
            "unit": "ns/iter",
            "extra": "iterations: 24488\ncpu: 28565.51372100629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56867.476546007034,
            "unit": "ns/iter",
            "extra": "iterations: 12322\ncpu: 56863.91007953254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54280.318699188145,
            "unit": "ns/iter",
            "extra": "iterations: 12915\ncpu: 54279.62833914013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21158.01727574692,
            "unit": "ns/iter",
            "extra": "iterations: 33110\ncpu: 21157.441860464987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107138.06047152211,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 107133.14451928977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87291.95903972961,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 87290.14973394468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87171.07634915983,
            "unit": "ns/iter",
            "extra": "iterations: 8042\ncpu: 87166.19000248557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86196.37516935305,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 86195.52900603508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129034.56085435105,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 129031.46750138048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 509960.8766423497,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 509932.18978101434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 427645.2171254294,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 427630.09174311877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 416299.6527446165,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 416294.68973747414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 413806.3287914611,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 413782.10900474153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 260175.00260513704,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 260164.94231485372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 412590.744680871,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 412563.4751773027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21324.35938452237,
            "unit": "ns/iter",
            "extra": "iterations: 32820\ncpu: 21324.162096282864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105608.5583358379,
            "unit": "ns/iter",
            "extra": "iterations: 6634\ncpu: 105599.9698522754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86420.09871350523,
            "unit": "ns/iter",
            "extra": "iterations: 8084\ncpu: 86417.5037110336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86737.61527020921,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 86735.82052553308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86627.13371736284,
            "unit": "ns/iter",
            "extra": "iterations: 8159\ncpu: 86622.06152714876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127566.61483775661,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 127565.53044112126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 507650.2076700339,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 507620.911722148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416505.2879238544,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 416493.1588340273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 417889.8059880105,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 417868.56287425035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 416149.5391924054,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 416141.09263657907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258143.98339482598,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 258130.2583025839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 409477.60070257547,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 409468.9110070259 ns\nthreads: 1"
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
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705574182674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7119.427457543836,
            "unit": "ns/iter",
            "extra": "iterations: 97984\ncpu: 7118.81735793599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52269.65540000492,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52268.69999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95465.03777579899,
            "unit": "ns/iter",
            "extra": "iterations: 8974\ncpu: 95464.87630933808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139199.02992075612,
            "unit": "ns/iter",
            "extra": "iterations: 6183\ncpu: 139193.98350315378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182871.85135710042,
            "unit": "ns/iter",
            "extra": "iterations: 4716\ncpu: 182864.65224766752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225538.9074556892,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 225526.0166840459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269054.1339950372,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 269053.9392059554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 314119.00470162835,
            "unit": "ns/iter",
            "extra": "iterations: 2765\ncpu: 314112.3688969257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354688.84936552367,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 354673.18870241503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5836.3107778999065,
            "unit": "ns/iter",
            "extra": "iterations: 120311\ncpu: 5835.831303870809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4771.212314005606,
            "unit": "ns/iter",
            "extra": "iterations: 145233\ncpu: 4770.784876715348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4825.565308340374,
            "unit": "ns/iter",
            "extra": "iterations: 146283\ncpu: 4825.2257610248635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4870.015920266565,
            "unit": "ns/iter",
            "extra": "iterations: 143779\ncpu: 4869.697939198355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7558.430689025234,
            "unit": "ns/iter",
            "extra": "iterations: 93030\ncpu: 7557.72976459206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26830.0931499598,
            "unit": "ns/iter",
            "extra": "iterations: 30102\ncpu: 26827.413460899574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136362.0932109647,
            "unit": "ns/iter",
            "extra": "iterations: 6319\ncpu: 136352.28675423356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106111.98849863865,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 106104.6005441506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103995.65495867748,
            "unit": "ns/iter",
            "extra": "iterations: 8228\ncpu: 103987.53038405473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99788.58324558323,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 99778.71767871775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205315.03933747392,
            "unit": "ns/iter",
            "extra": "iterations: 4347\ncpu: 205302.4384633081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1715491.3726592432,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1715331.0861423202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1354535.6197387388,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1354535.8490566046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1360463.0335767134,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1360410.0729927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1335853.0129310687,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1335843.6781609163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 720103.108171142,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 720055.6420233471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1309240.8050847282,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1309217.0903954776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33891.71576463145,
            "unit": "ns/iter",
            "extra": "iterations: 24149\ncpu: 33889.93747153088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167736.46599298788,
            "unit": "ns/iter",
            "extra": "iterations: 5146\ncpu: 167735.11465215654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129192.59652798773,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 129184.24124513601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130821.61148648149,
            "unit": "ns/iter",
            "extra": "iterations: 6512\ncpu: 130820.20884520836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124630.12041884588,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 124625.02908667843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222722.65354938616,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 222720.75617284037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1771619.3866666192,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1771504.1904761938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1392024.5716417073,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1392010.4477611983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1385288.291916079,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1385172.9041916125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1378557.4712812582,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1378528.2768777618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 746226.9212217922,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 746187.4598070718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1344248.6454413603,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1344246.7438494922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6168644.335526838,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6168593.421052657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2824763.397590429,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2824579.216867472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25406.983077455727,
            "unit": "ns/iter",
            "extra": "iterations: 31851\ncpu: 25406.668550438044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 134029.44844237142,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 134021.07476635507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101651.64384533466,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 101650.75085727748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100162.77041172341,
            "unit": "ns/iter",
            "extra": "iterations: 8598\ncpu: 100157.1877180746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 97320.57279019838,
            "unit": "ns/iter",
            "extra": "iterations: 8813\ncpu: 97314.52399863822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 188848.83119423804,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 188836.7631063724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1753051.0996240815,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1752953.0075188025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1373156.1582002507,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1373068.069666182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1357983.5437318482,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1357965.1603498582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1333999.3433477194,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1333925.751072965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 719507.713734631,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 719500.5401234555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1312445.7172994923,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1312308.8607594923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2696.648182532737,
            "unit": "ns/iter",
            "extra": "iterations: 259592\ncpu: 2696.427085580437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17721.112007306594,
            "unit": "ns/iter",
            "extra": "iterations: 39426\ncpu: 17720.159285750597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14522.034929300102,
            "unit": "ns/iter",
            "extra": "iterations: 48727\ncpu: 14521.872883616874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14922.770301624401,
            "unit": "ns/iter",
            "extra": "iterations: 46979\ncpu: 14921.488324570475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10798.469852929707,
            "unit": "ns/iter",
            "extra": "iterations: 64799\ncpu: 10797.68051976103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67056.93940556071,
            "unit": "ns/iter",
            "extra": "iterations: 10430\ncpu: 67052.50239693184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120763.87723523077,
            "unit": "ns/iter",
            "extra": "iterations: 5816\ncpu: 120753.79986244827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29473.37658680062,
            "unit": "ns/iter",
            "extra": "iterations: 23790\ncpu: 29471.828499369418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29247.716680003738,
            "unit": "ns/iter",
            "extra": "iterations: 23747\ncpu: 29245.247820777407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28789.028573781474,
            "unit": "ns/iter",
            "extra": "iterations: 24323\ncpu: 28787.119187600332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53609.63109354995,
            "unit": "ns/iter",
            "extra": "iterations: 12903\ncpu: 53606.70386731809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54165.950378733854,
            "unit": "ns/iter",
            "extra": "iterations: 12938\ncpu: 54161.763796568535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21052.272043621753,
            "unit": "ns/iter",
            "extra": "iterations: 33377\ncpu: 21050.187254696466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107632.65496536183,
            "unit": "ns/iter",
            "extra": "iterations: 6495\ncpu: 107623.74133949232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87884.94746763745,
            "unit": "ns/iter",
            "extra": "iterations: 7957\ncpu: 87877.86854342032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86777.39409355029,
            "unit": "ns/iter",
            "extra": "iterations: 8059\ncpu: 86769.23935972224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85392.08761880775,
            "unit": "ns/iter",
            "extra": "iterations: 8206\ncpu: 85391.18937362882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126661.44830079075,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 126650.75921908872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 515303.1014705956,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515268.8235294095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 421487.602517986,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 421441.30695442954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 417684.86650780187,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 417680.154946364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 411475.97936317936,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 411441.1556603733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 257512.64937452998,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 257512.6563649738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 409993.10726848023,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 409950.05861664773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21358.2245184546,
            "unit": "ns/iter",
            "extra": "iterations: 32759\ncpu: 21356.69281724081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106632.26305403025,
            "unit": "ns/iter",
            "extra": "iterations: 6588\ncpu: 106627.07953855385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86554.37476854978,
            "unit": "ns/iter",
            "extra": "iterations: 8101\ncpu: 86547.71015923904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86963.45103156389,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86956.36341038959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87134.04219410366,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 87126.34648796066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126924.7568790742,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126917.7950760325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 510857.17565591994,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 510831.9241982462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 414122.32562275784,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 414099.5848161361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 414742.6769412742,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 414730.5275637202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 410381.6774383207,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 410362.5146886007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255422.58460975732,
            "unit": "ns/iter",
            "extra": "iterations: 2742\ncpu: 255399.19766593562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 408794.400468395,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 408751.46370022855 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}