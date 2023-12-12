window.BENCHMARK_DATA = {
  "lastUpdate": 1702416014647,
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
        "date": 1702412548868,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 774.0494401330004,
            "unit": "ns/iter",
            "extra": "iterations: 902000\ncpu: 773.9936807095344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11169.13603502292,
            "unit": "ns/iter",
            "extra": "iterations: 74694\ncpu: 11168.970733927757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24596.569713895806,
            "unit": "ns/iter",
            "extra": "iterations: 33659\ncpu: 24595.451439436696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40931.087235784966,
            "unit": "ns/iter",
            "extra": "iterations: 21952\ncpu: 40929.91526967931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48951.53591769522,
            "unit": "ns/iter",
            "extra": "iterations: 16329\ncpu: 48948.539408414465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60180.511779732406,
            "unit": "ns/iter",
            "extra": "iterations: 14092\ncpu: 60179.39256315637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60117.8802999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60115.33 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69895.18127809656,
            "unit": "ns/iter",
            "extra": "iterations: 12456\ncpu: 69891.9155427103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79792.19546663928,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 79787.55620813058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 627.0263370852874,
            "unit": "ns/iter",
            "extra": "iterations: 1117094\ncpu: 626.9746323944086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 540.4836786903749,
            "unit": "ns/iter",
            "extra": "iterations: 1297353\ncpu: 540.4683228080555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 539.3269560485122,
            "unit": "ns/iter",
            "extra": "iterations: 1293654\ncpu: 539.3193234048671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 542.854087227972,
            "unit": "ns/iter",
            "extra": "iterations: 1289517\ncpu: 542.8375120296976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1019.7202423378168,
            "unit": "ns/iter",
            "extra": "iterations: 684664\ncpu: 1019.6734456609369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3909.4132606766243,
            "unit": "ns/iter",
            "extra": "iterations: 203881\ncpu: 3909.2715848951075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17292.245216950734,
            "unit": "ns/iter",
            "extra": "iterations: 47407\ncpu: 17291.516020840823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14397.333023189987,
            "unit": "ns/iter",
            "extra": "iterations: 56963\ncpu: 14396.894475361205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14567.253649440087,
            "unit": "ns/iter",
            "extra": "iterations: 56310\ncpu: 14566.629373113139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14460.448718402846,
            "unit": "ns/iter",
            "extra": "iterations: 56570\ncpu: 14459.743680395964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 38339.66208206886,
            "unit": "ns/iter",
            "extra": "iterations: 22103\ncpu: 38338.07627923822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478184.1024945778,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 478126.73535791715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 387363.48903801834,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 387338.21029082785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 391118.1107142931,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 391098.03571428475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 392119.3885379119,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 392107.44584837585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 241849.20193637424,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 241835.601659751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 388746.3432165238,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 388723.45013477106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1952643.4050633481,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1952562.0253164575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 785588.4534883987,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 785544.1029900345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2461208.794117627,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2461108.823529413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3806.2798923692803,
            "unit": "ns/iter",
            "extra": "iterations: 209234\ncpu: 3806.081229628076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16901.175057489414,
            "unit": "ns/iter",
            "extra": "iterations: 48704\ncpu: 16900.652923784546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14252.815079075293,
            "unit": "ns/iter",
            "extra": "iterations: 57603\ncpu: 14252.160477752928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14163.781503374388,
            "unit": "ns/iter",
            "extra": "iterations: 57351\ncpu: 14163.142752523854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14282.597422077977,
            "unit": "ns/iter",
            "extra": "iterations: 57333\ncpu: 14281.867336437892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37360.895075330125,
            "unit": "ns/iter",
            "extra": "iterations: 22235\ncpu: 37360.719586237814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 487665.2723214216,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 487636.8303571458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 400959.26136884996,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 400949.4717501146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 414922.1881549022,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 414920.22779043234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 397562.5018050753,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 397538.04151624365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 236925.32304359597,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 236915.56999729323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 394178.080485615,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 394165.10791366786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1958123.8819743027,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1958060.7296137237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 794146.657045835,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 794102.0373514433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3982.904474472644,
            "unit": "ns/iter",
            "extra": "iterations: 200627\ncpu: 3982.804408180372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17510.383761583755,
            "unit": "ns/iter",
            "extra": "iterations: 47480\ncpu: 17510.320134793576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14290.526723870484,
            "unit": "ns/iter",
            "extra": "iterations: 58038\ncpu: 14290.25466073957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14263.634245378484,
            "unit": "ns/iter",
            "extra": "iterations: 58367\ncpu: 14263.04761252079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14274.729105533195,
            "unit": "ns/iter",
            "extra": "iterations: 57934\ncpu: 14274.19649946492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36905.829742328024,
            "unit": "ns/iter",
            "extra": "iterations: 22742\ncpu: 36905.65913288195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 479800.8298687163,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 479784.46389496716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 390887.91501798946,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 390874.55035971093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 389818.2676563185,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 389794.06207827374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 389709.32537178654,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 389689.27444794826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 239871.48813744757,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 239859.4218707373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 389094.59866961074,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 389082.92682926706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 313.79562656668844,
            "unit": "ns/iter",
            "extra": "iterations: 2212861\ncpu: 313.79444980954554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1687.2143353537617,
            "unit": "ns/iter",
            "extra": "iterations: 414416\ncpu: 1687.1269449056067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1367.1876032961063,
            "unit": "ns/iter",
            "extra": "iterations: 513088\ncpu: 1367.0555538231329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1417.325876039703,
            "unit": "ns/iter",
            "extra": "iterations: 494013\ncpu: 1417.2805169094786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1102.8539504996513,
            "unit": "ns/iter",
            "extra": "iterations: 627794\ncpu: 1102.8192368834323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6871.945873715084,
            "unit": "ns/iter",
            "extra": "iterations: 102150\ncpu: 6871.917767988286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19847.76282668967,
            "unit": "ns/iter",
            "extra": "iterations: 35278\ncpu: 19846.071205850818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4829.691219869054,
            "unit": "ns/iter",
            "extra": "iterations: 145032\ncpu: 4829.416956257888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4781.834873737236,
            "unit": "ns/iter",
            "extra": "iterations: 146282\ncpu: 4781.690160101686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4842.130066738128,
            "unit": "ns/iter",
            "extra": "iterations: 144595\ncpu: 4841.9613402952755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10133.355897317355,
            "unit": "ns/iter",
            "extra": "iterations: 68989\ncpu: 10132.899447738055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9051.755850203506,
            "unit": "ns/iter",
            "extra": "iterations: 77305\ncpu: 9051.367958088029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2309.802749914946,
            "unit": "ns/iter",
            "extra": "iterations: 302773\ncpu: 2309.6782077662288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11470.803907793857,
            "unit": "ns/iter",
            "extra": "iterations: 61211\ncpu: 11470.433418829794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9227.12815554416,
            "unit": "ns/iter",
            "extra": "iterations: 76017\ncpu: 9226.799268584698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9157.136442945686,
            "unit": "ns/iter",
            "extra": "iterations: 77373\ncpu: 9156.87384488125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9806.1071203438,
            "unit": "ns/iter",
            "extra": "iterations: 71387\ncpu: 9805.502402398235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23984.1377046944,
            "unit": "ns/iter",
            "extra": "iterations: 29251\ncpu: 23983.159550101107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97721.03733221353,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 97717.44966442802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83941.57040143525,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 83936.99221090424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83342.13544152664,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83338.90214797138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83450.08920691854,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83448.16935002914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53421.5884791951,
            "unit": "ns/iter",
            "extra": "iterations: 13506\ncpu: 53420.10958092684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82905.58002364033,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82902.91962174942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2204.808171368393,
            "unit": "ns/iter",
            "extra": "iterations: 314317\ncpu: 2204.6669445177954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11045.7173022369,
            "unit": "ns/iter",
            "extra": "iterations: 63460\ncpu: 11044.946422943567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8948.595284087738,
            "unit": "ns/iter",
            "extra": "iterations: 77652\ncpu: 8948.195796631087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8916.838649752246,
            "unit": "ns/iter",
            "extra": "iterations: 78593\ncpu: 8916.535823801083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9518.582062804217,
            "unit": "ns/iter",
            "extra": "iterations: 73657\ncpu: 9518.18971720269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23109.598345255723,
            "unit": "ns/iter",
            "extra": "iterations: 30337\ncpu: 23108.484688664314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95739.66505591432,
            "unit": "ns/iter",
            "extra": "iterations: 7243\ncpu: 95734.43324589255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81512.60802792344,
            "unit": "ns/iter",
            "extra": "iterations: 8595\ncpu: 81506.77137870948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81320.26197639327,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 81319.97222865038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82142.76744186031,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 82138.7714352836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52532.340001495686,
            "unit": "ns/iter",
            "extra": "iterations: 13347\ncpu: 52529.78946579723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82182.77596717363,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 82178.08909730338 ns\nthreads: 1"
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
        "date": 1702416013823,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 776.541554376121,
            "unit": "ns/iter",
            "extra": "iterations: 909471\ncpu: 776.5241552506898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11154.642412985366,
            "unit": "ns/iter",
            "extra": "iterations: 74298\ncpu: 11154.586933699427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24557.18070144174,
            "unit": "ns/iter",
            "extra": "iterations: 33702\ncpu: 24556.622752358908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38155.48444153206,
            "unit": "ns/iter",
            "extra": "iterations: 21371\ncpu: 38155.03252070564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48478.93559733013,
            "unit": "ns/iter",
            "extra": "iterations: 16490\ncpu: 48478.22922983623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60093.32889869293,
            "unit": "ns/iter",
            "extra": "iterations: 14056\ncpu: 60078.32242458734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60139.34940000354,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60135.540000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69535.29245660525,
            "unit": "ns/iter",
            "extra": "iterations: 12501\ncpu: 69532.96536277098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79865.90657121675,
            "unit": "ns/iter",
            "extra": "iterations: 10896\ncpu: 79862.47246696045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 624.8475038193972,
            "unit": "ns/iter",
            "extra": "iterations: 1120592\ncpu: 624.8022473835273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 533.0613504616783,
            "unit": "ns/iter",
            "extra": "iterations: 1317268\ncpu: 533.0452876711491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 532.4321308184001,
            "unit": "ns/iter",
            "extra": "iterations: 1316879\ncpu: 532.4102670025113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 533.6745361883725,
            "unit": "ns/iter",
            "extra": "iterations: 1315243\ncpu: 533.6407796886202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1011.1260687681647,
            "unit": "ns/iter",
            "extra": "iterations: 692035\ncpu: 1011.0859999855509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3996.8506281783752,
            "unit": "ns/iter",
            "extra": "iterations: 179726\ncpu: 3996.605944604566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17904.783021558247,
            "unit": "ns/iter",
            "extra": "iterations: 45599\ncpu: 17904.127283493046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14550.680770394829,
            "unit": "ns/iter",
            "extra": "iterations: 56179\ncpu: 14549.96706954555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14875.192429303872,
            "unit": "ns/iter",
            "extra": "iterations: 55979\ncpu: 14874.572607585009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14571.50664576107,
            "unit": "ns/iter",
            "extra": "iterations: 56126\ncpu: 14570.74795994728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37465.43303471963,
            "unit": "ns/iter",
            "extra": "iterations: 22437\ncpu: 37463.15906761153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470269.26370046724,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 470234.88876831374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 390233.0458015171,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 390219.6228109561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 390786.06681817456,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 390773.2727272727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 389863.95175834355,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 389843.82326420187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 241920.66731355237,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 241913.03021901834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 386158.5095853778,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386130.45028979034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1942382.1772151177,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1942268.9873417711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 768389.6141348528,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 768347.5223395622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2477185.7506702472,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2477018.7667560326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3931.57539510266,
            "unit": "ns/iter",
            "extra": "iterations: 200391\ncpu: 3931.4560035131253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17456.861606953513,
            "unit": "ns/iter",
            "extra": "iterations: 47170\ncpu: 17456.771252914983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14168.156293079604,
            "unit": "ns/iter",
            "extra": "iterations: 58032\ncpu: 14167.847049903488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14472.777769998094,
            "unit": "ns/iter",
            "extra": "iterations: 57130\ncpu: 14472.709609662224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14186.62496780738,
            "unit": "ns/iter",
            "extra": "iterations: 58243\ncpu: 14186.216369349182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37436.703621908244,
            "unit": "ns/iter",
            "extra": "iterations: 22640\ncpu: 37435.94522968211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 483668.68312983814,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 483662.5971143148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 401638.7244567597,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 401632.5936199724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 397746.5373066449,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 397739.2629663333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 396610.38813406124,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 396603.26086956606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 236420.3417721636,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 236419.8491785624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 392096.9883198488,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 392095.8670260544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2008689.180645213,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2008149.462365583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 772816.0395713145,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 772781.6158285266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3875.565718926113,
            "unit": "ns/iter",
            "extra": "iterations: 204416\ncpu: 3875.3077058547237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17183.61819048949,
            "unit": "ns/iter",
            "extra": "iterations: 48223\ncpu: 17182.91479169683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14457.535506158767,
            "unit": "ns/iter",
            "extra": "iterations: 57314\ncpu: 14456.841260425068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14331.77714443586,
            "unit": "ns/iter",
            "extra": "iterations: 57894\ncpu: 14331.286489100765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14433.75357104859,
            "unit": "ns/iter",
            "extra": "iterations: 56426\ncpu: 14432.529330450549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37696.953296947926,
            "unit": "ns/iter",
            "extra": "iterations: 22354\ncpu: 37695.1999642122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 480640.11238407844,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 480611.1292962379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 396078.8434275687,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 396076.7608793183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 395236.53387168545,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 395217.31718259427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 395616.9753584321,
            "unit": "ns/iter",
            "extra": "iterations: 2232\ncpu: 395591.5322580648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 240792.0528178621,
            "unit": "ns/iter",
            "extra": "iterations: 3673\ncpu: 240783.33787094886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 392263.13187304046,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 392237.3714796596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 322.8172975888665,
            "unit": "ns/iter",
            "extra": "iterations: 2135604\ncpu: 322.8106896222332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1666.4914084130016,
            "unit": "ns/iter",
            "extra": "iterations: 421517\ncpu: 1666.3100183385322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1324.670502713061,
            "unit": "ns/iter",
            "extra": "iterations: 528930\ncpu: 1324.6089274573192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1409.7732602777469,
            "unit": "ns/iter",
            "extra": "iterations: 496243\ncpu: 1409.6329822284615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1103.3822333354362,
            "unit": "ns/iter",
            "extra": "iterations: 634683\ncpu: 1103.3337902543458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6778.435293324341,
            "unit": "ns/iter",
            "extra": "iterations: 103776\ncpu: 6778.190525747729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19938.135906518757,
            "unit": "ns/iter",
            "extra": "iterations: 35002\ncpu: 19937.83212387851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4817.535068775606,
            "unit": "ns/iter",
            "extra": "iterations: 145400\ncpu: 4817.261348005467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4789.2799187527935,
            "unit": "ns/iter",
            "extra": "iterations: 146221\ncpu: 4789.076124496519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4826.4385192017435,
            "unit": "ns/iter",
            "extra": "iterations: 145273\ncpu: 4826.072291478814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9678.105532984744,
            "unit": "ns/iter",
            "extra": "iterations: 72366\ncpu: 9677.68012602597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9032.392169314879,
            "unit": "ns/iter",
            "extra": "iterations: 77158\ncpu: 9031.645454781026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2291.1447133414204,
            "unit": "ns/iter",
            "extra": "iterations: 303462\ncpu: 2291.048961649261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11447.292138682777,
            "unit": "ns/iter",
            "extra": "iterations: 61262\ncpu: 11447.014462472682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9196.705027375425,
            "unit": "ns/iter",
            "extra": "iterations: 76163\ncpu: 9196.55869647982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9104.127676488724,
            "unit": "ns/iter",
            "extra": "iterations: 76733\ncpu: 9104.096021268419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9792.327265874323,
            "unit": "ns/iter",
            "extra": "iterations: 71639\ncpu: 9792.156506930673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23963.974852020303,
            "unit": "ns/iter",
            "extra": "iterations: 29227\ncpu: 23963.54398330323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97446.45832751456,
            "unit": "ns/iter",
            "extra": "iterations: 7163\ncpu: 97444.35292475221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83646.153411817,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 83644.0653531957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83177.79807119818,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 83177.39016549606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83286.66520085731,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83284.41882576598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51769.13054518274,
            "unit": "ns/iter",
            "extra": "iterations: 13390\ncpu: 51768.371919342935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84259.39641049925,
            "unit": "ns/iter",
            "extra": "iterations: 8302\ncpu: 84256.81763430433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2220.9607937340043,
            "unit": "ns/iter",
            "extra": "iterations: 316378\ncpu: 2220.903160143865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11164.936362043163,
            "unit": "ns/iter",
            "extra": "iterations: 62777\ncpu: 11164.888414546915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8968.411541577561,
            "unit": "ns/iter",
            "extra": "iterations: 77771\ncpu: 8968.270949325555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8916.752221567609,
            "unit": "ns/iter",
            "extra": "iterations: 78098\ncpu: 8916.621424364235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9455.627409891333,
            "unit": "ns/iter",
            "extra": "iterations: 73966\ncpu: 9455.590406403016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23043.403376555045,
            "unit": "ns/iter",
            "extra": "iterations: 30386\ncpu: 23043.095504508605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95313.45633841104,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 95313.12568008697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80965.91256703011,
            "unit": "ns/iter",
            "extra": "iterations: 8578\ncpu: 80963.59291210161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81010.13709771285,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 81008.46985012194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81106.71359054575,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 81106.32603406376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52106.88026805708,
            "unit": "ns/iter",
            "extra": "iterations: 13430\ncpu: 52106.15040953078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82560.25347795009,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 82558.11129450565 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}