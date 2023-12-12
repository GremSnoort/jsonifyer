window.BENCHMARK_DATA = {
  "lastUpdate": 1702392455055,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-9 20.04 Debug c++-17": [
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
        "date": 1702392453894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8286.774924201707,
            "unit": "ns/iter",
            "extra": "iterations: 84105\ncpu: 8286.81647940075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97843.15919770757,
            "unit": "ns/iter",
            "extra": "iterations: 8725\ncpu: 97839.04871060171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 191873.9923797237,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 191874.96189854128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283849.5166557627,
            "unit": "ns/iter",
            "extra": "iterations: 3062\ncpu: 283839.1900718484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 369146.97666379146,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 369133.3621434742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 458594.7367303876,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 458576.00849256886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553930.3238457198,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 553909.9936748894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 514785.72700000316,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514745.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 586236.7960000938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586183.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6329.342517049763,
            "unit": "ns/iter",
            "extra": "iterations: 110558\ncpu: 6329.311311709697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5108.377386820409,
            "unit": "ns/iter",
            "extra": "iterations: 136531\ncpu: 5108.056045879686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5159.317071910774,
            "unit": "ns/iter",
            "extra": "iterations: 135556\ncpu: 5159.041281831864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5155.972266133292,
            "unit": "ns/iter",
            "extra": "iterations: 136007\ncpu: 5155.56037556891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9448.895751121727,
            "unit": "ns/iter",
            "extra": "iterations: 73996\ncpu: 9448.829666468437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48370.806370542836,
            "unit": "ns/iter",
            "extra": "iterations: 17110\ncpu: 48367.83752191703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 202908.94482758382,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 202900.97502972625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 164643.602821794,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 164633.74565133365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 165331.35649489696,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 165320.7102875897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 165789.3005825235,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 165777.00970873766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 364839.0424905416,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 364817.66933109064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3053545.2491909075,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3053363.106796111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2477746.8809524993,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2477586.5079365056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2472588.25661375,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2472457.6719576786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2486643.8909572735,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2486608.2446808466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1487234.4646303037,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1487165.1125401936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2407765.6295337877,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2407606.2176165786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10422972.833332684,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10422567.647058818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6072538.857142274,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6072142.857142845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12107848.647727596,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12106992.045454564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48683.28173008407,
            "unit": "ns/iter",
            "extra": "iterations: 16924\ncpu: 48680.902859844064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 207916.1326060564,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 207901.76969696995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167081.60663416138,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 167071.5707317072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 165659.58291359578,
            "unit": "ns/iter",
            "extra": "iterations: 5162\ncpu: 165649.1476172021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169185.1269809799,
            "unit": "ns/iter",
            "extra": "iterations: 5048\ncpu: 169178.2488114109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 377507.1264616851,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 377484.4521437827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3028680.7207792443,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3028501.623376616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2531551.6042779405,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2531402.139037433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2497694.805333291,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2497624.266666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2502341.6229948774,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2502266.5775401164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1483049.7140575228,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1482976.198083066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2417886.5974026727,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2417878.9610389587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10547203.37499978,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10546634.61538458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5975821.185897664,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5975612.820512821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47689.10750843181,
            "unit": "ns/iter",
            "extra": "iterations: 17487\ncpu: 47689.00897809801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 204729.64851843507,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 204724.28330522685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 167567.34531952467,
            "unit": "ns/iter",
            "extra": "iterations: 5117\ncpu: 167561.6963064302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 160638.04358444503,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 160625.19256058687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164127.1624951731,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 164126.53061224462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 361272.6545530607,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 361267.9615705917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3079094.888888594,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3078907.189542495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2507689.206989318,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2507597.849462374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2504868.1016045143,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2504834.2245989284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2512731.7628032863,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2512665.229110517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1490263.0367413193,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1490216.293929713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2450907.782722496,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2450900.785340304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2957.4566702656894,
            "unit": "ns/iter",
            "extra": "iterations: 237112\ncpu: 2957.358547859253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21188.16306525037,
            "unit": "ns/iter",
            "extra": "iterations: 32950\ncpu: 21187.81183611526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15964.978931012482,
            "unit": "ns/iter",
            "extra": "iterations: 43761\ncpu: 15964.580334087366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16206.952378746064,
            "unit": "ns/iter",
            "extra": "iterations: 43195\ncpu: 16206.866535478619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12381.177770710608,
            "unit": "ns/iter",
            "extra": "iterations: 56601\ncpu: 12380.869595943552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86278.15814068202,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 86276.5002459417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 195359.15222222556,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 195355.83333333445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48203.14137242568,
            "unit": "ns/iter",
            "extra": "iterations: 14529\ncpu: 48201.72757932434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48448.94620689423,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 48449.179310345135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48263.082791534005,
            "unit": "ns/iter",
            "extra": "iterations: 14458\ncpu: 48262.788767464786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 101437.10487379487,
            "unit": "ns/iter",
            "extra": "iterations: 6894\ncpu: 101434.56628952663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90767.07845934239,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 90763.18246660582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24654.981830347646,
            "unit": "ns/iter",
            "extra": "iterations: 28399\ncpu: 24654.586429099803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 120174.26654095978,
            "unit": "ns/iter",
            "extra": "iterations: 5834\ncpu: 120170.7233459034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 97095.30501663193,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 97093.73614190679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 96514.06214612219,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 96510.06767021045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98170.29135629242,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98167.92691496987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 189173.88690478232,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 189168.75000000102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 815469.8137368425,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 815448.1955762465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 696226.2892157059,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 696221.2745098161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 689055.1910331803,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 689036.842105262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 691054.5299901294,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 691051.0324483683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 433720.2523248716,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 433712.3992560425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 673922.3540669923,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 673912.4401913899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25007.538086249548,
            "unit": "ns/iter",
            "extra": "iterations: 28081\ncpu: 25006.919269256643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 120381.73090276573,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 120374.16666666653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 98769.30721446328,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 98764.1394889175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96573.66395701266,
            "unit": "ns/iter",
            "extra": "iterations: 7258\ncpu: 96565.4863598788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 99122.29847156334,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 99116.03453155902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 190632.32933150505,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 190627.96725784361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 811408.0718424782,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 811411.2398609428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 689075.3294002117,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 689037.6597836708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 687137.5552297392,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 687121.1143695008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 685363.1913640498,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 685314.7203140206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 435778.5944099977,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 435751.6770186354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 672923.6628352372,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 672866.9540229943 ns\nthreads: 1"
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
        "date": 1702392453894,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8286.774924201707,
            "unit": "ns/iter",
            "extra": "iterations: 84105\ncpu: 8286.81647940075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97843.15919770757,
            "unit": "ns/iter",
            "extra": "iterations: 8725\ncpu: 97839.04871060171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 191873.9923797237,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 191874.96189854128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283849.5166557627,
            "unit": "ns/iter",
            "extra": "iterations: 3062\ncpu: 283839.1900718484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 369146.97666379146,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 369133.3621434742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 458594.7367303876,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 458576.00849256886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 553930.3238457198,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 553909.9936748894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 514785.72700000316,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514745.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 586236.7960000938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586183.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6329.342517049763,
            "unit": "ns/iter",
            "extra": "iterations: 110558\ncpu: 6329.311311709697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5108.377386820409,
            "unit": "ns/iter",
            "extra": "iterations: 136531\ncpu: 5108.056045879686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5159.317071910774,
            "unit": "ns/iter",
            "extra": "iterations: 135556\ncpu: 5159.041281831864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5155.972266133292,
            "unit": "ns/iter",
            "extra": "iterations: 136007\ncpu: 5155.56037556891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9448.895751121727,
            "unit": "ns/iter",
            "extra": "iterations: 73996\ncpu: 9448.829666468437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48370.806370542836,
            "unit": "ns/iter",
            "extra": "iterations: 17110\ncpu: 48367.83752191703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 202908.94482758382,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 202900.97502972625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 164643.602821794,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 164633.74565133365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 165331.35649489696,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 165320.7102875897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 165789.3005825235,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 165777.00970873766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 364839.0424905416,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 364817.66933109064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3053545.2491909075,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3053363.106796111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2477746.8809524993,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2477586.5079365056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2472588.25661375,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2472457.6719576786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2486643.8909572735,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2486608.2446808466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1487234.4646303037,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1487165.1125401936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2407765.6295337877,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2407606.2176165786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10422972.833332684,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10422567.647058818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6072538.857142274,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6072142.857142845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12107848.647727596,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12106992.045454564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 48683.28173008407,
            "unit": "ns/iter",
            "extra": "iterations: 16924\ncpu: 48680.902859844064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 207916.1326060564,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 207901.76969696995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 167081.60663416138,
            "unit": "ns/iter",
            "extra": "iterations: 5125\ncpu: 167071.5707317072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 165659.58291359578,
            "unit": "ns/iter",
            "extra": "iterations: 5162\ncpu: 165649.1476172021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 169185.1269809799,
            "unit": "ns/iter",
            "extra": "iterations: 5048\ncpu: 169178.2488114109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 377507.1264616851,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 377484.4521437827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3028680.7207792443,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3028501.623376616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2531551.6042779405,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2531402.139037433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2497694.805333291,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2497624.266666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2502341.6229948774,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2502266.5775401164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1483049.7140575228,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1482976.198083066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2417886.5974026727,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2417878.9610389587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10547203.37499978,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 10546634.61538458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5975821.185897664,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5975612.820512821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47689.10750843181,
            "unit": "ns/iter",
            "extra": "iterations: 17487\ncpu: 47689.00897809801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 204729.64851843507,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 204724.28330522685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 167567.34531952467,
            "unit": "ns/iter",
            "extra": "iterations: 5117\ncpu: 167561.6963064302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 160638.04358444503,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 160625.19256058687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 164127.1624951731,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 164126.53061224462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 361272.6545530607,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 361267.9615705917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3079094.888888594,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3078907.189542495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2507689.206989318,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2507597.849462374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2504868.1016045143,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2504834.2245989284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2512731.7628032863,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2512665.229110517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1490263.0367413193,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1490216.293929713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2450907.782722496,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2450900.785340304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2957.4566702656894,
            "unit": "ns/iter",
            "extra": "iterations: 237112\ncpu: 2957.358547859253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21188.16306525037,
            "unit": "ns/iter",
            "extra": "iterations: 32950\ncpu: 21187.81183611526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15964.978931012482,
            "unit": "ns/iter",
            "extra": "iterations: 43761\ncpu: 15964.580334087366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16206.952378746064,
            "unit": "ns/iter",
            "extra": "iterations: 43195\ncpu: 16206.866535478619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12381.177770710608,
            "unit": "ns/iter",
            "extra": "iterations: 56601\ncpu: 12380.869595943552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 86278.15814068202,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 86276.5002459417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 195359.15222222556,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 195355.83333333445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48203.14137242568,
            "unit": "ns/iter",
            "extra": "iterations: 14529\ncpu: 48201.72757932434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48448.94620689423,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 48449.179310345135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48263.082791534005,
            "unit": "ns/iter",
            "extra": "iterations: 14458\ncpu: 48262.788767464786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 101437.10487379487,
            "unit": "ns/iter",
            "extra": "iterations: 6894\ncpu: 101434.56628952663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90767.07845934239,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 90763.18246660582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24654.981830347646,
            "unit": "ns/iter",
            "extra": "iterations: 28399\ncpu: 24654.586429099803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 120174.26654095978,
            "unit": "ns/iter",
            "extra": "iterations: 5834\ncpu: 120170.7233459034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 97095.30501663193,
            "unit": "ns/iter",
            "extra": "iterations: 7216\ncpu: 97093.73614190679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 96514.06214612219,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 96510.06767021045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98170.29135629242,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98167.92691496987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 189173.88690478232,
            "unit": "ns/iter",
            "extra": "iterations: 3696\ncpu: 189168.75000000102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 815469.8137368425,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 815448.1955762465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 696226.2892157059,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 696221.2745098161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 689055.1910331803,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 689036.842105262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 691054.5299901294,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 691051.0324483683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 433720.2523248716,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 433712.3992560425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 673922.3540669923,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 673912.4401913899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 25007.538086249548,
            "unit": "ns/iter",
            "extra": "iterations: 28081\ncpu: 25006.919269256643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 120381.73090276573,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 120374.16666666653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 98769.30721446328,
            "unit": "ns/iter",
            "extra": "iterations: 7083\ncpu: 98764.1394889175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96573.66395701266,
            "unit": "ns/iter",
            "extra": "iterations: 7258\ncpu: 96565.4863598788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 99122.29847156334,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 99116.03453155902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 190632.32933150505,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 190627.96725784361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 811408.0718424782,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 811411.2398609428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 689075.3294002117,
            "unit": "ns/iter",
            "extra": "iterations: 1017\ncpu: 689037.6597836708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 687137.5552297392,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 687121.1143695008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 685363.1913640498,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 685314.7203140206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 435778.5944099977,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 435751.6770186354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 672923.6628352372,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 672866.9540229943 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}