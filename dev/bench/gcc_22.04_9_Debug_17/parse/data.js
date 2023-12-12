window.BENCHMARK_DATA = {
  "lastUpdate": 1702398819523,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-9 22.04 Debug c++-17": [
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
        "date": 1702398819219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6830.560243783792,
            "unit": "ns/iter",
            "extra": "iterations: 102550\ncpu: 6830.138469039494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57573.41371525827,
            "unit": "ns/iter",
            "extra": "iterations: 14174\ncpu: 57571.151403979115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91621.0356762532,
            "unit": "ns/iter",
            "extra": "iterations: 9390\ncpu: 91617.32694355698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132555.22669132784,
            "unit": "ns/iter",
            "extra": "iterations: 6489\ncpu: 132544.70642625983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175845.4044444318,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 175836.18181818194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217094.08849336996,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 217081.49912258715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258082.12243073125,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 258080.96514745321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299668.97477540054,
            "unit": "ns/iter",
            "extra": "iterations: 2894\ncpu: 299651.5203870078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341332.61677829403,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 341312.80031508487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5695.3773084280465,
            "unit": "ns/iter",
            "extra": "iterations: 122865\ncpu: 5695.179261791401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4730.598846105749,
            "unit": "ns/iter",
            "extra": "iterations: 145074\ncpu: 4729.8840591697935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4658.968937835434,
            "unit": "ns/iter",
            "extra": "iterations: 150730\ncpu: 4658.633317853116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4667.349892456092,
            "unit": "ns/iter",
            "extra": "iterations: 149706\ncpu: 4667.034721387254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7100.9732829833065,
            "unit": "ns/iter",
            "extra": "iterations: 98776\ncpu: 7100.561877379123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25971.28140992708,
            "unit": "ns/iter",
            "extra": "iterations: 31264\ncpu: 25968.96110542481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125855.03309415844,
            "unit": "ns/iter",
            "extra": "iterations: 6829\ncpu: 125846.71254942154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98291.93285122915,
            "unit": "ns/iter",
            "extra": "iterations: 8712\ncpu: 98284.67630853989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98901.2283500985,
            "unit": "ns/iter",
            "extra": "iterations: 8649\ncpu: 98897.13261648727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95497.34788464812,
            "unit": "ns/iter",
            "extra": "iterations: 8911\ncpu: 95489.17068791381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204820.23220455897,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 204799.37802349686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1636253.7539542706,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1636194.7275922683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1284283.8437067268,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1284254.495159062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1292231.7409971745,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1292174.0997229891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1265352.5517711192,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1265308.583106266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 708809.1314984253,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 708787.5382262982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1244117.2673797784,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1244096.3903743327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32768.67406639884,
            "unit": "ns/iter",
            "extra": "iterations: 25091\ncpu: 32767.175481248258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 154925.45317816245,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 154922.07699194291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122881.93734801553,
            "unit": "ns/iter",
            "extra": "iterations: 6991\ncpu: 122878.64397081973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122974.00786162043,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 122971.16923956566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118597.84834189934,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 118589.08006105154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217767.6374401658,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 217752.58251448767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1663615.510714221,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1663501.607142859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1314696.4604519675,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1314631.920903954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1319147.797163162,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1319045.390070921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1293989.6258692376,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1293903.337969407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 732660.511041042,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 732609.4637223979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1270164.2946793798,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1270090.4502046448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6011900.199999423,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6011445.8064516485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2733499.419354612,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2733248.38709676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24970.699487522386,
            "unit": "ns/iter",
            "extra": "iterations: 32977\ncpu: 24969.25129635807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125506.27038004954,
            "unit": "ns/iter",
            "extra": "iterations: 6894\ncpu: 125497.5485929799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94571.73859012761,
            "unit": "ns/iter",
            "extra": "iterations: 9093\ncpu: 94564.91806884384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94793.82354880897,
            "unit": "ns/iter",
            "extra": "iterations: 9096\ncpu: 94786.89533861032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92209.12933347933,
            "unit": "ns/iter",
            "extra": "iterations: 9317\ncpu: 92204.37909198194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 187080.0224816347,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 187065.6074362291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1639524.6954223928,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1639411.6197183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1284501.2310867694,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1284419.1196698744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1290061.5159059488,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1290004.7026279375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1284021.1791045405,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1283811.397557663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 701858.4577038732,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 701818.2024169196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1244667.58744983,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1244611.2149532703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2643.2778353988638,
            "unit": "ns/iter",
            "extra": "iterations: 264178\ncpu: 2643.140988273063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17006.51197008709,
            "unit": "ns/iter",
            "extra": "iterations: 41186\ncpu: 17005.329480891538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14107.474763503104,
            "unit": "ns/iter",
            "extra": "iterations: 49789\ncpu: 14106.503444535976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13946.44218893088,
            "unit": "ns/iter",
            "extra": "iterations: 50198\ncpu: 13945.330491254625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10128.254477223541,
            "unit": "ns/iter",
            "extra": "iterations: 69016\ncpu: 10127.993508751615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64772.83476652322,
            "unit": "ns/iter",
            "extra": "iterations: 10815\ncpu: 64772.63060564035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112174.99134615467,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 112171.12179487242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27072.21967327122,
            "unit": "ns/iter",
            "extra": "iterations: 25893\ncpu: 27071.621673811547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27412.016961796504,
            "unit": "ns/iter",
            "extra": "iterations: 25469\ncpu: 27410.467627311584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27342.79733146572,
            "unit": "ns/iter",
            "extra": "iterations: 25707\ncpu: 27342.64208192335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54995.96130346353,
            "unit": "ns/iter",
            "extra": "iterations: 12766\ncpu: 54994.18768604078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51391.3116654468,
            "unit": "ns/iter",
            "extra": "iterations: 13630\ncpu: 51389.728539984986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20251.75900581631,
            "unit": "ns/iter",
            "extra": "iterations: 34561\ncpu: 20251.3902954194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103366.06868538668,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 103362.96898079626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83711.00862378911,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 83710.62402682893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83022.79506641347,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 83019.98339658587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81938.40893671631,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 81936.48379927444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122884.74281122476,
            "unit": "ns/iter",
            "extra": "iterations: 5599\ncpu: 122882.28255045388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 491019.1716888504,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 491017.1688857756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 401770.1283668232,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 401758.68194842973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 407266.8552325684,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 407255.46511627437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 395641.69535676646,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 395635.7304643315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 255023.3865119406,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 255022.40754169947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 395741.05825791607,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 395723.52941176074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21311.74300331933,
            "unit": "ns/iter",
            "extra": "iterations: 32837\ncpu: 21311.212960988774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105118.94871793721,
            "unit": "ns/iter",
            "extra": "iterations: 6669\ncpu: 105116.52421652254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86411.14701528872,
            "unit": "ns/iter",
            "extra": "iterations: 8108\ncpu: 86410.8658115441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85715.3262939364,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85712.59765624908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84966.9587478782,
            "unit": "ns/iter",
            "extra": "iterations: 8242\ncpu: 84964.66876971516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126484.18798345217,
            "unit": "ns/iter",
            "extra": "iterations: 5559\ncpu: 126480.24824608739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 487153.4316596952,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487151.25523013336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 399771.1038812758,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 399759.13242009166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 404059.6200923644,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 404050.2886835999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 396484.75510208594,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 396477.32426304085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 254204.8518518334,
            "unit": "ns/iter",
            "extra": "iterations: 2754\ncpu: 254204.1031227302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 394483.6634723636,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 394464.7688838799 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}