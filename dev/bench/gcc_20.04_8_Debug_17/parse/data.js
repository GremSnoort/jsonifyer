window.BENCHMARK_DATA = {
  "lastUpdate": 1705772058399,
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
        "date": 1702409121888,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7491.763425284583,
            "unit": "ns/iter",
            "extra": "iterations: 93890\ncpu: 7491.2525295558635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54135.1437000003,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54131.42 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100441.96304985539,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 100442.3929618768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146045.2577913248,
            "unit": "ns/iter",
            "extra": "iterations: 5904\ncpu: 146034.65447154472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192487.98042269185,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 192489.18798665176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238489.97882870864,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 238479.9835028871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284027.75220372505,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 284020.2742409403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 329961.0992800211,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 329934.93747631676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374866.0121159645,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 374851.44958892255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6026.228465066738,
            "unit": "ns/iter",
            "extra": "iterations: 115777\ncpu: 6025.724453043348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4987.75004107639,
            "unit": "ns/iter",
            "extra": "iterations: 139983\ncpu: 4987.594922240552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5031.828374808017,
            "unit": "ns/iter",
            "extra": "iterations: 138919\ncpu: 5031.711284993412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5035.9678746819645,
            "unit": "ns/iter",
            "extra": "iterations: 139485\ncpu: 5036.037566763458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8556.246801379813,
            "unit": "ns/iter",
            "extra": "iterations: 81754\ncpu: 8556.287154145355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30239.99447329434,
            "unit": "ns/iter",
            "extra": "iterations: 26960\ncpu: 30238.074925816032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146567.37347743707,
            "unit": "ns/iter",
            "extra": "iterations: 5829\ncpu: 146562.70372276526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116282.78027211419,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 116275.17006802716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115962.88848188837,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 115959.00149233482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111893.97090813721,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 111886.25343991617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 323683.9579684801,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 323667.77583187394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1732036.6271185994,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1731959.5103578197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1371507.2064897234,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1371429.4985250742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1380127.9896142997,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1380058.1602373917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1364101.5241581271,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1364016.3982430412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 782876.7757166894,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 782833.4738617206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1331476.997130587,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1331364.1319942626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35850.06236428293,
            "unit": "ns/iter",
            "extra": "iterations: 23026\ncpu: 35848.488664987424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173580.8369477879,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 173572.61044176732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137220.1619987254,
            "unit": "ns/iter",
            "extra": "iterations: 6284\ncpu: 137216.6136218969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137585.29101968434,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 137581.4310869214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136318.47200127115,
            "unit": "ns/iter",
            "extra": "iterations: 6286\ncpu: 136320.37861915393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 305459.6132342446,
            "unit": "ns/iter",
            "extra": "iterations: 2826\ncpu: 305452.33545647433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1777818.6061185114,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777816.6347992339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1405265.5060240568,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1405213.7048192748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1400033.1606606378,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1400005.5555555583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1389405.7693475068,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1389356.4491654073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 817822.4092900578,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 817826.7309377784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1363363.7188873207,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1363286.5300146383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5001618.410000219,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5001693.999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3139443.4843750927,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 3139265.6249999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27582.414415626896,
            "unit": "ns/iter",
            "extra": "iterations: 29690\ncpu: 27581.249578982828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138531.3747375304,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 138522.46809885264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108854.12560081093,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 108846.36984568686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108583.77244523534,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 108580.79017348321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105540.08584801656,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 105535.74331814218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 265850.1376988976,
            "unit": "ns/iter",
            "extra": "iterations: 3268\ncpu: 265834.853121175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1745842.7257463087,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1745758.2089552241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1370443.4063861107,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1370370.2467343956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1373813.791483041,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1373766.372980911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1350954.9288824613,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1350867.4891146556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 767632.7125206137,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 767594.9752883004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1325845.6984353068,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1325759.0327169218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2911.0275858613477,
            "unit": "ns/iter",
            "extra": "iterations: 239543\ncpu: 2910.9132807053293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17580.472935399008,
            "unit": "ns/iter",
            "extra": "iterations: 39923\ncpu: 17579.545625328792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15372.851232356168,
            "unit": "ns/iter",
            "extra": "iterations: 45198\ncpu: 15371.832824461228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15213.060428467834,
            "unit": "ns/iter",
            "extra": "iterations: 46071\ncpu: 15212.758568296811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10973.918272258312,
            "unit": "ns/iter",
            "extra": "iterations: 63528\ncpu: 10973.931179952058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 92783.62217224782,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 92779.05807646444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118394.62415653729,
            "unit": "ns/iter",
            "extra": "iterations: 5928\ncpu: 118388.81578947302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29074.629353749348,
            "unit": "ns/iter",
            "extra": "iterations: 24031\ncpu: 29073.39686238613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29132.386059872762,
            "unit": "ns/iter",
            "extra": "iterations: 24017\ncpu: 29130.62830495047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29452.41430488107,
            "unit": "ns/iter",
            "extra": "iterations: 23852\ncpu: 29449.811336575338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59655.304003444304,
            "unit": "ns/iter",
            "extra": "iterations: 11615\ncpu: 59648.97976754223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54543.22525331373,
            "unit": "ns/iter",
            "extra": "iterations: 12830\ncpu: 54540.07014809027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22199.499098813812,
            "unit": "ns/iter",
            "extra": "iterations: 31625\ncpu: 22198.384189723332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105763.28392264026,
            "unit": "ns/iter",
            "extra": "iterations: 6618\ncpu: 105757.97824115971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87838.14480601563,
            "unit": "ns/iter",
            "extra": "iterations: 7990\ncpu: 87834.51814768567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87903.51529528596,
            "unit": "ns/iter",
            "extra": "iterations: 8009\ncpu: 87904.6947184429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87780.57626059912,
            "unit": "ns/iter",
            "extra": "iterations: 8012\ncpu: 87779.01897154356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154923.54750332268,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 154923.97260273944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 515943.61102941964,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515950.73529412196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423803.70648877224,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 423801.45542753494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 421725.3748495758,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 421721.0589650991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 421157.2469879607,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 421163.4337349341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 275765.751974737,
            "unit": "ns/iter",
            "extra": "iterations: 2532\ncpu: 275767.0221169043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 417496.79545453837,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 417502.27272727265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22484.429505978933,
            "unit": "ns/iter",
            "extra": "iterations: 31031\ncpu: 22484.428474751094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112435.68927825108,
            "unit": "ns/iter",
            "extra": "iterations: 6221\ncpu: 112437.24481594504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91527.31397624713,
            "unit": "ns/iter",
            "extra": "iterations: 7663\ncpu: 91528.69633303004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89686.54664274708,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 89686.64787288566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90220.71763493205,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 90219.73463867104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153452.96127613343,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 153453.00330032918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 509794.0641866959,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 509801.53172866825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 423519.5663234204,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 423516.3537250134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 441470.4123020543,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 441471.55907429813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 419932.17974835273,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 419933.37327741715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274376.33568349504,
            "unit": "ns/iter",
            "extra": "iterations: 2553\ncpu: 274380.21934978385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 419190.7154811827,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 419190.55588762707 ns\nthreads: 1"
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
        "date": 1702412558026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7458.843202081564,
            "unit": "ns/iter",
            "extra": "iterations: 93764\ncpu: 7458.6739046969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53540.77329999995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53538.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98694.22173763621,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 98689.70503844833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144011.1210159306,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 143999.73439575036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188109.47813792017,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 188099.49967370025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232252.13136728766,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 232236.99731903485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277642.926494078,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 277629.594119527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322558.5448068922,
            "unit": "ns/iter",
            "extra": "iterations: 2667\ncpu: 322545.8192725908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368697.27100041753,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 368680.49810046406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6204.749511180553,
            "unit": "ns/iter",
            "extra": "iterations: 112516\ncpu: 6204.568239183759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5153.726394161767,
            "unit": "ns/iter",
            "extra": "iterations: 135655\ncpu: 5153.453982529209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5155.789175420175,
            "unit": "ns/iter",
            "extra": "iterations: 136227\ncpu: 5155.505149493133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5168.151422426018,
            "unit": "ns/iter",
            "extra": "iterations: 135297\ncpu: 5167.8159900071805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8801.20122928533,
            "unit": "ns/iter",
            "extra": "iterations: 79233\ncpu: 8800.998321406489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29541.299738790352,
            "unit": "ns/iter",
            "extra": "iterations: 27564\ncpu: 29539.591496154375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148757.64734467492,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 148755.9007289138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115624.88194726093,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 115619.22920892492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114623.43411165131,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 114622.14170692427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112715.49200686863,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 112712.31338353835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 316069.85415953805,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 316056.35056487424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1774566.199616133,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1774428.9827255313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1387783.0568861747,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1387723.0538922187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1391410.9565868655,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1391322.0059880267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1374313.9217134616,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1374227.917282126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 762902.0377978545,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 762855.7107641737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1344537.8162083782,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1344471.0564399401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36419.397818726844,
            "unit": "ns/iter",
            "extra": "iterations: 22739\ncpu: 36417.78002550693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177424.84656519548,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 177415.79596873763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138093.37668810223,
            "unit": "ns/iter",
            "extra": "iterations: 6220\ncpu: 138086.816720257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138520.48194712822,
            "unit": "ns/iter",
            "extra": "iterations: 6204\ncpu: 138515.409413282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136017.0045995206,
            "unit": "ns/iter",
            "extra": "iterations: 6305\ncpu: 136007.9936558284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 297485.57373113866,
            "unit": "ns/iter",
            "extra": "iterations: 2916\ncpu: 297471.844993141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1797913.3044315712,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1797825.8188824696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1407562.6742424269,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1407478.4848484816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1410068.729607198,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1410004.6827794544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1387945.0922619272,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1387815.922619051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 780701.1989966569,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 780667.8093645498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1361811.5672515112,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1361724.8538011704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6419751.482758721,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6419406.20689653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2872210.000000036,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2872020.061728396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27300.611274084604,
            "unit": "ns/iter",
            "extra": "iterations: 29998\ncpu: 27299.346623108286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140692.65080922082,
            "unit": "ns/iter",
            "extra": "iterations: 6117\ncpu: 140687.60830472552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109754.61252395742,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 109748.25559105394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109873.5713370877,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 109866.61116803276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102917.15988024451,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 102912.28742514936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 258061.08980076274,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 258045.40588760117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1763326.3939394578,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1763245.454545456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1378248.1905465233,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1378205.4652880265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1391022.3175074193,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1390944.3620178069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1370038.3392071128,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1369996.3289280422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 750429.3190975082,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 750380.6607574503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1331095.2639086572,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1331007.5606276714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2944.200511820125,
            "unit": "ns/iter",
            "extra": "iterations: 238365\ncpu: 2944.0526083947047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18819.59627779442,
            "unit": "ns/iter",
            "extra": "iterations: 37236\ncpu: 18818.777527124264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15379.620044308838,
            "unit": "ns/iter",
            "extra": "iterations: 47395\ncpu: 15378.750923093121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15199.800187026363,
            "unit": "ns/iter",
            "extra": "iterations: 45983\ncpu: 15199.167083487326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10999.28640045184,
            "unit": "ns/iter",
            "extra": "iterations: 63708\ncpu: 10998.821184152683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 90928.08240331999,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 90922.09966259998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120140.15557460792,
            "unit": "ns/iter",
            "extra": "iterations: 5830\ncpu: 120138.93653516383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29796.944581698575,
            "unit": "ns/iter",
            "extra": "iterations: 23476\ncpu: 29795.787186914255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29535.616715915854,
            "unit": "ns/iter",
            "extra": "iterations: 23690\ncpu: 29535.289151540794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29494.499747197635,
            "unit": "ns/iter",
            "extra": "iterations: 23734\ncpu: 29492.352742900635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58632.369243627894,
            "unit": "ns/iter",
            "extra": "iterations: 11965\ncpu: 58630.96531550384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54873.900469851535,
            "unit": "ns/iter",
            "extra": "iterations: 12770\ncpu: 54870.704776820596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21818.90341808738,
            "unit": "ns/iter",
            "extra": "iterations: 32211\ncpu: 21817.99074850216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104509.3797946188,
            "unit": "ns/iter",
            "extra": "iterations: 6622\ncpu: 104504.89278163554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85884.80083497238,
            "unit": "ns/iter",
            "extra": "iterations: 8144\ncpu: 85878.88015717061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86669.14524931528,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 86668.28330439249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86550.17261390292,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 86542.82010124753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 152972.5521378714,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 152965.40139615923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 517931.6678966666,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 517909.29889298737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 419048.0390859947,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 419030.3066746818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 420491.8216216312,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 420463.0630630595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 416721.3491686397,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 416711.75771970826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 265003.311649027,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 264993.0408472002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 412343.4035398177,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 412338.87905605114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22022.763950120632,
            "unit": "ns/iter",
            "extra": "iterations: 31756\ncpu: 22021.58017382555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107540.39548802836,
            "unit": "ns/iter",
            "extra": "iterations: 6516\ncpu: 107539.21117249913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89215.95163548122,
            "unit": "ns/iter",
            "extra": "iterations: 7857\ncpu: 89212.1547664496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88799.99733434568,
            "unit": "ns/iter",
            "extra": "iterations: 7878\ncpu: 88794.23711601803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87462.26581015313,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 87458.45079206776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152974.61051712447,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 152963.93192232083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 514216.4508797885,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 514210.77712610393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 419063.59999998787,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 419048.38323353813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 418696.7082085071,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 418675.1348112705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 412635.7345497131,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 412603.649205421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274833.4069148753,
            "unit": "ns/iter",
            "extra": "iterations: 2632\ncpu: 274821.4285714302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 412022.2198581528,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 412006.9739952754 ns\nthreads: 1"
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
        "date": 1702418387073,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7550.861014825821,
            "unit": "ns/iter",
            "extra": "iterations: 92607\ncpu: 7550.38388026823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53632.85099999757,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53630.38 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98942.59039742447,
            "unit": "ns/iter",
            "extra": "iterations: 8706\ncpu: 98940.25959108661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143554.26128226885,
            "unit": "ns/iter",
            "extra": "iterations: 6005\ncpu: 143548.7260616153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188022.21968709715,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 188021.90352020855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233333.0578112382,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 233317.26270502823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278479.08098591113,
            "unit": "ns/iter",
            "extra": "iterations: 3124\ncpu: 278463.6363636366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322456.1444937024,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 322430.67257945286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 366463.602036497,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 366451.166737378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6192.001692227306,
            "unit": "ns/iter",
            "extra": "iterations: 112869\ncpu: 6191.478616803554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5059.009350543824,
            "unit": "ns/iter",
            "extra": "iterations: 137746\ncpu: 5059.054346405705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5106.3273126698805,
            "unit": "ns/iter",
            "extra": "iterations: 137471\ncpu: 5105.921976271355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5128.47676635845,
            "unit": "ns/iter",
            "extra": "iterations: 136354\ncpu: 5128.4465435557395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9078.500483571366,
            "unit": "ns/iter",
            "extra": "iterations: 80650\ncpu: 9078.068195908254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29551.074517921174,
            "unit": "ns/iter",
            "extra": "iterations: 27537\ncpu: 29550.183389621197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147626.70692626305,
            "unit": "ns/iter",
            "extra": "iterations: 5804\ncpu: 147620.4686423156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113098.96287457045,
            "unit": "ns/iter",
            "extra": "iterations: 7542\ncpu: 113092.78705913557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112408.99657262939,
            "unit": "ns/iter",
            "extra": "iterations: 7586\ncpu: 112405.76061165298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109675.41064102395,
            "unit": "ns/iter",
            "extra": "iterations: 7800\ncpu: 109669.65384615408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 327257.36415363924,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 327238.12233285955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1771045.8114285239,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1770966.285714283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1404222.1613876524,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1404168.0241327293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1395705.630239557,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1395639.970059882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1371190.9778761105,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1371092.6253687304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 758593.0525451207,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 758562.8899835806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1385350.7085136988,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1385289.6103896103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36021.955450071866,
            "unit": "ns/iter",
            "extra": "iterations: 22963\ncpu: 36021.935287201035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175126.53338729305,
            "unit": "ns/iter",
            "extra": "iterations: 4942\ncpu: 175121.6106839337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135390.1416152943,
            "unit": "ns/iter",
            "extra": "iterations: 6327\ncpu: 135391.19645961706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136603.15162628115,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 136601.40306122423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134561.29770168237,
            "unit": "ns/iter",
            "extra": "iterations: 6483\ncpu: 134559.46321147613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303620.6199649688,
            "unit": "ns/iter",
            "extra": "iterations: 2855\ncpu: 303598.3187390546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1799496.8861003988,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799415.0579150557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1425398.865237441,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1425304.4410413515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1418974.4878049113,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1418880.945121946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1390361.9373134312,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1390261.7910447815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 778623.5830536821,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 778597.9865771792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1366997.6632503194,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1366896.3396778984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6430248.2777781235,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6429699.30555553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2925770.9278997546,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2925763.636363636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27433.479483231986,
            "unit": "ns/iter",
            "extra": "iterations: 29878\ncpu: 27431.62192917853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139746.69733852477,
            "unit": "ns/iter",
            "extra": "iterations: 6162\ncpu: 139739.62999026282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106248.8628230585,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 106245.21620278305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105884.55746629147,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 105885.51280465147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102989.02214732896,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 102986.14588348579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 265303.6592298126,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 265300.4889975555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1774876.5009488396,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1774738.89943074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1390266.9046199182,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1390222.5037257895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1381366.0875371506,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1381276.4094955514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1360049.1188405475,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1359975.362318833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 744348.6062300325,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 744288.9776357786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1328439.3951497248,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1328393.5805991439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2917.2345680549183,
            "unit": "ns/iter",
            "extra": "iterations: 240945\ncpu: 2917.068625619949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18933.771622652723,
            "unit": "ns/iter",
            "extra": "iterations: 37981\ncpu: 18933.685263684478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14160.672248030622,
            "unit": "ns/iter",
            "extra": "iterations: 49510\ncpu: 14159.303171076499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14657.958478378496,
            "unit": "ns/iter",
            "extra": "iterations: 47686\ncpu: 14658.086230759534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10393.284513109465,
            "unit": "ns/iter",
            "extra": "iterations: 67315\ncpu: 10393.084750798569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 92110.84938174022,
            "unit": "ns/iter",
            "extra": "iterations: 7602\ncpu: 92107.53749013398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120077.98740510615,
            "unit": "ns/iter",
            "extra": "iterations: 5796\ncpu: 120069.66873706052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29597.114239741823,
            "unit": "ns/iter",
            "extra": "iterations: 23617\ncpu: 29595.363509336672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29585.114171895406,
            "unit": "ns/iter",
            "extra": "iterations: 23596\ncpu: 29583.92100355973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29073.475634095677,
            "unit": "ns/iter",
            "extra": "iterations: 24050\ncpu: 29072.395010394725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58333.101351352685,
            "unit": "ns/iter",
            "extra": "iterations: 11988\ncpu: 58328.09476142801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55412.239867005526,
            "unit": "ns/iter",
            "extra": "iterations: 12632\ncpu: 55408.81887270466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22258.97294203797,
            "unit": "ns/iter",
            "extra": "iterations: 31451\ncpu: 22259.17776859244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105935.85720775255,
            "unit": "ns/iter",
            "extra": "iterations: 6604\ncpu: 105932.60145366532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85898.23548861335,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 85894.79549350945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87024.25304650943,
            "unit": "ns/iter",
            "extra": "iterations: 8042\ncpu: 87019.02511812892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86614.10510696209,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 86605.87362433464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153852.53884766353,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 153846.24618070546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 516706.61504425295,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516685.9882005915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 425897.24362088786,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 425889.24665856885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 423961.9921592235,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 423923.7032569369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 417704.39737472055,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 417687.0525059621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 263746.5130336192,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 263722.3271628289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 416726.7261410846,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 416702.1932424419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21972.683404254385,
            "unit": "ns/iter",
            "extra": "iterations: 31725\ncpu: 21971.23404255317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109218.86084243056,
            "unit": "ns/iter",
            "extra": "iterations: 6410\ncpu: 109214.96099844112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90457.29540170281,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 90449.85791784943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88704.52001013179,
            "unit": "ns/iter",
            "extra": "iterations: 7896\ncpu: 88702.90020263258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88673.19799974532,
            "unit": "ns/iter",
            "extra": "iterations: 7899\ncpu: 88667.46423597874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 151208.94809688622,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 151207.6124567449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 518399.2167159796,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 518396.59763314074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 422854.39227521827,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 422838.0808690423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 422241.5737605701,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 422232.2853688081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 415772.0891795473,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 415760.2259215238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266104.6969581655,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 266102.28136882145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 415160.6674584159,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 415145.42755344947 ns\nthreads: 1"
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
        "date": 1702479582970,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7554.8144481431045,
            "unit": "ns/iter",
            "extra": "iterations: 92524\ncpu: 7554.817128528815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54438.98709999643,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54435.88 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100669.63047039401,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 100663.29276854667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145656.75350803352,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 145651.32713440407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191846.36741920872,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 191834.26294820718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237757.5451993341,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 237748.11903425033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282829.11835668935,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 282826.5405934139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328986.65255198674,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 328983.74291115336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374434.9560723513,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 374424.1602067185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6354.335526722992,
            "unit": "ns/iter",
            "extra": "iterations: 113067\ncpu: 6354.2607480520355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5111.075804430397,
            "unit": "ns/iter",
            "extra": "iterations: 134847\ncpu: 5110.948704828437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5208.013112871916,
            "unit": "ns/iter",
            "extra": "iterations: 134143\ncpu: 5207.747702079124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5159.336372385301,
            "unit": "ns/iter",
            "extra": "iterations: 136117\ncpu: 5159.0807907902845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9344.607653594938,
            "unit": "ns/iter",
            "extra": "iterations: 80276\ncpu: 9344.517664058982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29944.86689908209,
            "unit": "ns/iter",
            "extra": "iterations: 27250\ncpu: 29943.50825688075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149756.85403618412,
            "unit": "ns/iter",
            "extra": "iterations: 5748\ncpu: 149756.9937369522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114561.08050904088,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 114558.01741460159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115324.97670661022,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 115320.19658004555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111542.98556998653,
            "unit": "ns/iter",
            "extra": "iterations: 7623\ncpu: 111537.1376098648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 322484.6577204621,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 322479.9581735792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1793753.4836223265,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1793647.9768786072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1401552.7116843935,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1401492.1092564503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1404590.8625376937,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1404507.4018126894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1393466.8048047936,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1393414.5645645624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 797482.1792144072,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 797416.6121112946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1350496.7383721445,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1350414.8255813979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36210.078172323214,
            "unit": "ns/iter",
            "extra": "iterations: 22783\ncpu: 36208.16398191627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174602.27246906245,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 174594.82653682271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135659.08876669742,
            "unit": "ns/iter",
            "extra": "iterations: 6365\ncpu: 135649.58366064425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136544.4478635142,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 136540.11479591843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142092.51053206643,
            "unit": "ns/iter",
            "extra": "iterations: 6409\ncpu: 142084.14729286917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 296485.67200819525,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 296476.13365155103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1809705.2368931735,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1809586.6019417455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1428479.846625711,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1428412.8834355772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1423446.7981650776,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1423382.2629969418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1437613.7978723575,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1437537.9939209754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 807029.2234589182,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 806987.1575342508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1372512.8197931843,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1372424.8153618982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6373966.3356167115,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6373819.863013655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2918571.4656250635,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2918494.3749999804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27431.113484199726,
            "unit": "ns/iter",
            "extra": "iterations: 29872\ncpu: 27430.158677021933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140617.39195979887,
            "unit": "ns/iter",
            "extra": "iterations: 6169\ncpu: 140610.5041335706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107602.22925101218,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 107598.77277327926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107847.05731845609,
            "unit": "ns/iter",
            "extra": "iterations: 7973\ncpu: 107840.03511852513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103752.04490292582,
            "unit": "ns/iter",
            "extra": "iterations: 8240\ncpu: 103748.42233009684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 261120.22587391897,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 261099.91036749363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1785919.1395793292,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1785827.5334607973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1391233.189269871,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1391141.2816691464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1443083.5142856527,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1443025.0000000072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1386842.7440476085,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386777.9761904676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 749265.8441766895,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 749233.8955823282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1342313.223021716,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1342239.1366906422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2903.075084674865,
            "unit": "ns/iter",
            "extra": "iterations: 241807\ncpu: 2902.977167741194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18902.495099495838,
            "unit": "ns/iter",
            "extra": "iterations: 37037\ncpu: 18901.744201744106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14765.851946581563,
            "unit": "ns/iter",
            "extra": "iterations: 47699\ncpu: 14765.296966393407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15215.364863984169,
            "unit": "ns/iter",
            "extra": "iterations: 45987\ncpu: 15214.414943353546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11008.550339374822,
            "unit": "ns/iter",
            "extra": "iterations: 63499\ncpu: 11008.356037102943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 90116.78798404793,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 90114.97491316097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115570.73363020559,
            "unit": "ns/iter",
            "extra": "iterations: 6063\ncpu: 115567.37588652482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29841.74343003596,
            "unit": "ns/iter",
            "extra": "iterations: 23440\ncpu: 29841.288395904692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29496.4199628883,
            "unit": "ns/iter",
            "extra": "iterations: 23714\ncpu: 29496.023446065792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29614.237656410103,
            "unit": "ns/iter",
            "extra": "iterations: 23656\ncpu: 29614.233175515736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58647.35356156333,
            "unit": "ns/iter",
            "extra": "iterations: 11947\ncpu: 58646.404955218364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55147.5085840344,
            "unit": "ns/iter",
            "extra": "iterations: 12698\ncpu: 55144.68420223661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22380.114608323303,
            "unit": "ns/iter",
            "extra": "iterations: 31263\ncpu: 22378.60729936355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110070.22997172273,
            "unit": "ns/iter",
            "extra": "iterations: 6366\ncpu: 110065.5356581843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87788.75263289052,
            "unit": "ns/iter",
            "extra": "iterations: 7976\ncpu: 87781.85807422176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87309.87334498936,
            "unit": "ns/iter",
            "extra": "iterations: 8006\ncpu: 87307.81913564946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87472.06330701742,
            "unit": "ns/iter",
            "extra": "iterations: 7977\ncpu: 87466.75441895389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155372.90631230242,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 155360.64230343237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 522138.0171003712,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 522116.6542750972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 425928.3854612274,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 425905.4367745927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 426875.88407564204,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 426854.423428921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 420808.3036363667,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 420807.5757575767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 267049.3360122536,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 267043.3601224627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 417600.94925373426,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 417600.7761193958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22291.668267393692,
            "unit": "ns/iter",
            "extra": "iterations: 31444\ncpu: 22291.174786922915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109241.62080798252,
            "unit": "ns/iter",
            "extra": "iterations: 6411\ncpu: 109240.27452815541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90216.34342392755,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 90212.41787968481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89103.08139832488,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 89097.20591987902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88902.64187815887,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 88898.64213197859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153118.94316938712,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153112.30601092946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 519324.78189905384,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 519318.175074177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 423132.26299875876,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 423125.9975816218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 424568.5460048053,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 424549.5157384999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421746.4603750863,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 421720.1451905645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 267150.0951107495,
            "unit": "ns/iter",
            "extra": "iterations: 2618\ncpu: 267146.40947287733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418010.46377788467,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 417975.62626946636 ns\nthreads: 1"
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
        "date": 1702488587190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7617.4180553895,
            "unit": "ns/iter",
            "extra": "iterations: 91751\ncpu: 7617.091911804776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54093.081300004545,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54090.64 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99636.29602134155,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 99634.40436144295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144543.39714525308,
            "unit": "ns/iter",
            "extra": "iterations: 5955\ncpu: 144539.04282115865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190368.9758719236,
            "unit": "ns/iter",
            "extra": "iterations: 4559\ncpu: 190363.21561745997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235979.21904762238,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 235966.58503401346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280798.23843058635,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 280790.61032863864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 325840.80059969233,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 325829.12293853075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 370854.7163481788,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 370838.6411889598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6204.157016943803,
            "unit": "ns/iter",
            "extra": "iterations: 112663\ncpu: 6203.9808987866445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5105.05226784429,
            "unit": "ns/iter",
            "extra": "iterations: 137752\ncpu: 5104.783233637269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5091.441012418859,
            "unit": "ns/iter",
            "extra": "iterations: 137690\ncpu: 5091.172198416724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5150.385730972943,
            "unit": "ns/iter",
            "extra": "iterations: 136113\ncpu: 5149.81155363558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8704.97840374479,
            "unit": "ns/iter",
            "extra": "iterations: 80338\ncpu: 8704.30929323607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29707.43218148036,
            "unit": "ns/iter",
            "extra": "iterations: 27463\ncpu: 29705.207005789598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 158360.91629874345,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 158349.74245768934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119506.78340306091,
            "unit": "ns/iter",
            "extra": "iterations: 7170\ncpu: 119498.20083682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 122172.19877892788,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 122162.50177481178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116560.32729501292,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 116549.50967038955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 321089.3927828126,
            "unit": "ns/iter",
            "extra": "iterations: 2882\ncpu: 321067.00208188716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1790701.6608861869,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1790534.8747591563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1395304.0526316762,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1395178.3458646634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1401024.7481145451,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1400915.5354449458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1371819.9850073433,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1371763.1184407792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 751878.3722628335,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 751842.9845904285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1350168.612809279,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1350115.7205240205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35953.20788297326,
            "unit": "ns/iter",
            "extra": "iterations: 23037\ncpu: 35952.09445674352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182166.22535803608,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 182157.81381634393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 140858.07801534884,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 140849.9428757957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141103.4335193711,
            "unit": "ns/iter",
            "extra": "iterations: 6092\ncpu: 141099.14642153654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136543.2825396994,
            "unit": "ns/iter",
            "extra": "iterations: 6300\ncpu: 136537.82539682553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 299567.4423342699,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 299555.1795580107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1817588.3469786257,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1817442.690058477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1417458.8719512133,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1417384.6036585376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1420292.075153452,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1420226.533742332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1394906.576807164,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1394864.3072289114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 789197.0752780252,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 789160.6501283165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1369412.4327917206,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1369338.5524372163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6464951.993055794,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6464692.36111116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2820319.691842964,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2820114.1993957683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27182.044973719687,
            "unit": "ns/iter",
            "extra": "iterations: 30062\ncpu: 27180.58678730602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150067.75408411375,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 150052.41571080917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112985.77617801215,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 112979.7120418851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111990.83579575966,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 111982.01140487309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108889.06574613859,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 108880.63085887986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 260574.6332934844,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 260548.59533771628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1789698.4110898708,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1789604.0152963668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1396166.0509744536,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1396021.589205391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1393580.5097452397,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1393471.664167907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1361065.2631579826,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1360979.9707602349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 738770.8396825091,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 738755.9523809532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1334585.7879656975,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1334440.4011461246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2901.3354928617723,
            "unit": "ns/iter",
            "extra": "iterations: 241102\ncpu: 2901.0928984413276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19325.46872141726,
            "unit": "ns/iter",
            "extra": "iterations: 36079\ncpu: 19324.68194794762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15401.237546108086,
            "unit": "ns/iter",
            "extra": "iterations: 47174\ncpu: 15400.930597362934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15426.564080592198,
            "unit": "ns/iter",
            "extra": "iterations: 45513\ncpu: 15425.757475886008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11015.335297723357,
            "unit": "ns/iter",
            "extra": "iterations: 63633\ncpu: 11014.65906055031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 91606.20620174418,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 91596.10100745769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116670.3385129492,
            "unit": "ns/iter",
            "extra": "iterations: 5985\ncpu: 116660.70175438657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30060.341293998757,
            "unit": "ns/iter",
            "extra": "iterations: 23323\ncpu: 30057.616944647114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29801.482471420368,
            "unit": "ns/iter",
            "extra": "iterations: 23533\ncpu: 29798.878171078835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29479.69388098729,
            "unit": "ns/iter",
            "extra": "iterations: 23762\ncpu: 29476.929551384543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58441.74937322553,
            "unit": "ns/iter",
            "extra": "iterations: 11966\ncpu: 58436.77920775489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55837.05551995002,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 55836.03589168379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22126.335811218807,
            "unit": "ns/iter",
            "extra": "iterations: 31613\ncpu: 22125.090943598974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108639.78403100444,
            "unit": "ns/iter",
            "extra": "iterations: 6450\ncpu: 108632.99224806353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91988.49968302528,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 91978.88931152507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87993.68970718094,
            "unit": "ns/iter",
            "extra": "iterations: 7957\ncpu: 87985.9746135479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87888.16754716054,
            "unit": "ns/iter",
            "extra": "iterations: 7950\ncpu: 87885.33333333445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157023.21808752164,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 157014.70455570577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 526324.0934230539,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 526284.3049327357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 438287.2392638611,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 438251.5337423376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 426934.59426484036,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 426926.5405735144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 421686.218863365,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 421651.753325272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 266836.5987818959,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 266813.6277122206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 418701.0669456259,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 418661.5660490073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22175.67104181422,
            "unit": "ns/iter",
            "extra": "iterations: 31618\ncpu: 22173.45183123559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109494.24352331592,
            "unit": "ns/iter",
            "extra": "iterations: 6369\ncpu: 109484.73857748517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90465.38112476817,
            "unit": "ns/iter",
            "extra": "iterations: 7735\ncpu: 90462.49515190697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90664.73141736722,
            "unit": "ns/iter",
            "extra": "iterations: 7655\ncpu: 90660.94056172528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89473.19116331889,
            "unit": "ns/iter",
            "extra": "iterations: 7831\ncpu: 89465.62380283391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152912.70023981723,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 152897.40571179564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 524699.8270958167,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 524654.3413173623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 422619.2181268878,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 422577.46223565034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 426048.2398052666,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 426010.8947048082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 419527.8302339343,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 419484.2831433702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266370.9927866476,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 266350.8731966579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 417659.0108108093,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 417633.99399399443 ns\nthreads: 1"
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
        "date": 1702490825358,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7536.78175773095,
            "unit": "ns/iter",
            "extra": "iterations: 92938\ncpu: 7535.876605909317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53028.93600000971,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53028.31999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98752.30020751792,
            "unit": "ns/iter",
            "extra": "iterations: 8674\ncpu: 98743.1865344708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143753.08515612324,
            "unit": "ns/iter",
            "extra": "iterations: 5989\ncpu: 143745.1828351978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189291.64195101324,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 189271.32545931768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233194.4946178575,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 233178.98277717963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277560.13164641097,
            "unit": "ns/iter",
            "extra": "iterations: 3122\ncpu: 277526.13709160796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322768.3665057492,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 322748.90456739685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 366550.66751268273,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 366513.95939086284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6242.988592242243,
            "unit": "ns/iter",
            "extra": "iterations: 112292\ncpu: 6242.749260855631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5129.110892090801,
            "unit": "ns/iter",
            "extra": "iterations: 136466\ncpu: 5128.54777014055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5153.602855126033,
            "unit": "ns/iter",
            "extra": "iterations: 136036\ncpu: 5153.30721279662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5180.870312800772,
            "unit": "ns/iter",
            "extra": "iterations: 135102\ncpu: 5180.506580213464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8710.916167143398,
            "unit": "ns/iter",
            "extra": "iterations: 80410\ncpu: 8710.492476060179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29905.42743356307,
            "unit": "ns/iter",
            "extra": "iterations: 27244\ncpu: 29905.017618558188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149821.50819386472,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 149815.67294281715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113182.58163535307,
            "unit": "ns/iter",
            "extra": "iterations: 7558\ncpu: 113179.80947340549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121973.34388956959,
            "unit": "ns/iter",
            "extra": "iterations: 7389\ncpu: 121962.90431722849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111557.6005498888,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 111556.07488871425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 316565.74530556315,
            "unit": "ns/iter",
            "extra": "iterations: 2929\ncpu: 316547.6954592013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1770448.2595421418,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1770339.1221373999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1385749.69299554,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1385666.4679582685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1386799.8450074142,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1386721.4605067065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1362079.7675439368,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1361998.9766081867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 762989.540066864,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 762941.986644408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1339108.935064798,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1339017.46031746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36199.6687836729,
            "unit": "ns/iter",
            "extra": "iterations: 22831\ncpu: 36196.294511847926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177005.08261583035,
            "unit": "ns/iter",
            "extra": "iterations: 4878\ncpu: 176998.93398934006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137522.2062859033,
            "unit": "ns/iter",
            "extra": "iterations: 6268\ncpu: 137510.9763880028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136896.71433127066,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 136891.98150805017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132822.36035898176,
            "unit": "ns/iter",
            "extra": "iterations: 6463\ncpu: 132810.1191397186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 292114.8143100386,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 292110.80068143137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1796803.504816816,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1796677.6493256218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1412619.6075758138,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1412586.0606060594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1406979.1187971088,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1406865.7142857113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1399925.6795252562,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1399875.519287839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 789393.1773648586,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 789299.0709459488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1362585.922401172,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1361065.8857979528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6450418.63194488,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6449965.2777777845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2985803.1185898865,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2985525.3205128317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28189.70598724504,
            "unit": "ns/iter",
            "extra": "iterations: 29162\ncpu: 28187.898635210175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143860.14123539222,
            "unit": "ns/iter",
            "extra": "iterations: 5990\ncpu: 143848.83138564278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108853.94251997893,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 108848.45831747215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107859.6038847219,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 107849.72431077679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106027.19598363356,
            "unit": "ns/iter",
            "extra": "iterations: 8067\ncpu: 106021.90405355145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263031.0918157961,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 263011.7629803453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1766336.4507576127,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1766193.18181818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1374993.42182882,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1374846.607669621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1374806.2709868094,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1374718.998527247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1358320.8340611074,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1358187.9184861665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 754759.4358354193,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 754721.7917675561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1332261.782051333,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1332138.746438744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2927.569441836074,
            "unit": "ns/iter",
            "extra": "iterations: 239589\ncpu: 2927.529227134807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18989.364358314695,
            "unit": "ns/iter",
            "extra": "iterations: 36895\ncpu: 18988.58381894557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15372.25576446268,
            "unit": "ns/iter",
            "extra": "iterations: 45581\ncpu: 15371.36526184165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15314.123154437095,
            "unit": "ns/iter",
            "extra": "iterations: 45650\ncpu: 15312.834611172048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11014.624346702707,
            "unit": "ns/iter",
            "extra": "iterations: 63524\ncpu: 11013.983691203273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 94063.10625080606,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 94056.30904620198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119807.07480314474,
            "unit": "ns/iter",
            "extra": "iterations: 5842\ncpu: 119801.57480314883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29392.11944747403,
            "unit": "ns/iter",
            "extra": "iterations: 23818\ncpu: 29389.465950121637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29543.136401919903,
            "unit": "ns/iter",
            "extra": "iterations: 23746\ncpu: 29540.364693001127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29375.84579576445,
            "unit": "ns/iter",
            "extra": "iterations: 23845\ncpu: 29373.9400293562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56667.87713199948,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 56665.20087300924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54931.63746672198,
            "unit": "ns/iter",
            "extra": "iterations: 12774\ncpu: 54928.158759981154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22262.02712188957,
            "unit": "ns/iter",
            "extra": "iterations: 31340\ncpu: 22259.61072112313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107975.26194168327,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 107969.0136476434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88934.9776386486,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 88929.12087912069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88309.3017393504,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 88305.99949584047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87824.9406101411,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87823.75593898412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156586.38685151565,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 156568.984794275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 518280.3061526789,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 518249.88880652655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 421688.67069489177,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 421645.8006042264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 422909.3518742688,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 422903.50665054034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 420523.41102456197,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 420491.7914919118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 265967.42997730715,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 265963.58819076244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 414131.80817052646,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 414092.9544108963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22052.925195983353,
            "unit": "ns/iter",
            "extra": "iterations: 31763\ncpu: 22051.308125806554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110210.00125806044,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 110201.41531687386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90412.35925972724,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 90406.96259868002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89422.47250639315,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 89416.4450127885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88729.59291587556,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 88721.50537634501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156642.20855977404,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 156630.86503623004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 513596.414526761,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 513558.7674248008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 418649.18794749375,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 418621.4797136024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 420303.52827915247,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 420269.6149217845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 414372.36879433336,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 414344.08983451757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266951.95839695644,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 266937.0610687013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 412444.704666242,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 412416.3614884793 ns\nthreads: 1"
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
        "date": 1705573963666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7326.247334324902,
            "unit": "ns/iter",
            "extra": "iterations: 94160\ncpu: 7325.977060322854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54096.663299992535,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54096.68999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99986.69617753223,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 99980.98059718829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145074.51000503587,
            "unit": "ns/iter",
            "extra": "iterations: 5947\ncpu: 145072.47351605853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190329.08847420372,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 190319.6267837541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235859.12819120052,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 235855.0787615425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280797.9893204136,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 280792.0711974108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326514.9504318364,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 326500.22530980065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 372552.590811515,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 372528.25246887084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6180.4428768520875,
            "unit": "ns/iter",
            "extra": "iterations: 112345\ncpu: 6180.07120922159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5089.777944180548,
            "unit": "ns/iter",
            "extra": "iterations: 137551\ncpu: 5089.675102325683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5115.15563716557,
            "unit": "ns/iter",
            "extra": "iterations: 136966\ncpu: 5114.972328899149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5116.3838734482915,
            "unit": "ns/iter",
            "extra": "iterations: 136545\ncpu: 5116.0284155406725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8700.680747249051,
            "unit": "ns/iter",
            "extra": "iterations: 80134\ncpu: 8700.334439813303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30162.332222841145,
            "unit": "ns/iter",
            "extra": "iterations: 27015\ncpu: 30161.676846196584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 151140.0602135472,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 151131.73464029402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116198.40021691636,
            "unit": "ns/iter",
            "extra": "iterations: 7376\ncpu: 116193.2348156183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118055.82025105464,
            "unit": "ns/iter",
            "extra": "iterations: 7249\ncpu: 118050.69664781372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111196.09461046691,
            "unit": "ns/iter",
            "extra": "iterations: 7663\ncpu: 111191.87002479415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 317265.5886356193,
            "unit": "ns/iter",
            "extra": "iterations: 2939\ncpu: 317245.3895882958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1784257.9922779556,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1784201.7374517375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1398671.121987937,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1398604.9698795194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1404320.4417550508,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1404270.4992435654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1384380.241430761,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1384322.8017883748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 756872.6688471498,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 756835.4865085855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1345251.1322673296,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1345185.901162791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36713.28251941889,
            "unit": "ns/iter",
            "extra": "iterations: 22402\ncpu: 36711.34273725547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176465.13873541544,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 176456.55821567457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139560.65485437197,
            "unit": "ns/iter",
            "extra": "iterations: 6180\ncpu: 139554.11003236263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137537.5518287863,
            "unit": "ns/iter",
            "extra": "iterations: 6261\ncpu: 137527.77511579572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136389.0438107524,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 136386.71339812037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 291956.64937687624,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 291942.9437521051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1815689.5639534052,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1815587.4031007837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1426005.1610429531,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1425991.2576687194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1423883.2247706384,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1423801.2232415974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1413234.1866463684,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1413192.109256444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 791091.414966035,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 791057.823129252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1375817.8434269826,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1375760.118168394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6452205.349649955,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6451947.552447566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2952506.294303847,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2952376.8987341896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29445.250807203753,
            "unit": "ns/iter",
            "extra": "iterations: 27874\ncpu: 29445.024036736624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140706.51317501382,
            "unit": "ns/iter",
            "extra": "iterations: 6148\ncpu: 140701.52895250436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108564.6803278637,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 108562.77427490609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108340.34405347408,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 108336.43586833109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104462.8889430628,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 104461.30683896138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 261788.79414666147,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 261780.43406774115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1780067.923809405,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1780030.6666666593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1386423.2410713364,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386379.0178571348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1395495.547226319,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1395485.3073463282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1375592.4565538005,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1375517.2312223807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 743722.7311058665,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 743717.5815433604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1338141.6106320994,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1338061.063218395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2960.3700137961796,
            "unit": "ns/iter",
            "extra": "iterations: 236302\ncpu: 2960.371050604749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18972.989343864123,
            "unit": "ns/iter",
            "extra": "iterations: 36974\ncpu: 18972.047925569354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15240.71996341464,
            "unit": "ns/iter",
            "extra": "iterations: 45919\ncpu: 15240.556196781385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15159.665313916172,
            "unit": "ns/iter",
            "extra": "iterations: 46079\ncpu: 15159.059441394114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11132.932561276642,
            "unit": "ns/iter",
            "extra": "iterations: 63035\ncpu: 11132.627905132034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 91886.57067786592,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 91882.90856542347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120962.78713469874,
            "unit": "ns/iter",
            "extra": "iterations: 5783\ncpu: 120957.35777278247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29698.470436147174,
            "unit": "ns/iter",
            "extra": "iterations: 23593\ncpu: 29697.291569533478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29758.282722288513,
            "unit": "ns/iter",
            "extra": "iterations: 23539\ncpu: 29757.215684608487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29625.53247631628,
            "unit": "ns/iter",
            "extra": "iterations: 23648\ncpu: 29624.585588633297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59287.45117303485,
            "unit": "ns/iter",
            "extra": "iterations: 11807\ncpu: 59283.348860845355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55504.2138723749,
            "unit": "ns/iter",
            "extra": "iterations: 12615\ncpu: 55503.40071343632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22054.058712539514,
            "unit": "ns/iter",
            "extra": "iterations: 31799\ncpu: 22053.50168244294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105669.49170436438,
            "unit": "ns/iter",
            "extra": "iterations: 6630\ncpu: 105665.46003016667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87567.7425606457,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87564.16604150916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87692.75162419434,
            "unit": "ns/iter",
            "extra": "iterations: 8004\ncpu: 87688.91804097946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87242.10431967636,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 87242.17602390239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153312.04105699647,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 153306.52981000263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 523168.9092262232,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 523154.6130952352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431909.66872681584,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 431878.9864029588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 427240.7211714111,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 427231.97071384965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 427087.3676202665,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 427062.69020084833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 265513.80515538104,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 265500.9855951437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 418521.11661630805,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 418500.84592144977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21918.759515464113,
            "unit": "ns/iter",
            "extra": "iterations: 31948\ncpu: 21918.063728558758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107116.81588998098,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 107111.77998472085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89562.23483490862,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 89562.28564115669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89729.69147028372,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 89725.89651639343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89162.88154198723,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 89160.50548889463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153832.9845916917,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 153828.06515518232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 517663.44797040906,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 517619.4095940942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 425392.7399757116,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 425372.84325638186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 425831.4851063628,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 425814.52887537994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 420477.07164358604,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 420459.18121613265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266422.7221164881,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 266414.76969928003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 417392.1947431496,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 417369.29510154965 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771648159,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7335.127995797313,
            "unit": "ns/iter",
            "extra": "iterations: 95175\ncpu: 7334.869451011295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53275.18650000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53272.009999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99962.80435263466,
            "unit": "ns/iter",
            "extra": "iterations: 9052\ncpu: 99960.77110030934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147116.0322416294,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 147110.13066349903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189852.4175702545,
            "unit": "ns/iter",
            "extra": "iterations: 4519\ncpu: 189847.75392786012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234927.37155336177,
            "unit": "ns/iter",
            "extra": "iterations: 3663\ncpu: 234923.5053235054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284796.1327720417,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 284788.1152849742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322229.4957160122,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 322219.21664626646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 381327.296312164,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 381319.63979416766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6167.718229677418,
            "unit": "ns/iter",
            "extra": "iterations: 112070\ncpu: 6167.610422057644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5049.270123162012,
            "unit": "ns/iter",
            "extra": "iterations: 140547\ncpu: 5049.128049691561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5117.2750762326,
            "unit": "ns/iter",
            "extra": "iterations: 136424\ncpu: 5117.223509059998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5115.303881392302,
            "unit": "ns/iter",
            "extra": "iterations: 136652\ncpu: 5115.204314609373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8496.209871624473,
            "unit": "ns/iter",
            "extra": "iterations: 80311\ncpu: 8496.186076627102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29405.01214124081,
            "unit": "ns/iter",
            "extra": "iterations: 27839\ncpu: 29404.227881748673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152660.43926073253,
            "unit": "ns/iter",
            "extra": "iterations: 5573\ncpu: 152654.8896465098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118221.51861701318,
            "unit": "ns/iter",
            "extra": "iterations: 7144\ncpu: 118219.12094064965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117037.08342618302,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 117035.86350974947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 117373.83857183375,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 117374.42790184756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 313335.03523315286,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 313323.8687392053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1784413.994252717,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1784363.026819919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1397226.3540092101,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1397192.2844175505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1368769.4992503698,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1368737.3313343348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1365275.7046108467,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1365241.6426512974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 744308.5702939434,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 744289.4360603654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1331288.195906541,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1331244.0058479528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36035.47698314249,
            "unit": "ns/iter",
            "extra": "iterations: 23309\ncpu: 36034.1112874855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182319.86713437256,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 182311.26700680255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139320.42461986915,
            "unit": "ns/iter",
            "extra": "iterations: 6182\ncpu: 139317.17890650302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141781.8238482354,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 141778.65455125112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136928.6842105255,
            "unit": "ns/iter",
            "extra": "iterations: 6232\ncpu: 136923.4274711166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 293086.1243576461,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 293079.54779033933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1816742.2222221587,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1816691.4230019485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1421462.9351433564,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1421437.4057315262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1411761.3043477377,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1411728.1859070412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1399069.2298325116,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1399041.4003044085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 770612.4854771531,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 770584.066390044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1367274.7917282318,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1367227.6218611517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6367386.383561857,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6367328.767123309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2819606.1582090138,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2819578.805970161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27244.90777479777,
            "unit": "ns/iter",
            "extra": "iterations: 29840\ncpu: 27244.400134048203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140054.22075975745,
            "unit": "ns/iter",
            "extra": "iterations: 6002\ncpu: 140052.63245584868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109076.75469255149,
            "unit": "ns/iter",
            "extra": "iterations: 7725\ncpu: 109074.79611650507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112391.76094099732,
            "unit": "ns/iter",
            "extra": "iterations: 7609\ncpu: 112390.59009068171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109345.41313530986,
            "unit": "ns/iter",
            "extra": "iterations: 7811\ncpu: 109344.87261554174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 254697.97793023064,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 254695.1386817776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1782717.6543438383,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1782647.1349353124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1373086.6751498247,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1373069.161676646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1372862.9558824303,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1372851.47058824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1372349.5095447171,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1372312.922173276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 730207.7319013389,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 730192.2036595114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1310431.770514669,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1310415.8553546579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2917.701156321911,
            "unit": "ns/iter",
            "extra": "iterations: 239985\ncpu: 2917.68777215244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18845.07920659779,
            "unit": "ns/iter",
            "extra": "iterations: 37459\ncpu: 18844.83034784697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14051.362807326497,
            "unit": "ns/iter",
            "extra": "iterations: 49784\ncpu: 14051.191145749548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14255.740573538586,
            "unit": "ns/iter",
            "extra": "iterations: 50947\ncpu: 14255.593067305223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11017.199651346367,
            "unit": "ns/iter",
            "extra": "iterations: 63100\ncpu: 11017.133122028627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 91693.87889908579,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 91693.53866317189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121534.13750650626,
            "unit": "ns/iter",
            "extra": "iterations: 5767\ncpu: 121532.11375064979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29834.763016159686,
            "unit": "ns/iter",
            "extra": "iterations: 23394\ncpu: 29833.918953577737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29399.259037677926,
            "unit": "ns/iter",
            "extra": "iterations: 23568\ncpu: 29399.07077393072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28971.743941205084,
            "unit": "ns/iter",
            "extra": "iterations: 24221\ncpu: 28971.38433590671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56092.173019827045,
            "unit": "ns/iter",
            "extra": "iterations: 12461\ncpu: 56091.58173501343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55306.78325009931,
            "unit": "ns/iter",
            "extra": "iterations: 13015\ncpu: 55305.562812139855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22182.16039033674,
            "unit": "ns/iter",
            "extra": "iterations: 31255\ncpu: 22181.935690289596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107994.19688881867,
            "unit": "ns/iter",
            "extra": "iterations: 6557\ncpu: 107992.89309135242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88338.46308469429,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 88337.33249051902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87262.3294043143,
            "unit": "ns/iter",
            "extra": "iterations: 7890\ncpu: 87260.64638783221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87001.24289438571,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 87000.67022464983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153530.548742847,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 153527.4812527564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 526876.1672946726,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 526856.0663149892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 427846.7727546566,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 427831.4044605168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 432701.15198509063,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 432691.9354838698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 425728.2692541086,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 425726.80412371736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 263532.43829466915,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 263533.6948391907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 414233.6041916237,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 414212.3353293435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21974.4638424262,
            "unit": "ns/iter",
            "extra": "iterations: 31985\ncpu: 21974.209785837258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110911.99391610752,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 110912.34390009551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91500.2439339185,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 91498.1672689742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89707.23484750597,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 89705.37897310393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89403.70251344396,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 89401.23796423624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152620.98804088304,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 152619.0911067614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 522636.8169642472,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 522634.4494047654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 422950.9736195963,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 422948.6503067495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 424097.3403614545,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 424082.53012047877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 419396.26407185127,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 419386.76646706427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264260.16810184275,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 264252.9389741663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418657.9357357707,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 418647.6276276226 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772055235,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7439.025551129369,
            "unit": "ns/iter",
            "extra": "iterations: 94125\ncpu: 7438.268260292165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54347.02759999937,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54347.17 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100077.24011200554,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 100068.45175592111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145576.52158516285,
            "unit": "ns/iter",
            "extra": "iterations: 5930\ncpu: 145565.8347386172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190917.5014339262,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 190902.8899183764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236020.00924666857,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 236017.54147402756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 281915.3348519364,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 281906.70354702236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 327351.1642857259,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 327333.6466165414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 372596.65968360397,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 372585.03634031664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6202.982028184464,
            "unit": "ns/iter",
            "extra": "iterations: 112899\ncpu: 6202.528808935427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5184.07721328503,
            "unit": "ns/iter",
            "extra": "iterations: 137567\ncpu: 5183.818066832878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5041.987453901586,
            "unit": "ns/iter",
            "extra": "iterations: 138290\ncpu: 5041.888784438497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5166.860981634788,
            "unit": "ns/iter",
            "extra": "iterations: 136018\ncpu: 5166.51693158258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9250.430266358702,
            "unit": "ns/iter",
            "extra": "iterations: 80155\ncpu: 9249.78229679994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29417.823525166623,
            "unit": "ns/iter",
            "extra": "iterations: 27715\ncpu: 29417.2181129352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 154039.06630728013,
            "unit": "ns/iter",
            "extra": "iterations: 5565\ncpu: 154037.5741239892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117894.29954551616,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 117894.32585043379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119648.34669811226,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 119648.30743618177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115295.94943365105,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 115294.06688241617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 320277.1243969836,
            "unit": "ns/iter",
            "extra": "iterations: 2902\ncpu: 320272.5017229505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1793493.8262548307,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1793477.7992278014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1407969.2269288863,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1407934.9470499272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1402215.5128205314,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1402184.6153846122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1378626.4035607849,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1378567.062314539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 763436.6937602618,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 763401.642036123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1349045.4992743728,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1348993.3236574738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36193.29788732343,
            "unit": "ns/iter",
            "extra": "iterations: 22720\ncpu: 36190.46214788736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179809.86980145916,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 179801.65099268552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 140164.02149836358,
            "unit": "ns/iter",
            "extra": "iterations: 6140\ncpu: 140156.98697068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139393.691135962,
            "unit": "ns/iter",
            "extra": "iterations: 6171\ncpu: 139388.17047480185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135995.9760088934,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 135988.22688274554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 297121.878073761,
            "unit": "ns/iter",
            "extra": "iterations: 2928\ncpu: 297112.0901639341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1820982.3099415344,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1820921.6374268946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1435872.979938254,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1435763.271604939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1446743.088549547,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1446660.6106870212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1401276.8738738503,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1401234.9849849842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 779275.632635956,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 779264.8535564849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1373602.723781396,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1373562.6292466724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6441138.903448189,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6441018.620689637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2878632.1261537313,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2878596.9230769235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27110.99615728575,
            "unit": "ns/iter",
            "extra": "iterations: 30187\ncpu: 27109.865173750248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144326.40820770233,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 144325.04187604703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110501.51301210622,
            "unit": "ns/iter",
            "extra": "iterations: 7762\ncpu: 110501.66194279828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110781.74829230695,
            "unit": "ns/iter",
            "extra": "iterations: 7759\ncpu: 110780.75782961756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108559.60419562529,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 108557.3992164787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 256450.6398818273,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 256447.7104874435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1788415.9407265761,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1788390.0573613734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1394928.7309417005,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1394929.1479820565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1395389.8774289945,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1395353.3632287013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1373005.716176495,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1372990.4411764694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 746736.652280111,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 746737.8664495144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1346689.8316547032,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1346691.7985611518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2913.6059675567003,
            "unit": "ns/iter",
            "extra": "iterations: 240668\ncpu: 2913.515299084198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18966.88015275442,
            "unit": "ns/iter",
            "extra": "iterations: 36922\ncpu: 18966.919451817383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14200.981940164598,
            "unit": "ns/iter",
            "extra": "iterations: 49336\ncpu: 14201.009404896997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14660.378751436816,
            "unit": "ns/iter",
            "extra": "iterations: 47815\ncpu: 14660.416187388895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10993.03106390398,
            "unit": "ns/iter",
            "extra": "iterations: 63643\ncpu: 10993.064437565852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 90145.0630235759,
            "unit": "ns/iter",
            "extra": "iterations: 7759\ncpu: 90138.54878205949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116018.17481358603,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 116015.90720795357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30086.550707187766,
            "unit": "ns/iter",
            "extra": "iterations: 23261\ncpu: 30086.255964919925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29840.87851144481,
            "unit": "ns/iter",
            "extra": "iterations: 23459\ncpu: 29840.956562513184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29631.885498772153,
            "unit": "ns/iter",
            "extra": "iterations: 23598\ncpu: 29630.303415543636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59143.28823031661,
            "unit": "ns/iter",
            "extra": "iterations: 11810\ncpu: 59143.41236240509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56007.99630966737,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 56008.11070998803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22180.57614614878,
            "unit": "ns/iter",
            "extra": "iterations: 31584\ncpu: 22180.600937183477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110392.70813622262,
            "unit": "ns/iter",
            "extra": "iterations: 6342\ncpu: 110392.93598234063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87506.13399848084,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 87502.26067188533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88139.96229983536,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 88140.15887025493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88283.84102371222,
            "unit": "ns/iter",
            "extra": "iterations: 7932\ncpu: 88282.75340393347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153993.15019762618,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 153993.36846728326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 528214.0900224727,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 528206.9767441881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 425201.3962264302,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 425194.8874010954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 427639.53398652654,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 427640.3551745246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423189.4471299257,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 423190.9365558956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 264960.4346838093,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 264950.32184778113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420429.9754490933,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 420431.01796406665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22357.25821401525,
            "unit": "ns/iter",
            "extra": "iterations: 31288\ncpu: 22357.312707747315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108944.10585304273,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 108944.3337484428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90314.96007236821,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 90312.50807597986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90073.12633474999,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 90069.71568249016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89473.4072415611,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 89468.46212896648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153060.61383977064,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 153056.6033617092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 523903.455696176,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 523897.0215934468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 425506.8484107156,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 425500.4889975511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 424690.51212127384,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 424691.33333334024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421263.06686745316,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 421249.5783132524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 267310.47209480824,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 267304.5107033625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418639.50509287004,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 418620.7309766334 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}