window.BENCHMARK_DATA = {
  "lastUpdate": 1702387065909,
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
      }
    ]
  }
}