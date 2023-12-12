window.BENCHMARK_DATA = {
  "lastUpdate": 1702392447954,
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
      }
    ]
  }
}