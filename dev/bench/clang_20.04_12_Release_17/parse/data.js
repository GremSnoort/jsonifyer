window.BENCHMARK_DATA = {
  "lastUpdate": 1705575676745,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-12 20.04 Release c++-17": [
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
        "date": 1702490369920,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.4811730440341,
            "unit": "ns/iter",
            "extra": "iterations: 1255912\ncpu: 557.4689150195237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5116.281580000077,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5116.151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10026.156921306087,
            "unit": "ns/iter",
            "extra": "iterations: 83373\ncpu: 10025.407506027135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15085.909920264683,
            "unit": "ns/iter",
            "extra": "iterations: 55684\ncpu: 15085.554198692626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20017.50074223034,
            "unit": "ns/iter",
            "extra": "iterations: 41766\ncpu: 20016.877364363347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24833.051345389642,
            "unit": "ns/iter",
            "extra": "iterations: 34005\ncpu: 24831.76885752095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29811.393256847532,
            "unit": "ns/iter",
            "extra": "iterations: 28503\ncpu: 29810.63396835423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34626.08048208346,
            "unit": "ns/iter",
            "extra": "iterations: 24726\ncpu: 34623.970719081146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39089.899581971426,
            "unit": "ns/iter",
            "extra": "iterations: 22008\ncpu: 39088.1861141403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 516.354622825223,
            "unit": "ns/iter",
            "extra": "iterations: 1354518\ncpu: 516.3193106330078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 403.8271632246635,
            "unit": "ns/iter",
            "extra": "iterations: 1717933\ncpu: 403.8033497231854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 405.13810505717663,
            "unit": "ns/iter",
            "extra": "iterations: 1721139\ncpu: 405.1114988388506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 410.79749712030974,
            "unit": "ns/iter",
            "extra": "iterations: 1695487\ncpu: 410.7810322343969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 866.4134616707192,
            "unit": "ns/iter",
            "extra": "iterations: 799975\ncpu: 866.3471983499481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1764.0037446674928,
            "unit": "ns/iter",
            "extra": "iterations: 454513\ncpu: 1763.8254571376362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9749.207057865047,
            "unit": "ns/iter",
            "extra": "iterations: 83368\ncpu: 9748.519815756641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7638.219385449809,
            "unit": "ns/iter",
            "extra": "iterations: 106224\ncpu: 7637.751355625844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8274.464681160422,
            "unit": "ns/iter",
            "extra": "iterations: 98984\ncpu: 8274.335246100376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8159.258227086058,
            "unit": "ns/iter",
            "extra": "iterations: 99610\ncpu: 8158.655757454045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27827.192539639214,
            "unit": "ns/iter",
            "extra": "iterations: 29516\ncpu: 27826.155305596905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242759.14827201024,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 242753.67892976615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187063.77198341588,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 187060.13528256633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187966.95496862367,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 187957.63152197408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188699.1544485648,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 188694.90972373312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101649.41702424198,
            "unit": "ns/iter",
            "extra": "iterations: 8623\ncpu: 101643.8826394528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184725.5047976557,
            "unit": "ns/iter",
            "extra": "iterations: 4794\ncpu: 184716.39549436804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5614.495485381428,
            "unit": "ns/iter",
            "extra": "iterations: 145195\ncpu: 5614.119632218759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27146.892225569518,
            "unit": "ns/iter",
            "extra": "iterations: 30536\ncpu: 27145.27770500384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19983.980467523492,
            "unit": "ns/iter",
            "extra": "iterations: 41367\ncpu: 19983.191916261738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20127.705725116746,
            "unit": "ns/iter",
            "extra": "iterations: 41152\ncpu: 20126.351088646963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19845.492521797998,
            "unit": "ns/iter",
            "extra": "iterations: 42323\ncpu: 19844.139120572734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45477.24566841895,
            "unit": "ns/iter",
            "extra": "iterations: 18065\ncpu: 45474.636036534896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 261418.57507507136,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 261414.2942942938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201752.4912892036,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 201743.20557491295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202128.11807005433,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 202120.11134307613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202277.03641846412,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 202263.39596381364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114633.42007092941,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 114631.87967949553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194065.38406446212,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 194049.8657117278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 815763.0571672668,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 815717.2354948825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 452603.7739620772,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 452581.08662224445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1980.3963382791874,
            "unit": "ns/iter",
            "extra": "iterations: 405984\ncpu: 1980.2807499802998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10300.463967517582,
            "unit": "ns/iter",
            "extra": "iterations: 77333\ncpu: 10299.75042995872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7612.462699234259,
            "unit": "ns/iter",
            "extra": "iterations: 107223\ncpu: 7612.005819646894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7767.755534729449,
            "unit": "ns/iter",
            "extra": "iterations: 107774\ncpu: 7767.330710560971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7874.056781999663,
            "unit": "ns/iter",
            "extra": "iterations: 103642\ncpu: 7873.773180756871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27679.673572065058,
            "unit": "ns/iter",
            "extra": "iterations: 30411\ncpu: 27678.4354345467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247089.86606891078,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 247072.59736620946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188887.42568727382,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 188878.73711340124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188267.7835139225,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 188255.68302528138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 186405.25896248626,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 186393.77899620341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99913.12605137346,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 99907.64946578779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179345.01402440283,
            "unit": "ns/iter",
            "extra": "iterations: 4920\ncpu: 179338.10975609705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 194.57305336978297,
            "unit": "ns/iter",
            "extra": "iterations: 3602469\ncpu: 194.56084146733932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1437.951079544966,
            "unit": "ns/iter",
            "extra": "iterations: 486177\ncpu: 1437.8522636817472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1091.8181231477513,
            "unit": "ns/iter",
            "extra": "iterations: 641489\ncpu: 1091.7834912212074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1102.112611502701,
            "unit": "ns/iter",
            "extra": "iterations: 641240\ncpu: 1102.034807560356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 796.2324541812624,
            "unit": "ns/iter",
            "extra": "iterations: 870877\ncpu: 796.202793276202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9206.525151144457,
            "unit": "ns/iter",
            "extra": "iterations: 75424\ncpu: 9205.846945269364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11114.685771849534,
            "unit": "ns/iter",
            "extra": "iterations: 63037\ncpu: 11113.812522804024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2641.343237550834,
            "unit": "ns/iter",
            "extra": "iterations: 265880\ncpu: 2641.1554084549334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2655.1815327897634,
            "unit": "ns/iter",
            "extra": "iterations: 263115\ncpu: 2655.0398114892805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2676.1903754586965,
            "unit": "ns/iter",
            "extra": "iterations: 261893\ncpu: 2676.0337236963155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5254.059537490135,
            "unit": "ns/iter",
            "extra": "iterations: 133143\ncpu: 5253.854877838118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5060.659517909956,
            "unit": "ns/iter",
            "extra": "iterations: 138439\ncpu: 5060.32837567447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1972.2464034698462,
            "unit": "ns/iter",
            "extra": "iterations: 367507\ncpu: 1972.0995790556397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10018.246174385196,
            "unit": "ns/iter",
            "extra": "iterations: 69662\ncpu: 10017.643765611081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8082.97391657384,
            "unit": "ns/iter",
            "extra": "iterations: 86185\ncpu: 8082.480710100346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8826.77499297847,
            "unit": "ns/iter",
            "extra": "iterations: 78322\ncpu: 8826.46510558977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8113.5823495494105,
            "unit": "ns/iter",
            "extra": "iterations: 86740\ncpu: 8113.006686649775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18674.45920850542,
            "unit": "ns/iter",
            "extra": "iterations: 37802\ncpu: 18673.22628432373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51836.87823348706,
            "unit": "ns/iter",
            "extra": "iterations: 13337\ncpu: 51834.925395515485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41836.59072305234,
            "unit": "ns/iter",
            "extra": "iterations: 16859\ncpu: 41833.92253395819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42341.76145130221,
            "unit": "ns/iter",
            "extra": "iterations: 16592\ncpu: 42338.86210221781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42521.48866906274,
            "unit": "ns/iter",
            "extra": "iterations: 16680\ncpu: 42520.047961630684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24927.253193220986,
            "unit": "ns/iter",
            "extra": "iterations: 28263\ncpu: 24926.798287513826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41171.95198910623,
            "unit": "ns/iter",
            "extra": "iterations: 16892\ncpu: 41168.23940326814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2295.473031825843,
            "unit": "ns/iter",
            "extra": "iterations: 307455\ncpu: 2295.3843651916563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10165.743142433299,
            "unit": "ns/iter",
            "extra": "iterations: 68902\ncpu: 10165.423354909859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8996.425853146473,
            "unit": "ns/iter",
            "extra": "iterations: 77097\ncpu: 8995.897376032815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9483.74638772462,
            "unit": "ns/iter",
            "extra": "iterations: 73707\ncpu: 9482.918854382973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8964.066354109631,
            "unit": "ns/iter",
            "extra": "iterations: 78066\ncpu: 8963.319498885574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19113.771327817267,
            "unit": "ns/iter",
            "extra": "iterations: 36865\ncpu: 19112.410145124362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51790.43087057371,
            "unit": "ns/iter",
            "extra": "iterations: 13359\ncpu: 51788.052997979044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41825.9172968418,
            "unit": "ns/iter",
            "extra": "iterations: 16662\ncpu: 41822.33225303013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41460.62939983126,
            "unit": "ns/iter",
            "extra": "iterations: 16762\ncpu: 41457.08149385535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40853.59857592975,
            "unit": "ns/iter",
            "extra": "iterations: 17134\ncpu: 40849.912454767786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25478.73332119844,
            "unit": "ns/iter",
            "extra": "iterations: 27475\ncpu: 25477.19745222914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42027.97338695152,
            "unit": "ns/iter",
            "extra": "iterations: 16909\ncpu: 42024.50765864309 ns\nthreads: 1"
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
        "date": 1702492947378,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 550.0266132154616,
            "unit": "ns/iter",
            "extra": "iterations: 1283911\ncpu: 549.991705032514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5067.718289999448,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5067.655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9850.925939497854,
            "unit": "ns/iter",
            "extra": "iterations: 84593\ncpu: 9850.576288818227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14954.764014836825,
            "unit": "ns/iter",
            "extra": "iterations: 56351\ncpu: 14954.222640237087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19340.19301368614,
            "unit": "ns/iter",
            "extra": "iterations: 43256\ncpu: 19339.742463473278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24544.34683051869,
            "unit": "ns/iter",
            "extra": "iterations: 33933\ncpu: 24543.426752718595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28966.347243280336,
            "unit": "ns/iter",
            "extra": "iterations: 29020\ncpu: 28965.055134390062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33941.64082374495,
            "unit": "ns/iter",
            "extra": "iterations: 24765\ncpu: 33940.39975772259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38232.55767689912,
            "unit": "ns/iter",
            "extra": "iterations: 22470\ncpu: 38229.95104583886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 515.7748392070004,
            "unit": "ns/iter",
            "extra": "iterations: 1362000\ncpu: 515.7709251101331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.9357612055722,
            "unit": "ns/iter",
            "extra": "iterations: 1728784\ncpu: 404.92641070255155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 414.25578322804154,
            "unit": "ns/iter",
            "extra": "iterations: 1711328\ncpu: 414.2421557994722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.67637720485436,
            "unit": "ns/iter",
            "extra": "iterations: 1714941\ncpu: 407.6567648682966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 868.5038494185328,
            "unit": "ns/iter",
            "extra": "iterations: 808174\ncpu: 868.4819110736057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1742.2968145611553,
            "unit": "ns/iter",
            "extra": "iterations: 458367\ncpu: 1742.2262073840398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9562.640091382375,
            "unit": "ns/iter",
            "extra": "iterations: 77039\ncpu: 9562.56830955748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7157.7614922561,
            "unit": "ns/iter",
            "extra": "iterations: 113707\ncpu: 7157.413351860485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7460.215755849185,
            "unit": "ns/iter",
            "extra": "iterations: 111603\ncpu: 7459.9177441466545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7246.3110537560915,
            "unit": "ns/iter",
            "extra": "iterations: 112749\ncpu: 7246.060718942085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28108.323304420916,
            "unit": "ns/iter",
            "extra": "iterations: 29282\ncpu: 28105.9763677345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242635.33604032025,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 242627.86334360213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 191545.0770573956,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 191536.34577603184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185617.74281325727,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 185612.33267500516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190044.72788379347,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 190037.94449262792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102564.11671924575,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 102561.105269307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185093.03287271602,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 185085.02931323327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5624.552531816226,
            "unit": "ns/iter",
            "extra": "iterations: 144817\ncpu: 5624.353494410168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26310.06095781561,
            "unit": "ns/iter",
            "extra": "iterations: 30841\ncpu: 26309.062611458714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20532.445331165567,
            "unit": "ns/iter",
            "extra": "iterations: 40599\ncpu: 20531.70275129932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20577.55411021274,
            "unit": "ns/iter",
            "extra": "iterations: 40667\ncpu: 20577.11412201542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19801.56022633613,
            "unit": "ns/iter",
            "extra": "iterations: 42415\ncpu: 19800.76859601558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44489.84940019623,
            "unit": "ns/iter",
            "extra": "iterations: 18506\ncpu: 44488.7658056848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262060.81402349824,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 262050.43635269304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204345.5522845086,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 204337.63542157385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205454.6382878618,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 205445.97836312253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203185.0585354671,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 203178.9878731344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114585.08342105676,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 114580.27631578945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196362.0462336508,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 196355.23229589494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 821214.7938865316,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 821171.6157205232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 469194.57796701236,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 468538.9568919641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2030.4601555656996,
            "unit": "ns/iter",
            "extra": "iterations: 396103\ncpu: 2030.4218852167176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10336.915856055577,
            "unit": "ns/iter",
            "extra": "iterations: 79364\ncpu: 10336.729499521196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7732.140183554607,
            "unit": "ns/iter",
            "extra": "iterations: 102858\ncpu: 7732.041260767301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7657.044874210538,
            "unit": "ns/iter",
            "extra": "iterations: 108793\ncpu: 7656.76560072798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7357.577743010833,
            "unit": "ns/iter",
            "extra": "iterations: 111219\ncpu: 7357.140416655435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27133.635982028463,
            "unit": "ns/iter",
            "extra": "iterations: 30493\ncpu: 27132.7944118323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 251419.53585658455,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 251405.46385885042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190212.9580555095,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 190208.58249085836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190166.10991378233,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 190158.0387931048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187888.81237994102,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 187883.6712913552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100180.65261727863,
            "unit": "ns/iter",
            "extra": "iterations: 8826\ncpu: 100178.03081803826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180303.7670419574,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 180301.14636642722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 190.2638543239077,
            "unit": "ns/iter",
            "extra": "iterations: 3676650\ncpu: 190.2606720792027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1438.5255988321023,
            "unit": "ns/iter",
            "extra": "iterations: 484944\ncpu: 1438.5131066679921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1167.8739476982703,
            "unit": "ns/iter",
            "extra": "iterations: 598450\ncpu: 1167.841924972847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1049.8699961312257,
            "unit": "ns/iter",
            "extra": "iterations: 669457\ncpu: 1049.8415880332932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 824.9298594789501,
            "unit": "ns/iter",
            "extra": "iterations: 850122\ncpu: 824.9061899350885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9283.974835453082,
            "unit": "ns/iter",
            "extra": "iterations: 75662\ncpu: 9283.789749147536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11804.720138808096,
            "unit": "ns/iter",
            "extra": "iterations: 59651\ncpu: 11804.608472615693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2675.538681483436,
            "unit": "ns/iter",
            "extra": "iterations: 258806\ncpu: 2675.4688840289623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2727.5467272394126,
            "unit": "ns/iter",
            "extra": "iterations: 256221\ncpu: 2727.503210119375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2664.978521716978,
            "unit": "ns/iter",
            "extra": "iterations: 261939\ncpu: 2664.9284757138153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5261.140811078075,
            "unit": "ns/iter",
            "extra": "iterations: 132589\ncpu: 5261.068414423523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5029.761735979215,
            "unit": "ns/iter",
            "extra": "iterations: 137398\ncpu: 5029.571027234723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1915.5644755084159,
            "unit": "ns/iter",
            "extra": "iterations: 365697\ncpu: 1915.5010842309387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10175.914964718468,
            "unit": "ns/iter",
            "extra": "iterations: 69724\ncpu: 10175.577993230369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7996.223039271335,
            "unit": "ns/iter",
            "extra": "iterations: 87442\ncpu: 7996.07739987642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8046.551808146727,
            "unit": "ns/iter",
            "extra": "iterations: 86608\ncpu: 8046.321355994837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8035.765216893735,
            "unit": "ns/iter",
            "extra": "iterations: 87370\ncpu: 8035.490442943782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18539.658489518024,
            "unit": "ns/iter",
            "extra": "iterations: 37829\ncpu: 18539.324327896797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52279.364970063136,
            "unit": "ns/iter",
            "extra": "iterations: 13360\ncpu: 52277.59730538876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42128.96869773002,
            "unit": "ns/iter",
            "extra": "iterations: 16740\ncpu: 42127.574671445785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42300.62928824326,
            "unit": "ns/iter",
            "extra": "iterations: 16382\ncpu: 42298.92565010406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41676.65035215098,
            "unit": "ns/iter",
            "extra": "iterations: 16754\ncpu: 41675.826668258545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24970.835176598404,
            "unit": "ns/iter",
            "extra": "iterations: 28030\ncpu: 24970.12843382086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41306.72250722387,
            "unit": "ns/iter",
            "extra": "iterations: 16959\ncpu: 41306.68671501807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1941.0387576410265,
            "unit": "ns/iter",
            "extra": "iterations: 355646\ncpu: 1940.9916040107255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10030.45803594421,
            "unit": "ns/iter",
            "extra": "iterations: 69774\ncpu: 10029.998280161553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9901.510032546887,
            "unit": "ns/iter",
            "extra": "iterations: 70670\ncpu: 9900.885807273218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9365.29478595185,
            "unit": "ns/iter",
            "extra": "iterations: 74376\ncpu: 9364.812573948728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9321.374047638097,
            "unit": "ns/iter",
            "extra": "iterations: 74814\ncpu: 9321.286122918162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19181.339501098468,
            "unit": "ns/iter",
            "extra": "iterations: 36480\ncpu: 19181.047149123093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51500.61896641806,
            "unit": "ns/iter",
            "extra": "iterations: 13487\ncpu: 51498.29465411151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41846.657318827696,
            "unit": "ns/iter",
            "extra": "iterations: 16724\ncpu: 41844.36737622579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41859.28663025409,
            "unit": "ns/iter",
            "extra": "iterations: 16844\ncpu: 41858.92899548794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42502.9334384098,
            "unit": "ns/iter",
            "extra": "iterations: 16496\ncpu: 42502.00048496559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26448.46120280694,
            "unit": "ns/iter",
            "extra": "iterations: 26355\ncpu: 26447.97951052969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42479.84890798414,
            "unit": "ns/iter",
            "extra": "iterations: 16758\ncpu: 42478.8518916335 ns\nthreads: 1"
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
        "date": 1702504006704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 547.9280518666299,
            "unit": "ns/iter",
            "extra": "iterations: 1276350\ncpu: 547.8936812002977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5138.399660000914,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5138.197999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10050.81734719632,
            "unit": "ns/iter",
            "extra": "iterations: 82999\ncpu: 10050.23795467415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14903.391315350505,
            "unit": "ns/iter",
            "extra": "iterations: 55316\ncpu: 14902.823776122641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19510.3610512013,
            "unit": "ns/iter",
            "extra": "iterations: 42656\ncpu: 19509.649287321834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24210.86353864162,
            "unit": "ns/iter",
            "extra": "iterations: 34420\ncpu: 24210.627542126684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29043.485875308455,
            "unit": "ns/iter",
            "extra": "iterations: 28390\ncpu: 29041.6660796055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33832.12637272279,
            "unit": "ns/iter",
            "extra": "iterations: 24222\ncpu: 33831.15762529932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37688.40874392662,
            "unit": "ns/iter",
            "extra": "iterations: 21615\ncpu: 37686.77307425404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 515.4498829368957,
            "unit": "ns/iter",
            "extra": "iterations: 1358669\ncpu: 515.4471030103725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 406.42543859903526,
            "unit": "ns/iter",
            "extra": "iterations: 1713467\ncpu: 406.4144217542557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 403.88430289337265,
            "unit": "ns/iter",
            "extra": "iterations: 1727433\ncpu: 403.8765613485446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 404.007373743602,
            "unit": "ns/iter",
            "extra": "iterations: 1723141\ncpu: 404.0029806034441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 848.9675754036697,
            "unit": "ns/iter",
            "extra": "iterations: 823634\ncpu: 848.9554826537026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1741.7142544362591,
            "unit": "ns/iter",
            "extra": "iterations: 456735\ncpu: 1741.6694582197551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9874.483940431921,
            "unit": "ns/iter",
            "extra": "iterations: 82661\ncpu: 9874.15588971825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7500.842976337296,
            "unit": "ns/iter",
            "extra": "iterations: 109665\ncpu: 7500.56627000409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8123.416507303626,
            "unit": "ns/iter",
            "extra": "iterations: 101446\ncpu: 8122.847623366141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7745.744176983854,
            "unit": "ns/iter",
            "extra": "iterations: 102653\ncpu: 7745.217382833432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27833.117583784395,
            "unit": "ns/iter",
            "extra": "iterations: 29749\ncpu: 27831.66492991362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 248812.06487697645,
            "unit": "ns/iter",
            "extra": "iterations: 3576\ncpu: 248797.9586129757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185747.2744842444,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 185745.450597177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188970.84572289584,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 188964.1456582629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190861.0421673502,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 190855.3856237713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101576.65101449811,
            "unit": "ns/iter",
            "extra": "iterations: 8625\ncpu: 101573.56521739137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182876.37937539993,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 182873.54852232218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5463.8645934262595,
            "unit": "ns/iter",
            "extra": "iterations: 149653\ncpu: 5463.59244385345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26642.2590459227,
            "unit": "ns/iter",
            "extra": "iterations: 31423\ncpu: 26640.476720873226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20922.101187648914,
            "unit": "ns/iter",
            "extra": "iterations: 39995\ncpu: 20921.727715964524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20604.184066959722,
            "unit": "ns/iter",
            "extra": "iterations: 40143\ncpu: 20603.52738958224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20435.065280879164,
            "unit": "ns/iter",
            "extra": "iterations: 40747\ncpu: 20425.204309519762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45611.07366472868,
            "unit": "ns/iter",
            "extra": "iterations: 18367\ncpu: 45607.851037186396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 261743.0652435086,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 261733.28322309066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204124.23237780808,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 204109.8214285705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202907.73173010256,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 202900.32687368718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202729.14279080863,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 202716.69375435245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113728.66913869865,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 113720.9992193602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 201493.33825173503,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 201480.32640286125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 816214.716609577,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 816156.5924657531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457983.7111801552,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 457957.60869565286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1962.5458809796332,
            "unit": "ns/iter",
            "extra": "iterations: 412938\ncpu: 1962.4527168727507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10099.318315100336,
            "unit": "ns/iter",
            "extra": "iterations: 81168\ncpu: 10098.851764242114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8052.377917379191,
            "unit": "ns/iter",
            "extra": "iterations: 101718\ncpu: 8051.984899427806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7985.127402148946,
            "unit": "ns/iter",
            "extra": "iterations: 103397\ncpu: 7984.657195083037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7786.69100608205,
            "unit": "ns/iter",
            "extra": "iterations: 105727\ncpu: 7786.288270735031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27542.298134402572,
            "unit": "ns/iter",
            "extra": "iterations: 30446\ncpu: 27540.95447677857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246282.57025055695,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 246265.3028861399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188319.60723458143,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 188309.69606164275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188539.13363076613,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 188533.56702783113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185776.1359223416,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 185766.08273533138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98850.92275550705,
            "unit": "ns/iter",
            "extra": "iterations: 8855\ncpu: 98845.31902879711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180956.77132966233,
            "unit": "ns/iter",
            "extra": "iterations: 4911\ncpu: 180946.3653023823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 191.96605160632885,
            "unit": "ns/iter",
            "extra": "iterations: 3649127\ncpu: 191.9589534702412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1438.7900664895553,
            "unit": "ns/iter",
            "extra": "iterations: 486092\ncpu: 1438.7177735901853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1153.3983181547908,
            "unit": "ns/iter",
            "extra": "iterations: 607547\ncpu: 1153.3171919209597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1048.0112669167067,
            "unit": "ns/iter",
            "extra": "iterations: 654305\ncpu: 1047.911142357159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 829.2311293139795,
            "unit": "ns/iter",
            "extra": "iterations: 843822\ncpu: 829.2056855592791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9074.777069736574,
            "unit": "ns/iter",
            "extra": "iterations: 77836\ncpu: 9074.606865717662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11556.556264078456,
            "unit": "ns/iter",
            "extra": "iterations: 60376\ncpu: 11556.154763482102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2648.433333459151,
            "unit": "ns/iter",
            "extra": "iterations: 265283\ncpu: 2648.3577914905923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2675.0428004809173,
            "unit": "ns/iter",
            "extra": "iterations: 260441\ncpu: 2674.95517218872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2658.2005509937158,
            "unit": "ns/iter",
            "extra": "iterations: 263524\ncpu: 2658.1897663969744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5169.582669095321,
            "unit": "ns/iter",
            "extra": "iterations: 135619\ncpu: 5169.482889565612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4546.317020663723,
            "unit": "ns/iter",
            "extra": "iterations: 152826\ncpu: 4546.232316490665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1913.6694849405503,
            "unit": "ns/iter",
            "extra": "iterations: 366773\ncpu: 1913.6122342702554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9970.242794897516,
            "unit": "ns/iter",
            "extra": "iterations: 70228\ncpu: 9969.66879307398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8002.202752220726,
            "unit": "ns/iter",
            "extra": "iterations: 87057\ncpu: 8001.814902879685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7890.805370728352,
            "unit": "ns/iter",
            "extra": "iterations: 88070\ncpu: 7890.317928920183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7792.691027175621,
            "unit": "ns/iter",
            "extra": "iterations: 90228\ncpu: 7792.167619807547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18582.562080935582,
            "unit": "ns/iter",
            "extra": "iterations: 37733\ncpu: 18581.104073357492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51693.860079231665,
            "unit": "ns/iter",
            "extra": "iterations: 13379\ncpu: 51691.008296584405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41899.8682602747,
            "unit": "ns/iter",
            "extra": "iterations: 16859\ncpu: 41897.02829349263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42074.86297165749,
            "unit": "ns/iter",
            "extra": "iterations: 16617\ncpu: 42072.81097670996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41949.46139552108,
            "unit": "ns/iter",
            "extra": "iterations: 16682\ncpu: 41947.326459656855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25208.097826870417,
            "unit": "ns/iter",
            "extra": "iterations: 27794\ncpu: 25206.9799237245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41283.52898507932,
            "unit": "ns/iter",
            "extra": "iterations: 16957\ncpu: 41282.40254762115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2231.20148489323,
            "unit": "ns/iter",
            "extra": "iterations: 329990\ncpu: 2231.133064638331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10847.421412859889,
            "unit": "ns/iter",
            "extra": "iterations: 65017\ncpu: 10846.87850869767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9312.719212479851,
            "unit": "ns/iter",
            "extra": "iterations: 75071\ncpu: 9312.438891182966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9093.665204412007,
            "unit": "ns/iter",
            "extra": "iterations: 77050\ncpu: 9092.709928617891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9525.806846698664,
            "unit": "ns/iter",
            "extra": "iterations: 73320\ncpu: 9525.319148936074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18773.42660932408,
            "unit": "ns/iter",
            "extra": "iterations: 37205\ncpu: 18772.490256685945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53365.56904146862,
            "unit": "ns/iter",
            "extra": "iterations: 13166\ncpu: 53362.72216314811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40531.85459473696,
            "unit": "ns/iter",
            "extra": "iterations: 15866\ncpu: 40531.016009076084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41336.086089178876,
            "unit": "ns/iter",
            "extra": "iterations: 16843\ncpu: 41334.833461972725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41517.520894185654,
            "unit": "ns/iter",
            "extra": "iterations: 16775\ncpu: 41516.327868852226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24602.859571479697,
            "unit": "ns/iter",
            "extra": "iterations: 28470\ncpu: 24602.550052686835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41848.68765447013,
            "unit": "ns/iter",
            "extra": "iterations: 16994\ncpu: 41847.50500176541 ns\nthreads: 1"
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
        "date": 1705575675498,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 541.5506254212416,
            "unit": "ns/iter",
            "extra": "iterations: 1275940\ncpu: 541.5329090709596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5090.825659999609,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5090.809999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9968.921546070433,
            "unit": "ns/iter",
            "extra": "iterations: 84317\ncpu: 9968.905440184068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14588.028939817894,
            "unit": "ns/iter",
            "extra": "iterations: 56462\ncpu: 14587.60405228295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19814.210802219248,
            "unit": "ns/iter",
            "extra": "iterations: 42158\ncpu: 19813.871625788684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24501.860084919255,
            "unit": "ns/iter",
            "extra": "iterations: 34621\ncpu: 24501.184252332412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28962.80073876354,
            "unit": "ns/iter",
            "extra": "iterations: 29238\ncpu: 28962.517956084557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33398.72934518061,
            "unit": "ns/iter",
            "extra": "iterations: 25091\ncpu: 33398.34602048541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38390.43076854364,
            "unit": "ns/iter",
            "extra": "iterations: 22432\ncpu: 38389.09147646214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 515.1646276188816,
            "unit": "ns/iter",
            "extra": "iterations: 1351693\ncpu: 515.1635023633334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 415.34223310767845,
            "unit": "ns/iter",
            "extra": "iterations: 1734838\ncpu: 415.3274830272337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 407.79821192018073,
            "unit": "ns/iter",
            "extra": "iterations: 1714353\ncpu: 407.801660451494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 414.4223456367276,
            "unit": "ns/iter",
            "extra": "iterations: 1683756\ncpu: 414.41568730861275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 854.5197527758394,
            "unit": "ns/iter",
            "extra": "iterations: 814645\ncpu: 854.5274321943912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1739.7447555357576,
            "unit": "ns/iter",
            "extra": "iterations: 456672\ncpu: 1739.7050837362503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10348.050384265121,
            "unit": "ns/iter",
            "extra": "iterations: 79112\ncpu: 10347.935837799574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7863.737934789443,
            "unit": "ns/iter",
            "extra": "iterations: 102837\ncpu: 7863.649270204297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7984.4769179186915,
            "unit": "ns/iter",
            "extra": "iterations: 101399\ncpu: 7984.397282024494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7806.43773432483,
            "unit": "ns/iter",
            "extra": "iterations: 104022\ncpu: 7806.351541020188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28000.444399158267,
            "unit": "ns/iter",
            "extra": "iterations: 29442\ncpu: 27999.456558657654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 251754.2914798347,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 251747.75784753382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192272.86157570474,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 192270.0044014087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 191300.64806581664,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 191294.64206313837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 193751.92811181766,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 193747.6370090969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102536.14808321139,
            "unit": "ns/iter",
            "extra": "iterations: 8556\ncpu: 102533.14633006064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185822.1774736864,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 185819.91578947348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5579.236236063524,
            "unit": "ns/iter",
            "extra": "iterations: 144944\ncpu: 5578.995336129801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27013.424376966555,
            "unit": "ns/iter",
            "extra": "iterations: 30857\ncpu: 27013.38432122374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21443.435866045882,
            "unit": "ns/iter",
            "extra": "iterations: 39207\ncpu: 21442.969367714966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21098.0938286674,
            "unit": "ns/iter",
            "extra": "iterations: 39327\ncpu: 21096.857121061785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20495.92170208676,
            "unit": "ns/iter",
            "extra": "iterations: 40844\ncpu: 20495.132700029328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46008.35613390946,
            "unit": "ns/iter",
            "extra": "iterations: 17982\ncpu: 46006.7956845735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262320.26825587096,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 262305.9444779735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203069.53844356386,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 203060.31783126807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204214.01133947374,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 204198.06283959333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203210.88875877822,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 203200.56206088932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114115.42566943304,
            "unit": "ns/iter",
            "extra": "iterations: 7581\ncpu: 114115.03759398476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194768.6886227567,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 194755.1785318245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 817457.1344319432,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 817388.6383347766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453617.0862685089,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 453595.9162838195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1832.8911551169174,
            "unit": "ns/iter",
            "extra": "iterations: 439791\ncpu: 1832.8117219315477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9284.275848211508,
            "unit": "ns/iter",
            "extra": "iterations: 87095\ncpu: 9283.923302141366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7394.490303240888,
            "unit": "ns/iter",
            "extra": "iterations: 109418\ncpu: 7394.000987040535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7944.71412954417,
            "unit": "ns/iter",
            "extra": "iterations: 102452\ncpu: 7944.316362784578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7555.847603520941,
            "unit": "ns/iter",
            "extra": "iterations: 107345\ncpu: 7555.449252410471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27036.984591829885,
            "unit": "ns/iter",
            "extra": "iterations: 30698\ncpu: 27035.989315264804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 249420.53913535638,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 249405.34049166497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190678.9747790385,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 190667.3420995903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191342.26936544318,
            "unit": "ns/iter",
            "extra": "iterations: 4570\ncpu: 191341.57549234165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189703.54617869935,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 189694.74703982822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100430.69291964981,
            "unit": "ns/iter",
            "extra": "iterations: 8799\ncpu: 100425.17331514927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181756.20535530412,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 181749.7425334697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 194.61855128729505,
            "unit": "ns/iter",
            "extra": "iterations: 3587654\ncpu: 194.60444067348794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1469.6033836770387,
            "unit": "ns/iter",
            "extra": "iterations: 473745\ncpu: 1469.535298525578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1161.3775904897807,
            "unit": "ns/iter",
            "extra": "iterations: 602637\ncpu: 1161.3010817457298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1122.4070817696334,
            "unit": "ns/iter",
            "extra": "iterations: 625098\ncpu: 1122.4040070516992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 852.276649031715,
            "unit": "ns/iter",
            "extra": "iterations: 820527\ncpu: 852.2391097428916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9313.35671112981,
            "unit": "ns/iter",
            "extra": "iterations: 75941\ncpu: 9312.83364717343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11702.60206140994,
            "unit": "ns/iter",
            "extra": "iterations: 59959\ncpu: 11701.896295802226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2649.476948906988,
            "unit": "ns/iter",
            "extra": "iterations: 262070\ncpu: 2649.286831762519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2701.5367896420194,
            "unit": "ns/iter",
            "extra": "iterations: 257423\ncpu: 2701.3942033151816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2674.340200362437,
            "unit": "ns/iter",
            "extra": "iterations: 262025\ncpu: 2674.1883408071635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5241.141617132156,
            "unit": "ns/iter",
            "extra": "iterations: 133409\ncpu: 5240.843571273286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5033.085374251788,
            "unit": "ns/iter",
            "extra": "iterations: 139398\ncpu: 5032.9029110891315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1935.8573439594736,
            "unit": "ns/iter",
            "extra": "iterations: 360868\ncpu: 1935.8283361229135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10052.842154748656,
            "unit": "ns/iter",
            "extra": "iterations: 69131\ncpu: 10052.273220407484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8129.111544416908,
            "unit": "ns/iter",
            "extra": "iterations: 85903\ncpu: 8128.579909898385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8067.102909906648,
            "unit": "ns/iter",
            "extra": "iterations: 86532\ncpu: 8066.70249156381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7974.563194787086,
            "unit": "ns/iter",
            "extra": "iterations: 87167\ncpu: 7974.455929422747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18507.622164838314,
            "unit": "ns/iter",
            "extra": "iterations: 37564\ncpu: 18507.267596634978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52132.893140625725,
            "unit": "ns/iter",
            "extra": "iterations: 13354\ncpu: 52129.97603714192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42927.08260763085,
            "unit": "ns/iter",
            "extra": "iterations: 16306\ncpu: 42926.401324665836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43119.34765191189,
            "unit": "ns/iter",
            "extra": "iterations: 16226\ncpu: 43118.67373351422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41967.90453939232,
            "unit": "ns/iter",
            "extra": "iterations: 16478\ncpu: 41966.476514139846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24957.1653695097,
            "unit": "ns/iter",
            "extra": "iterations: 28010\ncpu: 24955.551588718303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41622.63195766202,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 41620.68862987641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1918.7831725317403,
            "unit": "ns/iter",
            "extra": "iterations: 365046\ncpu: 1918.6187494179035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11883.512987676404,
            "unit": "ns/iter",
            "extra": "iterations: 58748\ncpu: 11883.497310546822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9287.431208580183,
            "unit": "ns/iter",
            "extra": "iterations: 73185\ncpu: 9287.108013937257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9850.580620710456,
            "unit": "ns/iter",
            "extra": "iterations: 71241\ncpu: 9850.111593043395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9970.988432463653,
            "unit": "ns/iter",
            "extra": "iterations: 70110\ncpu: 9970.432178006004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18382.707935421964,
            "unit": "ns/iter",
            "extra": "iterations: 37906\ncpu: 18381.462037672383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51604.694116784325,
            "unit": "ns/iter",
            "extra": "iterations: 13564\ncpu: 51601.45974638668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42740.05193532659,
            "unit": "ns/iter",
            "extra": "iterations: 16328\ncpu: 42737.898089172086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42473.61929706771,
            "unit": "ns/iter",
            "extra": "iterations: 16417\ncpu: 42471.3406834374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42284.92910606738,
            "unit": "ns/iter",
            "extra": "iterations: 16433\ncpu: 42281.768392867976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26500.820862695346,
            "unit": "ns/iter",
            "extra": "iterations: 26823\ncpu: 26499.485516161185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42054.17624066766,
            "unit": "ns/iter",
            "extra": "iterations: 16886\ncpu: 42053.944095699844 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}