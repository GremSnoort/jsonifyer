window.BENCHMARK_DATA = {
  "lastUpdate": 1702394257415,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-15 18.04 Debug c++-17": [
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
        "date": 1702394256368,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7223.046905900523,
            "unit": "ns/iter",
            "extra": "iterations: 97088\ncpu: 7222.781394199077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51764.67410000214,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51762.00000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95812.06827084457,
            "unit": "ns/iter",
            "extra": "iterations: 8935\ncpu: 95808.66256295468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139309.46842616628,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 139303.40025906733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184576.42551388819,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 184567.3447764357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226974.79191811333,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 226962.92311729214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 274681.01566415484,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 274659.42982456146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 314727.5939086117,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 314712.0377084844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357942.58935204166,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 357918.9847296738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5935.282660211707,
            "unit": "ns/iter",
            "extra": "iterations: 118156\ncpu: 5934.889468160745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4988.516492111105,
            "unit": "ns/iter",
            "extra": "iterations: 140643\ncpu: 4988.452322547154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4923.07806936964,
            "unit": "ns/iter",
            "extra": "iterations: 143808\ncpu: 4922.929878727183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4908.453158768316,
            "unit": "ns/iter",
            "extra": "iterations: 143442\ncpu: 4908.238870065956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8619.105841839973,
            "unit": "ns/iter",
            "extra": "iterations: 81310\ncpu: 8618.776288279436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29309.08997776022,
            "unit": "ns/iter",
            "extra": "iterations: 27429\ncpu: 29308.013416456983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 144045.830194913,
            "unit": "ns/iter",
            "extra": "iterations: 6054\ncpu: 144033.94449950426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111144.43723001258,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 111138.0154470481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110505.70182475842,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 110503.5848324055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106312.78482276213,
            "unit": "ns/iter",
            "extra": "iterations: 8012\ncpu: 106306.65252121832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 332194.27305343974,
            "unit": "ns/iter",
            "extra": "iterations: 2787\ncpu: 332175.4574811624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1684876.8605072245,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1684806.3405797102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1346918.567489004,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1346856.1683599434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1368812.0029456448,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1368768.6303387347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1328002.027181708,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1327960.51502146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 789930.813356102,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 789918.9212328767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1309316.7415253816,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1309268.50282486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36121.85870851921,
            "unit": "ns/iter",
            "extra": "iterations: 22811\ncpu: 36121.32304589897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 181942.54073449282,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 181933.70620514968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135984.21586950694,
            "unit": "ns/iter",
            "extra": "iterations: 6314\ncpu: 135982.18245169453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137899.55245874872,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 137896.3639275992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136216.93151775494,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 136213.31422201006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 306141.155123668,
            "unit": "ns/iter",
            "extra": "iterations: 2830\ncpu: 306127.7385159001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1748670.4645523247,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1748669.9626865652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1359808.3352770624,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1359802.3323615177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1378754.1733332817,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1378722.8148148158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1359181.8444767082,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1359116.7151162815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 817007.8220640939,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 816997.5978647688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1358974.0014429647,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1358936.3636363656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5071364.539999194,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5071112.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3132755.1711408114,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3132605.3691275236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31414.316310598075,
            "unit": "ns/iter",
            "extra": "iterations: 26259\ncpu: 31413.85048935599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139889.78495849777,
            "unit": "ns/iter",
            "extra": "iterations: 6143\ncpu: 139888.6863096209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106634.31700679568,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 106632.29437229445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103012.08671563375,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 103010.24930747943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100318.74068432041,
            "unit": "ns/iter",
            "extra": "iterations: 8534\ncpu: 100314.44808999344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 262788.3512534152,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 262776.3515554213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1720248.3572743651,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1720247.6979742183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1330113.123579547,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1330059.943181815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1372559.6921943987,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1372525.7731958746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1326160.6468086673,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1326103.4042553254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 779431.3134954692,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 779408.8851634491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1310627.8101265253,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1310549.367088611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2857.9866016853803,
            "unit": "ns/iter",
            "extra": "iterations: 244583\ncpu: 2857.934116434917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20299.436267073725,
            "unit": "ns/iter",
            "extra": "iterations: 35586\ncpu: 20298.853481706297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14599.81108286064,
            "unit": "ns/iter",
            "extra": "iterations: 47984\ncpu: 14599.483161053708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14625.591207416794,
            "unit": "ns/iter",
            "extra": "iterations: 47995\ncpu: 14624.908844671361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11265.838257965093,
            "unit": "ns/iter",
            "extra": "iterations: 62272\ncpu: 11265.52061921891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98738.60617214609,
            "unit": "ns/iter",
            "extra": "iterations: 7064\ncpu: 98731.71007927555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113887.65025190063,
            "unit": "ns/iter",
            "extra": "iterations: 6153\ncpu: 113884.43035917495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29405.72822841793,
            "unit": "ns/iter",
            "extra": "iterations: 23781\ncpu: 29404.49939026959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29649.312695593246,
            "unit": "ns/iter",
            "extra": "iterations: 23646\ncpu: 29648.714370295173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29138.264228655007,
            "unit": "ns/iter",
            "extra": "iterations: 24036\ncpu: 29136.740722250044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63297.04445048393,
            "unit": "ns/iter",
            "extra": "iterations: 11046\ncpu: 63295.42820930655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55264.93523131344,
            "unit": "ns/iter",
            "extra": "iterations: 12645\ncpu: 55264.61842625572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21332.002365140193,
            "unit": "ns/iter",
            "extra": "iterations: 32979\ncpu: 21331.310834167107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101132.54621726491,
            "unit": "ns/iter",
            "extra": "iterations: 6913\ncpu: 101130.78258353756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83217.52409781996,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 83213.25973409235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84317.8578637448,
            "unit": "ns/iter",
            "extra": "iterations: 8323\ncpu: 84313.67295446317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83141.03292131999,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83139.05395769015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157092.06077594543,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 157080.64588472663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 500758.51471642626,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 500744.8671931112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 415073.19349111425,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 415067.51479289675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414870.9366488616,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 414860.56838365836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 410354.8630217297,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 410308.34803056327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278257.4988076149,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 278243.7599364076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 406668.2380675322,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 406652.96856810607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21589.61180314812,
            "unit": "ns/iter",
            "extra": "iterations: 29382\ncpu: 21576.2099244434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 102404.09365738221,
            "unit": "ns/iter",
            "extra": "iterations: 6748\ncpu: 102394.04267931065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84294.26518535831,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84292.39222316117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84098.68385703466,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 84097.52938354568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84500.65817435585,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 84496.29316590166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153780.32520323846,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 153776.598549769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 505405.8140376023,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 505384.0810419683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 407778.9041812017,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 407771.0801393676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 415230.9501188,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 415223.2779097381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411934.2117647139,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 411907.9411764701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 277190.59049505263,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 277175.60396039597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 406029.23693382303,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 406018.87340302503 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}