window.BENCHMARK_DATA = {
  "lastUpdate": 1702396476384,
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
        "date": 1702382316217,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 697.4925097151521,
            "unit": "ns/iter",
            "extra": "iterations: 1005903\ncpu: 697.4430934195444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6134.871334042059,
            "unit": "ns/iter",
            "extra": "iterations: 133594\ncpu: 6134.471608006348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11742.664677195255,
            "unit": "ns/iter",
            "extra": "iterations: 70538\ncpu: 11741.72786299583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17626.65872199223,
            "unit": "ns/iter",
            "extra": "iterations: 47621\ncpu: 17625.419457802236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23284.798049132216,
            "unit": "ns/iter",
            "extra": "iterations: 35984\ncpu: 23283.395397954657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28321.95458099566,
            "unit": "ns/iter",
            "extra": "iterations: 29415\ncpu: 28318.371579126284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34596.6859197032,
            "unit": "ns/iter",
            "extra": "iterations: 24758\ncpu: 34593.85249212373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40074.92226519626,
            "unit": "ns/iter",
            "extra": "iterations: 20943\ncpu: 40073.95311082462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45832.96417344133,
            "unit": "ns/iter",
            "extra": "iterations: 18450\ncpu: 45829.127371273666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 659.954611972242,
            "unit": "ns/iter",
            "extra": "iterations: 1044835\ncpu: 659.9417132848729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 481.0711024981415,
            "unit": "ns/iter",
            "extra": "iterations: 1458261\ncpu: 481.0459170203403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 465.3438040859302,
            "unit": "ns/iter",
            "extra": "iterations: 1503394\ncpu: 465.31488086290057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 463.6792793760786,
            "unit": "ns/iter",
            "extra": "iterations: 1507527\ncpu: 463.6382631952855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 917.9071362138415,
            "unit": "ns/iter",
            "extra": "iterations: 761244\ncpu: 917.8371192416627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2654.5700366660185,
            "unit": "ns/iter",
            "extra": "iterations: 301642\ncpu: 2654.347537809722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13486.092400262982,
            "unit": "ns/iter",
            "extra": "iterations: 62489\ncpu: 13484.861335595053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11003.471840557666,
            "unit": "ns/iter",
            "extra": "iterations: 74309\ncpu: 11002.407514567547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11081.098304669871,
            "unit": "ns/iter",
            "extra": "iterations: 73496\ncpu: 11080.530913247005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10483.826529029935,
            "unit": "ns/iter",
            "extra": "iterations: 77402\ncpu: 10482.545670654506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40748.36438101045,
            "unit": "ns/iter",
            "extra": "iterations: 20388\ncpu: 40745.217775161764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261147.0328610203,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 261116.4305094967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211941.36630302554,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 211928.60606060657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210606.02819276543,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 210584.81927710804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208933.25437124938,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 208918.92215568855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108280.47229813859,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 108270.17391304378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202276.52408389281,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 202258.7923484676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5171.815580000043,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5171.029000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26842.103370491946,
            "unit": "ns/iter",
            "extra": "iterations: 30589\ncpu: 26840.11245872706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21214.42347367567,
            "unit": "ns/iter",
            "extra": "iterations: 39261\ncpu: 21212.037390794914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20919.096904565442,
            "unit": "ns/iter",
            "extra": "iterations: 32661\ncpu: 20917.666329873457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20744.609486662728,
            "unit": "ns/iter",
            "extra": "iterations: 39740\ncpu: 20743.475088072522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55091.475040042234,
            "unit": "ns/iter",
            "extra": "iterations: 14984\ncpu: 55090.40977042184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 285301.9752475194,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 285285.6435643564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220156.18881830617,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 220141.60101651837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 220562.70168808437,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 220548.37490551834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 219702.7294794918,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 219684.08408408376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 118213.7648568395,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 118206.8881685577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 209583.6452784469,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 209570.2905569011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 854140.4321428152,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 854067.5892857166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477796.37588269875,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 477760.18468223774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2612.949181835958,
            "unit": "ns/iter",
            "extra": "iterations: 305501\ncpu: 2612.8366191927353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12949.341452710185,
            "unit": "ns/iter",
            "extra": "iterations: 63798\ncpu: 12948.501520423797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10090.033813414919,
            "unit": "ns/iter",
            "extra": "iterations: 81861\ncpu: 10089.399103358144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10523.993638837585,
            "unit": "ns/iter",
            "extra": "iterations: 78602\ncpu: 10523.686420192906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9705.826335156939,
            "unit": "ns/iter",
            "extra": "iterations: 84784\ncpu: 9705.521088884696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39801.17459109629,
            "unit": "ns/iter",
            "extra": "iterations: 21032\ncpu: 39797.751046025005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 279498.6303661407,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 279478.63005050586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 210494.71984622243,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 210477.79913503092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210236.2421631901,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 210223.9530988274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 207101.4454437996,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 207084.71005917102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106100.64225181236,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 106094.58837772397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 200946.88263444035,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 200933.40929808634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 248.54600812507832,
            "unit": "ns/iter",
            "extra": "iterations: 2824099\ncpu: 248.53066411623544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 2184.8472593272,
            "unit": "ns/iter",
            "extra": "iterations: 333513\ncpu: 2184.6710622974147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1400.2118634720298,
            "unit": "ns/iter",
            "extra": "iterations: 498741\ncpu: 1400.190479627699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1268.6732469291235,
            "unit": "ns/iter",
            "extra": "iterations: 555297\ncpu: 1268.605629059764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 944.7272997500312,
            "unit": "ns/iter",
            "extra": "iterations: 743483\ncpu: 944.7207266339644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10746.226689137573,
            "unit": "ns/iter",
            "extra": "iterations: 65270\ncpu: 10745.832694959385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14321.122807702734,
            "unit": "ns/iter",
            "extra": "iterations: 51316\ncpu: 14320.892119417013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3255.001616391802,
            "unit": "ns/iter",
            "extra": "iterations: 215913\ncpu: 3254.9059111771817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3248.31691361099,
            "unit": "ns/iter",
            "extra": "iterations: 215838\ncpu: 3248.2250576821752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3236.268953987253,
            "unit": "ns/iter",
            "extra": "iterations: 214137\ncpu: 3236.1684342267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5980.859592465036,
            "unit": "ns/iter",
            "extra": "iterations: 117045\ncpu: 5980.69460463921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6137.148383028136,
            "unit": "ns/iter",
            "extra": "iterations: 114164\ncpu: 6136.970498580982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2021.4014148862173,
            "unit": "ns/iter",
            "extra": "iterations: 346883\ncpu: 2021.3337061775787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10402.541564754847,
            "unit": "ns/iter",
            "extra": "iterations: 67052\ncpu: 10402.013362763115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8209.924396413211,
            "unit": "ns/iter",
            "extra": "iterations: 85406\ncpu: 8209.669109898601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8047.829306806915,
            "unit": "ns/iter",
            "extra": "iterations: 86758\ncpu: 8047.581779201918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8001.042215430359,
            "unit": "ns/iter",
            "extra": "iterations: 88001\ncpu: 8000.90112612354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18180.766467532358,
            "unit": "ns/iter",
            "extra": "iterations: 38500\ncpu: 18180.441558441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58461.28621966457,
            "unit": "ns/iter",
            "extra": "iterations: 12155\ncpu: 58460.830933771984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49558.45918015548,
            "unit": "ns/iter",
            "extra": "iterations: 14515\ncpu: 49557.48535997235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47955.58987532515,
            "unit": "ns/iter",
            "extra": "iterations: 14598\ncpu: 47954.069050554135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46604.90746288487,
            "unit": "ns/iter",
            "extra": "iterations: 15021\ncpu: 46604.53365288606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26859.223968939623,
            "unit": "ns/iter",
            "extra": "iterations: 26017\ncpu: 26858.300342083858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45857.00149389524,
            "unit": "ns/iter",
            "extra": "iterations: 15396\ncpu: 45855.24162120056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2007.8547733113967,
            "unit": "ns/iter",
            "extra": "iterations: 347746\ncpu: 2007.7674509556161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10347.462142239643,
            "unit": "ns/iter",
            "extra": "iterations: 67014\ncpu: 10347.384128689506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8226.564360837607,
            "unit": "ns/iter",
            "extra": "iterations: 85479\ncpu: 8226.417014705463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8148.569455443723,
            "unit": "ns/iter",
            "extra": "iterations: 85868\ncpu: 8148.398704989063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8135.0500959358105,
            "unit": "ns/iter",
            "extra": "iterations: 85995\ncpu: 8134.712483284028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18191.671585082266,
            "unit": "ns/iter",
            "extra": "iterations: 38427\ncpu: 18190.95167460374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58834.41832637231,
            "unit": "ns/iter",
            "extra": "iterations: 12201\ncpu: 58834.01360544285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46944.82928960426,
            "unit": "ns/iter",
            "extra": "iterations: 14879\ncpu: 46943.91424154898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47659.08326644961,
            "unit": "ns/iter",
            "extra": "iterations: 14952\ncpu: 47657.32343499231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46595.297019184545,
            "unit": "ns/iter",
            "extra": "iterations: 15063\ncpu: 46594.46989311565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27251.45951630196,
            "unit": "ns/iter",
            "extra": "iterations: 25677\ncpu: 27250.917163219685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46106.398985911896,
            "unit": "ns/iter",
            "extra": "iterations: 15186\ncpu: 46104.14197287047 ns\nthreads: 1"
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
        "date": 1702387065508,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 703.9612870496593,
            "unit": "ns/iter",
            "extra": "iterations: 995455\ncpu: 703.9075598595618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6112.730023006109,
            "unit": "ns/iter",
            "extra": "iterations: 133441\ncpu: 6112.479672664323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11583.84465175019,
            "unit": "ns/iter",
            "extra": "iterations: 71285\ncpu: 11583.365364382411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17399.93108832749,
            "unit": "ns/iter",
            "extra": "iterations: 48671\ncpu: 17399.287049783237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22909.338862300803,
            "unit": "ns/iter",
            "extra": "iterations: 36776\ncpu: 22907.619099412655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29255.41341894722,
            "unit": "ns/iter",
            "extra": "iterations: 29123\ncpu: 29254.067232084595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34555.13226608,
            "unit": "ns/iter",
            "extra": "iterations: 24549\ncpu: 34554.43806265022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39946.16246177357,
            "unit": "ns/iter",
            "extra": "iterations: 20928\ncpu: 39945.47018348621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45139.49270367832,
            "unit": "ns/iter",
            "extra": "iterations: 18571\ncpu: 45138.56550535778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 655.3184215676273,
            "unit": "ns/iter",
            "extra": "iterations: 1057733\ncpu: 655.3136755684094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 511.5526030170685,
            "unit": "ns/iter",
            "extra": "iterations: 1369142\ncpu: 511.53780981081565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 512.6407381255755,
            "unit": "ns/iter",
            "extra": "iterations: 1362424\ncpu: 512.6189057151078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 511.5249341844214,
            "unit": "ns/iter",
            "extra": "iterations: 1373155\ncpu: 511.5115919178823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 968.6573999849851,
            "unit": "ns/iter",
            "extra": "iterations: 721042\ncpu: 968.6265155150461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2768.9582415077934,
            "unit": "ns/iter",
            "extra": "iterations: 289498\ncpu: 2768.932082432344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13246.948431840516,
            "unit": "ns/iter",
            "extra": "iterations: 61569\ncpu: 13246.408094982866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10763.788437851706,
            "unit": "ns/iter",
            "extra": "iterations: 75505\ncpu: 10763.599761605206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10660.946219705505,
            "unit": "ns/iter",
            "extra": "iterations: 75920\ncpu: 10660.331928345611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10381.49648562298,
            "unit": "ns/iter",
            "extra": "iterations: 78250\ncpu: 10381.297124600602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41088.15604494029,
            "unit": "ns/iter",
            "extra": "iterations: 20116\ncpu: 41086.617617816584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260298.4562612181,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 260293.91851408032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210974.1755909313,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 210970.16401350696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211087.78599127257,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 211080.6349975765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208849.15808383195,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 208844.98203592768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107595.82005936337,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 107591.87484541204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 201369.81202488,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 201362.52015664589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5223.480280000103,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5223.423999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27281.211516760417,
            "unit": "ns/iter",
            "extra": "iterations: 30130\ncpu: 27280.086292731496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21520.19387303872,
            "unit": "ns/iter",
            "extra": "iterations: 38453\ncpu: 21519.915221179064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21527.779763429495,
            "unit": "ns/iter",
            "extra": "iterations: 39058\ncpu: 21526.888217522588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20475.78074587961,
            "unit": "ns/iter",
            "extra": "iterations: 40355\ncpu: 20475.601536364815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54270.94789762318,
            "unit": "ns/iter",
            "extra": "iterations: 15316\ncpu: 54269.91381561769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284616.4838393744,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 284607.1825008168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 224619.39933058078,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 224612.04943357303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 222206.7434782588,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 222196.64961636788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218563.56355931453,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 218553.88833499543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117590.60056164808,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 117583.24418293616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212437.38591757193,
            "unit": "ns/iter",
            "extra": "iterations: 4076\ncpu: 212427.30618253248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 855219.9460431808,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 855179.2266187059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 482541.34168937104,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 482529.48228882835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2626.518752803502,
            "unit": "ns/iter",
            "extra": "iterations: 307634\ncpu: 2626.3780986497045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12688.859626122676,
            "unit": "ns/iter",
            "extra": "iterations: 64834\ncpu: 12688.543048400616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10118.917856220434,
            "unit": "ns/iter",
            "extra": "iterations: 81333\ncpu: 10118.360321148915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 9917.650600228919,
            "unit": "ns/iter",
            "extra": "iterations: 82885\ncpu: 9917.40363153767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9420.070524412651,
            "unit": "ns/iter",
            "extra": "iterations: 87374\ncpu: 9419.509236157233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39891.17953338407,
            "unit": "ns/iter",
            "extra": "iterations: 21088\ncpu: 39889.671851289575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 274612.8659112286,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 274599.11866540794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 207996.33129842757,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 207989.45761915948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 209060.13954040007,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 209047.85595830332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212957.65157943685,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 212952.40452616647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104109.71015876664,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 104107.13859376822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 199947.0800904998,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 199940.40723981877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 239.45507854431602,
            "unit": "ns/iter",
            "extra": "iterations: 2911159\ncpu: 239.44927089176403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1679.315458079964,
            "unit": "ns/iter",
            "extra": "iterations: 416423\ncpu: 1679.298213595302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1306.4856101921694,
            "unit": "ns/iter",
            "extra": "iterations: 534684\ncpu: 1306.4316493480342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1287.5647582354895,
            "unit": "ns/iter",
            "extra": "iterations: 532357\ncpu: 1287.5187139457094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 940.0767170425835,
            "unit": "ns/iter",
            "extra": "iterations: 747448\ncpu: 940.0050572079988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11017.302630127208,
            "unit": "ns/iter",
            "extra": "iterations: 63457\ncpu: 11016.88702586002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14524.66095005865,
            "unit": "ns/iter",
            "extra": "iterations: 48397\ncpu: 14524.160588466137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3294.7978536292126,
            "unit": "ns/iter",
            "extra": "iterations: 212638\ncpu: 3294.664641315298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3288.943440613863,
            "unit": "ns/iter",
            "extra": "iterations: 212962\ncpu: 3288.7444708445446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3265.6370221796974,
            "unit": "ns/iter",
            "extra": "iterations: 214385\ncpu: 3265.4551391188634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5457.364774207357,
            "unit": "ns/iter",
            "extra": "iterations: 122081\ncpu: 5457.171877687732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5649.587753596157,
            "unit": "ns/iter",
            "extra": "iterations: 121995\ncpu: 5649.354481741022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1980.258695964695,
            "unit": "ns/iter",
            "extra": "iterations: 354791\ncpu: 1980.203838316105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10390.638586756359,
            "unit": "ns/iter",
            "extra": "iterations: 67759\ncpu: 10389.943771307044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8014.293094420622,
            "unit": "ns/iter",
            "extra": "iterations: 85945\ncpu: 8014.042701727902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7931.764894529868,
            "unit": "ns/iter",
            "extra": "iterations: 88556\ncpu: 7931.506617281707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8038.237308322156,
            "unit": "ns/iter",
            "extra": "iterations: 87321\ncpu: 8038.114542893545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18160.67887075361,
            "unit": "ns/iter",
            "extra": "iterations: 38539\ncpu: 18160.105347829358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58522.49194826722,
            "unit": "ns/iter",
            "extra": "iterations: 11985\ncpu: 58519.09052982886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47344.591804945216,
            "unit": "ns/iter",
            "extra": "iterations: 14765\ncpu: 47342.980020318384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47188.764320897535,
            "unit": "ns/iter",
            "extra": "iterations: 14821\ncpu: 47187.537952905375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46444.72439330621,
            "unit": "ns/iter",
            "extra": "iterations: 15123\ncpu: 46441.10295576299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27007.42570358651,
            "unit": "ns/iter",
            "extra": "iterations: 25903\ncpu: 27006.346755202303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46346.57240518007,
            "unit": "ns/iter",
            "extra": "iterations: 15213\ncpu: 46343.85722737068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1996.579508870441,
            "unit": "ns/iter",
            "extra": "iterations: 350376\ncpu: 1996.4920542503057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10372.927798316285,
            "unit": "ns/iter",
            "extra": "iterations: 67353\ncpu: 10372.35609401216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8138.169616485,
            "unit": "ns/iter",
            "extra": "iterations: 85994\ncpu: 8137.980556782969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8111.969916843351,
            "unit": "ns/iter",
            "extra": "iterations: 85862\ncpu: 8111.739768465672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8060.284809177045,
            "unit": "ns/iter",
            "extra": "iterations: 86651\ncpu: 8059.812350694147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17860.739392085194,
            "unit": "ns/iter",
            "extra": "iterations: 39216\ncpu: 17860.20246838037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56981.26884176273,
            "unit": "ns/iter",
            "extra": "iterations: 12260\ncpu: 56977.52854812374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46440.926146910446,
            "unit": "ns/iter",
            "extra": "iterations: 15084\ncpu: 46438.68337310995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46433.09511517187,
            "unit": "ns/iter",
            "extra": "iterations: 15108\ncpu: 46430.758538523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46416.64761654162,
            "unit": "ns/iter",
            "extra": "iterations: 15188\ncpu: 46416.861996313215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26978.80670093521,
            "unit": "ns/iter",
            "extra": "iterations: 25877\ncpu: 26978.003632569365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46180.849408669084,
            "unit": "ns/iter",
            "extra": "iterations: 15220\ncpu: 46179.507227331604 ns\nthreads: 1"
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
        "date": 1702388111987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 720.7294122326256,
            "unit": "ns/iter",
            "extra": "iterations: 980643\ncpu: 720.7231377779683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6415.519999373654,
            "unit": "ns/iter",
            "extra": "iterations: 127729\ncpu: 6415.365343813855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12073.93422876203,
            "unit": "ns/iter",
            "extra": "iterations: 67826\ncpu: 12073.49836345944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18171.12492139514,
            "unit": "ns/iter",
            "extra": "iterations: 46117\ncpu: 18170.607368215628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23980.64651717931,
            "unit": "ns/iter",
            "extra": "iterations: 35187\ncpu: 23980.271122857866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29969.95393668069,
            "unit": "ns/iter",
            "extra": "iterations: 27701\ncpu: 29968.654561207164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35662.468903403096,
            "unit": "ns/iter",
            "extra": "iterations: 23427\ncpu: 35661.89866393477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41492.58942705044,
            "unit": "ns/iter",
            "extra": "iterations: 20089\ncpu: 41491.3036985415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46949.490619926866,
            "unit": "ns/iter",
            "extra": "iterations: 17857\ncpu: 46948.14358514866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 688.7026550147473,
            "unit": "ns/iter",
            "extra": "iterations: 1020145\ncpu: 688.672002509446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 519.9712726470428,
            "unit": "ns/iter",
            "extra": "iterations: 1327933\ncpu: 519.961850484927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 522.4839870475707,
            "unit": "ns/iter",
            "extra": "iterations: 1345848\ncpu: 522.4746776753392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 499.4563447483102,
            "unit": "ns/iter",
            "extra": "iterations: 1325419\ncpu: 499.43542381692157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 999.2251419253831,
            "unit": "ns/iter",
            "extra": "iterations: 697902\ncpu: 999.1819768391543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2792.1644865983367,
            "unit": "ns/iter",
            "extra": "iterations: 278661\ncpu: 2792.022923911131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13441.720969984048,
            "unit": "ns/iter",
            "extra": "iterations: 62599\ncpu: 13441.495870541043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11058.514686807854,
            "unit": "ns/iter",
            "extra": "iterations: 74012\ncpu: 11058.187861427858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11138.295855717097,
            "unit": "ns/iter",
            "extra": "iterations: 72968\ncpu: 11138.046815042208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10543.090785801673,
            "unit": "ns/iter",
            "extra": "iterations: 76686\ncpu: 10542.629684688203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41460.6810479999,
            "unit": "ns/iter",
            "extra": "iterations: 19771\ncpu: 41459.99696525208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273937.65474643523,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 273928.5110533157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 229996.50236376372,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 229991.66459318215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216975.4237415545,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 216961.00676183315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215973.54318237508,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 215967.28532541433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112098.58673275298,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 112094.3957300802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208546.13747646188,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 208540.4190207157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5816.161319999651,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5815.844999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28840.21243126648,
            "unit": "ns/iter",
            "extra": "iterations: 28734\ncpu: 28839.956149509242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22529.687758690696,
            "unit": "ns/iter",
            "extra": "iterations: 36965\ncpu: 22529.076153117803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22567.846624932554,
            "unit": "ns/iter",
            "extra": "iterations: 36740\ncpu: 22567.465977136686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22158.67528811897,
            "unit": "ns/iter",
            "extra": "iterations: 37658\ncpu: 22157.889425885634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 56668.77257366814,
            "unit": "ns/iter",
            "extra": "iterations: 14796\ncpu: 56667.7547985941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 295575.8786851846,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 295571.2978651322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 229499.78746098245,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 229486.4984391259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228396.53689167928,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 228392.9094714796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224464.14458451554,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 224456.85618729057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121245.49135905436,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 121243.79925342146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 215532.2579345083,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 215522.49370277137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 875629.5566727337,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 875615.9963436903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 490131.0011067909,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 490113.945766466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2801.8309245231912,
            "unit": "ns/iter",
            "extra": "iterations: 282643\ncpu: 2801.7693698411217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12740.584114743811,
            "unit": "ns/iter",
            "extra": "iterations: 64840\ncpu: 12740.1233806293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10136.21090108924,
            "unit": "ns/iter",
            "extra": "iterations: 80891\ncpu: 10136.12021114833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10263.785859319907,
            "unit": "ns/iter",
            "extra": "iterations: 79784\ncpu: 10263.203148500974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9831.295245270276,
            "unit": "ns/iter",
            "extra": "iterations: 83622\ncpu: 9830.902154935258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 40329.29132301175,
            "unit": "ns/iter",
            "extra": "iterations: 20733\ncpu: 40327.36217624081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281682.6377502502,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 281671.33778201387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 214376.19541910736,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 214371.00389863588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216090.72260612436,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 216084.05725567573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212112.64478483322,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 212101.41016289746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106942.60758430505,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 106939.90159606375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 205693.30905282195,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 205685.45496858293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 244.63550741856588,
            "unit": "ns/iter",
            "extra": "iterations: 2848999\ncpu: 244.62061938245486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1821.7568901451991,
            "unit": "ns/iter",
            "extra": "iterations: 387002\ncpu: 1821.6957535103286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1379.1828939889488,
            "unit": "ns/iter",
            "extra": "iterations: 510230\ncpu: 1379.1705701350393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1350.4913654646632,
            "unit": "ns/iter",
            "extra": "iterations: 502459\ncpu: 1350.4500864747213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1017.8789415968625,
            "unit": "ns/iter",
            "extra": "iterations: 692137\ncpu: 1017.8695836228953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11035.940667333847,
            "unit": "ns/iter",
            "extra": "iterations: 62967\ncpu: 11035.512252449733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13040.696563883086,
            "unit": "ns/iter",
            "extra": "iterations: 53316\ncpu: 13040.586315552584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3195.5270759277887,
            "unit": "ns/iter",
            "extra": "iterations: 218866\ncpu: 3195.4387616166982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3219.708246083368,
            "unit": "ns/iter",
            "extra": "iterations: 216333\ncpu: 3219.677534171857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3246.1467371373305,
            "unit": "ns/iter",
            "extra": "iterations: 218152\ncpu: 3246.0224980747203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6072.43332931528,
            "unit": "ns/iter",
            "extra": "iterations: 116138\ncpu: 6072.3759665225825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5970.046276432669,
            "unit": "ns/iter",
            "extra": "iterations: 117468\ncpu: 5969.988422378851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2130.0828349598605,
            "unit": "ns/iter",
            "extra": "iterations: 331913\ncpu: 2129.987978777591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10822.855624528709,
            "unit": "ns/iter",
            "extra": "iterations: 64921\ncpu: 10822.682953127478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8555.133856916937,
            "unit": "ns/iter",
            "extra": "iterations: 81617\ncpu: 8554.696938138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8434.165331925022,
            "unit": "ns/iter",
            "extra": "iterations: 83287\ncpu: 8434.086952345633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8400.541991827167,
            "unit": "ns/iter",
            "extra": "iterations: 83933\ncpu: 8400.38006505192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18787.994459459598,
            "unit": "ns/iter",
            "extra": "iterations: 37000\ncpu: 18787.54594594594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60489.47783802406,
            "unit": "ns/iter",
            "extra": "iterations: 11619\ncpu: 60488.41552629253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49929.32053445609,
            "unit": "ns/iter",
            "extra": "iterations: 14220\ncpu: 49927.81293952207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48845.5215872588,
            "unit": "ns/iter",
            "extra": "iterations: 14314\ncpu: 48843.53080899786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 51689.67349999889,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51688.599999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27977.780431401283,
            "unit": "ns/iter",
            "extra": "iterations: 25081\ncpu: 27977.102188908215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47190.3352655712,
            "unit": "ns/iter",
            "extra": "iterations: 14836\ncpu: 47188.32569425714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2158.9995229166993,
            "unit": "ns/iter",
            "extra": "iterations: 326987\ncpu: 2158.9546373403086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10818.407154104594,
            "unit": "ns/iter",
            "extra": "iterations: 64774\ncpu: 10818.204835273502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8602.955995314927,
            "unit": "ns/iter",
            "extra": "iterations: 81105\ncpu: 8602.489365637024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8495.49645199893,
            "unit": "ns/iter",
            "extra": "iterations: 82018\ncpu: 8495.05962105893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8434.180676281294,
            "unit": "ns/iter",
            "extra": "iterations: 82717\ncpu: 8433.832223122145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18704.05359593189,
            "unit": "ns/iter",
            "extra": "iterations: 37167\ncpu: 18703.1856216537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59119.99176640211,
            "unit": "ns/iter",
            "extra": "iterations: 11781\ncpu: 59118.88634241606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 52064.74272443663,
            "unit": "ns/iter",
            "extra": "iterations: 13779\ncpu: 52061.94934320267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48104.28452544937,
            "unit": "ns/iter",
            "extra": "iterations: 14540\ncpu: 48102.30398899535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47577.11805270941,
            "unit": "ns/iter",
            "extra": "iterations: 14646\ncpu: 47575.07851973241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27732.058053705834,
            "unit": "ns/iter",
            "extra": "iterations: 25063\ncpu: 27731.237282049544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46959.05319291579,
            "unit": "ns/iter",
            "extra": "iterations: 14908\ncpu: 46957.532868258626 ns\nthreads: 1"
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
        "date": 1702390839368,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 707.6693152480891,
            "unit": "ns/iter",
            "extra": "iterations: 991600\ncpu: 707.6542960871319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6111.134955818255,
            "unit": "ns/iter",
            "extra": "iterations: 133992\ncpu: 6111.032748223774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11851.750220602242,
            "unit": "ns/iter",
            "extra": "iterations: 70262\ncpu: 11851.76055335743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17645.735824822423,
            "unit": "ns/iter",
            "extra": "iterations: 48271\ncpu: 17645.00839013072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23315.16607279882,
            "unit": "ns/iter",
            "extra": "iterations: 36484\ncpu: 23314.773599386037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28720.94032850525,
            "unit": "ns/iter",
            "extra": "iterations: 28858\ncpu: 28719.80386721186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34186.58904668682,
            "unit": "ns/iter",
            "extra": "iterations: 24504\ncpu: 34186.06349983676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39539.53344054462,
            "unit": "ns/iter",
            "extra": "iterations: 21142\ncpu: 39539.045501844696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45637.12647792591,
            "unit": "ns/iter",
            "extra": "iterations: 18438\ncpu: 45637.08645189278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 670.3338374066034,
            "unit": "ns/iter",
            "extra": "iterations: 1043499\ncpu: 670.3282897252418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 516.6171124780716,
            "unit": "ns/iter",
            "extra": "iterations: 1353562\ncpu: 516.6119468483894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 524.3319189746938,
            "unit": "ns/iter",
            "extra": "iterations: 1334645\ncpu: 524.3113337254479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 520.5833131745899,
            "unit": "ns/iter",
            "extra": "iterations: 1343503\ncpu: 520.5740515651993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1004.6474039084769,
            "unit": "ns/iter",
            "extra": "iterations: 708777\ncpu: 1004.6536498785933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2809.1849421589304,
            "unit": "ns/iter",
            "extra": "iterations: 287425\ncpu: 2809.1255110028737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13819.899425088493,
            "unit": "ns/iter",
            "extra": "iterations: 57748\ncpu: 13819.403269377271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10800.193618892525,
            "unit": "ns/iter",
            "extra": "iterations: 75034\ncpu: 10800.06796918729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10746.324650252649,
            "unit": "ns/iter",
            "extra": "iterations: 75626\ncpu: 10746.343849998713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10419.933816363377,
            "unit": "ns/iter",
            "extra": "iterations: 77980\ncpu: 10419.749935881022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41012.37027495893,
            "unit": "ns/iter",
            "extra": "iterations: 20185\ncpu: 41011.637354471044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263776.53888718307,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 263770.0891484785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211936.40495266762,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 211936.14955086116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214594.2225454498,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 214589.76969696945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212712.5220785488,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 212707.95315930786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108815.3860499822,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 108812.35857267182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 201629.34101913276,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201623.9105372373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5258.346719999736,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5258.219000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27565.148249690486,
            "unit": "ns/iter",
            "extra": "iterations: 29909\ncpu: 27564.50566719052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21962.802043456657,
            "unit": "ns/iter",
            "extra": "iterations: 37877\ncpu: 21962.386144626056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21436.269273226542,
            "unit": "ns/iter",
            "extra": "iterations: 38953\ncpu: 21436.413113239094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20699.022430232217,
            "unit": "ns/iter",
            "extra": "iterations: 40169\ncpu: 20698.61584804194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55682.22643663001,
            "unit": "ns/iter",
            "extra": "iterations: 14896\ncpu: 55680.934479054835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 285567.4852459042,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 285565.672131148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 222085.8050458717,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 222076.55453618735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 222406.62646310468,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 222401.98473282403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 219597.69422736738,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 219587.37080917548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117246.10215846442,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 117244.60383429404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 211250.08953402986,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 211246.08441083314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 855303.5989160083,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 855289.2502258356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477670.685761029,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 477658.37424986344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2659.377580984236,
            "unit": "ns/iter",
            "extra": "iterations: 302065\ncpu: 2659.391852746929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12884.947285187627,
            "unit": "ns/iter",
            "extra": "iterations: 64498\ncpu: 12884.802629538879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10320.95636702983,
            "unit": "ns/iter",
            "extra": "iterations: 80375\ncpu: 10320.67558320368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10471.062446820168,
            "unit": "ns/iter",
            "extra": "iterations: 81093\ncpu: 10470.82732171702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9453.520249256653,
            "unit": "ns/iter",
            "extra": "iterations: 87460\ncpu: 9453.409558655378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39730.08900052129,
            "unit": "ns/iter",
            "extra": "iterations: 21101\ncpu: 39727.33519738412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 275402.85718809266,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 275401.55161494616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 207835.8288820573,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 207827.1094303951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 208719.52800756984,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 208712.05388797008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213166.02504134463,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 213158.98889676493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 104298.9535799545,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 104292.30310262545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 199848.93508536115,
            "unit": "ns/iter",
            "extra": "iterations: 4452\ncpu: 199841.3971248887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.8601816555772,
            "unit": "ns/iter",
            "extra": "iterations: 2876983\ncpu: 242.8482198191655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1663.6350297655745,
            "unit": "ns/iter",
            "extra": "iterations: 418604\ncpu: 1663.5658044356949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1255.9864850548404,
            "unit": "ns/iter",
            "extra": "iterations: 556939\ncpu: 1255.9820734407174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1194.6409389732312,
            "unit": "ns/iter",
            "extra": "iterations: 586087\ncpu: 1194.6055790351854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 940.0751845508295,
            "unit": "ns/iter",
            "extra": "iterations: 743291\ncpu: 940.0326386300982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11035.397179991538,
            "unit": "ns/iter",
            "extra": "iterations: 63475\ncpu: 11034.912957857408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14422.717047597976,
            "unit": "ns/iter",
            "extra": "iterations: 48259\ncpu: 14422.107793364961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3349.7488006810977,
            "unit": "ns/iter",
            "extra": "iterations: 209077\ncpu: 3349.537251825856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3313.1199789759867,
            "unit": "ns/iter",
            "extra": "iterations: 211187\ncpu: 3312.955816409155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3301.6674836170932,
            "unit": "ns/iter",
            "extra": "iterations: 208907\ncpu: 3301.508805353576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5879.504435615058,
            "unit": "ns/iter",
            "extra": "iterations: 120051\ncpu: 5879.242988396556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5864.563045275272,
            "unit": "ns/iter",
            "extra": "iterations: 119779\ncpu: 5864.479583232445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2008.8676694543055,
            "unit": "ns/iter",
            "extra": "iterations: 347365\ncpu: 2008.8609963582828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10335.68350779584,
            "unit": "ns/iter",
            "extra": "iterations: 68305\ncpu: 10335.38540370389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8175.171004152608,
            "unit": "ns/iter",
            "extra": "iterations: 85495\ncpu: 8174.853500204792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8155.661662898083,
            "unit": "ns/iter",
            "extra": "iterations: 85802\ncpu: 8155.3390363861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7958.083377625829,
            "unit": "ns/iter",
            "extra": "iterations: 86546\ncpu: 7957.6456450906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18080.9362635097,
            "unit": "ns/iter",
            "extra": "iterations: 38769\ncpu: 18080.683019938562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59056.46194780172,
            "unit": "ns/iter",
            "extra": "iterations: 11839\ncpu: 59056.84601740006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49339.66324856318,
            "unit": "ns/iter",
            "extra": "iterations: 14628\ncpu: 49338.78178835127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 50616.972630513505,
            "unit": "ns/iter",
            "extra": "iterations: 13811\ncpu: 50616.74027948698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47240.509261229774,
            "unit": "ns/iter",
            "extra": "iterations: 14091\ncpu: 47239.315875380744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27044.51969865879,
            "unit": "ns/iter",
            "extra": "iterations: 26017\ncpu: 27044.470922858003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45579.74873413346,
            "unit": "ns/iter",
            "extra": "iterations: 15207\ncpu: 45579.54231603931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1982.1188855249068,
            "unit": "ns/iter",
            "extra": "iterations: 350766\ncpu: 1982.0772252726783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10207.65542885424,
            "unit": "ns/iter",
            "extra": "iterations: 68578\ncpu: 10207.346379305256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8067.84645232173,
            "unit": "ns/iter",
            "extra": "iterations: 85563\ncpu: 8067.478933651179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8084.737930161128,
            "unit": "ns/iter",
            "extra": "iterations: 86828\ncpu: 8084.388676463867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8092.135868246659,
            "unit": "ns/iter",
            "extra": "iterations: 86525\ncpu: 8091.704131753905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17762.307344690642,
            "unit": "ns/iter",
            "extra": "iterations: 39389\ncpu: 17761.278529538504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57526.538575671715,
            "unit": "ns/iter",
            "extra": "iterations: 12132\ncpu: 57524.002637652295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46394.75933747081,
            "unit": "ns/iter",
            "extra": "iterations: 15154\ncpu: 46394.483304738205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46568.096634744885,
            "unit": "ns/iter",
            "extra": "iterations: 15036\ncpu: 46568.42910348549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45927.48691030639,
            "unit": "ns/iter",
            "extra": "iterations: 15241\ncpu: 45924.85401220386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26857.379061508454,
            "unit": "ns/iter",
            "extra": "iterations: 26191\ncpu: 26857.611393226365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44993.13549507782,
            "unit": "ns/iter",
            "extra": "iterations: 15543\ncpu: 44991.21147783591 ns\nthreads: 1"
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
        "date": 1702391772702,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 682.7335306878886,
            "unit": "ns/iter",
            "extra": "iterations: 1032997\ncpu: 682.7177620070532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6072.590715733621,
            "unit": "ns/iter",
            "extra": "iterations: 134701\ncpu: 6072.5540270673555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11698.709893519828,
            "unit": "ns/iter",
            "extra": "iterations: 70905\ncpu: 11698.352725477753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17565.647278967972,
            "unit": "ns/iter",
            "extra": "iterations: 48364\ncpu: 17565.420560747658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22880.105670733094,
            "unit": "ns/iter",
            "extra": "iterations: 36803\ncpu: 22879.805994076563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28530.98013449552,
            "unit": "ns/iter",
            "extra": "iterations: 29146\ncpu: 28530.515336581357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34147.391883633296,
            "unit": "ns/iter",
            "extra": "iterations: 24543\ncpu: 34146.954325062135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39912.73945862954,
            "unit": "ns/iter",
            "extra": "iterations: 20799\ncpu: 39911.94768979278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45576.64316030004,
            "unit": "ns/iter",
            "extra": "iterations: 18378\ncpu: 45576.2923060181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 679.49869295729,
            "unit": "ns/iter",
            "extra": "iterations: 1032866\ncpu: 679.4940485987538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 518.1276793648453,
            "unit": "ns/iter",
            "extra": "iterations: 1324521\ncpu: 518.1014117556458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 540.8288790000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 540.811399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 469.5592904654494,
            "unit": "ns/iter",
            "extra": "iterations: 1491513\ncpu: 469.5535338947773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 920.3139767915465,
            "unit": "ns/iter",
            "extra": "iterations: 761448\ncpu: 920.283985249157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2658.4974959643932,
            "unit": "ns/iter",
            "extra": "iterations: 302312\ncpu: 2658.417793537806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12958.499531277195,
            "unit": "ns/iter",
            "extra": "iterations: 62937\ncpu: 12957.910291243614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10413.652754779137,
            "unit": "ns/iter",
            "extra": "iterations: 79716\ncpu: 10413.195594359995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10097.914199162995,
            "unit": "ns/iter",
            "extra": "iterations: 80547\ncpu: 10097.546773933214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10067.048686629832,
            "unit": "ns/iter",
            "extra": "iterations: 82117\ncpu: 10066.48197084648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40683.157600910046,
            "unit": "ns/iter",
            "extra": "iterations: 20241\ncpu: 40681.562175781764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262515.97935367405,
            "unit": "ns/iter",
            "extra": "iterations: 3342\ncpu: 262502.0047875516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211907.67748970317,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 211896.1473225105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 212259.45819154012,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 212248.15264948926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 209478.25869565687,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 209467.12560386394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107151.23150092865,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 107148.15318097571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200154.29457542213,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 200150.65232318596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5176.2004599999045,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5176.187999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27428.34406471355,
            "unit": "ns/iter",
            "extra": "iterations: 30782\ncpu: 27427.76622701582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21242.094850879523,
            "unit": "ns/iter",
            "extra": "iterations: 39230\ncpu: 21241.82003568697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21474.585233940565,
            "unit": "ns/iter",
            "extra": "iterations: 39198\ncpu: 21474.3941017399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20766.583354401817,
            "unit": "ns/iter",
            "extra": "iterations: 39554\ncpu: 20766.52424533551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55053.69179426447,
            "unit": "ns/iter",
            "extra": "iterations: 15282\ncpu: 55051.76678445224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 284182.03742413624,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 284173.0613621034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 220388.85847627683,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 220381.6347124128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 220216.35660282144,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 220211.64314516142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 217958.92992992772,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 217949.62462462595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116395.3724658764,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 116392.99059228862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 212771.96972680683,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 212766.99483140605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 853717.4959053749,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 853699.6360327533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 479867.96145493846,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 479853.0944625413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2670.6920096852473,
            "unit": "ns/iter",
            "extra": "iterations: 301490\ncpu: 2670.667020465024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12949.577996792714,
            "unit": "ns/iter",
            "extra": "iterations: 64227\ncpu: 12949.544584053414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10295.89210099214,
            "unit": "ns/iter",
            "extra": "iterations: 79491\ncpu: 10295.746688304349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10375.596278091438,
            "unit": "ns/iter",
            "extra": "iterations: 78938\ncpu: 10375.252729990641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9485.735941685703,
            "unit": "ns/iter",
            "extra": "iterations: 86977\ncpu: 9485.595042367559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 40254.440121054766,
            "unit": "ns/iter",
            "extra": "iterations: 20817\ncpu: 40254.003939088194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281929.45817490824,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 281923.4157160972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215816.11467116486,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 215811.75620332465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 210741.18688292959,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 210738.22284908357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 208139.4470284209,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 208137.35024665314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105722.50910406452,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 105719.94453153205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 202275.07113448202,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 202270.83714547064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 241.73780229851627,
            "unit": "ns/iter",
            "extra": "iterations: 2893332\ncpu: 241.7357565602551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1669.3954403397624,
            "unit": "ns/iter",
            "extra": "iterations: 418847\ncpu: 1669.3835696566914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1250.3055498264832,
            "unit": "ns/iter",
            "extra": "iterations: 557585\ncpu: 1250.296008680291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1315.4766812154426,
            "unit": "ns/iter",
            "extra": "iterations: 557662\ncpu: 1315.4538053516312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 916.2795247202224,
            "unit": "ns/iter",
            "extra": "iterations: 765528\ncpu: 916.264329978783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10830.708239601401,
            "unit": "ns/iter",
            "extra": "iterations: 64457\ncpu: 10830.531982561957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14749.731154509827,
            "unit": "ns/iter",
            "extra": "iterations: 47518\ncpu: 14749.40233174786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3333.877696477879,
            "unit": "ns/iter",
            "extra": "iterations: 211016\ncpu: 3333.7893809000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3281.0268150903194,
            "unit": "ns/iter",
            "extra": "iterations: 212455\ncpu: 3281.001153185362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3247.622800152558,
            "unit": "ns/iter",
            "extra": "iterations: 214674\ncpu: 3247.5264820145803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6101.675445209783,
            "unit": "ns/iter",
            "extra": "iterations: 115395\ncpu: 6101.581524329502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6200.465027080211,
            "unit": "ns/iter",
            "extra": "iterations: 112630\ncpu: 6200.372014560967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2026.6897960366332,
            "unit": "ns/iter",
            "extra": "iterations: 345160\ncpu: 2026.6647351952693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10523.67794386063,
            "unit": "ns/iter",
            "extra": "iterations: 66299\ncpu: 10523.585574442937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8485.31224867828,
            "unit": "ns/iter",
            "extra": "iterations: 82066\ncpu: 8485.189969049137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8267.891527150738,
            "unit": "ns/iter",
            "extra": "iterations: 84399\ncpu: 8267.773314849755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8216.500188746411,
            "unit": "ns/iter",
            "extra": "iterations: 84770\ncpu: 8216.278164445055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18468.78900410511,
            "unit": "ns/iter",
            "extra": "iterations: 37996\ncpu: 18468.615117380858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60022.25743572505,
            "unit": "ns/iter",
            "extra": "iterations: 11902\ncpu: 60021.90388169992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48653.390937607,
            "unit": "ns/iter",
            "extra": "iterations: 14345\ncpu: 48652.97316138019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48706.30191437368,
            "unit": "ns/iter",
            "extra": "iterations: 14365\ncpu: 48704.00278454617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47899.29583732874,
            "unit": "ns/iter",
            "extra": "iterations: 14606\ncpu: 47898.0487470901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27452.127966731998,
            "unit": "ns/iter",
            "extra": "iterations: 25491\ncpu: 27451.64960182028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46895.08078982709,
            "unit": "ns/iter",
            "extra": "iterations: 14940\ncpu: 46894.24364123217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2021.1464343881144,
            "unit": "ns/iter",
            "extra": "iterations: 345677\ncpu: 2021.100333548404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10428.182821539507,
            "unit": "ns/iter",
            "extra": "iterations: 67410\ncpu: 10428.049250852999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8307.493400264819,
            "unit": "ns/iter",
            "extra": "iterations: 83867\ncpu: 8307.399811606425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8241.906977562627,
            "unit": "ns/iter",
            "extra": "iterations: 85216\ncpu: 8241.836040180235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8249.989041290186,
            "unit": "ns/iter",
            "extra": "iterations: 84499\ncpu: 8249.858578208088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17949.24401359433,
            "unit": "ns/iter",
            "extra": "iterations: 38838\ncpu: 17948.84391575266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58581.08799109952,
            "unit": "ns/iter",
            "extra": "iterations: 11683\ncpu: 58579.90242232269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47508.98800894228,
            "unit": "ns/iter",
            "extra": "iterations: 14761\ncpu: 47507.96693990925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46674.672013309246,
            "unit": "ns/iter",
            "extra": "iterations: 15025\ncpu: 46674.28286189702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46246.51777821757,
            "unit": "ns/iter",
            "extra": "iterations: 15159\ncpu: 46246.22336565763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26841.589499904057,
            "unit": "ns/iter",
            "extra": "iterations: 26095\ncpu: 26841.360413872626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45281.46478691268,
            "unit": "ns/iter",
            "extra": "iterations: 15463\ncpu: 45280.676453469285 ns\nthreads: 1"
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
        "date": 1702396475736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 686.4130576565035,
            "unit": "ns/iter",
            "extra": "iterations: 1011958\ncpu: 686.3981509114016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6230.302967200369,
            "unit": "ns/iter",
            "extra": "iterations: 134942\ncpu: 6230.161106253056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11773.228672917348,
            "unit": "ns/iter",
            "extra": "iterations: 69536\ncpu: 11773.094512195119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17548.477001738393,
            "unit": "ns/iter",
            "extra": "iterations: 48895\ncpu: 17547.976275692818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23335.857350677972,
            "unit": "ns/iter",
            "extra": "iterations: 35745\ncpu: 23335.44551685551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28876.438118984675,
            "unit": "ns/iter",
            "extra": "iterations: 28878\ncpu: 28875.10907957615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33903.11889735019,
            "unit": "ns/iter",
            "extra": "iterations: 24559\ncpu: 33902.70776497417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39991.300196804536,
            "unit": "ns/iter",
            "extra": "iterations: 20833\ncpu: 39990.198243171886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45525.235745793085,
            "unit": "ns/iter",
            "extra": "iterations: 18363\ncpu: 45524.97413276701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 652.4149927036409,
            "unit": "ns/iter",
            "extra": "iterations: 1054633\ncpu: 652.4024945170496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 478.647644721708,
            "unit": "ns/iter",
            "extra": "iterations: 1452270\ncpu: 478.6412994828784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 481.0164228677227,
            "unit": "ns/iter",
            "extra": "iterations: 1456323\ncpu: 481.01059998365827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 475.57654845666525,
            "unit": "ns/iter",
            "extra": "iterations: 1467332\ncpu: 475.5518860080747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 921.16820245331,
            "unit": "ns/iter",
            "extra": "iterations: 761499\ncpu: 921.118609479461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2680.6000780335285,
            "unit": "ns/iter",
            "extra": "iterations: 299871\ncpu: 2680.5096191362295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12814.528808555533,
            "unit": "ns/iter",
            "extra": "iterations: 63679\ncpu: 12814.039165187898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10537.161961692202,
            "unit": "ns/iter",
            "extra": "iterations: 77790\ncpu: 10536.937909757053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10510.616419919155,
            "unit": "ns/iter",
            "extra": "iterations: 78015\ncpu: 10510.30699224507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10035.57407362108,
            "unit": "ns/iter",
            "extra": "iterations: 81770\ncpu: 10035.192613427878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41046.883080743224,
            "unit": "ns/iter",
            "extra": "iterations: 20125\ncpu: 41045.58509316763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263295.3217550242,
            "unit": "ns/iter",
            "extra": "iterations: 3282\ncpu: 263284.6739792811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 212628.2228959589,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 212617.99660441416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213079.84542356824,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 213065.5306718595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210086.00480653532,
            "unit": "ns/iter",
            "extra": "iterations: 4161\ncpu: 210074.2129295846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108783.6521089953,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 108779.00958068918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202577.98376622619,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 202564.19294990716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5200.964840000211,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5200.788000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27346.713706932107,
            "unit": "ns/iter",
            "extra": "iterations: 30853\ncpu: 27345.480180209375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21791.1053959835,
            "unit": "ns/iter",
            "extra": "iterations: 38436\ncpu: 21790.70662920171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21055.0312651413,
            "unit": "ns/iter",
            "extra": "iterations: 39213\ncpu: 21054.52273480739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20549.538004363007,
            "unit": "ns/iter",
            "extra": "iterations: 39877\ncpu: 20549.158662888392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54486.33152457886,
            "unit": "ns/iter",
            "extra": "iterations: 15296\ncpu: 54483.969665271936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 288299.0655846294,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 288281.91454123653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 223294.53288797295,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 223283.91572456414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 223513.42181069046,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 223498.66255144178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 218912.10795168084,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 218903.92551585298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 117862.23550135117,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 117856.31436314377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 211201.91845281216,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 211191.72209903845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 856829.854430363,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 856786.7088607609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 474269.94462367834,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 474261.18279569736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2670.647310275509,
            "unit": "ns/iter",
            "extra": "iterations: 300607\ncpu: 2670.5309590262436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 12539.031388292859,
            "unit": "ns/iter",
            "extra": "iterations: 65757\ncpu: 12538.719832109151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10237.193512413545,
            "unit": "ns/iter",
            "extra": "iterations: 81602\ncpu: 10236.674346217002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10232.082274107443,
            "unit": "ns/iter",
            "extra": "iterations: 81034\ncpu: 10231.637337413911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9452.3540086121,
            "unit": "ns/iter",
            "extra": "iterations: 87786\ncpu: 9451.995762422284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39593.63774884382,
            "unit": "ns/iter",
            "extra": "iterations: 21198\ncpu: 39592.42381356753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 280168.4843949104,
            "unit": "ns/iter",
            "extra": "iterations: 3140\ncpu: 280155.1273885367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 212961.33438180684,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 212953.42366319842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 212399.94481928638,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 212386.2891566265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 218809.12861582835,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 218797.5137461155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105301.44487010798,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 105295.73805818276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 198937.5758126812,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 198927.00613775922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.09451601362738,
            "unit": "ns/iter",
            "extra": "iterations: 2923822\ncpu: 242.0824181499434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1616.4491876025497,
            "unit": "ns/iter",
            "extra": "iterations: 432670\ncpu: 1616.3660526498168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1276.903976700405,
            "unit": "ns/iter",
            "extra": "iterations: 547992\ncpu: 1276.8409027869109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1203.1842314097935,
            "unit": "ns/iter",
            "extra": "iterations: 575879\ncpu: 1203.1607334179591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 956.2791506620855,
            "unit": "ns/iter",
            "extra": "iterations: 730781\ncpu: 956.2365469271913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10719.438029580378,
            "unit": "ns/iter",
            "extra": "iterations: 65854\ncpu: 10718.89938348468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13384.490770834605,
            "unit": "ns/iter",
            "extra": "iterations: 48921\ncpu: 13383.68185441844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3018.971497371495,
            "unit": "ns/iter",
            "extra": "iterations: 231312\ncpu: 3018.8291139240605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3005.5573161205502,
            "unit": "ns/iter",
            "extra": "iterations: 233006\ncpu: 3005.4307614396043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3024.201717016172,
            "unit": "ns/iter",
            "extra": "iterations: 231681\ncpu: 3023.987292872523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5782.219871842119,
            "unit": "ns/iter",
            "extra": "iterations: 121257\ncpu: 5781.866613886212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5729.412046397617,
            "unit": "ns/iter",
            "extra": "iterations: 122161\ncpu: 5729.290035281311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1993.9346458961268,
            "unit": "ns/iter",
            "extra": "iterations: 353964\ncpu: 1993.8928817620088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10555.226516934497,
            "unit": "ns/iter",
            "extra": "iterations: 66697\ncpu: 10554.71760349046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8251.607669097231,
            "unit": "ns/iter",
            "extra": "iterations: 85173\ncpu: 8251.18640883838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8046.583715435296,
            "unit": "ns/iter",
            "extra": "iterations: 85492\ncpu: 8046.117765404936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7969.182863257139,
            "unit": "ns/iter",
            "extra": "iterations: 87858\ncpu: 7968.776889981486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18144.048911632257,
            "unit": "ns/iter",
            "extra": "iterations: 38498\ncpu: 18143.651618266074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58784.11828491259,
            "unit": "ns/iter",
            "extra": "iterations: 12081\ncpu: 58780.97839582808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47224.161349444694,
            "unit": "ns/iter",
            "extra": "iterations: 14732\ncpu: 47223.03828400737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46968.97402161643,
            "unit": "ns/iter",
            "extra": "iterations: 14897\ncpu: 46966.31536551012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45985.96117461527,
            "unit": "ns/iter",
            "extra": "iterations: 15222\ncpu: 45984.25962422763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26712.949505784014,
            "unit": "ns/iter",
            "extra": "iterations: 26102\ncpu: 26711.769213087024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45377.02000129833,
            "unit": "ns/iter",
            "extra": "iterations: 15399\ncpu: 45374.99837651842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1982.940208656404,
            "unit": "ns/iter",
            "extra": "iterations: 354650\ncpu: 1982.8320879740609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10509.739914384356,
            "unit": "ns/iter",
            "extra": "iterations: 66109\ncpu: 10509.160628658627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8220.995779799649,
            "unit": "ns/iter",
            "extra": "iterations: 85304\ncpu: 8220.57347838308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8115.339857195604,
            "unit": "ns/iter",
            "extra": "iterations: 85992\ncpu: 8115.172341613069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8171.972381995103,
            "unit": "ns/iter",
            "extra": "iterations: 85886\ncpu: 8171.523880492737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17754.298396509643,
            "unit": "ns/iter",
            "extra": "iterations: 39414\ncpu: 17753.57994621203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57350.5128584337,
            "unit": "ns/iter",
            "extra": "iterations: 12171\ncpu: 57348.023991454385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46361.64673407157,
            "unit": "ns/iter",
            "extra": "iterations: 15034\ncpu: 46359.698017825714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46366.972605461335,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 46365.46829397683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46123.78403261912,
            "unit": "ns/iter",
            "extra": "iterations: 15206\ncpu: 46122.57661449385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26550.725174880823,
            "unit": "ns/iter",
            "extra": "iterations: 26304\ncpu: 26549.916362530395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45192.76790313951,
            "unit": "ns/iter",
            "extra": "iterations: 15528\ncpu: 45189.47707367335 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}