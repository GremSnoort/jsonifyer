window.BENCHMARK_DATA = {
  "lastUpdate": 1702398835801,
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
      }
    ]
  }
}