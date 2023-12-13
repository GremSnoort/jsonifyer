window.BENCHMARK_DATA = {
  "lastUpdate": 1702492947930,
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
      }
    ]
  }
}