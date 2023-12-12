window.BENCHMARK_DATA = {
  "lastUpdate": 1702394189951,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-10 20.04 Debug c++-17": [
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
        "date": 1702392460238,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17645.491822430733,
            "unit": "ns/iter",
            "extra": "iterations: 39376\ncpu: 17644.61093051605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 166901.2073434153,
            "unit": "ns/iter",
            "extra": "iterations: 5093\ncpu: 166894.95385823678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 317714.26737382775,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 317708.0102414045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 464496.13290459715,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 464473.68703108263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 617300.3870738501,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 617283.59375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 618416.8290000116,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618370.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 738634.0695999934,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 738608.56 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 863545.0250696337,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 863492.3862581241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 980493.3445732477,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 980450.8956796635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14053.627447055072,
            "unit": "ns/iter",
            "extra": "iterations: 49958\ncpu: 14052.834380879933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11393.6731109774,
            "unit": "ns/iter",
            "extra": "iterations: 61553\ncpu: 11393.222101278556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11421.53041481409,
            "unit": "ns/iter",
            "extra": "iterations: 61401\ncpu: 11421.427989772154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11550.950209383931,
            "unit": "ns/iter",
            "extra": "iterations: 60654\ncpu: 11550.453391367433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19138.468227333262,
            "unit": "ns/iter",
            "extra": "iterations: 36651\ncpu: 19138.236337344155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 65944.01416408844,
            "unit": "ns/iter",
            "extra": "iterations: 12920\ncpu: 65941.4705882353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 358112.53826851246,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 358109.95399414527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 280314.6208827454,
            "unit": "ns/iter",
            "extra": "iterations: 3036\ncpu: 280300.4281949937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 279538.09055119124,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 279531.7913385821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284709.96146436984,
            "unit": "ns/iter",
            "extra": "iterations: 3114\ncpu: 284703.1791907521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 608779.8536585954,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 608748.0836236933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5245608.314606706,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5245492.696629212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4249912.383561548,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4249826.484018263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4211911.959459571,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4211695.495495493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4219046.722727171,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4218913.18181819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2388979.1881445786,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2388832.7319587697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4117019.613333165,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4116863.111111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15838976.716419091,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15838344.776119363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6823579.949999612,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6823437.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 20152786.943395887,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 20152184.90566043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 73681.28104462718,
            "unit": "ns/iter",
            "extra": "iterations: 11564\ncpu: 73677.88827395384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 389701.2683257871,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 389686.4253393666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 308722.342257606,
            "unit": "ns/iter",
            "extra": "iterations: 2764\ncpu: 308704.8842257606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 312385.66448562033,
            "unit": "ns/iter",
            "extra": "iterations: 2751\ncpu: 312379.9709196653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 305467.13368982216,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 305449.7682709446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 503537.0509999666,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503512.3000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5323596.70857139,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 5323361.142857145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4312292.2175926855,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4312244.444444451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4241144.890410953,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4240992.237442923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4276037.224770923,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4275866.055045891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2405870.0025838315,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2405783.462532308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4160904.0580356447,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4160666.5178571334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16087802.863637535,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16087260.606060673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6943624.980000323,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6943435.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66962.41439887598,
            "unit": "ns/iter",
            "extra": "iterations: 12751\ncpu: 66960.89718453467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 346881.3764658424,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 346854.58956732886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 275126.63431875303,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 275118.3804627254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 286928.5632953674,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 286922.47153382347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 272445.0165869219,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 272433.7161084529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 592114.6238095815,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 592091.0204081653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5326801.565714569,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 5326528.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4265247.146789417,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4265098.16513761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4226290.199095043,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4226113.122171944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4248237.950000348,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4247996.363636375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2409681.7474227715,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2409662.371134029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4139497.755555668,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139316.444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6202.931886684164,
            "unit": "ns/iter",
            "extra": "iterations: 113135\ncpu: 6202.931011623293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 41998.839861062566,
            "unit": "ns/iter",
            "extra": "iterations: 16698\ncpu: 41998.24529883844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33830.52581693407,
            "unit": "ns/iter",
            "extra": "iterations: 22156\ncpu: 33829.37353312888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32188.670423703592,
            "unit": "ns/iter",
            "extra": "iterations: 21737\ncpu: 32187.390164236018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25179.36226523189,
            "unit": "ns/iter",
            "extra": "iterations: 27847\ncpu: 25178.435738140743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 164114.08681371278,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 164109.66682308743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 351911.0962282074,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 351891.8762088982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85989.06398132801,
            "unit": "ns/iter",
            "extra": "iterations: 8143\ncpu: 85986.63883089733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 84892.05539214428,
            "unit": "ns/iter",
            "extra": "iterations: 8160\ncpu: 84891.16421568704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85407.62705019176,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 85403.53733170115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 172289.76456132598,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172288.05603342346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 164234.96480525626,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 164225.9971844192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50851.88002037599,
            "unit": "ns/iter",
            "extra": "iterations: 13744\ncpu: 50849.0686845165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 251519.91296561822,
            "unit": "ns/iter",
            "extra": "iterations: 2792\ncpu: 251509.52722062703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 204881.03222971986,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 204877.99589803815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 202991.13203715527,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 202986.12884503763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 204217.9991227925,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 204209.38596491126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 340223.4749635378,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 340210.16042780987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1490258.3311964902,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1490220.2991452876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1238327.4293286894,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1238301.7667844489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1223461.4572427087,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1223379.7556719205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1232886.3774250452,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1232823.280423274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 783570.1487695402,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 783535.7941834411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1221728.6363636106,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1221711.5384615392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 51529.14753366878,
            "unit": "ns/iter",
            "extra": "iterations: 13441\ncpu: 51527.758351313416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 253473.9800868902,
            "unit": "ns/iter",
            "extra": "iterations: 2762\ncpu: 253464.9529326571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 207961.68839284845,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 207954.61309523927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 212047.14976453484,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 212032.93563579491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 206549.92667844854,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 206540.87161366313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 342913.59157687315,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 342891.9196865823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1481310.5877376755,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1481237.4207188133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1241439.1241134047,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1241349.4680851137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1228768.2245613995,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1228739.29824561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1230476.0611887597,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1230441.6083916193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 781593.7984321574,
            "unit": "ns/iter",
            "extra": "iterations: 893\ncpu: 781564.7256438886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1229930.0771928756,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1229913.157894726 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394188963,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16539.01192460178,
            "unit": "ns/iter",
            "extra": "iterations: 42601\ncpu: 16538.590643412128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 159842.30595327806,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 159835.00376789752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 304314.7639034672,
            "unit": "ns/iter",
            "extra": "iterations: 2859\ncpu: 304298.3210912907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 448273.4856115219,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 448234.3268242548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 590972.2734006795,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 590946.3973063976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 591080.1190000257,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591030.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 705433.4812260601,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 705403.4482758623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 824164.8903625194,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 824115.3846153836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 936272.8016113187,
            "unit": "ns/iter",
            "extra": "iterations: 993\ncpu: 936233.6354481381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13273.06456701929,
            "unit": "ns/iter",
            "extra": "iterations: 52612\ncpu: 13272.78757697863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10948.82078555955,
            "unit": "ns/iter",
            "extra": "iterations: 63929\ncpu: 10948.740008446872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10929.40614755328,
            "unit": "ns/iter",
            "extra": "iterations: 64058\ncpu: 10928.672453089384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11001.039772727403,
            "unit": "ns/iter",
            "extra": "iterations: 63712\ncpu: 11000.481855851333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18937.964128094685,
            "unit": "ns/iter",
            "extra": "iterations: 37160\ncpu: 18936.692680301378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 65011.13618056216,
            "unit": "ns/iter",
            "extra": "iterations: 13159\ncpu: 65006.95341591307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 360622.26187474834,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 360604.24548129423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 283002.2898310674,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 282987.01556806883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 284500.8097934785,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 284488.00799466943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 276565.5525203277,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 276552.7479674798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 591619.8755948442,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 591578.9938817129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4971002.096256678,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 4970778.074866311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4063720.8558951183,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4063529.6943231514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4024297.740259644,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4024020.7792207757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4022281.10344832,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4022146.9827586235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2333374.2361808564,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2333235.1758794026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3949840.66382981,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3949634.4680851065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15444712.202898648,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15444143.478260865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6765702.380000107,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6765383.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19560515.055555124,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19559601.85185185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 74063.72975787646,
            "unit": "ns/iter",
            "extra": "iterations: 11523\ncpu: 74059.17729757882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 394726.957221729,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 394723.64305427804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313183.2178832011,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 313177.0072992708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 310650.6736842142,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 310651.17967332294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 306346.5223934064,
            "unit": "ns/iter",
            "extra": "iterations: 2791\ncpu: 306338.3733428898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 617740.2434350576,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 617735.7700496784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5082106.978141972,
            "unit": "ns/iter",
            "extra": "iterations: 183\ncpu: 5082057.377049184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4128841.2743362375,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4128804.4247787474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4056275.617391174,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4056198.2608695845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4043366.6130433683,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4043297.826086947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2360951.3307888135,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2360937.150127229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4008548.08620686,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4008518.965517246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15823127.149253618,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15822807.462686567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6969235.689999777,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6969177.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 65609.44650477165,
            "unit": "ns/iter",
            "extra": "iterations: 12889\ncpu: 65609.10854216803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 360831.367003381,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 360828.7878787889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 284675.0216522346,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 284672.1185876087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 286080.5292942602,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 286076.76431424846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 274478.0853737248,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 274473.58247422596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 579647.8663563767,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 579639.8271276612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5052444.524324381,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 5052378.918918943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4068472.5720523414,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4068435.807860278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4055178.3217391283,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4055188.695652165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4013517.686695252,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4013479.3991416227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2353120.702020224,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2353087.12121211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3984413.8589743148,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3984384.615384626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6185.870810098939,
            "unit": "ns/iter",
            "extra": "iterations: 113159\ncpu: 6185.720092966528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 42292.87473535809,
            "unit": "ns/iter",
            "extra": "iterations: 17004\ncpu: 42292.62526464347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33431.68941897788,
            "unit": "ns/iter",
            "extra": "iterations: 20877\ncpu: 33431.297600229555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33427.952135282416,
            "unit": "ns/iter",
            "extra": "iterations: 20934\ncpu: 33427.543708799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25214.602800373086,
            "unit": "ns/iter",
            "extra": "iterations: 27782\ncpu: 25214.185443812683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 163972.10725994816,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 163971.1241217784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 319232.6083788849,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 319213.97996357025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 82111.38260155331,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 82107.78351725831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 81905.74439620101,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 81900.7980283998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 82682.98461356112,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 82681.29956207884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 161207.3097161339,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 161202.7463651057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 158922.4559291169,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 158912.15356656152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49518.18103448144,
            "unit": "ns/iter",
            "extra": "iterations: 14152\ncpu: 49517.67241379337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 248128.0095710697,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 248121.233605105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 199833.85342112568,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 199829.31577440456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 201210.54997127058,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 201202.5272831709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 201937.99826888982,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 201927.98615118087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 344137.47166092595,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344123.90340069367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1425886.2693878303,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1425807.346938788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1192351.9812924513,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1192276.3605442212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1185076.815566824,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1185012.8595600901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1178820.8849407325,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1178735.3637901878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 762995.266085062,
            "unit": "ns/iter",
            "extra": "iterations: 917\ncpu: 762989.3129770929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1179370.8670033352,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1179304.8821548752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49470.956207021,
            "unit": "ns/iter",
            "extra": "iterations: 13815\ncpu: 49467.84654361256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 248195.56914895232,
            "unit": "ns/iter",
            "extra": "iterations: 2820\ncpu: 248184.14893617245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 204813.45507752735,
            "unit": "ns/iter",
            "extra": "iterations: 3417\ncpu: 204797.04419081166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 202060.71391453853,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 202052.5981524223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 202491.61900612197,
            "unit": "ns/iter",
            "extra": "iterations: 3441\ncpu: 202480.00581226678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 343508.0314651005,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 343490.51130777155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1412721.8886640526,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1412628.9473684034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1189667.8658743335,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1189638.879456685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1176115.4957983445,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1176079.4957983037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1167333.4331105228,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1167249.3311036658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 756867.0000000566,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 756830.9189189284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1174682.7365772221,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1174603.6912751836 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}