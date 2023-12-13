window.BENCHMARK_DATA = {
  "lastUpdate": 1702488601915,
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
        "date": 1702418369715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 774.8796953193446,
            "unit": "ns/iter",
            "extra": "iterations: 905210\ncpu: 774.8748909092919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11385.823244288365,
            "unit": "ns/iter",
            "extra": "iterations: 73446\ncpu: 11385.671105301855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25283.381781846787,
            "unit": "ns/iter",
            "extra": "iterations: 33527\ncpu: 25283.553553852114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38871.54999999941,
            "unit": "ns/iter",
            "extra": "iterations: 21920\ncpu: 38869.10583941606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48406.27176208195,
            "unit": "ns/iter",
            "extra": "iterations: 16577\ncpu: 48404.12016649575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60091.661921708226,
            "unit": "ns/iter",
            "extra": "iterations: 14050\ncpu: 60086.44128113877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60298.25800000026,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60294.670000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70046.07835463535,
            "unit": "ns/iter",
            "extra": "iterations: 12520\ncpu: 70041.46166134188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79622.87317118133,
            "unit": "ns/iter",
            "extra": "iterations: 10936\ncpu: 79618.9008778346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 641.1771412558077,
            "unit": "ns/iter",
            "extra": "iterations: 1109781\ncpu: 641.1445140978263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 528.7735855898687,
            "unit": "ns/iter",
            "extra": "iterations: 1323732\ncpu: 528.7509858490988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 524.9356895138935,
            "unit": "ns/iter",
            "extra": "iterations: 1336485\ncpu: 524.9294230762027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 530.8015533854215,
            "unit": "ns/iter",
            "extra": "iterations: 1321887\ncpu: 530.7782737858828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1027.116123545674,
            "unit": "ns/iter",
            "extra": "iterations: 682015\ncpu: 1027.073891336701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3778.9773819091893,
            "unit": "ns/iter",
            "extra": "iterations: 213988\ncpu: 3778.863768061763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17272.874552951525,
            "unit": "ns/iter",
            "extra": "iterations: 47534\ncpu: 17272.062102915806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14431.228941233345,
            "unit": "ns/iter",
            "extra": "iterations: 57482\ncpu: 14430.388643401417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14535.366896110872,
            "unit": "ns/iter",
            "extra": "iterations: 56223\ncpu: 14534.402290877379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14479.40658194726,
            "unit": "ns/iter",
            "extra": "iterations: 56579\ncpu: 14478.571554817157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37886.77571318647,
            "unit": "ns/iter",
            "extra": "iterations: 22119\ncpu: 37884.29404584287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 483422.0770064944,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 483400.48806941434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 388414.21403036936,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 388405.0491510276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 389280.457847543,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 389273.4080717485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 388611.750891246,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 388588.4581105174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 240809.62978254177,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 240806.8813652621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 385289.93794642977,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 385274.2410714284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1959156.5517970908,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1959064.693446095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 772442.4441707734,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 772399.75369458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2476863.024456546,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2476693.20652174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3814.1563971574888,
            "unit": "ns/iter",
            "extra": "iterations: 210234\ncpu: 3814.178011168506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17077.829600758185,
            "unit": "ns/iter",
            "extra": "iterations: 48492\ncpu: 17077.412769116527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14677.011326664111,
            "unit": "ns/iter",
            "extra": "iterations: 57475\ncpu: 14676.586341887758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14615.105553140816,
            "unit": "ns/iter",
            "extra": "iterations: 57535\ncpu: 14614.382549752267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14719.653791656257,
            "unit": "ns/iter",
            "extra": "iterations: 57165\ncpu: 14719.202309105245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 39221.70566122175,
            "unit": "ns/iter",
            "extra": "iterations: 22345\ncpu: 39220.28194226898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 487784.03659908974,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 487772.9166666634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 400709.3077629934,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 400693.2475884261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 397265.6131687201,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 397251.8975765903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 396045.9610507224,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 396045.28985507257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 238940.2400218615,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 238928.89557135134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 395033.9668633771,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 395026.2369496141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1977258.8358531343,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 1977103.887688989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 792874.9230769112,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 792838.7151310183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3988.501460904103,
            "unit": "ns/iter",
            "extra": "iterations: 200903\ncpu: 3988.123621847358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17525.88486542583,
            "unit": "ns/iter",
            "extra": "iterations: 47223\ncpu: 17525.233466742877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14282.558720527755,
            "unit": "ns/iter",
            "extra": "iterations: 57680\ncpu: 14281.574202496531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14163.96626973968,
            "unit": "ns/iter",
            "extra": "iterations: 58197\ncpu: 14163.709469560301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14229.564646168099,
            "unit": "ns/iter",
            "extra": "iterations: 57923\ncpu: 14228.91942751591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36855.71818939397,
            "unit": "ns/iter",
            "extra": "iterations: 22799\ncpu: 36855.16031404899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 485761.7204241065,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 485742.6897321398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 394542.9501811553,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 394529.39311594254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 393181.4596301374,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 393159.67523680546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 393132.6007243,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 393109.9139882298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 239785.27614602412,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 239780.5654680206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 389880.18558559095,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 389863.6936936948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 315.95315574200305,
            "unit": "ns/iter",
            "extra": "iterations: 2202810\ncpu: 315.95707301128965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1703.1484541752727,
            "unit": "ns/iter",
            "extra": "iterations: 410881\ncpu: 1703.0967603758802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1362.2292794940295,
            "unit": "ns/iter",
            "extra": "iterations: 513875\ncpu: 1362.1894429579224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1343.559992576997,
            "unit": "ns/iter",
            "extra": "iterations: 522698\ncpu: 1343.5308725114671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1107.6660589447881,
            "unit": "ns/iter",
            "extra": "iterations: 632965\ncpu: 1107.623960250561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6924.819713874698,
            "unit": "ns/iter",
            "extra": "iterations: 102892\ncpu: 6924.694825642471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20148.069659041736,
            "unit": "ns/iter",
            "extra": "iterations: 34755\ncpu: 20146.476765933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4763.459853864064,
            "unit": "ns/iter",
            "extra": "iterations: 145618\ncpu: 4763.200291172803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4799.080910067924,
            "unit": "ns/iter",
            "extra": "iterations: 146978\ncpu: 4799.026384901168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4730.179281531201,
            "unit": "ns/iter",
            "extra": "iterations: 146005\ncpu: 4729.67432622167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9639.940294807104,
            "unit": "ns/iter",
            "extra": "iterations: 72590\ncpu: 9639.426918308283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9013.680918335485,
            "unit": "ns/iter",
            "extra": "iterations: 77488\ncpu: 9013.400784637706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2292.111027096457,
            "unit": "ns/iter",
            "extra": "iterations: 305502\ncpu: 2292.1231284901714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11438.511220803459,
            "unit": "ns/iter",
            "extra": "iterations: 61181\ncpu: 11438.163809025638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9296.743559129041,
            "unit": "ns/iter",
            "extra": "iterations: 75378\ncpu: 9296.691342301488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9062.27216131895,
            "unit": "ns/iter",
            "extra": "iterations: 77263\ncpu: 9062.333846731344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9761.176342828338,
            "unit": "ns/iter",
            "extra": "iterations: 71826\ncpu: 9761.08233787205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24074.54857575305,
            "unit": "ns/iter",
            "extra": "iterations: 29068\ncpu: 24074.75918535868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98646.69392917163,
            "unit": "ns/iter",
            "extra": "iterations: 7116\ncpu: 98641.86340640676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84061.65250872394,
            "unit": "ns/iter",
            "extra": "iterations: 8311\ncpu: 84060.97942485906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83914.97681682008,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 83913.70570570536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84926.89989236215,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 84923.43021169785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52431.72655899541,
            "unit": "ns/iter",
            "extra": "iterations: 13374\ncpu: 52432.12950500967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83933.77943992929,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 83930.4571565335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2233.0809927294918,
            "unit": "ns/iter",
            "extra": "iterations: 312633\ncpu: 2233.0572908170416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11050.496087018935,
            "unit": "ns/iter",
            "extra": "iterations: 63251\ncpu: 11050.383393147922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8851.182228744052,
            "unit": "ns/iter",
            "extra": "iterations: 79049\ncpu: 8850.932965628997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8793.284532432866,
            "unit": "ns/iter",
            "extra": "iterations: 79657\ncpu: 8793.357771445037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9405.052987780491,
            "unit": "ns/iter",
            "extra": "iterations: 74470\ncpu: 9404.522626561025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22992.067281196636,
            "unit": "ns/iter",
            "extra": "iterations: 30484\ncpu: 22992.231990552118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96095.17442658986,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 96088.3532481795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81226.45978630817,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 81225.76024421725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81570.41627798734,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 81571.02378731377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81872.04266510748,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 81869.19929865697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52487.47914317929,
            "unit": "ns/iter",
            "extra": "iterations: 13305\ncpu: 52487.20781660978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83111.06057006936,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 83109.8693586698 ns\nthreads: 1"
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
        "date": 1702421405892,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 761.9626372882955,
            "unit": "ns/iter",
            "extra": "iterations: 916047\ncpu: 761.923132765022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11045.030517023873,
            "unit": "ns/iter",
            "extra": "iterations: 75335\ncpu: 11044.552996615115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24641.15679095426,
            "unit": "ns/iter",
            "extra": "iterations: 34141\ncpu: 24639.843589818698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38235.84431665319,
            "unit": "ns/iter",
            "extra": "iterations: 21563\ncpu: 38234.19746788479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48340.18958973621,
            "unit": "ns/iter",
            "extra": "iterations: 16599\ncpu: 48338.960178323956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50017.13009999662,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50014.85000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60189.697999999225,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60186.190000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69897.28916240281,
            "unit": "ns/iter",
            "extra": "iterations: 12512\ncpu: 69892.34335038366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80264.0706292384,
            "unit": "ns/iter",
            "extra": "iterations: 10902\ncpu: 80261.78682810496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 623.9937444146692,
            "unit": "ns/iter",
            "extra": "iterations: 1123476\ncpu: 623.9792394319065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 536.4157475833009,
            "unit": "ns/iter",
            "extra": "iterations: 1296491\ncpu: 536.3839779836503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 533.5784861122743,
            "unit": "ns/iter",
            "extra": "iterations: 1312092\ncpu: 533.5481048585007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 534.82464078532,
            "unit": "ns/iter",
            "extra": "iterations: 1306809\ncpu: 534.5578428064089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1024.9253350267245,
            "unit": "ns/iter",
            "extra": "iterations: 685020\ncpu: 1024.9000029196243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3920.687201631175,
            "unit": "ns/iter",
            "extra": "iterations: 204026\ncpu: 3920.592963641894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17223.027230203486,
            "unit": "ns/iter",
            "extra": "iterations: 47888\ncpu: 17222.68000334112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14380.792983807849,
            "unit": "ns/iter",
            "extra": "iterations: 57068\ncpu: 14380.279666362945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14096.275779706224,
            "unit": "ns/iter",
            "extra": "iterations: 58195\ncpu: 14095.949823868046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14204.301309513536,
            "unit": "ns/iter",
            "extra": "iterations: 57655\ncpu: 14203.812331974692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37878.14013402015,
            "unit": "ns/iter",
            "extra": "iterations: 22086\ncpu: 37875.39617857464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466199.67729728506,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 466173.6216216216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 388806.81830357434,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 388780.9821428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 389141.6083633055,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 389116.5467625907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 387426.3531531699,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 387410.2702702702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 240422.64988938,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 240417.03539822972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 387371.3974932949,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 387349.3285586387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1944296.2142857178,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1944118.0672268877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 778819.7734761172,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 778780.477759472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2454358.462765918,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2454151.3297872343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3855.0902923262242,
            "unit": "ns/iter",
            "extra": "iterations: 206208\ncpu: 3854.864990689025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17094.785457400525,
            "unit": "ns/iter",
            "extra": "iterations: 48382\ncpu: 17093.458310942096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14365.804573441454,
            "unit": "ns/iter",
            "extra": "iterations: 57331\ncpu: 14365.100905269435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14339.542482070872,
            "unit": "ns/iter",
            "extra": "iterations: 57589\ncpu: 14338.785184670654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14390.251013348725,
            "unit": "ns/iter",
            "extra": "iterations: 57236\ncpu: 14389.705779579284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37688.5279491926,
            "unit": "ns/iter",
            "extra": "iterations: 22201\ncpu: 37681.9107247419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 485264.6666666446,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 485250.6979341116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 403137.5889400884,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 403111.8894009198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 398805.90917389526,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 398776.63167503476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 399213.65908056125,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 399194.17387346394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 237829.96987951742,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 237814.73165388952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 394298.05630629126,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 394271.621621623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1957377.0599572186,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1957285.0107066366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 773161.0684253806,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 773115.9109645524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3997.997958086044,
            "unit": "ns/iter",
            "extra": "iterations: 200792\ncpu: 3997.7917446910124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17464.1065511633,
            "unit": "ns/iter",
            "extra": "iterations: 46175\ncpu: 17463.172712506766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14277.49684862749,
            "unit": "ns/iter",
            "extra": "iterations: 56166\ncpu: 14276.443043834272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14180.897844989706,
            "unit": "ns/iter",
            "extra": "iterations: 52900\ncpu: 14180.429111531188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14228.08531172311,
            "unit": "ns/iter",
            "extra": "iterations: 54295\ncpu: 14227.626853301414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36401.08488964346,
            "unit": "ns/iter",
            "extra": "iterations: 22971\ncpu: 36400.248138957715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 479808.13292884413,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 479786.210700496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 394437.5267415483,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 394411.1910112373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 393209.6176338403,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 393185.20017993613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 393988.99053629756,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 393976.8364127991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 242138.08602151248,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 242126.02701957602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 389179.304114493,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 389159.1234347031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 324.64909954987905,
            "unit": "ns/iter",
            "extra": "iterations: 2148370\ncpu: 324.6252274980569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1696.7156843039713,
            "unit": "ns/iter",
            "extra": "iterations: 412967\ncpu: 1696.6273334188975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1292.016129359585,
            "unit": "ns/iter",
            "extra": "iterations: 542055\ncpu: 1291.9281253747365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1381.9521787069082,
            "unit": "ns/iter",
            "extra": "iterations: 520584\ncpu: 1381.9076268191027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1114.3063759223376,
            "unit": "ns/iter",
            "extra": "iterations: 627768\ncpu: 1114.2777268035331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6717.997268705274,
            "unit": "ns/iter",
            "extra": "iterations: 103980\ncpu: 6717.433160223144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20039.509337565716,
            "unit": "ns/iter",
            "extra": "iterations: 34645\ncpu: 20038.640496464126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4705.572848053407,
            "unit": "ns/iter",
            "extra": "iterations: 142708\ncpu: 4705.33887378418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4749.756625441678,
            "unit": "ns/iter",
            "extra": "iterations: 147160\ncpu: 4749.740418592073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4771.710331588234,
            "unit": "ns/iter",
            "extra": "iterations: 146899\ncpu: 4771.636294324698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10023.137237562898,
            "unit": "ns/iter",
            "extra": "iterations: 70112\ncpu: 10022.645196257485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8989.976771151045,
            "unit": "ns/iter",
            "extra": "iterations: 77619\ncpu: 8989.86072997589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2296.9996046689325,
            "unit": "ns/iter",
            "extra": "iterations: 303543\ncpu: 2296.8953327864356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11675.364884499479,
            "unit": "ns/iter",
            "extra": "iterations: 61255\ncpu: 11664.933474818328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9126.668460850251,
            "unit": "ns/iter",
            "extra": "iterations: 77101\ncpu: 9126.26684478792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9076.041883663596,
            "unit": "ns/iter",
            "extra": "iterations: 77190\ncpu: 9076.018914367132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9701.702595999419,
            "unit": "ns/iter",
            "extra": "iterations: 72188\ncpu: 9701.35479581084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23666.68739870352,
            "unit": "ns/iter",
            "extra": "iterations: 29616\ncpu: 23666.62277147517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 96855.70387338605,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 96849.84034430163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83528.94532184454,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83525.14955731103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83698.27783097801,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 83692.55446492645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83952.80288920217,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 83948.30468003884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51882.053262314206,
            "unit": "ns/iter",
            "extra": "iterations: 13518\ncpu: 51879.671549045685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83373.28333134724,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 83364.25592755855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2239.200650262998,
            "unit": "ns/iter",
            "extra": "iterations: 312489\ncpu: 2239.1956196858237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11173.060220606762,
            "unit": "ns/iter",
            "extra": "iterations: 62736\ncpu: 11172.620186176944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8848.299027267001,
            "unit": "ns/iter",
            "extra": "iterations: 79364\ncpu: 8848.272516506231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8853.084559931272,
            "unit": "ns/iter",
            "extra": "iterations: 79624\ncpu: 8852.957650959625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9325.28350199739,
            "unit": "ns/iter",
            "extra": "iterations: 75100\ncpu: 9324.83621837549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22730.85894764206,
            "unit": "ns/iter",
            "extra": "iterations: 30712\ncpu: 22730.375748893122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95617.16811870153,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 95613.59923768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81669.53102805914,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 81669.34451042059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81055.9964165977,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 81055.8201364003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81488.79813845444,
            "unit": "ns/iter",
            "extra": "iterations: 8595\ncpu: 81486.22454915704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 51708.25806947361,
            "unit": "ns/iter",
            "extra": "iterations: 13012\ncpu: 51708.19243775072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82018.93511226271,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 82014.90537204736 ns\nthreads: 1"
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
        "date": 1702421919676,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 768.97356227165,
            "unit": "ns/iter",
            "extra": "iterations: 908134\ncpu: 768.8865299614375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11088.732261722174,
            "unit": "ns/iter",
            "extra": "iterations: 74965\ncpu: 11087.83432268392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24633.314154336473,
            "unit": "ns/iter",
            "extra": "iterations: 33926\ncpu: 24632.0963273006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38868.57399829129,
            "unit": "ns/iter",
            "extra": "iterations: 22237\ncpu: 38866.54224940415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51087.13929417616,
            "unit": "ns/iter",
            "extra": "iterations: 16038\ncpu: 51084.83601446563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50262.61209999916,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50257.989999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60476.92010000105,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60472.94000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69980.97098178075,
            "unit": "ns/iter",
            "extra": "iterations: 12406\ncpu: 69977.2529421248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80470.93737966771,
            "unit": "ns/iter",
            "extra": "iterations: 10907\ncpu: 80467.70881085547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 631.554527384267,
            "unit": "ns/iter",
            "extra": "iterations: 1109305\ncpu: 631.5278485177655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 540.9361048008774,
            "unit": "ns/iter",
            "extra": "iterations: 1298157\ncpu: 540.8877354588084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 539.4508354606972,
            "unit": "ns/iter",
            "extra": "iterations: 1295812\ncpu: 539.4005457581809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 541.2036422343888,
            "unit": "ns/iter",
            "extra": "iterations: 1293931\ncpu: 541.1676511344119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1036.7201792950498,
            "unit": "ns/iter",
            "extra": "iterations: 674196\ncpu: 1036.7003067357266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3923.290739993797,
            "unit": "ns/iter",
            "extra": "iterations: 203326\ncpu: 3923.0216499611424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17263.756569089554,
            "unit": "ns/iter",
            "extra": "iterations: 47381\ncpu: 17262.753002258298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14450.013907027329,
            "unit": "ns/iter",
            "extra": "iterations: 56662\ncpu: 14449.632910945624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14558.148509918983,
            "unit": "ns/iter",
            "extra": "iterations: 56205\ncpu: 14557.85962103015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14432.47711372801,
            "unit": "ns/iter",
            "extra": "iterations: 56890\ncpu: 14432.035507119006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37920.68444282766,
            "unit": "ns/iter",
            "extra": "iterations: 21977\ncpu: 37917.65482094917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 482853.50461206323,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 482799.4574064013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 388641.1565022447,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 388617.48878923676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 388571.8418230649,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 388551.8766756045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 394084.84636117006,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 394070.53009883175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 242307.90038630852,
            "unit": "ns/iter",
            "extra": "iterations: 3624\ncpu: 242296.02649006603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 388613.48300536786,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 388583.4973166372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1947584.0720339357,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1947387.7118644028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 794919.1480235761,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 794853.1539108481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2452789.5320856026,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2452598.1283422476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3812.9398419358154,
            "unit": "ns/iter",
            "extra": "iterations: 209282\ncpu: 3812.6202922372627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17100.815220348974,
            "unit": "ns/iter",
            "extra": "iterations: 47765\ncpu: 17099.796922432703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14398.816862097216,
            "unit": "ns/iter",
            "extra": "iterations: 56968\ncpu: 14398.056803819733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14372.857110236064,
            "unit": "ns/iter",
            "extra": "iterations: 56932\ncpu: 14372.085997330223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14444.381081557101,
            "unit": "ns/iter",
            "extra": "iterations: 56770\ncpu: 14443.604016205723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37409.0955256145,
            "unit": "ns/iter",
            "extra": "iterations: 22193\ncpu: 37406.67327535686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 489003.2988764036,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 488995.28089887474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 401266.88960441493,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 401244.34222631075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 399832.5508241576,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 399825.8699633699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 395561.2144469623,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 395558.32957110484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 238652.04614965146,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 238636.70125614508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 394603.20316026313,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 394594.9435665916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1961500.137931095,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1961376.9396551768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 788728.8221845673,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 788704.5723962765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4004.4242562084105,
            "unit": "ns/iter",
            "extra": "iterations: 200056\ncpu: 4004.262806414225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17456.15803313675,
            "unit": "ns/iter",
            "extra": "iterations: 46775\ncpu: 17456.03848209512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14293.746851560682,
            "unit": "ns/iter",
            "extra": "iterations: 57330\ncpu: 14293.38915053201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14194.150027664726,
            "unit": "ns/iter",
            "extra": "iterations: 57836\ncpu: 14193.896535030108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14248.313565062808,
            "unit": "ns/iter",
            "extra": "iterations: 57567\ncpu: 14247.789532197276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 36370.46180295281,
            "unit": "ns/iter",
            "extra": "iterations: 22685\ncpu: 36369.49085298665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 486428.90823658457,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 486408.5129906036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 395060.9119638882,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 395048.6681715574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 393274.3291423268,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 393263.67310283135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 395873.39918808185,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 395858.90843482414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 242963.62204943624,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 242962.03832268793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 389201.0707845066,
            "unit": "ns/iter",
            "extra": "iterations: 2218\ncpu: 389181.1992786303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 321.07664668688545,
            "unit": "ns/iter",
            "extra": "iterations: 2186709\ncpu: 321.06933295651095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1718.373941892884,
            "unit": "ns/iter",
            "extra": "iterations: 407213\ncpu: 1718.314985032407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1420.0305997999112,
            "unit": "ns/iter",
            "extra": "iterations: 493598\ncpu: 1420.0215560030656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1448.926751414209,
            "unit": "ns/iter",
            "extra": "iterations: 482453\ncpu: 1448.7941830603156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1156.9497459517122,
            "unit": "ns/iter",
            "extra": "iterations: 608349\ncpu: 1156.903685220163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6778.465891397971,
            "unit": "ns/iter",
            "extra": "iterations: 102760\ncpu: 6778.082911638772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19064.137650613273,
            "unit": "ns/iter",
            "extra": "iterations: 36767\ncpu: 19062.458182609265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4786.127516594859,
            "unit": "ns/iter",
            "extra": "iterations: 145981\ncpu: 4785.972147060243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4767.077747166273,
            "unit": "ns/iter",
            "extra": "iterations: 146642\ncpu: 4766.64529943672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4820.930016311762,
            "unit": "ns/iter",
            "extra": "iterations: 145291\ncpu: 4820.5380925177105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10116.902107646669,
            "unit": "ns/iter",
            "extra": "iterations: 68892\ncpu: 10116.415548975297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9046.832110258014,
            "unit": "ns/iter",
            "extra": "iterations: 77128\ncpu: 9046.555077274039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2309.8402348933937,
            "unit": "ns/iter",
            "extra": "iterations: 303627\ncpu: 2309.7112575627375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11653.34392435895,
            "unit": "ns/iter",
            "extra": "iterations: 59862\ncpu: 11652.671143630418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9456.671022580904,
            "unit": "ns/iter",
            "extra": "iterations: 73999\ncpu: 9456.04670333378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9388.332184478137,
            "unit": "ns/iter",
            "extra": "iterations: 74567\ncpu: 9387.770729679429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9961.97669428209,
            "unit": "ns/iter",
            "extra": "iterations: 70369\ncpu: 9961.335247054652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23897.6487961237,
            "unit": "ns/iter",
            "extra": "iterations: 29322\ncpu: 23895.48461905772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97453.39515338554,
            "unit": "ns/iter",
            "extra": "iterations: 7139\ncpu: 97451.43577532051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83937.34143114481,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 83931.54539988098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84186.75742991873,
            "unit": "ns/iter",
            "extra": "iterations: 8311\ncpu: 84181.77114667189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84664.96263152536,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 84656.66948845012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52563.510798471085,
            "unit": "ns/iter",
            "extra": "iterations: 13150\ncpu: 52560.82889733895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84149.78270803166,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 84147.36652236678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2248.7861041529145,
            "unit": "ns/iter",
            "extra": "iterations: 310179\ncpu: 2248.745401848635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11177.577318767779,
            "unit": "ns/iter",
            "extra": "iterations: 62792\ncpu: 11176.907886354991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8826.312024486891,
            "unit": "ns/iter",
            "extra": "iterations: 79388\ncpu: 8825.642414470754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8861.019279948758,
            "unit": "ns/iter",
            "extra": "iterations: 79772\ncpu: 8860.35827107266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9410.279299367256,
            "unit": "ns/iter",
            "extra": "iterations: 74447\ncpu: 9410.004432683594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23060.019525431322,
            "unit": "ns/iter",
            "extra": "iterations: 30217\ncpu: 23059.57573551288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96789.96725614836,
            "unit": "ns/iter",
            "extra": "iterations: 7238\ncpu: 96787.06825089845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82850.46717826526,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 82844.80519480516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82085.84665329351,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82081.11202927669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82404.10023725197,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 82397.5207591937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53270.638897346544,
            "unit": "ns/iter",
            "extra": "iterations: 13132\ncpu: 53268.801401157296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83255.16236250586,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83250.14347202297 ns\nthreads: 1"
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
        "date": 1702460357376,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 781.918198757078,
            "unit": "ns/iter",
            "extra": "iterations: 900023\ncpu: 781.8917960985442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11090.331154333579,
            "unit": "ns/iter",
            "extra": "iterations: 74805\ncpu: 11089.923133480384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24604.462664328814,
            "unit": "ns/iter",
            "extra": "iterations: 34230\ncpu: 24603.984808647383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40066.97810051167,
            "unit": "ns/iter",
            "extra": "iterations: 21690\ncpu: 40066.93407100045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48160.77087601163,
            "unit": "ns/iter",
            "extra": "iterations: 16598\ncpu: 48160.28437161104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60605.79256457363,
            "unit": "ns/iter",
            "extra": "iterations: 14014\ncpu: 60603.59640359638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60917.87659999,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60917.870000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69671.19355620234,
            "unit": "ns/iter",
            "extra": "iterations: 12384\ncpu: 69669.67054263565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80199.51596037764,
            "unit": "ns/iter",
            "extra": "iterations: 10902\ncpu: 80198.77086773062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 630.3130723766969,
            "unit": "ns/iter",
            "extra": "iterations: 1112139\ncpu: 630.2899187961216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 532.8246818449211,
            "unit": "ns/iter",
            "extra": "iterations: 1307617\ncpu: 532.7985182205483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 531.9293174786498,
            "unit": "ns/iter",
            "extra": "iterations: 1315021\ncpu: 531.8850421400122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 534.2947672378756,
            "unit": "ns/iter",
            "extra": "iterations: 1310780\ncpu: 534.2699003646684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1032.7517394104823,
            "unit": "ns/iter",
            "extra": "iterations: 675085\ncpu: 1032.7226941792508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3887.154826905415,
            "unit": "ns/iter",
            "extra": "iterations: 206592\ncpu: 3887.098725991331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17699.16284010124,
            "unit": "ns/iter",
            "extra": "iterations: 46604\ncpu: 17699.161016221784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14611.873333096884,
            "unit": "ns/iter",
            "extra": "iterations: 56392\ncpu: 14611.6825081572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14799.025326376488,
            "unit": "ns/iter",
            "extra": "iterations: 56147\ncpu: 14798.851229807433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14921.217418783563,
            "unit": "ns/iter",
            "extra": "iterations: 55377\ncpu: 14921.2037488488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37772.29924039472,
            "unit": "ns/iter",
            "extra": "iterations: 22380\ncpu: 37771.313672922224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466573.25808188616,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 466539.70905172493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 389676.56158291077,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 389653.2681191633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 387283.4651575801,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 387258.7660896581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 390231.9078651692,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 390211.46067415713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 242078.98147109937,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 242060.61201572136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 387763.2350829838,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 387741.58815612394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1953190.1932061042,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1952982.1656050894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 796792.3090452636,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 796745.2261306513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2463131.884718648,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2462947.453083106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3939.688222836453,
            "unit": "ns/iter",
            "extra": "iterations: 198783\ncpu: 3939.430937253197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17729.878915868736,
            "unit": "ns/iter",
            "extra": "iterations: 47116\ncpu: 17729.707530350628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14552.57407570574,
            "unit": "ns/iter",
            "extra": "iterations: 56719\ncpu: 14551.83448227232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14572.883345627144,
            "unit": "ns/iter",
            "extra": "iterations: 55583\ncpu: 14572.252307360184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14201.118783814514,
            "unit": "ns/iter",
            "extra": "iterations: 57853\ncpu: 14200.732891984797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36734.9172413813,
            "unit": "ns/iter",
            "extra": "iterations: 22620\ncpu: 36733.912466843714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 486882.1991026117,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 486847.4481211477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 404672.40327103843,
            "unit": "ns/iter",
            "extra": "iterations: 2140\ncpu: 404645.0934579443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 401094.58513080154,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 401058.83432767226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 398639.4910673435,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 398601.19102153135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 238554.04153006602,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 238539.2896174866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 394693.44807258656,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 394666.89342403685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1988330.5692641428,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1988180.952380958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 807782.1939914156,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 807740.7725321886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3898.9802072631196,
            "unit": "ns/iter",
            "extra": "iterations: 202448\ncpu: 3898.8461234489837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17216.67242731972,
            "unit": "ns/iter",
            "extra": "iterations: 47159\ncpu: 17216.444369049408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14392.19358190547,
            "unit": "ns/iter",
            "extra": "iterations: 57743\ncpu: 14391.526245605493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14274.42960356924,
            "unit": "ns/iter",
            "extra": "iterations: 58270\ncpu: 14274.252617127233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14438.387984550316,
            "unit": "ns/iter",
            "extra": "iterations: 57992\ncpu: 14437.625879431678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 38337.9326553041,
            "unit": "ns/iter",
            "extra": "iterations: 21828\ncpu: 38336.55396738117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 497770.8079095952,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 497736.8361581901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 395602.6976529852,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 395584.12333179975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 394897.9514824847,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 394867.6100628933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 394101.6147947325,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 394075.1465944961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244690.67493727268,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 244671.145804294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 416027.1374386594,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 415814.90406068764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 314.3465237010387,
            "unit": "ns/iter",
            "extra": "iterations: 2226549\ncpu: 314.3418357287438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1626.3931172733103,
            "unit": "ns/iter",
            "extra": "iterations: 430004\ncpu: 1626.3737081515483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1367.731611962985,
            "unit": "ns/iter",
            "extra": "iterations: 507735\ncpu: 1367.6081026519664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1301.1533504748118,
            "unit": "ns/iter",
            "extra": "iterations: 537103\ncpu: 1301.0523121263561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1112.5727249830911,
            "unit": "ns/iter",
            "extra": "iterations: 627336\ncpu: 1112.4791180483783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6789.685443233474,
            "unit": "ns/iter",
            "extra": "iterations: 103196\ncpu: 6789.562579944946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19925.012940474156,
            "unit": "ns/iter",
            "extra": "iterations: 35161\ncpu: 19924.256989277925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4811.939042579006,
            "unit": "ns/iter",
            "extra": "iterations: 145495\ncpu: 4811.486992680219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4769.470611515452,
            "unit": "ns/iter",
            "extra": "iterations: 146554\ncpu: 4769.1315146635525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4806.78394564633,
            "unit": "ns/iter",
            "extra": "iterations: 145269\ncpu: 4806.487275330655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10249.523186961902,
            "unit": "ns/iter",
            "extra": "iterations: 68228\ncpu: 10248.683824822683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9095.914142004443,
            "unit": "ns/iter",
            "extra": "iterations: 77139\ncpu: 9095.31106184931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2292.282650631024,
            "unit": "ns/iter",
            "extra": "iterations: 304818\ncpu: 2292.13596309928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11444.931657963827,
            "unit": "ns/iter",
            "extra": "iterations: 61280\ncpu: 11444.215078328974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9358.744400579495,
            "unit": "ns/iter",
            "extra": "iterations: 75231\ncpu: 9358.482540442108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9121.05178618011,
            "unit": "ns/iter",
            "extra": "iterations: 76700\ncpu: 9120.205997392495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9686.18851592093,
            "unit": "ns/iter",
            "extra": "iterations: 71856\ncpu: 9685.572533956763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23868.43214882014,
            "unit": "ns/iter",
            "extra": "iterations: 29351\ncpu: 23866.505400156788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 96840.66731734348,
            "unit": "ns/iter",
            "extra": "iterations: 7172\ncpu: 96832.55716675954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83650.6875900052,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 83649.43590974495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83714.54671611685,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83709.16377557206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83822.61925890711,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 83818.59935243895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52689.79941423992,
            "unit": "ns/iter",
            "extra": "iterations: 13316\ncpu: 52685.90417542813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83306.01843045077,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83300.16646849006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2248.730055030563,
            "unit": "ns/iter",
            "extra": "iterations: 317461\ncpu: 2248.5999855100595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11089.119292962188,
            "unit": "ns/iter",
            "extra": "iterations: 63080\ncpu: 11088.684210526275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8861.56648527915,
            "unit": "ns/iter",
            "extra": "iterations: 78837\ncpu: 8861.559927445305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8789.596820808445,
            "unit": "ns/iter",
            "extra": "iterations: 77504\ncpu: 8788.765741122963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9306.179355441247,
            "unit": "ns/iter",
            "extra": "iterations: 74935\ncpu: 9305.598185093791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23046.608916609202,
            "unit": "ns/iter",
            "extra": "iterations: 30303\ncpu: 23045.563145562955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95296.98759542331,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95292.69356597625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80755.6332411249,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 80752.6048870439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80811.88225118382,
            "unit": "ns/iter",
            "extra": "iterations: 8671\ncpu: 80810.62161227186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80852.04856614233,
            "unit": "ns/iter",
            "extra": "iterations: 8648\ncpu: 80849.98843663305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52106.52767004322,
            "unit": "ns/iter",
            "extra": "iterations: 13408\ncpu: 52105.67571598991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81129.91165458142,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 81127.25251579545 ns\nthreads: 1"
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
        "date": 1702479534101,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 771.707686027912,
            "unit": "ns/iter",
            "extra": "iterations: 906450\ncpu: 771.6898891279168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11051.962178944665,
            "unit": "ns/iter",
            "extra": "iterations: 74403\ncpu: 11051.844683682108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24443.9824938764,
            "unit": "ns/iter",
            "extra": "iterations: 33474\ncpu: 24443.24251658003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39214.15087187194,
            "unit": "ns/iter",
            "extra": "iterations: 22423\ncpu: 39213.508451143905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48485.04399831736,
            "unit": "ns/iter",
            "extra": "iterations: 16637\ncpu: 48483.6629199976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50102.06009999933,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50099.689999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60372.7574000004,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60369.459999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69796.66752102572,
            "unit": "ns/iter",
            "extra": "iterations: 12485\ncpu: 69793.82458950744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81791.11287219514,
            "unit": "ns/iter",
            "extra": "iterations: 10915\ncpu: 81745.45121392586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 625.7352487696538,
            "unit": "ns/iter",
            "extra": "iterations: 1114907\ncpu: 625.7133554637293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 533.8235918382911,
            "unit": "ns/iter",
            "extra": "iterations: 1309775\ncpu: 533.814357427803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 536.2119837313622,
            "unit": "ns/iter",
            "extra": "iterations: 1305086\ncpu: 536.1639003100181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 538.1584596216536,
            "unit": "ns/iter",
            "extra": "iterations: 1301057\ncpu: 538.1185451521342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1008.7075137924604,
            "unit": "ns/iter",
            "extra": "iterations: 695308\ncpu: 1008.6403435599768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3902.0238236811774,
            "unit": "ns/iter",
            "extra": "iterations: 205174\ncpu: 3901.749734371803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17793.12291666625,
            "unit": "ns/iter",
            "extra": "iterations: 46080\ncpu: 17791.63845486111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14498.082323465289,
            "unit": "ns/iter",
            "extra": "iterations: 56278\ncpu: 14496.956181811733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14191.88762288547,
            "unit": "ns/iter",
            "extra": "iterations: 57574\ncpu: 14190.863931635817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14377.608515349135,
            "unit": "ns/iter",
            "extra": "iterations: 56909\ncpu: 14376.55731079442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 37310.333910418325,
            "unit": "ns/iter",
            "extra": "iterations: 22527\ncpu: 37307.053757713016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470423.8001083649,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 470393.391115927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 391479.1653898233,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 391451.1942316367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 391564.7017783908,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 391549.3388052903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 392168.87217705615,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 392138.6630532972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 242618.62958811308,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 242597.5063042873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 392314.55189531617,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 392290.6137184121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1948456.9300847526,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1948381.5677966063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 781755.9725228801,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 781726.894254787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2466356.9625668693,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2466184.4919786123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3914.273693284163,
            "unit": "ns/iter",
            "extra": "iterations: 201861\ncpu: 3914.149340387694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17792.44158808097,
            "unit": "ns/iter",
            "extra": "iterations: 46446\ncpu: 17792.003617103706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14312.91399627491,
            "unit": "ns/iter",
            "extra": "iterations: 57451\ncpu: 14312.058971993532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14736.514427419686,
            "unit": "ns/iter",
            "extra": "iterations: 56455\ncpu: 14735.605349393365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14165.500396975229,
            "unit": "ns/iter",
            "extra": "iterations: 57938\ncpu: 14164.215195553867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36659.52827774988,
            "unit": "ns/iter",
            "extra": "iterations: 22668\ncpu: 36658.1480501147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 487914.6262569787,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 487872.3463687154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 404856.36334255466,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 404837.6269621428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 398746.3278613708,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 398715.68627451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 396258.6471408599,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 396232.4500232429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 237789.9686147089,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 237786.5800865803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 393711.41553132364,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 393676.7484105359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1960357.530042983,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1960201.931330478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 783585.6500843025,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 783522.3440134895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3890.9102413226856,
            "unit": "ns/iter",
            "extra": "iterations: 206487\ncpu: 3890.654617481954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16964.39594781619,
            "unit": "ns/iter",
            "extra": "iterations: 47678\ncpu: 16962.959855698635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14364.604219260646,
            "unit": "ns/iter",
            "extra": "iterations: 56645\ncpu: 14363.75143437199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14186.347406577474,
            "unit": "ns/iter",
            "extra": "iterations: 57106\ncpu: 14185.14867089263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14237.346148435052,
            "unit": "ns/iter",
            "extra": "iterations: 56860\ncpu: 14236.28209637705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37547.87993473287,
            "unit": "ns/iter",
            "extra": "iterations: 22063\ncpu: 37544.789919775256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 475605.76382742694,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 475580.1438053113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 392368.9069244559,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 392346.0881294968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 389776.7570850135,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 389741.925326135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 390817.7487684779,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 390791.3121361386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 240046.64581065436,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 240027.55712731235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 386583.7661934392,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 386558.9174800354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 315.28598006109917,
            "unit": "ns/iter",
            "extra": "iterations: 2204332\ncpu: 315.2599971329169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1667.600676670471,
            "unit": "ns/iter",
            "extra": "iterations: 421771\ncpu: 1667.483065454938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1361.2564583810167,
            "unit": "ns/iter",
            "extra": "iterations: 515222\ncpu: 1361.1311240591476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1423.0739813261175,
            "unit": "ns/iter",
            "extra": "iterations: 492773\ncpu: 1422.9921282213095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1115.0273141800112,
            "unit": "ns/iter",
            "extra": "iterations: 627879\ncpu: 1114.911949595377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6746.8887106228885,
            "unit": "ns/iter",
            "extra": "iterations: 104089\ncpu: 6746.559194535428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20051.53055827134,
            "unit": "ns/iter",
            "extra": "iterations: 34786\ncpu: 20050.905536710292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4819.978547582495,
            "unit": "ns/iter",
            "extra": "iterations: 145578\ncpu: 4819.886246548243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4799.262380616337,
            "unit": "ns/iter",
            "extra": "iterations: 145853\ncpu: 4798.857754040009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4830.558047103056,
            "unit": "ns/iter",
            "extra": "iterations: 145425\ncpu: 4830.2802131683075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10126.637227791065,
            "unit": "ns/iter",
            "extra": "iterations: 69432\ncpu: 10110.392902407983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9031.517785937118,
            "unit": "ns/iter",
            "extra": "iterations: 75987\ncpu: 9031.021095713746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2310.5485191355233,
            "unit": "ns/iter",
            "extra": "iterations: 303674\ncpu: 2310.4980999361323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11485.422220403052,
            "unit": "ns/iter",
            "extra": "iterations: 61070\ncpu: 11485.280825282458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9327.875011674389,
            "unit": "ns/iter",
            "extra": "iterations: 74951\ncpu: 9327.844858640854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9168.363183883319,
            "unit": "ns/iter",
            "extra": "iterations: 76146\ncpu: 9168.341081606386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9803.342374966674,
            "unit": "ns/iter",
            "extra": "iterations: 71521\ncpu: 9803.187874889805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23887.281354543604,
            "unit": "ns/iter",
            "extra": "iterations: 29294\ncpu: 23885.990305181862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98295.19428491445,
            "unit": "ns/iter",
            "extra": "iterations: 7139\ncpu: 98294.94326936519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84307.48009649769,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 84304.028950542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84308.96789883121,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 84308.74270428078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84015.57028064401,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 84015.35140321389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52649.66772008976,
            "unit": "ns/iter",
            "extra": "iterations: 13290\ncpu: 52647.39653875176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84097.10795590992,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 84096.08195542792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2267.73238089371,
            "unit": "ns/iter",
            "extra": "iterations: 308401\ncpu: 2267.666771508512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11288.044880581676,
            "unit": "ns/iter",
            "extra": "iterations: 62009\ncpu: 11288.003354351673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9040.751159972637,
            "unit": "ns/iter",
            "extra": "iterations: 77588\ncpu: 9040.606794865278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9000.60911308313,
            "unit": "ns/iter",
            "extra": "iterations: 77076\ncpu: 9000.203695054368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9585.300865296458,
            "unit": "ns/iter",
            "extra": "iterations: 72923\ncpu: 9585.189857795223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 22979.805206314708,
            "unit": "ns/iter",
            "extra": "iterations: 30463\ncpu: 22979.230541968995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96404.79497792677,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 96404.81512141337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81522.68897776822,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 81521.5386425124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81799.703318531,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 81798.77307782289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82412.60726034056,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 82412.35902255602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52956.73262072945,
            "unit": "ns/iter",
            "extra": "iterations: 13191\ncpu: 52955.30285800942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83006.09367208341,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 83005.9361272716 ns\nthreads: 1"
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
        "date": 1702488598895,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 775.7641450996229,
            "unit": "ns/iter",
            "extra": "iterations: 897590\ncpu: 775.7369177464099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11058.425523440163,
            "unit": "ns/iter",
            "extra": "iterations: 75319\ncpu: 11057.841978783572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24460.699508255595,
            "unit": "ns/iter",
            "extra": "iterations: 34164\ncpu: 24459.80564336729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38318.71217067498,
            "unit": "ns/iter",
            "extra": "iterations: 21749\ncpu: 38316.47891857097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48198.7855501793,
            "unit": "ns/iter",
            "extra": "iterations: 16540\ncpu: 48196.6989117291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59913.581633371905,
            "unit": "ns/iter",
            "extra": "iterations: 14167\ncpu: 59910.46093033109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60506.45170000166,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60505.349999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69874.50806841649,
            "unit": "ns/iter",
            "extra": "iterations: 12394\ncpu: 69869.88865580117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80315.71240755805,
            "unit": "ns/iter",
            "extra": "iterations: 10953\ncpu: 80312.90057518489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 629.0029471759024,
            "unit": "ns/iter",
            "extra": "iterations: 1110894\ncpu: 628.969550650197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 539.1328677931591,
            "unit": "ns/iter",
            "extra": "iterations: 1302716\ncpu: 539.1099825288089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 538.0771621435069,
            "unit": "ns/iter",
            "extra": "iterations: 1302180\ncpu: 538.0687001796996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 544.3867404001078,
            "unit": "ns/iter",
            "extra": "iterations: 1288425\ncpu: 544.3465471408889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1033.2016667281127,
            "unit": "ns/iter",
            "extra": "iterations: 677975\ncpu: 1033.165677200487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3940.755112571925,
            "unit": "ns/iter",
            "extra": "iterations: 199606\ncpu: 3940.583449395307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 17754.89663037429,
            "unit": "ns/iter",
            "extra": "iterations: 46474\ncpu: 17754.568145629823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14601.145357618489,
            "unit": "ns/iter",
            "extra": "iterations: 56275\ncpu: 14600.175921812492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14459.76406903191,
            "unit": "ns/iter",
            "extra": "iterations: 55974\ncpu: 14459.468681888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14377.693257360588,
            "unit": "ns/iter",
            "extra": "iterations: 56862\ncpu: 14377.301185325901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36916.21396196171,
            "unit": "ns/iter",
            "extra": "iterations: 22504\ncpu: 36915.49502310706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 469227.6217672423,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 469209.42887931055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 387031.0649466172,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 387009.87544484047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 387789.9982070739,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 387774.5405647687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 389426.61655480845,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 389403.8031319905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 239971.99861839064,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 239965.12848853323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 386998.31442608254,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 386968.69138008036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1947088.8008474023,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1946756.9915254256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 767255.1483292739,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 765735.3708231464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2458505.4403183404,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2458446.1538461586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3928.725774397437,
            "unit": "ns/iter",
            "extra": "iterations: 200769\ncpu: 3928.636891153517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17507.195913845895,
            "unit": "ns/iter",
            "extra": "iterations: 46939\ncpu: 17506.836532520905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14209.152254918967,
            "unit": "ns/iter",
            "extra": "iterations: 57430\ncpu: 14208.384119797991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14481.680955415455,
            "unit": "ns/iter",
            "extra": "iterations: 56478\ncpu: 14480.881051028715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14164.223456875647,
            "unit": "ns/iter",
            "extra": "iterations: 57416\ncpu: 14163.675630486374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 37210.381347241564,
            "unit": "ns/iter",
            "extra": "iterations: 22431\ncpu: 37207.98894387221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 496539.19693530916,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 496517.8774120283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 401164.80175195506,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 401146.88796680403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 400515.91243191983,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 400509.66424682166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 395258.3192635763,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 395243.60125729564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 239153.1703864968,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 239141.58954817447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 393838.58393178496,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 393826.7504488326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1964008.199999909,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1963873.7634408695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 800547.5317869266,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 800530.5841924356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3933.373431261811,
            "unit": "ns/iter",
            "extra": "iterations: 206137\ncpu: 3933.2608896025667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17040.806516385022,
            "unit": "ns/iter",
            "extra": "iterations: 48309\ncpu: 17040.116748431996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14322.675784295137,
            "unit": "ns/iter",
            "extra": "iterations: 57727\ncpu: 14321.927347688275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14329.143265119892,
            "unit": "ns/iter",
            "extra": "iterations: 57076\ncpu: 14328.721353984121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14269.914398373607,
            "unit": "ns/iter",
            "extra": "iterations: 57569\ncpu: 14269.238652747114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 37346.68957901442,
            "unit": "ns/iter",
            "extra": "iterations: 22186\ncpu: 37345.17713873636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 473224.11444142135,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 473202.5613079004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 393398.0080862548,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 393378.3018867913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 391515.696060868,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 391504.4315129796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 394338.92452829547,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 394315.1392632539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 240394.4122179385,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 240384.78260869542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 391013.84061232785,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 391004.45745159686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 328.7538182563291,
            "unit": "ns/iter",
            "extra": "iterations: 2151833\ncpu: 328.73917260307667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1657.1971573291607,
            "unit": "ns/iter",
            "extra": "iterations: 422490\ncpu: 1657.1743709910293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1299.6390882806752,
            "unit": "ns/iter",
            "extra": "iterations: 540254\ncpu: 1299.6162915961736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1386.188368833012,
            "unit": "ns/iter",
            "extra": "iterations: 505779\ncpu: 1386.1073710059043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1111.574724878957,
            "unit": "ns/iter",
            "extra": "iterations: 630359\ncpu: 1111.5353314539839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6799.352566760995,
            "unit": "ns/iter",
            "extra": "iterations: 103691\ncpu: 6798.874540702686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19873.984178618244,
            "unit": "ns/iter",
            "extra": "iterations: 33815\ncpu: 19873.062250480572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4801.823090134517,
            "unit": "ns/iter",
            "extra": "iterations: 145560\ncpu: 4801.450948062652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4795.439078386461,
            "unit": "ns/iter",
            "extra": "iterations: 146352\ncpu: 4795.278506614215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4818.214077111092,
            "unit": "ns/iter",
            "extra": "iterations: 145868\ncpu: 4818.080044972195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10216.70943524796,
            "unit": "ns/iter",
            "extra": "iterations: 67534\ncpu: 10216.35916723429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9118.20003649852,
            "unit": "ns/iter",
            "extra": "iterations: 76716\ncpu: 9117.697742322252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2271.8214146759524,
            "unit": "ns/iter",
            "extra": "iterations: 308424\ncpu: 2271.7427956319843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11392.954820059518,
            "unit": "ns/iter",
            "extra": "iterations: 61576\ncpu: 11392.203131090022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9261.158556043183,
            "unit": "ns/iter",
            "extra": "iterations: 75210\ncpu: 9260.728626512531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9084.536102302967,
            "unit": "ns/iter",
            "extra": "iterations: 76948\ncpu: 9084.38555907889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9708.349024938261,
            "unit": "ns/iter",
            "extra": "iterations: 72098\ncpu: 9707.690920691215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 23916.433714383926,
            "unit": "ns/iter",
            "extra": "iterations: 29305\ncpu: 23915.60825797652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97477.9894106173,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 97470.54479587461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84251.12475984321,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 84247.20220941272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83983.58806613802,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83982.13515456516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84187.55568934669,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 84184.56351595341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52519.907429778475,
            "unit": "ns/iter",
            "extra": "iterations: 13244\ncpu: 52518.0836605254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84079.35999042736,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 84073.21920268105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2213.495589981966,
            "unit": "ns/iter",
            "extra": "iterations: 316552\ncpu: 2213.41833253307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11078.828997105598,
            "unit": "ns/iter",
            "extra": "iterations: 63227\ncpu: 11078.183371028374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 8794.294555513814,
            "unit": "ns/iter",
            "extra": "iterations: 79530\ncpu: 8794.101596881697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 8785.023933389075,
            "unit": "ns/iter",
            "extra": "iterations: 79387\ncpu: 8784.727978132358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9353.465899687146,
            "unit": "ns/iter",
            "extra": "iterations: 74926\ncpu: 9352.864159303868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23032.649266495708,
            "unit": "ns/iter",
            "extra": "iterations: 30402\ncpu: 23031.882770870685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96420.13741196538,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 96413.16116558494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81823.47544826359,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 81819.72342669625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81800.3589473679,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 81798.77192982363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82141.92599575852,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 82135.9415507892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 51949.711220111734,
            "unit": "ns/iter",
            "extra": "iterations: 13048\ncpu: 51947.7467811159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82599.96336563738,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 82594.59938548785 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}