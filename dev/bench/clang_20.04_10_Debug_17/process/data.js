window.BENCHMARK_DATA = {
  "lastUpdate": 1702489562775,
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
      }
    ]
  }
}