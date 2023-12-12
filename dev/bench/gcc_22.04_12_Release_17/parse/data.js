window.BENCHMARK_DATA = {
  "lastUpdate": 1702412864551,
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
      }
    ]
  }
}