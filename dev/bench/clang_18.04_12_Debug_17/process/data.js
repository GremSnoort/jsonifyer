window.BENCHMARK_DATA = {
  "lastUpdate": 1705956105021,
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
        "date": 1702503252773,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17604.129569396704,
            "unit": "ns/iter",
            "extra": "iterations: 41198\ncpu: 17603.519588329535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 136132.19594594138,
            "unit": "ns/iter",
            "extra": "iterations: 6216\ncpu: 136129.56885456888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 255241.00704223296,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 255233.68544600942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 373406.864245569,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 373388.8456549938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 492718.78786159883,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 492678.89960294974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 610172.0520759432,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 610145.109078114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 587984.7880000853,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587957.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 678317.1495947331,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 678304.6425939569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 771562.1128762567,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 771559.7826086954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13174.422510546183,
            "unit": "ns/iter",
            "extra": "iterations: 53104\ncpu: 13174.075399216614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11076.513612248977,
            "unit": "ns/iter",
            "extra": "iterations: 62958\ncpu: 11076.454144032537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10985.262149181026,
            "unit": "ns/iter",
            "extra": "iterations: 63708\ncpu: 10985.180825014118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11232.816038035704,
            "unit": "ns/iter",
            "extra": "iterations: 62888\ncpu: 11232.564241190701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18861.83995257868,
            "unit": "ns/iter",
            "extra": "iterations: 37114\ncpu: 18861.416177183826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56647.4975999995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56644.59000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 277238.5353436829,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 277232.19844357955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 226481.69177719005,
            "unit": "ns/iter",
            "extra": "iterations: 3770\ncpu: 226472.01591511915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 225672.67079925133,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 225665.73463466088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226689.7007182933,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 226676.0042564513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 644135.0739957687,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 644116.5609584216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4070468.618421006,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4070346.052631582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3356067.086956648,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3355953.6231883992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3277847.6489363825,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3277774.8226950425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3297406.2974910247,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3297179.5698924814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1949109.1260504583,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1949056.722689077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3222510.503472146,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3222367.708333322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12438418.499999803,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12438150.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5636346.200000162,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5636210.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15992828.545454979,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15992293.939393956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61010.15023239261,
            "unit": "ns/iter",
            "extra": "iterations: 13985\ncpu: 61009.245620307556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322509.57094468724,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 322502.7474595413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 255638.2934006959,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 255639.7146254456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252463.73925836335,
            "unit": "ns/iter",
            "extra": "iterations: 3398\ncpu: 252462.9193643322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255228.30573818737,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 255217.18469814846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 590868.2554347607,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 590815.5570652182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4138870.616071496,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4138626.339285713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3432857.044280743,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3432818.4501845064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3338311.5376345096,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3338020.7885304624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3354737.9891695115,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354480.8664259864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1988407.2274677362,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1988399.1416309043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3275217.226148623,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3275142.402826865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12684043.759036394,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12683720.481927667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5736778.460000095,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5736714.999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51520.0044999915,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51513.70000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 270655.95478975883,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 270638.15997470776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 221024.75588310702,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 221005.04266873596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219026.52959263773,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 219008.25006405305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218324.93543426183,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 218299.82065078025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 562528.1791237247,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 562504.1881443316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4118343.061947168,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4117993.3628318626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3368879.1702895346,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3368682.2463768153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3310006.5957449176,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3309885.8156028315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3306959.890071152,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3306740.7801418467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1949540.2656903367,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1949430.7531380644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3238031.313588843,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3237847.3867595945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6465.032696891257,
            "unit": "ns/iter",
            "extra": "iterations: 107839\ncpu: 6464.7214829514105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36781.06786783844,
            "unit": "ns/iter",
            "extra": "iterations: 19037\ncpu: 36777.864159268785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30020.240823135176,
            "unit": "ns/iter",
            "extra": "iterations: 23374\ncpu: 30018.494908873377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28579.653055396197,
            "unit": "ns/iter",
            "extra": "iterations: 24514\ncpu: 28577.347638084335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23346.180574507478,
            "unit": "ns/iter",
            "extra": "iterations: 30043\ncpu: 23344.968877941494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 168640.3149264503,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 168627.1762720022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278533.05617532984,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 278518.1673306781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71189.75714139642,
            "unit": "ns/iter",
            "extra": "iterations: 9837\ncpu: 71184.10084375305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70338.71874057464,
            "unit": "ns/iter",
            "extra": "iterations: 9941\ncpu: 70334.9562418256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70382.98023197235,
            "unit": "ns/iter",
            "extra": "iterations: 9915\ncpu: 70381.31114473136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137220.88398116585,
            "unit": "ns/iter",
            "extra": "iterations: 5094\ncpu: 137215.07656066003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124689.70681372476,
            "unit": "ns/iter",
            "extra": "iterations: 5621\ncpu: 124681.12435509665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44117.54509951924,
            "unit": "ns/iter",
            "extra": "iterations: 15876\ncpu: 44116.32023179641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208290.76872772185,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 208279.13198573355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172628.34471422082,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 172616.11026808165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173347.09475505888,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 173339.3617021245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172202.70114371536,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 172186.07657881768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 319869.5386374006,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 319852.6748971172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1198871.727272671,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1198728.130360206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1011575.9927744966,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1011474.1329479653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1001967.3663793319,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1001957.1839080468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1010247.0795947815,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1010141.0998552656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 659610.054511252,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 659549.7180451094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 995522.1858156599,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 995406.8085106381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44937.55040102189,
            "unit": "ns/iter",
            "extra": "iterations: 15585\ncpu: 44935.02726980989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 218205.45941853782,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 218182.88915808673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173484.8481766373,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 173479.65765318845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172429.2170906518,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 172421.8078537903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174145.71407261307,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 174142.83938339024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 314243.1183086068,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 314210.39136302116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1195679.4266211933,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1195635.8361774655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 999666.7800000329,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 999650.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 994652.8981612755,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 994634.2291371983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1001274.4683907627,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1001267.0977011407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 660002.9071294627,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 659979.7373358342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 989669.8500706934,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 989610.6082036725 ns\nthreads: 1"
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
        "date": 1705574895493,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16612.40327760623,
            "unit": "ns/iter",
            "extra": "iterations: 42348\ncpu: 16612.05960139794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132427.5260834041,
            "unit": "ns/iter",
            "extra": "iterations: 6115\ncpu: 132423.43417825017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 249646.24734272558,
            "unit": "ns/iter",
            "extra": "iterations: 3481\ncpu: 249645.38925596094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 363474.7227388235,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 363464.83516483504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 481901.18684355996,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 481876.11940298486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 593852.3766233801,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 593845.1811346548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 571620.691000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571625.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 663455.932519733,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 663426.4895908104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 757608.8598359994,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 757600.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13120.274189951793,
            "unit": "ns/iter",
            "extra": "iterations: 53824\ncpu: 13119.781138525545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10952.645072665486,
            "unit": "ns/iter",
            "extra": "iterations: 64061\ncpu: 10952.593621704309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10951.691896178396,
            "unit": "ns/iter",
            "extra": "iterations: 64303\ncpu: 10951.187347402141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11066.409835287928,
            "unit": "ns/iter",
            "extra": "iterations: 63323\ncpu: 11066.486110891772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18868.650587440752,
            "unit": "ns/iter",
            "extra": "iterations: 37025\ncpu: 18868.094530722512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56629.15569999995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56627.209999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 279998.5937806837,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 279983.60065466457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 223911.53228346622,
            "unit": "ns/iter",
            "extra": "iterations: 3810\ncpu: 223900.10498687602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 218893.2440964944,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 218881.1344969199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219177.60826064702,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 219166.7521806055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 505070.7100000409,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505031.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4016669.2629310708,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4016479.3103448288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3275603.325088486,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3275375.2650176627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3299716.306049849,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3299604.2704626326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3330337.455197203,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3330179.5698924684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1928978.255230059,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1928874.0585774067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3202542.3356402838,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3202334.9480968853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12368197.709302125,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12367613.95348837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5564737.72000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5564289.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16011445.954545982,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16010954.545454571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61549.37851514824,
            "unit": "ns/iter",
            "extra": "iterations: 13833\ncpu: 61547.10474951212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 313744.9187317981,
            "unit": "ns/iter",
            "extra": "iterations: 2744\ncpu: 313722.9591836733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 253008.41259984276,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 252996.83525584108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252536.9003527228,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 252525.36743092383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250512.38940898117,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 250502.8086600346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 610470.0309423172,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 610463.0801687733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4091067.4229073287,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4090887.665198214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3360295.310469421,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3360140.433212999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3388745.565693433,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3388591.240875917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3387292.1854547467,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3387135.2727272674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1980297.1620468586,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1980179.104477604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3265157.5649121394,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3264980.350877198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12633970.321427938,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12633482.142857099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5594140.939999762,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5593957.000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52246.79190000643,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52242.29000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 266529.1020217837,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 266516.7962674976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 217116.2785968318,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 217104.24504321264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 215531.0789805733,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 215519.07645722904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 211134.6273736296,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 211121.08508014816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 578091.8237243053,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 578060.8349900605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4058657.8340612683,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4058348.034934503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3289728.6347519285,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3289571.9858155847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3346954.226618672,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3346781.6546762474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3350695.363309137,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3350511.1510791555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1931974.6070684786,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1931905.6133056113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3218336.480969156,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3218165.7439446375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6551.401396111503,
            "unit": "ns/iter",
            "extra": "iterations: 106725\ncpu: 6551.439681424195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37676.22865443123,
            "unit": "ns/iter",
            "extra": "iterations: 18587\ncpu: 37675.07935653953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30249.218550198908,
            "unit": "ns/iter",
            "extra": "iterations: 23148\ncpu: 30249.399516157173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29995.734309362153,
            "unit": "ns/iter",
            "extra": "iterations: 24043\ncpu: 29993.790292392772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23426.394590615946,
            "unit": "ns/iter",
            "extra": "iterations: 29874\ncpu: 23426.002544018014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 172800.301430695,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 172788.7765170206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274300.31011237064,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 274288.01498127315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71029.29568747524,
            "unit": "ns/iter",
            "extra": "iterations: 9855\ncpu: 71027.85388127975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71206.57010486668,
            "unit": "ns/iter",
            "extra": "iterations: 9821\ncpu: 71202.91212707355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71131.72700447428,
            "unit": "ns/iter",
            "extra": "iterations: 9828\ncpu: 71127.78795278717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144031.9663640291,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 144023.07057366823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131705.03444422726,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 131699.85105194565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43680.12291236783,
            "unit": "ns/iter",
            "extra": "iterations: 15987\ncpu: 43678.157252768324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206827.1163344231,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 206810.83011008424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171104.88894300855,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 171090.67218704039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174412.69092723262,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 174406.4057826528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172431.94171173402,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 172425.40580422748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 320970.0650183346,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 320961.6758241747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1183695.873096409,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1183675.4653130278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 988986.4342292709,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 988925.1768033995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1005934.9411765253,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005889.0961262581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1003837.4770774199,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1003774.785100291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 657215.0639097163,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 657169.7368421033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 982067.5077139289,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 982036.7461430426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44039.257965182056,
            "unit": "ns/iter",
            "extra": "iterations: 15913\ncpu: 44037.43480173444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209160.27424649877,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 209157.59474783728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170732.9563840209,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 170730.1169590658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171844.52887688222,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 171840.47677562185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171679.10318625992,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 171670.1960784313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 313869.46774195594,
            "unit": "ns/iter",
            "extra": "iterations: 2232\ncpu: 313842.74193548324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1170844.1036790742,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1170777.9264213846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 981736.7545581128,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 981675.7363253974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 996157.200569015,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 996106.2588904842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 998272.0497865332,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 998267.5675675713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 666131.4542910402,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 665302.2388059611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 982686.9494381408,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 982656.6011235779 ns\nthreads: 1"
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
        "date": 1705772694792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16519.87709431483,
            "unit": "ns/iter",
            "extra": "iterations: 42496\ncpu: 16519.87010542169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131328.21038719057,
            "unit": "ns/iter",
            "extra": "iterations: 6431\ncpu: 131320.30788368842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247766.5379566157,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 247754.90867579906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 362426.6067839194,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 362415.9128978223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 478393.9603794402,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 478376.1160714288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 595785.0963772939,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 595751.4012303482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 571756.0200000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571695.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 664146.5261648796,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 664100.0716845879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 752181.5525672369,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 752123.8793806026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12982.778336972713,
            "unit": "ns/iter",
            "extra": "iterations: 54046\ncpu: 12982.059726899319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10837.592087333513,
            "unit": "ns/iter",
            "extra": "iterations: 64580\ncpu: 10837.584391452458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11007.164627725339,
            "unit": "ns/iter",
            "extra": "iterations: 64576\ncpu: 11006.612363726463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10814.179722789344,
            "unit": "ns/iter",
            "extra": "iterations: 64644\ncpu: 10814.176102963924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18668.90510402952,
            "unit": "ns/iter",
            "extra": "iterations: 37441\ncpu: 18668.457039074823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55300.353000001225,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55300.42000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293063.5440874939,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 293063.12371838733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234574.12647461944,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 234573.96433470538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228234.85142704952,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 228229.60789543844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229251.97532850702,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 229249.36980423654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 509886.4469999853,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509886.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4033287.7130434434,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4033240.869565215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3260275.4685314638,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3260176.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3260985.8873239323,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3260924.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3248051.423611089,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3248020.1388888815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1905398.206185589,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1905360.206185573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3163981.472602757,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3163951.712328768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12209098.556818338,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12208723.863636361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5429198.820000351,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5429083.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15658870.073529422,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15658307.352941178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62808.03384546694,
            "unit": "ns/iter",
            "extra": "iterations: 13473\ncpu: 62805.87842351368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 317681.84518984327,
            "unit": "ns/iter",
            "extra": "iterations: 2713\ncpu: 317676.00442314724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256964.574295985,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 256959.346914321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 261970.12692655847,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 261963.13085524307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255507.51652277212,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 255507.47246204037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 618335.5270270248,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 618321.4793741112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4114894.4266665746,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4114802.222222206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3311788.4857142195,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3311750.3571428587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3308682.9999999977,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3308609.642857136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3301524.418439632,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3301436.5248226956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1950450.20378143,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1950407.5630252042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3215654.6458333125,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3215654.861111108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12531336.211764831,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12530987.05882352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5286627.300000077,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5286545.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54294.87819999963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54288.13999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 277047.51974110026,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 277030.93851132534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227947.21687067422,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 227938.45130388511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221752.11171875376,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 221735.5989583336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 222717.61644547607,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 222700.98881082473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 580421.4966711078,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 580402.7962716401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4065048.8165938915,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4064870.305676845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3269883.5017542974,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3269660.3508771895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3270822.6245615566,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3270662.1052631685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3230405.60553611,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3230218.685121105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1899655.1283095244,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1899575.5600814773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3166431.9455780876,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3166231.6326530683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6528.874111390656,
            "unit": "ns/iter",
            "extra": "iterations: 107190\ncpu: 6528.716298162143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37521.707190314875,
            "unit": "ns/iter",
            "extra": "iterations: 18664\ncpu: 37520.65473639089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29287.252475867073,
            "unit": "ns/iter",
            "extra": "iterations: 23931\ncpu: 29286.73686849672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30264.245543617046,
            "unit": "ns/iter",
            "extra": "iterations: 23169\ncpu: 30263.85687772471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23089.552434890258,
            "unit": "ns/iter",
            "extra": "iterations: 30371\ncpu: 23089.121201145666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 172751.6832389901,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 172746.1727787352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274626.22622307274,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 274622.81800391304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69953.51780712382,
            "unit": "ns/iter",
            "extra": "iterations: 9996\ncpu: 69952.19087635119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70075.99969890782,
            "unit": "ns/iter",
            "extra": "iterations: 9964\ncpu: 70075.25090325242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68684.10709017767,
            "unit": "ns/iter",
            "extra": "iterations: 10169\ncpu: 68682.14180352128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 140079.42919913298,
            "unit": "ns/iter",
            "extra": "iterations: 5007\ncpu: 140074.29598562012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128456.66562441792,
            "unit": "ns/iter",
            "extra": "iterations: 5437\ncpu: 128455.03034761736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43641.67103302551,
            "unit": "ns/iter",
            "extra": "iterations: 16108\ncpu: 43641.22796126097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208790.86879857237,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 208790.6455469197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169754.52915558673,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 169752.04451971853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 171674.67173701312,
            "unit": "ns/iter",
            "extra": "iterations: 4076\ncpu: 171672.0068694829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 169914.7968484712,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 169911.10303030326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 316657.29611212446,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 316656.962025312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1181673.9477233607,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1181628.4991568304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 989612.8496453096,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 989594.3262411393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 988109.1744680054,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 988077.1631205806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 990635.0113797322,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 990614.2247510521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 644864.4613259005,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 644855.2486187902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 975841.3704734113,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975797.3537604379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43718.49987482924,
            "unit": "ns/iter",
            "extra": "iterations: 15978\ncpu: 43718.419076229155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209855.99009009093,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 209852.1021021024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169839.60802318822,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 169835.04108264917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170905.4310051034,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 170899.99999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170673.3850280304,
            "unit": "ns/iter",
            "extra": "iterations: 4101\ncpu: 170671.3240672988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 309566.0269792022,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 309552.01238390146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1173618.1142858553,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1173593.1092436924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 983358.2478991583,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 983357.5630252068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 978054.5076495291,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 978041.446453415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 980050.4817926734,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 980040.0560224182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 644076.7407749544,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 644049.538745376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 969910.1262134562,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 969898.1969486778 ns\nthreads: 1"
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
        "date": 1705774114043,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16422.005254848336,
            "unit": "ns/iter",
            "extra": "iterations: 42437\ncpu: 16421.72868016118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132642.72650508408,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 132639.7498045348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250836.3001152077,
            "unit": "ns/iter",
            "extra": "iterations: 3472\ncpu: 250826.180875576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 366052.7199319587,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 366046.4938376542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 488171.5022296487,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 488135.78595317696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 603250.3958477438,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 603250.4498269896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 577385.1309999145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577359.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 668395.8523878959,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 668370.6946454409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 764468.1976935834,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 764458.1548599668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12914.031605958582,
            "unit": "ns/iter",
            "extra": "iterations: 54167\ncpu: 12913.857145494472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10797.286124534477,
            "unit": "ns/iter",
            "extra": "iterations: 64769\ncpu: 10797.063409964621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10812.509460083424,
            "unit": "ns/iter",
            "extra": "iterations: 65010\ncpu: 10812.28118750961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10770.379651838284,
            "unit": "ns/iter",
            "extra": "iterations: 64625\ncpu: 10769.66034816246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18692.111811651823,
            "unit": "ns/iter",
            "extra": "iterations: 37590\ncpu: 18691.93668528868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54419.99270000224,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54420.14999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 281499.7554455343,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 281492.0792079209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 227089.52191237133,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 227087.27755644105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 226043.09025365766,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 226039.27903871823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 220736.43146665444,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 220731.36000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 524943.3539999018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524936.2000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4067970.881578731,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4067830.263157886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3282293.1161970054,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3282175.352112674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3263359.6890461664,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3263289.3992932867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3251022.87368425,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3250881.403508774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1906506.3904958535,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1906458.8842975248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3190977.0484432294,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3190798.2698961934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12289713.931035368,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12288578.160919556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5511600.240000689,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5511444.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15990283.166665835,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15989651.515151495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61806.88458181811,
            "unit": "ns/iter",
            "extra": "iterations: 13750\ncpu: 61805.99272727275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 317228.4212454319,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 317220.1831501837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 251545.7008547087,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 251532.5965222506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255580.27786077093,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 255570.5706602922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253066.99941038454,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 253064.0919811333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 509189.0229999763,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509176.0000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4136863.5714285066,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4136737.0535714263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3348053.137184196,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3347925.270758102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3317595.599999988,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3317560.0000000116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3307871.9572951864,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3307737.3665480474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1971090.1571123595,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1971025.477707009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3239110.055555648,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3238952.4305555588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12643057.011903888,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12642114.28571429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5477248.479999162,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5477174.0000000335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51197.322299992724,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51189.94999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 274701.43597167026,
            "unit": "ns/iter",
            "extra": "iterations: 3108\ncpu: 274681.4028314019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222021.71446993478,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 222008.82125354576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 215277.78082536356,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 215255.61147458633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 214548.64168970555,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 214546.31631883426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 603366.6249129898,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 603324.3562978426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4132954.1637168424,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4124982.7433628333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3283707.925794829,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3283465.724381611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3301993.445229656,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3301750.883392229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3237759.031358569,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3237491.637630652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1912568.7412731335,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1912411.4989733067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3189575.652921112,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3189274.5704467203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6503.366443500295,
            "unit": "ns/iter",
            "extra": "iterations: 107842\ncpu: 6503.109178242251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36434.88810131565,
            "unit": "ns/iter",
            "extra": "iterations: 19187\ncpu: 36433.361129931676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27902.08420843319,
            "unit": "ns/iter",
            "extra": "iterations: 25140\ncpu: 27901.463802704948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28867.0969986429,
            "unit": "ns/iter",
            "extra": "iterations: 24289\ncpu: 28866.83683972174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22930.822906765796,
            "unit": "ns/iter",
            "extra": "iterations: 30515\ncpu: 22930.44404391283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 174283.515181686,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174266.42608262898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 276601.49924641417,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 276581.7256970611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69544.81866109466,
            "unit": "ns/iter",
            "extra": "iterations: 10053\ncpu: 69538.04834377817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69547.7379152512,
            "unit": "ns/iter",
            "extra": "iterations: 10054\ncpu: 69542.3214640941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69721.83880596014,
            "unit": "ns/iter",
            "extra": "iterations: 10050\ncpu: 69712.31840795997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 140121.22790884075,
            "unit": "ns/iter",
            "extra": "iterations: 5002\ncpu: 140113.21471411333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129412.46123959811,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129411.08233117303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43982.922863971005,
            "unit": "ns/iter",
            "extra": "iterations: 15894\ncpu: 43980.351075878454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209369.58393285348,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 209369.8441247002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172673.77162630335,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 172667.9930795866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174591.48040927757,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 174585.67506863104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172925.64126117804,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 172913.1578947342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 317716.1999093213,
            "unit": "ns/iter",
            "extra": "iterations: 2206\ncpu: 317708.6128739845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1180195.7109244678,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1180159.6638655278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 996836.371266011,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 996760.739687047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 994818.8794327287,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 994804.8226950353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 994033.7769885394,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 994009.3749999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 652530.1906976681,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 652524.5581395286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 982346.2643356249,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 982290.2097902079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45200.90751631993,
            "unit": "ns/iter",
            "extra": "iterations: 15473\ncpu: 45199.31493569471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215673.33731533293,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 215660.4526878343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174234.88251364767,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 174219.15052161008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173743.869511297,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 173720.76407839567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 175909.97441685555,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 175894.83320792837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 313055.3544926051,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 313032.94590970146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1177658.6694630522,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1177555.0335570506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 994468.970212754,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 994454.3262411206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 994179.9359885562,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 994156.1877667119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 996685.3433048978,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 996587.3219373078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 653975.9906716888,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 653910.8208955262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 983638.2233146104,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 983581.0393258502 ns\nthreads: 1"
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
        "date": 1705777714725,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16433.15993825211,
            "unit": "ns/iter",
            "extra": "iterations: 42754\ncpu: 16432.780558544233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130213.20946049817,
            "unit": "ns/iter",
            "extra": "iterations: 6469\ncpu: 130210.6662544443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 255508.57215263453,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 255508.05008944546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 358001.27699331957,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 357995.22425249167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 472643.57103978004,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 472629.01469787717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 589231.28378381,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 589208.783783784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 563876.9109999657,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563840.9999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 656460.7860000251,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656451.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 746037.944399753,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 746011.2812248177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12988.5050094623,
            "unit": "ns/iter",
            "extra": "iterations: 53898\ncpu: 12988.357638502373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10941.904087433632,
            "unit": "ns/iter",
            "extra": "iterations: 63683\ncpu: 10941.901292338614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10923.366946605396,
            "unit": "ns/iter",
            "extra": "iterations: 64538\ncpu: 10923.054634478909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10963.059868830935,
            "unit": "ns/iter",
            "extra": "iterations: 64040\ncpu: 10962.613991255474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18695.929662633614,
            "unit": "ns/iter",
            "extra": "iterations: 37704\ncpu: 18695.374496074688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58038.13479999462,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58038.149999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 283447.5089760746,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 283447.3736702123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 226904.50823153372,
            "unit": "ns/iter",
            "extra": "iterations: 3766\ncpu: 226901.99150292075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 225836.93634930553,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 225830.03682272474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 221203.67686722818,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 221203.50103734454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 519158.8210000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519145.9000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3972305.596566756,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3972077.6824034406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3203802.422145304,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3203695.155709343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3252168.63157916,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3251996.8421052736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3240770.354166342,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3240657.6388888974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1907411.5504202214,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1907394.747899166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3129775.955931957,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3129577.2881356003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12178398.215908714,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12177561.363636388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5475039.600000855,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5474639.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15618466.088234166,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15618066.176470593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63157.20855296791,
            "unit": "ns/iter",
            "extra": "iterations: 13469\ncpu: 63155.534932066184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 312385.35639259376,
            "unit": "ns/iter",
            "extra": "iterations: 2761\ncpu: 312366.4614270196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 252126.56351310966,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 252116.85823754765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253822.01213017938,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 253803.55029585745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253065.0923303937,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 253061.53392330365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 509012.20600007946,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508980.69999999506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4054523.1441046977,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4054252.8384279413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3277300.3286220143,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3277057.5971731404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3300217.812056549,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3300062.056737577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3285764.6690140874,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3285546.126760573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1955634.6231578763,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1955486.1052631473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3190962.120274702,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3190726.11683849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12524504.729411574,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12524028.235294124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5504864.10000076,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5504297.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54238.77209999546,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54236.259999999704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 280326.12377850787,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 280306.0586319227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224266.24258972905,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 223748.93395735906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 217962.6536796417,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 217943.9521263045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216989.80552038836,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 216970.87870346848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 585913.9227643026,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 585874.3224932246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4029154.8864626754,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4028908.733624468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3218472.5103449854,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3218316.206896567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3258179.059233484,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3258086.06271776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3209203.3252595942,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3209159.5155709414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1911187.0816327238,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1911144.4897959162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3137654.3885132866,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3137585.135135143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6592.426590684138,
            "unit": "ns/iter",
            "extra": "iterations: 106165\ncpu: 6592.211180709313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37429.30242884776,
            "unit": "ns/iter",
            "extra": "iterations: 18692\ncpu: 37428.81446608153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29182.9696184531,
            "unit": "ns/iter",
            "extra": "iterations: 23929\ncpu: 29181.695850223587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29013.024496393027,
            "unit": "ns/iter",
            "extra": "iterations: 24126\ncpu: 29012.430572825873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23239.94135033728,
            "unit": "ns/iter",
            "extra": "iterations: 30111\ncpu: 23239.251436352144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 178571.5512592315,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 178568.2269142717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 255965.2747252655,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 255960.32967033033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69049.90253064244,
            "unit": "ns/iter",
            "extra": "iterations: 10116\ncpu: 69047.72637406067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69800.70513842115,
            "unit": "ns/iter",
            "extra": "iterations: 10042\ncpu: 69799.10376419025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69668.9018095512,
            "unit": "ns/iter",
            "extra": "iterations: 10113\ncpu: 69667.55661030383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135631.80660193856,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 135631.8640776687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128083.80850285591,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 128080.90525929989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42617.872749393326,
            "unit": "ns/iter",
            "extra": "iterations: 16440\ncpu: 42617.068126520535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208124.47539514478,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 208109.30509990946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170246.7224251338,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 170237.95958120262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172785.98737312184,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 172770.6362961129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171414.94941349403,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 171403.03030303033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 317903.94414167653,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 317873.84196185175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1165668.4166666763,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1165601.9999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 980233.8106593346,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 980195.6521739184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 980378.5762236835,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 980348.6713286781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 985319.1908078152,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 985238.8579387229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 636775.3275705787,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 636715.5595996353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 964087.9256197471,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 963992.4242424308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43424.40499968939,
            "unit": "ns/iter",
            "extra": "iterations: 16121\ncpu: 43421.189752496255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 211114.68258767476,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 211091.92865780028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170586.86474017784,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 170570.71393880591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172400.2156042353,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 172388.13684469892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172300.6632979899,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 172296.5491742674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 313656.17502235307,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 313653.22291853436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1163516.3843592622,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1163515.8069883613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 967198.859116057,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 967177.3480662905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 974451.7067037626,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 974450.9776536312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 985512.4544179133,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 985488.7798036418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 638295.3442623755,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 638275.1366120223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 961165.5068681245,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 961154.5329670302 ns\nthreads: 1"
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
        "date": 1705952861651,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16737.905986186404,
            "unit": "ns/iter",
            "extra": "iterations: 41696\ncpu: 16737.71584804298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133197.65529171194,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 133191.91696807675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 251637.25568672776,
            "unit": "ns/iter",
            "extra": "iterations: 3473\ncpu: 251610.4232651887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 366935.04458596633,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 366925.05307855643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 484258.4289693588,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 484226.2395543172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 605517.008339095,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 605481.0284920085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 579138.4709999647,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579051.3000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 671519.0341569617,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 671480.8866279069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 765381.8735537821,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 765318.7603305784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12970.110494468687,
            "unit": "ns/iter",
            "extra": "iterations: 53876\ncpu: 12969.236765906917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10967.265607852878,
            "unit": "ns/iter",
            "extra": "iterations: 63782\ncpu: 10966.91699852623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10904.589126977906,
            "unit": "ns/iter",
            "extra": "iterations: 64122\ncpu: 10903.792770032127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11031.426373314169,
            "unit": "ns/iter",
            "extra": "iterations: 63496\ncpu: 11030.688547310048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18774.793490176697,
            "unit": "ns/iter",
            "extra": "iterations: 35577\ncpu: 18772.901031565343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55856.55540000972,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55851.11999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 285216.9253582148,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 285198.43385538145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228476.26929261023,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 228464.49624866046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 225874.43223926373,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 225866.1990471151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 222057.5764089026,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 222044.66579292234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 648409.1745014122,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 648381.8376068383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4064730.265217211,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4064625.217391314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3272998.9366197367,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3272838.380281697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3231550.1493056016,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3231317.3611111026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3191551.9725083853,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3191346.7353951917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1893094.7632653369,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1893008.979591839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3154198.0307165957,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3153996.5870307153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12119018.750000391,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12118270.454545459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5305935.989999853,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5305831.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15799952.582089795,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15799228.358208928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61875.32809631785,
            "unit": "ns/iter",
            "extra": "iterations: 13621\ncpu: 61871.07407679323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 307821.4289803205,
            "unit": "ns/iter",
            "extra": "iterations: 2795\ncpu: 307804.29338103806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257419.56250001793,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 257413.15789473802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 259111.99999997456,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 259105.82202111543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253566.47182681845,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 253553.766310795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 599125.838134419,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 599086.1454046625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4170602.384956148,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4170338.053097359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3347578.345323782,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3347535.2517985636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3281339.7632508823,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3281065.37102474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3290413.0106007773,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3290058.303886948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1945481.1263157304,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1945370.3157894833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3211702.8996540178,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3211260.8996539814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12468482.093023011,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12467732.558139488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5457747.400000699,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5456849.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51748.24059999992,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51746.86000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282312.43861355714,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 282293.26206673105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 225154.8930537294,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 225138.71559632968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 217341.10450038407,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 217302.54258835566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216080.50595692586,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 216081.77439797117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 569144.0912672371,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 569114.6421536467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4100875.0881055356,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4100732.5991189345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3297200.6678441875,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3297016.2544169463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3247814.609755966,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3247742.5087107825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3199986.71821284,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3199951.202749146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1883416.6315788587,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1883385.8299595236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3165231.376712346,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3165192.8082191674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6576.716320988214,
            "unit": "ns/iter",
            "extra": "iterations: 106409\ncpu: 6576.551795430806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37296.592506218316,
            "unit": "ns/iter",
            "extra": "iterations: 19296\ncpu: 37296.31011608603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29957.936156984928,
            "unit": "ns/iter",
            "extra": "iterations: 25735\ncpu: 29956.401787448915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29495.050193865216,
            "unit": "ns/iter",
            "extra": "iterations: 23728\ncpu: 29495.11968981778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23028.500082329338,
            "unit": "ns/iter",
            "extra": "iterations: 30367\ncpu: 23026.70332927191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 167391.3526593033,
            "unit": "ns/iter",
            "extra": "iterations: 4174\ncpu: 167378.3421178743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274181.60956488986,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 274144.10035280715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70187.87281096971,
            "unit": "ns/iter",
            "extra": "iterations: 9993\ncpu: 70183.2883018119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69653.53438782596,
            "unit": "ns/iter",
            "extra": "iterations: 9989\ncpu: 69648.49334267639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69006.80005901102,
            "unit": "ns/iter",
            "extra": "iterations: 10168\ncpu: 69001.44571203769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133309.15818562708,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 133309.77701543638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128569.23439692752,
            "unit": "ns/iter",
            "extra": "iterations: 5704\ncpu: 128555.55750350577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43942.904125064444,
            "unit": "ns/iter",
            "extra": "iterations: 15927\ncpu: 43942.14855277157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210947.22090910265,
            "unit": "ns/iter",
            "extra": "iterations: 3300\ncpu: 210939.48484848414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171212.04669927995,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171202.24938875588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170641.09614444722,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 170616.56905807674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 170918.12295679998,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 170900.82947060387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 324060.32978229714,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 324006.29921260086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1186382.5042444966,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1186258.0645161315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 995931.839031398,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 995845.156695154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 991602.6184397417,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 991563.404255315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 987223.2281690179,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 986960.9859154953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 651463.1267474594,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 651368.8723205976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 981420.1678322067,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 981330.0699300874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44244.48661447315,
            "unit": "ns/iter",
            "extra": "iterations: 15838\ncpu: 44238.17401187014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209398.43036462343,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 209375.3138075304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172348.05577396866,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 172320.7616707622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171798.76757956774,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 171781.76659264645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170723.4331288307,
            "unit": "ns/iter",
            "extra": "iterations: 4075\ncpu: 170708.34355828373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 319757.42490842234,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 319730.9981685018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1176981.436026802,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1176823.4006734148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 993320.7393161303,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 993270.0854700819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 975453.1566434205,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 975352.8671328663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 978721.1994421816,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 978570.0139470008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 641014.0256645103,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 640961.5948670957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 970250.3857938343,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 970143.1754874783 ns\nthreads: 1"
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
        "date": 1705954268598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16647.670497258634,
            "unit": "ns/iter",
            "extra": "iterations: 41769\ncpu: 16647.42033565563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133970.2858960087,
            "unit": "ns/iter",
            "extra": "iterations: 6289\ncpu: 133968.5482588647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 254806.81682735565,
            "unit": "ns/iter",
            "extra": "iterations: 3423\ncpu: 254799.76628688286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 368161.48694908724,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 368160.2481814293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 485863.5444319301,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 485839.7637795277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 603322.6196105796,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 603312.1696801115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 577863.7689999754,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577844.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 672630.6880466134,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 672162.0991253647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 766822.2358803968,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 766812.5415282393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12980.880985078615,
            "unit": "ns/iter",
            "extra": "iterations: 53884\ncpu: 12980.586073788148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10881.960148694576,
            "unit": "ns/iter",
            "extra": "iterations: 63486\ncpu: 10881.71880414579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10803.154543632376,
            "unit": "ns/iter",
            "extra": "iterations: 64849\ncpu: 10802.983854801165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10880.041221895988,
            "unit": "ns/iter",
            "extra": "iterations: 64359\ncpu: 10879.876940288064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18725.31447449415,
            "unit": "ns/iter",
            "extra": "iterations: 37383\ncpu: 18725.00869379129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56599.8890000003,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56599.63000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 289365.7740303485,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 289360.6070826307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228339.05931070462,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 228338.15121560215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 221512.1989093788,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 221511.37366917683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219963.6027291446,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 219960.35015448002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 506720.9100000128,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506703.3000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4011899.3116882383,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4011808.6580086662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3261121.6245613196,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3261081.403508776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3257736.4650349766,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3257619.2307692314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3265139.2288733274,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3264839.0845070523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1928772.1520833874,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1928676.45833333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3165863.5529010044,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3165649.1467576833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12285008.058139617,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12284274.418604633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5352863.620000221,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5352770.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15989331.151514947,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15988978.787878767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61306.95178894132,
            "unit": "ns/iter",
            "extra": "iterations: 13835\ncpu: 61306.093241777904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 318005.00296406896,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 317997.9992589848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 255229.57568535052,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 255212.18712753293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253925.91446206823,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 253913.22751322694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 255012.3478799135,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 254996.68833178555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 615416.1832979531,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 615374.7346072217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4077336.3771930696,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4077163.157894734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3311761.939285824,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3311583.571428578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3310502.153571398,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3310302.1428571213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3314444.1850533793,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3314286.1209964342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1978956.9915073283,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1978837.3673036033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3206833.3287198446,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3206678.5467127794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12579171.951219268,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12578769.512195114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5480190.510000398,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5480063.000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52072.57719999916,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52072.309999999794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 270780.63345983793,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 270763.44086021616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 220413.4165800373,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 220401.8711018708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 214943.73780794535,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 214932.60432378022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 211487.48679989588,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 211480.3108808294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 585572.7701149564,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 585562.0689655129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4050721.939130574,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4050480.0000000168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3281676.0035337196,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3280349.4699646644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3276563.6070176666,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3276329.122807011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3254615.7762239478,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3254422.3776223725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1932077.7116182677,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1932037.9668049812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3168940.9453925136,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3168708.191126287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6496.642773632937,
            "unit": "ns/iter",
            "extra": "iterations: 107772\ncpu: 6496.484244516147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37301.53130657049,
            "unit": "ns/iter",
            "extra": "iterations: 18782\ncpu: 37301.490789053205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29059.53380088762,
            "unit": "ns/iter",
            "extra": "iterations: 24097\ncpu: 29059.530231979217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28848.87700358533,
            "unit": "ns/iter",
            "extra": "iterations: 24269\ncpu: 28848.831843092004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23011.786405219395,
            "unit": "ns/iter",
            "extra": "iterations: 30497\ncpu: 23011.02075614011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 173010.75228904377,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 173000.84137589752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 273515.1507223704,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 273514.447481456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69925.62177821959,
            "unit": "ns/iter",
            "extra": "iterations: 10010\ncpu: 69922.09790209873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69648.92425447324,
            "unit": "ns/iter",
            "extra": "iterations: 10060\ncpu: 69642.04771371739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69831.08736505164,
            "unit": "ns/iter",
            "extra": "iterations: 10004\ncpu: 69826.57936825311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142107.44412840152,
            "unit": "ns/iter",
            "extra": "iterations: 4922\ncpu: 142097.4197480704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129132.23720073773,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 129131.78637200779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44460.26995618447,
            "unit": "ns/iter",
            "extra": "iterations: 15747\ncpu: 44456.40439448733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210341.9295563607,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 210321.25299760405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 173822.46182542705,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 173816.0159164398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172801.23754317596,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 172800.59200789343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172886.4711396207,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 172883.96645288586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 326767.0597572329,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 326762.79178337846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1177618.2192243538,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1177575.379426645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 990237.2220651668,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 990189.1089108927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 994912.1392044704,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 994879.403409103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 996435.9252873154,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 996392.6724137872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 659719.0340264182,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 659704.1587901755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 979832.9621850192,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 979813.8655462216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44593.62087422005,
            "unit": "ns/iter",
            "extra": "iterations: 15694\ncpu: 44593.02281126592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212383.9520921804,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 212380.7459066131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 175193.98923654086,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 175183.85481852372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173606.97425104844,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 173602.94627383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174984.91973914893,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 174973.9653875095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 319885.7979936296,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 319866.4386684916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1176439.4891121674,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1176372.8643216111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 982521.1985915777,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 982430.9859154877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 986894.4549295943,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 986871.1267605565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 993157.1954674702,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 993153.6827195459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 654427.3926852739,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 654397.4975938385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 977310.155027974,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 977249.0223463583 ns\nthreads: 1"
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
        "date": 1705956101990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16943.32755989418,
            "unit": "ns/iter",
            "extra": "iterations: 41281\ncpu: 16941.842494125627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 134957.9568720457,
            "unit": "ns/iter",
            "extra": "iterations: 6330\ncpu: 134947.40916271723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 250736.4035796877,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 250719.86143187064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 364548.4116899716,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 364540.11012282944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 481263.6560758079,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 481226.30992196203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 597361.2395332744,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 597311.8737131091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 574860.402000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574801.3999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 667575.549530065,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 667531.3087490964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 762339.3582579409,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 762299.9178307311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13107.445823102018,
            "unit": "ns/iter",
            "extra": "iterations: 53353\ncpu: 13106.312672202112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11091.42225566406,
            "unit": "ns/iter",
            "extra": "iterations: 63130\ncpu: 11091.302075083167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10948.295387312643,
            "unit": "ns/iter",
            "extra": "iterations: 63889\ncpu: 10947.728090907656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10998.895937533955,
            "unit": "ns/iter",
            "extra": "iterations: 63779\ncpu: 10997.883315824944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18866.798632608723,
            "unit": "ns/iter",
            "extra": "iterations: 37151\ncpu: 18865.79634464751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55709.07039999611,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55703.59000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 278843.21391246654,
            "unit": "ns/iter",
            "extra": "iterations: 3062\ncpu: 278827.661659046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 223792.15026316352,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 223773.47368421065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 219769.58481338076,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 219758.22393822452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 216487.05987262804,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 216467.5414012731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 503621.46899999515,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503605.9000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4053621.382608387,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4053253.47826086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3298891.5729537215,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3298736.2989323926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3267417.264084661,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3267311.6197183044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3239915.9580419823,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3239882.8671328737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1897195.5585216137,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1897166.119096512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3175557.914089362,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3175329.8969072155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12100938.806818042,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12100613.63636364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5485948.26999988,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5485867.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15925162.134328559,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15924676.119402954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61153.00475753108,
            "unit": "ns/iter",
            "extra": "iterations: 11981\ncpu: 61151.590017527924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 299918.48115839384,
            "unit": "ns/iter",
            "extra": "iterations: 2866\ncpu: 299914.0265177942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 246283.0877895411,
            "unit": "ns/iter",
            "extra": "iterations: 3497\ncpu: 246276.69430940849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 250103.70567684504,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 250104.36681222645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 249586.71220082472,
            "unit": "ns/iter",
            "extra": "iterations: 3426\ncpu: 249578.6631640407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 606647.2266666734,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 606619.7894736846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4129181.2666668193,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4128958.6666666702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3347935.469313735,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3347802.527075819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3328672.6451614182,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3328609.3189963973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3309936.8085103417,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3309769.858156028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1956929.381052712,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1956892.4210526305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3232025.2334496942,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3231940.7665505097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12448477.552941447,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12448005.882352972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5457067.13999948,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5456823.000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52807.47499999734,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52807.640000000334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 270837.16371682234,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 270810.11378002533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 217773.42299896257,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 217765.78014184424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 213484.30544455574,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 213465.25974026092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 212384.37070254356,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 212372.14748380677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 565241.8002645536,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 565195.3042328046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4085395.73245604,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4085122.368421068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3283381.4876325172,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3283357.950530042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3257882.007017287,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3257658.947368432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3229135.383275245,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3228933.1010453156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1895799.6741345208,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1895668.839103869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3170985.041095588,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3170834.931506829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6648.354792414838,
            "unit": "ns/iter",
            "extra": "iterations: 107305\ncpu: 6647.759191090796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36203.98460743804,
            "unit": "ns/iter",
            "extra": "iterations: 19360\ncpu: 36202.5103305784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28827.501233553186,
            "unit": "ns/iter",
            "extra": "iterations: 24320\ncpu: 28824.662828947385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29338.897976026787,
            "unit": "ns/iter",
            "extra": "iterations: 25445\ncpu: 29337.20573786607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22169.52863840861,
            "unit": "ns/iter",
            "extra": "iterations: 31566\ncpu: 22168.355192295516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 173336.09694130367,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 173332.65910212055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 276282.49722443486,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 276277.1609833458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69905.33539813901,
            "unit": "ns/iter",
            "extra": "iterations: 10009\ncpu: 69904.4859626338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69858.8731096662,
            "unit": "ns/iter",
            "extra": "iterations: 9985\ncpu: 69856.18427641444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69826.97927254619,
            "unit": "ns/iter",
            "extra": "iterations: 10035\ncpu: 69826.49725959236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141695.15757927104,
            "unit": "ns/iter",
            "extra": "iterations: 5172\ncpu: 141688.74709976933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129863.35052884807,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129849.99072183855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43172.09097072179,
            "unit": "ns/iter",
            "extra": "iterations: 16225\ncpu: 43171.697996918454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206473.14539005831,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 206454.60992907718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169477.89208805663,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 169468.4490684712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 169421.4219052269,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 169403.6992263065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167983.24203210865,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 167973.18475916827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 323390.09889090597,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 323350.60073936655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1181214.3743675551,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1181114.50252952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 994477.8705548121,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 994409.246088187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 994459.5248227532,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 994439.4326241167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 993477.933333297,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 993420.2836879394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 646822.096863418,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 646752.7675276664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 981785.6372548095,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 981695.9383753543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43619.98796832951,
            "unit": "ns/iter",
            "extra": "iterations: 16041\ncpu: 43615.54142509828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 208624.55545645225,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 208609.06928337883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169768.63003398883,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 169749.51479864202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169221.68042737554,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 169210.29626031814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170086.04329847603,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 170073.6073947972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318024.19272728666,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 318005.3181818207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1178504.8249158545,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1178480.4713804836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 992113.1586402329,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 992073.6543909232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 991777.0084865579,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 991722.6308345051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 987664.4788732847,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 987576.0563380228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 646521.3157407898,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 646483.8888888906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 979552.1494412906,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 979532.1229050327 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}