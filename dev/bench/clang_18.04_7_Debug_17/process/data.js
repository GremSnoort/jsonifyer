window.BENCHMARK_DATA = {
  "lastUpdate": 1702394220111,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-7 18.04 Debug c++-17": [
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
        "date": 1702392445081,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18297.960873215823,
            "unit": "ns/iter",
            "extra": "iterations: 35730\ncpu: 18295.930590540163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 167678.74571259282,
            "unit": "ns/iter",
            "extra": "iterations: 5073\ncpu: 167662.68480189238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 318273.82188761735,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 318245.5747337495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 466413.2168545242,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 466377.6704240471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 516185.6799999782,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516017.80000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 618324.149999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618265.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 738279.320256183,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 738246.8374699757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 864983.2810760926,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 864913.1725417447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 974329.5842105525,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 974310.8421052635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14403.223684210701,
            "unit": "ns/iter",
            "extra": "iterations: 48564\ncpu: 14402.582159624435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11943.015160481847,
            "unit": "ns/iter",
            "extra": "iterations: 57452\ncpu: 11942.795725127047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11896.500714285097,
            "unit": "ns/iter",
            "extra": "iterations: 58800\ncpu: 11896.256802721076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11818.051854227853,
            "unit": "ns/iter",
            "extra": "iterations: 59243\ncpu: 11818.04094998564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20493.866169591944,
            "unit": "ns/iter",
            "extra": "iterations: 34200\ncpu: 20493.067251462006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 68486.6920295669,
            "unit": "ns/iter",
            "extra": "iterations: 12446\ncpu: 68486.62220793824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 374399.54330709,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 374390.37620297476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 293755.2365331481,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 293753.7983425422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 289700.6328898101,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 289695.80348004063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 287431.20243325806,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 287429.6045961472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 624290.3750000438,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624252.2000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5185020.882681695,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5184788.268156421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4249390.86818199,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4249253.181818185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4230072.5610860195,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4230017.647058828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4209718.248868865,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4209633.031674205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2458241.51595755,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2458182.9787234073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4108382.7566370247,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4108287.168141589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 16206191.292308003,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16205629.230769219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7097375.650000117,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7097020.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 20217126.576922666,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 20216684.6153846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 74265.97411229322,
            "unit": "ns/iter",
            "extra": "iterations: 11434\ncpu: 74265.18278817568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 400891.8348151685,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 400875.33926064457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 332786.01982894033,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 332773.6391912924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 329392.1392209734,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 329385.15233320283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 321192.08752817527,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 321182.8700225398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 628621.9219999794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628621.1000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5274182.711864431,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 5274106.214689303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4294665.953917211,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4294500.460829516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4297357.105504618,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4297315.596330278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4251888.365297003,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4251779.908675785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2512581.9032258345,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2512553.763440871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4153781.2946427064,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4153715.6249999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16519842.476923084,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16519210.769230817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7161274.569999704,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7161261.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 65645.42451582917,
            "unit": "ns/iter",
            "extra": "iterations: 12857\ncpu: 65645.3371704128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 376720.33758241555,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 376713.4065934089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 290532.968270201,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 290518.1508017754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 285356.9856235456,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285350.7856904035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 283288.1292358722,
            "unit": "ns/iter",
            "extra": "iterations: 3010\ncpu: 283278.8039867113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 585660.2119999934,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585660.3999999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5248429.337078707,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 5248262.359550573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4262550.708333219,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 4262464.062499971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4267442.766055152,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4267373.394495401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4239747.736363597,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4239645.909090906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2461781.748010632,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2461778.249336857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4151944.6088889507,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4151793.3333333363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 7134.55365087262,
            "unit": "ns/iter",
            "extra": "iterations: 104071\ncpu: 7134.5456467219365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44392.06487482216,
            "unit": "ns/iter",
            "extra": "iterations: 15738\ncpu: 44391.41568178914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34912.842547437554,
            "unit": "ns/iter",
            "extra": "iterations: 20711\ncpu: 34912.775819612754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 34842.32843444305,
            "unit": "ns/iter",
            "extra": "iterations: 20753\ncpu: 34841.60844215313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 26167.581845291526,
            "unit": "ns/iter",
            "extra": "iterations: 28169\ncpu: 26167.18733359379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 202062.41908593834,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 202062.1155504472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 351093.4913792934,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 351092.79918863694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 86192.83286223232,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 86189.34496743341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 86430.90307445507,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 86427.91702679345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 86256.13385923304,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 86253.77788734171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 179859.82751540092,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 179850.66735113066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 166729.89187263913,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 166729.70532319657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 53404.33412177073,
            "unit": "ns/iter",
            "extra": "iterations: 13106\ncpu: 53400.96139172873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 259254.40770940387,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 259250.37064492522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 209757.38923765393,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 209748.4603886398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 209272.65203008027,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 209267.24812030318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 209500.9895020802,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 209496.2507498488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 379068.98913633614,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 379064.3128734403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1485155.1961620706,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1485096.5884861404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1251331.0733450816,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1251294.812164592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1249296.0018083774,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1249267.992766724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1231107.0687828953,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1231073.7213403878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 788001.1565316021,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 787980.1801801835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1225537.8618880962,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1225495.4545454767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 52620.665904937196,
            "unit": "ns/iter",
            "extra": "iterations: 13128\ncpu: 52619.70597196855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 259896.65494261234,
            "unit": "ns/iter",
            "extra": "iterations: 2701\ncpu: 259885.56090336907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 208696.27470236062,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 208690.74404762007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 209672.69074970865,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 209661.6082224903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 209845.25471417443,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 209836.66566896104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 377909.9876144395,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 377894.72267097625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1478959.898305226,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1478885.8050847477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1248239.5704100765,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1248178.074866313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1242951.9200711811,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1242927.1758437052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1235074.9680285158,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1235049.200710495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 786102.5575620616,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 786086.1173815018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1222185.3106456148,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1222148.5165794087 ns\nthreads: 1"
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
        "date": 1702394218468,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18414.463255035917,
            "unit": "ns/iter",
            "extra": "iterations: 38359\ncpu: 18413.373654162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 169412.29081427326,
            "unit": "ns/iter",
            "extra": "iterations: 4986\ncpu: 169407.66145206577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 319414.07734804775,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 319403.7569060774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 469630.64964691666,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 469629.98370450863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 501079.2100000572,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501057.40000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 625877.4660000199,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625846.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 747811.7930477104,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 747811.2368633791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 882241.5962441042,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 882232.7699530522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 987194.8946808632,
            "unit": "ns/iter",
            "extra": "iterations: 940\ncpu: 987182.0212765954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14723.036460843456,
            "unit": "ns/iter",
            "extra": "iterations: 47695\ncpu: 14722.998217842536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12244.433271659587,
            "unit": "ns/iter",
            "extra": "iterations: 57292\ncpu: 12244.358723731051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12146.683718745924,
            "unit": "ns/iter",
            "extra": "iterations: 57471\ncpu: 12146.068451914893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12078.292698062429,
            "unit": "ns/iter",
            "extra": "iterations: 58012\ncpu: 12077.839067779078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20707.36644664094,
            "unit": "ns/iter",
            "extra": "iterations: 33481\ncpu: 20706.31701562081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69593.81772004344,
            "unit": "ns/iter",
            "extra": "iterations: 12009\ncpu: 69589.77433591463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 370849.22333041584,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 370827.1465741539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 299792.3751772937,
            "unit": "ns/iter",
            "extra": "iterations: 2820\ncpu: 299781.1347517735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 299898.925026392,
            "unit": "ns/iter",
            "extra": "iterations: 2841\ncpu: 299888.313973953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 300714.53385051596,
            "unit": "ns/iter",
            "extra": "iterations: 2836\ncpu: 300705.32440056483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 601302.6759999321,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601251.399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5290064.874285625,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 5289961.142857139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4330156.093023064,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4329833.488372094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4289062.308755746,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4288750.230414745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4279817.640553086,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4279669.124423963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2495339.1989247734,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2495280.107526877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4189277.139639794,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4188870.2702702708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 16322834.107693149,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16322184.615384627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7147666.659999459,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7147383.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 20258895.76923025,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 20257713.461538434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 78254.75247706949,
            "unit": "ns/iter",
            "extra": "iterations: 10900\ncpu: 78250.64220183511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 408309.7143538465,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 408288.1258941348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 332071.2661478536,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 332057.6653696517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 333878.3009330881,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 333850.4276827357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 331011.0571870206,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 330993.50850077404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 597724.8379999764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597707.2000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5366165.563218366,
            "unit": "ns/iter",
            "extra": "iterations: 174\ncpu: 5365841.954023018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4395969.768867597,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4395398.113207564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4362531.341121637,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4362276.63551402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4322203.453704084,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4321972.222222221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2517485.344173527,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2517324.390243899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4235815.649999805,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4235544.545454543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16608519.892308602,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16607467.692307737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7265163.1400003685,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7264796.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68488.71483075275,
            "unit": "ns/iter",
            "extra": "iterations: 12319\ncpu: 68484.00844224423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 385277.5399103432,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 385261.7040358744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 293758.0416953885,
            "unit": "ns/iter",
            "extra": "iterations: 2902\ncpu: 293741.86767746235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 290749.8017531955,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 290731.9959541468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 288110.1177462932,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 288090.14844804344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556598.2279999844,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556550.3999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5339437.714285071,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 5339146.857142834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4347254.682242956,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4346909.345794406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4343749.437209205,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4343540.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4295562.61290323,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4295308.7557603745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2486978.6193028204,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2486860.3217158164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4198035.283784029,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4197829.2792792665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6625.8610822547425,
            "unit": "ns/iter",
            "extra": "iterations: 105890\ncpu: 6625.837189536322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44985.92599729614,
            "unit": "ns/iter",
            "extra": "iterations: 15567\ncpu: 44984.26157898139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 35388.26241600553,
            "unit": "ns/iter",
            "extra": "iterations: 19793\ncpu: 35385.55044712762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32972.010664403104,
            "unit": "ns/iter",
            "extra": "iterations: 21192\ncpu: 32970.87108342774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 27007.532763749467,
            "unit": "ns/iter",
            "extra": "iterations: 26569\ncpu: 27005.788701118054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 196275.60920501765,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 196261.89679219047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 354043.19494944625,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 354014.5959595961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 88103.41895292542,
            "unit": "ns/iter",
            "extra": "iterations: 7946\ncpu: 88100.85577649101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 87267.466924607,
            "unit": "ns/iter",
            "extra": "iterations: 8012\ncpu: 87267.13679480765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 86855.86324041414,
            "unit": "ns/iter",
            "extra": "iterations: 8036\ncpu: 86851.29417620657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 181455.59189468625,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 181442.95302013497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 171186.61805053797,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 171172.12996389883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 53780.68276712114,
            "unit": "ns/iter",
            "extra": "iterations: 12981\ncpu: 53777.25907094925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 259601.24499627826,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 259587.87991104735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 210466.21475705854,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 210452.12957408483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 212296.07305244065,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 212287.84480145422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 213210.54487372597,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 213194.6759963477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 376571.86292498437,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 376557.47436589305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1508688.8394004768,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1508614.3468950763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1263881.1775362696,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1263858.514492731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1262289.1191335265,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1262200.722021661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1250600.2156862966,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1250532.6203208514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 799910.3180778596,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 799889.2448512705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1243461.3368985523,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1243452.0499108823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 53398.23595505649,
            "unit": "ns/iter",
            "extra": "iterations: 13083\ncpu: 53397.15661545497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 260932.64894011608,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 260924.91632577547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 210590.22530954695,
            "unit": "ns/iter",
            "extra": "iterations: 3311\ncpu: 210584.14376321537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 212255.84009691764,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 212249.21259842577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 211125.47561346943,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 211127.47652226646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 379831.69463995524,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 379799.62100703764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1500438.954838657,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1500452.6881720417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1266593.6400742824,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1266555.8441558462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1258594.5727109322,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1258579.8922800561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1260884.5125898595,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1260858.4532374025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 800730.0643677663,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 800711.9540229919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1243516.9090910535,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1243525.6684491932 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}