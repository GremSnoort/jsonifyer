window.BENCHMARK_DATA = {
  "lastUpdate": 1702409078808,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-10 20.04 Release c++-17": [
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
        "date": 1702398836720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 885.9494117469513,
            "unit": "ns/iter",
            "extra": "iterations: 793366\ncpu: 885.9049921473821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 17859.749779051563,
            "unit": "ns/iter",
            "extra": "iterations: 46391\ncpu: 17859.149403979223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41012.72058216088,
            "unit": "ns/iter",
            "extra": "iterations: 21781\ncpu: 41010.766264175196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 51669.17500000068,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51666.86999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 62974.520514247175,
            "unit": "ns/iter",
            "extra": "iterations: 12601\ncpu: 62975.47813665577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 79007.3994604282,
            "unit": "ns/iter",
            "extra": "iterations: 11120\ncpu: 79005.2158273381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 95233.74345322169,
            "unit": "ns/iter",
            "extra": "iterations: 9203\ncpu: 95230.5009236119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 119700.01981456201,
            "unit": "ns/iter",
            "extra": "iterations: 7873\ncpu: 119697.72640670654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137968.8148739257,
            "unit": "ns/iter",
            "extra": "iterations: 6266\ncpu: 137967.07628471113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 774.5205699572832,
            "unit": "ns/iter",
            "extra": "iterations: 967090\ncpu: 774.517676741564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 583.3849628035382,
            "unit": "ns/iter",
            "extra": "iterations: 1206701\ncpu: 583.3577663397978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 585.3784635625187,
            "unit": "ns/iter",
            "extra": "iterations: 1194868\ncpu: 585.3709363712144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 585.811359684326,
            "unit": "ns/iter",
            "extra": "iterations: 1196160\ncpu: 585.7774043606208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1209.9919537018827,
            "unit": "ns/iter",
            "extra": "iterations: 579894\ncpu: 1210.0078635060904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5699.991351482788,
            "unit": "ns/iter",
            "extra": "iterations: 140024\ncpu: 5699.683625664165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23850.63837659681,
            "unit": "ns/iter",
            "extra": "iterations: 34594\ncpu: 23849.35827022025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20969.38371386636,
            "unit": "ns/iter",
            "extra": "iterations: 39506\ncpu: 20968.430111881724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20692.56602222324,
            "unit": "ns/iter",
            "extra": "iterations: 40138\ncpu: 20691.407145348607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21159.252874153197,
            "unit": "ns/iter",
            "extra": "iterations: 38968\ncpu: 21158.44282488199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58625.45171780039,
            "unit": "ns/iter",
            "extra": "iterations: 14146\ncpu: 58622.24657146904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 593689.397999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593649.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 582983.3254875515,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 582979.8251513131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 580354.2810414042,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 580351.8691588772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 584614.5613456325,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 584587.9947229554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 344349.43984373857,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 344345.8984374995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 583476.5664662691,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 583479.2919171685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2677956.836619704,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2677873.8028169023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1151280.0024096365,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1151266.8674698821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3293133.307692302,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3292976.9230769216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5058.275579999645,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5058.168999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23929.02106713455,
            "unit": "ns/iter",
            "extra": "iterations: 34841\ncpu: 23928.26554920924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20968.47185325723,
            "unit": "ns/iter",
            "extra": "iterations: 39525\ncpu: 20968.275774825994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20487.713572828714,
            "unit": "ns/iter",
            "extra": "iterations: 40279\ncpu: 20487.564239429965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21148.45983710744,
            "unit": "ns/iter",
            "extra": "iterations: 39290\ncpu: 21148.722321201276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58285.90840069977,
            "unit": "ns/iter",
            "extra": "iterations: 14225\ncpu: 58284.485061511565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 582986.8390000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582993.6999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 613110.2376306498,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 613094.70383275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 605103.8675360302,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 605098.6959505795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 608687.3990417621,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 608692.2655715303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 343041.88958252507,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 343028.2871634809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 599887.970088368,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 599883.0727396312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2816419.419161775,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2816347.6047904263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1172567.142681439,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 1172561.131611316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5157.522119752725,
            "unit": "ns/iter",
            "extra": "iterations: 153867\ncpu: 5157.52500536178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23987.560501057793,
            "unit": "ns/iter",
            "extra": "iterations: 34487\ncpu: 23986.629744541406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19214.945259316763,
            "unit": "ns/iter",
            "extra": "iterations: 42747\ncpu: 19214.981168269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18826.98737010485,
            "unit": "ns/iter",
            "extra": "iterations: 43785\ncpu: 18826.486239579805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18958.93154844767,
            "unit": "ns/iter",
            "extra": "iterations: 43140\ncpu: 18958.752897542938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58103.93485841716,
            "unit": "ns/iter",
            "extra": "iterations: 14338\ncpu: 58101.736643883334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 584879.4539999745,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584874.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 602905.6437886152,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 602895.8133150332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 598574.4331296815,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 598558.9952477943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 603372.4480874545,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 603374.8633879776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 357248.8814453944,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 357235.44457978086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 608087.8672627229,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 608066.7812929818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.9159465470034,
            "unit": "ns/iter",
            "extra": "iterations: 2277515\ncpu: 306.904586797451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2362.5846541188666,
            "unit": "ns/iter",
            "extra": "iterations: 294711\ncpu: 2362.3641465707037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1877.5595343996688,
            "unit": "ns/iter",
            "extra": "iterations: 370962\ncpu: 1877.4753209223586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1900.8214006467088,
            "unit": "ns/iter",
            "extra": "iterations: 369615\ncpu: 1900.7507812182896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1448.004239744327,
            "unit": "ns/iter",
            "extra": "iterations: 483048\ncpu: 1447.9879846309277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10653.912620320614,
            "unit": "ns/iter",
            "extra": "iterations: 65450\ncpu: 10653.92360580592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 29280.7321988557,
            "unit": "ns/iter",
            "extra": "iterations: 23917\ncpu: 29280.482501986313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7205.930057606989,
            "unit": "ns/iter",
            "extra": "iterations: 97037\ncpu: 7205.517483021913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7115.180102217538,
            "unit": "ns/iter",
            "extra": "iterations: 98222\ncpu: 7114.922318828827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7174.2352730067505,
            "unit": "ns/iter",
            "extra": "iterations: 97525\ncpu: 7173.864137400717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15405.007463014834,
            "unit": "ns/iter",
            "extra": "iterations: 45558\ncpu: 15405.09899468805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14300.02100668969,
            "unit": "ns/iter",
            "extra": "iterations: 49032\ncpu: 14299.891907325908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3186.9113734990506,
            "unit": "ns/iter",
            "extra": "iterations: 219607\ncpu: 3186.845592353601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15610.155044807827,
            "unit": "ns/iter",
            "extra": "iterations: 44858\ncpu: 15609.349502875779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12896.028206355164,
            "unit": "ns/iter",
            "extra": "iterations: 54314\ncpu: 12895.548109143227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12954.821279117521,
            "unit": "ns/iter",
            "extra": "iterations: 54006\ncpu: 12954.293967336742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13396.633948169007,
            "unit": "ns/iter",
            "extra": "iterations: 51938\ncpu: 13395.933613154104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30834.956008110745,
            "unit": "ns/iter",
            "extra": "iterations: 22686\ncpu: 30832.98069293845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 135515.0185686591,
            "unit": "ns/iter",
            "extra": "iterations: 5170\ncpu: 135507.6595744673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 115327.61199357266,
            "unit": "ns/iter",
            "extra": "iterations: 5603\ncpu: 115329.19864358478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 114826.46665573987,
            "unit": "ns/iter",
            "extra": "iterations: 6103\ncpu: 114827.8551532021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 116525.63489418334,
            "unit": "ns/iter",
            "extra": "iterations: 6001\ncpu: 116520.61323112906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 68249.43804401271,
            "unit": "ns/iter",
            "extra": "iterations: 10225\ncpu: 68246.73838630861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 115629.40264026965,
            "unit": "ns/iter",
            "extra": "iterations: 6060\ncpu: 115624.15841584242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3186.0747479993097,
            "unit": "ns/iter",
            "extra": "iterations: 219444\ncpu: 3185.877946081918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16544.32425814187,
            "unit": "ns/iter",
            "extra": "iterations: 44921\ncpu: 16543.52307384084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12933.822126733348,
            "unit": "ns/iter",
            "extra": "iterations: 54224\ncpu: 12933.276777810643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12920.44475051306,
            "unit": "ns/iter",
            "extra": "iterations: 54091\ncpu: 12920.273243238214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13481.415408853507,
            "unit": "ns/iter",
            "extra": "iterations: 51412\ncpu: 13481.2242278067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30397.188126545123,
            "unit": "ns/iter",
            "extra": "iterations: 23043\ncpu: 30396.59332552138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 134416.95843756016,
            "unit": "ns/iter",
            "extra": "iterations: 5197\ncpu: 134409.23609774894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 117195.3797489516,
            "unit": "ns/iter",
            "extra": "iterations: 5975\ncpu: 117188.33472803207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 115187.58169826296,
            "unit": "ns/iter",
            "extra": "iterations: 6065\ncpu: 115181.78070898581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 117865.57739806766,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 117860.39587210317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 67026.1582747678,
            "unit": "ns/iter",
            "extra": "iterations: 10387\ncpu: 67024.92538750343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 115143.91117337582,
            "unit": "ns/iter",
            "extra": "iterations: 6068\ncpu: 115141.18325642834 ns\nthreads: 1"
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
        "date": 1702409077811,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 847.0204372835949,
            "unit": "ns/iter",
            "extra": "iterations: 826969\ncpu: 846.9746749878169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 17904.423755679323,
            "unit": "ns/iter",
            "extra": "iterations: 47315\ncpu: 17902.893374194227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 40358.82211386446,
            "unit": "ns/iter",
            "extra": "iterations: 22149\ncpu: 40356.61203666079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55104.38211266335,
            "unit": "ns/iter",
            "extra": "iterations: 14077\ncpu: 55100.04262271788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 61485.08560460699,
            "unit": "ns/iter",
            "extra": "iterations: 13025\ncpu: 61482.26487523994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 76893.0129378619,
            "unit": "ns/iter",
            "extra": "iterations: 11362\ncpu: 76889.35046646722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 92527.42304050083,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 92525.01841136247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 117992.52760963581,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 117985.54663372459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 135022.86140159308,
            "unit": "ns/iter",
            "extra": "iterations: 6407\ncpu: 135019.79085375383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 667.324662255722,
            "unit": "ns/iter",
            "extra": "iterations: 1047390\ncpu: 667.2965180114373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 551.7121029457683,
            "unit": "ns/iter",
            "extra": "iterations: 1264122\ncpu: 551.7023673347993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 548.1967615397548,
            "unit": "ns/iter",
            "extra": "iterations: 1279991\ncpu: 548.1681511823135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 560.3061348788419,
            "unit": "ns/iter",
            "extra": "iterations: 1247816\ncpu: 560.265215384319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1195.101569201658,
            "unit": "ns/iter",
            "extra": "iterations: 616683\ncpu: 1195.0626172604084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5361.317853512503,
            "unit": "ns/iter",
            "extra": "iterations: 148559\ncpu: 5361.192522836038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22886.746466382585,
            "unit": "ns/iter",
            "extra": "iterations: 36082\ncpu: 22885.386065073995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18558.145614304147,
            "unit": "ns/iter",
            "extra": "iterations: 45751\ncpu: 18556.48401127846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18118.56419537616,
            "unit": "ns/iter",
            "extra": "iterations: 45860\ncpu: 18117.55124291323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18097.024105600944,
            "unit": "ns/iter",
            "extra": "iterations: 45757\ncpu: 18095.762397010254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55051.4162916892,
            "unit": "ns/iter",
            "extra": "iterations: 15112\ncpu: 55047.2141344627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 551234.662000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551220.5999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 567390.6703071849,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 567358.9078498282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 565050.3282894859,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 565019.013157894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 572646.6695194058,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 572597.4983541808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 352177.28808752133,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 352171.1912479745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 563446.7865535383,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 563410.1174934715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2708237.950724632,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2707977.3913043463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1154148.2767527222,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 1154083.7638376346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3438509.2536231684,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3438181.521739128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5257.98368886611,
            "unit": "ns/iter",
            "extra": "iterations: 152166\ncpu: 5257.870352115441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22991.811511923683,
            "unit": "ns/iter",
            "extra": "iterations: 36814\ncpu: 22990.403107513426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18683.088886853522,
            "unit": "ns/iter",
            "extra": "iterations: 43651\ncpu: 18682.83429932879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17871.263416748192,
            "unit": "ns/iter",
            "extra": "iterations: 46155\ncpu: 17870.124580218864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18853.086835309892,
            "unit": "ns/iter",
            "extra": "iterations: 43761\ncpu: 18852.26343090886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 54556.94215202205,
            "unit": "ns/iter",
            "extra": "iterations: 15195\ncpu: 54555.380059230054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 580551.9440000353,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580551.3000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 590975.160786988,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 590960.7191316169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 590046.3547732215,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 590022.4102911305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 599524.4649298636,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 599515.6980627923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 348342.0318979164,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 348325.9569377989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 576252.5323548953,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 576229.6197464947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2842154.1428572065,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2842100.6079027434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1209329.0537771638,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 1209239.3085787487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5339.953082737423,
            "unit": "ns/iter",
            "extra": "iterations: 147515\ncpu: 5339.764091787295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23293.77180757336,
            "unit": "ns/iter",
            "extra": "iterations: 35733\ncpu: 23292.74340245706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18371.092367295714,
            "unit": "ns/iter",
            "extra": "iterations: 42331\ncpu: 18370.114100777137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18390.11203987165,
            "unit": "ns/iter",
            "extra": "iterations: 44743\ncpu: 18388.932346959406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18403.54987106927,
            "unit": "ns/iter",
            "extra": "iterations: 46149\ncpu: 18402.374916032953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 53951.67788893285,
            "unit": "ns/iter",
            "extra": "iterations: 15594\ncpu: 53949.48056944986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 578884.0209999648,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578873.1999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 592721.786146592,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 592702.2864828508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 593579.6914822308,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 593558.2159624413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 590967.1746138446,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 590950.6380120927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 355262.655424614,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 355252.70215359825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 585107.8784860314,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 585085.1925630833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.4900018009908,
            "unit": "ns/iter",
            "extra": "iterations: 2332020\ncpu: 298.48474712909774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2036.4955848119844,
            "unit": "ns/iter",
            "extra": "iterations: 343247\ncpu: 2036.4038141629883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1555.0577560806878,
            "unit": "ns/iter",
            "extra": "iterations: 449009\ncpu: 1554.9643771060187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1520.3203767249831,
            "unit": "ns/iter",
            "extra": "iterations: 461026\ncpu: 1520.1888830564837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1296.8773421877531,
            "unit": "ns/iter",
            "extra": "iterations: 537585\ncpu: 1296.811853009285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9669.48139467605,
            "unit": "ns/iter",
            "extra": "iterations: 72533\ncpu: 9668.808680186963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30197.20586278637,
            "unit": "ns/iter",
            "extra": "iterations: 24050\ncpu: 30195.808731808713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 6959.598225122838,
            "unit": "ns/iter",
            "extra": "iterations: 100514\ncpu: 6958.821656684686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 6853.220423975498,
            "unit": "ns/iter",
            "extra": "iterations: 101704\ncpu: 6852.99299929208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 6954.661453002318,
            "unit": "ns/iter",
            "extra": "iterations: 100633\ncpu: 6954.34102133488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 14749.168352158926,
            "unit": "ns/iter",
            "extra": "iterations: 49046\ncpu: 14747.891775068238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14114.862171629413,
            "unit": "ns/iter",
            "extra": "iterations: 51390\ncpu: 14114.035804631389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2941.444506125214,
            "unit": "ns/iter",
            "extra": "iterations: 237783\ncpu: 2941.17703956969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 14773.194509320621,
            "unit": "ns/iter",
            "extra": "iterations: 47098\ncpu: 14772.283324132708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 11775.209351234671,
            "unit": "ns/iter",
            "extra": "iterations: 59436\ncpu: 11774.256342956967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 11738.606749288616,
            "unit": "ns/iter",
            "extra": "iterations: 59710\ncpu: 11738.090772064983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12551.052884442037,
            "unit": "ns/iter",
            "extra": "iterations: 55574\ncpu: 12550.672976571917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30027.479292712636,
            "unit": "ns/iter",
            "extra": "iterations: 23470\ncpu: 30026.497656583288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 131719.4577677167,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 131718.98567119226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 113116.1531128378,
            "unit": "ns/iter",
            "extra": "iterations: 5140\ncpu: 113111.9260700383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 113320.48032258055,
            "unit": "ns/iter",
            "extra": "iterations: 6200\ncpu: 113305.29032258091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 114737.83069646232,
            "unit": "ns/iter",
            "extra": "iterations: 6131\ncpu: 114732.75159027992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 68686.37876106102,
            "unit": "ns/iter",
            "extra": "iterations: 10170\ncpu: 68684.13962635167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 113671.54004539385,
            "unit": "ns/iter",
            "extra": "iterations: 6168\ncpu: 113671.17380026019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2856.5713921142824,
            "unit": "ns/iter",
            "extra": "iterations: 242947\ncpu: 2856.4608741823977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14600.562957098455,
            "unit": "ns/iter",
            "extra": "iterations: 47993\ncpu: 14600.141687329287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11617.247765303415,
            "unit": "ns/iter",
            "extra": "iterations: 60299\ncpu: 11616.958821871001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11563.973721543898,
            "unit": "ns/iter",
            "extra": "iterations: 60620\ncpu: 11563.61431870688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12392.417653296088,
            "unit": "ns/iter",
            "extra": "iterations: 56590\ncpu: 12392.25834953161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30302.97777681132,
            "unit": "ns/iter",
            "extra": "iterations: 23039\ncpu: 30300.564260601528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 140930.10705928752,
            "unit": "ns/iter",
            "extra": "iterations: 5128\ncpu: 140929.6216848677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 116480.79879733223,
            "unit": "ns/iter",
            "extra": "iterations: 6153\ncpu: 116477.10060133204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 113835.3998693268,
            "unit": "ns/iter",
            "extra": "iterations: 6122\ncpu: 113830.02286834402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 116792.9805875265,
            "unit": "ns/iter",
            "extra": "iterations: 5821\ncpu: 116782.28826662096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 68035.71235426531,
            "unit": "ns/iter",
            "extra": "iterations: 10207\ncpu: 68030.46928578347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 112806.625221451,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 112803.41439845426 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}