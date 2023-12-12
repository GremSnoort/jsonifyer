window.BENCHMARK_DATA = {
  "lastUpdate": 1702388122070,
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
        "date": 1702382305275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8429.905888007483,
            "unit": "ns/iter",
            "extra": "iterations: 83220\ncpu: 8429.615477048786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97758.05368204252,
            "unit": "ns/iter",
            "extra": "iterations: 8718\ncpu: 97753.99174122502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 188689.72805879035,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 188684.08992650235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 282597.29256360896,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 282583.52902804955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 367094.5749892669,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 367096.1753330469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 455921.9842684889,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 455912.11326691124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 543076.6274999854,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 543067.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 505699.7899999942,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505665.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 579987.5289999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579990.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6593.109104434082,
            "unit": "ns/iter",
            "extra": "iterations: 106201\ncpu: 6592.887072626432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5447.944668282457,
            "unit": "ns/iter",
            "extra": "iterations: 128317\ncpu: 5447.787900278218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5458.967216704586,
            "unit": "ns/iter",
            "extra": "iterations: 127870\ncpu: 5458.911394384924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5369.945574296369,
            "unit": "ns/iter",
            "extra": "iterations: 129663\ncpu: 5369.829481039314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9125.803058949386,
            "unit": "ns/iter",
            "extra": "iterations: 76693\ncpu: 9125.647712307513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52837.93569707624,
            "unit": "ns/iter",
            "extra": "iterations: 16189\ncpu: 52836.33331274325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 212742.936297787,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 212741.0691981015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 174216.0940865698,
            "unit": "ns/iter",
            "extra": "iterations: 4921\ncpu: 174212.80227595987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172987.02879156155,
            "unit": "ns/iter",
            "extra": "iterations: 4932\ncpu: 172987.69261962696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 171724.49687184204,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 171718.3047426842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 384968.4029649718,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 384957.18778077303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3007891.430379596,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 3007823.734177219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2443420.8769634315,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2443355.759162298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2465788.8249336565,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2465742.7055702903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2445353.888888897,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2445287.533875335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1492193.459501523,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1492190.654205612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2409064.203608272,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2404601.546391752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10253657.844660241,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10253303.883495156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6092307.000000193,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6092201.298701304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12193212.264367308,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12192921.839080425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 51577.428553906146,
            "unit": "ns/iter",
            "extra": "iterations: 16306\ncpu: 51577.00233043059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 218113.00126807674,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 218108.7243215823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 175003.82677807595,
            "unit": "ns/iter",
            "extra": "iterations: 4907\ncpu: 175004.5241491739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173855.96715994374,
            "unit": "ns/iter",
            "extra": "iterations: 4933\ncpu: 173852.17920129705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 176671.30813475803,
            "unit": "ns/iter",
            "extra": "iterations: 4868\ncpu: 176669.82333607247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 392969.15092634613,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 392961.8165386355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3008106.9421221344,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3008049.8392283055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2468568.7055702102,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2468489.9204244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2469029.5505318446,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2468916.4893616973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2461652.5242966525,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2461608.184143211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1493236.506451654,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1493176.1290322659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2405605.618556692,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2405539.690721661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10398871.76699053,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10398220.388349459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5862443.347825845,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5862153.4161490435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50315.34135802666,
            "unit": "ns/iter",
            "extra": "iterations: 16200\ncpu: 50313.808641975025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 216264.68334179817,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 216257.49111223948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 175359.47172892615,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 175356.52173913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 172389.928585802,
            "unit": "ns/iter",
            "extra": "iterations: 4971\ncpu: 172380.20519010362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 175593.292667898,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 175591.72314643572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 390914.50608930946,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 390905.9990978808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3021541.7709677415,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3021500.645161291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2486192.2154254983,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2486153.723404259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2475906.5437665326,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2475836.074270552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2478431.201058219,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2478395.238095232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1504399.1854838624,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1504329.5161290294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2415108.9405684685,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2415037.9844961213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2939.0158987248406,
            "unit": "ns/iter",
            "extra": "iterations: 238321\ncpu: 2938.956281653734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20901.95562896071,
            "unit": "ns/iter",
            "extra": "iterations: 33603\ncpu: 20902.029580692146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16672.855312844134,
            "unit": "ns/iter",
            "extra": "iterations: 41842\ncpu: 16671.934897949595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16399.157075428222,
            "unit": "ns/iter",
            "extra": "iterations: 44068\ncpu: 16398.71108287193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12467.425846438251,
            "unit": "ns/iter",
            "extra": "iterations: 56147\ncpu: 12466.956382353355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89279.90913737692,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 89278.21086262085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 194291.86746317885,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 194288.02445123787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47254.26640535129,
            "unit": "ns/iter",
            "extra": "iterations: 14797\ncpu: 47253.27431236095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47124.6990690763,
            "unit": "ns/iter",
            "extra": "iterations: 14824\ncpu: 47122.652455477306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47180.480855932874,
            "unit": "ns/iter",
            "extra": "iterations: 14861\ncpu: 47180.64060292004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102172.79956299959,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 102167.3561544077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 89596.17251986702,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 89594.27069982108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26613.889104318838,
            "unit": "ns/iter",
            "extra": "iterations: 26304\ncpu: 26612.739507298935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 128792.7277931694,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 128790.24930748045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103963.7999406808,
            "unit": "ns/iter",
            "extra": "iterations: 6743\ncpu: 103961.64911760461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103917.4346923711,
            "unit": "ns/iter",
            "extra": "iterations: 6745\ncpu: 103914.36619718157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104041.31958456895,
            "unit": "ns/iter",
            "extra": "iterations: 6740\ncpu: 104038.39762611163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 183031.14155371397,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 183022.732012512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 816742.5619159298,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 816725.4672897209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 693723.6830000301,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 693702.8999999911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 688981.6689587596,
            "unit": "ns/iter",
            "extra": "iterations: 1018\ncpu: 688967.4852652315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 693272.4531095328,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 693261.9940770064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 448905.6455534053,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 448897.6327575189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 677385.1924565103,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 677370.4061895546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26709.862640503383,
            "unit": "ns/iter",
            "extra": "iterations: 26245\ncpu: 26708.496856544018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 130279.36535959454,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130275.95242520054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104044.1191255179,
            "unit": "ns/iter",
            "extra": "iterations: 6724\ncpu: 104039.18798334422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 102797.61527035125,
            "unit": "ns/iter",
            "extra": "iterations: 6732\ncpu: 102794.26619132618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105286.79338345936,
            "unit": "ns/iter",
            "extra": "iterations: 6650\ncpu: 105287.21804511444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184452.94696770806,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 184447.7290627481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 817442.2412587251,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 817418.2983683094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 692964.2831683323,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 692927.2277227821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 690392.8991097976,
            "unit": "ns/iter",
            "extra": "iterations: 1011\ncpu: 690379.228486642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 688938.6222879564,
            "unit": "ns/iter",
            "extra": "iterations: 1014\ncpu: 688924.8520710072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 449663.8785347072,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449650.4498714644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 673855.9865771998,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 673847.3633748732 ns\nthreads: 1"
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
        "date": 1702387026126,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8404.28514032118,
            "unit": "ns/iter",
            "extra": "iterations: 83380\ncpu: 8403.793475653636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96807.64131668668,
            "unit": "ns/iter",
            "extra": "iterations: 8810\ncpu: 96803.22360953462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 188029.59639717362,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 188021.7671027236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 282453.25097911624,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 282443.2441253265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 365545.26038543327,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 365525.18201284774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 455522.62800419005,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 455514.0020898643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 543049.9849624049,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 543040.2255639099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 509114.47100003215,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509099.19999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 579826.1720000255,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579810.1000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6515.6059150965575,
            "unit": "ns/iter",
            "extra": "iterations: 107251\ncpu: 6515.225032866826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5344.100850972742,
            "unit": "ns/iter",
            "extra": "iterations: 131144\ncpu: 5344.024126151406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5386.187789632312,
            "unit": "ns/iter",
            "extra": "iterations: 129906\ncpu: 5386.041445352787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5297.408644311499,
            "unit": "ns/iter",
            "extra": "iterations: 132110\ncpu: 5297.377942623581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9194.750557903611,
            "unit": "ns/iter",
            "extra": "iterations: 76178\ncpu: 9194.64281026016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50611.84890377333,
            "unit": "ns/iter",
            "extra": "iterations: 16420\ncpu: 50611.00487210717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 211194.23516374477,
            "unit": "ns/iter",
            "extra": "iterations: 4061\ncpu: 211185.93942378703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172622.54399033927,
            "unit": "ns/iter",
            "extra": "iterations: 4967\ncpu: 172621.72337427043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172705.13202983324,
            "unit": "ns/iter",
            "extra": "iterations: 4961\ncpu: 172702.58012497475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 173497.71087264185,
            "unit": "ns/iter",
            "extra": "iterations: 4939\ncpu: 173496.57825470713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 384499.14387211733,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 384469.8046181165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2999871.6603174782,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2999831.4285714333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2448289.532637019,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2448163.968668406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2457486.303430083,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2457437.9947229554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2435205.7068063123,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2435140.3141361293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1471363.4100946381,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1471330.9148265005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2382357.1150894957,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2382315.601023017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10217433.31067985,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10216923.30097089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5860870.672956119,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5860776.100628915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12149300.563217774,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12148589.655172434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50784.89421487889,
            "unit": "ns/iter",
            "extra": "iterations: 16335\ncpu: 50782.83440465249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216258.26432160643,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 216254.92462311612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 172776.22396776726,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 172772.48741188314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173454.46004843386,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 173451.79580306643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 174902.31270357798,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 174896.45765472396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 391050.5985598641,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 391041.35913591186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3008663.2064516777,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3008519.9999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2471874.4074074454,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2471821.428571444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2464494.831134699,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2464411.345646442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2446132.031578947,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2446059.210526311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1488341.4728434326,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1488313.4185303506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2403971.5512821237,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2403889.4871794833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10448494.990291096,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10448162.135922356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5924370.777070093,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5924154.777070053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49602.98983314584,
            "unit": "ns/iter",
            "extra": "iterations: 16721\ncpu: 49600.98678308711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212787.4862453564,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 212783.42007434997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172984.6826419547,
            "unit": "ns/iter",
            "extra": "iterations: 4966\ncpu: 172975.37253322618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 169752.56011091493,
            "unit": "ns/iter",
            "extra": "iterations: 5049\ncpu: 169750.26737967992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 173248.37472149942,
            "unit": "ns/iter",
            "extra": "iterations: 4937\ncpu: 173241.05732226095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 384807.193106486,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 384032.9209014593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2990280.233974319,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2990185.5769230733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2471932.7718833,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2471850.397877992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2459142.8921052297,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2459036.5789473737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2446716.143979105,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2446637.4345549727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1487016.809599936,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1486961.2800000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2404546.5526992865,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2404417.480719794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2922.620502308044,
            "unit": "ns/iter",
            "extra": "iterations: 240012\ncpu: 2922.50637468127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21134.928517545737,
            "unit": "ns/iter",
            "extra": "iterations: 33141\ncpu: 21134.069581484993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16318.897271942671,
            "unit": "ns/iter",
            "extra": "iterations: 42851\ncpu: 16318.582996896197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15808.359428596337,
            "unit": "ns/iter",
            "extra": "iterations: 44312\ncpu: 15807.891767467163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12349.10105530233,
            "unit": "ns/iter",
            "extra": "iterations: 56761\ncpu: 12348.720071880323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87515.0797599732,
            "unit": "ns/iter",
            "extra": "iterations: 7999\ncpu: 87514.57682210211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 194094.5805108306,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 194093.69794558408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47070.26968106461,
            "unit": "ns/iter",
            "extra": "iterations: 14862\ncpu: 47068.873637464625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47041.58905399168,
            "unit": "ns/iter",
            "extra": "iterations: 14873\ncpu: 47040.59033147247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46996.588262882375,
            "unit": "ns/iter",
            "extra": "iterations: 14927\ncpu: 46995.14302941011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 101825.2098837247,
            "unit": "ns/iter",
            "extra": "iterations: 6880\ncpu: 101819.46220930354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84701.23628030265,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84695.03075624202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 27206.907836188053,
            "unit": "ns/iter",
            "extra": "iterations: 26518\ncpu: 27205.188928275435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127040.66600108203,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127036.90324922674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 102811.16433102835,
            "unit": "ns/iter",
            "extra": "iterations: 6779\ncpu: 102810.75379849525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 102380.35988890455,
            "unit": "ns/iter",
            "extra": "iterations: 6841\ncpu: 102377.25478731292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 103043.57254381932,
            "unit": "ns/iter",
            "extra": "iterations: 6789\ncpu: 103040.6392694081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 183152.5578837126,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 183145.59979046573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 820216.7323290731,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 820170.9154113573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 704879.218142601,
            "unit": "ns/iter",
            "extra": "iterations: 926\ncpu: 704873.7580993518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 685279.120588243,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 685253.9215686296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 684643.1173020754,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 684608.8954056771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 445942.2326322624,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 445918.2281708035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 671669.0479846252,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 671643.7619961633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26515.800415094385,
            "unit": "ns/iter",
            "extra": "iterations: 26500\ncpu: 26514.81132075457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128209.79322964813,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128199.92680695326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 102955.94406829182,
            "unit": "ns/iter",
            "extra": "iterations: 6794\ncpu: 102951.00088313357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 102629.11044294391,
            "unit": "ns/iter",
            "extra": "iterations: 6818\ncpu: 102628.43942505139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 103386.07417258246,
            "unit": "ns/iter",
            "extra": "iterations: 6768\ncpu: 103385.53486997623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 183075.0722324058,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183068.7778068561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 811654.7696758797,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 811601.1574074114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 687417.595098032,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 687375.6862745077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 684212.3849167295,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 684198.3349657182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 681756.7199210909,
            "unit": "ns/iter",
            "extra": "iterations: 1014\ncpu: 681739.053254441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 459505.1001275384,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 459500.829081636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 671714.5953978987,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 671706.3279002826 ns\nthreads: 1"
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
        "date": 1702388121458,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8587.440511307717,
            "unit": "ns/iter",
            "extra": "iterations: 81360\ncpu: 8586.827679449363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99511.6663557889,
            "unit": "ns/iter",
            "extra": "iterations: 8578\ncpu: 99509.29121007225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 195475.74486414605,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 195470.66489949194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 288651.86513487966,
            "unit": "ns/iter",
            "extra": "iterations: 3003\ncpu: 288649.48384948383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375466.15283267864,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 375452.7009222661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 468201.7061027944,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 468180.67451820156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 558941.4480769214,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 558928.7820512822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 521879.6650000286,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521793.0999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 595325.7180000264,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6774.882440476066,
            "unit": "ns/iter",
            "extra": "iterations: 103488\ncpu: 6774.793212739634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5506.963544667728,
            "unit": "ns/iter",
            "extra": "iterations: 126703\ncpu: 5506.250838575245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5595.593281790279,
            "unit": "ns/iter",
            "extra": "iterations: 124944\ncpu: 5595.20024971186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5475.292919033643,
            "unit": "ns/iter",
            "extra": "iterations: 127991\ncpu: 5474.772444937532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9493.582948216217,
            "unit": "ns/iter",
            "extra": "iterations: 73787\ncpu: 9493.397210890796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50444.56795082513,
            "unit": "ns/iter",
            "extra": "iterations: 16431\ncpu: 50441.00785101329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 215319.86076904048,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 215304.54888162852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 173301.11090871925,
            "unit": "ns/iter",
            "extra": "iterations: 4941\ncpu: 173284.13276664654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172304.27095478377,
            "unit": "ns/iter",
            "extra": "iterations: 4975\ncpu: 172289.50753768865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 172124.52184369118,
            "unit": "ns/iter",
            "extra": "iterations: 4990\ncpu: 172112.3246492992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 391333.50449236255,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 391300.8535489669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3074162.6547230706,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3073893.159609123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2481020.7400529585,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2480857.294429701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2508483.789757407,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2508349.326145549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2479914.7393617295,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2479827.9255319214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1531960.9918032123,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1531841.4754098342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2428769.6370757176,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2428600.261096607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10519262.109999659,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10518543.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6078698.837662635,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6078051.298701285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12506110.011764469,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12505457.64705882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50044.26839038473,
            "unit": "ns/iter",
            "extra": "iterations: 16476\ncpu: 50040.24034959929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 214523.50712678873,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 214502.10052513148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 172741.02193158216,
            "unit": "ns/iter",
            "extra": "iterations: 4970\ncpu: 172731.34808853187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 172577.04145703794,
            "unit": "ns/iter",
            "extra": "iterations: 4969\ncpu: 172562.6886697525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 175437.93349703995,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 175424.2275424601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 393333.75890042435,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 393304.776926545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3075839.551155074,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3075624.7524752324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2504904.9784365646,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2504771.6981132044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2516112.9056602973,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2515925.0673854514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2498488.772117975,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2498291.4209115184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1529602.6825657915,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1529467.4342105163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2588663.7275281567,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2581137.9213483264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10703803.603960432,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10703055.445544524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6130786.217105155,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6130443.421052652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50638.31021675611,
            "unit": "ns/iter",
            "extra": "iterations: 16424\ncpu: 50634.565270336345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 213151.39880655194,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 213134.80855295734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 171408.67753036547,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 171370.24291498025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170525.16663340645,
            "unit": "ns/iter",
            "extra": "iterations: 5011\ncpu: 170507.42366793007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 172766.48213203985,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 172753.50292751793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 387174.61222666356,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 387143.81972333725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3067645.917491722,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3067469.966996689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2517187.929919082,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2516971.428571425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2511671.9353100127,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2511604.312668462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2497291.3619302716,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2497213.672922239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1530768.3690280349,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1530697.3640856617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2447816.48556427,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2447768.5039370037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2996.142575712864,
            "unit": "ns/iter",
            "extra": "iterations: 234009\ncpu: 2995.945455089355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21236.002997307998,
            "unit": "ns/iter",
            "extra": "iterations: 32696\ncpu: 21235.20002446778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15933.073647294625,
            "unit": "ns/iter",
            "extra": "iterations: 43912\ncpu: 15932.08690107482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16261.394995269595,
            "unit": "ns/iter",
            "extra": "iterations: 44398\ncpu: 16261.259516194354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12469.960326637838,
            "unit": "ns/iter",
            "extra": "iterations: 56209\ncpu: 12470.033268693602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87572.7930386841,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 87566.44547389545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 197317.2868435972,
            "unit": "ns/iter",
            "extra": "iterations: 3542\ncpu: 197302.37154150358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48084.98175582814,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 48081.97530864244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47929.05250188204,
            "unit": "ns/iter",
            "extra": "iterations: 14609\ncpu: 47928.09227188715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47745.021276597225,
            "unit": "ns/iter",
            "extra": "iterations: 14664\ncpu: 47741.34615384591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 104553.38251935497,
            "unit": "ns/iter",
            "extra": "iterations: 6716\ncpu: 104550.89338892318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 91058.21534460713,
            "unit": "ns/iter",
            "extra": "iterations: 7690\ncpu: 91058.76462938813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26572.810976998873,
            "unit": "ns/iter",
            "extra": "iterations: 26346\ncpu: 26572.952250815542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 129023.23498070681,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 129013.33823259351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 104390.30184743597,
            "unit": "ns/iter",
            "extra": "iterations: 6712\ncpu: 104382.41954707938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104649.08022108726,
            "unit": "ns/iter",
            "extra": "iterations: 6694\ncpu: 104639.18434419013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104557.03237356972,
            "unit": "ns/iter",
            "extra": "iterations: 6703\ncpu: 104548.73937043117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 185419.93988346602,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 185415.7044491539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 831681.2318668335,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 831674.4351961816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 702452.6649899138,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 702456.6398390335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 700556.3006012226,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700498.5971943906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 702444.6820926018,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 702425.2515090442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 455677.1944083305,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 455623.40702210634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 686258.0019550347,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 686235.0928641194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26946.210289188937,
            "unit": "ns/iter",
            "extra": "iterations: 25969\ncpu: 26944.040971927825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129709.3457269662,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 129706.17832038237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104481.34973899892,
            "unit": "ns/iter",
            "extra": "iterations: 6705\ncpu: 104480.14914243053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104526.2154307085,
            "unit": "ns/iter",
            "extra": "iterations: 6675\ncpu: 104520.17977528083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105610.08847022854,
            "unit": "ns/iter",
            "extra": "iterations: 6635\ncpu: 105606.87264506437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 188645.58461124604,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 188635.27037933582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 826616.4278960138,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 826593.617021278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700387.6180000361,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 700365.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 699082.701000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 699045.6000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 698338.9960159381,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 698324.7011952272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 455200.9219258169,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 455186.2068965582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 684350.3750000313,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 684331.5429687497 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}