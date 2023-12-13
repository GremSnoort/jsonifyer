window.BENCHMARK_DATA = {
  "lastUpdate": 1702490785750,
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
        "date": 1702409097363,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7083.061371366275,
            "unit": "ns/iter",
            "extra": "iterations: 98792\ncpu: 7082.40849461495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52693.060499996136,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52693.100000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97156.71012844967,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 97155.14379902242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141793.96590909353,
            "unit": "ns/iter",
            "extra": "iterations: 6072\ncpu: 141784.00856389987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 186618.47672413304,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 186613.55603448275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 230331.33989886174,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 230327.41549108332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 275503.38989513234,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 275494.280266921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 319676.362062622,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 319660.220994475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 363714.663179911,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 363694.7698744772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6000.999261828033,
            "unit": "ns/iter",
            "extra": "iterations: 116504\ncpu: 6000.903831628091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4786.685351963768,
            "unit": "ns/iter",
            "extra": "iterations: 145569\ncpu: 4786.38927244125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4934.366897693391,
            "unit": "ns/iter",
            "extra": "iterations: 142552\ncpu: 4934.167882597227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4787.374454492203,
            "unit": "ns/iter",
            "extra": "iterations: 146194\ncpu: 4787.373626824618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7166.678377313013,
            "unit": "ns/iter",
            "extra": "iterations: 96408\ncpu: 7166.669778441612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25608.493009906742,
            "unit": "ns/iter",
            "extra": "iterations: 32403\ncpu: 25607.44992747587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125183.20459837091,
            "unit": "ns/iter",
            "extra": "iterations: 6872\ncpu: 125176.96449359755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96942.43360618508,
            "unit": "ns/iter",
            "extra": "iterations: 8796\ncpu: 96938.35834470185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 97408.79523429608,
            "unit": "ns/iter",
            "extra": "iterations: 8771\ncpu: 97407.18276137258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94273.27519294377,
            "unit": "ns/iter",
            "extra": "iterations: 9070\ncpu: 94270.23153252485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201584.17434507626,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 201573.03523035202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1726685.4259259144,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1726604.2592592558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1355918.5956204347,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1355898.2481751814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1362256.2704309113,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1362192.7191679042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1352831.1918604604,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1352761.773255813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 724789.904463577,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 724756.1472200487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1305917.5267605502,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1305893.3802816907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32753.60164889539,
            "unit": "ns/iter",
            "extra": "iterations: 25229\ncpu: 32752.447580165648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157187.86658078153,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 157184.15531836584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122697.90532798375,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 122690.67602406217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122049.73486578927,
            "unit": "ns/iter",
            "extra": "iterations: 7004\ncpu: 122047.44431753285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119467.45450745136,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 119459.81607914179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217005.30670362615,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 216994.2036290329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1759320.0660376984,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1759230.943396222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1394516.462797651,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1394493.8988095236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1399380.4969969457,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1399339.9399399417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1369161.245227547,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1369104.4052863389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 753259.1768045753,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 753249.7972424958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1332521.2926829632,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1332449.210903874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6220446.22818808,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6220089.261744966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2850515.6840490117,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2850115.337423304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24433.866980161558,
            "unit": "ns/iter",
            "extra": "iterations: 34025\ncpu: 24432.414401175618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123706.10309575801,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 123691.5622750186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95242.5258658929,
            "unit": "ns/iter",
            "extra": "iterations: 9008\ncpu: 95234.21403197115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95469.33570871796,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 95457.85547266516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91536.48404312256,
            "unit": "ns/iter",
            "extra": "iterations: 9369\ncpu: 91531.81769665885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 184684.58251807772,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 184658.23054019542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1732311.2137545925,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732148.8847583567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1364586.0262773654,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1364454.1605839364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1367936.067349926,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1367874.0849194725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1340852.1510790961,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1340675.1079136662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 720151.5108191902,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 720100.0772797527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1305138.7223001402,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1304987.938288916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2699.223796229808,
            "unit": "ns/iter",
            "extra": "iterations: 260411\ncpu: 2699.087596146094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16408.27381064387,
            "unit": "ns/iter",
            "extra": "iterations: 42544\ncpu: 16406.586122602486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13809.84131990365,
            "unit": "ns/iter",
            "extra": "iterations: 50731\ncpu: 13808.72839092469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13690.77566569659,
            "unit": "ns/iter",
            "extra": "iterations: 51187\ncpu: 13688.922968722567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10284.762241462795,
            "unit": "ns/iter",
            "extra": "iterations: 68027\ncpu: 10284.611992297177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64542.95976059039,
            "unit": "ns/iter",
            "extra": "iterations: 10860\ncpu: 64536.832412523196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117878.11446393051,
            "unit": "ns/iter",
            "extra": "iterations: 5932\ncpu: 117867.59946055317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28452.45386117724,
            "unit": "ns/iter",
            "extra": "iterations: 24578\ncpu: 28450.610301896253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28760.961734693705,
            "unit": "ns/iter",
            "extra": "iterations: 24304\ncpu: 28758.895655036118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28362.809548897945,
            "unit": "ns/iter",
            "extra": "iterations: 24673\ncpu: 28361.20455558711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56163.11912098379,
            "unit": "ns/iter",
            "extra": "iterations: 12332\ncpu: 56155.88712293224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53633.291845492044,
            "unit": "ns/iter",
            "extra": "iterations: 13048\ncpu: 53628.15757204175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20594.35153523482,
            "unit": "ns/iter",
            "extra": "iterations: 34099\ncpu: 20591.51588023101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102352.2100102409,
            "unit": "ns/iter",
            "extra": "iterations: 6833\ncpu: 102352.14400702462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83914.455331417,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 83907.85302593614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86595.33370383817,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 86585.85896010957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83897.04345224056,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 83888.34091453145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127319.18840842623,
            "unit": "ns/iter",
            "extra": "iterations: 5504\ncpu: 127298.09229650944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 510907.10503279895,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 510905.9810357453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 421360.7300060272,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 421317.07757065084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 426179.1161800342,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426132.725060823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 415674.4353782074,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 415619.3567599765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 263653.4708994617,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 263638.0952380974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 411424.73954035377,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 411380.6717737138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21867.965546402742,
            "unit": "ns/iter",
            "extra": "iterations: 31927\ncpu: 21866.03188523801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108837.19906614856,
            "unit": "ns/iter",
            "extra": "iterations: 6425\ncpu: 108822.63035019528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88898.13131184777,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 88891.70261355008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88495.82880262834,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 88490.22632444165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88051.18320322578,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 88044.2331906316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127645.12638864112,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 127633.3090511745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 515274.9573529083,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515191.9852941108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 421985.2630944856,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 421960.98735701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 422651.59008466103,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 422651.0278113677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 413979.6058091935,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 413967.1606401956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 263370.7482122318,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 263370.2672186677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 414186.61163892207,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 414173.8717339727 ns\nthreads: 1"
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
        "date": 1702412532240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7115.782746399711,
            "unit": "ns/iter",
            "extra": "iterations: 98194\ncpu: 7115.640466830967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51774.41280000039,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51771.79000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95684.9201157098,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 95681.74232309745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139202.22207876312,
            "unit": "ns/iter",
            "extra": "iterations: 6196\ncpu: 139198.03098773406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183541.77577429422,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 183540.22061943146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226948.6549646332,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 226939.35027508537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270939.4107922674,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 270933.4684965689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 314526.0445813577,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 314515.3678869157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357346.2230895486,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 357334.88085456024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5805.460291707099,
            "unit": "ns/iter",
            "extra": "iterations: 120806\ncpu: 5805.226561594618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4868.630603983781,
            "unit": "ns/iter",
            "extra": "iterations: 144027\ncpu: 4868.587834225531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4846.28148944211,
            "unit": "ns/iter",
            "extra": "iterations: 121898\ncpu: 4845.784180216252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4787.047423831734,
            "unit": "ns/iter",
            "extra": "iterations: 146846\ncpu: 4786.7316780845285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7330.155739844957,
            "unit": "ns/iter",
            "extra": "iterations: 95743\ncpu: 7329.687810074898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25023.300530766817,
            "unit": "ns/iter",
            "extra": "iterations: 32406\ncpu: 25022.023699314956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127886.85429379051,
            "unit": "ns/iter",
            "extra": "iterations: 6719\ncpu: 127879.99702336652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 98578.39642238847,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 98575.06058857481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102393.24424985252,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 102387.12200817282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96657.5039574852,
            "unit": "ns/iter",
            "extra": "iterations: 8844\ncpu: 96652.81546811399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 216926.39863381084,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 216912.34447426174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1712894.614963492,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1712820.2554744536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1346025.7724637398,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1345955.3623188408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1347157.3439767936,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1347095.9361393307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1329073.2593123594,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1329003.0085959914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 734724.4566427665,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 734700.1591089889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1300740.1834733312,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1300695.0980392187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32448.184124224783,
            "unit": "ns/iter",
            "extra": "iterations: 25309\ncpu: 32447.69054486539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160598.40695942857,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 160591.03088946725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125388.18313953008,
            "unit": "ns/iter",
            "extra": "iterations: 6880\ncpu: 125383.54651162779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123072.82196861517,
            "unit": "ns/iter",
            "extra": "iterations: 7010\ncpu: 123065.44935805953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119261.07107162749,
            "unit": "ns/iter",
            "extra": "iterations: 7204\ncpu: 119257.17656857343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226662.6164705812,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 226647.52941176514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1792194.0739371937,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1792113.8632162698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1361592.7115665893,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1361513.7628111206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1371895.0691176031,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1371821.4705882408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1353853.4148471402,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1353793.7409024802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 760157.5040782929,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 760116.9657422537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1314531.659604468,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1314448.7288135556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6200352.8344369605,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6200079.470198707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2866189.8765431326,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2866103.70370369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23662.29832102403,
            "unit": "ns/iter",
            "extra": "iterations: 34664\ncpu: 23661.2941380106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125587.14837959592,
            "unit": "ns/iter",
            "extra": "iterations: 6881\ncpu: 125583.6215666331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97748.2595603322,
            "unit": "ns/iter",
            "extra": "iterations: 8734\ncpu: 97744.35539271825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96996.30751785268,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 96994.02426579015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93361.28642456126,
            "unit": "ns/iter",
            "extra": "iterations: 9252\ncpu: 93357.1660181581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198164.39388406498,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 198157.18849840172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1702451.087431739,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1702388.1602914352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1332889.7360115843,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1332827.5466284046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1339420.8091821875,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1339354.3758966965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1320966.620056491,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1320930.9322033965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 728208.1229444372,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 728170.007830855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1286311.7199999422,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1286272.5517241373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2649.632944450204,
            "unit": "ns/iter",
            "extra": "iterations: 263061\ncpu: 2649.5117102116933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16703.835584724733,
            "unit": "ns/iter",
            "extra": "iterations: 41900\ncpu: 16703.298329355544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13304.086517046619,
            "unit": "ns/iter",
            "extra": "iterations: 52533\ncpu: 13303.405478461062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14262.9120154038,
            "unit": "ns/iter",
            "extra": "iterations: 53498\ncpu: 14262.407940483714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10354.612698648207,
            "unit": "ns/iter",
            "extra": "iterations: 67645\ncpu: 10354.265651563392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66864.63899742176,
            "unit": "ns/iter",
            "extra": "iterations: 10493\ncpu: 66862.70847231493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114921.11321065245,
            "unit": "ns/iter",
            "extra": "iterations: 6086\ncpu: 114917.07196845267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28211.173527984294,
            "unit": "ns/iter",
            "extra": "iterations: 24728\ncpu: 28209.58427693282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28124.892074196734,
            "unit": "ns/iter",
            "extra": "iterations: 24906\ncpu: 28123.829599293615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27959.698976326083,
            "unit": "ns/iter",
            "extra": "iterations: 25008\ncpu: 27958.6092450417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57126.09307253021,
            "unit": "ns/iter",
            "extra": "iterations: 12270\ncpu: 57124.376528117406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50302.21154674294,
            "unit": "ns/iter",
            "extra": "iterations: 13926\ncpu: 50299.921011058155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21269.049678127405,
            "unit": "ns/iter",
            "extra": "iterations: 32932\ncpu: 21268.167739584533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103726.34365738809,
            "unit": "ns/iter",
            "extra": "iterations: 6748\ncpu: 103722.76229994158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84977.26573680375,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 84973.14736203685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84846.4398058234,
            "unit": "ns/iter",
            "extra": "iterations: 8240\ncpu: 84843.22815534125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84230.67027547873,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 84226.71718994348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127552.66441974635,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 127547.20349790713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 502536.22763062053,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 502514.817466006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 413580.52544382133,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 413553.3727810643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 415077.44925815455,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415061.24629080854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 406684.76477406325,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 406669.698725376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261486.60485980875,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 261473.90654205825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 406354.5881670691,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 406336.832946629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21927.51384932968,
            "unit": "ns/iter",
            "extra": "iterations: 31951\ncpu: 21926.731557697713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108013.04308880042,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 108009.38996139119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88557.76116212162,
            "unit": "ns/iter",
            "extra": "iterations: 7951\ncpu: 88509.75977864445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88008.19769046873,
            "unit": "ns/iter",
            "extra": "iterations: 7967\ncpu: 88005.57298857787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86985.68663195122,
            "unit": "ns/iter",
            "extra": "iterations: 8064\ncpu: 86982.47767857129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131852.16591676034,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 131843.86951631063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 501947.28919108637,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 501928.0601288492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 410955.9730204904,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 410944.1642228804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 414370.5813128401,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 414360.2602010646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 407713.67054710566,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 407702.38649592985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 263290.7131024302,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 263286.63403614063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 404489.24288202176,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 404475.130737943 ns\nthreads: 1"
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
        "date": 1702418346761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7063.437872038695,
            "unit": "ns/iter",
            "extra": "iterations: 98780\ncpu: 7063.258756833368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51492.94039999859,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51491.31999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94713.24746360502,
            "unit": "ns/iter",
            "extra": "iterations: 9068\ncpu: 94712.63784737534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137677.51683958858,
            "unit": "ns/iter",
            "extra": "iterations: 6265\ncpu: 137675.30726256987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181521.83957331246,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 181519.32650073207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224590.11154243644,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 224578.079710145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267509.1759088114,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 267501.97165742464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311577.4869502892,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 311569.9320700752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355202.2627291256,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 355191.8533604889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5951.514788114279,
            "unit": "ns/iter",
            "extra": "iterations: 116242\ncpu: 5951.427194989771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4881.157582955065,
            "unit": "ns/iter",
            "extra": "iterations: 143994\ncpu: 4881.145742183706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4860.153265793104,
            "unit": "ns/iter",
            "extra": "iterations: 144605\ncpu: 4860.000000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4821.605278690224,
            "unit": "ns/iter",
            "extra": "iterations: 144013\ncpu: 4821.377236777233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7449.035590858895,
            "unit": "ns/iter",
            "extra": "iterations: 94041\ncpu: 7448.931848874425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25625.347183604386,
            "unit": "ns/iter",
            "extra": "iterations: 32009\ncpu: 25624.924240057506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125529.16009382711,
            "unit": "ns/iter",
            "extra": "iterations: 6821\ncpu: 125526.06655915534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97472.30699851658,
            "unit": "ns/iter",
            "extra": "iterations: 8759\ncpu: 97469.50565132983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99324.42137634936,
            "unit": "ns/iter",
            "extra": "iterations: 8617\ncpu: 99321.43437391214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95746.25219713262,
            "unit": "ns/iter",
            "extra": "iterations: 8989\ncpu: 95742.51863388566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 218177.20205479764,
            "unit": "ns/iter",
            "extra": "iterations: 4088\ncpu: 218168.199608611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1676506.9764064818,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1676483.4845734998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1339184.596820823,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1339166.7630057817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1345297.9769120354,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1345271.717171715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1323751.9031338932,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1323731.7663817655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 743888.4811547413,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 743873.777064957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1291457.7955493212,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1291428.7899860947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34302.24910313009,
            "unit": "ns/iter",
            "extra": "iterations: 24251\ncpu: 34301.76075213399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157281.8189623639,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 157279.50310559015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123494.8178038967,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 123491.38474770622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122950.67970869072,
            "unit": "ns/iter",
            "extra": "iterations: 7003\ncpu: 122947.55104955008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119420.5182977583,
            "unit": "ns/iter",
            "extra": "iterations: 7214\ncpu: 119418.8383698368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 228640.95362319797,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 228637.52305665257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1721609.261111178,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1721497.4074074104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1363057.3704245884,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1363003.806734994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1365362.0957290349,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1365291.4580265102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1355553.286140075,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1355494.9329359187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 760763.0049180357,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 760713.7704918036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1317056.3790664528,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1316994.483734087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6244036.221476597,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6243620.134228205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3052242.501587443,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 3052196.8253968195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24178.628643628996,
            "unit": "ns/iter",
            "extra": "iterations: 34032\ncpu: 24178.443817583495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122867.60687679471,
            "unit": "ns/iter",
            "extra": "iterations: 6980\ncpu: 122865.60171919754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94571.93138766468,
            "unit": "ns/iter",
            "extra": "iterations: 9080\ncpu: 94570.75991189425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94662.20187328052,
            "unit": "ns/iter",
            "extra": "iterations: 9075\ncpu: 94659.9889807163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90867.92010173228,
            "unit": "ns/iter",
            "extra": "iterations: 9437\ncpu: 90865.44452686208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 201428.05602045773,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 201426.8944676888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1685437.129963974,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1685354.3321299602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1329032.0683761092,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1328971.9373219323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1335459.3590844201,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1335395.1359084467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1307029.7408963128,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1306974.5098039284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 727667.1272443519,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 727631.8501171008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1278880.094780277,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1278850.1373626413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2702.6404330016076,
            "unit": "ns/iter",
            "extra": "iterations: 259768\ncpu: 2702.6023220720112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17261.965921375344,
            "unit": "ns/iter",
            "extra": "iterations: 40700\ncpu: 17261.948402948387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13810.279076667288,
            "unit": "ns/iter",
            "extra": "iterations: 50556\ncpu: 13809.708046522685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13069.954019767603,
            "unit": "ns/iter",
            "extra": "iterations: 53523\ncpu: 13070.082020813523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 9656.459282215865,
            "unit": "ns/iter",
            "extra": "iterations: 72278\ncpu: 9655.974155344684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66624.74603174576,
            "unit": "ns/iter",
            "extra": "iterations: 10521\ncpu: 66621.34778062906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110362.80807443564,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 110357.16763917365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28731.157562078188,
            "unit": "ns/iter",
            "extra": "iterations: 24365\ncpu: 28729.48081264085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28933.484338146543,
            "unit": "ns/iter",
            "extra": "iterations: 24167\ncpu: 28931.1209500559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28210.924054193754,
            "unit": "ns/iter",
            "extra": "iterations: 24873\ncpu: 28209.524383870103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58020.32195282893,
            "unit": "ns/iter",
            "extra": "iterations: 12126\ncpu: 58020.07257133391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50904.97544140085,
            "unit": "ns/iter",
            "extra": "iterations: 13763\ncpu: 50902.630240499704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20897.718740683486,
            "unit": "ns/iter",
            "extra": "iterations: 33542\ncpu: 20896.74736151698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103010.71834511009,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 103004.19611307519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84495.94152498557,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 84490.31427099483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84047.86100757416,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 84046.1223999045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83021.48839137607,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 83020.68230277169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130438.69043186895,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130432.72524199597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 501322.84199997917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501268.8000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 410421.86235291837,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 410399.05882353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 415492.1299165561,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 415463.11084624263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 405969.0168408623,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 405950.58072009234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262262.3255639186,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 262238.83458646265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 404474.2897628539,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 404470.73452862643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21985.6741378768,
            "unit": "ns/iter",
            "extra": "iterations: 31811\ncpu: 21985.064914652197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106092.84764079184,
            "unit": "ns/iter",
            "extra": "iterations: 6570\ncpu: 106091.1263318114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86759.41595547376,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 86753.43228200407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86713.53340770649,
            "unit": "ns/iter",
            "extra": "iterations: 8067\ncpu: 86708.71451592896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85801.06356191532,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 85801.96797457503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 129453.49574231473,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129450.20362828407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 496168.82185946964,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 496125.83392476256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 407515.47377622995,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 407485.5477855519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 411851.66193011776,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 411817.2883362982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 404910.51618496806,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 404891.8497109856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261995.33845001942,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 261979.6330962167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 402399.10841984657,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 402386.1014994164 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420969371,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6971.579742114065,
            "unit": "ns/iter",
            "extra": "iterations: 99734\ncpu: 6971.216435719012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51816.52039999563,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51816.64999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95696.89197599037,
            "unit": "ns/iter",
            "extra": "iterations: 8998\ncpu: 95695.22116025785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139379.55060728456,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 139376.8582995952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183510.3677747186,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 183506.75418166426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226372.19670415274,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 226368.58488098343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269803.681789943,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 269793.8781852081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315638.6864650762,
            "unit": "ns/iter",
            "extra": "iterations: 2778\ncpu: 315632.43340532767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354929.65000000305,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 354914.50819672144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5788.779498445383,
            "unit": "ns/iter",
            "extra": "iterations: 120625\ncpu: 5788.661554404144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4840.417778054325,
            "unit": "ns/iter",
            "extra": "iterations: 144639\ncpu: 4840.39505251005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4780.043121825498,
            "unit": "ns/iter",
            "extra": "iterations: 145889\ncpu: 4779.966961182824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4777.731647161161,
            "unit": "ns/iter",
            "extra": "iterations: 146367\ncpu: 4777.73815135925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7411.694413110215,
            "unit": "ns/iter",
            "extra": "iterations: 93970\ncpu: 7411.6441417473725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25563.169965075987,
            "unit": "ns/iter",
            "extra": "iterations: 31783\ncpu: 25563.090331309235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123717.12765342725,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 123711.63898916978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97080.32386040546,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 97078.68591565295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98249.01301369877,
            "unit": "ns/iter",
            "extra": "iterations: 8760\ncpu: 98246.6095890411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95410.57177968713,
            "unit": "ns/iter",
            "extra": "iterations: 8951\ncpu: 95410.06591442287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 213472.13576397457,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 213465.57927560585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1686977.3533697254,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1686968.1238615674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1340271.0907781029,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1340247.9827089307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1342712.7878787864,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1342699.567099569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1316861.8059490358,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1316835.4107648747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 733911.8794607887,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 733907.533703412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1293133.868898225,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1293108.9260808937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33027.717032418506,
            "unit": "ns/iter",
            "extra": "iterations: 25017\ncpu: 33027.257464923874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158377.9524158111,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 158374.7986822843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123412.62369137848,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 123411.97475978752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122647.06510899437,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 122646.18891580029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119221.73597313695,
            "unit": "ns/iter",
            "extra": "iterations: 7147\ncpu: 119221.78536448859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224815.81173720557,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 224809.5559594919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1769842.0962962776,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1769797.9629629639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1363912.6871344931,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1363902.0467836186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1362720.9780701823,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1362704.6783625765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1349523.4121915554,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1349491.0014513775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 756354.3265472434,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 756325.8143322469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1311474.3244005947,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311450.3526093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6228040.846666545,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6227774.666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2824077.6234940495,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2824041.5662650503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24102.24538739926,
            "unit": "ns/iter",
            "extra": "iterations: 33983\ncpu: 24101.330076803053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122248.0785988902,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 122243.95557454145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94693.94507197739,
            "unit": "ns/iter",
            "extra": "iterations: 9030\ncpu: 94690.67552602435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94533.68263736022,
            "unit": "ns/iter",
            "extra": "iterations: 9100\ncpu: 94530.08791208791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91754.52852563838,
            "unit": "ns/iter",
            "extra": "iterations: 9360\ncpu: 91749.36965811944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197885.51374063428,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 197881.6034521914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1698571.324770639,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1698478.899082571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1333325.8314285753,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1333305.1428571404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1336856.978540828,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1336820.3147353365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1310016.568022471,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1310007.5736325372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 724459.1419705189,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 724428.2389449185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1286694.0387275834,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1286678.6998616862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2733.503629200759,
            "unit": "ns/iter",
            "extra": "iterations: 256117\ncpu: 2733.4304243763504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17395.580229758423,
            "unit": "ns/iter",
            "extra": "iterations: 40303\ncpu: 17395.332853633794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13856.217600000546,
            "unit": "ns/iter",
            "extra": "iterations: 50625\ncpu: 13855.419259259297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13093.414666541312,
            "unit": "ns/iter",
            "extra": "iterations: 53455\ncpu: 13093.216724347647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10232.554970683253,
            "unit": "ns/iter",
            "extra": "iterations: 68391\ncpu: 10232.160664414932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66255.65965311295,
            "unit": "ns/iter",
            "extra": "iterations: 10551\ncpu: 66254.94265946401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116086.85825467177,
            "unit": "ns/iter",
            "extra": "iterations: 6039\ncpu: 116086.80245073611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28441.889875520814,
            "unit": "ns/iter",
            "extra": "iterations: 24663\ncpu: 28441.22775007084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28235.25788347449,
            "unit": "ns/iter",
            "extra": "iterations: 24767\ncpu: 28235.256591432262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28150.596386268277,
            "unit": "ns/iter",
            "extra": "iterations: 24905\ncpu: 28150.335274041467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56230.29939783143,
            "unit": "ns/iter",
            "extra": "iterations: 12455\ncpu: 56228.96828582904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53242.593612166704,
            "unit": "ns/iter",
            "extra": "iterations: 13150\ncpu: 53240.47908745253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20969.141706585902,
            "unit": "ns/iter",
            "extra": "iterations: 33400\ncpu: 20968.733532934217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102292.4294298736,
            "unit": "ns/iter",
            "extra": "iterations: 6823\ncpu: 102289.27158141579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83375.20773639249,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 83374.31948424126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84682.96327615446,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 84682.99106064148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82949.7522816196,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 82946.0116155031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129946.38799333095,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129943.82064109646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507836.9449275189,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 507821.8115942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 409290.91314552975,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 409285.3286384925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 410534.6578638544,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 410520.4225352035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 412397.3547826028,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 412392.00000000215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261470.7360747705,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 261457.64485981385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 405950.07495643746,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 405952.12085996335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21779.609263473125,
            "unit": "ns/iter",
            "extra": "iterations: 32083\ncpu: 21778.723934794216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106356.71268203961,
            "unit": "ns/iter",
            "extra": "iterations: 6592\ncpu: 106355.21844660088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86971.87552690288,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 86967.381601785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87048.9845636732,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 87046.83181874792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85628.07465426483,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 85628.35638232906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131076.59561304463,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 131072.98462691953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 505600.47910665034,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 505594.5965417905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 411947.81106532266,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 411935.6680400231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 413432.8338261592,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 413419.396806629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 408829.5523698025,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 408815.2135751864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261666.92273068786,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 261652.06301575032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 405168.55128206447,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 405153.8461538475 ns\nthreads: 1"
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
        "date": 1702421406635,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6959.751831000152,
            "unit": "ns/iter",
            "extra": "iterations: 100355\ncpu: 6959.653231029844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51332.00370000282,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51327.359999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94336.54193194158,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 94330.46103183314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138570.88605982665,
            "unit": "ns/iter",
            "extra": "iterations: 6284\ncpu: 138567.2819859962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180787.52190236823,
            "unit": "ns/iter",
            "extra": "iterations: 4794\ncpu: 180778.0141843972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223981.6902426486,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 223971.21837893652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266718.84402823856,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 266708.01350936457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310490.0206773726,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 310470.51693404646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 352216.76105475787,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 352207.9513184586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5748.661555684742,
            "unit": "ns/iter",
            "extra": "iterations: 120590\ncpu: 5748.234513641254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4833.981399817869,
            "unit": "ns/iter",
            "extra": "iterations: 144676\ncpu: 4834.021537780968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4831.899138144374,
            "unit": "ns/iter",
            "extra": "iterations: 145268\ncpu: 4831.618112729567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4796.870232526267,
            "unit": "ns/iter",
            "extra": "iterations: 145360\ncpu: 4796.912493120521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7306.911233026544,
            "unit": "ns/iter",
            "extra": "iterations: 95148\ncpu: 7306.642283600295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25128.26955821842,
            "unit": "ns/iter",
            "extra": "iterations: 32301\ncpu: 25128.454227423317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 124611.46686965757,
            "unit": "ns/iter",
            "extra": "iterations: 6897\ncpu: 124608.19196752206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97936.02977894372,
            "unit": "ns/iter",
            "extra": "iterations: 8731\ncpu: 97936.04398121634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98873.9967521175,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 98869.84108572094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95075.49642378133,
            "unit": "ns/iter",
            "extra": "iterations: 8948\ncpu: 95075.35762181484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 213499.2473583041,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 213491.01825168094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1678797.0018148727,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1678786.206896552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1350307.1865136283,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1350251.64992826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1338710.0245664655,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1338702.0231213893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1316203.3361581955,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1316173.3050847433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 730571.1018153146,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 730571.1917916328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1287633.5566298391,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1287577.2099447509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32419.231605581524,
            "unit": "ns/iter",
            "extra": "iterations: 25293\ncpu: 32419.14759024237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157552.84230769347,
            "unit": "ns/iter",
            "extra": "iterations: 5460\ncpu: 157551.2637362638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123429.98605119718,
            "unit": "ns/iter",
            "extra": "iterations: 6954\ncpu: 123428.86108714454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122187.13010204161,
            "unit": "ns/iter",
            "extra": "iterations: 7056\ncpu: 122181.1933106576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117780.75404885787,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 117780.05764479813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225725.9526165107,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 225712.57485029966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1707575.6153846316,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1707552.014652017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1346978.2615607304,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1346950.7225433544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1361994.4583941132,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1361975.620437958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1345064.9622093139,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1345050.2906976806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 751325.3607085417,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 751306.7632850257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1306165.8637640362,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1306146.7696629243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6182886.172185615,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6182698.675496699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2785583.78805978,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2785581.4925373183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23737.592221226914,
            "unit": "ns/iter",
            "extra": "iterations: 34607\ncpu: 23736.17187274263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122589.67118208969,
            "unit": "ns/iter",
            "extra": "iterations: 7013\ncpu: 122589.36261229156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95106.0982350972,
            "unit": "ns/iter",
            "extra": "iterations: 9009\ncpu: 95104.38450438483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95052.37943301855,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 95053.09616453572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92386.24411320394,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 92380.51414992455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198020.1064508865,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 198021.5409163442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1680434.344144192,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1680334.5945945892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1324206.7800000054,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1324195.1428571395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1331904.7159253762,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1331853.6585365885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1304400.5049087794,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1304411.2201963565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 726308.2839410363,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 726278.0449961184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1275349.7382919947,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1275333.33333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2670.033810162804,
            "unit": "ns/iter",
            "extra": "iterations: 262288\ncpu: 2670.021503080578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17236.713312937885,
            "unit": "ns/iter",
            "extra": "iterations: 40532\ncpu: 17236.84496200531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14421.305287867272,
            "unit": "ns/iter",
            "extra": "iterations: 48564\ncpu: 14420.95791120989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14224.034548161668,
            "unit": "ns/iter",
            "extra": "iterations: 49033\ncpu: 14223.979768727222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10305.241887470773,
            "unit": "ns/iter",
            "extra": "iterations: 67858\ncpu: 10304.955937398674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68933.09353724933,
            "unit": "ns/iter",
            "extra": "iterations: 10135\ncpu: 68933.71484953127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115098.28031419114,
            "unit": "ns/iter",
            "extra": "iterations: 6111\ncpu: 115097.77450499055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28274.609946798286,
            "unit": "ns/iter",
            "extra": "iterations: 24812\ncpu: 28274.47202966318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28229.617548936214,
            "unit": "ns/iter",
            "extra": "iterations: 24879\ncpu: 28228.75517504706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27624.125836153053,
            "unit": "ns/iter",
            "extra": "iterations: 25414\ncpu: 27623.91595183757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53504.49345952924,
            "unit": "ns/iter",
            "extra": "iterations: 12996\ncpu: 53504.93998153278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52583.10749943458,
            "unit": "ns/iter",
            "extra": "iterations: 13321\ncpu: 52580.977404098565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20644.059510435825,
            "unit": "ns/iter",
            "extra": "iterations: 33826\ncpu: 20643.81836457181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104334.7370773155,
            "unit": "ns/iter",
            "extra": "iterations: 6713\ncpu: 104329.37583792703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83971.84337493987,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 83970.41526644245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83278.86245265283,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 83279.49810606152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82182.69376026157,
            "unit": "ns/iter",
            "extra": "iterations: 8526\ncpu: 82176.64790053858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 128819.18607221985,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 128818.6809137809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 496239.62794015574,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 496220.4561653559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 410114.92533804936,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 410118.93004115403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 409646.8957235135,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 409645.40128881106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 402607.16303100216,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 402592.42250287347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 259808.92801484725,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 259811.02040816602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 401801.50114677934,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 401794.6100917459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21469.475058944845,
            "unit": "ns/iter",
            "extra": "iterations: 32657\ncpu: 21469.65428545166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107038.73334360818,
            "unit": "ns/iter",
            "extra": "iterations: 6484\ncpu: 107037.19925971665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86304.38013277578,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 86302.9628718953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85746.72581238749,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 85746.26609442117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85316.90506406133,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 85312.77608297831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127096.28991291377,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 127095.46444122083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 497051.9218194552,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 497028.4292821626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 408571.86198830366,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 408575.0877192988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 410295.8204225455,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 410287.96948356676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405235.687283249,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 405227.8612716753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258415.2742709656,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 258411.77556294118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 401563.75893889717,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 401567.35870819073 ns\nthreads: 1"
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
        "date": 1702421904788,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7248.708813608751,
            "unit": "ns/iter",
            "extra": "iterations: 96646\ncpu: 7248.340334830206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52572.24329999986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52570.380000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96811.57655016864,
            "unit": "ns/iter",
            "extra": "iterations: 8870\ncpu: 96807.76775648254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141528.4056526676,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 141522.4799869302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 186836.20704467874,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 186830.34793814432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 229567.3862672363,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 229559.38494167564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 273098.0903652545,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 273083.4382871537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 317758.5748721726,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 317739.6274653031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 362401.7066167358,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 362388.09821056965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5866.685348224693,
            "unit": "ns/iter",
            "extra": "iterations: 119262\ncpu: 5866.326239707522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4855.934491011397,
            "unit": "ns/iter",
            "extra": "iterations: 143736\ncpu: 4855.70838203373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4831.450663341188,
            "unit": "ns/iter",
            "extra": "iterations: 144345\ncpu: 4831.31733000796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4826.090531231854,
            "unit": "ns/iter",
            "extra": "iterations: 146038\ncpu: 4825.938454374884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7490.346220389594,
            "unit": "ns/iter",
            "extra": "iterations: 93634\ncpu: 7490.041010743959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25088.227404707624,
            "unit": "ns/iter",
            "extra": "iterations: 32374\ncpu: 25087.561005745338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126080.88341664473,
            "unit": "ns/iter",
            "extra": "iterations: 6802\ncpu: 126076.52161129078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97219.48590021714,
            "unit": "ns/iter",
            "extra": "iterations: 8759\ncpu: 97215.70955588546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98445.42145328347,
            "unit": "ns/iter",
            "extra": "iterations: 8670\ncpu: 98442.06459054173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95314.53439212928,
            "unit": "ns/iter",
            "extra": "iterations: 8941\ncpu: 95311.45285762225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 215150.42649903806,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 215139.94197292082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1718186.770370338,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1718136.2962962918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1362444.0014641844,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1362379.3557833056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1369426.8114874365,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1369378.055964656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1334425.5316091601,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1334374.2816091923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 737551.4453312105,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 737520.3511572242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1311422.1650211958,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311353.878702399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32496.79867544341,
            "unit": "ns/iter",
            "extra": "iterations: 25367\ncpu: 32495.22213899948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158805.4642266021,
            "unit": "ns/iter",
            "extra": "iterations: 5437\ncpu: 158804.13831156897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121928.39633627523,
            "unit": "ns/iter",
            "extra": "iterations: 7042\ncpu: 121923.54444760032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122105.26743523829,
            "unit": "ns/iter",
            "extra": "iterations: 7026\ncpu: 122100.27042413889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117777.9229709248,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 117772.9778145242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 227284.5660377368,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 227274.187631026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1753734.3458646052,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1753630.451127808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1487138.0447093733,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1487067.66020865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1386126.6101190697,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386044.791666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1371298.917282151,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1371242.245199409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 759637.0879211116,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 759587.3459326216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1334110.7230989386,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1334046.0545193742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6228703.66666651,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6228403.333333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2772495.820359254,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2772379.3413173794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23642.560042722824,
            "unit": "ns/iter",
            "extra": "iterations: 34642\ncpu: 23641.544945441863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122544.9958730589,
            "unit": "ns/iter",
            "extra": "iterations: 7027\ncpu: 122541.2693894976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95169.46482467499,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 95165.05770084327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95936.55067454792,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 95933.47084401883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90251.5258211042,
            "unit": "ns/iter",
            "extra": "iterations: 9469\ncpu: 90245.96050269327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198337.49353050048,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 198327.44916820643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1733647.2801485993,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1733545.269016699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1354213.3817126101,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1354168.2148040638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1360077.6937590123,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1360010.3047895515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1335632.32142868,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1335576.7142857136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 729375.8922716818,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 729340.6713505076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1300987.6825174876,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1300942.9370629317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2692.946567294233,
            "unit": "ns/iter",
            "extra": "iterations: 259897\ncpu: 2692.887182229884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17544.507617003048,
            "unit": "ns/iter",
            "extra": "iterations: 40042\ncpu: 17544.32346036665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13336.449485518018,
            "unit": "ns/iter",
            "extra": "iterations: 52480\ncpu: 13335.693597561049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13780.072542024775,
            "unit": "ns/iter",
            "extra": "iterations: 50743\ncpu: 13779.54988865452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10363.886111975546,
            "unit": "ns/iter",
            "extra": "iterations: 67461\ncpu: 10363.438134625942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68857.47021234452,
            "unit": "ns/iter",
            "extra": "iterations: 10172\ncpu: 68853.83405426616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 107376.1844243454,
            "unit": "ns/iter",
            "extra": "iterations: 6523\ncpu: 107374.26030967351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28891.173798116226,
            "unit": "ns/iter",
            "extra": "iterations: 24212\ncpu: 28890.314719973685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28436.227274576537,
            "unit": "ns/iter",
            "extra": "iterations: 24631\ncpu: 28435.8044740368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28395.17641547739,
            "unit": "ns/iter",
            "extra": "iterations: 24550\ncpu: 28393.551934826846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56911.662351412364,
            "unit": "ns/iter",
            "extra": "iterations: 12282\ncpu: 56910.07164956822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53975.678141404744,
            "unit": "ns/iter",
            "extra": "iterations: 12956\ncpu: 53973.87310898441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21448.907251162454,
            "unit": "ns/iter",
            "extra": "iterations: 32712\ncpu: 21447.54218635379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105158.95464750146,
            "unit": "ns/iter",
            "extra": "iterations: 6681\ncpu: 105156.56338871423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86720.78931750976,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 86716.48120672682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86646.61388715869,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 86645.0216986988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84496.58514492965,
            "unit": "ns/iter",
            "extra": "iterations: 8280\ncpu: 84489.69806763451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130597.8477450648,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130591.80022362909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 509083.6339869082,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 509055.0472040656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 415818.16567338683,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 415797.6758045319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 421024.0108108196,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 420994.6546546541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 415911.23099762,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 415907.77909739007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262673.6144895039,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 262668.73123122967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 409508.783196248,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 409500.17626322346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22160.445822495087,
            "unit": "ns/iter",
            "extra": "iterations: 31526\ncpu: 22160.270887521743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109579.83474046424,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 109575.81300813038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89087.25282970924,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 89081.68637924489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88624.38730880621,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 88621.31209707994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88042.88019590576,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 88037.95052115952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131403.11207057512,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 131399.4931481134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 509428.93831639865,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 509409.94194484915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 418035.06861571147,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 418014.439140813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 419892.5991586359,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 419864.6634615384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 413137.6601884868,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 413123.1448763277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264769.6061293869,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 264754.86189935537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 410641.47762078035,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 410625.5005889263 ns\nthreads: 1"
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
        "date": 1702479568878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7359.755172522707,
            "unit": "ns/iter",
            "extra": "iterations: 94973\ncpu: 7359.476903962179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53805.76480000059,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53804.83999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101065.94655072526,
            "unit": "ns/iter",
            "extra": "iterations: 8625\ncpu: 101066.2724637681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144748.4822266957,
            "unit": "ns/iter",
            "extra": "iterations: 5964\ncpu: 144747.11602951033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189661.41996481936,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 189658.75109938424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236923.39896655444,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 236916.31765025828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279958.73281703796,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 279957.0506615037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326763.8469349306,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 326761.3012410682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 369098.8592088523,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 369084.9851127182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5851.316853139882,
            "unit": "ns/iter",
            "extra": "iterations: 119052\ncpu: 5851.086920001347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4854.636884593045,
            "unit": "ns/iter",
            "extra": "iterations: 144315\ncpu: 4854.525170633689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4851.549509112269,
            "unit": "ns/iter",
            "extra": "iterations: 143923\ncpu: 4851.492812128699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4918.693796546845,
            "unit": "ns/iter",
            "extra": "iterations: 142598\ncpu: 4918.679083858118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7432.781547789164,
            "unit": "ns/iter",
            "extra": "iterations: 94341\ncpu: 7432.86906011172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25358.81569604471,
            "unit": "ns/iter",
            "extra": "iterations: 32110\ncpu: 25358.59856742452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123959.34664352112,
            "unit": "ns/iter",
            "extra": "iterations: 6912\ncpu: 123956.10532407422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97826.36715803364,
            "unit": "ns/iter",
            "extra": "iterations: 8751\ncpu: 97823.87155753627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98003.92104659308,
            "unit": "ns/iter",
            "extra": "iterations: 8714\ncpu: 98002.49024558185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94693.41636059852,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 94691.1964385087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 215904.61656143345,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 215902.16124332178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1716017.7000000153,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1715980.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1371207.1521418267,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1371192.466765141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1376955.4011886974,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1376923.7741456188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1348878.8084179934,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1348857.3294629878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 748182.0662894448,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 748160.5497170583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1319777.7826704604,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1319771.8749999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32622.861879327356,
            "unit": "ns/iter",
            "extra": "iterations: 25275\ncpu: 32622.0257171117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156760.90589965536,
            "unit": "ns/iter",
            "extra": "iterations: 5441\ncpu: 156756.23966182733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121527.26296452696,
            "unit": "ns/iter",
            "extra": "iterations: 7077\ncpu: 121524.33234421363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122086.42028985322,
            "unit": "ns/iter",
            "extra": "iterations: 7038\ncpu: 122086.7291844274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117061.56332831805,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 117060.55472059012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225044.77079002472,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 225036.04469854402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1750582.5722326601,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1750531.707317072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1398545.3826218925,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1398541.3109756096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1403590.7082706718,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1403568.2706766946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1379800.2047477663,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1379780.860534129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 768462.631840798,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 768452.0729684911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1347458.460087144,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1347432.9462989916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6302346.506756933,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6302056.081081064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2796888.4714713683,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2796817.4174174205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24700.63713595771,
            "unit": "ns/iter",
            "extra": "iterations: 34371\ncpu: 24700.91065142132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120008.86383928267,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 120008.18917410677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94290.27994720059,
            "unit": "ns/iter",
            "extra": "iterations: 9091\ncpu: 94290.44109558876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93587.50005453093,
            "unit": "ns/iter",
            "extra": "iterations: 9169\ncpu: 93584.52393936043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 89889.72730138713,
            "unit": "ns/iter",
            "extra": "iterations: 9516\ncpu: 89889.31273644429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197677.779194175,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 197671.9553835641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1730192.1614101094,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1730167.7179962893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1367913.5967741916,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1367870.0879765374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1378327.289512493,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1378331.9054652874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1353722.1659451902,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1351113.275613273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 740264.4551942874,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 740248.8501189494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1317661.3271954944,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1317645.8923512676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2651.5748826542645,
            "unit": "ns/iter",
            "extra": "iterations: 265028\ncpu: 2651.6066226964494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16983.39144369367,
            "unit": "ns/iter",
            "extra": "iterations: 41186\ncpu: 16982.865536832767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13367.237900527456,
            "unit": "ns/iter",
            "extra": "iterations: 52337\ncpu: 13366.646922826996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13667.539772503835,
            "unit": "ns/iter",
            "extra": "iterations: 50990\ncpu: 13667.073936065863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10259.104799015315,
            "unit": "ns/iter",
            "extra": "iterations: 68264\ncpu: 10258.675143560382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67256.84375300023,
            "unit": "ns/iter",
            "extra": "iterations: 10413\ncpu: 67257.69710938269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116548.56073986988,
            "unit": "ns/iter",
            "extra": "iterations: 6001\ncpu: 116549.85835694101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28976.75270459808,
            "unit": "ns/iter",
            "extra": "iterations: 24218\ncpu: 28976.4307539848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28840.274034696693,
            "unit": "ns/iter",
            "extra": "iterations: 24267\ncpu: 28840.61482671946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28819.314905329335,
            "unit": "ns/iter",
            "extra": "iterations: 24347\ncpu: 28819.665667227982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56914.27028125538,
            "unit": "ns/iter",
            "extra": "iterations: 12302\ncpu: 56912.61583482361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53630.29351483137,
            "unit": "ns/iter",
            "extra": "iterations: 13076\ncpu: 53628.969103701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21057.79773413886,
            "unit": "ns/iter",
            "extra": "iterations: 33100\ncpu: 21057.17824773376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106617.14444443463,
            "unit": "ns/iter",
            "extra": "iterations: 6570\ncpu: 106613.1202435307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86821.72678880872,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 86822.87694973938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86091.322620362,
            "unit": "ns/iter",
            "extra": "iterations: 8121\ncpu: 86091.54045068292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84023.41081080238,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 84017.75375375395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129578.70716279505,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 129574.62325581156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 511186.06758724013,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 511155.2325581467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 418091.04136690486,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 418078.17745803896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 422419.975772222,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 422407.14718351956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 410455.40575453587,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 410445.68408690393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262407.3298350744,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 262398.16341829137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 409950.90612000844,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 409955.3773024298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22213.784382582053,
            "unit": "ns/iter",
            "extra": "iterations: 31324\ncpu: 22213.347592899943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108863.26926069557,
            "unit": "ns/iter",
            "extra": "iterations: 6425\ncpu: 108860.99610894838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89199.04136781601,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 89195.91444672055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88910.41161551913,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 88908.16637078417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87626.92257660614,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 87626.84177611071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131358.56276892876,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 131358.26005612922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 510538.76620541833,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 510526.7297887842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427519.69132811227,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 427524.4996967896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 421619.66184444824,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 421624.47257384367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 417129.86694511224,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 417110.20286396553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264495.82395161106,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 264484.8129958432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 412771.9632483332,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 412758.15056313376 ns\nthreads: 1"
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
        "date": 1702488554857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7104.251491719673,
            "unit": "ns/iter",
            "extra": "iterations: 98544\ncpu: 7103.970815067382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52933.7215000055,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52931.77999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97604.19865587704,
            "unit": "ns/iter",
            "extra": "iterations: 8779\ncpu: 97599.920264267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142173.19871266256,
            "unit": "ns/iter",
            "extra": "iterations: 6059\ncpu: 142169.2523518732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187159.89861651565,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 187157.30652831812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234072.4366835577,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 234054.81205011983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 275205.84326218336,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 275189.45524052234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 319383.04186558974,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 319373.6687477045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 364710.53978223965,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 364697.7805695144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5917.776222766124,
            "unit": "ns/iter",
            "extra": "iterations: 117684\ncpu: 5917.5512389109745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4865.032867695988,
            "unit": "ns/iter",
            "extra": "iterations: 144032\ncpu: 4864.773800266613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4854.679803297391,
            "unit": "ns/iter",
            "extra": "iterations: 143974\ncpu: 4854.530679150407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4838.577734074035,
            "unit": "ns/iter",
            "extra": "iterations: 138813\ncpu: 4838.571315366719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7495.924291705619,
            "unit": "ns/iter",
            "extra": "iterations: 93464\ncpu: 7495.575836685791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25145.742069985263,
            "unit": "ns/iter",
            "extra": "iterations: 32377\ncpu: 25144.77870092968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123305.38579848077,
            "unit": "ns/iter",
            "extra": "iterations: 6957\ncpu: 123298.51947678605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97570.09206750074,
            "unit": "ns/iter",
            "extra": "iterations: 8711\ncpu: 97563.13856044103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95890.90193215712,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 95886.44124915743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94247.33726052138,
            "unit": "ns/iter",
            "extra": "iterations: 9082\ncpu: 94242.77692138295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 217539.3669275854,
            "unit": "ns/iter",
            "extra": "iterations: 4088\ncpu: 217528.13111545955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1687293.9216758632,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1687228.597449906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1341526.1279069628,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1341468.1686046491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1352477.0988371547,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1352408.4302325589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1333486.2071428688,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1333434.857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 730908.563981021,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 730872.2748815148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1295253.0139665727,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1295181.4245810048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32344.592209420472,
            "unit": "ns/iter",
            "extra": "iterations: 25518\ncpu: 32341.119993729935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157227.40138409482,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 157217.88380987075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120159.75923065282,
            "unit": "ns/iter",
            "extra": "iterations: 7123\ncpu: 120151.39688333562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120091.84172260117,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 120085.38870246104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117314.9367659085,
            "unit": "ns/iter",
            "extra": "iterations: 7322\ncpu: 117306.47364108155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226902.4834471629,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226898.29217025833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1729418.9740261321,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1729296.4749536132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1365967.6421206922,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1365917.6730486047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1368401.133823608,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1368310.4411764692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1358934.819241892,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1358934.9854227363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 754165.8817813977,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 754143.8866396726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1332233.2212765233,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1332156.312056737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6167604.397350959,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6167347.019867537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2812590.834337353,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2812539.457831326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23798.135750150323,
            "unit": "ns/iter",
            "extra": "iterations: 34453\ncpu: 23796.348648883893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120897.32034874232,
            "unit": "ns/iter",
            "extra": "iterations: 7111\ncpu: 120893.39052172685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93294.1275948235,
            "unit": "ns/iter",
            "extra": "iterations: 9201\ncpu: 93289.91413976779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94446.33673134266,
            "unit": "ns/iter",
            "extra": "iterations: 9123\ncpu: 94444.30560122745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91428.24914857268,
            "unit": "ns/iter",
            "extra": "iterations: 9396\ncpu: 91424.05278842045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198221.0596877983,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 198211.15702479277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1702472.1452204639,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1702378.3088235236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1339429.096402854,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1339388.201438846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1353146.9826087204,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1353080.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1321892.753173437,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1321853.0324400605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 718654.8938461959,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 718609.2307692331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1290829.4238227338,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1290801.5235457004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2750.6527821415148,
            "unit": "ns/iter",
            "extra": "iterations: 254624\ncpu: 2750.56436156843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17763.852682652167,
            "unit": "ns/iter",
            "extra": "iterations: 39364\ncpu: 17762.826440402365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14848.627391500442,
            "unit": "ns/iter",
            "extra": "iterations: 50439\ncpu: 14847.88358214877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14274.224339787703,
            "unit": "ns/iter",
            "extra": "iterations: 49113\ncpu: 14273.204650499853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10211.649027795287,
            "unit": "ns/iter",
            "extra": "iterations: 68504\ncpu: 10211.17015064813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67227.70693297868,
            "unit": "ns/iter",
            "extra": "iterations: 10414\ncpu: 67227.77030919938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116142.61953642027,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 116137.6324503302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28479.654265270263,
            "unit": "ns/iter",
            "extra": "iterations: 24594\ncpu: 28478.82410343979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28471.29382937842,
            "unit": "ns/iter",
            "extra": "iterations: 24487\ncpu: 28470.89884428469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28214.994936910563,
            "unit": "ns/iter",
            "extra": "iterations: 24886\ncpu: 28213.754721530302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56702.25022205152,
            "unit": "ns/iter",
            "extra": "iterations: 12385\ncpu: 56700.52482842141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53321.99748532923,
            "unit": "ns/iter",
            "extra": "iterations: 13123\ncpu: 53319.51535472058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21097.51013096271,
            "unit": "ns/iter",
            "extra": "iterations: 33215\ncpu: 21097.154899894787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102758.7159007446,
            "unit": "ns/iter",
            "extra": "iterations: 6811\ncpu: 102756.89326090194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84646.61770040769,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 84645.19405150486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84203.95869460389,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 84201.33670520288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82706.00992556161,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 82704.5610303676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129582.31000739534,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129582.27474150895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507452.65945162356,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 507443.0735930802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411800.3115044703,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 411793.15634218126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414478.21335696406,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 414472.2222222184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 406033.85838653054,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 406033.0237957016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 260359.9717367199,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 260352.10115284272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 405503.650406508,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 405491.17305458675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22134.0285362147,
            "unit": "ns/iter",
            "extra": "iterations: 31644\ncpu: 22133.14372392901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107391.3712446377,
            "unit": "ns/iter",
            "extra": "iterations: 6524\ncpu: 107388.56529736373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87749.45084022357,
            "unit": "ns/iter",
            "extra": "iterations: 7974\ncpu: 87746.27539503436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87685.22560060104,
            "unit": "ns/iter",
            "extra": "iterations: 7992\ncpu: 87683.89639639578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86888.7379499326,
            "unit": "ns/iter",
            "extra": "iterations: 8029\ncpu: 86886.59858014762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130428.95667534125,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 130424.89773149768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 501254.52333094657,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 501254.55850682117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 412469.79705881455,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 412454.411764705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 415073.2712166707,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415061.3649851635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 410570.3873239169,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 410562.6173708895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258958.87986653764,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 258947.1635150163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 408093.8538866149,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 408080.7130333135 ns\nthreads: 1"
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
        "date": 1702490784038,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7168.1006456902405,
            "unit": "ns/iter",
            "extra": "iterations: 97570\ncpu: 7167.952239417854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52060.323600005635,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52060.77999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96173.43151529053,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 96168.96628961807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140485.33495854808,
            "unit": "ns/iter",
            "extra": "iterations: 6153\ncpu: 140482.93515358362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184903.61185753957,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 184894.7536788229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 230729.7180163596,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 230721.60379847008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271233.90846609237,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 271223.0552952201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316479.8046647149,
            "unit": "ns/iter",
            "extra": "iterations: 2744\ncpu: 316468.98688046634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 360036.17466884665,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 360006.3327814572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5908.627138578294,
            "unit": "ns/iter",
            "extra": "iterations: 118186\ncpu: 5908.159172829267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4873.340987137682,
            "unit": "ns/iter",
            "extra": "iterations: 142979\ncpu: 4872.949873757685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4863.132106860646,
            "unit": "ns/iter",
            "extra": "iterations: 144262\ncpu: 4862.80448073643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4853.867993927615,
            "unit": "ns/iter",
            "extra": "iterations: 144910\ncpu: 4853.907942861089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7448.262512022574,
            "unit": "ns/iter",
            "extra": "iterations: 94609\ncpu: 7447.644515849443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25936.987679475464,
            "unit": "ns/iter",
            "extra": "iterations: 31411\ncpu: 25935.713603514698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130418.03607700538,
            "unit": "ns/iter",
            "extra": "iterations: 6597\ncpu: 130405.30544186744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101200.3068370051,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 101194.7598769815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100559.59391876849,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 100551.53791969927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97749.35381792876,
            "unit": "ns/iter",
            "extra": "iterations: 8722\ncpu: 97744.10685622566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 215053.95507246145,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 215032.89855072473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1700389.8186812343,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1700283.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1358516.9195907214,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1358400.4385964887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1367326.511764672,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1367244.7058823528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1335074.867816094,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1334968.390804595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 736399.4944000297,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 736362.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1302821.202816823,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1302677.4647887303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32994.68471643711,
            "unit": "ns/iter",
            "extra": "iterations: 24968\ncpu: 32994.83739186162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 162280.43795620213,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 162275.08890136628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 126879.05674801208,
            "unit": "ns/iter",
            "extra": "iterations: 6802\ncpu: 126873.02264039987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125421.54159988911,
            "unit": "ns/iter",
            "extra": "iterations: 6863\ncpu: 125408.48025644728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120262.35824669858,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 120253.93368923884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225612.2659244134,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 225593.73381667523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1729400.586270807,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1729297.4025974087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1383485.5610118287,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1383431.845238095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1384475.0208332492,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1384388.3928571446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1361425.086131426,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1361297.6642335702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 763283.5049342646,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 763246.7927631545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1330592.2961373876,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1330511.5879828362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6278043.302013399,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6277701.342281888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2802718.9700599695,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2802664.3712574816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24578.809587934345,
            "unit": "ns/iter",
            "extra": "iterations: 33417\ncpu: 24577.640123290374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126533.29931073995,
            "unit": "ns/iter",
            "extra": "iterations: 6819\ncpu: 126532.08681624838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97586.8961215733,
            "unit": "ns/iter",
            "extra": "iterations: 8818\ncpu: 97582.16148786616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98995.11733638597,
            "unit": "ns/iter",
            "extra": "iterations: 8710\ncpu: 98993.9494833521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94302.80898012382,
            "unit": "ns/iter",
            "extra": "iterations: 9109\ncpu: 94296.41014381415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197440.82849364678,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 197436.2522686032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1707156.0036562632,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1707082.4497257785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1350878.365079371,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1350866.5223665277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1354439.1143271185,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1354375.832127344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1322194.2932012319,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1322184.1359773353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 729409.7918622508,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 729384.1158059456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1297257.7284122915,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1297246.3788300853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2724.8539439645656,
            "unit": "ns/iter",
            "extra": "iterations: 256696\ncpu: 2724.761196123031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17411.957348331147,
            "unit": "ns/iter",
            "extra": "iterations: 40186\ncpu: 17411.80510625587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14491.565487148207,
            "unit": "ns/iter",
            "extra": "iterations: 48353\ncpu: 14490.82787003902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13723.733413066453,
            "unit": "ns/iter",
            "extra": "iterations: 51004\ncpu: 13723.670692494716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10406.251302219434,
            "unit": "ns/iter",
            "extra": "iterations: 67385\ncpu: 10405.99243155003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65512.710370724126,
            "unit": "ns/iter",
            "extra": "iterations: 10655\ncpu: 65510.858751759726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116606.1440212987,
            "unit": "ns/iter",
            "extra": "iterations: 6013\ncpu: 116607.01812739058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28697.365618827283,
            "unit": "ns/iter",
            "extra": "iterations: 24304\ncpu: 28696.733048057908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28522.235229310954,
            "unit": "ns/iter",
            "extra": "iterations: 24508\ncpu: 28522.421250204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28301.37770672419,
            "unit": "ns/iter",
            "extra": "iterations: 24707\ncpu: 28300.64354231569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56937.28767568298,
            "unit": "ns/iter",
            "extra": "iterations: 12309\ncpu: 56936.78609147751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53347.703729120316,
            "unit": "ns/iter",
            "extra": "iterations: 13113\ncpu: 53346.00015251985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20979.635218432275,
            "unit": "ns/iter",
            "extra": "iterations: 33420\ncpu: 20979.533213644685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101507.63413924369,
            "unit": "ns/iter",
            "extra": "iterations: 6866\ncpu: 101503.59743664629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84293.49771470159,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 84289.61991820911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84021.01738816765,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 84020.146300517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83202.18603544093,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83199.15546568466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127491.18470286745,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 127492.47982391706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 510039.07910008926,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 510008.56313497823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 410801.8577307699,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 410805.3497942418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 417803.384937244,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 417790.67543335404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 412371.5359669474,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412360.4363207557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 259446.47342996227,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 259440.096618358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 408516.99765402015,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 408501.8181818132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21938.759751219743,
            "unit": "ns/iter",
            "extra": "iterations: 31996\ncpu: 21938.314164270818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105876.37609733843,
            "unit": "ns/iter",
            "extra": "iterations: 6493\ncpu: 105875.74310796215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87038.0974276072,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 87035.00683484446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86521.41102323972,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 86520.73652990547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85780.80070956305,
            "unit": "ns/iter",
            "extra": "iterations: 8174\ncpu: 85778.1012967948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128784.96586528813,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 128772.08662139709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 501832.65046461043,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 501785.1322373198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 413554.1011235886,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 413510.70372560323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 417305.91597137245,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 417291.1799761593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411958.1091651907,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 411932.1074138973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260876.09839730567,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 260853.2240029798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 407529.22371494106,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 407525.05841120885 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}