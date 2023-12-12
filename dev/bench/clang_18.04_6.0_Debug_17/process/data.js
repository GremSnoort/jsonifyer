window.BENCHMARK_DATA = {
  "lastUpdate": 1702392459956,
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
      }
    ]
  }
}