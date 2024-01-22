window.BENCHMARK_DATA = {
  "lastUpdate": 1705960387949,
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
        "date": 1705575650891,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.2415027417943,
            "unit": "ns/iter",
            "extra": "iterations: 979463\ncpu: 712.1814708671998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10820.702066980133,
            "unit": "ns/iter",
            "extra": "iterations: 76440\ncpu: 10820.040554683412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23992.36562661521,
            "unit": "ns/iter",
            "extra": "iterations: 34806\ncpu: 23990.14825030167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37419.63429019259,
            "unit": "ns/iter",
            "extra": "iterations: 21703\ncpu: 37417.17734875363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47392.45558466124,
            "unit": "ns/iter",
            "extra": "iterations: 16796\ncpu: 47388.788997380354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58737.906236952134,
            "unit": "ns/iter",
            "extra": "iterations: 14366\ncpu: 58733.89252401501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58546.954700000235,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58545.04 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67747.46094359724,
            "unit": "ns/iter",
            "extra": "iterations: 12802\ncpu: 67741.69660990467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77755.0007102274,
            "unit": "ns/iter",
            "extra": "iterations: 11264\ncpu: 77748.7926136363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 581.6844469580594,
            "unit": "ns/iter",
            "extra": "iterations: 1207648\ncpu: 581.6477980338644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.89186379048186,
            "unit": "ns/iter",
            "extra": "iterations: 1445538\ncpu: 483.85493843814595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 482.58200404330574,
            "unit": "ns/iter",
            "extra": "iterations: 1435478\ncpu: 482.5797399890485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 477.7031273574548,
            "unit": "ns/iter",
            "extra": "iterations: 1464783\ncpu: 477.6581241043895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 967.8579187578961,
            "unit": "ns/iter",
            "extra": "iterations: 725240\ncpu: 967.8396117147412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3376.49683937955,
            "unit": "ns/iter",
            "extra": "iterations: 236346\ncpu: 3376.3791221344945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14954.237174384589,
            "unit": "ns/iter",
            "extra": "iterations: 55280\ncpu: 14953.894717800256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12047.132833998037,
            "unit": "ns/iter",
            "extra": "iterations: 67957\ncpu: 12046.642729961626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11356.094326004193,
            "unit": "ns/iter",
            "extra": "iterations: 72048\ncpu: 11355.51715522982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12251.710103787853,
            "unit": "ns/iter",
            "extra": "iterations: 67638\ncpu: 12250.484934504264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 36115.712996862516,
            "unit": "ns/iter",
            "extra": "iterations: 22944\ncpu: 36115.14557182715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 457410.8445266772,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 457407.77366472903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371573.39081936324,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 371538.3526383538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371453.1441939721,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 371429.81709910795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 378013.0108600953,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 377977.7584708949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229661.2992681652,
            "unit": "ns/iter",
            "extra": "iterations: 3826\ncpu: 229648.98065865165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 369322.6212765771,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 369317.02127659606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1877307.4704683335,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1877106.9246435855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 784902.3288215926,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 783854.8566878968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2548117.9613258536,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548014.917127069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3163.2254450184682,
            "unit": "ns/iter",
            "extra": "iterations: 246956\ncpu: 3162.9776154456695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14683.057203197839,
            "unit": "ns/iter",
            "extra": "iterations: 55399\ncpu: 14682.017725951717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11819.118493397187,
            "unit": "ns/iter",
            "extra": "iterations: 69295\ncpu: 11818.099429973281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11443.823487268619,
            "unit": "ns/iter",
            "extra": "iterations: 72584\ncpu: 11442.820731841743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12132.413915799607,
            "unit": "ns/iter",
            "extra": "iterations: 66888\ncpu: 12131.477993063094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34764.249341640796,
            "unit": "ns/iter",
            "extra": "iterations: 23923\ncpu: 34761.79408936999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 472570.40563988267,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 472541.5943600884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382379.4980149954,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 382343.4494927205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378866.18452893867,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 378854.62402765756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 382014.45244325907,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 381982.15532286034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226169.00464036514,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 226152.1526166537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 377637.6097877861,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 377606.58293633605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1895794.7520834277,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1895625.833333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 761681.9820992145,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 761661.7575264463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3254.940431726433,
            "unit": "ns/iter",
            "extra": "iterations: 245248\ncpu: 3254.8930062630275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14942.008335673969,
            "unit": "ns/iter",
            "extra": "iterations: 56984\ncpu: 14941.692404885613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12336.525473536698,
            "unit": "ns/iter",
            "extra": "iterations: 68738\ncpu: 12336.263784224122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11643.988875461015,
            "unit": "ns/iter",
            "extra": "iterations: 72812\ncpu: 11643.573861451468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12358.587123021469,
            "unit": "ns/iter",
            "extra": "iterations: 69069\ncpu: 12357.898623116014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34664.191315368174,
            "unit": "ns/iter",
            "extra": "iterations: 24457\ncpu: 34661.745103651345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455069.4323898801,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 455036.8972746344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375470.7721248254,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 375443.4801197091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371374.36642521527,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 371350.19173413026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374665.9104157819,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 374638.8769824254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229641.37916664148,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 229624.427083334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370204.4321143366,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 370171.79487179726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.81879886810947,
            "unit": "ns/iter",
            "extra": "iterations: 2338694\ncpu: 299.81130494198766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1514.1067567422483,
            "unit": "ns/iter",
            "extra": "iterations: 463315\ncpu: 1513.9777473209351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1162.5657322860802,
            "unit": "ns/iter",
            "extra": "iterations: 595225\ncpu: 1162.4410937040566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1107.7041118436478,
            "unit": "ns/iter",
            "extra": "iterations: 634314\ncpu: 1107.615786503219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 996.3318491360731,
            "unit": "ns/iter",
            "extra": "iterations: 702063\ncpu: 996.2447814512307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6399.40988553407,
            "unit": "ns/iter",
            "extra": "iterations: 109028\ncpu: 6399.210294603241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18852.93175994555,
            "unit": "ns/iter",
            "extra": "iterations: 37075\ncpu: 18852.285906945388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4439.732453105746,
            "unit": "ns/iter",
            "extra": "iterations: 156096\ncpu: 4439.496207462043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4423.312602694541,
            "unit": "ns/iter",
            "extra": "iterations: 158236\ncpu: 4423.294319876643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4446.010645134496,
            "unit": "ns/iter",
            "extra": "iterations: 157161\ncpu: 4445.94714973816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9301.371343125638,
            "unit": "ns/iter",
            "extra": "iterations: 75235\ncpu: 9301.214860105049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8446.980653502455,
            "unit": "ns/iter",
            "extra": "iterations: 82754\ncpu: 8446.719191821492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3135.252051687785,
            "unit": "ns/iter",
            "extra": "iterations: 223109\ncpu: 3135.237484816793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15416.954700461087,
            "unit": "ns/iter",
            "extra": "iterations: 45453\ncpu: 15416.449959298614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12401.701144334389,
            "unit": "ns/iter",
            "extra": "iterations: 56452\ncpu: 12401.24884857923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12174.791999859015,
            "unit": "ns/iter",
            "extra": "iterations: 57399\ncpu: 12174.569243366499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12846.550699654936,
            "unit": "ns/iter",
            "extra": "iterations: 54527\ncpu: 12846.373356318927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27408.029631953366,
            "unit": "ns/iter",
            "extra": "iterations: 25513\ncpu: 27407.231607415997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99504.73744843696,
            "unit": "ns/iter",
            "extra": "iterations: 7031\ncpu: 99502.00540463685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84930.55459525701,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 84928.67924528364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84414.15580497023,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84410.52377504198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84325.21574765084,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 84323.97062364459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54910.86773814019,
            "unit": "ns/iter",
            "extra": "iterations: 12755\ncpu: 54910.638965111684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84910.71011507839,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 84908.50393700787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2991.5821680711138,
            "unit": "ns/iter",
            "extra": "iterations: 233996\ncpu: 2991.534898032452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15269.18788870722,
            "unit": "ns/iter",
            "extra": "iterations: 45825\ncpu: 15268.534642662471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12068.521732388568,
            "unit": "ns/iter",
            "extra": "iterations: 58047\ncpu: 12068.360121969947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11956.828466346224,
            "unit": "ns/iter",
            "extra": "iterations: 58729\ncpu: 11956.270326414484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12428.691969594214,
            "unit": "ns/iter",
            "extra": "iterations: 55514\ncpu: 12428.491911950287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26900.869866176068,
            "unit": "ns/iter",
            "extra": "iterations: 26004\ncpu: 26900.28457160457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97954.53054933118,
            "unit": "ns/iter",
            "extra": "iterations: 7136\ncpu: 97945.43161435051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82542.5756571205,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 82533.63722472133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81341.97660886734,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 81338.82229721821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82710.84045549863,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 82710.35454331961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54915.66982461397,
            "unit": "ns/iter",
            "extra": "iterations: 12772\ncpu: 54914.751017852424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83564.99020777558,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83559.3742536423 ns\nthreads: 1"
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
        "date": 1705773461723,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 705.0069460590895,
            "unit": "ns/iter",
            "extra": "iterations: 989194\ncpu: 704.9791041999852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10675.370316059669,
            "unit": "ns/iter",
            "extra": "iterations: 76378\ncpu: 10674.838304223727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23328.62636721248,
            "unit": "ns/iter",
            "extra": "iterations: 32548\ncpu: 23327.62381713162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37985.276087142636,
            "unit": "ns/iter",
            "extra": "iterations: 23134\ncpu: 37983.638800034576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46247.551899473314,
            "unit": "ns/iter",
            "extra": "iterations: 17110\ncpu: 46247.60374050266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58098.100027273555,
            "unit": "ns/iter",
            "extra": "iterations: 14666\ncpu: 58096.01118232649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58086.96090000467,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58086.090000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67056.97452277878,
            "unit": "ns/iter",
            "extra": "iterations: 12992\ncpu: 67053.6637931034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76984.4501054108,
            "unit": "ns/iter",
            "extra": "iterations: 11384\ncpu: 76983.67006324657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 571.6218756202906,
            "unit": "ns/iter",
            "extra": "iterations: 1219202\ncpu: 571.5972414743419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 472.7561908622054,
            "unit": "ns/iter",
            "extra": "iterations: 1480125\ncpu: 472.7477071193312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 470.6775376873419,
            "unit": "ns/iter",
            "extra": "iterations: 1491151\ncpu: 470.6680275840613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 470.9919654409312,
            "unit": "ns/iter",
            "extra": "iterations: 1485458\ncpu: 470.9827541404742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 942.1632280419985,
            "unit": "ns/iter",
            "extra": "iterations: 744823\ncpu: 942.1372594562738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3344.7973951098393,
            "unit": "ns/iter",
            "extra": "iterations: 240394\ncpu: 3344.696623043838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15247.916231634654,
            "unit": "ns/iter",
            "extra": "iterations: 53636\ncpu: 15247.66947572529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11818.884471616826,
            "unit": "ns/iter",
            "extra": "iterations: 69022\ncpu: 11818.754889745293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11109.408004739546,
            "unit": "ns/iter",
            "extra": "iterations: 74281\ncpu: 11108.90268036237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11372.191685521846,
            "unit": "ns/iter",
            "extra": "iterations: 71153\ncpu: 11371.815664834927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 39849.85925012908,
            "unit": "ns/iter",
            "extra": "iterations: 23524\ncpu: 39848.9287536134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 457858.06289308955,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 457843.6582809226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 374280.79543501,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 374266.79586563335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369714.9501075366,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 369698.06451612915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 374729.6218884112,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 374726.6094420601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 226465.67671518057,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 226460.3430353432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 374142.8700468427,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 374127.0984235194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1886423.3627049148,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1886386.065573768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 746987.0515055723,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 746972.900158479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2542843.2430941453,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2542705.5248618745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3133.354586964325,
            "unit": "ns/iter",
            "extra": "iterations: 249228\ncpu: 3133.2241963182255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14494.076773584007,
            "unit": "ns/iter",
            "extra": "iterations: 56087\ncpu: 14493.570702658351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11400.348192522206,
            "unit": "ns/iter",
            "extra": "iterations: 72615\ncpu: 11399.852647524614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 10994.71603781195,
            "unit": "ns/iter",
            "extra": "iterations: 74686\ncpu: 10994.243901132804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11123.070550889124,
            "unit": "ns/iter",
            "extra": "iterations: 73082\ncpu: 11122.766207821362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34625.7014671766,
            "unit": "ns/iter",
            "extra": "iterations: 24128\ncpu: 34625.72529840861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 483931.87168144766,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 483913.163716811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 393571.13303170935,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 393564.16289592616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 381681.27300479123,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 381671.21674661717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381262.2320104315,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 381253.4670737045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227023.17117811507,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 227012.65790152052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 377603.3657587157,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 377583.7440553402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1904226.3674320437,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1904202.9227557415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 762600.9077430174,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 762566.7215815485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3219.551447634579,
            "unit": "ns/iter",
            "extra": "iterations: 249545\ncpu: 3219.4778496864305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14703.940802094055,
            "unit": "ns/iter",
            "extra": "iterations: 55779\ncpu: 14703.216264185447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11587.56556263111,
            "unit": "ns/iter",
            "extra": "iterations: 70650\ncpu: 11587.581033262508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10881.651808578446,
            "unit": "ns/iter",
            "extra": "iterations: 74976\ncpu: 10881.161971831003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11573.511228834686,
            "unit": "ns/iter",
            "extra": "iterations: 70221\ncpu: 11573.11488016405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34875.48458904081,
            "unit": "ns/iter",
            "extra": "iterations: 23944\ncpu: 34872.865853658644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 462869.66063831263,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 462855.7446808521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 381911.3996561934,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 381908.2509669097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 379742.42454040586,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 379724.79692176054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 382381.5443965373,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 382371.16379310447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229000.41933801732,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 228988.61089392754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375311.29509594094,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 375288.2302771857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.2262023698303,
            "unit": "ns/iter",
            "extra": "iterations: 2364206\ncpu: 296.2149660393369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1520.6049092396295,
            "unit": "ns/iter",
            "extra": "iterations: 460112\ncpu: 1520.5521699064498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1184.1658066140715,
            "unit": "ns/iter",
            "extra": "iterations: 591243\ncpu: 1184.100953415102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1108.2200234337508,
            "unit": "ns/iter",
            "extra": "iterations: 633278\ncpu: 1108.133078995322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.1271121675876,
            "unit": "ns/iter",
            "extra": "iterations: 711828\ncpu: 986.0967818068385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6314.945215210218,
            "unit": "ns/iter",
            "extra": "iterations: 111217\ncpu: 6314.95454831539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18813.96202770176,
            "unit": "ns/iter",
            "extra": "iterations: 37185\ncpu: 18813.64259782158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4475.890567751069,
            "unit": "ns/iter",
            "extra": "iterations: 156389\ncpu: 4475.8103191401815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4434.703693617167,
            "unit": "ns/iter",
            "extra": "iterations: 157894\ncpu: 4434.521894435493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4479.555994114658,
            "unit": "ns/iter",
            "extra": "iterations: 156320\ncpu: 4479.561796315274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9255.393664439172,
            "unit": "ns/iter",
            "extra": "iterations: 75605\ncpu: 9254.80722174459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8414.825458494783,
            "unit": "ns/iter",
            "extra": "iterations: 82880\ncpu: 8414.560810810835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3111.41823879824,
            "unit": "ns/iter",
            "extra": "iterations: 224960\ncpu: 3111.360241820765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15230.236814552385,
            "unit": "ns/iter",
            "extra": "iterations: 45846\ncpu: 15229.732146752118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12287.3345561121,
            "unit": "ns/iter",
            "extra": "iterations: 56974\ncpu: 12287.359146277384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12097.949069675042,
            "unit": "ns/iter",
            "extra": "iterations: 57883\ncpu: 12097.318729160572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12724.57576419087,
            "unit": "ns/iter",
            "extra": "iterations: 54960\ncpu: 12724.17758369715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27748.2659076497,
            "unit": "ns/iter",
            "extra": "iterations: 25208\ncpu: 27747.080291970575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99543.33859275095,
            "unit": "ns/iter",
            "extra": "iterations: 7035\ncpu: 99541.76261549378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85013.60208408361,
            "unit": "ns/iter",
            "extra": "iterations: 8253\ncpu: 85012.14103962232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84717.66989937847,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 84714.3653776209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84534.09911762299,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84532.00773600776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55245.79230101822,
            "unit": "ns/iter",
            "extra": "iterations: 12677\ncpu: 55243.82740396025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85082.5118586698,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 85081.64327202328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3016.7034303230416,
            "unit": "ns/iter",
            "extra": "iterations: 231261\ncpu: 3016.6227768625035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15258.766192768016,
            "unit": "ns/iter",
            "extra": "iterations: 45931\ncpu: 15258.291785504216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12026.692860217463,
            "unit": "ns/iter",
            "extra": "iterations: 58055\ncpu: 12026.201016277655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11855.626314630716,
            "unit": "ns/iter",
            "extra": "iterations: 59047\ncpu: 11855.21364336893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12299.742312834172,
            "unit": "ns/iter",
            "extra": "iterations: 56848\ncpu: 12299.762524627009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27451.44552590246,
            "unit": "ns/iter",
            "extra": "iterations: 25480\ncpu: 27450.078492936093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98203.98919450691,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 98200.53325848967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83531.18460441213,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 83528.46281777223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82131.45796485768,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 82129.47765593596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83428.80828040329,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 83429.04022583037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55288.440760917976,
            "unit": "ns/iter",
            "extra": "iterations: 12669\ncpu: 55286.00520956696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83922.47706093246,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 83919.79689366695 ns\nthreads: 1"
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
        "date": 1705775078371,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.3464881270586,
            "unit": "ns/iter",
            "extra": "iterations: 980175\ncpu: 712.3161680312189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10869.917017972408,
            "unit": "ns/iter",
            "extra": "iterations: 76619\ncpu: 10869.527140787533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23750.320093932773,
            "unit": "ns/iter",
            "extra": "iterations: 34493\ncpu: 23749.17809410605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36378.728468484434,
            "unit": "ns/iter",
            "extra": "iterations: 23036\ncpu: 36376.84059732593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 45986.52740046935,
            "unit": "ns/iter",
            "extra": "iterations: 17080\ncpu: 45984.20960187352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57613.170995378525,
            "unit": "ns/iter",
            "extra": "iterations: 14708\ncpu: 57612.183845526255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58197.9916000023,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58193.36999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66413.09276409079,
            "unit": "ns/iter",
            "extra": "iterations: 12742\ncpu: 66344.9850886831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 75832.05917937898,
            "unit": "ns/iter",
            "extra": "iterations: 11406\ncpu: 75830.35244608107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 572.4955246371098,
            "unit": "ns/iter",
            "extra": "iterations: 1226381\ncpu: 572.4830211818356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 476.48519793393945,
            "unit": "ns/iter",
            "extra": "iterations: 1471754\ncpu: 476.4764355999713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 477.87324350128864,
            "unit": "ns/iter",
            "extra": "iterations: 1462284\ncpu: 477.8671584999906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 471.54658348702367,
            "unit": "ns/iter",
            "extra": "iterations: 1484818\ncpu: 471.53583806230904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 936.637497135754,
            "unit": "ns/iter",
            "extra": "iterations: 750612\ncpu: 936.6127906295117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3266.154425735582,
            "unit": "ns/iter",
            "extra": "iterations: 243677\ncpu: 3266.1141593174557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 13903.651808070981,
            "unit": "ns/iter",
            "extra": "iterations: 58709\ncpu: 13903.490095215411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12064.659294759054,
            "unit": "ns/iter",
            "extra": "iterations: 68232\ncpu: 12064.408195568109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11060.243114098736,
            "unit": "ns/iter",
            "extra": "iterations: 73665\ncpu: 11059.847960361072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11765.859012553317,
            "unit": "ns/iter",
            "extra": "iterations: 69148\ncpu: 11765.585411002525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35452.43935838705,
            "unit": "ns/iter",
            "extra": "iterations: 23441\ncpu: 35451.75120515328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 454118.111403042,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 454109.24855491344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 368878.5055366305,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 368867.0783645664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369629.58970030484,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 369624.778387505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375379.57718993083,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 375375.1517779718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227939.38201365058,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 227934.13738856837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373240.7406772231,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 373224.6035147884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1878670.790650248,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1878615.447154471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 762696.8319935944,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 762679.9839228288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2572142.631285077,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2572002.234636868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3106.8121743002102,
            "unit": "ns/iter",
            "extra": "iterations: 251382\ncpu: 3106.7510800295986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15204.043926818194,
            "unit": "ns/iter",
            "extra": "iterations: 56025\ncpu: 15203.751896474789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12314.555364639597,
            "unit": "ns/iter",
            "extra": "iterations: 66929\ncpu: 12314.391369959216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11583.084071730373,
            "unit": "ns/iter",
            "extra": "iterations: 70987\ncpu: 11582.888416188887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12356.960873115182,
            "unit": "ns/iter",
            "extra": "iterations: 64917\ncpu: 12356.821787821364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34704.39010943253,
            "unit": "ns/iter",
            "extra": "iterations: 23942\ncpu: 34703.97627600044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475229.1047462844,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 475218.93071467464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381781.1384006887,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 381776.66959578043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376160.2129227742,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 376155.8976582827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377474.2821953514,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 377462.74848747003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224002.2595733748,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 223994.88563351336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374104.5894916805,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 374083.12686885736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1905054.1078839055,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1904987.7593360934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 753743.7813008789,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 753711.3821138261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3199.387798599609,
            "unit": "ns/iter",
            "extra": "iterations: 252889\ncpu: 3199.2534273930387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14397.228277112135,
            "unit": "ns/iter",
            "extra": "iterations: 56887\ncpu: 14396.461405945056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11805.593641759193,
            "unit": "ns/iter",
            "extra": "iterations: 69579\ncpu: 11805.240086807833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11516.226834691908,
            "unit": "ns/iter",
            "extra": "iterations: 68799\ncpu: 11515.44789895197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11926.462448255417,
            "unit": "ns/iter",
            "extra": "iterations: 69331\ncpu: 11926.063377132916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34441.03145763608,
            "unit": "ns/iter",
            "extra": "iterations: 24382\ncpu: 34439.139529160864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 459810.9521556065,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 459795.37329126976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375298.9654289699,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 375270.9773794285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370742.7523245941,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 370724.2180896024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374744.2309339921,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 374738.38903170504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230010.70993968175,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 230004.48465774982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370499.38550110173,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 370492.153518123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.6739391237522,
            "unit": "ns/iter",
            "extra": "iterations: 2350604\ncpu: 297.67034345214915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1535.4649018404382,
            "unit": "ns/iter",
            "extra": "iterations: 458742\ncpu: 1535.378709601471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1181.975284924195,
            "unit": "ns/iter",
            "extra": "iterations: 592877\ncpu: 1181.9255933355448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1141.5293041693244,
            "unit": "ns/iter",
            "extra": "iterations: 615049\ncpu: 1141.5147411019243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 987.3234272552057,
            "unit": "ns/iter",
            "extra": "iterations: 710271\ncpu: 987.2644385030565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6422.40042450404,
            "unit": "ns/iter",
            "extra": "iterations: 109304\ncpu: 6422.007428822453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18570.70509895659,
            "unit": "ns/iter",
            "extra": "iterations: 37694\ncpu: 18570.0270600094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4431.1446395916955,
            "unit": "ns/iter",
            "extra": "iterations: 157488\ncpu: 4430.920451081975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4448.046131770675,
            "unit": "ns/iter",
            "extra": "iterations: 158199\ncpu: 4437.756243718341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4438.013813294639,
            "unit": "ns/iter",
            "extra": "iterations: 157457\ncpu: 4437.9919597096405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9246.24337588443,
            "unit": "ns/iter",
            "extra": "iterations: 75595\ncpu: 9245.704080957637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8430.102059292749,
            "unit": "ns/iter",
            "extra": "iterations: 82844\ncpu: 8429.640046352148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3089.4675629807703,
            "unit": "ns/iter",
            "extra": "iterations: 226855\ncpu: 3089.338123470953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15419.490264503658,
            "unit": "ns/iter",
            "extra": "iterations: 44990\ncpu: 15418.657479439711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12411.742904131977,
            "unit": "ns/iter",
            "extra": "iterations: 56547\ncpu: 12411.289723592723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12252.09416640457,
            "unit": "ns/iter",
            "extra": "iterations: 57186\ncpu: 12251.16287203149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12893.952998527426,
            "unit": "ns/iter",
            "extra": "iterations: 54360\ncpu: 12893.791390728516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27467.336235290797,
            "unit": "ns/iter",
            "extra": "iterations: 25500\ncpu: 27466.062745097744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99318.95062951742,
            "unit": "ns/iter",
            "extra": "iterations: 7069\ncpu: 99318.48917810083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84154.37680461929,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 84150.09624638995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83354.4001677912,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83352.02540747909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83184.09999999928,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 83182.897862233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54485.914526575616,
            "unit": "ns/iter",
            "extra": "iterations: 12811\ncpu: 54485.57489657339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83309.06867411562,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 83307.29588193263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3037.620828770162,
            "unit": "ns/iter",
            "extra": "iterations: 231017\ncpu: 3037.5851127839055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15372.498692507696,
            "unit": "ns/iter",
            "extra": "iterations: 45507\ncpu: 15372.072428417567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12083.222853149573,
            "unit": "ns/iter",
            "extra": "iterations: 57235\ncpu: 12083.073294312988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11936.70684879912,
            "unit": "ns/iter",
            "extra": "iterations: 58492\ncpu: 11936.649456335972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12452.455898604841,
            "unit": "ns/iter",
            "extra": "iterations: 56098\ncpu: 12452.210417483806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27063.982114573093,
            "unit": "ns/iter",
            "extra": "iterations: 25887\ncpu: 27063.448835322262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96678.77402381932,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 96676.11464968212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81575.72266170815,
            "unit": "ns/iter",
            "extra": "iterations: 8596\ncpu: 81573.99953466862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80410.51432186195,
            "unit": "ns/iter",
            "extra": "iterations: 8693\ncpu: 80408.84619808962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81234.91167265711,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 81233.02422626695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54383.70857723035,
            "unit": "ns/iter",
            "extra": "iterations: 12813\ncpu: 54382.6114102857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82573.54542244495,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 82570.49894092827 ns\nthreads: 1"
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
        "date": 1705778437357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 729.2888107523722,
            "unit": "ns/iter",
            "extra": "iterations: 964694\ncpu: 729.2603664996361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10910.56650046043,
            "unit": "ns/iter",
            "extra": "iterations: 76210\ncpu: 10910.216507020077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23886.524495761187,
            "unit": "ns/iter",
            "extra": "iterations: 34557\ncpu: 23885.83789102064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37696.340439417334,
            "unit": "ns/iter",
            "extra": "iterations: 22985\ncpu: 37696.171416140955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46937.496702267716,
            "unit": "ns/iter",
            "extra": "iterations: 17133\ncpu: 46937.640810132485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58355.921387123424,
            "unit": "ns/iter",
            "extra": "iterations: 14476\ncpu: 58355.35368886433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58306.42829999988,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58305.84999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67482.77192982432,
            "unit": "ns/iter",
            "extra": "iterations: 12882\ncpu: 67482.56481912745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76815.2452846854,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 76810.8297175242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 599.9388514484268,
            "unit": "ns/iter",
            "extra": "iterations: 1169856\ncpu: 599.9158016029318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 498.12434541943315,
            "unit": "ns/iter",
            "extra": "iterations: 1406244\ncpu: 498.0996896697871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 495.03190246893047,
            "unit": "ns/iter",
            "extra": "iterations: 1421332\ncpu: 495.01530958284144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 495.6427372520522,
            "unit": "ns/iter",
            "extra": "iterations: 1412000\ncpu: 495.6405807365434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 930.1419478268007,
            "unit": "ns/iter",
            "extra": "iterations: 752685\ncpu: 930.1382384397209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3313.249605514787,
            "unit": "ns/iter",
            "extra": "iterations: 243989\ncpu: 3313.1551012545606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 13762.21542620645,
            "unit": "ns/iter",
            "extra": "iterations: 59185\ncpu: 13761.82140745118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11299.543086781372,
            "unit": "ns/iter",
            "extra": "iterations: 72412\ncpu: 11299.10650168482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11297.482906159454,
            "unit": "ns/iter",
            "extra": "iterations: 72453\ncpu: 11297.191282624584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11752.092425835826,
            "unit": "ns/iter",
            "extra": "iterations: 69407\ncpu: 11751.595660380097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35528.85001061228,
            "unit": "ns/iter",
            "extra": "iterations: 23555\ncpu: 35527.65867119503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458989.5991605644,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 458969.46484784764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371800.3505376253,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 371788.3440860214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 370227.7429184591,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 370217.85407725186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 378753.24543873727,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 378739.4874022587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229097.75343914924,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 229091.6666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373211.9744789205,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 373190.94002552103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1891246.48971188,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1891212.9629629636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 753567.9880000317,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 753530.4800000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2675464.985465391,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2675358.1395348795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3202.744624149373,
            "unit": "ns/iter",
            "extra": "iterations: 250658\ncpu: 3202.6167128118755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15348.613882662437,
            "unit": "ns/iter",
            "extra": "iterations: 53981\ncpu: 15347.950204701583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12479.73736199108,
            "unit": "ns/iter",
            "extra": "iterations: 66209\ncpu: 12479.292845383587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11851.646466824683,
            "unit": "ns/iter",
            "extra": "iterations: 69555\ncpu: 11851.409675796227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12409.351047452576,
            "unit": "ns/iter",
            "extra": "iterations: 66256\ncpu: 12409.187092489792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34943.289365244986,
            "unit": "ns/iter",
            "extra": "iterations: 24025\ncpu: 34941.83142559808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 471276.9712424992,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 471264.29734129366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387446.01326259034,
            "unit": "ns/iter",
            "extra": "iterations: 2262\ncpu: 387428.8240495148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383219.5554089718,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 383204.7493403715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383961.60040984576,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 383954.3545081966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229501.97687252736,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 229495.08541392896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381536.42453244905,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 381524.1409308404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1906246.8595387314,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1906037.5262054468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739898.6258012977,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 739871.6346153847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3222.8931852563505,
            "unit": "ns/iter",
            "extra": "iterations: 243927\ncpu: 3222.733440742514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14957.469986039963,
            "unit": "ns/iter",
            "extra": "iterations: 55874\ncpu: 14957.06768801229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12304.976539986154,
            "unit": "ns/iter",
            "extra": "iterations: 66624\ncpu: 12304.439841498603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11576.707337144808,
            "unit": "ns/iter",
            "extra": "iterations: 70477\ncpu: 11576.248989031877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12318.817592477975,
            "unit": "ns/iter",
            "extra": "iterations: 65096\ncpu: 12318.322170333036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34949.59527015842,
            "unit": "ns/iter",
            "extra": "iterations: 23764\ncpu: 34948.62396902894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 455824.27513226273,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 455799.99999999785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374639.25474138046,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374629.56896551483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371763.0974667184,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 371753.3276084163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374526.94732331147,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 374516.4453961484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 234091.07218403206,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 234082.44315177118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370176.9657215513,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 370159.4159966137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.0177937559937,
            "unit": "ns/iter",
            "extra": "iterations: 2332897\ncpu: 299.0084431502997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1530.0163295617988,
            "unit": "ns/iter",
            "extra": "iterations: 457820\ncpu: 1529.9327246516077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1230.2860961252268,
            "unit": "ns/iter",
            "extra": "iterations: 569424\ncpu: 1230.2421394251044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1165.2932960847775,
            "unit": "ns/iter",
            "extra": "iterations: 602797\ncpu: 1165.2985996944237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1012.6857455109755,
            "unit": "ns/iter",
            "extra": "iterations: 693578\ncpu: 1012.657552575196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6651.804525134422,
            "unit": "ns/iter",
            "extra": "iterations: 105809\ncpu: 6651.5759528962935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19128.423779241704,
            "unit": "ns/iter",
            "extra": "iterations: 36637\ncpu: 19127.60324262357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4519.743259413976,
            "unit": "ns/iter",
            "extra": "iterations: 153770\ncpu: 4519.575339793248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4516.950786219083,
            "unit": "ns/iter",
            "extra": "iterations: 154855\ncpu: 4516.966839947037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4555.238423619609,
            "unit": "ns/iter",
            "extra": "iterations: 153567\ncpu: 4555.254058489102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9560.670018830662,
            "unit": "ns/iter",
            "extra": "iterations: 73286\ncpu: 9560.704636629236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8633.610121511841,
            "unit": "ns/iter",
            "extra": "iterations: 80897\ncpu: 8633.501860390466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3203.8926727361295,
            "unit": "ns/iter",
            "extra": "iterations: 219236\ncpu: 3203.86660949842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15849.071581148657,
            "unit": "ns/iter",
            "extra": "iterations: 44006\ncpu: 15849.136481388767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12734.500936364151,
            "unit": "ns/iter",
            "extra": "iterations: 54466\ncpu: 12734.164432857191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12588.372081355406,
            "unit": "ns/iter",
            "extra": "iterations: 55805\ncpu: 12588.296747603321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13169.516033834887,
            "unit": "ns/iter",
            "extra": "iterations: 53200\ncpu: 13169.404135338138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27596.966825767977,
            "unit": "ns/iter",
            "extra": "iterations: 25351\ncpu: 27597.049426058027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 103322.98419498625,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 103322.31905465295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88767.15764794666,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 88766.69623621997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 88703.1786484092,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 88703.43603397916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 88540.53148806992,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 88539.7536820713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 58569.15622123283,
            "unit": "ns/iter",
            "extra": "iterations: 11951\ncpu: 58569.49209271143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87807.2209840947,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 87806.4730186539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3117.8888972975424,
            "unit": "ns/iter",
            "extra": "iterations: 224630\ncpu: 3117.9054445086945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15844.85543532407,
            "unit": "ns/iter",
            "extra": "iterations: 44174\ncpu: 15844.922352514925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12479.1547060494,
            "unit": "ns/iter",
            "extra": "iterations: 56268\ncpu: 12479.06980877232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12269.381347003722,
            "unit": "ns/iter",
            "extra": "iterations: 56956\ncpu: 12269.434300161432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12794.870358463075,
            "unit": "ns/iter",
            "extra": "iterations: 54427\ncpu: 12794.668087529972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26854.938665639133,
            "unit": "ns/iter",
            "extra": "iterations: 26005\ncpu: 26855.07786964059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100859.93749999705,
            "unit": "ns/iter",
            "extra": "iterations: 6928\ncpu: 100859.23787528987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85840.02653459737,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 85840.48667155654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85179.94946420247,
            "unit": "ns/iter",
            "extra": "iterations: 8212\ncpu: 85179.35947394177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85942.05301914377,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 85941.51939126257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59122.3081782471,
            "unit": "ns/iter",
            "extra": "iterations: 11714\ncpu: 59121.87126515251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86660.60600795073,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 86659.83118172747 ns\nthreads: 1"
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
        "date": 1705953628909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 717.6624343526163,
            "unit": "ns/iter",
            "extra": "iterations: 980236\ncpu: 717.6541159475881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10717.693097075895,
            "unit": "ns/iter",
            "extra": "iterations: 77373\ncpu: 10717.396249337624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23766.306892625165,
            "unit": "ns/iter",
            "extra": "iterations: 35110\ncpu: 23766.089433209905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38026.64174061885,
            "unit": "ns/iter",
            "extra": "iterations: 22199\ncpu: 38025.550700481996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46987.33235645558,
            "unit": "ns/iter",
            "extra": "iterations: 16720\ncpu: 46985.93301435411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58778.943483673225,
            "unit": "ns/iter",
            "extra": "iterations: 14456\ncpu: 58777.88461538459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58658.1618000082,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58656.43 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67772.13063098134,
            "unit": "ns/iter",
            "extra": "iterations: 12853\ncpu: 67769.8436162763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77633.46102687174,
            "unit": "ns/iter",
            "extra": "iterations: 11277\ncpu: 77631.29378380773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.7722103875961,
            "unit": "ns/iter",
            "extra": "iterations: 1205033\ncpu: 594.7451231626029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 487.87997851694723,
            "unit": "ns/iter",
            "extra": "iterations: 1431827\ncpu: 487.8708112083375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.5230528893521,
            "unit": "ns/iter",
            "extra": "iterations: 1447324\ncpu: 483.51122485359156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 481.0859995311969,
            "unit": "ns/iter",
            "extra": "iterations: 1454787\ncpu: 481.08052931459997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 960.144852492506,
            "unit": "ns/iter",
            "extra": "iterations: 727692\ncpu: 960.1350571395587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3259.496345798935,
            "unit": "ns/iter",
            "extra": "iterations: 241366\ncpu: 3259.4632218290903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14609.033410453589,
            "unit": "ns/iter",
            "extra": "iterations: 54893\ncpu: 14608.498351338065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11931.509811663269,
            "unit": "ns/iter",
            "extra": "iterations: 68388\ncpu: 11931.313973211667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11194.317891440172,
            "unit": "ns/iter",
            "extra": "iterations: 72789\ncpu: 11194.09388781268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11858.237155840678,
            "unit": "ns/iter",
            "extra": "iterations: 67774\ncpu: 11857.949951308789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35036.896177639974,
            "unit": "ns/iter",
            "extra": "iterations: 23598\ncpu: 35035.38011695909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 468764.8757333591,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 468739.5733333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 376402.42547659716,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 376380.71923743555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371972.720000016,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 371946.4516129034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 384022.2783370014,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 384000.919037199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232151.93393714234,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 232063.05274373942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 373269.46620744735,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 373261.94575979345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1885198.3394683967,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1885130.8793456012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 743041.6526566141,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 743010.7850911997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2556604.5266105477,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2556438.655462187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3185.6828777566584,
            "unit": "ns/iter",
            "extra": "iterations: 246025\ncpu: 3185.5392744639807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14511.21497212561,
            "unit": "ns/iter",
            "extra": "iterations: 56505\ncpu: 14510.538890363709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12213.440479210352,
            "unit": "ns/iter",
            "extra": "iterations: 67027\ncpu: 12212.888835842325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11494.591043016972,
            "unit": "ns/iter",
            "extra": "iterations: 71274\ncpu: 11494.08339646991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12220.171339752049,
            "unit": "ns/iter",
            "extra": "iterations: 66266\ncpu: 12219.72957474426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35466.514696303384,
            "unit": "ns/iter",
            "extra": "iterations: 23033\ncpu: 35464.96331350646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 477924.1472527366,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 477919.0659340644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385667.16378926014,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 385647.764497567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378939.3607979408,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 378924.7614917613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379069.2378682798,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 379054.5493934151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225286.5982861489,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 225276.55154505276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376442.88711761317,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 376430.24558380025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1896645.6903765171,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1896479.0794979099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739536.9706581748,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 739506.6613798521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3234.174606985684,
            "unit": "ns/iter",
            "extra": "iterations: 245729\ncpu: 3234.1237704951513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14989.135179037468,
            "unit": "ns/iter",
            "extra": "iterations: 56636\ncpu: 14989.167667208216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12293.99474459094,
            "unit": "ns/iter",
            "extra": "iterations: 67930\ncpu: 12293.764168997488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11334.971488295178,
            "unit": "ns/iter",
            "extra": "iterations: 71760\ncpu: 11334.895484949855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11972.306414638106,
            "unit": "ns/iter",
            "extra": "iterations: 69357\ncpu: 11971.720230113793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34776.99311631645,
            "unit": "ns/iter",
            "extra": "iterations: 24115\ncpu: 34776.5498652291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 457162.45454548823,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 457145.61128526897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374155.1113508823,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 374135.13163573475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372273.92741249595,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372261.31511528685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373707.4078549645,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 373689.29650409915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230291.93781159318,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 230283.20650747733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370085.6322331691,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 370070.81011573086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 313.074722942339,
            "unit": "ns/iter",
            "extra": "iterations: 2241681\ncpu: 313.0585930826012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1487.8894787902275,
            "unit": "ns/iter",
            "extra": "iterations: 471077\ncpu: 1487.8593096245338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1215.0716802172365,
            "unit": "ns/iter",
            "extra": "iterations: 577342\ncpu: 1215.056586910354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1143.979492547191,
            "unit": "ns/iter",
            "extra": "iterations: 616215\ncpu: 1143.9116217553926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 995.6729939270177,
            "unit": "ns/iter",
            "extra": "iterations: 701146\ncpu: 995.6315802985471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6626.402803353059,
            "unit": "ns/iter",
            "extra": "iterations: 109155\ncpu: 6626.0803444643325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18912.83351759354,
            "unit": "ns/iter",
            "extra": "iterations: 37085\ncpu: 18911.907779425757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4484.549640738614,
            "unit": "ns/iter",
            "extra": "iterations: 156293\ncpu: 4484.315996237865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4457.417431687328,
            "unit": "ns/iter",
            "extra": "iterations: 157621\ncpu: 4457.241103659964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4467.015004322758,
            "unit": "ns/iter",
            "extra": "iterations: 156155\ncpu: 4466.9021164868045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9302.490506709444,
            "unit": "ns/iter",
            "extra": "iterations: 75053\ncpu: 9302.130494450623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8523.174755750491,
            "unit": "ns/iter",
            "extra": "iterations: 82395\ncpu: 8522.721038897937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3148.805477986321,
            "unit": "ns/iter",
            "extra": "iterations: 222381\ncpu: 3148.684464949788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15506.016684298258,
            "unit": "ns/iter",
            "extra": "iterations: 45372\ncpu: 15505.278585912143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12441.884120096749,
            "unit": "ns/iter",
            "extra": "iterations: 56222\ncpu: 12441.288107858194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12301.70958309145,
            "unit": "ns/iter",
            "extra": "iterations: 57111\ncpu: 12301.565372695159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12801.648848231955,
            "unit": "ns/iter",
            "extra": "iterations: 54438\ncpu: 12801.427311804093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28467.730104509075,
            "unit": "ns/iter",
            "extra": "iterations: 24591\ncpu: 28467.33357732461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98551.11910845494,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 98546.18114707488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86133.19311192528,
            "unit": "ns/iter",
            "extra": "iterations: 8130\ncpu: 86129.80319803231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85423.74619413882,
            "unit": "ns/iter",
            "extra": "iterations: 8211\ncpu: 85418.31689197356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85035.96876526006,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85034.260614935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55340.23076923364,
            "unit": "ns/iter",
            "extra": "iterations: 12701\ncpu: 55339.25675143666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85451.40977443702,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 85444.78696741733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3076.7254934785037,
            "unit": "ns/iter",
            "extra": "iterations: 227011\ncpu: 3076.5843945888196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15370.341034369989,
            "unit": "ns/iter",
            "extra": "iterations: 45535\ncpu: 15369.346656418222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12229.316399162299,
            "unit": "ns/iter",
            "extra": "iterations: 57320\ncpu: 12228.616538729995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12099.147619211244,
            "unit": "ns/iter",
            "extra": "iterations: 58048\ncpu: 12098.566703418006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12697.206684586126,
            "unit": "ns/iter",
            "extra": "iterations: 55800\ncpu: 12696.940860214992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27813.629763491215,
            "unit": "ns/iter",
            "extra": "iterations: 25454\ncpu: 27813.302427909075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99130.50446239162,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 99128.60178495463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82182.12754859647,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 82177.73826457966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81777.45591851378,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81770.53038286029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82807.92666040853,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 82801.0208871152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55350.2802171906,
            "unit": "ns/iter",
            "extra": "iterations: 12708\ncpu: 55349.519987409054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84089.02688813614,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 84085.14579349948 ns\nthreads: 1"
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
        "date": 1705955081878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 714.3958620199937,
            "unit": "ns/iter",
            "extra": "iterations: 985505\ncpu: 714.3993181160929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10968.597589251083,
            "unit": "ns/iter",
            "extra": "iterations: 75910\ncpu: 10968.4771439863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24180.872551013003,
            "unit": "ns/iter",
            "extra": "iterations: 34453\ncpu: 24180.788320320433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38701.139525408995,
            "unit": "ns/iter",
            "extra": "iterations: 22082\ncpu: 38701.0189294448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48871.11705498687,
            "unit": "ns/iter",
            "extra": "iterations: 16095\ncpu: 48870.04038521281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59534.69761067673,
            "unit": "ns/iter",
            "extra": "iterations: 14230\ncpu: 59533.85804638089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59443.50339999573,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59442.46 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70784.51262646481,
            "unit": "ns/iter",
            "extra": "iterations: 12553\ncpu: 70784.17111447471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77726.91099855158,
            "unit": "ns/iter",
            "extra": "iterations: 11056\ncpu: 77723.98697539789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 576.3576605247881,
            "unit": "ns/iter",
            "extra": "iterations: 1218239\ncpu: 576.3553785423069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 485.7593330260977,
            "unit": "ns/iter",
            "extra": "iterations: 1436458\ncpu: 485.7514803774282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 488.97589610678205,
            "unit": "ns/iter",
            "extra": "iterations: 1441095\ncpu: 488.97324603860244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 485.61774076599465,
            "unit": "ns/iter",
            "extra": "iterations: 1438461\ncpu: 485.6153903373116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 962.9974342933484,
            "unit": "ns/iter",
            "extra": "iterations: 725726\ncpu: 962.9925068138667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3278.1659326955178,
            "unit": "ns/iter",
            "extra": "iterations: 241381\ncpu: 3278.1246245562033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14770.922732687071,
            "unit": "ns/iter",
            "extra": "iterations: 55418\ncpu: 14770.859648489646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11997.915721207426,
            "unit": "ns/iter",
            "extra": "iterations: 67692\ncpu: 11997.79146723397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11460.089554737668,
            "unit": "ns/iter",
            "extra": "iterations: 71688\ncpu: 11460.082580069182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12129.879850376212,
            "unit": "ns/iter",
            "extra": "iterations: 66567\ncpu: 12129.84962518967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35793.192818247626,
            "unit": "ns/iter",
            "extra": "iterations: 23504\ncpu: 35792.70336963922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 462550.91706286796,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 462549.07554146927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 373594.97082795156,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 373594.29429429374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 393334.49441581435,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 393333.4192439865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 374319.5285467056,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 374310.0346020763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228063.8059149596,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 228063.37470293153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 369810.7260740221,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 369803.70055295713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1881364.57700192,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1881356.2628336712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748606.5816164027,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 748580.0316957199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2568009.4747189432,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2567930.056179772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3247.848871165132,
            "unit": "ns/iter",
            "extra": "iterations: 251011\ncpu: 3247.770416435934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14943.477965188624,
            "unit": "ns/iter",
            "extra": "iterations: 55730\ncpu: 14942.957114659986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12428.035784808548,
            "unit": "ns/iter",
            "extra": "iterations: 62289\ncpu: 12427.550610862168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11678.09050531419,
            "unit": "ns/iter",
            "extra": "iterations: 70471\ncpu: 11677.87316768591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13264.040207679393,
            "unit": "ns/iter",
            "extra": "iterations: 66256\ncpu: 13263.693854141577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34707.781097027466,
            "unit": "ns/iter",
            "extra": "iterations: 23901\ncpu: 34706.8741893645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475541.32841530134,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 475536.39344262116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384329.7676056568,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 384319.7623239457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380681.5249343791,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 380673.97200349835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383125.74423662765,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 383115.83297085884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226228.87792206346,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 226224.51948051905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376365.6112542718,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 376362.4570446712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1900615.6541666524,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1900530.8333333323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 760323.1772357622,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 760298.7804878037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3241.659008890671,
            "unit": "ns/iter",
            "extra": "iterations: 246895\ncpu: 3241.5593673423864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14931.294090658796,
            "unit": "ns/iter",
            "extra": "iterations: 56673\ncpu: 14931.002417376918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12212.773928775698,
            "unit": "ns/iter",
            "extra": "iterations: 67983\ncpu: 12212.333965844386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11523.846823940808,
            "unit": "ns/iter",
            "extra": "iterations: 71976\ncpu: 11523.573135489607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12196.84596067797,
            "unit": "ns/iter",
            "extra": "iterations: 67697\ncpu: 12196.88317059842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34905.69192536283,
            "unit": "ns/iter",
            "extra": "iterations: 23741\ncpu: 34904.70915294241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 458965.2505274229,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 458941.40295358695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375498.387263318,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 375491.480206538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370970.1607676,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 370954.4136460542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372261.9510519485,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 372260.2833834266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230065.0743845102,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 230060.1100052378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 370796.36923077196,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 370780.7692307687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.69315754334895,
            "unit": "ns/iter",
            "extra": "iterations: 2309726\ncpu: 302.6852535755326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1484.0593566226357,
            "unit": "ns/iter",
            "extra": "iterations: 467968\ncpu: 1483.9895035558025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1201.880892649254,
            "unit": "ns/iter",
            "extra": "iterations: 583163\ncpu: 1201.8860935964756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1155.6681962111413,
            "unit": "ns/iter",
            "extra": "iterations: 605409\ncpu: 1155.6736024737033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.7736572579839,
            "unit": "ns/iter",
            "extra": "iterations: 701233\ncpu: 997.7277167503491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6612.871574731732,
            "unit": "ns/iter",
            "extra": "iterations: 109371\ncpu: 6612.733722833339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18776.821736088976,
            "unit": "ns/iter",
            "extra": "iterations: 37164\ncpu: 18775.92562695085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4448.506529436163,
            "unit": "ns/iter",
            "extra": "iterations: 157594\ncpu: 4448.402223434917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4418.2997980941955,
            "unit": "ns/iter",
            "extra": "iterations: 158490\ncpu: 4418.093255094966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4449.335755564043,
            "unit": "ns/iter",
            "extra": "iterations: 157293\ncpu: 4449.30925088846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9470.778136350893,
            "unit": "ns/iter",
            "extra": "iterations: 74059\ncpu: 9470.412779000473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8510.996392303481,
            "unit": "ns/iter",
            "extra": "iterations: 82324\ncpu: 8510.796365579869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3144.2581606905865,
            "unit": "ns/iter",
            "extra": "iterations: 222714\ncpu: 3144.1009545875104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15368.354359110965,
            "unit": "ns/iter",
            "extra": "iterations: 45468\ncpu: 15367.979678015261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12430.869802946807,
            "unit": "ns/iter",
            "extra": "iterations: 56330\ncpu: 12430.252085922233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12221.887372014553,
            "unit": "ns/iter",
            "extra": "iterations: 57135\ncpu: 12221.59446923938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12853.808275863179,
            "unit": "ns/iter",
            "extra": "iterations: 54375\ncpu: 12853.726896551783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27530.457085511556,
            "unit": "ns/iter",
            "extra": "iterations: 25411\ncpu: 27530.60092086071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99881.06826278668,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 99880.30497363544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85168.9134135972,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 85165.31679435684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84972.02745051178,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 84969.96234665369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84726.65876201216,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 84723.48291377848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54683.03173488644,
            "unit": "ns/iter",
            "extra": "iterations: 12825\ncpu: 54682.61208576936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85052.34905775306,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 85050.32218844902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3094.177106898478,
            "unit": "ns/iter",
            "extra": "iterations: 226767\ncpu: 3094.1874258600833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15430.288928517222,
            "unit": "ns/iter",
            "extra": "iterations: 45423\ncpu: 15429.940778900584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12215.26696611122,
            "unit": "ns/iter",
            "extra": "iterations: 57217\ncpu: 12214.696681056206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12077.19109961227,
            "unit": "ns/iter",
            "extra": "iterations: 57975\ncpu: 12076.915912031076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12608.852415333346,
            "unit": "ns/iter",
            "extra": "iterations: 55541\ncpu: 12608.343385966984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26906.785738996557,
            "unit": "ns/iter",
            "extra": "iterations: 26015\ncpu: 26906.111858543074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98793.77829721462,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 98794.460971808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83055.18263649856,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 83050.29018121478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82155.10325002797,
            "unit": "ns/iter",
            "extra": "iterations: 8523\ncpu: 82153.13856623326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83087.20052175649,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 83082.50919008693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55360.252312070304,
            "unit": "ns/iter",
            "extra": "iterations: 12651\ncpu: 55358.84910283743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83183.40801764088,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 83182.82304099601 ns\nthreads: 1"
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
        "date": 1705957098963,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 704.5898694762177,
            "unit": "ns/iter",
            "extra": "iterations: 996217\ncpu: 704.557842317487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10545.500914959406,
            "unit": "ns/iter",
            "extra": "iterations: 78692\ncpu: 10545.113861637778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23364.462309147635,
            "unit": "ns/iter",
            "extra": "iterations: 35433\ncpu: 23363.409815708525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36897.19867165947,
            "unit": "ns/iter",
            "extra": "iterations: 22434\ncpu: 36896.746010519746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46065.79635205629,
            "unit": "ns/iter",
            "extra": "iterations: 17270\ncpu: 46063.72900984364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57691.74254037647,
            "unit": "ns/iter",
            "extra": "iterations: 14612\ncpu: 57689.37174924716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57639.2028999976,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57634.14999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66273.5114820312,
            "unit": "ns/iter",
            "extra": "iterations: 9406\ncpu: 66271.70954709758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76368.26426268967,
            "unit": "ns/iter",
            "extra": "iterations: 11481\ncpu: 76365.67372180131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 574.9204263527605,
            "unit": "ns/iter",
            "extra": "iterations: 1217677\ncpu: 574.8917816465278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 474.9521168287327,
            "unit": "ns/iter",
            "extra": "iterations: 1473336\ncpu: 474.9190272958778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 470.96803029378356,
            "unit": "ns/iter",
            "extra": "iterations: 1485719\ncpu: 470.95702484790127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 471.57805661689196,
            "unit": "ns/iter",
            "extra": "iterations: 1483372\ncpu: 471.5662018697934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 915.1372441764746,
            "unit": "ns/iter",
            "extra": "iterations: 762342\ncpu: 915.1054251241569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3030.0332375386583,
            "unit": "ns/iter",
            "extra": "iterations: 262715\ncpu: 3029.8711531507524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15196.842672453058,
            "unit": "ns/iter",
            "extra": "iterations: 54377\ncpu: 15195.816245839264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11964.37161388776,
            "unit": "ns/iter",
            "extra": "iterations: 68146\ncpu: 11963.760162005068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11242.116715055443,
            "unit": "ns/iter",
            "extra": "iterations: 72330\ncpu: 11241.37702198257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11938.620470867589,
            "unit": "ns/iter",
            "extra": "iterations: 68087\ncpu: 11938.126220864453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35273.824420030294,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 35271.6654650324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 457202.4770932388,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 457165.5081621906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 372363.1523235791,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 372346.6867469883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371845.91762697435,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 371823.4314980783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375895.8075422629,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 375878.5002167305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 228788.93751647943,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 228776.64118112274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370915.216030857,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 370894.4706386624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1899897.3716632882,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1899756.4681724838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 755136.8916139003,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 755089.4778481007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2568167.681564273,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2567995.8100558734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3161.3928758838406,
            "unit": "ns/iter",
            "extra": "iterations: 257267\ncpu: 3161.308679309819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15383.414780080973,
            "unit": "ns/iter",
            "extra": "iterations: 53315\ncpu: 15382.6596642596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12146.92795975011,
            "unit": "ns/iter",
            "extra": "iterations: 67379\ncpu: 12146.260704373803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11405.643487264253,
            "unit": "ns/iter",
            "extra": "iterations: 70508\ncpu: 11404.868951040966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12353.31977485833,
            "unit": "ns/iter",
            "extra": "iterations: 66625\ncpu: 12352.660412758023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34397.82790756195,
            "unit": "ns/iter",
            "extra": "iterations: 23929\ncpu: 34394.96009026701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 476800.30896097637,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 476775.26113249315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 386222.48362495255,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 386204.4863167326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380073.2481334842,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 380048.22134387505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 381383.30946181476,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 381364.5833333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227800.71871741046,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 227790.61522419238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379549.41463412315,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 379529.5731707318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1907888.623430983,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1907636.1924686243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 746249.0664000143,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 746213.2800000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3215.6300113893826,
            "unit": "ns/iter",
            "extra": "iterations: 244967\ncpu: 3215.4820853421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14817.33437845013,
            "unit": "ns/iter",
            "extra": "iterations: 56134\ncpu: 14817.064524174335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11639.870052918688,
            "unit": "ns/iter",
            "extra": "iterations: 71052\ncpu: 11639.407757698587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10937.451586913887,
            "unit": "ns/iter",
            "extra": "iterations: 75713\ncpu: 10936.845720021603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11704.764063362176,
            "unit": "ns/iter",
            "extra": "iterations: 70769\ncpu: 11704.220774632884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34617.85527405299,
            "unit": "ns/iter",
            "extra": "iterations: 24156\ncpu: 34616.240271568175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 457689.4837525986,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 457660.06289308146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375223.76118761866,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 375214.3717728056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371978.2109777072,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 371967.1097770166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372905.01982763037,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 372888.318965518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228080.6064079181,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 228070.77363896868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 373714.29441837943,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 373701.1077971884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.7489682530781,
            "unit": "ns/iter",
            "extra": "iterations: 2375098\ncpu: 295.74737547671805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1492.7913133260606,
            "unit": "ns/iter",
            "extra": "iterations: 467797\ncpu: 1492.7457850306826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1166.3131431590343,
            "unit": "ns/iter",
            "extra": "iterations: 602009\ncpu: 1166.2619661832362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1154.0408379413066,
            "unit": "ns/iter",
            "extra": "iterations: 607107\ncpu: 1154.0020128247534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 974.0947799101783,
            "unit": "ns/iter",
            "extra": "iterations: 714413\ncpu: 974.0458250339744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6558.36746200651,
            "unit": "ns/iter",
            "extra": "iterations: 107124\ncpu: 6558.279190470845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18831.7797806709,
            "unit": "ns/iter",
            "extra": "iterations: 37113\ncpu: 18831.25050521405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4400.8740586696085,
            "unit": "ns/iter",
            "extra": "iterations: 158685\ncpu: 4400.795286258966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4353.639744926259,
            "unit": "ns/iter",
            "extra": "iterations: 160267\ncpu: 4353.515695682812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4387.256987948452,
            "unit": "ns/iter",
            "extra": "iterations: 158988\ncpu: 4387.095881450149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9292.454135458871,
            "unit": "ns/iter",
            "extra": "iterations: 75167\ncpu: 9292.146819748048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8391.322822388427,
            "unit": "ns/iter",
            "extra": "iterations: 82866\ncpu: 8391.170081818811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3081.233663154828,
            "unit": "ns/iter",
            "extra": "iterations: 224768\ncpu: 3081.124537300689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15191.058422612283,
            "unit": "ns/iter",
            "extra": "iterations: 45924\ncpu: 15190.808727462689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12252.121571716125,
            "unit": "ns/iter",
            "extra": "iterations: 57135\ncpu: 12251.710860243267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12025.660638866015,
            "unit": "ns/iter",
            "extra": "iterations: 58009\ncpu: 12025.202985743574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12690.636479036644,
            "unit": "ns/iter",
            "extra": "iterations: 55144\ncpu: 12690.20382997227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27723.7456112468,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 27722.49980141373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98475.16228132737,
            "unit": "ns/iter",
            "extra": "iterations: 7031\ncpu: 98473.8301806304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84592.82650338275,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84587.1483996122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85331.06883528494,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85328.61842105257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84991.12715359598,
            "unit": "ns/iter",
            "extra": "iterations: 8242\ncpu: 84986.44746420872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55034.27491272867,
            "unit": "ns/iter",
            "extra": "iterations: 12604\ncpu: 55032.35480799646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84257.06520946002,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 84255.83485124503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3025.8853137584283,
            "unit": "ns/iter",
            "extra": "iterations: 232408\ncpu: 3025.788268906405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15300.471711784103,
            "unit": "ns/iter",
            "extra": "iterations: 45549\ncpu: 15299.128411161628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12123.489869242456,
            "unit": "ns/iter",
            "extra": "iterations: 57893\ncpu: 12122.615860293847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11801.720749449902,
            "unit": "ns/iter",
            "extra": "iterations: 58016\ncpu: 11801.365140650645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12329.21281820239,
            "unit": "ns/iter",
            "extra": "iterations: 56607\ncpu: 12328.890419912737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26950.105366645428,
            "unit": "ns/iter",
            "extra": "iterations: 25938\ncpu: 26949.706993600146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96872.70557029522,
            "unit": "ns/iter",
            "extra": "iterations: 7163\ncpu: 96868.23956442827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82053.82798595793,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 82050.10538641659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81469.41892049379,
            "unit": "ns/iter",
            "extra": "iterations: 8541\ncpu: 81465.03922257356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81510.28593024262,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 81507.66279069766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54675.01075099694,
            "unit": "ns/iter",
            "extra": "iterations: 12743\ncpu: 54674.08773444219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83155.66329445007,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 83155.20114258425 ns\nthreads: 1"
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
        "date": 1705958585403,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 705.2734352352841,
            "unit": "ns/iter",
            "extra": "iterations: 990037\ncpu: 705.2520259343843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10433.235306653982,
            "unit": "ns/iter",
            "extra": "iterations: 79764\ncpu: 10432.99107366732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23573.317075219533,
            "unit": "ns/iter",
            "extra": "iterations: 35695\ncpu: 23572.3826866508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37025.16365808204,
            "unit": "ns/iter",
            "extra": "iterations: 22602\ncpu: 37024.3474028847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 45830.23365955906,
            "unit": "ns/iter",
            "extra": "iterations: 17166\ncpu: 45828.12536409182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57346.38075426379,
            "unit": "ns/iter",
            "extra": "iterations: 14902\ncpu: 57343.846463561924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57519.24959999997,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57515.21999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67003.78374826587,
            "unit": "ns/iter",
            "extra": "iterations: 12934\ncpu: 67004.39925777016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77005.56817980301,
            "unit": "ns/iter",
            "extra": "iterations: 11301\ncpu: 77003.64569507123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 581.1490744504541,
            "unit": "ns/iter",
            "extra": "iterations: 1205230\ncpu: 581.1339744281186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 481.3411061737787,
            "unit": "ns/iter",
            "extra": "iterations: 1452665\ncpu: 481.33155269797294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 480.54211419117814,
            "unit": "ns/iter",
            "extra": "iterations: 1457276\ncpu: 480.54658143001035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 476.88611674027607,
            "unit": "ns/iter",
            "extra": "iterations: 1466572\ncpu: 476.8783939690662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 942.1987374866272,
            "unit": "ns/iter",
            "extra": "iterations: 742804\ncpu: 942.1889219767255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3337.655658026898,
            "unit": "ns/iter",
            "extra": "iterations: 244838\ncpu: 3337.657553157597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15080.658981341905,
            "unit": "ns/iter",
            "extra": "iterations: 54346\ncpu: 15080.090531041846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11885.636548237622,
            "unit": "ns/iter",
            "extra": "iterations: 69437\ncpu: 11885.247058484687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11414.743995656101,
            "unit": "ns/iter",
            "extra": "iterations: 73655\ncpu: 11414.297739460982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12155.046854619237,
            "unit": "ns/iter",
            "extra": "iterations: 67464\ncpu: 12154.651369619336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35681.81777216249,
            "unit": "ns/iter",
            "extra": "iterations: 23745\ncpu: 35680.14318803951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470264.69525838026,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 470253.3297815672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 372475.47826084244,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372466.7240637102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368638.2080508689,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 368641.3983050841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 374387.2953859465,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 374384.3898231995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229799.94602422815,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 229797.840968931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371408.1788617827,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 371409.32819854614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1886887.6618852925,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1886824.590163939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 752126.4126097481,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 752117.5578611322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2552185.451523464,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2552095.2908587325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3266.2204285018192,
            "unit": "ns/iter",
            "extra": "iterations: 241026\ncpu: 3266.223560943632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14955.587288027435,
            "unit": "ns/iter",
            "extra": "iterations: 55019\ncpu: 14955.269997637193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12155.72936705528,
            "unit": "ns/iter",
            "extra": "iterations: 67889\ncpu: 12155.64524444316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11393.074988221562,
            "unit": "ns/iter",
            "extra": "iterations: 72158\ncpu: 11392.788048449165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12135.345812986357,
            "unit": "ns/iter",
            "extra": "iterations: 66348\ncpu: 12135.333393621517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 34688.3446587749,
            "unit": "ns/iter",
            "extra": "iterations: 23899\ncpu: 34687.505753378704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 465902.5561555156,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 465894.81641468365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376194.2275268764,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 376181.8924731207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 373288.86171579047,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 373282.54374733183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 375727.5665236404,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 375728.4549356213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224205.6550567511,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 224199.30340557132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372869.4516265489,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 372872.7080692847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1885778.4782608224,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1885672.2567287765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 741089.2587579144,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 741077.0700636934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3431.3625239130906,
            "unit": "ns/iter",
            "extra": "iterations: 242544\ncpu: 3431.250412296328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14693.391266113684,
            "unit": "ns/iter",
            "extra": "iterations: 56859\ncpu: 14693.520814646741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12292.790380856348,
            "unit": "ns/iter",
            "extra": "iterations: 67532\ncpu: 12292.425812947937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11625.13756775991,
            "unit": "ns/iter",
            "extra": "iterations: 71761\ncpu: 11624.810133638004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12559.880709899655,
            "unit": "ns/iter",
            "extra": "iterations: 66770\ncpu: 12559.537217313211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34671.63570433578,
            "unit": "ns/iter",
            "extra": "iterations: 24406\ncpu: 34671.95771531582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 454457.5192307705,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 454451.1434511434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368541.3345991571,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 368533.7552742635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364669.1672940318,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 364672.731074864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 368672.4478242322,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 368659.73806506046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225565.74941876257,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 225561.870317748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367413.25857739535,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 367405.23012552306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.3767147837013,
            "unit": "ns/iter",
            "extra": "iterations: 2374279\ncpu: 295.37943940034063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1536.6513320196307,
            "unit": "ns/iter",
            "extra": "iterations: 459265\ncpu: 1536.597389306826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.6211924635024,
            "unit": "ns/iter",
            "extra": "iterations: 577309\ncpu: 1212.603129346678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1146.1014600281574,
            "unit": "ns/iter",
            "extra": "iterations: 611906\ncpu: 1146.0596889064648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1015.0928236892681,
            "unit": "ns/iter",
            "extra": "iterations: 689867\ncpu: 1015.1027661853724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6515.197680879215,
            "unit": "ns/iter",
            "extra": "iterations: 111594\ncpu: 6515.265157624938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18486.922746216747,
            "unit": "ns/iter",
            "extra": "iterations: 37914\ncpu: 18486.775333650046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4417.290203957298,
            "unit": "ns/iter",
            "extra": "iterations: 158268\ncpu: 4417.25364571493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4433.5901280499465,
            "unit": "ns/iter",
            "extra": "iterations: 158064\ncpu: 4433.631946553303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4423.544900979115,
            "unit": "ns/iter",
            "extra": "iterations: 158148\ncpu: 4423.431216328985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9269.705311833957,
            "unit": "ns/iter",
            "extra": "iterations: 75473\ncpu: 9269.624898970593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8359.591273683474,
            "unit": "ns/iter",
            "extra": "iterations: 83655\ncpu: 8359.36046859123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3087.9407783341535,
            "unit": "ns/iter",
            "extra": "iterations: 226792\ncpu: 3087.9709160816765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15076.60794621877,
            "unit": "ns/iter",
            "extra": "iterations: 46412\ncpu: 15076.747392915635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12177.660610805093,
            "unit": "ns/iter",
            "extra": "iterations: 57465\ncpu: 12177.316627512437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 11903.074208729688,
            "unit": "ns/iter",
            "extra": "iterations: 58861\ncpu: 11902.850784050648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12543.299721737993,
            "unit": "ns/iter",
            "extra": "iterations: 56062\ncpu: 12542.95066176736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27485.305310271244,
            "unit": "ns/iter",
            "extra": "iterations: 24801\ncpu: 27485.577194467744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97786.87304469205,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 97783.99441340762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83048.01951627898,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83047.9645593868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82955.77392343701,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 82955.0239234455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83164.72971367693,
            "unit": "ns/iter",
            "extra": "iterations: 8417\ncpu: 83162.25496019881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53987.22749325969,
            "unit": "ns/iter",
            "extra": "iterations: 12985\ncpu: 53987.12360415896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83060.01168196372,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 83058.5409464779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2952.6938489541394,
            "unit": "ns/iter",
            "extra": "iterations: 236220\ncpu: 2952.686902040438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15144.049010284598,
            "unit": "ns/iter",
            "extra": "iterations: 46276\ncpu: 15143.91477223612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12085.113624963451,
            "unit": "ns/iter",
            "extra": "iterations: 57813\ncpu: 12084.25440644841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11868.37675065368,
            "unit": "ns/iter",
            "extra": "iterations: 58978\ncpu: 11867.955847943345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12443.711084633016,
            "unit": "ns/iter",
            "extra": "iterations: 56231\ncpu: 12443.18969963181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26907.185745054583,
            "unit": "ns/iter",
            "extra": "iterations: 25998\ncpu: 26905.592737902985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97084.81845939861,
            "unit": "ns/iter",
            "extra": "iterations: 7205\ncpu: 97080.83275503168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81616.67398156595,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 81616.19003151575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80962.69756943602,
            "unit": "ns/iter",
            "extra": "iterations: 8640\ncpu: 80959.20138888767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81168.20893621788,
            "unit": "ns/iter",
            "extra": "iterations: 8639\ncpu: 81164.2435467057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54491.51882517697,
            "unit": "ns/iter",
            "extra": "iterations: 12802\ncpu: 54488.673644743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82831.71345099072,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 82830.86095874026 ns\nthreads: 1"
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
        "date": 1705960387455,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 717.119875267181,
            "unit": "ns/iter",
            "extra": "iterations: 974563\ncpu: 717.1262401712357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10974.976806397324,
            "unit": "ns/iter",
            "extra": "iterations: 70278\ncpu: 10974.377472324199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24312.653504646805,
            "unit": "ns/iter",
            "extra": "iterations: 34012\ncpu: 24311.81641773492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38062.876317406786,
            "unit": "ns/iter",
            "extra": "iterations: 21159\ncpu: 38062.87159128504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46697.77949446581,
            "unit": "ns/iter",
            "extra": "iterations: 16893\ncpu: 46697.29473746519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58081.08280915346,
            "unit": "ns/iter",
            "extra": "iterations: 14467\ncpu: 58079.40139628118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58155.40219999775,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58152.32999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66938.789114601,
            "unit": "ns/iter",
            "extra": "iterations: 13045\ncpu: 66937.56228440018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77981.32125689564,
            "unit": "ns/iter",
            "extra": "iterations: 11234\ncpu: 77981.19102723882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 586.3532435950937,
            "unit": "ns/iter",
            "extra": "iterations: 1195849\ncpu: 586.339245172258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 487.1915903200711,
            "unit": "ns/iter",
            "extra": "iterations: 1436868\ncpu: 487.1829562632063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.98956782470754,
            "unit": "ns/iter",
            "extra": "iterations: 1445432\ncpu: 483.9684606401413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.15779632249365,
            "unit": "ns/iter",
            "extra": "iterations: 1442879\ncpu: 484.14295308199826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 987.8195614750213,
            "unit": "ns/iter",
            "extra": "iterations: 705182\ncpu: 987.7752126401423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3283.134293767196,
            "unit": "ns/iter",
            "extra": "iterations: 241627\ncpu: 3283.0308698945037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14664.287827659165,
            "unit": "ns/iter",
            "extra": "iterations: 54821\ncpu: 14663.767534339046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11741.581542692555,
            "unit": "ns/iter",
            "extra": "iterations: 70552\ncpu: 11741.295781834682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11266.182656673263,
            "unit": "ns/iter",
            "extra": "iterations: 72858\ncpu: 11265.84040187759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11660.87535341278,
            "unit": "ns/iter",
            "extra": "iterations: 69324\ncpu: 11660.409093531807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 35909.650365372,
            "unit": "ns/iter",
            "extra": "iterations: 23127\ncpu: 35907.03939118778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 455122.55018391303,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 455104.67682606424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 371224.78599057894,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 371209.7120756351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369200.89214434754,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 369193.036093418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375987.4878291097,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 375991.40586189786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 229731.3822985523,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 229722.50990752937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372118.46265469375,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 372106.6581306019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1884242.8794180455,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1884159.6673596697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 729471.1050583187,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 729455.7198443568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2563398.796657457,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2563327.855153208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3153.2420346514255,
            "unit": "ns/iter",
            "extra": "iterations: 246568\ncpu: 3153.2060121345867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14701.106599350427,
            "unit": "ns/iter",
            "extra": "iterations: 55657\ncpu: 14700.991788993257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11558.597170263436,
            "unit": "ns/iter",
            "extra": "iterations: 71102\ncpu: 11558.615791398213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11178.356781597435,
            "unit": "ns/iter",
            "extra": "iterations: 73552\ncpu: 11178.369045029383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11568.418304810037,
            "unit": "ns/iter",
            "extra": "iterations: 69184\ncpu: 11568.335164199802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 35116.81638631091,
            "unit": "ns/iter",
            "extra": "iterations: 23898\ncpu: 35116.83404468996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 469543.733297451,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 469543.80387930933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385466.43002657336,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 385459.74313551834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379247.4462810077,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 379246.23749456066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380256.5004317728,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 380249.7409326401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226499.74535124336,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 226497.417355372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375924.167528015,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 375920.71490094834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1894699.9270833468,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1894568.958333324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 765424.9240816598,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 765403.5918367311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3202.030889596263,
            "unit": "ns/iter",
            "extra": "iterations: 249113\ncpu: 3201.8766583839247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14645.686775190828,
            "unit": "ns/iter",
            "extra": "iterations: 55963\ncpu: 14645.342458409987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11558.557619665757,
            "unit": "ns/iter",
            "extra": "iterations: 70948\ncpu: 11558.00727293227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10867.955297244658,
            "unit": "ns/iter",
            "extra": "iterations: 75275\ncpu: 10867.546994354083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11645.220508514842,
            "unit": "ns/iter",
            "extra": "iterations: 70283\ncpu: 11644.350696470026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 34750.16227997339,
            "unit": "ns/iter",
            "extra": "iterations: 24088\ncpu: 34749.045167718374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460081.59726603073,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 460069.5583596215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 377593.276975358,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 377579.3967714543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 374779.5897544195,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 374770.1947502132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375093.578992309,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 375077.2416737822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227758.0630372247,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 227752.17504558386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 373019.36248946417,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 373003.4482758641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 309.51954559912963,
            "unit": "ns/iter",
            "extra": "iterations: 2282918\ncpu: 309.51606671812095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1517.912310969129,
            "unit": "ns/iter",
            "extra": "iterations: 461962\ncpu: 1517.8722492326185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1188.9487708203062,
            "unit": "ns/iter",
            "extra": "iterations: 586326\ncpu: 1188.9106060451022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1202.8364631043928,
            "unit": "ns/iter",
            "extra": "iterations: 582737\ncpu: 1202.7774107358819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1040.9964174337977,
            "unit": "ns/iter",
            "extra": "iterations: 672423\ncpu: 1040.967962130984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 6563.247474610064,
            "unit": "ns/iter",
            "extra": "iterations: 109785\ncpu: 6563.240879901551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19025.5201030945,
            "unit": "ns/iter",
            "extra": "iterations: 36860\ncpu: 19025.716223548483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4552.702642713211,
            "unit": "ns/iter",
            "extra": "iterations: 153630\ncpu: 4552.4982099850795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4534.341880838976,
            "unit": "ns/iter",
            "extra": "iterations: 154665\ncpu: 4534.213299712343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4563.286837255988,
            "unit": "ns/iter",
            "extra": "iterations: 153038\ncpu: 4563.036631424878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9452.045730467084,
            "unit": "ns/iter",
            "extra": "iterations: 73802\ncpu: 9451.75334001804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8702.067718191796,
            "unit": "ns/iter",
            "extra": "iterations: 80835\ncpu: 8701.639141460942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3176.152561847057,
            "unit": "ns/iter",
            "extra": "iterations: 221071\ncpu: 3176.0190165150393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15338.154815402999,
            "unit": "ns/iter",
            "extra": "iterations: 45396\ncpu: 15337.512115604763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12402.105061879496,
            "unit": "ns/iter",
            "extra": "iterations: 56481\ncpu: 12402.214904127111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12141.279426301124,
            "unit": "ns/iter",
            "extra": "iterations: 57661\ncpu: 12141.241046808136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12843.443528457661,
            "unit": "ns/iter",
            "extra": "iterations: 54222\ncpu: 12842.823945999742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27871.66480825168,
            "unit": "ns/iter",
            "extra": "iterations: 25111\ncpu: 27870.757835211778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99518.36569301091,
            "unit": "ns/iter",
            "extra": "iterations: 6984\ncpu: 99512.80068728601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84567.57967695085,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 84565.4411764712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84993.18132134461,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 84993.89118289997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84625.43954978908,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 84623.85332203869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55326.45318979257,
            "unit": "ns/iter",
            "extra": "iterations: 12540\ncpu: 55323.82775119558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85019.45345309013,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 85014.92899623807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3044.0536229395884,
            "unit": "ns/iter",
            "extra": "iterations: 227067\ncpu: 3043.88616575726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15346.304836623023,
            "unit": "ns/iter",
            "extra": "iterations: 45631\ncpu: 15346.170366636845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12189.196540141449,
            "unit": "ns/iter",
            "extra": "iterations: 57459\ncpu: 12188.666701474061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11981.609486678628,
            "unit": "ns/iter",
            "extra": "iterations: 58482\ncpu: 11981.58749700781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12481.949312301116,
            "unit": "ns/iter",
            "extra": "iterations: 55911\ncpu: 12481.72989215011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27452.67451996788,
            "unit": "ns/iter",
            "extra": "iterations: 25467\ncpu: 27452.58962578994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97893.73082898685,
            "unit": "ns/iter",
            "extra": "iterations: 7081\ncpu: 97892.91060584689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82740.7809883261,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 82739.93395447556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81724.2251137895,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 81725.09044229247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82467.0036329521,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 82465.36974100706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54901.81068379357,
            "unit": "ns/iter",
            "extra": "iterations: 12767\ncpu: 54901.69186183172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83937.30142908983,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 83936.55578239424 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}