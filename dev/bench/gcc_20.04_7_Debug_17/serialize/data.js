window.BENCHMARK_DATA = {
  "lastUpdate": 1702381149420,
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
      }
    ]
  }
}