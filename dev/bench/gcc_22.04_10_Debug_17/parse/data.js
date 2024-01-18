window.BENCHMARK_DATA = {
  "lastUpdate": 1705573921899,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-10 22.04 Debug c++-17": [
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
        "date": 1702397914129,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6904.4257210785,
            "unit": "ns/iter",
            "extra": "iterations: 101792\ncpu: 6904.310751336059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51221.59410000222,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51219.18000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94469.40371435123,
            "unit": "ns/iter",
            "extra": "iterations: 9046\ncpu: 94464.26044660625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137574.41577518423,
            "unit": "ns/iter",
            "extra": "iterations: 6263\ncpu: 137571.30768002552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183976.742143602,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 183972.84079084292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224966.19501967146,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 224960.8125819134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 268022.9060465077,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 268017.3333333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311827.07449858316,
            "unit": "ns/iter",
            "extra": "iterations: 2792\ncpu: 311819.3767908308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354042.00895767135,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 354039.2508143322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5730.419618038399,
            "unit": "ns/iter",
            "extra": "iterations: 122316\ncpu: 5730.3795088132365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4697.687501679589,
            "unit": "ns/iter",
            "extra": "iterations: 148852\ncpu: 4697.681589767026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4696.414834410409,
            "unit": "ns/iter",
            "extra": "iterations: 149315\ncpu: 4696.074741318691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4714.342751593108,
            "unit": "ns/iter",
            "extra": "iterations: 147798\ncpu: 4714.311425053111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7330.20099673013,
            "unit": "ns/iter",
            "extra": "iterations: 95111\ncpu: 7330.023866850311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26301.072938144123,
            "unit": "ns/iter",
            "extra": "iterations: 31040\ncpu: 26300.267396907202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 124550.65481718056,
            "unit": "ns/iter",
            "extra": "iterations: 6892\ncpu: 124545.76320371457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99380.65337672923,
            "unit": "ns/iter",
            "extra": "iterations: 8603\ncpu: 99380.98337789167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99385.47370262424,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 99378.41399416907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98123.62919925846,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 98120.29452369963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 211532.424745199,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 211517.9426404357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1672278.5691202865,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1672202.872531418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1329152.7187948662,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1329080.3443328566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1318234.0070821003,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1318141.5014164331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1309201.3417721577,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1309150.7735583726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 716215.1612654538,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 716190.1234567907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1274552.8123287242,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1274489.0410958903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34298.43934201416,
            "unit": "ns/iter",
            "extra": "iterations: 24803\ncpu: 34296.67378946105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156715.83172111248,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 156707.61087789744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124677.12028985485,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 124673.18840579696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123244.6474129309,
            "unit": "ns/iter",
            "extra": "iterations: 6977\ncpu: 123238.36892647276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120397.18157636627,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 120391.3481730366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224829.31322505386,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 224812.81258056275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1689081.9999999406,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1689009.1074681166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1350110.698250755,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1350032.2157434411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1352675.235807841,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1352584.425036392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1350103.3768115898,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1350016.5217391276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 744442.7415730238,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 744403.852327448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1303525.0350631198,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1303413.604488073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6143533.243420949,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6142982.894736851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2805731.6486486304,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2805712.312312305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25404.1410874902,
            "unit": "ns/iter",
            "extra": "iterations: 32129\ncpu: 25402.536649133046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122180.86403633609,
            "unit": "ns/iter",
            "extra": "iterations: 7046\ncpu: 122177.88816349623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96546.83704703872,
            "unit": "ns/iter",
            "extra": "iterations: 8886\ncpu: 96541.71730812536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96547.6218006299,
            "unit": "ns/iter",
            "extra": "iterations: 8908\ncpu: 96547.97934440886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93899.58055676878,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 93892.31696624281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 194702.19655633977,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 194691.07781753078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1670433.0734766969,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1670350.3584229467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1324658.2784090773,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1324650.9943181814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1322529.9843971948,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1322490.780141842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1313611.170422586,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1313580.1408450706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 713416.4805491596,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 713392.1434019841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1276924.8303693722,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1276911.2175102618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2623.7203203811896,
            "unit": "ns/iter",
            "extra": "iterations: 266058\ncpu: 2623.61590329928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17432.894053758413,
            "unit": "ns/iter",
            "extra": "iterations: 40143\ncpu: 17432.526218767805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14277.329423524016,
            "unit": "ns/iter",
            "extra": "iterations: 49022\ncpu: 14276.586022602145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13559.046527844937,
            "unit": "ns/iter",
            "extra": "iterations: 51625\ncpu: 13559.101210653704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10168.461078104907,
            "unit": "ns/iter",
            "extra": "iterations: 69010\ncpu: 10168.49297203303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66823.63850706129,
            "unit": "ns/iter",
            "extra": "iterations: 10476\ncpu: 66821.62084765157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115478.5491071423,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 115477.59589947078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28023.21551586003,
            "unit": "ns/iter",
            "extra": "iterations: 24968\ncpu: 28022.21643703943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28068.136199568075,
            "unit": "ns/iter",
            "extra": "iterations: 24934\ncpu: 28067.494184647432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28018.425278153944,
            "unit": "ns/iter",
            "extra": "iterations: 24986\ncpu: 28017.217641879513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56190.19955030583,
            "unit": "ns/iter",
            "extra": "iterations: 12453\ncpu: 56189.30378222102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52772.83025691385,
            "unit": "ns/iter",
            "extra": "iterations: 13273\ncpu: 52772.28207639555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20915.391362780967,
            "unit": "ns/iter",
            "extra": "iterations: 33483\ncpu: 20915.4556043365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100726.35556194487,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 100726.60247197343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83451.81800880168,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83449.39931010008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84614.85709063853,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 84613.04824561413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83379.3268129741,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 83376.61020992302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127107.3031567472,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 127107.9825834527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 500166.8954903206,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 500169.3629205467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 413772.52871522855,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 413771.0479573768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 412420.0961085156,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412399.52830188797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 412159.8826651024,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412156.83962264704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 260980.29556468184,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 260973.64890048365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 404572.82676707895,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 404561.4136732331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21524.416725616567,
            "unit": "ns/iter",
            "extra": "iterations: 32513\ncpu: 21523.799710884854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104396.38752418925,
            "unit": "ns/iter",
            "extra": "iterations: 6717\ncpu: 104397.05225547287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86741.55927164595,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86742.17762913398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86894.68417132177,
            "unit": "ns/iter",
            "extra": "iterations: 8055\ncpu: 86892.02979515838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86999.58824260556,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86999.04300273431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128398.48653136304,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 128395.22140221363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 502712.00718908675,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 502707.8360891353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416636.8189398383,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 416624.47885646054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 415216.3967876486,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 415209.2801903648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 422472.34369396203,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 422460.2510460281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264694.5413018666,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 264695.355919298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 408961.9416909682,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 408949.6793002897 ns\nthreads: 1"
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
        "date": 1702397914129,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6904.4257210785,
            "unit": "ns/iter",
            "extra": "iterations: 101792\ncpu: 6904.310751336059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51221.59410000222,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51219.18000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94469.40371435123,
            "unit": "ns/iter",
            "extra": "iterations: 9046\ncpu: 94464.26044660625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137574.41577518423,
            "unit": "ns/iter",
            "extra": "iterations: 6263\ncpu: 137571.30768002552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183976.742143602,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 183972.84079084292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224966.19501967146,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 224960.8125819134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 268022.9060465077,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 268017.3333333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311827.07449858316,
            "unit": "ns/iter",
            "extra": "iterations: 2792\ncpu: 311819.3767908308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354042.00895767135,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 354039.2508143322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5730.419618038399,
            "unit": "ns/iter",
            "extra": "iterations: 122316\ncpu: 5730.3795088132365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4697.687501679589,
            "unit": "ns/iter",
            "extra": "iterations: 148852\ncpu: 4697.681589767026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4696.414834410409,
            "unit": "ns/iter",
            "extra": "iterations: 149315\ncpu: 4696.074741318691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4714.342751593108,
            "unit": "ns/iter",
            "extra": "iterations: 147798\ncpu: 4714.311425053111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7330.20099673013,
            "unit": "ns/iter",
            "extra": "iterations: 95111\ncpu: 7330.023866850311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26301.072938144123,
            "unit": "ns/iter",
            "extra": "iterations: 31040\ncpu: 26300.267396907202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 124550.65481718056,
            "unit": "ns/iter",
            "extra": "iterations: 6892\ncpu: 124545.76320371457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99380.65337672923,
            "unit": "ns/iter",
            "extra": "iterations: 8603\ncpu: 99380.98337789167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99385.47370262424,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 99378.41399416907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98123.62919925846,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 98120.29452369963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 211532.424745199,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 211517.9426404357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1672278.5691202865,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1672202.872531418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1329152.7187948662,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1329080.3443328566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1318234.0070821003,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1318141.5014164331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1309201.3417721577,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1309150.7735583726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 716215.1612654538,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 716190.1234567907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1274552.8123287242,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1274489.0410958903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34298.43934201416,
            "unit": "ns/iter",
            "extra": "iterations: 24803\ncpu: 34296.67378946105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156715.83172111248,
            "unit": "ns/iter",
            "extra": "iterations: 5479\ncpu: 156707.61087789744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 124677.12028985485,
            "unit": "ns/iter",
            "extra": "iterations: 6900\ncpu: 124673.18840579696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123244.6474129309,
            "unit": "ns/iter",
            "extra": "iterations: 6977\ncpu: 123238.36892647276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120397.18157636627,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 120391.3481730366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 224829.31322505386,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 224812.81258056275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1689081.9999999406,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1689009.1074681166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1350110.698250755,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1350032.2157434411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1352675.235807841,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1352584.425036392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1350103.3768115898,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1350016.5217391276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 744442.7415730238,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 744403.852327448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1303525.0350631198,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1303413.604488073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6143533.243420949,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6142982.894736851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2805731.6486486304,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2805712.312312305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25404.1410874902,
            "unit": "ns/iter",
            "extra": "iterations: 32129\ncpu: 25402.536649133046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122180.86403633609,
            "unit": "ns/iter",
            "extra": "iterations: 7046\ncpu: 122177.88816349623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96546.83704703872,
            "unit": "ns/iter",
            "extra": "iterations: 8886\ncpu: 96541.71730812536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96547.6218006299,
            "unit": "ns/iter",
            "extra": "iterations: 8908\ncpu: 96547.97934440886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93899.58055676878,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 93892.31696624281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 194702.19655633977,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 194691.07781753078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1670433.0734766969,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1670350.3584229467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1324658.2784090773,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1324650.9943181814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1322529.9843971948,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1322490.780141842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1313611.170422586,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1313580.1408450706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 713416.4805491596,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 713392.1434019841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1276924.8303693722,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1276911.2175102618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2623.7203203811896,
            "unit": "ns/iter",
            "extra": "iterations: 266058\ncpu: 2623.61590329928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17432.894053758413,
            "unit": "ns/iter",
            "extra": "iterations: 40143\ncpu: 17432.526218767805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14277.329423524016,
            "unit": "ns/iter",
            "extra": "iterations: 49022\ncpu: 14276.586022602145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13559.046527844937,
            "unit": "ns/iter",
            "extra": "iterations: 51625\ncpu: 13559.101210653704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10168.461078104907,
            "unit": "ns/iter",
            "extra": "iterations: 69010\ncpu: 10168.49297203303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66823.63850706129,
            "unit": "ns/iter",
            "extra": "iterations: 10476\ncpu: 66821.62084765157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115478.5491071423,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 115477.59589947078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28023.21551586003,
            "unit": "ns/iter",
            "extra": "iterations: 24968\ncpu: 28022.21643703943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28068.136199568075,
            "unit": "ns/iter",
            "extra": "iterations: 24934\ncpu: 28067.494184647432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28018.425278153944,
            "unit": "ns/iter",
            "extra": "iterations: 24986\ncpu: 28017.217641879513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56190.19955030583,
            "unit": "ns/iter",
            "extra": "iterations: 12453\ncpu: 56189.30378222102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52772.83025691385,
            "unit": "ns/iter",
            "extra": "iterations: 13273\ncpu: 52772.28207639555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20915.391362780967,
            "unit": "ns/iter",
            "extra": "iterations: 33483\ncpu: 20915.4556043365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100726.35556194487,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 100726.60247197343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83451.81800880168,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83449.39931010008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84614.85709063853,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 84613.04824561413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83379.3268129741,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 83376.61020992302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127107.3031567472,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 127107.9825834527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 500166.8954903206,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 500169.3629205467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 413772.52871522855,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 413771.0479573768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 412420.0961085156,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412399.52830188797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 412159.8826651024,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412156.83962264704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 260980.29556468184,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 260973.64890048365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 404572.82676707895,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 404561.4136732331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21524.416725616567,
            "unit": "ns/iter",
            "extra": "iterations: 32513\ncpu: 21523.799710884854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104396.38752418925,
            "unit": "ns/iter",
            "extra": "iterations: 6717\ncpu: 104397.05225547287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86741.55927164595,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86742.17762913398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86894.68417132177,
            "unit": "ns/iter",
            "extra": "iterations: 8055\ncpu: 86892.02979515838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86999.58824260556,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86999.04300273431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 128398.48653136304,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 128395.22140221363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 502712.00718908675,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 502707.8360891353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416636.8189398383,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 416624.47885646054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 415216.3967876486,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 415209.2801903648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 422472.34369396203,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 422460.2510460281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264694.5413018666,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 264695.355919298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 408961.9416909682,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 408949.6793002897 ns\nthreads: 1"
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
        "date": 1702409103301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6673.22536579801,
            "unit": "ns/iter",
            "extra": "iterations: 104976\ncpu: 6673.031931108063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57223.793611794914,
            "unit": "ns/iter",
            "extra": "iterations: 14245\ncpu: 57221.25658125658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90149.39658803515,
            "unit": "ns/iter",
            "extra": "iterations: 9496\ncpu: 90145.36647009269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130308.25144333411,
            "unit": "ns/iter",
            "extra": "iterations: 6582\ncpu: 130303.6615010635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 172654.43884462028,
            "unit": "ns/iter",
            "extra": "iterations: 5020\ncpu: 172650.87649402392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 218177.7844104462,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 218166.40355204724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 254066.65512092115,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 254056.04658106895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 296172.190217405,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 296154.89130434813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 336717.47197526426,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 336705.2957093155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5729.051174997672,
            "unit": "ns/iter",
            "extra": "iterations: 123830\ncpu: 5728.506823871433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4570.698243453639,
            "unit": "ns/iter",
            "extra": "iterations: 152686\ncpu: 4570.1871815359655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4684.4046205722025,
            "unit": "ns/iter",
            "extra": "iterations: 149765\ncpu: 4683.871398524356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4568.113078729987,
            "unit": "ns/iter",
            "extra": "iterations: 150718\ncpu: 4567.980599530258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7147.5456104215245,
            "unit": "ns/iter",
            "extra": "iterations: 98563\ncpu: 7147.204326167022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25766.91037450064,
            "unit": "ns/iter",
            "extra": "iterations: 31375\ncpu: 25765.262151394385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 119957.72140763013,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 119954.3499511243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95413.09753375612,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 95406.81843544263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94893.45273965281,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 94889.44314250616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90907.10321959431,
            "unit": "ns/iter",
            "extra": "iterations: 9349\ncpu: 90900.0213926621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 197239.32599118337,
            "unit": "ns/iter",
            "extra": "iterations: 4540\ncpu: 197233.17180616784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1612552.5965216896,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1612447.304347826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1277668.6510989068,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1277637.087912088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1277780.5845942777,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1277691.8844566734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1275401.9931413333,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1275385.0480109756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 703369.4265041956,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 703185.8339680105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1237115.9440746037,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1237082.4234354214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32538.22422945793,
            "unit": "ns/iter",
            "extra": "iterations: 25242\ncpu: 32536.59773393556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155727.74305806693,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 155715.65091958182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120970.7641669007,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 120963.41979137287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119725.23502432053,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 119714.19041000716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116264.82650570394,
            "unit": "ns/iter",
            "extra": "iterations: 7372\ncpu: 116251.6549104723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 209164.19031557543,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 209150.30113225745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1645510.4179894156,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1645373.89770723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1302781.4671328417,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1302662.2377622304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1302692.3571428482,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1302622.4089635757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1290749.3894298377,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1290659.6662030676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 729973.529921268,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 729931.4173228355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1260040.8627718235,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1259863.3152173872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6038746.961290129,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6038232.258064529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2764182.703263922,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2763939.4658753662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24670.860131861387,
            "unit": "ns/iter",
            "extra": "iterations: 33217\ncpu: 24668.796098383296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 117686.10176446137,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 117673.0543017371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93524.8292762828,
            "unit": "ns/iter",
            "extra": "iterations: 9161\ncpu: 93517.76006986148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 91784.267359627,
            "unit": "ns/iter",
            "extra": "iterations: 9332\ncpu: 91778.58979854269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 88683.1292064725,
            "unit": "ns/iter",
            "extra": "iterations: 9628\ncpu: 88677.31616119623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 178600.04150319757,
            "unit": "ns/iter",
            "extra": "iterations: 4843\ncpu: 178582.82056576404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1611712.3195165328,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1611595.8549222732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1271124.9986357444,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1271038.4720327377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1272744.073669838,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1272663.7107776245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1257977.7233467838,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1257878.002699059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 694759.3358153625,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 694716.82799702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1230927.5897096829,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1230850.3957783703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2700.662918402885,
            "unit": "ns/iter",
            "extra": "iterations: 259409\ncpu: 2700.4479412819264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17964.47806077588,
            "unit": "ns/iter",
            "extra": "iterations: 41068\ncpu: 17962.703321320714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13184.508894858085,
            "unit": "ns/iter",
            "extra": "iterations: 53233\ncpu: 13183.549677831505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14330.932478720502,
            "unit": "ns/iter",
            "extra": "iterations: 48755\ncpu: 14329.86360373298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10335.668853764835,
            "unit": "ns/iter",
            "extra": "iterations: 67822\ncpu: 10334.656895992526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63514.554960032365,
            "unit": "ns/iter",
            "extra": "iterations: 11008\ncpu: 63513.54469476751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110718.28916614791,
            "unit": "ns/iter",
            "extra": "iterations: 6332\ncpu: 110711.43398610219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27290.22758485239,
            "unit": "ns/iter",
            "extra": "iterations: 25485\ncpu: 27288.52658426526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27215.748713949422,
            "unit": "ns/iter",
            "extra": "iterations: 25660\ncpu: 27214.3725643026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26941.484250755137,
            "unit": "ns/iter",
            "extra": "iterations: 25906\ncpu: 26939.60086466432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54984.027862802846,
            "unit": "ns/iter",
            "extra": "iterations: 12741\ncpu: 54978.18067655595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51772.32321889602,
            "unit": "ns/iter",
            "extra": "iterations: 13545\ncpu: 51768.02510151324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21179.22125577317,
            "unit": "ns/iter",
            "extra": "iterations: 33111\ncpu: 21176.898915768124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101405.79060015082,
            "unit": "ns/iter",
            "extra": "iterations: 6915\ncpu: 101405.75560375811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82320.74809885061,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 82314.57937262286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83029.53102060533,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 83020.36466966575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82672.01891029745,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 82663.2667533384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123479.58963511542,
            "unit": "ns/iter",
            "extra": "iterations: 5673\ncpu: 123473.1887890012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 471534.40161724755,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471526.88679245044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 390779.8759083196,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 390762.0458356595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 388674.16565097007,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 388674.6814404372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 385702.40397348994,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 385687.08609271405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251973.82984102223,
            "unit": "ns/iter",
            "extra": "iterations: 2768\ncpu: 251970.15895953262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 384094.03620406415,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 384088.2611080584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21430.615885096202,
            "unit": "ns/iter",
            "extra": "iterations: 32584\ncpu: 21430.62852933982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 102799.68594069737,
            "unit": "ns/iter",
            "extra": "iterations: 6814\ncpu: 102792.08981508542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84957.63667233223,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 84950.03638127529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85337.02587575295,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 85326.20529720437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84434.82233196063,
            "unit": "ns/iter",
            "extra": "iterations: 8302\ncpu: 84433.32931823599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122305.46423587514,
            "unit": "ns/iter",
            "extra": "iterations: 5732\ncpu: 122305.28611305045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 477108.3233491569,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 477071.68141592544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 393168.7147669518,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 393123.6384053837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 392574.61736697756,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 392538.43137254735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 386408.4867549683,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 386378.4216335579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 254033.61971830245,
            "unit": "ns/iter",
            "extra": "iterations: 2769\ncpu: 254015.9624413127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 387588.2685493014,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 387552.93466223625 ns\nthreads: 1"
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
        "date": 1702412519406,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7103.35698641298,
            "unit": "ns/iter",
            "extra": "iterations: 98620\ncpu: 7103.05009125938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51019.930500001465,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51017.76999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94051.1756193861,
            "unit": "ns/iter",
            "extra": "iterations: 9122\ncpu: 94052.18153913613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135832.80944111358,
            "unit": "ns/iter",
            "extra": "iterations: 6334\ncpu: 135826.74455320492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177092.03683858135,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 177093.7039517749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220278.67662834533,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 220267.68837803317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262412.78381643404,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 262411.6243961354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 305241.611150065,
            "unit": "ns/iter",
            "extra": "iterations: 2852\ncpu: 305223.0014025246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 348004.59039997804,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 347994.3200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5801.1792036883,
            "unit": "ns/iter",
            "extra": "iterations: 119300\ncpu: 5800.829840737646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4803.506835515142,
            "unit": "ns/iter",
            "extra": "iterations: 147904\ncpu: 4803.377866724364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4730.192875287039,
            "unit": "ns/iter",
            "extra": "iterations: 148806\ncpu: 4730.026343023803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4752.726877778781,
            "unit": "ns/iter",
            "extra": "iterations: 147315\ncpu: 4752.5968163459365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7270.712228802995,
            "unit": "ns/iter",
            "extra": "iterations: 96747\ncpu: 7270.513814381838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25209.3826984484,
            "unit": "ns/iter",
            "extra": "iterations: 32263\ncpu: 25208.154852307587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130355.5326251913,
            "unit": "ns/iter",
            "extra": "iterations: 6590\ncpu: 130351.7450682854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101108.68952043024,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 101103.49319123717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99035.94254999749,
            "unit": "ns/iter",
            "extra": "iterations: 8651\ncpu: 99036.00739798867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94747.56244444253,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 94748.47777777779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198592.87447233716,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 198590.4243501446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1719908.8966789804,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1719907.0110701125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1336499.014450817,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1336490.6069364147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1338216.098124156,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1338220.4906204916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1300912.0575034812,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1300898.17671809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 731272.3235990651,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 731247.6716653511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1290777.479889083,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1290776.5603328743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33008.55095757805,
            "unit": "ns/iter",
            "extra": "iterations: 25011\ncpu: 33007.50069969212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 162579.6682330852,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 162577.105263158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123747.52253157464,
            "unit": "ns/iter",
            "extra": "iterations: 6968\ncpu: 123745.36452353575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124977.51354501049,
            "unit": "ns/iter",
            "extra": "iterations: 6866\ncpu: 124979.40576755044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121387.37648221159,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 121387.05533596805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211569.57052066276,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 211568.07626497143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1759276.1493383201,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1759206.6162570773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1371793.921828895,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1371762.5368731606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1393378.8870968227,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1393302.3460410587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1347543.1054913206,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1347525.8670520203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 759784.6429156566,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 759747.5020475008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1324827.330014223,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1324814.935988619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6240958.214765281,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6240885.2348993365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2733209.796460259,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2733135.398230104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25230.54017791234,
            "unit": "ns/iter",
            "extra": "iterations: 33837\ncpu: 25230.83902237207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 125773.33016523079,
            "unit": "ns/iter",
            "extra": "iterations: 6839\ncpu: 125772.11580640514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98539.51565187448,
            "unit": "ns/iter",
            "extra": "iterations: 8721\ncpu: 98539.58261667273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98740.67130695286,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 98737.77036355245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92748.99512459249,
            "unit": "ns/iter",
            "extra": "iterations: 9230\ncpu: 92748.56988082356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180098.22520275373,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 180098.48201289235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1725367.4925925636,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725340.3703703736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1335942.226361053,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1335922.4928366733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1338582.9885222719,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1338581.2051649962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1301449.5426573122,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1301429.6503496484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 718076.1353845793,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 718067.230769234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1292455.4501384862,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1292412.0498614938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2601.414578937776,
            "unit": "ns/iter",
            "extra": "iterations: 266837\ncpu: 2601.4443274358546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16238.889949702454,
            "unit": "ns/iter",
            "extra": "iterations: 42944\ncpu: 16238.19625558871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14096.760528853501,
            "unit": "ns/iter",
            "extra": "iterations: 49768\ncpu: 14096.762980228223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13762.429972291808,
            "unit": "ns/iter",
            "extra": "iterations: 50887\ncpu: 13762.09640969209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10296.482579982017,
            "unit": "ns/iter",
            "extra": "iterations: 68140\ncpu: 10296.492515409534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62668.54781677076,
            "unit": "ns/iter",
            "extra": "iterations: 11199\ncpu: 62669.291901063065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117678.1039811846,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 117676.49924407876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28350.26753657232,
            "unit": "ns/iter",
            "extra": "iterations: 24677\ncpu: 28349.83993192054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28236.694767090314,
            "unit": "ns/iter",
            "extra": "iterations: 24709\ncpu: 28235.954510502066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28202.334799806205,
            "unit": "ns/iter",
            "extra": "iterations: 24776\ncpu: 28202.619470455116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55986.91152280066,
            "unit": "ns/iter",
            "extra": "iterations: 12523\ncpu: 55986.552742952845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53676.40501957526,
            "unit": "ns/iter",
            "extra": "iterations: 13029\ncpu: 53675.93829150366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21133.744644309834,
            "unit": "ns/iter",
            "extra": "iterations: 33189\ncpu: 21132.845219801904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105757.70846536587,
            "unit": "ns/iter",
            "extra": "iterations: 6627\ncpu: 105757.29591066878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85416.59187667986,
            "unit": "ns/iter",
            "extra": "iterations: 8174\ncpu: 85417.518962563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86118.29679408154,
            "unit": "ns/iter",
            "extra": "iterations: 8110\ncpu: 86117.87916153006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84379.86023835374,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 84380.85951607062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123868.81732813155,
            "unit": "ns/iter",
            "extra": "iterations: 5644\ncpu: 123865.30829199062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 508029.14989136823,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 508025.3439536563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 413830.9811543135,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 413828.26855124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 413838.54211150965,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 413834.63819692045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 408961.5611888302,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 408954.7785547767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256736.8672533946,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 256737.0737073735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 405503.43710146594,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 405495.3623188379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21491.0152669423,
            "unit": "ns/iter",
            "extra": "iterations: 32554\ncpu: 21490.618664372985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106439.38727355769,
            "unit": "ns/iter",
            "extra": "iterations: 6569\ncpu: 106436.23078094199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87421.93749999937,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 87420.4681274908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87098.02341803661,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 87097.27204783211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86640.65573770407,
            "unit": "ns/iter",
            "extra": "iterations: 8052\ncpu: 86637.17088922033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123995.90227838403,
            "unit": "ns/iter",
            "extra": "iterations: 5618\ncpu: 123995.38981844268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 505879.33573480847,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 505864.91354466765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 414778.0698638301,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 414777.44227353856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 413558.5431952855,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 413549.526627211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405964.5331395575,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 405954.534883724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 258297.47750735987,
            "unit": "ns/iter",
            "extra": "iterations: 2712\ncpu: 258289.45427728476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 406460.2108328668,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 406451.7181129867 ns\nthreads: 1"
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
        "date": 1702418379450,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7109.473823906179,
            "unit": "ns/iter",
            "extra": "iterations: 98334\ncpu: 7109.47993572925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51067.35400000276,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51064.43999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93780.85845548079,
            "unit": "ns/iter",
            "extra": "iterations: 9142\ncpu: 93779.16210894773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136265.8772511834,
            "unit": "ns/iter",
            "extra": "iterations: 6330\ncpu: 136265.7187993681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179558.34677944265,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 179558.18694426367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222718.6081706094,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 222709.4039054471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265314.42992655386,
            "unit": "ns/iter",
            "extra": "iterations: 3268\ncpu: 265314.29008567927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 308793.9499111888,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308773.60568383656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 348554.0408817684,
            "unit": "ns/iter",
            "extra": "iterations: 2495\ncpu: 348553.5070140283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5986.861926047492,
            "unit": "ns/iter",
            "extra": "iterations: 116778\ncpu: 5986.482042850538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4876.073067321014,
            "unit": "ns/iter",
            "extra": "iterations: 143402\ncpu: 4876.0170708916185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4821.028180127884,
            "unit": "ns/iter",
            "extra": "iterations: 145741\ncpu: 4820.878819275292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4948.194995178205,
            "unit": "ns/iter",
            "extra": "iterations: 141024\ncpu: 4948.186124347629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7227.964095279103,
            "unit": "ns/iter",
            "extra": "iterations: 97146\ncpu: 7227.615135980892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25395.723243072785,
            "unit": "ns/iter",
            "extra": "iterations: 31945\ncpu: 25395.42025356085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126452.76283185676,
            "unit": "ns/iter",
            "extra": "iterations: 6780\ncpu: 126447.8171091445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99149.79503318314,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 99149.62233920806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98793.84586986067,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 98788.52099676999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94808.51204886001,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 94803.33148250978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199811.29290669295,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 199799.01543969504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1729853.1383177005,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1729716.4485981266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1382774.02954211,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1382707.5332348591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1370744.0901033904,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1370645.7902511065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1334160.2925072624,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1334088.4726224807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 726214.69937203,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 726160.9890109886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1322569.4886363342,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1322526.2784090894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33155.05404865574,
            "unit": "ns/iter",
            "extra": "iterations: 25033\ncpu: 33152.65849079217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156763.4300762788,
            "unit": "ns/iter",
            "extra": "iterations: 5506\ncpu: 156750.99891027994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123774.39068100152,
            "unit": "ns/iter",
            "extra": "iterations: 6975\ncpu: 123767.72759856608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123575.43835222663,
            "unit": "ns/iter",
            "extra": "iterations: 6967\ncpu: 123571.1927658962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119037.35383120674,
            "unit": "ns/iter",
            "extra": "iterations: 7204\ncpu: 119035.85508051048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 209809.17833777383,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 209805.54882481226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1768205.1455576608,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1768180.3402646447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1399783.9279279327,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1399764.5645645675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1404488.9577676868,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1404405.7315233746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1343118.4450867693,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343104.3352601212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 748251.3659331814,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 748218.7449062802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1339218.9264069493,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1339170.7070707083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6078984.189542594,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6078746.405228769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2774816.068047204,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2774812.721893491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24444.85587550015,
            "unit": "ns/iter",
            "extra": "iterations: 33478\ncpu: 24443.93332935062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123732.28692772349,
            "unit": "ns/iter",
            "extra": "iterations: 6946\ncpu: 123732.16239562423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94925.34026779028,
            "unit": "ns/iter",
            "extra": "iterations: 9037\ncpu: 94923.10501272522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95618.28761012541,
            "unit": "ns/iter",
            "extra": "iterations: 8967\ncpu: 95616.96219471422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91618.94876457375,
            "unit": "ns/iter",
            "extra": "iterations: 9349\ncpu: 91615.23157556984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180986.8637783748,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 180986.8569048114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1727994.445471334,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1727942.5138632187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1377783.2499999597,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1377761.3235294172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1376924.1769911612,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1376858.1120943893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1334285.8577585802,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1334271.839080459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 716683.6635873858,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 716660.2001539678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1312293.4258992388,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1312291.079136695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2552.6859613399497,
            "unit": "ns/iter",
            "extra": "iterations: 273046\ncpu: 2552.6856280626803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17303.246838257674,
            "unit": "ns/iter",
            "extra": "iterations: 40484\ncpu: 17303.003655765275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13596.127022669765,
            "unit": "ns/iter",
            "extra": "iterations: 51479\ncpu: 13595.62928572823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13134.419725286398,
            "unit": "ns/iter",
            "extra": "iterations: 53292\ncpu: 13134.412294528278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10310.93829868729,
            "unit": "ns/iter",
            "extra": "iterations: 67924\ncpu: 10310.455803545125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63785.88250747791,
            "unit": "ns/iter",
            "extra": "iterations: 11039\ncpu: 63785.89546154543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117996.31458403326,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 117996.34557089889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29209.406651641377,
            "unit": "ns/iter",
            "extra": "iterations: 23964\ncpu: 29209.401602403545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28496.650761958288,
            "unit": "ns/iter",
            "extra": "iterations: 24542\ncpu: 28496.65878901447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28185.921682113687,
            "unit": "ns/iter",
            "extra": "iterations: 24707\ncpu: 28185.8825434087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55060.251100974485,
            "unit": "ns/iter",
            "extra": "iterations: 12716\ncpu: 55060.27838943084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54124.5523838917,
            "unit": "ns/iter",
            "extra": "iterations: 12962\ncpu: 54122.05678136086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21057.671601897244,
            "unit": "ns/iter",
            "extra": "iterations: 33298\ncpu: 21056.8322421768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108320.76983882196,
            "unit": "ns/iter",
            "extra": "iterations: 6452\ncpu: 108306.04463732103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86260.17672466485,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 86252.43736887573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85989.61577388755,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 85988.34855591223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84335.75453780369,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 84333.92234643582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 127602.36721311159,
            "unit": "ns/iter",
            "extra": "iterations: 5490\ncpu: 127600.83788706711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 510801.51378809335,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 510749.56458635896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 419021.467587081,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 418990.0360144082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 426119.1246958774,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426089.0510948859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 407254.9388824384,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 407255.0058207175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 259886.95471417898,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 259874.09057164117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 410528.65219939646,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 410515.6598240467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22171.35411321073,
            "unit": "ns/iter",
            "extra": "iterations: 31569\ncpu: 22170.160600589446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106565.83015992875,
            "unit": "ns/iter",
            "extra": "iterations: 6565\ncpu: 106565.773038843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88442.43311058372,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 88432.64405497506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88139.61814054131,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 88131.588242715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86808.8701928978,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 86802.88736776683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126456.63189297389,
            "unit": "ns/iter",
            "extra": "iterations: 5531\ncpu: 126452.19670945614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 510472.00876556436,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 510471.95032870275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 419029.9730054301,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 419008.15836833214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 411543.75043935655,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 411511.3649677826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 407885.54375726567,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 407852.1586931159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260362.6607142962,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 260338.0952380927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 408805.33431084367,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 408769.2668621734 ns\nthreads: 1"
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
        "date": 1702421914940,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6967.223803183471,
            "unit": "ns/iter",
            "extra": "iterations: 100642\ncpu: 6967.1339997217865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50296.571699999506,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50294.150000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92082.24145712507,
            "unit": "ns/iter",
            "extra": "iterations: 9306\ncpu: 92079.43262411347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138171.1244160643,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 138167.6891933977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176894.70632652566,
            "unit": "ns/iter",
            "extra": "iterations: 4900\ncpu: 176881.2653061224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 218548.4346727347,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 218539.82815264093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 261099.94312365731,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 261099.9699067107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 303561.4871348947,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 303548.3657858138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 345186.4453714563,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 345176.7977751287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5871.122825996342,
            "unit": "ns/iter",
            "extra": "iterations: 119250\ncpu: 5870.857023060804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4737.8653219365615,
            "unit": "ns/iter",
            "extra": "iterations: 147886\ncpu: 4737.79870981703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4770.555406458749,
            "unit": "ns/iter",
            "extra": "iterations: 147555\ncpu: 4770.399512046357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4738.90691267152,
            "unit": "ns/iter",
            "extra": "iterations: 148452\ncpu: 4738.826691455825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7210.231550433972,
            "unit": "ns/iter",
            "extra": "iterations: 97089\ncpu: 7210.010402826275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25008.692937124615,
            "unit": "ns/iter",
            "extra": "iterations: 32508\ncpu: 25007.72732865758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130284.27856926936,
            "unit": "ns/iter",
            "extra": "iterations: 6598\ncpu: 130280.84267959991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99399.84636806077,
            "unit": "ns/iter",
            "extra": "iterations: 8618\ncpu: 99397.20352750052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100847.05991759215,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 100844.61447910526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97187.50365046629,
            "unit": "ns/iter",
            "extra": "iterations: 8766\ncpu: 97186.2537075064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201166.5922920856,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 201157.53887761995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1697840.3933823425,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1697822.6102941183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1440749.3730017238,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1440698.5790408505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1347287.9044862979,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1347257.5976845112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1327634.1412268314,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1327579.6005706086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 725408.7844216973,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 725338.552321009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1288908.6069444981,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1288769.9999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32679.850592416722,
            "unit": "ns/iter",
            "extra": "iterations: 25320\ncpu: 32677.89099526067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161508.79236811853,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 161494.36962214776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125808.07902025248,
            "unit": "ns/iter",
            "extra": "iterations: 6859\ncpu: 125801.76410555444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125407.2298817104,
            "unit": "ns/iter",
            "extra": "iterations: 6847\ncpu: 125393.456988462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125082.98812386158,
            "unit": "ns/iter",
            "extra": "iterations: 7073\ncpu: 125074.57938639919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211645.58268102523,
            "unit": "ns/iter",
            "extra": "iterations: 4088\ncpu: 211617.2945205484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1722671.1774491614,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1722587.8003696955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1374416.884785721,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1374277.5480059045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1372830.1678938216,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1372769.6612665707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1358567.69489048,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1358377.664233584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 758621.1046606461,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 758576.7784137368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1326738.085348407,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1326585.6330014241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6164589.920530073,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6163919.205298033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2845552.817629387,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2845315.5015197555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24239.25459371957,
            "unit": "ns/iter",
            "extra": "iterations: 33905\ncpu: 24236.24244211768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127962.70883444713,
            "unit": "ns/iter",
            "extra": "iterations: 6735\ncpu: 127954.40237565039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98540.39161966123,
            "unit": "ns/iter",
            "extra": "iterations: 8687\ncpu: 98529.90675722339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98366.06481588751,
            "unit": "ns/iter",
            "extra": "iterations: 8717\ncpu: 98356.33818974422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93551.84686749718,
            "unit": "ns/iter",
            "extra": "iterations: 9162\ncpu: 93542.68718620355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 182398.53694374103,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 182381.8429890854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1710411.5565694985,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1710206.386861317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1338385.4463519326,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1338284.2632331904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1338870.8517984976,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1338758.4172661854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1319484.5240113633,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1319370.0564971764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 719914.4043210237,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 719823.3024691342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1295407.6099585302,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1295312.1715076065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2553.7257732561075,
            "unit": "ns/iter",
            "extra": "iterations: 273551\ncpu: 2553.59585598298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17339.287096376727,
            "unit": "ns/iter",
            "extra": "iterations: 40415\ncpu: 17338.104664109815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13610.85980346454,
            "unit": "ns/iter",
            "extra": "iterations: 51492\ncpu: 13609.296589761465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13620.757982604518,
            "unit": "ns/iter",
            "extra": "iterations: 51393\ncpu: 13619.660265016597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10313.453014683042,
            "unit": "ns/iter",
            "extra": "iterations: 67702\ncpu: 10312.587515878377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62364.50650508818,
            "unit": "ns/iter",
            "extra": "iterations: 11222\ncpu: 62363.14382463079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116555.0545153377,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 116552.01325600679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28578.357616434474,
            "unit": "ns/iter",
            "extra": "iterations: 24434\ncpu: 28576.794630433193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28382.33718619708,
            "unit": "ns/iter",
            "extra": "iterations: 24657\ncpu: 28381.295372511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28272.558883041784,
            "unit": "ns/iter",
            "extra": "iterations: 24710\ncpu: 28272.08822339142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55779.507459119326,
            "unit": "ns/iter",
            "extra": "iterations: 12535\ncpu: 55777.9577183887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53170.79159369331,
            "unit": "ns/iter",
            "extra": "iterations: 13133\ncpu: 53169.13881063004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20705.840179813193,
            "unit": "ns/iter",
            "extra": "iterations: 33813\ncpu: 20705.57773637358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105188.82192811553,
            "unit": "ns/iter",
            "extra": "iterations: 6649\ncpu: 105183.41103925425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84903.63275193147,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 84902.76162790757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84924.82087925856,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 84923.71321303124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83442.66897127512,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 83441.48289426541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124105.58725367946,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 124103.46174329684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 505198.7646632868,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 505191.8175235293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 410039.35760421463,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 410033.00058719807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 412928.75265642937,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 412916.70602125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 408935.0110786784,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 408922.68221574515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256626.54195674064,
            "unit": "ns/iter",
            "extra": "iterations: 2729\ncpu: 256622.0960058642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 402257.0253164461,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 402251.03567318525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21502.021644489894,
            "unit": "ns/iter",
            "extra": "iterations: 32618\ncpu: 21501.50530382016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108842.78425926213,
            "unit": "ns/iter",
            "extra": "iterations: 6480\ncpu: 108842.82407407256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86966.73698629694,
            "unit": "ns/iter",
            "extra": "iterations: 8030\ncpu: 86961.45703611482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87412.41006745081,
            "unit": "ns/iter",
            "extra": "iterations: 8006\ncpu: 87412.45316013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87678.45718576548,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 87676.1266900354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126524.36539154976,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 126518.96427282639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 501974.23676688253,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 501965.02145923156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 409565.17488260666,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 409551.8192488288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 410458.73884976393,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 410446.4201877924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 406941.1813441475,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 406924.9130938559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261533.41955954247,
            "unit": "ns/iter",
            "extra": "iterations: 2679\ncpu: 261529.63792460016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 405362.2957992605,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 405362.2520420076 ns\nthreads: 1"
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
        "date": 1702453350067,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7069.521245716535,
            "unit": "ns/iter",
            "extra": "iterations: 99220\ncpu: 7069.257206208427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50540.7321000007,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50540.719999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93362.36199632479,
            "unit": "ns/iter",
            "extra": "iterations: 9257\ncpu: 93358.39904936806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134309.69642578604,
            "unit": "ns/iter",
            "extra": "iterations: 6407\ncpu: 134305.79054159508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176355.27084613606,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 176349.0268387626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 219747.70540880156,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 219739.3459119497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 259977.17242415567,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 259969.93091018326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 302159.56567061227,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 302149.4788047254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 342542.37326456665,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 342529.4724315745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5917.470475158461,
            "unit": "ns/iter",
            "extra": "iterations: 118087\ncpu: 5917.378712305337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4832.200560778471,
            "unit": "ns/iter",
            "extra": "iterations: 145512\ncpu: 4832.044092583426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4760.893746126595,
            "unit": "ns/iter",
            "extra": "iterations: 146837\ncpu: 4760.691787492247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4843.869529884289,
            "unit": "ns/iter",
            "extra": "iterations: 146432\ncpu: 4843.669416520981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7085.282710941047,
            "unit": "ns/iter",
            "extra": "iterations: 99080\ncpu: 7084.9606378684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25031.114680451254,
            "unit": "ns/iter",
            "extra": "iterations: 32499\ncpu: 25030.594787531965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127877.52219243834,
            "unit": "ns/iter",
            "extra": "iterations: 6714\ncpu: 127871.5966636879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97826.63379476062,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97821.62224001811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99004.47431605631,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 99002.47027588575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95851.50729844831,
            "unit": "ns/iter",
            "extra": "iterations: 8906\ncpu: 95850.71861666293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198188.75538290542,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 198184.08435072127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1681614.230489963,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1681588.7477313937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1328223.3271428368,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1328186.5714285702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1333249.0487805007,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1333229.4117647046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1316526.475783449,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1316497.8632478626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 723049.7929687551,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 723035.1562499987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1280112.6185852925,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1280061.7198335654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32885.448989335964,
            "unit": "ns/iter",
            "extra": "iterations: 25132\ncpu: 32883.90100270565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157427.04572782273,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 157419.6757150666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122600.4417046743,
            "unit": "ns/iter",
            "extra": "iterations: 7016\ncpu: 122595.46750285053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124973.49440651007,
            "unit": "ns/iter",
            "extra": "iterations: 6883\ncpu: 124968.12436437634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119883.25948747352,
            "unit": "ns/iter",
            "extra": "iterations: 7141\ncpu: 119879.93278252364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 208630.59185149657,
            "unit": "ns/iter",
            "extra": "iterations: 4148\ncpu: 208622.9990356796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1724553.7129629913,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1724457.4074074086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1368539.1676470798,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1368487.3529411736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1380969.2721894074,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1380927.3668639122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1346894.6570604744,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1346838.1844380433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 745045.9307568542,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 745032.5281803543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1314562.9957567088,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1314507.2135785085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6056252.623376513,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6056008.441558428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2823330.84660781,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2823246.3126843553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24139.067106192073,
            "unit": "ns/iter",
            "extra": "iterations: 33976\ncpu: 24138.144572639605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 122811.1546480096,
            "unit": "ns/iter",
            "extra": "iterations: 7003\ncpu: 122808.16792803086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97411.41964386696,
            "unit": "ns/iter",
            "extra": "iterations: 8817\ncpu: 97408.73312918158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96010.9806531001,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 96008.32028628977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92289.81845590648,
            "unit": "ns/iter",
            "extra": "iterations: 9287\ncpu: 92285.48508668019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 179582.61700806685,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 179577.92261535279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1696294.123636335,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1696243.454545458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1330023.5931720992,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1329989.7581792322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1337200.782234994,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1337164.0401146233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1317907.3338047862,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1317883.5926449767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 710890.4144486487,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 710878.1749049445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1288103.4868602827,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1288079.1147994478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2580.139480788738,
            "unit": "ns/iter",
            "extra": "iterations: 272991\ncpu: 2580.06527687727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17339.511588173926,
            "unit": "ns/iter",
            "extra": "iterations: 40386\ncpu: 17339.370078740132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14088.435784383655,
            "unit": "ns/iter",
            "extra": "iterations: 49217\ncpu: 14087.575431253337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13746.163464370245,
            "unit": "ns/iter",
            "extra": "iterations: 50953\ncpu: 13745.689164524185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10329.998433713512,
            "unit": "ns/iter",
            "extra": "iterations: 67676\ncpu: 10329.58803711803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62392.02147376216,
            "unit": "ns/iter",
            "extra": "iterations: 11223\ncpu: 62390.50164840092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116285.70891318879,
            "unit": "ns/iter",
            "extra": "iterations: 6036\ncpu: 116285.70245195506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28469.118577878024,
            "unit": "ns/iter",
            "extra": "iterations: 24583\ncpu: 28467.912785258217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28160.640305710127,
            "unit": "ns/iter",
            "extra": "iterations: 24860\ncpu: 28159.340305712034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27917.001282771507,
            "unit": "ns/iter",
            "extra": "iterations: 24946\ncpu: 27916.211015794106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55920.6345246641,
            "unit": "ns/iter",
            "extra": "iterations: 12507\ncpu: 55918.637562965014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52746.95384847825,
            "unit": "ns/iter",
            "extra": "iterations: 13239\ncpu: 52744.03655865234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20515.882582766382,
            "unit": "ns/iter",
            "extra": "iterations: 34041\ncpu: 20515.59589906308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103347.63942662066,
            "unit": "ns/iter",
            "extra": "iterations: 6767\ncpu: 103343.3574700758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84064.59790713512,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 84063.09838826099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84865.29210622076,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 84863.22299017796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83692.56922709443,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 83689.46362441748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123555.46159280208,
            "unit": "ns/iter",
            "extra": "iterations: 5663\ncpu: 123553.54052622434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 500181.46200000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500175.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411759.2941874808,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 411751.8386714102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 407795.95462480077,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 407791.33216987055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 402368.98506600666,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 402360.4824813347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254772.75664843628,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 254770.78324225981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 401679.3120689695,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 401669.02298850985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21218.763568120386,
            "unit": "ns/iter",
            "extra": "iterations: 33037\ncpu: 21218.303720071468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104638.11672161259,
            "unit": "ns/iter",
            "extra": "iterations: 6674\ncpu: 104635.27120167958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86332.26009633283,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 86331.3325923186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86678.45863264149,
            "unit": "ns/iter",
            "extra": "iterations: 8074\ncpu: 86677.6319048793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85943.58402845627,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85942.43130519999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122045.5302633879,
            "unit": "ns/iter",
            "extra": "iterations: 5733\ncpu: 122042.59549973834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 494460.50035283854,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 494451.4467184202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 405611.9814385343,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 405604.1183294697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 407043.0453752428,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 407042.9901105267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 401427.19115956855,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 401423.5361653268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256990.69423008035,
            "unit": "ns/iter",
            "extra": "iterations: 2721\ncpu: 256984.1969864007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 400725.4962492779,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 400708.8286208843 ns\nthreads: 1"
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
        "date": 1702479527842,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7493.809567519085,
            "unit": "ns/iter",
            "extra": "iterations: 93692\ncpu: 7493.508517269352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54310.13409999536,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54310.15 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100810.62349080334,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 100809.3658422225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146345.44010858567,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 146345.53783508655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192315.42026725895,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 192314.14253897552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238001.05682129407,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 238001.23524567677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 283465.9468536065,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 283466.05803717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328655.3736762432,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 328649.8487140694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374787.3166740447,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 374761.3445378153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5936.787430400937,
            "unit": "ns/iter",
            "extra": "iterations: 117458\ncpu: 5936.492192954069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4861.450613518182,
            "unit": "ns/iter",
            "extra": "iterations: 144250\ncpu: 4861.304679376073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4832.739527101618,
            "unit": "ns/iter",
            "extra": "iterations: 145232\ncpu: 4832.347554258013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4843.11447012511,
            "unit": "ns/iter",
            "extra": "iterations: 144553\ncpu: 4842.798143241584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7284.002735394686,
            "unit": "ns/iter",
            "extra": "iterations: 96147\ncpu: 7283.594911957743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25335.371983390818,
            "unit": "ns/iter",
            "extra": "iterations: 32031\ncpu: 25333.74855608629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 126543.6766873,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 126538.40259357475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97547.0160384947,
            "unit": "ns/iter",
            "extra": "iterations: 8729\ncpu: 97539.04227288335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98262.1123517897,
            "unit": "ns/iter",
            "extra": "iterations: 8687\ncpu: 98257.07378841982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94578.384427413,
            "unit": "ns/iter",
            "extra": "iterations: 9003\ncpu: 94574.11973786498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 197516.8908084111,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 197504.16389811737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1761605.0514285623,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1761414.0952380942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1382264.8256333275,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1382183.159463489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1386260.2895522714,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1386134.0298507463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1341807.2190201837,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1341732.2766570596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 740402.1375703792,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 740398.3909895394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1329643.8555079175,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1329644.9213161662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33086.98202058297,
            "unit": "ns/iter",
            "extra": "iterations: 24973\ncpu: 33087.01797941778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156045.42096686177,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 156042.89335506037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121090.30541455006,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 121089.57980823466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122144.81825950516,
            "unit": "ns/iter",
            "extra": "iterations: 7021\ncpu: 122143.7971798889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118079.76936837792,
            "unit": "ns/iter",
            "extra": "iterations: 7267\ncpu: 118079.96422182453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 207949.56290438716,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 207944.40450515202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1815418.322957195,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1815391.439688714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1410250.566666629,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1410240.7575757587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1399512.2518853312,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1399501.9607843081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1379824.24737625,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1379797.751124437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 773653.3311148382,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 773647.5873544072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1362569.494860526,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1362459.1776798903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6243176.899328923,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6242826.174496636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2900071.157575791,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2896713.939393931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24273.210026697216,
            "unit": "ns/iter",
            "extra": "iterations: 33710\ncpu: 24271.717591219214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123202.6864818548,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 123190.61160331506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94989.49423886724,
            "unit": "ns/iter",
            "extra": "iterations: 9026\ncpu: 94983.79126966484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96061.13864209938,
            "unit": "ns/iter",
            "extra": "iterations: 9117\ncpu: 96055.25940550552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91464.94771241963,
            "unit": "ns/iter",
            "extra": "iterations: 9333\ncpu: 91460.82717239935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 179196.98778973403,
            "unit": "ns/iter",
            "extra": "iterations: 4832\ncpu: 179181.04304635708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1787931.7265775052,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1787844.5506692098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1395941.648203564,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1395821.4071856232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1374500.7264706078,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1374367.9411764753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1351385.4876989722,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1351301.4471780064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 731908.9655172393,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 731866.5360501577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1333649.5414285667,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1333578.7142857113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2611.0455825912372,
            "unit": "ns/iter",
            "extra": "iterations: 268370\ncpu: 2610.8577709878164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17639.959672544046,
            "unit": "ns/iter",
            "extra": "iterations: 39700\ncpu: 17638.962216624543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14290.733993358952,
            "unit": "ns/iter",
            "extra": "iterations: 49089\ncpu: 14290.089429403695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14429.205430423128,
            "unit": "ns/iter",
            "extra": "iterations: 48615\ncpu: 14428.631080942054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10463.02257653961,
            "unit": "ns/iter",
            "extra": "iterations: 66795\ncpu: 10463.021184220403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63107.20230900955,
            "unit": "ns/iter",
            "extra": "iterations: 11087\ncpu: 63102.22783440079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121437.38577623159,
            "unit": "ns/iter",
            "extra": "iterations: 5765\ncpu: 121429.66175195201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29204.865979811,
            "unit": "ns/iter",
            "extra": "iterations: 23974\ncpu: 29201.881204638263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29101.99051343966,
            "unit": "ns/iter",
            "extra": "iterations: 24034\ncpu: 29100.32870100695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28813.635761044217,
            "unit": "ns/iter",
            "extra": "iterations: 24289\ncpu: 28811.429041953084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57721.344274368676,
            "unit": "ns/iter",
            "extra": "iterations: 12217\ncpu: 57716.7962674962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55207.569656262334,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 55204.32240221226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20857.994809689695,
            "unit": "ns/iter",
            "extra": "iterations: 33524\ncpu: 20856.932346975194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105887.95284160221,
            "unit": "ns/iter",
            "extra": "iterations: 6616\ncpu: 105887.95344619073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85857.46089625507,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85849.89564149665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86277.8155591199,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 86269.81876463951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85164.02467485117,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 85158.39309590294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125477.67385444356,
            "unit": "ns/iter",
            "extra": "iterations: 5565\ncpu: 125465.66037735717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 523800.54232211417,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 523801.1985018693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423770.4754098318,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 423745.1730418911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 419077.61570743896,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 419043.7649880103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 419832.2938360431,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 419798.0251346568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261638.4154191726,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 261619.6856287434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 415900.28028502566,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 415873.3966745862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21906.84903064422,
            "unit": "ns/iter",
            "extra": "iterations: 31980\ncpu: 21905.353345841006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108491.91096314468,
            "unit": "ns/iter",
            "extra": "iterations: 6458\ncpu: 108483.92691235615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89412.8348436506,
            "unit": "ns/iter",
            "extra": "iterations: 7835\ncpu: 89411.32099553263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89336.51731629031,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 89332.29392971171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88341.15833333082,
            "unit": "ns/iter",
            "extra": "iterations: 7920\ncpu: 88335.31565656507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 126717.45614352469,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 126703.42515403952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 526320.3360902166,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 526277.5187969907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427266.0462568419,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 427235.78819232626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 425628.60194765835,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 425600.97382836835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 419267.6806722556,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 419233.3133253308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 265225.08850227203,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 265225.11346444994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418958.10168471304,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 418958.00240674143 ns\nthreads: 1"
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
        "date": 1702488563815,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7042.6634858523885,
            "unit": "ns/iter",
            "extra": "iterations: 99660\ncpu: 7042.373068432671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50879.728500001416,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50878.37999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93763.92247976692,
            "unit": "ns/iter",
            "extra": "iterations: 9146\ncpu: 93756.97572709381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136171.62541489291,
            "unit": "ns/iter",
            "extra": "iterations: 6327\ncpu: 136161.89347241982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178781.34215968937,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 178776.43773272645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221331.9540464659,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 221330.22721470508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 264423.7301684645,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 264410.10719754966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307096.7082452526,
            "unit": "ns/iter",
            "extra": "iterations: 2838\ncpu: 307066.8076109937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 352056.2225397891,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 352050.4287464273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5824.85321543512,
            "unit": "ns/iter",
            "extra": "iterations: 120217\ncpu: 5824.80264854389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4753.819024546354,
            "unit": "ns/iter",
            "extra": "iterations: 147357\ncpu: 4753.737521800796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4737.764640396314,
            "unit": "ns/iter",
            "extra": "iterations: 147315\ncpu: 4737.552862912809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4778.05194946607,
            "unit": "ns/iter",
            "extra": "iterations: 146989\ncpu: 4777.92079679431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7256.301198812095,
            "unit": "ns/iter",
            "extra": "iterations: 96262\ncpu: 7256.080280900055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25232.38250891606,
            "unit": "ns/iter",
            "extra": "iterations: 32245\ncpu: 25231.775469064934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130818.91366470185,
            "unit": "ns/iter",
            "extra": "iterations: 6579\ncpu: 130813.89268885869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100861.73733208321,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 100861.1477728022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102336.62112692474,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 102332.14499342046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97820.2308660309,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 97818.22445944393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199069.1979050497,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 199063.4722531765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1698117.4779412476,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1698093.5661764767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1344814.9725036602,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1344771.9247467462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1343139.0965417046,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1343026.0806916442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1327751.2261734505,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1327668.136557613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 714878.7868725734,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 714839.9227799227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1289784.9597781012,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1289710.5409153926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32854.22839898121,
            "unit": "ns/iter",
            "extra": "iterations: 25184\ncpu: 32852.01318297326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161086.11324985293,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 161078.73294711258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125128.06605558957,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 125127.46980939934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126983.72814387514,
            "unit": "ns/iter",
            "extra": "iterations: 6783\ncpu: 126978.8146837683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121167.7568367726,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 121164.85762616259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 212195.66821973532,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 212186.34134379672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1739370.534450638,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1739346.5549348297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1385748.2068451482,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1385691.3690476215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1377276.4177777693,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1377242.9629629655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1348410.862118969,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1348362.2641509415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 742113.2393915013,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 742103.9231385132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1330853.7392549429,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1330795.7020057333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6073801.76712337,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6073640.410958873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2810675.8222891707,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2810658.734939761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24298.11568002065,
            "unit": "ns/iter",
            "extra": "iterations: 33852\ncpu: 24297.749025168334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 129670.4583834215,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 129666.40624999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99973.72914245752,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 99972.24029746673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99348.57451950898,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 99347.87662561802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93502.27546019328,
            "unit": "ns/iter",
            "extra": "iterations: 9181\ncpu: 93501.04563773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180937.3775276124,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 180935.2303523035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1706126.0511883025,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1706115.3564899461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1346945.0962099894,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1346930.3206997125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1347172.502890197,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1347155.9248554986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1333623.1273247509,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1333590.1287553702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 709990.2431402076,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 709978.5823170767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1296322.5062586733,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1296313.2127955516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2616.169468494125,
            "unit": "ns/iter",
            "extra": "iterations: 269348\ncpu: 2616.1274633559556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17680.275923959154,
            "unit": "ns/iter",
            "extra": "iterations: 39558\ncpu: 17679.963597755246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13686.241039164768,
            "unit": "ns/iter",
            "extra": "iterations: 51195\ncpu: 13686.127551518704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13736.478983841407,
            "unit": "ns/iter",
            "extra": "iterations: 50937\ncpu: 13736.535327954214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10232.78717484458,
            "unit": "ns/iter",
            "extra": "iterations: 67929\ncpu: 10232.667932694443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62482.7044221005,
            "unit": "ns/iter",
            "extra": "iterations: 11239\ncpu: 62482.27600320356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116241.5981697126,
            "unit": "ns/iter",
            "extra": "iterations: 6010\ncpu: 116239.21797005001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28401.366005667347,
            "unit": "ns/iter",
            "extra": "iterations: 24710\ncpu: 28401.104815863877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28228.19294983381,
            "unit": "ns/iter",
            "extra": "iterations: 24737\ncpu: 28228.25726644284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27906.72412282261,
            "unit": "ns/iter",
            "extra": "iterations: 25109\ncpu: 27906.181050619467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 52502.6314724585,
            "unit": "ns/iter",
            "extra": "iterations: 13345\ncpu: 52501.08654926971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52998.551969699634,
            "unit": "ns/iter",
            "extra": "iterations: 13200\ncpu: 52997.98484848473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20968.98360655572,
            "unit": "ns/iter",
            "extra": "iterations: 33245\ncpu: 20969.044969168295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104818.14542728252,
            "unit": "ns/iter",
            "extra": "iterations: 6670\ncpu: 104818.53073463198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84856.17627817788,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 84855.4276714319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84609.49782923792,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84607.65798359874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85470.80623875538,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 85466.68266346768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 125701.29558158676,
            "unit": "ns/iter",
            "extra": "iterations: 5545\ncpu: 125698.68349864622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 503277.5046729178,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 503259.0222861259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411585.9148560774,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 411582.795067526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414263.18321507727,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 414227.89598108403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 403282.10093347635,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 403272.92882146774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 259370.97745753106,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 259358.20399113116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 403488.6095732432,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 403477.0472895063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21402.395142810885,
            "unit": "ns/iter",
            "extra": "iterations: 32735\ncpu: 21401.606842828547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104876.73584058242,
            "unit": "ns/iter",
            "extra": "iterations: 6674\ncpu: 104874.25831585319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87283.52322371483,
            "unit": "ns/iter",
            "extra": "iterations: 7966\ncpu: 87282.62616118466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88150.2737556597,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 88148.32830568195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87174.36432661234,
            "unit": "ns/iter",
            "extra": "iterations: 8034\ncpu: 87170.02738361897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123569.3803983814,
            "unit": "ns/iter",
            "extra": "iterations: 5673\ncpu: 123563.6700158643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 501846.4971387535,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 501841.9885550783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 415046.29982363194,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 415017.75426219165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 408532.9030373732,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 408493.2242990637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405190.40185292496,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 405168.38448175794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260466.0865527382,
            "unit": "ns/iter",
            "extra": "iterations: 2692\ncpu: 260448.43982169463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 402686.8922363872,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 402678.73696408165 ns\nthreads: 1"
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
        "date": 1702490841098,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7002.10137194355,
            "unit": "ns/iter",
            "extra": "iterations: 100077\ncpu: 7002.10138193591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50512.23840000603,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50505.569999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92859.10880380704,
            "unit": "ns/iter",
            "extra": "iterations: 9246\ncpu: 92854.28293316026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134735.25668282455,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 134731.26465530714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176363.76759843988,
            "unit": "ns/iter",
            "extra": "iterations: 4901\ncpu: 176363.43603346252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217478.64325136438,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 217472.15253386862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 264877.0372148892,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 264872.92917166895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299963.33701655164,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 299949.5165745855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 342290.2350157747,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 342289.47160883277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5790.594115026411,
            "unit": "ns/iter",
            "extra": "iterations: 121224\ncpu: 5790.450735827886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4723.676060604578,
            "unit": "ns/iter",
            "extra": "iterations: 148571\ncpu: 4723.608241177622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4715.648131291328,
            "unit": "ns/iter",
            "extra": "iterations: 148311\ncpu: 4715.581447094283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4796.28667329502,
            "unit": "ns/iter",
            "extra": "iterations: 145835\ncpu: 4795.961189014987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7097.294530267892,
            "unit": "ns/iter",
            "extra": "iterations: 98652\ncpu: 7096.901228561003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25346.389760835187,
            "unit": "ns/iter",
            "extra": "iterations: 32112\ncpu: 25344.839935226697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129228.97563177581,
            "unit": "ns/iter",
            "extra": "iterations: 6648\ncpu: 129221.99157641371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99399.09825986903,
            "unit": "ns/iter",
            "extra": "iterations: 8620\ncpu: 99392.73781902558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99209.13577387104,
            "unit": "ns/iter",
            "extra": "iterations: 8632\ncpu: 99207.31000926759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95978.79098451951,
            "unit": "ns/iter",
            "extra": "iterations: 8918\ncpu: 95976.93429019954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200625.47504497602,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 200617.37859712174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1659772.691202806,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1659691.5619389596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1316430.543785261,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1316315.677966102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1328828.184813721,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1328720.9169054436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1303995.757703061,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1303888.935574228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 713087.7227799369,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 713049.1891891891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1279595.432506834,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1279506.7493112981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33042.551611864044,
            "unit": "ns/iter",
            "extra": "iterations: 24878\ncpu: 33039.002331377196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 159393.21977411536,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 159383.33641918167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123693.17235420531,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 123684.19006479467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 124681.57440648283,
            "unit": "ns/iter",
            "extra": "iterations: 6908\ncpu: 124673.85639837851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 120230.91055655782,
            "unit": "ns/iter",
            "extra": "iterations: 7133\ncpu: 120219.68316276476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211926.3436198943,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 211913.10311045797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1707862.0220587482,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1707705.8823529428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1374194.885125148,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1374119.7349042697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1367212.3817914806,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1367096.328928052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1332246.329985789,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1332160.8321377274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 739053.1383148502,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 738991.0969793359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1311725.3032544744,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1311634.4674556311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6035451.5870967,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6035021.290322568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2762161.9970328314,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2762038.57566766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24357.76101373709,
            "unit": "ns/iter",
            "extra": "iterations: 33776\ncpu: 24356.448365703553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123253.32014905004,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 123249.19747778737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 96950.6134823779,
            "unit": "ns/iter",
            "extra": "iterations: 8856\ncpu: 96948.2497741645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95674.68055245941,
            "unit": "ns/iter",
            "extra": "iterations: 8978\ncpu: 95672.7444865225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92084.36822289033,
            "unit": "ns/iter",
            "extra": "iterations: 9296\ncpu: 92081.47590361431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 182599.55092103154,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 182589.03239466518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1679425.7346570264,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1679347.2924187651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1331903.7606838706,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1331864.6723646757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1349514.9768451115,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1349484.2257597696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1312725.5915493842,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1312674.3661971865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 708681.9150871495,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 708667.6269901415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1282017.8209366049,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1281980.3030302967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2613.6817803644094,
            "unit": "ns/iter",
            "extra": "iterations: 268035\ncpu: 2613.6172514783516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17253.789900588486,
            "unit": "ns/iter",
            "extra": "iterations: 40438\ncpu: 17252.969978732966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13563.804940895434,
            "unit": "ns/iter",
            "extra": "iterations: 50841\ncpu: 13563.566806317684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14306.928957404632,
            "unit": "ns/iter",
            "extra": "iterations: 49041\ncpu: 14306.698476784763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10295.789357733243,
            "unit": "ns/iter",
            "extra": "iterations: 68087\ncpu: 10295.427908411304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63145.95173780075,
            "unit": "ns/iter",
            "extra": "iterations: 11106\ncpu: 63144.876643255964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115511.20757200653,
            "unit": "ns/iter",
            "extra": "iterations: 6075\ncpu: 115505.72839506161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28375.09365742735,
            "unit": "ns/iter",
            "extra": "iterations: 24643\ncpu: 28374.45116260185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28076.62762096598,
            "unit": "ns/iter",
            "extra": "iterations: 24800\ncpu: 28075.262096774197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29119.22424096515,
            "unit": "ns/iter",
            "extra": "iterations: 24933\ncpu: 29118.846508643193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55236.681945005446,
            "unit": "ns/iter",
            "extra": "iterations: 12545\ncpu: 55233.575129534125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53103.431168442316,
            "unit": "ns/iter",
            "extra": "iterations: 13257\ncpu: 53102.58731236319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20903.988104491378,
            "unit": "ns/iter",
            "extra": "iterations: 33458\ncpu: 20903.966166537077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108057.12518650576,
            "unit": "ns/iter",
            "extra": "iterations: 6702\ncpu: 108052.87973739264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83803.04643924972,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83800.6941950919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84806.34559628673,
            "unit": "ns/iter",
            "extra": "iterations: 8209\ncpu: 84802.50944085779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83433.6251341372,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 83430.80958626381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 124585.17215009811,
            "unit": "ns/iter",
            "extra": "iterations: 5623\ncpu: 124585.55930997446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 496090.1846591461,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 496088.494318188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 406001.35328634916,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 405977.64084507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 408283.26748249575,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 408278.26340326027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 403946.52136256185,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 403924.36489607225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 255855.72989766774,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 255849.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 398814.1814032914,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 398798.28864802927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21604.890906287725,
            "unit": "ns/iter",
            "extra": "iterations: 32440\ncpu: 21603.40012330427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104894.48951782528,
            "unit": "ns/iter",
            "extra": "iterations: 6678\ncpu: 104882.21024258746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87104.15172671471,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 87098.34185263669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87071.58086956256,
            "unit": "ns/iter",
            "extra": "iterations: 8050\ncpu: 87070.24844720417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87002.28968353602,
            "unit": "ns/iter",
            "extra": "iterations: 8026\ncpu: 86999.5763767758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124454.31987909155,
            "unit": "ns/iter",
            "extra": "iterations: 5624\ncpu: 124445.03911806573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 496343.40806222847,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 496308.48656293313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 405870.6466472258,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 405862.27405247896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 406066.6347271172,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 406047.7351916377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 402533.68955566344,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 402511.8291979222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260752.8720887086,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 260749.3900184862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 400212.6739379882,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 400185.93570608966 ns\nthreads: 1"
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
        "date": 1705573920587,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7146.943850185969,
            "unit": "ns/iter",
            "extra": "iterations: 97507\ncpu: 7146.49204672485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50250.28490000523,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50250.26999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92659.75652642453,
            "unit": "ns/iter",
            "extra": "iterations: 9270\ncpu: 92656.17044228694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134352.14483079742,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 134347.93542378143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176047.80411320075,
            "unit": "ns/iter",
            "extra": "iterations: 4911\ncpu: 176040.21584198743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216347.75193602638,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 216339.72020984252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258574.38777941937,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 258567.48137108804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 301034.42244685243,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 301027.2568839317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 343219.1325966444,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 343201.2233622728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5950.42163742673,
            "unit": "ns/iter",
            "extra": "iterations: 117990\ncpu: 5950.229680481407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4865.4404569624585,
            "unit": "ns/iter",
            "extra": "iterations: 144257\ncpu: 4865.239121845039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4844.651762724612,
            "unit": "ns/iter",
            "extra": "iterations: 143698\ncpu: 4844.533674790189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4939.041480880374,
            "unit": "ns/iter",
            "extra": "iterations: 142861\ncpu: 4938.865750624726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7169.180880407166,
            "unit": "ns/iter",
            "extra": "iterations: 97523\ncpu: 7169.019615885487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28995.123340999202,
            "unit": "ns/iter",
            "extra": "iterations: 28255\ncpu: 28992.51813838261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130632.36167300418,
            "unit": "ns/iter",
            "extra": "iterations: 6575\ncpu: 130627.72623574139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102123.30549921688,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 102119.49182870101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101292.59318020589,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 101286.45512668717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98461.75845354922,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 98458.33814195031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201936.8876531893,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 201923.08216068987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1698891.0457038113,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1698809.5063985372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1314492.2143865495,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1314456.558533146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1311356.478199786,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1311295.358649791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1289162.3393351655,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1289060.52631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 700501.5718607943,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 700462.5567322222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1273381.5920328721,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1273329.3956043937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34042.74998971016,
            "unit": "ns/iter",
            "extra": "iterations: 24299\ncpu: 34041.09634141321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160650.10958139514,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 160638.13953488393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125411.2172137089,
            "unit": "ns/iter",
            "extra": "iterations: 6855\ncpu: 125406.22902990543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126586.8162725886,
            "unit": "ns/iter",
            "extra": "iterations: 6809\ncpu: 126581.64194448532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 122313.78409576534,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 122307.69559640867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211023.76513670862,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 211013.74511718703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1734910.1614098647,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1734807.4211502778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1357219.8411078313,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1357161.9533527717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1347045.8538350046,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1346959.7684515212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1311631.083451305,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1311512.8712871287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 725498.3792025206,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 725486.2392494138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1302443.787921312,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1302360.1123595517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5985528.012820542,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5985230.769230754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2738150.6392961736,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2738021.7008797517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25249.63680446891,
            "unit": "ns/iter",
            "extra": "iterations: 32583\ncpu: 25249.568793542574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126981.46892072521,
            "unit": "ns/iter",
            "extra": "iterations: 6773\ncpu: 126976.55396426987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98101.27661521,
            "unit": "ns/iter",
            "extra": "iterations: 8745\ncpu: 98097.59862778737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98861.1195627163,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 98857.03107019598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94445.88666519136,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 94444.61521450707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 183588.67174925673,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 183580.30495552666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1700262.1056467856,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1700182.5136612044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1318386.7895480043,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1318334.0395480203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1315065.487323998,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1315029.4366197223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1288381.095303826,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1288290.3314917136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 694782.7613382312,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 694754.3494423785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1282761.0811554468,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1282671.801925718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2640.859223775709,
            "unit": "ns/iter",
            "extra": "iterations: 265954\ncpu: 2640.857441512463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17181.12671770728,
            "unit": "ns/iter",
            "extra": "iterations: 40752\ncpu: 17180.207106399615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13322.438428330885,
            "unit": "ns/iter",
            "extra": "iterations: 52581\ncpu: 13321.94138567156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12777.668529169983,
            "unit": "ns/iter",
            "extra": "iterations: 54765\ncpu: 12777.085729937005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10463.221923415094,
            "unit": "ns/iter",
            "extra": "iterations: 66933\ncpu: 10463.089955627329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64927.14943591881,
            "unit": "ns/iter",
            "extra": "iterations: 10814\ncpu: 64926.96504531192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115827.36489608431,
            "unit": "ns/iter",
            "extra": "iterations: 6062\ncpu: 115826.27845595419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27990.39917022305,
            "unit": "ns/iter",
            "extra": "iterations: 25067\ncpu: 27989.488171699682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27808.91335955408,
            "unit": "ns/iter",
            "extra": "iterations: 25173\ncpu: 27808.425694196096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27693.583698265225,
            "unit": "ns/iter",
            "extra": "iterations: 25347\ncpu: 27693.537696768675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54888.609952348226,
            "unit": "ns/iter",
            "extra": "iterations: 12801\ncpu: 54884.79025076165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52745.262562624535,
            "unit": "ns/iter",
            "extra": "iterations: 13174\ncpu: 52742.0677091238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21289.652362597604,
            "unit": "ns/iter",
            "extra": "iterations: 32951\ncpu: 21288.42827228315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105893.66318972837,
            "unit": "ns/iter",
            "extra": "iterations: 6615\ncpu: 105891.53439153494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85732.1067367634,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 85731.92321799757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85470.81321628539,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 85466.61789807232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84390.52860246577,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84386.67632150678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 126062.96239654355,
            "unit": "ns/iter",
            "extra": "iterations: 5558\ncpu: 126056.47715005426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 508428.39752908336,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 508422.1656976707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 410133.7857981379,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 410117.48826290626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 410504.9019953497,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 410486.9131455367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 402676.42438180686,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 402653.99654973915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253155.86707714453,
            "unit": "ns/iter",
            "extra": "iterations: 2761\ncpu: 253152.408547627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 402393.2985074079,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 402359.7588978153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21768.942237817504,
            "unit": "ns/iter",
            "extra": "iterations: 32201\ncpu: 21767.982360796283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107027.86178984903,
            "unit": "ns/iter",
            "extra": "iterations: 6548\ncpu: 107023.42700061164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88821.2826473635,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 88820.93495934963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88924.33223097833,
            "unit": "ns/iter",
            "extra": "iterations: 7862\ncpu: 88923.96336810099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88305.4285894888,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 88302.4161922828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127742.6399124393,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 127735.95403137554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 502317.19170245685,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 502297.3533619503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 410350.6068075099,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 410336.85446009255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 410041.9366940352,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 410020.1055099635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 404520.5317552124,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 404499.36489607603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255808.48556815658,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 255798.31932773048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 403659.09901562246,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 403657.6143601593 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}