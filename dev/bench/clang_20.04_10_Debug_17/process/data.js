window.BENCHMARK_DATA = {
  "lastUpdate": 1705774157910,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-10 20.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489555942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16052.264253498919,
            "unit": "ns/iter",
            "extra": "iterations: 43235\ncpu: 16052.184572684168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131976.36110245672,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 131967.004048583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247301.5650811863,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 247292.5092566221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361680.0284876394,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 361665.3540008377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476196.40602739336,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 476158.24657534267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 590848.5520331161,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 590825.0861474845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569446.9070000423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569384.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 665578.4817726639,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 665528.6633309504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750721.0131579787,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 750679.3585526318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12921.989625326718,
            "unit": "ns/iter",
            "extra": "iterations: 54074\ncpu: 12921.206124939927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10862.694516770222,
            "unit": "ns/iter",
            "extra": "iterations: 64524\ncpu: 10862.104023309168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11188.786132394218,
            "unit": "ns/iter",
            "extra": "iterations: 60818\ncpu: 11188.343911342037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10680.73177646905,
            "unit": "ns/iter",
            "extra": "iterations: 65602\ncpu: 10680.178957958577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18039.502754323334,
            "unit": "ns/iter",
            "extra": "iterations: 38848\ncpu: 18038.498764415148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55861.90428020861,
            "unit": "ns/iter",
            "extra": "iterations: 14532\ncpu: 55859.75777594278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256328.84525590087,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 256309.27865908426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203325.34400979974,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 203315.8924205383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205544.34499397877,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 205539.1797346202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202089.0270270178,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202083.26220957862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515405.78281345294,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 515372.33666862966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4106714.2202644483,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4106376.651982376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3291455.338078087,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3291314.23487545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3289305.964539,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3289068.439716318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3272388.045936197,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3272134.9823321463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1882432.8252031496,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882311.3821138158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3196919.8551725387,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3196646.55172413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12073047.193182291,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12072272.727272706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5451905.009999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5451344.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15886339.044777062,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15885322.388059672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55046.86809999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55043.88999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293319.2579324494,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293300.85295121267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235187.0889192724,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 235167.3324213402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237320.91074883734,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 237304.39347886134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226346.32361516388,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 226327.61728067754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 536063.6175742379,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 536032.0544554439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4159005.8571431753,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4158792.4107142943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3354859.3068590374,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354663.8989169453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3342138.1187051614,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341940.2877697838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3334498.953571645,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3334302.4999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1941677.2943631902,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941545.5114822614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3245114.735191728,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244868.6411149753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12370563.800000662,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12369849.41176465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5410708.299999668,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5410377.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56891.26259542041,
            "unit": "ns/iter",
            "extra": "iterations: 14410\ncpu: 56890.48577376811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258806.69286577264,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 258798.88149939696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210874.48429951744,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 210866.13526569927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 213736.23917373258,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 213722.82229965128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201274.12801134397,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 201260.34482758574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 492856.56573700695,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 492819.5788275476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4137579.41592935,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4137277.433628317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3317849.9750892636,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3317728.1138790147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3313806.278571617,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3313578.214285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3286668.978798538,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3286454.7703180127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1924392.9028925588,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924288.4297520586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3226353.4270830816,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226132.9861111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6415.607023641409,
            "unit": "ns/iter",
            "extra": "iterations: 109345\ncpu: 6415.163930678106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36400.970508513186,
            "unit": "ns/iter",
            "extra": "iterations: 18446\ncpu: 36398.14593949873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29446.2733137347,
            "unit": "ns/iter",
            "extra": "iterations: 24492\ncpu: 29444.271598889354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29501.14484531639,
            "unit": "ns/iter",
            "extra": "iterations: 24502\ncpu: 29498.596032976944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22774.639502313446,
            "unit": "ns/iter",
            "extra": "iterations: 30702\ncpu: 22773.011530193206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139201.7904155808,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139190.73374428073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278583.6950298158,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 278560.39761431224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70862.42972780908,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 70854.45714863989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70806.58799150975,
            "unit": "ns/iter",
            "extra": "iterations: 9893\ncpu: 70803.14363691538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69947.49845047042,
            "unit": "ns/iter",
            "extra": "iterations: 10003\ncpu: 69943.46695991253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141899.75744681098,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 141886.2006079015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130614.28427905876,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130604.16744185975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44458.12793501695,
            "unit": "ns/iter",
            "extra": "iterations: 15758\ncpu: 44454.11219697964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220145.47608627568,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 220129.6030009359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177520.18287445154,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 177514.44809295473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174146.20582380187,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174141.93628670942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176648.28087901647,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176644.35463501007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 307693.3484183197,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307685.7205623864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1215228.0850694394,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215192.7083333312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011854.0028901212,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011849.2774566459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005908.3859397552,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005893.8307030201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 994161.2563739257,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994137.8186968901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649012.7890841312,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 649002.5901942744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 991843.6600566575,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991815.0141643113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45129.50474346185,
            "unit": "ns/iter",
            "extra": "iterations: 15495\ncpu: 45128.789932236556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220173.62811221465,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 220165.20642925097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180428.93767706573,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 180426.16533608155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177860.33138796446,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177852.42324283102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176854.4880080939,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 176849.55819237485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307126.44551843836,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307121.7047451686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1204397.9775861425,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1204380.8620689614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010062.0619596485,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010036.1671469809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1001032.7259683886,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1001015.2080344348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 994734.6529744819,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994719.6883852717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 651799.9364928828,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 651795.829383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989105.264124298,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989089.1242937838 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489555942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16052.264253498919,
            "unit": "ns/iter",
            "extra": "iterations: 43235\ncpu: 16052.184572684168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131976.36110245672,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 131967.004048583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247301.5650811863,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 247292.5092566221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361680.0284876394,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 361665.3540008377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476196.40602739336,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 476158.24657534267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 590848.5520331161,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 590825.0861474845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569446.9070000423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569384.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 665578.4817726639,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 665528.6633309504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750721.0131579787,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 750679.3585526318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12921.989625326718,
            "unit": "ns/iter",
            "extra": "iterations: 54074\ncpu: 12921.206124939927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10862.694516770222,
            "unit": "ns/iter",
            "extra": "iterations: 64524\ncpu: 10862.104023309168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11188.786132394218,
            "unit": "ns/iter",
            "extra": "iterations: 60818\ncpu: 11188.343911342037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10680.73177646905,
            "unit": "ns/iter",
            "extra": "iterations: 65602\ncpu: 10680.178957958577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18039.502754323334,
            "unit": "ns/iter",
            "extra": "iterations: 38848\ncpu: 18038.498764415148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55861.90428020861,
            "unit": "ns/iter",
            "extra": "iterations: 14532\ncpu: 55859.75777594278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256328.84525590087,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 256309.27865908426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203325.34400979974,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 203315.8924205383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205544.34499397877,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 205539.1797346202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202089.0270270178,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202083.26220957862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515405.78281345294,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 515372.33666862966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4106714.2202644483,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4106376.651982376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3291455.338078087,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3291314.23487545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3289305.964539,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3289068.439716318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3272388.045936197,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3272134.9823321463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1882432.8252031496,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882311.3821138158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3196919.8551725387,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3196646.55172413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12073047.193182291,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12072272.727272706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5451905.009999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5451344.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15886339.044777062,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15885322.388059672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55046.86809999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55043.88999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293319.2579324494,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293300.85295121267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235187.0889192724,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 235167.3324213402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237320.91074883734,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 237304.39347886134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226346.32361516388,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 226327.61728067754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 536063.6175742379,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 536032.0544554439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4159005.8571431753,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4158792.4107142943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3354859.3068590374,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354663.8989169453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3342138.1187051614,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341940.2877697838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3334498.953571645,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3334302.4999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1941677.2943631902,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941545.5114822614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3245114.735191728,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244868.6411149753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12370563.800000662,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12369849.41176465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5410708.299999668,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5410377.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56891.26259542041,
            "unit": "ns/iter",
            "extra": "iterations: 14410\ncpu: 56890.48577376811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258806.69286577264,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 258798.88149939696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210874.48429951744,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 210866.13526569927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 213736.23917373258,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 213722.82229965128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201274.12801134397,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 201260.34482758574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 492856.56573700695,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 492819.5788275476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4137579.41592935,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4137277.433628317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3317849.9750892636,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3317728.1138790147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3313806.278571617,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3313578.214285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3286668.978798538,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3286454.7703180127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1924392.9028925588,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924288.4297520586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3226353.4270830816,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226132.9861111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6415.607023641409,
            "unit": "ns/iter",
            "extra": "iterations: 109345\ncpu: 6415.163930678106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36400.970508513186,
            "unit": "ns/iter",
            "extra": "iterations: 18446\ncpu: 36398.14593949873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29446.2733137347,
            "unit": "ns/iter",
            "extra": "iterations: 24492\ncpu: 29444.271598889354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29501.14484531639,
            "unit": "ns/iter",
            "extra": "iterations: 24502\ncpu: 29498.596032976944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22774.639502313446,
            "unit": "ns/iter",
            "extra": "iterations: 30702\ncpu: 22773.011530193206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139201.7904155808,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139190.73374428073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278583.6950298158,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 278560.39761431224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70862.42972780908,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 70854.45714863989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70806.58799150975,
            "unit": "ns/iter",
            "extra": "iterations: 9893\ncpu: 70803.14363691538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69947.49845047042,
            "unit": "ns/iter",
            "extra": "iterations: 10003\ncpu: 69943.46695991253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141899.75744681098,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 141886.2006079015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130614.28427905876,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130604.16744185975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44458.12793501695,
            "unit": "ns/iter",
            "extra": "iterations: 15758\ncpu: 44454.11219697964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220145.47608627568,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 220129.6030009359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177520.18287445154,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 177514.44809295473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174146.20582380187,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174141.93628670942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176648.28087901647,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176644.35463501007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 307693.3484183197,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307685.7205623864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1215228.0850694394,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215192.7083333312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011854.0028901212,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011849.2774566459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005908.3859397552,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005893.8307030201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 994161.2563739257,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994137.8186968901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649012.7890841312,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 649002.5901942744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 991843.6600566575,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991815.0141643113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45129.50474346185,
            "unit": "ns/iter",
            "extra": "iterations: 15495\ncpu: 45128.789932236556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220173.62811221465,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 220165.20642925097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180428.93767706573,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 180426.16533608155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177860.33138796446,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177852.42324283102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176854.4880080939,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 176849.55819237485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307126.44551843836,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307121.7047451686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1204397.9775861425,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1204380.8620689614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010062.0619596485,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010036.1671469809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1001032.7259683886,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1001015.2080344348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 994734.6529744819,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994719.6883852717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 651799.9364928828,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 651795.829383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989105.264124298,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989089.1242937838 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489555942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16052.264253498919,
            "unit": "ns/iter",
            "extra": "iterations: 43235\ncpu: 16052.184572684168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131976.36110245672,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 131967.004048583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247301.5650811863,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 247292.5092566221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361680.0284876394,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 361665.3540008377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476196.40602739336,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 476158.24657534267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 590848.5520331161,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 590825.0861474845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569446.9070000423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569384.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 665578.4817726639,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 665528.6633309504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750721.0131579787,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 750679.3585526318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12921.989625326718,
            "unit": "ns/iter",
            "extra": "iterations: 54074\ncpu: 12921.206124939927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10862.694516770222,
            "unit": "ns/iter",
            "extra": "iterations: 64524\ncpu: 10862.104023309168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11188.786132394218,
            "unit": "ns/iter",
            "extra": "iterations: 60818\ncpu: 11188.343911342037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10680.73177646905,
            "unit": "ns/iter",
            "extra": "iterations: 65602\ncpu: 10680.178957958577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18039.502754323334,
            "unit": "ns/iter",
            "extra": "iterations: 38848\ncpu: 18038.498764415148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55861.90428020861,
            "unit": "ns/iter",
            "extra": "iterations: 14532\ncpu: 55859.75777594278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256328.84525590087,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 256309.27865908426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203325.34400979974,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 203315.8924205383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205544.34499397877,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 205539.1797346202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202089.0270270178,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202083.26220957862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515405.78281345294,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 515372.33666862966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4106714.2202644483,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4106376.651982376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3291455.338078087,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3291314.23487545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3289305.964539,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3289068.439716318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3272388.045936197,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3272134.9823321463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1882432.8252031496,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882311.3821138158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3196919.8551725387,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3196646.55172413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12073047.193182291,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12072272.727272706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5451905.009999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5451344.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15886339.044777062,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15885322.388059672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55046.86809999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55043.88999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293319.2579324494,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293300.85295121267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235187.0889192724,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 235167.3324213402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237320.91074883734,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 237304.39347886134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226346.32361516388,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 226327.61728067754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 536063.6175742379,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 536032.0544554439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4159005.8571431753,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4158792.4107142943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3354859.3068590374,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354663.8989169453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3342138.1187051614,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341940.2877697838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3334498.953571645,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3334302.4999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1941677.2943631902,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941545.5114822614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3245114.735191728,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244868.6411149753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12370563.800000662,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12369849.41176465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5410708.299999668,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5410377.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56891.26259542041,
            "unit": "ns/iter",
            "extra": "iterations: 14410\ncpu: 56890.48577376811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258806.69286577264,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 258798.88149939696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210874.48429951744,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 210866.13526569927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 213736.23917373258,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 213722.82229965128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201274.12801134397,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 201260.34482758574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 492856.56573700695,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 492819.5788275476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4137579.41592935,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4137277.433628317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3317849.9750892636,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3317728.1138790147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3313806.278571617,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3313578.214285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3286668.978798538,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3286454.7703180127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1924392.9028925588,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924288.4297520586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3226353.4270830816,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226132.9861111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6415.607023641409,
            "unit": "ns/iter",
            "extra": "iterations: 109345\ncpu: 6415.163930678106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36400.970508513186,
            "unit": "ns/iter",
            "extra": "iterations: 18446\ncpu: 36398.14593949873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29446.2733137347,
            "unit": "ns/iter",
            "extra": "iterations: 24492\ncpu: 29444.271598889354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29501.14484531639,
            "unit": "ns/iter",
            "extra": "iterations: 24502\ncpu: 29498.596032976944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22774.639502313446,
            "unit": "ns/iter",
            "extra": "iterations: 30702\ncpu: 22773.011530193206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139201.7904155808,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139190.73374428073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278583.6950298158,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 278560.39761431224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70862.42972780908,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 70854.45714863989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70806.58799150975,
            "unit": "ns/iter",
            "extra": "iterations: 9893\ncpu: 70803.14363691538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69947.49845047042,
            "unit": "ns/iter",
            "extra": "iterations: 10003\ncpu: 69943.46695991253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141899.75744681098,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 141886.2006079015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130614.28427905876,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130604.16744185975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44458.12793501695,
            "unit": "ns/iter",
            "extra": "iterations: 15758\ncpu: 44454.11219697964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220145.47608627568,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 220129.6030009359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177520.18287445154,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 177514.44809295473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174146.20582380187,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174141.93628670942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176648.28087901647,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176644.35463501007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 307693.3484183197,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307685.7205623864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1215228.0850694394,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215192.7083333312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011854.0028901212,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011849.2774566459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005908.3859397552,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005893.8307030201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 994161.2563739257,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994137.8186968901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649012.7890841312,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 649002.5901942744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 991843.6600566575,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991815.0141643113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45129.50474346185,
            "unit": "ns/iter",
            "extra": "iterations: 15495\ncpu: 45128.789932236556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220173.62811221465,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 220165.20642925097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180428.93767706573,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 180426.16533608155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177860.33138796446,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177852.42324283102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176854.4880080939,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 176849.55819237485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307126.44551843836,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307121.7047451686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1204397.9775861425,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1204380.8620689614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010062.0619596485,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010036.1671469809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1001032.7259683886,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1001015.2080344348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 994734.6529744819,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994719.6883852717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 651799.9364928828,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 651795.829383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989105.264124298,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989089.1242937838 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489555942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16052.264253498919,
            "unit": "ns/iter",
            "extra": "iterations: 43235\ncpu: 16052.184572684168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131976.36110245672,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 131967.004048583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247301.5650811863,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 247292.5092566221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361680.0284876394,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 361665.3540008377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476196.40602739336,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 476158.24657534267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 590848.5520331161,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 590825.0861474845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569446.9070000423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569384.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 665578.4817726639,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 665528.6633309504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750721.0131579787,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 750679.3585526318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12921.989625326718,
            "unit": "ns/iter",
            "extra": "iterations: 54074\ncpu: 12921.206124939927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10862.694516770222,
            "unit": "ns/iter",
            "extra": "iterations: 64524\ncpu: 10862.104023309168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11188.786132394218,
            "unit": "ns/iter",
            "extra": "iterations: 60818\ncpu: 11188.343911342037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10680.73177646905,
            "unit": "ns/iter",
            "extra": "iterations: 65602\ncpu: 10680.178957958577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18039.502754323334,
            "unit": "ns/iter",
            "extra": "iterations: 38848\ncpu: 18038.498764415148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55861.90428020861,
            "unit": "ns/iter",
            "extra": "iterations: 14532\ncpu: 55859.75777594278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256328.84525590087,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 256309.27865908426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203325.34400979974,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 203315.8924205383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205544.34499397877,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 205539.1797346202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202089.0270270178,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202083.26220957862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515405.78281345294,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 515372.33666862966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4106714.2202644483,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4106376.651982376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3291455.338078087,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3291314.23487545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3289305.964539,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3289068.439716318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3272388.045936197,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3272134.9823321463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1882432.8252031496,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882311.3821138158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3196919.8551725387,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3196646.55172413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12073047.193182291,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12072272.727272706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5451905.009999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5451344.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15886339.044777062,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15885322.388059672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55046.86809999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55043.88999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293319.2579324494,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293300.85295121267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235187.0889192724,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 235167.3324213402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237320.91074883734,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 237304.39347886134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226346.32361516388,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 226327.61728067754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 536063.6175742379,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 536032.0544554439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4159005.8571431753,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4158792.4107142943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3354859.3068590374,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354663.8989169453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3342138.1187051614,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341940.2877697838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3334498.953571645,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3334302.4999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1941677.2943631902,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941545.5114822614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3245114.735191728,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244868.6411149753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12370563.800000662,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12369849.41176465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5410708.299999668,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5410377.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56891.26259542041,
            "unit": "ns/iter",
            "extra": "iterations: 14410\ncpu: 56890.48577376811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258806.69286577264,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 258798.88149939696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210874.48429951744,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 210866.13526569927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 213736.23917373258,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 213722.82229965128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201274.12801134397,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 201260.34482758574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 492856.56573700695,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 492819.5788275476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4137579.41592935,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4137277.433628317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3317849.9750892636,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3317728.1138790147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3313806.278571617,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3313578.214285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3286668.978798538,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3286454.7703180127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1924392.9028925588,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924288.4297520586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3226353.4270830816,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226132.9861111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6415.607023641409,
            "unit": "ns/iter",
            "extra": "iterations: 109345\ncpu: 6415.163930678106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36400.970508513186,
            "unit": "ns/iter",
            "extra": "iterations: 18446\ncpu: 36398.14593949873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29446.2733137347,
            "unit": "ns/iter",
            "extra": "iterations: 24492\ncpu: 29444.271598889354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29501.14484531639,
            "unit": "ns/iter",
            "extra": "iterations: 24502\ncpu: 29498.596032976944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22774.639502313446,
            "unit": "ns/iter",
            "extra": "iterations: 30702\ncpu: 22773.011530193206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139201.7904155808,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139190.73374428073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278583.6950298158,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 278560.39761431224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70862.42972780908,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 70854.45714863989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70806.58799150975,
            "unit": "ns/iter",
            "extra": "iterations: 9893\ncpu: 70803.14363691538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69947.49845047042,
            "unit": "ns/iter",
            "extra": "iterations: 10003\ncpu: 69943.46695991253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141899.75744681098,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 141886.2006079015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130614.28427905876,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130604.16744185975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44458.12793501695,
            "unit": "ns/iter",
            "extra": "iterations: 15758\ncpu: 44454.11219697964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220145.47608627568,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 220129.6030009359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177520.18287445154,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 177514.44809295473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174146.20582380187,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174141.93628670942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176648.28087901647,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176644.35463501007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 307693.3484183197,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307685.7205623864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1215228.0850694394,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215192.7083333312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011854.0028901212,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011849.2774566459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005908.3859397552,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005893.8307030201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 994161.2563739257,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994137.8186968901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649012.7890841312,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 649002.5901942744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 991843.6600566575,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991815.0141643113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45129.50474346185,
            "unit": "ns/iter",
            "extra": "iterations: 15495\ncpu: 45128.789932236556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220173.62811221465,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 220165.20642925097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180428.93767706573,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 180426.16533608155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177860.33138796446,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177852.42324283102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176854.4880080939,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 176849.55819237485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307126.44551843836,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307121.7047451686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1204397.9775861425,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1204380.8620689614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010062.0619596485,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010036.1671469809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1001032.7259683886,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1001015.2080344348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 994734.6529744819,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994719.6883852717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 651799.9364928828,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 651795.829383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989105.264124298,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989089.1242937838 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489555942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16052.264253498919,
            "unit": "ns/iter",
            "extra": "iterations: 43235\ncpu: 16052.184572684168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131976.36110245672,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 131967.004048583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247301.5650811863,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 247292.5092566221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361680.0284876394,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 361665.3540008377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476196.40602739336,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 476158.24657534267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 590848.5520331161,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 590825.0861474845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569446.9070000423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569384.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 665578.4817726639,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 665528.6633309504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750721.0131579787,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 750679.3585526318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12921.989625326718,
            "unit": "ns/iter",
            "extra": "iterations: 54074\ncpu: 12921.206124939927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10862.694516770222,
            "unit": "ns/iter",
            "extra": "iterations: 64524\ncpu: 10862.104023309168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11188.786132394218,
            "unit": "ns/iter",
            "extra": "iterations: 60818\ncpu: 11188.343911342037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10680.73177646905,
            "unit": "ns/iter",
            "extra": "iterations: 65602\ncpu: 10680.178957958577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18039.502754323334,
            "unit": "ns/iter",
            "extra": "iterations: 38848\ncpu: 18038.498764415148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55861.90428020861,
            "unit": "ns/iter",
            "extra": "iterations: 14532\ncpu: 55859.75777594278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256328.84525590087,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 256309.27865908426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203325.34400979974,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 203315.8924205383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205544.34499397877,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 205539.1797346202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202089.0270270178,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202083.26220957862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515405.78281345294,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 515372.33666862966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4106714.2202644483,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4106376.651982376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3291455.338078087,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3291314.23487545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3289305.964539,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3289068.439716318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3272388.045936197,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3272134.9823321463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1882432.8252031496,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882311.3821138158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3196919.8551725387,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3196646.55172413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12073047.193182291,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12072272.727272706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5451905.009999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5451344.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15886339.044777062,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15885322.388059672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55046.86809999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55043.88999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293319.2579324494,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293300.85295121267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235187.0889192724,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 235167.3324213402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237320.91074883734,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 237304.39347886134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226346.32361516388,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 226327.61728067754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 536063.6175742379,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 536032.0544554439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4159005.8571431753,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4158792.4107142943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3354859.3068590374,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354663.8989169453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3342138.1187051614,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341940.2877697838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3334498.953571645,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3334302.4999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1941677.2943631902,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941545.5114822614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3245114.735191728,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244868.6411149753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12370563.800000662,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12369849.41176465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5410708.299999668,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5410377.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56891.26259542041,
            "unit": "ns/iter",
            "extra": "iterations: 14410\ncpu: 56890.48577376811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258806.69286577264,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 258798.88149939696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210874.48429951744,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 210866.13526569927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 213736.23917373258,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 213722.82229965128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201274.12801134397,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 201260.34482758574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 492856.56573700695,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 492819.5788275476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4137579.41592935,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4137277.433628317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3317849.9750892636,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3317728.1138790147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3313806.278571617,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3313578.214285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3286668.978798538,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3286454.7703180127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1924392.9028925588,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924288.4297520586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3226353.4270830816,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226132.9861111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6415.607023641409,
            "unit": "ns/iter",
            "extra": "iterations: 109345\ncpu: 6415.163930678106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36400.970508513186,
            "unit": "ns/iter",
            "extra": "iterations: 18446\ncpu: 36398.14593949873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29446.2733137347,
            "unit": "ns/iter",
            "extra": "iterations: 24492\ncpu: 29444.271598889354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29501.14484531639,
            "unit": "ns/iter",
            "extra": "iterations: 24502\ncpu: 29498.596032976944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22774.639502313446,
            "unit": "ns/iter",
            "extra": "iterations: 30702\ncpu: 22773.011530193206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139201.7904155808,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139190.73374428073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278583.6950298158,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 278560.39761431224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70862.42972780908,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 70854.45714863989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70806.58799150975,
            "unit": "ns/iter",
            "extra": "iterations: 9893\ncpu: 70803.14363691538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69947.49845047042,
            "unit": "ns/iter",
            "extra": "iterations: 10003\ncpu: 69943.46695991253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141899.75744681098,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 141886.2006079015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130614.28427905876,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130604.16744185975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44458.12793501695,
            "unit": "ns/iter",
            "extra": "iterations: 15758\ncpu: 44454.11219697964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220145.47608627568,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 220129.6030009359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177520.18287445154,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 177514.44809295473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174146.20582380187,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174141.93628670942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176648.28087901647,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176644.35463501007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 307693.3484183197,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307685.7205623864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1215228.0850694394,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215192.7083333312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011854.0028901212,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011849.2774566459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005908.3859397552,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005893.8307030201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 994161.2563739257,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994137.8186968901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649012.7890841312,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 649002.5901942744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 991843.6600566575,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991815.0141643113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45129.50474346185,
            "unit": "ns/iter",
            "extra": "iterations: 15495\ncpu: 45128.789932236556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220173.62811221465,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 220165.20642925097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180428.93767706573,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 180426.16533608155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177860.33138796446,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177852.42324283102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176854.4880080939,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 176849.55819237485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307126.44551843836,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307121.7047451686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1204397.9775861425,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1204380.8620689614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010062.0619596485,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010036.1671469809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1001032.7259683886,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1001015.2080344348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 994734.6529744819,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994719.6883852717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 651799.9364928828,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 651795.829383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989105.264124298,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989089.1242937838 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489555942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16052.264253498919,
            "unit": "ns/iter",
            "extra": "iterations: 43235\ncpu: 16052.184572684168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131976.36110245672,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 131967.004048583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247301.5650811863,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 247292.5092566221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 361680.0284876394,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 361665.3540008377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476196.40602739336,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 476158.24657534267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 590848.5520331161,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 590825.0861474845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569446.9070000423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569384.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 665578.4817726639,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 665528.6633309504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750721.0131579787,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 750679.3585526318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12921.989625326718,
            "unit": "ns/iter",
            "extra": "iterations: 54074\ncpu: 12921.206124939927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10862.694516770222,
            "unit": "ns/iter",
            "extra": "iterations: 64524\ncpu: 10862.104023309168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11188.786132394218,
            "unit": "ns/iter",
            "extra": "iterations: 60818\ncpu: 11188.343911342037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10680.73177646905,
            "unit": "ns/iter",
            "extra": "iterations: 65602\ncpu: 10680.178957958577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18039.502754323334,
            "unit": "ns/iter",
            "extra": "iterations: 38848\ncpu: 18038.498764415148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55861.90428020861,
            "unit": "ns/iter",
            "extra": "iterations: 14532\ncpu: 55859.75777594278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256328.84525590087,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 256309.27865908426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203325.34400979974,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 203315.8924205383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205544.34499397877,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 205539.1797346202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202089.0270270178,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202083.26220957862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515405.78281345294,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 515372.33666862966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4106714.2202644483,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4106376.651982376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3291455.338078087,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3291314.23487545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3289305.964539,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3289068.439716318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3272388.045936197,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3272134.9823321463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1882432.8252031496,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882311.3821138158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3196919.8551725387,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3196646.55172413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12073047.193182291,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12072272.727272706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5451905.009999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5451344.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15886339.044777062,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15885322.388059672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55046.86809999839,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55043.88999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293319.2579324494,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 293300.85295121267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235187.0889192724,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 235167.3324213402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237320.91074883734,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 237304.39347886134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226346.32361516388,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 226327.61728067754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 536063.6175742379,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 536032.0544554439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4159005.8571431753,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4158792.4107142943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3354859.3068590374,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354663.8989169453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3342138.1187051614,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341940.2877697838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3334498.953571645,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3334302.4999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1941677.2943631902,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941545.5114822614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3245114.735191728,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244868.6411149753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12370563.800000662,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12369849.41176465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5410708.299999668,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5410377.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56891.26259542041,
            "unit": "ns/iter",
            "extra": "iterations: 14410\ncpu: 56890.48577376811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258806.69286577264,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 258798.88149939696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 210874.48429951744,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 210866.13526569927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 213736.23917373258,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 213722.82229965128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201274.12801134397,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 201260.34482758574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 492856.56573700695,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 492819.5788275476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4137579.41592935,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4137277.433628317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3317849.9750892636,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3317728.1138790147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3313806.278571617,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3313578.214285709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3286668.978798538,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3286454.7703180127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1924392.9028925588,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924288.4297520586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3226353.4270830816,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226132.9861111115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6415.607023641409,
            "unit": "ns/iter",
            "extra": "iterations: 109345\ncpu: 6415.163930678106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36400.970508513186,
            "unit": "ns/iter",
            "extra": "iterations: 18446\ncpu: 36398.14593949873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29446.2733137347,
            "unit": "ns/iter",
            "extra": "iterations: 24492\ncpu: 29444.271598889354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29501.14484531639,
            "unit": "ns/iter",
            "extra": "iterations: 24502\ncpu: 29498.596032976944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22774.639502313446,
            "unit": "ns/iter",
            "extra": "iterations: 30702\ncpu: 22773.011530193206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139201.7904155808,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139190.73374428073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278583.6950298158,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 278560.39761431224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70862.42972780908,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 70854.45714863989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70806.58799150975,
            "unit": "ns/iter",
            "extra": "iterations: 9893\ncpu: 70803.14363691538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69947.49845047042,
            "unit": "ns/iter",
            "extra": "iterations: 10003\ncpu: 69943.46695991253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141899.75744681098,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 141886.2006079015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130614.28427905876,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130604.16744185975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44458.12793501695,
            "unit": "ns/iter",
            "extra": "iterations: 15758\ncpu: 44454.11219697964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220145.47608627568,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 220129.6030009359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177520.18287445154,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 177514.44809295473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174146.20582380187,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174141.93628670942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176648.28087901647,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176644.35463501007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 307693.3484183197,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307685.7205623864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1215228.0850694394,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215192.7083333312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011854.0028901212,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011849.2774566459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005908.3859397552,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005893.8307030201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 994161.2563739257,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994137.8186968901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649012.7890841312,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 649002.5901942744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 991843.6600566575,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991815.0141643113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45129.50474346185,
            "unit": "ns/iter",
            "extra": "iterations: 15495\ncpu: 45128.789932236556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220173.62811221465,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 220165.20642925097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180428.93767706573,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 180426.16533608155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177860.33138796446,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177852.42324283102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176854.4880080939,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 176849.55819237485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307126.44551843836,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307121.7047451686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1204397.9775861425,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1204380.8620689614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010062.0619596485,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010036.1671469809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1001032.7259683886,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1001015.2080344348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 994734.6529744819,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994719.6883852717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 651799.9364928828,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 651795.829383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989105.264124298,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989089.1242937838 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492185051,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16931.23480394382,
            "unit": "ns/iter",
            "extra": "iterations: 41162\ncpu: 16930.85370001458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 139622.24740054898,
            "unit": "ns/iter",
            "extra": "iterations: 6059\ncpu: 139605.80953952798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 262862.5013749007,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 262848.94592117326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 385480.6286223594,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 385462.01515827025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 506611.2087463624,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 506585.01457725954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 508411.6460000132,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508407.89999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 604016.4259999301,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603971.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 702731.4988611205,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 702676.233864844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 795429.7786391587,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 795381.653746771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13331.140500274707,
            "unit": "ns/iter",
            "extra": "iterations: 52491\ncpu: 13330.188032234097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11039.252839069759,
            "unit": "ns/iter",
            "extra": "iterations: 63313\ncpu: 11038.946187986667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11004.95246700231,
            "unit": "ns/iter",
            "extra": "iterations: 63640\ncpu: 11004.660590823381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10982.41017321083,
            "unit": "ns/iter",
            "extra": "iterations: 63795\ncpu: 10981.769731170165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18148.549703515786,
            "unit": "ns/iter",
            "extra": "iterations: 38619\ncpu: 18147.468862477046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52999.65079999538,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52995.450000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256577.4439098024,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 256561.98496240607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202954.59506874593,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202944.6183025131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206294.77772396174,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 206283.55932203366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201974.6776703513,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 201960.99976420632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 507008.6426076874,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 506981.0826542496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4282461.041474634,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4281934.562211982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3447515.4237915473,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3447313.3828996215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3493179.5639095996,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3492985.714285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3426737.0516604,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3426557.5645756363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1953675.0295983015,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1953561.3107822435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3351837.4729240416,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3351603.610108302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12544226.317647692,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12543528.235294085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5682916.599999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5682788.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16298438.107691465,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16297198.46153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56470.62179999694,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56465.47999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 298706.5083391443,
            "unit": "ns/iter",
            "extra": "iterations: 2878\ncpu: 298686.9353717862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232967.23204569134,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 232953.04678998882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235356.3107142598,
            "unit": "ns/iter",
            "extra": "iterations: 3640\ncpu: 235351.75824175877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226003.90942600215,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 226002.02738283228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 533270.0369913602,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 533261.2207151644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4364164.356807742,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4364084.507042249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3515693.4924243167,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3515621.9696969665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3543967.984790785,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3543847.14828899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3480831.3408236555,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3480803.3707865225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1999145.6918103169,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1999104.0948275852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3407346.1360293324,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3407261.764705888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12857147.867469186,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12856551.807228941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5637882.1599992085,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5637752.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53490.26549999962,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53489.84999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 254640.39184766993,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 254636.2392145186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202875.00166465962,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 202871.48632580249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 214618.68226167077,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 214612.18413810304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 203281.9770279818,
            "unit": "ns/iter",
            "extra": "iterations: 4179\ncpu: 203277.8415888964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 486151.7560426899,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 486125.6885890961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4343350.789719497,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4343140.654205605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3491273.0112360525,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3491044.9438202134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3530628.6325757783,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3530429.545454552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3448702.6333332933,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3448532.5925926017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1994267.9012875925,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1994163.0901287524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3396774.8795616995,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3396599.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6439.346019009654,
            "unit": "ns/iter",
            "extra": "iterations: 108679\ncpu: 6438.744375638386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36209.15940130043,
            "unit": "ns/iter",
            "extra": "iterations: 19843\ncpu: 36206.66229904739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28122.09075225695,
            "unit": "ns/iter",
            "extra": "iterations: 24925\ncpu: 28120.24473420256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27714.31538735834,
            "unit": "ns/iter",
            "extra": "iterations: 25261\ncpu: 27712.735046118505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22781.598052940655,
            "unit": "ns/iter",
            "extra": "iterations: 30713\ncpu: 22780.158239182067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 137866.8985450182,
            "unit": "ns/iter",
            "extra": "iterations: 5086\ncpu: 137858.82815572125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 293110.9802604142,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 293086.77026459546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73256.82386184712,
            "unit": "ns/iter",
            "extra": "iterations: 9555\ncpu: 73255.56253270578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73755.76321330032,
            "unit": "ns/iter",
            "extra": "iterations: 9498\ncpu: 73754.36934091387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73440.74218586071,
            "unit": "ns/iter",
            "extra": "iterations: 9534\ncpu: 73434.70736312105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 139473.48736318288,
            "unit": "ns/iter",
            "extra": "iterations: 5025\ncpu: 139470.98507462646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 136553.0300781348,
            "unit": "ns/iter",
            "extra": "iterations: 5120\ncpu: 136544.51171875026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45101.317332471495,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 45100.850515463535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215473.2383005038,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 215468.3805418684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177173.44236129298,
            "unit": "ns/iter",
            "extra": "iterations: 3947\ncpu: 177169.06511274312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175462.4586673329,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 175458.34168336695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177644.44427519108,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 177641.3048997205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 307911.6833994035,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 307902.2457067381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1261383.8090089245,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1261358.9189189386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1049456.4170403872,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1049447.9820627745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1045325.9880419275,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1045293.7219730793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1034929.596750484,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1034910.9305760843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 664855.6866096649,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 664833.9981006638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1028646.5823529557,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1028614.9999999928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45097.8230185281,
            "unit": "ns/iter",
            "extra": "iterations: 15544\ncpu: 45094.89191971227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220042.25212464965,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 220028.95813660766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179129.73653155484,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179118.36839404746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178330.30498083713,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 178324.46998722645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179009.51276812286,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 179002.80898876395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303269.1177998806,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 303266.4789952357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1266661.3869800323,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1266577.2151898805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1052191.8569276615,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1052128.6144578303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1050057.2110778918,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1049973.6526946109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1038424.5934716909,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1038344.3620177936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 667974.2709923913,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 667944.4656488545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1033074.3112094993,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1033042.0353982445 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702503260804,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16445.92042006406,
            "unit": "ns/iter",
            "extra": "iterations: 42184\ncpu: 16445.10952019723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 134549.69353044295,
            "unit": "ns/iter",
            "extra": "iterations: 6291\ncpu: 134543.76092831028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 253263.79028956793,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 253254.5773618017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 370500.86601027683,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 370484.67465753405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 487924.3842195266,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 487900.857632933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 603377.6773296064,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 603362.6564673154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 580004.3390000269,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579970.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 673195.2676878104,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 673153.7563822032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 766613.0836092342,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 766594.122516556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13177.924267530047,
            "unit": "ns/iter",
            "extra": "iterations: 53108\ncpu: 13177.018528281971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10976.68588438068,
            "unit": "ns/iter",
            "extra": "iterations: 63830\ncpu: 10976.324612251277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10908.700418201432,
            "unit": "ns/iter",
            "extra": "iterations: 64323\ncpu: 10908.18525255352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11019.83280866288,
            "unit": "ns/iter",
            "extra": "iterations: 63532\ncpu: 11019.623182018508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18556.28421330503,
            "unit": "ns/iter",
            "extra": "iterations: 37880\ncpu: 18555.879091869017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55494.992875737866,
            "unit": "ns/iter",
            "extra": "iterations: 14598\ncpu: 55494.06768050417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252277.3264705921,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 252264.3823529414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200519.6946745548,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 200504.16568047364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203372.50143472073,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 203352.77379244397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196494.72508670422,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 196482.82080924913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 508308.6019641764,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 508245.92720970605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4182969.681614146,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4182891.928251112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3395260.2554744687,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3395146.350364955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3400561.2919709147,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3400361.6788321147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3360560.4548737463,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3360440.433212991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1950417.448421089,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1950282.73684211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3284982.411347544,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3284878.3687943234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12466987.835294088,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12466448.235294124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5746345.309999582,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5746095.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16270850.19999955,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16269975.384615358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55242.401999998954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55241.25000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291347.9843803015,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 291319.6264855695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233379.43527814484,
            "unit": "ns/iter",
            "extra": "iterations: 3685\ncpu: 233363.33785617494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232704.99729583928,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 232685.3704705241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221821.04630593705,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 221806.7377731541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 531643.4834558166,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 531584.436274511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4256912.799086916,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4256491.78082194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3453339.100372019,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3453126.7657992346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3470772.669144942,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3470492.1933085485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3402305.737226361,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3402071.532846714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2007046.2354211882,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2006875.8099352065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3354348.6654678076,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3353914.7482014373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12829456.89156651,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12828412.048192771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5641493.850000642,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5641109.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56217.24593203357,
            "unit": "ns/iter",
            "extra": "iterations: 14565\ncpu: 56212.24167524862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 245539.6483075201,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 245514.85943775074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202239.72605001056,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 202233.93109957484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208497.1575980358,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 208485.66176470477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198553.40116279433,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 198547.32558139449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 479168.6374172011,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 479139.62472406134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4248883.625571053,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4248756.6210045535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3391918.3745456394,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3391820.3636363586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3442870.5592593662,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3442744.444444446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3352814.4676259267,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3352724.100719413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1984414.640425586,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984343.8297872269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3320910.3167258673,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3320765.4804270505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6420.1037878717425,
            "unit": "ns/iter",
            "extra": "iterations: 108953\ncpu: 6419.891145723373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36207.95871985531,
            "unit": "ns/iter",
            "extra": "iterations: 19404\ncpu: 36207.76643990902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28416.79678232013,
            "unit": "ns/iter",
            "extra": "iterations: 24614\ncpu: 28416.153408629376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27207.721609167635,
            "unit": "ns/iter",
            "extra": "iterations: 25827\ncpu: 27207.21725326221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22629.190107287915,
            "unit": "ns/iter",
            "extra": "iterations: 30851\ncpu: 22628.462610612325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 137443.5832354242,
            "unit": "ns/iter",
            "extra": "iterations: 5106\ncpu: 137441.38268703464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 286915.3011899928,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 286903.4878949529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72253.13608310024,
            "unit": "ns/iter",
            "extra": "iterations: 9722\ncpu: 72250.69944455847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71930.19213794653,
            "unit": "ns/iter",
            "extra": "iterations: 9743\ncpu: 71924.99230216631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71261.11500458277,
            "unit": "ns/iter",
            "extra": "iterations: 9817\ncpu: 71258.25608638123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 139149.68701531197,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 139148.93617021356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121038.7293323923,
            "unit": "ns/iter",
            "extra": "iterations: 5782\ncpu: 121035.36838464206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45109.585115982234,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 45107.92525773184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 216028.0215982744,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 216020.33323048416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178928.80986274735,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 178920.1321809867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175864.50729742798,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 175852.81831907417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176577.81418833713,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 176571.32037364293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 313403.24394620396,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 313378.20627802605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1239625.5795052983,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1239581.4487632504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1030683.2272727351,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1030630.0586510266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1027741.5117301806,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1027687.5366568861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1019207.8432510574,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1019189.2597968058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 665837.1958175205,
            "unit": "ns/iter",
            "extra": "iterations: 1052\ncpu: 665804.4676805984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1013210.6324168982,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1013174.9638205528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44696.2873970081,
            "unit": "ns/iter",
            "extra": "iterations: 15536\ncpu: 44694.52883625119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215117.62976628504,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 215113.77613776203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178667.3143659084,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 178654.27404950184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177821.3190416056,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 177812.58511980003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177216.43847532084,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 177202.45587106794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 314407.34858676855,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 314401.5253476889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1236736.1610620366,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1236606.5486725774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1033270.8777615731,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1033211.6347570143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1023098.8861313185,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1023093.2846715351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1011466.0997109072,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011389.5953757191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 663446.2881516871,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 663432.7962085272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1014588.8815028581,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1014497.2543352552 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1705574896988,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15955.789836230411,
            "unit": "ns/iter",
            "extra": "iterations: 43842\ncpu: 15952.853428219516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129190.33659066014,
            "unit": "ns/iter",
            "extra": "iterations: 6447\ncpu: 129187.94788273617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 242893.7815737832,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 242863.14757770931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 351922.6233183833,
            "unit": "ns/iter",
            "extra": "iterations: 2453\ncpu: 351890.50142682437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 467566.1986044103,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 467516.69350509916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 579404.8476380244,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 579379.8403193613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 554521.5090000397,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554498.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 643416.1829999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643358.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 734213.0872323558,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 734151.387787471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13472.048513446742,
            "unit": "ns/iter",
            "extra": "iterations: 54253\ncpu: 13470.530661898883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10723.262025199958,
            "unit": "ns/iter",
            "extra": "iterations: 65238\ncpu: 10722.384193261614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10607.222022180085,
            "unit": "ns/iter",
            "extra": "iterations: 66097\ncpu: 10607.124377808379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10658.481590843769,
            "unit": "ns/iter",
            "extra": "iterations: 65701\ncpu: 10658.387239159225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18089.328811901552,
            "unit": "ns/iter",
            "extra": "iterations: 38852\ncpu: 18088.983836095962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56298.452031054265,
            "unit": "ns/iter",
            "extra": "iterations: 14426\ncpu: 56295.91709413563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257247.37659259146,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 257231.05185185163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200755.40212014853,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 200741.69611307385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201431.31663516743,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 201415.83175803392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197148.49501737967,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 197130.03476245652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 517792.1607565164,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 517738.7115839245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4012010.4329002183,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4011527.2727272836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3204148.2179929866,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3203865.0519031207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3219634.1388887917,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3219462.8472222122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3197936.179930827,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3197688.9273356446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1876382.0426829902,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1876236.3821138265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3151103.2466215584,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3144580.4054054124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12041418.897727463,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12040682.954545472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5359911.300000135,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5359197.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15860410.19403037,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15859105.970149292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55175.442500001285,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55172.08999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290326.991889159,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 290301.38560324366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228514.71173332052,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 228496.9066666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 229673.2389142668,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 229651.1152915893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223096.31865555383,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 223079.20792079205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 540599.080524336,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 540548.1273408241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4082928.0704846224,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4082561.233480196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3262452.8912281264,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3262190.8771929746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3285663.6373239816,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3285370.070422514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3245124.2222223524,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3244774.305555574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1929686.4116423514,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1929508.3160083217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3205476.474226881,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3205158.762886587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12348898.662790673,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12347639.53488366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5533369.170000242,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5532848.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56899.66126238196,
            "unit": "ns/iter",
            "extra": "iterations: 14433\ncpu: 56898.018429986645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 246687.44444445064,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 246675.9018759014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201202.23147711312,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 201191.48183105365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208464.34432588945,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 208441.1493695435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198744.9214085741,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 198725.7695895529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 491513.3594548446,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 491502.89608177496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4070826.602620146,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4070690.393013121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3229709.2802768312,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3229649.826989608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3247261.090592206,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3246989.198606288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3225853.6332179974,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3225591.349480981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1907050.4938523937,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1906881.9672131198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3179338.430034069,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3179017.406143349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6427.125099828257,
            "unit": "ns/iter",
            "extra": "iterations: 108937\ncpu: 6426.457493780831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36271.17020395378,
            "unit": "ns/iter",
            "extra": "iterations: 19318\ncpu: 36267.20157366199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27508.478206334185,
            "unit": "ns/iter",
            "extra": "iterations: 25512\ncpu: 27507.725776105122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27186.715017662038,
            "unit": "ns/iter",
            "extra": "iterations: 25763\ncpu: 27185.906144470657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22517.201839286674,
            "unit": "ns/iter",
            "extra": "iterations: 31099\ncpu: 22516.585742306725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 142341.09428629337,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 142336.64445790273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262431.7801869055,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 262410.8037383196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69524.34404443133,
            "unit": "ns/iter",
            "extra": "iterations: 10083\ncpu: 69521.10482991266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69701.21597691801,
            "unit": "ns/iter",
            "extra": "iterations: 10052\ncpu: 69698.49781138047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69608.0901330139,
            "unit": "ns/iter",
            "extra": "iterations: 10074\ncpu: 69601.4989080804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 128947.50165928822,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 128934.75294985167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129560.83512014584,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129546.26617375185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43882.26254463561,
            "unit": "ns/iter",
            "extra": "iterations: 15963\ncpu: 43876.345298502856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 214026.93013234905,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 214009.20283163962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175180.41664583035,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 175154.9362659313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172336.50147419932,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 172306.78132678085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175948.25665494453,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 175922.27523857134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 308466.3612334814,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 308447.7973568272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1192610.8313458487,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1192521.1243611788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 992148.072237982,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 992129.8866855638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 987789.6935028478,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 987756.9209039607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 983783.538028169,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 983753.8028169029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649469.5730128976,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 649454.6210720907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 975859.4777159281,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975828.6908077917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44091.53833081311,
            "unit": "ns/iter",
            "extra": "iterations: 15888\ncpu: 44089.866565961915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 216093.558705705,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 216083.48228043152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177476.19040365453,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 177472.70880934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177137.5263557976,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 177133.12214900975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176016.14580709572,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 176013.19566859887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307306.2051056322,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 307303.38908450695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1190433.4395796743,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1190422.0665498942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 982620.9116410097,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 982586.8162692802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 985683.1181434365,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 985641.772151907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 974337.187239949,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 974305.2704577025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 649695.1299906798,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 649678.6443825469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 975293.9735743791,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 975285.5354659135 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772691102,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16440.511557220576,
            "unit": "ns/iter",
            "extra": "iterations: 42441\ncpu: 16439.80820433072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132943.2569814894,
            "unit": "ns/iter",
            "extra": "iterations: 6374\ncpu: 132928.30247882023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 249396.68782308226,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 249387.0763928776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 378295.8463157947,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 378286.56842105254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 479597.2197680641,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 479581.50193263387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 594406.6135895445,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 594389.8421413868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 572208.3360000169,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572202.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 664579.4753042391,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 664564.495347172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 762537.1010595246,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 762516.6259168711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13002.913074217317,
            "unit": "ns/iter",
            "extra": "iterations: 53747\ncpu: 13002.775968891294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10770.186831782677,
            "unit": "ns/iter",
            "extra": "iterations: 65005\ncpu: 10769.954618875483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10800.984621560137,
            "unit": "ns/iter",
            "extra": "iterations: 64766\ncpu: 10800.707161164824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10740.266537800968,
            "unit": "ns/iter",
            "extra": "iterations: 65184\ncpu: 10739.997545409933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18097.639186183256,
            "unit": "ns/iter",
            "extra": "iterations: 38682\ncpu: 18097.055478000148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56778.76797043441,
            "unit": "ns/iter",
            "extra": "iterations: 14343\ncpu: 56777.382695391505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 258800.45616686577,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 258792.41233373643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 206155.49939452356,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 206153.2332283843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 208761.81268364997,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 208755.16650342828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201133.0165719759,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 201131.60511363597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 505530.352838956,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 505532.32908458693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4102232.2555064154,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4102196.9162995573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3305156.5357145104,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3305147.142857136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3366629.5652173394,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3366601.0869565206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3305646.4341637096,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3305660.1423487593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1948797.8252630597,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1948802.1052631596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3252750.101045301,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3252705.5749128894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12362973.011627853,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12363040.697674429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5623973.369999931,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5624034.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16148781.72727279,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16148528.787878808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55392.10599999933,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55392.15000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 305511.5893616793,
            "unit": "ns/iter",
            "extra": "iterations: 2820\ncpu: 305510.4964539008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237640.49058695012,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 237643.2170542629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 239356.672803346,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 239356.9316596915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226904.37773042347,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 226902.07778369705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 533827.549538448,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 533825.1076923064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4184070.9910311815,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4184002.2421524483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3378293.1527271518,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3378305.454545434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3428165.8492649486,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3428179.4117646995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3344620.73021564,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3344627.338129485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1990909.5333332515,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1990906.881720442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3300326.6985812346,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3300298.58156029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12753409.90361453,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12753426.506024173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5508173.519999674,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5508012.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50218.761600001475,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50218.13000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 256587.9251497126,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 256587.00598802583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208087.7583434796,
            "unit": "ns/iter",
            "extra": "iterations: 4105\ncpu: 208090.10962241187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 212799.93482585382,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 212800.5970149262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199392.4063514123,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 199391.0987482611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 487680.1702246876,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 487666.7415730348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4169831.170403461,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4169877.1300448393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3313925.1387900235,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3313862.6334519573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3385666.7163635474,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3385658.909090911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3307232.1850532587,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3307270.1067615724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1961493.7202506633,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1961483.7160751526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3259614.7719296073,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3259650.1754385913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6401.402487389563,
            "unit": "ns/iter",
            "extra": "iterations: 109432\ncpu: 6401.378024709369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36730.74072372897,
            "unit": "ns/iter",
            "extra": "iterations: 19593\ncpu: 36730.84264788438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29455.29325420192,
            "unit": "ns/iter",
            "extra": "iterations: 25275\ncpu: 29454.749752720076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29386.365255843906,
            "unit": "ns/iter",
            "extra": "iterations: 23745\ncpu: 29386.708780796078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22721.688348378982,
            "unit": "ns/iter",
            "extra": "iterations: 30794\ncpu: 22721.53666298644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 138658.41089897888,
            "unit": "ns/iter",
            "extra": "iterations: 5028\ncpu: 138660.06364359448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 279760.8670127433,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 279754.11341853265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70630.72628698511,
            "unit": "ns/iter",
            "extra": "iterations: 9868\ncpu: 70630.9991892984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71163.51337877901,
            "unit": "ns/iter",
            "extra": "iterations: 9829\ncpu: 71163.68908332505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69674.32041446822,
            "unit": "ns/iter",
            "extra": "iterations: 10037\ncpu: 69674.54418650964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137819.89685038372,
            "unit": "ns/iter",
            "extra": "iterations: 5080\ncpu: 137818.97637795334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132019.51676082233,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 132017.00564971886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43886.287450659715,
            "unit": "ns/iter",
            "extra": "iterations: 15961\ncpu: 43886.04097487641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 212512.3825849515,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 212509.46601941658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171188.04921643576,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 171187.51224289773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170457.0795509883,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 170456.14934114303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171070.09667153863,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 171069.67694566713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304975.03141132666,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 304968.02925990045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1210166.423875449,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1210180.27681661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1005255.0933908569,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1005266.2356321729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1009101.9496403598,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1009091.5107913777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 997464.3347578276,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 997475.6410256432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 655508.6157450436,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 655498.3130271795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 995716.9032717292,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 995718.0654338512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44523.5607245476,
            "unit": "ns/iter",
            "extra": "iterations: 14961\ncpu: 44522.05066506288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 211727.69409984985,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211723.38880484184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173804.68380524107,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 173798.98161947372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173286.2490687661,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 173284.40526446473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173630.68462678944,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 173632.69896193864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305886.75591583387,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 305886.3277826489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1207390.3241379224,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1207354.8275862013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1006121.9410920527,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1006110.344827588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1007551.1709769005,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1007563.0747126447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 991878.4419263051,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991879.7450424999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 659374.2265037573,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 659367.1992481076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 999133.8293029343,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 999135.9886201936 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774154257,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17210.90976127958,
            "unit": "ns/iter",
            "extra": "iterations: 40005\ncpu: 17210.773653293338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137255.50308942646,
            "unit": "ns/iter",
            "extra": "iterations: 6150\ncpu: 137246.42276422767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 259135.1833085008,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 259136.45305514158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 377675.5216441051,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 377667.77437691315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 497164.6132789707,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 497146.35993011075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 619068.3300070909,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 619063.3642195296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 593920.1929999172,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593887.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 688367.4299552931,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 688349.4038748138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 784946.7847457594,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 784921.27118644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13433.77323697994,
            "unit": "ns/iter",
            "extra": "iterations: 52169\ncpu: 13433.35889129559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11097.815458262798,
            "unit": "ns/iter",
            "extra": "iterations: 63086\ncpu: 11097.568398693857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11059.202117920606,
            "unit": "ns/iter",
            "extra": "iterations: 63364\ncpu: 11058.979862382446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11074.848936069671,
            "unit": "ns/iter",
            "extra": "iterations: 63397\ncpu: 11074.76694480811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18477.125910098595,
            "unit": "ns/iter",
            "extra": "iterations: 37908\ncpu: 18476.38229397488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56773.78227495064,
            "unit": "ns/iter",
            "extra": "iterations: 14330\ncpu: 56773.468248429795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250075.0322391546,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 250064.15592028186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200963.81943129437,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 200956.84834123254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202161.62855097433,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 202152.3752685598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196257.7204524372,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 196254.10895660188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 506826.39502597565,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 506806.9404279927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4345852.191588769,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4345657.943925232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3479718.513108395,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3479668.9138576793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3498648.7105265437,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3498571.42857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3474325.873134176,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3474217.9104477563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1963147.7780126212,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1962974.6300211428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3379677.9087592135,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3379454.37956205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12520004.282352122,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12519332.941176444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5791730.309999821,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5791359.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16274266.400000669,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16273215.384615397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55668.819099992106,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55665.52000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 296280.3301138409,
            "unit": "ns/iter",
            "extra": "iterations: 2899\ncpu: 296259.710244913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232862.83963034555,
            "unit": "ns/iter",
            "extra": "iterations: 3679\ncpu: 232850.5300353356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 236934.6523068414,
            "unit": "ns/iter",
            "extra": "iterations: 3598\ncpu: 236921.2896053359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 225505.0192307586,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 225496.20653319146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 538958.0230386117,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 538930.6351183053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4407738.9052128885,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4407513.744075861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3542421.6425854685,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3542304.942965767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3544921.3969466216,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3544757.251908405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3504079.0939848037,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3503862.406015021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2007105.265658919,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2007007.7753779634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3424303.036900304,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3424173.062730624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12854670.493975773,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12853934.939759042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5584471.070000064,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5584271.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58094.276472230544,
            "unit": "ns/iter",
            "extra": "iterations: 14298\ncpu: 58091.068680934244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263706.48981484195,
            "unit": "ns/iter",
            "extra": "iterations: 3240\ncpu: 263693.54938271525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202788.6073968688,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 202776.12612612598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 214254.87680629265,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 214239.11339701302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199800.02056554242,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 199790.48843187635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 486903.56470583525,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 486872.5490196078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4385364.509433756,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4385283.962264151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3478856.7472119937,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3478696.654275086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3518213.6716980925,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3518006.037735849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3453188.6851852876,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3453000.370370352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1995411.109207815,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1995344.7537473254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3396393.3576644138,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3396371.167883215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6432.611996913754,
            "unit": "ns/iter",
            "extra": "iterations: 108878\ncpu: 6432.558459927575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36680.40693677682,
            "unit": "ns/iter",
            "extra": "iterations: 19202\ncpu: 36679.43964170402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27017.355936786666,
            "unit": "ns/iter",
            "extra": "iterations: 25881\ncpu: 27017.163169892967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28658.68516624895,
            "unit": "ns/iter",
            "extra": "iterations: 24451\ncpu: 28658.43932763483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22943.260250254876,
            "unit": "ns/iter",
            "extra": "iterations: 30609\ncpu: 22943.091901074557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 138440.00474589012,
            "unit": "ns/iter",
            "extra": "iterations: 5057\ncpu: 138431.18449673703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 292562.8459933116,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292545.4924874754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72670.53864484429,
            "unit": "ns/iter",
            "extra": "iterations: 9652\ncpu: 72662.61914629063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72831.21452350337,
            "unit": "ns/iter",
            "extra": "iterations: 9612\ncpu: 72825.44735746941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73041.17540726151,
            "unit": "ns/iter",
            "extra": "iterations: 9515\ncpu: 73035.93273778266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 146079.35544429705,
            "unit": "ns/iter",
            "extra": "iterations: 4794\ncpu: 146076.07425949135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135908.65385363562,
            "unit": "ns/iter",
            "extra": "iterations: 5151\ncpu: 135906.73655600834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45160.323023396166,
            "unit": "ns/iter",
            "extra": "iterations: 15519\ncpu: 45159.64301823507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218790.99781114553,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 218789.11819887563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178836.39902862278,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 178833.1799590983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175601.792878647,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 175593.8816449345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177366.2314154788,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 177356.18635437905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305291.13043480326,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 305288.2173913002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1261956.9169676271,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1261915.7039711361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1051531.550375925,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1051504.5112782032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1049374.2957958071,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1049353.6036036047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1037301.5422222427,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1037268.5925925976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 669328.3492823001,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 669322.3923445079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1034662.9823009468,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1034623.3038348043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44608.095832796746,
            "unit": "ns/iter",
            "extra": "iterations: 15694\ncpu: 44607.9329680132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219156.7482037142,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 219149.98437988333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179030.43889314024,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 179006.0978734304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177157.99467681217,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 177143.2192648925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178721.7684478508,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 178705.5725190828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 300089.41305281466,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 300064.96350365016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1266183.7355072135,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1266162.3188405898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1051955.2934947184,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1051936.1573373617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1040808.3268944555,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1040772.3625557178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1037324.6251853104,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1037315.7037036907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 671303.1465517926,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 671266.4750957837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1033627.4896756692,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1033604.7197640098 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}