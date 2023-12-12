window.BENCHMARK_DATA = {
  "lastUpdate": 1702388131400,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-10 22.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381120829,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6996.780199475313,
            "unit": "ns/iter",
            "extra": "iterations: 100664\ncpu: 6996.514146070096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50446.68419999994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50445.37000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94379.99707380665,
            "unit": "ns/iter",
            "extra": "iterations: 9227\ncpu: 94375.62588056788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135102.70318515447,
            "unit": "ns/iter",
            "extra": "iterations: 5714\ncpu: 135094.62723136158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177242.16371049624,
            "unit": "ns/iter",
            "extra": "iterations: 4905\ncpu: 177232.72171253816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 219170.81592291442,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 219161.94219066913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 261222.0232277461,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 261213.33333333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 304002.4519062467,
            "unit": "ns/iter",
            "extra": "iterations: 2859\ncpu: 303997.48163693614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 345153.2798092124,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 345133.6248012719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5728.248792865207,
            "unit": "ns/iter",
            "extra": "iterations: 121776\ncpu: 5728.142655367229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4639.217361468573,
            "unit": "ns/iter",
            "extra": "iterations: 151554\ncpu: 4639.036910936032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4672.250178866582,
            "unit": "ns/iter",
            "extra": "iterations: 149553\ncpu: 4671.99120044399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4745.20515370958,
            "unit": "ns/iter",
            "extra": "iterations: 150804\ncpu: 4745.053181613214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7325.421103231568,
            "unit": "ns/iter",
            "extra": "iterations: 96734\ncpu: 7324.940558645361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25716.007227541788,
            "unit": "ns/iter",
            "extra": "iterations: 31546\ncpu: 25714.835478349076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126795.3819793222,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 126785.40620384066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98084.92220309623,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 98081.3080895008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98981.3196711841,
            "unit": "ns/iter",
            "extra": "iterations: 8637\ncpu: 98976.7511867546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97006.06888306969,
            "unit": "ns/iter",
            "extra": "iterations: 8783\ncpu: 97003.10827735385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202840.311292885,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 202829.83412860666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1638420.4645389197,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1638373.2269503525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1298031.848951068,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1297966.1538461533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1297496.0209205218,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1297444.351464436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1281230.39669426,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1281144.4903581252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 697539.9984951356,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 697519.4130925501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1252597.1039136117,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1252527.395411602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32419.551830108554,
            "unit": "ns/iter",
            "extra": "iterations: 25381\ncpu: 32417.635238958268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158535.44387380825,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 158526.90755686042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124793.08711407175,
            "unit": "ns/iter",
            "extra": "iterations: 6899\ncpu: 124785.46166111004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123905.74234803452,
            "unit": "ns/iter",
            "extra": "iterations: 6959\ncpu: 123899.02284811043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120044.29630148664,
            "unit": "ns/iter",
            "extra": "iterations: 7138\ncpu: 120039.89913140901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 215548.14079242805,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 215536.43159730834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1685675.180831787,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1685611.0307414148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1344333.590448658,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1344278.4370477558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1326457.358974338,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1326414.1025640958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1305889.8255977829,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1305812.939521798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 731417.940047934,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 731389.4484412447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1285483.2926491238,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1285418.3079056863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6000630.025641183,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 6000219.230769241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2810011.153614373,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2809917.4698795252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25245.82928258604,
            "unit": "ns/iter",
            "extra": "iterations: 32422\ncpu: 25244.72580346668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125005.18369422777,
            "unit": "ns/iter",
            "extra": "iterations: 6881\ncpu: 125001.55500653986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94903.7571207782,
            "unit": "ns/iter",
            "extra": "iterations: 9058\ncpu: 94898.06800618253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95445.5092788075,
            "unit": "ns/iter",
            "extra": "iterations: 8999\ncpu: 95442.3158128687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91313.05100842835,
            "unit": "ns/iter",
            "extra": "iterations: 9371\ncpu: 91307.05367623482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 185998.65507619665,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 185991.80081562593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1647098.1219081238,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1647009.8939929295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1308030.5324137951,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1307988.4137931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1282694.0164835867,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1282633.3791208805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1263387.8534599564,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1263350.7462686552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 688684.1796584759,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 688645.5827765402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1245366.3877005496,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1245326.0695187203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2589.08294283903,
            "unit": "ns/iter",
            "extra": "iterations: 269957\ncpu: 2588.913419544608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17414.49460659044,
            "unit": "ns/iter",
            "extra": "iterations: 40327\ncpu: 17413.836883477623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14206.684234051603,
            "unit": "ns/iter",
            "extra": "iterations: 49220\ncpu: 14205.499796830549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12956.35967977532,
            "unit": "ns/iter",
            "extra": "iterations: 54087\ncpu: 12955.704697986652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10091.266607003505,
            "unit": "ns/iter",
            "extra": "iterations: 69278\ncpu: 10091.230982418629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65578.85397897837,
            "unit": "ns/iter",
            "extra": "iterations: 10656\ncpu: 65576.67042041983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 108763.59695464636,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 108760.1771286517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27562.715765427154,
            "unit": "ns/iter",
            "extra": "iterations: 25391\ncpu: 27560.994053010756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27859.504676243978,
            "unit": "ns/iter",
            "extra": "iterations: 25127\ncpu: 27858.27595813269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27299.393882425797,
            "unit": "ns/iter",
            "extra": "iterations: 25533\ncpu: 27297.57960286673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55080.50388692591,
            "unit": "ns/iter",
            "extra": "iterations: 12735\ncpu: 55078.68080094248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52092.62276519593,
            "unit": "ns/iter",
            "extra": "iterations: 13424\ncpu: 52088.94517282518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20915.035720665055,
            "unit": "ns/iter",
            "extra": "iterations: 33594\ncpu: 20914.3388700362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101369.40492752794,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 101368.05797101319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83122.21160980903,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83117.65409934102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84194.35081809472,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 84190.71222329188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82393.91324847659,
            "unit": "ns/iter",
            "extra": "iterations: 8484\ncpu: 82390.31117397349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 128283.39988997532,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 128278.3278327831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 486223.4586519051,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486196.7338429492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 405531.21527778753,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 405518.5763888891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 400419.9204350227,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 400393.47452775924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 395245.8731596833,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 395244.2808606996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253708.355248825,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 253701.99782056286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 393335.75280897744,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 393329.8314606759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21780.337479347796,
            "unit": "ns/iter",
            "extra": "iterations: 32079\ncpu: 21779.4756694408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104327.50366162103,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 104323.27006426698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87364.52895752221,
            "unit": "ns/iter",
            "extra": "iterations: 8029\ncpu: 87359.67119192811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87283.49744294235,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 87280.41661469429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86767.82275033944,
            "unit": "ns/iter",
            "extra": "iterations: 8079\ncpu: 86764.48817922942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127453.5808623038,
            "unit": "ns/iter",
            "extra": "iterations: 5497\ncpu: 127449.51791886581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 487898.73680550815,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 487877.36111110845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 399177.58500283235,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 399162.50715512095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 402447.63699020055,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 402418.83974727016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 393919.798536839,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 393905.85256050003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256662.54928548518,
            "unit": "ns/iter",
            "extra": "iterations: 2729\ncpu: 256645.40124587525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 394551.94739819097,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 394550.5090497702 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382268565,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7099.199992080844,
            "unit": "ns/iter",
            "extra": "iterations: 101019\ncpu: 7098.473554479851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50114.96349999902,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50114.630000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92418.48107119894,
            "unit": "ns/iter",
            "extra": "iterations: 9298\ncpu: 92415.89589158956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134222.23072120274,
            "unit": "ns/iter",
            "extra": "iterations: 6406\ncpu: 134215.87574149235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178357.9010701054,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 178355.05568901508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226858.31166202176,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 226853.09891221853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 260528.55354449808,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 260530.31674208146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 302119.9008033569,
            "unit": "ns/iter",
            "extra": "iterations: 2863\ncpu: 302111.7359413204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 345267.9623613473,
            "unit": "ns/iter",
            "extra": "iterations: 2524\ncpu: 345259.54833597474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5681.248415056281,
            "unit": "ns/iter",
            "extra": "iterations: 122875\ncpu: 5681.1621566632775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4633.199871970165,
            "unit": "ns/iter",
            "extra": "iterations: 151527\ncpu: 4633.103671292905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4651.951994929102,
            "unit": "ns/iter",
            "extra": "iterations: 149880\ncpu: 4651.883506805446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4658.522315578111,
            "unit": "ns/iter",
            "extra": "iterations: 150321\ncpu: 4658.361107230527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7195.2341247867835,
            "unit": "ns/iter",
            "extra": "iterations: 97542\ncpu: 7195.06981607924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25929.471267317214,
            "unit": "ns/iter",
            "extra": "iterations: 31184\ncpu: 25928.75192406365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 121361.03261329875,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 121359.6922208104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94180.9466666671,
            "unit": "ns/iter",
            "extra": "iterations: 9075\ncpu: 94177.91735537184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96134.11667980456,
            "unit": "ns/iter",
            "extra": "iterations: 8879\ncpu: 96132.93163644579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91796.60025872877,
            "unit": "ns/iter",
            "extra": "iterations: 9276\ncpu: 91794.79301423012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201551.3706799223,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 201549.13033657146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1606691.8767361217,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1606643.2291666612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1287661.2972222448,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1287640.2777777782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1286414.3222683615,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1286347.0262793913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1271908.017759535,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1271878.825136615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 687571.1085502115,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 687546.0966542757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1237549.1200000397,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1237519.8666666686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32671.49368852896,
            "unit": "ns/iter",
            "extra": "iterations: 25113\ncpu: 32670.429657946155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155783.49254274683,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 155780.68388504884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121155.9859654106,
            "unit": "ns/iter",
            "extra": "iterations: 7054\ncpu: 121152.59427275335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119828.8985426025,
            "unit": "ns/iter",
            "extra": "iterations: 7136\ncpu: 119827.49439461877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 113738.77375264834,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 113734.67356687876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 216286.60100125277,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 216280.95118898683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1650045.219858115,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1649962.4113475163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1321432.7332382328,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1321409.9857346697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1313577.8239436157,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1313533.6619718284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1294231.7374301807,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1294201.8156424565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 716139.392912164,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 716123.2665639428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1267899.6444141467,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1267868.5286103566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5916932.36708867,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5916804.4303797465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2718569.174927151,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2718363.26530612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25022.68791464045,
            "unit": "ns/iter",
            "extra": "iterations: 32709\ncpu: 25022.085664496124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 119045.90885200362,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 119040.92669432929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92869.93748640797,
            "unit": "ns/iter",
            "extra": "iterations: 9198\ncpu: 92867.93868232277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 92382.97503765427,
            "unit": "ns/iter",
            "extra": "iterations: 9294\ncpu: 92378.7282117492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 88251.01817243456,
            "unit": "ns/iter",
            "extra": "iterations: 9685\ncpu: 88249.4785751161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 184495.30019161385,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 184487.84330423689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1627608.244328029,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1627562.1291448488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1289974.929460563,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1289923.0982019345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1289387.006906081,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1289371.1325966856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1272247.9032696977,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1272208.0381471377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 683181.1399267644,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 683178.1684981657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1241571.8630319785,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1241542.6861702197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2571.1325891381784,
            "unit": "ns/iter",
            "extra": "iterations: 272330\ncpu: 2571.1133551206267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17251.573676681055,
            "unit": "ns/iter",
            "extra": "iterations: 40542\ncpu: 17251.196290266937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13661.26524443749,
            "unit": "ns/iter",
            "extra": "iterations: 51281\ncpu: 13661.012850763527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14046.586714382935,
            "unit": "ns/iter",
            "extra": "iterations: 49738\ncpu: 14046.473521251415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10056.988828824346,
            "unit": "ns/iter",
            "extra": "iterations: 69554\ncpu: 10056.922678781928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64627.93989627768,
            "unit": "ns/iter",
            "extra": "iterations: 10798\ncpu: 64626.912391183694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112218.71169872142,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 112214.96794871741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27379.711038833942,
            "unit": "ns/iter",
            "extra": "iterations: 25519\ncpu: 27379.270347584017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27358.043991710412,
            "unit": "ns/iter",
            "extra": "iterations: 25573\ncpu: 27356.99761467182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27140.140450962623,
            "unit": "ns/iter",
            "extra": "iterations: 25767\ncpu: 27139.717468079078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54020.1354142561,
            "unit": "ns/iter",
            "extra": "iterations: 12975\ncpu: 54019.236994219624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51485.31829205497,
            "unit": "ns/iter",
            "extra": "iterations: 13607\ncpu: 51485.16204894546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20789.054177546364,
            "unit": "ns/iter",
            "extra": "iterations: 33704\ncpu: 20788.930097317927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101054.53499423766,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 101052.01612903112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82653.63090645478,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 82652.0973963353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82724.41249556761,
            "unit": "ns/iter",
            "extra": "iterations: 8451\ncpu: 82723.25168618986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82042.48003746444,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 82041.97400772775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125682.74775098963,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 125683.21338611035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 486954.25748085935,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486950.93945720134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 398312.607854305,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 398295.788275477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 396278.13718823285,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 396271.8253968229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 394784.74689262663,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 394774.2372881324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 266695.4103827346,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 266252.9746115979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 390725.5349357249,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 390720.34656232764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22142.399868638113,
            "unit": "ns/iter",
            "extra": "iterations: 31973\ncpu: 22141.56632158371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105107.75075074818,
            "unit": "ns/iter",
            "extra": "iterations: 6660\ncpu: 105105.91591591515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86749.42220571752,
            "unit": "ns/iter",
            "extra": "iterations: 8079\ncpu: 86747.67916821555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87029.73374767121,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 87026.92355500384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85980.06477384747,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 85979.99016715889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126046.117721288,
            "unit": "ns/iter",
            "extra": "iterations: 5547\ncpu: 126043.39282495083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 488531.1084674701,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 488536.4590622819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 402330.384261934,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 402324.5261344037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401727.4423407943,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 401715.89213998936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 395512.76723160676,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 395494.80225989036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255147.66216215433,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 255139.2622352073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 395021.96444696636,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 394999.3792325093 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387030899,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6884.894516218022,
            "unit": "ns/iter",
            "extra": "iterations: 101864\ncpu: 6884.632451111285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50249.325999999426,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50246.26000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92601.15074996921,
            "unit": "ns/iter",
            "extra": "iterations: 9267\ncpu: 92599.10434876443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133521.4260585245,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 133514.4458281445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177694.85182169836,
            "unit": "ns/iter",
            "extra": "iterations: 4913\ncpu: 177685.243232241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 219062.4973248415,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 219048.17834394917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 260818.41307622418,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 260800.60259114212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 302671.5891553708,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 302662.00903719163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 345282.9928769252,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 345266.1258409181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5770.800942906494,
            "unit": "ns/iter",
            "extra": "iterations: 121327\ncpu: 5770.505328574836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4755.838803316454,
            "unit": "ns/iter",
            "extra": "iterations: 148477\ncpu: 4755.598510206966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4694.245196453683,
            "unit": "ns/iter",
            "extra": "iterations: 148432\ncpu: 4693.9615446803955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4716.712368148787,
            "unit": "ns/iter",
            "extra": "iterations: 148179\ncpu: 4716.406508344631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7129.187909708597,
            "unit": "ns/iter",
            "extra": "iterations: 98393\ncpu: 7128.886201254165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25961.729685012608,
            "unit": "ns/iter",
            "extra": "iterations: 31430\ncpu: 25960.43588927774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131619.16528925463,
            "unit": "ns/iter",
            "extra": "iterations: 6534\ncpu: 131611.99877563491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101854.08807055224,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 101848.13490644726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102227.90208034858,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 102224.07938785286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97269.79323308612,
            "unit": "ns/iter",
            "extra": "iterations: 8778\ncpu: 97267.41854636591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206300.95481788606,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 206290.7100046105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1621695.3710802016,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1621608.5365853612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1306686.7513966586,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1306634.3575418966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1295978.2942816217,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1295943.79358438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1283851.7320441438,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1283830.2486187872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 708210.0328244374,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 708154.4274809166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1248693.2223719845,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1248660.91644205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32733.298802227,
            "unit": "ns/iter",
            "extra": "iterations: 24963\ncpu: 32731.474582381838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 163603.08087121986,
            "unit": "ns/iter",
            "extra": "iterations: 5280\ncpu: 163600.83333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126070.14821376308,
            "unit": "ns/iter",
            "extra": "iterations: 6774\ncpu: 126061.4850900497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124008.78958003654,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 124006.72535719466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120578.11318883092,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 120571.8090381077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220373.67344346238,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 220360.55908513346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1668812.989247454,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1668732.9749103978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1325608.1740371704,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325528.530670469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1325762.4293865461,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325692.7246790312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1330499.8880918184,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1330468.0057388798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 741880.7915335096,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 741813.0990415342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1287179.8502080792,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1287138.973647705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6083835.23529459,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6083531.372549034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2766004.724852073,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2765807.100591732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25041.166748676304,
            "unit": "ns/iter",
            "extra": "iterations: 32516\ncpu: 25040.413950055387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 128207.253226526,
            "unit": "ns/iter",
            "extra": "iterations: 6741\ncpu: 128200.41536863956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98195.94422081852,
            "unit": "ns/iter",
            "extra": "iterations: 8695\ncpu: 98190.2472685452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99217.2071832841,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 99213.08465180725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93369.79779572261,
            "unit": "ns/iter",
            "extra": "iterations: 9164\ncpu: 93364.32780445226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189545.82596384228,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 189531.36571553102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1641520.4710018386,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1641409.6660808476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1294355.2268326792,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1294240.802213001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1299471.1321280242,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1299398.7482614736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1279329.6159122325,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1279254.45816187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 701169.7484984894,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 701128.2282282271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1251293.3547523695,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1251185.943775105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2638.9540638311805,
            "unit": "ns/iter",
            "extra": "iterations: 264824\ncpu: 2638.8069057185066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17367.49448008348,
            "unit": "ns/iter",
            "extra": "iterations: 40218\ncpu: 17366.64926152474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13863.422505646386,
            "unit": "ns/iter",
            "extra": "iterations: 50494\ncpu: 13862.34800174271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13114.625109877614,
            "unit": "ns/iter",
            "extra": "iterations: 53469\ncpu: 13114.084796798154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10152.967174132473,
            "unit": "ns/iter",
            "extra": "iterations: 68970\ncpu: 10152.638828476103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65932.16879939656,
            "unit": "ns/iter",
            "extra": "iterations: 10628\ncpu: 65926.90063981878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112731.84142603273,
            "unit": "ns/iter",
            "extra": "iterations: 6199\ncpu: 112726.98822390698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27668.893006060993,
            "unit": "ns/iter",
            "extra": "iterations: 23263\ncpu: 27667.02918798081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27571.637281184147,
            "unit": "ns/iter",
            "extra": "iterations: 25364\ncpu: 27569.153130421048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27702.13933386519,
            "unit": "ns/iter",
            "extra": "iterations: 25220\ncpu: 27700.376685170675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55385.708014209886,
            "unit": "ns/iter",
            "extra": "iterations: 12665\ncpu: 55382.56612712208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52096.580659572435,
            "unit": "ns/iter",
            "extra": "iterations: 13433\ncpu: 52095.02717189019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20943.025121892046,
            "unit": "ns/iter",
            "extra": "iterations: 33636\ncpu: 20942.89451777854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100975.22638507275,
            "unit": "ns/iter",
            "extra": "iterations: 6913\ncpu: 100969.4054679574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82811.89162037442,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 82806.83134381298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83427.06924546463,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 83421.94364851936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82540.7784191304,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 82538.21415950073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124893.9188079952,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 124893.12990720753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 484389.0145127928,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 484363.99447131995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 405746.12347822747,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 405723.01449275453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 401489.4591954277,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 401466.8965517306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 393637.3436445178,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 393597.69403824495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254177.9865747291,
            "unit": "ns/iter",
            "extra": "iterations: 2756\ncpu: 254165.0580551499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 394784.0700960784,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 394769.1916336924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21465.45673741279,
            "unit": "ns/iter",
            "extra": "iterations: 32557\ncpu: 21464.68040667157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104106.7671375455,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 104096.89219330777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86300.7664899609,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 86297.64517322238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86070.04006882735,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 86069.61651917576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86280.61839024373,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 86276.42055959535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125630.45687645217,
            "unit": "ns/iter",
            "extra": "iterations: 5577\ncpu: 125629.72924511392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 488962.7108013883,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 488934.56445992825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 401690.89029292547,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 401666.74325100554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 400542.94742854574,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 400521.0285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 397981.25553665735,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 397938.44406586414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257265.36350258056,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 257252.4282560695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 396670.30843240937,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 396644.9349179396 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388128365,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7022.077453712742,
            "unit": "ns/iter",
            "extra": "iterations: 100460\ncpu: 7021.995819231535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51028.95960000069,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51029.23999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98669.56227719846,
            "unit": "ns/iter",
            "extra": "iterations: 9257\ncpu: 98663.50869612185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134283.31262167267,
            "unit": "ns/iter",
            "extra": "iterations: 6164\ncpu: 134271.2362102531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176680.47650183615,
            "unit": "ns/iter",
            "extra": "iterations: 4894\ncpu: 176678.81078872088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 219180.42235710393,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 219174.532119373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 261006.25345344548,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 261005.88588588592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 303560.96515680384,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 303555.26132404193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 344389.0229521103,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 344379.2639493471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5669.396573223887,
            "unit": "ns/iter",
            "extra": "iterations: 123498\ncpu: 5669.274806069742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4789.970002605162,
            "unit": "ns/iter",
            "extra": "iterations: 149713\ncpu: 4789.658212713668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4656.94268871576,
            "unit": "ns/iter",
            "extra": "iterations: 148941\ncpu: 4656.783558590313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4655.316120060364,
            "unit": "ns/iter",
            "extra": "iterations: 150291\ncpu: 4655.265451690386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7212.931417111935,
            "unit": "ns/iter",
            "extra": "iterations: 97240\ncpu: 7212.588440970806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26999.817030727536,
            "unit": "ns/iter",
            "extra": "iterations: 30169\ncpu: 26998.803407471205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128754.2224217973,
            "unit": "ns/iter",
            "extra": "iterations: 6681\ncpu: 128748.79509055521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101745.37529775841,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 101740.3287279659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100405.53904963723,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 100400.9056692543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99011.36618904475,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 99007.98474693767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204284.24604449136,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 204277.66567301098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1648003.7504424925,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1647946.3716814118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1304025.428370764,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1303984.1292134817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1295168.5076708659,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1295114.923291494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1284023.553103468,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1283983.3103448302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 694576.5562218996,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 694554.8725637189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1252673.7277628435,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1252612.1293800538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33492.975450149366,
            "unit": "ns/iter",
            "extra": "iterations: 24603\ncpu: 33492.46433361787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160367.48736999286,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 160361.9427934624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126711.21984980063,
            "unit": "ns/iter",
            "extra": "iterations: 6791\ncpu: 126708.11367987073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124093.62078408686,
            "unit": "ns/iter",
            "extra": "iterations: 6938\ncpu: 124088.36840588055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 122529.58384298615,
            "unit": "ns/iter",
            "extra": "iterations: 7031\ncpu: 122526.62494666505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 216627.33583770748,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 216617.7560731276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1677759.978378396,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1677725.5855855742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1341209.92661869,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1341173.6690647441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1329990.0614285725,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1329946.2857142836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1311801.197461215,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311740.338504939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 730922.5141509654,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 730898.427672957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1286189.5933609768,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1286135.961272481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5965124.397436174,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5964962.8205128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2779716.8065477186,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2779627.0833333367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25645.09236284197,
            "unit": "ns/iter",
            "extra": "iterations: 32080\ncpu: 25644.289276808053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126485.47122884735,
            "unit": "ns/iter",
            "extra": "iterations: 6795\ncpu: 126482.56070640251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97623.08930180143,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 97620.33783783745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 97984.59411026139,
            "unit": "ns/iter",
            "extra": "iterations: 8761\ncpu: 97980.53875128392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 95712.67715656372,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 95709.19540229894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 186497.276714691,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 186491.12018920583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1651963.6017698105,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1651921.0619469103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1298831.6155989463,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1298804.456824513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1291364.4307479174,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1291348.1994459888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1277055.3524591231,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1277052.4590163967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 691855.8713969018,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 691842.645971913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1251898.1691274783,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1251878.1208053692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2612.4958343108888,
            "unit": "ns/iter",
            "extra": "iterations: 268503\ncpu: 2612.464665199291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17307.195138803672,
            "unit": "ns/iter",
            "extra": "iterations: 40525\ncpu: 17307.148673658274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13730.695114542821,
            "unit": "ns/iter",
            "extra": "iterations: 51029\ncpu: 13730.592408238488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13560.41290922109,
            "unit": "ns/iter",
            "extra": "iterations: 51653\ncpu: 13559.779683658217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10048.280033949914,
            "unit": "ns/iter",
            "extra": "iterations: 69513\ncpu: 10048.214003136101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64981.123612273565,
            "unit": "ns/iter",
            "extra": "iterations: 10719\ncpu: 64979.67161115787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114382.37285364089,
            "unit": "ns/iter",
            "extra": "iterations: 6115\ncpu: 114381.96238757242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27409.810033731403,
            "unit": "ns/iter",
            "extra": "iterations: 25494\ncpu: 27409.284537538028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27491.41430419747,
            "unit": "ns/iter",
            "extra": "iterations: 25503\ncpu: 27491.259851781957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27384.21646317615,
            "unit": "ns/iter",
            "extra": "iterations: 25718\ncpu: 27383.684578894212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54679.028238417835,
            "unit": "ns/iter",
            "extra": "iterations: 12784\ncpu: 54678.85638297849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 46770.429623185584,
            "unit": "ns/iter",
            "extra": "iterations: 14941\ncpu: 46769.66066528342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20693.83817562626,
            "unit": "ns/iter",
            "extra": "iterations: 33765\ncpu: 20693.747963868005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101280.73804363709,
            "unit": "ns/iter",
            "extra": "iterations: 6921\ncpu: 101280.32076289564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82547.1637798869,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82543.80817721122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82617.20699432687,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 82616.72967863937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82428.04094395034,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 82425.54572271329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126798.14438792499,
            "unit": "ns/iter",
            "extra": "iterations: 5506\ncpu: 126797.76607337486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 487946.8467967004,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 487928.2729805019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 403755.92853026465,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 403753.08357348625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 399151.75485716,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 399136.6857142842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 399268.205949653,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 399265.78947368375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251604.29557713168,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 251596.36821287492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 393144.85650227615,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 393142.1524663612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21556.411424147005,
            "unit": "ns/iter",
            "extra": "iterations: 29709\ncpu: 21555.545457605578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104180.29727718579,
            "unit": "ns/iter",
            "extra": "iterations: 6721\ncpu: 104176.38744234506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86014.34040466374,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 86013.77069282606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86074.04065339202,
            "unit": "ns/iter",
            "extra": "iterations: 8142\ncpu: 86070.57234094826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85139.74412374961,
            "unit": "ns/iter",
            "extra": "iterations: 8211\ncpu: 85136.9626111312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125262.21863798643,
            "unit": "ns/iter",
            "extra": "iterations: 5580\ncpu: 125257.40143369172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 493121.95853833907,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 493112.0871398398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 403597.94870317023,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 403588.53025937115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 399369.013698667,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 399366.03881278704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 396285.88663287496,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 396276.6497461972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255683.8650127648,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 255681.9408974825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 396433.76723167015,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 396414.6327683597 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}