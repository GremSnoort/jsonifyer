window.BENCHMARK_DATA = {
  "lastUpdate": 1702492167467,
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
        "date": 1702492164651,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16854.849863118106,
            "unit": "ns/iter",
            "extra": "iterations: 41642\ncpu: 16854.00557129821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 137998.24058752364,
            "unit": "ns/iter",
            "extra": "iterations: 5923\ncpu: 137995.10383251734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 251418.92832370906,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 251411.7341040463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 365441.9710338413,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 365432.9322638145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 482197.8139922432,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 482185.89672404184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 598384.1640247742,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 598372.6395589248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 574861.2229999708,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574847.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 667312.8306685882,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 667304.9418604653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 760644.3245685799,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 760611.914543961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13424.080680097004,
            "unit": "ns/iter",
            "extra": "iterations: 52169\ncpu: 13423.740152197686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11273.0723463642,
            "unit": "ns/iter",
            "extra": "iterations: 62339\ncpu: 11272.869311346036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11124.379686358487,
            "unit": "ns/iter",
            "extra": "iterations: 63002\ncpu: 11124.354782387858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11287.07164049097,
            "unit": "ns/iter",
            "extra": "iterations: 62018\ncpu: 11286.719984520616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18665.474460719128,
            "unit": "ns/iter",
            "extra": "iterations: 37550\ncpu: 18665.422103861532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56563.368500007986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56561.81999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300149.47172461916,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 300144.1166139794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235694.02609172312,
            "unit": "ns/iter",
            "extra": "iterations: 3641\ncpu: 235693.98516891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 235883.20011023773,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 235884.1786108053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227987.47969000082,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 227980.43826830626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 511669.2290000628,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511644.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4099543.2422907134,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4099370.044052865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3319405.5428570635,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3319188.2142857085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3299479.7517728573,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3299251.418439718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3296745.7188611934,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3296695.7295373734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1919118.1535269516,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1919047.3029045647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3204999.1527777086,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3204928.125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12196603.954022203,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12196327.586206887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5319919.400000117,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5319897.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15925028.257575406,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15924249.999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64128.125958211516,
            "unit": "ns/iter",
            "extra": "iterations: 13306\ncpu: 64127.19074101925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322064.3162424914,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 322055.8008982028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257289.5298888517,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 257288.16461399777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 265129.68094943196,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 265122.47225647164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258800.31246201738,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 258782.58358662616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 617056.182849024,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 617008.646350107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4169373.78571447,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4169179.9107142887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3407689.0220588627,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3407498.897058805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3402070.619433274,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3401772.8744939486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3341566.852518128,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3341382.0143884826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1973307.0531914409,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1973172.9787233965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3282010.4805650385,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3281878.445229698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12551232.458823131,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12550362.352941135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5381603.00999948,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5380971.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55655.39120000267,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55654.510000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 286929.4898163615,
            "unit": "ns/iter",
            "extra": "iterations: 2995\ncpu: 286928.38063438993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 226641.532752236,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 226638.959323825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228623.58317807066,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 228614.45302102776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221622.546887109,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 221616.4298630856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 582633.1894596564,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 582619.279519676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4141050.768888716,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4141029.3333333293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3336113.139784823,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3336011.1111111036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3332427.931899487,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3332283.1541218655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3279367.41696096,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3279324.028268569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1903820.075664501,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1903763.5991819985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3224231.6736111026,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3224164.2361110984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6621.419544584876,
            "unit": "ns/iter",
            "extra": "iterations: 105574\ncpu: 6621.281754977593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37714.527265870165,
            "unit": "ns/iter",
            "extra": "iterations: 18558\ncpu: 37714.41426877922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30415.775697517794,
            "unit": "ns/iter",
            "extra": "iterations: 24623\ncpu: 30414.482394509185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30161.992129161365,
            "unit": "ns/iter",
            "extra": "iterations: 24775\ncpu: 30161.348133198757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23260.34155245167,
            "unit": "ns/iter",
            "extra": "iterations: 30133\ncpu: 23259.645571300443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 175181.44397197614,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 175176.01300650171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 277809.6393182786,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 277794.8870392417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70746.0507275637,
            "unit": "ns/iter",
            "extra": "iterations: 9896\ncpu: 70745.41228779253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70925.56490872045,
            "unit": "ns/iter",
            "extra": "iterations: 9860\ncpu: 70924.40162271744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70527.95367105908,
            "unit": "ns/iter",
            "extra": "iterations: 9929\ncpu: 70526.06506193978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142132.87020108433,
            "unit": "ns/iter",
            "extra": "iterations: 4923\ncpu: 142131.0989234203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130377.0821635796,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 130371.73872356537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43660.88902759189,
            "unit": "ns/iter",
            "extra": "iterations: 16022\ncpu: 43658.176257646075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209132.79389770384,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 209130.51151660507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174067.63207549253,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 174065.5412115207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177503.86744187534,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 177500.852713176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175617.033117522,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 175593.3764940252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 326288.8669767795,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 326265.25581395207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1186068.7999998492,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1185925.2542372793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 999795.0976676041,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 999723.7609329479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005209.4281608942,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1005112.0689655117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 997757.6413198881,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 997744.4763271142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 655489.836295538,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 655488.0261927043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 989359.8171589199,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 989277.6371308165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44102.72902416021,
            "unit": "ns/iter",
            "extra": "iterations: 15935\ncpu: 44102.11484154356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212195.30403152603,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 212178.29645346917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174193.53156065012,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 174182.45526838856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174276.4619970108,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 174262.12121211915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174619.18802991547,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 174606.75810473834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 317669.7740623678,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 317638.3190239469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1186642.457627139,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1186555.7627118533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 999467.0299572697,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 999386.0199714815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 990225.2299999808,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 990222.142857127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 990298.8104666284,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 990254.8797736882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 652004.6846511578,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 652002.8837209349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 986979.3036723473,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 986937.9943502926 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}