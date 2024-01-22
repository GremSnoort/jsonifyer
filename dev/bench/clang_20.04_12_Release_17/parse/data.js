window.BENCHMARK_DATA = {
  "lastUpdate": 1705955635789,
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
        "date": 1705773494037,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 552.7664282300099,
            "unit": "ns/iter",
            "extra": "iterations: 1261411\ncpu: 552.7598855567298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5192.356009999912,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5192.240000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10009.380613579724,
            "unit": "ns/iter",
            "extra": "iterations: 83347\ncpu: 10007.80232041945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14912.9968898475,
            "unit": "ns/iter",
            "extra": "iterations: 52409\ncpu: 14912.524566391274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19689.463072289294,
            "unit": "ns/iter",
            "extra": "iterations: 42177\ncpu: 19688.865969604278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24556.13622409844,
            "unit": "ns/iter",
            "extra": "iterations: 33878\ncpu: 24555.9064879863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29888.973842209365,
            "unit": "ns/iter",
            "extra": "iterations: 28481\ncpu: 29888.034128015177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34393.54030252018,
            "unit": "ns/iter",
            "extra": "iterations: 24527\ncpu: 34392.91393158561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39121.77411807959,
            "unit": "ns/iter",
            "extra": "iterations: 21799\ncpu: 39121.64319464201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 525.9405058215,
            "unit": "ns/iter",
            "extra": "iterations: 1326634\ncpu: 525.9333772540119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 419.2646626335849,
            "unit": "ns/iter",
            "extra": "iterations: 1668868\ncpu: 419.2681506266524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 414.96580602659895,
            "unit": "ns/iter",
            "extra": "iterations: 1689479\ncpu: 414.9568594815324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.3616501531072,
            "unit": "ns/iter",
            "extra": "iterations: 1665300\ncpu: 418.3650993814931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 882.5458518912399,
            "unit": "ns/iter",
            "extra": "iterations: 794362\ncpu: 882.5376843303184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1741.3078743192982,
            "unit": "ns/iter",
            "extra": "iterations: 461932\ncpu: 1741.320800464138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10515.171829190413,
            "unit": "ns/iter",
            "extra": "iterations: 78450\ncpu: 10514.513702995544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8096.697883850085,
            "unit": "ns/iter",
            "extra": "iterations: 100938\ncpu: 8096.116427906257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7819.370903049069,
            "unit": "ns/iter",
            "extra": "iterations: 104712\ncpu: 7819.082817633139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7936.668156002502,
            "unit": "ns/iter",
            "extra": "iterations: 103178\ncpu: 7936.42540076373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28034.64547290195,
            "unit": "ns/iter",
            "extra": "iterations: 29710\ncpu: 28033.046112420056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 250200.10209205374,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 250181.8967921902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192148.6275498893,
            "unit": "ns/iter",
            "extra": "iterations: 4559\ncpu: 192129.3924106166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189228.06723986665,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 189208.31128747785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188281.60910279604,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 188261.93379790935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102888.26292344833,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 102877.86894854036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185575.05208332732,
            "unit": "ns/iter",
            "extra": "iterations: 4800\ncpu: 185561.47916666637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5679.76915728174,
            "unit": "ns/iter",
            "extra": "iterations: 143405\ncpu: 5679.28872772916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26488.87054211666,
            "unit": "ns/iter",
            "extra": "iterations: 31377\ncpu: 26486.856614717875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20367.774302034606,
            "unit": "ns/iter",
            "extra": "iterations: 40439\ncpu: 20366.173743168747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20824.659994487978,
            "unit": "ns/iter",
            "extra": "iterations: 39917\ncpu: 20823.305859658754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20453.25705220391,
            "unit": "ns/iter",
            "extra": "iterations: 40342\ncpu: 20451.68063060828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45803.648449118315,
            "unit": "ns/iter",
            "extra": "iterations: 18151\ncpu: 45801.91724973852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263864.50015065854,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 263847.393793311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203519.45384435213,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 203496.1205889217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203256.91900092608,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 203241.64332399605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201302.3523016559,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 201292.96784640345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112854.94064934512,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 112854.63636363657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195221.6915109374,
            "unit": "ns/iter",
            "extra": "iterations: 4441\ncpu: 195218.21661787818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 819078.916162449,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 819064.3042350883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457121.3379629667,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 457095.9876543234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1956.1076011749078,
            "unit": "ns/iter",
            "extra": "iterations: 409884\ncpu: 1956.045856876578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10145.87546829108,
            "unit": "ns/iter",
            "extra": "iterations: 81947\ncpu: 10145.513563644801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7739.357649527417,
            "unit": "ns/iter",
            "extra": "iterations: 106719\ncpu: 7739.025852940928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7186.671148031895,
            "unit": "ns/iter",
            "extra": "iterations: 115441\ncpu: 7186.299494980142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7392.646985666987,
            "unit": "ns/iter",
            "extra": "iterations: 111766\ncpu: 7392.434192867208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27343.798685240108,
            "unit": "ns/iter",
            "extra": "iterations: 30728\ncpu: 27342.63538141107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 256505.1986625701,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 256499.13624965088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186819.79432473198,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 186808.40622999653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 187116.6110518584,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 187108.23554512538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184695.11978946684,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 184688.56842105198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99632.93022731281,
            "unit": "ns/iter",
            "extra": "iterations: 8886\ncpu: 99630.6212018908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180431.16989993452,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 180424.60690218405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 189.88427460103873,
            "unit": "ns/iter",
            "extra": "iterations: 3686978\ncpu: 189.87723821514487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1452.2006268228727,
            "unit": "ns/iter",
            "extra": "iterations: 482433\ncpu: 1452.1502467700172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1157.9780748114558,
            "unit": "ns/iter",
            "extra": "iterations: 603598\ncpu: 1157.9872696728614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1098.3900836743828,
            "unit": "ns/iter",
            "extra": "iterations: 635679\ncpu: 1098.3738647965483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 834.9923227480917,
            "unit": "ns/iter",
            "extra": "iterations: 836888\ncpu: 834.9567684086737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9156.66097008043,
            "unit": "ns/iter",
            "extra": "iterations: 76303\ncpu: 9156.051531394582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11711.552688098202,
            "unit": "ns/iter",
            "extra": "iterations: 59596\ncpu: 11710.811128263686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2666.501381162781,
            "unit": "ns/iter",
            "extra": "iterations: 262098\ncpu: 2666.3728834252747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2630.1001609483856,
            "unit": "ns/iter",
            "extra": "iterations: 265303\ncpu: 2629.992499142503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2657.3526905421886,
            "unit": "ns/iter",
            "extra": "iterations: 264036\ncpu: 2657.255071278158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5188.0960786046,
            "unit": "ns/iter",
            "extra": "iterations: 135462\ncpu: 5187.981131239769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4574.365564281443,
            "unit": "ns/iter",
            "extra": "iterations: 153062\ncpu: 4574.126824424089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1923.346078573167,
            "unit": "ns/iter",
            "extra": "iterations: 366359\ncpu: 1923.2864485381779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10106.08707328639,
            "unit": "ns/iter",
            "extra": "iterations: 69631\ncpu: 10106.168229667817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8149.217069892606,
            "unit": "ns/iter",
            "extra": "iterations: 86304\ncpu: 8149.01279199121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8169.7609841832345,
            "unit": "ns/iter",
            "extra": "iterations: 86488\ncpu: 8169.645499953855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7991.928384378921,
            "unit": "ns/iter",
            "extra": "iterations: 87830\ncpu: 7991.751110099036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19645.479311504005,
            "unit": "ns/iter",
            "extra": "iterations: 35672\ncpu: 19645.259587351346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52054.371123152654,
            "unit": "ns/iter",
            "extra": "iterations: 13284\ncpu: 52053.98223426635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42199.52856457207,
            "unit": "ns/iter",
            "extra": "iterations: 16664\ncpu: 42199.03984637595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42168.81449415987,
            "unit": "ns/iter",
            "extra": "iterations: 16517\ncpu: 42166.69492038474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42449.21423827134,
            "unit": "ns/iter",
            "extra": "iterations: 16561\ncpu: 42447.25560050697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25212.665167164552,
            "unit": "ns/iter",
            "extra": "iterations: 27787\ncpu: 25211.296649512842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41109.23193089546,
            "unit": "ns/iter",
            "extra": "iterations: 17018\ncpu: 41106.27570807326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2290.3412973878476,
            "unit": "ns/iter",
            "extra": "iterations: 304535\ncpu: 2290.201126307334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10571.836726974834,
            "unit": "ns/iter",
            "extra": "iterations: 66104\ncpu: 10571.351204163238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9301.381533468646,
            "unit": "ns/iter",
            "extra": "iterations: 75802\ncpu: 9300.807366560091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9565.305571486491,
            "unit": "ns/iter",
            "extra": "iterations: 73230\ncpu: 9564.71528062259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9008.086470996423,
            "unit": "ns/iter",
            "extra": "iterations: 77818\ncpu: 9007.942892390058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20501.023578403056,
            "unit": "ns/iter",
            "extra": "iterations: 34099\ncpu: 20500.73609196741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51958.6473140802,
            "unit": "ns/iter",
            "extra": "iterations: 13366\ncpu: 51956.09007930539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42231.005972130704,
            "unit": "ns/iter",
            "extra": "iterations: 16577\ncpu: 42230.39150630387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42111.26586120941,
            "unit": "ns/iter",
            "extra": "iterations: 16471\ncpu: 42111.46257057814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41468.36538688749,
            "unit": "ns/iter",
            "extra": "iterations: 16930\ncpu: 41468.157117542265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25806.345319531134,
            "unit": "ns/iter",
            "extra": "iterations: 27337\ncpu: 25805.71752569786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 59368.723099998984,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59366.539999999186 ns\nthreads: 1"
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
        "date": 1705775482336,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 575.867732601718,
            "unit": "ns/iter",
            "extra": "iterations: 1234847\ncpu: 575.8481010198026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5191.381959999717,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5190.972000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10132.266475123442,
            "unit": "ns/iter",
            "extra": "iterations: 82488\ncpu: 10131.708854621276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14977.963617463512,
            "unit": "ns/iter",
            "extra": "iterations: 55796\ncpu: 14976.946376084306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19600.008185956856,
            "unit": "ns/iter",
            "extra": "iterations: 42634\ncpu: 19598.991415302353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24619.144814944313,
            "unit": "ns/iter",
            "extra": "iterations: 34368\ncpu: 24617.236964618245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29032.634027069715,
            "unit": "ns/iter",
            "extra": "iterations: 26379\ncpu: 29030.588725880432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33624.521460854325,
            "unit": "ns/iter",
            "extra": "iterations: 24999\ncpu: 33622.492899715995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38226.276165939846,
            "unit": "ns/iter",
            "extra": "iterations: 22128\ncpu: 38223.025126536544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 518.6840172738255,
            "unit": "ns/iter",
            "extra": "iterations: 1350020\ncpu: 518.6503162916097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.41998259181474,
            "unit": "ns/iter",
            "extra": "iterations: 1715283\ncpu: 409.3838159650619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 404.8711907978263,
            "unit": "ns/iter",
            "extra": "iterations: 1729496\ncpu: 404.83533931272507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 409.77331038375746,
            "unit": "ns/iter",
            "extra": "iterations: 1710418\ncpu: 409.76229202452254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.6994576138248,
            "unit": "ns/iter",
            "extra": "iterations: 824689\ncpu: 847.643414669044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1743.4591398601553,
            "unit": "ns/iter",
            "extra": "iterations: 457414\ncpu: 1743.3244281985244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10439.360053167507,
            "unit": "ns/iter",
            "extra": "iterations: 78244\ncpu: 10438.287919840504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8014.5271745564205,
            "unit": "ns/iter",
            "extra": "iterations: 101308\ncpu: 8013.9890235716675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8051.606428898331,
            "unit": "ns/iter",
            "extra": "iterations: 100546\ncpu: 8051.195472718953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7498.047494185573,
            "unit": "ns/iter",
            "extra": "iterations: 107929\ncpu: 7497.52059224119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28121.57527156182,
            "unit": "ns/iter",
            "extra": "iterations: 29367\ncpu: 28118.84087581292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242011.2986324289,
            "unit": "ns/iter",
            "extra": "iterations: 3583\ncpu: 241990.7340217694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188161.61841532207,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 188149.6734871572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188457.9137630762,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 188448.71515679458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187824.68401648416,
            "unit": "ns/iter",
            "extra": "iterations: 4611\ncpu: 187819.1498590328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101924.10186916105,
            "unit": "ns/iter",
            "extra": "iterations: 8560\ncpu: 101917.6401869159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182522.49780105948,
            "unit": "ns/iter",
            "extra": "iterations: 4775\ncpu: 182521.3821989533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5541.830092784061,
            "unit": "ns/iter",
            "extra": "iterations: 147763\ncpu: 5541.500240249596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26877.501141883877,
            "unit": "ns/iter",
            "extra": "iterations: 31089\ncpu: 26876.776351764296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20977.33741167265,
            "unit": "ns/iter",
            "extra": "iterations: 40049\ncpu: 20975.76468825689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20846.408255151433,
            "unit": "ns/iter",
            "extra": "iterations: 39757\ncpu: 20844.978242825124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20020.893831216566,
            "unit": "ns/iter",
            "extra": "iterations: 42018\ncpu: 20019.57970393643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44889.666100434835,
            "unit": "ns/iter",
            "extra": "iterations: 18838\ncpu: 44886.872279435345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262426.1087413889,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 262409.1018323832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203085.89969606505,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 203066.47182604595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202936.9736104498,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 202919.29005137648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202459.43040635367,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 202440.61186361525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112238.70294194637,
            "unit": "ns/iter",
            "extra": "iterations: 7682\ncpu: 112231.58031762595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193497.80869951434,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 193479.87128273322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 819243.1903114303,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 819159.9480968817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453701.0663291111,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 453659.0886075942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2023.4524426764397,
            "unit": "ns/iter",
            "extra": "iterations: 402714\ncpu: 2023.100761334351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9390.331103678242,
            "unit": "ns/iter",
            "extra": "iterations: 69368\ncpu: 9389.97232153159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7236.225832256681,
            "unit": "ns/iter",
            "extra": "iterations: 113757\ncpu: 7235.709450846996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7709.716828720562,
            "unit": "ns/iter",
            "extra": "iterations: 106960\ncpu: 7709.306282722501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7466.078336284908,
            "unit": "ns/iter",
            "extra": "iterations: 110115\ncpu: 7465.661354038965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27518.24936094926,
            "unit": "ns/iter",
            "extra": "iterations: 30514\ncpu: 27517.038080880884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247430.55505743984,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 247412.7486690947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 187439.6752555282,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 187428.15161839832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188767.8695189274,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 188752.55427841714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 186502.85023237625,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 186489.96620194337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99408.3742643778,
            "unit": "ns/iter",
            "extra": "iterations: 8836\ncpu: 99401.07514712572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180195.84491213725,
            "unit": "ns/iter",
            "extra": "iterations: 4894\ncpu: 180187.18839395198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 189.64128631114517,
            "unit": "ns/iter",
            "extra": "iterations: 3692357\ncpu: 189.6277364296039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1438.1972677358754,
            "unit": "ns/iter",
            "extra": "iterations: 487581\ncpu: 1438.126383103527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1165.2079452872283,
            "unit": "ns/iter",
            "extra": "iterations: 603880\ncpu: 1165.1538385109598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1167.575173711771,
            "unit": "ns/iter",
            "extra": "iterations: 591929\ncpu: 1167.5422221246042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 832.8996401043917,
            "unit": "ns/iter",
            "extra": "iterations: 839688\ncpu: 832.8597050332955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9360.336339331807,
            "unit": "ns/iter",
            "extra": "iterations: 75183\ncpu: 9359.889868720345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11185.391947490823,
            "unit": "ns/iter",
            "extra": "iterations: 62465\ncpu: 11184.68742495804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2648.832372789065,
            "unit": "ns/iter",
            "extra": "iterations: 265995\ncpu: 2648.621214684495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2632.9671296818656,
            "unit": "ns/iter",
            "extra": "iterations: 265650\ncpu: 2632.706192358368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2627.20896953,
            "unit": "ns/iter",
            "extra": "iterations: 266034\ncpu: 2627.04391168047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5189.433458829004,
            "unit": "ns/iter",
            "extra": "iterations: 134135\ncpu: 5189.28243933354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4988.045121491726,
            "unit": "ns/iter",
            "extra": "iterations: 140709\ncpu: 4987.644713557743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1854.6931722235104,
            "unit": "ns/iter",
            "extra": "iterations: 369520\ncpu: 1854.5034098289755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9858.044990261722,
            "unit": "ns/iter",
            "extra": "iterations: 71371\ncpu: 9857.769962589711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7831.042124726072,
            "unit": "ns/iter",
            "extra": "iterations: 89781\ncpu: 7830.535413951741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7833.446411488345,
            "unit": "ns/iter",
            "extra": "iterations: 88853\ncpu: 7832.956681260109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7784.576726755458,
            "unit": "ns/iter",
            "extra": "iterations: 89923\ncpu: 7783.971842576465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18625.494536613525,
            "unit": "ns/iter",
            "extra": "iterations: 37431\ncpu: 18623.766396836665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52388.74841026385,
            "unit": "ns/iter",
            "extra": "iterations: 13367\ncpu: 52386.87065160432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41539.39951271458,
            "unit": "ns/iter",
            "extra": "iterations: 16828\ncpu: 41534.91205134371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42261.05228165426,
            "unit": "ns/iter",
            "extra": "iterations: 16545\ncpu: 42257.70927772684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41698.380188449955,
            "unit": "ns/iter",
            "extra": "iterations: 16768\ncpu: 41695.52719465624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24890.9328681361,
            "unit": "ns/iter",
            "extra": "iterations: 27945\ncpu: 24889.611737341078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41327.866819009905,
            "unit": "ns/iter",
            "extra": "iterations: 17067\ncpu: 41324.597175835836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2293.1102745270764,
            "unit": "ns/iter",
            "extra": "iterations: 304014\ncpu: 2293.047359661075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9841.746332959716,
            "unit": "ns/iter",
            "extra": "iterations: 70561\ncpu: 9841.226739983784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9191.300121984475,
            "unit": "ns/iter",
            "extra": "iterations: 76239\ncpu: 9191.15019871722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8704.770746409844,
            "unit": "ns/iter",
            "extra": "iterations: 80291\ncpu: 8704.584573613563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9361.545005250484,
            "unit": "ns/iter",
            "extra": "iterations: 74258\ncpu: 9361.101834145707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19495.495071958303,
            "unit": "ns/iter",
            "extra": "iterations: 34395\ncpu: 19494.56025585112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51877.30361030056,
            "unit": "ns/iter",
            "extra": "iterations: 13323\ncpu: 51873.01658785545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40928.14087313042,
            "unit": "ns/iter",
            "extra": "iterations: 17065\ncpu: 40927.32493407631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42409.00380687423,
            "unit": "ns/iter",
            "extra": "iterations: 16549\ncpu: 42407.10616955747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41017.68697430267,
            "unit": "ns/iter",
            "extra": "iterations: 17120\ncpu: 41015.58995327108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25325.211941038266,
            "unit": "ns/iter",
            "extra": "iterations: 24219\ncpu: 25323.568272844004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41552.78350214184,
            "unit": "ns/iter",
            "extra": "iterations: 17081\ncpu: 41551.12112873945 ns\nthreads: 1"
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
        "date": 1705778462215,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 558.3359290681822,
            "unit": "ns/iter",
            "extra": "iterations: 1252696\ncpu: 558.3107154489198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5167.63221999895,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5167.387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10014.78935825995,
            "unit": "ns/iter",
            "extra": "iterations: 83445\ncpu: 10014.350769968243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15007.468031932327,
            "unit": "ns/iter",
            "extra": "iterations: 55618\ncpu: 15006.512280197061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19810.072453421337,
            "unit": "ns/iter",
            "extra": "iterations: 42027\ncpu: 19809.38206391129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24869.831387691716,
            "unit": "ns/iter",
            "extra": "iterations: 33408\ncpu: 24868.130387931025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29918.032008514452,
            "unit": "ns/iter",
            "extra": "iterations: 28180\ncpu: 29915.81973030517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34616.35677522778,
            "unit": "ns/iter",
            "extra": "iterations: 24287\ncpu: 34615.633878206456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37814.44223683492,
            "unit": "ns/iter",
            "extra": "iterations: 21441\ncpu: 37811.4173779208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 554.5828465205067,
            "unit": "ns/iter",
            "extra": "iterations: 1320665\ncpu: 554.5622091900674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 412.51026615251163,
            "unit": "ns/iter",
            "extra": "iterations: 1691286\ncpu: 412.49977827522986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.71538287869527,
            "unit": "ns/iter",
            "extra": "iterations: 1709732\ncpu: 409.7046788619499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 416.2795219681356,
            "unit": "ns/iter",
            "extra": "iterations: 1682984\ncpu: 416.2605229758565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 867.0926528780618,
            "unit": "ns/iter",
            "extra": "iterations: 806656\ncpu: 867.0563412408758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1752.6851569758421,
            "unit": "ns/iter",
            "extra": "iterations: 454274\ncpu: 1752.5999727036994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10437.684487088329,
            "unit": "ns/iter",
            "extra": "iterations: 77645\ncpu: 10437.331444394364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7853.891404196238,
            "unit": "ns/iter",
            "extra": "iterations: 103853\ncpu: 7853.544914446386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7425.897827435015,
            "unit": "ns/iter",
            "extra": "iterations: 108121\ncpu: 7425.497359439889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7778.51104016355,
            "unit": "ns/iter",
            "extra": "iterations: 104301\ncpu: 7778.123891429622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27950.02703069965,
            "unit": "ns/iter",
            "extra": "iterations: 29448\ncpu: 27948.397174680715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 251050.91264369295,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 251042.09770114953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 193120.10167595872,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 193111.1284916201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 194211.85675736517,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 194205.64425455392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 193131.99665627576,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 193128.37717342828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102946.54650613511,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 102944.80642115207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186391.97187636237,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 186385.35852297087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5536.79397035614,
            "unit": "ns/iter",
            "extra": "iterations: 148765\ncpu: 5536.422545625649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27192.406447205994,
            "unit": "ns/iter",
            "extra": "iterations: 30742\ncpu: 27191.161928306647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20943.928890579715,
            "unit": "ns/iter",
            "extra": "iterations: 39390\ncpu: 20942.8205128205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21214.53248751299,
            "unit": "ns/iter",
            "extra": "iterations: 39646\ncpu: 21213.668465923452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20673.246127367664,
            "unit": "ns/iter",
            "extra": "iterations: 40670\ncpu: 20672.29899188591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46695.12335573106,
            "unit": "ns/iter",
            "extra": "iterations: 17713\ncpu: 46693.49630215094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267169.445879472,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 267152.3985239841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208420.66219776194,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 208416.66267656168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 208646.98246878825,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 208635.902977906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 207364.63727359663,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 207360.48617731137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 115361.42154131975,
            "unit": "ns/iter",
            "extra": "iterations: 7539\ncpu: 115353.26966441098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195696.7859237484,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 195690.61583577745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 824607.2945736757,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 824539.4487510801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 454571.1251924169,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 454547.10107747256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1974.9534318847072,
            "unit": "ns/iter",
            "extra": "iterations: 406759\ncpu: 1974.8536602754905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10459.417959836734,
            "unit": "ns/iter",
            "extra": "iterations: 78876\ncpu: 10459.026826918183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8088.366359334746,
            "unit": "ns/iter",
            "extra": "iterations: 102061\ncpu: 8088.0973143512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8058.955841657805,
            "unit": "ns/iter",
            "extra": "iterations: 101906\ncpu: 8058.646203363869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7701.741935786151,
            "unit": "ns/iter",
            "extra": "iterations: 106830\ncpu: 7701.473368903883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27394.91780911917,
            "unit": "ns/iter",
            "extra": "iterations: 30344\ncpu: 27394.47007645673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 248848.03066967824,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 248834.29938097988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189952.57204116744,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 189943.26758147567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189313.21072960997,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 189305.19313304638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187628.61049489657,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 187618.34470989785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100474.67250995823,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 100470.92771770105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181654.26298502326,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 181645.94539109085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 197.74722937299526,
            "unit": "ns/iter",
            "extra": "iterations: 3541978\ncpu: 197.73914462483964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1471.6114748141317,
            "unit": "ns/iter",
            "extra": "iterations: 476121\ncpu: 1471.5557599853921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1111.8445314319895,
            "unit": "ns/iter",
            "extra": "iterations: 665485\ncpu: 1111.8163444705747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1005.8419078034971,
            "unit": "ns/iter",
            "extra": "iterations: 695145\ncpu: 1005.8012357134121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 829.8493165790047,
            "unit": "ns/iter",
            "extra": "iterations: 843404\ncpu: 829.8060004458121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9264.984857750602,
            "unit": "ns/iter",
            "extra": "iterations: 75220\ncpu: 9264.663653283718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11472.062970063715,
            "unit": "ns/iter",
            "extra": "iterations: 61029\ncpu: 11471.379180389553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2723.945348692477,
            "unit": "ns/iter",
            "extra": "iterations: 256444\ncpu: 2723.8118263636493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2719.3380903814705,
            "unit": "ns/iter",
            "extra": "iterations: 257863\ncpu: 2719.2730248232547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2692.1372535430337,
            "unit": "ns/iter",
            "extra": "iterations: 259731\ncpu: 2692.010195163463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5222.472850000486,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5222.4199999999855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5262.126140605631,
            "unit": "ns/iter",
            "extra": "iterations: 133153\ncpu: 5262.056431323343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1946.6801200036223,
            "unit": "ns/iter",
            "extra": "iterations: 357656\ncpu: 1946.6490146956878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10402.913140830384,
            "unit": "ns/iter",
            "extra": "iterations: 68778\ncpu: 10402.736340108646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8189.412632581594,
            "unit": "ns/iter",
            "extra": "iterations: 86079\ncpu: 8188.794014800495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8114.059358717768,
            "unit": "ns/iter",
            "extra": "iterations: 86171\ncpu: 8113.997748662655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7894.960302992573,
            "unit": "ns/iter",
            "extra": "iterations: 88319\ncpu: 7894.75084636385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18686.154073594233,
            "unit": "ns/iter",
            "extra": "iterations: 37203\ncpu: 18685.294196704206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53391.113643286306,
            "unit": "ns/iter",
            "extra": "iterations: 13120\ncpu: 53390.34298780541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42466.24685230115,
            "unit": "ns/iter",
            "extra": "iterations: 16520\ncpu: 42465.08474576253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43021.783303625016,
            "unit": "ns/iter",
            "extra": "iterations: 16267\ncpu: 43020.30491178505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42922.08218676006,
            "unit": "ns/iter",
            "extra": "iterations: 16353\ncpu: 42922.252797651716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25142.54467273485,
            "unit": "ns/iter",
            "extra": "iterations: 27791\ncpu: 25141.707747112385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41654.728415758786,
            "unit": "ns/iter",
            "extra": "iterations: 16702\ncpu: 41653.1912345829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2414.92624902785,
            "unit": "ns/iter",
            "extra": "iterations: 288064\ncpu: 2414.8703065985587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 12081.823460288886,
            "unit": "ns/iter",
            "extra": "iterations: 57868\ncpu: 12081.729107624253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 10105.574695604972,
            "unit": "ns/iter",
            "extra": "iterations: 69482\ncpu: 10105.382689041728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8843.062194921085,
            "unit": "ns/iter",
            "extra": "iterations: 79283\ncpu: 8842.37856791501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8983.241163172906,
            "unit": "ns/iter",
            "extra": "iterations: 77856\ncpu: 8983.109843814176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19004.982753945602,
            "unit": "ns/iter",
            "extra": "iterations: 36878\ncpu: 19004.048484191237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54178.48991686812,
            "unit": "ns/iter",
            "extra": "iterations: 12992\ncpu: 54178.779248768646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43059.18036146842,
            "unit": "ns/iter",
            "extra": "iterations: 16101\ncpu: 43056.55549344708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42386.40481254032,
            "unit": "ns/iter",
            "extra": "iterations: 16457\ncpu: 42385.143100200024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43187.62278604562,
            "unit": "ns/iter",
            "extra": "iterations: 16317\ncpu: 43185.69589998171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25475.459879238646,
            "unit": "ns/iter",
            "extra": "iterations: 27492\ncpu: 25474.839953441027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43032.380428207936,
            "unit": "ns/iter",
            "extra": "iterations: 16534\ncpu: 43030.95439700057 ns\nthreads: 1"
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
        "date": 1705953607053,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.4891822404157,
            "unit": "ns/iter",
            "extra": "iterations: 1247347\ncpu: 559.4757513346326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5033.981120000135,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5033.861000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9760.532053456609,
            "unit": "ns/iter",
            "extra": "iterations: 85529\ncpu: 9760.291830841003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14596.776170629502,
            "unit": "ns/iter",
            "extra": "iterations: 57106\ncpu: 14596.401428921652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19349.822129698583,
            "unit": "ns/iter",
            "extra": "iterations: 42992\ncpu: 19349.483624860437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24351.669746628235,
            "unit": "ns/iter",
            "extra": "iterations: 34416\ncpu: 24350.595653184573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28958.28343230397,
            "unit": "ns/iter",
            "extra": "iterations: 28797\ncpu: 28957.582387054208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33980.80411163585,
            "unit": "ns/iter",
            "extra": "iterations: 24759\ncpu: 33980.7342784442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37180.95420018021,
            "unit": "ns/iter",
            "extra": "iterations: 22380\ncpu: 37180.49597855228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 521.3605836190084,
            "unit": "ns/iter",
            "extra": "iterations: 1344096\ncpu: 521.3540550674951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.1503386754778,
            "unit": "ns/iter",
            "extra": "iterations: 1707977\ncpu: 404.146952798544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 405.6313820016887,
            "unit": "ns/iter",
            "extra": "iterations: 1737856\ncpu: 405.6174389592694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 400.27392604140624,
            "unit": "ns/iter",
            "extra": "iterations: 1751115\ncpu: 400.26166185544645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 864.7874022256705,
            "unit": "ns/iter",
            "extra": "iterations: 810413\ncpu: 864.7009611148876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1755.3634563710498,
            "unit": "ns/iter",
            "extra": "iterations: 452544\ncpu: 1755.3742840475147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10341.578242168738,
            "unit": "ns/iter",
            "extra": "iterations: 78813\ncpu: 10341.51218707573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7856.101155176009,
            "unit": "ns/iter",
            "extra": "iterations: 103534\ncpu: 7855.916896864806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7867.2082594279755,
            "unit": "ns/iter",
            "extra": "iterations: 103736\ncpu: 7866.843718670473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7799.449709509895,
            "unit": "ns/iter",
            "extra": "iterations: 103618\ncpu: 7799.298384450572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27865.21712221247,
            "unit": "ns/iter",
            "extra": "iterations: 29891\ncpu: 27864.490983908247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244682.09456397904,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 244675.481313704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187918.83446313595,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 187909.51235512857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188347.9410869511,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 188344.21739130438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190647.64739883094,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 190642.00385356456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102462.11611926317,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 102460.1094805497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184625.54844837985,
            "unit": "ns/iter",
            "extra": "iterations: 4737\ncpu: 184615.89613679558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5589.282287457933,
            "unit": "ns/iter",
            "extra": "iterations: 146783\ncpu: 5589.163595239224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26753.387865372344,
            "unit": "ns/iter",
            "extra": "iterations: 30722\ncpu: 26752.893691817026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20962.383950615116,
            "unit": "ns/iter",
            "extra": "iterations: 39690\ncpu: 20961.6628873772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20864.08709101481,
            "unit": "ns/iter",
            "extra": "iterations: 39763\ncpu: 20863.94386741439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20728.224130592236,
            "unit": "ns/iter",
            "extra": "iterations: 39941\ncpu: 20727.723392003278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46109.88706037605,
            "unit": "ns/iter",
            "extra": "iterations: 18169\ncpu: 46109.940007705365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 264404.8075528734,
            "unit": "ns/iter",
            "extra": "iterations: 3310\ncpu: 264398.54984894226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205470.9076814677,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 205468.02912849496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203299.84527950356,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 203293.15704013038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201529.45013850663,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 201525.34626038696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 115010.89711879594,
            "unit": "ns/iter",
            "extra": "iterations: 7601\ncpu: 115005.65715037512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194366.34399460795,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 194360.83650190127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 820960.5986218833,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 820940.3962101653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 454765.06697339925,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 454750.25562372105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1912.5898098566188,
            "unit": "ns/iter",
            "extra": "iterations: 408218\ncpu: 1912.5758785746868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9442.555297285217,
            "unit": "ns/iter",
            "extra": "iterations: 86903\ncpu: 9442.556643614116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7673.9764160658,
            "unit": "ns/iter",
            "extra": "iterations: 106810\ncpu: 7673.766501263975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7450.927075957373,
            "unit": "ns/iter",
            "extra": "iterations: 110142\ncpu: 7450.830745764564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7169.000588140355,
            "unit": "ns/iter",
            "extra": "iterations: 112218\ncpu: 7168.759913739281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27013.121076957283,
            "unit": "ns/iter",
            "extra": "iterations: 30939\ncpu: 27012.970684249583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 248168.17042607005,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 248167.61347814015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188090.25080043956,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 188083.82070437577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188869.86515410303,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 188862.17893835698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 186719.74281488726,
            "unit": "ns/iter",
            "extra": "iterations: 4732\ncpu: 186719.63229078607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98427.7153374238,
            "unit": "ns/iter",
            "extra": "iterations: 8965\ncpu: 98426.01226993851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179769.71961664106,
            "unit": "ns/iter",
            "extra": "iterations: 4904\ncpu: 179768.47471451949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.51193730104,
            "unit": "ns/iter",
            "extra": "iterations: 3611034\ncpu: 193.50283049121077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1451.7222416651625,
            "unit": "ns/iter",
            "extra": "iterations: 482891\ncpu: 1451.7311360120602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1153.7104610604795,
            "unit": "ns/iter",
            "extra": "iterations: 630720\ncpu: 1153.686580416042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1100.3983069358617,
            "unit": "ns/iter",
            "extra": "iterations: 636361\ncpu: 1100.3751015539947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 849.5930152645683,
            "unit": "ns/iter",
            "extra": "iterations: 826488\ncpu: 849.567325841394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9225.97228170482,
            "unit": "ns/iter",
            "extra": "iterations: 75185\ncpu: 9225.648733125006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11684.663920454661,
            "unit": "ns/iter",
            "extra": "iterations: 59840\ncpu: 11684.640708556186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2660.565927041414,
            "unit": "ns/iter",
            "extra": "iterations: 264368\ncpu: 2660.536070931442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2675.484222716527,
            "unit": "ns/iter",
            "extra": "iterations: 261642\ncpu: 2675.501257443378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2651.321780521852,
            "unit": "ns/iter",
            "extra": "iterations: 263024\ncpu: 2651.2219417239585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5187.166509506924,
            "unit": "ns/iter",
            "extra": "iterations: 134683\ncpu: 5187.082259824883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5064.254984207285,
            "unit": "ns/iter",
            "extra": "iterations: 138989\ncpu: 5064.0640626236645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1913.1562956637783,
            "unit": "ns/iter",
            "extra": "iterations: 365442\ncpu: 1913.1005740993119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10143.170054200456,
            "unit": "ns/iter",
            "extra": "iterations: 69372\ncpu: 10142.899152395761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8090.623981063902,
            "unit": "ns/iter",
            "extra": "iterations: 86610\ncpu: 8090.3798637571135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8175.103728813073,
            "unit": "ns/iter",
            "extra": "iterations: 85550\ncpu: 8174.977206312106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7996.515717058094,
            "unit": "ns/iter",
            "extra": "iterations: 87071\ncpu: 7996.1927622285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18522.7111805396,
            "unit": "ns/iter",
            "extra": "iterations: 37449\ncpu: 18522.13143208088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51986.82494040392,
            "unit": "ns/iter",
            "extra": "iterations: 13424\ncpu: 51985.02681763974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41634.6627252632,
            "unit": "ns/iter",
            "extra": "iterations: 15815\ncpu: 41632.96237748912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42295.40796619869,
            "unit": "ns/iter",
            "extra": "iterations: 16570\ncpu: 42294.04948702411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42053.0015044878,
            "unit": "ns/iter",
            "extra": "iterations: 16617\ncpu: 42051.94680146893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24754.272225760717,
            "unit": "ns/iter",
            "extra": "iterations: 28278\ncpu: 24753.32060258866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41303.33590361063,
            "unit": "ns/iter",
            "extra": "iterations: 16600\ncpu: 41302.54819277143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2044.9152905154237,
            "unit": "ns/iter",
            "extra": "iterations: 342925\ncpu: 2044.9270248596858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10009.150476711486,
            "unit": "ns/iter",
            "extra": "iterations: 69539\ncpu: 10008.892851493563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9674.055481118656,
            "unit": "ns/iter",
            "extra": "iterations: 73142\ncpu: 9673.906920784206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9788.249071976275,
            "unit": "ns/iter",
            "extra": "iterations: 71927\ncpu: 9787.99755307456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8730.616459031848,
            "unit": "ns/iter",
            "extra": "iterations: 80831\ncpu: 8730.521705781177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18222.446039050606,
            "unit": "ns/iter",
            "extra": "iterations: 38463\ncpu: 18222.55414294255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51358.55686448512,
            "unit": "ns/iter",
            "extra": "iterations: 13497\ncpu: 51356.827443136004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41907.50614839696,
            "unit": "ns/iter",
            "extra": "iterations: 16671\ncpu: 41906.700257932775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42443.571307965874,
            "unit": "ns/iter",
            "extra": "iterations: 16583\ncpu: 42443.32750407093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41547.87869980688,
            "unit": "ns/iter",
            "extra": "iterations: 16859\ncpu: 41547.339699863114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26131.245944940743,
            "unit": "ns/iter",
            "extra": "iterations: 26880\ncpu: 26130.907738095142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42042.76057664303,
            "unit": "ns/iter",
            "extra": "iterations: 16995\ncpu: 42042.05354515987 ns\nthreads: 1"
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
        "date": 1705955635353,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.986096396056,
            "unit": "ns/iter",
            "extra": "iterations: 1235507\ncpu: 559.9485879076364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5093.777409999802,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5093.747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10022.387777073302,
            "unit": "ns/iter",
            "extra": "iterations: 83597\ncpu: 10022.455351268582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14785.096358554449,
            "unit": "ns/iter",
            "extra": "iterations: 55802\ncpu: 14784.801620013614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19697.938847484715,
            "unit": "ns/iter",
            "extra": "iterations: 42533\ncpu: 19697.260950320924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24346.007444168845,
            "unit": "ns/iter",
            "extra": "iterations: 34255\ncpu: 24343.754196467667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29944.045836407455,
            "unit": "ns/iter",
            "extra": "iterations: 28449\ncpu: 29943.91015501425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34228.026258657905,
            "unit": "ns/iter",
            "extra": "iterations: 24411\ncpu: 34226.64782270288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38562.46471647195,
            "unit": "ns/iter",
            "extra": "iterations: 22220\ncpu: 38560.41854185415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 519.5670365717739,
            "unit": "ns/iter",
            "extra": "iterations: 1341335\ncpu: 519.559543290826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.50561399753917,
            "unit": "ns/iter",
            "extra": "iterations: 1719274\ncpu: 405.4770792788117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 403.8971771099635,
            "unit": "ns/iter",
            "extra": "iterations: 1746508\ncpu: 403.8702943244464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.28166636902586,
            "unit": "ns/iter",
            "extra": "iterations: 1713474\ncpu: 407.25409314643866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 850.7594207852686,
            "unit": "ns/iter",
            "extra": "iterations: 819040\ncpu: 850.7144950185588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1783.9243086779093,
            "unit": "ns/iter",
            "extra": "iterations: 454636\ncpu: 1783.9201031154578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10063.018792872937,
            "unit": "ns/iter",
            "extra": "iterations: 81201\ncpu: 10062.665484415218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7703.500488452459,
            "unit": "ns/iter",
            "extra": "iterations: 105435\ncpu: 7703.128942002179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7680.512166805544,
            "unit": "ns/iter",
            "extra": "iterations: 106807\ncpu: 7680.384244478383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7364.357827243771,
            "unit": "ns/iter",
            "extra": "iterations: 110109\ncpu: 7364.4016383765165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28120.32978180158,
            "unit": "ns/iter",
            "extra": "iterations: 29377\ncpu: 28119.50845899852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242971.06792775643,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 242968.67297219744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 191993.53283550154,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 191988.5569953878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 193144.42787609185,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 193141.65929203565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 192517.48381414133,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 192508.25809293086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101791.90092084775,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 101789.94055251198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182487.33096531173,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 182481.52946092718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5621.713697255024,
            "unit": "ns/iter",
            "extra": "iterations: 144445\ncpu: 5621.639378310097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27087.676862997127,
            "unit": "ns/iter",
            "extra": "iterations: 30730\ncpu: 27086.27074520013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20924.407961830468,
            "unit": "ns/iter",
            "extra": "iterations: 39614\ncpu: 20889.226031201022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20670.336043564224,
            "unit": "ns/iter",
            "extra": "iterations: 40218\ncpu: 20669.508677706464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20552.24456132307,
            "unit": "ns/iter",
            "extra": "iterations: 40497\ncpu: 20551.230955379408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44078.86474944468,
            "unit": "ns/iter",
            "extra": "iterations: 18499\ncpu: 44076.65279204292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 262039.0814547553,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 262020.7394048699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203130.59755808892,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 203127.89387179993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202073.0729723296,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202068.0455496171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203201.2700934612,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 203197.8271028027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113662.08916863118,
            "unit": "ns/iter",
            "extra": "iterations: 7626\ncpu: 113660.92315761851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193861.79668139754,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 193860.08849557507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 814266.6438941284,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 814223.9965841215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 446189.96635330125,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 446161.3062840199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2011.43954336165,
            "unit": "ns/iter",
            "extra": "iterations: 398302\ncpu: 2011.3777987557112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10899.952510051462,
            "unit": "ns/iter",
            "extra": "iterations: 76353\ncpu: 10899.181433604414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7684.20891659321,
            "unit": "ns/iter",
            "extra": "iterations: 101227\ncpu: 7683.891649461136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7848.226386526219,
            "unit": "ns/iter",
            "extra": "iterations: 101711\ncpu: 7847.761795676002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7409.319785145889,
            "unit": "ns/iter",
            "extra": "iterations: 111331\ncpu: 7409.1564793273865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27137.831366046226,
            "unit": "ns/iter",
            "extra": "iterations: 30753\ncpu: 27136.94598900936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 248577.46683527122,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 248568.57785272712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188354.4688566664,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 188348.9334470992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186937.79702127186,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 186930.87234042684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185379.00084050896,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 185377.13805421419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98839.95902658983,
            "unit": "ns/iter",
            "extra": "iterations: 8835\ncpu: 98835.80079230343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181396.45649042045,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 181394.0135774545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 196.10496714271414,
            "unit": "ns/iter",
            "extra": "iterations: 3575919\ncpu: 196.09524153091846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1436.8400947169741,
            "unit": "ns/iter",
            "extra": "iterations: 503817\ncpu: 1436.8252758441931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1155.926474015513,
            "unit": "ns/iter",
            "extra": "iterations: 604997\ncpu: 1155.9096987257806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1104.1160067681917,
            "unit": "ns/iter",
            "extra": "iterations: 635325\ncpu: 1104.093810254594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 828.9553125571655,
            "unit": "ns/iter",
            "extra": "iterations: 843078\ncpu: 828.926979472838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9274.015956883055,
            "unit": "ns/iter",
            "extra": "iterations: 75328\ncpu: 9273.859653780808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11125.408652080114,
            "unit": "ns/iter",
            "extra": "iterations: 62667\ncpu: 11125.094547369355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2624.9702219999003,
            "unit": "ns/iter",
            "extra": "iterations: 265901\ncpu: 2624.835935178884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2643.0476014429005,
            "unit": "ns/iter",
            "extra": "iterations: 265076\ncpu: 2643.017096983503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2633.1455204228214,
            "unit": "ns/iter",
            "extra": "iterations: 265784\ncpu: 2633.0362249044483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5179.595793907349,
            "unit": "ns/iter",
            "extra": "iterations: 134852\ncpu: 5179.631002877198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5052.193529415766,
            "unit": "ns/iter",
            "extra": "iterations: 137731\ncpu: 5052.038393680458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1936.2560903622507,
            "unit": "ns/iter",
            "extra": "iterations: 364223\ncpu: 1936.1361034311499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9967.163479527044,
            "unit": "ns/iter",
            "extra": "iterations: 70021\ncpu: 9966.789963011022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8111.807736627246,
            "unit": "ns/iter",
            "extra": "iterations: 86782\ncpu: 8111.455140466931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8118.129507570172,
            "unit": "ns/iter",
            "extra": "iterations: 86327\ncpu: 8118.191295886452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7967.948260329952,
            "unit": "ns/iter",
            "extra": "iterations: 87689\ncpu: 7967.4782469865795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18783.118468837565,
            "unit": "ns/iter",
            "extra": "iterations: 37723\ncpu: 18782.679002200297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52175.01339756366,
            "unit": "ns/iter",
            "extra": "iterations: 13286\ncpu: 52173.72422098498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41700.272240084545,
            "unit": "ns/iter",
            "extra": "iterations: 16794\ncpu: 41699.19018697219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42140.58369897918,
            "unit": "ns/iter",
            "extra": "iterations: 16637\ncpu: 42139.0995972837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41800.10479382129,
            "unit": "ns/iter",
            "extra": "iterations: 16709\ncpu: 41799.56310970113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24847.03538974979,
            "unit": "ns/iter",
            "extra": "iterations: 28172\ncpu: 24846.333238676587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41203.00932442145,
            "unit": "ns/iter",
            "extra": "iterations: 17052\ncpu: 41203.28407224955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1879.5182172437258,
            "unit": "ns/iter",
            "extra": "iterations: 372614\ncpu: 1879.472859312859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9891.593720765355,
            "unit": "ns/iter",
            "extra": "iterations: 70550\ncpu: 9891.262934089415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9880.697955195175,
            "unit": "ns/iter",
            "extra": "iterations: 71645\ncpu: 9880.001395770865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9249.88269228115,
            "unit": "ns/iter",
            "extra": "iterations: 75059\ncpu: 9249.469084320357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9097.779984918658,
            "unit": "ns/iter",
            "extra": "iterations: 76922\ncpu: 9097.46106445491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19803.836267357514,
            "unit": "ns/iter",
            "extra": "iterations: 35503\ncpu: 19803.734895642567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51139.85204951359,
            "unit": "ns/iter",
            "extra": "iterations: 13491\ncpu: 51139.085316136596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41927.83024524771,
            "unit": "ns/iter",
            "extra": "iterations: 16677\ncpu: 41927.43898782796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42332.10394546263,
            "unit": "ns/iter",
            "extra": "iterations: 16576\ncpu: 42330.74324324334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41119.32103993483,
            "unit": "ns/iter",
            "extra": "iterations: 17001\ncpu: 41117.281336392036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26452.663288075513,
            "unit": "ns/iter",
            "extra": "iterations: 26441\ncpu: 26450.95873832328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42634.65911949483,
            "unit": "ns/iter",
            "extra": "iterations: 16695\ncpu: 42633.16561844859 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}