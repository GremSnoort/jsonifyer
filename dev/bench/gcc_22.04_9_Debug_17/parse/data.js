window.BENCHMARK_DATA = {
  "lastUpdate": 1702412534241,
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
      }
    ]
  }
}