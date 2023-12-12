window.BENCHMARK_DATA = {
  "lastUpdate": 1702392461145,
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
      }
    ]
  }
}