window.BENCHMARK_DATA = {
  "lastUpdate": 1702390831144,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-7 20.04 Debug c++-17": [
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
        "date": 1702381147442,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8913.036418199095,
            "unit": "ns/iter",
            "extra": "iterations: 78642\ncpu: 8913.055364817783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102749.26746698172,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 102747.99519807924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197867.82771111533,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 197865.67806203308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 294652.6655313288,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 294650.9196185286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 384591.99730819993,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 384588.11126065487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 478390.07755775185,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 478379.4279427944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 572609.8132807182,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 572606.771860618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 534216.3850000361,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534207.799999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 609269.487000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609241.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6883.387755302475,
            "unit": "ns/iter",
            "extra": "iterations: 101595\ncpu: 6883.1300752989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5688.904105683913,
            "unit": "ns/iter",
            "extra": "iterations: 122781\ncpu: 5688.590254192436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5673.7052273556565,
            "unit": "ns/iter",
            "extra": "iterations: 123485\ncpu: 5673.472891444292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5655.650948575048,
            "unit": "ns/iter",
            "extra": "iterations: 123870\ncpu: 5655.319286348598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9623.83212959324,
            "unit": "ns/iter",
            "extra": "iterations: 72967\ncpu: 9623.59833897516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52295.50930968805,
            "unit": "ns/iter",
            "extra": "iterations: 15790\ncpu: 52293.45155161496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 227271.54494532867,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 227267.69805281417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 183226.29696191358,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 183224.36884895174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 180904.64032869696,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 180903.8137378841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 183129.09726379075,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 183128.08892689174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 391118.8220224707,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 391114.0224719094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3143514.1346800085,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3143401.01010101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2580393.4175823773,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2580340.659340665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2565110.192307742,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2565082.4175824234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2581980.110803412,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581945.983379501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1571420.6912751964,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1571413.2550335547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2502373.8733152933,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2502314.555256056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10753246.948979141,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10752904.081632655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6075564.168831428,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6075500.649350636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12909490.695122026,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12908740.243902463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 56625.639951010926,
            "unit": "ns/iter",
            "extra": "iterations: 14698\ncpu: 56623.79235270103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 226690.344063333,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 226680.5277044851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 186153.90416305402,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 186145.03469210662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187714.7628708644,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 187705.1265270507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 186275.22027290543,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 186267.31643924574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 392661.4068561239,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 392643.8881371222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3167211.118644037,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3167124.7457627123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2608088.561452489,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608097.206703896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2592275.7839335506,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2592172.8531855945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2602167.563889029,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2602129.7222222215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1565030.9629005052,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1564995.6155143261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2528770.9351352314,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2528778.108108106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10905014.181817895,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10904787.878787888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6231698.653333145,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6231586.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 53272.20524967831,
            "unit": "ns/iter",
            "extra": "iterations: 15620\ncpu: 53271.030729833496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 223502.27552082975,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 223490.13020833328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184112.01605995224,
            "unit": "ns/iter",
            "extra": "iterations: 4670\ncpu: 184097.94432548186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 182549.22980175517,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182536.5806864212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183142.36202854698,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 183128.63839761415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 389389.1869663012,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 389375.99999999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3157730.155405493,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3157496.2837837967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2611119.8575418517,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2610936.871508365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2583201.9585636104,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2583024.5856353515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2605607.986072427,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2605484.4011142068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1574180.5245346532,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1574081.8950930554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2531263.883468752,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2531145.528455278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3126.9739787674334,
            "unit": "ns/iter",
            "extra": "iterations: 225316\ncpu: 3126.980329847857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21684.769323595254,
            "unit": "ns/iter",
            "extra": "iterations: 32318\ncpu: 21684.299771025424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15237.87782204525,
            "unit": "ns/iter",
            "extra": "iterations: 45933\ncpu: 15237.763699301244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16685.954950224434,
            "unit": "ns/iter",
            "extra": "iterations: 41887\ncpu: 16685.98610547423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12977.463036971623,
            "unit": "ns/iter",
            "extra": "iterations: 53797\ncpu: 12977.283119876507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 88543.61533594651,
            "unit": "ns/iter",
            "extra": "iterations: 7903\ncpu: 88543.94533721397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 203943.9594870278,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 203940.39638589346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 49522.14473684102,
            "unit": "ns/iter",
            "extra": "iterations: 14136\ncpu: 49519.75099037858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49296.002677751894,
            "unit": "ns/iter",
            "extra": "iterations: 14191\ncpu: 49291.09294623375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49897.889372946396,
            "unit": "ns/iter",
            "extra": "iterations: 14002\ncpu: 49897.09327238969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106646.65442073705,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 106639.9542682912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 93891.73256592765,
            "unit": "ns/iter",
            "extra": "iterations: 7471\ncpu: 93886.668451346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26780.059569414007,
            "unit": "ns/iter",
            "extra": "iterations: 26104\ncpu: 26778.459239963136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 129708.97424017331,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 129702.53891771636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 105080.28665865933,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 105073.67788461637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 106021.68506691378,
            "unit": "ns/iter",
            "extra": "iterations: 6576\ncpu: 106020.27068126384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 107031.50084290953,
            "unit": "ns/iter",
            "extra": "iterations: 6525\ncpu: 107031.75478927165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 190229.01872964128,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 190228.20304017427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 861568.9962917523,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 861563.4116192856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 727704.9283456835,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 727687.5658587927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 721577.0360082497,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 721561.5226337562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 774388.6081504538,
            "unit": "ns/iter",
            "extra": "iterations: 957\ncpu: 774390.0731452389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 471088.2080165743,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 471089.4263994454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 712336.8753830602,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 712316.6496424864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27493.9298114684,
            "unit": "ns/iter",
            "extra": "iterations: 25460\ncpu: 27493.29143754915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 132934.07936205997,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 132929.56142016416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 107366.85525912876,
            "unit": "ns/iter",
            "extra": "iterations: 6522\ncpu: 107361.4688745797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 107202.76447166588,
            "unit": "ns/iter",
            "extra": "iterations: 6530\ncpu: 106949.23430321655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 108525.56679537006,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 108523.86100386083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 190590.1809031525,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 190590.64200217556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 863186.9360393636,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 863191.1439114278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 726186.3002070793,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 726181.0559006317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 724797.4256198155,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 724783.8842975261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 721544.5590061717,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 721524.9482401658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 471131.2756064668,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471128.09973044944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 709748.6206896612,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 709717.5456389454 ns\nthreads: 1"
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
        "date": 1702381147442,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8913.036418199095,
            "unit": "ns/iter",
            "extra": "iterations: 78642\ncpu: 8913.055364817783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102749.26746698172,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 102747.99519807924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197867.82771111533,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 197865.67806203308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 294652.6655313288,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 294650.9196185286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 384591.99730819993,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 384588.11126065487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 478390.07755775185,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 478379.4279427944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 572609.8132807182,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 572606.771860618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 534216.3850000361,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534207.799999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 609269.487000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609241.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6883.387755302475,
            "unit": "ns/iter",
            "extra": "iterations: 101595\ncpu: 6883.1300752989855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5688.904105683913,
            "unit": "ns/iter",
            "extra": "iterations: 122781\ncpu: 5688.590254192436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5673.7052273556565,
            "unit": "ns/iter",
            "extra": "iterations: 123485\ncpu: 5673.472891444292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5655.650948575048,
            "unit": "ns/iter",
            "extra": "iterations: 123870\ncpu: 5655.319286348598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9623.83212959324,
            "unit": "ns/iter",
            "extra": "iterations: 72967\ncpu: 9623.59833897516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52295.50930968805,
            "unit": "ns/iter",
            "extra": "iterations: 15790\ncpu: 52293.45155161496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 227271.54494532867,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 227267.69805281417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 183226.29696191358,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 183224.36884895174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 180904.64032869696,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 180903.8137378841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 183129.09726379075,
            "unit": "ns/iter",
            "extra": "iterations: 4678\ncpu: 183128.08892689174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 391118.8220224707,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 391114.0224719094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3143514.1346800085,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3143401.01010101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2580393.4175823773,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2580340.659340665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2565110.192307742,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2565082.4175824234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2581980.110803412,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581945.983379501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1571420.6912751964,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1571413.2550335547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2502373.8733152933,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2502314.555256056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10753246.948979141,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10752904.081632655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6075564.168831428,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6075500.649350636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12909490.695122026,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12908740.243902463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 56625.639951010926,
            "unit": "ns/iter",
            "extra": "iterations: 14698\ncpu: 56623.79235270103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 226690.344063333,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 226680.5277044851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 186153.90416305402,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 186145.03469210662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 187714.7628708644,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 187705.1265270507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 186275.22027290543,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 186267.31643924574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 392661.4068561239,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 392643.8881371222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3167211.118644037,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3167124.7457627123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2608088.561452489,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608097.206703896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2592275.7839335506,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2592172.8531855945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2602167.563889029,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2602129.7222222215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1565030.9629005052,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1564995.6155143261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2528770.9351352314,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2528778.108108106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10905014.181817895,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10904787.878787888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6231698.653333145,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6231586.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 53272.20524967831,
            "unit": "ns/iter",
            "extra": "iterations: 15620\ncpu: 53271.030729833496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 223502.27552082975,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 223490.13020833328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 184112.01605995224,
            "unit": "ns/iter",
            "extra": "iterations: 4670\ncpu: 184097.94432548186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 182549.22980175517,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 182536.5806864212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 183142.36202854698,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 183128.63839761415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 389389.1869663012,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 389375.99999999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3157730.155405493,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3157496.2837837967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2611119.8575418517,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2610936.871508365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2583201.9585636104,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2583024.5856353515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2605607.986072427,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2605484.4011142068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1574180.5245346532,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1574081.8950930554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2531263.883468752,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2531145.528455278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3126.9739787674334,
            "unit": "ns/iter",
            "extra": "iterations: 225316\ncpu: 3126.980329847857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21684.769323595254,
            "unit": "ns/iter",
            "extra": "iterations: 32318\ncpu: 21684.299771025424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15237.87782204525,
            "unit": "ns/iter",
            "extra": "iterations: 45933\ncpu: 15237.763699301244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16685.954950224434,
            "unit": "ns/iter",
            "extra": "iterations: 41887\ncpu: 16685.98610547423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12977.463036971623,
            "unit": "ns/iter",
            "extra": "iterations: 53797\ncpu: 12977.283119876507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 88543.61533594651,
            "unit": "ns/iter",
            "extra": "iterations: 7903\ncpu: 88543.94533721397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 203943.9594870278,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 203940.39638589346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 49522.14473684102,
            "unit": "ns/iter",
            "extra": "iterations: 14136\ncpu: 49519.75099037858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 49296.002677751894,
            "unit": "ns/iter",
            "extra": "iterations: 14191\ncpu: 49291.09294623375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 49897.889372946396,
            "unit": "ns/iter",
            "extra": "iterations: 14002\ncpu: 49897.09327238969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106646.65442073705,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 106639.9542682912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 93891.73256592765,
            "unit": "ns/iter",
            "extra": "iterations: 7471\ncpu: 93886.668451346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26780.059569414007,
            "unit": "ns/iter",
            "extra": "iterations: 26104\ncpu: 26778.459239963136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 129708.97424017331,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 129702.53891771636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 105080.28665865933,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 105073.67788461637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 106021.68506691378,
            "unit": "ns/iter",
            "extra": "iterations: 6576\ncpu: 106020.27068126384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 107031.50084290953,
            "unit": "ns/iter",
            "extra": "iterations: 6525\ncpu: 107031.75478927165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 190229.01872964128,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 190228.20304017427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 861568.9962917523,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 861563.4116192856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 727704.9283456835,
            "unit": "ns/iter",
            "extra": "iterations: 949\ncpu: 727687.5658587927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 721577.0360082497,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 721561.5226337562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 774388.6081504538,
            "unit": "ns/iter",
            "extra": "iterations: 957\ncpu: 774390.0731452389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 471088.2080165743,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 471089.4263994454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 712336.8753830602,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 712316.6496424864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27493.9298114684,
            "unit": "ns/iter",
            "extra": "iterations: 25460\ncpu: 27493.29143754915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 132934.07936205997,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 132929.56142016416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 107366.85525912876,
            "unit": "ns/iter",
            "extra": "iterations: 6522\ncpu: 107361.4688745797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 107202.76447166588,
            "unit": "ns/iter",
            "extra": "iterations: 6530\ncpu: 106949.23430321655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 108525.56679537006,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 108523.86100386083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 190590.1809031525,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 190590.64200217556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 863186.9360393636,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 863191.1439114278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 726186.3002070793,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 726181.0559006317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 724797.4256198155,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 724783.8842975261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 721544.5590061717,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 721524.9482401658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 471131.2756064668,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471128.09973044944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 709748.6206896612,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 709717.5456389454 ns\nthreads: 1"
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
        "date": 1702382274893,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8840.72318835038,
            "unit": "ns/iter",
            "extra": "iterations: 78837\ncpu: 8840.333853393711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 101729.02586615486,
            "unit": "ns/iter",
            "extra": "iterations: 8428\ncpu: 101724.881347888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 196513.0396416541,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 196506.13661814108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291780.6184210585,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 291775.6747638327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 387897.83044057933,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 387884.37917222956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 476106.6229508235,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 476083.98907103844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 567784.142950386,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 567762.5979112275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 530317.3089999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530288.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 605190.2199999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605160.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6932.246547152389,
            "unit": "ns/iter",
            "extra": "iterations: 101076\ncpu: 6931.954173097461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5579.875412784155,
            "unit": "ns/iter",
            "extra": "iterations: 125671\ncpu: 5579.431213247294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5632.523898419608,
            "unit": "ns/iter",
            "extra": "iterations: 124276\ncpu: 5632.187228427041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5650.735442843501,
            "unit": "ns/iter",
            "extra": "iterations: 123599\ncpu: 5650.82808113333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9461.364028971488,
            "unit": "ns/iter",
            "extra": "iterations: 73865\ncpu: 9461.055980504982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50767.61231750753,
            "unit": "ns/iter",
            "extra": "iterations: 16302\ncpu: 50765.75266838428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214298.6847229151,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 214284.67299051434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172844.19830541918,
            "unit": "ns/iter",
            "extra": "iterations: 4957\ncpu: 172836.02985676788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 174389.32960781254,
            "unit": "ns/iter",
            "extra": "iterations: 4921\ncpu: 174377.5248933143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174628.18270599635,
            "unit": "ns/iter",
            "extra": "iterations: 4915\ncpu: 174621.54628687727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 390463.47952681826,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 390443.7215650601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3145345.5066665965,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3145154.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2535809.9539295323,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2535707.85907859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2533650.514905193,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2533540.1084010815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2551846.37978148,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2551786.8852459015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1501194.3935483654,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1501113.8709677393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2481666.316489306,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2481553.1914893663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10365774.169999896,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10365037.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5878264.075471728,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5877920.125786156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12494447.541176027,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12493912.941176474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51665.7616383848,
            "unit": "ns/iter",
            "extra": "iterations: 16089\ncpu: 51661.998881223306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 220032.4880738565,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 220028.9817902028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 177267.2199204778,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 177254.5093115722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174625.25619666983,
            "unit": "ns/iter",
            "extra": "iterations: 4922\ncpu: 174617.1271840713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 177608.53020272014,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 177596.60736450175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 389999.70313208684,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 389980.1634135269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3126391.744966355,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3126284.8993288483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2553878.9398906757,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2553858.469945355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2548033.1693989816,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2548003.55191258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2573864.7762432136,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2573791.160221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1508653.2852512645,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1508646.3533225276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2498702.358288731,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2498633.6898395703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10556843.774510276,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10556729.411764735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5926933.955696311,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5926584.177215161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50018.61988516136,
            "unit": "ns/iter",
            "extra": "iterations: 16545\ncpu: 50018.374131157405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 216923.4154040413,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 216918.2575757579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 173087.38872043864,
            "unit": "ns/iter",
            "extra": "iterations: 4947\ncpu: 173082.3933697185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 173936.89899194217,
            "unit": "ns/iter",
            "extra": "iterations: 4960\ncpu: 173928.8306451615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 175770.63615608946,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 175766.1685346607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 385224.35143628134,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 385208.66247755947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3134727.016778479,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3134643.2885906063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2566610.167582377,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2566525.2747252863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2551462.5476839263,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2551371.1171662104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2577249.9530386133,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2577131.491712708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1504807.8206785077,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1504730.8562197115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2494208.4278075136,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2494113.368983965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2999.7602930227104,
            "unit": "ns/iter",
            "extra": "iterations: 233702\ncpu: 2999.6670974146396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21349.05602556192,
            "unit": "ns/iter",
            "extra": "iterations: 32860\ncpu: 21347.9336579428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16726.81647792816,
            "unit": "ns/iter",
            "extra": "iterations: 43270\ncpu: 16726.635082042867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16176.61217507207,
            "unit": "ns/iter",
            "extra": "iterations: 45010\ncpu: 16176.447456120834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12635.697074755304,
            "unit": "ns/iter",
            "extra": "iterations: 55380\ncpu: 12635.068616829245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 88955.93628072191,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 88948.56853306209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 190902.22900764405,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 190895.2835332582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48416.58157548807,
            "unit": "ns/iter",
            "extra": "iterations: 14459\ncpu: 48413.81146690671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48151.116014869345,
            "unit": "ns/iter",
            "extra": "iterations: 14524\ncpu: 48151.7901404563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48800.17981138804,
            "unit": "ns/iter",
            "extra": "iterations: 14315\ncpu: 48796.311561298826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102133.03139307126,
            "unit": "ns/iter",
            "extra": "iterations: 6116\ncpu: 102133.25703073839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92134.5249668025,
            "unit": "ns/iter",
            "extra": "iterations: 7530\ncpu: 92131.18193891062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27479.33511348477,
            "unit": "ns/iter",
            "extra": "iterations: 25466\ncpu: 27478.347600722976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 131761.61926260556,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 131755.69977426788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 107172.6531517723,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 107167.08996328007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 108481.84925558405,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 108477.45037220904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 108613.1597549449,
            "unit": "ns/iter",
            "extra": "iterations: 6366\ncpu: 108609.55073829724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 189975.641053486,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 189978.38718435905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 855257.9214724044,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 855215.2147239355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 714936.9121552679,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 714888.8661899955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 713101.0254064809,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 713071.0365853708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 722705.8617130539,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 722663.3642930954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 456527.6760104023,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 456517.99217731185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 702204.5414078751,
            "unit": "ns/iter",
            "extra": "iterations: 966\ncpu: 702189.751552789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 28033.500931099676,
            "unit": "ns/iter",
            "extra": "iterations: 25239\ncpu: 28032.02583303587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 134079.99865952155,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 134079.85446189443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 108980.81842310018,
            "unit": "ns/iter",
            "extra": "iterations: 6405\ncpu: 108975.19125682971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 107801.46965496313,
            "unit": "ns/iter",
            "extra": "iterations: 6492\ncpu: 107795.96426370942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 109176.72710309336,
            "unit": "ns/iter",
            "extra": "iterations: 6431\ncpu: 109171.31083812723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 190588.02447647136,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 190579.22219200438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 847887.5130111584,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 847838.2899628131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 714131.6874361438,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 714131.2563840649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 711129.801829267,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 711095.9349593442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 717426.1618852366,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 717389.1393442547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 455836.82659714046,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455819.4915254248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 700658.4332998842,
            "unit": "ns/iter",
            "extra": "iterations: 997\ncpu: 700626.5797392105 ns\nthreads: 1"
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
        "date": 1702387054750,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8660.466520971293,
            "unit": "ns/iter",
            "extra": "iterations: 80991\ncpu: 8660.001728587129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99706.98300942386,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 99700.62841848015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192618.460439562,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 192610.39560439563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 287447.4580709444,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 287435.63142194226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 373630.64173228544,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 373608.7926509187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 465077.3621795004,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 465063.2478632476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 555258.714467816,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 555235.5640535373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 519661.67500000895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519615.39999999927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 591849.4800000077,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591788.7000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6861.722059718988,
            "unit": "ns/iter",
            "extra": "iterations: 101878\ncpu: 6861.528494866411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5570.818930727808,
            "unit": "ns/iter",
            "extra": "iterations: 125880\ncpu: 5570.464728312685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5543.405789527752,
            "unit": "ns/iter",
            "extra": "iterations: 126297\ncpu: 5542.93688686192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5568.302389143551,
            "unit": "ns/iter",
            "extra": "iterations: 125861\ncpu: 5567.957508680213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9311.928402989934,
            "unit": "ns/iter",
            "extra": "iterations: 75059\ncpu: 9311.049974020438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51175.33673911643,
            "unit": "ns/iter",
            "extra": "iterations: 16149\ncpu: 51173.787850640896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 220683.89897171306,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 220681.61953727534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 183756.48434891985,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 183754.06928213668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 182252.82728932812,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 182238.038090269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179575.09728934665,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 179573.43979827658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 379041.22130436974,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 379015.3478260874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3104097.686468739,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3103964.0264026364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2520729.6774194725,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2520517.473118278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2517198.0835579224,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2517143.396226419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2528548.1783784404,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2528556.216216214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1505978.3646677537,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1505929.4975688814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2451320.6992084314,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2451308.9709762554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10380696.127450997,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10380101.960784316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5954449.713375881,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5954175.159235666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12341535.17441824,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12341002.325581394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52864.43022589831,
            "unit": "ns/iter",
            "extra": "iterations: 15715\ncpu: 52863.41711740374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 223005.6572318963,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 222999.8701635931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 180862.30102258234,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 180858.9262888798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 180181.85846089636,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 180181.08618158897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 179733.88506711725,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 179730.32718120742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 382031.35683010414,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 382022.3292469335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3099977.8837209167,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3099701.328903645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2594134.3631435614,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2594017.8861788786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2526466.9486486237,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2526357.83783784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2534482.8753386633,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2534324.6612466127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1510521.512987001,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1510481.8181818095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2463759.6939314036,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2463630.079155677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10588639.666666739,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10588306.862745082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5942496.867088695,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5942381.01265824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50694.10612194749,
            "unit": "ns/iter",
            "extra": "iterations: 16302\ncpu: 50692.626671574246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 221864.6838159309,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 221862.69389865524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 176755.20186142702,
            "unit": "ns/iter",
            "extra": "iterations: 4835\ncpu: 176748.16959669156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 177092.78014037834,
            "unit": "ns/iter",
            "extra": "iterations: 4844\ncpu: 177093.60033030514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 179266.4669326021,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 179264.1612429139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 375330.5440795049,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 375316.11927398504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3109832.5249169883,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3109724.9169435385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2539757.8695653374,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2539692.1195652266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2535462.157181624,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2535434.1463414505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2545528.9373296765,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2545393.1880109115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1514400.84853426,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1514408.631921826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2474773.9153439105,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2474701.851851862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3031.476951908289,
            "unit": "ns/iter",
            "extra": "iterations: 230518\ncpu: 3031.4535090535337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21656.656940186465,
            "unit": "ns/iter",
            "extra": "iterations: 32283\ncpu: 21656.289688071018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16305.270376157707,
            "unit": "ns/iter",
            "extra": "iterations: 42881\ncpu: 16305.32870035684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16527.094185963597,
            "unit": "ns/iter",
            "extra": "iterations: 42363\ncpu: 16526.305974553314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12718.953612748093,
            "unit": "ns/iter",
            "extra": "iterations: 54972\ncpu: 12718.99330568299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 85608.78759329833,
            "unit": "ns/iter",
            "extra": "iterations: 8173\ncpu: 85606.42358986939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 199775.5306879793,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 199769.02654867558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48243.082386170536,
            "unit": "ns/iter",
            "extra": "iterations: 14517\ncpu: 48242.46745195281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48268.448076127286,
            "unit": "ns/iter",
            "extra": "iterations: 14502\ncpu: 48268.63191283948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48578.97466685108,
            "unit": "ns/iter",
            "extra": "iterations: 14408\ncpu: 48577.8525818984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 105074.27081494372,
            "unit": "ns/iter",
            "extra": "iterations: 6798\ncpu: 105071.88879081997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91953.00236556123,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 91949.5505440765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26815.920987653968,
            "unit": "ns/iter",
            "extra": "iterations: 25920\ncpu: 26816.041666666973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 131013.42715356509,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 131008.61423220909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 105215.28743597049,
            "unit": "ns/iter",
            "extra": "iterations: 6638\ncpu: 105211.97649894671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 105198.50613038335,
            "unit": "ns/iter",
            "extra": "iterations: 6688\ncpu: 105198.83373205694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 105686.05422141783,
            "unit": "ns/iter",
            "extra": "iterations: 6621\ncpu: 105680.71288325105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 184706.0684859482,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 184703.56861716148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 848641.7236363332,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 848600.6060605929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 706446.3830645428,
            "unit": "ns/iter",
            "extra": "iterations: 992\ncpu: 706411.0887096776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 705177.0352112565,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 705179.9798792759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 709930.2768762752,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 709910.141987825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 451596.0801551697,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 451592.0491273436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 693967.741807348,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 693931.2810327732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27008.756537526,
            "unit": "ns/iter",
            "extra": "iterations: 25889\ncpu: 27008.331723898296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 130640.84146795893,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 130635.41356184894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105744.60590094762,
            "unit": "ns/iter",
            "extra": "iterations: 6643\ncpu: 105745.20547945332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105369.95798949595,
            "unit": "ns/iter",
            "extra": "iterations: 6665\ncpu: 105366.85671417958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 107002.79011779594,
            "unit": "ns/iter",
            "extra": "iterations: 6537\ncpu: 107000.26005812893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 185137.16838762007,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 185138.0195922703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 876378.864634137,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 876335.2439024383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 707254.7050505235,
            "unit": "ns/iter",
            "extra": "iterations: 990\ncpu: 707257.6767676756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 703738.8604417348,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 703713.5542168636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 708229.290485802,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 708201.2145748959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 453903.8310679593,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 453894.11003235885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 694037.9006951314,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 694024.131082417 ns\nthreads: 1"
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
        "date": 1702388110890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8705.60595944238,
            "unit": "ns/iter",
            "extra": "iterations: 80578\ncpu: 8705.104370920102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100666.00578102996,
            "unit": "ns/iter",
            "extra": "iterations: 8476\ncpu: 100660.18168947617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 195185.8883462824,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 195182.99667036624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 289962.2099799033,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 289947.68921634293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 377040.633084033,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 377029.1245050593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469306.95368874236,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 469284.49111470114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 562024.4745325602,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 562001.0315925208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 524891.4979999881,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524872.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 599155.6590000187,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599126.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6830.9605714735935,
            "unit": "ns/iter",
            "extra": "iterations: 101982\ncpu: 6830.43282147829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5619.230688993858,
            "unit": "ns/iter",
            "extra": "iterations: 124631\ncpu: 5619.296964639618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5607.990317753843,
            "unit": "ns/iter",
            "extra": "iterations: 124971\ncpu: 5607.61616695073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5597.7012202924925,
            "unit": "ns/iter",
            "extra": "iterations: 125052\ncpu: 5597.418673831697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9301.359909246203,
            "unit": "ns/iter",
            "extra": "iterations: 75369\ncpu: 9300.802717297564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 51719.7324383384,
            "unit": "ns/iter",
            "extra": "iterations: 16015\ncpu: 51718.382766156756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 216589.9414437239,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 216577.71327612342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 180323.40037052752,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 180307.53396459465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 177737.8219461645,
            "unit": "ns/iter",
            "extra": "iterations: 4830\ncpu: 177731.61490683202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176946.71900144653,
            "unit": "ns/iter",
            "extra": "iterations: 4847\ncpu: 176935.89849391428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 394021.6018099663,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 393996.7420814491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3111102.423840959,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3110946.3576158914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2539899.8702701805,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2539739.7297297274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2525961.035040459,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2525832.884097041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2536595.7479674625,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2536502.9810298104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1498155.3709676994,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1498125.3225806437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2463589.649076523,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2463503.6939313975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10329307.475727808,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10329127.184465999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5827951.310558834,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5827611.18012422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12340229.790697908,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12339254.651162773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53585.13140901303,
            "unit": "ns/iter",
            "extra": "iterations: 15486\ncpu: 53583.152524861274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 231435.91452304585,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 231427.11682743873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 182763.07162592743,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 182750.22316684443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 180364.5607555052,
            "unit": "ns/iter",
            "extra": "iterations: 4765\ncpu: 180356.26442812048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 181388.26055743304,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 181377.09037162218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 388601.2552338757,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 388593.7639198229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3086260.440397272,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3086011.258278142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2555565.915760908,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2555494.2934782524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2538866.8828337267,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2538688.2833787585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2536227.5978261675,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2536139.673913051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1507801.2528362884,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1507725.283630473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2468952.460317545,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2468907.936507928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10457894.796116626,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10457639.805825235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5919343.075949131,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5919166.4556961935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 52130.731129408545,
            "unit": "ns/iter",
            "extra": "iterations: 15911\ncpu: 52131.26139149036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 220832.46549948142,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 220826.18434603486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 177308.18760330157,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 177304.95867768617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 178580.8395010389,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 178579.89604989567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 180650.87605218656,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 180652.5462962972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 384402.4387980473,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 384385.5059655344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3112378.7375415163,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3112192.026578075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2566923.005494553,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2566885.1648351657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2543591.1576085757,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2543568.206521728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2542677.2016349575,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2542677.384196193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1508357.4935274895,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1508297.4110032418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2479479.4228723017,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2479507.7127659633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3053.264477035626,
            "unit": "ns/iter",
            "extra": "iterations: 230054\ncpu: 3053.2062037608375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21402.103655742798,
            "unit": "ns/iter",
            "extra": "iterations: 32743\ncpu: 21401.777479156008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16221.048703703671,
            "unit": "ns/iter",
            "extra": "iterations: 43200\ncpu: 16220.937499999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16478.135557749312,
            "unit": "ns/iter",
            "extra": "iterations: 42528\ncpu: 16478.08267494358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12601.875216013796,
            "unit": "ns/iter",
            "extra": "iterations: 55552\ncpu: 12601.782114055242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 88040.70557929127,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 88039.40688615243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 198989.55646992245,
            "unit": "ns/iter",
            "extra": "iterations: 3524\ncpu: 198992.87741203324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48513.83452339463,
            "unit": "ns/iter",
            "extra": "iterations: 14425\ncpu: 48514.52339688024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48459.96832767663,
            "unit": "ns/iter",
            "extra": "iterations: 14429\ncpu: 48460.13583754994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48609.38605879427,
            "unit": "ns/iter",
            "extra": "iterations: 14389\ncpu: 48608.28410591427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102318.4713534099,
            "unit": "ns/iter",
            "extra": "iterations: 6842\ncpu: 102317.30488161238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91817.17812704264,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 91818.29731499658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26495.593492851574,
            "unit": "ns/iter",
            "extra": "iterations: 26371\ncpu: 26495.673277464135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 128117.77387486245,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 128115.14818880433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 102965.83147387039,
            "unit": "ns/iter",
            "extra": "iterations: 6812\ncpu: 102962.66881972973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104265.85844136607,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 104264.2378185074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104815.37758775425,
            "unit": "ns/iter",
            "extra": "iterations: 6666\ncpu: 104816.75667566684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 186895.78140769285,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 186896.3346613558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 842414.0637785506,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 842424.5487364666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 708672.0873096244,
            "unit": "ns/iter",
            "extra": "iterations: 985\ncpu: 708661.3197969594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 708587.5727272417,
            "unit": "ns/iter",
            "extra": "iterations: 990\ncpu: 708584.4444444524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 712134.1321137943,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 712142.9878048691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 457743.44631305203,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 457736.73997412785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 695023.119284274,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 695022.6640158963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26987.82029655468,
            "unit": "ns/iter",
            "extra": "iterations: 25965\ncpu: 26987.64105526691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129625.8332718575,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 129627.40686093815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104891.58664070432,
            "unit": "ns/iter",
            "extra": "iterations: 6677\ncpu: 104890.45978732959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104451.44693754386,
            "unit": "ns/iter",
            "extra": "iterations: 6596\ncpu: 104448.59005457864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 106245.42314099713,
            "unit": "ns/iter",
            "extra": "iterations: 6603\ncpu: 106242.95017416317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 186087.70236512393,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 186086.60643104007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 837788.3345323909,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 837799.0407673729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 709197.4214792158,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 709198.1762917876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 704874.7060020358,
            "unit": "ns/iter",
            "extra": "iterations: 983\ncpu: 704868.0569684643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 708993.0323886453,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 708981.781376518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 450906.48643413285,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 450902.9069767454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 693683.6086956853,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 693692.1936758885 ns\nthreads: 1"
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
        "date": 1702390829302,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8611.753561201143,
            "unit": "ns/iter",
            "extra": "iterations: 81363\ncpu: 8611.468357853078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100110.34358554582,
            "unit": "ns/iter",
            "extra": "iterations: 8551\ncpu: 100106.022687405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193547.33789450506,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 193541.18296181867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 289086.6467844037,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 289070.9430189937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 376269.41443027486,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 376244.3026836777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 467686.18073653826,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 467661.5297450422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 559830.2000000043,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 559804.6153846155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 522910.41500001255,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522874.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 597035.367999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596982.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6855.665595389067,
            "unit": "ns/iter",
            "extra": "iterations: 102370\ncpu: 6855.366806681651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5545.752759972994,
            "unit": "ns/iter",
            "extra": "iterations: 126994\ncpu: 5545.294265870824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5544.5174273332805,
            "unit": "ns/iter",
            "extra": "iterations: 126468\ncpu: 5543.815826928549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5563.223648589516,
            "unit": "ns/iter",
            "extra": "iterations: 125961\ncpu: 5563.066345932472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9413.216142399495,
            "unit": "ns/iter",
            "extra": "iterations: 74326\ncpu: 9412.980652799808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50974.18098405399,
            "unit": "ns/iter",
            "extra": "iterations: 16239\ncpu: 50972.37514625283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 222173.37474013327,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 222164.579002079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 178960.66248169032,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 178955.49278091695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 177324.208116547,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 177313.27783558806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 178161.82397160356,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 178156.6715389434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 390369.0929919244,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 390346.7205750222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3126461.6411958653,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3126305.315614625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2548098.997282598,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2547894.293478266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2532419.0405405494,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2532307.2972972975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2542341.398373945,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2542242.276422766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1495969.7045454562,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1495903.4090909103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2472897.7559682145,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2472813.2625994687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10378852.058823561,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10378142.156862728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5765066.687500209,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5764890.625000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12432755.247059103,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12432071.764705911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53749.03335056967,
            "unit": "ns/iter",
            "extra": "iterations: 15472\ncpu: 53745.80532574992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 226704.21090236295,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 226689.0711828534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 181572.39314430754,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 181560.87600507803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 181885.2154334077,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 181876.91331923864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 180757.57528469272,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 180747.42724588697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 389765.3746088731,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 389741.573535987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3117997.267558483,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3117755.85284281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2568747.351648395,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2568595.329670327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2543286.4277930064,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2543129.4277929203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2550639.308743103,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2550482.513661199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1502111.6435484085,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1502040.8064516126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2478924.172413795,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2478776.127320949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10486775.000000006,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10486226.73267325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5886082.867924492,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5885723.270440269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50856.717079452705,
            "unit": "ns/iter",
            "extra": "iterations: 16312\ncpu: 50853.94801373227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 221138.30002575816,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 221128.09683234582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 177568.43721508744,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 177558.59925404034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 178691.9810535061,
            "unit": "ns/iter",
            "extra": "iterations: 4803\ncpu: 178683.46866541743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 179215.7053907247,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 179202.31926452176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 384264.05991188076,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 384247.6211453749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3137575.9124579025,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3137386.8686868637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2566298.578082209,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2566222.1917808363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2751073.6847825907,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2750939.945652173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2554567.1798365135,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2554483.6512261503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1513571.4227642717,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1513531.382113816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2491720.1093333764,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2491659.466666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3026.9166860912665,
            "unit": "ns/iter",
            "extra": "iterations: 231666\ncpu: 3026.880509008647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21589.832448122455,
            "unit": "ns/iter",
            "extra": "iterations: 32384\ncpu: 21588.769145256847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16307.428878504252,
            "unit": "ns/iter",
            "extra": "iterations: 42800\ncpu: 16306.801401869114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16962.555193305237,
            "unit": "ns/iter",
            "extra": "iterations: 41101\ncpu: 16961.981460305156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12792.133075336518,
            "unit": "ns/iter",
            "extra": "iterations: 54781\ncpu: 12791.535386356596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87664.85683841085,
            "unit": "ns/iter",
            "extra": "iterations: 7977\ncpu: 87662.26651623451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 203885.27453810448,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 203653.37759815156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48737.38049154028,
            "unit": "ns/iter",
            "extra": "iterations: 14363\ncpu: 48734.512288518774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48398.393907998485,
            "unit": "ns/iter",
            "extra": "iterations: 14478\ncpu: 48396.62246166604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48941.36220142462,
            "unit": "ns/iter",
            "extra": "iterations: 14318\ncpu: 48939.935745215735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102318.3226326582,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 102314.51187335087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92342.19516362195,
            "unit": "ns/iter",
            "extra": "iterations: 7609\ncpu: 92339.95268760654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27018.68645111674,
            "unit": "ns/iter",
            "extra": "iterations: 25980\ncpu: 27017.775211701617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 131406.42894736835,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 131402.31203007506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 105525.34446952416,
            "unit": "ns/iter",
            "extra": "iterations: 6645\ncpu: 105521.30925508015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 105778.84332980492,
            "unit": "ns/iter",
            "extra": "iterations: 6619\ncpu: 105775.41924761952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 106147.9913334396,
            "unit": "ns/iter",
            "extra": "iterations: 6577\ncpu: 106146.75383913665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 190701.93893129478,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 190695.474372956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 859510.5061125065,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 859490.7090464607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 717590.5189743412,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 717564.9230769154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 711621.0497967676,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 711590.6504065032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 716363.7938461201,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 716347.3846153816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 456136.25962165726,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 456120.2870189169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 701277.480480449,
            "unit": "ns/iter",
            "extra": "iterations: 999\ncpu: 701244.044044052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 27094.309326945495,
            "unit": "ns/iter",
            "extra": "iterations: 25882\ncpu: 27093.424001236006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 133315.77868697266,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133313.14938154194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 112469.9599817362,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 112466.31162507621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 106393.03906368786,
            "unit": "ns/iter",
            "extra": "iterations: 6579\ncpu: 106391.77686578468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 107413.81367127558,
            "unit": "ns/iter",
            "extra": "iterations: 6510\ncpu: 107410.38402457874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 191762.8462592459,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191753.98739380835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 860697.9152333896,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 860649.9999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 716975.8317948623,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 716937.8461538564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 714503.0509164747,
            "unit": "ns/iter",
            "extra": "iterations: 982\ncpu: 714473.1160896174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 715567.7586911898,
            "unit": "ns/iter",
            "extra": "iterations: 978\ncpu: 715537.9345603276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 460561.5431937434,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 460545.0916230362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 701093.7645290681,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 701068.6372745413 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}