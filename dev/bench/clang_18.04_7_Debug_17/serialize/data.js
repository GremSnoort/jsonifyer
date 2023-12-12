window.BENCHMARK_DATA = {
  "lastUpdate": 1702394227624,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-7 18.04 Debug c++-17": [
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
        "date": 1702392447320,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9277.325655061582,
            "unit": "ns/iter",
            "extra": "iterations: 75451\ncpu: 9277.202422764445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 105337.20024751732,
            "unit": "ns/iter",
            "extra": "iterations: 8080\ncpu: 105330.79207920792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 203843.37253080678,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 203841.13409249362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 301587.52624213335,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 301578.6214135759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 393804.52435659495,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 393796.9669117649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 487751.2324929696,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 487744.48179271707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 585585.1855807328,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 585553.8050734317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 546585.5639999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546577.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 622833.992999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622790.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7450.673227825286,
            "unit": "ns/iter",
            "extra": "iterations: 98255\ncpu: 7450.2152562210595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5943.62018651029,
            "unit": "ns/iter",
            "extra": "iterations: 117742\ncpu: 5943.459428241405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5935.0595217893215,
            "unit": "ns/iter",
            "extra": "iterations: 117856\ncpu: 5934.509061906063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5911.8769833596525,
            "unit": "ns/iter",
            "extra": "iterations: 118927\ncpu: 5911.842558880655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10233.075093611544,
            "unit": "ns/iter",
            "extra": "iterations: 68368\ncpu: 10233.032997893753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52836.19711753279,
            "unit": "ns/iter",
            "extra": "iterations: 15681\ncpu: 52836.16478540901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216464.59319865966,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 216459.11531577574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 171994.8120696866,
            "unit": "ns/iter",
            "extra": "iterations: 4938\ncpu: 171994.37019036035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 177433.9605345614,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 177428.89956149558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 178757.9328718166,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 178757.562408223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 395163.5084745826,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 395139.57856161287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3180281.427609529,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3180174.747474742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2669044.4500000393,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2668746.6666666595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2606290.8913648734,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2606145.1253481824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2627701.943502693,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2627517.5141242873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1586240.7766497263,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1586154.8223350293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2530770.221311408,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2530612.8415300604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10809794.20408089,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10808890.81632652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6231931.153333032,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6231589.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12734014.084337533,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12733071.084337326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52623.8431235291,
            "unit": "ns/iter",
            "extra": "iterations: 15713\ncpu: 52620.94444090877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 213386.5605302454,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 213365.25762881464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 176059.80255302956,
            "unit": "ns/iter",
            "extra": "iterations: 4857\ncpu: 176048.6102532436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 176168.48409088957,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 176158.34710743782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178434.8598540078,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 178423.89989572467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 398568.39575645357,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 398550.369003689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3167473.376271057,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3167351.52542373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2629646.3718310893,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2629608.4507042333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2633625.915492738,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2633514.366197181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2619066.448863611,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2619034.3750000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1561273.5337836011,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1561219.7635135148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2549191.308743194,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2549051.3661202253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10832157.595959043,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10831753.535353571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6284676.879194279,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6284434.228187925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 52189.02312138788,
            "unit": "ns/iter",
            "extra": "iterations: 15743\ncpu: 52186.10175951183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 215159.76448456952,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 215143.94281414585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 174483.29718710412,
            "unit": "ns/iter",
            "extra": "iterations: 4906\ncpu: 174473.66490012268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 173366.9973561108,
            "unit": "ns/iter",
            "extra": "iterations: 4917\ncpu: 173355.9690868417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 174057.45993457286,
            "unit": "ns/iter",
            "extra": "iterations: 4892\ncpu: 174046.1774325422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 394414.65819336305,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 394388.19791193894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3175736.346938751,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3175516.666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2624866.1938204602,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2624707.865168538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2618142.075418771,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2617873.46368714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2633770.18309865,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2633553.239436632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1566614.225589202,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1566509.259259259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2572861.238356431,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2572597.534246573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3164.0105696972846,
            "unit": "ns/iter",
            "extra": "iterations: 221293\ncpu: 3163.923847568609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22103.300882720712,
            "unit": "ns/iter",
            "extra": "iterations: 31720\ncpu: 22102.979192938263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17063.94457584703,
            "unit": "ns/iter",
            "extra": "iterations: 41011\ncpu: 17062.653922118443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17590.664345233417,
            "unit": "ns/iter",
            "extra": "iterations: 40923\ncpu: 17589.223663954283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13423.78625440099,
            "unit": "ns/iter",
            "extra": "iterations: 51973\ncpu: 13422.250014430476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 91801.66089010885,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 91792.43796770448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 206600.09321532914,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 206579.73451327332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 51831.077457498846,
            "unit": "ns/iter",
            "extra": "iterations: 13530\ncpu: 51828.529194383795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 51573.55970588221,
            "unit": "ns/iter",
            "extra": "iterations: 13600\ncpu: 51569.588235293486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 51872.64528329823,
            "unit": "ns/iter",
            "extra": "iterations: 13484\ncpu: 51868.229012162104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 108365.61694862768,
            "unit": "ns/iter",
            "extra": "iterations: 6443\ncpu: 108357.0386465938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 100168.05051063438,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 100161.20618272295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27936.348692900883,
            "unit": "ns/iter",
            "extra": "iterations: 24979\ncpu: 27936.282477280824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 139912.98477842734,
            "unit": "ns/iter",
            "extra": "iterations: 5190\ncpu: 139909.69171483736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 109451.25062538692,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 109449.29643527138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 110203.60254796133,
            "unit": "ns/iter",
            "extra": "iterations: 6358\ncpu: 110197.23183390906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 112884.07688586909,
            "unit": "ns/iter",
            "extra": "iterations: 6204\ncpu: 112880.65764023311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 199426.95119862317,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 199422.8595890393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 863589.6386138456,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 863574.62871288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 747195.7676874684,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 747170.7497360138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 739144.8553326904,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 739119.2185850084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 748715.2386483639,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 748658.5005279898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 473579.7652232317,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473563.1258457384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 722533.5149638373,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 722516.8214654267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27721.104620266404,
            "unit": "ns/iter",
            "extra": "iterations: 25215\ncpu: 27720.678167757495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 135269.27860311582,
            "unit": "ns/iter",
            "extra": "iterations: 5183\ncpu: 135267.02681844417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109992.31271478866,
            "unit": "ns/iter",
            "extra": "iterations: 6402\ncpu: 109991.34645423283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 109332.67582332174,
            "unit": "ns/iter",
            "extra": "iterations: 6407\ncpu: 109331.91821445253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 110009.2475278591,
            "unit": "ns/iter",
            "extra": "iterations: 6371\ncpu: 110008.46021032831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 197873.54755855593,
            "unit": "ns/iter",
            "extra": "iterations: 3543\ncpu: 197872.98899238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 864263.3009828053,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 864250.982800985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 735244.7478992126,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 735218.8025210046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 739588.1413502614,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 739552.6371308002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 735306.4470095295,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 735292.2350472176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 474999.17335144844,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 474991.9782460913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 722878.584963956,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 722889.4953656064 ns\nthreads: 1"
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
        "date": 1702394221552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8988.308374397424,
            "unit": "ns/iter",
            "extra": "iterations: 77928\ncpu: 8987.960681654862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 105075.95934660558,
            "unit": "ns/iter",
            "extra": "iterations: 8142\ncpu: 105075.07983296485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205712.93547640427,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 205703.37650323776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 302630.3548500995,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 302629.52380952385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 394678.9875633082,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 394668.3095347768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 492664.91539764334,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 492654.1455160742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 587195.2664871741,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 587182.7725437414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 549424.3250000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549429.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 628903.4010000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628859.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7025.480434804683,
            "unit": "ns/iter",
            "extra": "iterations: 99999\ncpu: 7025.452254522556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5889.647770690186,
            "unit": "ns/iter",
            "extra": "iterations: 118826\ncpu: 5889.343241378158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5878.467574409719,
            "unit": "ns/iter",
            "extra": "iterations: 118903\ncpu: 5878.172123495616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5848.112120755573,
            "unit": "ns/iter",
            "extra": "iterations: 119514\ncpu: 5847.9056846896665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10068.06911079451,
            "unit": "ns/iter",
            "extra": "iterations: 69309\ncpu: 10067.88584455122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52008.178445001424,
            "unit": "ns/iter",
            "extra": "iterations: 15820\ncpu: 52005.39190897599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216773.40650405877,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 216762.27134146326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172118.1048484977,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 172110.92929292942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 177673.1009136302,
            "unit": "ns/iter",
            "extra": "iterations: 4816\ncpu: 177665.1578073091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174102.58700123098,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 174094.9403537638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 385898.70129868627,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 385876.44424540986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3250263.955172174,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3250149.6551724197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2639405.7042253595,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2639392.11267606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2652275.3504274245,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2652229.344729347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2714217.014620144,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2714235.0877192994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1589844.054888519,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1589827.61578045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2592408.894444197,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2592386.11111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10991718.947915766,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 10991464.583333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6246408.980000524,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6246282.666666663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13185369.851852456,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13185195.061728397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52606.5357165704,
            "unit": "ns/iter",
            "extra": "iterations: 15609\ncpu: 52605.45838939063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 209822.40392155005,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 209818.92156862724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 175365.31382214723,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 175363.66810433372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 176112.80008294998,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 176109.3114890087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 176644.62417354938,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 176642.7272727282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 394399.7464595569,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 394385.8839652807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3228670.166089957,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3228523.1833910043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2662700.2991454173,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2662560.9686609656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2669900.8390805335,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2669870.689655181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2708067.0520230224,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2707931.2138728504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1602250.2418525612,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1602150.9433962319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2615818.148876386,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2615676.123595502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11125287.010309342,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11124915.463917466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6514037.930070448,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6513821.678321694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 52124.039994947474,
            "unit": "ns/iter",
            "extra": "iterations: 15827\ncpu: 52121.66550830841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212993.78933002843,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 212988.13895781705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172611.25668558507,
            "unit": "ns/iter",
            "extra": "iterations: 4936\ncpu: 172602.12722852585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 171911.36515948092,
            "unit": "ns/iter",
            "extra": "iterations: 4954\ncpu: 171902.07912797658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 176154.58660030653,
            "unit": "ns/iter",
            "extra": "iterations: 4821\ncpu: 176144.0365069483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 389982.2355595601,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 389962.8610108302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3254872.138888803,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3254875.3472222043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2648752.6175636183,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2648680.7365439194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2680682.0712251393,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2677352.1367521267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2728177.34693889,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2728126.822157449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1602576.3941979366,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1602560.921501714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2604749.448468078,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2604696.100278544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3222.12160562884,
            "unit": "ns/iter",
            "extra": "iterations: 217161\ncpu: 3222.0955880660035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22477.290662458825,
            "unit": "ns/iter",
            "extra": "iterations: 31036\ncpu: 22477.490656012356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17637.62768562804,
            "unit": "ns/iter",
            "extra": "iterations: 39609\ncpu: 17636.45888560684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17273.015671274086,
            "unit": "ns/iter",
            "extra": "iterations: 40520\ncpu: 17272.164363277476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13445.338523878754,
            "unit": "ns/iter",
            "extra": "iterations: 51825\ncpu: 13444.588519054538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 93385.62826317803,
            "unit": "ns/iter",
            "extra": "iterations: 7508\ncpu: 93382.89824187387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 208932.30543054995,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 208931.17311731234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 51798.20481839923,
            "unit": "ns/iter",
            "extra": "iterations: 13656\ncpu: 51795.95049795037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52069.91005013932,
            "unit": "ns/iter",
            "extra": "iterations: 13363\ncpu: 52067.58961311113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 52249.559829699705,
            "unit": "ns/iter",
            "extra": "iterations: 13388\ncpu: 52246.83298476256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 109713.97892087355,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 109711.34182790604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 96962.83345084605,
            "unit": "ns/iter",
            "extra": "iterations: 7091\ncpu: 96958.2428430403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 28317.8475952025,
            "unit": "ns/iter",
            "extra": "iterations: 24763\ncpu: 28316.310624722006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 136310.2280975665,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 136305.17073170823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 110179.48555277642,
            "unit": "ns/iter",
            "extra": "iterations: 6368\ncpu: 110174.54459798872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 110547.79476257483,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 110542.32528790185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 113202.3000161221,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 113195.09914557601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 201687.80433525008,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 201682.9479768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 876984.7043700794,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 876981.1053984612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 747097.4813233853,
            "unit": "ns/iter",
            "extra": "iterations: 937\ncpu: 747060.9391675636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 748384.1845492917,
            "unit": "ns/iter",
            "extra": "iterations: 932\ncpu: 748349.785407727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 757157.8597825781,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 757110.6521739191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 481325.08063400764,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 481305.23776706215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 735131.9081309611,
            "unit": "ns/iter",
            "extra": "iterations: 947\ncpu: 735083.7381203887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 28213.722831306837,
            "unit": "ns/iter",
            "extra": "iterations: 24992\ncpu: 28212.179897567607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 135441.14667949246,
            "unit": "ns/iter",
            "extra": "iterations: 5195\ncpu: 135437.1896053884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 109456.16881686205,
            "unit": "ns/iter",
            "extra": "iterations: 6356\ncpu: 109452.28130899969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 110048.24000626693,
            "unit": "ns/iter",
            "extra": "iterations: 6379\ncpu: 110044.14485029117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 112141.14116516813,
            "unit": "ns/iter",
            "extra": "iterations: 6248\ncpu: 112135.73943661952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 198272.45823862616,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 198264.6022727282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 885407.5391414282,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 885370.3282828361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 745508.7041800958,
            "unit": "ns/iter",
            "extra": "iterations: 933\ncpu: 745486.066452302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 747257.8974359615,
            "unit": "ns/iter",
            "extra": "iterations: 936\ncpu: 747236.3247863195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 757518.2624729209,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 757479.1757049892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 485210.09166664595,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485208.19444444444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 732673.4380251262,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 732611.9747899077 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}