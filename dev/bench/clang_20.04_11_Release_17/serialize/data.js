window.BENCHMARK_DATA = {
  "lastUpdate": 1705775079534,
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
      }
    ]
  }
}