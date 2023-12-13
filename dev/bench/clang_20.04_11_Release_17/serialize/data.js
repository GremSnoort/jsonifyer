window.BENCHMARK_DATA = {
  "lastUpdate": 1702490347883,
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
      }
    ]
  }
}