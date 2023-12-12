window.BENCHMARK_DATA = {
  "lastUpdate": 1702381139730,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-7 18.04 Debug c++-17": [
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
        "date": 1702381138835,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8636.782681269147,
            "unit": "ns/iter",
            "extra": "iterations: 83274\ncpu: 8636.48077431131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99190.77279053995,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 99188.9236836001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192684.31205985456,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 192681.00792253518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 288135.3618857884,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 288126.0624169987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372801.4866870239,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 372797.68659973814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 467853.2016129111,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 467833.1182795697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 552584.8206590493,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 552570.6590621042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 515796.4720000336,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515797.19999999885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 589403.4450000164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589377.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6614.902813613474,
            "unit": "ns/iter",
            "extra": "iterations: 105807\ncpu: 6614.683338531475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5377.135880696661,
            "unit": "ns/iter",
            "extra": "iterations: 130357\ncpu: 5376.948687067055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5475.785379539383,
            "unit": "ns/iter",
            "extra": "iterations: 127602\ncpu: 5475.782511245907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5351.970008333175,
            "unit": "ns/iter",
            "extra": "iterations: 130803\ncpu: 5351.8711344541025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9239.775377003738,
            "unit": "ns/iter",
            "extra": "iterations: 75994\ncpu: 9239.503118667257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50321.02131924243,
            "unit": "ns/iter",
            "extra": "iterations: 16464\ncpu: 50319.612487852246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 212864.34646062137,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 212861.29112661982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 171155.1023685357,
            "unit": "ns/iter",
            "extra": "iterations: 4982\ncpu: 171152.2882376553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 171220.66934673433,
            "unit": "ns/iter",
            "extra": "iterations: 4975\ncpu: 171217.6281407032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 169567.63164155555,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 169564.25455987314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 379942.974134152,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 379929.89916703297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3057725.779220868,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3057697.402597404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2500738.5893333475,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2500679.4666666677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2538018.428571428,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2537896.4959568777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2492466.5653334158,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2492406.666666663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1504361.395461913,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1504309.076175042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2427698.5931758196,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2427614.1732283495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10376475.725489983,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10376110.784313723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5935817.778481075,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5935674.050632908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12320300.96511626,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12319865.116279095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51367.54306397642,
            "unit": "ns/iter",
            "extra": "iterations: 16162\ncpu: 51365.99430763528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 214691.89402650183,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 214687.10322419318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 172398.1212487393,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 172394.5619335346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 172548.99919613844,
            "unit": "ns/iter",
            "extra": "iterations: 4976\ncpu: 172545.23713826347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 175241.6569387819,
            "unit": "ns/iter",
            "extra": "iterations: 4900\ncpu: 175237.06122448936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 385609.1623893803,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 385601.327433629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3087378.394039715,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3087215.5629139077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2521761.615819184,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2521645.762711868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2543973.370879184,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2543878.5714285695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2500423.927614064,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2500333.512064329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1511718.6152597337,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1511669.4805194861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2452943.469816145,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2452849.0813648175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10584364.594059465,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10565923.762376264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6034391.922580726,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6034201.93548391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50050.41599903795,
            "unit": "ns/iter",
            "extra": "iterations: 16601\ncpu: 50049.15366544186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212499.0084158438,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 212490.29702970374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 170165.11814932633,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 170159.33280381295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 168696.00610116535,
            "unit": "ns/iter",
            "extra": "iterations: 5081\ncpu: 168687.2072426686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 172291.8457831276,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 172283.99598393618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 378540.22812363546,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 378530.3439268621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3055909.2983605564,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3055825.245901644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2517956.8817204093,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2517873.3870967785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2530703.474254708,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2530624.6612466034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2507292.4491978553,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2507191.9786096285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1514763.7386364152,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1514710.389610393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2452489.149606252,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2452380.8398950123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2911.480888492096,
            "unit": "ns/iter",
            "extra": "iterations: 239777\ncpu: 2911.434791493777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20988.898717872424,
            "unit": "ns/iter",
            "extra": "iterations: 33382\ncpu: 20987.46030795056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15103.033485605009,
            "unit": "ns/iter",
            "extra": "iterations: 46408\ncpu: 15102.01689363897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16178.586016154906,
            "unit": "ns/iter",
            "extra": "iterations: 43207\ncpu: 16177.86701228967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12302.163498299484,
            "unit": "ns/iter",
            "extra": "iterations: 57022\ncpu: 12302.015011749796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86349.18433066118,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 86345.39173349767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 197368.70442378693,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 197362.69371654064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47732.1129989757,
            "unit": "ns/iter",
            "extra": "iterations: 14655\ncpu: 47731.08836574528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47833.85130797209,
            "unit": "ns/iter",
            "extra": "iterations: 14641\ncpu: 47831.9855201148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47347.66113294246,
            "unit": "ns/iter",
            "extra": "iterations: 14758\ncpu: 47346.03604824419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102993.27003535649,
            "unit": "ns/iter",
            "extra": "iterations: 6788\ncpu: 102989.68768414886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90376.43948796966,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 90374.17895009134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26774.802728106373,
            "unit": "ns/iter",
            "extra": "iterations: 26172\ncpu: 26773.41433593163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130842.40086046059,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 130841.07744107644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 105523.17624868175,
            "unit": "ns/iter",
            "extra": "iterations: 6627\ncpu: 105521.9103666815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 105581.15886438674,
            "unit": "ns/iter",
            "extra": "iterations: 6622\ncpu: 105578.42041679195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 105566.09272918948,
            "unit": "ns/iter",
            "extra": "iterations: 6643\ncpu: 105562.0051181691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 183551.8376606315,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 183547.0495672684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 834484.156956009,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 834460.5231866915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 702703.068341705,
            "unit": "ns/iter",
            "extra": "iterations: 995\ncpu: 702696.180904517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 706806.9230769544,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 706788.4615384613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 702705.9226907657,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 702677.6104417705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 452779.9909502126,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 452773.17388493504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 686759.7517173999,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 686728.4592738083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26849.573069975282,
            "unit": "ns/iter",
            "extra": "iterations: 26023\ncpu: 26848.399492756325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 131254.9898800561,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131250.00000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105055.8168168146,
            "unit": "ns/iter",
            "extra": "iterations: 6660\ncpu: 105052.38738738734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105447.48487584556,
            "unit": "ns/iter",
            "extra": "iterations: 6645\ncpu: 105446.4409330322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 106422.50426179482,
            "unit": "ns/iter",
            "extra": "iterations: 6570\ncpu: 106418.81278538807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 185871.72275640964,
            "unit": "ns/iter",
            "extra": "iterations: 3744\ncpu: 185868.2158119654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 830530.6733727802,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 830488.639053261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 701243.2725451286,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 701222.144288569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 702686.5995976116,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 702676.8611669943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 695361.3717693881,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 695353.0815109309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 452139.04454486695,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 452129.6320206588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 684267.117302054,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 684257.8690127042 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}