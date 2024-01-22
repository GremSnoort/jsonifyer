window.BENCHMARK_DATA = {
  "lastUpdate": 1705954278763,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-6.0 18.04 Debug c++-17": [
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
        "date": 1702489559559,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8258.018035221276,
            "unit": "ns/iter",
            "extra": "iterations: 84834\ncpu: 8257.692670391589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75698.25726989747,
            "unit": "ns/iter",
            "extra": "iterations: 11245\ncpu: 75696.62961316139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145122.11821352367,
            "unit": "ns/iter",
            "extra": "iterations: 6023\ncpu: 145113.38203553043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 215132.1484125009,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 215128.2795963574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 281740.56201299373,
            "unit": "ns/iter",
            "extra": "iterations: 3080\ncpu: 281729.99999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 347247.56177061127,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 347233.40040241444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 416410.9632107067,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 416398.614429049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 483343.7093732402,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 483306.9883527456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 555632.0227560747,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 555614.7281921625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6401.293277179909,
            "unit": "ns/iter",
            "extra": "iterations: 109463\ncpu: 6400.6860765738165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5413.070138839877,
            "unit": "ns/iter",
            "extra": "iterations: 129429\ncpu: 5412.948411870593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5406.684383946107,
            "unit": "ns/iter",
            "extra": "iterations: 129591\ncpu: 5406.708027563631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5445.548107611049,
            "unit": "ns/iter",
            "extra": "iterations: 128462\ncpu: 5445.186903520102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9244.186926407576,
            "unit": "ns/iter",
            "extra": "iterations: 75511\ncpu: 9243.598945848944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33420.746489250036,
            "unit": "ns/iter",
            "extra": "iterations: 24425\ncpu: 33418.19856704197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133398.2884796941,
            "unit": "ns/iter",
            "extra": "iterations: 6354\ncpu: 133391.48567831295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107100.99774068233,
            "unit": "ns/iter",
            "extra": "iterations: 7967\ncpu: 107092.51914145869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107247.70420061947,
            "unit": "ns/iter",
            "extra": "iterations: 7975\ncpu: 107239.53605015678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111284.56481602938,
            "unit": "ns/iter",
            "extra": "iterations: 7691\ncpu: 111274.35964113905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 269150.27896201535,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 269131.4488724125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2230806.576923291,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2230570.913461537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1850793.6812750767,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1850648.4063745053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1862247.9555554977,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1862129.6969697014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1872262.4116466374,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1872028.915662651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1101722.6038186431,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1101671.1217183757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1795465.7949710758,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1795286.8471953536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7499094.940000078,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7498231.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4319379.47549016,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4319213.725490186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9474270.853447393,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9474142.241379332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32980.17817371613,
            "unit": "ns/iter",
            "extra": "iterations: 24695\ncpu: 32979.54241749339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137052.3847017198,
            "unit": "ns/iter",
            "extra": "iterations: 6236\ncpu: 137049.66324567006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109829.9059961331,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 109828.88459058714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 109763.6048604851,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 109756.7699627101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 110182.46380177951,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110175.13227513223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 264941.1509318768,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 264935.59425603494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2266746.8786409297,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2266618.446601936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1870060.1463414724,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1869933.9430894249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1878493.887324033,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1878387.3239436694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1871412.0969696413,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1871332.1212121232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1116707.9604791037,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1116614.2514970112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1818616.9414062814,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1818513.4765625056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7574405.929999556,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7573756.000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4325763.855813632,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4325511.627906954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32347.473933459776,
            "unit": "ns/iter",
            "extra": "iterations: 25339\ncpu: 32346.12257784455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132373.41513831398,
            "unit": "ns/iter",
            "extra": "iterations: 6434\ncpu: 132363.64625427444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 105300.79718380456,
            "unit": "ns/iter",
            "extra": "iterations: 8096\ncpu: 105293.70059288578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107731.44268925833,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 107724.08694553307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108377.13150859403,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 108370.65563335501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 270380.19631135475,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 270362.76961550524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2236074.753026565,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2235900.4842615076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1862784.8824700916,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1862644.422310763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1870098.7746477851,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1869971.4285714196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1887531.4534411407,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1887387.0445344204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1111453.5651135321,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1111373.2377538811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1799322.2431371969,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1799123.7254902085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3260.6724490081774,
            "unit": "ns/iter",
            "extra": "iterations: 214446\ncpu: 3260.4725665202404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16465.66812494124,
            "unit": "ns/iter",
            "extra": "iterations: 42516\ncpu: 16464.10057390162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12507.526267855594,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12507.330357142797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13176.367705292188,
            "unit": "ns/iter",
            "extra": "iterations: 55811\ncpu: 13176.101485370236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10741.227889644577,
            "unit": "ns/iter",
            "extra": "iterations: 65207\ncpu: 10740.687349517651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63924.3499128269,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 63918.54638891412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 148164.6702691263,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 148150.731087094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38585.64584030925,
            "unit": "ns/iter",
            "extra": "iterations: 17910\ncpu: 38580.89335566711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38568.94880414263,
            "unit": "ns/iter",
            "extra": "iterations: 18146\ncpu: 38566.25151548535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38897.70251194826,
            "unit": "ns/iter",
            "extra": "iterations: 17994\ncpu: 38894.353673446065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74537.72885519257,
            "unit": "ns/iter",
            "extra": "iterations: 9364\ncpu: 74531.51431012474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69345.59503068648,
            "unit": "ns/iter",
            "extra": "iterations: 10102\ncpu: 69338.12116412562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20752.90740795882,
            "unit": "ns/iter",
            "extra": "iterations: 33761\ncpu: 20751.266253961898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100397.68400632395,
            "unit": "ns/iter",
            "extra": "iterations: 6959\ncpu: 100397.77266848773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80769.59511745721,
            "unit": "ns/iter",
            "extra": "iterations: 8684\ncpu: 80765.92584062541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79599.54558991334,
            "unit": "ns/iter",
            "extra": "iterations: 8730\ncpu: 79597.514318443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80724.46809001752,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 80724.65089440333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150433.91646983204,
            "unit": "ns/iter",
            "extra": "iterations: 4657\ncpu: 150425.50998496995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 647073.6798892856,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 647056.1808118118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 551339.9098039123,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 551336.6274509864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 547719.9694836086,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 547703.8341158095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 555410.5450918152,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 555376.3766959253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 362912.19274614844,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 362885.23316062713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 537362.8394776804,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 537363.5176651378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21050.046419928807,
            "unit": "ns/iter",
            "extra": "iterations: 33477\ncpu: 21049.21886668444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99775.62010536123,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 99770.01281503699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80307.8016766212,
            "unit": "ns/iter",
            "extra": "iterations: 8708\ncpu: 80306.855764814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80062.37116847718,
            "unit": "ns/iter",
            "extra": "iterations: 8678\ncpu: 80054.7361143123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81411.23418089704,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 81410.20550330907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150237.87941745055,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 150230.47761833502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 644465.8737327365,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 644435.5760368755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 545517.6892522669,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 545500.8566978263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 545219.9004702846,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 545180.1724137982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 551676.5933806286,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551678.2505910193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 358249.4081108792,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 358209.4455852118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 538530.8630452065,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 537440.7804131617 ns\nthreads: 1"
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
        "date": 1702492162403,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8466.037292566614,
            "unit": "ns/iter",
            "extra": "iterations: 82617\ncpu: 8465.662030816902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78353.22783997453,
            "unit": "ns/iter",
            "extra": "iterations: 10898\ncpu: 78348.53184070472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148788.62860082518,
            "unit": "ns/iter",
            "extra": "iterations: 5832\ncpu: 148780.81275720164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220823.97326608922,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 220818.81462799493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 289194.69949746743,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 289191.3567839197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358949.7632890225,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 358930.31561461807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 429309.7785996245,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 429293.9842209075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 498763.80916909716,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 498712.72206303733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 568582.4676681497,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 568544.0888308292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6485.844503096264,
            "unit": "ns/iter",
            "extra": "iterations: 107224\ncpu: 6485.229985824076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5492.351572114614,
            "unit": "ns/iter",
            "extra": "iterations: 127567\ncpu: 5492.08886310723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5500.544429302591,
            "unit": "ns/iter",
            "extra": "iterations: 127686\ncpu: 5499.786194257793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5580.14370729423,
            "unit": "ns/iter",
            "extra": "iterations: 125860\ncpu: 5580.050055617355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9304.655020730825,
            "unit": "ns/iter",
            "extra": "iterations: 75248\ncpu: 9304.012066765896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35300.91922629432,
            "unit": "ns/iter",
            "extra": "iterations: 23213\ncpu: 35300.06031103257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 136281.8258085134,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 136272.71853986554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109948.92846014765,
            "unit": "ns/iter",
            "extra": "iterations: 7702\ncpu: 109942.24876655411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109198.19564103014,
            "unit": "ns/iter",
            "extra": "iterations: 7800\ncpu: 109189.55128205154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111283.57637981922,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 111274.58801987967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271692.07140629215,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 271679.63829123846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2334955.0076334537,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2334895.165394397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1914038.0020449618,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1913928.425357875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1884533.2197581078,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1884421.7741935463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1919634.4103092249,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1919550.9278350493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1134669.9743902131,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1134667.4390243923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1846587.8183633322,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1846517.165668662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7721769.460000587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7721289.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4300729.101382596,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4300419.354838713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9678867.767857267,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 9678343.75 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34831.54709639358,
            "unit": "ns/iter",
            "extra": "iterations: 23643\ncpu: 34829.35752654059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 141495.27665658787,
            "unit": "ns/iter",
            "extra": "iterations: 5946\ncpu: 141489.06828119766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113795.57042845595,
            "unit": "ns/iter",
            "extra": "iterations: 7142\ncpu: 113770.72248669896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114210.03148750373,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 114204.3159609115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113309.57703723987,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 113296.84295736691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 269388.3521793891,
            "unit": "ns/iter",
            "extra": "iterations: 3166\ncpu: 269373.34175616025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2355339.824427468,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2355138.9312976995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1927108.2865979571,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1926957.5257731862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1924791.932238287,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1924651.3347022678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1944970.294363119,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1944814.196242164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1149803.5315203979,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1149733.3745364721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1877829.3373738641,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1877710.9090909117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7754524.619999757,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7754047.999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4332740.184331418,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4332278.341013838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33724.4088700415,
            "unit": "ns/iter",
            "extra": "iterations: 24284\ncpu: 33721.89919288426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137786.3988808939,
            "unit": "ns/iter",
            "extra": "iterations: 6255\ncpu: 137773.38129496414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108306.21162142491,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 108304.00913473725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109633.08496983789,
            "unit": "ns/iter",
            "extra": "iterations: 7791\ncpu: 109628.5200872796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109917.75329202636,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 109917.5058094503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271921.40548971004,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 271909.2326887087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2370442.928753116,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2370385.49618319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1942173.3062498465,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1942076.875000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1910188.3237705943,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1910133.4016393435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1940528.5991648945,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1940379.3319415408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1156646.7018633233,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 1156600.993788816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1873142.4736843698,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1872998.3805668042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3319.96083114507,
            "unit": "ns/iter",
            "extra": "iterations: 210601\ncpu: 3319.880247482188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17048.940237292212,
            "unit": "ns/iter",
            "extra": "iterations: 40962\ncpu: 17047.69786631517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13542.882624018106,
            "unit": "ns/iter",
            "extra": "iterations: 51646\ncpu: 13542.01874298106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13199.335068266331,
            "unit": "ns/iter",
            "extra": "iterations: 53028\ncpu: 13198.016142415245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10778.594718341963,
            "unit": "ns/iter",
            "extra": "iterations: 64866\ncpu: 10778.244380723405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63383.82757372784,
            "unit": "ns/iter",
            "extra": "iterations: 11054\ncpu: 63380.38719015701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 153606.94637363168,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 153606.7252747248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39271.568003139284,
            "unit": "ns/iter",
            "extra": "iterations: 17808\ncpu: 39268.76684636085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38972.55108514078,
            "unit": "ns/iter",
            "extra": "iterations: 17970\ncpu: 38969.90539788538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39381.77244599646,
            "unit": "ns/iter",
            "extra": "iterations: 17776\ncpu: 39377.244599459904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79508.19204544566,
            "unit": "ns/iter",
            "extra": "iterations: 8800\ncpu: 79502.4318181816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71221.54676697907,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 71220.0081333873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21028.894718187043,
            "unit": "ns/iter",
            "extra": "iterations: 28210\ncpu: 21028.039702233018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102537.77103146863,
            "unit": "ns/iter",
            "extra": "iterations: 6835\ncpu: 102530.66569129519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81388.44819976133,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 81378.69918699296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79037.70357790688,
            "unit": "ns/iter",
            "extra": "iterations: 8832\ncpu: 79029.46105072435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80638.86867290213,
            "unit": "ns/iter",
            "extra": "iterations: 8673\ncpu: 80636.64245359197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151946.3431053239,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 151936.8295331149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 668158.9761221947,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 668110.1241642765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 568668.0251012319,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 568606.5587044624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 559483.2422061871,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 559461.8705035871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 567426.7425100979,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 567416.8421052633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 372984.97921110375,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 372970.7356076708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 553349.9928909881,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 553326.7772511903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20570.846885865194,
            "unit": "ns/iter",
            "extra": "iterations: 33942\ncpu: 20569.156207648426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98996.02106900628,
            "unit": "ns/iter",
            "extra": "iterations: 7072\ncpu: 98989.87556561202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81295.0674079255,
            "unit": "ns/iter",
            "extra": "iterations: 8634\ncpu: 81289.30970581353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78833.19254168238,
            "unit": "ns/iter",
            "extra": "iterations: 8876\ncpu: 78833.0892293834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81046.78906520281,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 81044.65423375399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 153752.61865904066,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 153749.02955447842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 670644.74258371,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 670631.9617224829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 567298.8914100472,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 567247.9740680718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 555846.1397935449,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 555845.5917394717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 565950.6574224936,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 565945.1876019558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 371098.93627189985,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 371089.0600106257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 551732.4720252122,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551726.5563435681 ns\nthreads: 1"
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
        "date": 1702506071530,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8341.680097127028,
            "unit": "ns/iter",
            "extra": "iterations: 84013\ncpu: 8341.618559032531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76814.0778987135,
            "unit": "ns/iter",
            "extra": "iterations: 11117\ncpu: 76812.44040658452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146986.5146563306,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 146982.53032345016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219277.40590590096,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 219264.51451451448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 289591.76389817725,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 289579.57133288693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 357870.2426256509,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 357860.69796427095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 427093.2187807439,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 427066.1258603735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 494352.65174984565,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 494342.57028112427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 560341.8247422084,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 560340.8505154633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6425.086822344011,
            "unit": "ns/iter",
            "extra": "iterations: 109200\ncpu: 6424.950549450545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5416.584454340666,
            "unit": "ns/iter",
            "extra": "iterations: 129348\ncpu: 5416.460246776131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5442.422294225752,
            "unit": "ns/iter",
            "extra": "iterations: 128697\ncpu: 5442.449318942944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5440.61685598913,
            "unit": "ns/iter",
            "extra": "iterations: 127824\ncpu: 5440.517430216541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9142.702978667658,
            "unit": "ns/iter",
            "extra": "iterations: 76880\ncpu: 9142.462278876168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36118.257626543666,
            "unit": "ns/iter",
            "extra": "iterations: 23569\ncpu: 36118.06186091903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139071.84096109602,
            "unit": "ns/iter",
            "extra": "iterations: 6118\ncpu: 139070.43151356658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112549.43865192155,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 112549.03896787792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111955.48253303861,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 111954.01020541668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115346.1833881639,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 115345.38103070176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 276845.8216783207,
            "unit": "ns/iter",
            "extra": "iterations: 3146\ncpu: 276838.8111888106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2293299.1592039634,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2293309.4527363135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1871928.5465587622,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1871907.0850202437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1890950.6943319954,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1890922.6720647789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1870678.4604462618,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1870650.9127789023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1106854.9744214523,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1106838.4896467691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1826285.4930968115,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1826293.4911242598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7473142.299999153,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7472732.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4084010.720524469,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4083896.9432314457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9321253.293103185,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9320893.103448255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33991.00702432004,
            "unit": "ns/iter",
            "extra": "iterations: 24344\ncpu: 33990.47403877753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144626.9631251054,
            "unit": "ns/iter",
            "extra": "iterations: 5939\ncpu: 144613.41976763768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116338.02634080227,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 116331.20162932784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 116914.48044158878,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 116904.22516014664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117378.04357890613,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 117371.51028190051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 277727.3956604983,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 277715.9221442258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2304737.325870795,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2304654.22885572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1896131.6352460254,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1896061.2704917982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1907705.940816274,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1907618.775510197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1887441.5882352672,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1887329.8174442188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1111204.3489208836,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1111160.3117506013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1826759.0805500876,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1826695.8742632559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7536714.589999747,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7536188.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4264237.686364099,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4264085.454545449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33886.563800307966,
            "unit": "ns/iter",
            "extra": "iterations: 24177\ncpu: 33884.58038631744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145361.29343824566,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 145354.7706729159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113103.78704069118,
            "unit": "ns/iter",
            "extra": "iterations: 7593\ncpu: 113096.89187409397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 114116.07742976081,
            "unit": "ns/iter",
            "extra": "iterations: 7439\ncpu: 114112.6629923376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113333.97266148585,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 113332.06915036148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 275720.3450682069,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 275715.4138915316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2289743.2487684903,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2289657.1428571497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1889025.2242426132,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1889029.494949492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1894018.725609642,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1893951.6260162627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1881320.1052632104,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1881279.9595141658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1117812.13630885,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1117777.3220747854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1832262.7658731127,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1832233.333333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3290.651956468684,
            "unit": "ns/iter",
            "extra": "iterations: 213548\ncpu: 3290.604454267903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16650.456176576095,
            "unit": "ns/iter",
            "extra": "iterations: 42135\ncpu: 16650.323958704063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12680.827172277479,
            "unit": "ns/iter",
            "extra": "iterations: 54482\ncpu: 12680.268712602292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12558.314075405591,
            "unit": "ns/iter",
            "extra": "iterations: 55700\ncpu: 12557.707360861805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10771.577182860085,
            "unit": "ns/iter",
            "extra": "iterations: 64995\ncpu: 10771.367028232962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65281.22277227839,
            "unit": "ns/iter",
            "extra": "iterations: 10706\ncpu: 65281.0106482345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144990.13472683207,
            "unit": "ns/iter",
            "extra": "iterations: 4832\ncpu: 144988.78311258255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38641.87587045423,
            "unit": "ns/iter",
            "extra": "iterations: 18094\ncpu: 38641.35625069058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38563.62254310368,
            "unit": "ns/iter",
            "extra": "iterations: 18214\ncpu: 38563.379817722926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38492.90868940695,
            "unit": "ns/iter",
            "extra": "iterations: 18114\ncpu: 38490.48249972343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77870.49705325901,
            "unit": "ns/iter",
            "extra": "iterations: 8993\ncpu: 77869.77649282671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69995.06118793855,
            "unit": "ns/iter",
            "extra": "iterations: 10051\ncpu: 69990.24972639447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21006.391531862122,
            "unit": "ns/iter",
            "extra": "iterations: 33443\ncpu: 21005.355380797104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104073.64795844042,
            "unit": "ns/iter",
            "extra": "iterations: 6735\ncpu: 104067.36451373342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81608.41848524884,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 81604.09616057998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80312.99413995858,
            "unit": "ns/iter",
            "extra": "iterations: 8703\ncpu: 80312.35206250825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81595.47456836175,
            "unit": "ns/iter",
            "extra": "iterations: 8572\ncpu: 81590.9239384052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151248.72375810385,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 151241.16630669544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 657561.6338028861,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 657535.3051643183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 555369.937301618,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 555343.9682539678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 552272.499208895,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 552258.4651898735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 552433.0646177529,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 552420.4885736834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 361234.3806584078,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 361236.2139917759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 542962.4367726976,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 542941.1171450765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20828.409351683425,
            "unit": "ns/iter",
            "extra": "iterations: 33641\ncpu: 20828.254213608227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101114.35884133646,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 101108.28649661344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81204.67653203492,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 81203.07567316676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80160.37435544327,
            "unit": "ns/iter",
            "extra": "iterations: 8727\ncpu: 80160.76544058805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82812.00472421998,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 82810.00354316806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 149582.00170867413,
            "unit": "ns/iter",
            "extra": "iterations: 4682\ncpu: 149579.41050833047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 657693.3733583807,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 657670.6378986904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 553074.3485804494,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 553063.5646687761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 547905.1778127364,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 547907.3957513804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 551570.1526356685,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 551556.6483084126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 360581.9572825374,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 360575.19300051196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 541294.4941905452,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 541275.2130131751 ns\nthreads: 1"
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
        "date": 1705574881568,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8328.870965436747,
            "unit": "ns/iter",
            "extra": "iterations: 83962\ncpu: 8328.961911340844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75898.72656041187,
            "unit": "ns/iter",
            "extra": "iterations: 11231\ncpu: 75897.60484373609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145476.57183191905,
            "unit": "ns/iter",
            "extra": "iterations: 6021\ncpu: 145475.05397774454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 214649.59281287185,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 214648.8723667905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 291142.6293499573,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 291138.5423506236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 348700.51274786575,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 348695.5078915419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 417060.2683629365,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 417058.80940950563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 484806.49163880065,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 484784.8940914162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 552490.5463786038,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 552453.621346887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6312.242851995333,
            "unit": "ns/iter",
            "extra": "iterations: 111010\ncpu: 6312.057472299802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5352.558273425302,
            "unit": "ns/iter",
            "extra": "iterations: 130617\ncpu: 5352.306361346522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5350.593431596723,
            "unit": "ns/iter",
            "extra": "iterations: 130534\ncpu: 5350.33784301407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5348.766255879773,
            "unit": "ns/iter",
            "extra": "iterations: 130968\ncpu: 5348.769164986877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9444.869504140388,
            "unit": "ns/iter",
            "extra": "iterations: 74033\ncpu: 9444.861075466351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34137.82326296753,
            "unit": "ns/iter",
            "extra": "iterations: 24064\ncpu: 34138.202293883005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135023.45133724165,
            "unit": "ns/iter",
            "extra": "iterations: 6319\ncpu: 135018.56306377565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108762.83701339121,
            "unit": "ns/iter",
            "extra": "iterations: 7835\ncpu: 108759.11933631149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109562.61394513692,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 109556.74186106138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112657.07999999258,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 112654.61842105236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281908.0786992167,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 281893.52845528425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2228446.4545454495,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2228325.837320576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1847989.5109342742,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1847950.6958250455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1844202.4999999986,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1844223.320158104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1846623.7869822127,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1846596.0552268277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1086111.0412735555,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1086091.0377358487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1775863.9307693066,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1775830.5769230782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7351732.869999523,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7351685.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4100046.9519649334,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4099883.406113541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9423660.24347769,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9423048.695652192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32957.66291282322,
            "unit": "ns/iter",
            "extra": "iterations: 25041\ncpu: 32955.89233656806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 139544.66274701135,
            "unit": "ns/iter",
            "extra": "iterations: 6123\ncpu: 139540.51935325834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 112048.96008404305,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 112043.53991596679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112924.85991550008,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 112919.19725376263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112513.95027041857,
            "unit": "ns/iter",
            "extra": "iterations: 7581\ncpu: 112506.79329903686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 280039.2520193767,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 280032.4394184165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2268814.474576133,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2268700.2421307606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1863883.6832669352,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1863825.8964143412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1863767.4881422757,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1860306.1264822169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1851987.281746065,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1851927.9761904804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1100109.322274763,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1100033.4123222737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1788825.4277454815,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1788774.951830444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7457977.830000572,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7457583.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4089920.2850873573,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4089685.5263158083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33030.803956185824,
            "unit": "ns/iter",
            "extra": "iterations: 24923\ncpu: 33029.98836416148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132308.13071183054,
            "unit": "ns/iter",
            "extra": "iterations: 6434\ncpu: 132308.06652160408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106603.4101474673,
            "unit": "ns/iter",
            "extra": "iterations: 8002\ncpu: 106603.62409397616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109581.60398713166,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 109580.50160771747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109429.58691468753,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 109427.15843489421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 285205.1361983549,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 285199.6694214881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2252859.5679611135,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2252658.495145637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1848702.8019801145,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1848642.97029704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1837881.8636364818,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1837821.3438735225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1840585.9388561056,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1840510.8481262268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1097385.8431604407,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1097340.448113206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1799902.7090559534,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1799790.3660886271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3286.7593339017517,
            "unit": "ns/iter",
            "extra": "iterations: 213362\ncpu: 3286.548682520802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16530.950916619215,
            "unit": "ns/iter",
            "extra": "iterations: 42275\ncpu: 16529.927853341258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12824.649498523513,
            "unit": "ns/iter",
            "extra": "iterations: 54539\ncpu: 12824.237701461248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13123.020835994763,
            "unit": "ns/iter",
            "extra": "iterations: 54809\ncpu: 13122.15694502732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10670.635878083747,
            "unit": "ns/iter",
            "extra": "iterations: 65717\ncpu: 10670.100582802072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66392.92642870714,
            "unit": "ns/iter",
            "extra": "iterations: 10534\ncpu: 66392.99411429653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145932.33883779176,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 145925.22993311018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38285.41784268697,
            "unit": "ns/iter",
            "extra": "iterations: 18282\ncpu: 38284.88677387591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38109.23018806295,
            "unit": "ns/iter",
            "extra": "iterations: 18398\ncpu: 38109.05533210113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38155.41279642039,
            "unit": "ns/iter",
            "extra": "iterations: 18302\ncpu: 38150.72123265284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76081.67177646917,
            "unit": "ns/iter",
            "extra": "iterations: 9198\ncpu: 76082.72450532657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68273.17681442032,
            "unit": "ns/iter",
            "extra": "iterations: 10265\ncpu: 68270.13151485732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20412.77626901241,
            "unit": "ns/iter",
            "extra": "iterations: 34318\ncpu: 20411.445888455008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100866.02607075743,
            "unit": "ns/iter",
            "extra": "iterations: 6981\ncpu: 100856.1953874812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81375.71300708581,
            "unit": "ns/iter",
            "extra": "iterations: 8603\ncpu: 81372.82343368533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78484.5135226223,
            "unit": "ns/iter",
            "extra": "iterations: 8911\ncpu: 78482.68432274755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80349.28118175302,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 80350.31612829071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152171.14046532073,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 152169.92824527225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 642827.3612131405,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 642804.3198529482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 548612.7580266068,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 548607.595927956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 545243.7548638398,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 545250.194552533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 544678.8450155057,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 544667.3676012413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 363032.7055468967,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 363023.068947641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 534136.4425727457,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 534127.0290964815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20332.506807955484,
            "unit": "ns/iter",
            "extra": "iterations: 34445\ncpu: 20332.15851357227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99250.08891094808,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 99251.31877481598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80617.61316730417,
            "unit": "ns/iter",
            "extra": "iterations: 8673\ncpu: 80618.60947769038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79020.65424149642,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 79020.16265672716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80884.33329483659,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 80882.85021365058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 154396.4158568887,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 154391.9390459385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 643157.5354186568,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 643152.8058877701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 543930.8709677479,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 543938.0015735647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 537018.8325652701,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 536995.0844854146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 541263.3563664487,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 541252.4068322997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 355926.45185937046,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 355918.64493123203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 531228.6837735608,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 531235.0943396195 ns\nthreads: 1"
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
        "date": 1705772715888,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8356.806691007892,
            "unit": "ns/iter",
            "extra": "iterations: 84083\ncpu: 8356.39308778231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76732.01797106721,
            "unit": "ns/iter",
            "extra": "iterations: 11129\ncpu: 76731.04501752178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146134.29010583917,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 146133.39492692755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220493.51491568342,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 220491.4137483787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 282120.788928437,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 282117.83748786023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 347987.9911752925,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 347984.39630966703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 415848.8608321504,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 415847.9196556669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 488803.0061144894,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 488795.16397998884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 555920.724334616,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 555904.8162230673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6446.496423555085,
            "unit": "ns/iter",
            "extra": "iterations: 108208\ncpu: 6446.354243678853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5370.700727617805,
            "unit": "ns/iter",
            "extra": "iterations: 129601\ncpu: 5370.561183941494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5319.3359736822285,
            "unit": "ns/iter",
            "extra": "iterations: 131927\ncpu: 5319.346305153602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5381.376079656745,
            "unit": "ns/iter",
            "extra": "iterations: 129555\ncpu: 5381.309096522713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9288.289299814805,
            "unit": "ns/iter",
            "extra": "iterations: 75223\ncpu: 9287.918588729504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34720.490758715976,
            "unit": "ns/iter",
            "extra": "iterations: 23698\ncpu: 34719.90041353702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139332.40583251265,
            "unit": "ns/iter",
            "extra": "iterations: 6138\ncpu: 139329.63506028018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110183.85981430246,
            "unit": "ns/iter",
            "extra": "iterations: 7754\ncpu: 110182.82176940935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109642.26680375732,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 109638.606862871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112494.19787010751,
            "unit": "ns/iter",
            "extra": "iterations: 7606\ncpu: 112493.34735734946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 266815.1739130521,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 266807.44029393716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2242110.6086956873,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2242074.6376811615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1852274.2071711882,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1852265.1394422317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1832709.6870077692,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1832695.0787401588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1843045.6369047635,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1843074.0079365096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1096262.4348340037,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1096260.0710900482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1786376.1547388257,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1786395.9381044526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7426993.180000637,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7426983.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4121134.828193888,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4121126.4317180645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9386327.626087064,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9385830.434782604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33355.469689045014,
            "unit": "ns/iter",
            "extra": "iterations: 24859\ncpu: 33355.35620901885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140670.34829620112,
            "unit": "ns/iter",
            "extra": "iterations: 6104\ncpu: 140669.61009174332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 112710.92887417226,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 112711.58940397411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115386.90419081764,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 115386.37649912365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 115759.28447470102,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 115756.56120678088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 265029.0517719675,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 265021.8489984596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2278129.5158150624,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2277948.418491475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1884018.1967546653,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1883956.389452343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1856626.3173652205,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1856567.2654690696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1867165.4949900561,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1867141.4829659292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1109962.766388535,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1109933.2538736546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1801304.1582030097,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1801231.640624998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7512676.54000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7512195.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4188359.1855200157,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4188319.9095022674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33239.41890692062,
            "unit": "ns/iter",
            "extra": "iterations: 24774\ncpu: 33239.40825058534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133858.97693654112,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 133860.39446476806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107402.46855346745,
            "unit": "ns/iter",
            "extra": "iterations: 7950\ncpu: 107403.66037735862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111030.03348097854,
            "unit": "ns/iter",
            "extra": "iterations: 7676\ncpu: 111029.01250651383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110993.95243033028,
            "unit": "ns/iter",
            "extra": "iterations: 7715\ncpu: 110991.31561892449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 267189.53401677695,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 267193.91115253133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2249173.245145545,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2249210.436893203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1862765.4325957787,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1862703.0181086538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1848650.7900989987,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1848576.8316831652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1840035.0936255304,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1839930.8764940177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1114045.509569307,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 1114013.0382775082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1801820.5272372512,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1801810.7003891084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3260.8757182101963,
            "unit": "ns/iter",
            "extra": "iterations: 214770\ncpu: 3260.7319458024854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17099.005497323553,
            "unit": "ns/iter",
            "extra": "iterations: 40929\ncpu: 17098.126023113127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13136.861142322303,
            "unit": "ns/iter",
            "extra": "iterations: 53400\ncpu: 13137.014981273502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12788.055535283931,
            "unit": "ns/iter",
            "extra": "iterations: 54812\ncpu: 12788.201488725063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10915.630651304517,
            "unit": "ns/iter",
            "extra": "iterations: 64056\ncpu: 10915.114899463022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62759.51569667754,
            "unit": "ns/iter",
            "extra": "iterations: 11117\ncpu: 62757.94728793735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149836.15045949933,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 149832.8702714254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39079.14308044234,
            "unit": "ns/iter",
            "extra": "iterations: 17913\ncpu: 39078.64121029389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37894.76253978838,
            "unit": "ns/iter",
            "extra": "iterations: 18222\ncpu: 37892.11392821857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38549.40258953538,
            "unit": "ns/iter",
            "extra": "iterations: 18150\ncpu: 38548.71625344349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77861.37630585076,
            "unit": "ns/iter",
            "extra": "iterations: 8998\ncpu: 77855.73460769157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70022.5214257139,
            "unit": "ns/iter",
            "extra": "iterations: 9988\ncpu: 70018.83259911982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20535.64159850021,
            "unit": "ns/iter",
            "extra": "iterations: 34107\ncpu: 20534.44747412561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99320.46813342582,
            "unit": "ns/iter",
            "extra": "iterations: 7045\ncpu: 99319.70191625266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81309.16555905438,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81309.14072519391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78666.63967201498,
            "unit": "ns/iter",
            "extra": "iterations: 8903\ncpu: 78661.48489273274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82001.80532738546,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 81994.0976296641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148661.53847783594,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 148649.3958024165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 646383.9584103307,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 646383.3641404798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 544686.1649725861,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 544692.2595777924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 543954.5085536215,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 543924.0279937821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 542677.1401722825,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 542663.1949882497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 361466.30470769765,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 361442.31764097145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 532290.1636225699,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 532266.4383561616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20548.98721257726,
            "unit": "ns/iter",
            "extra": "iterations: 34096\ncpu: 20547.671281088347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98734.76772098537,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 98735.7243716454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80114.78792729952,
            "unit": "ns/iter",
            "extra": "iterations: 8747\ncpu: 80112.55287527142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79311.11257077917,
            "unit": "ns/iter",
            "extra": "iterations: 8830\ncpu: 79307.84824462025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81168.96995010562,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 81164.41582550124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148476.83917570632,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 148466.24176757887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 645095.0204271404,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 645098.9786443918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 545032.6791277324,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 545003.8161993859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 539603.2145061847,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 539579.5524691362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 541151.2699766513,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 541117.4553917731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 356574.60885041667,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 356554.5269582923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 535053.2938025758,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 535056.0826319829 ns\nthreads: 1"
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
        "date": 1705774129213,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8471.960522972924,
            "unit": "ns/iter",
            "extra": "iterations: 82681\ncpu: 8471.818192813344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78238.01205706254,
            "unit": "ns/iter",
            "extra": "iterations: 10865\ncpu: 78235.86746433501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149691.44506992903,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 149688.55339474577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219683.38301648918,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 219677.0595690748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290556.0634814737,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 290552.08820581384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 357914.5151514998,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 357893.0676629307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 427180.468042264,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 427174.2325113238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 496205.8005697759,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 496188.6609686605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 565496.8635477432,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 565465.3671215076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6558.778899219208,
            "unit": "ns/iter",
            "extra": "iterations: 106906\ncpu: 6558.586047555806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5425.828651555115,
            "unit": "ns/iter",
            "extra": "iterations: 129082\ncpu: 5425.682899242339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5494.323110701698,
            "unit": "ns/iter",
            "extra": "iterations: 127071\ncpu: 5494.233932211131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5516.573005294622,
            "unit": "ns/iter",
            "extra": "iterations: 126936\ncpu: 5516.394876158061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9133.318116028393,
            "unit": "ns/iter",
            "extra": "iterations: 76689\ncpu: 9132.831305663136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35233.32878300021,
            "unit": "ns/iter",
            "extra": "iterations: 23295\ncpu: 35232.64649066323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137282.04253637666,
            "unit": "ns/iter",
            "extra": "iterations: 6324\ncpu: 137277.87792536372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111213.19979241777,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 111209.92475350272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111298.54067421294,
            "unit": "ns/iter",
            "extra": "iterations: 7683\ncpu: 111292.19055056598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 115424.02855603301,
            "unit": "ns/iter",
            "extra": "iterations: 7424\ncpu: 115418.65571120735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 276558.24928549625,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 276551.1590981273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2346835.659949778,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2346757.6826196425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1924145.3672199699,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1924097.925311208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1924598.0786748948,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1924581.3664596325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1924600.2360248077,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1924599.17184265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1141637.6086420617,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1141633.086419755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1868302.9396377502,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1868287.927565389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7701707.630000101,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7701634.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4212447.269911491,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4212419.026548665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9603920.274336042,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9603615.929203553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33457.648324675894,
            "unit": "ns/iter",
            "extra": "iterations: 24443\ncpu: 33457.37429939055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 139158.43623942553,
            "unit": "ns/iter",
            "extra": "iterations: 6148\ncpu: 139158.2791151589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113449.22539724103,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 113449.65950060099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 115063.76970509454,
            "unit": "ns/iter",
            "extra": "iterations: 7460\ncpu: 115061.44772117966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113506.83896139039,
            "unit": "ns/iter",
            "extra": "iterations: 7433\ncpu: 113507.27835328948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 278654.4435146686,
            "unit": "ns/iter",
            "extra": "iterations: 3107\ncpu: 278652.62310910795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2382284.848718031,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2382275.897435886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1950254.633891148,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1950200.6276150702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1941170.5041666967,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1941143.125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1935421.3118501212,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1935355.3014552994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1142800.4655172476,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1142777.5862068997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1883718.3508065525,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1883633.6693548379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7790150.590000167,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7789895.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4245804.680365495,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4245798.630136993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33898.51270436109,
            "unit": "ns/iter",
            "extra": "iterations: 24283\ncpu: 33897.94506444825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 134990.92135187492,
            "unit": "ns/iter",
            "extra": "iterations: 6332\ncpu: 134990.2558433355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107208.11056542129,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 107207.02682281763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110863.70974465081,
            "unit": "ns/iter",
            "extra": "iterations: 7676\ncpu: 110863.17092235573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111519.88651273563,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 111518.32852269764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 276311.5556266272,
            "unit": "ns/iter",
            "extra": "iterations: 3128\ncpu: 276310.13427109946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2339544.3919598414,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2339509.296482407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1925724.1055902247,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1925750.10351968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1929553.2240663301,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1929522.4066390037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1928462.3174274813,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1928451.8672199217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1146289.5000000277,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1146282.1428571483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1874173.713131405,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1874134.7474747445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3311.9564274271897,
            "unit": "ns/iter",
            "extra": "iterations: 211601\ncpu: 3311.7130826413972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17036.664584344027,
            "unit": "ns/iter",
            "extra": "iterations: 41140\ncpu: 17035.986874088587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13234.759884171075,
            "unit": "ns/iter",
            "extra": "iterations: 52837\ncpu: 13233.724473380464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13212.833820560483,
            "unit": "ns/iter",
            "extra": "iterations: 53021\ncpu: 13213.017483638638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10871.549147489051,
            "unit": "ns/iter",
            "extra": "iterations: 64398\ncpu: 10871.474269387232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64762.77017544114,
            "unit": "ns/iter",
            "extra": "iterations: 10830\ncpu: 64759.38134810711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 154892.11484099587,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 154886.3515901064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39843.90165613804,
            "unit": "ns/iter",
            "extra": "iterations: 17571\ncpu: 39842.54168800863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39481.70793418208,
            "unit": "ns/iter",
            "extra": "iterations: 17746\ncpu: 39481.43243547837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39750.150306398304,
            "unit": "ns/iter",
            "extra": "iterations: 17624\ncpu: 39750.15320018197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80051.03207698646,
            "unit": "ns/iter",
            "extra": "iterations: 8729\ncpu: 80047.69160270283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71896.3368258901,
            "unit": "ns/iter",
            "extra": "iterations: 9735\ncpu: 71893.51823317971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21370.595768033694,
            "unit": "ns/iter",
            "extra": "iterations: 32798\ncpu: 21369.53472772739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102448.8159320565,
            "unit": "ns/iter",
            "extra": "iterations: 6829\ncpu: 102441.27983599216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81826.38414562625,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 81826.5766294771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80417.32241756032,
            "unit": "ns/iter",
            "extra": "iterations: 8703\ncpu: 80416.45409628813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81757.8390186957,
            "unit": "ns/iter",
            "extra": "iterations: 8560\ncpu: 81753.93691588701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147042.89196559414,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 147036.52192154335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 671709.5959692941,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 671659.8848368517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 567533.5600981175,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 567535.5682747357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 563060.7911646814,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 563053.8152610463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 567008.6034202253,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 566968.7296416967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 370698.8036093558,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 370679.5647558335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 552979.5217735544,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 552932.5415677013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20657.876597504128,
            "unit": "ns/iter",
            "extra": "iterations: 33881\ncpu: 20656.875534960556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100075.23137422508,
            "unit": "ns/iter",
            "extra": "iterations: 6993\ncpu: 100069.68396968354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81152.6447505571,
            "unit": "ns/iter",
            "extra": "iterations: 8639\ncpu: 81153.73307095673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79222.473386194,
            "unit": "ns/iter",
            "extra": "iterations: 8830\ncpu: 79218.53907134813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81694.2916034109,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 81687.3759196543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 150656.32309661518,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 150651.20494774863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 669973.391179342,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 669941.9942473548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 563888.9540693257,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 563897.0185334476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 561962.8239549623,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 561940.514469445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 564539.0903226605,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 564502.9838709711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 366943.14540686354,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 366930.49868766405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 551111.5059101663,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 551080.2994483873 ns\nthreads: 1"
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
        "date": 1705777683219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8247.31957121715,
            "unit": "ns/iter",
            "extra": "iterations: 84798\ncpu: 8246.972805962405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75476.74804547841,
            "unit": "ns/iter",
            "extra": "iterations: 11256\ncpu: 75470.38912579956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144117.2886479226,
            "unit": "ns/iter",
            "extra": "iterations: 6087\ncpu: 144111.91062920974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 211526.5182837687,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 211514.9195514383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 279423.45607235545,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 279407.52583979315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 344712.738817892,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 344693.09105431294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 412927.93637224694,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 412920.6552706551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 478145.64321059495,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 478133.91973611905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 546142.2448339983,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 546134.2517219791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6308.780122489824,
            "unit": "ns/iter",
            "extra": "iterations: 111030\ncpu: 6308.611186165914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5308.210326672945,
            "unit": "ns/iter",
            "extra": "iterations: 131814\ncpu: 5308.23053696876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5344.035582473765,
            "unit": "ns/iter",
            "extra": "iterations: 130598\ncpu: 5343.89730317462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5352.327204925053,
            "unit": "ns/iter",
            "extra": "iterations: 130594\ncpu: 5352.02918970244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9084.182020012879,
            "unit": "ns/iter",
            "extra": "iterations: 62158\ncpu: 9083.411628430782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33799.86570111777,
            "unit": "ns/iter",
            "extra": "iterations: 24304\ncpu: 33797.93861092828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133340.54450178967,
            "unit": "ns/iter",
            "extra": "iterations: 6393\ncpu: 133332.9735648367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106596.14169584104,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 106592.33366683335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106201.0498632102,
            "unit": "ns/iter",
            "extra": "iterations: 8042\ncpu: 106195.2623725442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108415.78942674436,
            "unit": "ns/iter",
            "extra": "iterations: 7850\ncpu: 108409.54140127377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 262875.8114754087,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 262862.0218579236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2227118.504807689,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2227001.682692306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1847740.5546717823,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1847623.2604373803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1802291.5435201381,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1802213.9264990294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1813039.269531247,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1812935.5468750054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1081350.0582072628,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1081318.9755529687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1769528.1954022632,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1769413.2183908045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7269479.079999428,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7269401.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4128693.204444163,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4128618.6666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9350248.094016513,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9350188.03418804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32383.587800734964,
            "unit": "ns/iter",
            "extra": "iterations: 25313\ncpu: 32382.605775688415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 138282.8688206694,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 138280.32310177712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109068.32903473199,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 109066.20275791625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110383.04203740745,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 110380.77369439072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 110044.1954633769,
            "unit": "ns/iter",
            "extra": "iterations: 7715\ncpu: 110041.72391445265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 261001.41233664294,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 260995.07748404745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2248057.3091789065,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2248029.468599038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1858588.435999991,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1858510.6000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1819779.5087719755,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1819687.9142300077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1813749.3365759691,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1813647.470817115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1087495.4032632906,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1087445.1048951037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1777345.2619501397,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777251.8164435956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7414200.529999562,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7413238.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4058845.5895199906,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4058611.3537118006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32248.543822432766,
            "unit": "ns/iter",
            "extra": "iterations: 25455\ncpu: 32248.26949518755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 130866.40341957864,
            "unit": "ns/iter",
            "extra": "iterations: 6492\ncpu: 130859.76586568115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 104842.98092405946,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 104835.94698377368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 106982.15812019116,
            "unit": "ns/iter",
            "extra": "iterations: 7937\ncpu: 106980.10583343815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107344.73515982143,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 107342.64332825929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 264295.09621258,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 264293.4941967004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2229658.705036102,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2229623.5011990364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1836437.7598423855,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1836329.3307086613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1814626.9354207967,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1814535.0293542068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1815613.5273437179,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1815474.4140624902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1084385.1201867298,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1084327.071178526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1774387.4370228762,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1774364.5038167904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3212.069483249708,
            "unit": "ns/iter",
            "extra": "iterations: 218326\ncpu: 3211.866658116759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16754.96751368393,
            "unit": "ns/iter",
            "extra": "iterations: 41833\ncpu: 16754.607606435144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12791.656969628963,
            "unit": "ns/iter",
            "extra": "iterations: 54759\ncpu: 12791.267188955255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13121.470199797945,
            "unit": "ns/iter",
            "extra": "iterations: 53154\ncpu: 13120.559130074882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10540.107204064512,
            "unit": "ns/iter",
            "extra": "iterations: 66518\ncpu: 10539.720075769013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62207.46567931436,
            "unit": "ns/iter",
            "extra": "iterations: 11276\ncpu: 62203.14827953199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146627.51254705642,
            "unit": "ns/iter",
            "extra": "iterations: 4782\ncpu: 146619.21790046003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38491.49373075246,
            "unit": "ns/iter",
            "extra": "iterations: 18184\ncpu: 38488.80884293918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37899.22329677622,
            "unit": "ns/iter",
            "extra": "iterations: 18509\ncpu: 37897.44988924312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38152.83259671528,
            "unit": "ns/iter",
            "extra": "iterations: 18327\ncpu: 38150.10640039319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76296.88461118343,
            "unit": "ns/iter",
            "extra": "iterations: 9169\ncpu: 76292.38739230015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68036.93373493766,
            "unit": "ns/iter",
            "extra": "iterations: 10292\ncpu: 68036.46521570139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20545.55351376971,
            "unit": "ns/iter",
            "extra": "iterations: 34066\ncpu: 20545.661363235842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99825.7372106249,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 99826.20748785287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 80722.48880683664,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 80716.27048234562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77037.58756999427,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 77030.88832765988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79898.42308131083,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 79892.11996806969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148033.4234177075,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 148034.13502109764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 660162.5424354628,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 659153.2287822845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 546279.1449727772,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 546241.3094310295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 533183.9148289223,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 533153.4600760471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 534937.7717557773,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 534904.1984732877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 352956.03132895485,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 352943.25416877493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 527145.7366440917,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 527148.3822422909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20320.653031051286,
            "unit": "ns/iter",
            "extra": "iterations: 34493\ncpu: 20320.120024352917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98385.90932025693,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98385.56412053309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80391.81630547278,
            "unit": "ns/iter",
            "extra": "iterations: 8721\ncpu: 80391.13633757588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78000.76648443619,
            "unit": "ns/iter",
            "extra": "iterations: 8963\ncpu: 78000.23429655224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80316.4671407198,
            "unit": "ns/iter",
            "extra": "iterations: 8719\ncpu: 80315.8389723598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148440.45231029572,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 148439.42348452884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 642706.9283088116,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 642705.5147058775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 542556.1074766414,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 542537.6168224388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 531634.1874051683,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 531632.3216995422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 533682.7593582559,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 533685.1795263605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 351068.35090360907,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 351061.34538152785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 524373.741379317,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 524365.2173913008 ns\nthreads: 1"
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
        "date": 1705952851463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8487.831394783143,
            "unit": "ns/iter",
            "extra": "iterations: 82364\ncpu: 8487.341556990918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77286.41793632053,
            "unit": "ns/iter",
            "extra": "iterations: 10961\ncpu: 77283.51427789436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148399.6694929693,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 148395.25182296085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219349.5535175716,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 219335.82914572858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 288053.30106452305,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 288035.36260811694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 355663.4032058809,
            "unit": "ns/iter",
            "extra": "iterations: 2433\ncpu: 355654.5417180436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 426850.7216748694,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 426825.66502463043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 497553.13584476535,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 497533.7899543379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 565438.7363989304,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 565441.5155440414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6517.48910305884,
            "unit": "ns/iter",
            "extra": "iterations: 107599\ncpu: 6517.342168607506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5496.8215714161215,
            "unit": "ns/iter",
            "extra": "iterations: 127261\ncpu: 5496.669050219622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5515.296471424387,
            "unit": "ns/iter",
            "extra": "iterations: 126680\ncpu: 5515.319703189142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5529.169172101339,
            "unit": "ns/iter",
            "extra": "iterations: 126658\ncpu: 5529.067251969859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9297.135696577589,
            "unit": "ns/iter",
            "extra": "iterations: 75433\ncpu: 9296.917794599181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34461.97651035108,
            "unit": "ns/iter",
            "extra": "iterations: 23670\ncpu: 34461.90536544144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139803.3661487981,
            "unit": "ns/iter",
            "extra": "iterations: 6115\ncpu: 139804.17007358978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114323.21395037645,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 114321.69014084521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109144.70370843983,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 109144.19437340158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114748.91376986504,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 114747.08973322524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 276770.0807275254,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 276767.74090619065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2310575.0918113845,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2310530.5210918137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1899725.0508131331,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1899703.8617886214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1915136.2712215774,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1915132.298136642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1906350.9010310527,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1906361.649484532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1118595.6569342338,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1118591.6058394185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1848923.5361445833,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1848901.004016067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7581698.82000061,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7581644.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4332026.846511622,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4331940.930232565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9797989.313043496,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9797861.73913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33202.645198969556,
            "unit": "ns/iter",
            "extra": "iterations: 24828\ncpu: 33200.62832286134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 143593.22945034265,
            "unit": "ns/iter",
            "extra": "iterations: 5949\ncpu: 143585.98083711584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111478.51756103427,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 111471.66731949353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112873.39849325926,
            "unit": "ns/iter",
            "extra": "iterations: 7566\ncpu: 112867.08961141913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 117411.99225770202,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 117401.43785427923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 270939.6866791592,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 270924.76547842496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2342910.5969774444,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2342861.9647355177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1919065.929896955,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1919035.8762886527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1930656.3903966988,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1930624.0083507234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1923118.3258196951,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1923093.237704911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1130388.3739236211,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 1130348.8314883162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1857859.1237322937,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1857826.1663285966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7661749.320000126,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7661617.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4358156.320929908,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4358092.5581395365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32833.089566534814,
            "unit": "ns/iter",
            "extra": "iterations: 25054\ncpu: 32832.924882254265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135138.25918914983,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 135135.11594888716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106987.25037632088,
            "unit": "ns/iter",
            "extra": "iterations: 7972\ncpu: 106986.81635725031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108190.98081808382,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 108190.19308943095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109373.49001673811,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 109373.03877366996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 281850.4788411428,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 281842.7734375013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2322879.9598995517,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2322873.182957401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1914696.496907109,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1914663.0927835125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1926986.69709552,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1926977.3858921228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1903769.0306749416,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1903723.5173824185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1123741.882424149,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1123746.3030303041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1854266.952095795,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1854201.5968063914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3225.524739307752,
            "unit": "ns/iter",
            "extra": "iterations: 217306\ncpu: 3225.5013667363014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16681.103001525265,
            "unit": "ns/iter",
            "extra": "iterations: 41912\ncpu: 16680.65231914492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12629.061327130543,
            "unit": "ns/iter",
            "extra": "iterations: 55473\ncpu: 12629.131289095647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13431.352870771398,
            "unit": "ns/iter",
            "extra": "iterations: 55142\ncpu: 13431.054368720768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10654.40976121917,
            "unit": "ns/iter",
            "extra": "iterations: 65709\ncpu: 10654.301541645713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63613.16805111646,
            "unit": "ns/iter",
            "extra": "iterations: 10955\ncpu: 63612.68827019631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 152505.53430624047,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 152504.9008930518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39341.37810637994,
            "unit": "ns/iter",
            "extra": "iterations: 17786\ncpu: 39341.62262453635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39297.964151263455,
            "unit": "ns/iter",
            "extra": "iterations: 17797\ncpu: 39297.752430184526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39344.156873770524,
            "unit": "ns/iter",
            "extra": "iterations: 17785\ncpu: 39343.176834410726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78976.58913239995,
            "unit": "ns/iter",
            "extra": "iterations: 8852\ncpu: 78976.17487573464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70655.70454086812,
            "unit": "ns/iter",
            "extra": "iterations: 9910\ncpu: 70655.1261352167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21050.880858258188,
            "unit": "ns/iter",
            "extra": "iterations: 33137\ncpu: 21050.48435283817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102965.2747575612,
            "unit": "ns/iter",
            "extra": "iterations: 6806\ncpu: 102965.85365853498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82489.44968812128,
            "unit": "ns/iter",
            "extra": "iterations: 8497\ncpu: 82487.11309873998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80066.58463303185,
            "unit": "ns/iter",
            "extra": "iterations: 8720\ncpu: 80064.9426605501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82184.19443791917,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 82183.90049284282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153231.78633785364,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 153215.58271497372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 663884.7329545406,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 663875.0946969681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 560151.4227382657,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 560131.0648518907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 557931.4983999211,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 557912.239999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 555995.6370135283,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 555998.2525814102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 362721.63650551136,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 362712.68850754015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 547942.4984471584,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 547945.2639751554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20986.14455409753,
            "unit": "ns/iter",
            "extra": "iterations: 33337\ncpu: 20985.475597684403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 100898.49170155179,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 100899.11964208352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81540.12382171553,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 81538.50808797903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80222.02084287062,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80220.65964269274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82114.48190230846,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 82113.72847604557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152797.3377729389,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 152790.8733624457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 661995.5846735445,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 661999.337748336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 553642.4194312781,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 553630.2527646178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 555886.5698412594,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 555878.8095238167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 552790.6866613539,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 552787.134964486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 363006.49480251025,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 363000.7796257801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 543224.9704968749,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 543227.717391308 ns\nthreads: 1"
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
        "date": 1705954277303,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8804.173128876559,
            "unit": "ns/iter",
            "extra": "iterations: 78843\ncpu: 8803.508237890492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78975.23873245857,
            "unit": "ns/iter",
            "extra": "iterations: 10761\ncpu: 78972.2051853917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 151363.97524666705,
            "unit": "ns/iter",
            "extra": "iterations: 5777\ncpu: 151358.52518608273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 223568.58399794198,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 223560.3293028043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 295536.25741559727,
            "unit": "ns/iter",
            "extra": "iterations: 2933\ncpu: 295528.70780770556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 366570.96246310574,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 366558.16111345426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 433850.11133301863,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 433824.41337993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 509640.12173911516,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 509615.18840579747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 575345.6649041502,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 575324.2564441514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6873.361980162497,
            "unit": "ns/iter",
            "extra": "iterations: 101931\ncpu: 6872.970931316275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5695.720296869147,
            "unit": "ns/iter",
            "extra": "iterations: 123152\ncpu: 5695.49499805119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5710.048736784817,
            "unit": "ns/iter",
            "extra": "iterations: 123336\ncpu: 5709.920866575848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5697.670405451437,
            "unit": "ns/iter",
            "extra": "iterations: 122678\ncpu: 5697.549682909717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9629.5840352323,
            "unit": "ns/iter",
            "extra": "iterations: 72660\ncpu: 9629.293971924017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34887.35488791908,
            "unit": "ns/iter",
            "extra": "iterations: 23599\ncpu: 34886.75367600325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 139990.00261780267,
            "unit": "ns/iter",
            "extra": "iterations: 6112\ncpu: 139985.12761780096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113379.68919277353,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 113376.47371216124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113437.3305163065,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 113433.35534134462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 118963.61376404285,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 118957.7106741573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281303.59056909004,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 281291.67479674815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2404015.6119792634,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2403874.21875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1977432.2684989988,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1977337.4207188133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1964687.5182013714,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1964608.993576012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1969387.1099363882,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1969327.695560251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1143121.7714987833,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1143062.285012285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1902251.193814429,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1902135.8762886594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7667503.750000152,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7667156.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4214550.572071771,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4214251.80180181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9601367.23893807,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9600695.575221237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33748.51380944842,
            "unit": "ns/iter",
            "extra": "iterations: 24476\ncpu: 33746.310671678366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144952.00812871807,
            "unit": "ns/iter",
            "extra": "iterations: 5905\ncpu: 144944.911092295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116211.20961173081,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 116205.97339125679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114472.5216107378,
            "unit": "ns/iter",
            "extra": "iterations: 7450\ncpu: 114464.81879194657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118063.56203267873,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 118054.8186098034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 290681.19411961787,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 290666.1877714674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2447359.4476440377,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2447234.2931937343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1979284.719745263,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1979181.3163481958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1978567.3135592048,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1978476.6949152565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2045276.2680851594,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 2045191.0638297747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1151909.0185185948,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1151853.3333333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1934967.9708940508,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1934877.754677756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7737665.840001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7737446.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4376147.116822637,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4375892.5233644955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33250.51151681858,
            "unit": "ns/iter",
            "extra": "iterations: 24703\ncpu: 33249.095251588966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 136071.31084458448,
            "unit": "ns/iter",
            "extra": "iterations: 6003\ncpu: 136063.86806596696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113025.21791479852,
            "unit": "ns/iter",
            "extra": "iterations: 7558\ncpu: 113020.7594601744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113511.06751221411,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 113505.37719645946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 112843.98260984929,
            "unit": "ns/iter",
            "extra": "iterations: 7533\ncpu: 112839.08137528194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 288252.929395792,
            "unit": "ns/iter",
            "extra": "iterations: 2946\ncpu: 288230.99117447354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2423440.2909090244,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2423152.2077922057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1967454.488372,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1967274.2071881657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1983682.6532768114,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1983513.1078224112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1983338.3404256604,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1983169.5744680825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1152206.0725708457,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 1152107.626076263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1924090.2033196415,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1923897.717842325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3294.485612660469,
            "unit": "ns/iter",
            "extra": "iterations: 212826\ncpu: 3294.356422617543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17222.909426261194,
            "unit": "ns/iter",
            "extra": "iterations: 40663\ncpu: 17221.513415144036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13448.665846484453,
            "unit": "ns/iter",
            "extra": "iterations: 52021\ncpu: 13447.655754406953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13269.492703976863,
            "unit": "ns/iter",
            "extra": "iterations: 52837\ncpu: 13268.74160152916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11001.084611034601,
            "unit": "ns/iter",
            "extra": "iterations: 63656\ncpu: 11000.394306899578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67779.53800659801,
            "unit": "ns/iter",
            "extra": "iterations: 10314\ncpu: 67778.41768470059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151135.19513245902,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 151128.3006676714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 40348.269210818005,
            "unit": "ns/iter",
            "extra": "iterations: 17347\ncpu: 40347.52983224727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 40068.517498133835,
            "unit": "ns/iter",
            "extra": "iterations: 17459\ncpu: 40066.77358382517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 40546.211723379456,
            "unit": "ns/iter",
            "extra": "iterations: 17367\ncpu: 40542.51741809165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80135.8146241037,
            "unit": "ns/iter",
            "extra": "iterations: 8739\ncpu: 80129.53427165486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70295.79695023841,
            "unit": "ns/iter",
            "extra": "iterations: 9968\ncpu: 70293.57945425455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21667.833554600344,
            "unit": "ns/iter",
            "extra": "iterations: 32389\ncpu: 21666.831331625053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 106317.04605562668,
            "unit": "ns/iter",
            "extra": "iterations: 6579\ncpu: 106309.1047271623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 85754.66821516429,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 85745.62347188233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 84285.98854870065,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 84277.62777241935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 85806.63972031386,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 85800.26987242363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 158847.41347245732,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 158839.12451802887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 694152.0662710154,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 694127.1018793284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 580737.3027295663,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 580713.3995037246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 576536.5490518925,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 576512.2011541598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 582565.3233582939,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 582556.2759767316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 372208.7481442383,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 372189.5546129362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 566667.0622977373,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 566640.3721682837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21364.590047898895,
            "unit": "ns/iter",
            "extra": "iterations: 32777\ncpu: 21363.46218384865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104259.14253765202,
            "unit": "ns/iter",
            "extra": "iterations: 6707\ncpu: 104255.64335768677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 85131.89333009762,
            "unit": "ns/iter",
            "extra": "iterations: 8231\ncpu: 85125.35536386922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83239.85732985199,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 83235.78058067524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 85935.72246100557,
            "unit": "ns/iter",
            "extra": "iterations: 8143\ncpu: 85931.65909370033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157692.80955602712,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 157684.71940500176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 685351.4205881855,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 685325.3921568572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 576300.4775876552,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 576285.5745721243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 573555.1993437884,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 573530.8449548768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 580383.8038079315,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 580358.8576158879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 370173.77118648,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 370154.0783898362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 565825.66262139,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 565804.0453074476 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}