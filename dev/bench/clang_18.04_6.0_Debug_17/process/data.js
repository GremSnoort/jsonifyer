window.BENCHMARK_DATA = {
  "lastUpdate": 1702394179594,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-6.0 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392452312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18229.943834553356,
            "unit": "ns/iter",
            "extra": "iterations: 39989\ncpu: 18228.702893295656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 166190.52528200875,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166179.98833138854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 312842.1201731944,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 312811.22338505957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 457207.7761352143,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 457181.4677930305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 609617.0139178844,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 609570.076548365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 609132.618999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609090.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 727101.6776989897,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 727059.8896769112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 860737.4748398323,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 860711.985361391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 968731.338877335,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 968681.2889812894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14428.305233638572,
            "unit": "ns/iter",
            "extra": "iterations: 48494\ncpu: 14427.502371427403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11775.008382285958,
            "unit": "ns/iter",
            "extra": "iterations: 59411\ncpu: 11774.3767989093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11734.073987199652,
            "unit": "ns/iter",
            "extra": "iterations: 59686\ncpu: 11733.495292028292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11749.658575073816,
            "unit": "ns/iter",
            "extra": "iterations: 59568\ncpu: 11749.335213537473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19878.821974215683,
            "unit": "ns/iter",
            "extra": "iterations: 35214\ncpu: 19877.673652524565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69162.49172078338,
            "unit": "ns/iter",
            "extra": "iterations: 12320\ncpu: 69158.62824675321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357939.7119565279,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 357923.41137123754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288087.7174206769,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288071.471978393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288710.6848156765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 288692.2556645252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282819.6616965119,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 282802.25314777985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603693.7449999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603661.2000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5146350.882681511,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5146076.536312843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4153692.3794639944,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153508.928571438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4160391.500000011,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4160109.3749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4219461.440909423,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4219323.636363644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2346448.484771663,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2346306.8527918807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4047080.6140348758,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4046777.6315789404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15722557.283581082,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15722108.955223905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6823719.070000607,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6823422.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19621216.629631095,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19620464.8148148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75771.2930696682,
            "unit": "ns/iter",
            "extra": "iterations: 11226\ncpu: 75765.93621949024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 404103.3534117827,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 404078.4941176479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 321430.75037538435,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 321407.13213213265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 318655.14802383556,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 318638.73974645726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 314861.8817679832,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 314847.7348066291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583178.8579999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583161.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5236507.617978072,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5236179.775280863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4237861.90867603,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4237553.881278525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4235966.275229861,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4234559.633027512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4287191.975490201,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4286436.764705905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2386271.5449870084,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2386067.095115696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4105228.703539789,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4105010.176991161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16015595.388059627,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 16014076.119403034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7091229.36999961,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7090875.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67389.30888765365,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 67381.68556251508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354920.54511586885,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 354912.4586092728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282118.5085752006,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282103.7928759885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 291578.2860544,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 291565.7823129238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285859.8900366633,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 285840.1866044656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553967.5600000465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553961.9000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5185922.177777987,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5185603.888888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4174203.294642861,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4173995.982142869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4179235.0941699985,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4179039.9103139155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4226015.755656121,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4225826.696832574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2358941.936224466,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2358851.7857142803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4049543.1913042087,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4049299.130434778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6733.318627451877,
            "unit": "ns/iter",
            "extra": "iterations: 104040\ncpu: 6733.111303344864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43824.92326004267,
            "unit": "ns/iter",
            "extra": "iterations: 15963\ncpu: 43821.111319927346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34636.99118604985,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 34633.87622149819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32070.008347860265,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 32067.805705898463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25858.92981092787,
            "unit": "ns/iter",
            "extra": "iterations: 27027\ncpu: 25857.53875753845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 204078.3351841045,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 204063.4424313264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 345962.72758787364,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 345934.27439326345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85233.28970480591,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85222.87143205554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85413.00824241592,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 85407.45454545437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85615.91605661304,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85612.72571986298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165214.61416763865,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165210.10625737748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 163384.83278918033,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 163380.9934701518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50980.59139154796,
            "unit": "ns/iter",
            "extra": "iterations: 13661\ncpu: 50976.985579386564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 252751.60347951142,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 252733.4903950736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 206846.2056047304,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 206819.88200589854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 206303.82318327326,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 206294.52780229258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 207131.79390893792,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 207106.26848019176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 366266.0596234348,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 366252.7719665204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1469833.8846959628,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1469716.9811320684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1215208.3437501441,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215130.729166668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1222953.7360139675,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1222892.3076923182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1241975.6307421403,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1241942.9328621938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 765300.078774562,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765255.4704595197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1206850.7607573213,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1206733.046471602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52189.54268247007,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 52185.97629165675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 257390.40845589965,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 257374.926470585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 209624.9841222328,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 209616.38705812112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 211432.63630862767,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211420.57488653628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 210484.17593985668,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 210479.21804511457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 377624.5874730113,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 377599.78401727654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1456313.6012526753,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1456298.3298538586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1216954.3778163027,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1216924.9566724591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1214871.092657318,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1214795.6293706405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1224586.6748252446,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1224515.7342657356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 770100.2266226715,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 770039.4939494052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1212769.278546678,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212648.7889273195 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392452312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18229.943834553356,
            "unit": "ns/iter",
            "extra": "iterations: 39989\ncpu: 18228.702893295656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 166190.52528200875,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166179.98833138854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 312842.1201731944,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 312811.22338505957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 457207.7761352143,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 457181.4677930305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 609617.0139178844,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 609570.076548365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 609132.618999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609090.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 727101.6776989897,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 727059.8896769112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 860737.4748398323,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 860711.985361391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 968731.338877335,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 968681.2889812894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14428.305233638572,
            "unit": "ns/iter",
            "extra": "iterations: 48494\ncpu: 14427.502371427403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11775.008382285958,
            "unit": "ns/iter",
            "extra": "iterations: 59411\ncpu: 11774.3767989093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11734.073987199652,
            "unit": "ns/iter",
            "extra": "iterations: 59686\ncpu: 11733.495292028292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11749.658575073816,
            "unit": "ns/iter",
            "extra": "iterations: 59568\ncpu: 11749.335213537473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19878.821974215683,
            "unit": "ns/iter",
            "extra": "iterations: 35214\ncpu: 19877.673652524565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69162.49172078338,
            "unit": "ns/iter",
            "extra": "iterations: 12320\ncpu: 69158.62824675321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357939.7119565279,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 357923.41137123754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288087.7174206769,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288071.471978393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288710.6848156765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 288692.2556645252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282819.6616965119,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 282802.25314777985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603693.7449999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603661.2000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5146350.882681511,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5146076.536312843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4153692.3794639944,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153508.928571438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4160391.500000011,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4160109.3749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4219461.440909423,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4219323.636363644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2346448.484771663,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2346306.8527918807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4047080.6140348758,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4046777.6315789404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15722557.283581082,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15722108.955223905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6823719.070000607,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6823422.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19621216.629631095,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19620464.8148148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75771.2930696682,
            "unit": "ns/iter",
            "extra": "iterations: 11226\ncpu: 75765.93621949024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 404103.3534117827,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 404078.4941176479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 321430.75037538435,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 321407.13213213265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 318655.14802383556,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 318638.73974645726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 314861.8817679832,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 314847.7348066291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583178.8579999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583161.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5236507.617978072,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5236179.775280863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4237861.90867603,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4237553.881278525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4235966.275229861,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4234559.633027512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4287191.975490201,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4286436.764705905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2386271.5449870084,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2386067.095115696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4105228.703539789,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4105010.176991161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16015595.388059627,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 16014076.119403034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7091229.36999961,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7090875.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67389.30888765365,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 67381.68556251508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354920.54511586885,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 354912.4586092728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282118.5085752006,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282103.7928759885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 291578.2860544,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 291565.7823129238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285859.8900366633,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 285840.1866044656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553967.5600000465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553961.9000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5185922.177777987,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5185603.888888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4174203.294642861,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4173995.982142869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4179235.0941699985,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4179039.9103139155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4226015.755656121,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4225826.696832574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2358941.936224466,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2358851.7857142803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4049543.1913042087,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4049299.130434778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6733.318627451877,
            "unit": "ns/iter",
            "extra": "iterations: 104040\ncpu: 6733.111303344864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43824.92326004267,
            "unit": "ns/iter",
            "extra": "iterations: 15963\ncpu: 43821.111319927346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34636.99118604985,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 34633.87622149819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32070.008347860265,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 32067.805705898463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25858.92981092787,
            "unit": "ns/iter",
            "extra": "iterations: 27027\ncpu: 25857.53875753845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 204078.3351841045,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 204063.4424313264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 345962.72758787364,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 345934.27439326345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85233.28970480591,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85222.87143205554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85413.00824241592,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 85407.45454545437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85615.91605661304,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85612.72571986298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165214.61416763865,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165210.10625737748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 163384.83278918033,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 163380.9934701518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50980.59139154796,
            "unit": "ns/iter",
            "extra": "iterations: 13661\ncpu: 50976.985579386564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 252751.60347951142,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 252733.4903950736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 206846.2056047304,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 206819.88200589854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 206303.82318327326,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 206294.52780229258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 207131.79390893792,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 207106.26848019176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 366266.0596234348,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 366252.7719665204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1469833.8846959628,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1469716.9811320684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1215208.3437501441,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215130.729166668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1222953.7360139675,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1222892.3076923182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1241975.6307421403,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1241942.9328621938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 765300.078774562,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765255.4704595197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1206850.7607573213,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1206733.046471602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52189.54268247007,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 52185.97629165675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 257390.40845589965,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 257374.926470585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 209624.9841222328,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 209616.38705812112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 211432.63630862767,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211420.57488653628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 210484.17593985668,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 210479.21804511457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 377624.5874730113,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 377599.78401727654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1456313.6012526753,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1456298.3298538586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1216954.3778163027,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1216924.9566724591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1214871.092657318,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1214795.6293706405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1224586.6748252446,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1224515.7342657356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 770100.2266226715,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 770039.4939494052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1212769.278546678,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212648.7889273195 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392452312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18229.943834553356,
            "unit": "ns/iter",
            "extra": "iterations: 39989\ncpu: 18228.702893295656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 166190.52528200875,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166179.98833138854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 312842.1201731944,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 312811.22338505957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 457207.7761352143,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 457181.4677930305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 609617.0139178844,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 609570.076548365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 609132.618999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609090.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 727101.6776989897,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 727059.8896769112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 860737.4748398323,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 860711.985361391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 968731.338877335,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 968681.2889812894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14428.305233638572,
            "unit": "ns/iter",
            "extra": "iterations: 48494\ncpu: 14427.502371427403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11775.008382285958,
            "unit": "ns/iter",
            "extra": "iterations: 59411\ncpu: 11774.3767989093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11734.073987199652,
            "unit": "ns/iter",
            "extra": "iterations: 59686\ncpu: 11733.495292028292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11749.658575073816,
            "unit": "ns/iter",
            "extra": "iterations: 59568\ncpu: 11749.335213537473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19878.821974215683,
            "unit": "ns/iter",
            "extra": "iterations: 35214\ncpu: 19877.673652524565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69162.49172078338,
            "unit": "ns/iter",
            "extra": "iterations: 12320\ncpu: 69158.62824675321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357939.7119565279,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 357923.41137123754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288087.7174206769,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288071.471978393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288710.6848156765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 288692.2556645252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282819.6616965119,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 282802.25314777985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603693.7449999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603661.2000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5146350.882681511,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5146076.536312843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4153692.3794639944,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153508.928571438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4160391.500000011,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4160109.3749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4219461.440909423,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4219323.636363644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2346448.484771663,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2346306.8527918807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4047080.6140348758,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4046777.6315789404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15722557.283581082,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15722108.955223905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6823719.070000607,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6823422.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19621216.629631095,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19620464.8148148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75771.2930696682,
            "unit": "ns/iter",
            "extra": "iterations: 11226\ncpu: 75765.93621949024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 404103.3534117827,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 404078.4941176479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 321430.75037538435,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 321407.13213213265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 318655.14802383556,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 318638.73974645726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 314861.8817679832,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 314847.7348066291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583178.8579999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583161.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5236507.617978072,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5236179.775280863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4237861.90867603,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4237553.881278525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4235966.275229861,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4234559.633027512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4287191.975490201,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4286436.764705905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2386271.5449870084,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2386067.095115696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4105228.703539789,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4105010.176991161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16015595.388059627,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 16014076.119403034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7091229.36999961,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7090875.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67389.30888765365,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 67381.68556251508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354920.54511586885,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 354912.4586092728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282118.5085752006,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282103.7928759885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 291578.2860544,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 291565.7823129238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285859.8900366633,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 285840.1866044656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553967.5600000465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553961.9000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5185922.177777987,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5185603.888888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4174203.294642861,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4173995.982142869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4179235.0941699985,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4179039.9103139155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4226015.755656121,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4225826.696832574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2358941.936224466,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2358851.7857142803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4049543.1913042087,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4049299.130434778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6733.318627451877,
            "unit": "ns/iter",
            "extra": "iterations: 104040\ncpu: 6733.111303344864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43824.92326004267,
            "unit": "ns/iter",
            "extra": "iterations: 15963\ncpu: 43821.111319927346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34636.99118604985,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 34633.87622149819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32070.008347860265,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 32067.805705898463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25858.92981092787,
            "unit": "ns/iter",
            "extra": "iterations: 27027\ncpu: 25857.53875753845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 204078.3351841045,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 204063.4424313264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 345962.72758787364,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 345934.27439326345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85233.28970480591,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85222.87143205554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85413.00824241592,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 85407.45454545437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85615.91605661304,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85612.72571986298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165214.61416763865,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165210.10625737748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 163384.83278918033,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 163380.9934701518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50980.59139154796,
            "unit": "ns/iter",
            "extra": "iterations: 13661\ncpu: 50976.985579386564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 252751.60347951142,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 252733.4903950736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 206846.2056047304,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 206819.88200589854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 206303.82318327326,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 206294.52780229258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 207131.79390893792,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 207106.26848019176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 366266.0596234348,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 366252.7719665204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1469833.8846959628,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1469716.9811320684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1215208.3437501441,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215130.729166668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1222953.7360139675,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1222892.3076923182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1241975.6307421403,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1241942.9328621938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 765300.078774562,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765255.4704595197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1206850.7607573213,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1206733.046471602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52189.54268247007,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 52185.97629165675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 257390.40845589965,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 257374.926470585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 209624.9841222328,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 209616.38705812112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 211432.63630862767,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211420.57488653628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 210484.17593985668,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 210479.21804511457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 377624.5874730113,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 377599.78401727654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1456313.6012526753,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1456298.3298538586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1216954.3778163027,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1216924.9566724591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1214871.092657318,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1214795.6293706405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1224586.6748252446,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1224515.7342657356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 770100.2266226715,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 770039.4939494052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1212769.278546678,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212648.7889273195 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392452312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18229.943834553356,
            "unit": "ns/iter",
            "extra": "iterations: 39989\ncpu: 18228.702893295656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 166190.52528200875,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166179.98833138854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 312842.1201731944,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 312811.22338505957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 457207.7761352143,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 457181.4677930305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 609617.0139178844,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 609570.076548365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 609132.618999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609090.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 727101.6776989897,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 727059.8896769112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 860737.4748398323,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 860711.985361391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 968731.338877335,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 968681.2889812894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14428.305233638572,
            "unit": "ns/iter",
            "extra": "iterations: 48494\ncpu: 14427.502371427403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11775.008382285958,
            "unit": "ns/iter",
            "extra": "iterations: 59411\ncpu: 11774.3767989093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11734.073987199652,
            "unit": "ns/iter",
            "extra": "iterations: 59686\ncpu: 11733.495292028292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11749.658575073816,
            "unit": "ns/iter",
            "extra": "iterations: 59568\ncpu: 11749.335213537473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19878.821974215683,
            "unit": "ns/iter",
            "extra": "iterations: 35214\ncpu: 19877.673652524565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69162.49172078338,
            "unit": "ns/iter",
            "extra": "iterations: 12320\ncpu: 69158.62824675321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357939.7119565279,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 357923.41137123754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288087.7174206769,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288071.471978393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288710.6848156765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 288692.2556645252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282819.6616965119,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 282802.25314777985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603693.7449999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603661.2000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5146350.882681511,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5146076.536312843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4153692.3794639944,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153508.928571438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4160391.500000011,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4160109.3749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4219461.440909423,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4219323.636363644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2346448.484771663,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2346306.8527918807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4047080.6140348758,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4046777.6315789404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15722557.283581082,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15722108.955223905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6823719.070000607,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6823422.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19621216.629631095,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19620464.8148148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75771.2930696682,
            "unit": "ns/iter",
            "extra": "iterations: 11226\ncpu: 75765.93621949024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 404103.3534117827,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 404078.4941176479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 321430.75037538435,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 321407.13213213265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 318655.14802383556,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 318638.73974645726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 314861.8817679832,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 314847.7348066291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583178.8579999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583161.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5236507.617978072,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5236179.775280863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4237861.90867603,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4237553.881278525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4235966.275229861,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4234559.633027512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4287191.975490201,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4286436.764705905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2386271.5449870084,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2386067.095115696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4105228.703539789,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4105010.176991161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16015595.388059627,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 16014076.119403034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7091229.36999961,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7090875.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67389.30888765365,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 67381.68556251508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354920.54511586885,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 354912.4586092728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282118.5085752006,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282103.7928759885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 291578.2860544,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 291565.7823129238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285859.8900366633,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 285840.1866044656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553967.5600000465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553961.9000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5185922.177777987,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5185603.888888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4174203.294642861,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4173995.982142869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4179235.0941699985,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4179039.9103139155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4226015.755656121,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4225826.696832574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2358941.936224466,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2358851.7857142803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4049543.1913042087,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4049299.130434778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6733.318627451877,
            "unit": "ns/iter",
            "extra": "iterations: 104040\ncpu: 6733.111303344864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43824.92326004267,
            "unit": "ns/iter",
            "extra": "iterations: 15963\ncpu: 43821.111319927346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34636.99118604985,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 34633.87622149819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32070.008347860265,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 32067.805705898463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25858.92981092787,
            "unit": "ns/iter",
            "extra": "iterations: 27027\ncpu: 25857.53875753845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 204078.3351841045,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 204063.4424313264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 345962.72758787364,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 345934.27439326345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85233.28970480591,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85222.87143205554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85413.00824241592,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 85407.45454545437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85615.91605661304,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85612.72571986298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165214.61416763865,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165210.10625737748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 163384.83278918033,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 163380.9934701518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50980.59139154796,
            "unit": "ns/iter",
            "extra": "iterations: 13661\ncpu: 50976.985579386564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 252751.60347951142,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 252733.4903950736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 206846.2056047304,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 206819.88200589854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 206303.82318327326,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 206294.52780229258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 207131.79390893792,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 207106.26848019176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 366266.0596234348,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 366252.7719665204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1469833.8846959628,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1469716.9811320684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1215208.3437501441,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215130.729166668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1222953.7360139675,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1222892.3076923182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1241975.6307421403,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1241942.9328621938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 765300.078774562,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765255.4704595197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1206850.7607573213,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1206733.046471602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52189.54268247007,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 52185.97629165675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 257390.40845589965,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 257374.926470585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 209624.9841222328,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 209616.38705812112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 211432.63630862767,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211420.57488653628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 210484.17593985668,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 210479.21804511457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 377624.5874730113,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 377599.78401727654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1456313.6012526753,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1456298.3298538586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1216954.3778163027,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1216924.9566724591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1214871.092657318,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1214795.6293706405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1224586.6748252446,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1224515.7342657356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 770100.2266226715,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 770039.4939494052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1212769.278546678,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212648.7889273195 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392452312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18229.943834553356,
            "unit": "ns/iter",
            "extra": "iterations: 39989\ncpu: 18228.702893295656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 166190.52528200875,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166179.98833138854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 312842.1201731944,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 312811.22338505957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 457207.7761352143,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 457181.4677930305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 609617.0139178844,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 609570.076548365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 609132.618999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609090.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 727101.6776989897,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 727059.8896769112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 860737.4748398323,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 860711.985361391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 968731.338877335,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 968681.2889812894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14428.305233638572,
            "unit": "ns/iter",
            "extra": "iterations: 48494\ncpu: 14427.502371427403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11775.008382285958,
            "unit": "ns/iter",
            "extra": "iterations: 59411\ncpu: 11774.3767989093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11734.073987199652,
            "unit": "ns/iter",
            "extra": "iterations: 59686\ncpu: 11733.495292028292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11749.658575073816,
            "unit": "ns/iter",
            "extra": "iterations: 59568\ncpu: 11749.335213537473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19878.821974215683,
            "unit": "ns/iter",
            "extra": "iterations: 35214\ncpu: 19877.673652524565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69162.49172078338,
            "unit": "ns/iter",
            "extra": "iterations: 12320\ncpu: 69158.62824675321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357939.7119565279,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 357923.41137123754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288087.7174206769,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288071.471978393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288710.6848156765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 288692.2556645252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282819.6616965119,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 282802.25314777985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603693.7449999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603661.2000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5146350.882681511,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5146076.536312843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4153692.3794639944,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153508.928571438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4160391.500000011,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4160109.3749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4219461.440909423,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4219323.636363644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2346448.484771663,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2346306.8527918807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4047080.6140348758,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4046777.6315789404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15722557.283581082,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15722108.955223905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6823719.070000607,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6823422.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19621216.629631095,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19620464.8148148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75771.2930696682,
            "unit": "ns/iter",
            "extra": "iterations: 11226\ncpu: 75765.93621949024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 404103.3534117827,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 404078.4941176479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 321430.75037538435,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 321407.13213213265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 318655.14802383556,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 318638.73974645726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 314861.8817679832,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 314847.7348066291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583178.8579999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583161.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5236507.617978072,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5236179.775280863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4237861.90867603,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4237553.881278525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4235966.275229861,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4234559.633027512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4287191.975490201,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4286436.764705905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2386271.5449870084,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2386067.095115696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4105228.703539789,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4105010.176991161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16015595.388059627,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 16014076.119403034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7091229.36999961,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7090875.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67389.30888765365,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 67381.68556251508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354920.54511586885,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 354912.4586092728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282118.5085752006,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282103.7928759885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 291578.2860544,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 291565.7823129238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285859.8900366633,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 285840.1866044656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553967.5600000465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553961.9000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5185922.177777987,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5185603.888888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4174203.294642861,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4173995.982142869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4179235.0941699985,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4179039.9103139155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4226015.755656121,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4225826.696832574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2358941.936224466,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2358851.7857142803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4049543.1913042087,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4049299.130434778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6733.318627451877,
            "unit": "ns/iter",
            "extra": "iterations: 104040\ncpu: 6733.111303344864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43824.92326004267,
            "unit": "ns/iter",
            "extra": "iterations: 15963\ncpu: 43821.111319927346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34636.99118604985,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 34633.87622149819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32070.008347860265,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 32067.805705898463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25858.92981092787,
            "unit": "ns/iter",
            "extra": "iterations: 27027\ncpu: 25857.53875753845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 204078.3351841045,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 204063.4424313264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 345962.72758787364,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 345934.27439326345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85233.28970480591,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85222.87143205554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85413.00824241592,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 85407.45454545437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85615.91605661304,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85612.72571986298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165214.61416763865,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165210.10625737748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 163384.83278918033,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 163380.9934701518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50980.59139154796,
            "unit": "ns/iter",
            "extra": "iterations: 13661\ncpu: 50976.985579386564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 252751.60347951142,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 252733.4903950736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 206846.2056047304,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 206819.88200589854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 206303.82318327326,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 206294.52780229258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 207131.79390893792,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 207106.26848019176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 366266.0596234348,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 366252.7719665204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1469833.8846959628,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1469716.9811320684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1215208.3437501441,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215130.729166668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1222953.7360139675,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1222892.3076923182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1241975.6307421403,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1241942.9328621938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 765300.078774562,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765255.4704595197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1206850.7607573213,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1206733.046471602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52189.54268247007,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 52185.97629165675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 257390.40845589965,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 257374.926470585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 209624.9841222328,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 209616.38705812112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 211432.63630862767,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211420.57488653628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 210484.17593985668,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 210479.21804511457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 377624.5874730113,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 377599.78401727654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1456313.6012526753,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1456298.3298538586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1216954.3778163027,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1216924.9566724591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1214871.092657318,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1214795.6293706405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1224586.6748252446,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1224515.7342657356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 770100.2266226715,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 770039.4939494052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1212769.278546678,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212648.7889273195 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392452312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18229.943834553356,
            "unit": "ns/iter",
            "extra": "iterations: 39989\ncpu: 18228.702893295656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 166190.52528200875,
            "unit": "ns/iter",
            "extra": "iterations: 5142\ncpu: 166179.98833138854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 312842.1201731944,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 312811.22338505957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 457207.7761352143,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 457181.4677930305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 609617.0139178844,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 609570.076548365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 609132.618999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609090.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 727101.6776989897,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 727059.8896769112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 860737.4748398323,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 860711.985361391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 968731.338877335,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 968681.2889812894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14428.305233638572,
            "unit": "ns/iter",
            "extra": "iterations: 48494\ncpu: 14427.502371427403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11775.008382285958,
            "unit": "ns/iter",
            "extra": "iterations: 59411\ncpu: 11774.3767989093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11734.073987199652,
            "unit": "ns/iter",
            "extra": "iterations: 59686\ncpu: 11733.495292028292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11749.658575073816,
            "unit": "ns/iter",
            "extra": "iterations: 59568\ncpu: 11749.335213537473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19878.821974215683,
            "unit": "ns/iter",
            "extra": "iterations: 35214\ncpu: 19877.673652524565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69162.49172078338,
            "unit": "ns/iter",
            "extra": "iterations: 12320\ncpu: 69158.62824675321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357939.7119565279,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 357923.41137123754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288087.7174206769,
            "unit": "ns/iter",
            "extra": "iterations: 2962\ncpu: 288071.471978393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288710.6848156765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 288692.2556645252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282819.6616965119,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 282802.25314777985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603693.7449999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603661.2000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5146350.882681511,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5146076.536312843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4153692.3794639944,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153508.928571438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4160391.500000011,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4160109.3749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4219461.440909423,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4219323.636363644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2346448.484771663,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2346306.8527918807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4047080.6140348758,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4046777.6315789404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15722557.283581082,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15722108.955223905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6823719.070000607,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6823422.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19621216.629631095,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19620464.8148148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75771.2930696682,
            "unit": "ns/iter",
            "extra": "iterations: 11226\ncpu: 75765.93621949024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 404103.3534117827,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 404078.4941176479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 321430.75037538435,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 321407.13213213265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 318655.14802383556,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 318638.73974645726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 314861.8817679832,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 314847.7348066291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583178.8579999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583161.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5236507.617978072,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5236179.775280863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4237861.90867603,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4237553.881278525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4235966.275229861,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4234559.633027512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4287191.975490201,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4286436.764705905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2386271.5449870084,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2386067.095115696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4105228.703539789,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4105010.176991161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16015595.388059627,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 16014076.119403034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7091229.36999961,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7090875.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 67389.30888765365,
            "unit": "ns/iter",
            "extra": "iterations: 12613\ncpu: 67381.68556251508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 354920.54511586885,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 354912.4586092728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282118.5085752006,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282103.7928759885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 291578.2860544,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 291565.7823129238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 285859.8900366633,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 285840.1866044656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553967.5600000465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553961.9000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5185922.177777987,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5185603.888888895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4174203.294642861,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4173995.982142869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4179235.0941699985,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4179039.9103139155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4226015.755656121,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4225826.696832574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2358941.936224466,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2358851.7857142803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4049543.1913042087,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4049299.130434778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6733.318627451877,
            "unit": "ns/iter",
            "extra": "iterations: 104040\ncpu: 6733.111303344864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43824.92326004267,
            "unit": "ns/iter",
            "extra": "iterations: 15963\ncpu: 43821.111319927346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34636.99118604985,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 34633.87622149819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32070.008347860265,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 32067.805705898463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25858.92981092787,
            "unit": "ns/iter",
            "extra": "iterations: 27027\ncpu: 25857.53875753845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 204078.3351841045,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 204063.4424313264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 345962.72758787364,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 345934.27439326345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85233.28970480591,
            "unit": "ns/iter",
            "extra": "iterations: 8198\ncpu: 85222.87143205554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85413.00824241592,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 85407.45454545437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85615.91605661304,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85612.72571986298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 165214.61416763865,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165210.10625737748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 163384.83278918033,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 163380.9934701518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50980.59139154796,
            "unit": "ns/iter",
            "extra": "iterations: 13661\ncpu: 50976.985579386564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 252751.60347951142,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 252733.4903950736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 206846.2056047304,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 206819.88200589854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 206303.82318327326,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 206294.52780229258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 207131.79390893792,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 207106.26848019176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 366266.0596234348,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 366252.7719665204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1469833.8846959628,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1469716.9811320684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1215208.3437501441,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215130.729166668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1222953.7360139675,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1222892.3076923182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1241975.6307421403,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1241942.9328621938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 765300.078774562,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765255.4704595197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1206850.7607573213,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1206733.046471602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52189.54268247007,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 52185.97629165675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 257390.40845589965,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 257374.926470585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 209624.9841222328,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 209616.38705812112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 211432.63630862767,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 211420.57488653628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 210484.17593985668,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 210479.21804511457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 377624.5874730113,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 377599.78401727654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1456313.6012526753,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1456298.3298538586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1216954.3778163027,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1216924.9566724591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1214871.092657318,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1214795.6293706405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1224586.6748252446,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1224515.7342657356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 770100.2266226715,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 770039.4939494052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1212769.278546678,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1212648.7889273195 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394178617,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17411.265650341684,
            "unit": "ns/iter",
            "extra": "iterations: 40079\ncpu: 17410.569125976195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 163565.70167985957,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 163560.43637767909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 309719.71041369665,
            "unit": "ns/iter",
            "extra": "iterations: 2804\ncpu: 309711.7689015691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 458413.5806962033,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 458405.0632911393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 609002.8154802904,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 608982.7919834137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 603180.2379999931,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603163.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 719864.4188767358,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 719836.0374414981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 836368.0658845236,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 836357.1299638981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 956792.9393004066,
            "unit": "ns/iter",
            "extra": "iterations: 972\ncpu: 956759.6707818933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14218.369231394745,
            "unit": "ns/iter",
            "extra": "iterations: 49167\ncpu: 14217.995810197885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11740.65316763571,
            "unit": "ns/iter",
            "extra": "iterations: 60029\ncpu: 11740.400473104659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11615.058277728396,
            "unit": "ns/iter",
            "extra": "iterations: 60246\ncpu: 11615.021744182202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11614.95295542757,
            "unit": "ns/iter",
            "extra": "iterations: 60262\ncpu: 11614.61451661082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19773.777355709026,
            "unit": "ns/iter",
            "extra": "iterations: 35276\ncpu: 19773.126204785145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69717.73094867582,
            "unit": "ns/iter",
            "extra": "iterations: 12217\ncpu: 69716.59981992302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357010.727310754,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 356991.4261815145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 292403.1070451534,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 292389.8084815326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290245.17329255585,
            "unit": "ns/iter",
            "extra": "iterations: 2943\ncpu: 290244.1046551144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285175.65030060255,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 285166.8670674679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 607069.3339999594,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607075.6000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5163026.327778021,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5162687.222222217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4177394.6306307153,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4177237.3873873763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4123861.6622222755,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4123744.888888881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4187524.4144142647,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4187357.657657665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2375264.227621394,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2375226.5984654776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4052593.279475947,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4052478.1659388617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15845951.530302431,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 15845340.909090923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7009455.190000154,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6997292.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19735339.092593282,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 19734961.11111112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 73513.7651647341,
            "unit": "ns/iter",
            "extra": "iterations: 9743\ncpu: 73511.17725546546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 408272.359582542,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 408250.4269449729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 318936.2556586292,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 318926.53061224514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 320096.30542055436,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 320085.60747663514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 316672.0929022728,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 316666.85247120046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 589957.6209999964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589923.5000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5223278.69101111,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5223144.94382023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4250170.17351606,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4249975.34246574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4181484.432432409,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4181355.855855852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4251442.269406231,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4251289.954337902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2410213.2187500126,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2410104.4270833186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4107604.2555067292,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4107576.2114537363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16131346.924243134,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16130550.000000067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7008417.660000532,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7008074.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66197.06868260397,
            "unit": "ns/iter",
            "extra": "iterations: 12798\ncpu: 66195.81184560052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 355976.17349894054,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 355974.3271221542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 281952.048893291,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 281942.5834159238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 289793.6152284275,
            "unit": "ns/iter",
            "extra": "iterations: 2955\ncpu: 289779.89847715735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 280780.10453649506,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 280769.855358318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 563331.2800000567,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563315.7999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5191340.631284743,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5191143.575418971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4203798.5585588105,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4203603.153153145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4140048.2133334056,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139989.333333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4199008.47747754,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4198859.459459451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2365871.9414757364,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2365750.1272264635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4060745.5589516535,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4060652.8384279544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6654.885268315281,
            "unit": "ns/iter",
            "extra": "iterations: 105324\ncpu: 6654.5269834035935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44607.22984693844,
            "unit": "ns/iter",
            "extra": "iterations: 15680\ncpu: 44605.84183673462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33529.61576150273,
            "unit": "ns/iter",
            "extra": "iterations: 21635\ncpu: 33528.03790154832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 34256.78395646134,
            "unit": "ns/iter",
            "extra": "iterations: 21130\ncpu: 34255.9725508758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 25736.3377162355,
            "unit": "ns/iter",
            "extra": "iterations: 27227\ncpu: 25735.541925294303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 198721.97178683104,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 198714.53405528478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 345747.7205736603,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 345737.3392680507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 84858.25966783275,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 84854.58843496238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 83637.83233747068,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83635.64770554514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 84943.0038839637,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84940.67241169921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 173213.76828061472,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 173215.14328063195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 163177.7331932875,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 163175.49019607806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 50867.3922684185,
            "unit": "ns/iter",
            "extra": "iterations: 13710\ncpu: 50865.908096279854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 258363.78347472407,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 258356.99004057495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 209169.54287423647,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 209163.2506722407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 204315.65030673298,
            "unit": "ns/iter",
            "extra": "iterations: 3423\ncpu: 204308.2383873828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 206704.8182085904,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 206697.52504419364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 375185.668454931,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 375166.2017167353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1468387.643605821,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1468314.675052417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1217248.4616724493,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1217196.1672473864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1202268.1061643516,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1202224.3150685001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1212394.2287696258,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1212404.8526863183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 766034.3132529445,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 766009.3099671529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1207885.3620690114,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1207834.4827586343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52581.88226012785,
            "unit": "ns/iter",
            "extra": "iterations: 13309\ncpu: 52578.94657750362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 259134.32384472943,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 259123.6598890946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 210066.86442712217,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 210068.62627474708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 208632.15462385296,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 208625.12637525855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 209853.9472422185,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 209851.82853716912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 379974.7322492962,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 379950.94850948395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1463728.1652719774,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1463702.510460228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1227050.8156523092,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1225872.3478260722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1200827.806506863,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1200798.6301369767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1218486.7172774582,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1218444.1535776511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 771310.0297685234,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 771290.8489525915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1206957.3758622184,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1206969.137931018 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}