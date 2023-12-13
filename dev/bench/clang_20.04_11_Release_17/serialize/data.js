window.BENCHMARK_DATA = {
  "lastUpdate": 1702503984175,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-11 20.04 Release c++-17": [
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
        "date": 1702490346663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 726.0350216763702,
            "unit": "ns/iter",
            "extra": "iterations: 963489\ncpu: 726.0126477832129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10797.65333698977,
            "unit": "ns/iter",
            "extra": "iterations: 76596\ncpu: 10797.245286960157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23977.142292489338,
            "unit": "ns/iter",
            "extra": "iterations: 34661\ncpu: 23976.81255589857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37588.122426722286,
            "unit": "ns/iter",
            "extra": "iterations: 22005\ncpu: 37587.65735060214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47213.11877145334,
            "unit": "ns/iter",
            "extra": "iterations: 16898\ncpu: 47212.14936678896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58421.88675862009,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 58416.51034482758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58411.83259999526,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58409.93999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67867.32129485393,
            "unit": "ns/iter",
            "extra": "iterations: 12820\ncpu: 67865.60842433691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77546.6803932059,
            "unit": "ns/iter",
            "extra": "iterations: 11292\ncpu: 77538.6733970953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 593.3174790414257,
            "unit": "ns/iter",
            "extra": "iterations: 1180900\ncpu: 593.2807180963672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 496.6841671375501,
            "unit": "ns/iter",
            "extra": "iterations: 1403467\ncpu: 496.6638332073358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 494.36145855912156,
            "unit": "ns/iter",
            "extra": "iterations: 1421156\ncpu: 494.3088584222991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.54893485425214,
            "unit": "ns/iter",
            "extra": "iterations: 1419571\ncpu: 492.514217323403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1007.0780377558419,
            "unit": "ns/iter",
            "extra": "iterations: 721215\ncpu: 1006.9869595058342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3241.3138819369747,
            "unit": "ns/iter",
            "extra": "iterations: 242142\ncpu: 3240.9796730843887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14740.045078697147,
            "unit": "ns/iter",
            "extra": "iterations: 55148\ncpu: 14738.795604555045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11600.778331809339,
            "unit": "ns/iter",
            "extra": "iterations: 69992\ncpu: 11599.942850611495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10887.62704846474,
            "unit": "ns/iter",
            "extra": "iterations: 74385\ncpu: 10886.977213147822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11569.720158559405,
            "unit": "ns/iter",
            "extra": "iterations: 69375\ncpu: 11568.978738738719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35280.36716354497,
            "unit": "ns/iter",
            "extra": "iterations: 23480\ncpu: 35277.372231686604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 480346.2534465004,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 480290.880169671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 375034.94620390097,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 374994.4034707163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372175.8906586559,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372150.3228583728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 387222.26914660796,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 387187.26477024064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231798.71520342224,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 231783.05674518246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373684.25450642477,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 373650.5150214587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1892192.10082324,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1892052.0576131723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 777784.0355078384,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 777770.7679603623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2581959.788300655,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2581894.150417827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3075.8673287669117,
            "unit": "ns/iter",
            "extra": "iterations: 248200\ncpu: 3075.8154713940435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14805.637877192998,
            "unit": "ns/iter",
            "extra": "iterations: 55078\ncpu: 14805.426849195714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11406.304659898637,
            "unit": "ns/iter",
            "extra": "iterations: 71611\ncpu: 11406.145703872324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11013.84785050737,
            "unit": "ns/iter",
            "extra": "iterations: 75669\ncpu: 11013.800896007619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11891.221145568148,
            "unit": "ns/iter",
            "extra": "iterations: 68525\ncpu: 11890.870485224346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35128.22017215108,
            "unit": "ns/iter",
            "extra": "iterations: 23468\ncpu: 35127.982785069165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480231.8919363684,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 480221.06417992164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387361.9203027362,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 387359.52804986725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380510.5447048559,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 380508.2899305534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380939.3660017303,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 380929.66175195156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225978.51975051092,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 225974.48024948064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376852.1512425407,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 376847.7720651247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1893965.590436546,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1893783.575883576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 730055.3212312986,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 730036.4640883954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3290.688453256642,
            "unit": "ns/iter",
            "extra": "iterations: 246589\ncpu: 3290.648406863238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14659.998208015217,
            "unit": "ns/iter",
            "extra": "iterations: 55804\ncpu: 14659.642677944285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11553.327184947531,
            "unit": "ns/iter",
            "extra": "iterations: 70425\ncpu: 11553.184238551694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10866.129282766444,
            "unit": "ns/iter",
            "extra": "iterations: 75331\ncpu: 10865.875934210293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11536.99264182544,
            "unit": "ns/iter",
            "extra": "iterations: 70262\ncpu: 11536.938885884256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34910.02653991558,
            "unit": "ns/iter",
            "extra": "iterations: 23248\ncpu: 34909.26531314505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460513.18532209535,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 460503.74868004303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374509.2778257069,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374507.0319240718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373211.47354838124,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373204.1720430089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378999.0534944346,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 378995.901639344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231893.14817729164,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 231887.75242590994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372943.4491272759,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 372933.631332483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.57931962369776,
            "unit": "ns/iter",
            "extra": "iterations: 2331592\ncpu: 299.5750971868144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1513.3794341801508,
            "unit": "ns/iter",
            "extra": "iterations: 458061\ncpu: 1513.3189684343372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1150.5091254841116,
            "unit": "ns/iter",
            "extra": "iterations: 608954\ncpu: 1150.426633210394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1144.3955420278364,
            "unit": "ns/iter",
            "extra": "iterations: 614046\ncpu: 1144.3007527123398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 981.9740162299223,
            "unit": "ns/iter",
            "extra": "iterations: 709058\ncpu: 981.8832874038584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6675.388684072787,
            "unit": "ns/iter",
            "extra": "iterations: 105515\ncpu: 6675.1362365541045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18910.70361070763,
            "unit": "ns/iter",
            "extra": "iterations: 36641\ncpu: 18909.792309162058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4537.838607246716,
            "unit": "ns/iter",
            "extra": "iterations: 154629\ncpu: 4537.401134327906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4499.884822693427,
            "unit": "ns/iter",
            "extra": "iterations: 156029\ncpu: 4499.477020297562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4533.7975341064575,
            "unit": "ns/iter",
            "extra": "iterations: 154589\ncpu: 4533.395002231702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9113.455832411577,
            "unit": "ns/iter",
            "extra": "iterations: 76855\ncpu: 9112.747381432642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8670.492742853554,
            "unit": "ns/iter",
            "extra": "iterations: 80748\ncpu: 8669.611631247912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3199.3079888774596,
            "unit": "ns/iter",
            "extra": "iterations: 218654\ncpu: 3199.256816705875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15600.298522409084,
            "unit": "ns/iter",
            "extra": "iterations: 44938\ncpu: 15600.16912190121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12674.343662890316,
            "unit": "ns/iter",
            "extra": "iterations: 55246\ncpu: 12674.385475871724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12426.374023524564,
            "unit": "ns/iter",
            "extra": "iterations: 56197\ncpu: 12426.421339217377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12970.070768716863,
            "unit": "ns/iter",
            "extra": "iterations: 53908\ncpu: 12970.002597016892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28534.843746179173,
            "unit": "ns/iter",
            "extra": "iterations: 24537\ncpu: 28534.967599951284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99800.27051757336,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 99799.3422933938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84508.45376629656,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84507.67745050848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85352.28939024363,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85352.59756097615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84692.50024343855,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 84692.86757546163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55360.792942481276,
            "unit": "ns/iter",
            "extra": "iterations: 12639\ncpu: 55360.1629875777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85133.70578915316,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85131.11517367519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3208.0854575737726,
            "unit": "ns/iter",
            "extra": "iterations: 217921\ncpu: 3208.0666847160073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15507.219470008322,
            "unit": "ns/iter",
            "extra": "iterations: 45095\ncpu: 15506.98968843551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12353.647428317761,
            "unit": "ns/iter",
            "extra": "iterations: 56675\ncpu: 12353.513895015576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12139.338410469356,
            "unit": "ns/iter",
            "extra": "iterations: 57841\ncpu: 12139.210940336408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12744.630920885254,
            "unit": "ns/iter",
            "extra": "iterations: 55186\ncpu: 12744.502228826228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27826.31553667771,
            "unit": "ns/iter",
            "extra": "iterations: 25192\ncpu: 27825.82565893925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96871.18914428916,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 96867.73746884486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82660.42253189154,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82658.41993386837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81806.6908963493,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 81805.57438354591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81949.20929961347,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81948.70061764389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55358.57340173492,
            "unit": "ns/iter",
            "extra": "iterations: 12670\ncpu: 55358.823993685786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83883.70121514858,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 83882.83297593443 ns\nthreads: 1"
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
        "date": 1702490346663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 726.0350216763702,
            "unit": "ns/iter",
            "extra": "iterations: 963489\ncpu: 726.0126477832129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10797.65333698977,
            "unit": "ns/iter",
            "extra": "iterations: 76596\ncpu: 10797.245286960157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23977.142292489338,
            "unit": "ns/iter",
            "extra": "iterations: 34661\ncpu: 23976.81255589857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37588.122426722286,
            "unit": "ns/iter",
            "extra": "iterations: 22005\ncpu: 37587.65735060214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47213.11877145334,
            "unit": "ns/iter",
            "extra": "iterations: 16898\ncpu: 47212.14936678896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58421.88675862009,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 58416.51034482758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58411.83259999526,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58409.93999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67867.32129485393,
            "unit": "ns/iter",
            "extra": "iterations: 12820\ncpu: 67865.60842433691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77546.6803932059,
            "unit": "ns/iter",
            "extra": "iterations: 11292\ncpu: 77538.6733970953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 593.3174790414257,
            "unit": "ns/iter",
            "extra": "iterations: 1180900\ncpu: 593.2807180963672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 496.6841671375501,
            "unit": "ns/iter",
            "extra": "iterations: 1403467\ncpu: 496.6638332073358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 494.36145855912156,
            "unit": "ns/iter",
            "extra": "iterations: 1421156\ncpu: 494.3088584222991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 492.54893485425214,
            "unit": "ns/iter",
            "extra": "iterations: 1419571\ncpu: 492.514217323403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1007.0780377558419,
            "unit": "ns/iter",
            "extra": "iterations: 721215\ncpu: 1006.9869595058342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3241.3138819369747,
            "unit": "ns/iter",
            "extra": "iterations: 242142\ncpu: 3240.9796730843887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14740.045078697147,
            "unit": "ns/iter",
            "extra": "iterations: 55148\ncpu: 14738.795604555045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11600.778331809339,
            "unit": "ns/iter",
            "extra": "iterations: 69992\ncpu: 11599.942850611495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10887.62704846474,
            "unit": "ns/iter",
            "extra": "iterations: 74385\ncpu: 10886.977213147822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11569.720158559405,
            "unit": "ns/iter",
            "extra": "iterations: 69375\ncpu: 11568.978738738719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35280.36716354497,
            "unit": "ns/iter",
            "extra": "iterations: 23480\ncpu: 35277.372231686604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 480346.2534465004,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 480290.880169671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 375034.94620390097,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 374994.4034707163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372175.8906586559,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372150.3228583728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 387222.26914660796,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 387187.26477024064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 231798.71520342224,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 231783.05674518246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373684.25450642477,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 373650.5150214587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1892192.10082324,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1892052.0576131723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 777784.0355078384,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 777770.7679603623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2581959.788300655,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2581894.150417827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3075.8673287669117,
            "unit": "ns/iter",
            "extra": "iterations: 248200\ncpu: 3075.8154713940435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14805.637877192998,
            "unit": "ns/iter",
            "extra": "iterations: 55078\ncpu: 14805.426849195714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11406.304659898637,
            "unit": "ns/iter",
            "extra": "iterations: 71611\ncpu: 11406.145703872324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11013.84785050737,
            "unit": "ns/iter",
            "extra": "iterations: 75669\ncpu: 11013.800896007619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11891.221145568148,
            "unit": "ns/iter",
            "extra": "iterations: 68525\ncpu: 11890.870485224346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35128.22017215108,
            "unit": "ns/iter",
            "extra": "iterations: 23468\ncpu: 35127.982785069165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480231.8919363684,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 480221.06417992164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387361.9203027362,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 387359.52804986725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380510.5447048559,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 380508.2899305534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380939.3660017303,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 380929.66175195156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225978.51975051092,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 225974.48024948064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376852.1512425407,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 376847.7720651247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1893965.590436546,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1893783.575883576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 730055.3212312986,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 730036.4640883954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3290.688453256642,
            "unit": "ns/iter",
            "extra": "iterations: 246589\ncpu: 3290.648406863238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14659.998208015217,
            "unit": "ns/iter",
            "extra": "iterations: 55804\ncpu: 14659.642677944285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11553.327184947531,
            "unit": "ns/iter",
            "extra": "iterations: 70425\ncpu: 11553.184238551694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10866.129282766444,
            "unit": "ns/iter",
            "extra": "iterations: 75331\ncpu: 10865.875934210293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11536.99264182544,
            "unit": "ns/iter",
            "extra": "iterations: 70262\ncpu: 11536.938885884256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34910.02653991558,
            "unit": "ns/iter",
            "extra": "iterations: 23248\ncpu: 34909.26531314505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460513.18532209535,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 460503.74868004303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374509.2778257069,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374507.0319240718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373211.47354838124,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373204.1720430089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378999.0534944346,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 378995.901639344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 231893.14817729164,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 231887.75242590994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372943.4491272759,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 372933.631332483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.57931962369776,
            "unit": "ns/iter",
            "extra": "iterations: 2331592\ncpu: 299.5750971868144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1513.3794341801508,
            "unit": "ns/iter",
            "extra": "iterations: 458061\ncpu: 1513.3189684343372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1150.5091254841116,
            "unit": "ns/iter",
            "extra": "iterations: 608954\ncpu: 1150.426633210394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1144.3955420278364,
            "unit": "ns/iter",
            "extra": "iterations: 614046\ncpu: 1144.3007527123398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 981.9740162299223,
            "unit": "ns/iter",
            "extra": "iterations: 709058\ncpu: 981.8832874038584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6675.388684072787,
            "unit": "ns/iter",
            "extra": "iterations: 105515\ncpu: 6675.1362365541045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18910.70361070763,
            "unit": "ns/iter",
            "extra": "iterations: 36641\ncpu: 18909.792309162058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4537.838607246716,
            "unit": "ns/iter",
            "extra": "iterations: 154629\ncpu: 4537.401134327906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4499.884822693427,
            "unit": "ns/iter",
            "extra": "iterations: 156029\ncpu: 4499.477020297562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4533.7975341064575,
            "unit": "ns/iter",
            "extra": "iterations: 154589\ncpu: 4533.395002231702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9113.455832411577,
            "unit": "ns/iter",
            "extra": "iterations: 76855\ncpu: 9112.747381432642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8670.492742853554,
            "unit": "ns/iter",
            "extra": "iterations: 80748\ncpu: 8669.611631247912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3199.3079888774596,
            "unit": "ns/iter",
            "extra": "iterations: 218654\ncpu: 3199.256816705875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15600.298522409084,
            "unit": "ns/iter",
            "extra": "iterations: 44938\ncpu: 15600.16912190121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12674.343662890316,
            "unit": "ns/iter",
            "extra": "iterations: 55246\ncpu: 12674.385475871724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12426.374023524564,
            "unit": "ns/iter",
            "extra": "iterations: 56197\ncpu: 12426.421339217377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12970.070768716863,
            "unit": "ns/iter",
            "extra": "iterations: 53908\ncpu: 12970.002597016892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28534.843746179173,
            "unit": "ns/iter",
            "extra": "iterations: 24537\ncpu: 28534.967599951284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99800.27051757336,
            "unit": "ns/iter",
            "extra": "iterations: 6994\ncpu: 99799.3422933938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84508.45376629656,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84507.67745050848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85352.28939024363,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85352.59756097615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84692.50024343855,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 84692.86757546163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55360.792942481276,
            "unit": "ns/iter",
            "extra": "iterations: 12639\ncpu: 55360.1629875777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85133.70578915316,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85131.11517367519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3208.0854575737726,
            "unit": "ns/iter",
            "extra": "iterations: 217921\ncpu: 3208.0666847160073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15507.219470008322,
            "unit": "ns/iter",
            "extra": "iterations: 45095\ncpu: 15506.98968843551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12353.647428317761,
            "unit": "ns/iter",
            "extra": "iterations: 56675\ncpu: 12353.513895015576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12139.338410469356,
            "unit": "ns/iter",
            "extra": "iterations: 57841\ncpu: 12139.210940336408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12744.630920885254,
            "unit": "ns/iter",
            "extra": "iterations: 55186\ncpu: 12744.502228826228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27826.31553667771,
            "unit": "ns/iter",
            "extra": "iterations: 25192\ncpu: 27825.82565893925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96871.18914428916,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 96867.73746884486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82660.42253189154,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82658.41993386837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81806.6908963493,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 81805.57438354591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81949.20929961347,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81948.70061764389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55358.57340173492,
            "unit": "ns/iter",
            "extra": "iterations: 12670\ncpu: 55358.823993685786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83883.70121514858,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 83882.83297593443 ns\nthreads: 1"
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
        "date": 1702492929997,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.3140419226243,
            "unit": "ns/iter",
            "extra": "iterations: 981283\ncpu: 712.2598679483901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10828.47525232637,
            "unit": "ns/iter",
            "extra": "iterations: 76290\ncpu: 10827.814916764977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24199.580616310886,
            "unit": "ns/iter",
            "extra": "iterations: 34658\ncpu: 24197.489757054638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37547.55881675136,
            "unit": "ns/iter",
            "extra": "iterations: 21703\ncpu: 37545.205731926464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46276.16567051236,
            "unit": "ns/iter",
            "extra": "iterations: 17233\ncpu: 46274.972436604156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57408.2325644873,
            "unit": "ns/iter",
            "extra": "iterations: 14654\ncpu: 57406.489695646254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57447.52619999645,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57445.98000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66587.49526522812,
            "unit": "ns/iter",
            "extra": "iterations: 12989\ncpu: 66582.6391562091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76748.5917289909,
            "unit": "ns/iter",
            "extra": "iterations: 11365\ncpu: 76745.85129784424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 576.943205130235,
            "unit": "ns/iter",
            "extra": "iterations: 1215233\ncpu: 576.9164431841474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 478.26617404540514,
            "unit": "ns/iter",
            "extra": "iterations: 1463193\ncpu: 478.2410796115073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 476.9419555152299,
            "unit": "ns/iter",
            "extra": "iterations: 1465445\ncpu: 476.9203211311244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 474.06833680754016,
            "unit": "ns/iter",
            "extra": "iterations: 1477081\ncpu: 474.0545034429386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 925.7633413831013,
            "unit": "ns/iter",
            "extra": "iterations: 756537\ncpu: 925.7092514972812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3269.796849159213,
            "unit": "ns/iter",
            "extra": "iterations: 244887\ncpu: 3269.653758672369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14673.436455359933,
            "unit": "ns/iter",
            "extra": "iterations: 55701\ncpu: 14672.440351160685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12321.213850870696,
            "unit": "ns/iter",
            "extra": "iterations: 68169\ncpu: 12320.905396881255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10990.40339642906,
            "unit": "ns/iter",
            "extra": "iterations: 74490\ncpu: 10990.057725869268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11787.344749446846,
            "unit": "ns/iter",
            "extra": "iterations: 69726\ncpu: 11787.032097065647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35432.81238975051,
            "unit": "ns/iter",
            "extra": "iterations: 23810\ncpu: 35431.68416631667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460026.6803797737,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 460011.76160337665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371905.95845820295,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 371878.28693790024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368343.4448217322,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 368328.4380305601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375199.2697594704,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 375182.989690721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228289.09259258618,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 228281.84663536787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 368988.1218990585,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 368965.35500427714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1882336.8638212339,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882210.7723577195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 743623.940110295,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 743580.9298660357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2550057.450000054,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2549937.2222222267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3164.656674576052,
            "unit": "ns/iter",
            "extra": "iterations: 246128\ncpu: 3164.45142364948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14673.299195330359,
            "unit": "ns/iter",
            "extra": "iterations: 56545\ncpu: 14671.921478468417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11981.88977213901,
            "unit": "ns/iter",
            "extra": "iterations: 69692\ncpu: 11981.399586753223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11181.191502595904,
            "unit": "ns/iter",
            "extra": "iterations: 73952\ncpu: 11180.411618346989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12328.645296024764,
            "unit": "ns/iter",
            "extra": "iterations: 68474\ncpu: 12327.901101147838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 36566.27194028786,
            "unit": "ns/iter",
            "extra": "iterations: 22641\ncpu: 36563.73835077944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 457967.0603493674,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 457947.1148755971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 375050.1188630408,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 375032.945736434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376322.0317596708,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 376299.8283261809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 375041.67612907273,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 375019.44086021424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223398.43228630425,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 223388.23377960874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372672.29888984544,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372662.5533731845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1883850.4804124539,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1883689.89690722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 733050.5195842996,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 733021.8225419674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3269.7645997495365,
            "unit": "ns/iter",
            "extra": "iterations: 244422\ncpu: 3269.610346040858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14980.412415758134,
            "unit": "ns/iter",
            "extra": "iterations: 54753\ncpu: 14979.69791609588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12200.715662039902,
            "unit": "ns/iter",
            "extra": "iterations: 67156\ncpu: 12200.001489070246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11504.949017569394,
            "unit": "ns/iter",
            "extra": "iterations: 71201\ncpu: 11504.601058973903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12468.810214394058,
            "unit": "ns/iter",
            "extra": "iterations: 66886\ncpu: 12468.232515025518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35088.985715478695,
            "unit": "ns/iter",
            "extra": "iterations: 23942\ncpu: 35087.7203241169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 447750.0123076448,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 447731.5384615402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 370465.91984730813,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 370442.4088210355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367622.003783103,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 367600.16813787265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369022.1355498948,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 368986.1892583105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228729.64962560826,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 228629.4087270849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367542.2599660611,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 367526.08142493444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.1310678870892,
            "unit": "ns/iter",
            "extra": "iterations: 2358770\ncpu: 297.1109942893974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1498.543806814362,
            "unit": "ns/iter",
            "extra": "iterations: 467861\ncpu: 1498.4653561634752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1164.5100212247069,
            "unit": "ns/iter",
            "extra": "iterations: 604018\ncpu: 1164.4101665844446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1138.3192287465656,
            "unit": "ns/iter",
            "extra": "iterations: 617955\ncpu: 1138.2427523039703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 983.3819054886856,
            "unit": "ns/iter",
            "extra": "iterations: 715554\ncpu: 983.3587681712388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6349.108125278001,
            "unit": "ns/iter",
            "extra": "iterations: 110187\ncpu: 6348.779801610005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18762.517097408916,
            "unit": "ns/iter",
            "extra": "iterations: 39041\ncpu: 18761.548116083133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4446.7143528162105,
            "unit": "ns/iter",
            "extra": "iterations: 157544\ncpu: 4446.538109988253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4408.780611827997,
            "unit": "ns/iter",
            "extra": "iterations: 158901\ncpu: 4408.500890491552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4415.52130389544,
            "unit": "ns/iter",
            "extra": "iterations: 157436\ncpu: 4415.185853299147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9290.476105343241,
            "unit": "ns/iter",
            "extra": "iterations: 74954\ncpu: 9289.999199509059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8467.681414650542,
            "unit": "ns/iter",
            "extra": "iterations: 83017\ncpu: 8467.263331606782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3140.888391578179,
            "unit": "ns/iter",
            "extra": "iterations: 223424\ncpu: 3140.8017938985804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15304.031508793876,
            "unit": "ns/iter",
            "extra": "iterations: 45765\ncpu: 15303.651261881283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12306.117759332838,
            "unit": "ns/iter",
            "extra": "iterations: 57108\ncpu: 12305.84156335377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12064.231514295134,
            "unit": "ns/iter",
            "extra": "iterations: 58126\ncpu: 12063.818256890248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12731.166131110294,
            "unit": "ns/iter",
            "extra": "iterations: 55083\ncpu: 12730.677341466413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27594.752970904985,
            "unit": "ns/iter",
            "extra": "iterations: 25329\ncpu: 27593.351494334274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97732.60831356689,
            "unit": "ns/iter",
            "extra": "iterations: 7169\ncpu: 97725.49867485055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84273.05507141315,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 84272.28274025778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84036.10292695058,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 84028.42283502742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83526.54200381381,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 83522.21561161379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54431.202143467395,
            "unit": "ns/iter",
            "extra": "iterations: 12783\ncpu: 54428.256277869645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83517.97984887728,
            "unit": "ns/iter",
            "extra": "iterations: 8337\ncpu: 83516.21686458001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3018.933599697129,
            "unit": "ns/iter",
            "extra": "iterations: 232514\ncpu: 3018.7674720662485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15181.136194272794,
            "unit": "ns/iter",
            "extra": "iterations: 46162\ncpu: 15180.228326329077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12017.771030364123,
            "unit": "ns/iter",
            "extra": "iterations: 58261\ncpu: 12017.663617170805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11797.378839935855,
            "unit": "ns/iter",
            "extra": "iterations: 59376\ncpu: 11796.385745082282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12312.149573925,
            "unit": "ns/iter",
            "extra": "iterations: 56915\ncpu: 12311.385399279727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26900.510441458468,
            "unit": "ns/iter",
            "extra": "iterations: 26050\ncpu: 26898.310940499396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97154.14551255394,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 97147.63490081856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81728.729755175,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 81722.36346515964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80446.56205388019,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 80442.36702739973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81403.64326397626,
            "unit": "ns/iter",
            "extra": "iterations: 8603\ncpu: 81398.38428455185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54688.108917091406,
            "unit": "ns/iter",
            "extra": "iterations: 12762\ncpu: 54683.89750822752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82484.03579417392,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82478.26445307887 ns\nthreads: 1"
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
        "date": 1702503983793,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.8040627796796,
            "unit": "ns/iter",
            "extra": "iterations: 978788\ncpu: 712.7997073932252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10874.995786204703,
            "unit": "ns/iter",
            "extra": "iterations: 76653\ncpu: 10874.841167338525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23893.705729240886,
            "unit": "ns/iter",
            "extra": "iterations: 34961\ncpu: 23893.418380481107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37853.00778795083,
            "unit": "ns/iter",
            "extra": "iterations: 21957\ncpu: 37851.68738898757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47374.281789821594,
            "unit": "ns/iter",
            "extra": "iterations: 16672\ncpu: 47371.731046065266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59496.73797992536,
            "unit": "ns/iter",
            "extra": "iterations: 14247\ncpu: 59494.567277321556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59730.22230000424,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59726.50999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68673.16666666778,
            "unit": "ns/iter",
            "extra": "iterations: 12708\ncpu: 68670.37299339003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79091.3144511765,
            "unit": "ns/iter",
            "extra": "iterations: 11051\ncpu: 79086.81567278979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 717.448260305711,
            "unit": "ns/iter",
            "extra": "iterations: 975315\ncpu: 717.4449280488866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 522.2345203195749,
            "unit": "ns/iter",
            "extra": "iterations: 1237897\ncpu: 522.2325443877803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 591.1957649394435,
            "unit": "ns/iter",
            "extra": "iterations: 1172498\ncpu: 591.1863389105994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 491.58194447654046,
            "unit": "ns/iter",
            "extra": "iterations: 1430853\ncpu: 491.5743965312991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 948.4294233137288,
            "unit": "ns/iter",
            "extra": "iterations: 737021\ncpu: 948.4016059243893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3298.389410592886,
            "unit": "ns/iter",
            "extra": "iterations: 244924\ncpu: 3298.3488755695635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14690.960692885426,
            "unit": "ns/iter",
            "extra": "iterations: 54901\ncpu: 14690.639514762952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12036.569943916162,
            "unit": "ns/iter",
            "extra": "iterations: 67933\ncpu: 12036.540414820496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11332.067782984186,
            "unit": "ns/iter",
            "extra": "iterations: 72142\ncpu: 11330.983338415886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12039.112867776385,
            "unit": "ns/iter",
            "extra": "iterations: 68248\ncpu: 12038.928613292694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35551.974528583065,
            "unit": "ns/iter",
            "extra": "iterations: 23281\ncpu: 35550.18684764408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 466147.3473684533,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 466139.6842105247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 376705.2666955382,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 376696.18386817025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372022.66409268207,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 372013.81381381437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376569.1115954775,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 376568.43940714945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228996.75641364866,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 228991.13991007674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371245.7719522628,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 371244.50127877225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1895674.9876544897,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1895608.230452671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 757824.2917341706,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 757801.3776337117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2551603.8698060457,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2551466.204986146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3210.8938701082866,
            "unit": "ns/iter",
            "extra": "iterations: 246236\ncpu: 3210.8554394970697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14959.810296880041,
            "unit": "ns/iter",
            "extra": "iterations: 55376\ncpu: 14959.675671771203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12147.963161458207,
            "unit": "ns/iter",
            "extra": "iterations: 67918\ncpu: 12147.922494773145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11473.131600505669,
            "unit": "ns/iter",
            "extra": "iterations: 72021\ncpu: 11472.68435595174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12244.980342703568,
            "unit": "ns/iter",
            "extra": "iterations: 67405\ncpu: 12244.572361100752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34804.34731613465,
            "unit": "ns/iter",
            "extra": "iterations: 23958\ncpu: 34804.161449202824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474175.14604904735,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 474162.2343324246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381310.83289703814,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 381299.86910994607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380106.8381326399,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 380095.7678883057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381020.2793223112,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 381009.7306689809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225286.31850584078,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 225284.43113772274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378533.69858916005,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 378505.60068405175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901012.1419623848,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1900935.6993736972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 762838.7822513855,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 762832.2925225969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3267.331457565029,
            "unit": "ns/iter",
            "extra": "iterations: 247543\ncpu: 3267.2881075206947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14971.864455423653,
            "unit": "ns/iter",
            "extra": "iterations: 55052\ncpu: 14971.76124391477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12237.779483517294,
            "unit": "ns/iter",
            "extra": "iterations: 67224\ncpu: 12237.590741401937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11504.781444887736,
            "unit": "ns/iter",
            "extra": "iterations: 71355\ncpu: 11504.693434237251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12333.414956056231,
            "unit": "ns/iter",
            "extra": "iterations: 67130\ncpu: 12332.99568002383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 35099.869725160526,
            "unit": "ns/iter",
            "extra": "iterations: 23650\ncpu: 35099.712473573156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455330.34284234233,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 455327.7489626531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372308.96885663166,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 372296.4590443693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369618.40177063446,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 369615.2613827993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371966.1382252411,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 371959.9402730373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229894.2804302246,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 229894.35991605517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369172.43367344444,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 369163.1802721068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 300.1814998768468,
            "unit": "ns/iter",
            "extra": "iterations: 2334525\ncpu: 300.1763527912515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1512.5690389960507,
            "unit": "ns/iter",
            "extra": "iterations: 465534\ncpu: 1512.563636597963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1171.9288177124592,
            "unit": "ns/iter",
            "extra": "iterations: 597452\ncpu: 1171.9374945602267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1138.8998289120977,
            "unit": "ns/iter",
            "extra": "iterations: 614888\ncpu: 1138.8722824319236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 998.2884242192756,
            "unit": "ns/iter",
            "extra": "iterations: 703391\ncpu: 998.2897136869816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6611.648184025973,
            "unit": "ns/iter",
            "extra": "iterations: 105811\ncpu: 6611.5526741076355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18877.3376385279,
            "unit": "ns/iter",
            "extra": "iterations: 37087\ncpu: 18877.285841399953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4480.201233437941,
            "unit": "ns/iter",
            "extra": "iterations: 156311\ncpu: 4480.106966240351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4456.673124642103,
            "unit": "ns/iter",
            "extra": "iterations: 157170\ncpu: 4456.664121651711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4488.743011843623,
            "unit": "ns/iter",
            "extra": "iterations: 155692\ncpu: 4488.66030367647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9311.588718998113,
            "unit": "ns/iter",
            "extra": "iterations: 75277\ncpu: 9311.581226669538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8455.032059679623,
            "unit": "ns/iter",
            "extra": "iterations: 82440\ncpu: 8454.859291605928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3112.5443566558697,
            "unit": "ns/iter",
            "extra": "iterations: 224149\ncpu: 3112.529611999129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15316.64583788607,
            "unit": "ns/iter",
            "extra": "iterations: 45770\ncpu: 15316.364430849966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12281.657874444974,
            "unit": "ns/iter",
            "extra": "iterations: 57058\ncpu: 12281.63272459593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12104.188027839997,
            "unit": "ns/iter",
            "extra": "iterations: 57901\ncpu: 12104.107010241712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12703.083242614694,
            "unit": "ns/iter",
            "extra": "iterations: 55116\ncpu: 12702.91566877127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27547.836092650366,
            "unit": "ns/iter",
            "extra": "iterations: 25429\ncpu: 27548.008179637374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99020.20835104196,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 99020.8351026198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85051.68991871824,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 85049.77556714742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84661.29024449554,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 84658.3756959563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83915.66694804154,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 83911.43132762506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54516.34746428326,
            "unit": "ns/iter",
            "extra": "iterations: 12738\ncpu: 54515.284974093855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84364.88699411874,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 84360.56202714011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3006.0965650713847,
            "unit": "ns/iter",
            "extra": "iterations: 231999\ncpu: 3006.002612080198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15148.604207785158,
            "unit": "ns/iter",
            "extra": "iterations: 46105\ncpu: 15148.07504609048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12081.751377315262,
            "unit": "ns/iter",
            "extra": "iterations: 58084\ncpu: 12081.481991598306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11916.560875253803,
            "unit": "ns/iter",
            "extra": "iterations: 58086\ncpu: 11915.9401576974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12384.487809183714,
            "unit": "ns/iter",
            "extra": "iterations: 56641\ncpu: 12384.069843399628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27004.647459585965,
            "unit": "ns/iter",
            "extra": "iterations: 25980\ncpu: 27004.08006158582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97561.51218832264,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 97562.15350327455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82595.94846943874,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 82594.09053303378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80616.70434578943,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 80616.01265081357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80991.84645759771,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 80990.1045296172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54676.63246996995,
            "unit": "ns/iter",
            "extra": "iterations: 12818\ncpu: 54677.008893742735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82789.793144195,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82787.26950354516 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}