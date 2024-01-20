window.BENCHMARK_DATA = {
  "lastUpdate": 1705777715529,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-9 20.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489551457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8151.933720295135,
            "unit": "ns/iter",
            "extra": "iterations: 85969\ncpu: 8151.659319056869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73030.76056701556,
            "unit": "ns/iter",
            "extra": "iterations: 11640\ncpu: 73026.50343642611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139788.05371375292,
            "unit": "ns/iter",
            "extra": "iterations: 6274\ncpu: 139783.9336946127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206413.4828076843,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 206399.7154375148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270826.34473026503,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 270815.11919698864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332309.91566729307,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 332298.29787234036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398063.6931144705,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 398042.3620611032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 462221.07040758803,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 462200.688194812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 525149.0283645006,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 525124.0193120097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6038.289092813171,
            "unit": "ns/iter",
            "extra": "iterations: 116492\ncpu: 6038.068708580857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5139.53878435038,
            "unit": "ns/iter",
            "extra": "iterations: 132966\ncpu: 5139.209271543093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5127.221703334287,
            "unit": "ns/iter",
            "extra": "iterations: 136403\ncpu: 5127.022132944284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5117.570602367812,
            "unit": "ns/iter",
            "extra": "iterations: 136943\ncpu: 5117.391907581991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9056.37393071057,
            "unit": "ns/iter",
            "extra": "iterations: 77271\ncpu: 9055.899367162307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 39476.02599547108,
            "unit": "ns/iter",
            "extra": "iterations: 21196\ncpu: 39475.15568975283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125844.54549469614,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 125836.82273262646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114934.00663012468,
            "unit": "ns/iter",
            "extra": "iterations: 7843\ncpu: 114929.3255131963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110087.33372048647,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110081.10723964394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108740.85684913542,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 108737.89514263699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 275436.06329922646,
            "unit": "ns/iter",
            "extra": "iterations: 3128\ncpu: 275416.40025575453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2148761.7816092097,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2148641.6091954047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1771344.6292774857,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1771281.749049428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1784771.9733840209,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1784720.7224334585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1773258.1197718945,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1773165.2091254785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1077866.7157772544,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1077803.712296985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1724429.0074212635,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1724360.2968460089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7317500.239998936,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7317207.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4029815.163793293,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4029603.448275854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9039743.449999567,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 9038978.333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 38914.76634809922,
            "unit": "ns/iter",
            "extra": "iterations: 21241\ncpu: 38913.48806553377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128485.01980048494,
            "unit": "ns/iter",
            "extra": "iterations: 6616\ncpu: 128476.88935912971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109166.24125607015,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 109159.52259382192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111273.19417728137,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 111267.09123992686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109417.389522229,
            "unit": "ns/iter",
            "extra": "iterations: 7807\ncpu: 109414.61508902327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 285696.99834872806,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 285679.2602377826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2152208.6279068664,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2152004.186046506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1783773.2925429519,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1783601.529636723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1775129.9638095067,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1775010.0952381012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1779570.4064885725,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779361.8320610754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1081482.7520372919,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1081398.2537834654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1726194.1133829693,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1726012.825278811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7361780.530000032,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7361171.999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4216226.34529171,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4215797.75784756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 38899.63793904863,
            "unit": "ns/iter",
            "extra": "iterations: 21524\ncpu: 38897.11484854109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126928.17835909734,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 126922.29488703926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 105717.14922049492,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 105714.48898787453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111426.89283847791,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 111419.89022477754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110399.93996901183,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 110392.29279628185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 277891.18516128865,
            "unit": "ns/iter",
            "extra": "iterations: 3100\ncpu: 277876.9677419356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2150732.1129032564,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2150569.124423958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1775920.4801513506,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1775754.820415887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1767474.7367423014,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1767295.0757575724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1785844.358095173,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1785714.095238093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1079941.3545348293,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1079821.5547703137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1726525.6171005643,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1726368.4014869845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3291.741439201606,
            "unit": "ns/iter",
            "extra": "iterations: 212743\ncpu: 3291.552718538346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15977.275592162001,
            "unit": "ns/iter",
            "extra": "iterations: 43949\ncpu: 15976.777628614902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12680.551568858325,
            "unit": "ns/iter",
            "extra": "iterations: 55295\ncpu: 12680.121168279144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12523.167227430784,
            "unit": "ns/iter",
            "extra": "iterations: 55876\ncpu: 12522.30832557797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10818.452102786461,
            "unit": "ns/iter",
            "extra": "iterations: 64795\ncpu: 10818.1047920364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66110.37244177193,
            "unit": "ns/iter",
            "extra": "iterations: 10603\ncpu: 66108.47873243415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141927.11443089636,
            "unit": "ns/iter",
            "extra": "iterations: 4920\ncpu: 141922.37804877982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37223.705998191,
            "unit": "ns/iter",
            "extra": "iterations: 18789\ncpu: 37222.77396348949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37552.06356182301,
            "unit": "ns/iter",
            "extra": "iterations: 18659\ncpu: 37550.51181735343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37572.678908932736,
            "unit": "ns/iter",
            "extra": "iterations: 18624\ncpu: 37571.04274054982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72539.38021048334,
            "unit": "ns/iter",
            "extra": "iterations: 9692\ncpu: 72537.70119686385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67062.33736095505,
            "unit": "ns/iter",
            "extra": "iterations: 10428\ncpu: 67059.93479094662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21198.58461165445,
            "unit": "ns/iter",
            "extra": "iterations: 32986\ncpu: 21197.029042623974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98842.1272010112,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 98839.41400197231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79628.67506812736,
            "unit": "ns/iter",
            "extra": "iterations: 8808\ncpu: 79626.10127157153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 88038.410554764,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 88037.00047014595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82152.95643518193,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 82149.72479213003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 160375.3223653981,
            "unit": "ns/iter",
            "extra": "iterations: 4346\ncpu: 160368.20064426883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 623755.4105075166,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 623728.8512911805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 536293.6129032309,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 535340.8102025519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 530309.636226449,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 530298.2641509374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 533572.8467987691,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 533505.2591463404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 348862.9021956149,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 348830.53892215743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 516852.1173432071,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 516791.80811807775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20771.161752493255,
            "unit": "ns/iter",
            "extra": "iterations: 33712\ncpu: 20769.57463217842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100204.83338085398,
            "unit": "ns/iter",
            "extra": "iterations: 7016\ncpu: 100195.68129988683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81086.51893456721,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 81083.45107122204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80032.42028653169,
            "unit": "ns/iter",
            "extra": "iterations: 8725\ncpu: 80024.28653295174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81961.75322996922,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 81951.87925769291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157211.52228442265,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 157198.20828667545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 620403.0628875457,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 620335.6953055728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 529280.2501895105,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 529257.1645185823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 535608.6222222096,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 535563.0651341071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 531763.0546154269,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 531698.7692307753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 347280.15755465475,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 347256.31212723634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 517658.5937732056,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 517600.0741289786 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492163760,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8310.493649740627,
            "unit": "ns/iter",
            "extra": "iterations: 84406\ncpu: 8309.942421154894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73970.07605585575,
            "unit": "ns/iter",
            "extra": "iterations: 11531\ncpu: 73967.5136588327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140483.68554372338,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 140478.62213617298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206693.44219788283,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 206688.58230256895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 273111.1875196074,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 273099.84321103804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332919.30109631224,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 332915.3484729835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 396548.70211783925,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 396540.42357274407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 461792.8102073212,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 461785.4864433813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 526652.9831020279,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 526640.7362703688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6092.231602391379,
            "unit": "ns/iter",
            "extra": "iterations: 114947\ncpu: 6092.0171905312745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5178.800890481072,
            "unit": "ns/iter",
            "extra": "iterations: 134534\ncpu: 5178.705754679113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5134.07012217467,
            "unit": "ns/iter",
            "extra": "iterations: 136362\ncpu: 5134.0857423622465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5171.58525882637,
            "unit": "ns/iter",
            "extra": "iterations: 135593\ncpu: 5171.564903792972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9083.677334956292,
            "unit": "ns/iter",
            "extra": "iterations: 77207\ncpu: 9083.57014260367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 38455.80029442909,
            "unit": "ns/iter",
            "extra": "iterations: 21737\ncpu: 38454.38192942915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 125713.93186165988,
            "unit": "ns/iter",
            "extra": "iterations: 6795\ncpu: 125710.64017660051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102900.89609449278,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 102898.07135969163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106250.5430819148,
            "unit": "ns/iter",
            "extra": "iterations: 8008\ncpu: 106248.61388611425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 105181.9067287671,
            "unit": "ns/iter",
            "extra": "iterations: 8159\ncpu: 105179.33570290456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 267959.36524709954,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 267951.3521914826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2115949.5659090183,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2115849.3181818165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1788787.9273421727,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1788755.640535376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1753506.5415095147,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1753418.8679245275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1758700.9753788067,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1758661.9318181796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1070957.486143212,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1070914.4341801377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1707705.7504587283,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1707672.6605504584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7319984.819999945,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7319598.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4055990.2597401734,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4055841.1255411273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8987784.890756425,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 8987488.235294115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36564.403121163785,
            "unit": "ns/iter",
            "extra": "iterations: 22812\ncpu: 36562.747676661435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 129576.36609186053,
            "unit": "ns/iter",
            "extra": "iterations: 6553\ncpu: 129573.03525103006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105034.72027541461,
            "unit": "ns/iter",
            "extra": "iterations: 8133\ncpu: 105029.93975162899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107782.20389577984,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 107782.58284846939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106834.71128971702,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 106833.6305412534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 281481.54176071996,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 281476.4269590472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2130754.1118721305,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2130664.611872131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1770083.562737688,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1770049.2395437278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1757276.6351606457,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1757180.3402646533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1771712.6704330095,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1771669.1148775835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1074768.8331401737,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1074724.7972190094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1709312.1633026653,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1709270.4587155983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7306026.6200002385,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7304646.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4043273.12608668,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4043129.1304347795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35674.18351099509,
            "unit": "ns/iter",
            "extra": "iterations: 22609\ncpu: 35673.26728294063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 130766.15268224939,
            "unit": "ns/iter",
            "extra": "iterations: 6543\ncpu: 130763.6405318663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104299.86382039347,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 104294.81045270535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 106704.13056566523,
            "unit": "ns/iter",
            "extra": "iterations: 7973\ncpu: 106701.70575692986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107010.75147040898,
            "unit": "ns/iter",
            "extra": "iterations: 7991\ncpu: 107003.91690652062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 266579.60338462336,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 266572.76923076814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2122336.8356164764,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2122251.8264840143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1773439.5760455297,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1773393.5361216767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1758762.4169812202,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1758711.509433961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1763185.8273246437,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1763136.6223909028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1068948.1105937555,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1068912.9220023332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1708746.8205127001,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1708725.6410256424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3320.4522482561297,
            "unit": "ns/iter",
            "extra": "iterations: 211008\ncpu: 3320.371265544406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16153.970180847338,
            "unit": "ns/iter",
            "extra": "iterations: 43462\ncpu: 16153.847038792484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12802.284150613681,
            "unit": "ns/iter",
            "extra": "iterations: 54816\ncpu: 12802.061441914693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13751.593953100377,
            "unit": "ns/iter",
            "extra": "iterations: 52622\ncpu: 13751.151609592973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10905.48282145548,
            "unit": "ns/iter",
            "extra": "iterations: 64208\ncpu: 10904.835846000462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63701.40976318723,
            "unit": "ns/iter",
            "extra": "iterations: 11021\ncpu: 63699.91833771907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139428.20872469404,
            "unit": "ns/iter",
            "extra": "iterations: 4791\ncpu: 139421.6447505741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37582.28479760434,
            "unit": "ns/iter",
            "extra": "iterations: 18701\ncpu: 37580.412812149145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37268.41871002374,
            "unit": "ns/iter",
            "extra": "iterations: 18760\ncpu: 37265.78358208964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37192.7827827279,
            "unit": "ns/iter",
            "extra": "iterations: 18737\ncpu: 37191.962427282786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75202.49764554526,
            "unit": "ns/iter",
            "extra": "iterations: 9344\ncpu: 75197.24957191815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66394.78257973112,
            "unit": "ns/iter",
            "extra": "iterations: 10505\ncpu: 66395.10709186156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20646.36684910432,
            "unit": "ns/iter",
            "extra": "iterations: 33984\ncpu: 20645.69209039549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96743.89190310797,
            "unit": "ns/iter",
            "extra": "iterations: 7225\ncpu: 96739.75086505168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78351.6361291836,
            "unit": "ns/iter",
            "extra": "iterations: 8918\ncpu: 78349.21507064319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78522.61082475007,
            "unit": "ns/iter",
            "extra": "iterations: 8924\ncpu: 78517.76109368024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78975.70003381507,
            "unit": "ns/iter",
            "extra": "iterations: 8871\ncpu: 78973.52045992529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152857.7204371537,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 152855.12568306195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 609535.5039232605,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 609514.0366172681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 523844.7751878966,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 523817.5939849614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 520691.4780342755,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 520654.72822040366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 524876.3453183505,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 524877.9775280823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344031.9041769067,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 344011.2039312098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 509904.80523256696,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 509906.4680232576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20601.860709556022,
            "unit": "ns/iter",
            "extra": "iterations: 33965\ncpu: 20601.934344177727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 96283.61275657864,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 96277.33847637393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77702.20093353301,
            "unit": "ns/iter",
            "extra": "iterations: 8998\ncpu: 77699.49988886352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78641.02690884192,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 78634.07332660678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79119.50197896361,
            "unit": "ns/iter",
            "extra": "iterations: 8843\ncpu: 79118.91891891768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151367.6808418286,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 151367.9973963965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 605277.1987847076,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 605233.8541666646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 522773.3821990079,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 522756.170531031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 519990.2702301223,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 519959.317000742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 526666.7192192305,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 526668.3933933885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342726.6748647649,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 342728.13575996424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 511310.40792368853,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 511282.17168012296 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702503238686,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7915.961472805345,
            "unit": "ns/iter",
            "extra": "iterations: 88457\ncpu: 7915.744372972179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70198.39632438522,
            "unit": "ns/iter",
            "extra": "iterations: 12134\ncpu: 70195.05521674632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134529.9774712654,
            "unit": "ns/iter",
            "extra": "iterations: 6525\ncpu: 134524.15325670494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200296.86176271262,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 200297.72261443868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 260884.36557826732,
            "unit": "ns/iter",
            "extra": "iterations: 3277\ncpu: 260875.70949038747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321842.1037700338,
            "unit": "ns/iter",
            "extra": "iterations: 2679\ncpu: 321827.92086599476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 385098.62964601215,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 385099.9115044247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 446868.08483291685,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 446843.75321336737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 510099.771028025,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 509526.34345794434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5959.2846418064055,
            "unit": "ns/iter",
            "extra": "iterations: 117618\ncpu: 5958.97056572974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5036.2931299362,
            "unit": "ns/iter",
            "extra": "iterations: 138645\ncpu: 5036.3078365609945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5051.868329462369,
            "unit": "ns/iter",
            "extra": "iterations: 138201\ncpu: 5051.58139231987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5098.752772388834,
            "unit": "ns/iter",
            "extra": "iterations: 138148\ncpu: 5098.568202217911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9128.256847436905,
            "unit": "ns/iter",
            "extra": "iterations: 76598\ncpu: 9128.013786260739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 40303.188600735186,
            "unit": "ns/iter",
            "extra": "iterations: 20668\ncpu: 40299.2645635765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124086.30846422745,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 124076.94880744621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100977.60899941537,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 100968.9165186499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104556.18925519317,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 104549.51159951175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102318.08236282234,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 102309.17276984027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270715.8879975306,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 270699.2286331385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2159394.262557196,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2159302.5114155225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1764144.5822307875,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1764080.3402646496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1757388.5951035984,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1757326.177024483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1797630.0265150405,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1797574.8106060643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1066319.1810843088,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1066295.271049597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1708071.2907407496,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1707971.8518518503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7264985.829999659,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7265002.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4095998.24122783,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4095870.614035086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8991794.132231563,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8991369.421487618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36331.61042636771,
            "unit": "ns/iter",
            "extra": "iterations: 21906\ncpu: 36329.92330868245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 128026.97495901269,
            "unit": "ns/iter",
            "extra": "iterations: 6709\ncpu: 128016.64927709056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102969.03410049505,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 102957.41655621199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109649.76666665886,
            "unit": "ns/iter",
            "extra": "iterations: 7800\ncpu: 109642.43589743643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105530.88909634222,
            "unit": "ns/iter",
            "extra": "iterations: 8034\ncpu: 105526.54966392867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 274080.4879348254,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 274078.53337511705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2141820.675115328,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2141714.285714289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1776288.2884249827,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1776280.4554079715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1783670.6344697308,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1783607.1969696966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1776609.381404143,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1776615.7495256134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1069126.2041522122,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1069094.8096885816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1723337.6155268995,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1723310.351201487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7339472.819999172,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7339023.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4154176.6106195454,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4154151.3274336252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36110.84847263276,
            "unit": "ns/iter",
            "extra": "iterations: 22326\ncpu: 36110.55271880334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126480.09757539014,
            "unit": "ns/iter",
            "extra": "iterations: 6764\ncpu: 126478.40035481936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101952.59976118716,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 101950.90149253712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 106412.95349701961,
            "unit": "ns/iter",
            "extra": "iterations: 8064\ncpu: 106411.80555555549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104694.9760215268,
            "unit": "ns/iter",
            "extra": "iterations: 8174\ncpu: 104689.45436750655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271430.3205207692,
            "unit": "ns/iter",
            "extra": "iterations: 3226\ncpu: 271419.5288282699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2133159.216091842,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2133150.5747126415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1780094.66159703,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1780052.8517110297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1764664.411764611,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1764652.1821631936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1770867.8209523247,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1770804.1904761882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1066861.5765247245,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1066854.8906789438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1709481.4099264715,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1709418.0147058822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3325.598484414992,
            "unit": "ns/iter",
            "extra": "iterations: 209952\ncpu: 3325.509640298725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16082.096015615634,
            "unit": "ns/iter",
            "extra": "iterations: 43545\ncpu: 16081.455965093666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12081.352891435583,
            "unit": "ns/iter",
            "extra": "iterations: 57947\ncpu: 12081.391616477204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13394.800793053939,
            "unit": "ns/iter",
            "extra": "iterations: 51951\ncpu: 13394.852842101178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10807.436604292865,
            "unit": "ns/iter",
            "extra": "iterations: 64823\ncpu: 10807.120929299781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62750.26246696608,
            "unit": "ns/iter",
            "extra": "iterations: 11350\ncpu: 62749.03964757711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140330.09366226813,
            "unit": "ns/iter",
            "extra": "iterations: 4986\ncpu: 140322.24227837994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37314.339677970456,
            "unit": "ns/iter",
            "extra": "iterations: 18756\ncpu: 37314.02751119652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37285.7446989929,
            "unit": "ns/iter",
            "extra": "iterations: 18770\ncpu: 37283.55354288785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37348.75212079366,
            "unit": "ns/iter",
            "extra": "iterations: 18743\ncpu: 37348.23667502534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75251.66912866749,
            "unit": "ns/iter",
            "extra": "iterations: 9342\ncpu: 75245.55769642499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66363.8083979608,
            "unit": "ns/iter",
            "extra": "iterations: 10574\ncpu: 66358.23718554965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20845.888898888858,
            "unit": "ns/iter",
            "extra": "iterations: 33339\ncpu: 20844.21848285799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101340.16751845571,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 101094.87507098257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80385.15518426285,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 80384.5387960638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80569.36645890356,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 80563.38873499622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81176.95204529517,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 81171.86272244003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156176.85244802866,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156169.26000446902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 607838.6451612571,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 607776.7218831647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 520605.6451373202,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 520597.47587230714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 517424.912915157,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 517393.87453874043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518238.51660513075,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 518206.71586715087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 342205.41308593866,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 342184.1796875033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 505871.9535895844,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 505854.74981871404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20952.753415175674,
            "unit": "ns/iter",
            "extra": "iterations: 33234\ncpu: 20952.325931275584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99438.25821193453,
            "unit": "ns/iter",
            "extra": "iterations: 7002\ncpu: 99438.38903170505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80948.90468479725,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 80948.43262001005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80683.16840882775,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 80680.59233449535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81271.3276521775,
            "unit": "ns/iter",
            "extra": "iterations: 8625\ncpu: 81270.21449275366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153200.07867130742,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 153195.95716783323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 605716.7434555175,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 605718.0628272303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 514254.14863873675,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 514230.4635761551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515962.35903086746,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 515933.6270190877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 516759.5588235606,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 516731.6911764739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 342542.0088235547,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 342525.19607843435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 505083.184704189,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 505070.7792207772 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1705574867425,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7866.7438527817685,
            "unit": "ns/iter",
            "extra": "iterations: 88902\ncpu: 7866.47994420823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71749.90477792424,
            "unit": "ns/iter",
            "extra": "iterations: 11888\ncpu: 71748.48586810229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136867.58813400287,
            "unit": "ns/iter",
            "extra": "iterations: 6388\ncpu: 136849.12335629304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202532.68924855185,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 202529.96531791906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267687.09259259695,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 267676.0802469135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327174.0750000077,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 327169.12878787855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391370.9099547778,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 391371.0859728505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 454594.67922553985,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 454581.37100994214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 522245.58819994295,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 522224.9247441307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5953.010650747458,
            "unit": "ns/iter",
            "extra": "iterations: 117926\ncpu: 5952.794973118745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5018.616668335168,
            "unit": "ns/iter",
            "extra": "iterations: 139858\ncpu: 5018.553818873426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5037.320246204301,
            "unit": "ns/iter",
            "extra": "iterations: 138584\ncpu: 5037.280638457545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4996.43315397187,
            "unit": "ns/iter",
            "extra": "iterations: 139941\ncpu: 4996.327023531351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9082.694131027563,
            "unit": "ns/iter",
            "extra": "iterations: 77373\ncpu: 9082.402129941975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37961.939282088344,
            "unit": "ns/iter",
            "extra": "iterations: 21674\ncpu: 37960.20116268337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 124618.557611069,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 124616.9847050254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102550.33217161724,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 102547.27797139777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104325.37294579177,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 104322.17316654422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102514.22054380065,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 102511.69788519632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 263974.3677811751,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 263966.2310030397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2115176.26195906,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2115102.5056947577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1759223.841209887,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1759160.3024574649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1754088.0545111645,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1754044.736842107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1762712.9943501751,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1762685.6873822995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1080323.4207459183,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1080305.710955713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1709194.8161764324,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1709129.2279411778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7407467.59999979,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7407292.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4020823.3405173854,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4020657.7586206854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8959207.66666715,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 8958834.166666651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35698.439046590254,
            "unit": "ns/iter",
            "extra": "iterations: 23075\ncpu: 35696.68905742149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126808.25625001005,
            "unit": "ns/iter",
            "extra": "iterations: 6720\ncpu: 126806.65178571423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104090.79284322962,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 104089.88558909412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107871.7769829326,
            "unit": "ns/iter",
            "extra": "iterations: 7968\ncpu: 107866.39056224872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104928.95380434596,
            "unit": "ns/iter",
            "extra": "iterations: 8096\ncpu: 104926.84041501944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 269225.7753262897,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 269219.60845245374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2135220.951724174,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2135136.551724133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1773281.9470700459,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1773236.4839319414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1763120.1939736258,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1763064.9717514173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1779429.5294116728,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1779369.4497153766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1086345.7890443383,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1086291.6083916095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1725392.1866913415,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1725338.4473197805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7405826.309999384,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7405332.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4082093.6140354057,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4082020.6140350685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 37446.04117327532,
            "unit": "ns/iter",
            "extra": "iterations: 22126\ncpu: 37445.10078640504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126694.80080573613,
            "unit": "ns/iter",
            "extra": "iterations: 6702\ncpu: 126690.74903014068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102671.72065896673,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 102669.39634439618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104358.79010239748,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 104357.8010726477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 105380.04992603413,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 105376.86143984199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 261656.16697026702,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 261647.3284760178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2120818.191344011,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2120781.5489749373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1770663.6672967318,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1770622.873345931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1761844.296786374,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1761815.31190926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1767417.9696396217,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1767369.6394686874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1083132.836879405,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1083142.0803782488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1715646.4503676048,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1715594.3014706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3259.1642245506096,
            "unit": "ns/iter",
            "extra": "iterations: 215114\ncpu: 3259.1119127532256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16053.133757228703,
            "unit": "ns/iter",
            "extra": "iterations: 43564\ncpu: 16052.97493343118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12734.173370021153,
            "unit": "ns/iter",
            "extra": "iterations: 55967\ncpu: 12734.112959422575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13013.17119747223,
            "unit": "ns/iter",
            "extra": "iterations: 53780\ncpu: 13013.28560803274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10852.684326746763,
            "unit": "ns/iter",
            "extra": "iterations: 63854\ncpu: 10852.61064302942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62652.313118579244,
            "unit": "ns/iter",
            "extra": "iterations: 11114\ncpu: 62651.934497031085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138767.93448138656,
            "unit": "ns/iter",
            "extra": "iterations: 5052\ncpu: 138764.21219319024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37521.834635969644,
            "unit": "ns/iter",
            "extra": "iterations: 18680\ncpu: 37521.84689507492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37456.21782602099,
            "unit": "ns/iter",
            "extra": "iterations: 18703\ncpu: 37455.68090680601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37355.8058164345,
            "unit": "ns/iter",
            "extra": "iterations: 18740\ncpu: 37355.49092849532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75922.67862578973,
            "unit": "ns/iter",
            "extra": "iterations: 9198\ncpu: 75919.53685583858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66448.117462729,
            "unit": "ns/iter",
            "extra": "iterations: 10531\ncpu: 66448.25752540155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21214.395159825115,
            "unit": "ns/iter",
            "extra": "iterations: 32974\ncpu: 21214.39012555333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96419.74602516108,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96418.45707175303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78529.6148148067,
            "unit": "ns/iter",
            "extra": "iterations: 8910\ncpu: 78527.00336700247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79076.94704752661,
            "unit": "ns/iter",
            "extra": "iterations: 8857\ncpu: 79075.12701817795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79034.64974105844,
            "unit": "ns/iter",
            "extra": "iterations: 8882\ncpu: 79035.34113938417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153489.34851138617,
            "unit": "ns/iter",
            "extra": "iterations: 4568\ncpu: 153489.57968476354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 597186.8324786167,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 597174.1025641084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 510664.3599122448,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 510652.0117044669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 517896.87370752485,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517882.20088626066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 510606.00946832343,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 510610.56081573403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 342101.20029453095,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 342098.1836033392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 503822.60999992926,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503815.7999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20900.844789026403,
            "unit": "ns/iter",
            "extra": "iterations: 33535\ncpu: 20900.617265543508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97056.26660223861,
            "unit": "ns/iter",
            "extra": "iterations: 7243\ncpu: 97055.65373464115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78686.41735908863,
            "unit": "ns/iter",
            "extra": "iterations: 8906\ncpu: 78686.40242533128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78491.94234658555,
            "unit": "ns/iter",
            "extra": "iterations: 8898\ncpu: 78491.16655428235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79527.73138084063,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 79526.3585402129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150692.3128359495,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 150690.6901741542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 600364.008605875,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 600352.1514629967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 514967.69882178085,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 514972.3122238608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 517218.48216940433,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 517217.8306092223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 514345.0670596702,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 514341.0464259426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 343470.4585174307,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 343463.8684339735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 505334.3242075185,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 505334.43804034503 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772988905,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7819.761112230081,
            "unit": "ns/iter",
            "extra": "iterations: 89406\ncpu: 7819.6921906807165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70011.39840803962,
            "unit": "ns/iter",
            "extra": "iterations: 11935\ncpu: 70010.33933808126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134726.3366826445,
            "unit": "ns/iter",
            "extra": "iterations: 6469\ncpu: 134725.5526356469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199411.20319633547,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 199410.93607305936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264139.48978344846,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 264134.1567551081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326422.35960590886,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 326410.8753315651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 396212.77688535774,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 396207.4520303436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 449586.09391125856,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 449562.5902992777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 518549.353325404,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 518009.50118764816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5855.240416008,
            "unit": "ns/iter",
            "extra": "iterations: 118844\ncpu: 5855.143717814943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4989.915745678189,
            "unit": "ns/iter",
            "extra": "iterations: 139886\ncpu: 4989.875327052032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5019.363627165055,
            "unit": "ns/iter",
            "extra": "iterations: 138367\ncpu: 5019.292172266505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5012.083789241236,
            "unit": "ns/iter",
            "extra": "iterations: 139648\ncpu: 5012.034543996337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8802.522116894004,
            "unit": "ns/iter",
            "extra": "iterations: 79645\ncpu: 8802.237428589362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36266.7262401246,
            "unit": "ns/iter",
            "extra": "iterations: 22538\ncpu: 36266.47883574406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 122943.82148544777,
            "unit": "ns/iter",
            "extra": "iterations: 6907\ncpu: 122940.68336470259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100875.55943215503,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 100873.82098171314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105126.6066441963,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 105124.37409725576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 101456.67509195837,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 101455.95110952895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270956.46946219786,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 270943.51261014905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2087098.9463085015,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2087001.5659955267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1750917.0823969191,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1750824.719101121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1708398.223048439,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1708324.5353159895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1730515.070631955,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1730405.0185873592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1065406.8317971758,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1065360.9447004606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1659261.1318680823,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1659186.6300366302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7230408.809999745,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7230030.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3868729.628691976,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3868548.5232067495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8580067.335999956,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8579515.200000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36027.25393071727,
            "unit": "ns/iter",
            "extra": "iterations: 22833\ncpu: 36026.32593176536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 129171.6654026922,
            "unit": "ns/iter",
            "extra": "iterations: 6593\ncpu: 129169.17943273176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103641.40729892455,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 103637.37336750896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 108374.02534385084,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 108369.00152827345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106189.00225535837,
            "unit": "ns/iter",
            "extra": "iterations: 7981\ncpu: 106183.53589775681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 276348.65324384085,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 276334.00447427103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2102794.2134832703,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2102751.9101123605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1733522.2265192606,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1733433.1491712632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1715143.5658627115,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1715060.1113172597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1740516.7265916348,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1740424.34456929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1064019.4710647308,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1064019.0972222264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1685524.990958258,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1685486.799276677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7291995.100000577,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7291542.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4042062.1716739647,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4041860.515021478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36465.603010675055,
            "unit": "ns/iter",
            "extra": "iterations: 22852\ncpu: 36463.44302468045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125112.49397235343,
            "unit": "ns/iter",
            "extra": "iterations: 6802\ncpu: 125102.98441634861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101421.54408960238,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 101416.25357483317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107051.2211466044,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 107044.2167462908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 106247.94726368236,
            "unit": "ns/iter",
            "extra": "iterations: 8040\ncpu: 106241.15671641802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 265923.17264640756,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 265898.1294081568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2078261.4732142792,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2078215.401785718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1735113.1063432787,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1735045.149253731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1718669.2706093213,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1718641.0394265265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1743239.1663550055,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1743194.95327102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1065529.9245714298,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1065522.7428571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1722494.65999998,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1722433.6363636376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3219.702620254128,
            "unit": "ns/iter",
            "extra": "iterations: 214712\ncpu: 3219.6700696747175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15589.588159098568,
            "unit": "ns/iter",
            "extra": "iterations: 44777\ncpu: 15589.106014248384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12492.743280965045,
            "unit": "ns/iter",
            "extra": "iterations: 55886\ncpu: 12492.631428264613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12746.337758732267,
            "unit": "ns/iter",
            "extra": "iterations: 54835\ncpu: 12745.97975745414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10589.946947158418,
            "unit": "ns/iter",
            "extra": "iterations: 66217\ncpu: 10589.853058882112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64709.619128947874,
            "unit": "ns/iter",
            "extra": "iterations: 10539\ncpu: 64709.014137963866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138311.09092699198,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 138304.84156661973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36849.10335019195,
            "unit": "ns/iter",
            "extra": "iterations: 18984\ncpu: 36848.86746734093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36819.43939711902,
            "unit": "ns/iter",
            "extra": "iterations: 19042\ncpu: 36819.08412981805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36820.86104114231,
            "unit": "ns/iter",
            "extra": "iterations: 19056\ncpu: 36820.43450881554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71103.95572783909,
            "unit": "ns/iter",
            "extra": "iterations: 9803\ncpu: 71103.91716821346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65512.54079429308,
            "unit": "ns/iter",
            "extra": "iterations: 10651\ncpu: 65511.914374237494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19913.793033145426,
            "unit": "ns/iter",
            "extra": "iterations: 34334\ncpu: 19913.240519601608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91944.69304525727,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 91942.96855024177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75280.42932160854,
            "unit": "ns/iter",
            "extra": "iterations: 9331\ncpu: 75278.84471117845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75113.09399308244,
            "unit": "ns/iter",
            "extra": "iterations: 9256\ncpu: 75107.70311149515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76002.0121990715,
            "unit": "ns/iter",
            "extra": "iterations: 9263\ncpu: 76000.086365109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150522.62260082227,
            "unit": "ns/iter",
            "extra": "iterations: 4637\ncpu: 150514.38430019483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 597505.5551754243,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 597472.1984602282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 508199.1164136091,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 508152.1330441141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 504670.2564841745,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 504652.5216138337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 505752.8203240546,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 505741.0898380013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 329357.69962513517,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 329344.5641986929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 507098.0503495827,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 507066.22377622576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19583.455978275822,
            "unit": "ns/iter",
            "extra": "iterations: 35721\ncpu: 19583.113574647723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93404.20491913313,
            "unit": "ns/iter",
            "extra": "iterations: 7481\ncpu: 93402.05854832187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74482.03898985682,
            "unit": "ns/iter",
            "extra": "iterations: 9464\ncpu: 74476.52155536783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77671.09149170421,
            "unit": "ns/iter",
            "extra": "iterations: 9050\ncpu: 77667.24861878547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76732.81546379952,
            "unit": "ns/iter",
            "extra": "iterations: 9131\ncpu: 76725.79126054069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148131.6034115094,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 148129.01918976533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 595536.1396932848,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 595523.424190791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 504306.06390706584,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 504276.6158315125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 502501.6504713398,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 502472.00870195206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 507130.675126946,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 507114.9383611366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 335391.39458689286,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 335363.0104463468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 499172.6654778717,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 499137.44650499884 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774770556,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7930.41387595054,
            "unit": "ns/iter",
            "extra": "iterations: 88239\ncpu: 7929.850746268657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71624.21058397081,
            "unit": "ns/iter",
            "extra": "iterations: 11867\ncpu: 71620.712901323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139019.59971843485,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 139009.83888628185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201679.0699015232,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 201669.97357674758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265857.00495663227,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 265837.7323420076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329313.39893212204,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 329299.0846681921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 392281.31416927296,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 392259.8913535536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 457309.8363252655,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 457274.8152059137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 518908.9039952157,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 518877.6982707219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5873.194651720259,
            "unit": "ns/iter",
            "extra": "iterations: 118468\ncpu: 5872.955566060021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4945.0108376402195,
            "unit": "ns/iter",
            "extra": "iterations: 141636\ncpu: 4944.9977406874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4998.001373665616,
            "unit": "ns/iter",
            "extra": "iterations: 140500\ncpu: 4997.940925266906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5008.213720000185,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5008.257999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9223.046121205663,
            "unit": "ns/iter",
            "extra": "iterations: 75887\ncpu: 9222.840539222798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36790.09377048983,
            "unit": "ns/iter",
            "extra": "iterations: 19825\ncpu: 36790.37578814632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123604.75203371476,
            "unit": "ns/iter",
            "extra": "iterations: 6884\ncpu: 123601.49622312609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101319.61761584571,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 101313.21778092181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 103394.29878641364,
            "unit": "ns/iter",
            "extra": "iterations: 8240\ncpu: 103388.95631067979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102943.81282328648,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 102940.81559003938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 263255.6760691823,
            "unit": "ns/iter",
            "extra": "iterations: 3297\ncpu: 263233.0906885039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2071087.6696427811,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2070993.7500000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1728803.2181145882,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1728666.3585951906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1727044.8979592847,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1726983.8589981454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1715576.548802909,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1715478.268876614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1072570.7612455846,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1072520.4152249151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1679528.8880866414,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1679427.9783393494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7311498.569999913,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7311064.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4005719.2575107096,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4005458.798283267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8879750.057851445,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8879315.702479338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 37350.05105225491,
            "unit": "ns/iter",
            "extra": "iterations: 22428\ncpu: 37348.764936686224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126134.02903891903,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 126129.1126179244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 105086.70192424866,
            "unit": "ns/iter",
            "extra": "iterations: 8159\ncpu: 105076.41867875942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106251.46919254017,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 106246.21118012453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105332.72310535613,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 105325.66851509588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 269983.36911074945,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 269979.843993759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2106428.329571082,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2106406.9977426543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1716587.3867403998,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716558.9318600341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1721415.5907405862,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1721390.7407407474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1722470.6887660117,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1722363.904235727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1067289.9701492249,
            "unit": "ns/iter",
            "extra": "iterations: 871\ncpu: 1067260.7347875999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1678578.535714401,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1678472.9323308258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7341208.359999882,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7340988.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4098924.771929596,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4098587.280701743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36526.760106979644,
            "unit": "ns/iter",
            "extra": "iterations: 22435\ncpu: 36525.29975484747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 126958.37793637393,
            "unit": "ns/iter",
            "extra": "iterations: 6726\ncpu: 126951.97740112981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101642.7441777507,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 101639.9001901147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103030.14340897553,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 103019.7609850313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104971.92801675487,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 104969.18525822696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 265263.85823168204,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 265246.8597560967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2076756.0536913222,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2076673.3780760565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1728803.0649350223,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1728644.712430425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1720823.252767533,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1720754.7970479687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1724339.8092592475,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1724226.296296294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1072060.2160277907,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 1072013.1242741055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1678728.5902526637,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1678609.747292411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3298.6986557623704,
            "unit": "ns/iter",
            "extra": "iterations: 212760\ncpu: 3298.673622861415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15823.555966088581,
            "unit": "ns/iter",
            "extra": "iterations: 44116\ncpu: 15822.517907335232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12501.100935517648,
            "unit": "ns/iter",
            "extra": "iterations: 55798\ncpu: 12500.453421269607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13275.536643899199,
            "unit": "ns/iter",
            "extra": "iterations: 54170\ncpu: 13274.652021414031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10474.534389795663,
            "unit": "ns/iter",
            "extra": "iterations: 66953\ncpu: 10474.050453303133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63466.77596668364,
            "unit": "ns/iter",
            "extra": "iterations: 11043\ncpu: 63465.598116454086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 137862.53905174174,
            "unit": "ns/iter",
            "extra": "iterations: 5083\ncpu: 137856.87586071252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36924.23464392805,
            "unit": "ns/iter",
            "extra": "iterations: 18999\ncpu: 36923.364387599315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36814.93792087962,
            "unit": "ns/iter",
            "extra": "iterations: 19008\ncpu: 36814.514941077294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36877.241085964975,
            "unit": "ns/iter",
            "extra": "iterations: 19043\ncpu: 36874.99868718169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75627.67258169655,
            "unit": "ns/iter",
            "extra": "iterations: 9242\ncpu: 75627.40748755683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66022.41512621642,
            "unit": "ns/iter",
            "extra": "iterations: 10657\ncpu: 66018.41981795977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20942.317254785416,
            "unit": "ns/iter",
            "extra": "iterations: 33440\ncpu: 20940.40370813393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94922.47388414109,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 94919.08831908877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76870.70387443484,
            "unit": "ns/iter",
            "extra": "iterations: 9111\ncpu: 76865.71177697246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77308.24822930068,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 77308.86454183255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76915.54098360628,
            "unit": "ns/iter",
            "extra": "iterations: 9089\ncpu: 76914.5890637025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155423.99600532418,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 155407.4123391027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 593931.4944586816,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 593910.4006820065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 507129.984760475,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 507091.4368650153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 512447.21783623507,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 512436.0380116992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 514189.53840533807,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 514162.5457205585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 338458.5780262601,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 338444.04472533084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 498798.42247512034,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 498793.9544807994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20629.60235107007,
            "unit": "ns/iter",
            "extra": "iterations: 33942\ncpu: 20629.52389370109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93417.67456723093,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 93412.07723036049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77327.2464423651,
            "unit": "ns/iter",
            "extra": "iterations: 9065\ncpu: 77320.79426365139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76668.58371735914,
            "unit": "ns/iter",
            "extra": "iterations: 9114\ncpu: 76665.54750932736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77153.11424168639,
            "unit": "ns/iter",
            "extra": "iterations: 9086\ncpu: 77149.2515958618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153187.5603674587,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 153185.67366579108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 597458.6961702757,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 597427.1489361748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 506596.2099566732,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 506534.2712842696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 514176.36170218635,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 514157.81364637025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 512580.0549450228,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 512576.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341299.11268292944,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 341286.1951219508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 500217.1609999095,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500210.49999999435 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705777714464,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8059.902106053089,
            "unit": "ns/iter",
            "extra": "iterations: 86655\ncpu: 8059.660723558941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72467.01674354511,
            "unit": "ns/iter",
            "extra": "iterations: 11706\ncpu: 72461.13958653681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137427.97441932966,
            "unit": "ns/iter",
            "extra": "iterations: 6372\ncpu: 137416.79221594473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202249.1363214056,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 202232.02508128196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 268173.50093928806,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 267638.2279273637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327105.24676316616,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 327086.3290175171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391520.9008523947,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 391472.9026469271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 454050.1801566089,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 454041.8798955611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 517290.2562574843,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 517290.1668653159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5969.768222544113,
            "unit": "ns/iter",
            "extra": "iterations: 117190\ncpu: 5969.54091646045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5010.559119999698,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5010.488000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5003.257555033695,
            "unit": "ns/iter",
            "extra": "iterations: 140370\ncpu: 5003.081142694301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5063.644003335873,
            "unit": "ns/iter",
            "extra": "iterations: 139094\ncpu: 5063.584338648689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8966.745484923991,
            "unit": "ns/iter",
            "extra": "iterations: 78404\ncpu: 8966.469822968202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37714.822826233234,
            "unit": "ns/iter",
            "extra": "iterations: 22001\ncpu: 37713.19940002729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127018.85925153136,
            "unit": "ns/iter",
            "extra": "iterations: 6707\ncpu: 127014.58178022974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 103743.39235729785,
            "unit": "ns/iter",
            "extra": "iterations: 8217\ncpu: 103743.27613484251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108082.03928481808,
            "unit": "ns/iter",
            "extra": "iterations: 7942\ncpu: 108076.34097204739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106568.99244998315,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 106565.33282999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271889.7101584487,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 271880.3044423734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2130836.717890048,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2130769.036697247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1751714.5451128378,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1751619.9248120303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1713774.5569851357,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1713637.1323529456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1732725.7249071985,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732614.684014871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1048569.9227273089,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1048479.6590909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1693222.6842104625,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1693121.415607989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7138598.679999859,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7138014.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3991752.7435897263,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3991551.2820512815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8749068.790322209,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8748678.225806456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35399.524396019086,
            "unit": "ns/iter",
            "extra": "iterations: 23221\ncpu: 35398.25158261921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 131290.98112049367,
            "unit": "ns/iter",
            "extra": "iterations: 6515\ncpu: 131287.68994627794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 106053.33106352175,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 106049.77095456219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107496.82264149841,
            "unit": "ns/iter",
            "extra": "iterations: 7950\ncpu: 107494.69182389883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106752.97180990483,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 106749.63203193188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 286681.41151175665,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 286669.8974528634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2143624.1662818133,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2143537.8752886746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1754179.9584121893,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1754154.0642722154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1726707.5055349616,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1726691.3284132811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1749972.0507519864,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1749925.3759398542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1053071.4789533534,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1053050.1706484605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1699011.3235831289,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1698943.6928702036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7222021.410000253,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7221716.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3972774.688034204,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3972512.3931624023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 36870.36039333174,
            "unit": "ns/iter",
            "extra": "iterations: 22678\ncpu: 36867.62501102388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 130774.53933780147,
            "unit": "ns/iter",
            "extra": "iterations: 6584\ncpu: 130765.23390036453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 105161.44510856544,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 105153.75701390611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 106576.1482767217,
            "unit": "ns/iter",
            "extra": "iterations: 8066\ncpu: 106570.48103149014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 106074.68722195188,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 106070.78596144408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271565.5458528852,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 271553.95931142394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2137398.3990825564,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2137207.339449545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1754386.3120299373,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1754275.3759398423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1717932.2062615245,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1717802.9465929987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1737930.8280375549,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1737802.8037383158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1054160.145619957,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1053953.8111490323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1702840.4065933912,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1702495.7875457972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3211.063205944453,
            "unit": "ns/iter",
            "extra": "iterations: 218413\ncpu: 3210.6083429099754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16240.520424019363,
            "unit": "ns/iter",
            "extra": "iterations: 43111\ncpu: 16239.690566212827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12712.371128779325,
            "unit": "ns/iter",
            "extra": "iterations: 55086\ncpu: 12711.287804523881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13090.430842012656,
            "unit": "ns/iter",
            "extra": "iterations: 53479\ncpu: 13089.723068868156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10826.435596391962,
            "unit": "ns/iter",
            "extra": "iterations: 64647\ncpu: 10826.267266849243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63693.726551088344,
            "unit": "ns/iter",
            "extra": "iterations: 10960\ncpu: 63693.71350364946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139855.97759999565,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 139844.10000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36964.25350775256,
            "unit": "ns/iter",
            "extra": "iterations: 18958\ncpu: 36957.89112775596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36856.27579114034,
            "unit": "ns/iter",
            "extra": "iterations: 18960\ncpu: 36856.12869198311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36985.9894864726,
            "unit": "ns/iter",
            "extra": "iterations: 18928\ncpu: 36984.52028740457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73900.34538110369,
            "unit": "ns/iter",
            "extra": "iterations: 9407\ncpu: 73899.42595939251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65978.31986786118,
            "unit": "ns/iter",
            "extra": "iterations: 10595\ncpu: 65977.9990561595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20473.226946810602,
            "unit": "ns/iter",
            "extra": "iterations: 34030\ncpu: 20471.90714075806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98015.82070706465,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98012.89281705939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80275.42566563623,
            "unit": "ns/iter",
            "extra": "iterations: 8751\ncpu: 80272.74597189012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78596.28560171314,
            "unit": "ns/iter",
            "extra": "iterations: 8883\ncpu: 78590.48744793447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78788.75765391726,
            "unit": "ns/iter",
            "extra": "iterations: 8917\ncpu: 78778.95031961492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153396.79479325216,
            "unit": "ns/iter",
            "extra": "iterations: 4571\ncpu: 153388.9302122084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 606729.8908144955,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 606711.0918544207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 514530.7558651476,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 514501.6129032271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 514161.2503682499,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 514131.44329897617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 516205.9866863789,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 516160.3550295878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337857.68372764206,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 337832.35152100463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 501863.028776913,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 501818.92086331075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20788.880061887186,
            "unit": "ns/iter",
            "extra": "iterations: 33609\ncpu: 20787.63426463165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98557.31478089183,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 98551.40200084377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79151.28778772824,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 79148.52024038912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78911.64635522048,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 78904.77318889693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79720.31395745804,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 79711.27289273155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155328.71203024604,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 155314.92105848205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 607505.6178509442,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 607483.1889081557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 514378.34584250784,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 514347.3142016211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513743.0484937708,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 513714.54812638246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 517172.9518160936,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 517157.4499629347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 336713.4807877549,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 336695.1008645524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 502962.2008608873,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 502946.8436154926 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}