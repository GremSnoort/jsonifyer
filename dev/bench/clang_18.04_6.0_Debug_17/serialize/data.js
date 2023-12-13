window.BENCHMARK_DATA = {
  "lastUpdate": 1702492164306,
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
      }
    ]
  }
}