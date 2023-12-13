window.BENCHMARK_DATA = {
  "lastUpdate": 1702492168546,
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
      }
    ]
  }
}