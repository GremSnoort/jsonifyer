window.BENCHMARK_DATA = {
  "lastUpdate": 1702392402641,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-10 18.04 Debug c++-17": [
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
        "date": 1702392401447,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 19086.821034265617,
            "unit": "ns/iter",
            "extra": "iterations: 36683\ncpu: 19086.268843878635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 175741.24983984648,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 175739.07751441383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 332228.8469505188,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 332221.6724204067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 485798.1715410575,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 485789.42632170964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 516941.2139999849,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516932.70000000077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 646658.2289999678,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646617.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 772452.8905597016,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 772427.5689223055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 904658.6631171062,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 904632.1393998059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 1020262.5230769108,
            "unit": "ns/iter",
            "extra": "iterations: 910\ncpu: 1020217.9120879126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 15450.506948119626,
            "unit": "ns/iter",
            "extra": "iterations: 45336\ncpu: 15450.286747838389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12711.112713189452,
            "unit": "ns/iter",
            "extra": "iterations: 54998\ncpu: 12710.814938725027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12530.405905708889,
            "unit": "ns/iter",
            "extra": "iterations: 55912\ncpu: 12530.31191872945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12682.74556907141,
            "unit": "ns/iter",
            "extra": "iterations: 55406\ncpu: 12682.682380969582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 21291.163867468767,
            "unit": "ns/iter",
            "extra": "iterations: 32807\ncpu: 21290.584326515647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70537.47970235866,
            "unit": "ns/iter",
            "extra": "iterations: 12095\ncpu: 70534.89045059941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 380187.463078312,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 380179.93772241956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 298176.491941125,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 298173.020322354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 295445.3983373635,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 295443.7824731549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 295705.42857142823,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 295689.53771289537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 616879.0129999592,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616873.2999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5500101.487654176,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5499572.222222234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4429023.361904596,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4428930.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4349260.0934580555,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4349213.551401865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4438435.795238081,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4438391.904761914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2588942.0474860906,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2588927.094972068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4299501.467592656,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4299345.370370381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 17324185.96774213,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 17323890.322580677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7636687.151079477,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7636279.856115104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 21514507.959184404,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 21514424.489795905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 77875.9451330645,
            "unit": "ns/iter",
            "extra": "iterations: 10972\ncpu: 77874.4440393729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 418172.76630965556,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 418159.2502434285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 330036.73518090136,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 330029.7151655121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 325960.77191650594,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 325950.96774193604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 322934.60112994415,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 322929.6798493411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 620873.749999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620842.1999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5586510.626506107,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 5586250.602409651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4515460.980676512,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4515210.144927509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4450953.761904873,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4450788.095238067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4527158.310679625,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4526949.029126191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2631398.727272744,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2631306.534090908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4366591.0234739715,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4366425.821596246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 17670555.79999995,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17670296.66666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7723229.482014026,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7723112.2302158335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 70036.47186827727,
            "unit": "ns/iter",
            "extra": "iterations: 12086\ncpu: 70035.263941751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 378174.43562610465,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 378166.79894179915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 293776.00857632846,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 293762.8130360187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 287233.64098250424,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 287225.40376850555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 283655.4074074011,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 283656.08942275634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 577875.5929999875,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577848.699999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5571436.41071449,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5571309.523809528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4456830.923445023,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4456719.138755974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4383504.737089124,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4383316.431924885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4447939.842857197,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4447802.857142862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2580803.286111196,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2580793.333333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4328729.504629686,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4328650.925925911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6875.22227557379,
            "unit": "ns/iter",
            "extra": "iterations: 102049\ncpu: 6875.006124508836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 45382.23796302065,
            "unit": "ns/iter",
            "extra": "iterations: 15847\ncpu: 45380.87966176571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33646.92212346744,
            "unit": "ns/iter",
            "extra": "iterations: 20815\ncpu: 33645.832332452315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 35054.56188044594,
            "unit": "ns/iter",
            "extra": "iterations: 19974\ncpu: 35053.35436066869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 27882.431606957078,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 27881.781714194673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 205315.35580304987,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 205300.3810082082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 351846.32144649787,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 351832.4962330461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 90990.79717103681,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 90988.34674279779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 90440.47686142754,
            "unit": "ns/iter",
            "extra": "iterations: 7736\ncpu: 90436.41416752845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 91225.81487280058,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91224.46183953038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 178014.05701196095,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 178012.9294985977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 174647.60184032703,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 174642.72569012654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 54859.92045275876,
            "unit": "ns/iter",
            "extra": "iterations: 12722\ncpu: 54856.044647067734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 269487.45275741187,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 269476.20516775805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 217803.6501711749,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 217789.51136009715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 225935.55149814623,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 225921.0362047429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 218704.82692910987,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 218691.31521399168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 392497.255605378,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 392487.275784753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1582271.5342466803,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1582235.3881278557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1315734.5300752819,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1315674.2481203086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1299050.8616238127,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1299044.8339483321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1303179.5895523315,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1303157.0895522463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 840572.4594271586,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 840530.071599046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1286750.9724265477,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1286667.8308823623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 54235.52974395084,
            "unit": "ns/iter",
            "extra": "iterations: 12927\ncpu: 54234.323508935515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 274242.4583005358,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 274241.10936270154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 220623.92780580831,
            "unit": "ns/iter",
            "extra": "iterations: 3172\ncpu: 220619.51450189346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 217630.29117465022,
            "unit": "ns/iter",
            "extra": "iterations: 3218\ncpu: 217626.47607209443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 221663.75031685331,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 221660.0760456306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 395747.0033974907,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 395744.9037372529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1575241.9436937503,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 1575206.5315315146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1298333.1113172406,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1298228.3858998166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1284692.0977861078,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1284657.1955719704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1302003.163873307,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1301976.1638733554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 832123.0094900138,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 832091.577698682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1286387.2375691484,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1286362.799263341 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}