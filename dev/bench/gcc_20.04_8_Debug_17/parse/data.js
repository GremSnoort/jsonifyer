window.BENCHMARK_DATA = {
  "lastUpdate": 1702398829451,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-8 20.04 Debug c++-17": [
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
        "date": 1702398829100,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7665.765694231076,
            "unit": "ns/iter",
            "extra": "iterations: 91180\ncpu: 7665.482561965343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55380.09679999619,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55380.04999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101653.49751597273,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 101651.33664537496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148525.34337868443,
            "unit": "ns/iter",
            "extra": "iterations: 5807\ncpu: 148522.83451007408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195451.32454360597,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 195449.56051386063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241552.74255496252,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 241545.1711661563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 288419.51166666986,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 288415.03333333303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334630.44534255425,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 334622.17090069276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 384462.22047244944,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 384441.46981627325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6560.238718464582,
            "unit": "ns/iter",
            "extra": "iterations: 110867\ncpu: 6560.012447346817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5162.758597522602,
            "unit": "ns/iter",
            "extra": "iterations: 135446\ncpu: 5162.63307886538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5219.115472615108,
            "unit": "ns/iter",
            "extra": "iterations: 134179\ncpu: 5218.980615446529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5167.88619518687,
            "unit": "ns/iter",
            "extra": "iterations: 135460\ncpu: 5167.814853093169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8777.166612308358,
            "unit": "ns/iter",
            "extra": "iterations: 79718\ncpu: 8776.731729345942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29747.576390663777,
            "unit": "ns/iter",
            "extra": "iterations: 27379\ncpu: 29747.415902699155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152685.11225759835,
            "unit": "ns/iter",
            "extra": "iterations: 5621\ncpu: 152680.66180394962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118828.21167477303,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 118823.43293954135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117887.99394022799,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 117881.06321443335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111879.89795382829,
            "unit": "ns/iter",
            "extra": "iterations: 7624\ncpu: 111876.5215110182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 329300.4586010146,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 329278.15845824516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1811118.4213592743,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1810990.6796116522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1431252.929121694,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1431119.5685670236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1422129.539755365,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1422020.0305810373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1417860.7317073084,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1417768.5975609743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 782835.973728831,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 782786.694915256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1376217.0074184078,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1376125.2225519298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36100.55868688718,
            "unit": "ns/iter",
            "extra": "iterations: 22816\ncpu: 36098.856065918546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177182.68070680142,
            "unit": "ns/iter",
            "extra": "iterations: 4867\ncpu: 177173.28950071931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 140545.72295643616,
            "unit": "ns/iter",
            "extra": "iterations: 6129\ncpu: 140540.62652961374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136821.45582137717,
            "unit": "ns/iter",
            "extra": "iterations: 6270\ncpu: 136818.03827751183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136563.54276629674,
            "unit": "ns/iter",
            "extra": "iterations: 6290\ncpu: 136562.86168521407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 307990.87978725246,
            "unit": "ns/iter",
            "extra": "iterations: 2820\ncpu: 307989.2553191489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1837686.350393679,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1837657.4803149558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1463682.0031446384,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463673.1132075444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1447369.0217729055,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1447341.9906687406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1449602.8693623738,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1449578.6936236324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 804237.9844960789,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 804202.5839793284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1401970.5203007385,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1401934.7368421017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6567164.063380355,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6566819.718309887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2827820.069486379,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2827792.7492447128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27843.17389377677,
            "unit": "ns/iter",
            "extra": "iterations: 29334\ncpu: 27842.650167041735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144168.68338663425,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 144167.3623969026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111059.70044053296,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 111060.13215859077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111560.07038047134,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 111560.4596805603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106945.2436985334,
            "unit": "ns/iter",
            "extra": "iterations: 8014\ncpu: 106940.62889942549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 274561.36893820955,
            "unit": "ns/iter",
            "extra": "iterations: 3155\ncpu: 274562.21870047523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1809371.1373307514,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1809354.352030944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1423151.9071536602,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1422221.1567732156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1422368.7823440286,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1422358.7519025772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1409833.4720120756,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1409770.0453857766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 770760.4037985416,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 770760.858794389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1368276.8445747187,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1368235.4838709638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2836.852226589656,
            "unit": "ns/iter",
            "extra": "iterations: 247284\ncpu: 2836.776742530859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18783.78450519036,
            "unit": "ns/iter",
            "extra": "iterations: 37277\ncpu: 18782.737344743462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15505.61240258557,
            "unit": "ns/iter",
            "extra": "iterations: 45168\ncpu: 15505.85148777898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15243.67254127843,
            "unit": "ns/iter",
            "extra": "iterations: 45847\ncpu: 15243.930900604239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10880.069501010039,
            "unit": "ns/iter",
            "extra": "iterations: 64330\ncpu: 10879.797916990481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 92318.10712874396,
            "unit": "ns/iter",
            "extra": "iterations: 7589\ncpu: 92316.6029779944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111180.25718367589,
            "unit": "ns/iter",
            "extra": "iterations: 6299\ncpu: 111174.01174789683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30024.18979793198,
            "unit": "ns/iter",
            "extra": "iterations: 23309\ncpu: 30024.22240336362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30022.805174188998,
            "unit": "ns/iter",
            "extra": "iterations: 23308\ncpu: 30021.314570104845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30031.975653663823,
            "unit": "ns/iter",
            "extra": "iterations: 23330\ncpu: 30031.99742820424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59822.764989838506,
            "unit": "ns/iter",
            "extra": "iterations: 11808\ncpu: 59820.613143631716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55674.13677593926,
            "unit": "ns/iter",
            "extra": "iterations: 12568\ncpu: 55675.00795671527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22627.885474949275,
            "unit": "ns/iter",
            "extra": "iterations: 30919\ncpu: 22628.244768589066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109631.03330206328,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 109628.51782363944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89703.38090362323,
            "unit": "ns/iter",
            "extra": "iterations: 7813\ncpu: 89703.60936900078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89745.44176809773,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 89741.80653427428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89604.47941703013,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 89602.87650217368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155402.31335997395,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 155400.59920106534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 533802.3618167684,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 533802.155504236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 438626.6237437108,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 438624.24623115436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 434993.8149068282,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 434992.48447204585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 432006.83261272643,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 431971.0932674481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 269745.7868157287,
            "unit": "ns/iter",
            "extra": "iterations: 2594\ncpu: 269724.2482652273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 426622.47752126167,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 426590.34021871444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22812.440542124372,
            "unit": "ns/iter",
            "extra": "iterations: 30694\ncpu: 22811.393106144467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111797.92328549089,
            "unit": "ns/iter",
            "extra": "iterations: 6270\ncpu: 111789.95215311054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95540.83357898681,
            "unit": "ns/iter",
            "extra": "iterations: 7463\ncpu: 95537.61222028726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92396.16833905922,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92397.6234486398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92300.5447583827,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92294.77158700865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 157081.56918238394,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 157073.80952381104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 527351.0471910114,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 527312.5842696633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 438328.73199749895,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 438308.829054478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 435497.26538224047,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 435469.2355500326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 434139.2699005122,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 434145.9577114408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 272081.33113096695,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 272073.2607850774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 428944.75290516944,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 428950.94801223115 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}