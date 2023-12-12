window.BENCHMARK_DATA = {
  "lastUpdate": 1702399131057,
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
      }
    ]
  }
}