window.BENCHMARK_DATA = {
  "lastUpdate": 1702489599534,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-12 18.04 Debug c++-17": [
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
        "date": 1702489596737,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16579.746142123175,
            "unit": "ns/iter",
            "extra": "iterations: 41992\ncpu: 16578.786435511527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132111.37884495276,
            "unit": "ns/iter",
            "extra": "iterations: 6372\ncpu: 132105.4143126177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 249562.01661414822,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 249536.78029217993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 363559.2482090014,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 363536.91529709246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 483740.7306415551,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 483717.3119469025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 596421.5495186102,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 596426.5474552962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 594754.0869999557,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594429.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 667070.7276688654,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 667054.030501089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 758018.001635365,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 758013.9002452974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12836.535536673791,
            "unit": "ns/iter",
            "extra": "iterations: 54493\ncpu: 12836.043161506997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10751.553031119898,
            "unit": "ns/iter",
            "extra": "iterations: 65009\ncpu: 10751.659001061398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10770.773833235113,
            "unit": "ns/iter",
            "extra": "iterations: 65266\ncpu: 10770.40725645819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10853.152618917866,
            "unit": "ns/iter",
            "extra": "iterations: 64435\ncpu: 10853.104679134005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18717.297302351497,
            "unit": "ns/iter",
            "extra": "iterations: 37440\ncpu: 18717.467948717956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55347.99319999592,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55345.379999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 287014.3932282691,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 287013.44284277555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228440.84849294982,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 228434.35582822133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 220896.0110847118,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 220895.2230139877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 220162.9784583534,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 220155.1777835453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 505281.3969999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505286.0999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3986142.9827588047,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 3985968.5344827655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3240890.2657343596,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3240916.783216773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3240692.1254356564,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3240570.0348432097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3241306.8464287724,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3241139.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1921110.357588353,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1921102.9106029104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3155547.003412867,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3155360.4095563176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12301169.860465908,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12300876.744186051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5256668.450000461,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5256517.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15942429.590908928,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15942328.787878789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63451.78334081139,
            "unit": "ns/iter",
            "extra": "iterations: 13362\ncpu: 63449.74554707375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321713.03070010385,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 321710.6327218276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 261417.999392111,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 261408.78419452847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 254294.1931177458,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 254296.4698902398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252754.57710419587,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 252740.78869923486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 606296.7160839397,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 606278.0419580409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4083087.665198525,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4082901.321585922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3302721.992882439,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3302577.224199299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3294584.7188611524,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3294456.5836299043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3279380.496478888,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3279267.253521142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1970902.8853501573,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1970849.6815286623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3210080.4103449797,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3209917.931034483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12623216.559523782,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12622474.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5416049.100000463,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5415491.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54090.15709999495,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54089.71999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 272180.77604828135,
            "unit": "ns/iter",
            "extra": "iterations: 3148\ncpu: 272168.6785260496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 218912.91057742463,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 218906.15738375217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 213674.2807499843,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 213666.14999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 213377.60159958844,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 213377.05573606602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 574098.6615178369,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 574066.8905305571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4033410.9347826517,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4033176.5217391327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3249156.5191638465,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3248985.7142857155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3257625.111887916,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3257497.9020979134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3247334.0662020585,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3247213.240418128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1929151.8364388484,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1929050.5175983517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3160392.180272235,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3160212.5850340105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6584.468650842234,
            "unit": "ns/iter",
            "extra": "iterations: 106207\ncpu: 6584.095210296893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36924.97147978246,
            "unit": "ns/iter",
            "extra": "iterations: 18969\ncpu: 36922.905793663274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28967.35100079786,
            "unit": "ns/iter",
            "extra": "iterations: 24980\ncpu: 28966.056845476316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29549.204029814326,
            "unit": "ns/iter",
            "extra": "iterations: 24418\ncpu: 29548.271766729697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23055.572728171388,
            "unit": "ns/iter",
            "extra": "iterations: 30339\ncpu: 23054.372260127286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 174546.2141252903,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 174535.23833291605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 270060.0448222855,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 270043.7789799082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69364.47160273696,
            "unit": "ns/iter",
            "extra": "iterations: 10089\ncpu: 69362.81098225774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69461.97736747444,
            "unit": "ns/iter",
            "extra": "iterations: 10074\ncpu: 69460.70081397619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69088.38968340703,
            "unit": "ns/iter",
            "extra": "iterations: 10139\ncpu: 69084.40674622692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134294.77367607664,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 134287.20525705643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128223.59032612154,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 128223.34188347404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43492.682447970445,
            "unit": "ns/iter",
            "extra": "iterations: 16095\ncpu: 43491.84840012406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 205475.49084465078,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 205473.47903130727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170018.32178338626,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 170012.16379936997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 169851.28010661635,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 169848.09789193355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 170258.73978601594,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 170257.75778210064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 324496.5648362042,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 324486.0175357688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1168612.887959718,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1168558.695652182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 987667.2764457793,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 987618.1946403522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 977869.1050420316,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 977878.0112044723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 984440.8525281595,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 984414.8876404514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 653393.3383037505,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 653360.2050326145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 969714.8088642448,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 969696.1218836639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43975.617765220224,
            "unit": "ns/iter",
            "extra": "iterations: 15930\ncpu: 43974.965473948345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 207993.22179334654,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 207995.10095011658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 171223.2202059874,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171217.28788621983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169987.83118776255,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 169987.02939033564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171833.0377126025,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 171834.6315011097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 319182.8540145628,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 319181.2500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1159022.4100001478,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1158988.1666666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 980912.0377096275,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 980865.7821229247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 978395.7220670802,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 978342.7374301665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 979231.064066813,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 979160.1671309319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 650454.9386617155,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 650449.721189594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 970453.7552155738,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 970408.4840055596 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}