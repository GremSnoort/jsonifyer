window.BENCHMARK_DATA = {
  "lastUpdate": 1702396449246,
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390806594,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6923.364639907157,
            "unit": "ns/iter",
            "extra": "iterations: 101821\ncpu: 6922.986417340235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57773.17023090504,
            "unit": "ns/iter",
            "extra": "iterations: 14075\ncpu: 57771.360568383665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91159.64312227828,
            "unit": "ns/iter",
            "extra": "iterations: 9429\ncpu: 91156.12472160354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133028.52605612203,
            "unit": "ns/iter",
            "extra": "iterations: 6486\ncpu: 133026.37989515875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174739.7086186018,
            "unit": "ns/iter",
            "extra": "iterations: 4966\ncpu: 174734.9979863068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217139.79026593297,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 217126.5178123433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 256952.42382928793,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 256938.64848844102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 298559.1313166018,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 298542.1106909587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 340007.2183098636,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 340005.08607198787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5712.216246233253,
            "unit": "ns/iter",
            "extra": "iterations: 122453\ncpu: 5711.971123614777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4698.466649708316,
            "unit": "ns/iter",
            "extra": "iterations: 149384\ncpu: 4698.353237294478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4711.164768948916,
            "unit": "ns/iter",
            "extra": "iterations: 148863\ncpu: 4710.954367438518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4648.737039250871,
            "unit": "ns/iter",
            "extra": "iterations: 150570\ncpu: 4648.693630869371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7207.050598872801,
            "unit": "ns/iter",
            "extra": "iterations: 97433\ncpu: 7206.747200640427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25617.529568611928,
            "unit": "ns/iter",
            "extra": "iterations: 31503\ncpu: 25617.3316826969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 121116.91414427393,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 121112.92786421516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95806.69455361976,
            "unit": "ns/iter",
            "extra": "iterations: 8905\ncpu: 95806.01909039881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95868.43576232975,
            "unit": "ns/iter",
            "extra": "iterations: 8920\ncpu: 95864.01345291482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91884.43287612317,
            "unit": "ns/iter",
            "extra": "iterations: 9259\ncpu: 91883.85354789933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199068.5265732685,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 199060.72937513908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1594083.2435677727,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1594008.5763293274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1271628.7956104786,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1271557.2016460926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1272706.3365252998,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1272682.0793433671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1261069.3297150265,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1261006.919945724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 690062.2496274094,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 690020.4918032793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1225273.7470198886,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1225199.6026490054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32533.575904661386,
            "unit": "ns/iter",
            "extra": "iterations: 25341\ncpu: 32532.11791168467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155553.1529750096,
            "unit": "ns/iter",
            "extra": "iterations: 5563\ncpu: 155543.501707712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 119045.95944636586,
            "unit": "ns/iter",
            "extra": "iterations: 7225\ncpu: 119040.58131487897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119998.71442494543,
            "unit": "ns/iter",
            "extra": "iterations: 7182\ncpu: 119990.37872458922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 114456.42043932504,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 114449.24993302993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211845.15888535982,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 211831.99706673095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1637818.3884006613,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1637732.3374340949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1301358.95258019,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1301280.8926080917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1304050.0181818018,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1303994.4055944039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1279782.0865385137,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1279719.3681318697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 720637.6194895437,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 720606.5738592407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1257843.2981029272,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1257767.4796748047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5981078.705128212,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5980857.051282029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2708832.645348752,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2708793.023255817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25001.281036835182,
            "unit": "ns/iter",
            "extra": "iterations: 32985\ncpu: 25000.133393967146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 119996.40307048039,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 119994.75226796945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92247.95910900741,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 92244.59270418636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 91861.49572009381,
            "unit": "ns/iter",
            "extra": "iterations: 9346\ncpu: 91860.92445966178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 88678.20215187168,
            "unit": "ns/iter",
            "extra": "iterations: 9666\ncpu: 88674.91206290053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 181823.8704597927,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 181822.59080411578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1613828.4369602473,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1613791.8825561395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1265840.0339674049,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1265830.4347826054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1271316.3091655646,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1271234.3365253091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1256715.3423180608,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1256708.625336919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 683449.5377289709,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 683422.4175824218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1228494.0288713858,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 1228484.6456692836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2637.8547794672863,
            "unit": "ns/iter",
            "extra": "iterations: 265176\ncpu: 2637.7356925211984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17276.05452865005,
            "unit": "ns/iter",
            "extra": "iterations: 42198\ncpu: 17275.89933172183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13070.47917993977,
            "unit": "ns/iter",
            "extra": "iterations: 53362\ncpu: 13070.089202053905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12886.602813832753,
            "unit": "ns/iter",
            "extra": "iterations: 54161\ncpu: 12886.390576244907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10143.699227373398,
            "unit": "ns/iter",
            "extra": "iterations: 68856\ncpu: 10143.422504937771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63228.29012736173,
            "unit": "ns/iter",
            "extra": "iterations: 11071\ncpu: 63226.411344955195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110774.50458136023,
            "unit": "ns/iter",
            "extra": "iterations: 6330\ncpu: 110773.53870458165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27270.362659189177,
            "unit": "ns/iter",
            "extra": "iterations: 25677\ncpu: 27268.96444288663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27585.30970178693,
            "unit": "ns/iter",
            "extra": "iterations: 25418\ncpu: 27585.06570147129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27038.404939223496,
            "unit": "ns/iter",
            "extra": "iterations: 25915\ncpu: 27037.12135828682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54642.56032672044,
            "unit": "ns/iter",
            "extra": "iterations: 12855\ncpu: 54642.06145468722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51281.08795957197,
            "unit": "ns/iter",
            "extra": "iterations: 13654\ncpu: 51280.342756701546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20839.287689150722,
            "unit": "ns/iter",
            "extra": "iterations: 33637\ncpu: 20839.102773730956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100035.05393835591,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 100033.9469178066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81910.75995330286,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 81908.11441914781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82877.34465154729,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 82876.54042502645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82043.17762695909,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 82041.20056166641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 128016.6629439736,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128015.39729036817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 484971.98889659246,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 484951.2838306788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 398401.4635950172,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 398396.81456200226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 394705.30180180044,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 394685.6418918962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 392399.70353734086,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 392390.6793935968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 255278.56496136027,
            "unit": "ns/iter",
            "extra": "iterations: 2717\ncpu: 255271.03422892757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 392257.9615813083,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 392258.63028952706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21586.758674931985,
            "unit": "ns/iter",
            "extra": "iterations: 32421\ncpu: 21586.194133431844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103857.8869294597,
            "unit": "ns/iter",
            "extra": "iterations: 6748\ncpu: 103855.83876704388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85529.44965702776,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 85526.78833904942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85874.77039126812,
            "unit": "ns/iter",
            "extra": "iterations: 8153\ncpu: 85872.51318533008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84957.28327272556,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 84955.78181818205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124421.32805832135,
            "unit": "ns/iter",
            "extra": "iterations: 5624\ncpu: 124413.42460881911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483118.81830789667,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 483107.9750346746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 397580.8109028735,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 397577.399204999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 398380.4051136146,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 398367.1022727251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 393328.3079080357,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 393324.84576556174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255883.14957735504,
            "unit": "ns/iter",
            "extra": "iterations: 2721\ncpu: 255874.67842704945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 394207.02638965246,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 394203.0881527202 ns\nthreads: 1"
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
        "date": 1702391786663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6864.298128132506,
            "unit": "ns/iter",
            "extra": "iterations: 102144\ncpu: 6863.73355263158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57830.41268826409,
            "unit": "ns/iter",
            "extra": "iterations: 14076\ncpu: 57824.438761011654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91583.01644069595,
            "unit": "ns/iter",
            "extra": "iterations: 9367\ncpu: 91578.40290381122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132951.93422880926,
            "unit": "ns/iter",
            "extra": "iterations: 6477\ncpu: 132941.70140497142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174784.3825964064,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 174776.92307692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216829.02977977198,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 216811.03603603618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258481.37003879336,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 258473.4706057891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 301615.6757785384,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 301607.4394463667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 340349.7411903074,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 340346.94596711034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5726.715107655804,
            "unit": "ns/iter",
            "extra": "iterations: 122706\ncpu: 5726.462438674559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4607.828764229149,
            "unit": "ns/iter",
            "extra": "iterations: 151452\ncpu: 4607.602408683949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4631.934858305487,
            "unit": "ns/iter",
            "extra": "iterations: 151347\ncpu: 4631.61212313425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4644.100586733952,
            "unit": "ns/iter",
            "extra": "iterations: 150835\ncpu: 4643.7299035369715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7192.856226221037,
            "unit": "ns/iter",
            "extra": "iterations: 97250\ncpu: 7192.338303341894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26979.46819951311,
            "unit": "ns/iter",
            "extra": "iterations: 30314\ncpu: 26978.50828000266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128811.87726932029,
            "unit": "ns/iter",
            "extra": "iterations: 6665\ncpu: 128802.26556639191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100836.99599103733,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 100832.4607947175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100644.32656674374,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 100639.67898029009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98223.25853154101,
            "unit": "ns/iter",
            "extra": "iterations: 8703\ncpu: 98220.75146501216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207290.60432155398,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 207286.75650557652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1601854.5972222853,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1601811.2847222234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1274362.9793672215,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1274274.828060523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1277607.8885831858,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1277549.7936726254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1265327.435374129,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1265201.4965986393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 694982.8545727478,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 694952.9235382307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1232124.7612731745,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1232037.7984084904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33469.37987329364,
            "unit": "ns/iter",
            "extra": "iterations: 24624\ncpu: 33467.73473034447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161412.02924527664,
            "unit": "ns/iter",
            "extra": "iterations: 5300\ncpu: 161403.5283018869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125664.43876355301,
            "unit": "ns/iter",
            "extra": "iterations: 6826\ncpu: 125658.86317023108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125599.81773112007,
            "unit": "ns/iter",
            "extra": "iterations: 6858\ncpu: 125593.51122776307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123478.67889907866,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 123474.98566513775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 221072.45870394446,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 221059.3646759839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1647740.4109347742,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1647629.8059964678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1307827.1820728893,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1307730.8123249281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1304596.0308555274,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1304504.6283309942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1283784.451034472,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1283731.1724137894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 729203.1412872908,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 729154.9450549462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1261051.377204893,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1260984.1248303857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5979867.490322571,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 5979422.580645128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2688170.4841499515,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2688038.0403458313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25894.901423981308,
            "unit": "ns/iter",
            "extra": "iterations: 31742\ncpu: 25893.220338982872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125007.04702466947,
            "unit": "ns/iter",
            "extra": "iterations: 6890\ncpu: 125003.07692307654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98977.05961028473,
            "unit": "ns/iter",
            "extra": "iterations: 8673\ncpu: 98968.05027095588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99004.15905167189,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 98998.36574979826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94067.23480359373,
            "unit": "ns/iter",
            "extra": "iterations: 9114\ncpu: 94059.03006363809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189757.20792294986,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 189751.039614796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1623990.9495651694,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1623879.4782608661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1279531.9069767264,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1279480.164158684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1278556.0657534169,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1278460.1369863085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1269362.5959183832,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1269310.7482993186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 688814.7112259994,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 688755.2437223061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1234688.564238394,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1234621.5894039774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2615.3259181902263,
            "unit": "ns/iter",
            "extra": "iterations: 267156\ncpu: 2615.1188818517853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16745.522070778497,
            "unit": "ns/iter",
            "extra": "iterations: 41820\ncpu: 16744.892395982744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13108.98017304092,
            "unit": "ns/iter",
            "extra": "iterations: 53513\ncpu: 13107.699063778904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12940.290646497833,
            "unit": "ns/iter",
            "extra": "iterations: 54076\ncpu: 12939.781048894145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10124.670860842423,
            "unit": "ns/iter",
            "extra": "iterations: 69223\ncpu: 10124.200049116558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65608.26738925806,
            "unit": "ns/iter",
            "extra": "iterations: 10610\ncpu: 65608.48256361925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112764.94946081165,
            "unit": "ns/iter",
            "extra": "iterations: 6213\ncpu: 112760.06760019374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27687.598130473194,
            "unit": "ns/iter",
            "extra": "iterations: 25247\ncpu: 27687.289578959953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27575.911665094653,
            "unit": "ns/iter",
            "extra": "iterations: 25392\ncpu: 27575.31505986161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27338.500272673376,
            "unit": "ns/iter",
            "extra": "iterations: 25672\ncpu: 27338.59068245573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54640.57200811058,
            "unit": "ns/iter",
            "extra": "iterations: 12818\ncpu: 54640.77859260383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51977.488553595496,
            "unit": "ns/iter",
            "extra": "iterations: 13454\ncpu: 51977.01798721526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20670.454110559065,
            "unit": "ns/iter",
            "extra": "iterations: 33864\ncpu: 20669.776163477385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100790.88208159167,
            "unit": "ns/iter",
            "extra": "iterations: 6937\ncpu: 100788.5829609341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82603.27219144757,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82603.58363786459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84947.88650860386,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 84948.20074617918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83347.41335075987,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 83346.28815773832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126493.46448581964,
            "unit": "ns/iter",
            "extra": "iterations: 5533\ncpu: 126493.76468461889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 488364.0706860623,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 488359.11295911286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 404427.87536069594,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 404423.4275822206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 399649.1364934211,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 399650.65676755825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 402536.7370540937,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 402532.27848101815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254768.80058221365,
            "unit": "ns/iter",
            "extra": "iterations: 2748\ncpu: 254769.50509461353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 394517.9651097011,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 394513.7310073148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21666.151983945627,
            "unit": "ns/iter",
            "extra": "iterations: 32385\ncpu: 21666.194225721578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105266.98557042117,
            "unit": "ns/iter",
            "extra": "iterations: 6653\ncpu: 105265.89508492379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86053.2326525597,
            "unit": "ns/iter",
            "extra": "iterations: 8128\ncpu: 86051.5255905509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86770.58833682074,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 86770.84206632999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86419.4965986485,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 86411.04514533053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126819.40550326569,
            "unit": "ns/iter",
            "extra": "iterations: 5524\ncpu: 126818.12092686583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 485564.8393602391,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 485534.77051460533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 400281.21031516686,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 400265.78796561545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 400835.7721808738,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 400812.8219805308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 396608.01358999306,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 396568.40317100496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255091.44549763264,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 255072.6576740776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 395483.01975169306,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 395466.81715575693 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396447266,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6981.190328605013,
            "unit": "ns/iter",
            "extra": "iterations: 100668\ncpu: 6980.754559542259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51126.30879999643,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51122.16999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93787.15521016333,
            "unit": "ns/iter",
            "extra": "iterations: 9136\ncpu: 93782.65105078807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136618.14850071265,
            "unit": "ns/iter",
            "extra": "iterations: 6303\ncpu: 136613.29525622714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180959.4898086699,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 180952.87021630618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222483.62673878082,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 222467.36218444095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265787.40189776826,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 265772.88031833497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309342.51599147293,
            "unit": "ns/iter",
            "extra": "iterations: 2814\ncpu: 309315.6005685858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351581.77315000043,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 351560.45289122564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5766.568441691146,
            "unit": "ns/iter",
            "extra": "iterations: 121388\ncpu: 5766.322865522116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4762.849135974875,
            "unit": "ns/iter",
            "extra": "iterations: 147623\ncpu: 4762.47806913557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4750.573998171091,
            "unit": "ns/iter",
            "extra": "iterations: 147605\ncpu: 4750.502354256295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4724.727399381893,
            "unit": "ns/iter",
            "extra": "iterations: 147861\ncpu: 4724.498008264513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7162.974592954026,
            "unit": "ns/iter",
            "extra": "iterations: 97532\ncpu: 7163.010088996428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27408.30971439788,
            "unit": "ns/iter",
            "extra": "iterations: 30357\ncpu: 27407.85650756003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128423.41564647159,
            "unit": "ns/iter",
            "extra": "iterations: 6698\ncpu: 128419.36398925066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101523.69659992837,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 101515.61426371276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101210.25221814764,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 101211.04933159846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98894.630641055,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98891.1941680165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205102.5081440867,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 205098.25648084437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1656863.8612098198,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1656729.3594306028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1311570.2891395616,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311552.7503526045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1308075.5387870132,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1308018.4767277837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1290863.11543813,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1290827.121001389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 708943.1113670801,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 708901.3824884801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1257763.4667571294,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1257722.3880597022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33825.11023750057,
            "unit": "ns/iter",
            "extra": "iterations: 24547\ncpu: 33823.27779362037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172744.97233048853,
            "unit": "ns/iter",
            "extra": "iterations: 5132\ncpu: 172736.37957911135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126376.8281135182,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 126368.59285399213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125731.38455925249,
            "unit": "ns/iter",
            "extra": "iterations: 6852\ncpu: 125730.89608873296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 122196.29532869384,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 122182.90501206872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217614.46422294198,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 217601.80768265197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1693737.731397423,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1693623.4119782306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1337829.4086329895,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1337754.244604317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1561193.6199999424,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1561003.1428571397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1316710.01980194,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1316576.803394628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 745085.6466826978,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 745049.8800959217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1287798.981944535,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1287714.7222222143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6101167.549019795,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6100767.973856192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2762584.0624999395,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2762466.562499988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26227.893070430793,
            "unit": "ns/iter",
            "extra": "iterations: 31647\ncpu: 26227.7719847062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126218.50607168324,
            "unit": "ns/iter",
            "extra": "iterations: 6835\ncpu: 126214.10387710291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99001.46072211939,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 98998.38505017919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98653.59725086404,
            "unit": "ns/iter",
            "extra": "iterations: 8730\ncpu: 98649.33562428394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96407.12875632582,
            "unit": "ns/iter",
            "extra": "iterations: 8885\ncpu: 96403.89420371453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187452.31287812418,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 187444.81417458958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1660992.8201438647,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1660927.3381294894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1305064.2346368732,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1305012.1508379881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1301019.6230875845,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1300995.9666203028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1287187.7241380797,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1287141.1034482718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 705086.510976525,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 705058.440575323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1257749.2138024303,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1257688.7686062225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2617.0342578891923,
            "unit": "ns/iter",
            "extra": "iterations: 267588\ncpu: 2617.0007623660154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17426.702385967343,
            "unit": "ns/iter",
            "extra": "iterations: 40361\ncpu: 17423.559872153895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13728.143174012395,
            "unit": "ns/iter",
            "extra": "iterations: 50945\ncpu: 13727.4570615369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13668.97991708727,
            "unit": "ns/iter",
            "extra": "iterations: 51138\ncpu: 13667.237670616798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10052.839829257598,
            "unit": "ns/iter",
            "extra": "iterations: 69813\ncpu: 10052.91994327695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65626.16688494755,
            "unit": "ns/iter",
            "extra": "iterations: 10690\ncpu: 65625.53788587416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114284.43020594871,
            "unit": "ns/iter",
            "extra": "iterations: 6118\ncpu: 114280.84341287962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27922.75415202785,
            "unit": "ns/iter",
            "extra": "iterations: 25048\ncpu: 27921.917917598264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27818.841610950407,
            "unit": "ns/iter",
            "extra": "iterations: 25128\ncpu: 27817.351162050163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27615.81016074514,
            "unit": "ns/iter",
            "extra": "iterations: 25195\ncpu: 27615.403849970404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55207.58677165737,
            "unit": "ns/iter",
            "extra": "iterations: 12700\ncpu: 55204.29133858239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52369.016455982564,
            "unit": "ns/iter",
            "extra": "iterations: 13369\ncpu: 52367.33487919817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20765.007497993276,
            "unit": "ns/iter",
            "extra": "iterations: 33609\ncpu: 20764.173286917387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101078.64362009142,
            "unit": "ns/iter",
            "extra": "iterations: 6928\ncpu: 101079.46016166429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84244.68546351009,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 84243.72971023276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84283.20399565817,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 84274.87062221683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83790.98587840323,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 83787.31450454843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127037.86615748091,
            "unit": "ns/iter",
            "extra": "iterations: 5499\ncpu: 127027.65957447025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 494409.7333805397,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 494400.4950495054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 407673.8719441649,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 407653.7252619306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 404948.6601156077,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 404930.6358381506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 402153.8349626005,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 402157.10178263095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 259475.26037035222,
            "unit": "ns/iter",
            "extra": "iterations: 2700\ncpu: 259477.1851851855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 398788.3500604671,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 398785.3083434086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21801.42266153627,
            "unit": "ns/iter",
            "extra": "iterations: 32222\ncpu: 21800.713798026318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105498.61080998812,
            "unit": "ns/iter",
            "extra": "iterations: 6642\ncpu: 105496.46190906248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86898.81784385686,
            "unit": "ns/iter",
            "extra": "iterations: 8070\ncpu: 86896.84014869851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87867.93696740882,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 87863.75939849658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87608.9190434618,
            "unit": "ns/iter",
            "extra": "iterations: 8029\ncpu: 87608.55648275025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 125263.4750985296,
            "unit": "ns/iter",
            "extra": "iterations: 5582\ncpu: 125261.41168040357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 493670.22832979955,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 493657.92811839184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 408350.45332557935,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 408333.2555425917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 406693.3736964128,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 406674.62340672413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 400742.5134516534,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 400725.7012020603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260727.9363365751,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 260710.61057334676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 400115.93792710634,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 400096.46924828435 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}