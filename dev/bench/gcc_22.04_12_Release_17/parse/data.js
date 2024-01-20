window.BENCHMARK_DATA = {
  "lastUpdate": 1705772628610,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-12 22.04 Release c++-17": [
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
        "date": 1702399130720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 628.0727865178577,
            "unit": "ns/iter",
            "extra": "iterations: 1111868\ncpu: 628.0523407454842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5655.236460000879,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5654.794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10867.619286942036,
            "unit": "ns/iter",
            "extra": "iterations: 76207\ncpu: 10867.429501226927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16459.902531401665,
            "unit": "ns/iter",
            "extra": "iterations: 51750\ncpu: 16458.871497584536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21537.09236783556,
            "unit": "ns/iter",
            "extra": "iterations: 39137\ncpu: 21536.428443672223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26711.804913016345,
            "unit": "ns/iter",
            "extra": "iterations: 31386\ncpu: 26709.156948958138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32042.415738104268,
            "unit": "ns/iter",
            "extra": "iterations: 26026\ncpu: 32041.669868592944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37433.32179703955,
            "unit": "ns/iter",
            "extra": "iterations: 21324\ncpu: 37431.818608141075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42405.29675229342,
            "unit": "ns/iter",
            "extra": "iterations: 19737\ncpu: 42403.69863707751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 589.695421916895,
            "unit": "ns/iter",
            "extra": "iterations: 1178834\ncpu: 589.6521478002843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 449.52245447543027,
            "unit": "ns/iter",
            "extra": "iterations: 1552185\ncpu: 449.5060189345988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 443.6301553980383,
            "unit": "ns/iter",
            "extra": "iterations: 1569132\ncpu: 443.60264146037497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 441.09757462127214,
            "unit": "ns/iter",
            "extra": "iterations: 1583629\ncpu: 441.06542630881387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 917.7143183528325,
            "unit": "ns/iter",
            "extra": "iterations: 774719\ncpu: 917.6684707616565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1537.0292272725474,
            "unit": "ns/iter",
            "extra": "iterations: 513014\ncpu: 1536.9627339604776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8657.919085192922,
            "unit": "ns/iter",
            "extra": "iterations: 96064\ncpu: 8657.907228514317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7784.23102599803,
            "unit": "ns/iter",
            "extra": "iterations: 104854\ncpu: 7783.898563717149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8970.593006213523,
            "unit": "ns/iter",
            "extra": "iterations: 91424\ncpu: 8970.06584704235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10121.57713056836,
            "unit": "ns/iter",
            "extra": "iterations: 81375\ncpu: 10121.375115207382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27881.60908439476,
            "unit": "ns/iter",
            "extra": "iterations: 29303\ncpu: 27880.920042316524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 278391.6442953229,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 278378.90699904144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214228.10974408526,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 214220.76771653586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214731.48770290037,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 214723.14313821922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212944.8546298533,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 212944.36843391132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108639.62249844795,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 108632.40522063422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206283.41204363786,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 206273.73162636254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5500.4545497110685,
            "unit": "ns/iter",
            "extra": "iterations: 149526\ncpu: 5500.086272621482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26411.13767750066,
            "unit": "ns/iter",
            "extra": "iterations: 31690\ncpu: 26410.33449037552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21807.860161202247,
            "unit": "ns/iter",
            "extra": "iterations: 38337\ncpu: 21806.23418629524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21539.34297636933,
            "unit": "ns/iter",
            "extra": "iterations: 39061\ncpu: 21536.8833363201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21502.60765279795,
            "unit": "ns/iter",
            "extra": "iterations: 38940\ncpu: 21501.014381099092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44915.813411237265,
            "unit": "ns/iter",
            "extra": "iterations: 18313\ncpu: 44912.23174793883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 301008.2830971443,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 301003.66401659005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230789.35245684432,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 230770.6241699859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229138.80921051762,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 229132.9736842117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228267.84147296436,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 228250.45703839054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122902.27148875584,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 122894.85955056155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 221619.0731150085,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 221597.99441482656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 883998.2421150404,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 883980.1484230073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 489685.34583101363,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 489619.69781757303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1496.4292822676525,
            "unit": "ns/iter",
            "extra": "iterations: 531967\ncpu: 1496.3640601766613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8060.804656495325,
            "unit": "ns/iter",
            "extra": "iterations: 102051\ncpu: 8060.468785215199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7350.667121914408,
            "unit": "ns/iter",
            "extra": "iterations: 112759\ncpu: 7350.479340895179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8338.150209161919,
            "unit": "ns/iter",
            "extra": "iterations: 98010\ncpu: 8337.960412202889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9170.461128613122,
            "unit": "ns/iter",
            "extra": "iterations: 90465\ncpu: 9170.030398496601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27007.103949971155,
            "unit": "ns/iter",
            "extra": "iterations: 30861\ncpu: 27006.292731927122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 289834.53445434896,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 289825.15661061654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 216037.19369923006,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 216022.27418163946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214677.77157484394,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 214669.16138469143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 211579.28969023994,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 211559.65634075488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 105538.1097280373,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 105534.81260993097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206908.2260193061,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 206887.39099693653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 198.54946359451756,
            "unit": "ns/iter",
            "extra": "iterations: 3530445\ncpu: 198.53514217046336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1393.6727136489567,
            "unit": "ns/iter",
            "extra": "iterations: 501793\ncpu: 1393.5842070335775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1154.4705552549965,
            "unit": "ns/iter",
            "extra": "iterations: 604641\ncpu: 1154.472488633753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1270.1435978287243,
            "unit": "ns/iter",
            "extra": "iterations: 571478\ncpu: 1270.0924620020382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 979.4383711249864,
            "unit": "ns/iter",
            "extra": "iterations: 712369\ncpu: 979.3754360450868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8678.565593028174,
            "unit": "ns/iter",
            "extra": "iterations: 80443\ncpu: 8678.152232015209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12986.76437504662,
            "unit": "ns/iter",
            "extra": "iterations: 54052\ncpu: 12985.945015910616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3054.3214041423653,
            "unit": "ns/iter",
            "extra": "iterations: 228068\ncpu: 3054.157531964135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3083.1178855946205,
            "unit": "ns/iter",
            "extra": "iterations: 229587\ncpu: 3082.787352942459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3068.475909674385,
            "unit": "ns/iter",
            "extra": "iterations: 230632\ncpu: 3068.350012140556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5325.415858156758,
            "unit": "ns/iter",
            "extra": "iterations: 132033\ncpu: 5325.042981678838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5721.821767134138,
            "unit": "ns/iter",
            "extra": "iterations: 121100\ncpu: 5721.817506193237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1932.4156830983277,
            "unit": "ns/iter",
            "extra": "iterations: 361778\ncpu: 1932.325625107083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9890.751748003857,
            "unit": "ns/iter",
            "extra": "iterations: 70509\ncpu: 9890.120410160474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8076.849805592901,
            "unit": "ns/iter",
            "extra": "iterations: 85902\ncpu: 8076.667597960431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8057.203509699406,
            "unit": "ns/iter",
            "extra": "iterations: 86959\ncpu: 8056.692234271269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7954.499971734011,
            "unit": "ns/iter",
            "extra": "iterations: 88445\ncpu: 7954.3886030866925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18103.00090753303,
            "unit": "ns/iter",
            "extra": "iterations: 38566\ncpu: 18102.201420940917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60647.049411363325,
            "unit": "ns/iter",
            "extra": "iterations: 11637\ncpu: 60642.803127954256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48371.10311223214,
            "unit": "ns/iter",
            "extra": "iterations: 12724\ncpu: 48366.03269412057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 50352.400099995975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50350.140000000465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48025.66528447836,
            "unit": "ns/iter",
            "extra": "iterations: 14711\ncpu: 48025.77662973315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27458.081746529268,
            "unit": "ns/iter",
            "extra": "iterations: 25628\ncpu: 27457.19135320746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46720.209935898296,
            "unit": "ns/iter",
            "extra": "iterations: 14976\ncpu: 46717.154113248296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.7075101720486,
            "unit": "ns/iter",
            "extra": "iterations: 366929\ncpu: 1914.542322901723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9898.74942250227,
            "unit": "ns/iter",
            "extra": "iterations: 70996\ncpu: 9898.744999718421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8008.5007832604,
            "unit": "ns/iter",
            "extra": "iterations: 87455\ncpu: 8008.127608484474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7964.049251146093,
            "unit": "ns/iter",
            "extra": "iterations: 87734\ncpu: 7963.3710990038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8100.039221336982,
            "unit": "ns/iter",
            "extra": "iterations: 86764\ncpu: 8099.590844128985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18114.16139715533,
            "unit": "ns/iter",
            "extra": "iterations: 38650\ncpu: 18112.45019404923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59878.123033758246,
            "unit": "ns/iter",
            "extra": "iterations: 11761\ncpu: 59877.1448006121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48280.28794121741,
            "unit": "ns/iter",
            "extra": "iterations: 14562\ncpu: 48273.73300370783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47807.95463254632,
            "unit": "ns/iter",
            "extra": "iterations: 14614\ncpu: 47804.85835500257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47612.19235773174,
            "unit": "ns/iter",
            "extra": "iterations: 14603\ncpu: 47609.52543997803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27250.127800864015,
            "unit": "ns/iter",
            "extra": "iterations: 25751\ncpu: 27247.244767193482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46670.46185539725,
            "unit": "ns/iter",
            "extra": "iterations: 15048\ncpu: 46669.64380648504 ns\nthreads: 1"
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
        "date": 1702409431823,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 602.9596116602034,
            "unit": "ns/iter",
            "extra": "iterations: 1161251\ncpu: 602.9076401225919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5421.191450000151,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5421.050999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10508.161443387868,
            "unit": "ns/iter",
            "extra": "iterations: 79452\ncpu: 10507.622212153252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15900.628758120103,
            "unit": "ns/iter",
            "extra": "iterations: 52952\ncpu: 15899.325804502196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20951.775510717587,
            "unit": "ns/iter",
            "extra": "iterations: 39797\ncpu: 20950.40580948312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25853.124058279704,
            "unit": "ns/iter",
            "extra": "iterations: 32122\ncpu: 25850.386028267232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30615.187872285398,
            "unit": "ns/iter",
            "extra": "iterations: 27029\ncpu: 30613.378223389715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36026.10921029925,
            "unit": "ns/iter",
            "extra": "iterations: 23148\ncpu: 36024.75807845171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40753.15574174092,
            "unit": "ns/iter",
            "extra": "iterations: 20290\ncpu: 40749.7092163627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 553.9401852522492,
            "unit": "ns/iter",
            "extra": "iterations: 1260659\ncpu: 553.9259228704984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 427.29669011860153,
            "unit": "ns/iter",
            "extra": "iterations: 1641086\ncpu: 427.26999072565275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 428.5230553168058,
            "unit": "ns/iter",
            "extra": "iterations: 1639123\ncpu: 428.49865446339237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.5013452282481,
            "unit": "ns/iter",
            "extra": "iterations: 1659198\ncpu: 421.47296464918617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 923.8218645467499,
            "unit": "ns/iter",
            "extra": "iterations: 760528\ncpu: 923.7712483958535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1417.70780142866,
            "unit": "ns/iter",
            "extra": "iterations: 554219\ncpu: 1417.6002627120345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 7998.021488350931,
            "unit": "ns/iter",
            "extra": "iterations: 101683\ncpu: 7998.002615973167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7558.782102342695,
            "unit": "ns/iter",
            "extra": "iterations: 109221\ncpu: 7558.705743401003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8714.957378350608,
            "unit": "ns/iter",
            "extra": "iterations: 98213\ncpu: 8714.159021718115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8309.400220619857,
            "unit": "ns/iter",
            "extra": "iterations: 97906\ncpu: 8308.935101015244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27784.28155109744,
            "unit": "ns/iter",
            "extra": "iterations: 29579\ncpu: 27781.31782683665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 266182.61090574536,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 266172.2427603205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209746.83089819932,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 209734.15568862317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 207723.96605309128,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 207721.42003346857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 207094.11105779954,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 207088.3905013193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106977.5444634945,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 106972.53797158273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200299.16681984407,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 200288.1893382357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5429.047849497544,
            "unit": "ns/iter",
            "extra": "iterations: 152290\ncpu: 5428.676866504693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26139.061402131338,
            "unit": "ns/iter",
            "extra": "iterations: 31823\ncpu: 26137.818558903946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21626.851518039097,
            "unit": "ns/iter",
            "extra": "iterations: 38833\ncpu: 21625.509231838947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20897.474761834004,
            "unit": "ns/iter",
            "extra": "iterations: 40098\ncpu: 20895.775350391505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21686.073295821265,
            "unit": "ns/iter",
            "extra": "iterations: 40166\ncpu: 21684.529203804253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45178.93986457226,
            "unit": "ns/iter",
            "extra": "iterations: 18608\ncpu: 45176.7358125535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 288252.1678321717,
            "unit": "ns/iter",
            "extra": "iterations: 3003\ncpu: 288237.49583749485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 225765.292827656,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 225752.91537667718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 224274.04699739508,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 224260.49608355074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 220905.43594939372,
            "unit": "ns/iter",
            "extra": "iterations: 3950\ncpu: 220887.9493670877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 120522.71664147898,
            "unit": "ns/iter",
            "extra": "iterations: 7277\ncpu: 120515.10237735258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 210585.41717940997,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 210569.849864631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 865193.211293283,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 865143.0783242291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468407.98523205676,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 468387.763713079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1387.1076244384099,
            "unit": "ns/iter",
            "extra": "iterations: 572593\ncpu: 1387.0737155361749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7422.813777974272,
            "unit": "ns/iter",
            "extra": "iterations: 110771\ncpu: 7422.597069630157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7250.628600216021,
            "unit": "ns/iter",
            "extra": "iterations: 115132\ncpu: 7250.437758399063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7789.674792079093,
            "unit": "ns/iter",
            "extra": "iterations: 104487\ncpu: 7789.44270579116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7941.639792411179,
            "unit": "ns/iter",
            "extra": "iterations: 104437\ncpu: 7941.420186332425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26648.82332662761,
            "unit": "ns/iter",
            "extra": "iterations: 31329\ncpu: 26647.068211561163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 276002.7052429325,
            "unit": "ns/iter",
            "extra": "iterations: 3128\ncpu: 275987.65984654706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 204677.46797913263,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 204661.33776091057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 205677.386336846,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 205663.4864546524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 204572.67450612574,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 204553.7629350897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 103202.6533846058,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 103196.31830362337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 198455.07179833952,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 198437.85730362454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 198.28799415703742,
            "unit": "ns/iter",
            "extra": "iterations: 3521502\ncpu: 198.2766728515258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1446.8844829262025,
            "unit": "ns/iter",
            "extra": "iterations: 483461\ncpu: 1446.8002589660828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1133.2658636826013,
            "unit": "ns/iter",
            "extra": "iterations: 617779\ncpu: 1133.2630277170304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1199.197149152706,
            "unit": "ns/iter",
            "extra": "iterations: 585440\ncpu: 1199.1666097294426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 936.6818385830254,
            "unit": "ns/iter",
            "extra": "iterations: 744160\ncpu: 936.6124220597732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8973.424273911083,
            "unit": "ns/iter",
            "extra": "iterations: 77952\ncpu: 8972.852524630523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12977.22032073628,
            "unit": "ns/iter",
            "extra": "iterations: 53876\ncpu: 12976.04499220431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2979.0683563123885,
            "unit": "ns/iter",
            "extra": "iterations: 234053\ncpu: 2978.840689929179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2946.361013942068,
            "unit": "ns/iter",
            "extra": "iterations: 237844\ncpu: 2946.0839878239362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2870.128041854812,
            "unit": "ns/iter",
            "extra": "iterations: 243889\ncpu: 2869.940833739917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5250.544475886636,
            "unit": "ns/iter",
            "extra": "iterations: 133578\ncpu: 5250.245549416816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5558.469716386947,
            "unit": "ns/iter",
            "extra": "iterations: 125629\ncpu: 5558.290681291722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1824.093758223867,
            "unit": "ns/iter",
            "extra": "iterations: 383785\ncpu: 1824.0447125343585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9730.723288809215,
            "unit": "ns/iter",
            "extra": "iterations: 72245\ncpu: 9729.993771195172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7935.776002976378,
            "unit": "ns/iter",
            "extra": "iterations: 86019\ncpu: 7935.196875108941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7807.242702624364,
            "unit": "ns/iter",
            "extra": "iterations: 89587\ncpu: 7806.730887293862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7898.105342992784,
            "unit": "ns/iter",
            "extra": "iterations: 88340\ncpu: 7898.004301562195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17742.460301382445,
            "unit": "ns/iter",
            "extra": "iterations: 39485\ncpu: 17741.81841205529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58054.13512837894,
            "unit": "ns/iter",
            "extra": "iterations: 11996\ncpu: 58049.07469156347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47213.029086053,
            "unit": "ns/iter",
            "extra": "iterations: 14990\ncpu: 47211.3742495001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46687.30229100406,
            "unit": "ns/iter",
            "extra": "iterations: 14797\ncpu: 46685.66601338121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46436.24641965367,
            "unit": "ns/iter",
            "extra": "iterations: 15222\ncpu: 46432.636972802626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26505.796104148496,
            "unit": "ns/iter",
            "extra": "iterations: 25925\ncpu: 26504.100289296337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46044.99023119325,
            "unit": "ns/iter",
            "extra": "iterations: 15355\ncpu: 46041.35460761946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1848.4219198529313,
            "unit": "ns/iter",
            "extra": "iterations: 375185\ncpu: 1848.3228274051312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9609.46601305338,
            "unit": "ns/iter",
            "extra": "iterations: 71704\ncpu: 9609.01483878155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7943.9064764341265,
            "unit": "ns/iter",
            "extra": "iterations: 89154\ncpu: 7943.589743589689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7895.883985601685,
            "unit": "ns/iter",
            "extra": "iterations: 87515\ncpu: 7895.785865280307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7938.5957752489485,
            "unit": "ns/iter",
            "extra": "iterations: 89094\ncpu: 7938.330302826131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17610.66015723876,
            "unit": "ns/iter",
            "extra": "iterations: 39430\ncpu: 17609.381181841076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57829.97545197795,
            "unit": "ns/iter",
            "extra": "iterations: 12058\ncpu: 57826.04080278684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47291.111497786136,
            "unit": "ns/iter",
            "extra": "iterations: 14655\ncpu: 47288.48857045414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46802.82008312537,
            "unit": "ns/iter",
            "extra": "iterations: 14918\ncpu: 46798.733074138654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46799.95939256311,
            "unit": "ns/iter",
            "extra": "iterations: 14948\ncpu: 46798.52154134424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26923.301329736973,
            "unit": "ns/iter",
            "extra": "iterations: 25945\ncpu: 26921.572557332496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45757.2291287393,
            "unit": "ns/iter",
            "extra": "iterations: 15380\ncpu: 45754.902470740664 ns\nthreads: 1"
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
        "date": 1702412863844,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 623.6743804872361,
            "unit": "ns/iter",
            "extra": "iterations: 1119549\ncpu: 623.6498804429284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5642.787669999052,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5642.731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11018.799770835683,
            "unit": "ns/iter",
            "extra": "iterations: 75928\ncpu: 11018.682172584555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16245.357322079553,
            "unit": "ns/iter",
            "extra": "iterations: 51413\ncpu: 16244.840799019708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21658.25827232134,
            "unit": "ns/iter",
            "extra": "iterations: 38653\ncpu: 21657.162445347065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27259.6881404608,
            "unit": "ns/iter",
            "extra": "iterations: 30642\ncpu: 27258.5177207754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32615.165229774637,
            "unit": "ns/iter",
            "extra": "iterations: 25982\ncpu: 32614.22138403513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37401.65409540745,
            "unit": "ns/iter",
            "extra": "iterations: 22220\ncpu: 37400.900090009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43224.17817943645,
            "unit": "ns/iter",
            "extra": "iterations: 19862\ncpu: 43222.53549491487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 593.5684997949631,
            "unit": "ns/iter",
            "extra": "iterations: 1192697\ncpu: 593.5507509451278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 472.0681154479018,
            "unit": "ns/iter",
            "extra": "iterations: 1484098\ncpu: 472.041940626562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 460.3602417197764,
            "unit": "ns/iter",
            "extra": "iterations: 1531691\ncpu: 460.3553197087405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 442.6904757742343,
            "unit": "ns/iter",
            "extra": "iterations: 1544409\ncpu: 442.67742547472915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 933.5579939477548,
            "unit": "ns/iter",
            "extra": "iterations: 749811\ncpu: 933.5285825361331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2743.91795375351,
            "unit": "ns/iter",
            "extra": "iterations: 292262\ncpu: 2743.776474533121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8433.841464795776,
            "unit": "ns/iter",
            "extra": "iterations: 97133\ncpu: 8433.675475893888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8572.716496170606,
            "unit": "ns/iter",
            "extra": "iterations: 97265\ncpu: 8572.4721122706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8772.532282570995,
            "unit": "ns/iter",
            "extra": "iterations: 93456\ncpu: 8772.266093134736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9703.31169692423,
            "unit": "ns/iter",
            "extra": "iterations: 84441\ncpu: 9702.891960066774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30123.336384773407,
            "unit": "ns/iter",
            "extra": "iterations: 27528\ncpu: 30121.35280441735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 277241.69038585667,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 277219.54459203075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210677.50237322447,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 210663.3275043721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209894.92874936762,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 209879.59641255595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210167.80712530657,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 210158.2063882058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109248.68892223045,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 109245.53638409625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205778.7311700632,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 205773.68545712996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 6036.825620000172,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 6036.479999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26367.696434203743,
            "unit": "ns/iter",
            "extra": "iterations: 31690\ncpu: 26367.453455348714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22665.22307775816,
            "unit": "ns/iter",
            "extra": "iterations: 36884\ncpu: 22663.70784079812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21572.101807214345,
            "unit": "ns/iter",
            "extra": "iterations: 38789\ncpu: 21570.860295444672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22121.621282132302,
            "unit": "ns/iter",
            "extra": "iterations: 37656\ncpu: 22120.140216698517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48380.93940274144,
            "unit": "ns/iter",
            "extra": "iterations: 17212\ncpu: 48377.85266093436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 299966.17437475425,
            "unit": "ns/iter",
            "extra": "iterations: 2919\ncpu: 299934.2583076388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231202.8839333609,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 231189.33369156442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 231300.96479060812,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 231281.0882902114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228399.37121210672,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 228388.6363636367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 121764.0245638508,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 121755.3663642711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217433.5484114975,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 217423.8023197181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 872263.9908341677,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 872213.3822181477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 480503.7429654086,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 480467.5865800866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2690.0123659599594,
            "unit": "ns/iter",
            "extra": "iterations: 298885\ncpu: 2689.8409087107116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9037.663195813831,
            "unit": "ns/iter",
            "extra": "iterations: 96326\ncpu: 9035.763968191348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8127.678082057479,
            "unit": "ns/iter",
            "extra": "iterations: 102464\ncpu: 8127.205652717054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8355.608237585855,
            "unit": "ns/iter",
            "extra": "iterations: 100612\ncpu: 8354.807577624953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9309.70530352295,
            "unit": "ns/iter",
            "extra": "iterations: 90751\ncpu: 9309.315599828082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28879.916006719108,
            "unit": "ns/iter",
            "extra": "iterations: 29169\ncpu: 28878.37772978163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 298965.8784530652,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 298803.83490412816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215703.81878210284,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 215690.58449498645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213974.2600875243,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 213964.68157510884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212613.29654508995,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 212601.84740882943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106677.18177429325,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 106672.52866626377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203567.99092599924,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 203553.37366216868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 224.63211010806637,
            "unit": "ns/iter",
            "extra": "iterations: 3091145\ncpu: 224.62466173537803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1484.1918041020667,
            "unit": "ns/iter",
            "extra": "iterations: 400127\ncpu: 1484.034569024335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1168.8611792235424,
            "unit": "ns/iter",
            "extra": "iterations: 598275\ncpu: 1168.8205256779886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1168.625637112581,
            "unit": "ns/iter",
            "extra": "iterations: 597618\ncpu: 1168.544287487998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 993.7655742026196,
            "unit": "ns/iter",
            "extra": "iterations: 705622\ncpu: 993.7204338867006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9109.527427535579,
            "unit": "ns/iter",
            "extra": "iterations: 76693\ncpu: 9109.205533751458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13636.178276934326,
            "unit": "ns/iter",
            "extra": "iterations: 51420\ncpu: 13635.27226760013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3070.408634008603,
            "unit": "ns/iter",
            "extra": "iterations: 231202\ncpu: 3070.298699838254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3040.0404438409396,
            "unit": "ns/iter",
            "extra": "iterations: 230443\ncpu: 3039.894898087589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3051.9730109011734,
            "unit": "ns/iter",
            "extra": "iterations: 230167\ncpu: 3051.864950231791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5573.173909576864,
            "unit": "ns/iter",
            "extra": "iterations: 125410\ncpu: 5572.837891715183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5729.636451285921,
            "unit": "ns/iter",
            "extra": "iterations: 123425\ncpu: 5729.472149078354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1966.884800328049,
            "unit": "ns/iter",
            "extra": "iterations: 356034\ncpu: 1966.7155384036414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10393.738783678418,
            "unit": "ns/iter",
            "extra": "iterations: 66956\ncpu: 10393.33741561603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8155.517985611291,
            "unit": "ns/iter",
            "extra": "iterations: 85485\ncpu: 8155.261156928133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8106.862613967694,
            "unit": "ns/iter",
            "extra": "iterations: 86428\ncpu: 8106.407645670309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8138.689463251459,
            "unit": "ns/iter",
            "extra": "iterations: 86782\ncpu: 8138.449217579599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18401.252370821807,
            "unit": "ns/iter",
            "extra": "iterations: 38067\ncpu: 18399.957968844326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59834.45797027826,
            "unit": "ns/iter",
            "extra": "iterations: 11706\ncpu: 59832.991628225136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47967.007252829666,
            "unit": "ns/iter",
            "extra": "iterations: 14615\ncpu: 47962.35374615092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47861.952536823876,
            "unit": "ns/iter",
            "extra": "iterations: 14664\ncpu: 47860.774686306024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47257.728845502104,
            "unit": "ns/iter",
            "extra": "iterations: 14855\ncpu: 47254.446314372195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27344.335469091337,
            "unit": "ns/iter",
            "extra": "iterations: 25752\ncpu: 27343.309257532957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46520.48690159069,
            "unit": "ns/iter",
            "extra": "iterations: 15040\ncpu: 46517.93218085125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2019.275508374899,
            "unit": "ns/iter",
            "extra": "iterations: 345906\ncpu: 2019.2101322324463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10148.027197837684,
            "unit": "ns/iter",
            "extra": "iterations: 68829\ncpu: 10147.343416292524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8231.800868559674,
            "unit": "ns/iter",
            "extra": "iterations: 84738\ncpu: 8231.464042106258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8418.01129251248,
            "unit": "ns/iter",
            "extra": "iterations: 83241\ncpu: 8417.485373794301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8279.471451683265,
            "unit": "ns/iter",
            "extra": "iterations: 84681\ncpu: 8279.381443299046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19214.15434373535,
            "unit": "ns/iter",
            "extra": "iterations: 37721\ncpu: 19213.941836112597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59359.30487179319,
            "unit": "ns/iter",
            "extra": "iterations: 11700\ncpu: 59355.820512821134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47299.658488511915,
            "unit": "ns/iter",
            "extra": "iterations: 14714\ncpu: 47299.157265190384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47387.479900674254,
            "unit": "ns/iter",
            "extra": "iterations: 14901\ncpu: 47386.953895711835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46595.32393090981,
            "unit": "ns/iter",
            "extra": "iterations: 14358\ncpu: 46591.96963365427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27062.625762133215,
            "unit": "ns/iter",
            "extra": "iterations: 25914\ncpu: 27060.696920583665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45991.03103852352,
            "unit": "ns/iter",
            "extra": "iterations: 15368\ncpu: 45987.968505986275 ns\nthreads: 1"
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
        "date": 1702418680202,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 618.0141769939402,
            "unit": "ns/iter",
            "extra": "iterations: 1130423\ncpu: 617.9756604386147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5737.71019999981,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5737.6100000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11185.253944040702,
            "unit": "ns/iter",
            "extra": "iterations: 74733\ncpu: 11184.91964727764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16757.599892536204,
            "unit": "ns/iter",
            "extra": "iterations: 50249\ncpu: 16756.968297876578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23356.453926510512,
            "unit": "ns/iter",
            "extra": "iterations: 38482\ncpu: 23355.366145210748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27248.481599230883,
            "unit": "ns/iter",
            "extra": "iterations: 31140\ncpu: 27247.66859344893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32228.232345624445,
            "unit": "ns/iter",
            "extra": "iterations: 25716\ncpu: 32227.593715974494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37495.71820347956,
            "unit": "ns/iter",
            "extra": "iterations: 22243\ncpu: 37494.87928786585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43003.33236370706,
            "unit": "ns/iter",
            "extra": "iterations: 19939\ncpu: 43002.14654696828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 592.1924359527412,
            "unit": "ns/iter",
            "extra": "iterations: 1183890\ncpu: 592.1772293033989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 460.1534803526028,
            "unit": "ns/iter",
            "extra": "iterations: 1514904\ncpu: 460.1213674265837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 457.9936649902535,
            "unit": "ns/iter",
            "extra": "iterations: 1534015\ncpu: 457.9612324520946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 456.7235894420777,
            "unit": "ns/iter",
            "extra": "iterations: 1566561\ncpu: 456.7162083059644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 967.4565509237697,
            "unit": "ns/iter",
            "extra": "iterations: 753077\ncpu: 967.452066654538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2746.4240032583966,
            "unit": "ns/iter",
            "extra": "iterations: 292177\ncpu: 2746.385923601104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8306.695593539389,
            "unit": "ns/iter",
            "extra": "iterations: 97879\ncpu: 8306.424258523288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8318.4466148872,
            "unit": "ns/iter",
            "extra": "iterations: 98239\ncpu: 8318.169973228554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8495.907471270291,
            "unit": "ns/iter",
            "extra": "iterations: 95981\ncpu: 8495.681436951065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9360.3663837795,
            "unit": "ns/iter",
            "extra": "iterations: 87785\ncpu: 9360.132141026394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30372.329105209166,
            "unit": "ns/iter",
            "extra": "iterations: 27593\ncpu: 30370.177218859782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 277612.7167574663,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 277594.3287407873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210503.09622502592,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 210489.7359980256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213022.31859720606,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 213011.60780439575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213368.45392323966,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 213351.47885602558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108463.28093936741,
            "unit": "ns/iter",
            "extra": "iterations: 8048\ncpu: 108457.20675944317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207287.0624705429,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 207273.9273927388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5865.665989999798,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5865.083000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25926.8315973868,
            "unit": "ns/iter",
            "extra": "iterations: 31971\ncpu: 25925.163429357854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22460.00045945985,
            "unit": "ns/iter",
            "extra": "iterations: 37000\ncpu: 22458.654054054037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21502.514481021128,
            "unit": "ns/iter",
            "extra": "iterations: 38913\ncpu: 21501.513632976123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22322.328886746935,
            "unit": "ns/iter",
            "extra": "iterations: 37332\ncpu: 22320.580199292923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47743.03811900589,
            "unit": "ns/iter",
            "extra": "iterations: 17629\ncpu: 47739.236485336754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 314980.70007006254,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 314973.58093903185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 233610.07508075394,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 233590.47362755807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 233241.85045722814,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 233227.3803119955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228963.49815982184,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 228946.81913775043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 123007.87939840929,
            "unit": "ns/iter",
            "extra": "iterations: 7048\ncpu: 122999.92905788867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 225105.83376090572,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 225085.6080041054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 895318.5593220526,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 895255.273069681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 505484.405730672,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 505450.88825214945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2637.924957555097,
            "unit": "ns/iter",
            "extra": "iterations: 303335\ncpu: 2637.862099658793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8099.736320640208,
            "unit": "ns/iter",
            "extra": "iterations: 102545\ncpu: 8099.539714271768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8264.946652771043,
            "unit": "ns/iter",
            "extra": "iterations: 100755\ncpu: 8264.67569847647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8514.012292294994,
            "unit": "ns/iter",
            "extra": "iterations: 98517\ncpu: 8513.962057309946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9091.020531847531,
            "unit": "ns/iter",
            "extra": "iterations: 91906\ncpu: 9090.87545970878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29110.728280898813,
            "unit": "ns/iter",
            "extra": "iterations: 28765\ncpu: 29110.56144620205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 290013.98662315175,
            "unit": "ns/iter",
            "extra": "iterations: 3065\ncpu: 290003.4584013031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215198.57671569186,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 215195.1225490189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215575.75477706772,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 215572.41548260557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 212919.46929090942,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 212918.17420435665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107199.49436569188,
            "unit": "ns/iter",
            "extra": "iterations: 8253\ncpu: 107195.69853386686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 205598.19381296603,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 205596.6018279822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 225.18428499847616,
            "unit": "ns/iter",
            "extra": "iterations: 3111371\ncpu: 225.18266063417124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1504.0904185793333,
            "unit": "ns/iter",
            "extra": "iterations: 466674\ncpu: 1504.0816501455017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1234.00714092133,
            "unit": "ns/iter",
            "extra": "iterations: 568274\ncpu: 1233.954043296009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1178.069021623044,
            "unit": "ns/iter",
            "extra": "iterations: 594321\ncpu: 1178.0509186113145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 1033.8134335893387,
            "unit": "ns/iter",
            "extra": "iterations: 703267\ncpu: 1033.7944194736815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9363.453517920292,
            "unit": "ns/iter",
            "extra": "iterations: 75556\ncpu: 9363.300068823122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14087.94464202269,
            "unit": "ns/iter",
            "extra": "iterations: 49207\ncpu: 14087.530229438904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3156.110315173535,
            "unit": "ns/iter",
            "extra": "iterations: 218610\ncpu: 3155.951694798937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3102.064429205935,
            "unit": "ns/iter",
            "extra": "iterations: 223408\ncpu: 3101.9963474897772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3099.946219408205,
            "unit": "ns/iter",
            "extra": "iterations: 228205\ncpu: 3099.8987752240114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5891.252201547932,
            "unit": "ns/iter",
            "extra": "iterations: 119575\ncpu: 5891.218900271787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6084.401086957118,
            "unit": "ns/iter",
            "extra": "iterations: 118680\ncpu: 6083.988035052219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1951.9630837856919,
            "unit": "ns/iter",
            "extra": "iterations: 353747\ncpu: 1951.8901927083557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10336.557375586703,
            "unit": "ns/iter",
            "extra": "iterations: 67276\ncpu: 10336.168916106848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8230.185473441343,
            "unit": "ns/iter",
            "extra": "iterations: 84287\ncpu: 8230.150557025507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8138.99465066898,
            "unit": "ns/iter",
            "extra": "iterations: 86179\ncpu: 8138.769305747351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7960.74907975496,
            "unit": "ns/iter",
            "extra": "iterations: 88020\ncpu: 7960.416950692946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18219.267798552413,
            "unit": "ns/iter",
            "extra": "iterations: 38402\ncpu: 18218.707358991676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60746.79646327211,
            "unit": "ns/iter",
            "extra": "iterations: 11423\ncpu: 60745.48717499771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48804.84729645628,
            "unit": "ns/iter",
            "extra": "iterations: 14407\ncpu: 48803.172069133005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48016.56428522688,
            "unit": "ns/iter",
            "extra": "iterations: 14459\ncpu: 48012.74638633333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47263.78940254128,
            "unit": "ns/iter",
            "extra": "iterations: 14796\ncpu: 47262.9697215468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27923.51927025816,
            "unit": "ns/iter",
            "extra": "iterations: 25324\ncpu: 27923.34939188105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47244.46865288889,
            "unit": "ns/iter",
            "extra": "iterations: 14802\ncpu: 47241.68355627622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1984.096068978253,
            "unit": "ns/iter",
            "extra": "iterations: 353038\ncpu: 1984.0306142681743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10209.219863324488,
            "unit": "ns/iter",
            "extra": "iterations: 68629\ncpu: 10208.684375409875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8170.310329594075,
            "unit": "ns/iter",
            "extra": "iterations: 86015\ncpu: 8170.226123350494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8263.092726735726,
            "unit": "ns/iter",
            "extra": "iterations: 84625\ncpu: 8262.632791728152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8079.687404574806,
            "unit": "ns/iter",
            "extra": "iterations: 85801\ncpu: 8079.454784909204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18505.258403526983,
            "unit": "ns/iter",
            "extra": "iterations: 37871\ncpu: 18504.473079665368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59841.62419229435,
            "unit": "ns/iter",
            "extra": "iterations: 11607\ncpu: 59839.98449211733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46818.836420380496,
            "unit": "ns/iter",
            "extra": "iterations: 14739\ncpu: 46814.45145532296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46725.634474004524,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 46722.56382836488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46369.209530804634,
            "unit": "ns/iter",
            "extra": "iterations: 14962\ncpu: 46367.53107873319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27444.32827672438,
            "unit": "ns/iter",
            "extra": "iterations: 25643\ncpu: 27443.267168427545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46377.03272584894,
            "unit": "ns/iter",
            "extra": "iterations: 15309\ncpu: 46374.82526618352 ns\nthreads: 1"
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
        "date": 1702476034043,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 629.2194698566273,
            "unit": "ns/iter",
            "extra": "iterations: 1112982\ncpu: 629.1832212919885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5663.100269999859,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5663.039999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10970.183724122426,
            "unit": "ns/iter",
            "extra": "iterations: 75744\ncpu: 10969.781104773976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16515.88624197667,
            "unit": "ns/iter",
            "extra": "iterations: 50625\ncpu: 16515.82024691358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21744.59809663192,
            "unit": "ns/iter",
            "extra": "iterations: 38248\ncpu: 21743.9656975528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27262.567518543936,
            "unit": "ns/iter",
            "extra": "iterations: 30873\ncpu: 27261.477666569503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32544.782745003722,
            "unit": "ns/iter",
            "extra": "iterations: 25836\ncpu: 32543.458739742993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38048.12783273404,
            "unit": "ns/iter",
            "extra": "iterations: 22240\ncpu: 38047.846223021596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41762.10967039719,
            "unit": "ns/iter",
            "extra": "iterations: 20206\ncpu: 41759.071562902136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 599.4918574085059,
            "unit": "ns/iter",
            "extra": "iterations: 1167503\ncpu: 599.4796587246445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 473.0206719376826,
            "unit": "ns/iter",
            "extra": "iterations: 1479542\ncpu: 472.9915744196521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 466.0862612373404,
            "unit": "ns/iter",
            "extra": "iterations: 1495353\ncpu: 466.0674770438826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 461.55203383115156,
            "unit": "ns/iter",
            "extra": "iterations: 1534444\ncpu: 461.52554280247415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 938.9503227217289,
            "unit": "ns/iter",
            "extra": "iterations: 736393\ncpu: 938.9165839436284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2747.6821256604526,
            "unit": "ns/iter",
            "extra": "iterations: 291373\ncpu: 2747.5658348577267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8414.942510538165,
            "unit": "ns/iter",
            "extra": "iterations: 101062\ncpu: 8414.697908214777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8793.19898410755,
            "unit": "ns/iter",
            "extra": "iterations: 94892\ncpu: 8792.876111790276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8576.497466915265,
            "unit": "ns/iter",
            "extra": "iterations: 96720\ncpu: 8576.527088502904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9591.977324816124,
            "unit": "ns/iter",
            "extra": "iterations: 85953\ncpu: 9591.26964736546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29991.762732285744,
            "unit": "ns/iter",
            "extra": "iterations: 27391\ncpu: 29989.56956664596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276287.4928864954,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 276272.2731583947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210985.9690850164,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 210976.24033906794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 215184.48614548863,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 215175.40821375535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215905.9550173049,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 215898.22046465694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108568.1864490661,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 108562.68545994062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206532.10756502827,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 206522.2458628842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5960.914009999669,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5960.547999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26207.97206563291,
            "unit": "ns/iter",
            "extra": "iterations: 31753\ncpu: 26207.170975970814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22351.335986795253,
            "unit": "ns/iter",
            "extra": "iterations: 37561\ncpu: 22349.559383402953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21519.08884196316,
            "unit": "ns/iter",
            "extra": "iterations: 38833\ncpu: 21518.067107872204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21879.23654435843,
            "unit": "ns/iter",
            "extra": "iterations: 37828\ncpu: 21878.370519192078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48017.65296803736,
            "unit": "ns/iter",
            "extra": "iterations: 17301\ncpu: 48015.9008149818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 299144.714236584,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 299127.9229711141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 232065.43610224593,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 232052.2364217247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 233526.5265545841,
            "unit": "ns/iter",
            "extra": "iterations: 3747\ncpu: 233525.64718441587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 230265.902522326,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 230246.9259064628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122132.41512582214,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 122131.62797163862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 221022.72699542812,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 221004.7788510436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 871550.0147465618,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 871526.8202764958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 482988.5008183376,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 482966.1756683045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2689.101844341061,
            "unit": "ns/iter",
            "extra": "iterations: 299565\ncpu: 2689.0664797289373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7892.324342821589,
            "unit": "ns/iter",
            "extra": "iterations: 103739\ncpu: 7892.164952428662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8346.977779578292,
            "unit": "ns/iter",
            "extra": "iterations: 98738\ncpu: 8347.019384634084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8490.155670860157,
            "unit": "ns/iter",
            "extra": "iterations: 96749\ncpu: 8489.710487963692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8941.482185195999,
            "unit": "ns/iter",
            "extra": "iterations: 92788\ncpu: 8941.418071302283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29220.110940770028,
            "unit": "ns/iter",
            "extra": "iterations: 28700\ncpu: 29218.878048780487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 287735.7077373143,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 287733.5175552667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 213410.7302472277,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 213397.67329132304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213628.69197080666,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 213613.52798053602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209392.10120192688,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 209382.4278846156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106714.64179644795,
            "unit": "ns/iter",
            "extra": "iterations: 8283\ncpu: 106710.67246166855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204724.84805406144,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 204711.27942204676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 227.13436171261844,
            "unit": "ns/iter",
            "extra": "iterations: 3093865\ncpu: 227.12623207541276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1498.5306038548404,
            "unit": "ns/iter",
            "extra": "iterations: 471885\ncpu: 1498.4566154889321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1169.391286527085,
            "unit": "ns/iter",
            "extra": "iterations: 597741\ncpu: 1169.3472590971571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1225.525854636515,
            "unit": "ns/iter",
            "extra": "iterations: 570652\ncpu: 1225.5169525384997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 991.1965236300872,
            "unit": "ns/iter",
            "extra": "iterations: 708210\ncpu: 991.1907485068025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9073.940491524494,
            "unit": "ns/iter",
            "extra": "iterations: 77636\ncpu: 9073.629501777548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14364.842346260288,
            "unit": "ns/iter",
            "extra": "iterations: 51759\ncpu: 14364.164686334769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3010.8667379782814,
            "unit": "ns/iter",
            "extra": "iterations: 228107\ncpu: 3010.7541636161704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3005.144651178831,
            "unit": "ns/iter",
            "extra": "iterations: 233472\ncpu: 3004.959052905695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2997.0039598347103,
            "unit": "ns/iter",
            "extra": "iterations: 232838\ncpu: 2996.869067763836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5526.737332403908,
            "unit": "ns/iter",
            "extra": "iterations: 126346\ncpu: 5526.494705016386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5623.778401440613,
            "unit": "ns/iter",
            "extra": "iterations: 123286\ncpu: 5623.575264020212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1963.2024274701505,
            "unit": "ns/iter",
            "extra": "iterations: 356750\ncpu: 1963.0873160476415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10326.311501198026,
            "unit": "ns/iter",
            "extra": "iterations: 68019\ncpu: 10326.138284891007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8187.212585809737,
            "unit": "ns/iter",
            "extra": "iterations: 85509\ncpu: 8186.9265223544835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8003.7378271576845,
            "unit": "ns/iter",
            "extra": "iterations: 87305\ncpu: 8003.3629230857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8131.344753796303,
            "unit": "ns/iter",
            "extra": "iterations: 87854\ncpu: 8131.044687777359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18272.509992696698,
            "unit": "ns/iter",
            "extra": "iterations: 38328\ncpu: 18271.38123565015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59096.733669630754,
            "unit": "ns/iter",
            "extra": "iterations: 11696\ncpu: 59095.54548563603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47053.523103982945,
            "unit": "ns/iter",
            "extra": "iterations: 14781\ncpu: 47050.679926933306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47383.03619393065,
            "unit": "ns/iter",
            "extra": "iterations: 14892\ncpu: 47381.28525382709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46288.70150646544,
            "unit": "ns/iter",
            "extra": "iterations: 15002\ncpu: 46288.0282628981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27357.1671490025,
            "unit": "ns/iter",
            "extra": "iterations: 25570\ncpu: 27356.14000782203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46646.41272908749,
            "unit": "ns/iter",
            "extra": "iterations: 15005\ncpu: 46646.55781406193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1989.9691001600634,
            "unit": "ns/iter",
            "extra": "iterations: 349840\ncpu: 1989.8788017379507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10366.175830896742,
            "unit": "ns/iter",
            "extra": "iterations: 67036\ncpu: 10366.010800167162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8197.204820829122,
            "unit": "ns/iter",
            "extra": "iterations: 85421\ncpu: 8197.158778286366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8250.272281834315,
            "unit": "ns/iter",
            "extra": "iterations: 84901\ncpu: 8249.841580193304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8135.403658847681,
            "unit": "ns/iter",
            "extra": "iterations: 86038\ncpu: 8135.430856133367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18112.209573998432,
            "unit": "ns/iter",
            "extra": "iterations: 38521\ncpu: 18111.30292567689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57753.4453725891,
            "unit": "ns/iter",
            "extra": "iterations: 12091\ncpu: 57751.53419899179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46542.478559976604,
            "unit": "ns/iter",
            "extra": "iterations: 14972\ncpu: 46540.32861341189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46296.358159335185,
            "unit": "ns/iter",
            "extra": "iterations: 15038\ncpu: 46296.5221439018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45697.6388295451,
            "unit": "ns/iter",
            "extra": "iterations: 15447\ncpu: 45695.073477049955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26902.150346304516,
            "unit": "ns/iter",
            "extra": "iterations: 26133\ncpu: 26902.25002869974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45717.18253761835,
            "unit": "ns/iter",
            "extra": "iterations: 15416\ncpu: 45716.859107421 ns\nthreads: 1"
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
        "date": 1702479863748,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 634.4317050486371,
            "unit": "ns/iter",
            "extra": "iterations: 1117147\ncpu: 634.4177623893722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5670.220599999993,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5670.112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10905.316598872294,
            "unit": "ns/iter",
            "extra": "iterations: 76210\ncpu: 10904.840572103398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16440.181408207678,
            "unit": "ns/iter",
            "extra": "iterations: 51001\ncpu: 16440.163918354545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21757.19579929755,
            "unit": "ns/iter",
            "extra": "iterations: 38565\ncpu: 21756.170102424472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27168.046872469196,
            "unit": "ns/iter",
            "extra": "iterations: 30871\ncpu: 27167.053221469974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32375.527281939627,
            "unit": "ns/iter",
            "extra": "iterations: 25658\ncpu: 32374.916205471985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37810.496347735825,
            "unit": "ns/iter",
            "extra": "iterations: 22178\ncpu: 37808.4317792407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42655.760482023776,
            "unit": "ns/iter",
            "extra": "iterations: 20082\ncpu: 42654.58619659391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 595.0983160813493,
            "unit": "ns/iter",
            "extra": "iterations: 1177254\ncpu: 595.0646164718908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 465.6759847123534,
            "unit": "ns/iter",
            "extra": "iterations: 1498991\ncpu: 465.6754443488988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 460.1440419600249,
            "unit": "ns/iter",
            "extra": "iterations: 1518016\ncpu: 460.12571672498854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 459.22111625556346,
            "unit": "ns/iter",
            "extra": "iterations: 1526568\ncpu: 459.21360856509517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 973.9542061128194,
            "unit": "ns/iter",
            "extra": "iterations: 719441\ncpu: 973.9260064411101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2758.15353402757,
            "unit": "ns/iter",
            "extra": "iterations: 291056\ncpu: 2758.1530701995516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9428.133944679636,
            "unit": "ns/iter",
            "extra": "iterations: 93673\ncpu: 9427.645105846923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8569.674971302811,
            "unit": "ns/iter",
            "extra": "iterations: 94084\ncpu: 8569.431571786943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8569.83628309287,
            "unit": "ns/iter",
            "extra": "iterations: 94810\ncpu: 8569.415673452173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9294.747376788077,
            "unit": "ns/iter",
            "extra": "iterations: 88060\ncpu: 9294.307290483746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30329.95680180623,
            "unit": "ns/iter",
            "extra": "iterations: 27478\ncpu: 30327.84409345657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276532.0947837053,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 276513.8676844782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214727.70260224075,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 214714.32465923132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210693.89825509637,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 210682.1577783246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215337.3720245656,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 215319.82822085934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107925.85918972413,
            "unit": "ns/iter",
            "extra": "iterations: 8096\ncpu: 107919.71343873521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205605.03474356062,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 205588.46608366797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5903.782380000849,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5903.442000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26304.68718671663,
            "unit": "ns/iter",
            "extra": "iterations: 31920\ncpu: 26303.370927318305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22594.626487450063,
            "unit": "ns/iter",
            "extra": "iterations: 36976\ncpu: 22593.841951536066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21322.440103168876,
            "unit": "ns/iter",
            "extra": "iterations: 39159\ncpu: 21321.685947036385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22111.86732825829,
            "unit": "ns/iter",
            "extra": "iterations: 37687\ncpu: 22110.958686018977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46853.48190337282,
            "unit": "ns/iter",
            "extra": "iterations: 17821\ncpu: 46850.193591829906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 299539.4732876436,
            "unit": "ns/iter",
            "extra": "iterations: 2920\ncpu: 299522.7397260266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230348.43193854217,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 230338.930084745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230413.61025915004,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 230402.8820729761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226554.3846664477,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 226545.07135745036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122151.21273030539,
            "unit": "ns/iter",
            "extra": "iterations: 7164\ncpu: 122146.39865996692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 218263.53513376924,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 218252.63815954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 881577.549450459,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 881533.8827838817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 490512.4080175394,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 490488.6875343217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2683.37235557094,
            "unit": "ns/iter",
            "extra": "iterations: 300632\ncpu: 2683.2619282045775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8228.106283870182,
            "unit": "ns/iter",
            "extra": "iterations: 99827\ncpu: 8227.747002314038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8303.300119003683,
            "unit": "ns/iter",
            "extra": "iterations: 99997\ncpu: 8303.157094712844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8283.012590628978,
            "unit": "ns/iter",
            "extra": "iterations: 99995\ncpu: 8282.986149307495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8914.700839778774,
            "unit": "ns/iter",
            "extra": "iterations: 93358\ncpu: 8914.422973928382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29322.84630794795,
            "unit": "ns/iter",
            "extra": "iterations: 28453\ncpu: 29321.667311004217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 286793.0967846575,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 286776.48587203724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215073.84621061734,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 215065.89566929144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213609.58200930382,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 213601.68662918528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 211015.47046007085,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 211005.8837772388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107771.27552275627,
            "unit": "ns/iter",
            "extra": "iterations: 8130\ncpu: 107766.4575645757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204454.3072078268,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 204444.66993235337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 225.59012368972193,
            "unit": "ns/iter",
            "extra": "iterations: 3105998\ncpu: 225.58089219632393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1491.9965618206256,
            "unit": "ns/iter",
            "extra": "iterations: 464490\ncpu: 1491.92899739499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1187.006493308101,
            "unit": "ns/iter",
            "extra": "iterations: 589222\ncpu: 1186.9894538900458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1236.7604749232003,
            "unit": "ns/iter",
            "extra": "iterations: 565565\ncpu: 1236.725221680966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 978.6933751330972,
            "unit": "ns/iter",
            "extra": "iterations: 715154\ncpu: 978.6525699359763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9194.7685822402,
            "unit": "ns/iter",
            "extra": "iterations: 74251\ncpu: 9194.229033952388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13073.301242978412,
            "unit": "ns/iter",
            "extra": "iterations: 54305\ncpu: 13072.906730503697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3102.347771200134,
            "unit": "ns/iter",
            "extra": "iterations: 221801\ncpu: 3102.1568883819436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3110.278529715441,
            "unit": "ns/iter",
            "extra": "iterations: 225861\ncpu: 3110.138979283713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3111.2366272628146,
            "unit": "ns/iter",
            "extra": "iterations: 224767\ncpu: 3111.0919307549316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5692.080440614163,
            "unit": "ns/iter",
            "extra": "iterations: 123010\ncpu: 5691.824241931564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5791.424446376137,
            "unit": "ns/iter",
            "extra": "iterations: 120795\ncpu: 5791.309242932224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1952.6484854936805,
            "unit": "ns/iter",
            "extra": "iterations: 356816\ncpu: 1952.624602035794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10769.666229194589,
            "unit": "ns/iter",
            "extra": "iterations: 67052\ncpu: 10769.222394559361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8094.487967046494,
            "unit": "ns/iter",
            "extra": "iterations: 86180\ncpu: 8094.047342771006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8135.32791773035,
            "unit": "ns/iter",
            "extra": "iterations: 85863\ncpu: 8135.076808404073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7986.920217300719,
            "unit": "ns/iter",
            "extra": "iterations: 87989\ncpu: 7986.788121242382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18178.968657183646,
            "unit": "ns/iter",
            "extra": "iterations: 38382\ncpu: 18178.872909176345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59941.02784002657,
            "unit": "ns/iter",
            "extra": "iterations: 11602\ncpu: 59938.75193932103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47580.273172721514,
            "unit": "ns/iter",
            "extra": "iterations: 14694\ncpu: 47580.19599836648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47428.978118166066,
            "unit": "ns/iter",
            "extra": "iterations: 14624\ncpu: 47425.813730853224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46836.34516301761,
            "unit": "ns/iter",
            "extra": "iterations: 14906\ncpu: 46834.435797666185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27495.355224714596,
            "unit": "ns/iter",
            "extra": "iterations: 24987\ncpu: 27493.74074518744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46547.7884360993,
            "unit": "ns/iter",
            "extra": "iterations: 15116\ncpu: 46545.81238422864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1998.4608726281922,
            "unit": "ns/iter",
            "extra": "iterations: 346356\ncpu: 1998.391539341041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10187.663121703441,
            "unit": "ns/iter",
            "extra": "iterations: 68642\ncpu: 10187.484339034258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8452.584692099519,
            "unit": "ns/iter",
            "extra": "iterations: 83225\ncpu: 8452.380895163844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8334.417050142023,
            "unit": "ns/iter",
            "extra": "iterations: 83882\ncpu: 8334.409050809516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8263.099058380314,
            "unit": "ns/iter",
            "extra": "iterations: 84960\ncpu: 8263.0049435028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18273.099986919497,
            "unit": "ns/iter",
            "extra": "iterations: 38225\ncpu: 18271.989535644192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59001.48764330319,
            "unit": "ns/iter",
            "extra": "iterations: 11775\ncpu: 59002.14012738866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47387.17524245683,
            "unit": "ns/iter",
            "extra": "iterations: 14848\ncpu: 47386.77262931094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46854.789962949086,
            "unit": "ns/iter",
            "extra": "iterations: 14845\ncpu: 46853.73526439891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46497.781764123225,
            "unit": "ns/iter",
            "extra": "iterations: 15135\ncpu: 46497.64783614121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26853.235788186663,
            "unit": "ns/iter",
            "extra": "iterations: 26193\ncpu: 26852.17806284152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46012.67141469368,
            "unit": "ns/iter",
            "extra": "iterations: 15445\ncpu: 46013.149886695246 ns\nthreads: 1"
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
        "date": 1702488884543,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 640.2273371928219,
            "unit": "ns/iter",
            "extra": "iterations: 1092197\ncpu: 640.2030036705834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5588.822710000159,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5588.673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10774.747260773558,
            "unit": "ns/iter",
            "extra": "iterations: 78033\ncpu: 10774.54922917227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16271.686205224243,
            "unit": "ns/iter",
            "extra": "iterations: 51505\ncpu: 16271.2416270265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21551.745078941152,
            "unit": "ns/iter",
            "extra": "iterations: 39016\ncpu: 21551.2225753537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26704.319328803256,
            "unit": "ns/iter",
            "extra": "iterations: 31347\ncpu: 26703.47720675025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32196.369153308315,
            "unit": "ns/iter",
            "extra": "iterations: 26019\ncpu: 32194.857604058587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37435.27146442086,
            "unit": "ns/iter",
            "extra": "iterations: 22316\ncpu: 37434.33411005558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41463.94440425453,
            "unit": "ns/iter",
            "extra": "iterations: 19354\ncpu: 41463.39258034515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 590.7154793737109,
            "unit": "ns/iter",
            "extra": "iterations: 1158981\ncpu: 590.699502407719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 471.12458639288434,
            "unit": "ns/iter",
            "extra": "iterations: 1503238\ncpu: 471.11641669516126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 456.70236256342577,
            "unit": "ns/iter",
            "extra": "iterations: 1527832\ncpu: 456.6885626168312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 450.2984290863124,
            "unit": "ns/iter",
            "extra": "iterations: 1550499\ncpu: 450.2901324025357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 939.6834851297858,
            "unit": "ns/iter",
            "extra": "iterations: 744638\ncpu: 939.6638366562004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2756.7810760668385,
            "unit": "ns/iter",
            "extra": "iterations: 292138\ncpu: 2756.6988888812853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8432.80384253013,
            "unit": "ns/iter",
            "extra": "iterations: 95510\ncpu: 8432.62171500369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8624.73451336617,
            "unit": "ns/iter",
            "extra": "iterations: 95986\ncpu: 8624.528577084151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8725.20452250156,
            "unit": "ns/iter",
            "extra": "iterations: 94063\ncpu: 8724.950299267519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9610.347615538134,
            "unit": "ns/iter",
            "extra": "iterations: 85491\ncpu: 9609.914493923354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30389.935342913453,
            "unit": "ns/iter",
            "extra": "iterations: 27004\ncpu: 30389.390460672512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 277740.5737128415,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 277737.38407419284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209153.38004924863,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 209151.3546798032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210714.83759213853,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 210710.22113022069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 209993.53844268358,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 209984.0842311461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107549.277654863,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 107542.79744346134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205693.51703079318,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 205688.41907446552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5869.034769999644,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5868.922000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26190.21783298986,
            "unit": "ns/iter",
            "extra": "iterations: 31795\ncpu: 26189.39141374435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22523.10674036171,
            "unit": "ns/iter",
            "extra": "iterations: 37090\ncpu: 22522.113777298437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21793.168486293656,
            "unit": "ns/iter",
            "extra": "iterations: 38561\ncpu: 21792.92030808326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22467.039240740043,
            "unit": "ns/iter",
            "extra": "iterations: 37563\ncpu: 22466.791789793195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47112.026041665325,
            "unit": "ns/iter",
            "extra": "iterations: 17664\ncpu: 47110.88654891315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 297907.57754196506,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 297896.1656966794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230096.81020354934,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 230094.15807560043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230095.85902850618,
            "unit": "ns/iter",
            "extra": "iterations: 3788\ncpu: 230089.12354804698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 227386.6248696651,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 227379.30135557931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122010.8726310039,
            "unit": "ns/iter",
            "extra": "iterations: 7176\ncpu: 121832.09308807096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217286.85392423024,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 217273.50829413225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 869320.4622467542,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 869268.6924493607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 478253.83574877,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 478232.5281803539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2692.709047841332,
            "unit": "ns/iter",
            "extra": "iterations: 298049\ncpu: 2692.5633033494555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8080.334851309635,
            "unit": "ns/iter",
            "extra": "iterations: 101890\ncpu: 8079.985278241284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8190.119794182041,
            "unit": "ns/iter",
            "extra": "iterations: 101449\ncpu: 8189.574071701061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8306.234672494573,
            "unit": "ns/iter",
            "extra": "iterations: 99739\ncpu: 8305.783093874981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8901.428106360181,
            "unit": "ns/iter",
            "extra": "iterations: 93381\ncpu: 8900.969147899525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29297.278254228735,
            "unit": "ns/iter",
            "extra": "iterations: 28801\ncpu: 29295.139057671597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 283558.1760179327,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 283537.83263866644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 215105.4305488074,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 215088.02816901312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 213241.93977354988,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 213225.15056612735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209529.85853078015,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 209517.32227488203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 106111.24088996509,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 106103.69212266944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 201816.434702778,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 201806.03626348393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 247.94634263240292,
            "unit": "ns/iter",
            "extra": "iterations: 2783327\ncpu: 247.9332467942145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1493.6509644349862,
            "unit": "ns/iter",
            "extra": "iterations: 470379\ncpu: 1493.5775194045682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1178.2841473034437,
            "unit": "ns/iter",
            "extra": "iterations: 593224\ncpu: 1178.2163230078381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1296.0034906505139,
            "unit": "ns/iter",
            "extra": "iterations: 539441\ncpu: 1295.91855272403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 978.7108605215357,
            "unit": "ns/iter",
            "extra": "iterations: 711034\ncpu: 978.6429340931595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9142.431416794838,
            "unit": "ns/iter",
            "extra": "iterations: 76666\ncpu: 9142.339498604377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13471.131196073462,
            "unit": "ns/iter",
            "extra": "iterations: 51343\ncpu: 13470.126404767896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3028.1240126931507,
            "unit": "ns/iter",
            "extra": "iterations: 230678\ncpu: 3028.0694301146805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3017.9292304784503,
            "unit": "ns/iter",
            "extra": "iterations: 232911\ncpu: 3017.8149593621547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2977.90840033693,
            "unit": "ns/iter",
            "extra": "iterations: 234193\ncpu: 2977.8763669281207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5622.296516772052,
            "unit": "ns/iter",
            "extra": "iterations: 124310\ncpu: 5622.173598262395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5726.233151301931,
            "unit": "ns/iter",
            "extra": "iterations: 123422\ncpu: 5726.043979193294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1961.2874247147022,
            "unit": "ns/iter",
            "extra": "iterations: 357972\ncpu: 1961.2112120501101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10450.909715775138,
            "unit": "ns/iter",
            "extra": "iterations: 66778\ncpu: 10450.587019677043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8266.970751447194,
            "unit": "ns/iter",
            "extra": "iterations: 84517\ncpu: 8266.743968669032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8071.595743459757,
            "unit": "ns/iter",
            "extra": "iterations: 87113\ncpu: 8071.365927014358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8028.748637579125,
            "unit": "ns/iter",
            "extra": "iterations: 87161\ncpu: 8028.665343444911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18391.923229942357,
            "unit": "ns/iter",
            "extra": "iterations: 38205\ncpu: 18391.200104698233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59661.87365637042,
            "unit": "ns/iter",
            "extra": "iterations: 11722\ncpu: 59660.38218733961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47781.98262285892,
            "unit": "ns/iter",
            "extra": "iterations: 14732\ncpu: 47779.45289166444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47475.10816449726,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 47474.35552264914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46947.69476705222,
            "unit": "ns/iter",
            "extra": "iterations: 14982\ncpu: 46946.068615671895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27283.66140965539,
            "unit": "ns/iter",
            "extra": "iterations: 25680\ncpu: 27282.920560747934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46379.78925592257,
            "unit": "ns/iter",
            "extra": "iterations: 15227\ncpu: 46378.21632626264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2008.3492101358197,
            "unit": "ns/iter",
            "extra": "iterations: 347908\ncpu: 2008.2932844315055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10228.289437946416,
            "unit": "ns/iter",
            "extra": "iterations: 68481\ncpu: 10227.882186299843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8281.030983221297,
            "unit": "ns/iter",
            "extra": "iterations: 84691\ncpu: 8280.943665796809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8312.313288323796,
            "unit": "ns/iter",
            "extra": "iterations: 84277\ncpu: 8311.970051140941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8176.764694182525,
            "unit": "ns/iter",
            "extra": "iterations: 85476\ncpu: 8176.578220787057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18378.474095617545,
            "unit": "ns/iter",
            "extra": "iterations: 38507\ncpu: 18377.702755343067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59063.69345462973,
            "unit": "ns/iter",
            "extra": "iterations: 11871\ncpu: 59061.38488754086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46795.78694250337,
            "unit": "ns/iter",
            "extra": "iterations: 14888\ncpu: 46794.566093498586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46750.92155809187,
            "unit": "ns/iter",
            "extra": "iterations: 14890\ncpu: 46749.617192747355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45757.03910171697,
            "unit": "ns/iter",
            "extra": "iterations: 15140\ncpu: 45755.693527080606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26956.576718138305,
            "unit": "ns/iter",
            "extra": "iterations: 25711\ncpu: 26956.298860410057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45999.33544181686,
            "unit": "ns/iter",
            "extra": "iterations: 15493\ncpu: 45997.25037113603 ns\nthreads: 1"
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
        "date": 1702491510948,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 620.3113132224869,
            "unit": "ns/iter",
            "extra": "iterations: 1123473\ncpu: 620.2773898438148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5570.132489999651,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5570.119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10916.371678519028,
            "unit": "ns/iter",
            "extra": "iterations: 76359\ncpu: 10916.1146688668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16400.63932758075,
            "unit": "ns/iter",
            "extra": "iterations: 51099\ncpu: 16399.144797354147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21597.549869343016,
            "unit": "ns/iter",
            "extra": "iterations: 38651\ncpu: 21596.86424672066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26985.372807159307,
            "unit": "ns/iter",
            "extra": "iterations: 31067\ncpu: 26983.928284031284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32306.328896751682,
            "unit": "ns/iter",
            "extra": "iterations: 25996\ncpu: 32304.80843206644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37988.39613871922,
            "unit": "ns/iter",
            "extra": "iterations: 22376\ncpu: 37986.98158741506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42414.30395951276,
            "unit": "ns/iter",
            "extra": "iterations: 20154\ncpu: 42410.31060831594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 584.6431720452335,
            "unit": "ns/iter",
            "extra": "iterations: 1197650\ncpu: 584.6079405502442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 471.8993288365187,
            "unit": "ns/iter",
            "extra": "iterations: 1484139\ncpu: 471.8759496246649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 458.70535397345463,
            "unit": "ns/iter",
            "extra": "iterations: 1526866\ncpu: 458.6991261839606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 450.8636746278556,
            "unit": "ns/iter",
            "extra": "iterations: 1531219\ncpu: 450.8541887215338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 929.3336249558214,
            "unit": "ns/iter",
            "extra": "iterations: 752114\ncpu: 929.3236131756622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2741.402913751591,
            "unit": "ns/iter",
            "extra": "iterations: 292132\ncpu: 2741.2361535196465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8440.801647149048,
            "unit": "ns/iter",
            "extra": "iterations: 96409\ncpu: 8440.458878320482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8213.853669892167,
            "unit": "ns/iter",
            "extra": "iterations: 98804\ncpu: 8213.318286709013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8751.608076951828,
            "unit": "ns/iter",
            "extra": "iterations: 93253\ncpu: 8751.024631915318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9274.839858822297,
            "unit": "ns/iter",
            "extra": "iterations: 88116\ncpu: 9274.339507013447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30303.40369393447,
            "unit": "ns/iter",
            "extra": "iterations: 27288\ncpu: 30300.78789211377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281022.4296052716,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 281001.7105263162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 215499.17389164105,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 215483.00492610817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 212605.0785275827,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 212589.25153374203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 209601.74920711867,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 209589.43644791396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108137.47228738108,
            "unit": "ns/iter",
            "extra": "iterations: 8101\ncpu: 108131.34180965323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207014.17417983702,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 207004.10667925418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5918.985219999512,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5918.57000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26243.55324161209,
            "unit": "ns/iter",
            "extra": "iterations: 31836\ncpu: 26241.814298278692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22517.9115372118,
            "unit": "ns/iter",
            "extra": "iterations: 36976\ncpu: 22516.694612721778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21656.33126310143,
            "unit": "ns/iter",
            "extra": "iterations: 38643\ncpu: 21654.542866754608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22179.489870104895,
            "unit": "ns/iter",
            "extra": "iterations: 37414\ncpu: 22177.901320361383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47085.84999149329,
            "unit": "ns/iter",
            "extra": "iterations: 17639\ncpu: 47085.169227280516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 302472.9445406944,
            "unit": "ns/iter",
            "extra": "iterations: 2885\ncpu: 302452.8249566724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 237043.79569313745,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 237033.566621805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 234062.71674743897,
            "unit": "ns/iter",
            "extra": "iterations: 3714\ncpu: 234048.00753904186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 232092.2432144659,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 232078.8451303875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122376.78161402169,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 122369.43157894662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 225346.9512131949,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 225330.8466701072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 872567.7256718749,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 872464.5968489383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 490309.68531852146,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 490272.0775623263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2679.274288480417,
            "unit": "ns/iter",
            "extra": "iterations: 299535\ncpu: 2679.1393326322395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8374.140861255173,
            "unit": "ns/iter",
            "extra": "iterations: 99204\ncpu: 8373.695617112198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8260.66861485049,
            "unit": "ns/iter",
            "extra": "iterations: 99751\ncpu: 8260.109673086014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8567.092724308623,
            "unit": "ns/iter",
            "extra": "iterations: 96307\ncpu: 8566.63586239843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8958.743464584242,
            "unit": "ns/iter",
            "extra": "iterations: 92190\ncpu: 8958.301334201133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29338.17382305368,
            "unit": "ns/iter",
            "extra": "iterations: 28506\ncpu: 29336.497579456856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 290123.10898911225,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 290098.71583799814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 216801.08208037226,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 216787.84816366716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215449.00808229813,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 215438.37864315434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213119.55399175093,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 213107.23125454894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107570.19484662754,
            "unit": "ns/iter",
            "extra": "iterations: 8150\ncpu: 107564.0981595087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 208694.46666666758,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 208672.88416075724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 229.4302069081162,
            "unit": "ns/iter",
            "extra": "iterations: 3060876\ncpu: 229.42762137375072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1494.9706570508988,
            "unit": "ns/iter",
            "extra": "iterations: 467574\ncpu: 1494.8994169906707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1174.9899819651619,
            "unit": "ns/iter",
            "extra": "iterations: 596624\ncpu: 1174.9572595135262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1221.709978002888,
            "unit": "ns/iter",
            "extra": "iterations: 570074\ncpu: 1221.6822728277466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 991.541134871332,
            "unit": "ns/iter",
            "extra": "iterations: 706177\ncpu: 991.5237964419689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9181.268033359682,
            "unit": "ns/iter",
            "extra": "iterations: 74584\ncpu: 9181.166201866345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13762.568229394195,
            "unit": "ns/iter",
            "extra": "iterations: 50638\ncpu: 13761.678976262821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3095.931285410702,
            "unit": "ns/iter",
            "extra": "iterations: 228394\ncpu: 3095.823883289381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3065.4949246549654,
            "unit": "ns/iter",
            "extra": "iterations: 226093\ncpu: 3065.3023313415297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3067.786205329324,
            "unit": "ns/iter",
            "extra": "iterations: 228813\ncpu: 3067.7513952441627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5658.505090111811,
            "unit": "ns/iter",
            "extra": "iterations: 124457\ncpu: 5658.229750034113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5803.408317199497,
            "unit": "ns/iter",
            "extra": "iterations: 119319\ncpu: 5803.294529789897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1962.7995108180953,
            "unit": "ns/iter",
            "extra": "iterations: 358149\ncpu: 1962.7079790813293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10319.999896685442,
            "unit": "ns/iter",
            "extra": "iterations: 67755\ncpu: 10319.814035864503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8205.90924782215,
            "unit": "ns/iter",
            "extra": "iterations: 85166\ncpu: 8205.893196815596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8088.340873779148,
            "unit": "ns/iter",
            "extra": "iterations: 86246\ncpu: 8087.847552350328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8038.590667631146,
            "unit": "ns/iter",
            "extra": "iterations: 87159\ncpu: 8038.28979221894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18354.821000814056,
            "unit": "ns/iter",
            "extra": "iterations: 37989\ncpu: 18354.0998710151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60654.39705498386,
            "unit": "ns/iter",
            "extra": "iterations: 11477\ncpu: 60651.999651477556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48474.84077764464,
            "unit": "ns/iter",
            "extra": "iterations: 14351\ncpu: 48472.30854992672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48679.069025320154,
            "unit": "ns/iter",
            "extra": "iterations: 14415\ncpu: 48678.17551162014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48018.661469781124,
            "unit": "ns/iter",
            "extra": "iterations: 14560\ncpu: 48015.6318681322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27595.457137250076,
            "unit": "ns/iter",
            "extra": "iterations: 25465\ncpu: 27593.7286471627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47968.83371428099,
            "unit": "ns/iter",
            "extra": "iterations: 14000\ncpu: 47967.14285714236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2024.3545182597177,
            "unit": "ns/iter",
            "extra": "iterations: 346992\ncpu: 2024.3285147784397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10281.309094377883,
            "unit": "ns/iter",
            "extra": "iterations: 68141\ncpu: 10280.568233515705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8237.55711760619,
            "unit": "ns/iter",
            "extra": "iterations: 85429\ncpu: 8237.473223378487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8394.215868443058,
            "unit": "ns/iter",
            "extra": "iterations: 83310\ncpu: 8393.855479534197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8285.586039134245,
            "unit": "ns/iter",
            "extra": "iterations: 84479\ncpu: 8285.308774961728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18508.989377885333,
            "unit": "ns/iter",
            "extra": "iterations: 38128\ncpu: 18508.720625262435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60436.72337098891,
            "unit": "ns/iter",
            "extra": "iterations: 11510\ncpu: 60432.163336229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47561.48028428776,
            "unit": "ns/iter",
            "extra": "iterations: 14633\ncpu: 47561.36130663608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47834.46986804502,
            "unit": "ns/iter",
            "extra": "iterations: 14702\ncpu: 47833.40361855586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47072.203045006405,
            "unit": "ns/iter",
            "extra": "iterations: 14844\ncpu: 47069.14578280744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27148.393099154146,
            "unit": "ns/iter",
            "extra": "iterations: 25678\ncpu: 27148.07227977266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47081.673937622676,
            "unit": "ns/iter",
            "extra": "iterations: 15037\ncpu: 47077.26275187805 ns\nthreads: 1"
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
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705574230681,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 627.1137621321236,
            "unit": "ns/iter",
            "extra": "iterations: 1116048\ncpu: 627.1101242957293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5723.301440000341,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5722.882999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11130.638983839139,
            "unit": "ns/iter",
            "extra": "iterations: 75185\ncpu: 11130.335838265608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16697.58124579509,
            "unit": "ns/iter",
            "extra": "iterations: 50538\ncpu: 16696.65598163758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21945.938936310085,
            "unit": "ns/iter",
            "extra": "iterations: 38075\ncpu: 21945.35259356532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27223.176842037836,
            "unit": "ns/iter",
            "extra": "iterations: 30564\ncpu: 27221.440256510945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32651.459070836376,
            "unit": "ns/iter",
            "extra": "iterations: 25593\ncpu: 32650.49427577855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37661.17623467675,
            "unit": "ns/iter",
            "extra": "iterations: 22192\ncpu: 37659.58904109591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43455.064157399436,
            "unit": "ns/iter",
            "extra": "iterations: 19873\ncpu: 43454.787903185286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 590.1635866895089,
            "unit": "ns/iter",
            "extra": "iterations: 1192866\ncpu: 590.1514503724651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 460.69537704603243,
            "unit": "ns/iter",
            "extra": "iterations: 1526405\ncpu: 460.69188714659634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 461.53223412271973,
            "unit": "ns/iter",
            "extra": "iterations: 1526550\ncpu: 461.5225836035506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 451.02023501293036,
            "unit": "ns/iter",
            "extra": "iterations: 1554978\ncpu: 450.99943536178614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 926.4374258384125,
            "unit": "ns/iter",
            "extra": "iterations: 750893\ncpu: 926.4177452712958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2754.767826143842,
            "unit": "ns/iter",
            "extra": "iterations: 290907\ncpu: 2754.658705359441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8875.110103723264,
            "unit": "ns/iter",
            "extra": "iterations: 93421\ncpu: 8874.630971623106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8501.665869218501,
            "unit": "ns/iter",
            "extra": "iterations: 97812\ncpu: 8501.334192123682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8752.613219744266,
            "unit": "ns/iter",
            "extra": "iterations: 95902\ncpu: 8752.364914183243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9678.275712917972,
            "unit": "ns/iter",
            "extra": "iterations: 84617\ncpu: 9677.860240849974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30080.46568086849,
            "unit": "ns/iter",
            "extra": "iterations: 27186\ncpu: 30079.38277054365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276704.9476010086,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 276689.2361111116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211610.6318283796,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 211604.71439261676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210771.92246718353,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 210759.1280653957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211178.9741315718,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 211172.62872628748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109257.71811161679,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 109247.85749875443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207579.0149750389,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 207568.95650106904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5940.123599999652,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5939.966000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26433.156250000422,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 26432.543750000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22826.083728320194,
            "unit": "ns/iter",
            "extra": "iterations: 37132\ncpu: 22824.668749326655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21570.605619760896,
            "unit": "ns/iter",
            "extra": "iterations: 39112\ncpu: 21570.36715074654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22174.453961062423,
            "unit": "ns/iter",
            "extra": "iterations: 37957\ncpu: 22173.572727033225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46800.54454824932,
            "unit": "ns/iter",
            "extra": "iterations: 17554\ncpu: 46799.64110744007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 298657.6683708355,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 298639.809134287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 234747.9628832674,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 234741.66218397094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 232984.42150537073,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 232965.83333333308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 227569.5489116314,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 227570.62680304216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122028.20375034558,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 122022.09627763832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 220421.1998987677,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 220422.49493927078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 871809.7789954022,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 871765.570776252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 485088.30358121026,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 485055.97796143155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2697.493116903742,
            "unit": "ns/iter",
            "extra": "iterations: 298049\ncpu: 2697.4356565531093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8155.459070490864,
            "unit": "ns/iter",
            "extra": "iterations: 101516\ncpu: 8155.304582528856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8271.897902718445,
            "unit": "ns/iter",
            "extra": "iterations: 101560\ncpu: 8271.743796770399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8410.889262870693,
            "unit": "ns/iter",
            "extra": "iterations: 98341\ncpu: 8410.61917206459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9006.087773058965,
            "unit": "ns/iter",
            "extra": "iterations: 91372\ncpu: 9005.60675042685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29355.844786109574,
            "unit": "ns/iter",
            "extra": "iterations: 28683\ncpu: 29355.21388976038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 289598.1173800383,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 289588.3592736704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 217627.99950991434,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 217614.40823327538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 214999.23086328412,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 214991.46490584375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213825.14743435456,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 213808.38352204286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107754.27160342755,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 107752.19094247244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204177.9498257997,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 204162.71777003474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 222.05632218930072,
            "unit": "ns/iter",
            "extra": "iterations: 3154121\ncpu: 222.051214902661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1493.4293153318963,
            "unit": "ns/iter",
            "extra": "iterations: 469147\ncpu: 1493.3607163639479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1211.8469549702131,
            "unit": "ns/iter",
            "extra": "iterations: 578418\ncpu: 1211.7994253290792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1224.1081285735465,
            "unit": "ns/iter",
            "extra": "iterations: 570506\ncpu: 1224.0798519209302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 914.8560666615007,
            "unit": "ns/iter",
            "extra": "iterations: 763138\ncpu: 914.823138148008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9148.84305435904,
            "unit": "ns/iter",
            "extra": "iterations: 76638\ncpu: 9148.622093478369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13722.950520934972,
            "unit": "ns/iter",
            "extra": "iterations: 51254\ncpu: 13721.838295547574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3128.083772603923,
            "unit": "ns/iter",
            "extra": "iterations: 223856\ncpu: 3128.0104174111816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3119.2399666177034,
            "unit": "ns/iter",
            "extra": "iterations: 226469\ncpu: 3119.0591206743616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3056.468020789034,
            "unit": "ns/iter",
            "extra": "iterations: 228586\ncpu: 3056.3932174323872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5324.72539049149,
            "unit": "ns/iter",
            "extra": "iterations: 131565\ncpu: 5324.397066088995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5736.292840022367,
            "unit": "ns/iter",
            "extra": "iterations: 121411\ncpu: 5736.157349828281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1970.4351025937985,
            "unit": "ns/iter",
            "extra": "iterations: 355723\ncpu: 1970.3943798967298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10462.541223502056,
            "unit": "ns/iter",
            "extra": "iterations: 67789\ncpu: 10462.08381890854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8293.58207740814,
            "unit": "ns/iter",
            "extra": "iterations: 84798\ncpu: 8293.393712115792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8104.55435098767,
            "unit": "ns/iter",
            "extra": "iterations: 85969\ncpu: 8103.879305330995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8052.823870274712,
            "unit": "ns/iter",
            "extra": "iterations: 86459\ncpu: 8052.626100232384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18341.856422186334,
            "unit": "ns/iter",
            "extra": "iterations: 38258\ncpu: 18340.89079408247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59636.192034627114,
            "unit": "ns/iter",
            "extra": "iterations: 11550\ncpu: 59634.38961038996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47872.32337838224,
            "unit": "ns/iter",
            "extra": "iterations: 14800\ncpu: 47870.608108107845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47641.34461349628,
            "unit": "ns/iter",
            "extra": "iterations: 14657\ncpu: 47640.137818107454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 46969.741905336356,
            "unit": "ns/iter",
            "extra": "iterations: 14979\ncpu: 46966.41965418309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27348.642009059306,
            "unit": "ns/iter",
            "extra": "iterations: 25604\ncpu: 27347.95344477406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46578.38983953895,
            "unit": "ns/iter",
            "extra": "iterations: 15019\ncpu: 46575.857247487256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1988.105815655256,
            "unit": "ns/iter",
            "extra": "iterations: 351895\ncpu: 1988.0805353870023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10246.53085532451,
            "unit": "ns/iter",
            "extra": "iterations: 68173\ncpu: 10246.233846244066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8306.749110214156,
            "unit": "ns/iter",
            "extra": "iterations: 84571\ncpu: 8306.556621063948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8306.495895821388,
            "unit": "ns/iter",
            "extra": "iterations: 84548\ncpu: 8306.021431612833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8200.449857269681,
            "unit": "ns/iter",
            "extra": "iterations: 85476\ncpu: 8200.14273012307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18362.728440464998,
            "unit": "ns/iter",
            "extra": "iterations: 38069\ncpu: 18362.575849115812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59982.20722188576,
            "unit": "ns/iter",
            "extra": "iterations: 11659\ncpu: 59976.25868427739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46858.53106279155,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 46858.26882950785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46749.04637177642,
            "unit": "ns/iter",
            "extra": "iterations: 14966\ncpu: 46748.135774422095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45943.24563944283,
            "unit": "ns/iter",
            "extra": "iterations: 15193\ncpu: 45940.577897716175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27050.92730813596,
            "unit": "ns/iter",
            "extra": "iterations: 25161\ncpu: 27049.44159612125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46057.422722288866,
            "unit": "ns/iter",
            "extra": "iterations: 15509\ncpu: 46053.42059449336 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771909533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 630.0447679211285,
            "unit": "ns/iter",
            "extra": "iterations: 1112359\ncpu: 630.0406613332566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5725.533840000025,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5725.486000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10964.249235473413,
            "unit": "ns/iter",
            "extra": "iterations: 75210\ncpu: 10963.901076984446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16564.2154883493,
            "unit": "ns/iter",
            "extra": "iterations: 50425\ncpu: 16564.053544868613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22136.14411321856,
            "unit": "ns/iter",
            "extra": "iterations: 37873\ncpu: 22135.423652734124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27507.3439436158,
            "unit": "ns/iter",
            "extra": "iterations: 30505\ncpu: 27506.638256023623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32890.60476524255,
            "unit": "ns/iter",
            "extra": "iterations: 25686\ncpu: 32889.81935684809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38166.15257302857,
            "unit": "ns/iter",
            "extra": "iterations: 22114\ncpu: 38165.076422176004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42026.54682672196,
            "unit": "ns/iter",
            "extra": "iterations: 19743\ncpu: 42026.044674061726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 594.2873974285571,
            "unit": "ns/iter",
            "extra": "iterations: 1180275\ncpu: 594.2792145898196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 459.96610808821106,
            "unit": "ns/iter",
            "extra": "iterations: 1527031\ncpu: 459.95431657903464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 456.10551302975483,
            "unit": "ns/iter",
            "extra": "iterations: 1544160\ncpu: 456.0837607501805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 443.9850348329356,
            "unit": "ns/iter",
            "extra": "iterations: 1542649\ncpu: 443.97448803972947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 939.6622225559003,
            "unit": "ns/iter",
            "extra": "iterations: 746006\ncpu: 939.6397616104972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2755.929038130772,
            "unit": "ns/iter",
            "extra": "iterations: 290029\ncpu: 2755.8913074209822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8654.137509462349,
            "unit": "ns/iter",
            "extra": "iterations: 96437\ncpu: 8653.807148708476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8622.564822530223,
            "unit": "ns/iter",
            "extra": "iterations: 94805\ncpu: 8622.200305891036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8491.424773389168,
            "unit": "ns/iter",
            "extra": "iterations: 97193\ncpu: 8491.08372002098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9419.77059855948,
            "unit": "ns/iter",
            "extra": "iterations: 86608\ncpu: 9419.82264917791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30304.82067981395,
            "unit": "ns/iter",
            "extra": "iterations: 27331\ncpu: 30303.508836120105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282325.13894261065,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 282317.60154738923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 222154.88088571615,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 222146.0677017058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216436.3156162978,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 216431.9412806879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214166.4754016101,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 214155.19578313213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108543.9609871576,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 108542.87672940326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 211307.1494920183,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 211297.8713110795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5911.650463558995,
            "unit": "ns/iter",
            "extra": "iterations: 139788\ncpu: 5911.5417632414765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26456.142427976865,
            "unit": "ns/iter",
            "extra": "iterations: 31623\ncpu: 26455.421686746937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22578.93842258184,
            "unit": "ns/iter",
            "extra": "iterations: 37124\ncpu: 22578.64454261401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21908.098652828947,
            "unit": "ns/iter",
            "extra": "iterations: 38154\ncpu: 21907.249567542116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22185.655436531735,
            "unit": "ns/iter",
            "extra": "iterations: 37340\ncpu: 22185.356186395333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46854.319646278665,
            "unit": "ns/iter",
            "extra": "iterations: 17754\ncpu: 46852.664188352195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 303110.50994513184,
            "unit": "ns/iter",
            "extra": "iterations: 2916\ncpu: 303101.7489711925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231590.18063315935,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 231591.40728917203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230218.79432812883,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 230213.3050622838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228862.66824644106,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 228856.9773565033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 122842.76189107087,
            "unit": "ns/iter",
            "extra": "iterations: 6959\ncpu: 122838.74119844893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219234.84534004307,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 219225.9193954665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 878584.9686346393,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 878546.3099630985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477343.5639503263,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 477334.70048569643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2644.3560154587535,
            "unit": "ns/iter",
            "extra": "iterations: 301706\ncpu: 2644.267929706411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8322.110446275985,
            "unit": "ns/iter",
            "extra": "iterations: 102448\ncpu: 8322.02873652972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8389.487757935227,
            "unit": "ns/iter",
            "extra": "iterations: 98717\ncpu: 8389.11332394623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8299.299486531676,
            "unit": "ns/iter",
            "extra": "iterations: 99714\ncpu: 8299.173636600615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9038.604036050165,
            "unit": "ns/iter",
            "extra": "iterations: 91872\ncpu: 9038.454588993322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29069.1247966767,
            "unit": "ns/iter",
            "extra": "iterations: 28895\ncpu: 29068.65893753244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 289548.75724047824,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 289536.7068011711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 217088.68422361175,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 217083.47826087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215907.16814814555,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 215900.54320987756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213227.11078573376,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 213225.57345046324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107687.61857949848,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 107684.0992872939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206107.54395475032,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 206105.67994343655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 223.03038914567549,
            "unit": "ns/iter",
            "extra": "iterations: 3127235\ncpu: 223.02129516969472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1489.6720010204442,
            "unit": "ns/iter",
            "extra": "iterations: 470410\ncpu: 1489.651793116645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1173.4147008993586,
            "unit": "ns/iter",
            "extra": "iterations: 598494\ncpu: 1173.3825234672397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1252.7354696614273,
            "unit": "ns/iter",
            "extra": "iterations: 560276\ncpu: 1252.6965281396972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 989.570149401093,
            "unit": "ns/iter",
            "extra": "iterations: 709165\ncpu: 989.5822551874403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9092.118101959917,
            "unit": "ns/iter",
            "extra": "iterations: 77069\ncpu: 9091.680182693412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13896.105954909113,
            "unit": "ns/iter",
            "extra": "iterations: 53183\ncpu: 13895.914107891624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3105.328142914264,
            "unit": "ns/iter",
            "extra": "iterations: 225030\ncpu: 3105.2170821668387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3095.44684675935,
            "unit": "ns/iter",
            "extra": "iterations: 226402\ncpu: 3095.397125467086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3033.8563008603683,
            "unit": "ns/iter",
            "extra": "iterations: 228199\ncpu: 3033.8450212314683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5703.945866350606,
            "unit": "ns/iter",
            "extra": "iterations: 127333\ncpu: 5703.863884460429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5804.517861518324,
            "unit": "ns/iter",
            "extra": "iterations: 122442\ncpu: 5804.247725453718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1947.9096774372385,
            "unit": "ns/iter",
            "extra": "iterations: 358969\ncpu: 1947.879064766059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10416.048621694847,
            "unit": "ns/iter",
            "extra": "iterations: 67583\ncpu: 10416.049894204207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8187.201447512482,
            "unit": "ns/iter",
            "extra": "iterations: 85526\ncpu: 8187.14776793025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8137.60757205278,
            "unit": "ns/iter",
            "extra": "iterations: 86291\ncpu: 8137.412939935784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8047.787333628869,
            "unit": "ns/iter",
            "extra": "iterations: 86102\ncpu: 8047.486701818771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18215.544789571122,
            "unit": "ns/iter",
            "extra": "iterations: 38279\ncpu: 18215.27208129783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59832.31076314895,
            "unit": "ns/iter",
            "extra": "iterations: 11623\ncpu: 59831.36883764937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 47576.36225566739,
            "unit": "ns/iter",
            "extra": "iterations: 14683\ncpu: 47575.604440509385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 47836.564995582565,
            "unit": "ns/iter",
            "extra": "iterations: 14701\ncpu: 47834.32419563283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47863.529186534215,
            "unit": "ns/iter",
            "extra": "iterations: 14887\ncpu: 47864.116343118694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27482.195042426934,
            "unit": "ns/iter",
            "extra": "iterations: 25456\ncpu: 27481.70568824618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 46351.476993863944,
            "unit": "ns/iter",
            "extra": "iterations: 14996\ncpu: 46350.90690850877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2008.0087596955336,
            "unit": "ns/iter",
            "extra": "iterations: 349898\ncpu: 2007.9900428124747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10216.089558562842,
            "unit": "ns/iter",
            "extra": "iterations: 68458\ncpu: 10215.922171258335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8256.722326895419,
            "unit": "ns/iter",
            "extra": "iterations: 84920\ncpu: 8256.442534149752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8280.456980662477,
            "unit": "ns/iter",
            "extra": "iterations: 84555\ncpu: 8280.333510732708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8060.82562395696,
            "unit": "ns/iter",
            "extra": "iterations: 87426\ncpu: 8060.614691281718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18403.734976686454,
            "unit": "ns/iter",
            "extra": "iterations: 38174\ncpu: 18403.751244302362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58512.370295531786,
            "unit": "ns/iter",
            "extra": "iterations: 11877\ncpu: 58513.092531784874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46632.42389776889,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 46632.64200173907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 46832.75499733446,
            "unit": "ns/iter",
            "extra": "iterations: 15008\ncpu: 46831.01679104482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46141.033514431525,
            "unit": "ns/iter",
            "extra": "iterations: 15277\ncpu: 46140.29586960796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27106.396541027043,
            "unit": "ns/iter",
            "extra": "iterations: 25788\ncpu: 27105.421126104848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45779.53679709888,
            "unit": "ns/iter",
            "extra": "iterations: 15436\ncpu: 45778.82871210173 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772628190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 622.0290163932294,
            "unit": "ns/iter",
            "extra": "iterations: 1119126\ncpu: 622.0108370281811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5679.188899999873,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5678.705999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11076.160706935725,
            "unit": "ns/iter",
            "extra": "iterations: 75311\ncpu: 11075.375443162353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16782.531901053222,
            "unit": "ns/iter",
            "extra": "iterations: 50735\ncpu: 16781.08603528136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21845.756419929676,
            "unit": "ns/iter",
            "extra": "iterations: 38435\ncpu: 21843.991153896193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27351.9005593952,
            "unit": "ns/iter",
            "extra": "iterations: 30390\ncpu: 27350.246791707796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32813.976553939225,
            "unit": "ns/iter",
            "extra": "iterations: 25548\ncpu: 32811.460779708774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38181.05616594658,
            "unit": "ns/iter",
            "extra": "iterations: 21935\ncpu: 38179.02439024391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43246.9018639217,
            "unit": "ns/iter",
            "extra": "iterations: 19636\ncpu: 43241.70910572416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 586.9376840569398,
            "unit": "ns/iter",
            "extra": "iterations: 1175927\ncpu: 586.9335426433788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 457.9237032061531,
            "unit": "ns/iter",
            "extra": "iterations: 1533590\ncpu: 457.8709433420934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 447.6229665059777,
            "unit": "ns/iter",
            "extra": "iterations: 1563442\ncpu: 447.5915959786168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 443.54972231919965,
            "unit": "ns/iter",
            "extra": "iterations: 1575550\ncpu: 443.50487131477894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 929.9868105707395,
            "unit": "ns/iter",
            "extra": "iterations: 749388\ncpu: 929.9177462142443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2748.4835423651357,
            "unit": "ns/iter",
            "extra": "iterations: 292539\ncpu: 2748.191181346758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8085.191233569848,
            "unit": "ns/iter",
            "extra": "iterations: 98900\ncpu: 8084.739130434799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8355.46037022321,
            "unit": "ns/iter",
            "extra": "iterations: 98373\ncpu: 8354.72843158184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8593.98789618466,
            "unit": "ns/iter",
            "extra": "iterations: 93359\ncpu: 8593.797062950545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9430.767153689601,
            "unit": "ns/iter",
            "extra": "iterations: 86512\ncpu: 9430.027048270775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30614.98156524568,
            "unit": "ns/iter",
            "extra": "iterations: 26309\ncpu: 30614.329697061872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 277323.3743874538,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 277304.27964717365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210725.94093688123,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 210711.1761710793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217726.91184641546,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 217707.62818893697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 211131.79457559533,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 211111.47664490255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108505.34745657723,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 108499.53196206407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 212188.19587379452,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 212176.33495145573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5767.171290000307,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5767.016999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26213.313675293804,
            "unit": "ns/iter",
            "extra": "iterations: 31641\ncpu: 26212.088745614896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22385.320370420504,
            "unit": "ns/iter",
            "extra": "iterations: 37363\ncpu: 22384.70144260359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21388.14798828248,
            "unit": "ns/iter",
            "extra": "iterations: 38922\ncpu: 21387.968244180716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22039.270391475402,
            "unit": "ns/iter",
            "extra": "iterations: 37908\ncpu: 22038.64883401922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47023.216978415294,
            "unit": "ns/iter",
            "extra": "iterations: 17375\ncpu: 47019.4129496405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 305605.50243391184,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 305584.42280945694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 233291.5334228047,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 233271.65100671176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 233651.20461870305,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 233627.25563909684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 229816.53003442587,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 229796.90394284253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 125209.06834428456,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 125201.01515584762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 222348.87964150074,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 222329.0396927014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 879536.8680296813,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 879452.7881040869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 483096.02142859437,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 483083.68131868076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2670.6843149656224,
            "unit": "ns/iter",
            "extra": "iterations: 298839\ncpu: 2670.6624637346436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 7867.212393030717,
            "unit": "ns/iter",
            "extra": "iterations: 104236\ncpu: 7866.973022756047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8308.063520634689,
            "unit": "ns/iter",
            "extra": "iterations: 99999\ncpu: 8307.392073920728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8351.415531774706,
            "unit": "ns/iter",
            "extra": "iterations: 99422\ncpu: 8350.717145098648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 9010.295879742618,
            "unit": "ns/iter",
            "extra": "iterations: 92203\ncpu: 9009.813129724655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29311.48882160695,
            "unit": "ns/iter",
            "extra": "iterations: 28403\ncpu: 29309.301834313163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 290944.55229295674,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 290919.1355988126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218142.6129353458,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 218130.945273631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 217421.20483714025,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 217419.1757156964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213172.0606581521,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 213164.98035363478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 107183.38304058804,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 107180.20593579624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206587.14950400766,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 206578.12942843535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 217.25468848290657,
            "unit": "ns/iter",
            "extra": "iterations: 3212713\ncpu: 217.2452067769516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1494.2721550152194,
            "unit": "ns/iter",
            "extra": "iterations: 469115\ncpu: 1494.2080300139583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1223.6306433803384,
            "unit": "ns/iter",
            "extra": "iterations: 572352\ncpu: 1223.6031323381408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1146.5825928781178,
            "unit": "ns/iter",
            "extra": "iterations: 610773\ncpu: 1146.5208841910237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 977.2709754781982,
            "unit": "ns/iter",
            "extra": "iterations: 715526\ncpu: 977.2630204912149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9097.75308322793,
            "unit": "ns/iter",
            "extra": "iterations: 77354\ncpu: 9097.556687436974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13789.79320822311,
            "unit": "ns/iter",
            "extra": "iterations: 50355\ncpu: 13789.333730513436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3093.4920875257058,
            "unit": "ns/iter",
            "extra": "iterations: 225214\ncpu: 3093.387622439088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3085.4905013145685,
            "unit": "ns/iter",
            "extra": "iterations: 225926\ncpu: 3085.432398218885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3053.5007089802016,
            "unit": "ns/iter",
            "extra": "iterations: 230613\ncpu: 3053.4354091053083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5388.85224323604,
            "unit": "ns/iter",
            "extra": "iterations: 128698\ncpu: 5388.504094857733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5734.858424234967,
            "unit": "ns/iter",
            "extra": "iterations: 121744\ncpu: 5734.680969904069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1958.1976703745675,
            "unit": "ns/iter",
            "extra": "iterations: 356538\ncpu: 1958.0874969848962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10383.138752866003,
            "unit": "ns/iter",
            "extra": "iterations: 67595\ncpu: 10383.05791848501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8103.680368844677,
            "unit": "ns/iter",
            "extra": "iterations: 86215\ncpu: 8103.411239343535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8090.0383022888045,
            "unit": "ns/iter",
            "extra": "iterations: 86705\ncpu: 8089.728389366297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7982.455803455758,
            "unit": "ns/iter",
            "extra": "iterations: 88163\ncpu: 7982.169390787544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18506.55447613293,
            "unit": "ns/iter",
            "extra": "iterations: 38292\ncpu: 18505.55990807481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60738.001210756265,
            "unit": "ns/iter",
            "extra": "iterations: 11563\ncpu: 60737.53351206524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48642.06939600515,
            "unit": "ns/iter",
            "extra": "iterations: 14338\ncpu: 48639.189566187095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48085.422944970334,
            "unit": "ns/iter",
            "extra": "iterations: 14574\ncpu: 48084.25277892141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 47802.55465889715,
            "unit": "ns/iter",
            "extra": "iterations: 14746\ncpu: 47800.691713007065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27802.29574451493,
            "unit": "ns/iter",
            "extra": "iterations: 25238\ncpu: 27801.37491084842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47240.786558588494,
            "unit": "ns/iter",
            "extra": "iterations: 14805\ncpu: 47239.257007767694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2006.226648599623,
            "unit": "ns/iter",
            "extra": "iterations: 349069\ncpu: 2006.1592407231822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10280.810825475808,
            "unit": "ns/iter",
            "extra": "iterations: 68191\ncpu: 10280.586880966655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8239.102155784933,
            "unit": "ns/iter",
            "extra": "iterations: 85027\ncpu: 8239.037011772858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8335.041332730341,
            "unit": "ns/iter",
            "extra": "iterations: 84098\ncpu: 8334.349211633966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8159.621997117923,
            "unit": "ns/iter",
            "extra": "iterations: 86084\ncpu: 8159.20380093867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18200.008304046525,
            "unit": "ns/iter",
            "extra": "iterations: 38415\ncpu: 18198.974358974094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59540.31691283344,
            "unit": "ns/iter",
            "extra": "iterations: 11713\ncpu: 59538.077349952495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 47159.22766491607,
            "unit": "ns/iter",
            "extra": "iterations: 14719\ncpu: 47157.49031863582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47257.5400713297,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 47256.03256846777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46328.92568064868,
            "unit": "ns/iter",
            "extra": "iterations: 14949\ncpu: 46326.69074854523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27508.159047358735,
            "unit": "ns/iter",
            "extra": "iterations: 25571\ncpu: 27507.958233936923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46692.643266758685,
            "unit": "ns/iter",
            "extra": "iterations: 15171\ncpu: 46691.127809636906 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}