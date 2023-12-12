window.BENCHMARK_DATA = {
  "lastUpdate": 1702409076652,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Release c++-17": [
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
        "date": 1702398834690,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1667.9236749498584,
            "unit": "ns/iter",
            "extra": "iterations: 425116\ncpu: 1667.8995850544325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24262.923245678845,
            "unit": "ns/iter",
            "extra": "iterations: 33731\ncpu: 24262.873914203552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50031.132952494714,
            "unit": "ns/iter",
            "extra": "iterations: 16630\ncpu: 50031.24473842452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62527.37799999863,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62528.22 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 88408.3785461856,
            "unit": "ns/iter",
            "extra": "iterations: 10469\ncpu: 88407.67026459074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 110811.78316906514,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 110810.94263330812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 133971.65958737794,
            "unit": "ns/iter",
            "extra": "iterations: 6592\ncpu: 133972.19356796113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 154764.4507318814,
            "unit": "ns/iter",
            "extra": "iterations: 5602\ncpu: 154765.20885398076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 176196.0618388936,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 176191.47681041484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1467.9071595096596,
            "unit": "ns/iter",
            "extra": "iterations: 478692\ncpu: 1467.9000275751418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1193.5512740875226,
            "unit": "ns/iter",
            "extra": "iterations: 585988\ncpu: 1193.556864645693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1180.7020828715272,
            "unit": "ns/iter",
            "extra": "iterations: 590963\ncpu: 1180.7053910312477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1170.5651239835354,
            "unit": "ns/iter",
            "extra": "iterations: 597660\ncpu: 1170.5814342602816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2223.345608205301,
            "unit": "ns/iter",
            "extra": "iterations: 316283\ncpu: 2223.351555410819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7039.535863006687,
            "unit": "ns/iter",
            "extra": "iterations: 117670\ncpu: 7039.573383190276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34318.95123464431,
            "unit": "ns/iter",
            "extra": "iterations: 24177\ncpu: 34317.96335360053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29688.040539074565,
            "unit": "ns/iter",
            "extra": "iterations: 27677\ncpu: 29687.02894099789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30195.156969673993,
            "unit": "ns/iter",
            "extra": "iterations: 27139\ncpu: 30194.299716275502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30045.10675212597,
            "unit": "ns/iter",
            "extra": "iterations: 27147\ncpu: 30044.48742034113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74019.84510001488,
            "unit": "ns/iter",
            "extra": "iterations: 11898\ncpu: 74017.49033451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 788981.1841883747,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 788965.4331370915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 647991.9889999906,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647993.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 652222.6750000186,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652210.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 648860.6710000227,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648838.0000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 458423.1532426872,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 458411.08786611026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 641495.2019999874,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641464.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3467714.835766439,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3467570.4379562144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1506717.298722064,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1506673.1629392968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4413525.135513977,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4413362.616822438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10555.25034617146,
            "unit": "ns/iter",
            "extra": "iterations: 81607\ncpu: 10555.078608452692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51220.688019559515,
            "unit": "ns/iter",
            "extra": "iterations: 16360\ncpu: 51218.71638141809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43248.781956451596,
            "unit": "ns/iter",
            "extra": "iterations: 19198\ncpu: 43246.905927700675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42927.36126196052,
            "unit": "ns/iter",
            "extra": "iterations: 19335\ncpu: 42925.89087147655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43346.668291922884,
            "unit": "ns/iter",
            "extra": "iterations: 19279\ncpu: 43344.83116344206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84631.67158422597,
            "unit": "ns/iter",
            "extra": "iterations: 10371\ncpu: 84629.06180696165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 831026.600176538,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 830824.3601059087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 671931.3149999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671901.499999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 676074.4864091384,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 676049.5708154505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 671996.6330000489,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671956.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 476079.88177875447,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 476064.64208242955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 676977.9239999707,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 676948.6000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3663872.727626479,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3663710.8949416312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1567436.7558139325,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1567396.8438538199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7186.881529850782,
            "unit": "ns/iter",
            "extra": "iterations: 114704\ncpu: 7186.624703584881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34454.84408314457,
            "unit": "ns/iter",
            "extra": "iterations: 24295\ncpu: 34453.54188104541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29602.466812907172,
            "unit": "ns/iter",
            "extra": "iterations: 28264\ncpu: 29600.85975091996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29377.72931450403,
            "unit": "ns/iter",
            "extra": "iterations: 28184\ncpu: 29377.13951177957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28651.225423317817,
            "unit": "ns/iter",
            "extra": "iterations: 28879\ncpu: 28651.445687177507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70489.73797355278,
            "unit": "ns/iter",
            "extra": "iterations: 12327\ncpu: 70487.26373002338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 810789.1243567686,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 810758.4905660345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 652359.9469999794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652328.0999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 652059.880999957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652027.6000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 647217.0900000265,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647225.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 463958.3495807052,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 463937.7358490584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 645846.8020000509,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645857.1999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 577.0031757070683,
            "unit": "ns/iter",
            "extra": "iterations: 1210754\ncpu: 576.9822771595213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4102.564912383786,
            "unit": "ns/iter",
            "extra": "iterations: 170630\ncpu: 4102.549375842466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3239.1605230490127,
            "unit": "ns/iter",
            "extra": "iterations: 215888\ncpu: 3239.2064403765135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3016.5320188989654,
            "unit": "ns/iter",
            "extra": "iterations: 232394\ncpu: 3016.415656170124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2528.1845703759527,
            "unit": "ns/iter",
            "extra": "iterations: 276870\ncpu: 2528.112832737394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20032.590848066262,
            "unit": "ns/iter",
            "extra": "iterations: 35009\ncpu: 20032.60304493144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 43397.16628461616,
            "unit": "ns/iter",
            "extra": "iterations: 16141\ncpu: 43395.873861594744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10211.835979843881,
            "unit": "ns/iter",
            "extra": "iterations: 68266\ncpu: 10211.626578384576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10234.172423361742,
            "unit": "ns/iter",
            "extra": "iterations: 68471\ncpu: 10233.909246250178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10287.892426406412,
            "unit": "ns/iter",
            "extra": "iterations: 67907\ncpu: 10287.527059066055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21048.11760277061,
            "unit": "ns/iter",
            "extra": "iterations: 33205\ncpu: 21047.06520102401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19943.303216013483,
            "unit": "ns/iter",
            "extra": "iterations: 34919\ncpu: 19942.243477763037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5352.506036850107,
            "unit": "ns/iter",
            "extra": "iterations: 130366\ncpu: 5352.226040532045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26105.641853141955,
            "unit": "ns/iter",
            "extra": "iterations: 26679\ncpu: 26104.925222084847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21147.23964273693,
            "unit": "ns/iter",
            "extra": "iterations: 33141\ncpu: 21146.688392021748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21935.719337282822,
            "unit": "ns/iter",
            "extra": "iterations: 33257\ncpu: 21935.697747842285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21958.888288791946,
            "unit": "ns/iter",
            "extra": "iterations: 32217\ncpu: 21958.525002327773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51058.262082602094,
            "unit": "ns/iter",
            "extra": "iterations: 13656\ncpu: 51052.819273579895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 196488.16423356422,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 196473.32959011785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 164467.41650944078,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 164456.62735849118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 166086.83285917004,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 166082.47984827062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 165325.13281064315,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 165318.95937277432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 96459.86585869132,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 96458.07739980702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 165383.78977138994,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 165383.24298845165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5194.139121634645,
            "unit": "ns/iter",
            "extra": "iterations: 134386\ncpu: 5193.800693524595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26809.12390810816,
            "unit": "ns/iter",
            "extra": "iterations: 25987\ncpu: 26806.86112286877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22831.102837921833,
            "unit": "ns/iter",
            "extra": "iterations: 30621\ncpu: 22829.610398092453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22231.185230905794,
            "unit": "ns/iter",
            "extra": "iterations: 31593\ncpu: 22231.212610388273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23088.019163301364,
            "unit": "ns/iter",
            "extra": "iterations: 30214\ncpu: 23087.456146157092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51414.86728395306,
            "unit": "ns/iter",
            "extra": "iterations: 13608\ncpu: 51414.90299823599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 192379.8014867817,
            "unit": "ns/iter",
            "extra": "iterations: 3632\ncpu: 192365.88656387423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 163143.3564610078,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 163145.494761352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 165051.23481587766,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 165050.5260640834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 165537.02517216592,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165536.30966516453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 96416.41547159904,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 96409.45945945865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 164367.91809034106,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 164350.03510414067 ns\nthreads: 1"
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
        "date": 1702409074974,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1562.0929776919127,
            "unit": "ns/iter",
            "extra": "iterations: 438944\ncpu: 1562.0473226653057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 23450.92911006169,
            "unit": "ns/iter",
            "extra": "iterations: 34744\ncpu: 23450.5353442321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 47387.0156943014,
            "unit": "ns/iter",
            "extra": "iterations: 17586\ncpu: 47386.403957693605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58809.67280000107,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58807.72999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 83109.72929020827,
            "unit": "ns/iter",
            "extra": "iterations: 11130\ncpu: 83107.65498652287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 103223.01407443377,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 103214.38454198478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 125181.65824393168,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 125175.05646527397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 145737.5933265606,
            "unit": "ns/iter",
            "extra": "iterations: 5904\ncpu: 145726.89701897028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 172552.14708784892,
            "unit": "ns/iter",
            "extra": "iterations: 5065\ncpu: 172546.53504442252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1342.9375993494505,
            "unit": "ns/iter",
            "extra": "iterations: 546052\ncpu: 1342.9180737365682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1055.8788541377526,
            "unit": "ns/iter",
            "extra": "iterations: 636621\ncpu: 1055.8537968430194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1050.363317241774,
            "unit": "ns/iter",
            "extra": "iterations: 682555\ncpu: 1050.3587256704589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1034.2042551881584,
            "unit": "ns/iter",
            "extra": "iterations: 682132\ncpu: 1034.1939683228445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2050.078225494748,
            "unit": "ns/iter",
            "extra": "iterations: 341436\ncpu: 2050.0117152262806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6481.536642069471,
            "unit": "ns/iter",
            "extra": "iterations: 126030\ncpu: 6481.128302785046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31674.526019582812,
            "unit": "ns/iter",
            "extra": "iterations: 25942\ncpu: 31673.548685529313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27580.897381529227,
            "unit": "ns/iter",
            "extra": "iterations: 29712\ncpu: 27578.631529348484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27419.252282348967,
            "unit": "ns/iter",
            "extra": "iterations: 30232\ncpu: 27418.867425244738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27347.59661184159,
            "unit": "ns/iter",
            "extra": "iterations: 30400\ncpu: 27346.677631578943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71213.67693805035,
            "unit": "ns/iter",
            "extra": "iterations: 12332\ncpu: 71212.16347713259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 754392.5645816325,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 754364.0129975616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 610919.4329999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610885.8000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 608304.5149999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608282.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 613497.1539999583,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 441323.7564296487,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 441321.734745335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 614583.7159999701,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614538.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3382099.298181939,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3381973.818181814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1518681.859706321,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1518517.6182708002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4310395.620370171,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4310122.222222215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9740.422473867704,
            "unit": "ns/iter",
            "extra": "iterations: 87248\ncpu: 9739.304052814967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48038.90287728029,
            "unit": "ns/iter",
            "extra": "iterations: 17308\ncpu: 48034.19805870104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40677.76580035456,
            "unit": "ns/iter",
            "extra": "iterations: 20316\ncpu: 40677.185469580676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 40342.875150698026,
            "unit": "ns/iter",
            "extra": "iterations: 20737\ncpu: 40339.62964748993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 40621.787964084324,
            "unit": "ns/iter",
            "extra": "iterations: 20605\ncpu: 40619.37393836458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81096.84876225606,
            "unit": "ns/iter",
            "extra": "iterations: 10705\ncpu: 81089.3507706682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 798370.5754961135,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 798337.9637618683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 644961.684000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644889.8999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 642356.0009999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642315.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 641971.2809999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641902.3999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 450976.0104220969,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 450944.3981240235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 633675.635999964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633630.6999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3544734.114068467,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3544368.441064641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1570352.153710234,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1570227.385159012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6355.849190126798,
            "unit": "ns/iter",
            "extra": "iterations: 129156\ncpu: 6355.361733097916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30928.00721750276,
            "unit": "ns/iter",
            "extra": "iterations: 26602\ncpu: 30926.7122772724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 27426.291962802923,
            "unit": "ns/iter",
            "extra": "iterations: 30110\ncpu: 27424.440385254005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 26354.160694792285,
            "unit": "ns/iter",
            "extra": "iterations: 31146\ncpu: 26351.769087523317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 26604.210920042664,
            "unit": "ns/iter",
            "extra": "iterations: 30879\ncpu: 26602.610188153656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68229.52678008642,
            "unit": "ns/iter",
            "extra": "iterations: 12696\ncpu: 68225.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 784609.7364470399,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 784563.8031693066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 627594.9839999839,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627530.6999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 629422.6219999928,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629346.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 627089.0780000399,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627074.4999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 450226.3434603607,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 450190.11328527314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 619605.851000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619555.9000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 569.5745385569456,
            "unit": "ns/iter",
            "extra": "iterations: 1233630\ncpu: 569.5347065165378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3639.29869851327,
            "unit": "ns/iter",
            "extra": "iterations: 191166\ncpu: 3639.0482617201915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2802.947460707756,
            "unit": "ns/iter",
            "extra": "iterations: 249223\ncpu: 2802.815951978735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2916.731080923086,
            "unit": "ns/iter",
            "extra": "iterations: 239388\ncpu: 2916.508764014919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2319.155613750918,
            "unit": "ns/iter",
            "extra": "iterations: 303193\ncpu: 2318.9865861019384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19081.540152963167,
            "unit": "ns/iter",
            "extra": "iterations: 36610\ncpu: 19079.93444414082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 41008.12262143988,
            "unit": "ns/iter",
            "extra": "iterations: 16922\ncpu: 41006.719063940734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9736.453530818155,
            "unit": "ns/iter",
            "extra": "iterations: 71499\ncpu: 9735.957146253753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9727.089705514998,
            "unit": "ns/iter",
            "extra": "iterations: 72058\ncpu: 9726.360709428542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9781.035944517445,
            "unit": "ns/iter",
            "extra": "iterations: 70581\ncpu: 9780.584009860966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 19569.622456101606,
            "unit": "ns/iter",
            "extra": "iterations: 35821\ncpu: 19569.275006281085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 18733.53665383407,
            "unit": "ns/iter",
            "extra": "iterations: 37404\ncpu: 18733.4589883435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4794.072217629958,
            "unit": "ns/iter",
            "extra": "iterations: 146377\ncpu: 4792.7338311346275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 24426.190915444036,
            "unit": "ns/iter",
            "extra": "iterations: 28620\ncpu: 24425.104821803234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 19744.175934263443,
            "unit": "ns/iter",
            "extra": "iterations: 35536\ncpu: 19743.426384511444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 19709.498659743935,
            "unit": "ns/iter",
            "extra": "iterations: 35441\ncpu: 19708.507096300822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20269.0145737963,
            "unit": "ns/iter",
            "extra": "iterations: 34514\ncpu: 20268.63591586025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48761.21443399219,
            "unit": "ns/iter",
            "extra": "iterations: 14452\ncpu: 48757.777470246256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 182250.17423057152,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 182242.82733437954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 156251.6984375024,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 156243.14732143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 155659.5582535119,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 155656.87235464342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 156520.4053387179,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 156508.5464333774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 91707.24503048052,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 91704.05512854592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 157288.49674960604,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 157284.0394530365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4987.576935728275,
            "unit": "ns/iter",
            "extra": "iterations: 139844\ncpu: 4987.320156746049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24353.453453454567,
            "unit": "ns/iter",
            "extra": "iterations: 28638\ncpu: 24352.779523709698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20728.993755733864,
            "unit": "ns/iter",
            "extra": "iterations: 33791\ncpu: 20727.146281554145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21142.936696998542,
            "unit": "ns/iter",
            "extra": "iterations: 33079\ncpu: 21142.85498352453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21017.14054330208,
            "unit": "ns/iter",
            "extra": "iterations: 33278\ncpu: 21016.686699921782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49192.18421421454,
            "unit": "ns/iter",
            "extra": "iterations: 14266\ncpu: 49190.908453666016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 181221.09149818416,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 181204.87299118552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 155409.58063082845,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155409.0404264775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 153492.0718085108,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 153487.54432623836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 157413.54026618824,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 157407.06068125306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 92277.8034720393,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 92272.39597137514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 155638.57897081983,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 155633.08086433433 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}