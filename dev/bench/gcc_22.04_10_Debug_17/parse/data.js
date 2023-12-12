window.BENCHMARK_DATA = {
  "lastUpdate": 1702418380200,
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
      }
    ]
  }
}