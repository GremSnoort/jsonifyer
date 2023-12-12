window.BENCHMARK_DATA = {
  "lastUpdate": 1702381122894,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-8 18.04 Release c++-17": [
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
        "date": 1702381120022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 691.5748979942348,
            "unit": "ns/iter",
            "extra": "iterations: 1018325\ncpu: 691.5602582672526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6139.099190968819,
            "unit": "ns/iter",
            "extra": "iterations: 132875\ncpu: 6138.926810912511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11803.023031654884,
            "unit": "ns/iter",
            "extra": "iterations: 70859\ncpu: 11802.404775681282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17656.98295048895,
            "unit": "ns/iter",
            "extra": "iterations: 47626\ncpu: 17656.347373283497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22770.473227929713,
            "unit": "ns/iter",
            "extra": "iterations: 35989\ncpu: 22769.25171580206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28083.77935056852,
            "unit": "ns/iter",
            "extra": "iterations: 29318\ncpu: 28083.716488164268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34013.87946464176,
            "unit": "ns/iter",
            "extra": "iterations: 25030\ncpu: 34012.70874950058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40147.41690796041,
            "unit": "ns/iter",
            "extra": "iterations: 21067\ncpu: 40146.61793326051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45533.61495994721,
            "unit": "ns/iter",
            "extra": "iterations: 18476\ncpu: 45532.956267590336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 656.1109154482975,
            "unit": "ns/iter",
            "extra": "iterations: 1064757\ncpu: 656.0967432005605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 512.6368248607365,
            "unit": "ns/iter",
            "extra": "iterations: 1366718\ncpu: 512.6245501998213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.3543499743944,
            "unit": "ns/iter",
            "extra": "iterations: 1367123\ncpu: 508.3453354233668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 469.48758319560875,
            "unit": "ns/iter",
            "extra": "iterations: 1471232\ncpu: 469.4691251957551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 917.7009201850941,
            "unit": "ns/iter",
            "extra": "iterations: 762890\ncpu: 917.6860359947037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2693.381243782996,
            "unit": "ns/iter",
            "extra": "iterations: 297576\ncpu: 2693.2844046562905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13154.985671651164,
            "unit": "ns/iter",
            "extra": "iterations: 62324\ncpu: 13154.787882677636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10589.532267046421,
            "unit": "ns/iter",
            "extra": "iterations: 77215\ncpu: 10589.108333872959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10250.288674633079,
            "unit": "ns/iter",
            "extra": "iterations: 80589\ncpu: 10249.859161920333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10047.1038085647,
            "unit": "ns/iter",
            "extra": "iterations: 81448\ncpu: 10046.591690403706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40751.37334253357,
            "unit": "ns/iter",
            "extra": "iterations: 20287\ncpu: 40750.09612066849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260064.6198425059,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 260055.0236220474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211279.14368229875,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 211275.76413959023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210283.21234206916,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 210275.4859086493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208702.63112598585,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 208700.95625149453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108304.2988961915,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 108299.7519533672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 211006.53978195478,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 211003.13152400817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5171.510150000245,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5171.367999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27019.477783672704,
            "unit": "ns/iter",
            "extra": "iterations: 30158\ncpu: 27019.295046090596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21138.010433284988,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 21137.4306768973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21031.504797009497,
            "unit": "ns/iter",
            "extra": "iterations: 39608\ncpu: 21031.47343970911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20831.316366483476,
            "unit": "ns/iter",
            "extra": "iterations: 39587\ncpu: 20830.52769848693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54633.72259492976,
            "unit": "ns/iter",
            "extra": "iterations: 15353\ncpu: 54633.00332182626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 287643.8896620257,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 287634.0622929073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 223578.12904884425,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 223572.64781491054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218785.67270408725,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 218778.62244897918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217952.60099750457,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 217947.90523690736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116710.22735250392,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 116707.65492102127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212276.67032699176,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 212269.98535871197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850653.5807314982,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 850633.5414808255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476737.85157499404,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 476723.3849439417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2668.1435536168588,
            "unit": "ns/iter",
            "extra": "iterations: 301929\ncpu: 2668.138535880945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13082.521052214604,
            "unit": "ns/iter",
            "extra": "iterations: 63105\ncpu: 13082.061643292844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10326.387957240826,
            "unit": "ns/iter",
            "extra": "iterations: 80264\ncpu: 10326.397886973047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9997.300312209909,
            "unit": "ns/iter",
            "extra": "iterations: 82957\ncpu: 9996.999650421234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9426.881224349783,
            "unit": "ns/iter",
            "extra": "iterations: 87720\ncpu: 9426.600547195589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39085.70778583075,
            "unit": "ns/iter",
            "extra": "iterations: 21385\ncpu: 39083.9279869067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280247.0978025361,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 280239.3376663587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 209558.32910500135,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 209552.57223396728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 208350.6069323339,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 208344.3763263369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 207130.34683841222,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 207122.6697892282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104295.91274369706,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 104291.916310033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 198004.41333334183,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 197998.10169491454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.01323997644246,
            "unit": "ns/iter",
            "extra": "iterations: 2882558\ncpu: 242.00310973794666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1661.8657240626958,
            "unit": "ns/iter",
            "extra": "iterations: 421103\ncpu: 1661.816230233451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1305.1805529353267,
            "unit": "ns/iter",
            "extra": "iterations: 535361\ncpu: 1305.1578280823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1320.9317914033052,
            "unit": "ns/iter",
            "extra": "iterations: 529596\ncpu: 1320.8674159170384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 945.1981861513694,
            "unit": "ns/iter",
            "extra": "iterations: 741848\ncpu: 945.1821666972266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10651.257162157992,
            "unit": "ns/iter",
            "extra": "iterations: 65134\ncpu: 10650.779930604584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13522.921993373122,
            "unit": "ns/iter",
            "extra": "iterations: 51611\ncpu: 13522.475828796265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3229.814383526927,
            "unit": "ns/iter",
            "extra": "iterations: 217179\ncpu: 3229.6851905571143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3218.485392418952,
            "unit": "ns/iter",
            "extra": "iterations: 216771\ncpu: 3218.4051372185318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3198.7459724598543,
            "unit": "ns/iter",
            "extra": "iterations: 217937\ncpu: 3198.5991364476727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5927.201946163672,
            "unit": "ns/iter",
            "extra": "iterations: 118284\ncpu: 5927.010415609889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5900.365119348847,
            "unit": "ns/iter",
            "extra": "iterations: 115921\ncpu: 5900.249307718154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2043.8163307727307,
            "unit": "ns/iter",
            "extra": "iterations: 341576\ncpu: 2043.7630278473725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10531.329889651888,
            "unit": "ns/iter",
            "extra": "iterations: 66789\ncpu: 10531.064995732653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8369.445518590237,
            "unit": "ns/iter",
            "extra": "iterations: 83891\ncpu: 8368.966873681406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8204.595615506169,
            "unit": "ns/iter",
            "extra": "iterations: 84662\ncpu: 8204.299449576018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8040.451633151337,
            "unit": "ns/iter",
            "extra": "iterations: 87622\ncpu: 8040.3072287781815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18006.92137185382,
            "unit": "ns/iter",
            "extra": "iterations: 38663\ncpu: 18006.341980705147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59518.6204311929,
            "unit": "ns/iter",
            "extra": "iterations: 11874\ncpu: 59518.2078490816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48536.233474077184,
            "unit": "ns/iter",
            "extra": "iterations: 14447\ncpu: 48534.027825846926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48814.01664809196,
            "unit": "ns/iter",
            "extra": "iterations: 14356\ncpu: 48813.96628587312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47636.869163990166,
            "unit": "ns/iter",
            "extra": "iterations: 14629\ncpu: 47636.05851391078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27086.714468529262,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27085.597394035896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45209.5711148424,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 45208.90065882949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1971.3258111490102,
            "unit": "ns/iter",
            "extra": "iterations: 353665\ncpu: 1971.2089123888654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10421.221652539403,
            "unit": "ns/iter",
            "extra": "iterations: 67484\ncpu: 10420.978305968762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8226.59039003776,
            "unit": "ns/iter",
            "extra": "iterations: 85120\ncpu: 8226.322838345848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8182.305127554488,
            "unit": "ns/iter",
            "extra": "iterations: 86708\ncpu: 8181.987821192998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8225.34737962375,
            "unit": "ns/iter",
            "extra": "iterations: 85503\ncpu: 8225.127773294385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17828.49672686474,
            "unit": "ns/iter",
            "extra": "iterations: 39259\ncpu: 17827.540181869084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57381.93786375625,
            "unit": "ns/iter",
            "extra": "iterations: 12199\ncpu: 57380.277071890436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46578.229673034955,
            "unit": "ns/iter",
            "extra": "iterations: 15017\ncpu: 46576.27355663565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46826.55362396246,
            "unit": "ns/iter",
            "extra": "iterations: 14956\ncpu: 46826.11660871864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46539.98319494946,
            "unit": "ns/iter",
            "extra": "iterations: 15055\ncpu: 46538.7977416139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27142.09730254153,
            "unit": "ns/iter",
            "extra": "iterations: 25765\ncpu: 27141.5059188821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45449.404071841906,
            "unit": "ns/iter",
            "extra": "iterations: 15423\ncpu: 45447.85061272127 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381120022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 691.5748979942348,
            "unit": "ns/iter",
            "extra": "iterations: 1018325\ncpu: 691.5602582672526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6139.099190968819,
            "unit": "ns/iter",
            "extra": "iterations: 132875\ncpu: 6138.926810912511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11803.023031654884,
            "unit": "ns/iter",
            "extra": "iterations: 70859\ncpu: 11802.404775681282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17656.98295048895,
            "unit": "ns/iter",
            "extra": "iterations: 47626\ncpu: 17656.347373283497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22770.473227929713,
            "unit": "ns/iter",
            "extra": "iterations: 35989\ncpu: 22769.25171580206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28083.77935056852,
            "unit": "ns/iter",
            "extra": "iterations: 29318\ncpu: 28083.716488164268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34013.87946464176,
            "unit": "ns/iter",
            "extra": "iterations: 25030\ncpu: 34012.70874950058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40147.41690796041,
            "unit": "ns/iter",
            "extra": "iterations: 21067\ncpu: 40146.61793326051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45533.61495994721,
            "unit": "ns/iter",
            "extra": "iterations: 18476\ncpu: 45532.956267590336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 656.1109154482975,
            "unit": "ns/iter",
            "extra": "iterations: 1064757\ncpu: 656.0967432005605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 512.6368248607365,
            "unit": "ns/iter",
            "extra": "iterations: 1366718\ncpu: 512.6245501998213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.3543499743944,
            "unit": "ns/iter",
            "extra": "iterations: 1367123\ncpu: 508.3453354233668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 469.48758319560875,
            "unit": "ns/iter",
            "extra": "iterations: 1471232\ncpu: 469.4691251957551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 917.7009201850941,
            "unit": "ns/iter",
            "extra": "iterations: 762890\ncpu: 917.6860359947037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2693.381243782996,
            "unit": "ns/iter",
            "extra": "iterations: 297576\ncpu: 2693.2844046562905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13154.985671651164,
            "unit": "ns/iter",
            "extra": "iterations: 62324\ncpu: 13154.787882677636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10589.532267046421,
            "unit": "ns/iter",
            "extra": "iterations: 77215\ncpu: 10589.108333872959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10250.288674633079,
            "unit": "ns/iter",
            "extra": "iterations: 80589\ncpu: 10249.859161920333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10047.1038085647,
            "unit": "ns/iter",
            "extra": "iterations: 81448\ncpu: 10046.591690403706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40751.37334253357,
            "unit": "ns/iter",
            "extra": "iterations: 20287\ncpu: 40750.09612066849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260064.6198425059,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 260055.0236220474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211279.14368229875,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 211275.76413959023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210283.21234206916,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 210275.4859086493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208702.63112598585,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 208700.95625149453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108304.2988961915,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 108299.7519533672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 211006.53978195478,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 211003.13152400817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5171.510150000245,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5171.367999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27019.477783672704,
            "unit": "ns/iter",
            "extra": "iterations: 30158\ncpu: 27019.295046090596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21138.010433284988,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 21137.4306768973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21031.504797009497,
            "unit": "ns/iter",
            "extra": "iterations: 39608\ncpu: 21031.47343970911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20831.316366483476,
            "unit": "ns/iter",
            "extra": "iterations: 39587\ncpu: 20830.52769848693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54633.72259492976,
            "unit": "ns/iter",
            "extra": "iterations: 15353\ncpu: 54633.00332182626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 287643.8896620257,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 287634.0622929073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 223578.12904884425,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 223572.64781491054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218785.67270408725,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 218778.62244897918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217952.60099750457,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 217947.90523690736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116710.22735250392,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 116707.65492102127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212276.67032699176,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 212269.98535871197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850653.5807314982,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 850633.5414808255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476737.85157499404,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 476723.3849439417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2668.1435536168588,
            "unit": "ns/iter",
            "extra": "iterations: 301929\ncpu: 2668.138535880945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13082.521052214604,
            "unit": "ns/iter",
            "extra": "iterations: 63105\ncpu: 13082.061643292844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10326.387957240826,
            "unit": "ns/iter",
            "extra": "iterations: 80264\ncpu: 10326.397886973047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9997.300312209909,
            "unit": "ns/iter",
            "extra": "iterations: 82957\ncpu: 9996.999650421234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9426.881224349783,
            "unit": "ns/iter",
            "extra": "iterations: 87720\ncpu: 9426.600547195589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39085.70778583075,
            "unit": "ns/iter",
            "extra": "iterations: 21385\ncpu: 39083.9279869067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280247.0978025361,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 280239.3376663587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 209558.32910500135,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 209552.57223396728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 208350.6069323339,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 208344.3763263369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 207130.34683841222,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 207122.6697892282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104295.91274369706,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 104291.916310033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 198004.41333334183,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 197998.10169491454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.01323997644246,
            "unit": "ns/iter",
            "extra": "iterations: 2882558\ncpu: 242.00310973794666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1661.8657240626958,
            "unit": "ns/iter",
            "extra": "iterations: 421103\ncpu: 1661.816230233451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1305.1805529353267,
            "unit": "ns/iter",
            "extra": "iterations: 535361\ncpu: 1305.1578280823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1320.9317914033052,
            "unit": "ns/iter",
            "extra": "iterations: 529596\ncpu: 1320.8674159170384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 945.1981861513694,
            "unit": "ns/iter",
            "extra": "iterations: 741848\ncpu: 945.1821666972266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10651.257162157992,
            "unit": "ns/iter",
            "extra": "iterations: 65134\ncpu: 10650.779930604584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13522.921993373122,
            "unit": "ns/iter",
            "extra": "iterations: 51611\ncpu: 13522.475828796265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3229.814383526927,
            "unit": "ns/iter",
            "extra": "iterations: 217179\ncpu: 3229.6851905571143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3218.485392418952,
            "unit": "ns/iter",
            "extra": "iterations: 216771\ncpu: 3218.4051372185318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3198.7459724598543,
            "unit": "ns/iter",
            "extra": "iterations: 217937\ncpu: 3198.5991364476727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5927.201946163672,
            "unit": "ns/iter",
            "extra": "iterations: 118284\ncpu: 5927.010415609889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5900.365119348847,
            "unit": "ns/iter",
            "extra": "iterations: 115921\ncpu: 5900.249307718154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2043.8163307727307,
            "unit": "ns/iter",
            "extra": "iterations: 341576\ncpu: 2043.7630278473725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10531.329889651888,
            "unit": "ns/iter",
            "extra": "iterations: 66789\ncpu: 10531.064995732653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8369.445518590237,
            "unit": "ns/iter",
            "extra": "iterations: 83891\ncpu: 8368.966873681406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8204.595615506169,
            "unit": "ns/iter",
            "extra": "iterations: 84662\ncpu: 8204.299449576018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8040.451633151337,
            "unit": "ns/iter",
            "extra": "iterations: 87622\ncpu: 8040.3072287781815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18006.92137185382,
            "unit": "ns/iter",
            "extra": "iterations: 38663\ncpu: 18006.341980705147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59518.6204311929,
            "unit": "ns/iter",
            "extra": "iterations: 11874\ncpu: 59518.2078490816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48536.233474077184,
            "unit": "ns/iter",
            "extra": "iterations: 14447\ncpu: 48534.027825846926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48814.01664809196,
            "unit": "ns/iter",
            "extra": "iterations: 14356\ncpu: 48813.96628587312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47636.869163990166,
            "unit": "ns/iter",
            "extra": "iterations: 14629\ncpu: 47636.05851391078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27086.714468529262,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27085.597394035896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45209.5711148424,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 45208.90065882949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1971.3258111490102,
            "unit": "ns/iter",
            "extra": "iterations: 353665\ncpu: 1971.2089123888654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10421.221652539403,
            "unit": "ns/iter",
            "extra": "iterations: 67484\ncpu: 10420.978305968762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8226.59039003776,
            "unit": "ns/iter",
            "extra": "iterations: 85120\ncpu: 8226.322838345848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8182.305127554488,
            "unit": "ns/iter",
            "extra": "iterations: 86708\ncpu: 8181.987821192998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8225.34737962375,
            "unit": "ns/iter",
            "extra": "iterations: 85503\ncpu: 8225.127773294385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17828.49672686474,
            "unit": "ns/iter",
            "extra": "iterations: 39259\ncpu: 17827.540181869084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57381.93786375625,
            "unit": "ns/iter",
            "extra": "iterations: 12199\ncpu: 57380.277071890436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46578.229673034955,
            "unit": "ns/iter",
            "extra": "iterations: 15017\ncpu: 46576.27355663565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46826.55362396246,
            "unit": "ns/iter",
            "extra": "iterations: 14956\ncpu: 46826.11660871864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46539.98319494946,
            "unit": "ns/iter",
            "extra": "iterations: 15055\ncpu: 46538.7977416139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27142.09730254153,
            "unit": "ns/iter",
            "extra": "iterations: 25765\ncpu: 27141.5059188821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45449.404071841906,
            "unit": "ns/iter",
            "extra": "iterations: 15423\ncpu: 45447.85061272127 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381120022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 691.5748979942348,
            "unit": "ns/iter",
            "extra": "iterations: 1018325\ncpu: 691.5602582672526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6139.099190968819,
            "unit": "ns/iter",
            "extra": "iterations: 132875\ncpu: 6138.926810912511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11803.023031654884,
            "unit": "ns/iter",
            "extra": "iterations: 70859\ncpu: 11802.404775681282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17656.98295048895,
            "unit": "ns/iter",
            "extra": "iterations: 47626\ncpu: 17656.347373283497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22770.473227929713,
            "unit": "ns/iter",
            "extra": "iterations: 35989\ncpu: 22769.25171580206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28083.77935056852,
            "unit": "ns/iter",
            "extra": "iterations: 29318\ncpu: 28083.716488164268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34013.87946464176,
            "unit": "ns/iter",
            "extra": "iterations: 25030\ncpu: 34012.70874950058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40147.41690796041,
            "unit": "ns/iter",
            "extra": "iterations: 21067\ncpu: 40146.61793326051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45533.61495994721,
            "unit": "ns/iter",
            "extra": "iterations: 18476\ncpu: 45532.956267590336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 656.1109154482975,
            "unit": "ns/iter",
            "extra": "iterations: 1064757\ncpu: 656.0967432005605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 512.6368248607365,
            "unit": "ns/iter",
            "extra": "iterations: 1366718\ncpu: 512.6245501998213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.3543499743944,
            "unit": "ns/iter",
            "extra": "iterations: 1367123\ncpu: 508.3453354233668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 469.48758319560875,
            "unit": "ns/iter",
            "extra": "iterations: 1471232\ncpu: 469.4691251957551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 917.7009201850941,
            "unit": "ns/iter",
            "extra": "iterations: 762890\ncpu: 917.6860359947037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2693.381243782996,
            "unit": "ns/iter",
            "extra": "iterations: 297576\ncpu: 2693.2844046562905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13154.985671651164,
            "unit": "ns/iter",
            "extra": "iterations: 62324\ncpu: 13154.787882677636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10589.532267046421,
            "unit": "ns/iter",
            "extra": "iterations: 77215\ncpu: 10589.108333872959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10250.288674633079,
            "unit": "ns/iter",
            "extra": "iterations: 80589\ncpu: 10249.859161920333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10047.1038085647,
            "unit": "ns/iter",
            "extra": "iterations: 81448\ncpu: 10046.591690403706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40751.37334253357,
            "unit": "ns/iter",
            "extra": "iterations: 20287\ncpu: 40750.09612066849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260064.6198425059,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 260055.0236220474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211279.14368229875,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 211275.76413959023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210283.21234206916,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 210275.4859086493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208702.63112598585,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 208700.95625149453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108304.2988961915,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 108299.7519533672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 211006.53978195478,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 211003.13152400817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5171.510150000245,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5171.367999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27019.477783672704,
            "unit": "ns/iter",
            "extra": "iterations: 30158\ncpu: 27019.295046090596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21138.010433284988,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 21137.4306768973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21031.504797009497,
            "unit": "ns/iter",
            "extra": "iterations: 39608\ncpu: 21031.47343970911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20831.316366483476,
            "unit": "ns/iter",
            "extra": "iterations: 39587\ncpu: 20830.52769848693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54633.72259492976,
            "unit": "ns/iter",
            "extra": "iterations: 15353\ncpu: 54633.00332182626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 287643.8896620257,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 287634.0622929073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 223578.12904884425,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 223572.64781491054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218785.67270408725,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 218778.62244897918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217952.60099750457,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 217947.90523690736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116710.22735250392,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 116707.65492102127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212276.67032699176,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 212269.98535871197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850653.5807314982,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 850633.5414808255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476737.85157499404,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 476723.3849439417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2668.1435536168588,
            "unit": "ns/iter",
            "extra": "iterations: 301929\ncpu: 2668.138535880945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13082.521052214604,
            "unit": "ns/iter",
            "extra": "iterations: 63105\ncpu: 13082.061643292844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10326.387957240826,
            "unit": "ns/iter",
            "extra": "iterations: 80264\ncpu: 10326.397886973047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9997.300312209909,
            "unit": "ns/iter",
            "extra": "iterations: 82957\ncpu: 9996.999650421234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9426.881224349783,
            "unit": "ns/iter",
            "extra": "iterations: 87720\ncpu: 9426.600547195589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39085.70778583075,
            "unit": "ns/iter",
            "extra": "iterations: 21385\ncpu: 39083.9279869067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280247.0978025361,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 280239.3376663587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 209558.32910500135,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 209552.57223396728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 208350.6069323339,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 208344.3763263369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 207130.34683841222,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 207122.6697892282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104295.91274369706,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 104291.916310033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 198004.41333334183,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 197998.10169491454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.01323997644246,
            "unit": "ns/iter",
            "extra": "iterations: 2882558\ncpu: 242.00310973794666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1661.8657240626958,
            "unit": "ns/iter",
            "extra": "iterations: 421103\ncpu: 1661.816230233451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1305.1805529353267,
            "unit": "ns/iter",
            "extra": "iterations: 535361\ncpu: 1305.1578280823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1320.9317914033052,
            "unit": "ns/iter",
            "extra": "iterations: 529596\ncpu: 1320.8674159170384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 945.1981861513694,
            "unit": "ns/iter",
            "extra": "iterations: 741848\ncpu: 945.1821666972266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10651.257162157992,
            "unit": "ns/iter",
            "extra": "iterations: 65134\ncpu: 10650.779930604584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13522.921993373122,
            "unit": "ns/iter",
            "extra": "iterations: 51611\ncpu: 13522.475828796265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3229.814383526927,
            "unit": "ns/iter",
            "extra": "iterations: 217179\ncpu: 3229.6851905571143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3218.485392418952,
            "unit": "ns/iter",
            "extra": "iterations: 216771\ncpu: 3218.4051372185318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3198.7459724598543,
            "unit": "ns/iter",
            "extra": "iterations: 217937\ncpu: 3198.5991364476727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5927.201946163672,
            "unit": "ns/iter",
            "extra": "iterations: 118284\ncpu: 5927.010415609889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5900.365119348847,
            "unit": "ns/iter",
            "extra": "iterations: 115921\ncpu: 5900.249307718154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2043.8163307727307,
            "unit": "ns/iter",
            "extra": "iterations: 341576\ncpu: 2043.7630278473725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10531.329889651888,
            "unit": "ns/iter",
            "extra": "iterations: 66789\ncpu: 10531.064995732653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8369.445518590237,
            "unit": "ns/iter",
            "extra": "iterations: 83891\ncpu: 8368.966873681406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8204.595615506169,
            "unit": "ns/iter",
            "extra": "iterations: 84662\ncpu: 8204.299449576018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8040.451633151337,
            "unit": "ns/iter",
            "extra": "iterations: 87622\ncpu: 8040.3072287781815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18006.92137185382,
            "unit": "ns/iter",
            "extra": "iterations: 38663\ncpu: 18006.341980705147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59518.6204311929,
            "unit": "ns/iter",
            "extra": "iterations: 11874\ncpu: 59518.2078490816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48536.233474077184,
            "unit": "ns/iter",
            "extra": "iterations: 14447\ncpu: 48534.027825846926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48814.01664809196,
            "unit": "ns/iter",
            "extra": "iterations: 14356\ncpu: 48813.96628587312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47636.869163990166,
            "unit": "ns/iter",
            "extra": "iterations: 14629\ncpu: 47636.05851391078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27086.714468529262,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27085.597394035896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45209.5711148424,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 45208.90065882949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1971.3258111490102,
            "unit": "ns/iter",
            "extra": "iterations: 353665\ncpu: 1971.2089123888654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10421.221652539403,
            "unit": "ns/iter",
            "extra": "iterations: 67484\ncpu: 10420.978305968762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8226.59039003776,
            "unit": "ns/iter",
            "extra": "iterations: 85120\ncpu: 8226.322838345848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8182.305127554488,
            "unit": "ns/iter",
            "extra": "iterations: 86708\ncpu: 8181.987821192998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8225.34737962375,
            "unit": "ns/iter",
            "extra": "iterations: 85503\ncpu: 8225.127773294385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17828.49672686474,
            "unit": "ns/iter",
            "extra": "iterations: 39259\ncpu: 17827.540181869084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57381.93786375625,
            "unit": "ns/iter",
            "extra": "iterations: 12199\ncpu: 57380.277071890436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46578.229673034955,
            "unit": "ns/iter",
            "extra": "iterations: 15017\ncpu: 46576.27355663565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46826.55362396246,
            "unit": "ns/iter",
            "extra": "iterations: 14956\ncpu: 46826.11660871864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46539.98319494946,
            "unit": "ns/iter",
            "extra": "iterations: 15055\ncpu: 46538.7977416139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27142.09730254153,
            "unit": "ns/iter",
            "extra": "iterations: 25765\ncpu: 27141.5059188821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45449.404071841906,
            "unit": "ns/iter",
            "extra": "iterations: 15423\ncpu: 45447.85061272127 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381120022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 691.5748979942348,
            "unit": "ns/iter",
            "extra": "iterations: 1018325\ncpu: 691.5602582672526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6139.099190968819,
            "unit": "ns/iter",
            "extra": "iterations: 132875\ncpu: 6138.926810912511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11803.023031654884,
            "unit": "ns/iter",
            "extra": "iterations: 70859\ncpu: 11802.404775681282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17656.98295048895,
            "unit": "ns/iter",
            "extra": "iterations: 47626\ncpu: 17656.347373283497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22770.473227929713,
            "unit": "ns/iter",
            "extra": "iterations: 35989\ncpu: 22769.25171580206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28083.77935056852,
            "unit": "ns/iter",
            "extra": "iterations: 29318\ncpu: 28083.716488164268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34013.87946464176,
            "unit": "ns/iter",
            "extra": "iterations: 25030\ncpu: 34012.70874950058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40147.41690796041,
            "unit": "ns/iter",
            "extra": "iterations: 21067\ncpu: 40146.61793326051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45533.61495994721,
            "unit": "ns/iter",
            "extra": "iterations: 18476\ncpu: 45532.956267590336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 656.1109154482975,
            "unit": "ns/iter",
            "extra": "iterations: 1064757\ncpu: 656.0967432005605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 512.6368248607365,
            "unit": "ns/iter",
            "extra": "iterations: 1366718\ncpu: 512.6245501998213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.3543499743944,
            "unit": "ns/iter",
            "extra": "iterations: 1367123\ncpu: 508.3453354233668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 469.48758319560875,
            "unit": "ns/iter",
            "extra": "iterations: 1471232\ncpu: 469.4691251957551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 917.7009201850941,
            "unit": "ns/iter",
            "extra": "iterations: 762890\ncpu: 917.6860359947037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2693.381243782996,
            "unit": "ns/iter",
            "extra": "iterations: 297576\ncpu: 2693.2844046562905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13154.985671651164,
            "unit": "ns/iter",
            "extra": "iterations: 62324\ncpu: 13154.787882677636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10589.532267046421,
            "unit": "ns/iter",
            "extra": "iterations: 77215\ncpu: 10589.108333872959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10250.288674633079,
            "unit": "ns/iter",
            "extra": "iterations: 80589\ncpu: 10249.859161920333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10047.1038085647,
            "unit": "ns/iter",
            "extra": "iterations: 81448\ncpu: 10046.591690403706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40751.37334253357,
            "unit": "ns/iter",
            "extra": "iterations: 20287\ncpu: 40750.09612066849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260064.6198425059,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 260055.0236220474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211279.14368229875,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 211275.76413959023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210283.21234206916,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 210275.4859086493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208702.63112598585,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 208700.95625149453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108304.2988961915,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 108299.7519533672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 211006.53978195478,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 211003.13152400817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5171.510150000245,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5171.367999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27019.477783672704,
            "unit": "ns/iter",
            "extra": "iterations: 30158\ncpu: 27019.295046090596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21138.010433284988,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 21137.4306768973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21031.504797009497,
            "unit": "ns/iter",
            "extra": "iterations: 39608\ncpu: 21031.47343970911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20831.316366483476,
            "unit": "ns/iter",
            "extra": "iterations: 39587\ncpu: 20830.52769848693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54633.72259492976,
            "unit": "ns/iter",
            "extra": "iterations: 15353\ncpu: 54633.00332182626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 287643.8896620257,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 287634.0622929073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 223578.12904884425,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 223572.64781491054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218785.67270408725,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 218778.62244897918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217952.60099750457,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 217947.90523690736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116710.22735250392,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 116707.65492102127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212276.67032699176,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 212269.98535871197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850653.5807314982,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 850633.5414808255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476737.85157499404,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 476723.3849439417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2668.1435536168588,
            "unit": "ns/iter",
            "extra": "iterations: 301929\ncpu: 2668.138535880945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13082.521052214604,
            "unit": "ns/iter",
            "extra": "iterations: 63105\ncpu: 13082.061643292844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10326.387957240826,
            "unit": "ns/iter",
            "extra": "iterations: 80264\ncpu: 10326.397886973047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9997.300312209909,
            "unit": "ns/iter",
            "extra": "iterations: 82957\ncpu: 9996.999650421234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9426.881224349783,
            "unit": "ns/iter",
            "extra": "iterations: 87720\ncpu: 9426.600547195589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39085.70778583075,
            "unit": "ns/iter",
            "extra": "iterations: 21385\ncpu: 39083.9279869067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280247.0978025361,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 280239.3376663587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 209558.32910500135,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 209552.57223396728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 208350.6069323339,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 208344.3763263369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 207130.34683841222,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 207122.6697892282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104295.91274369706,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 104291.916310033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 198004.41333334183,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 197998.10169491454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.01323997644246,
            "unit": "ns/iter",
            "extra": "iterations: 2882558\ncpu: 242.00310973794666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1661.8657240626958,
            "unit": "ns/iter",
            "extra": "iterations: 421103\ncpu: 1661.816230233451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1305.1805529353267,
            "unit": "ns/iter",
            "extra": "iterations: 535361\ncpu: 1305.1578280823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1320.9317914033052,
            "unit": "ns/iter",
            "extra": "iterations: 529596\ncpu: 1320.8674159170384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 945.1981861513694,
            "unit": "ns/iter",
            "extra": "iterations: 741848\ncpu: 945.1821666972266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10651.257162157992,
            "unit": "ns/iter",
            "extra": "iterations: 65134\ncpu: 10650.779930604584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13522.921993373122,
            "unit": "ns/iter",
            "extra": "iterations: 51611\ncpu: 13522.475828796265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3229.814383526927,
            "unit": "ns/iter",
            "extra": "iterations: 217179\ncpu: 3229.6851905571143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3218.485392418952,
            "unit": "ns/iter",
            "extra": "iterations: 216771\ncpu: 3218.4051372185318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3198.7459724598543,
            "unit": "ns/iter",
            "extra": "iterations: 217937\ncpu: 3198.5991364476727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5927.201946163672,
            "unit": "ns/iter",
            "extra": "iterations: 118284\ncpu: 5927.010415609889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5900.365119348847,
            "unit": "ns/iter",
            "extra": "iterations: 115921\ncpu: 5900.249307718154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2043.8163307727307,
            "unit": "ns/iter",
            "extra": "iterations: 341576\ncpu: 2043.7630278473725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10531.329889651888,
            "unit": "ns/iter",
            "extra": "iterations: 66789\ncpu: 10531.064995732653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8369.445518590237,
            "unit": "ns/iter",
            "extra": "iterations: 83891\ncpu: 8368.966873681406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8204.595615506169,
            "unit": "ns/iter",
            "extra": "iterations: 84662\ncpu: 8204.299449576018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8040.451633151337,
            "unit": "ns/iter",
            "extra": "iterations: 87622\ncpu: 8040.3072287781815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18006.92137185382,
            "unit": "ns/iter",
            "extra": "iterations: 38663\ncpu: 18006.341980705147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59518.6204311929,
            "unit": "ns/iter",
            "extra": "iterations: 11874\ncpu: 59518.2078490816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48536.233474077184,
            "unit": "ns/iter",
            "extra": "iterations: 14447\ncpu: 48534.027825846926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48814.01664809196,
            "unit": "ns/iter",
            "extra": "iterations: 14356\ncpu: 48813.96628587312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47636.869163990166,
            "unit": "ns/iter",
            "extra": "iterations: 14629\ncpu: 47636.05851391078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27086.714468529262,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27085.597394035896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45209.5711148424,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 45208.90065882949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1971.3258111490102,
            "unit": "ns/iter",
            "extra": "iterations: 353665\ncpu: 1971.2089123888654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10421.221652539403,
            "unit": "ns/iter",
            "extra": "iterations: 67484\ncpu: 10420.978305968762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8226.59039003776,
            "unit": "ns/iter",
            "extra": "iterations: 85120\ncpu: 8226.322838345848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8182.305127554488,
            "unit": "ns/iter",
            "extra": "iterations: 86708\ncpu: 8181.987821192998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8225.34737962375,
            "unit": "ns/iter",
            "extra": "iterations: 85503\ncpu: 8225.127773294385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17828.49672686474,
            "unit": "ns/iter",
            "extra": "iterations: 39259\ncpu: 17827.540181869084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57381.93786375625,
            "unit": "ns/iter",
            "extra": "iterations: 12199\ncpu: 57380.277071890436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46578.229673034955,
            "unit": "ns/iter",
            "extra": "iterations: 15017\ncpu: 46576.27355663565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46826.55362396246,
            "unit": "ns/iter",
            "extra": "iterations: 14956\ncpu: 46826.11660871864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46539.98319494946,
            "unit": "ns/iter",
            "extra": "iterations: 15055\ncpu: 46538.7977416139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27142.09730254153,
            "unit": "ns/iter",
            "extra": "iterations: 25765\ncpu: 27141.5059188821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45449.404071841906,
            "unit": "ns/iter",
            "extra": "iterations: 15423\ncpu: 45447.85061272127 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381120022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 691.5748979942348,
            "unit": "ns/iter",
            "extra": "iterations: 1018325\ncpu: 691.5602582672526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6139.099190968819,
            "unit": "ns/iter",
            "extra": "iterations: 132875\ncpu: 6138.926810912511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11803.023031654884,
            "unit": "ns/iter",
            "extra": "iterations: 70859\ncpu: 11802.404775681282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17656.98295048895,
            "unit": "ns/iter",
            "extra": "iterations: 47626\ncpu: 17656.347373283497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22770.473227929713,
            "unit": "ns/iter",
            "extra": "iterations: 35989\ncpu: 22769.25171580206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28083.77935056852,
            "unit": "ns/iter",
            "extra": "iterations: 29318\ncpu: 28083.716488164268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34013.87946464176,
            "unit": "ns/iter",
            "extra": "iterations: 25030\ncpu: 34012.70874950058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40147.41690796041,
            "unit": "ns/iter",
            "extra": "iterations: 21067\ncpu: 40146.61793326051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45533.61495994721,
            "unit": "ns/iter",
            "extra": "iterations: 18476\ncpu: 45532.956267590336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 656.1109154482975,
            "unit": "ns/iter",
            "extra": "iterations: 1064757\ncpu: 656.0967432005605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 512.6368248607365,
            "unit": "ns/iter",
            "extra": "iterations: 1366718\ncpu: 512.6245501998213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 508.3543499743944,
            "unit": "ns/iter",
            "extra": "iterations: 1367123\ncpu: 508.3453354233668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 469.48758319560875,
            "unit": "ns/iter",
            "extra": "iterations: 1471232\ncpu: 469.4691251957551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 917.7009201850941,
            "unit": "ns/iter",
            "extra": "iterations: 762890\ncpu: 917.6860359947037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2693.381243782996,
            "unit": "ns/iter",
            "extra": "iterations: 297576\ncpu: 2693.2844046562905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13154.985671651164,
            "unit": "ns/iter",
            "extra": "iterations: 62324\ncpu: 13154.787882677636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10589.532267046421,
            "unit": "ns/iter",
            "extra": "iterations: 77215\ncpu: 10589.108333872959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10250.288674633079,
            "unit": "ns/iter",
            "extra": "iterations: 80589\ncpu: 10249.859161920333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10047.1038085647,
            "unit": "ns/iter",
            "extra": "iterations: 81448\ncpu: 10046.591690403706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40751.37334253357,
            "unit": "ns/iter",
            "extra": "iterations: 20287\ncpu: 40750.09612066849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260064.6198425059,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 260055.0236220474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211279.14368229875,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 211275.76413959023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210283.21234206916,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 210275.4859086493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208702.63112598585,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 208700.95625149453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108304.2988961915,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 108299.7519533672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 211006.53978195478,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 211003.13152400817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5171.510150000245,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5171.367999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27019.477783672704,
            "unit": "ns/iter",
            "extra": "iterations: 30158\ncpu: 27019.295046090596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21138.010433284988,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 21137.4306768973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21031.504797009497,
            "unit": "ns/iter",
            "extra": "iterations: 39608\ncpu: 21031.47343970911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20831.316366483476,
            "unit": "ns/iter",
            "extra": "iterations: 39587\ncpu: 20830.52769848693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54633.72259492976,
            "unit": "ns/iter",
            "extra": "iterations: 15353\ncpu: 54633.00332182626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 287643.8896620257,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 287634.0622929073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 223578.12904884425,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 223572.64781491054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 218785.67270408725,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 218778.62244897918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217952.60099750457,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 217947.90523690736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116710.22735250392,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 116707.65492102127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212276.67032699176,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 212269.98535871197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 850653.5807314982,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 850633.5414808255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 476737.85157499404,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 476723.3849439417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2668.1435536168588,
            "unit": "ns/iter",
            "extra": "iterations: 301929\ncpu: 2668.138535880945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13082.521052214604,
            "unit": "ns/iter",
            "extra": "iterations: 63105\ncpu: 13082.061643292844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10326.387957240826,
            "unit": "ns/iter",
            "extra": "iterations: 80264\ncpu: 10326.397886973047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9997.300312209909,
            "unit": "ns/iter",
            "extra": "iterations: 82957\ncpu: 9996.999650421234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9426.881224349783,
            "unit": "ns/iter",
            "extra": "iterations: 87720\ncpu: 9426.600547195589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39085.70778583075,
            "unit": "ns/iter",
            "extra": "iterations: 21385\ncpu: 39083.9279869067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280247.0978025361,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 280239.3376663587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 209558.32910500135,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 209552.57223396728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 208350.6069323339,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 208344.3763263369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 207130.34683841222,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 207122.6697892282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104295.91274369706,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 104291.916310033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 198004.41333334183,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 197998.10169491454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.01323997644246,
            "unit": "ns/iter",
            "extra": "iterations: 2882558\ncpu: 242.00310973794666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1661.8657240626958,
            "unit": "ns/iter",
            "extra": "iterations: 421103\ncpu: 1661.816230233451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1305.1805529353267,
            "unit": "ns/iter",
            "extra": "iterations: 535361\ncpu: 1305.1578280823546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1320.9317914033052,
            "unit": "ns/iter",
            "extra": "iterations: 529596\ncpu: 1320.8674159170384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 945.1981861513694,
            "unit": "ns/iter",
            "extra": "iterations: 741848\ncpu: 945.1821666972266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10651.257162157992,
            "unit": "ns/iter",
            "extra": "iterations: 65134\ncpu: 10650.779930604584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13522.921993373122,
            "unit": "ns/iter",
            "extra": "iterations: 51611\ncpu: 13522.475828796265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3229.814383526927,
            "unit": "ns/iter",
            "extra": "iterations: 217179\ncpu: 3229.6851905571143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3218.485392418952,
            "unit": "ns/iter",
            "extra": "iterations: 216771\ncpu: 3218.4051372185318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3198.7459724598543,
            "unit": "ns/iter",
            "extra": "iterations: 217937\ncpu: 3198.5991364476727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5927.201946163672,
            "unit": "ns/iter",
            "extra": "iterations: 118284\ncpu: 5927.010415609889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5900.365119348847,
            "unit": "ns/iter",
            "extra": "iterations: 115921\ncpu: 5900.249307718154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2043.8163307727307,
            "unit": "ns/iter",
            "extra": "iterations: 341576\ncpu: 2043.7630278473725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10531.329889651888,
            "unit": "ns/iter",
            "extra": "iterations: 66789\ncpu: 10531.064995732653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8369.445518590237,
            "unit": "ns/iter",
            "extra": "iterations: 83891\ncpu: 8368.966873681406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8204.595615506169,
            "unit": "ns/iter",
            "extra": "iterations: 84662\ncpu: 8204.299449576018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8040.451633151337,
            "unit": "ns/iter",
            "extra": "iterations: 87622\ncpu: 8040.3072287781815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18006.92137185382,
            "unit": "ns/iter",
            "extra": "iterations: 38663\ncpu: 18006.341980705147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59518.6204311929,
            "unit": "ns/iter",
            "extra": "iterations: 11874\ncpu: 59518.2078490816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48536.233474077184,
            "unit": "ns/iter",
            "extra": "iterations: 14447\ncpu: 48534.027825846926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48814.01664809196,
            "unit": "ns/iter",
            "extra": "iterations: 14356\ncpu: 48813.96628587312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47636.869163990166,
            "unit": "ns/iter",
            "extra": "iterations: 14629\ncpu: 47636.05851391078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27086.714468529262,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27085.597394035896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45209.5711148424,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 45208.90065882949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1971.3258111490102,
            "unit": "ns/iter",
            "extra": "iterations: 353665\ncpu: 1971.2089123888654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10421.221652539403,
            "unit": "ns/iter",
            "extra": "iterations: 67484\ncpu: 10420.978305968762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8226.59039003776,
            "unit": "ns/iter",
            "extra": "iterations: 85120\ncpu: 8226.322838345848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8182.305127554488,
            "unit": "ns/iter",
            "extra": "iterations: 86708\ncpu: 8181.987821192998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8225.34737962375,
            "unit": "ns/iter",
            "extra": "iterations: 85503\ncpu: 8225.127773294385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17828.49672686474,
            "unit": "ns/iter",
            "extra": "iterations: 39259\ncpu: 17827.540181869084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57381.93786375625,
            "unit": "ns/iter",
            "extra": "iterations: 12199\ncpu: 57380.277071890436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46578.229673034955,
            "unit": "ns/iter",
            "extra": "iterations: 15017\ncpu: 46576.27355663565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46826.55362396246,
            "unit": "ns/iter",
            "extra": "iterations: 14956\ncpu: 46826.11660871864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46539.98319494946,
            "unit": "ns/iter",
            "extra": "iterations: 15055\ncpu: 46538.7977416139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27142.09730254153,
            "unit": "ns/iter",
            "extra": "iterations: 25765\ncpu: 27141.5059188821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45449.404071841906,
            "unit": "ns/iter",
            "extra": "iterations: 15423\ncpu: 45447.85061272127 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}