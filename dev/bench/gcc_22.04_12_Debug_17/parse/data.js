window.BENCHMARK_DATA = {
  "lastUpdate": 1702412793876,
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
      }
    ]
  }
}