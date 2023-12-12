window.BENCHMARK_DATA = {
  "lastUpdate": 1702421918785,
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
        "date": 1702412543361,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1448.5120952883415,
            "unit": "ns/iter",
            "extra": "iterations: 480311\ncpu: 1448.4275812962853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17405.358341333085,
            "unit": "ns/iter",
            "extra": "iterations: 47918\ncpu: 17403.7063316499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36349.95940347991,
            "unit": "ns/iter",
            "extra": "iterations: 22933\ncpu: 36347.9658134566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53235.15013966374,
            "unit": "ns/iter",
            "extra": "iterations: 15752\ncpu: 53231.602336211254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59655.73130000052,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59652.67999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74923.10787714446,
            "unit": "ns/iter",
            "extra": "iterations: 11819\ncpu: 74915.57661392669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88844.60768598467,
            "unit": "ns/iter",
            "extra": "iterations: 9732\ncpu: 88837.45376078917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104355.67235656406,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 104347.55808440023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119545.27760821603,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 119537.73584905667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1403.1136210019326,
            "unit": "ns/iter",
            "extra": "iterations: 500066\ncpu: 1403.0427983506163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1221.1885332704042,
            "unit": "ns/iter",
            "extra": "iterations: 571305\ncpu: 1221.116041343941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1203.475979997918,
            "unit": "ns/iter",
            "extra": "iterations: 580537\ncpu: 1203.3994387954606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1171.496765751987,
            "unit": "ns/iter",
            "extra": "iterations: 596893\ncpu: 1171.4119616078613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2097.3889305462476,
            "unit": "ns/iter",
            "extra": "iterations: 334741\ncpu: 2097.251905204323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5809.305839999865,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5808.7999999999865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27961.36310900774,
            "unit": "ns/iter",
            "extra": "iterations: 28961\ncpu: 27959.766582645643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24939.591222607745,
            "unit": "ns/iter",
            "extra": "iterations: 32766\ncpu: 24937.46566562898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25579.755497170405,
            "unit": "ns/iter",
            "extra": "iterations: 31971\ncpu: 25577.839291858258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24671.382364486748,
            "unit": "ns/iter",
            "extra": "iterations: 33115\ncpu: 24668.977804620212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61613.883500001524,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61608.28000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 606861.4030000389,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606848.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 597205.9822039856,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 597167.077344284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 594915.3058419327,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 594856.7010309291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 594352.1479209369,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 593938.104976142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 346656.65174715506,
            "unit": "ns/iter",
            "extra": "iterations: 2547\ncpu: 346639.3011385943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 595028.585733871,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 595003.4293552819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2578354.662650631,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2578261.144578309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1123420.7208738418,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1123390.0485436902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3243521.5400696285,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3243304.8780487822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9166.904382781748,
            "unit": "ns/iter",
            "extra": "iterations: 89555\ncpu: 9166.045446932054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43742.719048111954,
            "unit": "ns/iter",
            "extra": "iterations: 19288\ncpu: 43739.755288262124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38139.60211171167,
            "unit": "ns/iter",
            "extra": "iterations: 21878\ncpu: 38138.47243806568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39235.358734047484,
            "unit": "ns/iter",
            "extra": "iterations: 21233\ncpu: 39231.60175198994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38426.27426430444,
            "unit": "ns/iter",
            "extra": "iterations: 21884\ncpu: 38423.140193748775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73285.32926110196,
            "unit": "ns/iter",
            "extra": "iterations: 11869\ncpu: 73279.67815317163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 631828.736999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631790.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 504901.4840000154,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504845.2999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 506840.74999998073,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506786.20000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 500915.43199999933,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500885.7000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 364069.1759297936,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 364047.47179272777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 615039.0887324314,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 615001.0563380258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2652418.9623189713,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2652140.8695651996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1151673.5644171704,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 1151616.687116563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5597.391929999844,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5597.2189999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 27070.37291212904,
            "unit": "ns/iter",
            "extra": "iterations: 30294\ncpu: 27069.139103452944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23699.799199116693,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 23698.195113458212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24268.0977768498,
            "unit": "ns/iter",
            "extra": "iterations: 33556\ncpu: 24265.10907140297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23706.918254779026,
            "unit": "ns/iter",
            "extra": "iterations: 34265\ncpu: 23706.271705822164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64257.277799998745,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64241.99000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 612698.2049999583,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612659.4000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 530867.2759999809,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530840.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 615026.1515994609,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 614997.3574408917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 611274.6798611191,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 611237.4305555533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 349246.6356803852,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 349223.655063291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 603363.6919917793,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 603331.8275154023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 645.6247663628639,
            "unit": "ns/iter",
            "extra": "iterations: 1086086\ncpu: 645.5949160563732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3439.3128426746384,
            "unit": "ns/iter",
            "extra": "iterations: 204093\ncpu: 3439.1669484009935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2768.1385654735727,
            "unit": "ns/iter",
            "extra": "iterations: 250452\ncpu: 2767.874083656745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2953.1078040402554,
            "unit": "ns/iter",
            "extra": "iterations: 236967\ncpu: 2952.9483008182683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2233.0683005877772,
            "unit": "ns/iter",
            "extra": "iterations: 312867\ncpu: 2232.972796747511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17085.45755718799,
            "unit": "ns/iter",
            "extra": "iterations: 40961\ncpu: 17084.717169990992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33263.10688182183,
            "unit": "ns/iter",
            "extra": "iterations: 21070\ncpu: 33261.67062173694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8063.394404757504,
            "unit": "ns/iter",
            "extra": "iterations: 86931\ncpu: 8062.909663986317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8007.488944752257,
            "unit": "ns/iter",
            "extra": "iterations: 87515\ncpu: 8007.459292692714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7977.557570386544,
            "unit": "ns/iter",
            "extra": "iterations: 88014\ncpu: 7977.162724112193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15945.8757751228,
            "unit": "ns/iter",
            "extra": "iterations: 43864\ncpu: 15944.998176180654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15071.59744932098,
            "unit": "ns/iter",
            "extra": "iterations: 46419\ncpu: 15071.007561558914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4589.727640588552,
            "unit": "ns/iter",
            "extra": "iterations: 151737\ncpu: 4589.517388639597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 23409.454426667355,
            "unit": "ns/iter",
            "extra": "iterations: 31378\ncpu: 23391.516349034515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17879.396831057107,
            "unit": "ns/iter",
            "extra": "iterations: 39256\ncpu: 17878.156205420964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17841.177485536628,
            "unit": "ns/iter",
            "extra": "iterations: 39237\ncpu: 17839.77368300332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18445.623802505695,
            "unit": "ns/iter",
            "extra": "iterations: 37996\ncpu: 18444.728392462315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46180.610719232856,
            "unit": "ns/iter",
            "extra": "iterations: 15169\ncpu: 46177.64519744227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158725.48091776017,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 158711.4039073151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133769.97650430107,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 133764.22158548227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132713.34931766213,
            "unit": "ns/iter",
            "extra": "iterations: 5276\ncpu: 132705.64821834903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133091.3727911827,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 133087.04161124871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82548.56261191661,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 82544.8728661822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133687.69504496417,
            "unit": "ns/iter",
            "extra": "iterations: 5227\ncpu: 133681.4233786099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4794.772835696422,
            "unit": "ns/iter",
            "extra": "iterations: 134154\ncpu: 4794.484696691908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 23006.638439268332,
            "unit": "ns/iter",
            "extra": "iterations: 30396\ncpu: 23005.15528358996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19182.325636116384,
            "unit": "ns/iter",
            "extra": "iterations: 36550\ncpu: 19179.88235294131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19019.32065616537,
            "unit": "ns/iter",
            "extra": "iterations: 36759\ncpu: 19017.96294784959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 19102.733417181564,
            "unit": "ns/iter",
            "extra": "iterations: 36574\ncpu: 19101.785421337576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46149.48620758051,
            "unit": "ns/iter",
            "extra": "iterations: 15117\ncpu: 46146.51055103522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157989.08863329346,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 157976.1840324787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131519.57398343203,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131514.6460843392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131408.2746545512,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 131401.49536248425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 132035.7927792427,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 132032.75667544027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81762.33625219222,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 81761.86806771747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 133206.1601748013,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 133198.36595097976 ns\nthreads: 1"
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
        "date": 1702416011667,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1454.936022227104,
            "unit": "ns/iter",
            "extra": "iterations: 480495\ncpu: 1454.9277307776356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17339.085295830886,
            "unit": "ns/iter",
            "extra": "iterations: 48068\ncpu: 17338.44345510527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36294.07553531559,
            "unit": "ns/iter",
            "extra": "iterations: 22837\ncpu: 36293.247799623416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53824.869631804395,
            "unit": "ns/iter",
            "extra": "iterations: 15671\ncpu: 53823.27228638888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60403.198599999545,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60401.99999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74555.44388228486,
            "unit": "ns/iter",
            "extra": "iterations: 11859\ncpu: 74553.55426258536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88744.65002562813,
            "unit": "ns/iter",
            "extra": "iterations: 9755\ncpu: 88740.89185033321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104741.51774480603,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 104737.48367952518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118688.06290571668,
            "unit": "ns/iter",
            "extra": "iterations: 6470\ncpu: 118684.89953632143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1293.1582764190475,
            "unit": "ns/iter",
            "extra": "iterations: 542336\ncpu: 1293.132117358982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1068.9810381915586,
            "unit": "ns/iter",
            "extra": "iterations: 653155\ncpu: 1068.9560670897426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1053.7658809464872,
            "unit": "ns/iter",
            "extra": "iterations: 662492\ncpu: 1053.7511396364039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1057.30602486068,
            "unit": "ns/iter",
            "extra": "iterations: 662090\ncpu: 1057.2553580328952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2018.9077722893755,
            "unit": "ns/iter",
            "extra": "iterations: 347195\ncpu: 2018.8793041374452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5757.8465500000675,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5757.748000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27667.03909845118,
            "unit": "ns/iter",
            "extra": "iterations: 29771\ncpu: 27666.15498303715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24625.949082102543,
            "unit": "ns/iter",
            "extra": "iterations: 33446\ncpu: 24625.186868384833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25525.766396277493,
            "unit": "ns/iter",
            "extra": "iterations: 31806\ncpu: 25524.753191221836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24634.98489407768,
            "unit": "ns/iter",
            "extra": "iterations: 33232\ncpu: 24633.84689455949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 59999.715800000784,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59998.589999999655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 597922.7180000066,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597913.2999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 601881.3763736339,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 601859.2719780208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 598230.4190476171,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 598196.8707482985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 595278.3584254077,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 595245.372928179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 348755.908911667,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 348741.1277602531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 592755.4897680755,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 592727.2169167812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2494476.102150527,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2494295.6989247305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1132564.4799513877,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 1132517.0109356053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3208793.944250953,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3208604.5296167317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8761.100888411007,
            "unit": "ns/iter",
            "extra": "iterations: 95789\ncpu: 8760.441178005856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 43546.99564212913,
            "unit": "ns/iter",
            "extra": "iterations: 19046\ncpu: 43545.169589415214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38109.83552019349,
            "unit": "ns/iter",
            "extra": "iterations: 21492\ncpu: 38109.04987902464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38927.646354118435,
            "unit": "ns/iter",
            "extra": "iterations: 21202\ncpu: 38925.695689085966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38560.67114999836,
            "unit": "ns/iter",
            "extra": "iterations: 21487\ncpu: 38559.277702797015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73047.68449999935,
            "unit": "ns/iter",
            "extra": "iterations: 12000\ncpu: 73043.18333333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 627392.8069999783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627389.1999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 503378.99699997023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503355.50000000495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 501411.89800001483,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501360.39999999583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 617303.7235252145,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 617278.3226723529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 360574.2911547861,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 360547.0515970521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 615835.666432122,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 615806.3335679099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2630581.8498582616,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2630436.543909338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1188110.07660736,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1188047.8796169707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5455.713539999465,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5455.603999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 27291.315883994845,
            "unit": "ns/iter",
            "extra": "iterations: 30068\ncpu: 27290.671145403798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23402.03133346749,
            "unit": "ns/iter",
            "extra": "iterations: 34819\ncpu: 23401.72032510986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24091.26004721169,
            "unit": "ns/iter",
            "extra": "iterations: 33890\ncpu: 24090.227205665284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23872.186592930768,
            "unit": "ns/iter",
            "extra": "iterations: 34176\ncpu: 23871.275163857685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59231.82110000198,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59230.949999999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 606320.0780000102,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606296.6999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 611033.57556934,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 611025.8799171839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 612844.3579820447,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 612828.5418106433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 609831.5534114477,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 609810.4066161228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 350137.6621728866,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 350133.22759714676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 595113.101291659,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 595096.0571040125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 609.7017454879197,
            "unit": "ns/iter",
            "extra": "iterations: 1149478\ncpu: 609.6930954746447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3291.5269269787045,
            "unit": "ns/iter",
            "extra": "iterations: 211925\ncpu: 3291.4469741653998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2688.5330141148333,
            "unit": "ns/iter",
            "extra": "iterations: 260010\ncpu: 2688.4589054267094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2849.6471397465166,
            "unit": "ns/iter",
            "extra": "iterations: 245695\ncpu: 2849.5459818067247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2180.776611198834,
            "unit": "ns/iter",
            "extra": "iterations: 320786\ncpu: 2180.737313972539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16870.890228518932,
            "unit": "ns/iter",
            "extra": "iterations: 41222\ncpu: 16870.49391101844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31480.991797737086,
            "unit": "ns/iter",
            "extra": "iterations: 22189\ncpu: 31480.53089368598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7955.311384900841,
            "unit": "ns/iter",
            "extra": "iterations: 88389\ncpu: 7954.822432655712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8005.15939540482,
            "unit": "ns/iter",
            "extra": "iterations: 88522\ncpu: 8005.121890603541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7903.166523459558,
            "unit": "ns/iter",
            "extra": "iterations: 88450\ncpu: 7902.920293951433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15990.247425491603,
            "unit": "ns/iter",
            "extra": "iterations: 43989\ncpu: 15989.861101639062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15028.670975902956,
            "unit": "ns/iter",
            "extra": "iterations: 46644\ncpu: 15028.479547208644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4390.1782144652125,
            "unit": "ns/iter",
            "extra": "iterations: 159280\ncpu: 4390.121798091458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22232.90811101328,
            "unit": "ns/iter",
            "extra": "iterations: 31636\ncpu: 22231.204956378886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17792.185852664217,
            "unit": "ns/iter",
            "extra": "iterations: 39230\ncpu: 17791.91944940119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17882.345762192756,
            "unit": "ns/iter",
            "extra": "iterations: 39183\ncpu: 17882.055993670834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18280.44545192435,
            "unit": "ns/iter",
            "extra": "iterations: 38159\ncpu: 18280.007337718438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45914.65473145781,
            "unit": "ns/iter",
            "extra": "iterations: 15249\ncpu: 45913.27955931576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159699.8415412699,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 159697.12722298258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134532.74538106035,
            "unit": "ns/iter",
            "extra": "iterations: 5196\ncpu: 134526.21247112995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134745.35678680716,
            "unit": "ns/iter",
            "extra": "iterations: 5216\ncpu: 134737.57668711792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134126.67603211015,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 134117.18272171138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83066.70422702089,
            "unit": "ns/iter",
            "extra": "iterations: 8422\ncpu: 83061.73118024268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133699.88064824135,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 133687.49285033369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4305.585647041508,
            "unit": "ns/iter",
            "extra": "iterations: 163158\ncpu: 4305.3904803932155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22696.4762429875,
            "unit": "ns/iter",
            "extra": "iterations: 30833\ncpu: 22695.391301527397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19492.290399622147,
            "unit": "ns/iter",
            "extra": "iterations: 36009\ncpu: 19491.377155711016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 18409.943502081052,
            "unit": "ns/iter",
            "extra": "iterations: 37966\ncpu: 18409.31623031142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18685.835617531993,
            "unit": "ns/iter",
            "extra": "iterations: 37577\ncpu: 18685.536365329954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 45369.99584873966,
            "unit": "ns/iter",
            "extra": "iterations: 15417\ncpu: 45368.97580592879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156941.43017010108,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 156939.2121754688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131611.2985746482,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131608.08327081735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 132691.55781278963,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 132689.57660907507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131551.6898043639,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 131545.41008276842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83035.92805841388,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 83034.23509695982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 133158.0422158451,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 133153.4670487085 ns\nthreads: 1"
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
        "date": 1702418367108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1472.2899785132681,
            "unit": "ns/iter",
            "extra": "iterations: 465869\ncpu: 1472.2117161691378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17504.511268975635,
            "unit": "ns/iter",
            "extra": "iterations: 47298\ncpu: 17503.85005708487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36384.148295178755,
            "unit": "ns/iter",
            "extra": "iterations: 22671\ncpu: 36383.78104185966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53716.87623192194,
            "unit": "ns/iter",
            "extra": "iterations: 15626\ncpu: 53715.53180596443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59482.53100000329,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59481.42000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74765.28303014791,
            "unit": "ns/iter",
            "extra": "iterations: 11709\ncpu: 74759.17670168243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 90122.58010482028,
            "unit": "ns/iter",
            "extra": "iterations: 9731\ncpu: 90121.28249922923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103429.00225038093,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 103422.70519957363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120936.18928322135,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 120934.55810716767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1289.0128940221186,
            "unit": "ns/iter",
            "extra": "iterations: 546765\ncpu: 1288.9034594386985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1071.644775279418,
            "unit": "ns/iter",
            "extra": "iterations: 653834\ncpu: 1071.6386728129778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1054.5541909466324,
            "unit": "ns/iter",
            "extra": "iterations: 644222\ncpu: 1054.4857207608568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1056.457568123955,
            "unit": "ns/iter",
            "extra": "iterations: 664524\ncpu: 1056.4307684899272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1976.1051649937478,
            "unit": "ns/iter",
            "extra": "iterations: 352256\ncpu: 1976.0668377543623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5769.15391,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5768.544999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27645.39638261857,
            "unit": "ns/iter",
            "extra": "iterations: 30077\ncpu: 27644.648734913735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25875.97297131896,
            "unit": "ns/iter",
            "extra": "iterations: 32669\ncpu: 25874.801799871417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27075.203406434423,
            "unit": "ns/iter",
            "extra": "iterations: 31646\ncpu: 27074.559185995167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25158.741563302512,
            "unit": "ns/iter",
            "extra": "iterations: 32329\ncpu: 25157.712889356244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61041.287199998354,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61039.13999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 598778.0789999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598733.8000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 596418.851034506,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 596396.9655172424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 608327.7569061038,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 608303.7292817691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 608979.9938692292,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 608942.9836512255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 345035.7071999861,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 345021.4399999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 591831.1060502889,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 591793.2019034656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2492593.7513368,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2492492.5133689824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1164204.299498762,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1164170.4260651625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3230203.67944261,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3230058.885017426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8886.301103813028,
            "unit": "ns/iter",
            "extra": "iterations: 95306\ncpu: 8885.899103938891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44335.77957392065,
            "unit": "ns/iter",
            "extra": "iterations: 18682\ncpu: 44334.88384541273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38329.55333271812,
            "unit": "ns/iter",
            "extra": "iterations: 21694\ncpu: 38328.24283211935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39513.29246893562,
            "unit": "ns/iter",
            "extra": "iterations: 21086\ncpu: 39512.18818173197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38089.51414964783,
            "unit": "ns/iter",
            "extra": "iterations: 21838\ncpu: 38086.80739994505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74318.28210296905,
            "unit": "ns/iter",
            "extra": "iterations: 11907\ncpu: 74315.31872008063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 639012.4269999547,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638992.7000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 505245.1029999929,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505202.6999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 507535.07899997884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507508.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 501722.38099997916,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501707.19999999844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 363974.0061957781,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 363931.43329202605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 641836.4705469751,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 641808.3450210356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2662382.4999999865,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2661889.4285714338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1182178.949494987,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 1182143.0555555571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5677.2751300002255,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5677.029000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26162.64379385832,
            "unit": "ns/iter",
            "extra": "iterations: 31493\ncpu: 26161.648620328495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23556.93628007151,
            "unit": "ns/iter",
            "extra": "iterations: 35248\ncpu: 23555.988992283175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23993.093360394076,
            "unit": "ns/iter",
            "extra": "iterations: 34490\ncpu: 23992.328211075783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23844.200251226594,
            "unit": "ns/iter",
            "extra": "iterations: 34232\ncpu: 23843.473942510016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59333.93010000145,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59330.05999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 621111.9390000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621069.8999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 612531.8002802781,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 612515.9074982498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 616642.9290730164,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 616626.544943817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 612390.2771587521,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 612355.0835654596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 352498.3339992063,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 352486.6160607253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 601313.5116598166,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 601291.6323731154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 609.1222597268985,
            "unit": "ns/iter",
            "extra": "iterations: 1134969\ncpu: 609.0969004439755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3332.7559463533075,
            "unit": "ns/iter",
            "extra": "iterations: 210339\ncpu: 3332.6011819015835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2709.197815901531,
            "unit": "ns/iter",
            "extra": "iterations: 257406\ncpu: 2709.1800501930843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2772.6349081241433,
            "unit": "ns/iter",
            "extra": "iterations: 251208\ncpu: 2772.623483328545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2181.7243994035875,
            "unit": "ns/iter",
            "extra": "iterations: 320598\ncpu: 2181.63712811682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17025.588563186197,
            "unit": "ns/iter",
            "extra": "iterations: 40903\ncpu: 17025.05195217948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33367.8377940756,
            "unit": "ns/iter",
            "extra": "iterations: 20998\ncpu: 33365.930088580026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8015.100924455052,
            "unit": "ns/iter",
            "extra": "iterations: 87511\ncpu: 8014.695295448587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7923.167087689665,
            "unit": "ns/iter",
            "extra": "iterations: 88277\ncpu: 7922.819080847788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7935.57847269449,
            "unit": "ns/iter",
            "extra": "iterations: 88260\ncpu: 7935.2945841831315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15935.556991106616,
            "unit": "ns/iter",
            "extra": "iterations: 43963\ncpu: 15935.286490912547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15043.024549530628,
            "unit": "ns/iter",
            "extra": "iterations: 46396\ncpu: 15042.779549961415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4433.415618656092,
            "unit": "ns/iter",
            "extra": "iterations: 156646\ncpu: 4433.400150658199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22229.546262780386,
            "unit": "ns/iter",
            "extra": "iterations: 31494\ncpu: 22229.062678605544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17981.773497135462,
            "unit": "ns/iter",
            "extra": "iterations: 38909\ncpu: 17981.48757356912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17855.976058409564,
            "unit": "ns/iter",
            "extra": "iterations: 38761\ncpu: 17855.43974613654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18461.007507349605,
            "unit": "ns/iter",
            "extra": "iterations: 38096\ncpu: 18460.04042419164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46079.938200764554,
            "unit": "ns/iter",
            "extra": "iterations: 15162\ncpu: 46079.7454161717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159792.21151210225,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 159785.17587939376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134122.5861738753,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 134117.6177709691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133644.43488194965,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133630.5788271115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134179.32636625486,
            "unit": "ns/iter",
            "extra": "iterations: 5215\ncpu: 134176.1649089155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83415.1825661819,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 83411.32840448311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134609.5922441955,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 134604.79938567904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4609.74375288154,
            "unit": "ns/iter",
            "extra": "iterations: 151830\ncpu: 4609.564644668329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21934.34505322558,
            "unit": "ns/iter",
            "extra": "iterations: 31940\ncpu: 21933.30932999369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 18447.85816011328,
            "unit": "ns/iter",
            "extra": "iterations: 38198\ncpu: 18447.324467249706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 18649.83780766564,
            "unit": "ns/iter",
            "extra": "iterations: 37622\ncpu: 18649.19462016882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 19471.39956466039,
            "unit": "ns/iter",
            "extra": "iterations: 35834\ncpu: 19471.264720656643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46483.59855561993,
            "unit": "ns/iter",
            "extra": "iterations: 15093\ncpu: 46481.24296031249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157453.4787114157,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157449.2227979281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 132129.86570561506,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 132124.6775417297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131594.66103604122,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 131592.69894895048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 132503.20343785468,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132494.54098979823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81288.25493611982,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 81286.59698025642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132588.70803334765,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 132580.0871542263 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421403910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1537.8524380903798,
            "unit": "ns/iter",
            "extra": "iterations: 470040\ncpu: 1537.8557144072845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18089.462731535514,
            "unit": "ns/iter",
            "extra": "iterations: 47131\ncpu: 18088.778086609662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36512.216221089955,
            "unit": "ns/iter",
            "extra": "iterations: 22181\ncpu: 36512.09142960191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 54236.564009740345,
            "unit": "ns/iter",
            "extra": "iterations: 15193\ncpu: 54233.54176265384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60581.00950000095,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60576.58000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76214.86152778898,
            "unit": "ns/iter",
            "extra": "iterations: 11533\ncpu: 76209.79797103962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 90904.66126163928,
            "unit": "ns/iter",
            "extra": "iterations: 9559\ncpu: 90899.78031174815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 105797.02114730139,
            "unit": "ns/iter",
            "extra": "iterations: 8228\ncpu: 105788.38113757897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 122217.51729005127,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 122210.76923076912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1292.2450297403573,
            "unit": "ns/iter",
            "extra": "iterations: 542024\ncpu: 1292.2038507519937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1067.7329839582007,
            "unit": "ns/iter",
            "extra": "iterations: 656410\ncpu: 1067.7311436449784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1049.4005644351907,
            "unit": "ns/iter",
            "extra": "iterations: 666507\ncpu: 1049.3387166226314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1063.6405188482936,
            "unit": "ns/iter",
            "extra": "iterations: 650749\ncpu: 1063.5500016135252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1989.7288139923753,
            "unit": "ns/iter",
            "extra": "iterations: 352249\ncpu: 1989.5965637943627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5769.790220000175,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5769.774999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27040.7163752303,
            "unit": "ns/iter",
            "extra": "iterations: 30424\ncpu: 27038.88048908756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24875.456061480996,
            "unit": "ns/iter",
            "extra": "iterations: 32921\ncpu: 24873.995322134808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25319.23264952443,
            "unit": "ns/iter",
            "extra": "iterations: 32319\ncpu: 25318.267891952128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24594.541253926145,
            "unit": "ns/iter",
            "extra": "iterations: 33112\ncpu: 24592.948175887916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61524.28400000076,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61524.17000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 597657.560000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597614.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 597359.0110344981,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 597341.5862068961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 597008.1678129205,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596976.2035763406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 595825.9993192641,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 595791.3546630371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 345410.55564263486,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 345387.14733542304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 602017.5284441487,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 601968.1288553807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2534920.3133515245,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2534789.918256122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1161254.5619524394,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 1161163.5794743416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3261502.8767605573,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3261272.535211268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9145.493220670023,
            "unit": "ns/iter",
            "extra": "iterations: 92192\ncpu: 9144.962686567162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44026.264383125,
            "unit": "ns/iter",
            "extra": "iterations: 18772\ncpu: 44023.4444917962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39729.91618155041,
            "unit": "ns/iter",
            "extra": "iterations: 21129\ncpu: 39729.05485351871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 40752.24985385771,
            "unit": "ns/iter",
            "extra": "iterations: 20528\ncpu: 40749.41543257979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39694.027259684815,
            "unit": "ns/iter",
            "extra": "iterations: 20910\ncpu: 39692.10903873754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 72445.18911981412,
            "unit": "ns/iter",
            "extra": "iterations: 12077\ncpu: 72440.82967624394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 635547.828,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 635545.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 508630.30499999697,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508615.5999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 506168.2809999866,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506121.8000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 505472.80099999625,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505471.19999999524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 361589.2500000108,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 361569.7281713322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 617895.3410689153,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 617871.9409282685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2689131.7942029485,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2688998.2608695747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1160680.6529338297,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1160615.1061173512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5670.58854999999,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5670.287000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26907.64457105598,
            "unit": "ns/iter",
            "extra": "iterations: 30715\ncpu: 26905.63568289105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23461.884007478136,
            "unit": "ns/iter",
            "extra": "iterations: 35304\ncpu: 23460.214140040818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24052.601651156674,
            "unit": "ns/iter",
            "extra": "iterations: 34279\ncpu: 24051.69345663514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23452.820166676636,
            "unit": "ns/iter",
            "extra": "iterations: 35038\ncpu: 23450.81340259147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 58324.27180000081,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58324.12000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 611140.1879999789,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611090.5999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 614389.5768156416,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 614376.1871508358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 614116.3474341144,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 614078.5714285724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 612392.3682385655,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 612356.8654646323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 350870.8683794473,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 350863.99209485925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 602021.0411805095,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 601974.1249142064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 608.0477146796431,
            "unit": "ns/iter",
            "extra": "iterations: 1153230\ncpu: 608.0212967057738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3362.625177826323,
            "unit": "ns/iter",
            "extra": "iterations: 208771\ncpu: 3362.365462636101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2848.504029068008,
            "unit": "ns/iter",
            "extra": "iterations: 245218\ncpu: 2848.38021678669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2694.8898679430745,
            "unit": "ns/iter",
            "extra": "iterations: 259888\ncpu: 2694.676168195526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2235.643107353588,
            "unit": "ns/iter",
            "extra": "iterations: 313450\ncpu: 2235.5444249481648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17261.90635080887,
            "unit": "ns/iter",
            "extra": "iterations: 40609\ncpu: 17260.8116427392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35477.05152035545,
            "unit": "ns/iter",
            "extra": "iterations: 19798\ncpu: 35475.43691281961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8025.818737856076,
            "unit": "ns/iter",
            "extra": "iterations: 86979\ncpu: 8025.619977235835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8252.745631205788,
            "unit": "ns/iter",
            "extra": "iterations: 84806\ncpu: 8252.517510553505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8222.43735339383,
            "unit": "ns/iter",
            "extra": "iterations: 84410\ncpu: 8221.845752872901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15885.065910780666,
            "unit": "ns/iter",
            "extra": "iterations: 44363\ncpu: 15884.040754682903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15663.056146453097,
            "unit": "ns/iter",
            "extra": "iterations: 44847\ncpu: 15662.267264254016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4424.269919325116,
            "unit": "ns/iter",
            "extra": "iterations: 158414\ncpu: 4423.947378388325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 23219.17571500101,
            "unit": "ns/iter",
            "extra": "iterations: 29895\ncpu: 23217.78558287357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18062.688545688572,
            "unit": "ns/iter",
            "extra": "iterations: 38850\ncpu: 18061.557271557154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17738.19617879664,
            "unit": "ns/iter",
            "extra": "iterations: 39464\ncpu: 17737.373302250006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18353.83875009758,
            "unit": "ns/iter",
            "extra": "iterations: 38307\ncpu: 18352.402955073736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 47654.4257270976,
            "unit": "ns/iter",
            "extra": "iterations: 14716\ncpu: 47652.2288665401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 169860.83838874288,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 169849.7937393833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 141253.57924489485,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 141246.75953967098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 140241.87793144927,
            "unit": "ns/iter",
            "extra": "iterations: 4989\ncpu: 140237.44237322093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 141131.26122859487,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 141127.67371601332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85397.98216902443,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 85391.91499755789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 141778.67871649732,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 141768.5012185216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4412.41225288472,
            "unit": "ns/iter",
            "extra": "iterations: 158934\ncpu: 4412.109429071198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 23480.16497999612,
            "unit": "ns/iter",
            "extra": "iterations: 29743\ncpu: 23478.462159163544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 18819.02030429369,
            "unit": "ns/iter",
            "extra": "iterations: 36938\ncpu: 18817.783854025703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 18909.379362713033,
            "unit": "ns/iter",
            "extra": "iterations: 36875\ncpu: 18908.122033898337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 19286.55734662766,
            "unit": "ns/iter",
            "extra": "iterations: 36105\ncpu: 19285.700041545468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46835.94362236392,
            "unit": "ns/iter",
            "extra": "iterations: 14935\ncpu: 46832.634750586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 159413.25426038983,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 159402.04498977526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 132846.66521409684,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 132837.5142099287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 132391.4216913129,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132385.49488054716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 133575.21843459117,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 133566.73014663922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83073.69465196283,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 83070.67473022675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 133806.1809469077,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 133796.74142227334 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421915736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1520.6926861473728,
            "unit": "ns/iter",
            "extra": "iterations: 455902\ncpu: 1520.5199801711774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17574.894577606497,
            "unit": "ns/iter",
            "extra": "iterations: 46935\ncpu: 17574.41781186748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36799.805140702985,
            "unit": "ns/iter",
            "extra": "iterations: 22565\ncpu: 36799.53910923997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55433.15724209449,
            "unit": "ns/iter",
            "extra": "iterations: 15403\ncpu: 55431.402973446726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 61565.582399998675,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61564.33000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77342.98124339382,
            "unit": "ns/iter",
            "extra": "iterations: 11356\ncpu: 77340.74498062697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 91167.18750000361,
            "unit": "ns/iter",
            "extra": "iterations: 9472\ncpu: 91160.4307432433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 106075.00170523806,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 106066.46772228989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 122897.29730115342,
            "unit": "ns/iter",
            "extra": "iterations: 7003\ncpu: 122888.27645294892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1309.721746001221,
            "unit": "ns/iter",
            "extra": "iterations: 535349\ncpu: 1309.6348363404065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1120.1830608424902,
            "unit": "ns/iter",
            "extra": "iterations: 626076\ncpu: 1120.158894447317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1053.14714163856,
            "unit": "ns/iter",
            "extra": "iterations: 662355\ncpu: 1053.1406873957333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1066.7136352944524,
            "unit": "ns/iter",
            "extra": "iterations: 658915\ncpu: 1066.6600396105716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1990.9682490489615,
            "unit": "ns/iter",
            "extra": "iterations: 351706\ncpu: 1990.8940990486383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5859.456599465831,
            "unit": "ns/iter",
            "extra": "iterations: 139284\ncpu: 5859.360730593611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 26762.5131132563,
            "unit": "ns/iter",
            "extra": "iterations: 30656\ncpu: 26761.11691022964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25374.05904311513,
            "unit": "ns/iter",
            "extra": "iterations: 32146\ncpu: 25371.551670503373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25700.678537691023,
            "unit": "ns/iter",
            "extra": "iterations: 31758\ncpu: 25698.516909125352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24845.150436513006,
            "unit": "ns/iter",
            "extra": "iterations: 32645\ncpu: 24844.11088987598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61568.54700000167,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61562.700000000346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 606124.0569999882,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606111.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 607828.2823943617,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 607784.5070422548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 616225.0684061914,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 616189.9858956268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 606968.9900214085,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 606943.8346400576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 358585.5981116542,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 358560.591133004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 612104.8720279868,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 612049.9300699305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2578100.4447513227,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2577916.0220994498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1173430.828244276,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1173364.6310432549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3247263.294736856,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3247021.403508779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8920.443041731563,
            "unit": "ns/iter",
            "extra": "iterations: 94341\ncpu: 8919.969048451887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 44302.64066627124,
            "unit": "ns/iter",
            "extra": "iterations: 18551\ncpu: 44300.81936283749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38547.73240684561,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 38545.39943104947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39173.95116279114,
            "unit": "ns/iter",
            "extra": "iterations: 21070\ncpu: 39172.31608922626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38298.08727019024,
            "unit": "ns/iter",
            "extra": "iterations: 21485\ncpu: 38295.8156853617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73790.26116351134,
            "unit": "ns/iter",
            "extra": "iterations: 11981\ncpu: 73784.88440030019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 646025.5119999943,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645959.9999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 524138.69299999764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524126.1999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 512008.7450000028,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512005.99999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 517030.4310000233,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516997.4999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 374614.7885762875,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 374586.01875532785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 502493.7339999838,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502481.29999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2736275.47492626,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2736068.141592917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1202130.87994888,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 1202063.0906768802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5633.829210000272,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5633.708999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26669.29118686354,
            "unit": "ns/iter",
            "extra": "iterations: 30568\ncpu: 26667.959958126125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23654.742567646343,
            "unit": "ns/iter",
            "extra": "iterations: 34444\ncpu: 23652.975844849687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24073.61504463659,
            "unit": "ns/iter",
            "extra": "iterations: 34165\ncpu: 24072.073759695617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23606.585529717115,
            "unit": "ns/iter",
            "extra": "iterations: 34830\ncpu: 23606.1986792994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59128.69189999696,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59124.0599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 621811.6480000049,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621761.2000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 501058.36799997406,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501035.899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 622646.8523537816,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 622612.1968616261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 500272.87400001794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500269.699999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 361463.4116432732,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 361435.6729975235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 617599.418079094,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 617554.1666666638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 642.6881750892942,
            "unit": "ns/iter",
            "extra": "iterations: 1087171\ncpu: 642.643705544025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3498.397696921656,
            "unit": "ns/iter",
            "extra": "iterations: 199559\ncpu: 3498.1559338340903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2964.535425481842,
            "unit": "ns/iter",
            "extra": "iterations: 255240\ncpu: 2964.2371885284583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3065.3342811385564,
            "unit": "ns/iter",
            "extra": "iterations: 239149\ncpu: 3065.2375715557887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2301.2033482812326,
            "unit": "ns/iter",
            "extra": "iterations: 303499\ncpu: 2301.000332785277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17049.014825453403,
            "unit": "ns/iter",
            "extra": "iterations: 41078\ncpu: 17047.97458493587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34082.448232200244,
            "unit": "ns/iter",
            "extra": "iterations: 20534\ncpu: 34080.53472289875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8188.279201912246,
            "unit": "ns/iter",
            "extra": "iterations: 85354\ncpu: 8187.939639618489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8085.702169647809,
            "unit": "ns/iter",
            "extra": "iterations: 86650\ncpu: 8085.510675129819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8105.980197216691,
            "unit": "ns/iter",
            "extra": "iterations: 86301\ncpu: 8105.366102362664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16423.270900491923,
            "unit": "ns/iter",
            "extra": "iterations: 42499\ncpu: 16422.10169651038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15490.988478093752,
            "unit": "ns/iter",
            "extra": "iterations: 45305\ncpu: 15489.89074053631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4473.64868444622,
            "unit": "ns/iter",
            "extra": "iterations: 156284\ncpu: 4473.301169665529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22367.97534796375,
            "unit": "ns/iter",
            "extra": "iterations: 31397\ncpu: 22365.786540115587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18047.44156947575,
            "unit": "ns/iter",
            "extra": "iterations: 38841\ncpu: 18045.81241471663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18045.517113662336,
            "unit": "ns/iter",
            "extra": "iterations: 38069\ncpu: 18043.702224907323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18685.198274479157,
            "unit": "ns/iter",
            "extra": "iterations: 37438\ncpu: 18683.671670495412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46498.88275405369,
            "unit": "ns/iter",
            "extra": "iterations: 15105\ncpu: 46495.776233035846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160535.35627437365,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 160526.1298462949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132845.76552116784,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 132835.58002658133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132798.42677105282,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 132793.08764559648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133106.17955538488,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 133103.76211286476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82602.1932367149,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82595.94674207577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133367.42390271678,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 133354.34163024893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4389.533679731904,
            "unit": "ns/iter",
            "extra": "iterations: 159354\ncpu: 4389.168141370714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 23901.09244183984,
            "unit": "ns/iter",
            "extra": "iterations: 29359\ncpu: 23899.47886508407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19286.473987323927,
            "unit": "ns/iter",
            "extra": "iterations: 36290\ncpu: 19285.3403141362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19142.94276620772,
            "unit": "ns/iter",
            "extra": "iterations: 36447\ncpu: 19141.509589266683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 19020.984078683945,
            "unit": "ns/iter",
            "extra": "iterations: 36806\ncpu: 19019.803836331022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46466.15572083354,
            "unit": "ns/iter",
            "extra": "iterations: 15059\ncpu: 46463.05199548385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157402.059061303,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 157392.76891982814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131049.6870901301,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 131041.18418587353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131392.22676161976,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131381.61544227632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130619.39838467752,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 130611.85199098544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83011.00745297589,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 83007.47663551416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132673.37222538173,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 132664.5228609379 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}