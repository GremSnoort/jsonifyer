window.BENCHMARK_DATA = {
  "lastUpdate": 1702490370661,
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
      }
    ]
  }
}