window.BENCHMARK_DATA = {
  "lastUpdate": 1705961342101,
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
        "date": 1705777690423,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16758.521937028054,
            "unit": "ns/iter",
            "extra": "iterations: 42622\ncpu: 16758.43695743982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132354.28517468652,
            "unit": "ns/iter",
            "extra": "iterations: 6354\ncpu: 132348.81964117094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 248106.86574472103,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 248107.74992797463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 363070.6390631382,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 363069.13425345055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 476083.0583058027,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 476072.1122112212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 591558.3766145784,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 591561.1148878318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 573391.6729999465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573374.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 661528.535251753,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 661499.7122302155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 749970.089649552,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 749943.3577832102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12968.254527593175,
            "unit": "ns/iter",
            "extra": "iterations: 53947\ncpu: 12967.770218918564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10797.940458415616,
            "unit": "ns/iter",
            "extra": "iterations: 64963\ncpu: 10797.517048165879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11076.413932279751,
            "unit": "ns/iter",
            "extra": "iterations: 64914\ncpu: 11075.844964106356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10994.12914178094,
            "unit": "ns/iter",
            "extra": "iterations: 64797\ncpu: 10994.146333935225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17697.916123489576,
            "unit": "ns/iter",
            "extra": "iterations: 39582\ncpu: 17697.74645040676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55360.17244426162,
            "unit": "ns/iter",
            "extra": "iterations: 14712\ncpu: 55359.45486677546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254410.79278472599,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 254400.47704233753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 201438.18901569606,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 201430.3851640518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202962.57528410162,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 202951.7282196967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199223.58801408045,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 199219.17743830808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 478163.99344262696,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 478144.4262295085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4063438.2850875654,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4063192.543859638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3273302.2226150595,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3273267.844522966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3324824.0035841735,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3324727.9569892543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3262850.4842106947,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3262813.684210529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1890687.4028629065,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1890617.3824130928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3199199.795138854,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3199193.0555555555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12159115.034482338,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12158794.252873553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5539790.130000029,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5539681.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15719580.104477001,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15719010.447761172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54702.72730000261,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54702.69999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 298331.2506953929,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 298323.40055632836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 234926.45437052211,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 234917.34469488708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 233273.05784447363,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 233268.5948158243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223398.17898322898,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 223400.96960167668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 519142.4324955766,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 519132.4956166001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4160312.0762328715,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4160241.255605375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3355493.5054152035,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3355533.574007229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3393425.613138503,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3393358.7591241035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3315036.899999768,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3315006.0714285546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1948325.494758837,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1948288.0503144597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3275018.045614113,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3274973.333333314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12537986.752941191,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12537768.235294107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5511583.660000951,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5511520.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55931.227949756045,
            "unit": "ns/iter",
            "extra": "iterations: 14569\ncpu: 55929.583361933066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 251905.6132939316,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 251894.3870014774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199348.3320860638,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 199343.77923292885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 211652.36190011987,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 211644.90695396683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198625.56673655726,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 198624.2487770786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 457062.73048526846,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 457048.20675105695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4157464.415178883,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4157376.7857142775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3294898.294326047,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3294913.1205673628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3356018.180505299,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3355977.2563177017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3295791.321554613,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3295734.982332157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1929718.8326446258,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1929688.0165289354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3246556.3031355515,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3246597.5609756294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6364.314570712581,
            "unit": "ns/iter",
            "extra": "iterations: 109775\ncpu: 6364.272375313163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36258.505485974354,
            "unit": "ns/iter",
            "extra": "iterations: 19322\ncpu: 36258.06334747975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28614.433096289402,
            "unit": "ns/iter",
            "extra": "iterations: 24468\ncpu: 28614.16544057559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29213.369335506115,
            "unit": "ns/iter",
            "extra": "iterations: 23943\ncpu: 29213.732614960387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22549.45279433254,
            "unit": "ns/iter",
            "extra": "iterations: 31045\ncpu: 22549.238202608885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 133795.61413563322,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 133793.56255969513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 268129.0360706221,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 268126.9762087472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72719.48174001029,
            "unit": "ns/iter",
            "extra": "iterations: 9885\ncpu: 72719.05918057745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71471.58086514148,
            "unit": "ns/iter",
            "extra": "iterations: 9825\ncpu: 71470.86005089106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70505.75968601581,
            "unit": "ns/iter",
            "extra": "iterations: 9937\ncpu: 70505.56505987716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142091.9219670808,
            "unit": "ns/iter",
            "extra": "iterations: 4921\ncpu: 142090.1036374727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131826.53465159686,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131825.04708097875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43362.076999379795,
            "unit": "ns/iter",
            "extra": "iterations: 16130\ncpu: 43362.6162430253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 216042.79635913778,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 216037.73526689433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174732.5497512579,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 174726.0199004998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172644.33555228016,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 172631.70611439808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174542.16401193786,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174535.44051766902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 302839.0773886696,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 302820.70903588174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1208638.7727273793,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1208586.7132867237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1003867.3994253568,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1003800.7183907981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1009530.1659450873,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1009530.8802308762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 991791.8995757734,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 991771.5700141465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 646569.505545337,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 646530.6839186695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 991408.2312055446,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 991379.5744680895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44125.51358850425,
            "unit": "ns/iter",
            "extra": "iterations: 15859\ncpu: 44124.42776972065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 217028.46232557032,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 217029.30232558362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174474.8066600458,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 174471.5954274353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173646.7965217417,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 173642.75776397545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173789.25049506009,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 173789.00990098782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 299782.9901918762,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 299786.26865671773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1211445.916376369,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1211370.7317073236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1007588.370689636,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1007589.9425287341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1007292.7761834965,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1007253.6585365804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 988489.5324858662,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 988438.9830508454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 647137.4519408145,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 647124.3992606323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 992574.0269886322,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 992547.4431818197 ns\nthreads: 1"
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
        "date": 1705952865780,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16318.32913286477,
            "unit": "ns/iter",
            "extra": "iterations: 42773\ncpu: 16318.261520117834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130311.9375882014,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 130310.33401285872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 246333.43494213236,
            "unit": "ns/iter",
            "extra": "iterations: 3543\ncpu: 246330.96246119103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 357346.3033568158,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 357347.36842105247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470687.63848239766,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 470680.379403794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 583697.9865501093,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 583685.8776059177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 562759.003999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562751.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 650968.0642360966,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 650938.6284722225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 741706.8843373469,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 741671.5662650604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13009.10416240593,
            "unit": "ns/iter",
            "extra": "iterations: 53791\ncpu: 13008.391738394908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10825.534880461593,
            "unit": "ns/iter",
            "extra": "iterations: 64205\ncpu: 10824.973132933588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10789.182373111062,
            "unit": "ns/iter",
            "extra": "iterations: 65037\ncpu: 10788.769469686478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10719.673601125474,
            "unit": "ns/iter",
            "extra": "iterations: 65374\ncpu: 10719.483280815013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17989.629409046895,
            "unit": "ns/iter",
            "extra": "iterations: 38954\ncpu: 17989.402885454645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58488.06126820774,
            "unit": "ns/iter",
            "extra": "iterations: 14004\ncpu: 58486.20394173091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 264004.1430336813,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 264004.8501699107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 208424.08044008983,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 208417.97066014746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 212253.5884977564,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 212252.5037183935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 207870.53632374876,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 207866.2847391514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 487191.4572222143,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 487164.44444444566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4042429.3056767415,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4042360.262008739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3240565.248251794,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3240356.2937062923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3302810.7153023123,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3302717.4377224254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3259043.729824378,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3258842.105263158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1873581.553752386,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1873500.40567951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3178529.8556701727,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3178424.3986254297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11973050.797752386,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11972517.97752809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5458133.610000005,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5457847.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15834880.22388066,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15834080.597014949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57174.86920000284,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57172.630000000165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 304667.3699646631,
            "unit": "ns/iter",
            "extra": "iterations: 2830\ncpu: 304655.6537102471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 241205.92571747914,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 241194.23185143483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 242914.3159387679,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 242903.99886556974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231147.99539543796,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 231140.52004333708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 514235.3684833934,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 514217.23933649354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4128009.0888888785,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4127791.555555531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3331274.9357142886,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3331161.785714265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3343932.2517984435,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3343803.9568345346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3292936.4240285093,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3292803.180212001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1921413.4917695506,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1921347.942386828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3229166.114583472,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3229030.5555555676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12326579.523255268,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12326248.837209363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5568015.170000535,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5568015.00000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51940.773499995885,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51940.36000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 264752.5308336152,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 264745.8010536109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 213881.27075002217,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 213881.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219461.96931732926,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 219455.33111735983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 207954.1893939293,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 207947.7517106548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 464774.2206748591,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 464771.98714514915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4121106.5663718428,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4120996.4601769717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3262368.361403564,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3262331.929824556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3322312.2642855938,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3322242.4999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3252142.0454545193,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3252054.1958041927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1902761.9306122724,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1902756.1224489762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3200857.6413796493,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3200687.24137932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6395.449515830369,
            "unit": "ns/iter",
            "extra": "iterations: 109569\ncpu: 6395.421150142851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36827.522611480366,
            "unit": "ns/iter",
            "extra": "iterations: 19039\ncpu: 36824.82798466326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29917.31550524181,
            "unit": "ns/iter",
            "extra": "iterations: 24998\ncpu: 29915.70925674049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29599.491542880052,
            "unit": "ns/iter",
            "extra": "iterations: 25245\ncpu: 29598.039215686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22592.011696093898,
            "unit": "ns/iter",
            "extra": "iterations: 31036\ncpu: 22590.962108519136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 138548.09211046097,
            "unit": "ns/iter",
            "extra": "iterations: 5070\ncpu: 138545.52268244722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 277674.01441580727,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 277658.95295902947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70323.03518295533,
            "unit": "ns/iter",
            "extra": "iterations: 9948\ncpu: 70321.73301166044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70951.27632379172,
            "unit": "ns/iter",
            "extra": "iterations: 9858\ncpu: 70948.4175289107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69909.58080959077,
            "unit": "ns/iter",
            "extra": "iterations: 10005\ncpu: 69906.1469265365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 140786.1819277185,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 140778.55421686752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131233.0740949172,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 131229.3753517162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44179.30809069736,
            "unit": "ns/iter",
            "extra": "iterations: 15833\ncpu: 44176.78266910949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211999.71147441064,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 211991.67423554414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175457.81668331756,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 175447.6523476516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173291.43290576484,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 173287.17316230934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174000.69693954446,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 173997.13859168784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 306722.92769503634,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 306718.31726555416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1194973.8122866743,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1194978.1569965798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 991194.2332859945,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 991140.2560455267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 997692.0455840579,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 997635.1851851895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 986522.2489451887,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 986464.9789029581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 644001.4792625766,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 643997.9723502205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 980927.4369746692,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 980931.0924369874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44851.29471934631,
            "unit": "ns/iter",
            "extra": "iterations: 15642\ncpu: 44850.30686612973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213977.89691980617,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 213972.76608722244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176287.1526833095,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 176286.19299571493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175844.92156863154,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 175842.00603318293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174361.45200699827,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 174354.62478184814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307004.7258771917,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 306997.80701754504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1194409.4828767718,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1194343.835616456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 991622.1570014209,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 991616.8316831713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 997939.3589743783,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 997912.8205128202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 983620.980309368,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 983596.7651195647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 644983.9889502169,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 644980.1104972367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 980477.8078542738,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 980382.1879383018 ns\nthreads: 1"
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
        "date": 1705954330444,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17256.230433828896,
            "unit": "ns/iter",
            "extra": "iterations: 41053\ncpu: 17256.012958858064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 138221.3201697151,
            "unit": "ns/iter",
            "extra": "iterations: 6128\ncpu: 138215.045691906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 260312.14217300236,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 260302.24483687518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 379673.63400702877,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 379653.51493848837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 501904.74161849846,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 501861.73410404654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 502465.653999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502390.99999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 599368.6229999753,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599368.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 693481.8434913355,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 693440.1053423624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 794409.8838599815,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 792885.311699402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13494.191894860483,
            "unit": "ns/iter",
            "extra": "iterations: 51893\ncpu: 13493.785288959989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11060.77738465441,
            "unit": "ns/iter",
            "extra": "iterations: 63028\ncpu: 11060.38427365615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11094.341715882374,
            "unit": "ns/iter",
            "extra": "iterations: 62988\ncpu: 11093.7638915349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11089.30740623509,
            "unit": "ns/iter",
            "extra": "iterations: 63190\ncpu: 11088.789365405935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18583.14898875768,
            "unit": "ns/iter",
            "extra": "iterations: 37627\ncpu: 18582.095303904112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56014.274091408864,
            "unit": "ns/iter",
            "extra": "iterations: 14528\ncpu: 56010.0220264317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257001.10165912745,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 256993.42383107074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204959.60062590896,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 204947.54453538795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209365.19248710616,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 209357.89344463538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 203519.3449018646,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 203508.13786500698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 522376.3819155207,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 522352.5877453891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4330900.302325644,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4330728.83720929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3475096.359550599,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3474913.1086142226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3512498.056818286,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3512379.9242424294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3489216.9588013953,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3489065.5430711573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2009656.1344902168,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2009533.839479394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3398938.9084249176,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3398767.76556776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12836573.337349009,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12835474.69879519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5734521.210000025,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5734475.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16731047.60937516,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16729760.937500004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56259.07360000042,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56257.67999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 295253.82385195297,
            "unit": "ns/iter",
            "extra": "iterations: 2918\ncpu: 295244.17409184354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 236337.0489491038,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 236323.11946902605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 238218.05654594884,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238197.15877437277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229794.41395097555,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 229781.0665230262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 546052.59420293,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 546009.0737240087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4395667.706161135,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4395379.146919429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3529743.4714829954,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3529619.0114068505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3553774.7862595133,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3553508.3969465704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3508930.120754588,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3508791.3207547134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2064647.477777852,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2064522.4444444447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3434122.619926114,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3433942.066420663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13166809.308641821,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13165927.160493756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5520649.040000195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5520461.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58817.777148118796,
            "unit": "ns/iter",
            "extra": "iterations: 14117\ncpu: 58815.555712970105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 265185.62039046234,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 265174.5894019193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 207120.7803454112,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 207110.19216735603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 216274.6738856793,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 216260.5137245023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 202949.35925573434,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 202940.8874045816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 495852.7415472829,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 495830.60171919916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4364312.816901347,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4364073.70892019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3458769.6542751077,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3458645.7249070597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3510324.883458601,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3510202.2556390963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3458692.747211887,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3458475.0929367864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2025192.2299350065,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2025113.232104126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3395183.551094926,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3395025.547445249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6464.311276407439,
            "unit": "ns/iter",
            "extra": "iterations: 108492\ncpu: 6463.969693617922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36348.86051335169,
            "unit": "ns/iter",
            "extra": "iterations: 19285\ncpu: 36346.88618096979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29677.26288174001,
            "unit": "ns/iter",
            "extra": "iterations: 24395\ncpu: 29675.622053699408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29577.388829744723,
            "unit": "ns/iter",
            "extra": "iterations: 24422\ncpu: 29576.234542625603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22714.478029293692,
            "unit": "ns/iter",
            "extra": "iterations: 30791\ncpu: 22713.286349907605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139914.8496105559,
            "unit": "ns/iter",
            "extra": "iterations: 5007\ncpu: 139908.2883962466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 290100.93073413486,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 290086.39568643656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73006.70971106662,
            "unit": "ns/iter",
            "extra": "iterations: 9587\ncpu: 73004.3392093473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73015.42548978375,
            "unit": "ns/iter",
            "extra": "iterations: 9596\ncpu: 73013.1929970822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73169.7537060521,
            "unit": "ns/iter",
            "extra": "iterations: 9444\ncpu: 72971.86573485707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 146805.82509425256,
            "unit": "ns/iter",
            "extra": "iterations: 4774\ncpu: 146800.81692501006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135915.8593385268,
            "unit": "ns/iter",
            "extra": "iterations: 5140\ncpu: 135907.89883268334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45747.83021827172,
            "unit": "ns/iter",
            "extra": "iterations: 15302\ncpu: 45747.09841850727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220387.5784313859,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 220373.59266287042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178441.64088821315,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 178432.5165900968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177917.85930791564,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 177900.22733013387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 181908.49532467316,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 181901.24675324743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 314637.0013441268,
            "unit": "ns/iter",
            "extra": "iterations: 2232\ncpu: 314603.98745519476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1263583.8519856853,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1263509.2057761892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1051878.5389312843,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1051798.3206106809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1048561.4452773484,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1048543.0284857544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1053132.3208955477,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1053113.432835816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 678278.3381782932,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 678244.0891472849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1034397.2584933926,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1034369.5716395811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46031.25350536517,
            "unit": "ns/iter",
            "extra": "iterations: 15191\ncpu: 46028.62221051886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 225312.11798838558,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 225301.57962604405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182578.433342023,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 182570.25828332896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181699.31160737388,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 181693.53414697474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181963.3127913086,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 181953.08130502258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 310092.59169244434,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 310076.4913831211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1254771.44901602,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1254700.1788908737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1045516.5149254306,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1045481.0447761214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1044541.3955223096,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1044491.4925373109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1034085.0991123713,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1034023.964497042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 679587.1019416887,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 679553.203883491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1033688.9203539047,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1033646.0176991136 ns\nthreads: 1"
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
        "date": 1705956376501,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16295.062533731974,
            "unit": "ns/iter",
            "extra": "iterations: 42617\ncpu: 16294.30978248117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133774.61910023395,
            "unit": "ns/iter",
            "extra": "iterations: 6335\ncpu: 133767.38752959747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 251718.25905535105,
            "unit": "ns/iter",
            "extra": "iterations: 3451\ncpu: 251714.02492031307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 367472.12888133846,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 367474.30880476395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 483243.1435725859,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 483225.0973845297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 598428.2127072135,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 598421.0635359114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 576549.0500000397,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576527.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 668164.0998552799,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 668146.6714905931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 760896.305669715,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 760857.1898110107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13043.255954041499,
            "unit": "ns/iter",
            "extra": "iterations: 53787\ncpu: 13042.71292319707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10806.119571777004,
            "unit": "ns/iter",
            "extra": "iterations: 64639\ncpu: 10806.098485434499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10727.637627234113,
            "unit": "ns/iter",
            "extra": "iterations: 65038\ncpu: 10727.201020941597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10732.576985388388,
            "unit": "ns/iter",
            "extra": "iterations: 65428\ncpu: 10732.230849177733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18184.48601480073,
            "unit": "ns/iter",
            "extra": "iterations: 38505\ncpu: 18183.293078820945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54954.14554910241,
            "unit": "ns/iter",
            "extra": "iterations: 14806\ncpu: 54952.91773605295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 251125.2993479399,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 251118.40545346768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198016.21458526413,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 198007.01304753043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200237.6622734575,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 200233.65497764197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196355.814968805,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 196359.34395934452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 485821.739565943,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 485805.3978853645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4079438.6419217545,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4079159.3886462986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3274427.296819645,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3274326.1484098937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3356050.4657043074,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3355928.5198556026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3282835.2438162724,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3282683.0388692487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1883425.2443991748,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1883384.7250509183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3201344.9169550473,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3201194.4636678174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12099612.897726916,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12099611.363636363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5534004.869999763,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5534053.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15966686.681817023,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15966331.818181818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54673.2526000028,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54673.56999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 289707.4209993088,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 289702.53207292303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230904.58551741333,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 230902.5668738179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 228904.90468540482,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 228899.38420348166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220668.15680703626,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 220671.9710669072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 511213.3516548811,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 511217.1985815585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4134096.382222197,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4133968.8888888936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3336266.3812951506,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3336299.640287769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3409293.8388282196,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3409238.4615384764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3396796.501792322,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3396575.627240157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1939262.9916317684,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1939203.7656903807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3255024.0035208655,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3254907.394366183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12509158.635295054,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12508669.411764704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5598210.45999911,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5597769.000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55829.062788491305,
            "unit": "ns/iter",
            "extra": "iterations: 14732\ncpu: 55827.86451262534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 249376.05400695358,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 249362.74680603956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201149.58748822706,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 201149.15333960534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 207993.55838178933,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 207987.45155038702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199783.24064547796,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 199782.6707202995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 466961.7748522078,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 466949.2745835603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4136839.786666921,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4136623.1111110905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3301726.345195798,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3301620.6405694033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3384471.243636075,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3384383.9999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3310376.7295376468,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3310261.921708183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1924142.617283844,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1924114.4032921812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3246221.0664334637,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3246128.6713286624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6390.404361518277,
            "unit": "ns/iter",
            "extra": "iterations: 110191\ncpu: 6390.1797787478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36113.25229310725,
            "unit": "ns/iter",
            "extra": "iterations: 19406\ncpu: 36110.25456044527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28186.303337761787,
            "unit": "ns/iter",
            "extra": "iterations: 24837\ncpu: 28185.420944558613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29010.257398168214,
            "unit": "ns/iter",
            "extra": "iterations: 24060\ncpu: 29008.70324189521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22443.15251733837,
            "unit": "ns/iter",
            "extra": "iterations: 31144\ncpu: 22442.57320832262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 137255.8819267577,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 137250.42099079685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 279976.73742380243,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 279978.7728658504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71227.87158386256,
            "unit": "ns/iter",
            "extra": "iterations: 9843\ncpu: 71228.39581428452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71670.17288135484,
            "unit": "ns/iter",
            "extra": "iterations: 9735\ncpu: 71667.05701078495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70988.92419174984,
            "unit": "ns/iter",
            "extra": "iterations: 9867\ncpu: 70984.66605857956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142920.81546643868,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 142911.0679214395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132814.68392112857,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132808.2859309823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44799.107358415946,
            "unit": "ns/iter",
            "extra": "iterations: 15574\ncpu: 44797.10414793863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 216059.15436861836,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 216054.0598950271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174913.59770115034,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 174899.9750124914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175025.01819995174,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 175018.42433308213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175192.43060764926,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 175184.97124280743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 310760.1083000193,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 310748.2467820647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1214896.777777715,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1214904.3402777733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1019162.6613139797,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1019147.7372262791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1021043.86608449,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1021000.8733624489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1011366.1816861229,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1011316.569767436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 655809.5651358973,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 655792.0337394531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1005287.4516593711,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1005272.7272727204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44732.85006701775,
            "unit": "ns/iter",
            "extra": "iterations: 15667\ncpu: 44731.18018765546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214799.6497851572,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 214793.3701657463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176840.25479797923,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 176841.48989899014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176932.44028340004,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 176933.45141700422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 175741.57444667132,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 175731.7152917516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307871.9691901525,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 307870.73063380265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1215995.7170140166,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215949.131944437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1014700.3762663471,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1014666.4254703254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1023574.4576022109,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1023512.1345029318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1001611.4297993428,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1001585.5300859621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 661293.5617342697,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 661294.816211118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1005946.0618704964,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1005891.3669064763 ns\nthreads: 1"
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
        "date": 1705957827488,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16124.468857745389,
            "unit": "ns/iter",
            "extra": "iterations: 40315\ncpu: 16124.526851047996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131302.4331210027,
            "unit": "ns/iter",
            "extra": "iterations: 6437\ncpu: 131290.321578375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 246620.9278409146,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 246616.27840909097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 359490.1133333413,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 359484.8333333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 473803.19607843616,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 473790.68627450994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 586956.1375770336,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 586940.862422998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 564170.1810000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564163.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 654472.9830000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654457.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 744217.7219983257,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 744204.2707493951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12893.788714030545,
            "unit": "ns/iter",
            "extra": "iterations: 54457\ncpu: 12893.527002956474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10741.95641594659,
            "unit": "ns/iter",
            "extra": "iterations: 65345\ncpu: 10741.328334226035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10710.524940436433,
            "unit": "ns/iter",
            "extra": "iterations: 65476\ncpu: 10710.105993035622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10725.182328320006,
            "unit": "ns/iter",
            "extra": "iterations: 65223\ncpu: 10724.454563574198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18001.951753033372,
            "unit": "ns/iter",
            "extra": "iterations: 38904\ncpu: 18000.709438618163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50805.521899997075,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50804.830000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254542.06928338978,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 254529.8245614037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203639.69164059352,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 203630.78776198498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206196.18374817108,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 206194.04587603745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199609.02257760477,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 199605.4797742241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 477853.1758301606,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 477822.1012520413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4028724.7304347507,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4028454.7826086944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3264152.3780917954,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3263982.6855123597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3285700.7192983716,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3285470.175438595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3254887.8491229913,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3254658.5964912297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1903001.7427983454,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1902947.7366255112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3180264.7319587665,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3180047.079037803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12259360.252874782,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12258731.034482798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5423890.909999046,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5423305.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15908427.590909123,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15907746.969696993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55815.44620000614,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55814.03999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 299583.78954704513,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 299580.45296167186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 236485.0162803612,
            "unit": "ns/iter",
            "extra": "iterations: 3624\ncpu: 236478.47682119228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237278.3030471074,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 237278.9750692528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228006.36094831055,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 227997.46936600938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 504719.0063953225,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 504712.6162790703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4132213.008888862,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4132022.2222222155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3320386.903571456,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3320293.9285714403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3354446.5647481005,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3354409.352517962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3299814.0248226086,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3299705.6737588714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1945292.32773122,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1945279.8319327626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3245194.8736842605,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3244994.736842088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12523921.776470857,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12523719.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5475165.210000341,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5474622.000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56944.68239323306,
            "unit": "ns/iter",
            "extra": "iterations: 14307\ncpu: 56944.28601383958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 253278.22788915134,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 253267.8066037737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 204156.99904259547,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 204156.12733365162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 211564.0032242155,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 211555.87797618905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 202959.1500357221,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 202954.72731602733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 456973.29795055516,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 456968.2080924857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4102943.2599119027,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4102817.18061674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3295996.4539004304,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3295929.4326241096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3304942.744680794,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3304839.0070922007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3293597.3085103645,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3293581.5602836856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1931630.331950225,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1931585.8921161792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3218559.9482757207,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3218440.6896551726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6485.106114873672,
            "unit": "ns/iter",
            "extra": "iterations: 107770\ncpu: 6485.020877795303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36204.60186239208,
            "unit": "ns/iter",
            "extra": "iterations: 19330\ncpu: 36202.85566476995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29261.499857841332,
            "unit": "ns/iter",
            "extra": "iterations: 24621\ncpu: 29261.22415823875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29449.34446448849,
            "unit": "ns/iter",
            "extra": "iterations: 23837\ncpu: 29448.05134874348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22660.359354754506,
            "unit": "ns/iter",
            "extra": "iterations: 30872\ncpu: 22660.42368489257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 132358.20838053632,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 132355.9833899574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 280958.57858861185,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 280955.2927024825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70782.16864054844,
            "unit": "ns/iter",
            "extra": "iterations: 9879\ncpu: 70781.69855248567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70867.7610279228,
            "unit": "ns/iter",
            "extra": "iterations: 9884\ncpu: 70864.59935248998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70313.27661710627,
            "unit": "ns/iter",
            "extra": "iterations: 9956\ncpu: 70312.64564081901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141890.6227143499,
            "unit": "ns/iter",
            "extra": "iterations: 4922\ncpu: 141882.1007720458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131244.2473319584,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 131243.2128814825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43744.27924269048,
            "unit": "ns/iter",
            "extra": "iterations: 16004\ncpu: 43742.09572606811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 212090.5562613478,
            "unit": "ns/iter",
            "extra": "iterations: 3306\ncpu: 212086.38838475556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172258.83362005127,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 172250.84787417235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170763.2048163481,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 170762.10167842146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173718.46150047873,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 173717.32477788904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305134.1960017607,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 305124.2937853089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1199907.070446743,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1199898.6254295518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1001411.7585714238,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1001353.428571414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1001308.7094015764,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1001289.7435897519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 997436.5028489096,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 997397.0085470232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649518.8648148929,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 649486.7592592665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 988076.8815232605,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 988067.8420310264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44200.89723046007,
            "unit": "ns/iter",
            "extra": "iterations: 15851\ncpu: 44199.38805122687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213214.73740132144,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 213203.58227079318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174187.85003728222,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 174184.95399154702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173528.79508804873,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 173523.49292979407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173045.89633844272,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 173032.2117763472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 301085.7376344203,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 301079.4838709632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1206186.2017241044,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1206113.4482758546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010787.1469739574,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010723.9193083438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 994375.6031294498,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 994307.1123755464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 983113.322081504,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 983107.7355836713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 650117.7035316571,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 650103.0669145046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989397.231966057,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 989329.7029702856 ns\nthreads: 1"
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
        "date": 1705959325413,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16822.04484726044,
            "unit": "ns/iter",
            "extra": "iterations: 41541\ncpu: 16821.903661442913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137300.89926888805,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 137298.71649065803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 259724.0419036231,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 259716.97096677645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 379404.0478489835,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 379377.7875329237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 500432.4631760843,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 500398.50402761775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 625068.8344039839,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 625032.9050678086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 596063.8990000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596037.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 691397.846786242,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 691355.8295964128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 787785.6134812253,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 787738.5665529002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13458.72391665477,
            "unit": "ns/iter",
            "extra": "iterations: 52361\ncpu: 13457.407230572386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11157.86193429051,
            "unit": "ns/iter",
            "extra": "iterations: 62731\ncpu: 11157.483540833078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11060.432956432584,
            "unit": "ns/iter",
            "extra": "iterations: 63235\ncpu: 11059.91302285129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11099.8948303481,
            "unit": "ns/iter",
            "extra": "iterations: 63041\ncpu: 11099.522532954728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18532.647650563093,
            "unit": "ns/iter",
            "extra": "iterations: 37775\ncpu: 18531.57908669758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51178.482200003826,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51176.33999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254982.817500737,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 254970.5424033564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 206316.40920097532,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 206308.42615012111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205876.0289365825,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 205865.4448999276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202815.71122230004,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 202806.59995234653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 496050.93480724277,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 496032.8231292522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4260833.573394481,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4260718.348623855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3497678.706319635,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3497537.174721192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3470255.4850747194,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3470050.7462686575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3432036.8265683074,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3431863.0996310054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1954486.4291754256,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1954378.0126849895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3342394.7075813543,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3342201.0830324884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12431496.0000003,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12430722.093023265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5672634.579999567,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5672493.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16321012.123076938,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16320007.692307679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57631.03740000019,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57628.82999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 295953.70279598766,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 295932.27476700104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 235129.89475129303,
            "unit": "ns/iter",
            "extra": "iterations: 3639\ncpu: 235122.42374278576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 241445.37147688848,
            "unit": "ns/iter",
            "extra": "iterations: 3548\ncpu: 241432.6099210819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228181.47975493417,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 228167.39477890253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 522513.2667471536,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 522486.4212432116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4316264.302325223,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4316074.883720944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3497145.2518796884,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3497009.7744361022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3522145.367424204,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3521971.5909090866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3457177.8320897543,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3457060.820895521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2000945.6688452293,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2000833.9869280965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3396708.2124540815,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3396516.84981684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12815408.51807293,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12814842.16867475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5642914.359999622,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5642618.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53051.65759999682,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53045.780000000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 249810.09394204657,
            "unit": "ns/iter",
            "extra": "iterations: 3417\ncpu: 249798.06848112427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 207373.05855424114,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 207356.98795180736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 216050.62079356992,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 216045.1029633359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 203516.41897704962,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 203496.98852772362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 477346.6554944697,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 477305.3846153872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4333228.962790662,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4332956.744186077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3468491.2985075917,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3468167.5373134455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3521677.5471695345,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3521334.716981126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3465153.83643157,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3464877.32342007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1996657.6008582783,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1996508.7982832554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3391916.3963636574,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3391695.6363636465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6501.004719036256,
            "unit": "ns/iter",
            "extra": "iterations: 107861\ncpu: 6500.437600244787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36576.78438965149,
            "unit": "ns/iter",
            "extra": "iterations: 19628\ncpu: 36574.42938659055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30115.49619174739,
            "unit": "ns/iter",
            "extra": "iterations: 23239\ncpu: 30113.688196566178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29813.347691210172,
            "unit": "ns/iter",
            "extra": "iterations: 25143\ncpu: 29812.15447639498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22846.880680890554,
            "unit": "ns/iter",
            "extra": "iterations: 30607\ncpu: 22846.231254288345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 140017.63996004246,
            "unit": "ns/iter",
            "extra": "iterations: 5005\ncpu: 140012.26773226866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 289552.05084749084,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 289537.41215378686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72868.91543582152,
            "unit": "ns/iter",
            "extra": "iterations: 9614\ncpu: 72866.14312460955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73444.00031400406,
            "unit": "ns/iter",
            "extra": "iterations: 9554\ncpu: 73440.34959179374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72229.74435392355,
            "unit": "ns/iter",
            "extra": "iterations: 9697\ncpu: 72226.54429204958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145835.80928586217,
            "unit": "ns/iter",
            "extra": "iterations: 4803\ncpu: 145828.4613783059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135264.32218140163,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 135255.86927093394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46092.48547526775,
            "unit": "ns/iter",
            "extra": "iterations: 15181\ncpu: 46090.25755879001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218082.01068176408,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 218071.00219918255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178424.11829048817,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 178416.53523276444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 176767.4592891473,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 176759.2387194343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178460.1528841033,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 178449.3363961228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305416.56962021755,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 305400.9602793527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1254817.7374099465,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1254777.338129517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1051610.6060149604,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1051567.368421047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1042381.7317437801,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1042308.3457526116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1034878.4985205973,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1034841.8639053085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 665944.9696682016,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 665922.0853080614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1027542.820851744,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1027474.7430249522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45722.74621607636,
            "unit": "ns/iter",
            "extra": "iterations: 15328\ncpu: 45719.167536534835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219314.25304972992,
            "unit": "ns/iter",
            "extra": "iterations: 3197\ncpu: 219305.16108852078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179987.50077123407,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 179981.5938303334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178747.06865746828,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 178737.64675855226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178737.42160366933,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 178730.6179775279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307036.74223196873,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 307016.8927789955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1247236.0429338731,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1247182.2898032079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1038651.9732936451,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1038584.2729970319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1040488.9611940329,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1040445.8208955193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1024262.2217327676,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1024226.8722466881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 662104.3943395745,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 662079.3396226452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1021586.3824818584,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1021528.6131387013 ns\nthreads: 1"
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
        "date": 1705961334720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16635.98234500863,
            "unit": "ns/iter",
            "extra": "iterations: 41518\ncpu: 16634.394720362252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133023.6906792961,
            "unit": "ns/iter",
            "extra": "iterations: 6330\ncpu: 133016.06635071087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250419.08783589402,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 250405.74978329963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 372295.45952778927,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 372259.73861720075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 480433.6437673127,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 480375.7340720221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 596012.3486933139,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 595942.7097661627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 572693.3830000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572689.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 664139.4762589522,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 664098.92086331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 771732.1888341723,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 771678.6535303779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13192.291564275825,
            "unit": "ns/iter",
            "extra": "iterations: 53309\ncpu: 13191.556772777587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10886.655098424248,
            "unit": "ns/iter",
            "extra": "iterations: 64314\ncpu: 10885.61899430918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10879.928487381309,
            "unit": "ns/iter",
            "extra": "iterations: 64590\ncpu: 10879.213500541871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10847.47024460843,
            "unit": "ns/iter",
            "extra": "iterations: 64879\ncpu: 10847.271073845162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18205.336344700605,
            "unit": "ns/iter",
            "extra": "iterations: 38410\ncpu: 18205.1991668836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57672.82833344893,
            "unit": "ns/iter",
            "extra": "iterations: 14167\ncpu: 57668.899555304604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257161.68051791977,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 257148.14814814826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203700.0237125899,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 203690.9940119758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 208389.21353531058,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 208376.1788419251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201743.62656583294,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 201731.6709997636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 484230.85044150887,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 484198.8962472396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4143545.7111108718,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4143316.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3294688.839857738,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3294460.8540925244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3350936.942238166,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3350671.8411552333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3271123.260563473,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3270840.140845081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1973298.9640590956,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1973164.2706131062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3245975.5789472056,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3245779.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12380571.499999521,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12380140.697674442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5575506.86999889,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5575136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16407685.876923166,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16406643.076923078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56116.98310000292,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56111.560000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 315329.31350367324,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 315306.970802919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 242941.50807594394,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 242925.50297534742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 244977.62002276332,
            "unit": "ns/iter",
            "extra": "iterations: 3516\ncpu: 244960.15358361762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 225984.3956188943,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 225972.3673792566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 509194.99235739146,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 509164.90299823694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4195907.049549291,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4195700.450450461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3380988.6436363906,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3380708.3636363638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3405979.613138744,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3405797.0802919664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3322434.2222223557,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3322195.698924714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1985111.417204319,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1984965.1612903185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3275536.0176054984,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3275317.6056337976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12813937.855421992,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12813145.783132533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5539795.129999447,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5539259.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58588.95464609644,
            "unit": "ns/iter",
            "extra": "iterations: 14001\ncpu: 58584.836797371674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 269209.1481131932,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 269191.6037735836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 211105.50430716123,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 211094.85601772027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 216692.57081869568,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 216677.7247614257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 209129.49095798808,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 209115.81133919835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 464573.1022908432,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 464569.63239211653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4173930.4977581026,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4173760.0896860985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3324585.9464285234,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3324347.1428571423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3378396.4637681153,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3378204.3478261004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3298369.9361700104,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3298226.2411347544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1969361.3290868667,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1969298.301486188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3277653.5950703626,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3277365.8450704347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6380.659787912216,
            "unit": "ns/iter",
            "extra": "iterations: 110049\ncpu: 6380.427809430371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36571.71429317699,
            "unit": "ns/iter",
            "extra": "iterations: 19142\ncpu: 36567.60004179276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30005.23638943945,
            "unit": "ns/iter",
            "extra": "iterations: 23254\ncpu: 30003.36286230347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27408.924307162495,
            "unit": "ns/iter",
            "extra": "iterations: 25511\ncpu: 27407.287052644173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22495.776397316353,
            "unit": "ns/iter",
            "extra": "iterations: 31149\ncpu: 22495.251853991926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 135026.21259386765,
            "unit": "ns/iter",
            "extra": "iterations: 5193\ncpu: 135025.2262661261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 281067.9365206923,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 281063.15789473953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71092.15443269271,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 71085.0142334281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71359.57882928956,
            "unit": "ns/iter",
            "extra": "iterations: 9806\ncpu: 71353.84458494805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70376.10156013575,
            "unit": "ns/iter",
            "extra": "iterations: 9935\ncpu: 70371.50478107734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144402.05672010736,
            "unit": "ns/iter",
            "extra": "iterations: 4866\ncpu: 144390.587751747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131998.5283090313,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 131996.06135201597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44476.804079816495,
            "unit": "ns/iter",
            "extra": "iterations: 15736\ncpu: 44471.68276563293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215029.12638375125,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 215020.72570725842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177255.9559716863,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 177251.74595141687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175971.98993711764,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 175968.7798742128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176878.92212701132,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 176872.00100806454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 302039.6518741657,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 302037.52692804806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1218150.4285715437,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1218075.7839721176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1018404.1048034362,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1018309.4614264851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1024891.8724340566,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1024809.9706744744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1010160.4351585417,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010061.6714697487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 668094.9180171608,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 668090.5624404231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1006067.2083332012,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1005967.9597701168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45048.67357613023,
            "unit": "ns/iter",
            "extra": "iterations: 15486\ncpu: 45047.978819579235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 222324.08828198307,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 222314.79834868072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179822.531843862,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 179810.09244992345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178807.57875923006,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 178794.23027827538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178105.57374556147,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 178095.89457678702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305415.18031360814,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 305392.9442508671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1213951.811091907,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1213843.1542461093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1015024.7063952691,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1014965.552325575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1020346.4154518498,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1020277.405247812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 997932.7350428441,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 997914.6723646633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 667921.52053489,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 667881.4708691494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1008025.6853449288,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1007920.402298852 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}