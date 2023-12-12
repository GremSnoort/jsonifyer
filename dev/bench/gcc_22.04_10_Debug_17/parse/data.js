window.BENCHMARK_DATA = {
  "lastUpdate": 1702397914885,
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
      }
    ]
  }
}