window.BENCHMARK_DATA = {
  "lastUpdate": 1702398837054,
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
      }
    ]
  }
}